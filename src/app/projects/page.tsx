import { projectsData } from "@/data/projects";
import { getProjectMeta } from "@/data/project-meta";
import { getLocalizedProjectMeta, getLocalizedProjects } from "@/data/i18n/projects-en";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ProjectsPageView from "@/components/projects/ProjectsPageView";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/projects",
    fallback: {
      title: "Canlı Örnekler",
      description: "Canlı inceleyebileceğiniz uyarlanabilir web sitesi, e-ticaret, admin panel, randevu ve özel yazılım örnekleri.",
    },
  });
}

export default async function Projects() {
  const locale = await getServerLocale();
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const demoProjects = localizedProjects.filter((project) =>
    (locale === "de" || locale === "en" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh" ? getLocalizedProjectMeta(project.slug, locale) : getProjectMeta(project.slug)).projectKind !== "client"
  );

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
          name: locale === "de"
            ? "Live-Demos"
            : locale === "en"
              ? "Live Demos"
              : locale === "fr"
                ? "Démos en direct"
                : locale === "es"
                  ? "Demos en vivo"
                  : locale === "ar"
                    ? "نماذج حية"
                    : locale === "ru"
                      ? "Живые демо"
                      : locale === "pt"
                        ? "Demonstrações ao vivo"
                        : locale === "it" ? "Demo live" : locale === "nl" ? "Live demo’s" : locale === "zh" ? "在线演示" : "Canlı Örnekler",
          path: "/projects",
        },
      ], locale),
      itemListJsonLd({
        name: locale === "de"
          ? "Live-Demos von NT Web Çözümleri"
          : locale === "en"
            ? "NT Web Çözümleri Live Demos"
            : locale === "fr"
              ? "Démos en direct de NT Web Çözümleri"
              : locale === "es"
                ? "Demos en vivo de NT Web Çözümleri"
                : locale === "ar"
                  ? "النماذج الحية من NT Web Çözümleri"
                  : locale === "ru"
                    ? "Живые демо NT Web Çözümleri"
                    : locale === "pt"
                      ? "Demonstrações ao vivo da NT Web Çözümleri"
                      : locale === "it"
                        ? "Demo live di NT Web Çözümleri"
                        : locale === "nl"
                          ? "Live demo’s van NT Web Çözümleri"
                          : locale === "zh" ? "NT Web Çözümleri 在线演示" : "NT Web Çözümleri canlı örnekleri",
        description: locale === "de"
          ? "Anpassbare Live-Beispiele für Websites, E-Commerce, Kataloge, Buchungssysteme, Admin-Panels und individuelle Software."
          : locale === "en"
            ? "Adaptable live examples of websites, e-commerce, catalogs, booking systems, admin panels and custom software."
            : locale === "fr"
              ? "Exemples adaptables de sites, e-commerce, catalogues, réservations, panneaux d’administration et logiciels sur mesure."
              : locale === "es"
                ? "Ejemplos adaptables de sitios, comercio electrónico, catálogos, reservas, paneles de administración y software a medida."
                : locale === "ar"
                  ? "أمثلة حية قابلة للتخصيص للمواقع والتجارة الإلكترونية والكتالوجات والحجوزات ولوحات الإدارة والبرمجيات المخصصة."
                  : locale === "ru"
                    ? "Адаптируемые живые примеры сайтов, электронной коммерции, каталогов, бронирования, панелей управления и программного обеспечения на заказ."
                    : locale === "pt"
                      ? "Exemplos ao vivo adaptáveis de sites, comércio eletrónico, catálogos, reservas, painéis de administração e software à medida."
                      : locale === "it"
                        ? "Esempi live adattabili di siti, e-commerce, cataloghi, prenotazioni, pannelli di amministrazione e software su misura."
                        : locale === "nl"
                          ? "Aanpasbare live voorbeelden van websites, e-commerce, catalogi, reserveringen, beheerpanelen en maatwerksoftware."
                          : locale === "zh"
                            ? "可按需调整的网站、电子商务、产品目录、预约系统、管理面板和定制软件在线案例。"
          : "Uyarlanabilir web sitesi, e-ticaret, katalog, randevu, admin panel ve özel yazılım canlı örnekleri.",
        locale,
        items: demoProjects.map((project) => ({
          name: project.title,
          description: project.shortDesc,
          path: `/projects/${project.slug}`,
        })),
      }),
    ]} />
      <ProjectsPageView projects={demoProjects} />
    </>
  );
}
