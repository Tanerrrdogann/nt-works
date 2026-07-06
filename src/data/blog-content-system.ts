export type BlogContentCluster = {
  slug: string;
  title: string;
  description: string;
  serviceSlug: string;
  serviceLabel: string;
  postSlugs: string[];
};

export type BlogCategoryContent = {
  description: string;
  serviceSlug?: string;
  serviceLabel?: string;
  focus: string[];
};

export const featuredBlogSlugs = [
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber",
  "admin-panel-yaptirmak-kapsam-rehberi",
  "yazilim-projesi-fiyati-neden-degisir",
  "isletme-yonetim-paneli-nedir",
];

export const blogContentClusters: BlogContentCluster[] = [
  {
    slug: "ozel-yazilim-ve-mvp",
    title: "Özel Yazılım ve MVP",
    description: "Fikri ilk çalışan sürüme çevirmek, hazır sistem sınırlarını görmek ve özel yazılım kapsamını netleştirmek için rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Özel yazılım hizmeti",
    postSlugs: [
      "ozel-yazilim-yaptirmak-isteyenler-icin-rehber",
      "kucuk-isletmeler-icin-yazilim-sistemleri",
      "saas-mvp-gelistirme-nedir",
      "hazir-sistem-mi-ozel-yazilim-mi",
      "web-sitesi-mi-admin-panel-mi",
    ],
  },
  {
    slug: "admin-panel-crm-ve-operasyon",
    title: "Admin Panel, CRM ve Operasyon",
    description: "Müşteri, teklif, lead, görev ve günlük işletme takibini panel mantığıyla düzenlemek isteyenler için içerik kümesi.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    serviceLabel: "Admin panel hizmeti",
    postSlugs: [
      "admin-panel-yaptirmak-kapsam-rehberi",
      "admin-panel-nedir",
      "isletme-yonetim-paneli-nedir",
      "crm-musteri-takip-sistemi-ne-ise-yarar",
      "lead-takip-sistemi-nedir",
      "teklif-takip-sistemi-hizmet-isletmeleri",
    ],
  },
  {
    slug: "stok-siparis-ve-satis-sistemleri",
    title: "Stok, Sipariş ve Satış Sistemleri",
    description: "Ürün, katalog, WhatsApp sipariş, e-ticaret, B2B ve stok takibi tarafında doğru sistemi seçmek için rehberler.",
    serviceSlug: "e-ticaret-satis-sistemleri",
    serviceLabel: "Satış sistemi hizmeti",
    postSlugs: [
      "stok-takip-sistemi-yaptirmak",
      "siparis-takip-sistemi-nedir",
      "whatsapp-siparis-sistemi-nedir",
      "e-ticaret-sitesi-yaptirmak-kucuk-isletme",
      "b2b-bayi-siparis-sistemi-nedir",
      "katalog-sitesi-mi-e-ticaret-sitesi-mi",
    ],
  },
  {
    slug: "entegrasyon-api-xml-pazaryeri",
    title: "Entegrasyon, API, XML ve Pazaryeri",
    description: "Sistemleri birbirine bağlamak, ürün verisi aktarmak ve pazaryeri süreçlerini daha kontrollü yönetmek için rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Entegrasyon hizmeti",
    postSlugs: [
      "pazaryeri-entegrasyonu-nedir",
      "pazaryeri-xml-entegrasyonu-nedir",
      "xml-entegrasyonu-nedir",
      "api-entegrasyonu-nedir",
    ],
  },
  {
    slug: "randevu-rezervasyon-ve-turizm",
    title: "Randevu, Rezervasyon ve Turizm",
    description: "Randevu, rezervasyon, tarih seçimi ve operasyon takibi gereken işletmeler için kapsam belirleme rehberleri.",
    serviceSlug: "randevu-rezervasyon-sistemleri",
    serviceLabel: "Randevu ve rezervasyon hizmeti",
    postSlugs: [
      "randevu-sistemi-yaptirmak",
      "randevu-sistemi-nedir",
      "rezervasyon-sistemi-turizm-kiralama",
      "turizm-operasyon-paneli-nedir",
    ],
  },
  {
    slug: "sektorel-yazilimlar",
    title: "Sektörel Yazılımlar",
    description: "Kuyumcu, emlak, rent a car, restoran, teknik servis ve benzeri sektörlerde özel sistem mantığını anlatan rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Sektörel yazılım hizmeti",
    postSlugs: [
      "emlakcilar-icin-web-ve-crm-sistemi",
      "kuyumcular-icin-yazilim-sistemi",
      "rent-a-car-yazilimi-nasil-planlanir",
      "sektorel-yazilim-cozumleri-nasil-planlanir",
      "teknik-servis-takip-sistemi",
      "restoran-qr-menu-ve-siparis-sistemi",
    ],
  },
  {
    slug: "fiyat-sure-ve-karsilastirma",
    title: "Fiyat, Süre ve Karşılaştırma",
    description: "Proje bütçesi, teslim süresi, kapsam ayrımı ve doğru başlangıç seçimi için karar verdiren rehberler.",
    serviceSlug: "tanitim-kurumsal-web-siteleri",
    serviceLabel: "Kapsamı birlikte netleştirelim",
    postSlugs: [
      "yazilim-projesi-fiyati-neden-degisir",
      "web-admin-ozel-yazilim-teslim-suresi",
      "ozel-yazilim-fiyatlari-nasil-belirlenir",
      "web-sitesi-projesinde-kapsam-nasil-belirlenir",
      "admin-panel-projelerinde-bakim-paketi-neden-onemlidir",
      "bakim-ve-gelistirme-paketi-neden-onemlidir",
    ],
  },
  {
    slug: "ai-otomasyon-ve-mobil",
    title: "AI Otomasyon ve Mobil",
    description: "Yapay zeka, WhatsApp AI asistan, mobil uygulama, webview ve işletme otomasyonları için doğru kapsamı anlatan rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Otomasyon hizmeti",
    postSlugs: [
      "whatsapp-ai-asistan-kucuk-isletme",
      "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir",
      "mobil-uygulama-mi-webview-mi",
    ],
  },
];

export const blogCategoryContent: Record<string, BlogCategoryContent> = {
  "Admin Panel": {
    description: "Admin panel, CRM, işletme yönetimi ve operasyon takibiyle ilgili rehberler. Excel, WhatsApp ve dağınık kayıtların ne zaman özel panele dönüşmesi gerektiğini anlatır.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    serviceLabel: "Admin panel hizmetini incele",
    focus: ["İşletme yönetim paneli", "Müşteri ve görev takibi", "Dashboard ve raporlama", "Yetki ve ekip kullanımı"],
  },
  "Özel Yazılım": {
    description: "Hazır sistemlerin yetmediği durumlarda özel yazılım, MVP ve işletmeye göre şekillenen sistemlerin nasıl planlanacağını anlatan içerikler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Özel yazılım hizmetini incele",
    focus: ["MVP kapsamı", "Özel iş akışı", "Hazır sistem karşılaştırması", "Büyüyebilir mimari"],
  },
  "Entegrasyon": {
    description: "API, XML, pazaryeri, stok/fiyat senkronizasyonu ve dış sistem bağlantılarını gerçekçi kapsamla anlatan entegrasyon rehberleri.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Entegrasyon hizmetini incele",
    focus: ["API bağlantısı", "XML veri akışı", "Pazaryeri süreçleri", "Hata ve log takibi"],
  },
  "E-Ticaret": {
    description: "E-ticaret, katalog, sepet, ödeme, sipariş paneli ve online satış sistemleri için karar vermeyi kolaylaştıran rehberler.",
    serviceSlug: "e-ticaret-satis-sistemleri",
    serviceLabel: "E-ticaret hizmetini incele",
    focus: ["Sepet ve ödeme", "Stok ve sipariş", "Katalogdan e-ticarete geçiş", "Satış operasyonu"],
  },
  "Katalog": {
    description: "WhatsApp katalog, QR menü, ürün listeleme ve konuşarak satış yapan işletmeler için düşük sürtünmeli satış vitrini rehberleri.",
    serviceSlug: "urun-katalog-whatsapp-siparis",
    serviceLabel: "Katalog hizmetini incele",
    focus: ["WhatsApp sipariş", "Ürün katalogu", "QR menü", "Admin panel ekleme"],
  },
  "Randevu": {
    description: "Randevu ve rezervasyon taleplerini daha düzenli almak isteyen işletmeler için takvim, form, durum ve panel rehberleri.",
    serviceSlug: "randevu-rezervasyon-sistemleri",
    serviceLabel: "Randevu hizmetini incele",
    focus: ["Randevu formu", "Rezervasyon akışı", "Takvim mantığı", "Talep takibi"],
  },
  "Fiyat Rehberi": {
    description: "Yazılım, web sitesi, admin panel ve entegrasyon projelerinde fiyatı ve teslim süresini etkileyen kapsam faktörleri.",
    serviceSlug: "tanitim-kurumsal-web-siteleri",
    serviceLabel: "Proje kapsamını netleştir",
    focus: ["Fiyat faktörleri", "Teslim süresi", "Kapsam yönetimi", "Bakım ve destek"],
  },
  "Karşılaştırma": {
    description: "Hazır sistem mi özel yazılım mı, katalog mu e-ticaret mi, web sitesi mi admin panel mi gibi kararları netleştiren karşılaştırma yazıları.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Doğru sistemi seçelim",
    focus: ["Hazır sistem ayrımı", "Katalog/e-ticaret kararı", "Panel ihtiyacı", "Mobil/webview seçimi"],
  },
  "Sektörel Yazılım": {
    description: "Emlak, kuyumcu, rent a car, turizm, teknik servis, restoran ve farklı sektörler için özel yazılım kapsamını anlatan rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Sektörel yazılım hizmetini incele",
    focus: ["Sektöre özel veri", "Operasyon paneli", "Katalog ve rezervasyon", "Gizlilik ve kapsam"],
  },
  "Yapay Zeka": {
    description: "AI asistan, mesaj analizi, lead sınıflandırma, doküman özetleme ve insan onaylı otomasyon sistemleri için rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "AI otomasyon kapsamını konuşalım",
    focus: ["Mesaj analizi", "Cevap önerisi", "Lead sınıflandırma", "İnsan onaylı otomasyon"],
  },
  "Mobil": {
    description: "Mobil uygulama, webview, PWA ve mobil uyumlu web sistemleri arasında küçük işletme için doğru seçimi anlatan rehberler.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    serviceLabel: "Mobil/webview kapsamını konuşalım",
    focus: ["Mobil web", "Webview uygulama", "Native uygulama", "Bildirim ve cihaz özellikleri"],
  },
  "CRM": {
    description: "Lead, müşteri, teklif ve satış takibini daha düzenli yönetmek isteyen işletmeler için CRM odaklı rehberler.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    serviceLabel: "CRM panel hizmetini incele",
    focus: ["Lead takibi", "Teklif süreci", "Müşteri notları", "Satış raporları"],
  },
};

export function getClusterForPost(postSlug: string) {
  return blogContentClusters.find((cluster) => cluster.postSlugs.includes(postSlug));
}

export function normalizeBlogPath(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
