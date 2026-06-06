import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/services", "/projects", "/about", "/contact"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/services" || path === "/projects" ? 0.9 : 0.75,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
