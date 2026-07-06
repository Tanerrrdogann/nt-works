import ProjectDetailPageView from "@/components/projects/ProjectDetailPageView";
import JsonLd from "@/components/seo/JsonLd";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { breadcrumbJsonLd, pageMetadata, softwareExampleJsonLd } from "@/lib/seo";
import type { ProjectType } from "@/types";
import { notFound } from "next/navigation";

type RichProject = ProjectType & {
  image?: string;
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

  const meta = getProjectMeta(project.slug);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: meta.projectKind === "client" ? "Portföy" : "Canlı Örnekler", path: meta.projectKind === "client" ? "/portfolio" : "/projects" },
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
      <ProjectDetailPageView slug={slug} />
    </>
  );
}
