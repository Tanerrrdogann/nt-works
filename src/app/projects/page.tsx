"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
