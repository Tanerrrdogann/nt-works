from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status
from sqlalchemy import desc, select, text
from sqlalchemy.orm import Session

from app.core.settings import get_settings
from app.core.celery_client import celery_app
from app.core.database import get_db
from app.models import ProcessingMetric, TranscriptSegment, Video, VideoDetection, VideoEvent, VideoJob, Zone
from app.schemas import (
    CleanupResponse,
    ProcessingMetricResponse,
    StorageReportResponse,
    TranscriptSegmentResponse,
    VideoDetectionResponse,
    VideoEventResponse,
    VideoJobResponse,
    VideoResponse,
    VideoUploadResponse,
    ZoneCreateRequest,
    ZoneResponse,
)
from app.services.storage_admin import cleanup_temp_files, storage_report
from app.services.storage import store_upload, validate_video_upload

router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "video-analytics-api"}


@router.get("/api/platform/status")
def platform_status() -> dict[str, str]:
    return {
        "name": "video-analytics-platform",
        "processing_mode": "asynchronous",
        "queue": "celery",
    }


@router.post(
    "/api/videos/upload",
    response_model=VideoUploadResponse,
    status_code=status.HTTP_201_CREATED,
)
async def upload_video(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
) -> VideoUploadResponse:
    try:
        validate_video_upload(file)
        storage_path, file_size = await store_upload(file)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc

    video = Video(
        original_filename=file.filename or "upload.mp4",
        storage_path=storage_path,
        content_type=file.content_type or "video/mp4",
        file_size=file_size,
    )
    db.add(video)
    db.flush()

    settings = get_settings()
    job = VideoJob(
        video_id=video.id,
        status="PENDING",
        sampling_profile=settings.default_sampling_profile,
        progress_percentage=0,
    )
    db.add(job)
    db.commit()
    db.refresh(job)

    celery_app.send_task("app.tasks.process_video", args=[job.id])

    job.status = "PROCESSING"
    db.commit()

    return VideoUploadResponse(video_id=video.id, job_id=job.id, status=job.status)


@router.get("/api/videos", response_model=list[VideoResponse])
def list_videos(db: Session = Depends(get_db)) -> list[Video]:
    return list(db.scalars(select(Video).order_by(desc(Video.created_at))).all())


@router.get("/api/videos/{video_id}", response_model=VideoResponse)
def get_video(video_id: int, db: Session = Depends(get_db)) -> Video:
    video = db.get(Video, video_id)
    if video is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Video not found.")
    return video


@router.get("/api/videos/{video_id}/jobs", response_model=list[VideoJobResponse])
def list_video_jobs(video_id: int, db: Session = Depends(get_db)) -> list[VideoJob]:
    return list(
        db.scalars(
            select(VideoJob)
            .where(VideoJob.video_id == video_id)
            .order_by(desc(VideoJob.created_at), desc(VideoJob.id))
        ).all()
    )


@router.get("/api/jobs/{job_id}", response_model=VideoJobResponse)
def get_job(job_id: int, db: Session = Depends(get_db)) -> VideoJob:
    job = db.get(VideoJob, job_id)
    if job is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found.")
    return job


@router.post("/api/jobs/{job_id}/cancel", response_model=VideoJobResponse)
def cancel_job(job_id: int, db: Session = Depends(get_db)) -> VideoJob:
    job = db.get(VideoJob, job_id)
    if job is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found.")
    if job.status in {"COMPLETED", "FAILED", "CANCELLED"}:
        return job
    job.status = "CANCELLED"
    job.completed_at = None
    job.error_message = "Cancelled by user."
    job.progress_percentage = min(job.progress_percentage, 99)
    db.commit()
    db.refresh(job)
    return job


@router.post("/api/videos/{video_id}/reprocess", response_model=VideoUploadResponse, status_code=status.HTTP_201_CREATED)
def reprocess_video(video_id: int, db: Session = Depends(get_db)) -> VideoUploadResponse:
    video = db.get(Video, video_id)
    if video is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Video not found.")

    ensure_transcript_schema(db)
    db.query(VideoEvent).filter(VideoEvent.video_id == video_id).delete(synchronize_session=False)
    db.query(VideoDetection).filter(VideoDetection.video_id == video_id).delete(synchronize_session=False)
    db.query(TranscriptSegment).filter(TranscriptSegment.video_id == video_id).delete(synchronize_session=False)
    old_job_ids = [row[0] for row in db.query(VideoJob.id).filter(VideoJob.video_id == video_id).all()]
    if old_job_ids:
        db.query(ProcessingMetric).filter(ProcessingMetric.job_id.in_(old_job_ids)).delete(synchronize_session=False)

    settings = get_settings()
    job = VideoJob(
        video_id=video_id,
        status="PENDING",
        sampling_profile=settings.default_sampling_profile,
        progress_percentage=0,
    )
    db.add(job)
    db.commit()
    db.refresh(job)

    celery_app.send_task("app.tasks.process_video", args=[job.id])
    job.status = "PROCESSING"
    db.commit()
    db.refresh(job)
    return VideoUploadResponse(video_id=video_id, job_id=job.id, status=job.status)


@router.get("/api/jobs/{job_id}/metrics", response_model=list[ProcessingMetricResponse])
def list_job_metrics(job_id: int, db: Session = Depends(get_db)) -> list[ProcessingMetric]:
    return list(
        db.scalars(
            select(ProcessingMetric)
            .where(ProcessingMetric.job_id == job_id)
            .order_by(desc(ProcessingMetric.created_at))
        ).all()
    )


@router.get("/api/videos/{video_id}/detections", response_model=list[VideoDetectionResponse])
def list_video_detections(video_id: int, db: Session = Depends(get_db)) -> list[VideoDetection]:
    return list(
        db.scalars(
            select(VideoDetection)
            .where(VideoDetection.video_id == video_id)
            .order_by(VideoDetection.timestamp_seconds)
        ).all()
    )


@router.get("/api/videos/{video_id}/events", response_model=list[VideoEventResponse])
def list_video_events(video_id: int, db: Session = Depends(get_db)) -> list[VideoEvent]:
    return list(
        db.scalars(
            select(VideoEvent)
            .where(VideoEvent.video_id == video_id)
            .order_by(VideoEvent.timestamp_seconds)
        ).all()
    )


@router.get("/api/videos/{video_id}/transcript", response_model=list[TranscriptSegmentResponse])
def list_video_transcript(video_id: int, db: Session = Depends(get_db)) -> list[TranscriptSegment]:
    ensure_transcript_schema(db)
    return list(
        db.scalars(
            select(TranscriptSegment)
            .where(TranscriptSegment.video_id == video_id)
            .order_by(TranscriptSegment.start_seconds)
        ).all()
    )


@router.post("/api/videos/{video_id}/zones", response_model=ZoneResponse, status_code=status.HTTP_201_CREATED)
def create_zone(
    video_id: int,
    payload: ZoneCreateRequest,
    db: Session = Depends(get_db),
) -> Zone:
    video = db.get(Video, video_id)
    if video is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Video not found.")

    zone = Zone(
        video_id=video_id,
        name=payload.name,
        shape_json={
            "type": "rectangle",
            "x": payload.x,
            "y": payload.y,
            "width": payload.width,
            "height": payload.height,
        },
    )
    db.add(zone)
    db.commit()
    db.refresh(zone)
    return zone


@router.get("/api/videos/{video_id}/zones", response_model=list[ZoneResponse])
def list_zones(video_id: int, db: Session = Depends(get_db)) -> list[Zone]:
    return list(db.scalars(select(Zone).where(Zone.video_id == video_id).order_by(Zone.created_at)).all())


@router.delete("/api/zones/{zone_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_zone(zone_id: int, db: Session = Depends(get_db)) -> None:
    zone = db.get(Zone, zone_id)
    if zone is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Zone not found.")
    db.delete(zone)
    db.commit()


@router.post("/api/admin/cleanup/run", response_model=CleanupResponse)
def run_cleanup(db: Session = Depends(get_db)) -> dict[str, int | str]:
    settings = get_settings()
    referenced_snapshots = {
        row[0]
        for row in db.query(VideoEvent.snapshot_path)
        .filter(VideoEvent.snapshot_path.isnot(None))
        .all()
    }
    result = cleanup_temp_files(settings.cleanup_temp_max_age_days, referenced_snapshots)
    return result


@router.get("/api/admin/storage/report", response_model=StorageReportResponse)
def get_storage_report() -> dict[str, dict[str, int] | int]:
    return storage_report()


def ensure_transcript_schema(db: Session) -> None:
    db.execute(
        text(
            """
            CREATE TABLE IF NOT EXISTS transcript_segments (
                id BIGSERIAL PRIMARY KEY,
                video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
                job_id BIGINT NOT NULL REFERENCES video_jobs(id) ON DELETE CASCADE,
                start_seconds NUMERIC(12, 3) NOT NULL,
                end_seconds NUMERIC(12, 3) NOT NULL,
                text TEXT NOT NULL,
                language TEXT,
                confidence NUMERIC(6, 5),
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
            """
        )
    )
    db.execute(
        text(
            "CREATE INDEX IF NOT EXISTS idx_transcript_segments_video_start ON transcript_segments(video_id, start_seconds)"
        )
    )
    db.commit()
