import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Projeler" title="Projelerimiz ve örnek case study çalışmaları" description="Farklı ihtiyaçlara yönelik geliştirdiğimiz dijital çözümlerden bazıları." />
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-3 py-12 sm:px-5 md:grid-cols-3 md:gap-5 md:py-16">
        {siteConfig.projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
            <div
              aria-label={project.title}
              className="aspect-[16/9] w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="p-3 md:p-6">
              <h2 className="text-sm font-black leading-5 text-slate-950 md:text-2xl md:leading-8">{project.title}</h2>
              <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600 md:mt-3 md:text-base md:leading-7">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
                {project.tech.map((item) => <span key={item} className="rounded-[8px] bg-slate-900 px-2 py-1 text-[10px] font-black text-slate-100 md:px-3 md:py-2 md:text-xs">{item}</span>)}
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
