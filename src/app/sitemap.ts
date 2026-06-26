import type { MetadataRoute } from "next";
import { blogCategories, blogPosts } from "@/data/blog";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/services", "/projects", "/portfolio", "/testimonials", "/blog", "/about", "/contact", "/maintenance-packages", "/privacy", "/kvkk", "/cookies", "/terms", "/support", "/scope-pricing", "/safe-bionluk", "/faq"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/services" || path === "/projects" || path === "/blog" ? 0.9 : 0.75,
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

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategoryRoutes = blogCategories.map((category) => ({
    url: absoluteUrl(`/blog/category/${normalize(category)}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const blogTagRoutes = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => ({
    url: absoluteUrl(`/blog/tag/${normalize(tag)}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  const landingRoutes = landingPages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes, ...blogCategoryRoutes, ...blogTagRoutes, ...landingRoutes];
}
