import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız NT Web Çözümleri sayfası bulunamadı.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <PageReveal className="content-page min-h-[calc(100vh-220px)] px-6 pt-32 pb-24 text-white">
      <RevealItem className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">404</p>
        <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          Aradığınız sayfa taşınmış, kaldırılmış veya yanlış yazılmış olabilir.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="shimmer-button inline-flex items-center gap-2 bg-white px-6 py-3 font-bold text-black transition-colors hover:bg-gray-200">
            Ana Sayfaya Dön <ArrowRight size={18} />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
            Canlı Örnekleri Gör
          </Link>
        </div>
      </RevealItem>
    </PageReveal>
  );
}
