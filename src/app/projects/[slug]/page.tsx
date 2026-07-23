import ProjectDetailPageView from "@/components/projects/ProjectDetailPageView";
import JsonLd from "@/components/seo/JsonLd";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { getLocalizedProjectMeta, getLocalizedProjects, getLocalizedTestimonial } from "@/data/i18n/projects-en";
import { breadcrumbJsonLd, pageMetadata, softwareExampleJsonLd } from "@/lib/seo";
import { getProjectPresentationStatus, getProjectSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";
import type { ProjectType } from "@/types";
import { notFound } from "next/navigation";

type RichProject = ProjectType & { image?: string };

function getRelatedProjects(project: ProjectType, projects: ProjectType[]) {
  const projectTech = new Set(project.techStack.map((item) => item.toLocaleLowerCase("tr-TR")));

  return projects
    .filter((candidate) => candidate.slug !== project.slug)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.category === project.category ? 5 : 0)
        + candidate.techStack.filter((item) => projectTech.has(item.toLocaleLowerCase("tr-TR"))).length,
    }))
    .sort((a, b) => b.score - a.score || a.candidate.slug.localeCompare(b.candidate.slug))
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const project = getLocalizedProjects(projectsData, locale).find((item) => item.slug === slug);
  if (!project) return;
  const copy = getProjectSeoCopy(project, locale);

  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/projects/${project.slug}`,
    image: (project as RichProject).image,
    keywords: [
      project.title,
      project.category,
      ...project.features,
      ...project.techStack,
    ],
    locale,
  });
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const project = localizedProjects.find((item) => item.slug === slug) as RichProject | undefined;
  if (!project) return notFound();

  const meta = locale === "de" || locale === "en" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh"
    ? getLocalizedProjectMeta(project.slug, locale)
    : getProjectMeta(project.slug);
  const testimonial = getLocalizedTestimonial(meta.testimonialSlug, locale);
  const relatedProjects = getRelatedProjects(project, localizedProjects);
  const presentationStatus = getProjectPresentationStatus(project);
  const seoCopy = getProjectSeoCopy(project, locale);
  const structuredData: Array<Record<string, unknown>> = [
    breadcrumbJsonLd([
      {
        name: locale === "de"
          ? "Startseite"
          : locale === "en"
            ? "Home"
            : locale === "fr"
              ? "Accueil"
              : locale === "es"
                ? "Inicio"
                : locale === "ar"
                  ? "الرئيسية"
                  : locale === "ru"
                    ? "Главная"
                    : locale === "pt"
                      ? "Início"
                      : locale === "it" || locale === "nl" ? "Home" : locale === "zh" ? "首页" : "Ana Sayfa",
        path: "/",
      },
      {
        name: meta.projectKind === "client"
          ? locale === "de" || locale === "en" || locale === "fr" || locale === "es"
            ? "Portfolio"
            : locale === "ar"
              ? "معرض الأعمال"
              : locale === "ru"
                ? "Портфолио"
                : locale === "pt"
                  ? "Portefólio"
                  : locale === "it" || locale === "nl"
                    ? "Portfolio"
                    : locale === "zh" ? "作品集" : "Portföy"
          : locale === "de"
            ? "Projektbeispiele"
            : locale === "en"
              ? "Project Examples"
              : locale === "fr"
                ? "Exemples de projets"
                : locale === "es"
                  ? "Ejemplos de proyectos"
                  : locale === "ar"
                    ? "أمثلة المشاريع"
                    : locale === "ru"
                      ? "Примеры проектов"
                      : locale === "pt"
                        ? "Exemplos de projetos"
                        : locale === "it"
                          ? "Esempi di progetto"
                          : locale === "nl" ? "Projectvoorbeelden" : locale === "zh" ? "项目案例" : "Proje Örnekleri",
        path: meta.projectKind === "client" ? "/portfolio" : "/projects",
      },
      { name: project.title, path: `/projects/${project.slug}` },
    ], locale),
  ];

  if (presentationStatus !== "planned") {
    structuredData.push(softwareExampleJsonLd({
      name: project.title,
      description: seoCopy.description,
      path: `/projects/${project.slug}`,
      category: project.category,
      image: project.image,
      features: project.features,
      locale,
    }));
  }

  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectDetailPageView
        project={project}
        meta={meta}
        testimonial={testimonial}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
