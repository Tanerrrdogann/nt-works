import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { getLandingPage, landingPages } from "@/data/landing-pages";
import { servicesData } from "@/data/services";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

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

  const service = servicesData.find((item) => item.slug === page.serviceSlug);

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
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
        <RevealItem className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">SEO Hizmet Sayfası</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">{page.title}</h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{page.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/contact?service=${page.serviceSlug}&source=${page.slug}`} className="shimmer-button inline-flex items-center gap-2 bg-white px-6 py-3 font-bold text-black">
              Bu Hizmet İçin Teklif Al <ArrowRight size={18} />
            </Link>
            {service && (
              <Link href={`/services/${service.slug}`} className="border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10">
                Ana Hizmeti İncele
              </Link>
            )}
          </div>
        </RevealItem>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <RevealItem className="border-t border-white/10 pt-8">
            <h2 className="text-2xl md:text-3xl font-medium">Hangi problemi çözer?</h2>
            <p className="mt-5 text-gray-400 leading-8">{page.problem}</p>
          </RevealItem>

          <RevealItem className="border-t border-white/10 pt-8">
            <h2 className="text-2xl md:text-3xl font-medium">Fiyatı etkileyenler</h2>
            <div className="mt-5 grid gap-3">
              {page.priceFactors.map((factor) => (
                <div key={factor} className="border border-white/10 bg-[#071225]/55 p-3 text-sm font-semibold text-gray-300">
                  {factor}
                </div>
              ))}
            </div>
          </RevealItem>
        </div>

        <RevealItem className="mt-8 border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium">Projeye dahil olabilecek modüller</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.modules.map((module) => (
              <div key={module} className="border border-white/10 bg-[#071225]/55 p-4 text-sm font-medium leading-6 text-gray-300">
                {module}
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="mt-8 border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium">Kapsam nasıl netleşir?</h2>
          <p className="mt-5 max-w-4xl text-gray-400 leading-8">
            Önce mevcut durumunuz, istediğiniz ekranlar, veri yapısı, teslim beklentisi ve bütçe aralığınız konuşulur. Sonrasında kapsam, süre ve fiyat netleşir. Ek modül, entegrasyon veya özel istekler ayrıca fiyatlandırılır.
          </p>
        </RevealItem>
      </PageReveal>
    </>
  );
}
