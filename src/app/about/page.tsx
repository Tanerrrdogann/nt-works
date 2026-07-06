import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AboutPageView from "@/components/AboutPageView";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description: "NT Web Çözümleri, işletmelerin web sitesi ve özel yazılım ihtiyaçlarını canlı örneklerle netleştiren geliştirme ekibidir.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkımızda", path: "/about" },
      ])} />
      <AboutPageView />
    </>
  );
}
