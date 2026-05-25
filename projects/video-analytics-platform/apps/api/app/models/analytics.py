from datetime import datetime
from typing import Optional

from sqlalchemy import BigInteger, DateTime, ForeignKey, Integer, Numeric, Text, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class VideoDetection(Base):
    __tablename__ = "video_detections"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    video_id: Mapped[int] = mapped_column(ForeignKey("videos.id", ondelete="CASCADE"), nullable=False)
    job_id: Mapped[int] = mapped_column(ForeignKey("video_jobs.id", ondelete="CASCADE"), nullable=False)
    timestamp_seconds: Mapped[float] = mapped_column(Numeric(12, 3), nullable=False)
    frame_index: Mapped[int] = mapped_column(Integer, nullable=False)
    label: Mapped[str] = mapped_column(Text, nullable=False)
    confidence: Mapped[Optional[float]] = mapped_column(Numeric(6, 5))
    bounding_box_json: Mapped[Optional[dict]] = mapped_column(JSONB)
    detector_name: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class VideoEvent(Base):
    __tablename__ = "video_events"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    video_id: Mapped[int] = mapped_column(ForeignKey("videos.id", ondelete="CASCADE"), nullable=False)
    job_id: Mapped[int] = mapped_column(ForeignKey("video_jobs.id", ondelete="CASCADE"), nullable=False)
    timestamp_seconds: Mapped[float] = mapped_column(Numeric(12, 3), nullable=False)
    frame_index: Mapped[int] = mapped_column(Integer, nullable=False)
    event_type: Mapped[str] = mapped_column(Text, nullable=False)
    confidence: Mapped[Optional[float]] = mapped_column(Numeric(6, 5))
    detection_label: Mapped[Optional[str]] = mapped_column(Text)
    bounding_box_json: Mapped[Optional[dict]] = mapped_column(JSONB)
    zone_id: Mapped[Optional[int]] = mapped_column(ForeignKey("zones.id", ondelete="SET NULL"))
    snapshot_path: Mapped[Optional[str]] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class ProcessingMetric(Base):
    __tablename__ = "processing_metrics"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    job_id: Mapped[int] = mapped_column(ForeignKey("video_jobs.id", ondelete="CASCADE"), nullable=False)
    frames_sampled: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    frames_processed: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    detections_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    events_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    processing_duration_seconds: Mapped[Optional[float]] = mapped_column(Numeric(12, 3))
    storage_bytes_created: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class TranscriptSegment(Base):
    __tablename__ = "transcript_segments"

    id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    video_id: Mapped[int] = mapped_column(ForeignKey("videos.id", ondelete="CASCADE"), nullable=False)
    job_id: Mapped[int] = mapped_column(ForeignKey("video_jobs.id", ondelete="CASCADE"), nullable=False)
    start_seconds: Mapped[float] = mapped_column(Numeric(12, 3), nullable=False)
    end_seconds: Mapped[float] = mapped_column(Numeric(12, 3), nullable=False)
    text: Mapped[str] = mapped_column(Text, nullable=False)
    language: Mapped[Optional[str]] = mapped_column(Text)
    confidence: Mapped[Optional[float]] = mapped_column(Numeric(6, 5))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
