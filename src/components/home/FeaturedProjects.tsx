"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow={t("projects.eyebrow")}
          title={t("projects.featuredTitle")}
          description={t("projects.featuredDescription")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
