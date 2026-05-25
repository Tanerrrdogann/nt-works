"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { techStack } from "@/data/tech-stack";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function TechStackSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow={language === "tr" ? "Teknolojiler" : "Tech Stack"}
          title={
            language === "tr"
              ? "Projelerde kullanılan teknolojiler"
              : "Technologies used across projects"
          }
          description={
            language === "tr"
              ? "Projeler gerçek web uygulamalarında kullanılan pratik tam kapsamlı geliştirme araçları üzerine kuruludur."
              : "The projects are built around practical full-stack tools used for real web applications."
          }
        />

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
