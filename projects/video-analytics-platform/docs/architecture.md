# Architecture

The platform uses a deliberately asynchronous architecture:

- FastAPI receives uploads and exposes metadata/status APIs.
- Celery workers process videos outside the HTTP request path.
- Redis queues long-running processing jobs.
- PostgreSQL stores videos, jobs, detections, events, zones, and metrics.
- React presents upload status, timeline events, and cleanup/storage visibility.

