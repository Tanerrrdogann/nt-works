import { blogCategories, blogPosts } from "@/data/blog";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { cityPages } from "@/data/city-pages";
import {
  getLocalizedBlogCategory,
  getLocalizedBlogPost,
  getLocalizedBlogTag,
} from "@/data/i18n/blog-en";
import { getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { getLocalizedProjects } from "@/data/i18n/projects-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { publishedLocales, type Locale, withLocalePath } from "@/lib/i18n";
import {
  getBlogHubSeoCopy,
  getCitySeoCopy,
  getLandingSeoCopy,
  getProjectSeoCopy,
  getSeoRouteProfile,
  getServiceSeoCopy,
  getStaticSeoCopy,
  staticSeoPaths,
  type SeoFunnelStage,
  type SeoRouteType,
  type SeoSearchIntent,
} from "@/lib/seo-strategy";
import { getBlogSeoCopy } from "@/lib/blog-presentation";

export type SeoInventoryEntry = {
  locale: Locale;
  sourcePath: string;
  localizedPath: string;
  routeType: SeoRouteType;
  searchIntent: SeoSearchIntent;
  funnelStage: SeoFunnelStage;
  commercial: boolean;
  title: string;
  description: string;
  h1: string;
  indexable: boolean;
};

const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

function createEntry({
  locale,
  sourcePath,
  title,
  description,
  h1,
}: {
  locale: Locale;
  sourcePath: string;
  title: string;
  description: string;
  h1: string;
}): SeoInventoryEntry {
  return {
    locale,
    sourcePath,
    localizedPath: withLocalePath(sourcePath, locale),
    ...getSeoRouteProfile(sourcePath),
    title,
    description,
    h1,
    indexable: true,
  };
}

function localizedEntries(locale: Locale): SeoInventoryEntry[] {
  const staticEntries = staticSeoPaths.map((sourcePath) => {
    const copy = getStaticSeoCopy(sourcePath, locale);
    return createEntry({
      locale,
      sourcePath,
      title: copy.title,
      description: copy.description,
      h1: copy.title,
    });
  });

  const serviceEntries = getLocalizedServices(servicesData, locale).map((service) =>
    {
      const copy = getServiceSeoCopy(service, locale);
      return createEntry({
        locale,
        sourcePath: `/services/${service.slug}`,
        title: copy.title,
        description: copy.description,
        h1: service.title,
      });
    },
  );

  const projectEntries = getLocalizedProjects(projectsData, locale).map((project) => {
    const copy = getProjectSeoCopy(project, locale);
    return createEntry({
      locale,
      sourcePath: `/projects/${project.slug}`,
      title: copy.title,
      description: copy.description,
      h1: project.title,
    });
  });

  const postEntries = blogPosts.map((post) => {
    const localizedPost = getLocalizedBlogPost(post, locale);
    const copy = getBlogSeoCopy(localizedPost);
    return createEntry({
      locale,
      sourcePath: `/blog/${post.slug}`,
      title: copy.title,
      description: copy.description,
      h1: localizedPost.title,
    });
  });

  const categoryEntries = blogCategories.map((category) => {
    const label = getLocalizedBlogCategory(category, locale);
    const articleCount = blogPosts.filter((post) => post.category === category).length;
    const copy = getBlogHubSeoCopy({ kind: "category", label, locale, articleCount });
    return createEntry({
      locale,
      sourcePath: `/blog/category/${normalizeBlogPath(category)}`,
      title: copy.title,
      description: copy.description,
      h1: copy.title,
    });
  });

  const tagEntries = tags.map((tag) => {
    const label = getLocalizedBlogTag(tag, locale);
    const articleCount = blogPosts.filter((post) => post.tags.includes(tag)).length;
    const copy = getBlogHubSeoCopy({ kind: "tag", label, locale, articleCount });
    return createEntry({
      locale,
      sourcePath: `/blog/tag/${normalizeBlogPath(tag)}`,
      title: copy.title,
      description: copy.description,
      h1: copy.title,
    });
  });

  const landingEntries = landingPages.map((page) => {
    const localizedPage = getLocalizedLandingPage(page, locale);
    const copy = getLandingSeoCopy(localizedPage, locale);
    return createEntry({
      locale,
      sourcePath: `/${page.slug}`,
      title: copy.title,
      description: copy.description,
      h1: localizedPage.title,
    });
  });

  return [
    ...staticEntries,
    ...serviceEntries,
    ...projectEntries,
    ...postEntries,
    ...categoryEntries,
    ...tagEntries,
    ...landingEntries,
  ];
}

export function getSeoInventory(): SeoInventoryEntry[] {
  const localized = publishedLocales.flatMap(localizedEntries);
  const cities = cityPages.map((city) =>
    {
      const copy = getCitySeoCopy(city);
      return createEntry({
        locale: "tr",
        sourcePath: `/sehir/${city.slug}`,
        title: copy.title,
        description: copy.description,
        h1: city.title,
      });
    },
  );

  return [...localized, ...cities];
}
