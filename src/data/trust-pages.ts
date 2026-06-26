export type TrustPage = {
  slug: string;
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const trustPages: Record<string, TrustPage> = {
  privacy: {
    slug: "privacy",
    title: "Gizlilik Politikası",
    description: "NT Web Çözümleri ile iletişime geçtiğinizde paylaştığınız bilgilerin nasıl ele alındığına dair temel bilgilendirme.",
    sections: [
      { heading: "Toplanan bilgiler", body: ["Teklif formu, e-posta veya WhatsApp üzerinden ad, iletişim bilgisi, firma adı, proje ihtiyacı ve gönderdiğiniz bağlantılar alınabilir."] },
      { heading: "Kullanım amacı", body: ["Bu bilgiler yalnızca proje ihtiyacını anlamak, teklif hazırlamak, sizinle iletişime geçmek ve teslim sonrası destek sağlamak amacıyla kullanılır."] },
      { heading: "Paylaşım", body: ["Bilgileriniz izniniz olmadan üçüncü kişilerle pazarlama amacıyla paylaşılmaz. Bionluk üzerinden ilerlenen işlerde Bionluk platformunun kendi kullanıcı ve işlem koşulları geçerlidir."] },
    ],
  },
  kvkk: {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni",
    description: "Proje teklifi ve iletişim süreçlerinde işlenen kişisel verilere dair özet KVKK bilgilendirmesi.",
    sections: [
      { heading: "İşlenen veri kategorileri", body: ["Kimlik, iletişim, firma/proje bilgisi ve tarafınızdan iletilen dosya veya bağlantılar işlenebilir."] },
      { heading: "İşleme amacı", body: ["Talebin değerlendirilmesi, kapsamın netleştirilmesi, teklif hazırlanması, proje iletişimi ve destek süreçlerinin yürütülmesi için kullanılır."] },
      { heading: "Haklarınız", body: ["Kişisel verilerinizle ilgili bilgi alma, düzeltme, silme veya işleme faaliyetine itiraz taleplerinizi iletişim kanallarından iletebilirsiniz."] },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Çerez Bilgilendirmesi",
    description: "Sitede kullanılan temel çerez ve üçüncü taraf servis mantığına dair sade bilgilendirme.",
    sections: [
      { heading: "Zorunlu kullanım", body: ["Site deneyimi, güvenlik, performans ve form akışı için tarayıcı tarafında temel teknik veriler kullanılabilir."] },
      { heading: "Üçüncü taraf servisler", body: ["Form gönderimi veya ölçümleme için kullanılan servisler kendi teknik kayıtlarını tutabilir. Bu servisler ihtiyaç oldukça sınırlı amaçla kullanılır."] },
      { heading: "Kontrol", body: ["Çerez ayarlarınızı tarayıcınız üzerinden yönetebilir, çerezleri silebilir veya engelleyebilirsiniz."] },
    ],
  },
  terms: {
    slug: "terms",
    title: "Çalışma Koşulları",
    description: "Proje kapsamı, revizyon, ek geliştirme, teslim ve üçüncü taraf maliyetleri için temel çalışma prensipleri.",
    sections: [
      { heading: "Kapsam netliği", body: ["Her proje başlamadan önce sayfalar, modüller, teslim şekli, süre ve dahil olmayan işler mümkün olduğunca netleştirilir."] },
      { heading: "Ek geliştirme", body: ["Başta konuşulmayan yeni modül, entegrasyon, tasarım değişikliği veya veri aktarımı ayrıca değerlendirilir ve fiyatlandırılır."] },
      { heading: "Üçüncü taraf maliyetleri", body: ["Domain, hosting, VPS, lisans, ödeme altyapısı, API erişimi veya harici servis ücretleri aksi belirtilmedikçe müşteriye aittir."] },
    ],
  },
  support: {
    slug: "support",
    title: "Teslim Sonrası Destek",
    description: "Yayına alınan web sitesi, panel veya entegrasyonlar için bakım ve geliştirme desteğinin nasıl ele alındığı.",
    sections: [
      { heading: "Teslim sonrası kontrol", body: ["Yayın sonrası temel kontroller, küçük düzeltmeler ve kullanım sırasında fark edilen açık noktalar proje kapsamına göre ele alınır."] },
      { heading: "Bakım paketi", body: ["Aktif kullanılan sistemlerde düzenli bakım, küçük hata düzeltme, veri kontrolü ve yeni geliştirme planı için aylık destek paketi önerilebilir."] },
      { heading: "Yeni modüller", body: ["Yeni ekran, rapor, entegrasyon veya kapsam büyüten istekler bakım kapsamı dışında ayrıca fiyatlandırılır."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Kapsam ve Fiyatlandırma",
    description: "Web sitesi, admin panel, e-ticaret ve özel yazılım projelerinde fiyatı etkileyen ana faktörler.",
    sections: [
      { heading: "Fiyatı etkileyenler", body: ["Sayfa sayısı, modül sayısı, kullanıcı rolleri, veri yapısı, entegrasyon, ödeme altyapısı, teslim süresi ve destek beklentisi fiyatı etkiler."] },
      { heading: "Sabit paket yerine doğru kapsam", body: ["Bazı işler sade paketle çözülebilir; admin panel, özel yazılım ve entegrasyon işlerinde ise özel teklif daha sağlıklı olur."] },
      { heading: "Bütçe bilgisi neden istenir?", body: ["Bütçe aralığı, ihtiyaca uygun kapsamı gerçekçi şekilde planlamak ve gereksiz özellikleri elemek için kullanılır."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Bionluk Üzerinden Güvenli Çalışma",
    description: "Projelerde Bionluk profilinin güven, ödeme ve teslim süreci için nasıl kullanılabileceği.",
    sections: [
      { heading: "Güvenli ilerleme", body: ["İsterseniz proje Bionluk üzerinden özel teklif veya uygun ilan paketiyle başlatılabilir. Bu seçenek ödeme ve teslim takibi için güven katmanı sağlar."] },
      { heading: "Kapsam yine netleşir", body: ["Bionluk üzerinden ilerlemek, kapsamın belirsiz kalacağı anlamına gelmez. Yapılacak işler, teslim süresi ve ek talepler yine önceden konuşulur."] },
      { heading: "Yorum ve portföy", body: ["Tamamlanan işlerde müşteri izni ve platform kuralları uygun olduğunda yorum ve portföy güven kanıtı olarak kullanılabilir."] },
    ],
  },
  faq: {
    slug: "faq",
    title: "Sık Sorulan Sorular",
    description: "NT Web Çözümleri ile web sitesi, admin panel ve özel yazılım sürecine dair kısa yanıtlar.",
    sections: [
      { heading: "Ne tür işler yapıyorsunuz?", body: ["Kurumsal web sitesi, ürün katalog, WhatsApp sipariş, randevu sistemi, e-ticaret, admin panel, entegrasyon ve özel yazılım projeleri geliştiriyoruz."] },
      { heading: "Demo projeler gerçek müşteri işi mi?", body: ["Hayır. Canlı demo projeler müşteri işi gibi gösterilmez; işletmenize göre uyarlanabilecek örnek sistemlerdir."] },
      { heading: "Fiyat nasıl belirleniyor?", body: ["Kapsam, modül sayısı, teslim süresi, entegrasyon, veri yapısı ve destek beklentisine göre belirlenir."] },
      { heading: "Bionluk üzerinden çalışabilir miyiz?", body: ["Evet. İsterseniz güvenli ödeme ve teslim takibi için Bionluk üzerinden özel teklif veya ilan paketiyle ilerlenebilir."] },
    ],
  },
};

export function getTrustPage(slug: string) {
  return trustPages[slug];
}
