import { getDemoRuntime, type DemoRuntime } from "@/lib/demo/registry";

type ChildProcess = import("child_process").ChildProcess;

type RunningDemo = {
  process?: ChildProcess;
  startedAt: number;
};

const runningDemos = new Map<string, RunningDemo>();
const alwaysOnDemoSlugs = [
  "kurumsal-web-sitesi",
  "ecommerce-platform",
  "whatsapp-siparis-katalog",
  "randevu-rezervasyon-sistemi",
  "admin-panelli-isletme-sistemi",
  "landing-page",
  "cloud-storage-platform",
  "task-management-system",
  "ai-log-analysis-panel",
  "video-analysis-platform"
];

function workspacePath(relativePath: string) {
  const nodeRequire = eval("require") as NodeRequire;
  const path = nodeRequire("path") as typeof import("path");

  return path.join(/* turbopackIgnore: true */ process.cwd(), relativePath);
}

async function isHealthy(url?: string) {
  if (!url) {
    return false;
  }

  try {
    const response = await fetch(url, { cache: "no-store" });
    return response.ok || response.status < 500;
  } catch {
    return false;
  }
}

async function waitForHealth(runtime: DemoRuntime) {
  const deadline = Date.now() + 120_000;

  while (Date.now() < deadline) {
    if (await isHealthy(runtime.healthUrl ?? runtime.targetUrl)) {
      return true;
    }

    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }

  return false;
}

function startProcess(runtime: DemoRuntime) {
  if (!runtime.startCommand) {
    return undefined;
  }

  const nodeRequire = eval("require") as NodeRequire;
  const { spawn } = nodeRequire("child_process") as typeof import("child_process");

  return spawn(runtime.startCommand, {
    cwd: workspacePath(runtime.projectPath),
    detached: true,
    shell: true,
    stdio: "ignore"
  });
}

function runCommand(command: string, cwd: string) {
  return new Promise<void>((resolve) => {
    const nodeRequire = eval("require") as NodeRequire;
    const { spawn } = nodeRequire("child_process") as typeof import("child_process");
    const child = spawn(command, {
      cwd,
      detached: false,
      shell: true,
      stdio: "ignore"
    });

    child.on("exit", () => resolve());
    child.on("error", () => resolve());
  });
}

async function runPrerequisite(runtime: DemoRuntime) {
  if (!runtime.prerequisiteCommand) {
    return;
  }

  await runCommand(runtime.prerequisiteCommand, workspacePath(runtime.projectPath));
}

function killProcess(child?: ChildProcess) {
  if (!child?.pid || child.killed) {
    return;
  }

  try {
    process.kill(-child.pid, "SIGTERM");
  } catch {
    child.kill("SIGTERM");
  }
}

export async function startDemo(slug: string) {
  const runtime = getDemoRuntime(slug);

  if (!runtime) {
    return { ok: false, status: 404, message: "Demo not found" };
  }

  if (!runtime.ready || runtime.kind === "postponed") {
    return { ok: false, status: 409, message: "Demo runtime is postponed" };
  }

  if (await isHealthy(runtime.healthUrl ?? runtime.targetUrl)) {
    runningDemos.set(slug, {
      startedAt: Date.now()
    });

    return { ok: true, runtime };
  }

  const active = runningDemos.get(slug);

  if (active) {
    return { ok: true, runtime };
  }

  await runPrerequisite(runtime);
  const child = startProcess(runtime);
  runningDemos.set(slug, {
    process: child,
    startedAt: Date.now()
  });

  const healthy = await waitForHealth(runtime);

  if (!healthy) {
    return {
      ok: false,
      status: 504,
      message: `${runtime.slug} did not become healthy in time`
    };
  }

  if (runtime.seedCommand) {
    const nodeRequire = eval("require") as NodeRequire;
    const { spawn } = nodeRequire("child_process") as typeof import("child_process");

    spawn(runtime.seedCommand, {
      cwd: workspacePath(runtime.projectPath),
      detached: false,
      shell: true,
      stdio: "ignore"
    });
  }

  return { ok: true, runtime };
}

export async function startAlwaysOnDemos() {
  await Promise.allSettled(alwaysOnDemoSlugs.map((slug) => startDemo(slug)));
}

export function stopDemo(slug: string) {
  const runtime = getDemoRuntime(slug);
  const active = runningDemos.get(slug);

  if (!runtime) {
    return { ok: false, status: 404, message: "Demo not found" };
  }

  if (active) {
    killProcess(active.process);
    runningDemos.delete(slug);
  }

  if (runtime.stopCommand) {
    const nodeRequire = eval("require") as NodeRequire;
    const { spawn } = nodeRequire("child_process") as typeof import("child_process");

    spawn(runtime.stopCommand, {
      cwd: workspacePath(runtime.projectPath),
      detached: false,
      shell: true,
      stdio: "ignore"
    });
  }

  return { ok: true };
}

export function getDemoStatus(slug: string) {
  const runtime = getDemoRuntime(slug);
  const active = runningDemos.get(slug);

  return {
    runtime,
    active: Boolean(active),
    startedAt: active?.startedAt
  };
}
