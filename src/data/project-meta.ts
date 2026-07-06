export const projectMeta: Record<string, {
  projectKind: "demo" | "client";
  clientDisplayName?: string;
  result?: string;
  testimonialSlug?: string;
}> = {
  "pazaryeri-xml-entegrasyonu": {
    projectKind: "client",
    clientDisplayName: "Anonim müşteri",
    result: "5 yıldızlı müşteri değerlendirmesiyle tamamlanan 1 entegrasyon işi. XML kaynak veri; n11, Trendyol, Hepsiburada, idefix, Pazarama, PTTAVM ve Çiçeksepeti süreçlerine göre ayrıştırıldı. Eksik ürün açma, fiyat/stok eşitleme, duplicate kontrol, batch/tracking takibi ve 30 dakikalık cron otomasyonları kuruldu.",
    testimonialSlug: "okanersoy-bionluk",
  },
  "mizan-mulk-yonetim-sistemi": {
    projectKind: "client",
    clientDisplayName: "Mizan Mülk",
    result: "5 yıldızlı müşteri değerlendirmesiyle ilerleyen 2 ayrı tamamlanan iş. İlk işte Softr/NocoDB/PostgreSQL altyapısı, tahakkuk ve bildirim otomasyonları toparlandı; ikinci işte özel Mizan Mülk admin ve kullanıcı paneli hazırlandı.",
    testimonialSlug: "htopbas-bionluk-mizan-mulk",
  },
  "menar-operasyon-paneli": {
    projectKind: "client",
    clientDisplayName: "MENAR",
    result: "5 yıldızlı müşteri değerlendirmesiyle ilerleyen 2 ayrı tamamlanan iş. İlk işte MENAR operasyon altyapısı, Bitrix24/SharePoint/Power Platform veri modeli ve süreç algoritması çıkarıldı; ikinci işte dosya merkezi, tur paketleri ve kur yönetimi ek kapsamı netleştirildi.",
    testimonialSlug: "sefayama-bionluk",
  },
};

export function getProjectMeta(slug: string) {
  return projectMeta[slug] ?? { projectKind: "demo" as const };
}
