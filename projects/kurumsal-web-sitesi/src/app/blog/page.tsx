import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Blog" title="İçerikler ve Rehberler" description="Yazılım, dijital dönüşüm ve teknoloji süreçlerine dair güncel içerikler." />
      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-10 sm:px-5 md:grid-cols-3 md:gap-5 md:py-16">
        {siteConfig.blog.map(([title, description, date, category]) => (
          <article key={title} className="border border-slate-200 bg-white p-5 shadow-sm md:rounded-[8px] md:p-6">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-600">{category} · {date}</p>
            <h2 className="mt-4 text-xl font-black text-slate-950">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
            <a href="/kurumsal-web-sitesi/iletisim" className="corporate-button mt-5 inline-flex text-sm font-black text-slate-700">Bu Konuda Görüşelim</a>
          </article>
        ))}
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
