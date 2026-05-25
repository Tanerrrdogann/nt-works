"use client";

import type { Project } from "@/types/project";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getProjectTheme } from "@/lib/project-theme";
import { getProjectBionlukUrl } from "@/data/bionluk-links";

export default function ProjectCard({ project }: { project: Project }) {
  const { t, language } = useLanguage();

  const title = language === "tr" ? project.titleTr ?? project.title : project.title;
  const category = language === "tr" ? project.categoryTr ?? project.category : project.category;
  const shortDescription =
    language === "tr"
      ? project.shortDescriptionTr ?? project.shortDescription
      : project.shortDescription;
  const theme = getProjectTheme(project.slug);
  const accentName = language === "tr" ? theme.accentNameTr : theme.accentName;
  const bionlukUrl = getProjectBionlukUrl(project.slug);

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.stripe}`} />
      <div>
        <div className="mb-5 flex items-center gap-3">
          <Badge>{category}</Badge>
        </div>

        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${theme.border} ${theme.bg} ${theme.text}`}>
          <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
          {accentName}
        </div>

        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-3">
        <Button
          href={project.isDemoEnabled ? project.demoUrl : `/projects/${project.slug}`}
          variant={project.isDemoEnabled ? "demo" : "primary"}
          target={project.isDemoEnabled ? "_blank" : undefined}
          rel={project.isDemoEnabled ? "noreferrer" : undefined}
          className="w-full"
        >
          {t("projects.openDemo")}
        </Button>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button href={`/projects/${project.slug}`} variant="secondary" className="w-full">
            {t("projects.details")}
          </Button>
          <Button href={`/contact?project=${project.slug}`} variant="secondary" className="w-full">
            {language === "tr" ? "Benzerini İstiyorum" : "Request Similar"}
          </Button>
        </div>
        <Button href={bionlukUrl} target="_blank" rel="noreferrer" className="w-full">
          {language === "tr" ? "Bionluk'tan Satın Al" : "Buy on Bionluk"}
        </Button>
      </div>
    </article>
  );
}
