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
      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.services.map((service, index) => (
          <article key={service.slug} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-slate-950 text-sm font-black text-slate-200">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-5 text-2xl font-black text-slate-950">{service.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            <ul className="mt-5 space-y-2">
              {service.bullets.map((item) => <li key={item} className="text-sm font-semibold text-slate-700">• {item}</li>)}
            </ul>
            <a href={`/kurumsal-web-sitesi/hizmetler/${service.slug}`} className="corporate-button mt-6 inline-flex text-sm font-black text-slate-700">Detaylı İncele</a>
          </article>
        ))}
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
