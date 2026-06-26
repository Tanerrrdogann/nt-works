import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import type { TrustPage } from "@/data/trust-pages";

export default function TrustPageView({ page }: { page: TrustPage }) {
  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-5xl mx-auto">
      <RevealItem className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">NT Web Çözümleri</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">{page.title}</h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{page.description}</p>
      </RevealItem>

      <div className="grid gap-5">
        {page.sections.map((section) => (
          <RevealItem key={section.heading} className="border border-white/10 bg-[#071225]/65 p-6 md:p-8">
            <h2 className="text-2xl font-medium text-white">{section.heading}</h2>
            <div className="mt-5 space-y-4 text-gray-400 leading-8">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </RevealItem>
        ))}
      </div>

      <RevealItem className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium text-white">Projenizi netleştirelim</h2>
        <p className="mt-4 max-w-3xl text-gray-400 leading-8">
          Kapsam, teslim süresi ve uygun ilerleme şeklini konuşmak için proje ihtiyacınızı kısa şekilde yazabilirsiniz.
        </p>
        <Link href="/contact" className="shimmer-button mt-6 inline-flex items-center gap-2 bg-white px-7 py-3 text-sm font-bold text-black">
          Teklif Al <ArrowRight size={16} />
        </Link>
      </RevealItem>
    </PageReveal>
  );
}
