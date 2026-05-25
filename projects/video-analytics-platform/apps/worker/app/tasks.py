from pathlib import Path
from socket import gethostname
from datetime import datetime, timedelta, timezone

from sqlalchemy import text

from app.celery_app import celery_app
from app.database import SessionLocal
from app.settings import get_settings
from app.video_pipeline import process_video_job


@celery_app.task(name="app.tasks.process_video")
def process_video(job_id: int) -> dict[str, str | int]:
    with SessionLocal() as db:
        try:
            db.execute(
                text(
                    """
                    UPDATE video_jobs
                    SET status = 'PROCESSING',
                        started_at = COALESCE(started_at, NOW()),
                        worker_name = :worker_name,
                        progress_percentage = GREATEST(progress_percentage, 5),
                        error_message = NULL
                    WHERE id = :job_id
                    """
                ),
                {"job_id": job_id, "worker_name": gethostname()},
            )
            db.commit()

            metrics = process_video_job(db, job_id)

            db.execute(
                text(
                    """
                    UPDATE video_jobs
                    SET status = 'COMPLETED',
                        completed_at = NOW(),
                        progress_percentage = 100
                    WHERE id = :job_id
                    """
                ),
                {"job_id": job_id},
            )
            db.commit()
            return {
                "job_id": job_id,
                "status": "COMPLETED",
                "frames_processed": metrics.frames_processed,
                "events_count": metrics.events_count,
            }
        except Exception as exc:
            db.rollback()
            current_status = db.execute(
                text("SELECT status FROM video_jobs WHERE id = :job_id"),
                {"job_id": job_id},
            ).scalar_one_or_none()
            if current_status == "CANCELLED":
                db.execute(
                    text(
                        """
                        UPDATE video_jobs
                        SET completed_at = NOW(),
                            error_message = 'Cancelled by user.'
                        WHERE id = :job_id
                        """
                    ),
                    {"job_id": job_id},
                )
                db.commit()
                return {"job_id": job_id, "status": "CANCELLED"}
            db.execute(
                text(
                    """
                    UPDATE video_jobs
                    SET status = 'FAILED',
                        completed_at = NOW(),
                        error_message = :error_message
                    WHERE id = :job_id
                    """
                ),
                {"job_id": job_id, "error_message": str(exc)[:2000]},
            )
            db.commit()
            raise


@celery_app.task(name="app.tasks.cleanup_temporary_artifacts")
def cleanup_temporary_artifacts() -> dict[str, int | str]:
    settings = get_settings()
    temp_dir = Path(settings.temp_storage_dir)
    temp_dir.mkdir(parents=True, exist_ok=True)
    cutoff = datetime.now(timezone.utc) - timedelta(days=settings.cleanup_temp_max_age_days)
    files_deleted = 0
    bytes_deleted = 0
    orphan_snapshots_deleted = 0
    orphan_snapshot_bytes_deleted = 0

    for path in sorted(temp_dir.rglob("*"), reverse=True):
        if path.is_file():
            modified = datetime.fromtimestamp(path.stat().st_mtime, timezone.utc)
            if modified <= cutoff:
                bytes_deleted += path.stat().st_size
                path.unlink(missing_ok=True)
                files_deleted += 1
        elif path.is_dir():
            try:
                path.rmdir()
            except OSError:
                pass

    with SessionLocal() as db:
        referenced_snapshots = {
            row[0]
            for row in db.execute(
                text("SELECT snapshot_path FROM video_events WHERE snapshot_path IS NOT NULL")
            ).all()
        }

    snapshot_dir = Path(settings.snapshot_storage_dir)
    if snapshot_dir.exists():
        for path in sorted(snapshot_dir.rglob("*"), reverse=True):
            if path.is_file() and str(path) not in referenced_snapshots:
                orphan_snapshot_bytes_deleted += path.stat().st_size
                path.unlink(missing_ok=True)
                orphan_snapshots_deleted += 1
            elif path.is_dir():
                try:
                    path.rmdir()
                except OSError:
                    pass

    return {
        "status": "ok",
        "files_deleted": files_deleted,
        "bytes_deleted": bytes_deleted,
        "orphan_snapshots_deleted": orphan_snapshots_deleted,
        "orphan_snapshot_bytes_deleted": orphan_snapshot_bytes_deleted,
    }
