import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal } from "@/components/animations/PageReveal";
import LandingPageView from "@/components/landing/LandingPageView";
import { defaultLandingFaqs, getLandingPage, landingPages } from "@/data/landing-pages";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return;

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: [page.title, ...page.modules, ...page.priceFactors],
  });
}

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return notFound();

  const faqs = page.faqs?.length ? page.faqs : defaultLandingFaqs(page.title);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: page.title, path: `/${page.slug}` },
        ]),
        serviceJsonLd({
          name: page.title,
          description: page.description,
          path: `/${page.slug}`,
          offers: page.modules,
        }),
        faqJsonLd(faqs),
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
        <LandingPageView page={page} />
      </PageReveal>
    </>
  );
}
