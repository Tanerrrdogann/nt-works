from celery import Celery
from celery.schedules import crontab

from app.settings import get_settings

settings = get_settings()

celery_app = Celery(
    "video_analytics_worker",
    broker=settings.celery_broker_url,
    backend=settings.celery_result_backend,
    include=["app.tasks"],
)

celery_app.conf.timezone = "UTC"
celery_app.conf.beat_schedule = {
    "cleanup-temporary-artifacts-daily": {
        "task": "app.tasks.cleanup_temporary_artifacts",
        "schedule": crontab(hour=2, minute=0),
    }
}

