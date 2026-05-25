module.exports = {
  apps: [
    {
      name: "nt-works",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      env: {
        NODE_ENV: "production",
        NTWORKS_DEMO_AUTOSTART: "0",
        NTWORKS_STATIC_DEMOS: "1",
      },
      max_memory_restart: "700M",
    },
    {
      name: "nt-ecommerce-frontend",
      cwd: "projects/ecommerce-platform/frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 4107",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "500M",
    },
  ],
};
