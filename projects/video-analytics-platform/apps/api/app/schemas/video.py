from datetime import datetime

from pydantic import BaseModel, ConfigDict


class VideoResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    original_filename: str
    storage_path: str
    content_type: str
    file_size: int
    duration_seconds: float | None = None
    fps: float | None = None
    width: int | None = None
    height: int | None = None
    total_frames: int | None = None
    created_at: datetime


class VideoJobResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    video_id: int
    status: str
    sampling_profile: str
    progress_percentage: int
    created_at: datetime
    started_at: datetime | None = None
    completed_at: datetime | None = None
    error_message: str | None = None
    worker_name: str | None = None


class VideoUploadResponse(BaseModel):
    video_id: int
    job_id: int
    status: str

