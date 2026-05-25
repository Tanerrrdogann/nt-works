# NT Web Çözümleri Demo Runtime Plan

This file defines how copied projects under `projects/` should become live demos
without keeping every stack permanently open on the VPS.

## Current Project Folders

The copied folders were normalized to match NT Web Çözümleri project slugs:

| Slug | Folder | First demo status |
| --- | --- | --- |
| `cloud-storage-platform` | `projects/cloud-storage-platform` | Heavy stack, split demo mode needed |
| `ai-log-analysis-panel` | `projects/ai-log-analysis-panel` | Split demo mode needed |
| `video-analysis-platform` | `projects/video-analytics-platform` | Split demo mode needed |
| `task-management-system` | `projects/task-management-system` | Fast Maven + H2 candidate |
| `library-search-engine` | `projects/library-search-engine` | Fast static candidate |
| `ecommerce-platform` | `projects/ecommerce-platform` | Fast Next + Spring Boot + H2 candidate |
| `virtual-computer-simulator` | `projects/virtual-computer-lab` | Web runtime postponed |

## URL Shape

Local:

```text
http://localhost:3000/ecommerce-platform
http://localhost:3000/library-search-engine
```

Production:

```text
https://nt-works.com/ecommerce-platform
https://nt-works.com/library-search-engine
```

NT Web Çözümleri should keep these public paths stable. Internally, each demo can run on
a private local port.

## Proposed Internal Ports

| Demo | Public path | Internal frontend | Internal API |
| --- | --- | --- | --- |
| Cloud Storage | `/cloud-storage-platform` | `4101` | gateway/service ports TBD |
| AI Security | `/ai-log-analysis-panel` | `4102` | `5102`, `5202` |
| Video Analytics | `/video-analysis-platform` | `4103` | `5103` |
| Task Management | `/task-management-system` | `4105` | same process |
| Library Search | `/library-search-engine` | `4106` | none |
| E-Commerce | `/ecommerce-platform` | `4107` | `5107` |

## Fast Run Strategy

### Library Search Engine

No Docker is needed.

```bash
cd projects/library-search-engine
python3 -m http.server 4106
```

Demo data:

- `kitaplar.csv`
- browser `localStorage`

Reset:

- clear browser localStorage
- restart browser session if needed

### Task Management System

No Docker is needed. Use Spring Boot with in-memory H2.

```bash
cd projects/task-management-system
mvn spring-boot:run -Dspring-boot.run.arguments="--server.port=4105 --app.mail.enabled=false --spring.datasource.url=jdbc:h2:mem:ntworks_task_demo"
```

Demo data:

- created automatically on startup when the database is empty
- H2 memory database disappears on restart

Reset:

- stop and restart the process

### E-Commerce Platform

This project is also a real customer-facing e-commerce site. Keep production and
NT Web Çözümleri demo environment variables fully separated.

Demo backend should use H2:

```bash
cd projects/ecommerce-platform
mvn -f backend/pom.xml spring-boot:run -Dspring-boot.run.arguments="--server.port=5107 --spring.datasource.url=jdbc:h2:mem:ntworks_ecommerce_demo --app.frontend.base-url=http://localhost:4107 --app.mail.enabled=false"
```

Demo frontend:

```bash
cd projects/ecommerce-platform/frontend
NEXT_PUBLIC_API_URL=http://localhost:5107 npm run dev -- -p 4107
```

Production later:

- real domain and VPS owner settings stay outside NT Web Çözümleri demo env
- production PostgreSQL must not be reused for NT Web Çözümleri demo
- real payment credentials must never be used in demo mode

### AI Security Platform

Full Docker Compose is convenient but slow. Faster demo mode should run:

- Postgres and Redis only as lightweight infra
- Spring Boot platform API locally with Maven
- FastAPI AI service locally with Python
- Vite frontend locally

Demo DB:

- synthetic events only
- seed with `scripts/seed_demo_data.sh`
- no real customer/security logs

### Video Analytics Platform

Full Docker Compose is CPU-heavy. Faster demo mode should run:

- Postgres and Redis only as lightweight infra
- FastAPI API locally
- Celery worker locally only when processing is needed
- Vite frontend locally
- short demo MP4 files only

Demo storage:

- keep `storage/demo/demo-motion.mp4`
- treat uploads and generated snapshots as temporary session output

### Cloud Storage Platform

This is the heaviest stack. For first VPS demo, avoid starting the full
observability package unless the demo specifically needs it.

Preferred demo mode:

- minimal auth + gateway + storage flow
- demo PostgreSQL/Redis/RabbitMQ/MinIO/Vault only
- observability links can be added later or started on demand separately

## On-Demand Demo Lifecycle

The NT Web Çözümleri demo manager should do this:

1. User clicks `Open Demo`.
2. NT Web Çözümleri calls `/api/demos/:slug/start`.
3. If the demo is stopped, start the configured process or stack.
4. Wait for the health URL to return OK.
5. Create a demo session cookie.
6. Redirect the user to `/:slug`.
7. Browser sends a heartbeat every 20-30 seconds.
8. Demo remains open while at least one session is active.
9. If no heartbeat is seen for 10 minutes, stop the demo.
10. Reset temporary demo data on stop or on next start.

## Data Isolation Rules

- Every demo must use demo-only database credentials.
- Production databases, real payment keys, real mail passwords and customer files
  must not be referenced by NT Web Çözümleri demo commands.
- H2 or disposable Docker volumes are preferred for first release.
- Seeded demo accounts and demo records should be recreated on start.
- Uploaded files, generated video snapshots and test orders should be removed on
  stop/reset.

## Cleanup Already Done

The copied project folder was reduced from about `1.7G` to about `54M` by
removing:

- nested `.git`, `.github`, `.idea`, `.vscode`
- `node_modules`
- `.next`, `build`, `dist`, `target`
- Python `__pycache__`
- generated video uploads and snapshots

The root `.gitignore` now prevents these outputs from being kept again under
`projects/`.
