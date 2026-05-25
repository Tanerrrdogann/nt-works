import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Blog" title="İçerikler ve Rehberler" description="Yazılım, dijital dönüşüm ve teknoloji süreçlerine dair güncel içerikler." />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-3">
        {siteConfig.blog.map(([title, description, date, category]) => (
          <article key={title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
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
