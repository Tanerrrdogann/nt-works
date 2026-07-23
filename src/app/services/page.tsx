import JsonLd from "@/components/seo/JsonLd";
import ServicesPageView from "@/components/services/ServicesPageView";
import { servicesData } from "@/data/services";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/services",
    fallback: {
      title: "Hizmetler",
      description: "Web sitesi, katalog, sipariş, admin panel, CRM, randevu, entegrasyon, özel yazılım, AI otomasyon, mobil/webview ve bakım hizmetleri.",
    },
  });
}

export default async function Services() {
  const locale = await getServerLocale();
  const services = getLocalizedServices(servicesData, locale);

  return (
    <>
      <JsonLd
        data={[
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
                ? "Leistungen"
                : locale === "en" || locale === "fr" || locale === "es"
                  ? "Services"
                  : locale === "ar"
                    ? "الخدمات"
                    : locale === "ru"
                      ? "Услуги"
                      : locale === "pt"
                        ? "Serviços"
                        : locale === "it"
                          ? "Servizi"
                          : locale === "nl" ? "Diensten" : locale === "zh" ? "服务" : "Hizmetler",
              path: "/services",
            },
          ], locale),
          itemListJsonLd({
            name: locale === "de"
              ? "Leistungen von NT Web Çözümleri"
              : locale === "en"
                ? "NT Web Çözümleri Services"
                : locale === "fr"
                  ? "Services de NT Web Çözümleri"
                  : locale === "es"
                    ? "Servicios de NT Web Çözümleri"
                    : locale === "ar"
                      ? "خدمات NT Web Çözümleri"
                      : locale === "ru"
                        ? "Услуги NT Web Çözümleri"
                        : locale === "pt"
                          ? "Serviços da NT Web Çözümleri"
                          : locale === "it"
                            ? "Servizi di NT Web Çözümleri"
                            : locale === "nl"
                              ? "Diensten van NT Web Çözümleri"
                              : locale === "zh" ? "NT Web Çözümleri 服务" : "NT Web Çözümleri hizmetleri",
            description: locale === "de"
              ? "Websites, Vertriebssysteme, Admin-Panels, Integrationen und individuelle Software für Unternehmen."
              : locale === "en"
                ? "Websites, sales systems, admin panels, integrations and custom software for businesses."
                : locale === "fr"
                  ? "Sites web, systèmes de vente, panneaux d’administration, intégrations et logiciels sur mesure pour les entreprises."
                  : locale === "es"
                    ? "Sitios web, sistemas de ventas, paneles de administración, integraciones y software a medida para empresas."
                    : locale === "ar"
                      ? "مواقع وأنظمة مبيعات ولوحات إدارة وتكاملات وبرمجيات مخصصة للشركات."
                      : locale === "ru"
                        ? "Сайты, системы продаж, панели управления, интеграции и программное обеспечение на заказ для бизнеса."
                        : locale === "pt"
                          ? "Sites, sistemas de vendas, painéis de administração, integrações e software à medida para empresas."
                          : locale === "it"
                            ? "Siti, sistemi di vendita, pannelli di amministrazione, integrazioni e software su misura per le aziende."
                            : locale === "nl"
                              ? "Websites, verkoopsystemen, beheerpanelen, integraties en maatwerksoftware voor bedrijven."
                              : locale === "zh"
                                ? "面向企业的网站、销售系统、管理面板、系统集成和定制软件服务。"
              : "Küçük işletmeler için web sitesi, satış sistemi, admin panel, entegrasyon ve özel yazılım hizmetleri.",
            locale,
            items: services.map((service) => ({
              name: service.title,
              description: service.shortDesc,
              path: `/services/${service.slug}`,
            })),
          }),
        ]}
      />
      <ServicesPageView />
    </>
  );
}
