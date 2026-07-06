import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import ServiceDetailPageView from "@/components/services/ServiceDetailPageView";
import { servicesData } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return;

  return pageMetadata({
    title: service.title,
    description: service.longDesc,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      service.category,
      ...service.features,
      ...service.examples,
      ...service.priceFactors,
    ],
  });
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.longDesc,
            path: `/services/${service.slug}`,
            offers: service.modules,
          }),
          faqJsonLd(service.faqs),
        ]}
      />
      <ServiceDetailPageView slug={slug} />
    </>
  );
}
