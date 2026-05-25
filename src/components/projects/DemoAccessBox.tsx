"use client";

import type { Project } from "@/types/project";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { demoGuides } from "@/data/demo-guides";
import { getProjectTheme } from "@/lib/project-theme";

export default function DemoAccessBox({ project }: { project: Project }) {
  const { t, language } = useLanguage();
  const guide = demoGuides[project.slug];
  const guideTitle = language === "tr" ? guide?.titleTr : guide?.title;
  const guideSteps = language === "tr" ? guide?.stepsTr : guide?.steps;
  const guideNotes = language === "tr" ? guide?.notesTr : guide?.notes;
  const databaseNote = language === "tr" ? guide?.databaseTr : guide?.database;
  const demoIncludes =
    language === "tr" ? project.demoIncludesTr ?? project.demoIncludes : project.demoIncludes;
  const demoLimitations =
    language === "tr" ? project.demoLimitationsTr ?? project.demoLimitations : project.demoLimitations;
  const hasDemoIncludes = Boolean(demoIncludes?.length);
  const hasDemoLimitations = Boolean(demoLimitations?.length);
  const theme = getProjectTheme(project.slug);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`-mx-6 -mt-6 mb-5 h-1 bg-gradient-to-r ${theme.stripe}`} />
      <div className="mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{t("demo.title")}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {t("demo.description")}
          </p>
        </div>
      </div>

      {guide && (
        <div className="mb-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
          <p className="text-sm font-semibold text-cyan-950">{guideTitle}</p>
          <p className="mt-2 text-sm leading-6 text-cyan-800">
            {databaseNote}
          </p>
        </div>
      )}

      {hasDemoIncludes && (
        <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm font-semibold text-emerald-950">
            {language === "tr" ? "Canlı incelemede açık olanlar" : "Available in the live preview"}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-800">
            {demoIncludes?.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      )}

      {hasDemoLimitations && (
        <div className="mb-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-950">
            {language === "tr" ? "Canlı incelemede bilinçli sınırlar" : "Intentional live-preview limits"}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-800">
            {demoLimitations?.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-3">
        {project.demoAccounts.length > 0 ? (
          project.demoAccounts.map((account) => (
            <div
              key={`${account.role}-${account.email}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-sm font-semibold text-slate-950">{account.role}</p>
              <p className="mt-2 text-sm text-slate-500">
                {t("demo.email")}: <span className="text-slate-800">{account.email}</span>
              </p>
              <p className="text-sm text-slate-500">
                {t("demo.password")}: <span className="text-slate-800">{account.password}</span>
              </p>
            </div>
          ))
        ) : (
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
            {t("demo.noAccount")}
          </p>
        )}
      </div>

      {guideSteps && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-950">
            {language === "tr" ? "Canlı inceleme nasıl denenir?" : "How to try the live preview"}
          </p>
          <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {guideSteps.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="text-slate-400">-</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {guideNotes && (
        <div className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
          {guideNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          href={project.demoUrl}
          disabled={!project.isDemoEnabled}
          target="_blank"
          rel="noreferrer"
        >
          {t("demo.open")}
        </Button>
      </div>

      {!project.isDemoEnabled && (
        <p className="mt-4 text-sm text-amber-700">
          {t("demo.disabled")}
        </p>
      )}
    </div>
  );
}
