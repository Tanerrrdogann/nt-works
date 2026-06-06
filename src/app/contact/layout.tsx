import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "İletişim ve Teklif Al",
  description: "Web sitesi, e-ticaret, admin panel, randevu sistemi ve özel yazılım projeniz için NT Web Çözümleri ile iletişime geçin.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim ve Teklif Al", path: "/contact" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "İletişim ve Teklif Al",
          description: "Web sitesi, e-ticaret, admin panel, randevu sistemi ve özel yazılım projesi için iletişim sayfası.",
          url: `${siteConfig.url}/contact`,
          inLanguage: siteConfig.language,
        },
      ]} />
      {children}
    </>
  );
}
