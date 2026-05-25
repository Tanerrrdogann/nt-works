from celery import Celery

from app.core.settings import get_settings


settings = get_settings()

celery_app = Celery(
    "video_analytics_api",
    broker=settings.celery_broker_url,
    backend=settings.celery_result_backend,
)

