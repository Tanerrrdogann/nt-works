from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = "postgresql+psycopg://video_user:video_password@postgres:5432/video_analytics"
    celery_broker_url: str = "redis://redis:6379/0"
    celery_result_backend: str = "redis://redis:6379/1"
    storage_root: str = "/app/storage"
    snapshot_storage_dir: str = "/app/storage/snapshots"
    temp_storage_dir: str = "/app/storage/temp"
    upload_storage_dir: str = "/app/storage/uploads"
    cleanup_temp_max_age_days: int = 7
    motion_min_contour_area: int = 900
    yolo_model_path: str = ""
    yolo_labels_path: str = ""
    yolo_confidence_threshold: float = 0.45
    enable_builtin_object_detector: bool = True
    high_activity_min_events: int = 6
    high_activity_window_seconds: int = 5
    enable_transcription: bool = True
    transcription_model_size: str = "tiny"
    transcription_device: str = "cpu"
    transcription_compute_type: str = "int8"


@lru_cache
def get_settings() -> Settings:
    return Settings()
