import type { NextConfig } from "next";
import path from "path";

const basePath = "/ecommerce-platform";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },

  basePath,

  async redirects() {
    return [
      {
        source: "/",
        destination: basePath,
        permanent: false,
        basePath: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8081/api/:path*",
      },
    ];
  },
};

export default nextConfig;
