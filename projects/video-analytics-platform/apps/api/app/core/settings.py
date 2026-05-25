from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = "postgresql+psycopg://video_user:video_password@postgres:5432/video_analytics"
    celery_broker_url: str = "redis://redis:6379/0"
    celery_result_backend: str = "redis://redis:6379/1"
    storage_root: str = "/app/storage"
    upload_storage_dir: str = "/app/storage/uploads"
    snapshot_storage_dir: str = "/app/storage/snapshots"
    temp_storage_dir: str = "/app/storage/temp"
    default_sampling_profile: str = "MEDIUM"
    cleanup_temp_max_age_days: int = 7
    enable_builtin_object_detector: bool = True
    high_activity_min_events: int = 6
    high_activity_window_seconds: int = 5


@lru_cache
def get_settings() -> Settings:
    return Settings()
