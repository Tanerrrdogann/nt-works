"use client";

import type { Project } from "@/types/project";
import { useLanguage } from "@/i18n/LanguageProvider";

const visualThemes: Record<
  string,
  {
    accent: string;
    lines: number[];
    panels: string[];
  }
> = {
  "cloud-storage-platform": {
    accent: "from-cyan-300 to-blue-500",
    lines: [88, 64, 76],
    panels: ["API", "Files", "Metrics"]
  },
  "ai-log-analysis-panel": {
    accent: "from-emerald-300 to-teal-500",
    lines: [72, 92, 58],
    panels: ["Risk", "Actors", "Chat"]
  },
  "video-analysis-platform": {
    accent: "from-fuchsia-300 to-rose-500",
    lines: [54, 80, 68],
    panels: ["Frames", "Audio", "Timeline"]
  },
  "virtual-computer-simulator": {
    accent: "from-amber-300 to-orange-500",
    lines: [62, 48, 86],
    panels: ["CPU", "Memory", "OS"]
  },
  "task-management-system": {
    accent: "from-lime-300 to-green-500",
    lines: [80, 52, 66],
    panels: ["Tasks", "Reports", "Mail"]
  },
  "library-search-engine": {
    accent: "from-sky-300 to-indigo-500",
    lines: [58, 74, 90],
    panels: ["Trie", "Search", "Books"]
  },
  "ecommerce-platform": {
    accent: "from-pink-300 to-red-500",
    lines: [90, 66, 78],
    panels: ["Cart", "Orders", "Admin"]
  }
};

export default function ProjectVisual({
  project,
  size = "card"
}: {
  project: Project;
  size?: "card" | "detail";
}) {
  const { language } = useLanguage();
  const theme = visualThemes[project.slug] ?? visualThemes["cloud-storage-platform"];
  const title = language === "tr" ? project.titleTr ?? project.title : project.title;
  const isDetail = size === "detail";

  return (
    <div
      className={[
        "relative overflow-hidden border border-slate-200 bg-white shadow-sm",
        isDetail ? "min-h-72 rounded-3xl p-6 sm:min-h-80 sm:p-8" : "h-44 rounded-2xl p-4"
      ].join(" ")}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.accent}`} />
      <div className={`absolute -right-16 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${theme.accent} opacity-15 blur-3xl`} />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              NT Web Çözümleri Preview
            </p>
            <p className={isDetail ? "mt-2 text-2xl font-black text-slate-950" : "mt-1 truncate text-sm font-bold text-slate-950"}>
              {title}
            </p>
          </div>
          <div className={`h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br ${theme.accent}`} />
        </div>

        <div className={isDetail ? "mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]" : "mt-5 space-y-3"}>
          <div className="space-y-3">
            {theme.lines.map((width, index) => (
              <div key={width} className="rounded-full bg-slate-100 p-1">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${theme.accent}`}
                  style={{ width: `${index === 0 && isDetail ? 96 : width}%` }}
                />
              </div>
            ))}
          </div>

          <div className={isDetail ? "grid grid-cols-3 gap-3 md:grid-cols-1" : "grid grid-cols-3 gap-2"}>
            {theme.panels.map((panel) => (
              <div
                key={panel}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-[11px] font-semibold text-slate-600"
              >
                {panel}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
