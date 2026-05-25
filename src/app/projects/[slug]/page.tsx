import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | NT Web Çözümleri"
    };
  }

  return {
    title: `${project.title} | NT Web Çözümleri`,
    description: project.shortDescription
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <Container>
        <ProjectDetail project={project} />
      </Container>
    </section>
  );
}
