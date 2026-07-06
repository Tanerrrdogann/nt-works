import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PortfolioPageView from "@/components/projects/PortfolioPageView";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portföy ve Tamamlanan İşler",
  description: "NT Web Çözümleri tarafından tamamlanan gerçek müşteri işleri, müşteri yorumları ve detaylı proje portföyleri.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const clientProjects = projectsData.filter((project) => getProjectMeta(project.slug).projectKind === "client");

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Portföy", path: "/portfolio" },
        ]),
        itemListJsonLd({
          name: "NT Web Çözümleri tamamlanan işler",
          description: "Gerçek müşteri işleri ve proje portföy kayıtları.",
          items: clientProjects.map((project) => ({
            name: project.title,
            description: project.shortDesc,
            path: `/projects/${project.slug}`,
          })),
        }),
      ]} />
      <PortfolioPageView />
    </>
  );
}
