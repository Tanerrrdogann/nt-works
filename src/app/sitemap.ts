import type { MetadataRoute } from "next";
import { blogCategories, blogPosts } from "@/data/blog";
import { cityPages } from "@/data/city-pages";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { publishedLocales, withLocalePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedEntries = (
    path: string,
    options: {
      lastModified?: Date;
      changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
      priority?: number;
    } = {},
  ) => publishedLocales.map((locale) => ({
    url: absoluteUrl(withLocalePath(path, locale)),
    lastModified: options.lastModified ?? now,
    changeFrequency: options.changeFrequency ?? "monthly" as const,
    priority: options.priority ?? 0.75,
  }));

  const staticRoutes = ["/", "/services", "/projects", "/portfolio", "/blog", "/about", "/contact", "/maintenance-packages", "/privacy", "/kvkk", "/cookies", "/terms", "/support", "/scope-pricing", "/work-process", "/safe-bionluk", "/faq"].flatMap((path) => localizedEntries(path, {
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/services" || path === "/projects" || path === "/blog" ? 0.9 : 0.75,
  }));

  const serviceRoutes = servicesData.flatMap((service) => localizedEntries(`/services/${service.slug}`, {
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  const projectRoutes = projectsData.flatMap((project) => localizedEntries(`/projects/${project.slug}`, {
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  const blogRoutes = blogPosts.flatMap((post) => localizedEntries(`/blog/${post.slug}`, {
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategoryRoutes = blogCategories.flatMap((category) => localizedEntries(`/blog/category/${normalize(category)}`, {
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const blogTagRoutes = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).flatMap((tag) => localizedEntries(`/blog/tag/${normalize(tag)}`, {
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  const landingRoutes = landingPages.flatMap((page) => localizedEntries(`/${page.slug}`, {
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  const cityRoutes = cityPages.map((page) => ({
    url: absoluteUrl(`/sehir/${page.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes, ...blogCategoryRoutes, ...blogTagRoutes, ...landingRoutes, ...cityRoutes];
}
