import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import RatingStars from "@/components/RatingStars";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { bionlukStats, testimonials } from "@/data/testimonials";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Müşteri Yorumları",
  description: "NT Web Çözümleri için Bionluk üzerinden doğrulanmış müşteri değerlendirmeleri ve proje geri bildirimleri.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Ana Sayfa", path: "/" },
        { name: "Müşteri Yorumları", path: "/testimonials" },
      ])} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
        <RevealItem className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Doğrulanmış Geri Bildirimler</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            Bionluk üzerinden gelen <span className="text-gray-500">5 yıldızlı müşteri yorumları</span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">
            Yayınlanan yorumlar Bionluk profilindeki doğrulanmış değerlendirmelerden alınmıştır. Müşteri işi detayları izin ve gizlilik durumuna göre açık veya anonim gösterilir.
          </p>
        </RevealItem>

        <RevealItem className="mb-10 grid grid-cols-3 gap-3 md:gap-5">
          <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
            <div className="flex justify-center"><RatingStars rating={bionlukStats.rating} /></div>
            <p className="mt-2 text-xs md:text-sm text-gray-500">Bionluk değerlendirmesi</p>
          </div>
          <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
            <p className="text-3xl md:text-5xl font-light">{bionlukStats.reviewCount}</p>
            <p className="mt-2 text-xs md:text-sm text-gray-500">değerlendirme</p>
          </div>
          <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
            <p className="text-3xl md:text-5xl font-light">{bionlukStats.completedOrders}</p>
            <p className="mt-2 text-xs md:text-sm text-gray-500">sipariş</p>
          </div>
        </RevealItem>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <RevealItem key={testimonial.slug} className="premium-card border border-white/10 bg-[rgba(9,26,49,0.92)] p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-bold text-white">{testimonial.displayName}</h2>
                  <p className="mt-1 text-xs text-gray-500">{testimonial.projectType}</p>
                </div>
                <RatingStars rating={testimonial.rating} label="Puan" />
              </div>
              <p className="mt-5 text-sm leading-7 text-gray-400">{testimonial.text}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gray-500">Bionluk üzerinden doğrulanmış yorum</p>
              {testimonial.relatedProject && (
                <Link href={`/projects/${testimonial.relatedProject}`} className="mt-5 inline-block border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10">
                  İlgili Projeyi Gör
                </Link>
              )}
            </RevealItem>
          ))}
        </div>
      </PageReveal>
    </>
  );
}
