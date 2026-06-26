import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import RatingStars from "@/components/RatingStars";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portföy ve Tamamlanan İşler",
  description: "NT Web Çözümleri tarafından tamamlanan gerçek müşteri işleri, Bionluk yorumları ve detaylı proje portföyleri.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const clientProjects = projectsData.filter((project) => getProjectMeta(project.slug).projectKind === "client");

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Portföy", path: "/portfolio" },
        ]),
        itemListJsonLd({
          name: "NT Web Çözümleri tamamlanan işler",
          description: "Gerçek müşteri işleri ve Bionluk üzerinden doğrulanmış portföy kayıtları.",
          items: clientProjects.map((project) => ({
            name: project.title,
            description: project.shortDesc,
            path: `/projects/${project.slug}`,
          })),
        }),
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
        <RevealItem className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Portföy</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            Tamamlanan gerçek işler ve <span className="text-gray-500">Bionluk referansları</span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">
            Bu sayfada gerçek müşteri işleri yer alır. Müşteri adı ve detaylar, izin ve gizlilik durumuna göre açık ya da anonim gösterilir.
          </p>
        </RevealItem>

        <div className="grid gap-5 md:grid-cols-3">
          {clientProjects.map((project) => {
            const meta = getProjectMeta(project.slug);
            const testimonial = meta.testimonialSlug ? testimonials.find((item) => item.slug === meta.testimonialSlug) : undefined;

            return (
              <RevealItem key={project.slug} className="portfolio-card relative overflow-hidden border border-white/10 bg-[#071225]/88 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
                <h2 className="mt-3 text-2xl font-medium text-white">{project.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-400">{project.shortDesc}</p>
                <div className="mt-5 border-t border-white/10 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">Sonuç</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">{meta.result ?? "Bionluk üzerinden tamamlanan gerçek müşteri işi."}</p>
                </div>
                {testimonial && (
                  <div className="mt-5 border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-bold text-white">{testimonial.displayName}</p>
                      <RatingStars rating={testimonial.rating} label="Puan" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-gray-400 line-clamp-4">{testimonial.text}</p>
                  </div>
                )}
                <Link href={`/projects/${project.slug}`} className="shimmer-button mt-6 inline-block bg-white px-5 py-2.5 text-sm font-bold text-black">
                  İşi Detaylı İncele
                </Link>
              </RevealItem>
            );
          })}
        </div>
      </PageReveal>
    </>
  );
}
