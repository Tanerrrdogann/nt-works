import { blogCategories, blogPosts } from "@/data/blog";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";

export type TranslatableRoute = {
  sourcePath: string;
  routeType: "static" | "service" | "landing" | "project" | "blog" | "blog-category" | "blog-tag";
  scope:
    | "global-ui"
    | "trust"
    | "sales"
    | "service"
    | "landing"
    | "sector"
    | "portfolio"
    | "demo"
    | "blog";
  commercialIntent: "brand" | "lead" | "trust" | "research" | "proof";
  title: string;
};

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export const staticTranslatableRoutes: TranslatableRoute[] = [
  { sourcePath: "/", routeType: "static", scope: "global-ui", commercialIntent: "brand", title: "Ana Sayfa" },
  { sourcePath: "/services", routeType: "static", scope: "service", commercialIntent: "lead", title: "Hizmetler" },
  { sourcePath: "/projects", routeType: "static", scope: "demo", commercialIntent: "proof", title: "Canlı Örnekler" },
  { sourcePath: "/portfolio", routeType: "static", scope: "portfolio", commercialIntent: "proof", title: "Portföy" },
  { sourcePath: "/blog", routeType: "static", scope: "blog", commercialIntent: "research", title: "Blog" },
  { sourcePath: "/about", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Hakkımızda" },
  { sourcePath: "/contact", routeType: "static", scope: "sales", commercialIntent: "lead", title: "İletişim" },
  { sourcePath: "/maintenance-packages", routeType: "static", scope: "trust", commercialIntent: "lead", title: "Bakım Paketleri" },
  { sourcePath: "/privacy", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Gizlilik" },
  { sourcePath: "/kvkk", routeType: "static", scope: "trust", commercialIntent: "trust", title: "KVKK" },
  { sourcePath: "/cookies", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Çerezler" },
  { sourcePath: "/terms", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Çalışma Koşulları" },
  { sourcePath: "/support", routeType: "static", scope: "trust", commercialIntent: "lead", title: "Teslim Sonrası Destek" },
  { sourcePath: "/scope-pricing", routeType: "static", scope: "trust", commercialIntent: "lead", title: "Kapsam ve Fiyatlandırma" },
  { sourcePath: "/work-process", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Çalışma Süreci" },
  { sourcePath: "/safe-bionluk", routeType: "static", scope: "trust", commercialIntent: "trust", title: "Bionluk ile Güvenli Çalışma" },
  { sourcePath: "/faq", routeType: "static", scope: "trust", commercialIntent: "research", title: "SSS" },
];

export function getTranslatableRoutes(): TranslatableRoute[] {
  const serviceRoutes = servicesData.map((service): TranslatableRoute => ({
    sourcePath: `/services/${service.slug}`,
    routeType: "service",
    scope: "service",
    commercialIntent: "lead",
    title: service.title,
  }));

  const landingRoutes = landingPages.map((page): TranslatableRoute => ({
    sourcePath: `/${page.slug}`,
    routeType: "landing",
    scope: page.slug.includes("icin") || page.slug.includes("firmalari") ? "sector" : "landing",
    commercialIntent: "lead",
    title: page.title,
  }));

  const projectRoutes = projectsData.map((project): TranslatableRoute => ({
    sourcePath: `/projects/${project.slug}`,
    routeType: "project",
    scope: project.projectKind === "client" ? "portfolio" : "demo",
    commercialIntent: "proof",
    title: project.title,
  }));

  const blogRoutes = blogPosts.map((post): TranslatableRoute => ({
    sourcePath: `/blog/${post.slug}`,
    routeType: "blog",
    scope: "blog",
    commercialIntent: "research",
    title: post.title,
  }));

  const blogCategoryRoutes = blogCategories.map((category): TranslatableRoute => ({
    sourcePath: `/blog/category/${normalize(category)}`,
    routeType: "blog-category",
    scope: "blog",
    commercialIntent: "research",
    title: category,
  }));

  const blogTagRoutes = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag): TranslatableRoute => ({
    sourcePath: `/blog/tag/${normalize(tag)}`,
    routeType: "blog-tag",
    scope: "blog",
    commercialIntent: "research",
    title: tag,
  }));

  return [
    ...staticTranslatableRoutes,
    ...serviceRoutes,
    ...landingRoutes,
    ...projectRoutes,
    ...blogRoutes,
    ...blogCategoryRoutes,
    ...blogTagRoutes,
  ];
}
