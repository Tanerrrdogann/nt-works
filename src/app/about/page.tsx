import JsonLd from "@/components/seo/JsonLd";
import AboutPageView from "@/components/AboutPageView";
import { breadcrumbJsonLd } from "@/lib/seo";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/about",
    fallback: {
      title: "Hakkımızda",
      description: "NT Web Çözümleri, işletmelerin web sitesi ve özel yazılım ihtiyaçlarını canlı örneklerle netleştiren geliştirme ekibidir.",
    },
  });
}

export default async function About() {
  const locale = await getServerLocale();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
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
            ? "Über uns"
            : locale === "en"
              ? "About Us"
              : locale === "fr"
                ? "À propos"
                : locale === "es"
                  ? "Sobre nosotros"
                  : locale === "ar"
                    ? "من نحن"
                    : locale === "ru"
                      ? "О нас"
                      : locale === "pt"
                        ? "Sobre nós"
                        : locale === "it" ? "Chi siamo" : locale === "nl" ? "Over ons" : locale === "zh" ? "关于我们" : "Hakkımızda",
          path: "/about",
        },
      ], locale)} />
      <AboutPageView />
    </>
  );
}
