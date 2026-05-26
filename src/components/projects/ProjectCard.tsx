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
    <article className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-4 xl:rounded-3xl xl:p-6">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.stripe}`} />
      <div>
        <div className="mb-2 flex min-w-0 items-center gap-2 sm:mb-4 xl:mb-5 xl:gap-3">
          <Badge className="max-w-full truncate px-2 text-[10px] sm:px-3 sm:text-xs">{category}</Badge>
        </div>

        <div className={`mb-2 inline-flex max-w-full items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold leading-4 sm:py-1 sm:text-xs xl:mb-4 xl:gap-2 xl:px-3 ${theme.border} ${theme.bg} ${theme.text}`}>
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2 ${theme.dot}`} />
          {accentName}
        </div>

        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-950 sm:text-base sm:leading-6 xl:text-xl">{title}</h3>
        <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6 xl:mt-3 xl:line-clamp-4">
          {shortDescription}
        </p>

        <div className="mt-2.5 hidden flex-wrap gap-1.5 sm:mt-4 sm:flex sm:gap-2 xl:mt-5">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <Badge key={tech} className={`${index > 1 ? "hidden md:inline-flex" : ""} px-2 text-[10px] sm:px-3 sm:text-xs`}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-5 sm:gap-2 xl:mt-7 xl:gap-3">
        <Button
          href={project.isDemoEnabled ? project.demoUrl : `/projects/${project.slug}`}
          variant={project.isDemoEnabled ? "demo" : "primary"}
          target={project.isDemoEnabled ? "_blank" : undefined}
          rel={project.isDemoEnabled ? "noreferrer" : undefined}
          className="h-8 min-h-8 w-full px-1.5 text-[10px] leading-tight sm:h-9 sm:min-h-9 sm:px-2 sm:text-xs xl:h-11 xl:min-h-11 xl:px-4 xl:text-sm"
        >
          {t("projects.openDemo")}
        </Button>
        <Button href={`/projects/${project.slug}`} variant="secondary" className="h-8 min-h-8 w-full px-1.5 text-[10px] sm:h-9 sm:min-h-9 sm:px-2 sm:text-xs xl:h-11 xl:min-h-11 xl:px-4 xl:text-sm">
          {t("projects.details")}
        </Button>
        <Button href={`/contact?project=${project.slug}`} variant="secondary" className="h-8 min-h-8 w-full px-1.5 text-[10px] leading-tight sm:h-9 sm:min-h-9 sm:px-2 sm:text-xs xl:h-11 xl:min-h-11 xl:px-4 xl:text-sm">
          {language === "tr" ? "Benzerini İstiyorum" : "Request Similar"}
        </Button>
        <Button href={bionlukUrl} target="_blank" rel="noreferrer" className="h-8 min-h-8 w-full px-1.5 text-[10px] leading-tight sm:h-9 sm:min-h-9 sm:px-2 sm:text-xs xl:h-11 xl:min-h-11 xl:px-4 xl:text-sm">
          {language === "tr" ? "Bionluk'tan Satın Al" : "Buy on Bionluk"}
        </Button>
      </div>
    </article>
  );
}
