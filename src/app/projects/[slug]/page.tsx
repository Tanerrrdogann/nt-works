import { projectsData } from "@/data/projects";
import { getProjectMeta } from "@/data/project-meta";
import { testimonials } from "@/data/testimonials";
import { getBionlukLink } from "@/data/bionluk-links";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, CheckCircle2, Code2, AlertCircle } from "lucide-react";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import type { ProjectType } from "@/types";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, softwareExampleJsonLd } from "@/lib/seo";

type RichProject = ProjectType & {
  descriptionTr?: string;
  demoIncludesTr?: string[];
  demoLimitationsTr?: string[];
  demoAccounts?: Array<{ role: string; email: string; password: string }>;
  status?: string;
  isDemoEnabled?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  projectKind?: "demo" | "client";
  clientDisplayName?: string;
  result?: string;
  testimonialSlug?: string;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return;
  return pageMetadata({
    title: `${project.title} Canlı Örneği`,
    description: project.shortDesc,
    path: `/projects/${project.slug}`,
    image: (project as RichProject).image,
    keywords: [
      project.title,
      project.category,
      ...project.features,
      ...project.techStack,
    ],
  });
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug) as RichProject | undefined;
  if (!project) return notFound();

  const demoIncludes = project.demoIncludesTr ?? [];
  const demoLimitations = project.demoLimitationsTr ?? [];
  const hasDemoInfo = demoIncludes.length > 0 || demoLimitations.length > 0 || Boolean(project.demoAccounts?.length);
  const demoEnabled = project.isDemoEnabled !== false && Boolean(project.demoUrl);
  const meta = getProjectMeta(project.slug);
  const testimonial = meta.testimonialSlug ? testimonials.find((item) => item.slug === meta.testimonialSlug) : undefined;

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Canlı Örnekler", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]),
        softwareExampleJsonLd({
          name: project.title,
          description: project.shortDesc,
          path: `/projects/${project.slug}`,
          category: project.category,
          image: project.image,
          features: project.features,
        }),
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <Link href={meta.projectKind === "client" ? "/portfolio" : "/projects"} className="text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block">
        &larr; {meta.projectKind === "client" ? "Portföye Dön" : "Tüm Canlı Örneklere Dön"}
      </Link>

      <RevealItem className="mb-8 relative overflow-hidden p-0 md:p-0">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">{project.category}</span>
          <span className="border border-white/10 bg-[#071225]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">
            {meta.projectKind === "client" ? "Gerçek Müşteri İşi" : "Uyarlanabilir Canlı Örnek"}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">{project.title}</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-8">{project.descriptionTr ?? project.shortDesc}</p>

        <div className="mt-7 flex items-start gap-3 border border-white/10 bg-white/5 p-4">
          <AlertCircle className="text-gray-400 shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-gray-300 leading-6">
            {meta.projectKind === "client"
              ? "Bu çalışma Bionluk üzerinden teslim edilen gerçek müşteri işi olarak eklenmiştir. Müşteri bilgileri izin durumuna göre anonim tutulur."
              : "Bu çalışma gerçek müşteri işi gibi gösterilen bir referans değildir. İşletmenize göre benzeri hazırlanabilecek, canlı incelenebilir örnek sistemdir."}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {demoEnabled ? (
            <Link href={project.demoUrl!} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors">
              Canlı İncele
            </Link>
          ) : (
            <button type="button" disabled className="bg-white text-black px-6 py-3 font-bold opacity-70 cursor-not-allowed">
              Canlı İncele
            </button>
          )}
          <Link href={`/contact?project=${project.slug}`} className="border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">
            Benzerini İstiyorum
          </Link>
          <Link href={getBionlukLink(project.slug)} target="_blank" className="border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            Bionluk ile Güvenli İlerle <ExternalLink size={18} />
          </Link>
        </div>
      </RevealItem>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium mb-4">İşletme Problemi</h2>
          <p className="text-gray-400 leading-8">{project.problem}</p>
        </RevealItem>
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium mb-4">Çözüm Mimarisi</h2>
          <p className="text-gray-400 leading-8">{project.solution}</p>
        </RevealItem>
      </div>

      {(meta.result || testimonial) && (
        <RevealItem className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Sonuç ve müşteri geri bildirimi</h2>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {meta.result && (
              <div className="border border-white/10 bg-[#071225]/55 p-5">
                <h3 className="font-bold text-white">Proje sonucu</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{meta.result}</p>
              </div>
            )}
            {testimonial && (
              <div className="border border-white/10 bg-[#08162c]/88 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-bold text-white">{testimonial.displayName}</h3>
                  <span className="text-sm font-bold text-white">{testimonial.rating}.0 / 5</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-400">{testimonial.text}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">Bionluk üzerinden doğrulanmış yorum</p>
              </div>
            )}
          </div>
        </RevealItem>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{meta.projectKind === "client" ? "Bu işte ne yapıldı?" : "Bu canlı örnek neyi gösterir?"}</h2>
          <div className="space-y-5 text-gray-400 leading-8">
            <p>{project.descriptionTr ?? project.shortDesc}</p>
            <p>{project.solution}</p>
          </div>
          <div className="mt-6 border-l-4 border-white pl-5 py-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{meta.projectKind === "client" ? "Case study odağı" : "Canlı inceleme odağı"}</p>
            <p className="mt-3 text-gray-300 leading-7">
              {meta.projectKind === "client"
                ? "Bu kayıt; tamamlanan işin problem, çözüm, teknik kapsam ve müşteri geri bildirimi tarafını özetler."
                : "Ziyaretçi örnek akışı, sistem mantığını, kullanılabilecek modülleri ve işletmeye nasıl uyarlanabileceğini tek sayfada görebilir."}
            </p>
          </div>
        </RevealItem>

        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Sistemin temel özellikleri</h2>
          <div className="space-y-3">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 border border-white/10 bg-[#071225]/55 p-3">
                <CheckCircle2 className="text-gray-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-300 text-sm leading-6">{feature}</span>
              </div>
            ))}
          </div>
        </RevealItem>
      </div>

      {hasDemoInfo && (
        <RevealItem className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Canlı inceleme kapsamı</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {demoIncludes.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Açık olanlar</h3>
                <ul className="space-y-3">
                  {demoIncludes.map((item) => <li key={item} className="text-sm text-gray-400 border-l-2 border-white/20 pl-3 leading-6">{item}</li>)}
                </ul>
              </div>
            )}
            {demoLimitations.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Bilinçli sınırlar</h3>
                <ul className="space-y-3">
                  {demoLimitations.map((item) => <li key={item} className="text-sm text-gray-400 border-l-2 border-white/20 pl-3 leading-6">{item}</li>)}
                </ul>
              </div>
            )}
            {project.demoAccounts && project.demoAccounts.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Demo hesapları</h3>
                <div className="space-y-3">
                  {project.demoAccounts.map((account) => (
                    <div key={`${account.role}-${account.email}`} className="border border-white/10 bg-[#071225]/55 p-3 text-sm">
                      <p className="font-bold text-white">{account.role}</p>
                      <p className="mt-1 text-gray-400">{account.email}</p>
                      <p className="text-gray-500">{account.password}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </RevealItem>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] mb-8">
        <RevealItem className="relative overflow-hidden p-0 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <Code2 className="text-gray-600 hidden md:block" size={48} />
          <div>
            <h2 className="text-2xl font-medium mb-5 text-white">Teknolojiler ve altyapı</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-chip px-3 py-2 bg-[#071225]/65 border border-white/10 text-sm text-gray-400 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </RevealItem>

        <RevealItem className="grid gap-4">
          <div className="border border-white/10 bg-[#08162c]/88 p-6">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Veritabanı</h3>
            <p className="text-white text-sm leading-6">{project.database}</p>
          </div>
          <div className="border border-white/10 bg-[#08162c]/88 p-6">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Teslim Şekli</h3>
            <p className="text-white text-sm leading-6">{project.deployment}</p>
          </div>
        </RevealItem>
      </div>

      <RevealItem className="border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">{meta.projectKind === "client" ? "Benzer iş nasıl planlanır?" : "Bu canlı örnek nasıl uyarlanır?"}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["İhtiyaç", `${project.title}, ${project.category.toLocaleLowerCase("tr-TR")} ihtiyacını canlı ekranlarla anlatmak için hazırlanır.`],
            ["Uyarlama", "Metinler, örnek veriler, renk dili, formlar, raporlar ve panel bölümleri işletmenin sektörüne göre yeniden düzenlenebilir."],
            ["Teslim", "Kapsam netleşince benzer yapı domain, hosting, yönetim paneli ve içerik düzeniyle işletmeye özel teslim edilebilir."],
          ].map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </RevealItem>
      </PageReveal>
    </>
  );
}
