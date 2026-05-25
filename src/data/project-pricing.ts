export type ProjectPricingPackage = {
  nameTr: string;
  nameEn: string;
  priceTr: string;
  priceEn: string;
  badgeTr?: string;
  badgeEn?: string;
  summaryTr: string;
  summaryEn: string;
  featuresTr: string[];
  featuresEn: string[];
  deliveryTr: string;
  deliveryEn: string;
};

const sharedLabels = {
  starter: { tr: "Başlangıç", en: "Starter" },
  standard: { tr: "Standart", en: "Standard" },
  pro: { tr: "Profesyonel", en: "Professional" }
};

const projectPricing: Record<string, ProjectPricingPackage[]> = {
  "kurumsal-web-sitesi": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺2.500",
      priceEn: "TRY 2,500",
      summaryTr: "Tek sayfalık sade kurumsal vitrin.",
      summaryEn: "A clean one-page business presence.",
      featuresTr: ["Ana sayfa tasarımı", "Mobil uyum", "İletişim yönlendirmesi", "Temel SEO başlıkları"],
      featuresEn: ["Homepage design", "Mobile layout", "Contact CTA", "Basic SEO titles"],
      deliveryTr: "3-5 gün",
      deliveryEn: "3-5 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺4.500",
      priceEn: "TRY 4,500",
      badgeTr: "En çok tercih edilen",
      badgeEn: "Most popular",
      summaryTr: "Hizmet, hakkımızda ve teklif akışı olan satış odaklı site.",
      summaryEn: "A conversion-focused site with services and quote flow.",
      featuresTr: ["5 bölümlü yapı", "Hizmet kartları", "Referans / güven alanı", "Mail teklif akışı"],
      featuresEn: ["5-section structure", "Service cards", "Trust area", "Email quote flow"],
      deliveryTr: "5-7 gün",
      deliveryEn: "5-7 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺7.500",
      priceEn: "TRY 7,500",
      summaryTr: "Çok sayfalı, içerik düzeni güçlü kurumsal web sitesi.",
      summaryEn: "A stronger multi-page business website.",
      featuresTr: ["Ana sayfa + alt sayfalar", "Proje / referans alanı", "Gelişmiş içerik düzeni", "Yayın desteği"],
      featuresEn: ["Homepage + subpages", "Project area", "Advanced content layout", "Launch support"],
      deliveryTr: "7-10 gün",
      deliveryEn: "7-10 days"
    }
  ],
  "ecommerce-platform": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺6.500",
      priceEn: "TRY 6,500",
      summaryTr: "Ürün listeleme ve sipariş talebi için hızlı mağaza başlangıcı.",
      summaryEn: "A quick store start with products and order request flow.",
      featuresTr: ["Ürün listeleme", "Ürün detay", "Sepet görünümü", "WhatsApp / mail sipariş"],
      featuresEn: ["Product listing", "Product detail", "Cart preview", "WhatsApp / email order"],
      deliveryTr: "7-10 gün",
      deliveryEn: "7-10 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺10.500",
      priceEn: "TRY 10,500",
      badgeTr: "Satış için ideal",
      badgeEn: "Best for selling",
      summaryTr: "Sepet, checkout ve admin panel içeren e-ticaret sistemi.",
      summaryEn: "E-commerce with cart, checkout and admin panel.",
      featuresTr: ["Admin ürün yönetimi", "Sepet ve checkout", "Sipariş kayıtları", "Mobil mağaza deneyimi"],
      featuresEn: ["Product admin", "Cart and checkout", "Order records", "Mobile store UX"],
      deliveryTr: "10-14 gün",
      deliveryEn: "10-14 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺16.500",
      priceEn: "TRY 16,500",
      summaryTr: "Ödeme entegrasyonuna hazır, daha kapsamlı satış altyapısı.",
      summaryEn: "A fuller sales system ready for payment integration.",
      featuresTr: ["Ödeme altyapısı hazırlığı", "Kategori yönetimi", "Sipariş paneli", "Yayın / domain desteği"],
      featuresEn: ["Payment setup prep", "Category admin", "Order panel", "Launch/domain support"],
      deliveryTr: "14-21 gün",
      deliveryEn: "14-21 days"
    }
  ],
  "whatsapp-siparis-katalog": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺3.500",
      priceEn: "TRY 3,500",
      summaryTr: "Ürünleri düzenli göstermek için sade katalog.",
      summaryEn: "A simple catalog to present products clearly.",
      featuresTr: ["Kategori alanı", "Ürün kartları", "WhatsApp butonu", "Mobil uyum"],
      featuresEn: ["Categories", "Product cards", "WhatsApp CTA", "Mobile layout"],
      deliveryTr: "4-6 gün",
      deliveryEn: "4-6 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺5.500",
      priceEn: "TRY 5,500",
      badgeTr: "Hızlı satış",
      badgeEn: "Fast sales",
      summaryTr: "Arama, filtre ve daha güçlü ürün sunumu olan katalog.",
      summaryEn: "A stronger catalog with search and filtering.",
      featuresTr: ["Arama / filtre", "Ürün detay alanı", "Sipariş mesaj şablonu", "Görsel düzenleme"],
      featuresEn: ["Search / filter", "Product detail", "Order message template", "Visual polish"],
      deliveryTr: "6-8 gün",
      deliveryEn: "6-8 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺8.500",
      priceEn: "TRY 8,500",
      summaryTr: "Daha büyük ürün listeleri için yönetilebilir katalog.",
      summaryEn: "A manageable catalog for larger product lists.",
      featuresTr: ["Yönetilebilir ürün verisi", "Öne çıkan ürünler", "Kampanya alanı", "Yayın desteği"],
      featuresEn: ["Manageable product data", "Featured products", "Campaign area", "Launch support"],
      deliveryTr: "8-12 gün",
      deliveryEn: "8-12 days"
    }
  ],
  "randevu-rezervasyon-sistemi": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺4.000",
      priceEn: "TRY 4,000",
      summaryTr: "Form üzerinden randevu talebi alan hızlı yapı.",
      summaryEn: "A quick request form for booking leads.",
      featuresTr: ["Randevu formu", "Hizmet seçimi", "Mail bildirimi", "Mobil uyum"],
      featuresEn: ["Booking form", "Service select", "Email notification", "Mobile layout"],
      deliveryTr: "5-7 gün",
      deliveryEn: "5-7 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺6.500",
      priceEn: "TRY 6,500",
      badgeTr: "İşletme için ideal",
      badgeEn: "Best for businesses",
      summaryTr: "Saat seçimi ve admin takip mantığı olan rezervasyon sistemi.",
      summaryEn: "Booking with slot selection and admin follow-up.",
      featuresTr: ["Takvim saatleri", "Admin takip", "Durum yönetimi", "Müşteri kayıtları"],
      featuresEn: ["Time slots", "Admin follow-up", "Status tracking", "Customer records"],
      deliveryTr: "7-10 gün",
      deliveryEn: "7-10 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺9.500",
      priceEn: "TRY 9,500",
      summaryTr: "Çok hizmetli, daha kapsamlı randevu ve takip paneli.",
      summaryEn: "A fuller booking and tracking panel.",
      featuresTr: ["Çoklu hizmet yapısı", "Panel raporları", "Bildirim akışı", "Yayın desteği"],
      featuresEn: ["Multi-service setup", "Panel reports", "Notification flow", "Launch support"],
      deliveryTr: "10-14 gün",
      deliveryEn: "10-14 days"
    }
  ],
  "admin-panelli-isletme-sistemi": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺7.500",
      priceEn: "TRY 7,500",
      summaryTr: "Tek modüllü, girişli işletme paneli başlangıcı.",
      summaryEn: "A login-based starter business panel.",
      featuresTr: ["Giriş sistemi", "Tek ana modül", "Liste / kayıt ekranı", "Temel dashboard"],
      featuresEn: ["Login system", "One core module", "List/detail screen", "Basic dashboard"],
      deliveryTr: "10-14 gün",
      deliveryEn: "10-14 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺12.500",
      priceEn: "TRY 12,500",
      badgeTr: "En mantıklı paket",
      badgeEn: "Best value",
      summaryTr: "Müşteri, kayıt ve durum takibi olan işletme yönetim paneli.",
      summaryEn: "A business panel with customer and status tracking.",
      featuresTr: ["2-3 yönetim modülü", "Rol bazlı ekranlar", "Rapor alanı", "Veritabanı kurulumu"],
      featuresEn: ["2-3 admin modules", "Role-based screens", "Report area", "Database setup"],
      deliveryTr: "14-21 gün",
      deliveryEn: "14-21 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺18.500",
      priceEn: "TRY 18,500",
      summaryTr: "Sektöre göre uyarlanan daha kapsamlı özel panel.",
      summaryEn: "A fuller custom panel adapted to the business.",
      featuresTr: ["Özel iş akışı", "Gelişmiş dashboard", "Yetki sistemi", "VPS yayın desteği"],
      featuresEn: ["Custom workflow", "Advanced dashboard", "Permissions", "VPS launch support"],
      deliveryTr: "21-30 gün",
      deliveryEn: "21-30 days"
    }
  ],
  "landing-page": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺2.000",
      priceEn: "TRY 2,000",
      summaryTr: "Tek teklif için hızlı kampanya sayfası.",
      summaryEn: "A fast campaign page for one clear offer.",
      featuresTr: ["Hero alanı", "Fayda bölümü", "Tek CTA", "Mobil uyum"],
      featuresEn: ["Hero area", "Benefit section", "Single CTA", "Mobile layout"],
      deliveryTr: "2-4 gün",
      deliveryEn: "2-4 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺3.500",
      priceEn: "TRY 3,500",
      badgeTr: "Reklam için iyi",
      badgeEn: "Good for ads",
      summaryTr: "Güven alanları, SSS ve form akışı olan satış sayfası.",
      summaryEn: "A landing page with trust blocks, FAQ and form flow.",
      featuresTr: ["5-6 bölüm", "SSS", "Talep formu", "Daha güçlü görsel düzen"],
      featuresEn: ["5-6 sections", "FAQ", "Lead form", "Stronger visuals"],
      deliveryTr: "4-6 gün",
      deliveryEn: "4-6 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺5.500",
      priceEn: "TRY 5,500",
      summaryTr: "Kampanya, ürün veya hizmet için cilalı satış akışı.",
      summaryEn: "A polished sales flow for a campaign, product or service.",
      featuresTr: ["Copy düzenleme", "Animasyonlu geçişler", "Analitik hazırlığı", "Yayın desteği"],
      featuresEn: ["Copy polish", "Animated sections", "Analytics prep", "Launch support"],
      deliveryTr: "5-8 gün",
      deliveryEn: "5-8 days"
    }
  ],
  "cloud-storage-platform": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺8.500",
      priceEn: "TRY 8,500",
      summaryTr: "Klasör ve dosya yönetimi için temel şirket içi panel.",
      summaryEn: "A basic internal panel for file and folder management.",
      featuresTr: ["Giriş sistemi", "Dosya listeleme", "Klasör yapısı", "Basit yetki mantığı"],
      featuresEn: ["Login system", "File listing", "Folder structure", "Basic permission logic"],
      deliveryTr: "14-18 gün",
      deliveryEn: "14-18 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺13.500",
      priceEn: "TRY 13,500",
      badgeTr: "Kurumsal başlangıç",
      badgeEn: "Business starter",
      summaryTr: "Rol, upload, işlem geçmişi ve admin görünümü olan dosya sistemi.",
      summaryEn: "File system with roles, uploads, activity and admin view.",
      featuresTr: ["Rol bazlı erişim", "Dosya yükleme", "İşlem geçmişi", "Admin kontrol alanı"],
      featuresEn: ["Role-based access", "File upload", "Activity history", "Admin control area"],
      deliveryTr: "18-25 gün",
      deliveryEn: "18-25 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺19.500",
      priceEn: "TRY 19,500",
      summaryTr: "MinIO/object storage ve VPS yayınına hazır kapsamlı çözüm.",
      summaryEn: "A fuller MinIO/object-storage system ready for VPS launch.",
      featuresTr: ["Object storage", "Servis ayrımı", "Gelişmiş yetkiler", "Docker/VPS kurulum desteği"],
      featuresEn: ["Object storage", "Service separation", "Advanced roles", "Docker/VPS setup support"],
      deliveryTr: "25-35 gün",
      deliveryEn: "25-35 days"
    }
  ],
  "task-management-system": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺5.500",
      priceEn: "TRY 5,500",
      summaryTr: "Görev oluşturma ve durum takibi için sade panel.",
      summaryEn: "A simple panel for tasks and status tracking.",
      featuresTr: ["Görev listesi", "Yeni görev formu", "Durum takibi", "Mobil uyum"],
      featuresEn: ["Task list", "New task form", "Status tracking", "Mobile layout"],
      deliveryTr: "7-10 gün",
      deliveryEn: "7-10 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺8.500",
      priceEn: "TRY 8,500",
      badgeTr: "Ekipler için",
      badgeEn: "For teams",
      summaryTr: "Öncelik, rapor ve çıktı özellikleri olan iş takip sistemi.",
      summaryEn: "Work tracking with priority, reports and exports.",
      featuresTr: ["Öncelik alanı", "Rapor ekranı", "PDF çıktı", "Mail hatırlatma hazırlığı"],
      featuresEn: ["Priority field", "Reports", "PDF export", "Email reminder prep"],
      deliveryTr: "10-14 gün",
      deliveryEn: "10-14 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺12.500",
      priceEn: "TRY 12,500",
      summaryTr: "Ekip ve müşteri iş akışına göre özelleştirilen görev paneli.",
      summaryEn: "A task panel adapted to team and client workflow.",
      featuresTr: ["Kullanıcı rolleri", "Özel durumlar", "Dashboard metrikleri", "Yayın desteği"],
      featuresEn: ["User roles", "Custom statuses", "Dashboard metrics", "Launch support"],
      deliveryTr: "14-21 gün",
      deliveryEn: "14-21 days"
    }
  ],
  "ai-log-analysis-panel": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺9.500",
      priceEn: "TRY 9,500",
      summaryTr: "Log ve olayları listeleyen temel analiz dashboard'u.",
      summaryEn: "A basic dashboard for log and event review.",
      featuresTr: ["Event listesi", "Temel metrikler", "Filtreleme", "Demo veri akışı"],
      featuresEn: ["Event list", "Basic metrics", "Filtering", "Demo data flow"],
      deliveryTr: "14-18 gün",
      deliveryEn: "14-18 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺15.000",
      priceEn: "TRY 15,000",
      badgeTr: "Teknik demo için",
      badgeEn: "For technical demos",
      summaryTr: "Incident, rol ve raporlama alanı olan analiz paneli.",
      summaryEn: "Analysis panel with incidents, roles and reports.",
      featuresTr: ["Incident takibi", "Analist/admin rolleri", "Rapor alanı", "API entegrasyonu"],
      featuresEn: ["Incident tracking", "Analyst/admin roles", "Report area", "API integration"],
      deliveryTr: "18-25 gün",
      deliveryEn: "18-25 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺22.000",
      priceEn: "TRY 22,000",
      summaryTr: "AI destekli notlar ve özel log akışına uygun kapsamlı sistem.",
      summaryEn: "A fuller system with AI notes and custom log flow.",
      featuresTr: ["AI not üretimi", "Özel event modeli", "Gelişmiş dashboard", "Docker/VPS kurulum desteği"],
      featuresEn: ["AI note generation", "Custom event model", "Advanced dashboard", "Docker/VPS setup support"],
      deliveryTr: "25-35 gün",
      deliveryEn: "25-35 days"
    }
  ],
  "video-analysis-platform": [
    {
      nameTr: sharedLabels.starter.tr,
      nameEn: sharedLabels.starter.en,
      priceTr: "₺10.500",
      priceEn: "TRY 10,500",
      summaryTr: "Video yükleme ve sonuç gösterimi için temel analiz akışı.",
      summaryEn: "A basic analysis flow for video upload and results.",
      featuresTr: ["Video upload", "Sonuç ekranı", "Timeline görünümü", "Demo veri"],
      featuresEn: ["Video upload", "Result screen", "Timeline view", "Demo data"],
      deliveryTr: "14-20 gün",
      deliveryEn: "14-20 days"
    },
    {
      nameTr: sharedLabels.standard.tr,
      nameEn: sharedLabels.standard.en,
      priceTr: "₺17.500",
      priceEn: "TRY 17,500",
      badgeTr: "Güçlü demo",
      badgeEn: "Strong demo",
      summaryTr: "Worker, dashboard ve raporlama mantığı olan video analiz sistemi.",
      summaryEn: "Video analysis with worker, dashboard and reports.",
      featuresTr: ["Worker akışı", "Dashboard metrikleri", "Snapshot alanı", "Rapor ekranı"],
      featuresEn: ["Worker flow", "Dashboard metrics", "Snapshot area", "Report screen"],
      deliveryTr: "20-28 gün",
      deliveryEn: "20-28 days"
    },
    {
      nameTr: sharedLabels.pro.tr,
      nameEn: sharedLabels.pro.en,
      priceTr: "₺25.000",
      priceEn: "TRY 25,000",
      summaryTr: "Özel analiz çıktıları ve VPS yayınına hazır kapsamlı platform.",
      summaryEn: "A fuller platform with custom outputs and VPS deployment.",
      featuresTr: ["Özel analiz alanları", "Scheduler mimarisi", "Transcript/rapor akışı", "Docker/VPS kurulum desteği"],
      featuresEn: ["Custom analysis areas", "Scheduler architecture", "Transcript/report flow", "Docker/VPS setup support"],
      deliveryTr: "30-40 gün",
      deliveryEn: "30-40 days"
    }
  ]
};

const fallbackPricing: ProjectPricingPackage[] = [
  {
    nameTr: sharedLabels.starter.tr,
    nameEn: sharedLabels.starter.en,
    priceTr: "₺4.500",
    priceEn: "TRY 4,500",
    summaryTr: "Canlı demoya benzer sade başlangıç sürümü.",
    summaryEn: "A simple starter version similar to the live demo.",
    featuresTr: ["Temel ekranlar", "Mobil uyum", "İletişim akışı", "Yayın hazırlığı"],
    featuresEn: ["Core screens", "Mobile layout", "Contact flow", "Launch prep"],
    deliveryTr: "5-8 gün",
    deliveryEn: "5-8 days"
  },
  {
    nameTr: sharedLabels.standard.tr,
    nameEn: sharedLabels.standard.en,
    priceTr: "₺8.500",
    priceEn: "TRY 8,500",
    badgeTr: "Önerilen",
    badgeEn: "Recommended",
    summaryTr: "İşletmeye uyarlanmış daha güçlü sürüm.",
    summaryEn: "A stronger version adapted to the business.",
    featuresTr: ["Özel içerik", "Yönetim alanı", "Veri akışı", "Kurulum desteği"],
    featuresEn: ["Custom content", "Admin area", "Data flow", "Setup support"],
    deliveryTr: "8-14 gün",
    deliveryEn: "8-14 days"
  },
  {
    nameTr: sharedLabels.pro.tr,
    nameEn: sharedLabels.pro.en,
    priceTr: "₺14.500",
    priceEn: "TRY 14,500",
    summaryTr: "Daha kapsamlı modül ve yayın desteği.",
    summaryEn: "More modules and launch support.",
    featuresTr: ["Ek modüller", "Gelişmiş panel", "Domain/VPS hazırlığı", "Teslim desteği"],
    featuresEn: ["Extra modules", "Advanced panel", "Domain/VPS prep", "Delivery support"],
    deliveryTr: "14-21 gün",
    deliveryEn: "14-21 days"
  }
];

export function getProjectPricing(slug: string) {
  return projectPricing[slug] ?? fallbackPricing;
}
