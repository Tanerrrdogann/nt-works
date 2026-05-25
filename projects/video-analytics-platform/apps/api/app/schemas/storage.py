from pydantic import BaseModel


class CleanupResponse(BaseModel):
    status: str
    files_deleted: int
    bytes_deleted: int
    orphan_snapshots_deleted: int = 0
    orphan_snapshot_bytes_deleted: int = 0


class StorageSectionReport(BaseModel):
    files: int
    bytes: int


class StorageReportResponse(BaseModel):
    uploads: StorageSectionReport
    snapshots: StorageSectionReport
    temp: StorageSectionReport
    total_bytes: int
