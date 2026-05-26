import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero
        eyebrow="Hizmetler"
        title="Kurumsal yazılım, web, mobil ve danışmanlık hizmetleri"
        description="İşletmenizin ihtiyacına göre kapsamı net, sürdürülebilir ve ölçeklenebilir dijital çözümler geliştiriyoruz."
      />
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-3 py-12 sm:px-5 md:grid-cols-3 md:gap-4 md:py-16">
        {siteConfig.services.map((service, index) => (
          <article key={service.slug} className="rounded-[8px] border border-slate-200 bg-white p-3 shadow-sm md:p-6">
            <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-slate-950 text-xs font-black text-slate-200 md:h-12 md:w-12 md:text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 text-sm font-black leading-5 text-slate-950 md:mt-5 md:text-2xl md:leading-8">{service.title}</h2>
            <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600 md:mt-3 md:text-base md:leading-7">{service.description}</p>
            <ul className="mt-3 space-y-1 md:mt-5 md:space-y-2">
              {service.bullets.map((item) => <li key={item} className="text-[11px] font-semibold text-slate-700 md:text-sm">• {item}</li>)}
            </ul>
            <a href={`/kurumsal-web-sitesi/hizmetler/${service.slug}`} className="corporate-button mt-4 inline-flex text-xs font-black text-slate-700 md:mt-6 md:text-sm">Detaylı İncele</a>
          </article>
        ))}
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
