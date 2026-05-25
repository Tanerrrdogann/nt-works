import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const DEMO_VIDEO_FILENAME = "samplelib-road-5s-360p.mp4";
const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || import.meta.env.BASE_URL).replace(/\/$/, "");

function getApiBaseUrls() {
  const urls = [configuredApiBaseUrl || ""];

  if (typeof window !== "undefined") {
    urls.push(`${window.location.protocol}//${window.location.hostname}:5103`);
  }

  return Array.from(new Set(urls));
}

async function apiFetch(path: string, init?: RequestInit) {
  let lastError: unknown;

  for (const baseUrl of getApiBaseUrls()) {
    try {
      const response = await fetch(`${baseUrl}${path}`, init);
      if (response.ok || response.status < 500) {
        return response;
      }
      lastError = new Error(`${path} failed with ${response.status}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("API request failed.");
}

function apiMediaUrl(path: string) {
  return `${getApiBaseUrls()[0]}/media/${path.replace(/^\/+/, "")}`;
}

function normalizeMediaPath(path: string) {
  return path
    .replace(/^.*\/media\//, "")
    .replace(/^.*\/app\/storage\//, "")
    .replace(/^.*\/storage\//, "")
    .replace(/^\/+/, "");
}

type VideoJob = {
  id: number;
  video_id: number;
  status: string;
  progress_percentage: number;
  sampling_profile: string;
  created_at: string;
  completed_at?: string | null;
  error_message?: string | null;
};

type Video = {
  id: number;
  original_filename: string;
  storage_path: string;
  file_size: number;
  duration_seconds?: number | null;
  fps?: number | null;
  width?: number | null;
  height?: number | null;
  total_frames?: number | null;
  created_at: string;
};

function collapseDemoVideos(videoList: Video[]) {
  let demoVideo: Video | null = null;
  const otherVideos: Video[] = [];

  for (const video of videoList) {
    if (video.original_filename === DEMO_VIDEO_FILENAME) {
      if (!demoVideo || video.id > demoVideo.id) {
        demoVideo = video;
      }
      continue;
    }

    otherVideos.push(video);
  }

  return demoVideo ? [demoVideo, ...otherVideos] : otherVideos;
}

type VideoEvent = {
  id: number;
  video_id: number;
  job_id: number;
  timestamp_seconds: number;
  frame_index: number;
  event_type: string;
  confidence?: number | null;
  detection_label?: string | null;
  bounding_box_json?: Record<string, number> | null;
  snapshot_path?: string | null;
  created_at: string;
};

type VideoDetection = {
  id: number;
  video_id: number;
  job_id: number;
  timestamp_seconds: number;
  frame_index: number;
  label: string;
  confidence?: number | null;
  bounding_box_json?: Record<string, number> | null;
  detector_name: string;
};

type ProcessingMetric = {
  id: number;
  job_id: number;
  frames_sampled: number;
  frames_processed: number;
  detections_count: number;
  events_count: number;
  processing_duration_seconds?: number | null;
  storage_bytes_created: number;
};

type TranscriptSegment = {
  id: number;
  video_id: number;
  job_id: number;
  start_seconds: number;
  end_seconds: number;
  text: string;
  language?: string | null;
  confidence?: number | null;
};

type Zone = {
  id: number;
  video_id: number;
  name: string;
  shape_json: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

type StorageReport = {
  uploads: { files: number; bytes: number };
  snapshots: { files: number; bytes: number };
  temp: { files: number; bytes: number };
  total_bytes: number;
};

const terminalJobStatuses = ["COMPLETED", "FAILED", "CANCELLED"];

function isTerminalJob(job: VideoJob) {
  return terminalJobStatuses.includes(job.status);
}

function mergeJobState(existing: VideoJob | null, incoming: VideoJob) {
  if (!existing || existing.id !== incoming.id) {
    return incoming;
  }

  if (isTerminalJob(existing) && !isTerminalJob(incoming)) {
    return existing;
  }

  return {
    ...incoming,
    progress_percentage: Math.max(existing.progress_percentage, incoming.progress_percentage),
    completed_at: incoming.completed_at ?? existing.completed_at,
    error_message: incoming.error_message ?? existing.error_message
  };
}

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [jobs, setJobs] = useState<VideoJob[]>([]);
  const [events, setEvents] = useState<VideoEvent[]>([]);
  const [detections, setDetections] = useState<VideoDetection[]>([]);
  const [metrics, setMetrics] = useState<ProcessingMetric[]>([]);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [storageReport, setStorageReport] = useState<StorageReport | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState<string | null>(null);
  const [lastJob, setLastJob] = useState<VideoJob | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<VideoEvent | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("Ready for demo analysis.");
  const [eventTypeFilter, setEventTypeFilter] = useState("ALL");
  const [labelFilter, setLabelFilter] = useState("ALL");
  const [detectionLabelFilter, setDetectionLabelFilter] = useState("ALL");
  const [minConfidence, setMinConfidence] = useState(0);
  const [zoneDraft, setZoneDraft] = useState({ name: "Entrance Zone", x: 0, y: 0, width: 320, height: 240 });

  const eventTypes = ["IMPORTANT", "ALL", ...Array.from(new Set(events.map((event) => event.event_type)))];
  const labels = ["ALL", ...Array.from(new Set(events.map((event) => event.detection_label).filter(Boolean) as string[]))];
  const detectionLabels = ["ALL", ...Array.from(new Set(detections.map((detection) => detection.label)))];
  const visibleVideos = useMemo(() => collapseDemoVideos(videos), [videos]);
  const bundledDemoVideoUrl = `${import.meta.env.BASE_URL}demo-video.mp4`;

  const filteredEvents = events.filter((event) => {
    const typeMatches =
      eventTypeFilter === "ALL" ||
      (eventTypeFilter === "IMPORTANT" && isImportantEvent(event)) ||
      event.event_type === eventTypeFilter;
    const labelMatches = labelFilter === "ALL" || event.detection_label === labelFilter;
    const confidenceMatches = (event.confidence ?? 0) >= minConfidence;
    return typeMatches && labelMatches && confidenceMatches;
  });

  const filteredDetections = detections.filter((detection) => {
    return detectionLabelFilter === "ALL" || detection.label === detectionLabelFilter;
  });

  async function refreshVideos() {
    const response = await apiFetch(`/api/videos`, { cache: "no-store" });
    if (response.ok) {
      const nextVideos: Video[] = await response.json();
      setVideos(nextVideos);
      const nextVisibleVideos = collapseDemoVideos(nextVideos);
      if (!selectedVideo && nextVisibleVideos.length > 0) {
        await selectVideo(nextVisibleVideos[0]);
      }
    }
  }

  async function refreshJob(jobId: number) {
    const response = await apiFetch(`/api/jobs/${jobId}`, { cache: "no-store" });
    if (response.ok) {
      const job: VideoJob = await response.json();
      setLastJob((current) => mergeJobState(current, job));
      await loadVideoAnalytics(job.video_id, job.id, job);
    }
  }

  async function loadVideoAnalytics(videoId: number, jobId?: number, authoritativeJob?: VideoJob) {
    const [videoResponse, eventsResponse, detectionsResponse, jobsResponse, zonesResponse, transcriptResponse] = await Promise.all([
      apiFetch(`/api/videos/${videoId}`, { cache: "no-store" }),
      apiFetch(`/api/videos/${videoId}/events`, { cache: "no-store" }),
      apiFetch(`/api/videos/${videoId}/detections`, { cache: "no-store" }),
      apiFetch(`/api/videos/${videoId}/jobs`, { cache: "no-store" }),
      apiFetch(`/api/videos/${videoId}/zones`, { cache: "no-store" }),
      apiFetch(`/api/videos/${videoId}/transcript`, { cache: "no-store" })
    ]);

    if (videoResponse.ok) {
      const video: Video = await videoResponse.json();
      setSelectedVideo((current) => (current?.id === video.id ? video : current));
      setVideos((current) => current.map((item) => (item.id === video.id ? video : item)));
    }
    if (eventsResponse.ok) {
      setEvents(await eventsResponse.json());
    }
    if (detectionsResponse.ok) {
      setDetections(await detectionsResponse.json());
    }
    if (jobsResponse.ok) {
      const nextJobs: VideoJob[] = await jobsResponse.json();
      setJobs(nextJobs);
      const activeJob = jobId ? nextJobs.find((job) => job.id === jobId) : nextJobs[0];
      const displayJob = authoritativeJob && activeJob?.id === authoritativeJob.id
        ? mergeJobState(activeJob, authoritativeJob)
        : activeJob;
      setLastJob((current) => (displayJob ? mergeJobState(current, displayJob) : current));
      if (displayJob) {
        const metricsResponse = await apiFetch(`/api/jobs/${displayJob.id}/metrics`, { cache: "no-store" });
        if (metricsResponse.ok) {
          setMetrics(await metricsResponse.json());
        }
      }
    }
    if (zonesResponse.ok) {
      setZones(await zonesResponse.json());
    }
    if (transcriptResponse.ok) {
      setTranscript(await transcriptResponse.json());
    }
  }

  async function selectVideo(video: Video, options: { previewUrl?: string } = {}) {
    setSelectedVideo(video);
    setPreviewVideoUrl(options.previewUrl ?? null);
    setSelectedEvent(null);
    await loadVideoAnalytics(video.id);
  }

  useEffect(() => {
    refreshVideos().catch(() => setMessage("API is not reachable yet."));
  }, []);

  useEffect(() => {
    if (!lastJob || isTerminalJob(lastJob)) {
      return;
    }

    const timer = window.setInterval(() => {
      refreshJob(lastJob.id).catch(() => setMessage("Could not refresh job status."));
    }, 1500);

    return () => window.clearInterval(timer);
  }, [lastJob, selectedVideo]);

  useEffect(() => {
    if (selectedEvent || events.length === 0) {
      return;
    }

    const firstSnapshotEvent = events.find((event) => event.snapshot_path);
    if (firstSnapshotEvent) {
      setSelectedEvent(firstSnapshotEvent);
    }
  }, [events, selectedEvent]);

  async function uploadFile(file: File, options: { previewUrl?: string } = {}) {
    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);
    setMessage("Uploading video and creating background job...");

    try {
      const response = await apiFetch(`/api/videos/upload`, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail ?? "Upload failed.");
      }

      const result: { video_id: number; job_id: number; status: string } = await response.json();
      setMessage(`Video #${result.video_id} uploaded. Job #${result.job_id} is ${result.status}.`);
      await refreshVideos();
      const videoResponse = await apiFetch(`/api/videos/${result.video_id}`);
      if (videoResponse.ok) {
        await selectVideo(await videoResponse.json(), { previewUrl: options.previewUrl });
      }
      await refreshJob(result.job_id);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  async function useDemoVideo() {
    setIsUploading(true);
    const demoVideoUrl = bundledDemoVideoUrl;
    setPreviewVideoUrl(demoVideoUrl);
    setSelectedEvent(null);
    setMessage("Loading bundled demo video...");

    try {
      const response = await fetch(demoVideoUrl);
      if (!response.ok) {
        throw new Error("Demo video could not be loaded.");
      }

      const blob = await response.blob();
      const videosResponse = await apiFetch(`/api/videos`, { cache: "no-store" });
      let currentVideos = videos;
      if (videosResponse.ok) {
        currentVideos = await videosResponse.json();
        setVideos(currentVideos);
      }

      const existingDemoVideo = collapseDemoVideos(currentVideos).find((video) => video.original_filename === DEMO_VIDEO_FILENAME);
      if (existingDemoVideo) {
        setMessage("Bundled demo video opened. Existing analysis record reused.");
        await selectVideo(existingDemoVideo, { previewUrl: demoVideoUrl });
        return;
      }

      setSelectedVideo({
        id: -1,
        original_filename: DEMO_VIDEO_FILENAME,
        storage_path: demoVideoUrl,
        file_size: blob.size,
        duration_seconds: null,
        fps: null,
        width: null,
        height: null,
        total_frames: null,
        created_at: new Date().toISOString()
      });
      const file = new File([blob], DEMO_VIDEO_FILENAME, { type: "video/mp4" });
      await uploadFile(file, { previewUrl: demoVideoUrl });
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Demo video could not be loaded.");
      setIsUploading(false);
    }
  }

  function jumpToEvent(event: VideoEvent) {
    setSelectedEvent(event);
    if (videoRef.current) {
      videoRef.current.currentTime = event.timestamp_seconds;
      videoRef.current.play().catch(() => undefined);
    }
  }

  async function createZone(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedVideo) {
      return;
    }
    const response = await apiFetch(`/api/videos/${selectedVideo.id}/zones`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zoneDraft)
    });
    if (response.ok) {
      setMessage("Zone created. Re-process the video to generate zone events.");
      await loadVideoAnalytics(selectedVideo.id);
    } else {
      setMessage("Could not create zone.");
    }
  }

  async function deleteZone(zoneId: number) {
    const response = await apiFetch(`/api/zones/${zoneId}`, { method: "DELETE" });
    if (response.ok && selectedVideo) {
      await loadVideoAnalytics(selectedVideo.id);
    }
  }

  async function refreshStorageReport() {
    const response = await apiFetch(`/api/admin/storage/report`);
    if (response.ok) {
      setStorageReport(await response.json());
    }
  }

  async function runCleanup() {
    const response = await apiFetch(`/api/admin/cleanup/run`, { method: "POST" });
    if (response.ok) {
      const result: {
        files_deleted: number;
        bytes_deleted: number;
        orphan_snapshots_deleted: number;
        orphan_snapshot_bytes_deleted: number;
      } = await response.json();
      setMessage(
        `Cleanup deleted ${result.files_deleted} temp files and ${result.orphan_snapshots_deleted} orphan snapshots.`
      );
      await refreshStorageReport();
    }
  }

  async function reprocessSelectedVideo() {
    if (!selectedVideo) {
      return;
    }
    const response = await apiFetch(`/api/videos/${selectedVideo.id}/reprocess`, { method: "POST" });
    if (response.ok) {
      const result: { job_id: number; status: string } = await response.json();
      setMessage(`Reprocess job #${result.job_id} started with status ${result.status}.`);
      await loadVideoAnalytics(selectedVideo.id, result.job_id);
      await refreshJob(result.job_id);
    } else {
      setMessage("Could not start reprocess job.");
    }
  }

  async function cancelLatestJob() {
    if (!lastJob) {
      return;
    }
    const response = await apiFetch(`/api/jobs/${lastJob.id}/cancel`, { method: "POST" });
    if (response.ok) {
      setLastJob(await response.json());
      setMessage(`Job #${lastJob.id} cancellation requested.`);
    }
  }

  const latestMetrics = metrics[0];
  const isPreviewVideo = selectedVideo?.id === -1;

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Async Video Intelligence</p>
        <h1>Video Analytics Platform</h1>
        <p className="lede">
          Run the bundled demo footage and let the platform analyze both picture and
          sound in the background. Motion, objects, audio activity, loud peaks,
          snapshots, confidence scores, zones, and storage health land in one
          clean operator view.
        </p>
      </section>

      <section className="status-card">
        <div>
          <span className="status-dot" />
          Analysis pipeline ready
        </div>
        <p>{message}</p>
      </section>

      <section className="module-grid" aria-label="Platform highlights">
        <article className="module-card">
          <span>01</span>
          <strong>Start the bundled MP4 demo and queue the job</strong>
        </article>
        <article className="module-card">
          <span>02</span>
          <strong>Detect motion, objects, and audio activity</strong>
        </article>
        <article className="module-card">
          <span>03</span>
          <strong>Jump from timeline events to exact moments</strong>
        </article>
        <article className="module-card">
          <span>04</span>
          <strong>Manage snapshots, zones, and storage cleanup</strong>
        </article>
      </section>

      <section className="workspace">
        <article className="upload-card">
          <label>Demo video analysis</label>
          <p>Uses the bundled sample video, then opens the full analysis workflow.</p>
          <button type="button" disabled={isUploading} onClick={useDemoVideo}>
            {isUploading ? "Starting demo..." : "Use demo video"}
          </button>
        </article>

        <article className="job-card">
          <span>Latest analysis job</span>
          {lastJob ? (
            <>
              <strong>{lastJob.status}</strong>
              <progress max="100" value={lastJob.progress_percentage} />
              <p>Job #{lastJob.id}, video #{lastJob.video_id}; sampling profile {lastJob.sampling_profile}</p>
              <div className="inline-actions">
                <button type="button" onClick={reprocessSelectedVideo} disabled={!selectedVideo || isPreviewVideo}>
                  Reprocess video
                </button>
                <button
                  type="button"
                  onClick={cancelLatestJob}
                  disabled={isTerminalJob(lastJob)}
                >
                  Stop job
                </button>
              </div>
            </>
          ) : (
            <p>No analysis job selected yet.</p>
          )}
        </article>
      </section>

      <section className="analytics-layout">
        <aside className="video-list">
          <h2>Uploaded videos</h2>
          {visibleVideos.length === 0 ? (
            <p>No videos uploaded yet.</p>
          ) : (
            visibleVideos.map((video) => (
              <button
                key={video.id}
                className={`video-row ${selectedVideo?.id === video.id ? "selected" : ""}`}
                type="button"
                onClick={() => selectVideo(video, {
                  previewUrl: video.original_filename === DEMO_VIDEO_FILENAME ? bundledDemoVideoUrl : undefined
                })}
              >
                <strong>{video.original_filename}</strong>
                <span>{Math.round(video.file_size / 1024)} KB</span>
              </button>
            ))
          )}
        </aside>

        <section className="video-detail">
          {selectedVideo ? (
            <>
              <div className="detail-header">
                <div>
                  <p className="eyebrow">Video detail</p>
                  <h2>{selectedVideo.original_filename}</h2>
                </div>
                <div className="metric-pills">
                  <span>{formatDuration(selectedVideo.duration_seconds)}</span>
                  <span>{selectedVideo.fps ? `${Number(selectedVideo.fps).toFixed(1)} fps` : "fps pending"}</span>
                  <span>{selectedVideo.width && selectedVideo.height ? `${selectedVideo.width}x${selectedVideo.height}` : "size pending"}</span>
                </div>
              </div>

              <video
                ref={videoRef}
                className="player"
                controls
                src={previewVideoUrl ?? mediaUrl(selectedVideo.storage_path)}
              />

              <div className="insight-grid">
                <Metric label="Events" value={events.length} />
                <Metric label="Detections" value={detections.length} />
                <Metric label="Transcript" value={transcript.length} />
                <Metric label="Frames" value={latestMetrics?.frames_processed ?? 0} />
                <Metric label="Runtime" value={latestMetrics?.processing_duration_seconds ? `${latestMetrics.processing_duration_seconds}s` : "-"} />
              </div>

              <div className="job-history">
                <p className="eyebrow">Job history</p>
                {jobs.map((job) => (
                  <article key={job.id}>
                    <strong>#{job.id} {job.status}</strong>
                    <span>{job.progress_percentage}%</span>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p>Select or upload a video to inspect visual and audio events.</p>
          )}
        </section>
      </section>

      {selectedVideo && !isPreviewVideo && (
        <section className="timeline-panel">
          <div className="timeline-header">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2>Events, audio, and snapshots</h2>
            </div>
            <div className="filters">
              <select value={eventTypeFilter} onChange={(event) => setEventTypeFilter(event.target.value)}>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select value={labelFilter} onChange={(event) => setLabelFilter(event.target.value)}>
                {labels.map((label) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
              <label>
                Min confidence
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={minConfidence}
                  onChange={(event) => setMinConfidence(Number(event.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="event-grid">
            <p className="event-summary">
              Showing all {filteredEvents.length} filtered events. Use filters to narrow the list when needed.
            </p>
            <div className="event-list">
              {filteredEvents.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  className={`event-card ${selectedEvent?.id === event.id ? "selected" : ""}`}
                  onClick={() => jumpToEvent(event)}
                >
                  <strong>{event.event_type}</strong>
                  <span>{event.timestamp_seconds.toFixed(2)}s, frame {event.frame_index}</span>
                  <small>{event.detection_label ?? "timeline event"} {formatConfidence(event.confidence)}</small>
                </button>
              ))}
            </div>

            <aside className="snapshot-card">
              <p className="eyebrow">Snapshot preview</p>
              {selectedEvent?.snapshot_path ? (
                <img
                  key={selectedEvent.id}
                  src={mediaUrl(selectedEvent.snapshot_path)}
                  alt={`${selectedEvent.event_type} snapshot`}
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (image.dataset.fallbackSrc === "direct-api") {
                      return;
                    }

                    image.dataset.fallbackSrc = "direct-api";
                    image.src = directApiMediaUrl(selectedEvent.snapshot_path ?? "");
                  }}
                />
              ) : (
                <div className="snapshot-empty">Select an event with a snapshot.</div>
              )}
              {selectedEvent && (
                <dl>
                  <dt>Type</dt>
                  <dd>{selectedEvent.event_type}</dd>
                  <dt>Time</dt>
                  <dd>{selectedEvent.timestamp_seconds.toFixed(2)}s</dd>
                  <dt>Confidence</dt>
                  <dd>{formatConfidence(selectedEvent.confidence)}</dd>
                </dl>
              )}
            </aside>
          </div>
        </section>
      )}

      {selectedVideo && !isPreviewVideo && (
        <section className="transcript-panel">
          <div>
            <p className="eyebrow">Speech transcript</p>
            <h2>Subtitle-style transcript</h2>
          </div>
          {transcript.length === 0 ? (
            <p>No transcript yet. Upload or reprocess a video with spoken audio.</p>
          ) : (
            <div className="transcript-list">
              {transcript.map((segment) => (
                <button
                  key={segment.id}
                  type="button"
                  className="transcript-row"
                  onClick={() => seekTo(segment.start_seconds)}
                >
                  <span>{formatTimestamp(segment.start_seconds)} - {formatTimestamp(segment.end_seconds)}</span>
                  <strong>{segment.text}</strong>
                  <small>{segment.language ?? "auto"} {formatConfidence(segment.confidence)}</small>
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {selectedVideo && !isPreviewVideo && (
        <section className="ops-grid">
          <article className="zone-panel">
            <div>
              <p className="eyebrow">Zones</p>
              <h2>Rectangle zone detection</h2>
            </div>
            <form className="zone-form" onSubmit={createZone}>
              <input
                value={zoneDraft.name}
                onChange={(event) => setZoneDraft({ ...zoneDraft, name: event.target.value })}
                placeholder="Zone name"
              />
              <input type="number" value={zoneDraft.x} onChange={(event) => setZoneDraft({ ...zoneDraft, x: Number(event.target.value) })} placeholder="x" />
              <input type="number" value={zoneDraft.y} onChange={(event) => setZoneDraft({ ...zoneDraft, y: Number(event.target.value) })} placeholder="y" />
              <input type="number" value={zoneDraft.width} onChange={(event) => setZoneDraft({ ...zoneDraft, width: Number(event.target.value) })} placeholder="width" />
              <input type="number" value={zoneDraft.height} onChange={(event) => setZoneDraft({ ...zoneDraft, height: Number(event.target.value) })} placeholder="height" />
              <button type="submit">Create zone</button>
            </form>
            <div className="zone-list">
              {zones.length === 0 ? (
                <p>No zones yet.</p>
              ) : (
                zones.map((zone) => (
                  <article key={zone.id} className="zone-row">
                    <strong>{zone.name}</strong>
                    <span>
                      x{zone.shape_json.x}, y{zone.shape_json.y}, {zone.shape_json.width}x{zone.shape_json.height}
                    </span>
                    <button type="button" onClick={() => deleteZone(zone.id)}>Delete</button>
                  </article>
                ))
              )}
            </div>
          </article>

          <article className="storage-panel">
            <div>
              <p className="eyebrow">Storage</p>
              <h2>Cleanup and report</h2>
            </div>
            <div className="storage-actions">
              <button type="button" onClick={refreshStorageReport}>Refresh report</button>
              <button type="button" onClick={runCleanup}>Run cleanup</button>
            </div>
            {storageReport ? (
              <div className="storage-grid">
                <Metric label="Uploads" value={formatBytes(storageReport.uploads.bytes)} />
                <Metric label="Snapshots" value={formatBytes(storageReport.snapshots.bytes)} />
                <Metric label="Temp" value={formatBytes(storageReport.temp.bytes)} />
                <Metric label="Total" value={formatBytes(storageReport.total_bytes)} />
              </div>
            ) : (
              <p>Refresh storage report to inspect artifact usage.</p>
            )}
          </article>
        </section>
      )}

      {selectedVideo && !isPreviewVideo && (
        <section className="detection-panel">
          <div className="detection-header">
            <div>
              <p className="eyebrow">Detections</p>
              <h2>Frame-level detection list</h2>
            </div>
            <div className="detection-tabs" aria-label="Detection label filter">
              {detectionLabels.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={detectionLabelFilter === label ? "selected" : ""}
                  onClick={() => setDetectionLabelFilter(label)}
                >
                  {label} <span>{countDetectionsByLabel(detections, label)}</span>
                </button>
              ))}
            </div>
          </div>
          {filteredDetections.length === 0 ? (
            <p>No detections yet.</p>
          ) : (
            <>
              <p className="event-summary">
                Showing {filteredDetections.length} {detectionLabelFilter === "ALL" ? "detections" : `${detectionLabelFilter} detections`}.
              </p>
              <div className="detection-table">
                <span>Time</span>
                <span>Label</span>
                <span>Confidence</span>
                <span>Detector</span>
                {filteredDetections.map((detection) => (
                  <React.Fragment key={detection.id}>
                    <button type="button" onClick={() => seekTo(detection.timestamp_seconds)}>
                      {detection.timestamp_seconds.toFixed(2)}s
                    </button>
                    <strong>{detection.label}</strong>
                    <span>{formatConfidence(detection.confidence)}</span>
                    <span>{detection.detector_name}</span>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function seekTo(seconds: number) {
  const player = document.querySelector<HTMLVideoElement>(".player");
  if (player) {
    player.currentTime = seconds;
    player.play().catch(() => undefined);
  }
}

function mediaUrl(path: string) {
  return apiMediaUrl(normalizeMediaPath(path));
}

function directApiMediaUrl(path: string) {
  if (typeof window === "undefined") {
    return mediaUrl(path);
  }

  return `${window.location.protocol}//${window.location.hostname}:5103/media/${normalizeMediaPath(path)}`;
}

function timelinePosition(event: VideoEvent, video: Video) {
  const duration = Number(video.duration_seconds ?? 0);
  if (!duration) {
    return 2;
  }
  return Math.min(98, Math.max(2, (event.timestamp_seconds / duration) * 100));
}

function isImportantEvent(event: VideoEvent) {
  return [
    "AUDIO_ACTIVITY_STARTED",
    "AUDIO_ACTIVITY_ENDED",
    "AUDIO_SILENCE_DETECTED",
    "HIGH_ACTIVITY_WINDOW",
    "LOUD_AUDIO_PEAK",
    "MOTION_STARTED",
    "MOTION_ENDED",
    "ZONE_ENTERED",
    "ZONE_EXITED"
  ].includes(event.event_type);
}

function formatDuration(duration?: number | null) {
  if (!duration) {
    return "duration pending";
  }
  const minutes = Math.floor(duration / 60);
  const seconds = Math.round(duration % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatTimestamp(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function formatConfidence(confidence?: number | null) {
  if (confidence === undefined || confidence === null) {
    return "";
  }
  return `${Math.round(confidence * 100)}%`;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function countDetectionsByLabel(detections: VideoDetection[], label: string) {
  if (label === "ALL") {
    return detections.length;
  }
  return detections.filter((detection) => detection.label === label).length;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
