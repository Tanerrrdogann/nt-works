from __future__ import annotations

import shutil
import subprocess
import time
from dataclasses import dataclass
from pathlib import Path

import cv2
import numpy as np
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.settings import get_settings


SAMPLING_PROFILES = {
    "LOW": 1,
    "MEDIUM": 2,
    "HIGH": 5,
}


@dataclass
class Detection:
    label: str
    confidence: float
    bounding_box: dict[str, int]
    detector_name: str


@dataclass
class PipelineMetrics:
    frames_sampled: int = 0
    frames_processed: int = 0
    detections_count: int = 0
    events_count: int = 0
    storage_bytes_created: int = 0
    processing_duration_seconds: float = 0.0


@dataclass
class Zone:
    id: int
    name: str
    shape: dict[str, int | str]


@dataclass
class AudioEvent:
    timestamp_seconds: float
    event_type: str
    confidence: float
    label: str


@dataclass
class TranscriptSegment:
    start_seconds: float
    end_seconds: float
    text: str
    language: str | None
    confidence: float | None


class MotionDetector:
    def __init__(self, min_contour_area: int) -> None:
        self.min_contour_area = min_contour_area
        self.background_subtractor = cv2.createBackgroundSubtractorMOG2(
            history=80,
            varThreshold=32,
            detectShadows=True,
        )
        self.motion_active = False

    def detect(self, frame: np.ndarray) -> tuple[list[Detection], list[str]]:
        mask = self.background_subtractor.apply(frame)
        _, threshold = cv2.threshold(mask, 244, 255, cv2.THRESH_BINARY)
        threshold = cv2.morphologyEx(threshold, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
        contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        detections: list[Detection] = []
        for contour in contours:
            area = cv2.contourArea(contour)
            if area < self.min_contour_area:
                continue
            x, y, width, height = cv2.boundingRect(contour)
            detections.append(
                Detection(
                    label="motion",
                    confidence=min(float(area / max(frame.shape[0] * frame.shape[1], 1)), 1.0),
                    bounding_box={"x": x, "y": y, "width": width, "height": height},
                    detector_name="opencv_mog2",
                )
            )

        events: list[str] = []
        has_motion = bool(detections)
        if has_motion and not self.motion_active:
            events.append("MOTION_STARTED")
        if not has_motion and self.motion_active:
            events.append("MOTION_ENDED")
        self.motion_active = has_motion

        return detections, events


class YoloDetector:
    def __init__(self, model_path: str, labels_path: str, confidence_threshold: float) -> None:
        self.model_path = Path(model_path) if model_path else None
        self.confidence_threshold = confidence_threshold
        self.labels = self._load_labels(labels_path)
        self.net = None
        if self.model_path and self.model_path.exists():
            self.net = cv2.dnn.readNet(str(self.model_path))

    @property
    def enabled(self) -> bool:
        return self.net is not None

    def detect(self, frame: np.ndarray) -> list[Detection]:
        if self.net is None:
            return []

        height, width = frame.shape[:2]
        blob = cv2.dnn.blobFromImage(frame, 1 / 255.0, (640, 640), swapRB=True, crop=False)
        self.net.setInput(blob)
        outputs = self.net.forward()
        rows = outputs.reshape(-1, outputs.shape[-1])

        detections: list[Detection] = []
        for row in rows:
            scores = row[4:]
            class_id = int(np.argmax(scores))
            confidence = float(scores[class_id])
            if confidence < self.confidence_threshold:
                continue

            center_x, center_y, box_width, box_height = row[:4]
            x = int((center_x - box_width / 2) * width / 640)
            y = int((center_y - box_height / 2) * height / 640)
            w = int(box_width * width / 640)
            h = int(box_height * height / 640)
            label = self.labels[class_id] if class_id < len(self.labels) else f"class_{class_id}"
            detections.append(
                Detection(
                    label=label,
                    confidence=confidence,
                    bounding_box={"x": x, "y": y, "width": w, "height": h},
                    detector_name="yolo_opencv_dnn",
                )
            )
        return detections

    @staticmethod
    def _load_labels(labels_path: str) -> list[str]:
        if not labels_path:
            return []
        path = Path(labels_path)
        if not path.exists():
            return []
        return [line.strip() for line in path.read_text().splitlines() if line.strip()]


class BuiltInObjectDetector:
    def __init__(self, min_contour_area: int) -> None:
        self.min_contour_area = min_contour_area
        self.person_detector = cv2.HOGDescriptor()
        self.person_detector.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

    def detect(self, frame: np.ndarray) -> list[Detection]:
        detections = self._detect_people(frame)
        detections.extend(self._detect_salient_objects(frame))
        return detections

    def _detect_people(self, frame: np.ndarray) -> list[Detection]:
        resized = cv2.resize(frame, (min(frame.shape[1], 640), int(frame.shape[0] * min(frame.shape[1], 640) / frame.shape[1])))
        boxes, weights = self.person_detector.detectMultiScale(resized, winStride=(8, 8), padding=(8, 8), scale=1.05)
        scale_x = frame.shape[1] / resized.shape[1]
        scale_y = frame.shape[0] / resized.shape[0]
        detections: list[Detection] = []
        for (x, y, width, height), weight in zip(boxes, weights):
            detections.append(
                Detection(
                    label="person",
                    confidence=min(float(weight), 1.0),
                    bounding_box={
                        "x": int(x * scale_x),
                        "y": int(y * scale_y),
                        "width": int(width * scale_x),
                        "height": int(height * scale_y),
                    },
                    detector_name="opencv_hog_person",
                )
            )
        return detections

    def _detect_salient_objects(self, frame: np.ndarray) -> list[Detection]:
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        mask = cv2.inRange(hsv, (35, 55, 55), (95, 255, 255))
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        detections: list[Detection] = []
        for contour in contours[:3]:
            area = cv2.contourArea(contour)
            if area < self.min_contour_area:
                continue
            x, y, width, height = cv2.boundingRect(contour)
            label = "person" if height >= width * 1.35 and height > 80 else "object"
            detections.append(
                Detection(
                    label=label,
                    confidence=min(float(area / max(frame.shape[0] * frame.shape[1], 1)) * 10, 0.95),
                    bounding_box={"x": x, "y": y, "width": width, "height": height},
                    detector_name="opencv_builtin_detector",
                )
            )
        return detections


def process_video_job(db: Session, job_id: int) -> PipelineMetrics:
    settings = get_settings()
    _ensure_transcript_schema(db)
    started = time.monotonic()
    video_row = db.execute(
        text(
            """
            SELECT v.id, v.storage_path, j.sampling_profile
            FROM video_jobs j
            JOIN videos v ON v.id = j.video_id
            WHERE j.id = :job_id
            """
        ),
        {"job_id": job_id},
    ).mappings().one()

    video_id = int(video_row["id"])
    video_path = str(video_row["storage_path"])
    sampling_profile = str(video_row["sampling_profile"] or "MEDIUM").upper()

    temp_dir = Path(settings.temp_storage_dir) / str(job_id)
    snapshot_dir = Path(settings.snapshot_storage_dir) / str(video_id)
    temp_dir.mkdir(parents=True, exist_ok=True)
    snapshot_dir.mkdir(parents=True, exist_ok=True)

    capture = cv2.VideoCapture(video_path)
    if not capture.isOpened():
        raise RuntimeError(f"Could not open video file: {video_path}")

    fps = float(capture.get(cv2.CAP_PROP_FPS) or 0)
    total_frames = int(capture.get(cv2.CAP_PROP_FRAME_COUNT) or 0)
    width = int(capture.get(cv2.CAP_PROP_FRAME_WIDTH) or 0)
    height = int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT) or 0)
    duration_seconds = round(total_frames / fps, 3) if fps > 0 and total_frames > 0 else None

    db.execute(
        text(
            """
            UPDATE videos
            SET duration_seconds = :duration_seconds,
                fps = :fps,
                width = :width,
                height = :height,
                total_frames = :total_frames
            WHERE id = :video_id
            """
        ),
        {
            "video_id": video_id,
            "duration_seconds": duration_seconds,
            "fps": fps or None,
            "width": width or None,
            "height": height or None,
            "total_frames": total_frames or None,
        },
    )
    db.commit()

    sample_fps = SAMPLING_PROFILES.get(sampling_profile, SAMPLING_PROFILES["MEDIUM"])
    frame_step = max(int(round(fps / sample_fps)), 1) if fps > 0 else 1
    metrics = PipelineMetrics()
    motion_detector = MotionDetector(settings.motion_min_contour_area)
    yolo_detector = YoloDetector(
        settings.yolo_model_path,
        settings.yolo_labels_path,
        settings.yolo_confidence_threshold,
    )
    built_in_detector = BuiltInObjectDetector(settings.motion_min_contour_area)
    zones = _load_zones(db, video_id)
    active_zone_ids: set[int] = set()
    high_activity_window_start = 0.0
    high_activity_events = 0
    high_activity_windows_emitted: set[int] = set()

    frame_index = 0
    last_progress = 5
    audio_event_payloads = _analyze_audio_track(video_path, duration_seconds)
    while True:
        success, frame = capture.read()
        if not success:
            break

        if _job_cancelled(db, job_id):
            raise RuntimeError("Job was cancelled by user.")

        if frame_index % frame_step != 0:
            frame_index += 1
            continue

        metrics.frames_sampled += 1
        metrics.frames_processed += 1
        timestamp_seconds = round(frame_index / fps, 3) if fps > 0 else float(metrics.frames_processed)

        frame_path = temp_dir / f"frame_{frame_index:08d}.jpg"
        cv2.imwrite(str(frame_path), frame)
        metrics.storage_bytes_created += frame_path.stat().st_size if frame_path.exists() else 0

        motion_detections, motion_events = motion_detector.detect(frame)
        object_detections = yolo_detector.detect(frame)
        if not object_detections and settings.enable_builtin_object_detector:
            object_detections = built_in_detector.detect(frame)
        detections = motion_detections + object_detections

        event_payloads: list[tuple[str, int | None, Detection | None]] = [
            (event_type, None, detections[0] if detections else None) for event_type in motion_events
        ]
        for detection in object_detections:
            event_payloads.append(
                (
                    "PERSON_DETECTED" if detection.label.lower() == "person" else "OBJECT_DETECTED",
                    None,
                    detection,
                )
            )

        high_activity_events += len(detections)
        if timestamp_seconds - high_activity_window_start >= settings.high_activity_window_seconds:
            window_index = int(high_activity_window_start // settings.high_activity_window_seconds)
            if (
                high_activity_events >= settings.high_activity_min_events
                and window_index not in high_activity_windows_emitted
            ):
                event_payloads.append(("HIGH_ACTIVITY_WINDOW", None, detections[0] if detections else None))
                high_activity_windows_emitted.add(window_index)
            high_activity_window_start = timestamp_seconds
            high_activity_events = 0

        current_zone_hits = _zone_hits(zones, detections)
        entered_zone_ids = current_zone_hits.keys() - active_zone_ids
        exited_zone_ids = active_zone_ids - current_zone_hits.keys()
        for zone_id in entered_zone_ids:
            event_payloads.append(("ZONE_ENTERED", zone_id, current_zone_hits[zone_id]))
        for zone_id in exited_zone_ids:
            event_payloads.append(("ZONE_EXITED", zone_id, None))
        active_zone_ids = set(current_zone_hits.keys())

        snapshot_path = None
        if detections or event_payloads:
            snapshot_path = snapshot_dir / f"job_{job_id}_frame_{frame_index:08d}.jpg"
            cv2.imwrite(str(snapshot_path), frame)
            metrics.storage_bytes_created += snapshot_path.stat().st_size if snapshot_path.exists() else 0

        for detection in detections:
            db.execute(
                text(
                    """
                    INSERT INTO video_detections (
                        video_id, job_id, timestamp_seconds, frame_index, label,
                        confidence, bounding_box_json, detector_name
                    )
                    VALUES (
                        :video_id, :job_id, :timestamp_seconds, :frame_index, :label,
                        :confidence, CAST(:bounding_box_json AS jsonb), :detector_name
                    )
                    """
                ),
                {
                    "video_id": video_id,
                    "job_id": job_id,
                    "timestamp_seconds": timestamp_seconds,
                    "frame_index": frame_index,
                    "label": detection.label,
                    "confidence": detection.confidence,
                    "bounding_box_json": _json(detection.bounding_box),
                    "detector_name": detection.detector_name,
                },
            )
            metrics.detections_count += 1

        for event_type, zone_id, primary_detection in event_payloads:
            db.execute(
                text(
                    """
                    INSERT INTO video_events (
                        video_id, job_id, timestamp_seconds, frame_index, event_type,
                        confidence, detection_label, bounding_box_json, zone_id, snapshot_path
                    )
                    VALUES (
                        :video_id, :job_id, :timestamp_seconds, :frame_index, :event_type,
                        :confidence, :detection_label, CAST(:bounding_box_json AS jsonb), :zone_id, :snapshot_path
                    )
                    """
                ),
                {
                    "video_id": video_id,
                    "job_id": job_id,
                    "timestamp_seconds": timestamp_seconds,
                    "frame_index": frame_index,
                    "event_type": event_type,
                    "confidence": primary_detection.confidence if primary_detection else None,
                    "detection_label": primary_detection.label if primary_detection else None,
                    "bounding_box_json": _json(primary_detection.bounding_box) if primary_detection else None,
                    "zone_id": zone_id,
                    "snapshot_path": str(snapshot_path) if snapshot_path else None,
                },
            )
            metrics.events_count += 1

        if total_frames > 0:
            progress = min(95, max(5, int((frame_index / total_frames) * 95)))
            if progress >= last_progress + 5:
                db.execute(
                    text("UPDATE video_jobs SET progress_percentage = :progress WHERE id = :job_id"),
                    {"job_id": job_id, "progress": progress},
                )
                db.commit()
                last_progress = progress

        frame_index += 1

    capture.release()

    for audio_event in audio_event_payloads:
        db.execute(
            text(
                """
                INSERT INTO video_events (
                    video_id, job_id, timestamp_seconds, frame_index, event_type,
                    confidence, detection_label, bounding_box_json, zone_id, snapshot_path
                )
                VALUES (
                    :video_id, :job_id, :timestamp_seconds, 0, :event_type,
                    :confidence, :detection_label, NULL, NULL, NULL
                )
                """
            ),
            {
                "video_id": video_id,
                "job_id": job_id,
                "timestamp_seconds": audio_event.timestamp_seconds,
                "event_type": audio_event.event_type,
                "confidence": audio_event.confidence,
                "detection_label": audio_event.label,
            },
        )
        metrics.events_count += 1

    if settings.enable_transcription:
        transcript_segments = _transcribe_audio_track(video_path, settings)
        for segment in transcript_segments:
            db.execute(
                text(
                    """
                    INSERT INTO transcript_segments (
                        video_id, job_id, start_seconds, end_seconds, text, language, confidence
                    )
                    VALUES (
                        :video_id, :job_id, :start_seconds, :end_seconds, :text, :language, :confidence
                    )
                    """
                ),
                {
                    "video_id": video_id,
                    "job_id": job_id,
                    "start_seconds": segment.start_seconds,
                    "end_seconds": segment.end_seconds,
                    "text": segment.text,
                    "language": segment.language,
                    "confidence": segment.confidence,
                },
            )
            db.execute(
                text(
                    """
                    INSERT INTO video_events (
                        video_id, job_id, timestamp_seconds, frame_index, event_type,
                        confidence, detection_label, bounding_box_json, zone_id, snapshot_path
                    )
                    VALUES (
                        :video_id, :job_id, :timestamp_seconds, 0, 'SPEECH_TRANSCRIBED',
                        :confidence, 'speech', NULL, NULL, NULL
                    )
                    """
                ),
                {
                    "video_id": video_id,
                    "job_id": job_id,
                    "timestamp_seconds": segment.start_seconds,
                    "confidence": segment.confidence,
                },
            )
            metrics.events_count += 1

    metrics.processing_duration_seconds = round(time.monotonic() - started, 3)

    db.execute(
        text(
            """
            INSERT INTO processing_metrics (
                job_id, frames_sampled, frames_processed, detections_count,
                events_count, processing_duration_seconds, storage_bytes_created
            )
            VALUES (
                :job_id, :frames_sampled, :frames_processed, :detections_count,
                :events_count, :processing_duration_seconds, :storage_bytes_created
            )
            """
        ),
        {
            "job_id": job_id,
            "frames_sampled": metrics.frames_sampled,
            "frames_processed": metrics.frames_processed,
            "detections_count": metrics.detections_count,
            "events_count": metrics.events_count,
            "processing_duration_seconds": metrics.processing_duration_seconds,
            "storage_bytes_created": metrics.storage_bytes_created,
        },
    )
    db.commit()

    shutil.rmtree(temp_dir, ignore_errors=True)
    return metrics


def _load_zones(db: Session, video_id: int) -> list[Zone]:
    rows = db.execute(
        text("SELECT id, name, shape_json FROM zones WHERE video_id = :video_id"),
        {"video_id": video_id},
    ).mappings().all()
    return [
        Zone(id=int(row["id"]), name=str(row["name"]), shape=dict(row["shape_json"]))
        for row in rows
        if row["shape_json"]
    ]


def _zone_hits(zones: list[Zone], detections: list[Detection]) -> dict[int, Detection]:
    hits: dict[int, Detection] = {}
    for zone in zones:
        for detection in detections:
            if _rectangles_intersect(zone.shape, detection.bounding_box):
                hits[zone.id] = detection
                break
    return hits


def _rectangles_intersect(zone: dict[str, int | str], box: dict[str, int]) -> bool:
    if zone.get("type") != "rectangle":
        return False
    zx = int(zone.get("x", 0))
    zy = int(zone.get("y", 0))
    zw = int(zone.get("width", 0))
    zh = int(zone.get("height", 0))
    bx = int(box.get("x", 0))
    by = int(box.get("y", 0))
    bw = int(box.get("width", 0))
    bh = int(box.get("height", 0))
    return not (bx + bw < zx or bx > zx + zw or by + bh < zy or by > zy + zh)


def _job_cancelled(db: Session, job_id: int) -> bool:
    status = db.execute(
        text("SELECT status FROM video_jobs WHERE id = :job_id"),
        {"job_id": job_id},
    ).scalar_one_or_none()
    return status == "CANCELLED"


def _analyze_audio_track(video_path: str, duration_seconds: float | None) -> list[AudioEvent]:
    sample_rate = 16_000
    window_seconds = 0.5
    command = [
        "ffmpeg",
        "-v",
        "error",
        "-i",
        video_path,
        "-vn",
        "-ac",
        "1",
        "-ar",
        str(sample_rate),
        "-f",
        "s16le",
        "pipe:1",
    ]

    try:
        result = subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=120)
    except (FileNotFoundError, subprocess.CalledProcessError, subprocess.TimeoutExpired):
        return []

    if not result.stdout:
        return []

    audio = np.frombuffer(result.stdout, dtype=np.int16).astype(np.float32)
    if audio.size == 0:
        return []

    audio /= 32768.0
    window_size = int(sample_rate * window_seconds)
    if window_size <= 0:
        return []

    rms_values: list[float] = []
    for start in range(0, audio.size, window_size):
        window = audio[start : start + window_size]
        if window.size == 0:
            continue
        rms_values.append(float(np.sqrt(np.mean(np.square(window)))))

    if not rms_values:
        return []

    max_rms = max(rms_values)
    if max_rms < 0.003:
        return [AudioEvent(timestamp_seconds=0.0, event_type="AUDIO_SILENCE_DETECTED", confidence=0.9, label="silence")]

    loud_threshold = max(0.08, max_rms * 0.72)
    voice_threshold = max(0.018, max_rms * 0.22)
    events: list[AudioEvent] = []
    active_audio = False
    last_peak_second = -10.0

    for index, rms in enumerate(rms_values):
        timestamp = round(index * window_seconds, 3)
        confidence = min(rms / max(loud_threshold, 0.001), 1.0)

        if rms >= voice_threshold and not active_audio:
            events.append(
                AudioEvent(
                    timestamp_seconds=timestamp,
                    event_type="AUDIO_ACTIVITY_STARTED",
                    confidence=max(confidence, 0.55),
                    label="audio",
                )
            )
            active_audio = True
        elif rms < voice_threshold * 0.55 and active_audio:
            events.append(
                AudioEvent(
                    timestamp_seconds=timestamp,
                    event_type="AUDIO_ACTIVITY_ENDED",
                    confidence=0.65,
                    label="audio",
                )
            )
            active_audio = False

        if rms >= loud_threshold and timestamp - last_peak_second >= 2.0:
            events.append(
                AudioEvent(
                    timestamp_seconds=timestamp,
                    event_type="LOUD_AUDIO_PEAK",
                    confidence=confidence,
                    label="loud_audio",
                )
            )
            last_peak_second = timestamp

    if active_audio and duration_seconds is not None:
        events.append(
            AudioEvent(
                timestamp_seconds=round(float(duration_seconds), 3),
                event_type="AUDIO_ACTIVITY_ENDED",
                confidence=0.65,
                label="audio",
            )
        )

    return events[:120]


def _transcribe_audio_track(video_path: str, settings) -> list[TranscriptSegment]:
    try:
        from faster_whisper import WhisperModel
    except ImportError:
        return []

    try:
        model = WhisperModel(
            settings.transcription_model_size,
            device=settings.transcription_device,
            compute_type=settings.transcription_compute_type,
        )
        segments, info = model.transcribe(video_path, vad_filter=True)
    except Exception:
        return []

    language = getattr(info, "language", None)
    transcript_segments: list[TranscriptSegment] = []
    for segment in segments:
        text_value = segment.text.strip()
        if not text_value:
            continue
        avg_logprob = getattr(segment, "avg_logprob", None)
        confidence = None
        if avg_logprob is not None:
            confidence = max(0.0, min(1.0, (float(avg_logprob) + 1.5) / 1.5))
        transcript_segments.append(
            TranscriptSegment(
                start_seconds=round(float(segment.start), 3),
                end_seconds=round(float(segment.end), 3),
                text=text_value,
                language=language,
                confidence=confidence,
            )
        )
    return transcript_segments[:300]


def _ensure_transcript_schema(db: Session) -> None:
    db.execute(
        text(
            """
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
            )
            """
        )
    )
    db.execute(
        text(
            "CREATE INDEX IF NOT EXISTS idx_transcript_segments_video_start ON transcript_segments(video_id, start_seconds)"
        )
    )
    db.commit()


def _json(value: dict[str, int] | None) -> str | None:
    if value is None:
        return None
    import json

    return json.dumps(value)
