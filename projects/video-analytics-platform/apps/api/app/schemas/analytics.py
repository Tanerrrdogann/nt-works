from datetime import datetime

from pydantic import BaseModel, ConfigDict


class VideoDetectionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    video_id: int
    job_id: int
    timestamp_seconds: float
    frame_index: int
    label: str
    confidence: float | None = None
    bounding_box_json: dict | None = None
    detector_name: str
    created_at: datetime


class VideoEventResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    video_id: int
    job_id: int
    timestamp_seconds: float
    frame_index: int
    event_type: str
    confidence: float | None = None
    detection_label: str | None = None
    bounding_box_json: dict | None = None
    zone_id: int | None = None
    snapshot_path: str | None = None
    created_at: datetime


class ProcessingMetricResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    job_id: int
    frames_sampled: int
    frames_processed: int
    detections_count: int
    events_count: int
    processing_duration_seconds: float | None = None
    storage_bytes_created: int
    created_at: datetime


class TranscriptSegmentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    video_id: int
    job_id: int
    start_seconds: float
    end_seconds: float
    text: str
    language: str | None = None
    confidence: float | None = None
    created_at: datetime
