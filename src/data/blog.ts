import type { BlogPostType } from "@/types";

export const blogPosts: BlogPostType[] = [
  {
    slug: "admin-panel-nedir",
    title: "Admin panel nedir, işletmeler için ne işe yarar?",
    description: "Admin panelin küçük işletmelerde müşteri, stok, sipariş, görev ve rapor takibini nasıl düzenlediğini anlatan rehber.",
    category: "Admin Panel",
    tags: ["admin panel", "isletme yonetimi", "stok takip", "siparis takip"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["admin-panel-isletme-yonetimi", "ozel-yazilim-premium-sistemler"],
    relatedProjects: ["admin-panelli-isletme-sistemi", "task-management-system"],
    faqs: [
      { question: "Admin panel her işletme için gerekli mi?", answer: "Hayır. Sadece bilgi güncelleme veya takip ihtiyacı olan işletmeler için anlamlıdır. Kapsam, günlük iş yüküne göre belirlenmelidir." },
      { question: "Admin panel fiyatı neden değişir?", answer: "Modül sayısı, kullanıcı rolleri, raporlama, entegrasyon ve veri yapısı fiyatı doğrudan etkiler." },
    ],
    sections: [
      {
        heading: "Admin panel ne demek?",
        body: [
          "Admin panel, işletmenin arka taraftaki kayıtlarını ve günlük süreçlerini yönetmek için kullanılan özel giriş ekranıdır.",
          "Bir web sitesinden farklı olarak sadece ziyaretçiye görünen sayfaları değil; müşteri, ürün, stok, sipariş, görev, teklif ve rapor gibi işletme verilerini düzenli tutmaya odaklanır.",
        ],
      },
      {
        heading: "Hangi problemi çözer?",
        body: [
          "Excel dosyaları, WhatsApp mesajları ve not defterleri arasında kalan işler zamanla takip edilemez hale gelir.",
          "Admin panel bu dağınıklığı tek yerde toplar; kayıtları aramayı, filtrelemeyi, güncellemeyi ve durum takibini kolaylaştırır.",
        ],
      },
      {
        heading: "Kapsam nasıl belirlenir?",
        body: [
          "Önce hangi kayıtların tutulacağı belirlenir. Sonra kullanıcı rolleri, raporlar, durumlar, çıktı ihtiyacı ve entegrasyonlar konuşulur.",
          "Ek modül ve özel akışlar ayrıca fiyatlandırılır; bu yüzden proje başlamadan önce kapsamın netleşmesi önemlidir.",
        ],
      },
      {
        heading: "Admin panel ile web sitesi arasındaki fark",
        body: [
          "Web sitesi genellikle ziyaretçiye görünen tanıtım ve iletişim tarafıdır. Admin panel ise işletmenin içeride kullandığı yönetim ekranıdır.",
          "Bir işletmenin yalnızca tanıtım sitesine ihtiyacı olabilir; ama stok, sipariş, müşteri veya görev takibi varsa admin panel ihtiyacı doğar.",
          "Bu ayrım fiyatlandırmayı da etkiler. Çünkü admin panelde veri modeli, giriş sistemi, yetkiler, kayıt işlemleri ve hata senaryoları daha fazla düşünülür.",
        ],
      },
      {
        heading: "İyi bir admin panelde hangi ekranlar olabilir?",
        body: [
          "Temel bir panelde listeleme, kayıt ekleme, düzenleme, silme veya arşivleme gibi işlemler yer alabilir.",
          "Daha gelişmiş yapılarda dashboard, filtreleme, durum takibi, kullanıcı rolleri, işlem geçmişi, raporlar ve PDF/Excel çıktıları eklenebilir.",
          "Her modül baştan eklenmek zorunda değildir. En kritik iş akışıyla başlayıp sistemi kullanıma göre büyütmek çoğu küçük işletme için daha sağlıklı olur.",
        ],
      },
      {
        heading: "Admin panel yaptırmadan önce hazırlanması gerekenler",
        body: [
          "Mevcut Excel dosyaları, örnek müşteri kayıtları, stok alanları, sipariş durumları ve rapor ihtiyaçları proje öncesinde paylaşılmalıdır.",
          "Hangi kullanıcıların hangi işlemleri yapabileceği de baştan konuşulmalıdır. Tek adminli bir panel ile rol bazlı ekip paneli aynı kapsam değildir.",
          "Teslim sonrası destek ihtiyacı da önemlidir; çünkü panel kullanıldıkça yeni filtreler, raporlar veya küçük düzenlemeler gerekebilir.",
        ],
      },
    ],
  },
  {
    slug: "pazaryeri-xml-entegrasyonu-nedir",
    title: "Pazaryeri XML entegrasyonu nedir, gerçek projede nasıl planlanır?",
    description: "XML ürün verisini Trendyol, n11, Hepsiburada, Pazarama, PTTAVM, idefix ve Çiçeksepeti gibi pazaryerlerine aktarırken dikkat edilmesi gerekenleri gerçek proje tecrübesiyle anlatır.",
    category: "Entegrasyon",
    tags: ["xml entegrasyonu", "api entegrasyonu", "pazaryeri", "stok senkronizasyonu"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 12,
    relatedServices: ["ozel-yazilim-premium-sistemler", "admin-panel-isletme-yonetimi"],
    relatedProjects: ["admin-panelli-isletme-sistemi"],
    faqs: [
      { question: "XML entegrasyonu ile API entegrasyonu aynı şey mi?", answer: "Hayır. XML genelde belirli formatta veri aktarımıdır; API ise daha kontrollü ve çift yönlü işlem akışları sağlayabilir." },
      { question: "Pazaryeri entegrasyonu tek seferlik iş midir?", answer: "Çoğu projede bakım gerekir. Pazaryerlerinin alanları, kuralları ve hata durumları zamanla değişebilir." },
    ],
    sections: [
      {
        heading: "XML entegrasyonu ne işe yarar?",
        body: [
          "XML entegrasyonu, ürün bilgilerinin belirli bir dosya veya veri formatı üzerinden başka sisteme aktarılmasıdır.",
          "Pazaryeri tarafında ürün adı, fiyat, stok, barkod, kategori ve görsel gibi alanlar doğru eşleşmelidir.",
          "Basit görünen tarafı ürünleri toplu aktarmaktır; asıl zor taraf ise her pazaryerinin farklı kural, zorunlu alan, kategori, batch ve onay süreçlerine uyum sağlamaktır.",
        ],
      },
      {
        heading: "Neden proje bazlı değerlendirilir?",
        body: [
          "Her pazaryerinin istediği veri alanı, kategori mantığı ve hata mesajı farklı olabilir.",
          "Bu yüzden entegrasyon fiyatı ürün sayısına, veri kalitesine, stok/fiyat senkronizasyonuna ve bakım ihtiyacına göre değişir.",
          "Aynı XML dosyası bir pazaryerinde sorunsuz çalışırken başka bir pazaryerinde marka, kategori, barkod, attribute veya panel onayı yüzünden takılabilir.",
        ],
      },
      {
        heading: "Gerçek projede hedef neydi?",
        body: [
          "Amaç XML kaynak ürün verisini pazaryerlerine mümkün olduğunca eksiksiz aktarmak ve sonrasında bu akışı otomatik çalışır hale getirmekti.",
          "XML'de olup pazaryerinde olmayan ürünlerin açılması, XML'de olup pazaryerinde olan ürünlerin stok/fiyat güncellenmesi, XML'de artık olmayan ürünlerin stok 0 veya pasif hale getirilmesi planlandı.",
          "Müşterinin fiyat formülü de sisteme işlendi: bayi fiyatına sabit maliyet ekleniyor, komisyon katsayısı uygulanıyor ve son satış fiyatı otomatik hesaplanıyordu.",
        ],
      },
      {
        heading: "Stok kodu ve barkod eşleşmesi neden kritiktir?",
        body: [
          "Pazaryeri entegrasyonlarında ürünleri doğru eşleştirmek için genellikle stok kodu veya barkod anahtar olarak kullanılır.",
          "Eğer aynı ürün farklı prefixlerle veya farklı barkod evrenleriyle pazaryerine yüklenmişse sistem aynı ürünü yeni ürün sanabilir ya da yanlış kaydı güncellemeye çalışabilir.",
          "Bu yüzden entegrasyonda ilk işlerden biri XML'de var / pazaryerinde var, XML'de var / pazaryerinde yok, XML'de yok / pazaryerinde var ayrımlarını net raporlamaktır.",
        ],
      },
      {
        heading: "n11 tarafında ne öğrenildi?",
        body: [
          "n11 tarafında ilk yaklaşım katalog ID odaklı ilerlemekti; fakat bazı ürünlerde katalog bulunamadığında süreç duruyordu.",
          "Daha başarılı çözüm, XML'de olup n11'de olmayan ürünleri bulup kategori adaylarını sırayla deneyen bir ürün açma akışı kurmak oldu.",
          "Kategori uyumsuzluğu geldiğinde sistem tamamen durmak yerine sonraki kategori adayına geçecek şekilde planlandı. Böylece tek hata tüm ürün aktarımını kesmedi.",
          "Fiyat güncellemede de pazaryerinin aşırı indirim ve minimum fiyat kuralları dikkate alındı; bazı ürünlerde özel fiyat override ihtiyacı oluşabileceği görüldü.",
        ],
      },
      {
        heading: "Trendyol tarafında attribute ve marka yönetimi",
        body: [
          "Trendyol'da marka, kategori ve zorunlu attribute alanları ürün açma sürecinin merkezindedir.",
          "Projede marka ID'si API üzerinden doğrulandı, Beden ve Materyal gibi zorunlu alanlar payload'a doğru şekilde eklendi.",
          "Aynı attributeId iki kez gönderildiğinde validasyon hatası oluştuğu için statik ve dinamik attribute çakışmalarında son değer kazansın mantığı kuruldu.",
          "Aynı barkodlu ürün hataları da her zaman başarısızlık sayılmadı; bazı durumlarda ürün zaten sisteme girmiş olduğu için create yerine mevcut kayıt mantığıyla düşünmek gerekti.",
        ],
      },
      {
        heading: "Pazarama neden zorlayıcıydı?",
        body: [
          "Pazarama tarafında panelde görünen ürün sayısı ile API'de görünen ürün sayısı farklı davranabildi.",
          "Approved false ürünler API'de var gibi görünse de pratikte satışa çıkmış ürün anlamına gelmedi. Bu yüzden eksik ürün sayımı sadece ham API cevabına göre yapılamadı.",
          "Aynı ürünün farklı prefixlerle tekrar yüklenmesi duplicate sorununa yol açtı. Çözüm olarak keeper seçme, kopyaları stok 0 yapma ve create kodunu tekrar tekrar aynı ürünü yüklemeyecek şekilde koruma yaklaşımı kuruldu.",
          "Fiyat ve stok güncellemede doğru endpointlerin v2 olduğu görüldü; batch/dataId sonuçlarını ayrıca kontrol etmek gerekti.",
        ],
      },
      {
        heading: "PTTAVM tarafında prefixli barkod farkı",
        body: [
          "PTTAVM entegrasyonunda ilk denemelerde XML barkodlarıyla güncelleme yapılmak istendiğinde işlenecek ürün sayısı 0 dönebildi.",
          "Asıl kritik fark, pazaryeri tarafındaki gerçek update barkodunun PTT prefixli olmasıydı.",
          "Bu yüzden XML koduyla eşleşme yapılsa bile update payload'ında pazaryerinin beklediği prefixli barkod kullanılmalıydı.",
          "Ayrıca trackingId ile sonucun tamamlanıp tamamlanmadığını takip etmek, sadece ilk HTTP cevabına güvenmemek gerekti.",
        ],
      },
      {
        heading: "Cron ve flock neden önemli?",
        body: [
          "Entegrasyonun sürdürülebilir olması için işlemler manuel tetiklemeye bağlı bırakılmadı.",
          "30 dakikada bir çalışan cron yapısı kuruldu ve flock kullanılarak bir önceki çalışma bitmeden yenisinin başlaması engellendi.",
          "Bu özellikle yavaş API cevapları, batch işlemleri ve pazaryeri onay süreçleri olan sistemlerde önemlidir. Aksi halde aynı ürün için üst üste create/update denemeleri yapılabilir.",
        ],
      },
      {
        heading: "Bu tür entegrasyonlarda bakım neden gerekir?",
        body: [
          "Pazaryerleri kategori, attribute, endpoint, rate limit, panel davranışı ve onay süreçlerini zaman içinde değiştirebilir.",
          "Bugün çalışan fiyat/stok akışı yarın yeni bir zorunlu alan, marka kuralı veya batch hata cevabı yüzünden kontrol isteyebilir.",
          "Bu nedenle pazaryeri entegrasyonu tek seferlik kod yazma işi gibi değil, izleme ve gerektiğinde güncelleme isteyen teknik operasyon işi gibi ele alınmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-katalog-sitesi-nedir",
    title: "WhatsApp katalog sitesi nedir?",
    description: "Ürünleri düzenli gösterip müşteriyi WhatsApp üzerinden siparişe yönlendiren katalog sitesi yapısını anlatır.",
    category: "Katalog",
    tags: ["whatsapp katalog", "urun katalog", "butik sitesi", "qr menu"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 4,
    relatedServices: ["urun-katalog-whatsapp-siparis", "e-ticaret-satis-sistemleri"],
    relatedProjects: ["whatsapp-siparis-katalog"],
    faqs: [
      { question: "WhatsApp katalog sitesi e-ticaret midir?", answer: "Tam olarak değil. Online ödeme ve gelişmiş sipariş paneli yoksa daha çok düşük maliyetli satış vitrini gibi çalışır." },
      { question: "Sonradan admin panel eklenebilir mi?", answer: "Evet. Ürünleri sık güncelleyen işletmeler için yönetilebilir katalog yapısı kurulabilir." },
    ],
    sections: [
      {
        heading: "Katalog sitesi ne sağlar?",
        body: [
          "Ürünler kategori, fiyat, açıklama ve görsellerle düzenli şekilde sunulur.",
          "Müşteri ilgilendiği üründen WhatsApp mesajı başlatır; işletme de konuşmaya daha hazır bilgiyle başlar.",
        ],
      },
      {
        heading: "Kimler için uygundur?",
        body: [
          "Butik, takı, kozmetik, restoran, kafe, toptancı, araç listeleme ve hizmet kataloğu gibi alanlarda kullanılabilir.",
          "Tam e-ticarete geçmeden önce düzenli ürün vitrini kurmak isteyen işletmeler için iyi bir ara çözümdür.",
        ],
      },
      {
        heading: "WhatsApp katalog ile e-ticaret arasındaki pratik fark",
        body: [
          "WhatsApp katalogda müşteri ürünleri inceler ve siparişi konuşma üzerinden başlatır. Sepet, online ödeme ve gelişmiş sipariş paneli şart değildir.",
          "E-ticarette ise ürün yönetimi, sepet, ödeme, sipariş kaydı, stok ve müşteri verisi birlikte çalışır. Bu yüzden kapsam ve maliyet daha büyüktür.",
          "İlk aşamada ürünleri düzenli göstermek ve satış konuşmasını hızlandırmak istiyorsanız katalog daha doğru olabilir. Online ödeme ve otomatik sipariş yönetimi istiyorsanız e-ticaret düşünülmelidir.",
        ],
      },
      {
        heading: "Katalog sitesinde hangi alanlar olmalı?",
        body: [
          "Kategori, ürün adı, ürün görseli, fiyat, kısa açıklama, ürün detay sayfası ve WhatsApp butonu temel alanlardır.",
          "Ürün sayısı arttığında arama, filtreleme, etiket veya admin panel ihtiyacı doğabilir.",
          "Sık ürün değiştiren işletmeler için yönetilebilir katalog mantığı uzun vadede daha rahat olur.",
        ],
      },
    ],
  },
  {
    slug: "randevu-sistemi-nedir",
    title: "Randevu sistemi nedir, hangi işletmeler için uygundur?",
    description: "Randevu ve rezervasyon taleplerini form, takvim, durum ve admin takibiyle düzenleyen sistemleri anlatır.",
    category: "Randevu",
    tags: ["randevu sistemi", "rezervasyon", "klinik", "guzellik merkezi"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 4,
    relatedServices: ["randevu-rezervasyon-sistemleri"],
    relatedProjects: ["randevu-rezervasyon-sistemi"],
    faqs: [
      { question: "Basit form yeterli olur mu?", answer: "Bazı işletmeler için evet. Ancak onay, iptal, dolu saat ve personel takibi gerekiyorsa panel gerekir." },
      { question: "WhatsApp bildirimi eklenebilir mi?", answer: "Projeye göre WhatsApp yönlendirmesi veya bildirim entegrasyonu değerlendirilebilir." },
    ],
    sections: [
      {
        heading: "Randevu sistemi neyi düzenler?",
        body: [
          "Müşterinin hizmet seçmesi, tarih/saat talebi bırakması ve işletmenin bu talepleri takip etmesi için kullanılır.",
          "Telefon, DM ve WhatsApp üzerinden karışan randevu sürecini daha kontrollü hale getirir.",
        ],
      },
      {
        heading: "Hangi sektörlere uygundur?",
        body: [
          "Güzellik merkezi, klinik, doktor, kurs, spor salonu, halı saha, oto ekspertiz, otel ve pansiyon gibi rezervasyonla çalışan işletmeler için uygundur.",
        ],
      },
      {
        heading: "Randevu sisteminde durum yönetimi neden önemlidir?",
        body: [
          "Randevu sadece formdan gelen bir mesaj değildir. Talebin beklemede, onaylandı, iptal edildi veya tamamlandı gibi durumları olabilir.",
          "Durum yönetimi yoksa işletme hangi müşteriye dönüş yaptığını, hangi saatin dolu olduğunu veya hangi talebin iptal edildiğini kaçırabilir.",
          "Bu yüzden basit randevu formu ile admin panelli randevu sistemi aynı kapsamda değerlendirilmemelidir.",
        ],
      },
      {
        heading: "Bildirim ve WhatsApp akışı nasıl düşünülmeli?",
        body: [
          "Bazı işletmeler için formdan sonra e-posta bildirimi yeterlidir. Bazı işletmeler ise müşteriyi doğrudan WhatsApp konuşmasına yönlendirmek ister.",
          "Daha gelişmiş yapılarda işletme tarafında admin panel, müşteriye otomatik bilgilendirme ve randevu durum değişiklikleri eklenebilir.",
          "Bu özelliklerin her biri teslim süresini ve fiyatı etkileyebilir.",
        ],
      },
    ],
  },
  {
    slug: "e-ticaret-sitesi-ile-katalog-sitesi-farki",
    title: "E-ticaret sitesi ile katalog sitesi farkı nedir?",
    description: "Katalog, WhatsApp sipariş ve tam e-ticaret sistemleri arasındaki kapsam farklarını açıklar.",
    category: "E-Ticaret",
    tags: ["e-ticaret", "katalog sitesi", "whatsapp siparis", "online satis"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["e-ticaret-satis-sistemleri", "urun-katalog-whatsapp-siparis"],
    relatedProjects: ["ecommerce-platform", "whatsapp-siparis-katalog"],
    faqs: [
      { question: "İlk aşamada hangisi seçilmeli?", answer: "Online ödeme ve sipariş paneli şart değilse katalog daha hızlı başlayabilir. Satış hacmi büyüdükçe e-ticaret yapısına geçilebilir." },
      { question: "Katalogtan e-ticarete geçilebilir mi?", answer: "Doğru planlanan yapılarda ürün verisi ve sayfa akışı genişletilerek e-ticaret mantığına geçilebilir." },
    ],
    sections: [
      {
        heading: "Katalog sitesi daha sade çalışır",
        body: [
          "Katalog sitesinde ürünler sergilenir ve müşteri genelde WhatsApp veya form üzerinden iletişime geçer.",
          "Ödeme, sepet, stok ve sipariş paneli şart değildir; bu yüzden başlangıç maliyeti daha kontrollü olabilir.",
        ],
      },
      {
        heading: "E-ticaret daha kapsamlıdır",
        body: [
          "E-ticaret sitesinde ürün yönetimi, sepet, ödeme, sipariş kaydı, stok ve müşteri bilgileri birlikte düşünülür.",
          "Bu yapı işletme tarafında daha fazla yönetim ekranı ve bakım ihtiyacı doğurabilir.",
        ],
      },
      {
        heading: "Hangi durumda katalog yeterlidir?",
        body: [
          "Ürün sayınız azsa, ödeme konuşma üzerinden ilerliyorsa ve öncelik müşterinin ürünleri düzenli görmesiyse katalog sitesi yeterli olabilir.",
          "Katalog, Instagram veya WhatsApp üzerinden satış yapan işletmeler için daha hızlı ve düşük riskli başlangıç noktasıdır.",
          "Sonradan admin panel veya e-ticaret modülleri eklenebilecek şekilde planlanırsa büyüme yolu açık kalır.",
        ],
      },
      {
        heading: "Hangi durumda e-ticaret gerekir?",
        body: [
          "Müşterinin sepete eklemesi, online ödeme yapması, sipariş durumunu takip etmesi ve işletmenin stok/sipariş yönetmesi gerekiyorsa e-ticaret gerekir.",
          "Ödeme entegrasyonu, kargo, fatura veya pazaryeri bağlantısı gibi ihtiyaçlar varsa proje özel teklif olarak ele alınmalıdır.",
          "Bu yüzden e-ticaret fiyatı sadece tasarım değil, işletme tarafındaki yönetim ihtiyacıyla birlikte değerlendirilir.",
        ],
      },
    ],
  },
  {
    slug: "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli",
    title: "Stok takip sistemi yaptırırken nelere dikkat edilmeli?",
    description: "Stok takip panelinde ürün, hareket, rapor, yetki ve kapsam kararlarının nasıl netleştirileceğini anlatır.",
    category: "Admin Panel",
    tags: ["stok takip", "admin panel", "isletme paneli"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["admin-panel-isletme-yonetimi"],
    relatedProjects: ["admin-panelli-isletme-sistemi"],
    faqs: [
      { question: "Stok takip sistemi Excel yerine geçer mi?", answer: "Doğru kurulduğunda evet. Ancak mevcut veri düzeni ve günlük kullanım alışkanlığı projeden önce analiz edilmelidir." },
      { question: "Barkod veya çıktı eklenebilir mi?", answer: "Evet, fakat bu özellikler kapsam ve fiyatı etkileyen ek modüllerdir." },
    ],
    sections: [
      {
        heading: "Önce takip edilecek hareketler belirlenmeli",
        body: [
          "Sadece ürün listesi tutmak ile giriş/çıkış hareketi, depo, satış, iade ve rapor takip etmek aynı kapsam değildir.",
          "Bu yüzden stok sisteminde hangi işlemlerin yapılacağı en başta netleştirilmelidir.",
        ],
      },
      {
        heading: "Stok takip panelinde temel modüller",
        body: [
          "Ürün kartları, stok giriş/çıkış, kategori veya depo bilgisi, hareket geçmişi ve güncel stok raporu temel modüller arasında yer alır.",
          "Bazı işletmelerde barkod, raf/depo ayrımı, minimum stok uyarısı veya Excel çıktısı gibi ek ihtiyaçlar oluşabilir.",
          "Bu modüller işin kapsamını büyüttüğü için teklif aşamasında ayrı ayrı konuşulmalıdır.",
        ],
      },
      {
        heading: "Mevcut Excel verisi nasıl kullanılır?",
        body: [
          "Stok sistemi yaptırmadan önce mevcut Excel dosyalarının düzeni incelenmelidir.",
          "Eksik, tekrarlı veya tutarsız veriler varsa önce veri temizliği gerekir. Aksi halde yeni sisteme hatalı veri taşınır.",
          "Bu yüzden veri aktarımı her zaman basit kopyalama işi gibi görülmemelidir.",
        ],
      },
    ],
  },
  {
    slug: "ozel-yazilim-fiyatlari-nasil-belirlenir",
    title: "Özel yazılım fiyatları nasıl belirlenir?",
    description: "Özel yazılım projelerinde modül sayısı, entegrasyon, veri yapısı ve destek beklentisinin fiyatı nasıl etkilediğini anlatır.",
    category: "Özel Yazılım",
    tags: ["ozel yazilim", "fiyatlandirma", "kapsam"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 6,
    relatedServices: ["ozel-yazilim-premium-sistemler", "admin-panel-isletme-yonetimi"],
    relatedProjects: ["cloud-storage-platform", "ai-log-analysis-panel"],
    faqs: [
      { question: "Neden net fiyat hemen verilemiyor?", answer: "Çünkü ekran sayısı, kullanıcı rolleri, veri modeli, entegrasyon ve bakım beklentisi bilinmeden doğru fiyat vermek sağlıklı değildir." },
      { question: "MVP ile başlamak mümkün mü?", answer: "Evet. Önce en kritik iş akışını çözen sürüm hazırlanıp sonra yeni modüller eklenebilir." },
    ],
    sections: [
      {
        heading: "Fiyatı belirleyen ana faktörler",
        body: [
          "Modül sayısı, kullanıcı rolleri, entegrasyonlar, raporlama, veri aktarımı, teslim süresi ve bakım beklentisi özel yazılım fiyatını etkiler.",
          "Kapsam netleştirilmeden verilen fiyat ya eksik kalır ya da proje ilerledikçe sürekli değişmek zorunda kalır.",
        ],
      },
      {
        heading: "MVP ile başlamak neden mantıklı olabilir?",
        body: [
          "Özel yazılım projelerinde tüm fikirleri ilk sürüme koymak çoğu zaman maliyeti ve riski artırır.",
          "Önce en kritik iş akışını çözen MVP hazırlanırsa işletme sistemi kullanmaya başlar ve gerçek ihtiyaçlar daha net görünür.",
          "Sonraki modüller kullanım geri bildirimlerine göre planlandığında hem bütçe hem de geliştirme süreci daha kontrollü ilerler.",
        ],
      },
      {
        heading: "Bakım ve geliştirme neden ayrı düşünülmeli?",
        body: [
          "Özel yazılım canlıya alındıktan sonra yeni raporlar, küçük hata düzeltmeleri, veri düzenlemeleri ve yeni modül talepleri doğabilir.",
          "Bu talepler plansız ilerlerse hem müşteri hem geliştirici tarafında zaman yönetimi zorlaşır.",
          "Bu yüzden teslim sonrası bakım/geliştirme desteği proje başlamadan önce konuşulmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "power-apps-ile-isletme-surecleri-nasil-dijitallesir",
    title: "Power Apps ile işletme süreçleri nasıl dijitalleşir?",
    description: "Power Apps ve SharePoint tabanlı operasyon panellerinin hangi işletme süreçlerinde kullanılabileceğini anlatır.",
    category: "Power Apps",
    tags: ["power apps", "sharepoint", "power automate", "operasyon paneli"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["ozel-yazilim-premium-sistemler", "admin-panel-isletme-yonetimi"],
    relatedProjects: ["admin-panelli-isletme-sistemi"],
    faqs: [
      { question: "Power Apps her özel yazılımın yerine geçer mi?", answer: "Hayır. Microsoft 365 ekosistemi olan ve hızlı iç operasyon paneli isteyen ekiplerde daha mantıklıdır." },
      { question: "Lisans maliyeti önemli mi?", answer: "Evet. Power Apps projelerinde teknik geliştirme kadar lisans yapısı da en başta konuşulmalıdır." },
    ],
    sections: [
      {
        heading: "Power Apps hangi durumda mantıklı?",
        body: [
          "Şirket içinde form, onay, dosya, liste ve görev akışlarını hızlıca dijitalleştirmek isteyen ekipler için güçlü bir seçenektir.",
          "SharePoint listeleri ve Power Automate ile birlikte operasyon paneli gibi çalışabilir.",
        ],
      },
      {
        heading: "Lisans ve ekosistem neden önemli?",
        body: [
          "Power Apps projeleri teknik geliştirme kadar Microsoft 365 lisans yapısına da bağlıdır.",
          "Kullanıcı sayısı, veri kaynağı, premium connector ihtiyacı ve kurum içi erişim izinleri proje kararını etkiler.",
          "Bu yüzden Power Apps işi başlamadan önce sadece ekranlar değil, lisans ve kullanım senaryosu da netleşmelidir.",
        ],
      },
      {
        heading: "Power Apps mi özel yazılım mı?",
        body: [
          "Microsoft ekosisteminde hızlı iç operasyon çözümü isteniyorsa Power Apps avantajlı olabilir.",
          "Dış müşteriye açık, yüksek özelleştirme isteyen, karmaşık API veya özel performans ihtiyacı olan projelerde özel yazılım daha uygun olabilir.",
          "Doğru seçim bütçe, kullanıcı sayısı, veri yapısı ve uzun vadeli bakım beklentisine göre yapılmalıdır.",
        ],
      },
    ],
  },
  {
    slug: "web-sitesi-projesinde-kapsam-nasil-belirlenir",
    title: "Web sitesi projesinde kapsam nasıl belirlenir?",
    description: "Sayfa sayısı, içerik, form, SEO, blog, referans ve teslim sonrası destek gibi web sitesi kapsam kararlarını açıklar.",
    category: "Web Sitesi",
    tags: ["web sitesi", "kapsam", "teklif", "seo"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["tanitim-kurumsal-web-siteleri"],
    relatedProjects: ["kurumsal-web-sitesi", "landing-page"],
    faqs: [
      { question: "Sayfa sayısı fiyatı etkiler mi?", answer: "Evet. Her sayfanın içerik, tasarım uyarlama, SEO ve kontrol süreci vardır." },
      { question: "Blog ilk etapta şart mı?", answer: "Hayır. Ancak organik müşteri hedefleniyorsa blog veya bilgi merkezi güçlü bir yatırımdır." },
    ],
    sections: [
      {
        heading: "Kapsam sadece sayfa sayısı değildir",
        body: [
          "Web sitesi projesinde sayfalar, formlar, içerik akışı, görsel hazırlığı, SEO ayarları, CTA yapısı ve teslim sonrası destek birlikte değerlendirilir.",
          "İhtiyaç net değilse önce daha sade yapı kurulup sonra blog, referans ve detay sayfaları eklenebilir.",
        ],
      },
      {
        heading: "Teklif formu ve CTA akışı neden önemlidir?",
        body: [
          "Web sitesinin amacı sadece bilgi vermek değil, doğru müşteriden doğru talebi toplamaktır.",
          "Teklif formunda hizmet türü, mevcut sistem, bütçe aralığı, teslim beklentisi ve proje açıklaması gibi alanlar varsa kapsam daha hızlı netleşir.",
          "Ziyaretçi hizmet sayfasından canlı örneğe, canlı örnekten teklif formuna doğal şekilde ilerleyebilmelidir.",
        ],
      },
      {
        heading: "SEO ilk günden nasıl düşünülmeli?",
        body: [
          "Başlık, meta açıklaması, doğru H1/H2 hiyerarşisi, iç linkleme ve hızlı mobil deneyim temel SEO tarafını oluşturur.",
          "Blog veya bilgi merkezi sonradan eklenecekse hizmet sayfaları buna uygun bağlantı yapısıyla hazırlanmalıdır.",
          "Kurumsal site, sadece bugünün kartviziti değil, ileride organik müşteri getirecek içerik sisteminin temeli olabilir.",
        ],
      },
    ],
  },
  {
    slug: "admin-panel-projelerinde-bakim-paketi-neden-onemlidir",
    title: "Admin panel projelerinde bakım paketi neden önemlidir?",
    description: "Admin panel ve özel yazılım sistemlerinde teslim sonrası bakım, hata düzeltme ve yeni modül geliştirme ihtiyacını anlatır.",
    category: "Bakım",
    tags: ["bakim paketi", "admin panel", "ozel yazilim", "destek"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 4,
    relatedServices: ["admin-panel-isletme-yonetimi", "ozel-yazilim-premium-sistemler"],
    relatedProjects: ["admin-panelli-isletme-sistemi", "task-management-system"],
    faqs: [
      { question: "Bakım paketi zorunlu mu?", answer: "Zorunlu değildir. Ancak aktif kullanılan panel ve entegrasyonlarda düzenli destek iş sürekliliği sağlar." },
      { question: "Yeni özellikler bakım paketine dahil mi?", answer: "Genelde küçük kontroller ve destek dahil olur; yeni modül ve büyük geliştirmeler ayrıca fiyatlandırılır." },
    ],
    sections: [
      {
        heading: "Teslim sonrası ihtiyaç bitmez",
        body: [
          "Admin panel ve özel yazılım sistemleri işletme içinde kullanıldıkça yeni istekler, veri düzenlemeleri ve küçük iyileştirmeler ortaya çıkar.",
          "Bakım paketi bu taleplerin plansız ve kopuk ilerlemesi yerine düzenli destek akışı kurar.",
        ],
      },
    ],
  },
  {
    slug: "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli",
    title: "Kurumsal web sitesi yaptırırken nelere dikkat edilmeli?",
    description: "Kurumsal web sitesi yaptırmadan önce güven, içerik, mobil uyum, SEO ve teklif akışı için kontrol edilmesi gerekenleri anlatır.",
    category: "Web Sitesi",
    tags: ["kurumsal web sitesi", "web tasarim", "firma sitesi"],
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingMinutes: 5,
    relatedServices: ["tanitim-kurumsal-web-siteleri"],
    relatedProjects: ["kurumsal-web-sitesi"],
    faqs: [
      { question: "Kurumsal web sitesi sadece tasarım mıdır?", answer: "Hayır. Hizmet anlatımı, güven alanları, mobil uyum, SEO temeli ve teklif akışı birlikte düşünülmelidir." },
      { question: "Hazır şablon yeterli olur mu?", answer: "Bazı küçük ihtiyaçlarda yeterli olabilir; ancak marka dili, hizmet yapısı ve dönüşüm akışı işletmeye göre düzenlenmelidir." },
    ],
    sections: [
      {
        heading: "Güven veren yapı kurulmalı",
        body: [
          "Kurumsal web sitesi ziyaretçiye firmanın ne yaptığını, kimlere hizmet verdiğini ve nasıl iletişime geçileceğini hızlıca anlatmalıdır.",
          "Hizmet sayfaları, hakkımızda, referans, SSS ve teklif akışı güven hissini doğrudan etkiler.",
        ],
      },
    ],
  },
];

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
