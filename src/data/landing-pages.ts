export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  serviceSlug: string;
  problem: string;
  modules: string[];
  priceFactors: string[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "admin-panel-gelistirme",
    title: "Admin Panel Geliştirme",
    description: "İşletmenize özel müşteri, stok, sipariş, görev, teklif ve rapor ekranları olan admin panel geliştirme hizmeti.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "Excel, WhatsApp ve dağınık notlarla yürüyen işler takip edilemez hale geldiğinde özel admin panel işletmenin günlük operasyonunu tek yerde toplar.",
    modules: ["Müşteri kayıtları", "Stok ve ürün yönetimi", "Sipariş takibi", "Görev ve durum yönetimi", "Raporlama", "Kullanıcı rolleri"],
    priceFactors: ["Modül sayısı", "Kullanıcı rolleri", "Rapor ve çıktı ihtiyacı", "Veri aktarımı", "Entegrasyon ihtiyacı"],
  },
  {
    slug: "isletme-yonetim-sistemi",
    title: "İşletme Yönetim Sistemi",
    description: "Küçük işletmeler için müşteri, ürün, stok, sipariş, ödeme ve operasyon kayıtlarını tek panelde toplama sistemi.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "İşletme verisi farklı dosyalara ve mesajlara yayıldığında karar almak, takip yapmak ve rapor görmek zorlaşır.",
    modules: ["Dashboard", "Kayıt yönetimi", "Durum takibi", "Filtreleme", "Raporlama", "Bakım ve geliştirme desteği"],
    priceFactors: ["İş akışı karmaşıklığı", "Kayıt türleri", "Yetki yapısı", "Rapor ihtiyacı", "Teslim süresi"],
  },
  {
    slug: "pazaryeri-entegrasyonu",
    title: "Pazaryeri Entegrasyonu",
    description: "Pazaryeri ürün, stok, fiyat ve veri aktarımı için XML/API entegrasyon planlama ve geliştirme hizmeti.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    problem: "Pazaryerleri farklı kategori, alan, barkod, stok ve fiyat kuralları istediği için entegrasyon projeleri doğru veri eşleştirme ister.",
    modules: ["Ürün aktarımı", "Stok/fiyat güncelleme", "Alan eşleştirme", "Hata kontrolü", "XML/API bağlantısı", "Bakım planı"],
    priceFactors: ["Pazaryeri sayısı", "Ürün sayısı", "Veri kalitesi", "API erişimi", "Senkronizasyon sıklığı"],
  },
  {
    slug: "xml-entegrasyonu",
    title: "XML Entegrasyonu",
    description: "XML veri kaynaklarından ürün, stok, fiyat veya içerik aktarımı için alan eşleştirme ve entegrasyon geliştirme.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    problem: "XML verileri her zaman hedef sistemin beklediği formatta gelmez; alanların temizlenmesi, eşleştirilmesi ve kontrol edilmesi gerekir.",
    modules: ["XML okuma", "Veri temizleme", "Alan eşleştirme", "Aktarım kontrolü", "Loglama", "Hata raporu"],
    priceFactors: ["XML formatı", "Alan sayısı", "Hedef sistem", "Hata senaryoları", "Bakım ihtiyacı"],
  },
  {
    slug: "stok-takip-sistemi",
    title: "Stok Takip Sistemi",
    description: "Ürün, stok hareketi, giriş/çıkış, rapor ve kullanıcı yetkisi içeren işletmeye özel stok takip paneli.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "Stok bilgisi Excel veya mesajlarda tutulduğunda ürün hareketlerini ve güncel durumu güvenilir şekilde görmek zorlaşır.",
    modules: ["Ürün kartları", "Stok giriş/çıkış", "Depo veya kategori", "Hareket geçmişi", "Raporlama", "Kullanıcı yetkisi"],
    priceFactors: ["Ürün sayısı", "Hareket türleri", "Depo yapısı", "Barkod/çıktı ihtiyacı", "Mevcut veri aktarımı"],
  },
  {
    slug: "siparis-takip-sistemi",
    title: "Sipariş Takip Sistemi",
    description: "Sipariş, müşteri, ödeme durumu, teslim aşaması ve raporlama için özel takip paneli.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "Siparişler mesajlarda ve tablolarda dağınık kalınca hangi işin hangi durumda olduğu belirsizleşir.",
    modules: ["Sipariş listesi", "Müşteri kayıtları", "Durum yönetimi", "Ödeme/tahsilat notu", "Filtreleme", "Raporlama"],
    priceFactors: ["Sipariş akışı", "Durum sayısı", "Müşteri verisi", "Rapor ihtiyacı", "Ek entegrasyonlar"],
  },
  {
    slug: "whatsapp-siparis-sistemi",
    title: "WhatsApp Sipariş Sistemi",
    description: "Ürünleri katalog yapısında gösterip müşteriyi doğru ürün bilgisiyle WhatsApp siparişine yönlendiren sistem.",
    serviceSlug: "urun-katalog-whatsapp-siparis",
    problem: "Ürünleri tek tek mesajla göndermek hem zaman kaybettirir hem de müşterinin seçenekleri düzenli görmesini zorlaştırır.",
    modules: ["Kategori", "Ürün kartları", "Ürün detay", "WhatsApp butonu", "Arama/filtre", "Admin panel seçeneği"],
    priceFactors: ["Ürün sayısı", "Filtre ihtiyacı", "Admin panel", "Görsel hazırlığı", "Çoklu kategori yapısı"],
  },
  {
    slug: "randevu-sistemi",
    title: "Randevu Sistemi",
    description: "Hizmet, tarih/saat, müşteri bilgisi ve durum takibiyle çalışan randevu ve rezervasyon sistemi.",
    serviceSlug: "randevu-rezervasyon-sistemleri",
    problem: "Randevular telefon, DM ve WhatsApp arasında takip edildiğinde çakışma, unutma ve iletişim kopukluğu oluşabilir.",
    modules: ["Hizmet seçimi", "Tarih/saat talebi", "Müşteri formu", "Durum yönetimi", "Bildirim", "Admin takip"],
    priceFactors: ["Takvim mantığı", "Personel/hizmet sayısı", "Bildirim ihtiyacı", "Admin panel", "Onay/iptal akışı"],
  },
  {
    slug: "e-ticaret-sitesi",
    title: "E-Ticaret Sitesi",
    description: "Ürün, sepet, sipariş, ödeme ve admin panel yapısıyla işletmeye özel e-ticaret sitesi geliştirme.",
    serviceSlug: "e-ticaret-satis-sistemleri",
    problem: "Online satışta sadece ürün listelemek yetmez; sepet, ödeme, sipariş ve stok yönetimi birlikte planlanmalıdır.",
    modules: ["Ürün yönetimi", "Sepet", "Checkout", "Sipariş paneli", "Ödeme entegrasyonu", "Stok takibi"],
    priceFactors: ["Ürün sayısı", "Ödeme altyapısı", "Kargo/fatura entegrasyonu", "Stok yapısı", "Admin panel kapsamı"],
  },
  {
    slug: "power-apps-gelistirme",
    title: "Power Apps Geliştirme",
    description: "Microsoft 365 ekosisteminde form, onay, liste ve operasyon akışlarını dijitalleştiren Power Apps çözümleri.",
    serviceSlug: "ozel-yazilim-premium-sistemler",
    problem: "Excel ve e-posta üzerinden yürüyen iç operasyonlar, Power Apps ve SharePoint ile daha kontrollü formlara ve panellere dönüşebilir.",
    modules: ["Power Apps formu", "SharePoint listesi", "Onay akışı", "Power Automate", "Dosya merkezi", "Operasyon paneli"],
    priceFactors: ["Lisans yapısı", "Form sayısı", "Liste ilişkileri", "Onay akışı", "Kullanıcı sayısı"],
  },
  {
    slug: "guzellik-merkezi-randevu-sistemi",
    title: "Güzellik Merkezi Randevu Sistemi",
    description: "Güzellik merkezleri için hizmet, tarih/saat, müşteri bilgisi ve randevu durum takibi olan sistem.",
    serviceSlug: "randevu-rezervasyon-sistemleri",
    problem: "Randevular WhatsApp ve DM üzerinden alındığında saat çakışması, unutulan talepler ve manuel takip yükü oluşur.",
    modules: ["Hizmet seçimi", "Tarih/saat talebi", "Müşteri formu", "Onay/iptal durumu", "WhatsApp yönlendirme", "Admin takip"],
    priceFactors: ["Hizmet sayısı", "Personel takvimi", "Bildirim ihtiyacı", "Admin panel", "Durum yönetimi"],
  },
  {
    slug: "klinik-randevu-sistemi",
    title: "Klinik Randevu Sistemi",
    description: "Klinikler için hasta talebi, randevu zamanı, hizmet seçimi ve takip ekranı içeren rezervasyon sistemi.",
    serviceSlug: "randevu-rezervasyon-sistemleri",
    problem: "Kliniklerde telefon ve mesajla gelen randevular yoğunlaştıkça takip, onay ve iptal süreçleri karışabilir.",
    modules: ["Hasta talep formu", "Hizmet/branş seçimi", "Tarih/saat talebi", "Durum takibi", "E-posta/WhatsApp yönlendirme", "Admin ekranı"],
    priceFactors: ["Branş sayısı", "Doktor/personel yapısı", "Bildirim", "Veri alanları", "Panel kapsamı"],
  },
  {
    slug: "butik-urun-katalog-sitesi",
    title: "Butik Ürün Katalog Sitesi",
    description: "Butikler için ürünleri kategori, fiyat, açıklama ve WhatsApp sipariş yönlendirmesiyle gösteren katalog sitesi.",
    serviceSlug: "urun-katalog-whatsapp-siparis",
    problem: "Ürünleri Instagram veya WhatsApp üzerinden tek tek göstermek satış sürecini yavaşlatır ve müşterinin seçenekleri karşılaştırmasını zorlaştırır.",
    modules: ["Kategori", "Ürün kartı", "Ürün detay", "WhatsApp sipariş", "Arama/filtre", "Yönetilebilir katalog seçeneği"],
    priceFactors: ["Ürün sayısı", "Kategori yapısı", "Filtre ihtiyacı", "Admin panel", "Görsel hazırlığı"],
  },
  {
    slug: "restoran-qr-menu-whatsapp-siparis",
    title: "Restoran QR Menü ve WhatsApp Sipariş Sistemi",
    description: "Restoran ve kafeler için QR menü, ürün kategori yapısı ve WhatsApp sipariş yönlendirmesi.",
    serviceSlug: "urun-katalog-whatsapp-siparis",
    problem: "Menü güncellemeleri ve sipariş yönlendirmeleri manuel ilerlediğinde müşteriye güncel ve düzenli bilgi sunmak zorlaşır.",
    modules: ["QR menü", "Kategori", "Ürün detay", "Fiyat/açıklama", "WhatsApp yönlendirme", "Admin panel seçeneği"],
    priceFactors: ["Menü ürün sayısı", "Dil seçeneği", "QR akışı", "Admin panel", "Görsel içerik"],
  },
  {
    slug: "teknik-servis-is-takip-paneli",
    title: "Teknik Servis İş Takip Paneli",
    description: "Teknik servis firmaları için müşteri, cihaz/iş kaydı, durum, teslim ve ödeme takibi paneli.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "Servis işleri not defteri veya mesajlarda takip edildiğinde hangi işin hangi aşamada olduğu kolayca kaybolur.",
    modules: ["Müşteri kaydı", "Servis/iş kaydı", "Durum takibi", "Teslim notu", "Ödeme/tahsilat", "Raporlama"],
    priceFactors: ["İş akışı", "Durum sayısı", "Çıktı ihtiyacı", "Kullanıcı rolleri", "Veri aktarımı"],
  },
  {
    slug: "kucuk-isletme-admin-paneli",
    title: "Küçük İşletme Admin Paneli",
    description: "Küçük işletmeler için müşteri, stok, sipariş, ödeme ve günlük operasyon takibini tek panelde toplama.",
    serviceSlug: "admin-panel-isletme-yonetimi",
    problem: "Küçük işletmelerde işler büyüdükçe Excel, WhatsApp ve manuel notlarla takip sürdürülebilir olmaktan çıkar.",
    modules: ["Müşteri kayıtları", "Ürün/stok", "Sipariş", "Tahsilat notu", "Görev takibi", "Dashboard"],
    priceFactors: ["Modül sayısı", "Veri yapısı", "Raporlama", "Kullanıcı sayısı", "Bakım beklentisi"],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
