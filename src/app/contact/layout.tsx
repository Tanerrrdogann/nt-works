import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/contact",
    fallback: {
      title: "İletişim ve Teklif Al",
      description: "Web sitesi, e-ticaret, admin panel, randevu sistemi ve özel yazılım projeniz için NT Web Çözümleri ile iletişime geçin.",
    },
  });
}

export default async function ContactLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();
  const isGerman = locale === "de";
  const isEnglish = locale === "en";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          {
            name: isGerman
              ? "Startseite"
              : isEnglish
                ? "Home"
                : isFrench
                  ? "Accueil"
                  : isSpanish
                    ? "Inicio"
                    : isArabic
                      ? "الرئيسية"
                      : isRussian
                        ? "Главная"
                        : isPortuguese ? "Início" : isItalian || isDutch ? "Home" : isChinese ? "首页" : "Ana Sayfa",
            path: "/",
          },
          {
            name: isGerman
              ? "Kontakt und Projektanfrage"
              : isEnglish
                ? "Contact and Project Inquiry"
                : isFrench
                  ? "Contact et demande de projet"
                  : isSpanish
                    ? "Contacto y solicitud de proyecto"
                    : isArabic
                      ? "تواصل معنا واطلب مشروعك"
                      : isRussian
                        ? "Контакты и заявка на проект"
                        : isPortuguese
                          ? "Contacto e pedido de projeto"
                          : isItalian
                            ? "Contatti e richiesta di progetto"
                            : isDutch ? "Contact en projectaanvraag" : isChinese ? "联系我们并提交项目需求" : "İletişim ve Teklif Al",
            path: "/contact",
          },
        ], locale),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: isGerman
            ? "Kontakt und Projektanfrage"
            : isEnglish
              ? "Contact and Project Inquiry"
              : isFrench
                ? "Contact et demande de projet"
                : isSpanish
                  ? "Contacto y solicitud de proyecto"
                  : isArabic
                    ? "تواصل معنا واطلب مشروعك"
                    : isRussian
                      ? "Контакты и заявка на проект"
                      : isPortuguese
                        ? "Contacto e pedido de projeto"
                        : isItalian
                          ? "Contatti e richiesta di progetto"
                          : isDutch ? "Contact en projectaanvraag" : isChinese ? "联系我们并提交项目需求" : "İletişim ve Teklif Al",
          description: isGerman
            ? "Kontaktseite für Websites, E-Commerce, Admin-Panels, Buchungssysteme und individuelle Software."
            : isEnglish
              ? "Contact page for websites, e-commerce, admin panels, booking systems and custom software projects."
              : isFrench
                ? "Page de contact pour les sites, boutiques en ligne, panneaux d’administration, réservations et logiciels sur mesure."
                : isSpanish
                  ? "Página de contacto para sitios, comercio electrónico, paneles de administración, reservas y software a medida."
                  : isArabic
                    ? "صفحة تواصل لمشاريع المواقع والتجارة الإلكترونية ولوحات الإدارة والحجوزات والبرمجيات المخصصة."
                    : isRussian
                      ? "Страница контактов для сайтов, электронной коммерции, панелей управления, бронирования и программного обеспечения на заказ."
                      : isPortuguese
                        ? "Página de contacto para sites, comércio eletrónico, painéis de administração, reservas e software à medida."
                        : isItalian
                          ? "Pagina di contatto per siti, e-commerce, pannelli di amministrazione, prenotazioni e software su misura."
                          : isDutch
                            ? "Contactpagina voor websites, e-commerce, beheerpanelen, reserveringen en maatwerksoftware."
                            : isChinese
                              ? "用于网站、电子商务、管理面板、预约系统和定制软件项目的联系页面。"
            : "Web sitesi, e-ticaret, admin panel, randevu sistemi ve özel yazılım projesi için iletişim sayfası.",
          url: `${siteConfig.url}${isGerman ? "/de" : isEnglish ? "/en" : isFrench ? "/fr" : isSpanish ? "/es" : isArabic ? "/ar" : isRussian ? "/ru" : isPortuguese ? "/pt" : isItalian ? "/it" : isDutch ? "/nl" : isChinese ? "/zh" : ""}/contact`,
          inLanguage: isGerman ? "de" : isEnglish ? "en" : isFrench ? "fr" : isSpanish ? "es" : isArabic ? "ar" : isRussian ? "ru" : isPortuguese ? "pt" : isItalian ? "it" : isDutch ? "nl" : isChinese ? "zh" : siteConfig.language,
        },
      ]} />
      {children}
    </>
  );
}
