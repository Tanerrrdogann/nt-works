import { blogCategories, blogPosts } from "@/data/blog";
import { cityPages } from "@/data/city-pages";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { publishedLocales, type Locale, withLocalePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

export const sitemapSections = ["static", "services", "projects", "blog", "landing"] as const;

export type SitemapSection = (typeof sitemapSections)[number] | "cities";

export type SitemapGroup = {
  filename: string;
  locale: Locale;
  section: SitemapSection;
};

type SitemapChangeFrequency = "weekly" | "monthly";

export type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

const staticPaths = [
  "/",
  "/services",
  "/projects",
  "/portfolio",
  "/blog",
  "/about",
  "/contact",
  "/maintenance-packages",
  "/privacy",
  "/kvkk",
  "/cookies",
  "/terms",
  "/support",
  "/scope-pricing",
  "/work-process",
  "/safe-bionluk",
  "/faq",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll(" ", "-")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function localizedUrl(path: string, locale: Locale) {
  return absoluteUrl(withLocalePath(path, locale));
}

function latestPostDate(predicate: (post: (typeof blogPosts)[number]) => boolean) {
  const timestamps = blogPosts
    .filter(predicate)
    .map((post) => new Date(post.updatedAt).getTime())
    .filter(Number.isFinite);

  return timestamps.length > 0 ? new Date(Math.max(...timestamps)).toISOString() : undefined;
}

export function getSitemapGroups(): SitemapGroup[] {
  const localizedGroups = publishedLocales.flatMap((locale) =>
    sitemapSections.map((section) => ({
      filename: `${locale}-${section}.xml`,
      locale,
      section,
    } satisfies SitemapGroup)),
  );

  return [
    ...localizedGroups,
    {
      filename: "tr-cities.xml",
      locale: "tr",
      section: "cities",
    },
  ];
}

export function findSitemapGroup(filename: string) {
  return getSitemapGroups().find((group) => group.filename === filename);
}

export function getSitemapEntries(group: SitemapGroup): SitemapEntry[] {
  const { locale, section } = group;

  if (section === "static") {
    return staticPaths.map((path) => ({
      url: localizedUrl(path, locale),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/services" || path === "/projects" || path === "/blog" ? 0.9 : 0.75,
    }));
  }

  if (section === "services") {
    return servicesData.map((service) => ({
      url: localizedUrl(`/services/${service.slug}`, locale),
      changeFrequency: "monthly",
      priority: 0.82,
    }));
  }

  if (section === "projects") {
    return projectsData.map((project) => ({
      url: localizedUrl(`/projects/${project.slug}`, locale),
      changeFrequency: "monthly",
      priority: 0.84,
    }));
  }

  if (section === "blog") {
    const posts: SitemapEntry[] = blogPosts.map((post) => ({
      url: localizedUrl(`/blog/${post.slug}`, locale),
      lastModified: new Date(post.updatedAt).toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    const categories: SitemapEntry[] = blogCategories.map((category) => ({
      url: localizedUrl(`/blog/category/${normalize(category)}`, locale),
      lastModified: latestPostDate((post) => post.category === category),
      changeFrequency: "monthly",
      priority: 0.72,
    }));

    const tags: SitemapEntry[] = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => ({
      url: localizedUrl(`/blog/tag/${normalize(tag)}`, locale),
      lastModified: latestPostDate((post) => post.tags.includes(tag)),
      changeFrequency: "monthly",
      priority: 0.68,
    }));

    return [...posts, ...categories, ...tags];
  }

  if (section === "landing") {
    return landingPages.map((page) => ({
      url: localizedUrl(`/${page.slug}`, locale),
      changeFrequency: "monthly",
      priority: 0.82,
    }));
  }

  return cityPages.map((page) => ({
    url: absoluteUrl(`/sehir/${page.slug}`),
    changeFrequency: "monthly",
    priority: 0.78,
  }));
}

export function renderSitemapIndex() {
  const sitemapNodes = getSitemapGroups()
    .map((group) => `  <sitemap><loc>${xmlEscape(absoluteUrl(`/sitemaps/${group.filename}`))}</loc></sitemap>`)
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapNodes,
    "</sitemapindex>",
  ].join("\n");
}

export function renderUrlSet(entries: SitemapEntry[]) {
  const urlNodes = entries
    .map((entry) => {
      const fields = [
        `    <loc>${xmlEscape(entry.url)}</loc>`,
        entry.lastModified ? `    <lastmod>${xmlEscape(entry.lastModified)}</lastmod>` : undefined,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${entry.priority.toFixed(2)}</priority>`,
      ].filter(Boolean);

      return ["  <url>", ...fields, "  </url>"].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlNodes,
    "</urlset>",
  ].join("\n");
}

export function sitemapXmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
