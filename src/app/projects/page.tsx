import { projectsData } from "@/data/projects";
import { getProjectMeta } from "@/data/project-meta";
import { getBionlukLink } from "@/data/bionluk-links";
import Link from "next/link";
import type { Metadata } from "next";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import type { ProjectType } from "@/types";

type ProjectWithDemo = ProjectType & {
  demoUrl?: string;
  isDemoEnabled?: boolean;
};

export const metadata: Metadata = pageMetadata({
  title: "Canlı Örnekler",
  description: "Canlı inceleyebileceğiniz uyarlanabilir web sitesi, e-ticaret, admin panel, randevu ve özel yazılım örnekleri.",
  path: "/projects",
});

export default function Projects() {
  const demoProjects = projectsData.filter((project) => getProjectMeta(project.slug).projectKind !== "client");

  return (
    <>
    <JsonLd data={[
      breadcrumbJsonLd([
        { name: "Ana Sayfa", path: "/" },
        { name: "Canlı Örnekler", path: "/projects" },
      ]),
      itemListJsonLd({
        name: "NT Web Çözümleri canlı örnekleri",
        description: "Uyarlanabilir web sitesi, e-ticaret, katalog, randevu, admin panel ve özel yazılım canlı örnekleri.",
        items: demoProjects.map((project) => ({
          name: project.title,
          description: project.shortDesc,
          path: `/projects/${project.slug}`,
        })),
      }),
    ]} />
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Canlı Örnekler ve <br/><span className="text-gray-500">Uyarlanabilir Sistem Kapsamları</span></h1>
        <p className="mobile-compact-text text-base md:text-xl text-gray-400 max-w-3xl">Canlı inceleyebileceğiniz uyarlanabilir web sitesi ve yazılım örnekleri. Gerçek müşteri işleri ayrı Portföy sayfasında gösterilir.</p>
        <div className="mt-7 max-w-4xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-gray-300">
          Bu sayfadaki sistemler demo/önizleme amaçlıdır ve gerçek müşteri işi gibi gösterilmez. Tamamlanan işler ve Bionluk yorumları Portföy ve Müşteri Yorumları sayfalarında yer alır.
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
        {demoProjects.map((proj) => {
          const project = proj as ProjectWithDemo;
          const meta = getProjectMeta(project.slug);
          const demoEnabled = project.isDemoEnabled !== false && Boolean(project.demoUrl);

          return (
          <RevealItem key={project.slug} className="project-showcase-card mobile-compact-card group relative overflow-hidden bg-[rgba(9,26,49,0.92)] border border-white/10 p-4 md:p-8 flex flex-col justify-between">
            <div className="relative z-10">
              <span className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-2 md:mb-3 block">{project.category}</span>
              <span className="mb-3 inline-block border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {meta.projectKind === "client" ? "Gerçek müşteri işi" : "Uyarlanabilir demo"}
              </span>
              <h2 className="text-base md:text-2xl font-medium mb-3 md:mb-4">{project.title}</h2>
              <p className="text-gray-400 mb-4 md:mb-8 text-xs md:text-sm leading-5">{project.shortDesc}</p>
              
              <div className="mobile-hide-detail mb-6 pb-6 border-b border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Çözülen Problem</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{project.problem}</p>
              </div>
            </div>
            
            <div className="mobile-actions relative z-10 flex flex-wrap gap-2 md:gap-4 mt-auto">
              <Link href={`/projects/${project.slug}`} className="shimmer-button bg-white text-black px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-bold transition-colors">
                Detayları İncele
              </Link>
              {demoEnabled ? (
                <Link href={project.demoUrl!} target="_blank" rel="noreferrer" className="border border-white/20 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors">
                  Canlı İncele
                </Link>
              ) : (
              <button type="button" disabled className="border border-white/15 text-gray-500 px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium cursor-not-allowed opacity-75">
                Canlı İncele
              </button>
              )}
              <Link href={getBionlukLink(project.slug)} target="_blank" className="border border-white/20 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors project-secondary-action">
                Bionluk Üzerinden İlerle
              </Link>
            </div>
          </RevealItem>
          );
        })}
      </div>
    </PageReveal>
    </>
  );
}
