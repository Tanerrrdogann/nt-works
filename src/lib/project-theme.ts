export type ProjectTheme = {
  accentName: string;
  accentNameTr: string;
  border: string;
  bg: string;
  text: string;
  softText: string;
  dot: string;
  stripe: string;
};

const defaultTheme: ProjectTheme = {
  accentName: "Operational system",
  accentNameTr: "Operasyon sistemi",
  border: "border-cyan-200",
  bg: "bg-cyan-50",
  text: "text-cyan-900",
  softText: "text-cyan-700",
  dot: "bg-cyan-500",
  stripe: "from-cyan-500 to-blue-500"
};

export const projectThemes: Record<string, ProjectTheme> = {
  "kurumsal-web-sitesi": {
    accentName: "Business presence",
    accentNameTr: "Kurumsal vitrin",
    border: "border-sky-200",
    bg: "bg-sky-50",
    text: "text-sky-900",
    softText: "text-sky-700",
    dot: "bg-sky-500",
    stripe: "from-sky-500 to-emerald-500"
  },
  "whatsapp-siparis-katalog": {
    accentName: "Catalog sales",
    accentNameTr: "Katalog satışı",
    border: "border-lime-200",
    bg: "bg-lime-50",
    text: "text-lime-900",
    softText: "text-lime-700",
    dot: "bg-lime-500",
    stripe: "from-lime-500 to-emerald-500"
  },
  "randevu-rezervasyon-sistemi": {
    accentName: "Booking flow",
    accentNameTr: "Randevu akışı",
    border: "border-fuchsia-200",
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    softText: "text-fuchsia-700",
    dot: "bg-fuchsia-500",
    stripe: "from-fuchsia-500 to-sky-500"
  },
  "admin-panelli-isletme-sistemi": {
    accentName: "Admin operations",
    accentNameTr: "Admin operasyonu",
    border: "border-indigo-200",
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    softText: "text-indigo-700",
    dot: "bg-indigo-500",
    stripe: "from-indigo-500 to-emerald-500"
  },
  "landing-page": {
    accentName: "Campaign page",
    accentNameTr: "Satış kampanyası",
    border: "border-orange-200",
    bg: "bg-orange-50",
    text: "text-orange-900",
    softText: "text-orange-700",
    dot: "bg-orange-500",
    stripe: "from-orange-500 to-pink-500"
  },
  "cloud-storage-platform": {
    accentName: "File operations",
    accentNameTr: "Dosya operasyonu",
    border: "border-cyan-200",
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    softText: "text-cyan-700",
    dot: "bg-cyan-500",
    stripe: "from-cyan-500 to-blue-500"
  },
  "ai-log-analysis-panel": {
    accentName: "Risk intelligence",
    accentNameTr: "Risk analizi",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    softText: "text-emerald-700",
    dot: "bg-emerald-500",
    stripe: "from-emerald-500 to-cyan-500"
  },
  "video-analysis-platform": {
    accentName: "Media analytics",
    accentNameTr: "Medya analizi",
    border: "border-violet-200",
    bg: "bg-violet-50",
    text: "text-violet-900",
    softText: "text-violet-700",
    dot: "bg-violet-500",
    stripe: "from-violet-500 to-cyan-500"
  },
  "task-management-system": {
    accentName: "Task operations",
    accentNameTr: "Görev operasyonu",
    border: "border-green-200",
    bg: "bg-green-50",
    text: "text-green-900",
    softText: "text-green-700",
    dot: "bg-green-500",
    stripe: "from-green-500 to-blue-500"
  },
  "library-search-engine": {
    accentName: "Search catalog",
    accentNameTr: "Arama kataloğu",
    border: "border-blue-200",
    bg: "bg-blue-50",
    text: "text-blue-900",
    softText: "text-blue-700",
    dot: "bg-blue-500",
    stripe: "from-blue-500 to-amber-400"
  },
  "ecommerce-platform": {
    accentName: "Commerce workflow",
    accentNameTr: "Ticaret akışı",
    border: "border-rose-200",
    bg: "bg-rose-50",
    text: "text-rose-900",
    softText: "text-rose-700",
    dot: "bg-rose-500",
    stripe: "from-rose-500 to-amber-400"
  },
  "virtual-computer-simulator": {
    accentName: "Technical education",
    accentNameTr: "Teknik eğitim",
    border: "border-amber-200",
    bg: "bg-amber-50",
    text: "text-amber-900",
    softText: "text-amber-700",
    dot: "bg-amber-500",
    stripe: "from-amber-500 to-cyan-500"
  }
};

export function getProjectTheme(slug: string) {
  return projectThemes[slug] ?? defaultTheme;
}
