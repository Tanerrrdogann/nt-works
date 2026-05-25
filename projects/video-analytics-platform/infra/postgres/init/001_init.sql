CREATE TABLE IF NOT EXISTS videos (
    id BIGSERIAL PRIMARY KEY,
    original_filename TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    content_type TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    duration_seconds NUMERIC(12, 3),
    fps NUMERIC(10, 3),
    width INTEGER,
    height INTEGER,
    total_frames INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS video_jobs (
    id BIGSERIAL PRIMARY KEY,
    video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    status TEXT NOT NULL,
    sampling_profile TEXT NOT NULL DEFAULT 'MEDIUM',
    progress_percentage INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    error_message TEXT,
    worker_name TEXT
);

CREATE TABLE IF NOT EXISTS zones (
    id BIGSERIAL PRIMARY KEY,
    video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    shape_json JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS video_detections (
    id BIGSERIAL PRIMARY KEY,
    video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    job_id BIGINT NOT NULL REFERENCES video_jobs(id) ON DELETE CASCADE,
    timestamp_seconds NUMERIC(12, 3) NOT NULL,
    frame_index INTEGER NOT NULL,
    label TEXT NOT NULL,
    confidence NUMERIC(6, 5),
    bounding_box_json JSONB,
    detector_name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS video_events (
    id BIGSERIAL PRIMARY KEY,
    video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    job_id BIGINT NOT NULL REFERENCES video_jobs(id) ON DELETE CASCADE,
    timestamp_seconds NUMERIC(12, 3) NOT NULL,
    frame_index INTEGER NOT NULL,
    event_type TEXT NOT NULL,
    confidence NUMERIC(6, 5),
    detection_label TEXT,
    bounding_box_json JSONB,
    zone_id BIGINT REFERENCES zones(id) ON DELETE SET NULL,
    snapshot_path TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS processing_metrics (
    id BIGSERIAL PRIMARY KEY,
    job_id BIGINT NOT NULL REFERENCES video_jobs(id) ON DELETE CASCADE,
    frames_sampled INTEGER NOT NULL DEFAULT 0,
    frames_processed INTEGER NOT NULL DEFAULT 0,
    detections_count INTEGER NOT NULL DEFAULT 0,
    events_count INTEGER NOT NULL DEFAULT 0,
    processing_duration_seconds NUMERIC(12, 3),
    storage_bytes_created BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transcript_segments (
    id BIGSERIAL PRIMARY KEY,
    video_id BIGINT NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
    job_id BIGINT NOT NULL REFERENCES video_jobs(id) ON DELETE CASCADE,
    start_seconds NUMERIC(12, 3) NOT NULL,
    end_seconds NUMERIC(12, 3) NOT NULL,
    text TEXT NOT NULL,
    language TEXT,
    confidence NUMERIC(6, 5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_video_jobs_video_id ON video_jobs(video_id);
CREATE INDEX IF NOT EXISTS idx_video_jobs_status ON video_jobs(status);
CREATE INDEX IF NOT EXISTS idx_video_events_video_timestamp ON video_events(video_id, timestamp_seconds);
CREATE INDEX IF NOT EXISTS idx_video_detections_video_timestamp ON video_detections(video_id, timestamp_seconds);
CREATE INDEX IF NOT EXISTS idx_transcript_segments_video_start ON transcript_segments(video_id, start_seconds);
