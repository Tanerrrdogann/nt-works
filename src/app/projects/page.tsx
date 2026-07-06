import { projectsData } from "@/data/projects";
import { getProjectMeta } from "@/data/project-meta";
import type { Metadata } from "next";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ProjectsPageView from "@/components/projects/ProjectsPageView";

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
    <ProjectsPageView />
    </>
  );
}
