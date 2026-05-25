"use client";

import type { ProjectStatus } from "@/types/project";
import { useLanguage } from "@/i18n/LanguageProvider";

const statusConfig: Record<ProjectStatus, { label: string; labelTr: string; className: string }> = {
  live: {
    label: "Ready",
    labelTr: "Hazır",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700"
  },
  offline: {
    label: "Screenshots",
    labelTr: "Ekran görüntüleri",
    className: "border-slate-200 bg-slate-100 text-slate-600"
  },
  preparing: {
    label: "Pending",
    labelTr: "Beklemede",
    className: "border-amber-200 bg-amber-50 text-amber-700"
  },
  maintenance: {
    label: "Client Pending",
    labelTr: "Müşteri bekleniyor",
    className: "border-blue-200 bg-blue-50 text-blue-700"
  }
};

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const { language } = useLanguage();
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {language === "tr" ? config.labelTr : config.label}
    </span>
  );
}
