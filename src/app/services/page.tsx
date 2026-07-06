import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicesPageView from "@/components/services/ServicesPageView";
import { servicesData } from "@/data/services";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hizmetler",
  description: "Web sitesi, katalog, sipariş, admin panel, CRM, randevu, entegrasyon, özel yazılım, AI otomasyon, mobil/webview ve bakım hizmetleri.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/services" },
          ]),
          itemListJsonLd({
            name: "NT Web Çözümleri hizmetleri",
            description: "Küçük işletmeler için web sitesi, satış sistemi, admin panel, entegrasyon ve özel yazılım hizmetleri.",
            items: servicesData.map((service) => ({
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
