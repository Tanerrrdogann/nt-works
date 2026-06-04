import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = siteConfig.services.find((item) => item.slug === slug);
  const relatedServices = siteConfig.services.filter((item) => item.slug !== slug).slice(0, 3);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Hizmet Detayı" title={service.title} description={service.description} />
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(7,18,37,0.08),transparent_24%),linear-gradient(135deg,rgba(7,18,37,0.04)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="reveal-card self-start border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 lg:sticky lg:top-28">
            <div className="grid h-16 w-16 place-items-center border border-white/20 bg-white/10 text-2xl font-black">
              {service.icon}
            </div>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-slate-400">Neler dahil?</p>
            <ul className="mt-5 grid gap-3">
              {service.bullets.map((item) => (
                <li key={item} className="border border-white/12 bg-white/5 px-4 py-3 font-semibold text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
            <a href="/kurumsal-web-sitesi/iletisim" className="corporate-button mt-7 block bg-slate-200 px-5 py-4 text-center text-sm font-black text-black">
              Teklif Al
            </a>
          </aside>
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {[
                ["01", "Analiz", "İhtiyaç, hedef ve mevcut süreç okunur."],
                ["02", "Tasarım", "Ekranlar ve kullanıcı akışı netleşir."],
                ["03", "Yayın", "Test, teslim ve destek planı yapılır."],
              ].map(([step, title, text]) => (
                <article key={step} className="border border-slate-200 bg-slate-50 p-4 md:p-5">
                  <p className="text-2xl font-black text-slate-300 md:text-3xl">{step}</p>
                  <h2 className="mt-3 text-lg font-black text-slate-950 md:text-xl">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">{text}</p>
                </article>
              ))}
            </div>
          {[
            ["Kimler için uygun?", "Kurumsal süreçlerini dijitalleştirmek, müşteri deneyimini güçlendirmek veya operasyonlarını tek panelden yönetmek isteyen işletmeler için uygundur."],
            ["Süreç nasıl ilerler?", "Önce ihtiyaç analizi yapılır, kapsam ve teklif netleştirilir. Ardından tasarım, geliştirme, test ve yayınlama aşamaları planlı şekilde yürütülür."],
            ["Güvenlik ve ölçeklenebilirlik", "Proje altyapısı ihtiyaca göre yetkilendirme, veri güvenliği, performans ve büyüme hedefleri düşünülerek tasarlanır."],
            ["Yayın sonrası destek", "Teslimden sonra bakım, geliştirme, teknik destek ve yeni özellik planlama süreçlerinde destek verilir."],
          ].map(([title, text]) => (
            <article key={title} className="reveal-card border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
            <div className="grid gap-5 border border-slate-200 bg-slate-950 p-6 text-white md:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Teslim çıktısı</p>
                <h2 className="mt-3 text-3xl font-black">Net çalışan, yönetilebilir ve geliştirilebilir bir yapı.</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                {["Teknik kurulum", "Mobil/tablet uyum", "Performans kontrolü", "Yayın sonrası geliştirme planı"].map((item) => (
                  <p key={item} className="border border-white/14 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </div>
        </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">Bağlantılı hizmetler</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Bu hizmet çoğu projede şu başlıklarla birlikte çalışır.</h2>
          </div>
          <a href="/kurumsal-web-sitesi/hizmetler" className="corporate-button hidden text-sm font-black text-slate-700 md:inline-flex">
            Tüm Hizmetler
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {relatedServices.map((item) => (
            <a key={item.slug} href={`/kurumsal-web-sitesi/hizmetler/${item.slug}`} className="border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-xl md:p-5">
              <span className="text-2xl font-black text-slate-300">{item.icon}</span>
              <h3 className="mt-3 text-lg font-black text-slate-950 md:mt-4 md:text-xl">{item.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
