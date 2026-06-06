export const bionlukLinks = {
  profile: "https://bionluk.com/tanererdogann",
  "kurumsal-web-sitesi": "https://bionluk.com/tanererdogann/kurumsal-web-sitesi-ve-tanitim-sitesi-gelistiririm-859479",
  "whatsapp-siparis-katalog": "https://bionluk.com/tanererdogann/urun-katalog-ve-siparis-sitesi-gelistiririm-859481",
  "ecommerce-platform": "https://bionluk.com/tanererdogann/online-odemeli-e-ticaret-sitesi-gelistiririm-856486",
  "randevu-rezervasyon-sistemi": "https://bionluk.com/tanererdogann/randevu-ve-rezervasyon-sistemi-gelistiririm-859482",
  "admin-panelli-isletme-sistemi": "https://bionluk.com/tanererdogann/admin-panelli-isletme-sistemi-gelistiririm-859484",
  "landing-page": "https://bionluk.com/tanererdogann/landing-page-ve-satis-sayfasi-gelistiririm-859486",
  "cloud-storage-platform": "https://bionluk.com/tanererdogann/dosya-yonetimi-ve-admin-paneli-gelistiririm-856474",
  "task-management-system": "https://bionluk.com/tanererdogann/gorev-yonetim-ve-is-takip-paneli-gelistiririm-856483",
  "ai-log-analysis-panel": "https://bionluk.com/tanererdogann/hata-ve-log-analiz-paneli-gelistiririm-856477",
  "video-analysis-platform": "https://bionluk.com/tanererdogann/video-analiz-ve-raporlama-paneli-gelistiririm-856480"
};

export const getBionlukLink = (slug: string) => {
  return bionlukLinks[slug as keyof typeof bionlukLinks] || bionlukLinks.profile;
};
