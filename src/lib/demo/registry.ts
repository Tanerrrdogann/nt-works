export type DemoRuntimeKind = "process" | "docker-compose" | "static" | "postponed";

export type DemoRuntime = {
  slug: string;
  publicPath: string;
  projectPath: string;
  kind: DemoRuntimeKind;
  targetUrl?: string;
  healthUrl?: string;
  startCommand?: string;
  stopCommand?: string;
  prerequisiteCommand?: string;
  seedCommand?: string;
  ready: boolean;
  notes: string[];
};

export const demoRegistry: Record<string, DemoRuntime> = {
  "kurumsal-web-sitesi": {
    slug: "kurumsal-web-sitesi",
    publicPath: "/kurumsal-web-sitesi",
    projectPath: "projects/kurumsal-web-sitesi",
    kind: "process",
    targetUrl: "http://localhost:4108/kurumsal-web-sitesi",
    healthUrl: "http://localhost:4108/kurumsal-web-sitesi",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4108/tcp || true'",
    startCommand: "npm run dev -- -p 4108",
    stopCommand: "/bin/bash -lc 'fuser -k 4108/tcp || true'",
    ready: true,
    notes: [
      "Corporate marketing website demo.",
      "Runs as a lightweight Next.js preview."
    ]
  },
  "whatsapp-siparis-katalog": {
    slug: "whatsapp-siparis-katalog",
    publicPath: "/whatsapp-siparis-katalog",
    projectPath: "projects/whatsapp-siparis-katalog",
    kind: "process",
    targetUrl: "http://localhost:4109/whatsapp-siparis-katalog",
    healthUrl: "http://localhost:4109/whatsapp-siparis-katalog",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4109/tcp || true'",
    startCommand: "npm run dev -- -p 4109",
    stopCommand: "/bin/bash -lc 'fuser -k 4109/tcp || true'",
    ready: true,
    notes: [
      "Product catalog style demo prepared for WhatsApp/order-flow adaptation.",
      "Runs as a lightweight Next.js preview."
    ]
  },
  "randevu-rezervasyon-sistemi": {
    slug: "randevu-rezervasyon-sistemi",
    publicPath: "/randevu-rezervasyon-sistemi",
    projectPath: "projects/randevu-rezervasyon-sistemi",
    kind: "process",
    targetUrl: "http://localhost:4110/randevu-rezervasyon-sistemi",
    healthUrl: "http://localhost:4110/randevu-rezervasyon-sistemi",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4110/tcp || true'",
    startCommand: "npm run dev -- -p 4110",
    stopCommand: "/bin/bash -lc 'fuser -k 4110/tcp || true'",
    ready: true,
    notes: [
      "Appointment and reservation website demo.",
      "Runs as a lightweight Next.js preview."
    ]
  },
  "admin-panelli-isletme-sistemi": {
    slug: "admin-panelli-isletme-sistemi",
    publicPath: "/admin-panelli-isletme-sistemi",
    projectPath: "projects/admin-panelli-isletme-sistemi",
    kind: "process",
    targetUrl: "http://localhost:4111/admin-panelli-isletme-sistemi",
    healthUrl: "http://localhost:4111/admin-panelli-isletme-sistemi",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4111/tcp || true'",
    startCommand: "npm run dev -- -p 4111",
    stopCommand: "/bin/bash -lc 'fuser -k 4111/tcp || true'",
    ready: true,
    notes: [
      "Small business admin panel demo.",
      "Runs as a lightweight Next.js preview."
    ]
  },
  "landing-page": {
    slug: "landing-page",
    publicPath: "/landing-page",
    projectPath: "projects/landing-page",
    kind: "process",
    targetUrl: "http://localhost:4112/landing-page",
    healthUrl: "http://localhost:4112/landing-page",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4112/tcp || true'",
    startCommand: "npm run dev -- -p 4112",
    stopCommand: "/bin/bash -lc 'fuser -k 4112/tcp || true'",
    ready: true,
    notes: [
      "One-page landing page demo.",
      "Runs as a lightweight Next.js preview."
    ]
  },
  "cloud-storage-platform": {
    slug: "cloud-storage-platform",
    publicPath: "/cloud-storage-platform",
    projectPath: "projects/cloud-storage-platform/auth-system",
    kind: "docker-compose",
    targetUrl: "http://localhost:4101",
    healthUrl: "http://localhost:4101",
    startCommand:
      "CLOUD_FRONTEND_PORT=4101 CLOUD_MINIO_PORT=5701 CLOUD_MINIO_CONSOLE_PORT=5702 docker compose -f docker-compose.demo.yml up -d --remove-orphans",
    stopCommand: "docker compose -f docker-compose.demo.yml down --remove-orphans",
    ready: true,
    notes: [
      "Uses seeded demo accounts and sample files in a read-only drive.",
      "Observability dashboards are excluded from the public demo runtime."
    ]
  },
  "ai-log-analysis-panel": {
    slug: "ai-log-analysis-panel",
    publicPath: "/ai-log-analysis-panel",
    projectPath: "projects/ai-log-analysis-panel",
    kind: "docker-compose",
    targetUrl: "http://localhost:4102",
    healthUrl: "http://localhost:4102",
    startCommand:
      "AI_WEB_PORT=4102 AI_PLATFORM_API_PORT=5102 AI_SERVICE_PORT=5202 docker compose up -d",
    stopCommand: "docker compose down",
    seedCommand: "API_BASE=http://localhost:5102 ./scripts/seed_demo_data.sh",
    ready: true,
    notes: [
      "Uses analyst/admin demo accounts.",
      "Seed command replays synthetic security scenarios only."
    ]
  },
  "video-analysis-platform": {
    slug: "video-analysis-platform",
    publicPath: "/video-analysis-platform",
    projectPath: "projects/video-analytics-platform",
    kind: "docker-compose",
    targetUrl: "http://localhost:4103",
    healthUrl: "http://localhost:4103/video-analysis-platform/",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4103/tcp 5103/tcp || true'",
    startCommand:
      "VIDEO_WEB_PORT=4103 VIDEO_API_PORT=5103 VITE_API_PROXY_TARGET=http://api:8000 docker compose up -d",
    stopCommand: "docker compose down --remove-orphans",
    ready: true,
    notes: [
      "Uses demo PostgreSQL/Redis and temporary local storage.",
      "Keep uploaded videos small; generated uploads and snapshots are resettable."
    ]
  },
  "task-management-system": {
    slug: "task-management-system",
    publicPath: "/task-management-system",
    projectPath: "projects/task-management-system",
    kind: "process",
    targetUrl: "http://localhost:4105",
    healthUrl: "http://localhost:4105/task-management-system/login",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4105/tcp || true'",
    startCommand:
      "mvn spring-boot:run -Dspring-boot.run.arguments='--server.port=4105 --server.servlet.context-path=/task-management-system --spring.datasource.url=jdbc:h2:mem:ntworks_task_demo --app.demo-data.enabled=true'",
    stopCommand: "/bin/bash -lc 'fuser -k 4105/tcp || true'",
    ready: true,
    notes: [
      "Uses in-memory H2 demo data.",
      "Restarting the process resets the demo database."
    ]
  },
  "library-search-engine": {
    slug: "library-search-engine",
    publicPath: "/library-search-engine",
    projectPath: "projects/library-search-engine",
    kind: "static",
    targetUrl: "http://localhost:4106",
    healthUrl: "http://localhost:4106",
    startCommand: "python3 -m http.server 4106",
    ready: true,
    notes: [
      "Uses bundled CSV and browser localStorage.",
      "No server database is touched."
    ]
  },
  "ecommerce-platform": {
    slug: "ecommerce-platform",
    publicPath: "/ecommerce-platform",
    projectPath: "projects/ecommerce-platform",
    kind: "process",
    targetUrl: "http://localhost:4107",
    healthUrl: "http://localhost:4107",
    prerequisiteCommand: "/bin/bash -lc 'fuser -k 4107/tcp 8081/tcp || true'",
    startCommand:
      "/bin/bash -lc 'nohup npm run backend:dev > /tmp/ntworks-ecommerce-backend.log 2>&1 & npm --prefix frontend run dev -- -p 4107'",
    ready: true,
    notes: [
      "Uses H2 demo database.",
      "Backend runs on 8081, Frontend on 4107."
    ]
  },
  "virtual-computer-simulator": {
    slug: "virtual-computer-simulator",
    publicPath: "/virtual-computer-simulator",
    projectPath: "projects/virtual-computer-lab",
    kind: "postponed",
    ready: false,
    notes: [
      "Desktop project. Web demo runtime is intentionally postponed."
    ]
  }
};

export function getDemoRuntime(slug: string) {
  return demoRegistry[slug];
}
