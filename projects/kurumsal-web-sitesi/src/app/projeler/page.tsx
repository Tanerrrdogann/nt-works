import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Projeler" title="Projelerimiz ve örnek case study çalışmaları" description="Farklı ihtiyaçlara yönelik geliştirdiğimiz dijital çözümlerden bazıları." />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2">
        {siteConfig.projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
            <div
              aria-label={project.title}
              className="aspect-[16/9] w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-black text-slate-950">{project.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => <span key={item} className="rounded-[8px] bg-slate-900 px-3 py-2 text-xs font-black text-slate-100">{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
