"use client";

import type { Project } from "@/types/project";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getProjectTheme } from "@/lib/project-theme";
import { getProjectBionlukUrl } from "@/data/bionluk-links";

export default function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

  const isTr = language === "tr";
  const title = isTr ? project.titleTr ?? project.title : project.title;
  const category = isTr ? project.categoryTr ?? project.category : project.category;
  const shortDescription = isTr
    ? project.shortDescriptionTr ?? project.shortDescription
    : project.shortDescription;

  const theme = getProjectTheme(project.slug);
  const accentName = isTr ? theme.accentNameTr : theme.accentName;
  const bionlukUrl = getProjectBionlukUrl(project.slug);

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl md:rounded-2xl md:p-4 lg:rounded-3xl lg:p-6 xl:hover:-translate-y-1">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.stripe}`} />

      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge className="max-w-full truncate px-3 text-xs">
            {category}
          </Badge>

          <span className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${theme.border} ${theme.bg} ${theme.text}`}>
            <span className={`h-2 w-2 shrink-0 rounded-full ${theme.dot}`} />
            {accentName}
          </span>
        </div>

        <div className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500 md:text-[10px] lg:text-[11px]">
          {isTr ? "Uyarlanabilir Canlı Örnek" : "Adaptable Live Example"}
        </div>

        <h3 className="text-xl font-black leading-7 text-slate-950 md:text-base md:leading-6 lg:text-2xl lg:leading-8">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 md:line-clamp-4 md:text-xs md:leading-5 lg:line-clamp-none lg:text-sm lg:leading-6">
          {shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 md:hidden lg:flex">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} className="px-3 text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-6 md:grid-cols-1 md:gap-2 lg:grid-cols-2 lg:pt-6">
          <Button
            href={project.isDemoEnabled ? project.demoUrl : `/projects/${project.slug}`}
            variant={project.isDemoEnabled ? "demo" : "primary"}
            target={project.isDemoEnabled ? "_blank" : undefined}
            rel={project.isDemoEnabled ? "noreferrer" : undefined}
            className="h-11 min-h-11 justify-center px-3 text-xs md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
          >
            {isTr ? "Canlı İncele" : "View Live"}
          </Button>

          <Button
            href={`/projects/${project.slug}`}
            variant="secondary"
            className="h-11 min-h-11 justify-center px-3 text-xs md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
          >
            {isTr ? "Detayları Gör" : "Details"}
          </Button>

          <Button
            href={`/contact?project=${project.slug}`}
            variant="secondary"
            className="h-11 min-h-11 justify-center px-3 text-xs md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
          >
            {isTr ? "Benzerini İstiyorum" : "Request Similar"}
          </Button>

          <Button
            href={bionlukUrl}
            target="_blank"
            rel="noreferrer"
            className="h-11 min-h-11 justify-center px-3 text-xs md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
          >
            {isTr ? "Bionluk ile İlerle" : "Use Bionluk"}
          </Button>
        </div>
      </div>
    </article>
  );
}
