import type { NextConfig } from "next";
import path from "path";

const basePath = "/randevu-rezervasyon-sistemi";
const staticExport = process.env.NTWORKS_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },

  basePath,
  ...(staticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
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
      }),
};

export default nextConfig;
