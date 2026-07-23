import JsonLd from "@/components/seo/JsonLd";
import PortfolioPageView, { type PortfolioProject } from "@/components/projects/PortfolioPageView";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { bionlukStats } from "@/data/testimonials";
import { getLocalizedProjectMeta, getLocalizedProjects, getLocalizedTestimonials } from "@/data/i18n/projects-en";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/portfolio",
    fallback: {
      title: "Portföy ve Tamamlanan İşler",
      description: "NT Web Çözümleri tarafından tamamlanan gerçek müşteri işleri, müşteri yorumları ve detaylı proje portföyleri.",
    },
  });
}

export default async function PortfolioPage() {
  const locale = await getServerLocale();
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const clientProjects = localizedProjects.filter((project) =>
    (locale === "de" || locale === "en" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh" ? getLocalizedProjectMeta(project.slug, locale) : getProjectMeta(project.slug)).projectKind === "client"
  );
  const portfolioProjects: PortfolioProject[] = clientProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    shortDesc: project.shortDesc,
    result: (locale === "de" || locale === "en" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh"
      ? getLocalizedProjectMeta(project.slug, locale)
      : getProjectMeta(project.slug)).result,
  }));
  const localizedTestimonials = getLocalizedTestimonials(locale);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          {
            name: locale === "de"
              ? "Startseite"
              : locale === "en"
                ? "Home"
                : locale === "fr"
                  ? "Accueil"
                  : locale === "es"
                    ? "Inicio"
                    : locale === "ar"
                      ? "الرئيسية"
                      : locale === "ru"
                        ? "Главная"
                        : locale === "pt"
                          ? "Início"
                          : locale === "it" || locale === "nl" ? "Home" : locale === "zh" ? "首页" : "Ana Sayfa",
            path: "/",
          },
          {
            name: locale === "de" || locale === "en" || locale === "fr" || locale === "es"
              ? "Portfolio"
              : locale === "ar"
                ? "معرض الأعمال"
                : locale === "ru"
                  ? "Портфолио"
                  : locale === "pt"
                    ? "Portefólio"
                    : locale === "it" || locale === "nl"
                      ? "Portfolio"
                      : locale === "zh" ? "作品集" : "Portföy",
            path: "/portfolio",
          },
        ], locale),
        itemListJsonLd({
          name: locale === "de"
            ? "Abgeschlossene Projekte von NT Web Çözümleri"
            : locale === "en"
              ? "Completed Projects by NT Web Çözümleri"
              : locale === "fr"
                ? "Projets réalisés par NT Web Çözümleri"
                : locale === "es"
                  ? "Proyectos realizados por NT Web Çözümleri"
                  : locale === "ar"
                    ? "المشاريع المنجزة من NT Web Çözümleri"
                    : locale === "ru"
                      ? "Завершённые проекты NT Web Çözümleri"
                      : locale === "pt"
                        ? "Projetos concluídos pela NT Web Çözümleri"
                        : locale === "it"
                          ? "Progetti completati da NT Web Çözümleri"
                          : locale === "nl"
                            ? "Afgeronde projecten van NT Web Çözümleri"
                            : locale === "zh" ? "NT Web Çözümleri 已完成项目" : "NT Web Çözümleri tamamlanan işler",
          description: locale === "de"
            ? "Reale Kundenprojekte und Portfolioeinträge."
            : locale === "en"
              ? "Real client projects and portfolio entries."
              : locale === "fr"
                ? "Projets clients réels et éléments du portfolio."
                : locale === "es"
                  ? "Proyectos reales de clientes y elementos del portafolio."
                  : locale === "ar"
                    ? "مشاريع عملاء حقيقية وعناصر من معرض الأعمال."
                    : locale === "ru"
                      ? "Реальные клиентские проекты и элементы портфолио."
                      : locale === "pt"
                        ? "Projetos reais de clientes e elementos do portefólio."
                        : locale === "it"
                          ? "Progetti clienti reali ed elementi del portfolio."
                          : locale === "nl"
                            ? "Echte klantprojecten en portfolio-items."
                            : locale === "zh" ? "真实客户项目与作品集内容。" : "Gerçek müşteri işleri ve proje portföy kayıtları.",
          locale,
          items: clientProjects.map((project) => ({
            name: project.title,
            description: project.shortDesc,
            path: `/projects/${project.slug}`,
          })),
        }),
      ]} />
      <PortfolioPageView projects={portfolioProjects} testimonials={localizedTestimonials} stats={bionlukStats} />
    </>
  );
}
