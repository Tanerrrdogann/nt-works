import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

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
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 md:py-16">
        {siteConfig.services.map((service, index) => (
          <article key={service.slug} className="reveal-card group relative overflow-hidden border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/80 md:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-slate-200 bg-slate-50 transition duration-500 group-hover:scale-125" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-slate-500 to-slate-200" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center border border-slate-200 bg-slate-950 text-xl font-black text-white shadow-sm">
                  {service.icon}
                </span>
                <span className="text-5xl font-black leading-none text-slate-100">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-6 text-2xl font-black leading-tight text-slate-950 md:text-3xl">{service.title}</h2>
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
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(226,232,240,0.16),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(148,163,184,0.14),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Çalışma biçimi</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Hizmetleri tek çalışan sistem gibi tasarlarız.</h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-slate-300">
              Her başlık aynı sırayla ilerler: önce ihtiyaç netleşir, sonra tasarım ve teknik yapı kurulup test edilerek yayına alınır. Bu yüzden süreç boş bir vaat değil, takip edilebilir bir plan olur.
            </p>
          </div>
          <div className="mt-9 grid gap-px bg-white/14 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.process.map(([step, title, description]) => (
              <article key={step} className="group min-h-56 bg-[#0b1830] p-5 transition duration-300 hover:bg-[#10213d] md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-black text-slate-500">{step}</p>
                  <span className="h-px flex-1 bg-white/14 transition group-hover:bg-white/28" />
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{description}</p>
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
