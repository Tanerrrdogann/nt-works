export const projectMeta: Record<string, {
  projectKind: "demo" | "client";
  clientDisplayName?: string;
  result?: string;
  testimonialSlug?: string;
}> = {
  "pazaryeri-xml-entegrasyonu": {
    projectKind: "client",
    clientDisplayName: "Anonim Bionluk müşterisi",
    result: "Bionluk üzerinden 5 yıldızlı değerlendirme ile tamamlandı. XML kaynak veri; n11, Trendyol, Hepsiburada, idefix, Pazarama, PTTAVM ve Çiçeksepeti süreçlerine göre ayrıştırıldı. Eksik ürün açma, fiyat/stok eşitleme, duplicate kontrol, batch/tracking takibi ve 30 dakikalık cron otomasyonları kuruldu.",
    testimonialSlug: "okanersoy-bionluk",
  },
  "mizan-mulk-yonetim-sistemi": {
    projectKind: "client",
    clientDisplayName: "Mizan Mülk",
    result: "Bionluk üzerinden 5 yıldızlı değerlendirme ile tamamlandı. Detaylı case study, paylaşım iznine göre genişletilecek.",
    testimonialSlug: "htopbas-bionluk-mizan-mulk",
  },
  "menar-operasyon-paneli": {
    projectKind: "client",
    clientDisplayName: "MENAR",
    result: "Bionluk üzerinden 5 yıldızlı değerlendirme ile tamamlandı. Detaylı case study, paylaşım iznine göre genişletilecek.",
    testimonialSlug: "sefayama-bionluk",
  },
};

export function getProjectMeta(slug: string) {
  return projectMeta[slug] ?? { projectKind: "demo" as const };
}
