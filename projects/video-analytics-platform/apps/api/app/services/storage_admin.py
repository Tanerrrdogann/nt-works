from datetime import datetime, timedelta, timezone
from pathlib import Path

from app.core.settings import get_settings


def storage_report() -> dict[str, dict[str, int] | int]:
    settings = get_settings()
    sections = {
        "uploads": Path(settings.upload_storage_dir),
        "snapshots": Path(settings.snapshot_storage_dir),
        "temp": Path(settings.temp_storage_dir),
    }
    report: dict[str, dict[str, int] | int] = {}
    total_bytes = 0
    for name, directory in sections.items():
        files = [path for path in directory.rglob("*") if path.is_file()] if directory.exists() else []
        size = sum(path.stat().st_size for path in files)
        report[name] = {"files": len(files), "bytes": size}
        total_bytes += size
    report["total_bytes"] = total_bytes
    return report


def cleanup_temp_files(
    max_age_days: int | None = None,
    referenced_snapshots: set[str] | None = None,
) -> dict[str, int | str]:
    settings = get_settings()
    days = max_age_days if max_age_days is not None else 7
    cutoff = datetime.now(timezone.utc) - timedelta(days=days)
    temp_dir = Path(settings.temp_storage_dir)
    files_deleted = 0
    bytes_deleted = 0
    orphan_snapshots_deleted = 0
    orphan_snapshot_bytes_deleted = 0

    if not temp_dir.exists():
        temp_result = {"status": "ok", "files_deleted": 0, "bytes_deleted": 0}
    else:
        temp_result = None

    if temp_result is None:
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

    referenced = referenced_snapshots or set()
    snapshot_dir = Path(settings.snapshot_storage_dir)
    if snapshot_dir.exists():
        for path in sorted(snapshot_dir.rglob("*"), reverse=True):
            if path.is_file() and str(path) not in referenced:
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
