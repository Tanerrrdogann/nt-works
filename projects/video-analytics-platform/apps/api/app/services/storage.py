from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

from app.core.settings import get_settings


ALLOWED_VIDEO_SUFFIXES = {".mp4"}
ALLOWED_CONTENT_TYPES = {"video/mp4", "application/mp4", "video/x-m4v", "application/octet-stream"}


def ensure_storage_dirs() -> None:
    settings = get_settings()
    for directory in (
        settings.upload_storage_dir,
        settings.snapshot_storage_dir,
        settings.temp_storage_dir,
    ):
        Path(directory).mkdir(parents=True, exist_ok=True)


def validate_video_upload(file: UploadFile) -> None:
    suffix = Path(file.filename or "").suffix.lower()
    if suffix not in ALLOWED_VIDEO_SUFFIXES:
        raise ValueError("Only MP4 files are supported.")
    if file.content_type and file.content_type not in ALLOWED_CONTENT_TYPES:
        raise ValueError("Only MP4 video uploads are supported.")


async def store_upload(file: UploadFile) -> tuple[str, int]:
    settings = get_settings()
    ensure_storage_dirs()

    suffix = Path(file.filename or "upload.mp4").suffix.lower() or ".mp4"
    stored_name = f"{uuid4().hex}{suffix}"
    destination = Path(settings.upload_storage_dir) / stored_name

    size = 0
    with destination.open("wb") as output:
        while chunk := await file.read(1024 * 1024):
            size += len(chunk)
            output.write(chunk)

    return str(destination), size

