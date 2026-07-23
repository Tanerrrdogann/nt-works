import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageView from "@/components/city/CityPageView";
import { PageReveal } from "@/components/animations/PageReveal";
import JsonLd from "@/components/seo/JsonLd";
import { cityPages, getCityPage } from "@/data/city-pages";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { getCitySeoCopy } from "@/lib/seo-strategy";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const { slug } = await params;
  const page = getCityPage(slug);
  if (!page) return;

  const path = `/sehir/${page.slug}`;
  const seo = getCitySeoCopy(page);

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path,
    keywords: [
      page.city,
      `${page.city} web tasarım`,
      `${page.city} özel yazılım`,
      `${page.city} web sitesi`,
      `${page.city} CRM sistemi`,
      `${page.city} pazaryeri entegrasyonu`,
      ...(page.searchIntents ?? []),
      ...(page.districtFocus ?? []),
      ...page.sectorFocus,
    ],
    alternateLocales: ["tr"],
  });
}

export function generateStaticParams() {
  return cityPages.map((page) => ({ slug: page.slug }));
}

export default async function CitySeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCityPage(slug);
  if (!page) return notFound();

  const path = `/sehir/${page.slug}`;

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: page.city, path },
        ]),
        serviceJsonLd({
          name: page.title,
          description: page.description,
          path,
          offers: page.solutions.map((solution) => solution.title),
        }),
      ]} />
      <PageReveal className="content-page mx-auto max-w-7xl px-6 pb-24 pt-32 text-white">
        <CityPageView page={page} />
      </PageReveal>
    </>
  );
}
