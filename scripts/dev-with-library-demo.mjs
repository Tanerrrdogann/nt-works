import { createConnection } from "node:net";
import { spawn } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const libraryDir = path.join(root, "projects", "library-search-engine");

function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = createConnection({ port, host: "127.0.0.1" });

    socket.once("connect", () => {
      socket.end();
      resolve(true);
    });

    socket.once("error", () => resolve(false));
  });
}

function spawnManaged(command, args, options = {}) {
  const child = spawn(command, args, {
    stdio: "inherit",
    shell: false,
    ...options
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    if (code && code !== 0) {
      process.exitCode = code;
    }
  });

  return child;
}

const children = [];

if (!(await isPortOpen(4106))) {
  children.push(spawnManaged("python3", ["-m", "http.server", "4106"], {
    cwd: libraryDir
  }));
} else {
  console.log("library-search-engine demo already running on :4106");
}

const nextMode = process.argv[2] === "start" ? "start" : "dev";

children.push(spawnManaged(path.join(root, "node_modules", ".bin", "next"), [nextMode], {
  cwd: root
}));

function shutdown() {
  for (const child of children) {
    if (!child.killed) {
      child.kill("SIGTERM");
    }
  }
}

process.on("SIGINT", () => {
  shutdown();
  process.exit(130);
});

process.on("SIGTERM", () => {
  shutdown();
  process.exit(143);
});
