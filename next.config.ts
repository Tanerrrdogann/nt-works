import type { NextConfig } from "next";
import path from "path";

const staticDemos = process.env.NTWORKS_STATIC_DEMOS === "1";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.3.112", "localhost"],
  experimental: {
    webpackMemoryOptimizations: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    const frontendDemoRewrites = staticDemos
      ? [
          {
            source: "/ecommerce-platform",
            destination: "http://localhost:4107/ecommerce-platform"
          },
          {
            source: "/ecommerce-platform/:path*",
            destination: "http://localhost:4107/ecommerce-platform/:path*"
          }
        ]
      : [
          {
            source: "/kurumsal-web-sitesi",
            destination: "http://localhost:4108/kurumsal-web-sitesi"
          },
          {
            source: "/kurumsal-web-sitesi/:path*",
            destination: "http://localhost:4108/kurumsal-web-sitesi/:path*"
          },
          {
            source: "/whatsapp-siparis-katalog",
            destination: "http://localhost:4109/whatsapp-siparis-katalog"
          },
          {
            source: "/whatsapp-siparis-katalog/:path*",
            destination: "http://localhost:4109/whatsapp-siparis-katalog/:path*"
          },
          {
            source: "/randevu-rezervasyon-sistemi",
            destination: "http://localhost:4110/randevu-rezervasyon-sistemi"
          },
          {
            source: "/randevu-rezervasyon-sistemi/:path*",
            destination: "http://localhost:4110/randevu-rezervasyon-sistemi/:path*"
          },
          {
            source: "/admin-panelli-isletme-sistemi",
            destination: "http://localhost:4111/admin-panelli-isletme-sistemi"
          },
          {
            source: "/admin-panelli-isletme-sistemi/:path*",
            destination: "http://localhost:4111/admin-panelli-isletme-sistemi/:path*"
          },
          {
            source: "/landing-page",
            destination: "http://localhost:4112/landing-page"
          },
          {
            source: "/landing-page/:path*",
            destination: "http://localhost:4112/landing-page/:path*"
          },
          {
            source: "/ecommerce-platform",
            destination: "http://localhost:4107/ecommerce-platform"
          },
          {
            source: "/ecommerce-platform/:path*",
            destination: "http://localhost:4107/ecommerce-platform/:path*"
          }
        ];

    return {
      afterFiles: [
        ...frontendDemoRewrites,
        {
          source: "/cloud-storage-platform/:path*",
          destination: "http://localhost:4101/:path*"
        },
        {
          source: "/ai-log-analysis-panel/api/:path*",
          destination: "http://localhost:5102/api/:path*"
        },
        {
          source: "/ai-log-analysis-panel",
          destination: "http://localhost:4102/ai-log-analysis-panel/"
        },
        {
          source: "/ai-log-analysis-panel/:path*",
          destination: "http://localhost:4102/ai-log-analysis-panel/:path*"
        },
        {
          source: "/video-analysis-platform/api/:path*",
          destination: "http://localhost:5103/api/:path*"
        },
        {
          source: "/video-analysis-platform/media/:path*",
          destination: "http://localhost:5103/media/:path*"
        },
        {
          source: "/video-analysis-platform",
          destination: "http://localhost:4103/video-analysis-platform/"
        },
        {
          source: "/video-analysis-platform/:path*",
          destination: "http://localhost:4103/video-analysis-platform/:path*"
        },
        {
          source: "/task-management-system",
          destination: "http://localhost:4105/task-management-system/"
        },
        {
          source: "/task-management-system/:path*",
          destination: "http://localhost:4105/task-management-system/:path*"
        },
        {
          source: "/library-search-engine/:path*",
          destination: "http://localhost:4106/:path*"
        }
      ]
    };
  }
};

export default nextConfig;
