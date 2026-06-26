import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bakım ve Geliştirme Paketleri",
  description: "Mevcut web sitesi, admin panel, entegrasyon veya özel yazılım sistemleri için aylık bakım ve geliştirme desteği.",
  path: "/maintenance-packages",
});

const packages = [
  {
    name: "Temel Bakım",
    desc: "Yayındaki site veya sistem için küçük kontroller, ufak hata düzeltmeleri ve teknik danışmanlık.",
    items: ["Küçük hata kontrolü", "İçerik/veri kontrolü", "Teknik danışmanlık", "Aylık kısa durum notu"],
  },
  {
    name: "Standart Geliştirme",
    desc: "Aktif kullanılan sistemlerde küçük geliştirmeler, düzenli bakım ve öncelikli destek akışı.",
    items: ["Küçük geliştirmeler", "Form/panel kontrolleri", "Performans ve link kontrolü", "Yeni ihtiyaç planlama"],
  },
  {
    name: "Pro Teknik Destek",
    desc: "Admin panel, entegrasyon veya özel yazılım tarafında daha düzenli teknik destek ve geliştirme planı.",
    items: ["Entegrasyon kontrolü", "Veri ve hata inceleme", "Yeni modül planlama", "Öncelikli teknik destek"],
  },
];

export default function MaintenancePackagesPage() {
  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Düzenli Destek</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          Teslim sonrası bakım ve <span className="text-gray-500">geliştirme desteği</span>
        </h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">
          Web sitesi, admin panel, e-ticaret, entegrasyon ve özel yazılım sistemleri yayına alındıktan sonra küçük düzeltme, kontrol ve yeni geliştirme ihtiyaçları için planlı destek alınabilir.
        </p>
      </RevealItem>

      <div className="grid gap-5 md:grid-cols-3">
        {packages.map((item) => (
          <RevealItem key={item.name} className="premium-card border border-white/10 bg-[rgba(9,26,49,0.92)] p-6">
            <h2 className="text-2xl font-medium text-white">{item.name}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">{item.desc}</p>
            <div className="mt-6 grid gap-3">
              {item.items.map((feature) => (
                <div key={feature} className="border border-white/10 bg-white/5 p-3 text-sm text-gray-300">
                  {feature}
                </div>
              ))}
            </div>
          </RevealItem>
        ))}
      </div>

      <RevealItem className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium text-white">Yeni modül ve büyük geliştirmeler</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">
          Bakım paketleri sistemi canlı tutmaya ve küçük işleri planlı yürütmeye yöneliktir. Yeni modül, büyük entegrasyon, tasarım yenileme veya kapsam büyüten işler ayrıca fiyatlandırılır.
        </p>
        <Link href="/contact?service=maintenance" className="shimmer-button mt-6 inline-flex items-center gap-2 bg-white px-7 py-3 text-sm font-bold text-black">
          Bakım Desteği İçin Teklif Al <ArrowRight size={16} />
        </Link>
      </RevealItem>
    </PageReveal>
  );
}
