import { getSeoInventory, type SeoInventoryEntry } from "@/lib/seo-inventory";
import { getSitemapEntries, getSitemapGroups } from "@/lib/sitemap";
import { blogPosts } from "@/data/blog";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { cityPages } from "@/data/city-pages";
import { getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { publishedLocales } from "@/lib/i18n";
import { getProjectPresentationStatus } from "@/lib/project-presentation";

const EXPECTED_URL_COUNT = 5_323;
const BRAND_SUFFIX = " | NT Web Çözümleri";
const strict = process.argv.includes("--strict");
const entries = getSeoInventory();
const errors: string[] = [];
const warnings: string[] = [];

function groupDuplicates(
  keyFor: (entry: SeoInventoryEntry) => string,
): Array<[string, SeoInventoryEntry[]]> {
  const groups = new Map<string, SeoInventoryEntry[]>();

  for (const entry of entries) {
    const key = keyFor(entry);
    groups.set(key, [...(groups.get(key) ?? []), entry]);
  }

  return [...groups.entries()].filter(([, group]) => group.length > 1);
}

if (entries.length !== EXPECTED_URL_COUNT) {
  errors.push(`URL count is ${entries.length}; expected ${EXPECTED_URL_COUNT}.`);
}

const inventoryPaths = new Set(entries.map((entry) => entry.localizedPath));
const sitemapPaths = new Set(
  getSitemapGroups()
    .flatMap(getSitemapEntries)
    .map((entry) => new URL(entry.url).pathname.replace(/\/$/, "") || "/"),
);

for (const path of sitemapPaths) {
  if (!inventoryPaths.has(path)) errors.push(`Missing from SEO inventory: ${path}`);
}

for (const path of inventoryPaths) {
  if (!sitemapPaths.has(path)) errors.push(`Missing from sitemap: ${path}`);
}

const projectSlugs = new Set(projectsData.map((project) => project.slug));
const blogSlugs = new Set(blogPosts.map((post) => post.slug));
const serviceSlugs = new Set(servicesData.map((service) => service.slug));
const serviceCategorySlugs = new Set(servicesData.map((service) => service.categorySlug));
const landingSlugs = new Set(landingPages.map((page) => page.slug));

for (const project of projectsData) {
  const status = getProjectPresentationStatus(project);

  if ((status === "live" || status === "maintenance") && (!project.demoUrl || project.isDemoEnabled === false)) {
    errors.push(`Published project has no enabled demo URL: ${project.slug}`);
  }
  if (status === "planned" && (project.demoUrl || project.isDemoEnabled !== false)) {
    errors.push(`Planned project exposes a demo URL or enabled state: ${project.slug}`);
  }
  if (status === "client" && project.projectKind !== "client") {
    errors.push(`Client project is missing the client kind: ${project.slug}`);
  }
}

for (const service of servicesData) {
  const validProjects = service.relatedProjects.filter((slug) => projectSlugs.has(slug));
  const validGuides = service.relatedBlogPosts.filter((slug) => blogSlugs.has(slug));

  if (validProjects.length === 0) {
    errors.push(`Service has no valid related project: ${service.slug}`);
  }
  if (validGuides.length === 0) {
    errors.push(`Service has no valid related guide: ${service.slug}`);
  }

  for (const slug of service.relatedProjects) {
    if (!projectSlugs.has(slug)) {
      errors.push(`Broken service → project relation: ${service.slug} → ${slug}`);
    }
  }
  for (const slug of service.relatedBlogPosts) {
    if (!blogSlugs.has(slug)) {
      errors.push(`Broken service → blog relation: ${service.slug} → ${slug}`);
    }
  }
}

for (const post of blogPosts) {
  if (post.sections.length < 3) {
    errors.push(`Blog post has fewer than 3 decision sections: ${post.slug}`);
  }
  if (post.faqs.length < 2) {
    errors.push(`Blog post has fewer than 2 FAQs: ${post.slug}`);
  }
  if (post.relatedServices.length === 0 || post.relatedProjects.length === 0) {
    errors.push(`Blog post has no service or project conversion path: ${post.slug}`);
  }

  for (const slug of post.relatedServices) {
    if (!serviceSlugs.has(slug)) {
      errors.push(`Broken blog → service relation: ${post.slug} → ${slug}`);
    }
  }
  for (const slug of post.relatedProjects) {
    if (!projectSlugs.has(slug)) {
      errors.push(`Broken blog → project relation: ${post.slug} → ${slug}`);
    }
  }
}

for (const landing of landingPages) {
  if (
    !serviceSlugs.has(landing.serviceSlug)
    && !serviceCategorySlugs.has(landing.serviceSlug)
  ) {
    errors.push(`Broken landing → service relation: ${landing.slug} → ${landing.serviceSlug}`);
  }
  for (const slug of landing.relatedProjectSlugs ?? []) {
    if (!projectSlugs.has(slug)) {
      errors.push(`Broken landing → project relation: ${landing.slug} → ${slug}`);
    }
  }
  for (const slug of landing.relatedBlogSlugs ?? []) {
    if (!blogSlugs.has(slug)) {
      errors.push(`Broken landing → blog relation: ${landing.slug} → ${slug}`);
    }
  }
}

for (const locale of publishedLocales) {
  const contentSignatures = new Map<string, string[]>();

  for (const sourcePage of landingPages) {
    const page = getLocalizedLandingPage(sourcePage, locale);
    const signature = JSON.stringify({
      modules: page.modules,
      priceFactors: page.priceFactors,
      heroPoints: page.heroPoints,
      audience: page.audience,
      outcomes: page.outcomes,
      scenarios: page.scenarios,
      closingNote: page.closingNote,
    });
    contentSignatures.set(signature, [
      ...(contentSignatures.get(signature) ?? []),
      page.slug,
    ]);
  }

  for (const slugs of contentSignatures.values()) {
    if (slugs.length > 1) {
      errors.push(`Repeated landing decision content in ${locale}: ${slugs.join(", ")}`);
    }
  }
}

for (const city of cityPages) {
  for (const slug of city.serviceSlugs) {
    if (!serviceSlugs.has(slug)) {
      errors.push(`Broken city → service relation: ${city.slug} → ${slug}`);
    }
  }
  for (const slug of city.landingSlugs) {
    if (!landingSlugs.has(slug)) {
      errors.push(`Broken city → landing relation: ${city.slug} → ${slug}`);
    }
  }
  for (const slug of city.blogSlugs) {
    if (!blogSlugs.has(slug)) {
      errors.push(`Broken city → blog relation: ${city.slug} → ${slug}`);
    }
  }
}

const linkedLandingSlugs = new Set(
  servicesData.flatMap((service) =>
    landingPages
      .filter((page) => page.serviceSlug === service.slug || page.serviceSlug === service.categorySlug)
      .map((page) => page.slug),
  ),
);
for (const landing of landingPages) {
  if (!linkedLandingSlugs.has(landing.slug)) {
    errors.push(`Landing page has no service-hub link: ${landing.slug}`);
  }
}

const allTagSlugs = new Set(
  blogPosts.flatMap((post) => post.tags.map(normalizeBlogPath)),
);
const linkedTagSlugs = new Set(
  blogPosts.flatMap((post) => post.tags.map(normalizeBlogPath)),
);
for (const tag of allTagSlugs) {
  if (!linkedTagSlugs.has(tag)) {
    errors.push(`Blog tag has no article link: ${tag}`);
  }
}

for (const [path, duplicates] of groupDuplicates((entry) => entry.localizedPath)) {
  errors.push(`Duplicate canonical path ${path}: ${duplicates.length} records.`);
}

for (const entry of entries) {
  if (!entry.title.trim()) errors.push(`Missing title: ${entry.localizedPath}`);
  if (!entry.description.trim()) errors.push(`Missing description: ${entry.localizedPath}`);
  if (!entry.h1.trim()) errors.push(`Missing H1: ${entry.localizedPath}`);

  const renderedTitleLength = `${entry.title}${BRAND_SUFFIX}`.length;
  if (renderedTitleLength < 20 || renderedTitleLength > 70) {
    warnings.push(
      `Title length ${renderedTitleLength}: ${entry.localizedPath} (${entry.title})`,
    );
  }

  const descriptionLength = entry.description.length;
  const minimumDescriptionLength = entry.locale === "zh" ? 25 : 50;
  if (descriptionLength < minimumDescriptionLength || descriptionLength > 180) {
    warnings.push(
      `Description length ${descriptionLength}: ${entry.localizedPath}`,
    );
  }
}

for (const [key, duplicates] of groupDuplicates(
  (entry) => `${entry.locale}\u0000${entry.title.trim()}\u0000${entry.description.trim()}`,
)) {
  const [locale] = key.split("\u0000");
  warnings.push(
    `Duplicate title+description in ${locale}: ${duplicates
      .slice(0, 4)
      .map((entry) => entry.localizedPath)
      .join(", ")}${duplicates.length > 4 ? ` (+${duplicates.length - 4})` : ""}`,
  );
}

const turkishBySource = new Map(
  entries
    .filter((entry) => entry.locale === "tr")
    .map((entry) => [entry.sourcePath, entry]),
);

for (const entry of entries) {
  if (entry.locale === "tr") continue;
  const turkish = turkishBySource.get(entry.sourcePath);
  if (
    turkish
    && entry.title.trim() === turkish.title.trim()
    && entry.description.trim() === turkish.description.trim()
  ) {
    warnings.push(`Untranslated title+description: ${entry.localizedPath}`);
  }
}

const routeCounts = Object.entries(
  entries.reduce<Record<string, number>>((counts, entry) => {
    counts[entry.routeType] = (counts[entry.routeType] ?? 0) + 1;
    return counts;
  }, {}),
)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([routeType, count]) => `${routeType}=${count}`)
  .join(", ");
const warningCounts = [
  ["title-length", warnings.filter((warning) => warning.startsWith("Title length")).length],
  ["description-length", warnings.filter((warning) => warning.startsWith("Description length")).length],
  ["duplicate-copy", warnings.filter((warning) => warning.startsWith("Duplicate title+description")).length],
  ["untranslated-copy", warnings.filter((warning) => warning.startsWith("Untranslated title+description")).length],
]
  .map(([kind, count]) => `${kind}=${count}`)
  .join(", ");

console.log(`SEO inventory: ${entries.length} URLs (${routeCounts})`);
console.log(`Sitemap parity: ${sitemapPaths.size} URLs`);
console.log(`Internal-link coverage: landing=${linkedLandingSlugs.size}/${landingPages.length}, tags=${linkedTagSlugs.size}/${allTagSlugs.size}`);
console.log(`Structural errors: ${errors.length}`);
console.log(`Quality warnings: ${warnings.length} (${warningCounts})`);

if (errors.length > 0) {
  console.error("\nStructural errors:");
  errors.slice(0, 50).forEach((error) => console.error(`- ${error}`));
}

if (warnings.length > 0) {
  console.warn("\nQuality warning sample:");
  warnings.slice(0, 50).forEach((warning) => console.warn(`- ${warning}`));
  if (warnings.length > 50) {
    console.warn(`- ... ${warnings.length - 50} additional warnings`);
  }
}

if (errors.length > 0 || (strict && warnings.length > 0)) {
  process.exitCode = 1;
}
