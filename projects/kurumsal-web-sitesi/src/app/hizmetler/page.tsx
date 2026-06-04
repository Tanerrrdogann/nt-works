import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

const serviceVisuals = [
  "bg-[radial-gradient(circle_at_24%_22%,rgba(226,232,240,0.32),transparent_24%),linear-gradient(135deg,#071225,#0f2748)]",
  "bg-[radial-gradient(circle_at_76%_18%,rgba(148,163,184,0.34),transparent_24%),linear-gradient(135deg,#0b1830,#111827)]",
  "bg-[radial-gradient(circle_at_22%_78%,rgba(203,213,225,0.3),transparent_26%),linear-gradient(135deg,#071225,#172554)]",
  "bg-[radial-gradient(circle_at_78%_72%,rgba(226,232,240,0.28),transparent_24%),linear-gradient(135deg,#111827,#0b1830)]",
  "bg-[radial-gradient(circle_at_30%_30%,rgba(148,163,184,0.35),transparent_22%),linear-gradient(135deg,#071225,#1e293b)]",
  "bg-[radial-gradient(circle_at_72%_24%,rgba(226,232,240,0.26),transparent_24%),linear-gradient(135deg,#020617,#0f2748)]",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero
        eyebrow="Hizmetler"
        title="Sadece sayfa değil, işletmenin çalışacağı dijital sistemleri kurarız."
        description="Her hizmet; analiz, arayüz, yazılım mimarisi, yayınlama ve destek adımlarıyla düşünülür. Böylece proje güzel görünmekle kalmaz, operasyonu da taşır."
      />
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,37,0.045)_0_1px,transparent_1px_22px)]" />
        <div className="relative mx-auto grid max-w-7xl gap-4 px-5 py-10 md:grid-cols-3 md:py-14">
          {[
            ["Net kapsam", "Süre, teslimat ve öncelikler proje başlamadan görünür olur."],
            ["Kurumsal görünüm", "Markanın güven veren dili tüm ekranlara tutarlı yayılır."],
            ["Yayın sonrası destek", "Bakım, geliştirme ve yeni ihtiyaçlar aynı akışta yönetilir."],
          ].map(([title, text]) => (
            <article key={title} className="reveal-card border border-slate-200 bg-slate-50 p-6">
              <p className="text-xl font-black text-slate-950">{title}</p>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 md:grid-cols-2 md:py-18">
        {siteConfig.services.map((service, index) => (
          <article key={service.slug} className="reveal-card group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80">
            <div className={`relative min-h-48 overflow-hidden ${serviceVisuals[index % serviceVisuals.length]}`}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0_1px,transparent_1px_18px)] opacity-55" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/22 transition duration-500 group-hover:scale-125" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="grid h-14 w-14 place-items-center border border-white/24 bg-white/10 text-xl font-black text-white backdrop-blur">
                  {service.icon}
                </span>
                <span className="text-6xl font-black text-white/16">{String(index + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="p-6 md:p-7">
              <h2 className="text-2xl font-black leading-tight text-slate-950 md:text-3xl">{service.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.bullets.slice(0, 4).map((item) => (
                  <p key={item} className="border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Analizden yayına</p>
                <a href={`/kurumsal-web-sitesi/hizmetler/${service.slug}`} className="corporate-button text-sm font-black text-slate-900">
                  Detaylı İncele
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-[#071225] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_0.8fr]">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">Hizmetleri ayrı satır değil, tek çalışan sistem olarak tasarlarız.</h2>
          <div className="grid gap-3">
            {siteConfig.process.slice(0, 4).map(([step, title, description]) => (
              <article key={step} className="border border-white/14 bg-white/5 p-5">
                <p className="text-sm font-black text-slate-400">{step}</p>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
