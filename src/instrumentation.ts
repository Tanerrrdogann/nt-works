export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return;
  }

  if (process.env.NTWORKS_DEMO_AUTOSTART === "0") {
    return;
  }

  const { demosReady } = await import("./instrumentation-node");
  await demosReady;
}
