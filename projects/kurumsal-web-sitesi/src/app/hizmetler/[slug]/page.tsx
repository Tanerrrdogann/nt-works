import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = siteConfig.services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Hizmet Detayı" title={service.title} description={service.description} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-600">Neler dahil?</p>
          <ul className="mt-5 space-y-3">
            {service.bullets.map((item) => <li key={item} className="font-semibold text-slate-700">• {item}</li>)}
          </ul>
          <a href="/kurumsal-web-sitesi/iletisim" className="corporate-button mt-7 block rounded-[8px] bg-slate-950 px-5 py-4 text-center text-sm font-black text-white">Teklif Al</a>
        </aside>
        <div className="grid gap-4">
          {[
            ["Kimler için uygun?", "Kurumsal süreçlerini dijitalleştirmek, müşteri deneyimini güçlendirmek veya operasyonlarını tek panelden yönetmek isteyen işletmeler için uygundur."],
            ["Süreç nasıl ilerler?", "Önce ihtiyaç analizi yapılır, kapsam ve teklif netleştirilir. Ardından tasarım, geliştirme, test ve yayınlama aşamaları planlı şekilde yürütülür."],
            ["Güvenlik ve ölçeklenebilirlik", "Proje altyapısı ihtiyaca göre yetkilendirme, veri güvenliği, performans ve büyüme hedefleri düşünülerek tasarlanır."],
            ["Yayın sonrası destek", "Teslimden sonra bakım, geliştirme, teknik destek ve yeni özellik planlama süreçlerinde destek verilir."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
