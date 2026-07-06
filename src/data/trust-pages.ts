export type TrustPage = {
  slug: string;
  title: string;
  description: string;
  content?: string;
  sections?: Array<{
    heading: string;
    body: string[];
  }>;
};

export const trustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Sıkça Sorulan Sorular",
    description: "NT Web Çözümleri web sitesi, satış sistemi, katalog, WhatsApp sipariş, randevu, admin panel, özel yazılım, entegrasyon ve bakım süreçleri hakkında sıkça sorulan sorular.",
    content: `# Giriş Metni

NT Web Çözümleri olarak küçük ve orta ölçekli işletmelerin dijital ihtiyaçlarına yönelik web sitesi, satış sistemi, ürün katalog sitesi, WhatsApp sipariş sistemi, randevu sistemi, admin panel, özel yazılım, entegrasyon, otomasyon ve bakım çözümleri geliştiriyoruz.

Bu sayfada, proje başlamadan önce en çok merak edilen konuları sade ve anlaşılır şekilde yanıtladık. Proje kapsamı, teslim süreci, fiyatlandırma, değişiklik talepleri, destek ve yayın süreci hakkında bilgi alabilir; ihtiyaçlarınıza uygun çözüm için WhatsApp veya e-posta üzerinden bizimle iletişime geçebilirsiniz.

---

## 1. Genel Çalışma Süreci

### Proje süreci nasıl başlar?

Öncelikle ihtiyacınız, hedefiniz ve mevcut durumunuz anlaşılır. Ardından yapılacak işler netleştirilir, kapsam belirlenir ve size uygun bir yol haritası oluşturulur.

### Proje başlamadan önce benden hangi bilgiler istenir?

İşletme türünüz, istediğiniz sayfalar, örnek aldığınız siteler, ürün veya hizmet bilgileriniz, varsa mevcut domain/hosting bilgileriniz ve özel istekleriniz talep edilir.

### Her işletmeye aynı sistem mi hazırlanır?

Hayır. Her proje işletmenin ihtiyacına göre değerlendirilir. Hazırlanacak yapı; sektörünüze, müşteri akışınıza, satış yönteminize ve yönetim ihtiyacınıza göre şekillenir.

### Proje kapsamı nasıl belirlenir?

Sayfa sayısı, modüller, formlar, yönetim paneli, entegrasyonlar, otomasyonlar ve özel iş akışları üzerinden kapsam netleştirilir. Belirsiz kalan noktalar proje başlamadan önce açıklığa kavuşturulur.

### Süreç boyunca iletişim nasıl ilerler?

Proje sürecinde gerekli noktalarda bilgilendirme yapılır. İçerik, görsel, erişim veya onay gereken durumlarda WhatsApp ya da e-posta üzerinden iletişim sağlanır.

---

## 2. Web Sitesi Projeleri

### Hangi tür web siteleri hazırlanır?

Kurumsal web sitesi, hizmet tanıtım sitesi, ürün katalog sitesi, tek sayfalık tanıtım sitesi, restoran/kafe sitesi, portföy sitesi ve işletmeye özel web arayüzleri hazırlanabilir.

### Web sitesi mobil uyumlu olur mu?

Evet. Hazırlanan web siteleri mobil, tablet ve masaüstü cihazlarda düzgün görüntülenecek şekilde tasarlanır.

### Site içeriğini ben mi hazırlamalıyım?

İşletmenize ait temel bilgiler, hizmetler, ürünler, görseller ve iletişim bilgileri sizden alınır. Gerekirse mevcut bilgiler düzenlenerek daha profesyonel bir metin yapısına dönüştürülebilir.

### Web sitem Google’da görünür mü?

Site yapısı temel SEO kurallarına uygun hazırlanır. Sayfa başlıkları, açıklamalar, URL yapısı ve teknik düzenlemeler yapılabilir. Ancak arama sonuçlarında belirli bir sıra garantisi verilmez.

### Mevcut web sitem yenilenebilir mi?

Evet. Mevcut siteniz incelenerek tasarım, hız, içerik, kullanıcı deneyimi ve teknik yapı açısından yenilenebilir.

---

## 3. Ürün Katalog ve WhatsApp Sipariş Sistemleri

### Ürün katalog sitesi nedir?

Ürünlerinizi kategorilere ayırarak sergileyebileceğiniz, müşterilerin ürünleri inceleyip kolayca iletişime geçebileceği web yapısıdır.

### WhatsApp sipariş sistemi nasıl çalışır?

Müşteri ürün veya hizmeti seçer, gerekli bilgileri girer ve sipariş/teklif talebi WhatsApp üzerinden size yönlendirilir.

### Sepet sistemi olmadan ürün satışı yapılabilir mi?

Evet. Özellikle küçük işletmeler için WhatsApp yönlendirmeli katalog sistemi pratik ve hızlı bir çözümdür. Müşteri ürünü seçer, sipariş veya bilgi talebini doğrudan iletir.

### Ürünleri sonradan ben ekleyebilir miyim?

Bu ihtiyaç proje başında belirtilirse ürün ekleme, düzenleme ve silme işlemleri için yönetim paneli hazırlanabilir.

### Katalog sistemi hangi işletmeler için uygundur?

Restoranlar, kafeler, butik mağazalar, toptancılar, üreticiler, hizmet veren işletmeler ve online satışa yeni başlamak isteyen markalar için uygundur.

---

## 4. E-Ticaret ve Satış Sistemleri

### E-ticaret sitesi hazırlanabilir mi?

Evet. Ürün listeleme, kategori yapısı, sepet, sipariş takibi, stok yapısı ve yönetim paneli gibi ihtiyaçlara göre e-ticaret sistemi hazırlanabilir.

### Her e-ticaret projesi aynı kapsamda mı olur?

Hayır. Ürün sayısı, stok yapısı, ödeme ihtiyacı, kargo süreci, kampanya sistemi ve yönetim paneli özellikleri projeye göre değişir.

### Stok ve fiyat yönetimi yapılabilir mi?

Evet. İhtiyaca göre ürünlerin fiyat, stok, açıklama, görsel ve kategori bilgilerini yönetebileceğiniz bir panel hazırlanabilir.

### Satış sistemi WhatsApp ile birlikte çalışabilir mi?

Evet. Ürün veya sipariş akışı doğrudan WhatsApp’a yönlendirilecek şekilde tasarlanabilir. Bu yapı küçük ve orta ölçekli işletmeler için pratik bir çözüm sunar.

### E-ticaret sitesinde raporlama yapılabilir mi?

Siparişler, ürünler, müşteriler, gelir durumu veya stok hareketleri gibi veriler için temel raporlama ekranları hazırlanabilir. Detay seviyesi proje kapsamına göre belirlenir.

---

## 5. Admin Panel ve Özel Yazılım

### Admin panel nedir?

Admin panel, işletmenizin site içeriklerini, ürünlerini, siparişlerini, müşterilerini, randevularını veya özel verilerini yönetebileceği özel yönetim ekranıdır.

### Her projeye admin panel gerekir mi?

Hayır. Sadece tanıtım amaçlı basit web sitelerinde admin panel zorunlu olmayabilir. Ancak içeriklerin sürekli değişeceği projelerde admin panel faydalıdır.

### İşletmeme özel yazılım hazırlanabilir mi?

Evet. Standart web sitesi dışında, işletmenize özel iş akışları, takip panelleri, formlar, kayıt sistemleri ve operasyon ekranları geliştirilebilir.

### Admin panelde kullanıcı yetkilendirme olur mu?

İhtiyaca göre farklı kullanıcı rolleri, giriş sistemi ve yetkilendirme yapısı hazırlanabilir. Bu özellikler proje kapsamında ayrıca değerlendirilir.

### Mevcut iş akışım dijital sisteme taşınabilir mi?

Evet. Excel, manuel takip, WhatsApp üzerinden ilerleyen süreçler veya dağınık kayıt yapıları daha düzenli bir yazılım sistemine dönüştürülebilir.

---

## 6. Randevu ve Rezervasyon Sistemleri

### Randevu sistemi hangi işletmeler için uygundur?

Kuaför, güzellik salonu, danışmanlık, klinik, kurs, özel ders, araç bakım, restoran rezervasyonu ve hizmet bazlı çalışan işletmeler için uygundur.

### Müşteriler online randevu alabilir mi?

Evet. Müşterilerin tarih, saat, hizmet ve iletişim bilgisi seçerek randevu oluşturabileceği bir yapı hazırlanabilir.

### Randevuları ben yönetebilir miyim?

Evet. Admin panel üzerinden randevuları görüntüleyebilir, durumlarını değiştirebilir ve gerekirse manuel kayıt oluşturabilirsiniz.

### Rezervasyon sistemi WhatsApp’a bağlanabilir mi?

Evet. Randevu veya rezervasyon talepleri doğrudan WhatsApp’a yönlendirilebilir ya da panel üzerinde kayıt altına alınabilir.

### Yoğun saat ve uygunluk kontrolü yapılabilir mi?

Proje kapsamına göre müsaitlik kontrolü, dolu saatlerin kapatılması ve belirli saat aralıklarının yönetilmesi sağlanabilir.

---

## 7. Pazaryeri, XML ve API Entegrasyonları

### XML entegrasyonu nedir?

XML entegrasyonu, ürün verilerinin belirli bir kaynak dosyadan alınarak sisteme aktarılması veya güncellenmesi işlemidir.

### API entegrasyonu yapılabilir mi?

Evet. Uygun teknik dokümantasyon sağlandığında farklı sistemler arasında veri alışverişi yapılabilir. Ürün, stok, fiyat, sipariş veya müşteri verileri entegre edilebilir.

### Pazaryeri entegrasyonu yapılabilir mi?

İhtiyaca göre pazaryeri ürün aktarımı, stok-fiyat güncelleme, sipariş çekme veya veri eşleştirme süreçleri için entegrasyon çalışması yapılabilir.

### Entegrasyonlarda hangi bilgiler gerekir?

API dokümanı, XML bağlantısı, kullanıcı erişimleri, örnek veri yapısı, ürün eşleştirme kuralları ve istenen iş akışı gereklidir.

### Entegrasyonlarda hata olursa ne yapılır?

Teslim edilen kapsamda hata varsa düzeltilir. Ancak kaynak sistemin kural değiştirmesi, API limitleri, veri formatı değişikliği veya yeni iş akışı talebi yeni kapsam olarak değerlendirilir.

---

## 8. Fiyatlandırma ve Kapsam

### Fiyat nasıl belirlenir?

Fiyat; sayfa sayısı, tasarım seviyesi, admin panel ihtiyacı, entegrasyonlar, otomasyonlar, özel modüller ve teslim süresine göre belirlenir.

### Net fiyat almak için ne göndermeliyim?

İstediğiniz sistemi kısaca anlatmanız, örnek siteleri paylaşmanız, gerekli sayfaları yazmanız ve özel iş akışlarını belirtmeniz yeterlidir.

### Neden her projeye aynı fiyat verilmiyor?

Çünkü her projenin iş yükü farklıdır. Basit bir tanıtım sitesi ile admin panelli satış sistemi aynı kapsamda değerlendirilmez.

### Kapsam sonradan değişirse fiyat değişir mi?

Evet. Yeni özellik, yeni sayfa, yeni modül veya farklı iş akışı yeni kapsam olarak değerlendirilir.

### Proje başlamadan önce kapsam netleşir mi?

Evet. Yanlış anlaşılmaları önlemek için yapılacak işler proje başlamadan önce mümkün olduğunca net şekilde belirlenir.

---

## 9. Teslim Süresi

### Teslim süresi nasıl belirlenir?

Teslim süresi; projenin büyüklüğüne, sayfa sayısına, özel yazılım ihtiyacına, entegrasyonlara ve içeriklerin hazır olup olmamasına göre belirlenir.

### Küçük web siteleri daha hızlı teslim edilir mi?

Genellikle evet. Tanıtım amaçlı, az sayfalı ve özel yazılım gerektirmeyen web siteleri daha kısa sürede hazırlanabilir.

### Admin panelli projeler neden daha uzun sürer?

Çünkü sadece görünen web sitesi değil; veri yapısı, yönetim ekranları, kullanıcı işlemleri, güvenlik, kayıt sistemi ve test süreci de hazırlanır.

### İçerikleri geç göndermem teslim süresini etkiler mi?

Evet. Logo, metin, görsel, ürün bilgisi veya erişim bilgileri geç iletilirse teslim süresi buna bağlı olarak uzayabilir.

### Acil projeler yapılabilir mi?

Uygunluk durumuna ve işin kapsamına göre acil projeler değerlendirilebilir. Ancak sağlıklı teslim için kapsamın net ve içeriklerin hazır olması gerekir.

---

## 10. Değişiklik, Hata Düzeltme ve Ek İstekler

### Teslimden sonra düzenleme yapılır mı?

Evet. Anlaşılan kapsam doğrultusunda düzenleme yapılır. Amaç, teslim edilen işin belirlenen kapsamla uyumlu hale gelmesidir.

### Teslim edilen kapsamda hata varsa ne olur?

Teslim edilen kapsamda hata varsa düzeltilir. Hatanın, proje başında anlaşılan işin içinde olması durumunda gerekli düzeltme yapılır.

### Yeni sayfa eklemek istersem ne olur?

Yeni sayfa, proje başında belirlenen kapsamda yoksa yeni kapsam olarak değerlendirilir.

### Yeni özellik veya modül istersem ne olur?

Yeni özellik, yeni modül veya farklı iş akışı mevcut kapsamın dışında değerlendirilir ve ayrıca planlanır.

### Tasarımda küçük düzenlemeler yapılabilir mi?

Evet. Anlaşılan kapsam doğrultusunda renk, metin, görsel, hizalama veya içerik düzenlemeleri yapılabilir. Büyük yapı değişiklikleri ayrıca değerlendirilir.

---

## 11. Bakım ve Destek

### Proje tesliminden sonra destek veriliyor mu?

Evet. Teslim sonrası ihtiyaçlara göre bakım, teknik destek ve geliştirme hizmeti sunulabilir.

### Bakım hizmeti neleri kapsar?

Site kontrolü, küçük teknik düzenlemeler, içerik güncellemeleri, hata takibi, yedekleme kontrolü ve performans iyileştirmeleri bakım kapsamında değerlendirilebilir.

### Her destek talebi bakım kapsamında mı olur?

Hayır. Yeni özellik, yeni sayfa, yeni entegrasyon veya farklı iş akışı bakım değil, yeni geliştirme kapsamı olarak değerlendirilir.

### Site yayında kaldıktan sonra değişiklik yapılabilir mi?

Evet. Yayındaki sistem üzerinde içerik, tasarım veya teknik geliştirmeler yapılabilir. Değişikliğin büyüklüğüne göre süreç planlanır.

### Düzenli bakım gerekli mi?

Özellikle aktif kullanılan web siteleri, satış sistemleri ve admin panelli yazılımlar için düzenli bakım önerilir. Bu sayede sorunlar erken fark edilir ve sistem daha sağlıklı çalışır.

---

## 12. Hosting, Domain ve Yayın Süreci

### Domain nedir?

Domain, web sitenizin internetteki adresidir. Örneğin işletmenizin adıyla uyumlu bir alan adı tercih edilebilir.

### Hosting nedir?

Hosting, web sitenizin dosyalarının ve verilerinin barındırıldığı sunucu hizmetidir. Projenin türüne göre uygun hosting veya sunucu ihtiyacı belirlenir.

### Mevcut domain ve hosting kullanılabilir mi?

Evet. Mevcut domain ve hosting bilgileriniz uygunsa proje bu yapı üzerinde yayınlanabilir.

### Domain veya hostingim yoksa ne yapmalıyım?

İhtiyacınıza göre hangi tür domain, hosting veya sunucu yapısının uygun olacağı konusunda yönlendirme yapılabilir.

### Site yayına alınırken ne gerekir?

Domain erişimi, hosting veya sunucu erişimi, gerekli teknik bilgiler ve yayına alınacak dosyalar hazırlanır. Yayın öncesi temel kontroller yapılır.

---

## 13. WhatsApp/E-posta ile İletişim

### Proje için nasıl iletişime geçebilirim?

WhatsApp veya e-posta üzerinden proje ihtiyacınızı kısaca anlatarak iletişime geçebilirsiniz.

### İlk mesajda hangi bilgileri göndermeliyim?

İşletmenizin ne iş yaptığını, istediğiniz sistemi, örnek aldığınız siteleri, gerekli sayfaları ve özel isteklerinizi yazmanız yeterlidir.

### Sadece fikrim var, detaylar net değilse yazabilir miyim?

Evet. Fikriniz net değilse mevcut ihtiyacınız üzerinden birlikte kapsam belirlenebilir.

### Görsel, dosya veya örnek site gönderebilir miyim?

Evet. Örnek site, ekran görüntüsü, ürün listesi, logo, tasarım fikri veya dosya paylaşmanız süreci daha hızlı ve net hale getirir.

### Görüşme sonrası teklif alabilir miyim?

Evet. İhtiyacınız ve kapsamınız değerlendirildikten sonra size uygun bir fiyat ve teslim süresi paylaşılır.

---

## 14. Yasal veya Regülasyonlu Projeler

### Yasal süreç içeren projeler yapılabilir mi?

Yasal süreç içeren projeler teknik açıdan değerlendirilebilir. Ancak hukuki metinlerin ve resmi yükümlülüklerin uzman kişiler tarafından kontrol edilmesi önerilir.

### KVKK, açık rıza veya kullanıcı sözleşmesi gibi metinleri siz mi hazırlıyorsunuz?

Bu tür metinlerin işletmenize, veri toplama şeklinize ve faaliyet alanınıza uygun olması gerekir. Teknik olarak sayfaya eklenebilir, ancak hukuki doğruluk için uzman kontrolü önerilir.

### Sağlık, finans veya benzeri hassas alanlarda proje yapılabilir mi?

Bu tür projeler ayrıca değerlendirilir. Veri güvenliği, kullanıcı izinleri, yasal zorunluluklar ve teknik gereksinimler netleşmeden proje kapsamı belirlenmez.

### Kullanıcı verisi toplayan sistemlerde nelere dikkat edilir?

Formlar, üyelik sistemi, sipariş kayıtları ve randevu bilgileri gibi verilerde güvenli veri işleme, erişim kontrolü ve gerekli bilgilendirme alanları dikkate alınır.

### Resmi sorumluluk gerektiren alanlarda nasıl ilerlenir?

Teknik geliştirme yapılabilir; ancak resmi, hukuki veya sektörel yükümlülükler için ilgili uzmanlardan onay alınması gerekir. Proje bu doğrultuda teknik olarak uygulanır.

---

# Projeniz İçin İletişime Geçin

Web sitesi, satış sistemi, ürün katalog sitesi, WhatsApp sipariş sistemi, randevu sistemi, admin panel, özel yazılım, entegrasyon veya bakım ihtiyacınız varsa proje bilgilerinizi WhatsApp ya da e-posta üzerinden iletebilirsiniz.

İşletmenizi, ihtiyacınız olan sistemi ve varsa örnek aldığınız çalışmaları paylaşmanız yeterlidir. Kapsam değerlendirildikten sonra size uygun çözüm, teslim süreci ve fiyat bilgisi paylaşılır.`,
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Kapsam ve Fiyatlandırma",
    description: "NT Web Çözümleri’nde web sitesi, satış sistemi, admin panel, entegrasyon ve özel yazılım projelerinde kapsamın nasıl belirlendiğini ve fiyatlandırmanın hangi faktörlere göre değiştiğini öğrenin.",
    content: `NT Web Çözümleri olarak küçük işletmeler, KOBİ’ler, hizmet işletmeleri, e-ticaret satıcıları ve operasyon ekipleri için web sitesi, satış sistemi, admin panel, entegrasyon ve özel yazılım çözümleri geliştiriyoruz.

Her işletmenin ihtiyacı, iş akışı ve beklentisi farklı olduğu için projelerde tek ve sabit bir fiyat yaklaşımı uygulanmaz. Fiyatlandırma; yapılacak işin kapsamına, sayfa sayısına, modül ihtiyacına, admin panel yapısına, entegrasyonlara, veri yönetimine ve teslim süresi beklentisine göre belirlenir.

Bu sayfada, proje başlamadan önce kapsamın nasıl netleştirildiğini, fiyatı hangi unsurların etkilediğini ve teklif alabilmek için hangi bilgilerin paylaşılması gerektiğini bulabilirsiniz.

---

## Neden Tek Fiyat Yok?

Web sitesi, satış sistemi, admin panel veya özel yazılım projeleri dışarıdan benzer görünse de arka plandaki iş yükü çoğu zaman birbirinden farklıdır.

Örneğin yalnızca birkaç sayfadan oluşan bir tanıtım sitesi ile ürün yönetimi, sipariş takibi, müşteri kayıtları ve admin panel içeren bir satış sistemi aynı kapsamda değerlendirilmez. Benzer şekilde hazır içeriklerle ilerleyen bir web sitesi ile özel tasarım, özel formlar, entegrasyonlar ve veri yönetimi isteyen bir proje aynı süre ve emek gerektirmez.

Bu nedenle NT Web Çözümleri’nde fiyat; projenin gerçekten neye ihtiyaç duyduğuna göre belirlenir. Amaç gereksiz maliyet oluşturmak değil, işletmenizin ihtiyacına uygun, net ve sürdürülebilir bir kapsam çıkarmaktır.

---

## Proje Kapsamı Nasıl Belirlenir?

Proje kapsamı, yapılacak işin sınırlarını belirleyen en önemli adımdır. Kapsam net olduğunda hem teslim süreci daha sağlıklı ilerler hem de sonradan yanlış anlaşılmaların önüne geçilir.

Kapsam belirlenirken şu başlıklar değerlendirilir:

* Hangi sayfaların hazırlanacağı
* Hangi özelliklerin yer alacağı
* Admin panel gerekip gerekmediği
* Ürün, hizmet, müşteri veya sipariş verisi olup olmadığı
* Entegrasyon ihtiyacı bulunup bulunmadığı
* Tasarımın hazır mı yoksa sıfırdan mı hazırlanacağı
* İçerik ve görsellerin kim tarafından sağlanacağı
* Teslim süresi beklentisi
* Proje sonrası bakım ve destek ihtiyacı

Proje başlamadan önce mümkün olduğunca net bir iş listesi çıkarılır. Anlaşılan kapsam yapılır, teslim edilen kapsamda hata varsa düzeltilir. Yeni özellik, yeni sayfa, yeni modül veya farklı iş akışı ise yeni kapsam olarak değerlendirilir.

---

## Başlangıç Seviyesi İşler

Başlangıç seviyesi işler genellikle daha sade yapıya sahip, hızlı yayınlanabilir ve temel ihtiyaçlara odaklanan projelerdir.

Bu tür işlere örnek olarak şunlar verilebilir:

* Kurumsal tanıtım sitesi
* Tek sayfalık işletme tanıtım sayfası
* Hizmet tanıtım sitesi
* Basit ürün katalog sayfası
* WhatsApp yönlendirmeli iletişim yapısı
* Temel iletişim formu
* Mobil uyumlu sade web arayüzü

Bu projelerde genellikle özel yazılım, kapsamlı admin panel veya gelişmiş entegrasyon bulunmaz. İçerikler hazırsa süreç daha hızlı ilerleyebilir.

---

## Gelişmiş İşler

Gelişmiş işler, yalnızca tanıtım amacı taşımayan; işletmenin satış, kayıt, takip veya operasyon süreçlerine dokunan projelerdir.

Bu kapsama giren işlere örnekler:

* Ürün katalog ve WhatsApp sipariş sistemi
* Randevu veya rezervasyon sistemi
* Admin panelli web sitesi
* Sipariş takip sistemi
* Müşteri kayıt sistemi
* Hizmet başvuru formu
* Ürün, kategori ve içerik yönetimi
* Temel raporlama ekranları

Bu projelerde kullanıcı deneyimi, veri yapısı, yönetim paneli ve iş akışı birlikte planlanır. Bu nedenle başlangıç seviyesi işlere göre daha detaylı analiz ve geliştirme süreci gerekir.

---

## Özel Yazılım ve Entegrasyon İşleri

Özel yazılım ve entegrasyon işleri, işletmenin kendine özgü iş akışlarına göre geliştirilen sistemleri kapsar.

Bu tür projelerde hazır bir yapıdan çok, işletmenin çalışma şekline uygun özel ekranlar, formlar, veri yapıları, bağlantılar ve otomasyonlar hazırlanır.

Örnek işler:

* Operasyon takip paneli
* Özel admin panel
* Stok ve ürün yönetim sistemi
* Sipariş ve müşteri yönetimi
* XML veri aktarımı
* API entegrasyonu
* Pazaryeri veri eşleştirme
* WhatsApp, SMS veya e-posta bildirim akışları
* Otomasyon ve veri senkronizasyonu

Bu projelerde fiyatlandırma yapılmadan önce iş akışının detaylı şekilde anlaşılması gerekir. Hangi verinin nereden alınacağı, nereye aktarılacağı, hangi kurallarla çalışacağı ve hangi ekranlardan yönetileceği netleşmelidir.

---

## Fiyatı Etkileyen Faktörler

Bir projenin fiyatını etkileyen birçok unsur vardır. Bunların başında işin büyüklüğü değil, işin netliği ve teknik gereksinimleri gelir.

Fiyatı etkileyen temel başlıklar şunlardır:

* Sayfa sayısı
* Tasarım ihtiyacı
* Modül sayısı
* Admin panel gereksinimi
* Kullanıcı rolleri
* Veri yönetimi
* Entegrasyon ihtiyacı
* Ürün veya içerik sayısı
* Teslim süresi beklentisi
* Yayın süreci
* Bakım ve destek ihtiyacı

Bu başlıklar netleştikçe daha sağlıklı bir teklif hazırlanabilir.

---

## Sayfa Sayısı ve Tasarım İhtiyacı

Sayfa sayısı, fiyatlandırmayı doğrudan etkileyen önemli unsurlardan biridir. Ana sayfa, hakkımızda, hizmetler, ürünler, iletişim, sıkça sorulan sorular, blog veya özel sayfalar ayrı ayrı değerlendirilir.

Ayrıca tasarım ihtiyacı da kapsamı değiştirir. Hazır bir yapının düzenlenmesi ile tamamen özel bir arayüz hazırlanması aynı iş yüküne sahip değildir.

Tasarımda şu noktalar değerlendirilir:

* Sayfa sayısı
* Özel bölüm ihtiyacı
* Mobil uyumluluk
* Kurumsal renk ve görsel yapı
* İçerik yerleşimi
* Form ve buton akışları
* Kullanıcı deneyimi

Amaç yalnızca güzel görünen bir site hazırlamak değil, müşterinin hızlı anlayacağı ve kolay iletişime geçeceği bir yapı oluşturmaktır.

---

## Modül Sayısı

Modül, sistem içinde belirli bir işlevi yerine getiren bölümdür. Ürün yönetimi, sipariş takibi, randevu yönetimi, müşteri kayıtları, rapor ekranı veya dosya yönetimi birer modül olarak değerlendirilebilir.

Modül sayısı arttıkça sistemin geliştirme süreci, test ihtiyacı ve yönetim yapısı da artar.

Örnek modüller:

* Ürün yönetimi
* Kategori yönetimi
* Sipariş yönetimi
* Randevu yönetimi
* Müşteri yönetimi
* Kullanıcı yönetimi
* Raporlama
* Bildirim sistemi
* Dosya veya belge yönetimi

Her modül ayrı bir iş akışı oluşturduğu için kapsam belirlenirken net şekilde tanımlanmalıdır.

---

## Admin Panel İhtiyacı

Admin panel, işletmenin siteyi veya sistemi kendi içinde yönetebilmesini sağlar. İçerik ekleme, ürün düzenleme, sipariş görüntüleme, müşteri kayıtlarını inceleme veya randevuları takip etme gibi işlemler admin panel üzerinden yapılabilir.

Admin panel ihtiyacı, projeyi sade bir web sitesinden daha kapsamlı bir yazılım projesine dönüştürebilir.

Admin panelde olabilecek özellikler:

* Giriş sistemi
* Ürün ekleme ve düzenleme
* Sayfa içeriği yönetimi
* Sipariş görüntüleme
* Randevu takibi
* Müşteri kayıtları
* Durum güncelleme
* Temel raporlama
* Kullanıcı yönetimi

Admin panelin ne kadar detaylı olacağı, fiyatlandırmayı doğrudan etkiler.

---

## Kullanıcı Rolleri ve Yetkilendirme

Bazı projelerde sisteme yalnızca işletme sahibi giriş yaparken, bazı projelerde farklı yetkilere sahip birden fazla kullanıcı gerekir.

Örneğin yönetici, personel, bayi, müşteri, tedarikçi veya operasyon ekibi için farklı ekranlar ve yetkiler gerekebilir.

Kullanıcı rolleri şu konularda fiyatı etkiler:

* Kimlerin sisteme giriş yapacağı
* Hangi kullanıcının hangi ekranı göreceği
* Veri ekleme, düzenleme veya silme yetkileri
* Onay süreçleri
* Personel bazlı işlem takibi
* Müşteri veya bayi paneli ihtiyacı

Yetkilendirme arttıkça sistemin güvenlik ve test süreci de daha detaylı hale gelir.

---

## İçerik ve Görsel Hazırlığı

Web sitesi veya yazılım arayüzünde kullanılacak metinler, görseller, logo, ürün bilgileri ve açıklamalar proje sürecini etkiler.

İçerikler hazır olduğunda proje daha hızlı ilerler. İçeriklerin düzenlenmesi, eksiklerin tamamlanması veya sayfa yapısına uygun hale getirilmesi gerekiyorsa bu da kapsam içinde ayrıca değerlendirilir.

Müşteriden beklenebilecek içerikler:

* Logo
* Kurumsal renkler
* Hizmet açıklamaları
* Ürün bilgileri
* Ürün görselleri
* Firma tanıtım metni
* İletişim bilgileri
* Sosyal medya bağlantıları
* Referans veya örnek çalışmalar

Hazır ve düzenli içerik, hem süreci hızlandırır hem de daha profesyonel bir sonuç alınmasını sağlar.

---

## Ürün, Stok, Sipariş veya Müşteri Verisi

Ürün, stok, sipariş veya müşteri verisi bulunan projelerde sistem yalnızca görsel bir web sitesi olmaktan çıkar ve veri yönetimi gerektiren bir yapıya dönüşür.

Bu tür projelerde şu sorular netleşmelidir:

* Kaç ürün olacak?
* Ürünlerin kategorileri var mı?
* Stok bilgisi tutulacak mı?
* Fiyatlar manuel mi yönetilecek?
* Siparişler panelde görüntülenecek mi?
* Müşteri bilgileri kayıt altına alınacak mı?
* Veriler dış bir sistemden mi gelecek?
* Mevcut Excel, XML veya veri dosyası var mı?

Veri yapısı netleşmeden doğru kapsam ve sağlıklı fiyatlandırma yapmak mümkün değildir.

---

## Ödeme, SMS, WhatsApp, API, Pazaryeri ve XML Entegrasyonları

Entegrasyonlar, bir sistemin başka sistemlerle veri alışverişi yapmasını sağlar. Bu çalışmalar standart web sitesi projelerine göre daha fazla teknik analiz gerektirir.

Entegrasyon türlerine örnekler:

* WhatsApp yönlendirme veya bildirim akışı
* SMS bilgilendirme sistemi
* E-posta bildirimleri
* API bağlantıları
* XML ürün aktarımı
* Pazaryeri veri eşleştirme
* Stok ve fiyat güncelleme
* Sipariş verisi aktarımı
* Ödeme altyapısı entegrasyonu değerlendirmesi

Bu tür işlerde API dokümanı, XML bağlantısı, örnek veri yapısı, erişim bilgileri ve iş kuralları önceden incelenmelidir. Kaynak sistemlerdeki kısıtlamalar, limitler veya veri formatı değişiklikleri de süreci etkileyebilir.

---

## Hosting, Domain ve Yayın Süreci

Projenin yayına alınabilmesi için domain, hosting veya sunucu yapısının hazır olması gerekir. Mevcut domain ve hosting kullanılabilir ya da proje ihtiyacına göre uygun yapı belirlenebilir.

Yayın sürecinde değerlendirilen başlıklar:

* Domain durumu
* Hosting veya sunucu yapısı
* SSL kurulumu
* Yayın ortamı
* Dosya aktarımı
* Veritabanı kurulumu
* Temel güvenlik ayarları
* Yedekleme yaklaşımı
* Yayın sonrası kontrol

Basit web siteleri ile admin panelli veya veritabanlı sistemlerin yayın süreci aynı değildir. Bu nedenle teknik altyapı ihtiyacı proje kapsamına göre belirlenir.

---

## Teslim Süresi Beklentisi

Teslim süresi, projenin kapsamına ve içeriklerin hazır olmasına göre belirlenir. Sadece sayfa sayısı değil; modüller, entegrasyonlar, veri yapısı, admin panel ve test süreci de teslim süresini etkiler.

Acil teslim beklentisi varsa bu durum proje başında belirtilmelidir. Kapsam net değilse veya içerikler eksikse teslim süresi sağlıklı şekilde planlanamaz.

Teslim süresini etkileyen başlıca durumlar:

* İçeriklerin hazır olup olmaması
* Erişim bilgilerinin zamanında paylaşılması
* Entegrasyon belgelerinin mevcut olması
* Proje kapsamının netliği
* Onay ve geri dönüş süreleri
* Ek isteklerin çıkması
* Test sürecinde tespit edilen durumlar

Sağlıklı bir teslim süreci için proje başlamadan önce beklentilerin netleşmesi önemlidir.

---

## Bakım ve Destek İhtiyacı

Proje teslim edildikten sonra sistemin güncel, güvenli ve sorunsuz çalışması için bakım ve destek ihtiyacı doğabilir.

Bakım ve destek kapsamında değerlendirilebilecek işler:

* Teknik kontrol
* Küçük içerik güncellemeleri
* Hata takibi
* Yayın kontrolü
* Performans iyileştirmeleri
* Yedekleme kontrolü
* Küçük düzenlemeler
* Sistem takibi

Ancak yeni özellik, yeni sayfa, yeni modül, yeni entegrasyon veya farklı iş akışı bakım kapsamında değil, yeni geliştirme kapsamı olarak değerlendirilir.

---

## Proje Başlamadan Önce Müşteriden İstenen Bilgiler

Sağlıklı bir teklif ve doğru kapsam için proje başlamadan önce bazı bilgilerin paylaşılması gerekir.

Göndermeniz faydalı olacak bilgiler:

* İşletmenizin ne iş yaptığı
* İstediğiniz sistemin kısa açıklaması
* Hazırlanmasını istediğiniz sayfalar
* Örnek aldığınız web siteleri veya sistemler
* Logo ve kurumsal renkler
* Ürün, hizmet veya kategori bilgileri
* Kullanılacak görseller
* Varsa mevcut domain ve hosting bilgileri
* Admin panel ihtiyacı
* Entegrasyon ihtiyacı
* Teslim süresi beklentisi
* Proje sonrası destek ihtiyacı

Bu bilgiler ne kadar net olursa teklif ve süreç planı da o kadar sağlıklı hazırlanır.

---

## Net Olmayan Kapsamın Neden Riskli Olduğu

Net olmayan kapsam, proje sürecinde yanlış anlaşılmalara, ek iş yüküne ve teslim süresinin uzamasına neden olabilir.

Örneğin “bir satış sistemi istiyorum” ifadesi tek başına yeterli değildir. Bu sistemde ürün yönetimi olacak mı, siparişler panelde mi görünecek, stok tutulacak mı, WhatsApp yönlendirmesi mi yapılacak, kullanıcı girişi olacak mı gibi detaylar netleşmelidir.

Kapsam net olmadığında şu riskler oluşabilir:

* Beklenen iş ile hazırlanan iş arasında fark oluşabilir
* Teslim süresi uzayabilir
* Sonradan yeni istekler ortaya çıkabilir
* Fiyatlandırma sağlıklı yapılamayabilir
* Test ve onay süreci zorlaşabilir

Bu nedenle proje başlamadan önce yapılacak işler netleştirilir. Anlaşılan kapsam doğrultusunda ilerlenir, teslim edilen kapsamda hata varsa düzeltilir. Yeni istekler ise yeni kapsam olarak ayrıca değerlendirilir.

---

## Sık Sorulan Sorular

### 1. Neden net fiyatı hemen söylemiyorsunuz?

Çünkü fiyat, yapılacak işin kapsamına göre değişir. Sayfa sayısı, admin panel, modül yapısı, entegrasyonlar ve veri yönetimi netleşmeden sağlıklı fiyat vermek doğru olmaz.

### 2. Basit bir web sitesi ile admin panelli sistem aynı mı değerlendirilir?

Hayır. Basit bir web sitesi genellikle tanıtım odaklıdır. Admin panelli sistemlerde ise giriş, veri yönetimi, işlem ekranları ve test süreçleri bulunur.

### 3. Proje başladıktan sonra yeni özellik istersem ne olur?

Yeni özellik, yeni sayfa, yeni modül veya farklı iş akışı yeni kapsam olarak değerlendirilir. Mevcut kapsam dışında kalan işler ayrıca planlanır.

### 4. Teslim edilen işte hata olursa düzeltilir mi?

Evet. Teslim edilen kapsamda hata varsa düzeltilir. Hatanın, proje başında anlaşılan işin içinde olması gerekir.

### 5. Tasarımda değişiklik yapılabilir mi?

Anlaşılan kapsam doğrultusunda düzenleme yapılır. Küçük tasarım, metin, görsel veya hizalama düzenlemeleri kapsam içinde değerlendirilebilir. Büyük yapı değişiklikleri ayrıca ele alınır.

### 6. İçerikler hazır değilse proje başlayabilir mi?

Başlayabilir; ancak içeriklerin eksik olması teslim süresini etkileyebilir. Metin, görsel, ürün bilgisi ve diğer içeriklerin mümkün olduğunca erken paylaşılması önerilir.

### 7. Mevcut web sitem geliştirilebilir mi?

Evet. Mevcut siteniz incelenerek tasarım, teknik yapı, hız, içerik, kullanıcı deneyimi veya yönetim paneli açısından geliştirme yapılabilir.

### 8. Ürünlerimi sonradan kendim ekleyebilir miyim?

Bu ihtiyaç proje başında belirtilirse ürün ekleme, düzenleme ve silme işlemleri için admin panel hazırlanabilir.

### 9. Entegrasyon işleri neden ayrıca değerlendirilir?

Çünkü her API, XML veya pazaryeri yapısı farklıdır. Veri formatı, erişim bilgileri, sistem kuralları ve teknik kısıtlamalar incelenmeden doğru kapsam belirlenemez.

### 10. Teslim süresi nasıl hesaplanır?

Teslim süresi; projenin büyüklüğüne, içeriklerin hazır olmasına, entegrasyonlara, admin panel ihtiyacına ve test sürecine göre belirlenir.

### 11. Proje sonrası destek alabilir miyim?

Evet. İhtiyaca göre bakım ve destek hizmeti sunulabilir. Ancak yeni özellik veya yeni geliştirme talepleri ayrıca değerlendirilir.

### 12. Teklif almak için ne göndermem gerekiyor?

İşletmenizi, istediğiniz sistemi, sayfa veya modül ihtiyaçlarınızı, örnek siteleri ve varsa özel isteklerinizi WhatsApp ya da e-posta üzerinden göndermeniz yeterlidir.

---

# Projeniz İçin Kapsam ve Teklif Alın

Web sitesi, satış sistemi, admin panel, entegrasyon veya özel yazılım ihtiyacınız varsa proje bilgilerinizi WhatsApp ya da e-posta üzerinden iletebilirsiniz.

İşletmenizin ne yaptığını, hangi sisteme ihtiyaç duyduğunuzu, varsa örnek aldığınız siteleri ve özel isteklerinizi paylaşmanız yeterlidir. Kapsam değerlendirildikten sonra size uygun çözüm, teslim süreci ve fiyatlandırma hakkında bilgi verilir.`,
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Bakım ve Geliştirme Paketleri",
    description: "NT Web Çözümleri bakım ve geliştirme hizmetleriyle web sitesi, admin panel, özel yazılım, entegrasyon ve satış sistemleri için teslim sonrası teknik destek, güncelleme, güvenlik, yedekleme ve performans takibi sunar.",
    content: `Web sitesi, admin panel, özel yazılım, entegrasyon veya satış sistemi tamamlandıktan sonra sürecin tamamen bittiğini düşünmek doğru değildir. Yayındaki sistemlerin düzenli kontrol edilmesi, içeriklerin güncellenmesi, küçük ihtiyaçların karşılanması, teknik hataların takip edilmesi ve sistemin sağlıklı çalışmaya devam etmesi önemlidir.

NT Web Çözümleri olarak teslim sonrası bakım ve geliştirme hizmetlerini proje türüne, sistemin yapısına ve işletmenin ihtiyacına göre planlıyoruz. Her bakım süreci aynı kapsamda değildir. Bu nedenle bakım süresi, destek içeriği ve geliştirme kapsamı projeye göre belirlenir ve kapsama göre tekliflendirilir.

Teslim edilen kapsamda hata varsa düzeltilir. Ancak yeni özellik, yeni sayfa, yeni modül, yeni entegrasyon veya farklı iş akışı yeni kapsam olarak değerlendirilir.

---

## Teslimden Sonra Neden Bakım Gerekir?

Bir web sitesi veya yazılım sistemi yayına alındıktan sonra farklı ihtiyaçlar ortaya çıkabilir. İçerikler değişebilir, ürünler güncellenebilir, sistemde küçük düzenlemeler gerekebilir veya dış servislerde yaşanan değişiklikler entegrasyonları etkileyebilir.

Bakım hizmeti, sistemin yayında kalmasını ve daha sağlıklı çalışmasını destekler. Özellikle aktif kullanılan satış sistemleri, admin paneller, katalog siteleri, randevu sistemleri ve entegrasyon projelerinde düzenli kontrol büyük önem taşır.

Bakım ihtiyacı genellikle şu nedenlerle ortaya çıkar:

* İçeriklerin güncellenmesi
* Ürün, hizmet veya görsellerin değiştirilmesi
* Küçük teknik düzenlemeler
* Hata kontrolü
* Performans takibi
* Yedekleme ve güvenlik kontrolleri
* Hosting veya yayın ortamı kontrolü
* API, XML, WhatsApp, SMS veya pazaryeri bağlantılarının takibi
* Yeni ihtiyaçların planlanması

Bakım, sistemi sınırsız şekilde değiştirme hizmeti değildir. Mevcut yapının sağlıklı çalışmasını destekleyen ve anlaşılan kapsam doğrultusunda ilerleyen profesyonel bir hizmettir.

---

## Bakım Hizmeti Ne Sağlar?

Bakım hizmeti, teslim edilen sistemin düzenli olarak kontrol edilmesini ve ihtiyaç duyulan küçük işlemlerin planlı şekilde ele alınmasını sağlar.

Proje türüne göre bakım hizmeti şunları sağlayabilir:

* Yayındaki sistemin teknik kontrolü
* Küçük hata ve aksaklıkların incelenmesi
* İçerik, görsel veya metin güncellemeleri
* Admin panelde küçük düzenlemeler
* Form, buton veya yönlendirme kontrolleri
* Yedekleme sürecinin kontrolü
* Temel güvenlik kontrolleri
* Performans ve hız takibi
* Entegrasyon bağlantılarının kontrolü
* Yeni ihtiyaçlar için geliştirme planı oluşturulması

Bu hizmet sayesinde sistem yalnızca teslim edilip bırakılmaz; ihtiyaç duyulduğunda daha düzenli, kontrollü ve sürdürülebilir bir şekilde yönetilir.

---

## Küçük Düzenleme ve Geliştirme Talepleri

Teslim sonrası süreçte işletmenin ihtiyaçları değişebilir. Yeni bir metin eklemek, görsel değiştirmek, buton yönlendirmesini güncellemek, küçük bir alan düzenlemek veya mevcut bir ekranda ufak iyileştirme yapmak gerekebilir.

Küçük düzenleme örnekleri:

* Metin değişikliği
* Görsel güncelleme
* İletişim bilgisi değişikliği
* Buton bağlantısı düzenleme
* Küçük tasarım hizalamaları
* Form alanlarında küçük güncellemeler
* Mevcut sayfada içerik düzenleme
* Admin panelde küçük alan değişiklikleri

Bu tür işlemler bakım kapsamına dahil edilebilir. Ancak yeni sayfa, yeni özellik, yeni modül, yeni entegrasyon veya farklı iş akışı yeni kapsam olarak değerlendirilir.

---

## Hata Düzeltme ve Teknik Kontrol

Teslim edilen kapsamda hata varsa düzeltilir. Bu, proje başında anlaşılan ve teslim edilen işin doğru şekilde çalışmasını sağlamak için önemlidir.

Hata düzeltme kapsamında değerlendirilebilecek durumlar:

* Sayfa açılma problemi
* Form gönderim hatası
* Yanlış yönlendirme
* Görsel veya içerik görüntüleme sorunu
* Admin panelde kayıt/düzenleme hatası
* Mobil görünümde bozulma
* Mevcut kapsam içindeki teknik aksaklıklar

Ancak sistem yayına alındıktan sonra yeni istekler, yeni özellikler veya farklı çalışma mantığı talepleri hata değil, yeni kapsam olarak değerlendirilir.

---

## İçerik Güncelleme

Web siteleri ve satış sistemleri zaman içinde güncel tutulmalıdır. İşletme bilgileri, hizmet açıklamaları, ürünler, kampanyalar, fiyat gösterimleri, görseller veya iletişim bilgileri değişebilir.

İçerik güncelleme kapsamında şunlar yapılabilir:

* Sayfa metni güncelleme
* Hizmet açıklaması düzenleme
* Ürün bilgisi güncelleme
* Görsel değiştirme
* Telefon, e-posta veya adres güncelleme
* Sosyal medya bağlantısı düzenleme
* Duyuru veya bilgilendirme alanı ekleme
* Mevcut içeriklerin daha düzenli hale getirilmesi

İçerik güncelleme ihtiyacı düzenli olan işletmeler için bakım paketi daha planlı bir çalışma sağlar.

---

## Yedekleme ve Güvenlik Kontrolleri

Yedekleme ve güvenlik kontrolleri, özellikle admin panel, satış sistemi, müşteri kayıtları, ürün verileri veya entegrasyon içeren projelerde önemlidir.

Bakım kapsamında proje yapısına göre şu kontroller planlanabilir:

* Dosya yedekleme kontrolü
* Veritabanı yedekleme kontrolü
* Temel güvenlik kontrolleri
* Yönetici giriş alanlarının kontrolü
* SSL durumunun kontrolü
* Şüpheli hata veya erişim durumlarının incelenmesi
* Güncel olmayan yapıların değerlendirilmesi
* Yayın ortamında temel teknik kontrol

Bu kontroller, sistemin daha sağlıklı çalışmasına yardımcı olur. Ancak güvenlik tamamen tek seferlik bir işlem değil, düzenli takip gerektiren bir süreçtir.

---

## SEO ve Performans Takibi

Web sitesinin hızlı açılması, sayfaların doğru çalışması ve temel SEO yapısının korunması önemlidir. Bakım sürecinde proje türüne göre SEO ve performans kontrolleri yapılabilir.

Bu kapsamda değerlendirilebilecek işlemler:

* Sayfa başlıklarının kontrolü
* Meta açıklama kontrolleri
* URL yapısı kontrolü
* Görsel boyutlarının incelenmesi
* Sayfa açılış hızı takibi
* Mobil görünüm kontrolü
* Kırık bağlantı kontrolü
* Site haritası ve temel teknik yapı kontrolleri

SEO takibi, arama sonuçlarında belirli bir sıra garantisi anlamına gelmez. Amaç, sitenin teknik olarak daha sağlıklı ve düzenli kalmasını sağlamaktır.

---

## Admin Panel Projelerinde Bakım

Admin panel içeren projeler, yalnızca ziyaretçilere görünen sayfalardan oluşmaz. Arka tarafta veri yönetimi, kullanıcı işlemleri, formlar, kayıtlar ve durum güncellemeleri bulunur.

Bu nedenle admin panel projelerinde bakım daha önemlidir.

Admin panel bakımında şunlar kontrol edilebilir:

* Giriş sistemi
* Ürün veya içerik yönetimi
* Sipariş veya randevu ekranları
* Kayıt ekleme/düzenleme işlemleri
* Yetki ve kullanıcı kontrolleri
* Veri listeleme ekranları
* Form ve filtreleme yapıları
* Panel performansı
* Hata veya aksaklık takibi

Admin panel aktif kullanılıyorsa düzenli bakım, sistemin daha güvenli ve verimli çalışmasına yardımcı olur.

---

## Entegrasyon Projelerinde Bakım Neden Önemlidir?

Entegrasyon projeleri, dış sistemlerle veri alışverişi yaptığı için düzenli takip gerektirir. API, XML, WhatsApp, SMS, e-posta, ödeme altyapısı veya pazaryeri bağlantıları zaman içinde değişebilir.

Entegrasyonlarda bakım ihtiyacı şu durumlarda ortaya çıkabilir:

* API kurallarının değişmesi
* XML veri yapısının değişmesi
* Pazaryeri formatlarının güncellenmesi
* Erişim anahtarlarının yenilenmesi
* Stok veya fiyat verisinin hatalı gelmesi
* Sipariş verisinin beklenen şekilde aktarılmaması
* Dış servisin geçici hata vermesi
* Limit, kota veya bağlantı sorunları yaşanması

Bu tür projelerde bakım, sistemin yalnızca ilk gün çalışmasını değil, zaman içinde takip edilebilir olmasını sağlar. Ancak dış sistem kaynaklı büyük değişiklikler veya yeni entegrasyon talepleri yeni kapsam olarak değerlendirilir.

---

## Hosting ve Yayın Ortamı Takibi

Web sitesi veya yazılımın yayında kalması için hosting, domain, SSL ve sunucu ortamının sağlıklı çalışması gerekir.

Bakım kapsamında proje yapısına göre şu kontroller yapılabilir:

* Domain yönlendirme kontrolü
* SSL sertifikası kontrolü
* Hosting veya sunucu erişim durumu
* Yayındaki dosyaların kontrolü
* Veritabanı bağlantı kontrolü
* Temel hata kayıtlarının incelenmesi
* Yayın sonrası küçük teknik düzenlemeler
* Erişim sorunlarının değerlendirilmesi

Hosting veya sunucu kaynaklı sorunlar her zaman yazılım kaynaklı olmayabilir. Bu durumlarda problem tespit edilerek uygun çözüm yolu belirlenir.

---

## Bakım Paketine Dahil Olmayan İşler

Bakım hizmeti, mevcut sistemin sağlıklı çalışmasını destekleyen planlı bir hizmettir. Bu nedenle her talep bakım kapsamında değerlendirilmez.

Genellikle bakım kapsamına dahil olmayan işler:

* Yeni sayfa tasarımı
* Yeni modül geliştirme
* Yeni entegrasyon kurulumu
* Yeni admin panel bölümü
* Farklı iş akışı oluşturma
* Büyük tasarım değişikliği
* Mevcut sistemin tamamen yeniden yapılması
* Yeni kullanıcı rolü ve yetki yapısı
* Kapsamlı veri aktarımı
* Yeni satış veya sipariş mantığı
* Farklı ödeme, SMS, WhatsApp veya API yapısı kurulumu

Bu tür talepler ayrıca değerlendirilir ve yeni kapsam olarak planlanır.

---

## Yeni Modül Talepleri Nasıl Ele Alınır?

Teslim sonrası süreçte işletmenin büyümesiyle yeni ihtiyaçlar doğabilir. Yeni modül talepleri, mevcut sistemin üzerine eklenebilecek geliştirmeler olarak ayrıca değerlendirilir.

Yeni modül örnekleri:

* Yeni randevu ekranı
* Yeni raporlama alanı
* Yeni müşteri paneli
* Yeni bayi paneli
* Yeni ürün yönetim yapısı
* Yeni sipariş akışı
* Yeni bildirim sistemi
* Yeni entegrasyon
* Yeni dosya yönetimi
* Yeni yetkilendirme yapısı

Yeni modül talebi geldiğinde önce mevcut sistem incelenir, yeni ihtiyacın iş akışı netleştirilir ve buna göre ayrı bir kapsam oluşturulur. Ardından teslim süresi ve teklif bilgisi paylaşılır.

---

# Paket Önerileri

Bakım ve geliştirme paketleri, proje türüne ve ihtiyaç seviyesine göre planlanabilir. Aşağıdaki paketler örnek yapıdadır. Her paket kapsama göre tekliflendirilir.

---

## 1. Temel Bakım

### Kimler İçin Uygun?

Temel Bakım paketi; kurumsal web sitesi, tanıtım sitesi, ürün katalog sitesi veya içerik güncellemesi az olan işletmeler için uygundur.

Daha çok sitenin yayında kalmasını, küçük kontrollerin yapılmasını ve temel içerik güncellemelerinin planlı şekilde ilerlemesini isteyen işletmeler için tercih edilir.

### Neleri Kapsayabilir?

* Temel site kontrolü
* Küçük metin güncellemeleri
* Görsel değişiklikleri
* İletişim bilgisi güncelleme
* Mobil görünüm kontrolü
* Kırık bağlantı kontrolü
* Temel performans kontrolü
* SSL ve yayın durumu kontrolü
* Küçük teknik aksaklıkların incelenmesi

### Neleri Kapsamaz?

* Yeni sayfa tasarımı
* Yeni modül geliştirme
* Admin panel geliştirmesi
* Yeni entegrasyon kurulumu
* Kapsamlı tasarım değişikliği
* Özel yazılım geliştirme
* Yeni iş akışı oluşturma

### Ne Zaman Tercih Edilmeli?

Web siteniz yayındaysa, sık sık büyük değişiklik yapılmıyorsa ama düzenli kontrol ve küçük güncellemeler istiyorsanız Temel Bakım paketi uygun olabilir.

---

## 2. Geliştirme Destek

### Kimler İçin Uygun?

Geliştirme Destek paketi; web sitesi, satış sistemi, ürün katalog yapısı, randevu sistemi veya admin panelinde dönemsel küçük geliştirmeler isteyen işletmeler için uygundur.

Mevcut sistemini zaman içinde iyileştirmek, küçük özellikler eklemek ve düzenli teknik destek almak isteyen işletmeler bu paketi tercih edebilir.

### Neleri Kapsayabilir?

* Mevcut sayfalarda küçük düzenlemeler
* Küçük arayüz iyileştirmeleri
* Admin panelde küçük alan düzenlemeleri
* Form ve yönlendirme kontrolleri
* Ürün veya hizmet içerik güncellemeleri
* Mevcut modüllerde küçük iyileştirmeler
* Temel hata kontrolü
* Performans takibi
* Küçük kullanıcı deneyimi düzenlemeleri

### Neleri Kapsamaz?

* Büyük modül geliştirme
* Yeni entegrasyon kurulumu
* Yeni admin panel bölümü
* Farklı satış akışı oluşturma
* Sistemin baştan tasarlanması
* Kapsamlı veri aktarımı
* Büyük altyapı değişiklikleri

### Ne Zaman Tercih Edilmeli?

Sisteminiz aktif kullanılıyorsa ve zaman içinde küçük geliştirmeler, düzenlemeler veya kullanım kolaylığı sağlayacak iyileştirmeler istiyorsanız Geliştirme Destek paketi tercih edilebilir.

---

## 3. Özel Sistem Bakım

### Kimler İçin Uygun?

Özel Sistem Bakım paketi; admin panel, özel yazılım, entegrasyon, satış sistemi, stok/sipariş yapısı, API/XML bağlantıları veya operasyon paneli bulunan projeler için uygundur.

İşletmenin günlük operasyonunda aktif kullanılan ve düzenli takip gerektiren sistemler için daha kapsamlı bir bakım yaklaşımı sağlar.

### Neleri Kapsayabilir?

* Admin panel kontrolü
* Veri kayıt ve listeleme kontrolleri
* Sipariş, müşteri, ürün veya stok ekranı kontrolü
* API/XML bağlantı takibi
* Entegrasyon hata kontrolü
* Yedekleme süreci kontrolü
* Temel güvenlik kontrolleri
* Performans ve sistem davranışı takibi
* Kullanıcı rolleri ve yetki kontrolleri
* Teknik aksaklıkların incelenmesi
* Yeni ihtiyaçların analiz edilmesi

### Neleri Kapsamaz?

* Yeni özel yazılım modülü
* Yeni pazaryeri entegrasyonu
* Yeni API bağlantısı
* Yeni kullanıcı paneli
* Yeni raporlama sistemi
* Mevcut sistemin tamamen yenilenmesi
* Büyük veri taşıma işlemleri
* Farklı iş akışı geliştirme

### Ne Zaman Tercih Edilmeli?

Sisteminiz işletmenizin günlük iş akışında aktif rol oynuyorsa, veri yönetimi veya entegrasyon içeriyorsa ve olası aksaklıkların düzenli takip edilmesini istiyorsanız Özel Sistem Bakım paketi tercih edilebilir.

---

# Sık Sorulan Sorular

### 1. Bakım hizmeti zorunlu mu?

Hayır. Bakım hizmeti zorunlu değildir. Ancak aktif kullanılan web siteleri, admin paneller, satış sistemleri ve entegrasyon projelerinde düzenli bakım önerilir.

### 2. Bakım hizmeti ücretsiz mi?

Bakım hizmeti, proje türüne ve ihtiyaç duyulan kapsama göre ayrıca planlanan profesyonel bir hizmettir. Her bakım süreci kapsama göre tekliflendirilir.

### 3. Teslim edilen sistemde hata varsa ne olur?

Teslim edilen kapsamda hata varsa düzeltilir. Hatanın, proje başında anlaşılan kapsamın içinde olması gerekir.

### 4. Bakım paketi yeni özellik eklemeyi kapsar mı?

Genellikle hayır. Yeni özellik, yeni sayfa, yeni modül, yeni entegrasyon veya farklı iş akışı yeni kapsam olarak değerlendirilir.

### 5. İçerik güncelleme bakım kapsamında olabilir mi?

Evet. Metin, görsel, iletişim bilgisi veya mevcut sayfa içeriği gibi küçük güncellemeler bakım kapsamına dahil edilebilir.

### 6. Admin panel için bakım almak mantıklı mı?

Evet. Admin panel aktif kullanılıyorsa kayıt, listeleme, ürün, sipariş, müşteri veya yetki kontrollerinin düzenli yapılması faydalı olur.

### 7. Entegrasyonlarda bakım neden önemlidir?

API, XML, WhatsApp, SMS, e-posta veya pazaryeri bağlantıları dış sistemlere bağlıdır. Bu sistemlerdeki değişiklikler entegrasyonun çalışmasını etkileyebilir.

### 8. Bakım süresi nasıl belirlenir?

Bakım süresi, sistemin büyüklüğüne, kullanım yoğunluğuna, güncelleme ihtiyacına ve teknik yapısına göre belirlenir.

### 9. Mevcut başka bir sistem için bakım alabilir miyim?

Mevcut sistem incelendikten sonra teknik olarak destek verilip verilemeyeceği değerlendirilir. Sistemin yapısı, kullanılan teknoloji ve erişim durumu önemlidir.

### 10. SEO bakım kapsamında mı?

Temel teknik SEO kontrolleri bakım kapsamında değerlendirilebilir. Ancak arama sonuçlarında belirli bir sıra garantisi verilmez.

### 11. Performans sorunları bakım kapsamında incelenir mi?

Evet. Sayfa açılış hızı, görsel boyutları, temel teknik yükler ve yayın ortamı kaynaklı sorunlar incelenebilir. Gerekirse ayrıca geliştirme planı çıkarılır.

### 12. Bakım paketi nasıl tekliflendirilir?

Bakım paketi; sistemin türü, ihtiyaç duyulan destek seviyesi, güncelleme sıklığı ve teknik kapsam incelendikten sonra kapsama göre tekliflendirilir.

---

# Bakım ve Geliştirme Desteği İçin İletişime Geçin

Web siteniz, admin paneliniz, satış sisteminiz, entegrasyon yapınız veya özel yazılımınız için düzenli bakım ve geliştirme desteğine ihtiyaç duyuyorsanız WhatsApp ya da e-posta üzerinden iletişime geçebilirsiniz.

Mevcut sisteminizi, yaşadığınız sorunları, ihtiyaç duyduğunuz düzenlemeleri ve varsa yeni geliştirme taleplerinizi paylaşmanız yeterlidir. Sistem yapısı incelendikten sonra bakım kapsamı, destek süreci ve teklif bilgisi sizinle paylaşılır.`,
  },
  "support": {
    slug: "support",
    title: "Teslim Sonrası Destek",
    description: "NT Web Çözümleri teslim sonrası destek sürecinde hata düzeltme, kapsam içi düzenleme, kullanım anlatımı, bakım ihtiyacı ve ek geliştirme taleplerinin nasıl ele alındığını açık şekilde anlatır.",
    content: `NT Web Çözümleri olarak web sitesi, admin panel, satış sistemi, entegrasyon ve özel yazılım projelerinde yalnızca geliştirme sürecine değil, teslim sonrası sürecin de net ve sağlıklı ilerlemesine önem veriyoruz.

Proje teslim edildikten sonra sistemin kontrol edilmesi, yayına alınması, kullanımının anlaşılması ve varsa teslim edilen kapsam içindeki hataların düzeltilmesi sürecin doğal bir parçasıdır. Bununla birlikte, teslim sonrası destek sınırsız değişiklik veya sürekli yeni özellik ekleme anlamına gelmez.

Bu sayfada; proje tesliminden sonra sürecin nasıl ilerlediğini, hata düzeltme ile yeni istek arasındaki farkı, kullanım desteğini, bakım ihtiyacını ve destek taleplerinin nasıl iletilmesi gerektiğini net şekilde bulabilirsiniz.

---

## Teslim Sonrası Süreç Nasıl İşler?

Proje teslim edildikten sonra ilk olarak teslim edilen çalışma, proje başında anlaşılan kapsam doğrultusunda kontrol edilir. Bu aşamada amaç, sistemin belirlenen özelliklere uygun çalıştığından emin olmaktır.

Teslim sonrası süreç genel olarak şu adımlarla ilerler:

* Proje çıktısı müşteriyle paylaşılır.
* Müşteri sistemi inceler.
* Anlaşılan kapsam doğrultusunda düzenleme gereken noktalar değerlendirilir.
* Teslim edilen kapsamda hata varsa düzeltilir.
* Kullanım için gerekli temel açıklamalar yapılır.
* Yayın süreci tamamlanır veya mevcut yayındaki yapı kontrol edilir.
* Bakım veya ek geliştirme ihtiyacı varsa ayrıca planlanır.

Bu süreçte en önemli konu, proje başında belirlenen kapsam ile teslim sonrası gelen yeni taleplerin birbirinden ayrılmasıdır. Böylece hem müşteri beklentisi hem de teknik süreç daha sağlıklı ilerler.

---

## İlk Kontrol ve Yayına Alma Desteği

Proje tamamlandıktan sonra sistem yayına alınmadan önce temel kontroller yapılır. Bu kontroller, projenin türüne göre değişebilir.

İlk kontrol sürecinde şu noktalar incelenebilir:

* Sayfaların açılıp açılmadığı
* Mobil ve masaüstü görünüm
* Menü ve buton bağlantıları
* Formların çalışması
* Admin panel giriş kontrolü
* Ürün, içerik veya kayıt ekranlarının kontrolü
* Görsel ve metin yerleşimleri
* Temel hız ve erişim kontrolü
* Domain, hosting veya sunucu bağlantısı
* SSL ve yayın durumu

Yayına alma desteği, projenin teknik yapısına göre planlanır. Basit bir web sitesi ile admin panelli veya entegrasyon içeren bir sistemin yayın süreci aynı değildir.

---

## Hata Düzeltme Yaklaşımı

Teslim edilen kapsamda hata varsa düzeltilir. Burada hata, proje başında anlaşılan işin teslim edilen sistemde doğru çalışmaması anlamına gelir.

Örneğin şu durumlar hata olarak değerlendirilebilir:

* Anlaşılan sayfanın açılmaması
* Formun gönderim yapmaması
* Butonun yanlış yere yönlendirmesi
* Admin panelde kayıt ekleme işleminin çalışmaması
* Mevcut kapsam içindeki bir alanın hatalı görünmesi
* Mobil görünümde belirgin bozulma olması
* Teslim edilen özelliklerden birinin beklenen şekilde çalışmaması

Hata düzeltme sürecinde amaç, teslim edilen işin anlaşılan kapsamla uyumlu hale getirilmesidir.

Ancak proje başında konuşulmamış yeni özellikler, yeni sayfalar, yeni modüller, farklı tasarım yönü veya farklı iş akışı hata olarak değil, yeni kapsam olarak değerlendirilir.

---

## Kapsam İçi Düzenleme Nedir?

Kapsam içi düzenleme, proje başında anlaşılan işin daha doğru, düzenli ve kullanılabilir hale getirilmesi için yapılan küçük düzenlemelerdir.

Anlaşılan kapsam doğrultusunda düzenleme şu örnekleri kapsayabilir:

* Mevcut metnin güncellenmesi
* Görselin değiştirilmesi
* Mevcut sayfada küçük hizalama düzenlemesi
* Buton metninin değiştirilmesi
* İletişim bilgisinin güncellenmesi
* Mevcut form alanında küçük düzenleme
* Mevcut bölümde içerik sıralaması değişikliği
* Teslim edilen ekranın anlaşılan yapıya uygun hale getirilmesi

Bu düzenlemeler, proje başında belirlenen yapının dışına çıkmadığı sürece kapsam içinde değerlendirilebilir.

Kapsam içi düzenleme, yeni bir sistem mantığı kurmak veya projeyi farklı bir yöne taşımak anlamına gelmez.

---

## Yeni İstek ve Ek Geliştirme Nedir?

Teslim sonrası süreçte işletmenin yeni ihtiyaçları ortaya çıkabilir. Bu oldukça normaldir. Ancak her yeni ihtiyaç, teslim edilen projenin kapsamı içinde sayılmaz.

Aşağıdaki talepler yeni kapsam olarak değerlendirilir:

* Yeni özellik eklenmesi
* Yeni sayfa tasarlanması
* Yeni modül geliştirilmesi
* Yeni admin panel bölümü oluşturulması
* Farklı tasarım yönüne geçilmesi
* Farklı iş akışı kurulması
* Yeni kullanıcı rolü eklenmesi
* Yeni entegrasyon yapılması
* Yeni ödeme, SMS, WhatsApp, API veya XML bağlantısı kurulması
* Mevcut sistemin çalışma mantığının değiştirilmesi
* Kapsamlı veri aktarımı yapılması
* Yeni raporlama ekranı hazırlanması

Bu tür talepler ayrıca değerlendirilir, kapsamı netleştirilir ve uygun teslim süresiyle birlikte tekliflendirilir.

Bu yaklaşım, sürecin hem müşteri hem de geliştirici tarafında daha net, adil ve yönetilebilir ilerlemesini sağlar.

---

## Kullanım Anlatımı

Teslim edilen sistemin doğru kullanılabilmesi için proje türüne göre kullanım anlatımı yapılabilir. Özellikle admin panel, ürün yönetimi, sipariş takibi, randevu sistemi veya özel yazılım içeren projelerde kullanım desteği önemlidir.

Kullanım anlatımı kapsamında şu konular açıklanabilir:

* Admin panele nasıl giriş yapılacağı
* Ürün, hizmet veya içerik ekleme işlemleri
* Var olan kayıtların nasıl düzenleneceği
* Sipariş, randevu veya müşteri kayıtlarının nasıl takip edileceği
* Görsel veya metin güncelleme işlemleri
* Durum değiştirme, filtreleme veya arama kullanımı
* Yetkili kullanıcıların temel kullanımı
* Dikkat edilmesi gereken noktalar

Kullanım anlatımı, sistemin mevcut özelliklerini kullanmayı kapsar. Yeni özellik eğitimi, farklı iş akışı kurulumu veya kapsam dışı süreçlerin anlatımı ayrıca değerlendirilir.

---

## İçerik Değişikliği Talepleri

Teslim sonrası süreçte işletme bilgileri, hizmet açıklamaları, ürün metinleri, görseller, iletişim bilgileri veya bağlantılar değişebilir.

İçerik değişikliği taleplerine örnekler:

* Telefon numarası güncelleme
* E-posta adresi değiştirme
* Adres bilgisi düzenleme
* Hizmet açıklaması güncelleme
* Ürün açıklaması değiştirme
* Görsel değiştirme
* Sosyal medya bağlantısı ekleme veya düzenleme
* Mevcut sayfa metnini güncelleme

Bu tür talepler, anlaşılan kapsam doğrultusunda küçük düzenleme olarak ele alınabilir veya bakım paketi içinde planlanabilir.

Ancak yeni sayfa açılması, yeni bölüm tasarlanması, farklı bir içerik yapısı kurulması veya kapsamlı içerik girişi yeni kapsam olarak değerlendirilir.

---

## Hosting/Domain Sorumlulukları

Web sitesinin veya yazılımın yayında çalışabilmesi için domain, hosting, sunucu, SSL ve gerekli teknik erişimlerin doğru şekilde yapılandırılması gerekir.

Hosting ve domain sürecinde sorumluluklar proje yapısına göre değişebilir. Eğer domain, hosting veya sunucu müşteri tarafından sağlanıyorsa, ilgili hizmet sağlayıcıdan kaynaklanan kesinti, kota, panel kısıtı, DNS sorunu veya sunucu problemi doğrudan yazılım hatası olarak değerlendirilmez.

Bu süreçte destek verilebilecek konular:

* Domain yönlendirme kontrolü
* DNS kayıtlarının kontrol edilmesi
* Hosting veya sunucu erişim bilgilerinin değerlendirilmesi
* SSL durumunun kontrolü
* Yayın dosyalarının aktarımı
* Veritabanı bağlantısının kontrolü
* Yayın sonrası temel erişim testi

Hosting veya domain kaynaklı sorunlarda teknik inceleme yapılabilir ve çözüm yolu önerilebilir. Ancak hizmet sağlayıcının sisteminden kaynaklanan problemler ilgili sağlayıcı üzerinden çözülmelidir.

---

## Üçüncü Taraf Servislerden Kaynaklanan Sorunlar

Bazı projelerde WhatsApp, SMS, e-posta, API, XML, pazaryeri, ödeme altyapısı veya farklı dış servisler kullanılabilir. Bu servisler, projenin dışında çalışan üçüncü taraf yapılardır.

Üçüncü taraf servislerden kaynaklanabilecek durumlar:

* API erişiminin kapanması
* XML veri formatının değişmesi
* SMS servisinde kesinti olması
* WhatsApp bağlantı kurallarının değişmesi
* Pazaryeri sisteminin veri formatını güncellemesi
* E-posta gönderim limitlerine takılma
* Ödeme altyapısı tarafında hata alınması
* Servis sağlayıcının limit, kota veya yetki değişikliği yapması

Bu tür durumlar her zaman yazılım hatası anlamına gelmez. Önce sorunun kaynağı incelenir. Teslim edilen kapsamda hata varsa düzeltilir. Ancak üçüncü taraf servisin kural değiştirmesi, yeni bağlantı istemesi veya farklı entegrasyon ihtiyacı doğurması yeni kapsam olarak değerlendirilir.

---

## Bakım Paketi Varsa Süreç Nasıl İşler?

Bakım paketi bulunan projelerde teslim sonrası destek daha planlı ilerler. Bakım süreci; projenin türüne, sistemin kullanım yoğunluğuna, teknik yapısına ve ihtiyaçlara göre belirlenebilir.

Bakım paketi kapsamında şu çalışmalar planlanabilir:

* Düzenli teknik kontrol
* Küçük içerik güncellemeleri
* Temel hata takibi
* Performans kontrolü
* Yedekleme kontrolü
* Güvenlik kontrolleri
* Admin panel kullanım desteği
* Entegrasyon takibi
* Yayın ortamı kontrolü
* Yeni ihtiyaçların analiz edilmesi

Bakım paketi, sistemi sınırsız şekilde değiştirme hizmeti değildir. Paket kapsamında yapılacak işler baştan netleştirilir. Yeni özellik, yeni sayfa, yeni modül, farklı tasarım yönü veya farklı iş akışı talepleri ayrıca değerlendirilir.

---

## Destek Talepleri Nasıl İletilir?

Destek taleplerinin net iletilmesi, sürecin daha hızlı ve doğru ilerlemesini sağlar. Talep ne kadar açık yazılırsa, inceleme ve çözüm süreci o kadar sağlıklı olur.

Destek talebi iletirken şu bilgileri paylaşmanız faydalı olur:

* Hangi sayfada veya ekranda sorun yaşandığı
* Sorunun ne zaman fark edildiği
* Hangi işlem yapılırken hata alındığı
* Varsa ekran görüntüsü veya kısa video
* Hata mesajı varsa tam metni
* Kullanılan cihaz ve tarayıcı bilgisi
* Beklenen sonuç ile mevcut durum arasındaki fark
* Talebin hata mı yoksa yeni istek mi olduğu

Destek talepleri WhatsApp veya e-posta üzerinden iletilebilir. Talep incelendikten sonra kapsam içi hata, kapsam içi düzenleme veya yeni geliştirme olarak değerlendirilir.

---

# Sık Sorulan Sorular

### 1. Proje teslim edildikten sonra destek veriliyor mu?

Evet. Proje türüne göre teslim sonrası destek sağlanabilir. Bu destek; ilk kontrol, kullanım anlatımı, hata düzeltme ve bakım ihtiyacına göre planlanır.

### 2. Teslim edilen sistemde hata varsa ne olur?

Teslim edilen kapsamda hata varsa düzeltilir. Hatanın, proje başında anlaşılan kapsam içinde yer alan bir işlevle ilgili olması gerekir.

### 3. Teslimden sonra düzenleme yapılır mı?

Evet. Anlaşılan kapsam doğrultusunda düzenleme yapılır. Mevcut kapsam içindeki küçük metin, görsel, bağlantı veya hizalama düzenlemeleri değerlendirilebilir.

### 4. Yeni özellik istemem hata düzeltme kapsamında mı olur?

Hayır. Yeni özellik, yeni sayfa, yeni modül, farklı tasarım yönü veya farklı iş akışı yeni kapsam olarak değerlendirilir.

### 5. Kullanım konusunda yardım alabilir miyim?

Evet. Proje türüne göre admin panel, ürün yönetimi, sipariş takibi, randevu sistemi veya içerik güncelleme gibi konularda temel kullanım anlatımı yapılabilir.

### 6. İçeriklerimi sonradan değiştirebilir miyim?

Evet. Mevcut sayfalardaki metin, görsel, iletişim bilgisi veya bağlantı değişiklikleri destek ya da bakım kapsamında değerlendirilebilir. Büyük içerik yapısı değişiklikleri ayrıca ele alınır.

### 7. Hosting veya domain sorunu olursa destek verilir mi?

Teknik inceleme yapılabilir ve çözüm yolu önerilebilir. Ancak hosting, domain veya sunucu sağlayıcısından kaynaklanan kesinti ve kısıtlamalar doğrudan yazılım hatası olarak değerlendirilmez.

### 8. Üçüncü taraf servislerde sorun olursa ne yapılır?

Önce sorunun kaynağı incelenir. Eğer sorun teslim edilen kapsamdan kaynaklanıyorsa düzeltilir. Ancak API, XML, WhatsApp, SMS, e-posta veya pazaryeri tarafındaki değişiklikler yeni çalışma gerektirebilir.

### 9. Destek süresi ne kadar olur?

Destek süresi proje türüne, sistemin kapsamına ve bakım ihtiyacına göre belirlenebilir. Her proje için aynı destek süreci uygulanmaz.

### 10. Bakım paketi almak zorunlu mu?

Hayır. Bakım paketi zorunlu değildir. Ancak aktif kullanılan web sitesi, admin panel, satış sistemi veya entegrasyon projelerinde düzenli bakım önerilir.

### 11. Bakım paketi neleri kapsar?

Bakım paketi; teknik kontrol, küçük içerik güncellemeleri, temel hata takibi, performans kontrolü, yedekleme kontrolü ve proje türüne göre entegrasyon takibini kapsayabilir.

### 12. Destek talebimi nasıl daha hızlı çözdürebilirim?

Sorunu açık şekilde yazmanız, ekran görüntüsü veya kısa video paylaşmanız, hangi işlemde sorun yaşandığını belirtmeniz çözüm sürecini hızlandırır.

---

# Teslim Sonrası Destek İçin İletişime Geçin

Projeniz teslim edildikten sonra kullanım, hata kontrolü, içerik değişikliği, bakım veya ek geliştirme ihtiyacınız varsa WhatsApp ya da e-posta üzerinden iletişime geçebilirsiniz.

Talebinizi iletirken hangi sistemle ilgili olduğunu, neye ihtiyaç duyduğunuzu ve varsa ekran görüntüsü veya örnekleri paylaşmanız yeterlidir. Talep incelendikten sonra kapsam içi düzenleme, hata düzeltme, bakım veya yeni geliştirme olarak değerlendirilir.`,
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Bionluk ile Güvenli Çalışma",
    description: "NT Web Çözümleri ile çalışırken Bionluk profilinin, doğrulanmış yorumların ve güvenli ilerleme seçeneğinin nasıl konumlandığını öğrenin.",
    content: `NT Web Çözümleri'nde ana iletişim WhatsApp, e-posta ve teklif formu üzerinden başlar. Bionluk ise müşterinin isterse doğrulanmış profil, yorum ve platform güvencesi üzerinden ilerleyebileceği ek bir çalışma kanalıdır.

Bu sayfanın amacı Bionluk'u zorunlu satış adımı yapmak değildir. Amaç, müşteri talep ederse çalışma geçmişini, yorumları ve güvenli ödeme/iş akışı seçeneğini nasıl kullanabileceğini açık anlatmaktır.

---

## Bionluk Neden Gösteriliyor?

Bionluk profili; daha önce tamamlanan işlerin, doğrulanmış yorumların ve müşteri memnuniyeti sinyallerinin görülebildiği dış bir güven kaynağıdır.

Site içinde hizmetleri, canlı örnekleri ve portföyü inceledikten sonra, müşteri isterse Bionluk profilini de kontrol edebilir.

---

## Bionluk Zorunlu mu?

Hayır. Proje iletişimi doğrudan WhatsApp veya e-posta üzerinden de başlayabilir.

Bionluk yalnızca güvenli ilerlemek isteyen veya platform üzerinden sipariş oluşturmayı tercih eden müşteriler için seçenek olarak sunulur.

---

## Ne Zaman Bionluk Üzerinden İlerlenebilir?

Şu durumlarda Bionluk tercih edilebilir:

* Müşteri platform üzerinden yorum ve profil geçmişini görmek isterse
* Ödeme ve iş akışını Bionluk kuralları içinde yürütmek isterse
* Daha önce Bionluk kullandıysa ve aynı kanaldan ilerlemek isterse
* Küçük ve kapsamı net bir işi platform üzerinden başlatmak isterse

Kapsamı büyük, özel entegrasyonlu veya uzun süreli geliştirme isteyen işlerde önce kapsam görüşmesi yapılması daha sağlıklıdır.

---

## Site, Portföy ve Bionluk Ayrımı

Canlı örnekler uyarlanabilir demo sistemlerdir. Portföy sayfası ise izin durumuna göre gösterilen gerçek müşteri işlerini içerir.

Bionluk yorumları, gerçek müşteri memnuniyeti sinyali olarak kullanılabilir; ancak her işin ekran görüntüsü veya müşteri bilgisi açık paylaşılmayabilir.

Müşteri bilgileri izin durumuna göre anonim tutulur.

---

## Güvenli Çalışma Mantığı

Proje başlamadan önce kapsam, teslim beklentisi, hangi modüllerin dahil olduğu ve nelerin ek iş sayılacağı netleştirilir.

Bionluk üzerinden ilerlenirse platformun sipariş, teslim, revizyon ve onay süreçleri geçerli olur. Doğrudan çalışma tercih edilirse kapsam ve iletişim yazılı şekilde net tutulur.

Her iki durumda da amaç, müşterinin ne alacağını baştan bilmesi ve işin belirsiz ilerlememesidir.

---

## Bionluk Profilini Ne Zaman Açmalısınız?

Önce sitedeki hizmet, canlı örnek ve portföy sayfalarını inceleyebilirsiniz. Size uygun çözüm netleştiğinde iletişime geçmeniz yeterlidir.

Görüşme sırasında Bionluk üzerinden ilerlemek istediğinizi belirtirseniz uygun bağlantı ve çalışma şekli paylaşılır.`,
  },
  "work-process": {
    slug: "work-process",
    title: "Çalışma Süreci ve Güven",
    description: "NT Web Çözümleri’nde web sitesi, satış sistemi, admin panel, entegrasyon, otomasyon ve özel yazılım projelerinin nasıl başladığını, kapsamın nasıl netleştiğini ve teslim sonrası desteğin nasıl ilerlediğini öğrenin.",
    content: `NT Web Çözümleri olarak küçük ve orta ölçekli işletmeler için web sitesi, satış sistemi, admin panel, entegrasyon, otomasyon ve özel yazılım çözümleri geliştiriyoruz.

Bir projenin sağlıklı ilerlemesi yalnızca teknik geliştirmeye bağlı değildir. İhtiyacın doğru anlaşılması, kapsamın netleşmesi, yazılı şekilde planlanması, süreç boyunca düzenli iletişim kurulması ve teslim sonrası desteğin doğru şekilde tanımlanması gerekir.

Bu sayfada; bir projenin ilk iletişimden teslim sürecine kadar nasıl ilerlediğini, güvenli ve net bir çalışma yapısının nasıl kurulduğunu, hangi aşamalarda hangi bilgilerin gerektiğini ve teslim sonrası sürecin nasıl ele alındığını bulabilirsiniz.

---

## İlk İletişim Nasıl Başlar?

Proje süreci genellikle WhatsApp veya e-posta üzerinden gelen ilk mesajla başlar. Bu aşamada müşterinin neye ihtiyaç duyduğu, nasıl bir sistem istediği ve mevcut durumda hangi noktada olduğu anlaşılmaya çalışılır.

İlk iletişimde şu bilgiler faydalı olur:

* İşletmenizin ne iş yaptığı
* İhtiyacınız olan sistemin kısa açıklaması
* Web sitesi, satış sistemi, admin panel veya entegrasyon beklentiniz
* Varsa örnek aldığınız web siteleri veya sistemler
* Mevcut domain, hosting veya yazılım altyapınız
* Tahmini teslim beklentiniz
* Özel olarak olmasını istediğiniz özellikler

İlk mesajın çok detaylı olması şart değildir. Projenizi kısaca anlatmanız yeterlidir. Gerekli detaylar sonraki adımlarda birlikte netleştirilebilir.

---

## İhtiyaç Analizi Nasıl Yapılır?

İhtiyaç analizi, projenin gerçekten neye hizmet edeceğini anlamak için yapılır. Amaç yalnızca “bir site yapmak” değil, işletmenin ihtiyacına uygun bir çözüm planlamaktır.

Bu aşamada şu sorular değerlendirilir:

* Projenin temel amacı nedir?
* Müşteri sistemde ne yapacak?
* İşletme sahibi veya ekip sistemi nasıl kullanacak?
* Satış, randevu, sipariş, başvuru veya kayıt akışı olacak mı?
* Admin panel gerekiyor mu?
* Ürün, hizmet, stok, müşteri veya sipariş verisi yönetilecek mi?
* Dış sistemlerle bağlantı kurulacak mı?
* Sistem yalnızca tanıtım amaçlı mı, yoksa operasyonel bir işlevi olacak mı?

Kapsamı netleşebilen projelerde doğru çözüm planlanır. Bu nedenle ihtiyaç analizi, projenin hem fiyatlandırması hem de teslim süreci için önemli bir adımdır.

---

## Kapsam Nasıl Netleşir?

Kapsam, yapılacak işin sınırlarını belirler. Hangi sayfaların hazırlanacağı, hangi özelliklerin olacağı, hangi işlemlerin admin panelden yönetileceği ve hangi entegrasyonların yapılacağı kapsam içinde netleştirilir.

Kapsam belirlenirken şu başlıklar dikkate alınır:

* Sayfa sayısı
* Tasarım beklentisi
* Mobil uyumluluk ihtiyacı
* Formlar ve kullanıcı akışları
* Admin panel gereksinimi
* Modül sayısı
* Kullanıcı rolleri
* Ürün, stok, sipariş veya müşteri verisi
* API, XML, WhatsApp, SMS veya pazaryeri entegrasyonları
* İçerik ve görsel hazırlığı
* Yayın süreci
* Teslim sonrası destek ihtiyacı

Kapsam ne kadar net olursa, süreç o kadar sağlıklı ilerler. Belirsiz kalan noktalar proje başlamadan önce açıklığa kavuşturulur.

---

## Teklif Nasıl Hazırlanır?

Teklif, projenin kapsamı netleştikten sonra hazırlanır. Her proje farklı iş yükü ve teknik gereksinim içerdiği için tek ve sabit bir fiyat yaklaşımı uygulanmaz.

Teklif hazırlanırken şu unsurlar değerlendirilir:

* Yapılacak sayfalar
* Tasarım seviyesi
* Admin panel ihtiyacı
* Özel modüller
* Entegrasyonlar
* Veri yapısı
* Teslim süresi beklentisi
* Yayın ve teknik kurulum ihtiyacı
* Bakım veya destek beklentisi

Teklif yalnızca fiyat bilgisinden ibaret değildir. Aynı zamanda yapılacak işin sınırlarını, teslim sürecini ve projenin nasıl ilerleyeceğini netleştiren bir yol haritasıdır.

Amaç, müşterinin ne alacağını, hangi işlerin yapılacağını ve hangi taleplerin yeni kapsam olarak değerlendirileceğini baştan açık hale getirmektir.

---

## Proje Sürecinde İletişim Nasıl Yürür?

Proje sürecinde iletişim sade, net ve düzenli ilerler. Gerektiğinde müşteriden içerik, görsel, erişim bilgisi veya onay istenir.

İletişim genellikle şu konular üzerinden yürür:

* Proje başlangıç bilgileri
* Tasarım veya yapı onayı
* Eksik içeriklerin paylaşılması
* Demo veya önizleme kontrolü
* Gerekli teknik erişimler
* Yayın öncesi son kontroller
* Teslim sonrası kullanım açıklamaları

Süreç boyunca amaç, müşterinin projede hangi aşamada olunduğunu anlayabilmesi ve gerekli noktalarda doğru geri bildirim verebilmesidir.

Düzenli iletişim, hem güveni artırır hem de yanlış anlaşılmaların önüne geçer.

---

## Önizleme / Demo Paylaşımı Nasıl Yapılır?

Projenin türüne göre geliştirme sürecinde önizleme veya demo paylaşımı yapılabilir. Bu sayede müşteri, çalışma tamamlanmadan önce genel yapıyı görebilir ve anlaşılan kapsam doğrultusunda gerekli değerlendirmeleri yapabilir.

Önizleme veya demo şu amaçlarla paylaşılır:

* Genel tasarım yapısını göstermek
* Sayfa düzenini kontrol ettirmek
* Kullanıcı akışını göstermek
* Admin panel mantığını açıklamak
* Eksik veya hatalı görünen noktaları tespit etmek
* Yayın öncesi son değerlendirmeyi almak

Önizleme, projenin tamamen yeni bir yöne taşınması anlamına gelmez. Bu aşamada yapılan değerlendirmeler, anlaşılan kapsam doğrultusunda ele alınır.

Farklı tasarım yönü, yeni sayfa, yeni modül veya farklı iş akışı talepleri yeni kapsam olarak değerlendirilir.

---

## Teslim ve Yayına Alma Süreci

Proje tamamlandığında teslim süreci başlar. Teslimde amaç, anlaşılan kapsamda hazırlanan sistemin müşteriyle paylaşılması ve temel kontrollerin yapılmasıdır.

Teslim sürecinde şu adımlar izlenebilir:

* Proje çıktısı paylaşılır
* Sayfalar ve temel işlevler kontrol edilir
* Admin panel varsa giriş ve kullanım bilgileri açıklanır
* Formlar, bağlantılar ve yönlendirmeler test edilir
* Yayın için gerekli domain, hosting veya sunucu bilgileri değerlendirilir
* Yayına alma işlemi yapılır veya mevcut ortamda düzenleme sağlanır
* Teslim sonrası kullanım ve destek süreci açıklanır

Yayına alma süreci, projenin teknik yapısına göre değişebilir. Basit bir tanıtım sitesi ile admin panelli, veritabanlı veya entegrasyonlu bir sistem aynı yayın sürecine sahip değildir.

---

## Hata Düzeltme ve Ek İstek Ayrımı

Teslim edilen kapsamda hata varsa düzeltilir. Hata, proje başında anlaşılan ve teslim edilen işin beklenen şekilde çalışmaması anlamına gelir.

Hata olarak değerlendirilebilecek örnekler:

* Anlaşılan sayfanın açılmaması
* Formun çalışmaması
* Butonun yanlış yere yönlenmesi
* Admin panelde kayıt işleminin hatalı çalışması
* Mobil görünümde kapsam içi bir bozulma olması
* Teslim edilen özelliklerden birinin beklenen şekilde çalışmaması

Buna karşılık aşağıdaki talepler yeni kapsam olarak değerlendirilir:

* Yeni özellik eklenmesi
* Yeni sayfa istenmesi
* Yeni modül geliştirilmesi
* Farklı tasarım yönüne geçilmesi
* Yeni entegrasyon kurulması
* Yeni kullanıcı rolü eklenmesi
* Mevcut sistemin iş akışının değiştirilmesi
* Kapsamlı veri aktarımı yapılması

Bu ayrım, sürecin net ve adil ilerlemesi için önemlidir. Anlaşılan kapsam doğrultusunda düzenleme yapılır; yeni ihtiyaçlar ise ayrıca planlanır.

---

## Bakım ve Geliştirme Süreci

Proje teslim edildikten sonra bakım ve geliştirme ihtiyacı doğabilir. Özellikle aktif kullanılan web siteleri, admin paneller, satış sistemleri ve entegrasyon projelerinde düzenli takip önemlidir.

Bakım süreci proje türüne göre planlanabilir. Bu süreç şunları kapsayabilir:

* Küçük içerik güncellemeleri
* Teknik hata kontrolü
* Performans takibi
* Yedekleme kontrolü
* Güvenlik kontrolleri
* Admin panel kullanım desteği
* Entegrasyon takibi
* Yayın ortamı kontrolü
* Yeni ihtiyaçların analiz edilmesi

Bakım hizmeti sınırsız değişiklik anlamına gelmez. Bakımın süresi, kapsamı ve destek seviyesi proje türüne göre belirlenebilir.

Yeni özellik, yeni sayfa, yeni modül, yeni entegrasyon veya farklı iş akışı talepleri yeni kapsam olarak değerlendirilir.

---

## Müşterinin Proje Başlamadan Önce Hazırlaması Gerekenler

Proje başlamadan önce bazı bilgilerin hazır olması süreci hızlandırır ve teklifin daha sağlıklı hazırlanmasını sağlar.

Hazırlanması faydalı olan bilgiler:

* İşletme adı ve faaliyet alanı
* İstenilen sistemin kısa açıklaması
* Hazırlanacak sayfalar
* Hizmet veya ürün bilgileri
* Logo ve kurumsal renkler
* Kullanılacak görseller
* Örnek alınan web siteleri
* İletişim bilgileri
* Sosyal medya bağlantıları
* Varsa mevcut domain ve hosting bilgileri
* Admin panel ihtiyacı
* Entegrasyon ihtiyacı
* Teslim süresi beklentisi

Bu bilgilerin tamamı hazır değilse de ilk görüşme yapılabilir. Ancak proje kapsamının netleşmesi için eksik bilgilerin süreç içinde tamamlanması gerekir.

---

## Hangi Projelerde Önce Detaylı Görüşme Gerekir?

Bazı projelerde kısa mesajla kapsam belirlemek yeterli olabilir. Ancak özel yazılım, entegrasyon, admin panel veya operasyonel sistem içeren projelerde detaylı görüşme gerekebilir.

Detaylı görüşme gerektirebilecek proje türleri:

* Özel admin panel projeleri
* Satış ve sipariş sistemleri
* Randevu veya rezervasyon sistemleri
* Stok ve ürün yönetimi
* Müşteri veya bayi paneli
* API entegrasyonları
* XML veri aktarımı
* Pazaryeri bağlantıları
* Otomasyon sistemleri
* Operasyon takip panelleri
* Mevcut sistemin yenilenmesi veya geliştirilmesi

Bu projelerde önce iş akışı anlaşılır, ardından kapsam ve teklif daha sağlıklı şekilde oluşturulur.

---

## Güven Veren Çalışma Prensipleri

NT Web Çözümleri’nde güven, belirsiz vaatler üzerinden değil; net kapsam, yazılı planlama, düzenli iletişim, önizleme, teslim kontrolü ve teslim sonrası destek yaklaşımı üzerinden kurulur.

Çalışma prensipleri şu temellere dayanır:

* İhtiyaç anlaşılmadan teklif verilmez
* Kapsam netleştirilmeden proje başlatılmaz
* Yapılacak işler yazılı şekilde belirlenir
* Süreç boyunca sade ve anlaşılır iletişim kurulur
* Uygun projelerde demo veya önizleme paylaşılır
* Teslim edilen kapsamda hata varsa düzeltilir
* Yeni istekler yeni kapsam olarak değerlendirilir
* Teslim sonrası destek ve bakım ihtiyacı ayrıca planlanabilir
* Portföy ve örnek çalışmalar üzerinden beklenti daha net hale getirilebilir

Amaç, müşterinin ne alacağını bilerek sürece başlaması ve projenin kontrollü şekilde ilerlemesidir.

Kapsamı netleşebilen projelerde doğru çözüm planlanır. Bu yaklaşım, hem işletmenin ihtiyacına uygun sonuç alınmasını hem de sürecin daha güvenli ilerlemesini sağlar.

---

# Sık Sorulan Sorular

### 1. Proje süreci nasıl başlar?

Proje süreci WhatsApp veya e-posta üzerinden ihtiyacınızı anlatmanızla başlar. Ardından proje türü, beklentileriniz ve gerekli kapsam başlıkları değerlendirilir.

### 2. İlk mesajda ne göndermem gerekir?

İşletmenizi, istediğiniz sistemi, varsa örnek siteleri, sayfa veya modül beklentinizi ve özel isteklerinizi paylaşmanız yeterlidir.

### 3. Kapsam net değilse yine görüşebilir miyiz?

Evet. Kapsamınız tam net değilse mevcut ihtiyacınız üzerinden birlikte değerlendirme yapılabilir. Ancak teklif ve teslim süresi için kapsamın netleşmesi gerekir.

### 4. Teklif nasıl oluşturulur?

Teklif; sayfa sayısı, tasarım ihtiyacı, admin panel, modüller, entegrasyonlar, veri yapısı ve teslim beklentisi değerlendirilerek hazırlanır.

### 5. Proje sürecinde önizleme paylaşılır mı?

Proje türüne göre önizleme veya demo paylaşılabilir. Bu sayede çalışma yayına alınmadan önce genel yapı ve akış kontrol edilebilir.

### 6. Teslimden sonra hata çıkarsa ne olur?

Teslim edilen kapsamda hata varsa düzeltilir. Hatanın, proje başında anlaşılan kapsam içinde yer alan bir işlevle ilgili olması gerekir.

### 7. Teslimden sonra yeni özellik istersem ne olur?

Yeni özellik, yeni sayfa, yeni modül, farklı tasarım yönü, yeni entegrasyon veya farklı iş akışı yeni kapsam olarak değerlendirilir.

### 8. Kullanım desteği veriliyor mu?

Evet. Admin panel, ürün yönetimi, sipariş takibi, randevu sistemi veya içerik yönetimi gibi konularda proje türüne göre temel kullanım anlatımı yapılabilir.

### 9. Bakım hizmeti almak zorunlu mu?

Hayır. Bakım hizmeti zorunlu değildir. Ancak aktif kullanılan web sitesi, satış sistemi, admin panel veya entegrasyon projelerinde düzenli bakım önerilir.

### 10. Mevcut web sitem veya sistemim geliştirilebilir mi?

Evet. Mevcut yapı incelendikten sonra teknik olarak geliştirilebilir olup olmadığı değerlendirilir. Uygun görülürse kapsam ve süreç planlanır.

### 11. Her proje için aynı süreç mi uygulanır?

Hayır. Basit bir tanıtım sitesi ile özel yazılım veya entegrasyon projesi aynı süreçte ilerlemez. Süreç, projenin teknik yapısına göre planlanır.

### 12. Güvenli bir çalışma için en önemli şey nedir?

En önemli konu kapsamın net olmasıdır. Yapılacak işler yazılı şekilde belirlendiğinde süreç daha kontrollü, anlaşılır ve sağlıklı ilerler.

---

# Projenizi Kısaca Anlatın, Uygun Yolu Birlikte Netleştirelim

Web sitesi, satış sistemi, admin panel, entegrasyon, otomasyon veya özel yazılım ihtiyacınız varsa WhatsApp ya da e-posta üzerinden iletişime geçebilirsiniz.

Projenizi kısaca anlatın, mevcut ihtiyacınızı paylaşın, varsa örnek aldığınız çalışmaları gönderin. Kapsamı birlikte netleştirip işletmeniz için uygun yolu planlayalım.`,
  },
  "kvkk": {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni",
    description: "İletişim, teklif, proje değerlendirme ve destek süreçlerinde işlenebilecek kişisel verilere dair aydınlatma metni.",
    content: `Bu metin, NT Web Çözümleri web sitesi üzerinden iletişim kuran, teklif talebi gönderen veya WhatsApp/e-posta yoluyla proje bilgisi paylaşan kişilerin kişisel verilerinin hangi amaçlarla işlenebileceğini açıklamak amacıyla hazırlanmıştır.

Bu metin hukuki danışmanlık niteliği taşımaz. Gerekli görülmesi halinde profesyonel hukuk kontrolünden geçirilmesi önerilir.

---

## 1. Veri Sorumlusu / Marka Açıklaması

NT Web Çözümleri; web sitesi, admin panel, özel yazılım, entegrasyon, otomasyon ve satış sistemleri alanlarında hizmet sunan bir yazılım markasıdır.

NT Web Çözümleri web sitesi temel olarak bilgilendirme, iletişim ve teklif talebi amacıyla kullanılmaktadır. Web sitesi üzerinden doğrudan ödeme alınmaz.

Bu aydınlatma metni kapsamında, web sitesi, WhatsApp, e-posta veya diğer iletişim kanalları üzerinden tarafımıza ilettiğiniz kişisel veriler; talebinizin değerlendirilmesi, sizinle iletişim kurulması ve hizmet sürecinin yürütülmesi amacıyla işlenebilir.

Not: Veri sorumlusu bilgisi, kullanılacak hukuki yapıya göre ayrıca netleştirilmelidir. Bu bölüm yayına alınmadan önce “[Ad Soyad / Ticari Unvan / İletişim Bilgisi]” bilgileriyle tamamlanmalıdır.

---

## 2. Hangi Veriler İşlenebilir?

NT Web Çözümleri ile iletişime geçtiğinizde veya teklif talebi gönderdiğinizde aşağıdaki kişisel veriler işlenebilir:

* Ad soyad
* E-posta adresi
* Telefon numarası
* Firma adı
* Proje açıklaması
* Bütçe aralığı
* Teslim beklentisi
* Referans linkler
* İletişim mesajı
* WhatsApp üzerinden iletilen bilgiler
* E-posta üzerinden iletilen bilgiler
* Proje sürecinde tarafınızdan gönüllü olarak paylaşılan diğer bilgiler

Lütfen iletişim veya teklif talebi gönderirken proje için gerekli olmayan özel nitelikli kişisel verileri paylaşmamaya dikkat ediniz.

---

## 3. Veriler Hangi Amaçlarla İşlenir?

Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:

* Talebinize dönüş yapmak
* Proje ihtiyacınızı anlamak
* Proje kapsamını değerlendirmek
* Teklif sürecini yürütmek
* Sizinle iletişim sağlamak
* Hizmet sunmak
* Müşteri taleplerini takip etmek
* Proje süreciyle ilgili kayıtları düzenli tutmak
* Teknik destek, bakım veya geliştirme taleplerini değerlendirmek
* Yasal yükümlülükleri yerine getirmek
* Güvenlik ve kayıt tutma amacıyla gerekli kontrolleri yapmak

Kişisel verileriniz, yalnızca ilgili iletişim, teklif, hizmet ve destek süreçleriyle bağlantılı olarak işlenir.

---

## 4. Veriler Hangi Hukuki Sebeplerle İşlenir?

Kişisel verileriniz; talebinize dönüş yapılması, teklif sürecinin yürütülmesi, hizmet ilişkisinin kurulması veya sürdürülmesi, yasal yükümlülüklerin yerine getirilmesi ve meşru menfaatler kapsamında işlenebilir.

Bu kapsamda verileriniz genel olarak aşağıdaki hukuki sebeplere dayanarak işlenebilir:

* Bir sözleşmenin kurulması veya ifası için gerekli olması
* Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi
* Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin gerekli olması
* İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatler için veri işlemenin gerekli olması

Pazarlama, kampanya veya ticari elektronik ileti gönderimi gibi ayrıca izin gerektiren durumlarda açık rıza veya ilgili mevzuata uygun ayrı izin süreçleri işletilir.

---

## 5. Veriler Hangi Yöntemlerle Toplanır?

Kişisel verileriniz aşağıdaki kanallar üzerinden toplanabilir:

* Web sitesindeki iletişim formu
* Teklif talep formu
* WhatsApp mesajları
* E-posta yazışmaları
* Telefon görüşmeleri
* Proje sürecinde tarafınızdan paylaşılan dokümanlar, linkler veya açıklamalar
* Yayın, destek veya bakım sürecinde iletilen teknik bilgiler

Verileriniz, tamamen veya kısmen otomatik yollarla ya da iletişim sürecinin gerektirdiği ölçüde manuel yollarla işlenebilir.

---

## 6. Verilerin Aktarılması

Kişisel verileriniz kural olarak yalnızca talebinizin değerlendirilmesi, iletişim sürecinin yürütülmesi, hizmetin sunulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.

Gerekli olması halinde kişisel verileriniz aşağıdaki taraflarla sınırlı olarak paylaşılabilir:

* Teknik hizmet alınan altyapı sağlayıcıları
* Hosting, domain veya e-posta hizmet sağlayıcıları
* Proje kapsamında kullanılan yazılım, iletişim veya altyapı servisleri
* Yetkili kamu kurum ve kuruluşları
* Hukuki veya mali yükümlülüklerin gerektirdiği yetkili kişi ve kurumlar

Kişisel verileriniz, işleme amacıyla bağlantılı, sınırlı ve ölçülü şekilde aktarılır. Gereksiz veya amaç dışı veri paylaşımı yapılmaması esastır.

---

## 7. Saklama Süresi

Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca saklanır.

Teklif, iletişim ve proje değerlendirme süreçlerine ait bilgiler; talebinize dönüş yapılması, proje sürecinin takip edilmesi, hizmetin sunulması, destek taleplerinin yönetilmesi ve yasal yükümlülüklerin yerine getirilmesi için gerekli süre boyunca muhafaza edilebilir.

Saklama süresi sona erdiğinde veya işleme amacı ortadan kalktığında kişisel verileriniz ilgili mevzuata uygun şekilde silinebilir, yok edilebilir veya anonim hale getirilebilir.

---

## 8. İlgili Kişinin Hakları

KVKK kapsamında kişisel verisi işlenen kişiler, kişisel verileriyle ilgili belirli haklara sahiptir.

Bu kapsamda ilgili kişiler genel olarak;

* Kişisel verilerinin işlenip işlenmediğini öğrenme
* İşlenmişse buna ilişkin bilgi talep etme
* İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme
* Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
* Eksik veya yanlış işlenmişse düzeltilmesini isteme
* İlgili şartlar oluşmuşsa silinmesini veya yok edilmesini isteme
* Yapılan düzeltme, silme veya yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme
* Otomatik sistemler yoluyla aleyhe bir sonucun ortaya çıkmasına itiraz etme
* Kanuna aykırı işleme sebebiyle zarara uğraması halinde zararın giderilmesini talep etme

haklarına sahiptir.

Bu haklarınızı kullanmak için iletişim bölümünde yer alan kanallar üzerinden başvuru yapabilirsiniz.

---

## 9. İletişim

KVKK kapsamındaki soru, talep ve başvurularınız için NT Web Çözümleri ile aşağıdaki kanallar üzerinden iletişime geçebilirsiniz:

E-posta: [E-posta adresi buraya yazılacak]
WhatsApp / Telefon: [Telefon numarası buraya yazılacak]
Web sitesi: [Web sitesi adresi buraya yazılacak]

Başvurularınızın sağlıklı değerlendirilebilmesi için ad soyad, iletişim bilgisi, talep konusu ve varsa ilgili işlem detaylarını açık şekilde paylaşmanız önerilir.

---

## 10. Form Altı Kısa Bilgilendirme Metni

İletişim formu üzerinden paylaştığınız kişisel veriler, talebinize dönüş yapılması, proje kapsamının değerlendirilmesi ve iletişim sürecinin yürütülmesi amacıyla işlenebilir.

Detaylı bilgi için KVKK Aydınlatma Metni’ni inceleyebilirsiniz.`,
  },
  "privacy": {
    slug: "privacy",
    title: "Gizlilik Politikası",
    description: "Web sitesi, iletişim formu, WhatsApp ve e-posta üzerinden paylaşılabilecek bilgilerin nasıl ele alınabileceğine dair bilgilendirme.",
    content: `## 1. Genel Açıklama

NT Web Çözümleri olarak web sitemizi ziyaret eden, iletişim formu dolduran, teklif talebi gönderen veya WhatsApp/e-posta üzerinden bizimle iletişime geçen kişilerin gizliliğine önem veriyoruz.

Bu Gizlilik Politikası, web sitemiz ve iletişim kanallarımız üzerinden hangi bilgilerin alınabileceğini, bu bilgilerin hangi amaçlarla kullanılabileceğini, kimlerle paylaşılabileceğini, nasıl korunduğunu ve bizimle nasıl iletişime geçebileceğinizi açıklamak için hazırlanmıştır.

NT Web Çözümleri web sitesi; bilgilendirme, iletişim ve teklif talebi toplama amacıyla kullanılmaktadır. Web sitesi üzerinden doğrudan ödeme alınmamaktadır.

Bu metin hukuki danışmanlık niteliği taşımaz. Gerekli görülmesi halinde profesyonel hukuk kontrolünden geçirilmesi önerilir.

---

## 2. Hangi Bilgiler Toplanabilir?

Web sitemiz, iletişim formlarımız, WhatsApp veya e-posta yazışmaları üzerinden aşağıdaki bilgiler tarafımıza iletilebilir:

* Ad soyad
* E-posta adresi
* Telefon numarası
* Firma adı
* Proje açıklaması
* Referans linkler
* Bütçe aralığı
* Teslim beklentisi
* İletişim mesajı
* WhatsApp üzerinden iletilen bilgiler
* E-posta üzerinden iletilen bilgiler
* Proje sürecinde sizin tarafınızdan paylaşılan ek bilgiler
* Site kullanımına ilişkin teknik veriler

Site kullanımına ilişkin teknik veriler; IP adresi, cihaz bilgisi, tarayıcı bilgisi, ziyaret zamanı, görüntülenen sayfalar veya benzeri temel teknik kayıtları içerebilir.

Lütfen iletişim veya teklif talebi sırasında proje için gerekli olmayan özel veya hassas kişisel bilgileri paylaşmamaya dikkat ediniz.

---

## 3. Bilgiler Hangi Amaçlarla Kullanılır?

Paylaştığınız bilgiler aşağıdaki amaçlarla kullanılabilir:

* Talebinize dönüş yapmak
* Proje ihtiyacınızı anlamak
* Proje kapsamını değerlendirmek
* Teklif sürecini yürütmek
* Sizinle iletişim kurmak
* Hizmet sürecini planlamak
* Müşteri taleplerini takip etmek
* Destek, bakım veya geliştirme taleplerini değerlendirmek
* Web sitesinin güvenliğini ve düzgün çalışmasını sağlamak
* Gerekli kayıtları tutmak
* Yasal yükümlülükleri yerine getirmek

Bilgileriniz, yalnızca ilgili iletişim, teklif, hizmet ve destek süreçleriyle bağlantılı olarak kullanılır.

Pazarlama, kampanya veya ticari bilgilendirme gibi ayrıca izin gerektiren durumlarda, gerekli izin süreci ayrıca yürütülmelidir.

---

## 4. Bilgiler Kimlerle Paylaşılabilir?

Kişisel bilgileriniz kural olarak gereksiz şekilde üçüncü kişilerle paylaşılmaz.

Ancak hizmetin yürütülmesi, teknik altyapının çalışması veya yasal yükümlülüklerin yerine getirilmesi için gerekli olması halinde bilgileriniz sınırlı şekilde aşağıdaki taraflarla paylaşılabilir:

* Hosting, domain veya sunucu hizmet sağlayıcıları
* E-posta ve iletişim altyapısı sağlayıcıları
* WhatsApp veya benzeri iletişim kanalları
* Web sitesi altyapısında kullanılan teknik servisler
* Proje sürecinde gerekli olabilecek teknik hizmet sağlayıcıları
* Yetkili kamu kurum ve kuruluşları
* Hukuki, mali veya resmi yükümlülükler kapsamında yetkili kişiler

Paylaşım yapılması gereken durumlarda, yalnızca gerekli bilgiler paylaşılır ve amaç dışı kullanım yapılmaması esastır.

---

## 5. Üçüncü Taraf Bağlantılar

Web sitemizde zaman zaman farklı web sitelerine, örnek çalışmalara, referans linklere, sosyal medya hesaplarına veya üçüncü taraf platformlara yönlendiren bağlantılar bulunabilir.

Bu bağlantılara tıkladığınızda ilgili web sitesinin kendi gizlilik politikası ve kullanım koşulları geçerli olur. NT Web Çözümleri, üçüncü taraf web sitelerinin içeriklerinden, güvenlik uygulamalarından veya veri işleme süreçlerinden sorumlu değildir.

Bu nedenle farklı bir siteye yönlendirildiğinizde, ilgili sitenin gizlilik politikasını incelemeniz önerilir.

---

## 6. Çerez ve Analiz Araçları

Web sitemizin düzgün çalışması, kullanıcı deneyiminin iyileştirilmesi ve temel teknik kontrollerin yapılması amacıyla çerezler veya benzeri teknolojiler kullanılabilir.

Çerezler şu amaçlarla kullanılabilir:

* Web sitesinin düzgün çalışmasını sağlamak
* Sayfa performansını takip etmek
* Kullanıcı deneyimini iyileştirmek
* Temel güvenlik ve teknik kontroller yapmak
* Ziyaretçi davranışlarını genel düzeyde analiz etmek

Google Analytics, Meta Pixel veya benzeri analitik/reklam araçlarının kullanılması halinde, bu konuda ayrıca bilgilendirme yapılabilir ve gerekli durumlarda kullanıcı tercihleri veya izin süreçleri ayrıca düzenlenebilir.

Tarayıcı ayarlarınız üzerinden çerezleri silebilir, engelleyebilir veya sınırlandırabilirsiniz. Ancak bazı çerezlerin kapatılması web sitesinin belirli bölümlerinin beklenen şekilde çalışmamasına neden olabilir.

---

## 7. Bilgilerin Korunması

Paylaştığınız bilgilerin güvenli şekilde saklanması ve yetkisiz erişime karşı korunması için makul teknik ve idari önlemler alınmaya çalışılır.

Bu kapsamda şu önlemler değerlendirilebilir:

* Yetkisiz erişimi önlemeye yönelik temel güvenlik kontrolleri
* Güvenli iletişim ve erişim yönetimi
* Gereksiz veri paylaşımından kaçınma
* Erişim bilgilerini sınırlı kişilerle paylaşma
* Teknik altyapının düzenli kontrol edilmesi
* Gerekli durumlarda yedekleme ve kayıt kontrolü

Bununla birlikte internet üzerinden yapılan hiçbir veri aktarımı için tamamen risksiz veya mutlak güvenlik garantisi verilemez. Bu nedenle kullanıcıların da iletişim sırasında gereksiz, özel veya hassas bilgileri paylaşmaması önemlidir.

---

## 8. Saklama Süresi

Paylaştığınız bilgiler, toplanma amacı için gerekli olan süre boyunca saklanabilir.

Örneğin teklif talebi, iletişim yazışması veya proje süreciyle ilgili bilgiler; talebinize dönüş yapılması, proje kapsamının değerlendirilmesi, hizmet sürecinin yürütülmesi, destek taleplerinin takip edilmesi veya yasal yükümlülüklerin yerine getirilmesi için gerekli süre boyunca muhafaza edilebilir.

Saklama amacı ortadan kalktığında veya yasal süreler sona erdiğinde bilgileriniz silinebilir, yok edilebilir veya anonim hale getirilebilir.

---

## 9. Kullanıcı Hakları

Kişisel verilerinizle ilgili olarak mevzuat kapsamında belirli haklara sahipsiniz.

Bu kapsamda genel olarak:

* Hangi kişisel verilerinizin işlendiğini öğrenme
* Verilerinizin hangi amaçlarla kullanıldığını öğrenme
* Eksik veya yanlış bilgi varsa düzeltilmesini isteme
* Gerekli şartlar oluştuğunda verilerinizin silinmesini veya yok edilmesini isteme
* Verilerinizin kimlerle paylaşıldığı hakkında bilgi talep etme
* Mevzuata aykırı bir işlem olduğunu düşünüyorsanız itiraz etme
* Zarar oluşması halinde ilgili mevzuat kapsamında talepte bulunma

haklarına sahip olabilirsiniz.

Bu haklarınızı kullanmak veya gizlilikle ilgili soru sormak için iletişim kanalları üzerinden bizimle iletişime geçebilirsiniz.

---

## 10. İletişim

Gizlilik Politikası, kişisel verileriniz veya web sitesi üzerinden paylaştığınız bilgilerle ilgili soru ve talepleriniz için bizimle iletişime geçebilirsiniz.

E-posta: [E-posta adresi buraya yazılacak]
WhatsApp / Telefon: [Telefon numarası buraya yazılacak]
Web sitesi: [Web sitesi adresi buraya yazılacak]

Başvurularınızın sağlıklı değerlendirilebilmesi için ad soyad, iletişim bilgisi, talep konusu ve varsa ilgili işlem detaylarını açık şekilde paylaşmanız önerilir.

---

## Kapanış

NT Web Çözümleri olarak, bizimle paylaştığınız bilgileri yalnızca iletişim, teklif, hizmet ve destek süreçleriyle bağlantılı şekilde kullanmaya özen gösteririz.

Amacımız, projenizle ilgili ihtiyaçları doğru anlamak, size sağlıklı dönüş yapmak ve güvenilir bir iletişim süreci yürütmektir.`,
  },
  "cookies": {
    slug: "cookies",
    title: "Çerez Politikası",
    description: "Sitede kullanılabilecek zorunlu, analitik, performans, reklam ve üçüncü taraf çerezleri hakkında bilgilendirme.",
    content: `## 1. Çerez Nedir?

Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız veya cihazınız üzerinde saklanabilen küçük metin dosyalarıdır.

Çerezler; web sitesinin düzgün çalışması, bazı tercihlerin hatırlanması, site performansının takip edilmesi veya kullanıcı deneyiminin iyileştirilmesi gibi amaçlarla kullanılabilir.

NT Web Çözümleri web sitesi temel olarak bilgilendirme, iletişim ve teklif talebi amacıyla kullanılmaktadır. Web sitesi üzerinden doğrudan ödeme alınmamaktadır.

Bu Çerez Politikası, web sitemizde hangi tür çerezlerin kullanılabileceğini ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklamak amacıyla hazırlanmıştır.

---

## 2. Hangi Çerez Türleri Kullanılabilir?

Web sitemizde, sitenin çalışma yapısına ve ileride kullanılabilecek teknik araçlara bağlı olarak farklı çerez türleri kullanılabilir.

Kullanılabilecek çerez türleri genel olarak şunlardır:

* Zorunlu çerezler
* Performans ve analitik çerezleri
* Reklam ve pazarlama çerezleri
* Üçüncü taraf çerezleri

Google Analytics, Meta Pixel veya benzeri analiz/reklam araçlarının kullanılıp kullanılmayacağı henüz net değilse, bu araçlara bağlı çerezler kesin olarak kullanılıyor gibi değerlendirilmemelidir.

Zorunlu çerezler dışında analitik, performans, reklam veya pazarlama amaçlı çerezler kullanılması halinde ziyaretçilere ayrıca bilgilendirme ve tercih imkanı sunulabilir.

---

## 3. Zorunlu Çerezler

Zorunlu çerezler, web sitesinin temel işlevlerini yerine getirebilmesi için gerekli olan çerezlerdir.

Bu çerezler olmadan web sitesinin bazı bölümleri doğru çalışmayabilir. Örneğin güvenli oturum yönetimi, form güvenliği, sayfa yönlendirmeleri veya temel site fonksiyonları için zorunlu çerezler kullanılabilir.

Zorunlu çerezler şu amaçlarla kullanılabilir:

* Web sitesinin düzgün çalışmasını sağlamak
* Güvenlik kontrollerini desteklemek
* Formların ve temel site işlevlerinin çalışmasına yardımcı olmak
* Sayfalar arası geçişlerin sağlıklı yapılmasını sağlamak
* Kullanıcının açıkça talep ettiği temel site hizmetlerini sunmak

Bu çerezler, web sitesinin çalışması için gerekli olduğundan kapatılmaları halinde bazı bölümler beklenen şekilde çalışmayabilir.

---

## 4. Performans ve Analitik Çerezleri

Performans ve analitik çerezleri, web sitesinin nasıl kullanıldığını anlamak ve kullanıcı deneyimini iyileştirmek amacıyla kullanılabilir.

Bu çerezler kullanılması halinde şu konularda yardımcı olabilir:

* Hangi sayfaların daha çok ziyaret edildiğini görmek
* Site performansını değerlendirmek
* Sayfa açılış hızlarını takip etmek
* Ziyaretçi davranışlarını genel düzeyde analiz etmek
* Kullanıcı deneyimini iyileştirmek
* Teknik sorunları daha kolay fark etmek

Google Analytics veya benzeri analiz araçları kullanılması halinde, bu araçların topladığı veriler ilgili servis sağlayıcıların gizlilik politikalarına da tabi olabilir.

Performans ve analitik çerezleri zorunlu çerezlerden farklıdır. Bu tür çerezler kullanılması halinde, gerekli durumlarda kullanıcıya ayrıca bilgilendirme ve tercih imkanı sunulabilir.

---

## 5. Reklam ve Pazarlama Çerezleri

Reklam ve pazarlama çerezleri, ziyaretçilere daha ilgili reklamlar göstermek, reklam performansını ölçmek veya pazarlama çalışmalarını analiz etmek amacıyla kullanılabilir.

NT Web Çözümleri web sitesinde Meta Pixel, Google Ads, yeniden pazarlama veya benzeri reklam araçlarının kullanılması halinde bu tür çerezler gündeme gelebilir.

Reklam ve pazarlama çerezleri şu amaçlarla kullanılabilir:

* Reklam performansını ölçmek
* Ziyaretçi davranışlarını pazarlama açısından analiz etmek
* Daha ilgili reklamlar göstermek
* Yeniden pazarlama çalışmaları yapmak
* Kampanya sonuçlarını değerlendirmek

Bu tür çerezler zorunlu değildir. Reklam veya pazarlama çerezleri kullanılması halinde, ziyaretçilere ayrıca bilgilendirme yapılabilir ve gerekli durumlarda tercih/izin imkanı sunulabilir.

---

## 6. Üçüncü Taraf Çerezleri

Web sitemizde bazı durumlarda üçüncü taraf servislerden yararlanılabilir. Bu servisler, kendi çerezlerini veya benzeri teknolojilerini kullanabilir.

Üçüncü taraf çerezleri şu durumlarda gündeme gelebilir:

* Analitik araçları kullanılması halinde
* Reklam veya pazarlama araçları kullanılması halinde
* Harita, video, sosyal medya veya gömülü içerik eklenmesi halinde
* Güvenlik, performans veya teknik altyapı servisleri kullanılması halinde

Üçüncü taraf servislerin çerez kullanımı, ilgili servis sağlayıcının kendi gizlilik ve çerez politikalarına tabi olabilir.

Bu nedenle üçüncü taraf servisler kullanılması halinde, ilgili servislerin veri işleme ve çerez kullanımı ayrıca değerlendirilmelidir.

---

## 7. Çerez Tercihleri Nasıl Yönetilir?

Çerez tercihlerinizi tarayıcı ayarlarınız üzerinden yönetebilirsiniz.

Kullandığınız tarayıcıya göre çerezleri silebilir, engelleyebilir veya belirli siteler için sınırlandırabilirsiniz. Ancak bazı çerezlerin kapatılması, web sitesinin belirli bölümlerinin düzgün çalışmamasına neden olabilir.

Genel olarak tarayıcı ayarlarınızdan şu işlemleri yapabilirsiniz:

* Çerezleri görüntüleme
* Çerezleri silme
* Tüm çerezleri engelleme
* Belirli sitelere ait çerezleri engelleme
* Çerezler için uyarı alma
* Tarayıcı kapatıldığında çerezleri temizleme

Zorunlu olmayan analitik, performans, reklam veya pazarlama çerezleri kullanılması halinde web sitesinde çerez tercih paneli veya çerez banner’ı üzerinden tercihlerinizi yönetme imkanı sunulabilir.

---

## 8. Politika Güncellemeleri

Bu Çerez Politikası, web sitesinde kullanılan teknolojilere, çerez türlerine veya yasal gerekliliklere bağlı olarak zaman zaman güncellenebilir.

Özellikle Google Analytics, Meta Pixel, reklam çerezleri, pazarlama araçları veya üçüncü taraf analiz servisleri kullanılmaya başlanırsa, bu politika güncellenebilir ve ziyaretçilere gerekli bilgilendirme yapılabilir.

Güncel Çerez Politikası web sitesi üzerinden yayınlanır. Politikada yapılan değişiklikler, yayınlandığı tarihten itibaren geçerli olabilir.

---

## 9. İletişim

Çerez Politikası veya web sitemizde kullanılan teknolojiler hakkında soru sormak isterseniz bizimle iletişime geçebilirsiniz.

E-posta: [E-posta adresi buraya yazılacak]
WhatsApp / Telefon: [Telefon numarası buraya yazılacak]
Web sitesi: [Web sitesi adresi buraya yazılacak]

Çerezlerle ilgili taleplerinizi iletirken hangi konuda bilgi almak istediğinizi açık şekilde belirtmeniz sürecin daha sağlıklı ilerlemesine yardımcı olur.

---

# Çerez Banner’ında Kullanılabilecek Kısa Bilgilendirme Metni

Web sitemizde, sitenin düzgün çalışması için zorunlu çerezler kullanılabilir. Analitik veya reklam çerezleri kullanılması halinde tercihlerinizi yönetebilmeniz için ayrıca bilgilendirme ve seçim imkanı sunulabilir.

Buton önerileri:

* Kabul Et
* Reddet
* Tercihlerimi Yönet

Alternatif kısa metin:

Web sitemizde deneyiminizi iyileştirmek ve sitenin düzgün çalışmasını sağlamak için çerezler kullanılabilir. Zorunlu olmayan analitik veya reklam çerezleri kullanılması halinde tercihlerinizi dilediğiniz zaman yönetebilirsiniz.`,
  },
  "terms": {
    slug: "terms",
    title: "Kullanım ve Çalışma Koşulları",
    description: "Site içeriği, canlı örnekler, teklif süreci, proje kapsamı, hata düzeltme, ek istekler, teslim, bakım ve destek süreçleri hakkında çalışma koşulları.",
    content: `Bu metin, NT Web Çözümleri web sitesini ziyaret eden kişilere; site içeriği, canlı örnekler, teklif süreci, proje kapsamı, teslim, hata düzeltme, ek istekler, bakım ve destek süreçleri hakkında genel bilgilendirme yapmak amacıyla hazırlanmıştır.

NT Web Çözümleri web sitesi; bilgilendirme, iletişim ve teklif talebi amacıyla kullanılır. Web sitesi üzerinden doğrudan ödeme alınmaz.

Bu metin hukuki danışmanlık niteliği taşımaz. Gerekli görülmesi halinde profesyonel hukuk kontrolünden geçirilmesi önerilir.

---

## 1. Site İçeriğinin Bilgilendirme Amaçlı Olduğu

NT Web Çözümleri web sitesinde yer alan hizmet açıklamaları, örnek projeler, canlı örnekler, süreç anlatımları, sıkça sorulan sorular ve diğer içerikler genel bilgilendirme amacıyla sunulur.

Web sitesindeki bilgiler; web sitesi, admin panel, satış sistemi, entegrasyon, otomasyon ve özel yazılım ihtiyaçları hakkında fikir vermek için hazırlanmıştır.

Her projenin kapsamı, iş yükü, teknik gereksinimi ve teslim süreci farklı olabilir. Bu nedenle web sitesinde yer alan açıklamalar, her proje için birebir aynı kapsamın uygulanacağı anlamına gelmez.

Proje özelinde net kapsam ve teklif, müşteri ihtiyacı değerlendirildikten sonra oluşturulur.

---

## 2. Canlı Örnekler ve Demolar

Web sitesinde yer alan canlı örnekler, demo sayfalar, ekran görüntüleri veya proje anlatımları; hazırlanabilecek sistemler hakkında fikir vermek amacıyla sunulabilir.

Canlı örnekler:

* Temsilî çalışma olabilir
* Uyarlanabilir demo olabilir
* Belirli bir sektöre göre hazırlanmış örnek akış içerebilir
* Farklı projelerde değiştirilebilir yapı gösterebilir
* Gerçek proje kapsamını birebir temsil etmeyebilir

Bir demo veya canlı örnekte görülen her özellik, otomatik olarak tüm projelere dahil değildir. Hangi özelliklerin projeye dahil olacağı, teklif ve kapsam aşamasında ayrıca netleştirilir.

Müşteri, canlı örneklerden ilham alabilir; ancak nihai proje kapsamı, işletmenin ihtiyacına göre belirlenir.

---

## 3. Fiyat ve Teklif Bilgileri

NT Web Çözümleri’nde her proje için tek ve sabit fiyat yaklaşımı uygulanmaz.

Fiyatlandırma; projenin türüne, sayfa sayısına, tasarım ihtiyacına, admin panel gereksinimine, modül sayısına, entegrasyonlara, veri yapısına, teslim süresi beklentisine ve bakım ihtiyacına göre değişebilir.

Web sitesinde yer alan hizmet açıklamaları, fiyat garantisi veya kesin teklif anlamına gelmez.

Teklif hazırlanırken genel olarak şu başlıklar değerlendirilir:

* Hazırlanacak sayfa sayısı
* Tasarım beklentisi
* Admin panel ihtiyacı
* Ürün, stok, sipariş veya müşteri verisi
* Kullanıcı rolleri ve yetkilendirme
* API, XML, WhatsApp, SMS veya pazaryeri entegrasyonları
* Hosting, domain ve yayın süreci
* Teslim süresi beklentisi
* Teslim sonrası bakım ve destek ihtiyacı

Kesin teklif, proje kapsamı netleştikten sonra paylaşılır.

---

## 4. Kapsam Netleşmeden Kesin Teklif Verilmeyeceği

Bir projenin sağlıklı şekilde fiyatlandırılabilmesi için kapsamın netleşmesi gerekir.

Örneğin “web sitesi istiyorum” veya “satış sistemi yaptırmak istiyorum” ifadeleri tek başına yeterli olmayabilir. Bu taleplerin altında farklı sayfa sayıları, farklı modüller, farklı veri yapıları ve farklı iş akışları olabilir.

Kapsam netleşmeden kesin teklif verilmemesinin amacı belirsizliği azaltmak, yanlış anlaşılmaları önlemek ve müşteriye daha doğru bir süreç sunmaktır.

Kapsam belirlenirken şu sorular netleştirilebilir:

* Hangi sayfalar hazırlanacak?
* Admin panel olacak mı?
* Ürün veya hizmet yönetimi olacak mı?
* Sipariş, randevu veya başvuru akışı olacak mı?
* Kullanıcı girişi gerekecek mi?
* Dış sistemlerle entegrasyon yapılacak mı?
* İçerikler ve görseller hazır mı?
* Yayın süreci nasıl ilerleyecek?
* Teslim sonrası destek ihtiyacı olacak mı?

Kapsamı netleşebilen projelerde doğru çözüm planlanır.

---

## 5. Proje Başlangıcı

Proje başlangıcı için öncelikle müşteri ihtiyacı değerlendirilir, kapsam netleştirilir ve yapılacak işler yazılı şekilde belirlenir.

Proje başlangıcında şu bilgiler gerekebilir:

* İşletme veya proje açıklaması
* İstenilen sistemin amacı
* Hazırlanacak sayfalar
* Örnek alınan web siteleri veya sistemler
* Logo, renk, görsel ve içerik bilgileri
* Domain, hosting veya sunucu bilgileri
* Entegrasyon dokümanları veya erişimleri
* Teslim süresi beklentisi
* Özel istekler ve iş akışları

Proje başlamadan önce müşteri tarafından paylaşılan bilgilerin doğru, güncel ve kullanılabilir olması beklenir.

Eksik, hatalı veya geç iletilen bilgiler proje sürecini ve teslim tarihini etkileyebilir.

---

## 6. Anlaşılan Kapsam Doğrultusunda Düzenleme

Proje sürecinde ve teslim aşamasında, anlaşılan kapsam doğrultusunda düzenleme yapılabilir.

Bu ifade; proje başında belirlenen işin daha doğru, düzenli ve kullanılabilir hale getirilmesi için yapılan kapsam içi düzenlemeleri ifade eder.

Anlaşılan kapsam doğrultusunda düzenleme örnekleri:

* Mevcut metnin güncellenmesi
* Mevcut görselin değiştirilmesi
* Mevcut sayfadaki küçük hizalama düzenlemeleri
* Buton yazısının değiştirilmesi
* İletişim bilgilerinin güncellenmesi
* Mevcut form alanlarında küçük düzenlemeler
* Teslim edilen sayfanın anlaşılan yapıya uygun hale getirilmesi
* Mevcut bölümde içerik sıralamasının düzenlenmesi

Bu düzenlemeler, proje başında anlaşılan yapının dışına çıkmadığı sürece kapsam içinde değerlendirilebilir.

Anlaşılan kapsam doğrultusunda düzenleme, projeye sınırsız yeni özellik eklenmesi veya projenin tamamen farklı bir yöne taşınması anlamına gelmez.

---

## 7. Hata Düzeltme ve Ek İstek Ayrımı

Teslim edilen kapsamda hata varsa düzeltilir.

Hata; proje başında anlaşılan ve teslim edilen kapsam içinde yer alan bir özelliğin beklenen şekilde çalışmaması anlamına gelir.

Hata olarak değerlendirilebilecek örnekler:

* Anlaşılan sayfanın açılmaması
* Formun gönderim yapmaması
* Butonun yanlış yere yönlendirmesi
* Admin panelde kayıt işleminin çalışmaması
* Mevcut kapsam içindeki bir alanın hatalı görünmesi
* Mobil görünümde kapsam içi belirgin bozulma olması
* Teslim edilen özelliklerden birinin beklenen şekilde çalışmaması

Ek istek ise proje başında belirlenen kapsamın dışında kalan yeni taleplerdir.

Yeni kapsam olarak değerlendirilebilecek örnekler:

* Yeni sayfa eklenmesi
* Yeni özellik geliştirilmesi
* Yeni modül hazırlanması
* Yeni admin panel bölümü oluşturulması
* Yeni entegrasyon yapılması
* Farklı tasarım yönüne geçilmesi
* Mevcut sistemin iş akışının değiştirilmesi
* Yeni kullanıcı rolü veya yetkilendirme yapısı kurulması
* Kapsamlı veri aktarımı yapılması
* Yeni raporlama ekranı hazırlanması

Yeni istekler ayrıca değerlendirilir, kapsamı netleştirilir ve ayrı şekilde tekliflendirilir.

---

## 8. Teslim Süreci

Proje teslimi, anlaşılan kapsamda hazırlanan çalışmanın müşteriyle paylaşılması ve temel kontrollerin yapılması sürecidir.

Teslim sürecinde şu adımlar izlenebilir:

* Proje çıktısının paylaşılması
* Sayfaların ve temel işlevlerin kontrol edilmesi
* Admin panel varsa giriş bilgilerinin paylaşılması
* Kullanım için temel açıklamaların yapılması
* Form, buton ve yönlendirmelerin kontrol edilmesi
* Yayın ortamının değerlendirilmesi
* Yayına alma işleminin yapılması veya yayın için gerekli yönlendirmenin sağlanması
* Teslim sonrası destek veya bakım ihtiyacının değerlendirilmesi

Teslim süreci, projenin türüne göre değişebilir. Basit bir tanıtım sitesi ile admin panelli, veritabanlı veya entegrasyon içeren sistemlerin teslim süreci aynı değildir.

Müşterinin teslim sonrası kontrol sürecinde geri bildirimlerini net ve toplu şekilde iletmesi, sürecin daha sağlıklı ilerlemesine yardımcı olur.

---

## 9. Hosting, Domain, Lisans ve Üçüncü Taraf Servisler

Projenin yayında çalışabilmesi için domain, hosting, sunucu, SSL, e-posta, API, SMS, WhatsApp, ödeme altyapısı, pazaryeri veya farklı üçüncü taraf servisler gerekebilir.

Bu servisler müşteriye ait olabilir veya proje ihtiyacına göre ayrıca belirlenebilir.

Aşağıdaki giderler ve sorumluluklar proje kapsamına göre ayrıca değerlendirilir:

* Domain satın alma veya yenileme
* Hosting veya sunucu hizmeti
* SSL sertifikası
* E-posta hizmetleri
* Ücretli tema, eklenti, yazılım veya lisanslar
* SMS, WhatsApp, e-posta gönderim servisleri
* API kullanım ücretleri
* Pazaryeri veya dış servis abonelikleri
* Ödeme altyapısı hizmet bedelleri
* Üçüncü taraf platformların kullanım şartları

Üçüncü taraf servislerden kaynaklanan kesinti, kota, limit, kural değişikliği, API güncellemesi veya erişim problemi doğrudan yazılım hatası olarak değerlendirilmez.

Bu tür durumlarda teknik inceleme yapılabilir, çözüm yolu önerilebilir veya gerekiyorsa yeni kapsam oluşturulabilir.

---

## 10. Kaynak Kod, Erişim ve Yayın Bilgileri

Proje türüne göre kaynak kod, panel erişimi, sunucu erişimi, yönetici bilgileri veya yayın dosyaları farklı şekilde ele alınabilir.

Teslim edilecek erişim ve dosyalar, proje başlamadan önce belirlenen kapsama göre değişir.

Genel olarak şu başlıklar netleştirilmelidir:

* Admin panel erişimi verilecek mi?
* Yayın dosyaları teslim edilecek mi?
* Kaynak kod teslimi kapsamda mı?
* Sunucu veya hosting erişimi kimde olacak?
* Domain yönetimi kim tarafından yapılacak?
* Veritabanı erişimi gerekli mi?
* Üçüncü taraf servis erişimleri kim tarafından sağlanacak?

Kaynak kod teslimi, proje kapsamına ve anlaşmaya göre ayrıca değerlendirilir. Her projede otomatik olarak tüm kaynak kod, sunucu erişimi veya üçüncü taraf hesap erişimi teslim edileceği varsayılmamalıdır.

Müşteri tarafından sağlanan erişim bilgilerinin doğru, güncel ve güvenli şekilde paylaşılması gerekir.

---

## 11. Bakım ve Destek

Teslim sonrası bakım ve destek hizmetleri proje türüne göre planlanabilir.

Bakım ve destek kapsamında şu çalışmalar değerlendirilebilir:

* Küçük içerik güncellemeleri
* Teknik hata kontrolü
* Performans takibi
* Yedekleme kontrolü
* Güvenlik kontrolleri
* Admin panel kullanım desteği
* Entegrasyon takibi
* Yayın ortamı kontrolü
* Küçük teknik düzenlemeler
* Yeni ihtiyaçların analiz edilmesi

Bakım hizmeti, sistemi sınırsız şekilde değiştirme hizmeti değildir.

Yeni özellik, yeni sayfa, yeni modül, yeni entegrasyon, farklı tasarım yönü veya farklı iş akışı talepleri bakım kapsamında değil, yeni kapsam olarak değerlendirilir.

Bakım süresi, destek içeriği ve hizmet kapsamı proje türüne göre ayrıca belirlenebilir.

---

## 12. Fikri Mülkiyet ve İzinsiz Kopyalama

NT Web Çözümleri web sitesinde yer alan metinler, tasarım anlatımları, canlı örnekler, demo yapılar, görseller, süreç açıklamaları ve proje sunumları izinsiz şekilde kopyalanamaz, çoğaltılamaz veya farklı bir marka adına kullanılamaz.

Canlı örnekler ve demo çalışmalar, fikir vermek amacıyla paylaşılır. Bu içeriklerin izinsiz şekilde birebir kopyalanması veya üçüncü kişilere aitmiş gibi sunulması uygun değildir.

Müşteri tarafından sağlanan logo, metin, görsel, ürün bilgisi, marka materyali veya diğer içeriklerin kullanım hakkı ve doğruluğu müşterinin sorumluluğundadır.

Müşteri, proje için ilettiği içeriklerin kullanılabilir olduğunu ve üçüncü kişilerin haklarını ihlal etmediğini kabul eder.

---

## 13. Yasal Sorumluluklar ve Regülasyonlu Projeler

Bazı projeler sağlık, finans, sigorta, ödeme, kişisel veri, üyelik sistemi, e-ticaret, mesafeli satış, rezervasyon, stok, lojistik veya benzeri yasal ve operasyonel sorumluluklar içerebilir.

Bu tür projelerde teknik geliştirme yapılabilir; ancak yasal uygunluk, sektörel izinler, resmi yükümlülükler, kullanıcı sözleşmeleri, KVKK metinleri, açık rıza süreçleri, mesafeli satış metinleri, iade süreçleri, vergi ve fatura yükümlülükleri gibi konular müşterinin sorumluluğunda olabilir.

Regülasyonlu projelerde müşteri tarafından şu konuların netleştirilmesi beklenir:

* Hangi yasal metinlerin kullanılacağı
* Hangi izinlerin gerektiği
* Kullanıcıdan hangi onayların alınacağı
* Hangi verilerin toplanacağı
* Verilerin nasıl saklanacağı
* Operasyonel sürecin nasıl yürütüleceği
* Resmi kurum veya sektör kurallarının ne olduğu
* Hukuki kontrolün kim tarafından yapılacağı

NT Web Çözümleri teknik uygulama ve yazılım geliştirme tarafında destek sağlayabilir. Ancak hukuki, mali, operasyonel veya sektörel uygunluk için ilgili uzmanlardan destek alınması önerilir.

Müşteri, kendi iş modelinin yasal ve operasyonel gerekliliklerini kontrol etmekle sorumludur.

---

## 14. Web Sitesi Üzerinden Ödeme Alınmaması

NT Web Çözümleri web sitesi, bilgilendirme, iletişim ve teklif talebi amacıyla kullanılır.

Web sitesi üzerinden doğrudan ödeme alınmaz. Proje süreci, kapsam ve teklif detayları iletişim kanalları üzerinden değerlendirilir.

Web sitesinde yer alan hizmet açıklamaları, doğrudan satın alma veya otomatik sipariş oluşturma anlamına gelmez.

---

## 15. İletişim

Kullanım ve çalışma koşulları, proje süreci, teklif talebi, kapsam değerlendirmesi, teslim sonrası destek veya bakım hizmetleri hakkında bilgi almak için NT Web Çözümleri ile iletişime geçebilirsiniz.

E-posta: [E-posta adresi buraya yazılacak]
WhatsApp / Telefon: [Telefon numarası buraya yazılacak]
Web sitesi: [Web sitesi adresi buraya yazılacak]

İletişime geçerken projenizi kısaca anlatmanız, varsa örnek linkleri paylaşmanız ve ihtiyaç duyduğunuz özellikleri belirtmeniz sürecin daha sağlıklı ilerlemesine yardımcı olur.

---

## Kapanış

NT Web Çözümleri’nde amaç, projelerin net kapsam, açık iletişim ve kontrollü teslim süreciyle ilerlemesidir.

Anlaşılan kapsam doğrultusunda düzenleme yapılır, teslim edilen kapsamda hata varsa düzeltilir. Yeni istekler ise yeni kapsam olarak değerlendirilir ve ayrıca planlanır.

Bu yaklaşım, hem müşterinin ne alacağını net şekilde bilmesini hem de projenin sağlıklı, sürdürülebilir ve profesyonel şekilde ilerlemesini sağlar.`,
  },
};

export const enTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Frequently Asked Questions",
    description: "Common questions about NT Web Solutions websites, catalog systems, WhatsApp ordering, appointments, admin panels, integrations, custom software, maintenance, pricing, and delivery.",
    sections: [
      {
        heading: "How does a project start?",
        body: [
          "First, your need, goal, current situation, and expected outcome are clarified. Then the scope, screens, modules, integrations, and delivery path are defined.",
          "If you are not sure what you need, you can describe your business and the problem you want to solve. The right structure can be selected together.",
        ],
      },
      {
        heading: "Do you build every project from the same package?",
        body: [
          "No. Some projects can start from an adaptable structure, while others need custom data models, admin screens, integrations, or business-specific workflows.",
          "The aim is not to force every business into the same template, but to define a practical scope that fits the business.",
        ],
      },
      {
        heading: "Can I review a live example before deciding?",
        body: [
          "Yes. Live examples are used to show how similar systems can work. They are demo systems, not customer portfolio items.",
          "Completed customer projects are shown separately in the portfolio when sharing permission is available.",
        ],
      },
      {
        heading: "Will the website work on mobile?",
        body: [
          "Yes. Websites and panels are prepared to work properly on mobile, tablet, and desktop screens.",
          "If a workflow needs heavy data entry or table management, the most comfortable usage model is discussed during scope planning.",
        ],
      },
      {
        heading: "How is pricing defined?",
        body: [
          "Pricing depends on page count, design depth, admin panel needs, data structure, integrations, automation, delivery timeline, and support expectations.",
          "A clear price is shared after the scope is understood. New modules or different workflows after the initial scope are evaluated separately.",
        ],
      },
      {
        heading: "Do you provide support after delivery?",
        body: [
          "Yes. Maintenance, small technical fixes, content updates, new modules, and improvement work can be planned after delivery.",
          "Support scope is separate from unlimited redesign or unlimited new feature development.",
        ],
      },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Scope and Pricing",
    description: "How project scope, price, delivery expectations, revisions, and extra requests are clarified before starting work.",
    sections: [
      { heading: "Scope comes before price", body: ["A healthy quote starts with scope. Pages, modules, forms, admin needs, integrations, content, delivery expectations, and support needs are reviewed before pricing.", "This prevents unclear expectations and makes the project easier to manage."] },
      { heading: "What affects price?", body: ["Page count, custom design level, content preparation, data model, admin panel complexity, API/XML integrations, automation, reporting, roles, and delivery speed can affect the price.", "A simple presentation site and an operations panel are not priced in the same way."] },
      { heading: "What counts as extra work?", body: ["New pages, new modules, new integrations, different design direction, major workflow changes, data migration, and new user roles are evaluated as new scope when they are not included at the start.", "Extra requests are clarified and quoted separately before development."] },
      { heading: "Why clear scope matters", body: ["Clear scope protects both sides. The customer knows what will be delivered, and the development process can move with fewer surprises.", "The goal is a professional and sustainable delivery process, not a vague promise."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Maintenance Packages",
    description: "Post-delivery maintenance, technical checks, updates, small fixes, monitoring, and improvement planning for delivered websites and systems.",
    sections: [
      { heading: "What maintenance can include", body: ["Maintenance can include small content updates, technical checks, uptime and form checks, performance review, backup review, security-oriented checks, and minor technical improvements.", "The exact scope is defined according to the project type."] },
      { heading: "What maintenance does not mean", body: ["Maintenance is not unlimited new feature development, unlimited redesign, or building a completely different workflow.", "New pages, new modules, integrations, and large structural changes are planned as new development scope."] },
      { heading: "Who needs maintenance?", body: ["Active websites, catalogs, e-commerce flows, admin panels, and integration-based systems benefit from regular maintenance.", "Regular checks help catch problems earlier and keep the system healthier over time."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Post-Delivery Support",
    description: "How support requests, bug fixes, content changes, new requirements, and improvement work are handled after delivery.",
    sections: [
      { heading: "Support after delivery", body: ["After delivery, support can be provided for questions, small technical fixes, usage explanations, content updates, and improvement planning.", "The type and duration of support depend on the project scope and agreement."] },
      { heading: "Bug fix versus new request", body: ["A bug is something included in the agreed scope that does not work as expected. A new request is a page, feature, module, integration, or workflow that was not included in the original scope.", "This distinction keeps the process fair and clear."] },
      { heading: "How to request support", body: ["Describe the issue clearly, include the page or screen, explain what you expected, and share a screenshot if possible.", "Clear information helps the support process move faster."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Safe Work Through Bionluk",
    description: "A clear note about using Bionluk as a trust layer for order, communication, scope confirmation, and delivery security when preferred.",
    sections: [
      { heading: "Why Bionluk can be used", body: ["Bionluk can be used as a safe work channel when the customer wants platform-based order tracking and a familiar purchase flow.", "It is optional; direct communication can also be used depending on the project."] },
      { heading: "Scope should still be clear", body: ["Whether work continues through Bionluk or directly, the scope must be clarified before starting.", "Pages, modules, delivery expectations, revisions, and extra work boundaries should be written clearly."] },
      { heading: "Live examples and portfolio are separate", body: ["Live examples are adaptable demo systems. Portfolio items are completed customer projects shown according to permission.", "This distinction is kept clear so the customer understands what they are viewing."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Work Process",
    description: "The step-by-step process for understanding the need, defining scope, preparing the system, sharing previews, delivery, launch, and post-delivery support.",
    sections: [
      { heading: "1. Need is clarified", body: ["The business type, target, current situation, requested pages or modules, examples, and technical needs are collected.", "If the customer is unsure, the first step is to identify the right starting point."] },
      { heading: "2. Scope is defined", body: ["Screens, pages, forms, admin areas, integrations, content responsibilities, delivery expectations, and support needs are written clearly.", "Unclear points are discussed before development starts."] },
      { heading: "3. Development begins", body: ["The system is prepared according to the agreed scope. Content, visual order, responsive behavior, and technical flows are developed together.", "For suitable projects, progress can be shared through preview links or staged checks."] },
      { heading: "4. Review and delivery", body: ["The prepared work is reviewed, core flows are checked, and scope-based revisions are handled.", "After approval, the site or system is prepared for launch or handover."] },
      { heading: "5. Support and improvements", body: ["After delivery, maintenance, support, new modules, or additional improvements can be planned separately.", "The goal is to keep the system sustainable rather than leave it unmanaged after launch."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "KVKK Information",
    description: "General information about personal data responsibility, customer-provided content, forms, technical infrastructure, and legal review needs.",
    sections: [
      { heading: "General note", body: ["This page is an informational note about data responsibility and does not replace legal advice.", "The final legal texts, consents, and compliance decisions should be reviewed by the customer and relevant experts."] },
      { heading: "Technical role", body: ["Forms, data fields, admin screens, storage flows, and notification mechanisms can be technically prepared according to the agreed scope.", "Which data is collected and which legal basis is used must be clarified by the customer."] },
      { heading: "Customer responsibility", body: ["The customer is responsible for the accuracy, legality, and usage rights of the content, data, images, user texts, and business processes they provide.", "Regulated sectors should receive separate legal or professional review."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Privacy Policy",
    description: "General privacy information for contact forms, communication requests, project evaluation, and customer-provided information.",
    sections: [
      { heading: "Information collected", body: ["When you contact NT Web Solutions, your name, company, email, phone, project type, and message may be collected to respond to your request.", "This information is used to evaluate the project and communicate with you."] },
      { heading: "How information is used", body: ["Submitted information is used for communication, project scope evaluation, offer preparation, support, and follow-up related to your request.", "It is not used to create unrelated automatic purchases or hidden subscriptions."] },
      { heading: "Third-party services", body: ["Email, WhatsApp, form providers, hosting, analytics, or other technical services may be used depending on the website setup.", "Each third-party service may have its own privacy and data handling rules."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Cookie Policy",
    description: "General information about cookies, technical storage, analytics, preferences, and third-party services that may be used on the website.",
    sections: [
      { heading: "What cookies are", body: ["Cookies are small storage items used by websites for technical operation, preferences, analytics, or service integrations.", "The exact cookie usage may change depending on the active tools and integrations on the site."] },
      { heading: "Possible cookie types", body: ["Necessary cookies may support core website functions. Analytics or performance cookies may help understand page usage. Third-party tools may set their own cookies.", "You can manage cookies through your browser settings."] },
      { heading: "No direct payment on this site", body: ["The NT Web Solutions website is used for information and quote requests. It does not directly collect payments through the website.", "If third-party tools are added later, their cookie behavior should be reviewed separately."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Working Terms",
    description: "General working terms for project scope, delivery, revisions, support, third-party services, customer responsibilities, and extra requests.",
    sections: [
      { heading: "Scope and delivery", body: ["Work is delivered according to the agreed scope. Pages, modules, admin screens, integrations, and support expectations should be clarified before starting.", "Delivery timing depends on project size, content readiness, technical complexity, and customer feedback speed."] },
      { heading: "Revisions and changes", body: ["Scope-based revisions can be handled to make the delivered work match the agreed structure.", "New pages, new features, new modules, different workflows, and major redesign requests are evaluated as new scope."] },
      { heading: "Third-party services", body: ["Domain, hosting, email, payment, SMS, WhatsApp, APIs, marketplaces, licenses, and other external services may have their own costs and rules.", "Interruptions, limits, pricing changes, or policy changes from third-party services are not treated as direct software bugs."] },
      { heading: "Legal and regulated work", body: ["Technical infrastructure can be developed, but legal, tax, medical, financial, sector-specific, and official compliance decisions should be reviewed by the relevant experts.", "The customer is responsible for checking their own business model’s legal and operational requirements."] },
    ],
  },
};

export const deTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Häufig gestellte Fragen",
    description: "Häufige Fragen zu Websites, Katalogsystemen, WhatsApp-Bestellungen, Terminen, Admin-Panels, Integrationen, individueller Software, Wartung, Preisen und Lieferung.",
    sections: [
      { heading: "Wie startet ein Projekt?", body: ["Zuerst werden Bedarf, Ziel, aktueller Stand und erwartetes Ergebnis geklärt. Danach werden Umfang, Seiten, Module, Integrationen und Lieferweg definiert.", "Wenn Sie noch nicht sicher sind, reicht eine kurze Beschreibung Ihres Unternehmens und des Problems. Die passende Struktur kann gemeinsam ausgewählt werden."] },
      { heading: "Wird jedes Projekt aus demselben Paket gebaut?", body: ["Nein. Manche Projekte starten mit einer anpassbaren Struktur, andere brauchen eigene Datenmodelle, Admin-Bereiche, Integrationen oder spezielle Workflows.", "Ziel ist nicht eine starre Vorlage, sondern ein sinnvoller Umfang für das jeweilige Unternehmen."] },
      { heading: "Kann ich vorab ein Live-Beispiel ansehen?", body: ["Ja. Live-Beispiele zeigen, wie ähnliche Systeme funktionieren können. Sie sind Demo-Systeme und keine Kundenreferenzen.", "Abgeschlossene Kundenprojekte werden separat im Portfolio gezeigt, wenn eine Freigabe vorhanden ist."] },
      { heading: "Funktioniert die Website mobil?", body: ["Ja. Websites und Panels werden für Mobilgeräte, Tablets und Desktop vorbereitet.", "Wenn ein Ablauf viel Dateneingabe oder Tabellenarbeit erfordert, wird das bequemste Nutzungsmodell im Umfangsgespräch geklärt."] },
      { heading: "Wie wird der Preis festgelegt?", body: ["Der Preis hängt von Seitenanzahl, Designtiefe, Admin-Panel, Datenstruktur, Integrationen, Automatisierung, Zeitplan und Support ab.", "Ein klarer Preis wird nach Verständnis des Umfangs geteilt. Neue Module oder andere Abläufe werden separat bewertet."] },
      { heading: "Gibt es Support nach der Übergabe?", body: ["Ja. Wartung, kleinere technische Korrekturen, Inhaltsupdates, neue Module und Verbesserungen können nach der Übergabe geplant werden.", "Support bedeutet nicht unbegrenztes Redesign oder unbegrenzte Neuentwicklung."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Umfang und Preisgestaltung",
    description: "Wie Projektumfang, Preis, Liefererwartungen, Revisionen und Zusatzwünsche vor Arbeitsbeginn geklärt werden.",
    sections: [
      { heading: "Umfang kommt vor dem Preis", body: ["Ein gesundes Angebot beginnt mit dem Umfang. Seiten, Module, Formulare, Admin-Bedarf, Integrationen, Inhalte, Lieferung und Support werden vor der Preisfindung geprüft.", "So werden unklare Erwartungen reduziert und das Projekt bleibt leichter steuerbar."] },
      { heading: "Was beeinflusst den Preis?", body: ["Seitenanzahl, individuelles Design, Inhaltserstellung, Datenmodell, Admin-Komplexität, API/XML-Integrationen, Automatisierung, Reporting, Rollen und Liefergeschwindigkeit können den Preis beeinflussen.", "Eine einfache Präsentationsseite und ein Operationspanel werden nicht gleich bewertet."] },
      { heading: "Was gilt als Zusatzarbeit?", body: ["Neue Seiten, Module, Integrationen, andere Designrichtung, große Workflow-Änderungen, Datenmigration und neue Nutzerrollen gelten als neuer Umfang, wenn sie nicht von Anfang an enthalten sind.", "Zusatzwünsche werden vor der Entwicklung geklärt und separat angeboten."] },
      { heading: "Warum klarer Umfang wichtig ist", body: ["Klarer Umfang schützt beide Seiten. Der Kunde weiß, was geliefert wird, und die Entwicklung läuft mit weniger Überraschungen.", "Ziel ist ein professioneller und nachhaltiger Lieferprozess."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Wartungspakete",
    description: "Wartung nach der Übergabe, technische Checks, Updates, kleine Korrekturen, Monitoring und Verbesserungsplanung.",
    sections: [
      { heading: "Was Wartung enthalten kann", body: ["Wartung kann kleine Inhaltsupdates, technische Kontrollen, Formular- und Erreichbarkeitschecks, Performance-Prüfung, Backup-Prüfung, sicherheitsorientierte Checks und kleine technische Verbesserungen umfassen.", "Der genaue Umfang wird je nach Projekttyp definiert."] },
      { heading: "Was Wartung nicht bedeutet", body: ["Wartung ist keine unbegrenzte Entwicklung neuer Funktionen, kein unbegrenztes Redesign und kein komplett neuer Workflow.", "Neue Seiten, Module, Integrationen und große Strukturänderungen werden als neuer Entwicklungsumfang geplant."] },
      { heading: "Wer braucht Wartung?", body: ["Aktive Websites, Kataloge, E-Commerce-Abläufe, Admin-Panels und integrationsbasierte Systeme profitieren von regelmäßiger Wartung.", "Regelmäßige Checks helfen, Probleme früher zu erkennen und das System gesund zu halten."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Support nach der Übergabe",
    description: "Wie Supportanfragen, Fehlerkorrekturen, Inhaltsänderungen, neue Anforderungen und Verbesserungen nach der Lieferung behandelt werden.",
    sections: [
      { heading: "Support nach Lieferung", body: ["Nach der Übergabe kann Support für Fragen, kleine technische Korrekturen, Nutzungserklärungen, Inhaltsupdates und Verbesserungsplanung bereitgestellt werden.", "Art und Dauer des Supports hängen vom Projektumfang und der Vereinbarung ab."] },
      { heading: "Fehlerkorrektur oder neuer Wunsch", body: ["Ein Fehler ist etwas, das im vereinbarten Umfang enthalten ist und nicht wie erwartet funktioniert. Ein neuer Wunsch ist eine Seite, Funktion, Integration oder ein Workflow außerhalb des ursprünglichen Umfangs.", "Diese Unterscheidung hält den Prozess fair und klar."] },
      { heading: "Wie Support angefragt wird", body: ["Beschreiben Sie das Problem klar, nennen Sie die Seite oder den Bildschirm, erklären Sie die Erwartung und senden Sie wenn möglich einen Screenshot.", "Klare Informationen beschleunigen den Supportprozess."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Sichere Zusammenarbeit über Bionluk",
    description: "Hinweis zur Nutzung von Bionluk als Vertrauensebene für Auftrag, Kommunikation, Umfangsbestätigung und Lieferung.",
    sections: [
      { heading: "Warum Bionluk genutzt werden kann", body: ["Bionluk kann genutzt werden, wenn der Kunde plattformbasiertes Auftragsmanagement und einen bekannten Kaufablauf bevorzugt.", "Die Nutzung ist optional; je nach Projekt kann auch direkte Kommunikation gewählt werden."] },
      { heading: "Der Umfang muss trotzdem klar sein", body: ["Ob über Bionluk oder direkt gearbeitet wird: Der Umfang muss vor Beginn geklärt sein.", "Seiten, Module, Liefererwartungen, Revisionen und Grenzen für Zusatzarbeit sollten klar geschrieben werden."] },
      { heading: "Live-Beispiele und Portfolio sind getrennt", body: ["Live-Beispiele sind anpassbare Demo-Systeme. Portfolio-Einträge sind abgeschlossene Kundenprojekte und werden je nach Freigabe gezeigt.", "Diese Trennung bleibt klar, damit Besucher verstehen, was sie ansehen."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Arbeitsprozess",
    description: "Der Schritt-für-Schritt-Prozess für Bedarfsklärung, Umfang, Entwicklung, Vorschau, Lieferung, Launch und Support.",
    sections: [
      { heading: "1. Bedarf wird geklärt", body: ["Unternehmenstyp, Ziel, aktueller Stand, gewünschte Seiten oder Module, Beispiele und technische Anforderungen werden gesammelt.", "Wenn der Kunde unsicher ist, wird zuerst der richtige Startpunkt bestimmt."] },
      { heading: "2. Umfang wird definiert", body: ["Screens, Seiten, Formulare, Admin-Bereiche, Integrationen, Inhaltsverantwortung, Lieferung und Support werden klar geschrieben.", "Unklare Punkte werden vor Entwicklungsbeginn besprochen."] },
      { heading: "3. Entwicklung beginnt", body: ["Das System wird nach dem vereinbarten Umfang vorbereitet. Inhalte, visuelle Ordnung, responsives Verhalten und technische Abläufe werden gemeinsam entwickelt.", "Bei passenden Projekten kann der Fortschritt über Vorschau-Links oder Zwischenprüfungen geteilt werden."] },
      { heading: "4. Prüfung und Lieferung", body: ["Die Arbeit wird geprüft, Kernabläufe werden getestet und umfangsbasierte Revisionen werden umgesetzt.", "Nach Freigabe wird die Website oder das System für Launch oder Übergabe vorbereitet."] },
      { heading: "5. Support und Verbesserungen", body: ["Nach der Lieferung können Wartung, Support, neue Module oder zusätzliche Verbesserungen separat geplant werden.", "Ziel ist ein nachhaltiges System statt eines unbetreuten Zustands nach dem Launch."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "KVKK-Information",
    description: "Allgemeine Informationen zu Verantwortung für personenbezogene Daten, Kundeninhalten, Formularen, technischer Infrastruktur und rechtlicher Prüfung.",
    sections: [
      { heading: "Allgemeiner Hinweis", body: ["Diese Seite ist ein informativer Hinweis zur Datenverantwortung und ersetzt keine Rechtsberatung.", "Endgültige Rechtstexte, Einwilligungen und Compliance-Entscheidungen sollten vom Kunden und relevanten Fachleuten geprüft werden."] },
      { heading: "Technische Rolle", body: ["Formulare, Datenfelder, Admin-Screens, Speicherabläufe und Benachrichtigungen können technisch nach vereinbartem Umfang vorbereitet werden.", "Welche Daten erhoben werden und welche Rechtsgrundlage gilt, muss vom Kunden geklärt werden."] },
      { heading: "Kundenverantwortung", body: ["Der Kunde ist für Richtigkeit, Rechtmäßigkeit und Nutzungsrechte der gelieferten Inhalte, Daten, Bilder, Texte und Geschäftsprozesse verantwortlich.", "Regulierte Branchen sollten eine separate rechtliche oder fachliche Prüfung einholen."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Datenschutzerklärung",
    description: "Allgemeine Datenschutzinformationen zu Kontaktformularen, Kommunikationsanfragen, Projektbewertung und vom Kunden bereitgestellten Informationen.",
    sections: [
      { heading: "Erhobene Informationen", body: ["Wenn Sie NT Web Solutions kontaktieren, können Name, Unternehmen, E-Mail, Telefon, Projekttyp und Nachricht erhoben werden, um Ihre Anfrage zu beantworten.", "Diese Informationen werden zur Projektbewertung und Kommunikation verwendet."] },
      { heading: "Wie Informationen genutzt werden", body: ["Übermittelte Informationen werden für Kommunikation, Umfangsbewertung, Angebotserstellung, Support und Nachverfolgung Ihrer Anfrage genutzt.", "Sie werden nicht für versteckte automatische Käufe oder unerwünschte Abonnements verwendet."] },
      { heading: "Drittanbieter", body: ["Je nach Website-Setup können E-Mail, WhatsApp, Formularanbieter, Hosting, Analytics oder andere technische Dienste genutzt werden.", "Jeder Drittanbieter kann eigene Datenschutz- und Datenverarbeitungsregeln haben."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Cookie-Richtlinie",
    description: "Allgemeine Informationen zu Cookies, technischer Speicherung, Analytics, Präferenzen und Drittanbieterdiensten.",
    sections: [
      { heading: "Was Cookies sind", body: ["Cookies sind kleine Speicherelemente, die Websites für technischen Betrieb, Präferenzen, Analytics oder Service-Integrationen nutzen.", "Die genaue Cookie-Nutzung kann sich je nach aktiven Tools und Integrationen ändern."] },
      { heading: "Mögliche Cookie-Arten", body: ["Notwendige Cookies können Kernfunktionen unterstützen. Analytics- oder Performance-Cookies können helfen, die Seitennutzung zu verstehen. Drittanbieter können eigene Cookies setzen.", "Sie können Cookies über Ihre Browsereinstellungen verwalten."] },
      { heading: "Keine direkte Zahlung auf dieser Website", body: ["Die Website von NT Web Solutions dient Information und Angebotsanfragen. Sie nimmt keine direkten Zahlungen über die Website entgegen.", "Wenn später Drittanbieter-Tools ergänzt werden, sollte deren Cookie-Verhalten separat geprüft werden."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Arbeitsbedingungen",
    description: "Allgemeine Arbeitsbedingungen zu Projektumfang, Lieferung, Revisionen, Support, Drittanbietern, Kundenverantwortung und Zusatzwünschen.",
    sections: [
      { heading: "Umfang und Lieferung", body: ["Arbeit wird nach vereinbartem Umfang geliefert. Seiten, Module, Admin-Screens, Integrationen und Supporterwartungen sollten vor Beginn geklärt werden.", "Die Lieferzeit hängt von Projektgröße, Inhaltsbereitschaft, technischer Komplexität und Feedbackgeschwindigkeit ab."] },
      { heading: "Revisionen und Änderungen", body: ["Umfangsbasierte Revisionen können umgesetzt werden, damit die Lieferung zur vereinbarten Struktur passt.", "Neue Seiten, neue Funktionen, Module, andere Workflows und große Redesign-Wünsche werden als neuer Umfang bewertet."] },
      { heading: "Drittanbieter", body: ["Domain, Hosting, E-Mail, Zahlung, SMS, WhatsApp, APIs, Marktplätze, Lizenzen und externe Dienste können eigene Kosten und Regeln haben.", "Ausfälle, Limits, Preisänderungen oder Richtlinienänderungen von Drittanbietern gelten nicht als direkte Softwarefehler."] },
      { heading: "Rechtliche und regulierte Arbeit", body: ["Technische Infrastruktur kann entwickelt werden, aber rechtliche, steuerliche, medizinische, finanzielle, branchenspezifische und behördliche Compliance-Entscheidungen sollten von zuständigen Fachleuten geprüft werden.", "Der Kunde ist dafür verantwortlich, die rechtlichen und operativen Anforderungen seines Geschäftsmodells zu prüfen."] },
    ],
  },
};

export const frTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Questions fréquentes",
    description: "Questions fréquentes sur les sites web, catalogues, commandes WhatsApp, rendez-vous, panneaux d'administration, intégrations, logiciels sur mesure, maintenance, prix et livraison.",
    sections: [
      { heading: "Comment démarre un projet ?", body: ["Nous clarifions d'abord le besoin, l'objectif, la situation actuelle et le résultat attendu. Ensuite, le périmètre, les pages, les modules, les intégrations et le mode de livraison sont définis.", "Si vous n'êtes pas sûr de ce qu'il vous faut, une courte description de votre entreprise et du problème à résoudre suffit pour choisir la bonne structure ensemble."] },
      { heading: "Chaque projet part-il du même forfait ?", body: ["Non. Certains projets peuvent démarrer depuis une structure adaptable, tandis que d'autres nécessitent des modèles de données, écrans d'administration, intégrations ou workflows spécifiques.", "L'objectif n'est pas d'imposer le même modèle à chaque entreprise, mais de définir un périmètre pratique adapté au besoin."] },
      { heading: "Puis-je voir un exemple en direct avant de décider ?", body: ["Oui. Les exemples en direct montrent comment des systèmes similaires peuvent fonctionner. Ce sont des systèmes de démonstration, pas des éléments de portfolio client.", "Les projets client terminés sont présentés séparément dans le portfolio lorsque l'autorisation de partage existe."] },
      { heading: "Le site fonctionnera-t-il sur mobile ?", body: ["Oui. Les sites et panneaux sont préparés pour fonctionner correctement sur mobile, tablette et ordinateur.", "Si un workflow demande beaucoup de saisie ou de gestion de tableaux, le modèle d'utilisation le plus confortable est discuté pendant la définition du périmètre."] },
      { heading: "Comment le prix est-il défini ?", body: ["Le prix dépend du nombre de pages, du niveau de design, du besoin de panneau d'administration, de la structure de données, des intégrations, de l'automatisation, du délai et du support attendu.", "Un prix clair est partagé après compréhension du périmètre. Les nouveaux modules ou workflows différents sont évalués séparément."] },
      { heading: "Proposez-vous du support après livraison ?", body: ["Oui. Maintenance, petites corrections techniques, mises à jour de contenu, nouveaux modules et améliorations peuvent être planifiés après la livraison.", "Le support ne signifie pas refonte illimitée ou développement illimité de nouvelles fonctionnalités."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Périmètre et tarification",
    description: "Comment le périmètre, le prix, les attentes de livraison, les révisions et les demandes supplémentaires sont clarifiés avant le démarrage.",
    sections: [
      { heading: "Le périmètre vient avant le prix", body: ["Un devis sain commence par le périmètre. Pages, modules, formulaires, besoin d'administration, intégrations, contenus, livraison et support sont examinés avant la tarification.", "Cela réduit les attentes floues et rend le projet plus facile à gérer."] },
      { heading: "Qu'est-ce qui influence le prix ?", body: ["Nombre de pages, design sur mesure, préparation de contenu, modèle de données, complexité du panneau, intégrations API/XML, automatisation, reporting, rôles et vitesse de livraison peuvent influencer le prix.", "Un simple site de présentation et un panneau opérationnel ne sont pas tarifés de la même manière."] },
      { heading: "Qu'est-ce qu'un travail supplémentaire ?", body: ["Nouvelles pages, nouveaux modules, nouvelles intégrations, changement de direction design, grands changements de workflow, migration de données et nouveaux rôles utilisateurs sont un nouveau périmètre s'ils n'étaient pas inclus au départ.", "Les demandes supplémentaires sont clarifiées et chiffrées séparément avant le développement."] },
      { heading: "Pourquoi un périmètre clair compte", body: ["Un périmètre clair protège les deux côtés. Le client sait ce qui sera livré et le développement avance avec moins de surprises.", "L'objectif est une livraison professionnelle et durable, pas une promesse vague."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Forfaits de maintenance",
    description: "Maintenance après livraison, contrôles techniques, mises à jour, petites corrections, suivi et planification d'améliorations pour les sites et systèmes livrés.",
    sections: [
      { heading: "Ce que la maintenance peut inclure", body: ["La maintenance peut inclure petites mises à jour de contenu, contrôles techniques, vérification des formulaires, revue de performance, contrôle des sauvegardes, vérifications orientées sécurité et petites améliorations techniques.", "Le périmètre exact est défini selon le type de projet."] },
      { heading: "Ce que la maintenance ne signifie pas", body: ["La maintenance n'est pas un développement illimité de nouvelles fonctionnalités, une refonte illimitée ou la construction d'un workflow totalement différent.", "Nouvelles pages, nouveaux modules, intégrations et grands changements structurels sont planifiés comme nouveau développement."] },
      { heading: "Qui a besoin de maintenance ?", body: ["Les sites actifs, catalogues, parcours e-commerce, panneaux d'administration et systèmes basés sur des intégrations bénéficient d'une maintenance régulière.", "Des contrôles réguliers aident à repérer les problèmes plus tôt et à garder le système plus sain."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Support après livraison",
    description: "Comment les demandes de support, corrections, changements de contenu, nouveaux besoins et améliorations sont traités après la livraison.",
    sections: [
      { heading: "Support après livraison", body: ["Après la livraison, un support peut être fourni pour les questions, petites corrections techniques, explications d'usage, mises à jour de contenu et planification d'améliorations.", "Le type et la durée du support dépendent du périmètre du projet et de l'accord."] },
      { heading: "Correction de bug ou nouvelle demande", body: ["Un bug est un élément inclus dans le périmètre convenu qui ne fonctionne pas comme prévu. Une nouvelle demande est une page, fonctionnalité, module, intégration ou workflow non inclus au départ.", "Cette distinction garde le processus juste et clair."] },
      { heading: "Comment demander du support", body: ["Décrivez le problème clairement, indiquez la page ou l'écran, expliquez ce que vous attendiez et partagez une capture si possible.", "Des informations claires accélèrent le processus de support."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Collaboration sécurisée via Bionluk",
    description: "Note claire sur l'utilisation de Bionluk comme couche de confiance pour la commande, la communication, la confirmation du périmètre et la sécurité de livraison.",
    sections: [
      { heading: "Pourquoi Bionluk peut être utilisé", body: ["Bionluk peut être utilisé lorsque le client préfère un suivi de commande basé sur une plateforme et un parcours d'achat familier.", "Son utilisation est optionnelle ; une communication directe peut aussi être choisie selon le projet."] },
      { heading: "Le périmètre doit rester clair", body: ["Que le travail passe par Bionluk ou directement, le périmètre doit être clarifié avant de commencer.", "Pages, modules, attentes de livraison, révisions et limites des travaux supplémentaires doivent être écrits clairement."] },
      { heading: "Exemples en direct et portfolio sont séparés", body: ["Les exemples en direct sont des systèmes de démonstration adaptables. Les éléments de portfolio sont des projets client terminés affichés selon l'autorisation.", "Cette distinction reste claire pour que le visiteur comprenne ce qu'il regarde."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Processus de travail",
    description: "Le processus étape par étape pour comprendre le besoin, définir le périmètre, préparer le système, partager les aperçus, livrer, mettre en ligne et assurer le support.",
    sections: [
      { heading: "1. Le besoin est clarifié", body: ["Type d'entreprise, objectif, situation actuelle, pages ou modules demandés, exemples et besoins techniques sont collectés.", "Si le client hésite, la première étape consiste à identifier le bon point de départ."] },
      { heading: "2. Le périmètre est défini", body: ["Écrans, pages, formulaires, zones d'administration, intégrations, responsabilités de contenu, livraison et support sont écrits clairement.", "Les points flous sont discutés avant le développement."] },
      { heading: "3. Le développement commence", body: ["Le système est préparé selon le périmètre convenu. Contenu, ordre visuel, comportement responsive et flux techniques sont développés ensemble.", "Pour les projets adaptés, l'avancement peut être partagé via des liens d'aperçu ou des contrôles intermédiaires."] },
      { heading: "4. Revue et livraison", body: ["Le travail préparé est revu, les flux principaux sont contrôlés et les révisions liées au périmètre sont traitées.", "Après validation, le site ou le système est préparé pour la mise en ligne ou la remise."] },
      { heading: "5. Support et améliorations", body: ["Après la livraison, maintenance, support, nouveaux modules ou améliorations peuvent être planifiés séparément.", "L'objectif est de garder le système durable plutôt que de le laisser sans gestion après lancement."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "Information KVKK",
    description: "Informations générales sur la responsabilité des données personnelles, les contenus fournis par le client, les formulaires, l'infrastructure technique et le besoin de contrôle juridique.",
    sections: [
      { heading: "Note générale", body: ["Cette page est une note informative sur la responsabilité des données et ne remplace pas un conseil juridique.", "Les textes juridiques finaux, consentements et décisions de conformité doivent être vérifiés par le client et les experts concernés."] },
      { heading: "Rôle technique", body: ["Formulaires, champs de données, écrans d'administration, flux de stockage et notifications peuvent être préparés techniquement selon le périmètre convenu.", "Les données collectées et la base légale utilisée doivent être clarifiées par le client."] },
      { heading: "Responsabilité du client", body: ["Le client est responsable de l'exactitude, de la légalité et des droits d'utilisation des contenus, données, images, textes et processus fournis.", "Les secteurs réglementés doivent obtenir un contrôle juridique ou professionnel séparé."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Politique de confidentialité",
    description: "Informations générales de confidentialité pour les formulaires de contact, demandes de communication, évaluation de projet et informations fournies par le client.",
    sections: [
      { heading: "Informations collectées", body: ["Lorsque vous contactez NT Web Solutions, votre nom, entreprise, e-mail, téléphone, type de projet et message peuvent être collectés pour répondre à votre demande.", "Ces informations servent à évaluer le projet et communiquer avec vous."] },
      { heading: "Utilisation des informations", body: ["Les informations envoyées sont utilisées pour la communication, l'évaluation du périmètre, la préparation d'offre, le support et le suivi lié à votre demande.", "Elles ne servent pas à créer des achats automatiques cachés ou des abonnements non liés."] },
      { heading: "Services tiers", body: ["E-mail, WhatsApp, fournisseurs de formulaires, hébergement, analytics ou autres services techniques peuvent être utilisés selon la configuration du site.", "Chaque service tiers peut avoir ses propres règles de confidentialité et de traitement des données."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Politique relative aux cookies",
    description: "Informations générales sur les cookies, le stockage technique, l'analytics, les préférences et les services tiers pouvant être utilisés sur le site.",
    sections: [
      { heading: "Ce que sont les cookies", body: ["Les cookies sont de petits éléments de stockage utilisés par les sites pour le fonctionnement technique, les préférences, l'analytics ou les intégrations de service.", "L'utilisation exacte des cookies peut changer selon les outils et intégrations actifs sur le site."] },
      { heading: "Types de cookies possibles", body: ["Les cookies nécessaires peuvent soutenir les fonctions principales du site. Les cookies analytics ou performance peuvent aider à comprendre l'utilisation des pages. Les outils tiers peuvent définir leurs propres cookies.", "Vous pouvez gérer les cookies dans les paramètres de votre navigateur."] },
      { heading: "Pas de paiement direct sur ce site", body: ["Le site NT Web Solutions sert à l'information et aux demandes de devis. Il ne collecte pas directement de paiements via le site.", "Si des outils tiers sont ajoutés plus tard, leur comportement de cookies devra être vérifié séparément."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Conditions de travail",
    description: "Conditions générales concernant le périmètre du projet, la livraison, les révisions, le support, les services tiers, les responsabilités client et les demandes supplémentaires.",
    sections: [
      { heading: "Périmètre et livraison", body: ["Le travail est livré selon le périmètre convenu. Pages, modules, écrans d'administration, intégrations et attentes de support doivent être clarifiés avant le démarrage.", "Le délai dépend de la taille du projet, de la disponibilité du contenu, de la complexité technique et de la rapidité des retours client."] },
      { heading: "Révisions et changements", body: ["Les révisions liées au périmètre peuvent être traitées pour faire correspondre le travail livré à la structure convenue.", "Nouvelles pages, nouvelles fonctionnalités, nouveaux modules, workflows différents et grandes demandes de redesign sont évalués comme nouveau périmètre."] },
      { heading: "Services tiers", body: ["Domain, hébergement, e-mail, paiement, SMS, WhatsApp, API, marketplaces, licences et autres services externes peuvent avoir leurs propres coûts et règles.", "Interruptions, limites, changements de prix ou règles des services tiers ne sont pas considérés comme des bugs logiciels directs."] },
      { heading: "Travaux juridiques et réglementés", body: ["L'infrastructure technique peut être développée, mais les décisions juridiques, fiscales, médicales, financières, sectorielles et officielles doivent être vérifiées par les experts concernés.", "Le client est responsable de contrôler les exigences légales et opérationnelles de son propre modèle d'activité."] },
    ],
  },
};

export const esTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Preguntas frecuentes",
    description: "Preguntas frecuentes sobre sitios web, catálogos, pedidos por WhatsApp, citas, paneles, integraciones, software a medida, mantenimiento, precio y entrega.",
    sections: [
      { heading: "¿Cómo empieza un proyecto?", body: ["Primero se aclaran la necesidad, el objetivo, la situación actual y el resultado esperado. Después se definen alcance, páginas, módulos, integraciones y forma de entrega.", "Si no sabes exactamente qué necesitas, basta con describir brevemente tu empresa y el problema que quieres resolver."] },
      { heading: "¿Todos los proyectos parten del mismo paquete?", body: ["No. Algunos proyectos pueden partir de una estructura adaptable, mientras que otros requieren modelos de datos, pantallas de administración, integraciones o flujos propios.", "La idea es definir un alcance práctico para cada empresa, no imponer el mismo molde a todos."] },
      { heading: "¿Puedo ver un ejemplo en vivo antes de decidir?", body: ["Sí. Los ejemplos en vivo muestran cómo pueden funcionar sistemas similares. Son sistemas demo, no elementos de portafolio de clientes.", "Los trabajos reales de clientes se muestran por separado en el portafolio cuando existe permiso para compartirlos."] },
      { heading: "¿El sitio funcionará en móvil?", body: ["Sí. Los sitios y paneles se preparan para funcionar correctamente en móvil, tablet y ordenador.", "Si el flujo requiere mucha entrada de datos o tablas, se conversa el modelo de uso más cómodo durante la definición del alcance."] },
      { heading: "¿Cómo se define el precio?", body: ["El precio depende del número de páginas, nivel de diseño, necesidad de panel, estructura de datos, integraciones, automatización, plazo y soporte esperado.", "Se comparte un precio claro después de entender el alcance. Nuevos módulos o flujos diferentes se valoran por separado."] },
      { heading: "¿Hay soporte después de la entrega?", body: ["Sí. Mantenimiento, pequeñas correcciones técnicas, actualizaciones de contenido, nuevos módulos y mejoras pueden planificarse después de la entrega.", "Soporte no significa rediseño ilimitado ni desarrollo ilimitado de nuevas funcionalidades."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Alcance y precios",
    description: "Cómo se aclaran alcance, precio, expectativas de entrega, revisiones y solicitudes adicionales antes de iniciar el proyecto.",
    sections: [
      { heading: "El alcance va antes que el precio", body: ["Una propuesta saludable empieza por el alcance. Páginas, módulos, formularios, panel, integraciones, contenidos, entrega y soporte se revisan antes de calcular el precio.", "Esto reduce expectativas ambiguas y hace que el proyecto sea más fácil de gestionar."] },
      { heading: "¿Qué influye en el precio?", body: ["Número de páginas, diseño a medida, preparación de contenido, modelo de datos, complejidad del panel, integraciones API/XML, automatización, reportes, roles y urgencia pueden influir.", "Un sitio simple de presentación y un panel operativo no se valoran de la misma forma."] },
      { heading: "¿Qué se considera trabajo adicional?", body: ["Nuevas páginas, módulos, integraciones, cambios grandes de diseño, flujos distintos, migración de datos y nuevos roles son nuevo alcance si no estaban incluidos al inicio.", "Las solicitudes adicionales se aclaran y presupuestan por separado antes de desarrollarlas."] },
      { heading: "Por qué importa un alcance claro", body: ["Un alcance claro protege a ambas partes. El cliente sabe qué se entregará y el desarrollo avanza con menos sorpresas.", "El objetivo es una entrega profesional y sostenible, no una promesa vaga."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Paquetes de mantenimiento",
    description: "Mantenimiento posterior a la entrega, controles técnicos, actualizaciones, pequeñas correcciones, seguimiento y planificación de mejoras.",
    sections: [
      { heading: "Qué puede incluir el mantenimiento", body: ["Puede incluir pequeñas actualizaciones de contenido, controles técnicos, revisión de formularios, rendimiento, copias de seguridad, seguridad básica y pequeñas mejoras.", "El alcance exacto se define según el tipo de proyecto."] },
      { heading: "Qué no significa mantenimiento", body: ["Mantenimiento no es desarrollo ilimitado, rediseño ilimitado ni construcción de un flujo completamente nuevo.", "Nuevas páginas, módulos, integraciones y cambios estructurales grandes se planifican como nuevo desarrollo."] },
      { heading: "Quién necesita mantenimiento", body: ["Sitios activos, catálogos, flujos de e-commerce, paneles e integraciones se benefician de controles regulares.", "Las revisiones ayudan a detectar problemas antes y mantener el sistema más sano."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Soporte posterior a la entrega",
    description: "Cómo se gestionan solicitudes de soporte, correcciones, cambios de contenido, nuevas necesidades y mejoras después de la entrega.",
    sections: [
      { heading: "Soporte después de la entrega", body: ["Después de la entrega puede ofrecerse soporte para preguntas, pequeñas correcciones técnicas, explicación de uso, actualizaciones de contenido y planificación de mejoras.", "El tipo y duración dependen del alcance del proyecto y del acuerdo."] },
      { heading: "Bug o nueva solicitud", body: ["Un bug es algo incluido en el alcance acordado que no funciona como debería. Una nueva solicitud es una página, función, módulo, integración o flujo no incluido al inicio.", "Esta separación mantiene el proceso justo y claro."] },
      { heading: "Cómo pedir soporte", body: ["Describe el problema con claridad, indica la página o pantalla, explica qué esperabas y comparte captura si es posible.", "La información clara acelera el soporte."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Colaboración segura por Bionluk",
    description: "Nota clara sobre el uso de Bionluk como capa de confianza para pedido, comunicación, confirmación de alcance y seguridad de entrega.",
    sections: [
      { heading: "Por qué puede usarse Bionluk", body: ["Bionluk puede usarse cuando el cliente prefiere seguimiento de pedido basado en plataforma y un flujo de compra familiar.", "Su uso es opcional; también puede elegirse comunicación directa según el proyecto."] },
      { heading: "El alcance debe quedar claro", body: ["El trabajo pase por Bionluk o directamente, el alcance debe aclararse antes de empezar.", "Páginas, módulos, expectativas de entrega, revisiones y límites del trabajo adicional deben quedar escritos con claridad."] },
      { heading: "Ejemplos en vivo y portafolio son distintos", body: ["Los ejemplos en vivo son sistemas demo adaptables. Los elementos de portafolio son proyectos de clientes completados y mostrados según permiso.", "Esta distinción ayuda al visitante a entender exactamente qué está viendo."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Proceso de trabajo",
    description: "Proceso paso a paso para entender la necesidad, definir alcance, preparar el sistema, revisar, entregar, publicar y dar soporte.",
    sections: [
      { heading: "1. Se aclara la necesidad", body: ["Se recopilan tipo de empresa, objetivo, situación actual, páginas o módulos solicitados, ejemplos y necesidades técnicas.", "Si el cliente duda, el primer paso es identificar el punto de partida correcto."] },
      { heading: "2. Se define el alcance", body: ["Pantallas, páginas, formularios, áreas de administración, integraciones, responsabilidades de contenido, entrega y soporte se escriben con claridad.", "Los puntos ambiguos se hablan antes del desarrollo."] },
      { heading: "3. Empieza el desarrollo", body: ["El sistema se prepara según el alcance acordado. Contenido, orden visual, comportamiento responsive y flujos técnicos se desarrollan juntos.", "Cuando conviene, el avance puede compartirse con enlaces de vista previa o revisiones intermedias."] },
      { heading: "4. Revisión y entrega", body: ["El trabajo preparado se revisa, los flujos principales se prueban y las revisiones relacionadas con el alcance se atienden.", "Tras la aprobación, el sitio o sistema se prepara para publicación o entrega."] },
      { heading: "5. Soporte y mejoras", body: ["Después de la entrega, mantenimiento, soporte, nuevos módulos o mejoras pueden planificarse por separado.", "La meta es mantener el sistema sostenible, no dejarlo sin gestión tras el lanzamiento."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "Información KVKK",
    description: "Información general sobre responsabilidad de datos personales, contenidos del cliente, formularios, infraestructura técnica y revisión legal.",
    sections: [
      { heading: "Nota general", body: ["Esta página es una nota informativa sobre responsabilidad de datos y no sustituye asesoría legal.", "Textos legales finales, consentimientos y decisiones de cumplimiento deben ser verificados por el cliente y especialistas correspondientes."] },
      { heading: "Rol técnico", body: ["Formularios, campos de datos, pantallas de administración, flujos de almacenamiento y notificaciones pueden prepararse técnicamente según el alcance.", "Qué datos se recopilan y qué base legal se usa debe aclararlo el cliente."] },
      { heading: "Responsabilidad del cliente", body: ["El cliente es responsable de la exactitud, legalidad y derechos de uso de contenidos, datos, imágenes, textos y procesos que entrega.", "Los sectores regulados deben obtener revisión legal o profesional separada."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Política de privacidad",
    description: "Información general de privacidad para formularios de contacto, solicitudes, evaluación de proyectos e información enviada por el cliente.",
    sections: [
      { heading: "Información recopilada", body: ["Cuando contactas con NT Web Solutions, pueden recopilarse nombre, empresa, e-mail, teléfono, tipo de proyecto y mensaje para responder a tu solicitud.", "Esta información se usa para evaluar el proyecto y comunicarnos contigo."] },
      { heading: "Uso de la información", body: ["La información enviada se usa para comunicación, evaluación de alcance, preparación de propuesta, soporte y seguimiento de la solicitud.", "No se usa para compras automáticas ocultas ni suscripciones no relacionadas."] },
      { heading: "Servicios de terceros", body: ["E-mail, WhatsApp, proveedores de formularios, hosting, analytics u otros servicios técnicos pueden usarse según la configuración del sitio.", "Cada servicio externo puede tener sus propias reglas de privacidad y tratamiento de datos."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Política de cookies",
    description: "Información general sobre cookies, almacenamiento técnico, analytics, preferencias y servicios externos que pueden usarse en el sitio.",
    sections: [
      { heading: "Qué son las cookies", body: ["Las cookies son pequeños elementos de almacenamiento que los sitios usan para funcionamiento técnico, preferencias, analytics o integraciones de servicios.", "El uso exacto de cookies puede cambiar según herramientas e integraciones activas."] },
      { heading: "Tipos posibles de cookies", body: ["Las cookies necesarias pueden apoyar funciones principales del sitio. Cookies de analytics o rendimiento pueden ayudar a entender el uso de las páginas. Herramientas externas pueden establecer sus propias cookies.", "Puedes gestionar cookies desde la configuración de tu navegador."] },
      { heading: "Sin pago directo en este sitio", body: ["El sitio de NT Web Solutions sirve para información y solicitudes de propuesta. No cobra pagos directamente desde el sitio.", "Si más adelante se añaden herramientas externas, su comportamiento de cookies deberá revisarse por separado."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Condiciones de trabajo",
    description: "Condiciones generales sobre alcance, entrega, revisiones, soporte, terceros, responsabilidad del cliente y solicitudes adicionales.",
    sections: [
      { heading: "Alcance y entrega", body: ["El trabajo se entrega según el alcance acordado. Páginas, módulos, pantallas de administración, integraciones y expectativas de soporte deben aclararse antes de empezar.", "El plazo depende del tamaño del proyecto, preparación de contenido, complejidad técnica y velocidad de feedback."] },
      { heading: "Revisiones y cambios", body: ["Las revisiones relacionadas con el alcance pueden realizarse para que la entrega coincida con la estructura acordada.", "Nuevas páginas, funciones, módulos, flujos distintos y grandes rediseños se evalúan como nuevo alcance."] },
      { heading: "Servicios de terceros", body: ["Dominio, hosting, e-mail, pagos, SMS, WhatsApp, API, marketplaces, licencias y otros servicios externos pueden tener costes y reglas propias.", "Caídas, límites, cambios de precio o reglas de terceros no se consideran bugs directos del software."] },
      { heading: "Trabajo legal y regulado", body: ["La infraestructura técnica puede desarrollarse, pero decisiones legales, fiscales, médicas, financieras, sectoriales y oficiales deben verificarse con expertos.", "El cliente es responsable de revisar los requisitos legales y operativos de su propio modelo de negocio."] },
    ],
  },
};

export const arTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "الأسئلة الشائعة",
    description: "أسئلة شائعة حول مواقع الويب، الكتالوجات، طلبات واتساب، المواعيد، اللوحات، التكاملات، البرمجيات المخصصة، الصيانة، التسعير والتسليم.",
    sections: [
      { heading: "كيف يبدأ المشروع؟", body: ["أولاً يتم توضيح الحاجة والهدف والوضع الحالي والنتيجة المتوقعة. بعد ذلك يتم تحديد النطاق والصفحات والوحدات والتكاملات وطريقة التسليم.", "إذا لم تكن متأكداً مما تحتاجه، يكفي أن تصف شركتك والمشكلة التي تريد حلها."] },
      { heading: "هل كل المشاريع تبدأ من نفس الباقة؟", body: ["لا. بعض المشاريع يمكن أن تبدأ من هيكل قابل للتكييف، بينما يحتاج بعضها إلى نماذج بيانات أو شاشات إدارة أو تكاملات أو تدفقات خاصة.", "الهدف هو تحديد نطاق عملي يناسب الشركة، وليس فرض قالب واحد على الجميع."] },
      { heading: "هل يمكنني رؤية مثال مباشر قبل القرار؟", body: ["نعم. الأمثلة المباشرة توضّح كيف يمكن لأنظمة مشابهة أن تعمل. هي أنظمة تجريبية وليست عناصر أعمال عملاء.", "الأعمال الحقيقية للعملاء تُعرض بشكل منفصل عند توفر إذن المشاركة."] },
      { heading: "هل يعمل الموقع على الجوال؟", body: ["نعم. يتم تجهيز المواقع واللوحات لتعمل بشكل صحيح على الجوال والتابلت والحاسوب.", "إذا كان التدفق يحتاج إدخال بيانات كثيفاً أو جداول، تتم مناقشة نموذج الاستخدام الأنسب أثناء تحديد النطاق."] },
      { heading: "كيف يتم تحديد السعر؟", body: ["يعتمد السعر على عدد الصفحات، مستوى التصميم، الحاجة إلى لوحة إدارة، بنية البيانات، التكاملات، الأتمتة، مدة التسليم والدعم المتوقع.", "يتم مشاركة سعر واضح بعد فهم النطاق. الوحدات الجديدة أو التدفقات المختلفة تُقيّم بشكل منفصل."] },
      { heading: "هل يوجد دعم بعد التسليم؟", body: ["نعم. يمكن تخطيط الصيانة والتعديلات التقنية الصغيرة وتحديثات المحتوى والوحدات الجديدة والتحسينات بعد التسليم.", "الدعم لا يعني إعادة تصميم غير محدودة أو تطوير ميزات جديدة بلا حدود."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "النطاق والتسعير",
    description: "كيف يتم توضيح نطاق المشروع والسعر وتوقعات التسليم والمراجعات والطلبات الإضافية قبل بدء العمل.",
    sections: [
      { heading: "النطاق قبل السعر", body: ["العرض الصحي يبدأ من النطاق. تتم مراجعة الصفحات والوحدات والنماذج واللوحة والتكاملات والمحتوى والتسليم والدعم قبل التسعير.", "هذا يقلل الغموض ويجعل إدارة المشروع أسهل."] },
      { heading: "ما الذي يؤثر في السعر؟", body: ["عدد الصفحات، التصميم المخصص، تجهيز المحتوى، نموذج البيانات، تعقيد اللوحة، تكاملات API/XML، الأتمتة، التقارير، الأدوار والسرعة المطلوبة يمكن أن تؤثر في السعر.", "موقع تعريفي بسيط ولوحة عمليات لا يُسعّران بنفس الطريقة."] },
      { heading: "ما الذي يُعد عملاً إضافياً؟", body: ["الصفحات الجديدة، الوحدات الجديدة، التكاملات الجديدة، تغيير اتجاه التصميم، تدفقات مختلفة، نقل بيانات أو أدوار جديدة تُعد نطاقاً جديداً إذا لم تكن ضمن البداية.", "يتم توضيح وتسعير الطلبات الإضافية قبل تطويرها."] },
      { heading: "لماذا النطاق الواضح مهم؟", body: ["النطاق الواضح يحمي الطرفين. يعرف العميل ما سيتم تسليمه، ويتقدم التطوير بمفاجآت أقل.", "الهدف هو عملية تسليم مهنية ومستدامة، لا وعد مبهم."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "باقات الصيانة",
    description: "صيانة ما بعد التسليم، فحوصات تقنية، تحديثات، إصلاحات صغيرة، متابعة وتخطيط تحسينات للمواقع والأنظمة المسلّمة.",
    sections: [
      { heading: "ما الذي يمكن أن تشمل الصيانة؟", body: ["قد تشمل تحديثات محتوى صغيرة، فحوصات تقنية، مراجعة النماذج، الأداء، النسخ الاحتياطية، فحوصات أمنية أساسية وتحسينات تقنية بسيطة.", "يتم تحديد النطاق الدقيق حسب نوع المشروع."] },
      { heading: "ما الذي لا تعنيه الصيانة؟", body: ["الصيانة ليست تطوير ميزات غير محدود، أو إعادة تصميم غير محدودة، أو بناء تدفق جديد بالكامل.", "الصفحات الجديدة والوحدات والتكاملات والتغييرات الهيكلية الكبيرة تُخطط كتطوير جديد."] },
      { heading: "من يحتاج إلى الصيانة؟", body: ["المواقع النشطة والكتالوجات ومسارات التجارة الإلكترونية واللوحات والأنظمة القائمة على التكامل تستفيد من الفحوصات المنتظمة.", "الفحوصات تساعد على اكتشاف المشكلات مبكراً والحفاظ على صحة النظام."] },
    ],
  },
  "support": {
    slug: "support",
    title: "الدعم بعد التسليم",
    description: "كيف تُدار طلبات الدعم، الإصلاحات، تغييرات المحتوى، الاحتياجات الجديدة والتحسينات بعد التسليم.",
    sections: [
      { heading: "الدعم بعد التسليم", body: ["بعد التسليم يمكن تقديم دعم للأسئلة، الإصلاحات التقنية الصغيرة، شرح الاستخدام، تحديثات المحتوى وتخطيط التحسينات.", "نوع الدعم ومدته يعتمدان على نطاق المشروع والاتفاق."] },
      { heading: "خطأ أم طلب جديد؟", body: ["الخطأ هو شيء ضمن النطاق المتفق عليه لا يعمل كما يجب. الطلب الجديد هو صفحة أو ميزة أو وحدة أو تكامل أو تدفق لم يكن ضمن النطاق الأول.", "هذا الفصل يحافظ على عدالة ووضوح العملية."] },
      { heading: "كيف تطلب الدعم؟", body: ["صف المشكلة بوضوح، اذكر الصفحة أو الشاشة، اشرح ما كنت تتوقعه وشارك لقطة شاشة إن أمكن.", "المعلومات الواضحة تسرّع الدعم."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "عمل آمن عبر Bionluk",
    description: "ملاحظة واضحة حول استخدام Bionluk كطبقة ثقة للطلب والتواصل وتأكيد النطاق وأمان التسليم عند الرغبة.",
    sections: [
      { heading: "لماذا يمكن استخدام Bionluk؟", body: ["يمكن استخدام Bionluk عندما يفضل العميل متابعة الطلب عبر منصة ومسار شراء مألوف.", "استخدامه اختياري؛ يمكن أيضاً العمل بتواصل مباشر حسب المشروع."] },
      { heading: "يجب أن يبقى النطاق واضحاً", body: ["سواء تم العمل عبر Bionluk أو مباشرة، يجب توضيح النطاق قبل البدء.", "الصفحات والوحدات وتوقعات التسليم والمراجعات وحدود العمل الإضافي يجب أن تُكتب بوضوح."] },
      { heading: "الأمثلة المباشرة والأعمال المنجزة منفصلة", body: ["الأمثلة المباشرة أنظمة تجريبية قابلة للتكييف. عناصر الأعمال المنجزة هي مشاريع عملاء مكتملة وتُعرض حسب الإذن.", "هذا الفصل يساعد الزائر على فهم ما يشاهده بالضبط."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "آلية العمل",
    description: "عملية خطوة بخطوة لفهم الحاجة، تحديد النطاق، تجهيز النظام، المراجعة، التسليم، الإطلاق والدعم بعد التسليم.",
    sections: [
      { heading: "1. توضيح الحاجة", body: ["يتم جمع نوع الشركة والهدف والوضع الحالي والصفحات أو الوحدات المطلوبة والأمثلة والاحتياجات التقنية.", "إذا كان العميل متردداً، فالخطوة الأولى هي تحديد نقطة البداية الصحيحة."] },
      { heading: "2. تحديد النطاق", body: ["تُكتب الشاشات والصفحات والنماذج ومناطق الإدارة والتكاملات ومسؤوليات المحتوى والتسليم والدعم بوضوح.", "تتم مناقشة النقاط الغامضة قبل التطوير."] },
      { heading: "3. بدء التطوير", body: ["يتم تجهيز النظام حسب النطاق المتفق عليه. يتم تطوير المحتوى والترتيب البصري والسلوك المتجاوب والتدفقات التقنية معاً.", "عند مناسبة المشروع يمكن مشاركة التقدم عبر روابط معاينة أو مراجعات مرحلية."] },
      { heading: "4. المراجعة والتسليم", body: ["تتم مراجعة العمل، وفحص التدفقات الأساسية، ومعالجة المراجعات المرتبطة بالنطاق.", "بعد الموافقة يتم تجهيز الموقع أو النظام للإطلاق أو التسليم."] },
      { heading: "5. الدعم والتحسينات", body: ["بعد التسليم يمكن تخطيط الصيانة والدعم والوحدات الجديدة أو التحسينات بشكل منفصل.", "الهدف إبقاء النظام مستداماً بدلاً من تركه دون إدارة بعد الإطلاق."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "معلومات KVKK",
    description: "معلومات عامة حول مسؤولية البيانات الشخصية، محتوى العميل، النماذج، البنية التقنية والحاجة إلى مراجعة قانونية.",
    sections: [
      { heading: "ملاحظة عامة", body: ["هذه الصفحة ملاحظة معلوماتية حول مسؤولية البيانات ولا تغني عن الاستشارة القانونية.", "النصوص القانونية النهائية والموافقات وقرارات الامتثال يجب أن يراجعها العميل والخبراء المعنيون."] },
      { heading: "الدور التقني", body: ["يمكن تجهيز النماذج وحقول البيانات وشاشات الإدارة وتدفقات التخزين والإشعارات تقنياً حسب النطاق.", "ما البيانات التي تُجمع وما الأساس القانوني المستخدم يجب أن يوضحه العميل."] },
      { heading: "مسؤولية العميل", body: ["العميل مسؤول عن دقة وقانونية وحقوق استخدام المحتوى والبيانات والصور والنصوص والعمليات التي يزوّدها.", "القطاعات المنظمة يجب أن تحصل على مراجعة قانونية أو مهنية منفصلة."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "سياسة الخصوصية",
    description: "معلومات خصوصية عامة لنماذج التواصل والطلبات وتقييم المشاريع والمعلومات المرسلة من العميل.",
    sections: [
      { heading: "المعلومات التي يتم جمعها", body: ["عند التواصل مع NT Web Solutions قد يتم جمع الاسم والشركة والبريد والهاتف ونوع المشروع والرسالة للرد على طلبك.", "تُستخدم هذه المعلومات لتقييم المشروع والتواصل معك."] },
      { heading: "استخدام المعلومات", body: ["تُستخدم المعلومات المرسلة للتواصل وتقييم النطاق وإعداد العرض والدعم والمتابعة المرتبطة بطلبك.", "لا تُستخدم لإنشاء مشتريات تلقائية مخفية أو اشتراكات غير مرتبطة."] },
      { heading: "خدمات خارجية", body: ["قد تُستخدم خدمات بريد أو واتساب أو مزودي نماذج أو استضافة أو تحليلات أو خدمات تقنية أخرى حسب إعداد الموقع.", "كل خدمة خارجية قد تكون لها قواعدها الخاصة للخصوصية ومعالجة البيانات."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "سياسة ملفات تعريف الارتباط",
    description: "معلومات عامة حول cookies، التخزين التقني، التحليلات، التفضيلات والخدمات الخارجية التي قد تُستخدم في الموقع.",
    sections: [
      { heading: "ما هي cookies؟", body: ["cookies عناصر تخزين صغيرة تستخدمها المواقع للتشغيل التقني أو التفضيلات أو التحليلات أو تكاملات الخدمات.", "الاستخدام الدقيق قد يتغير حسب الأدوات والتكاملات النشطة."] },
      { heading: "أنواع cookies الممكنة", body: ["قد تدعم cookies الضرورية وظائف الموقع الأساسية. قد تساعد cookies التحليلات أو الأداء في فهم استخدام الصفحات. الأدوات الخارجية قد تضع cookies خاصة بها.", "يمكنك إدارة cookies من إعدادات المتصفح."] },
      { heading: "لا يوجد دفع مباشر في هذا الموقع", body: ["موقع NT Web Solutions مخصص للمعلومات وطلبات العروض. لا يجمع المدفوعات مباشرة من الموقع.", "إذا أضيفت أدوات خارجية لاحقاً، يجب مراجعة سلوك cookies الخاص بها بشكل منفصل."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "شروط العمل",
    description: "شروط عامة حول النطاق، التسليم، المراجعات، الدعم، الخدمات الخارجية، مسؤولية العميل والطلبات الإضافية.",
    sections: [
      { heading: "النطاق والتسليم", body: ["يتم تسليم العمل حسب النطاق المتفق عليه. يجب توضيح الصفحات والوحدات وشاشات الإدارة والتكاملات وتوقعات الدعم قبل البداية.", "تعتمد مدة التسليم على حجم المشروع وجاهزية المحتوى والتعقيد التقني وسرعة ملاحظات العميل."] },
      { heading: "المراجعات والتغييرات", body: ["يمكن تنفيذ المراجعات المرتبطة بالنطاق لجعل التسليم مطابقاً للهيكل المتفق عليه.", "الصفحات والميزات والوحدات والتدفقات الجديدة وإعادة التصميم الكبيرة تُقيّم كنطاق جديد."] },
      { heading: "الخدمات الخارجية", body: ["الدومين والاستضافة والبريد والدفع وSMS وWhatsApp وAPI وmarketplaces والتراخيص والخدمات الخارجية الأخرى قد تكون لها تكاليف وقواعد خاصة.", "الانقطاعات أو الحدود أو تغييرات الأسعار أو قواعد الخدمات الخارجية لا تُعد أخطاء برمجية مباشرة."] },
      { heading: "الأعمال القانونية والمنظمة", body: ["يمكن تطوير البنية التقنية، لكن القرارات القانونية والضريبية والطبية والمالية والقطاعية والرسمية يجب أن يراجعها الخبراء.", "العميل مسؤول عن مراجعة المتطلبات القانونية والتشغيلية لنموذج عمله."] },
    ],
  },
};

export const ruTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Частые вопросы",
    description: "Частые вопросы о сайтах, каталогах, заказах WhatsApp, записи, панелях, интеграциях, индивидуальном ПО, поддержке, стоимости и сдаче проекта.",
    sections: [
      { heading: "Как начинается проект?", body: ["Сначала уточняются потребность, цель, текущая ситуация и ожидаемый результат. Затем определяются объем, страницы, модули, интеграции и способ сдачи.", "Если вы не уверены, что нужно, достаточно кратко описать бизнес и проблему, которую хотите решить."] },
      { heading: "Все проекты строятся из одного пакета?", body: ["Нет. Некоторые проекты могут начинаться с адаптируемой структуры, а другим нужны собственные модели данных, админ-экраны, интеграции или специальные workflow.", "Цель не в едином шаблоне для всех, а в практичном объеме под конкретный бизнес."] },
      { heading: "Можно ли увидеть живой пример до решения?", body: ["Да. Живые примеры показывают, как похожие системы могут работать. Это demo-системы, а не клиентские работы.", "Реальные клиентские проекты показываются отдельно, когда есть разрешение на публикацию."] },
      { heading: "Будет ли сайт работать на мобильных?", body: ["Да. Сайты и панели готовятся для корректной работы на телефоне, планшете и компьютере.", "Если поток требует плотного ввода данных или таблиц, подходящая модель использования обсуждается на этапе объема."] },
      { heading: "Как определяется цена?", body: ["Цена зависит от количества страниц, глубины дизайна, потребности в панели, структуры данных, интеграций, автоматизации, сроков и ожидаемой поддержки.", "Четкая цена дается после понимания объема. Новые модули или отличающиеся потоки оцениваются отдельно."] },
      { heading: "Есть ли поддержка после сдачи?", body: ["Да. После сдачи можно планировать обслуживание, небольшие технические исправления, обновления контента, новые модули и улучшения.", "Поддержка не означает неограниченный редизайн или бесконечную разработку новых функций."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Объем и стоимость",
    description: "Как до старта работы уточняются объем проекта, цена, ожидания по сдаче, правки и дополнительные запросы.",
    sections: [
      { heading: "Сначала объем, потом цена", body: ["Здоровое предложение начинается с объема. До оценки проверяются страницы, модули, формы, панель, интеграции, контент, сдача и поддержка.", "Так уменьшается неопределенность и проектом легче управлять."] },
      { heading: "Что влияет на цену?", body: ["Количество страниц, индивидуальный дизайн, подготовка контента, модель данных, сложность панели, API/XML интеграции, автоматизация, отчеты, роли и требуемая скорость могут влиять на цену.", "Простой презентационный сайт и операционная панель оцениваются по-разному."] },
      { heading: "Что считается дополнительной работой?", body: ["Новые страницы, новые модули, новые интеграции, изменение направления дизайна, другие workflow, миграция данных или новые роли считаются новым объемом, если не были включены изначально.", "Дополнительные запросы уточняются и оцениваются до разработки."] },
      { heading: "Почему четкий объем важен?", body: ["Четкий объем защищает обе стороны. Клиент понимает, что будет сдано, а разработка идет с меньшим количеством сюрпризов.", "Цель — профессиональный и устойчивый процесс сдачи, а не размытое обещание."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Пакеты обслуживания",
    description: "Обслуживание после сдачи, технические проверки, обновления, небольшие исправления, мониторинг и планирование улучшений для сайтов и систем.",
    sections: [
      { heading: "Что может входить в обслуживание?", body: ["Обслуживание может включать небольшие обновления контента, технические проверки, проверку форм и доступности, производительность, backup, базовые проверки безопасности и небольшие технические улучшения.", "Точный объем определяется по типу проекта."] },
      { heading: "Чем обслуживание не является?", body: ["Обслуживание не является безлимитной разработкой новых функций, безлимитным редизайном или построением полностью нового workflow.", "Новые страницы, модули, интеграции и крупные структурные изменения планируются как новый объем разработки."] },
      { heading: "Кому нужно обслуживание?", body: ["Активные сайты, каталоги, e-commerce потоки, панели и системы с интеграциями выигрывают от регулярных проверок.", "Проверки помогают заранее увидеть проблемы и поддерживать здоровье системы."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Поддержка после сдачи",
    description: "Как обрабатываются запросы поддержки, исправления, изменения контента, новые потребности и улучшения после сдачи.",
    sections: [
      { heading: "Поддержка после сдачи", body: ["После передачи можно предоставить поддержку по вопросам, небольшим техническим исправлениям, объяснению использования, обновлениям контента и планированию улучшений.", "Тип и длительность поддержки зависят от объема проекта и договоренности."] },
      { heading: "Ошибка или новый запрос?", body: ["Ошибка — это часть согласованного объема, которая не работает как должна. Новый запрос — это страница, функция, модуль, интеграция или поток, которых не было в первом объеме.", "Такое разделение делает процесс справедливым и понятным."] },
      { heading: "Как запросить поддержку?", body: ["Опишите проблему ясно, укажите страницу или экран, объясните ожидаемое поведение и по возможности приложите скриншот.", "Четкая информация ускоряет поддержку."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Безопасная работа через Bionluk",
    description: "Понятная заметка об использовании Bionluk как слоя доверия для заказа, коммуникации, подтверждения объема и безопасности сдачи, когда это удобно.",
    sections: [
      { heading: "Зачем может использоваться Bionluk?", body: ["Bionluk можно использовать, если клиент предпочитает платформенное управление заказом и знакомый процесс покупки.", "Использование опционально; в зависимости от проекта можно работать и через прямую коммуникацию."] },
      { heading: "Объем должен оставаться ясным", body: ["Независимо от того, идет работа через Bionluk или напрямую, объем нужно уточнить до старта.", "Страницы, модули, ожидания по сдаче, правки и границы дополнительных работ должны быть прописаны ясно."] },
      { heading: "Живые примеры и завершенные работы разделены", body: ["Живые примеры — это адаптируемые demo-системы. Элементы портфолио — завершенные клиентские проекты, которые показываются по разрешению.", "Это разделение помогает посетителю понять, что именно он смотрит."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Процесс работы",
    description: "Пошаговый процесс: понимание потребности, определение объема, разработка, проверка, сдача, запуск и поддержка после сдачи.",
    sections: [
      { heading: "1. Уточнение потребности", body: ["Собираются тип бизнеса, цель, текущая ситуация, нужные страницы или модули, примеры и технические требования.", "Если клиент не уверен, сначала определяется правильная отправная точка."] },
      { heading: "2. Определение объема", body: ["Экраны, страницы, формы, админ-зоны, интеграции, ответственность за контент, сдача и поддержка записываются ясно.", "Неясные пункты обсуждаются до начала разработки."] },
      { heading: "3. Старт разработки", body: ["Система готовится по согласованному объему. Контент, визуальный порядок, адаптивность и технические потоки развиваются вместе.", "В подходящих проектах прогресс можно показывать через preview-ссылки или этапные проверки."] },
      { heading: "4. Проверка и сдача", body: ["Работа проверяется, основные потоки тестируются, правки в рамках объема выполняются.", "После подтверждения сайт или система готовится к запуску или передаче."] },
      { heading: "5. Поддержка и улучшения", body: ["После сдачи обслуживание, поддержка, новые модули или дополнительные улучшения могут планироваться отдельно.", "Цель — устойчиво поддерживаемая система, а не оставленное без управления состояние после запуска."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "Информация KVKK",
    description: "Общая информация об ответственности за персональные данные, клиентский контент, формы, техническую инфраструктуру и необходимость юридической проверки.",
    sections: [
      { heading: "Общая заметка", body: ["Эта страница является информационной заметкой об ответственности за данные и не заменяет юридическую консультацию.", "Финальные юридические тексты, согласия и compliance-решения должны проверяться клиентом и соответствующими экспертами."] },
      { heading: "Техническая роль", body: ["Формы, поля данных, админ-экраны, потоки хранения и уведомления могут быть технически подготовлены по согласованному объему.", "Какие данные собираются и какая правовая основа используется, должен уточнить клиент."] },
      { heading: "Ответственность клиента", body: ["Клиент отвечает за точность, законность и права использования предоставленного контента, данных, изображений, текстов и процессов.", "Регулируемые отрасли должны получать отдельную юридическую или профессиональную проверку."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Политика конфиденциальности",
    description: "Общая информация о формах связи, запросах, оценке проектов и информации, отправляемой клиентом.",
    sections: [
      { heading: "Какая информация собирается?", body: ["При обращении в NT Web Solutions могут собираться имя, компания, e-mail, телефон, тип проекта и сообщение, чтобы ответить на запрос.", "Эта информация используется для оценки проекта и связи с вами."] },
      { heading: "Использование информации", body: ["Отправленная информация используется для коммуникации, оценки объема, подготовки предложения, поддержки и дальнейшей связи по вашему запросу.", "Она не используется для скрытых автоматических покупок или несвязанных подписок."] },
      { heading: "Внешние сервисы", body: ["В зависимости от настройки сайта могут использоваться e-mail, WhatsApp, провайдеры форм, хостинг, аналитика или другие технические сервисы.", "У каждого внешнего сервиса могут быть собственные правила конфиденциальности и обработки данных."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Политика cookies",
    description: "Общая информация о cookies, техническом хранении, аналитике, предпочтениях и внешних сервисах, которые могут использоваться на сайте.",
    sections: [
      { heading: "Что такое cookies?", body: ["Cookies — это небольшие элементы хранения, которые сайты используют для технической работы, предпочтений, аналитики или интеграций сервисов.", "Точное использование может меняться в зависимости от активных инструментов и интеграций."] },
      { heading: "Возможные типы cookies", body: ["Необходимые cookies могут поддерживать базовые функции сайта. Аналитические или performance cookies могут помогать понимать использование страниц. Внешние инструменты могут ставить собственные cookies.", "Вы можете управлять cookies в настройках браузера."] },
      { heading: "На сайте нет прямой оплаты", body: ["Сайт NT Web Solutions предназначен для информации и запросов предложений. Он не принимает оплату напрямую на сайте.", "Если позже будут добавлены внешние инструменты, их поведение cookies нужно будет проверить отдельно."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Условия работы",
    description: "Общие условия об объеме, сдаче, правках, поддержке, внешних сервисах, ответственности клиента и дополнительных запросах.",
    sections: [
      { heading: "Объем и сдача", body: ["Работа сдается по согласованному объему. Страницы, модули, админ-экраны, интеграции и ожидания по поддержке должны быть уточнены до начала.", "Срок сдачи зависит от размера проекта, готовности контента, технической сложности и скорости обратной связи клиента."] },
      { heading: "Правки и изменения", body: ["Правки в рамках объема могут выполняться, чтобы сдача соответствовала согласованной структуре.", "Новые страницы, функции, модули, другие workflow и крупный редизайн оцениваются как новый объем."] },
      { heading: "Внешние сервисы", body: ["Домен, хостинг, e-mail, оплата, SMS, WhatsApp, API, marketplaces, лицензии и другие внешние сервисы могут иметь собственные расходы и правила.", "Перебои, лимиты, изменения цен или правил внешних сервисов не считаются прямыми программными ошибками."] },
      { heading: "Юридические и регулируемые работы", body: ["Техническая инфраструктура может быть разработана, но юридические, налоговые, медицинские, финансовые, отраслевые и официальные решения должны проверяться экспертами.", "Клиент отвечает за проверку юридических и операционных требований своей бизнес-модели."] },
    ],
  },
};

export const ptTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Perguntas frequentes",
    description: "Perguntas comuns sobre sites, catálogos, pedidos por WhatsApp, agendamentos, painéis administrativos, integrações, software sob medida, manutenção, preços e entrega.",
    sections: [
      { heading: "Como um projeto começa?", body: ["Primeiro, a necessidade, o objetivo, a situação atual e o resultado esperado são esclarecidos. Depois, escopo, telas, módulos, integrações e caminho de entrega são definidos.", "Se você ainda não sabe exatamente do que precisa, basta descrever sua empresa e o problema que quer resolver. A estrutura certa pode ser escolhida em conjunto."] },
      { heading: "Todo projeto parte do mesmo pacote?", body: ["Não. Alguns projetos podem começar a partir de uma estrutura adaptável, enquanto outros precisam de modelos de dados, telas administrativas, integrações ou fluxos específicos.", "O objetivo não é forçar toda empresa no mesmo modelo, mas definir um escopo prático que faça sentido para o negócio."] },
      { heading: "Posso ver um exemplo ao vivo antes de decidir?", body: ["Sim. Exemplos ao vivo são usados para mostrar como sistemas parecidos podem funcionar. Eles são sistemas de demonstração, não itens de portfólio de clientes.", "Projetos concluídos de clientes são mostrados separadamente no portfólio quando há permissão de compartilhamento."] },
      { heading: "O site funciona no celular?", body: ["Sim. Sites e painéis são preparados para funcionar em celulares, tablets e desktops.", "Se um fluxo exige muita entrada de dados ou trabalho com tabelas, o modelo de uso mais confortável é discutido no planejamento de escopo."] },
      { heading: "Como o preço é definido?", body: ["O preço depende de quantidade de páginas, profundidade de design, necessidade de painel, estrutura de dados, integrações, automação, prazo e expectativas de suporte.", "Um preço claro é compartilhado depois que o escopo é entendido. Novos módulos ou fluxos diferentes após o escopo inicial são avaliados separadamente."] },
      { heading: "Há suporte após a entrega?", body: ["Sim. Manutenção, pequenos ajustes técnicos, atualizações de conteúdo, novos módulos e melhorias podem ser planejados após a entrega.", "Suporte não significa redesign ilimitado nem desenvolvimento ilimitado de novas funcionalidades."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Escopo e preços",
    description: "Como escopo do projeto, preço, expectativas de entrega, revisões e solicitações extras são esclarecidos antes do início.",
    sections: [
      { heading: "O escopo vem antes do preço", body: ["Uma proposta saudável começa pelo escopo. Páginas, módulos, formulários, necessidades administrativas, integrações, conteúdo, entrega e suporte são revisados antes da precificação.", "Isso evita expectativas vagas e torna o projeto mais fácil de gerenciar."] },
      { heading: "O que influencia o preço?", body: ["Quantidade de páginas, nível de design sob medida, preparação de conteúdo, modelo de dados, complexidade do painel, integrações API/XML, automação, relatórios, papéis de usuário e velocidade de entrega podem afetar o preço.", "Um site simples de apresentação e um painel operacional não são precificados da mesma forma."] },
      { heading: "O que conta como trabalho extra?", body: ["Novas páginas, novos módulos, novas integrações, mudança grande de direção visual, alterações importantes de fluxo, migração de dados e novos papéis de usuário são avaliados como novo escopo quando não estão incluídos no início.", "Solicitações extras são esclarecidas e orçadas separadamente antes do desenvolvimento."] },
      { heading: "Por que escopo claro importa", body: ["Escopo claro protege os dois lados. O cliente sabe o que será entregue e o desenvolvimento avança com menos surpresas.", "O objetivo é um processo de entrega profissional e sustentável, não uma promessa vaga."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Pacotes de manutenção",
    description: "Manutenção pós-entrega, verificações técnicas, atualizações, pequenos ajustes, monitoramento e planejamento de melhorias para sites e sistemas entregues.",
    sections: [
      { heading: "O que a manutenção pode incluir", body: ["A manutenção pode incluir pequenas atualizações de conteúdo, verificações técnicas, checagem de disponibilidade e formulários, revisão de performance, revisão de backups, controles voltados à segurança e pequenas melhorias técnicas.", "O escopo exato é definido conforme o tipo de projeto."] },
      { heading: "O que manutenção não significa", body: ["Manutenção não é desenvolvimento ilimitado de novas funcionalidades, redesign ilimitado ou criação de um fluxo totalmente diferente.", "Novas páginas, novos módulos, integrações e grandes mudanças estruturais são planejados como novo escopo de desenvolvimento."] },
      { heading: "Quem precisa de manutenção?", body: ["Sites ativos, catálogos, fluxos de e-commerce, painéis administrativos e sistemas baseados em integrações se beneficiam de manutenção regular.", "Verificações recorrentes ajudam a encontrar problemas mais cedo e manter o sistema mais saudável ao longo do tempo."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Suporte pós-entrega",
    description: "Como pedidos de suporte, correções de erro, alterações de conteúdo, novas necessidades e melhorias são tratados após a entrega.",
    sections: [
      { heading: "Suporte após a entrega", body: ["Depois da entrega, pode haver suporte para dúvidas, pequenos ajustes técnicos, explicações de uso, atualizações de conteúdo e planejamento de melhorias.", "O tipo e a duração do suporte dependem do escopo do projeto e do acordo."] },
      { heading: "Correção de erro ou nova solicitação", body: ["Erro é algo incluído no escopo acordado que não funciona como esperado. Nova solicitação é uma página, recurso, módulo, integração ou fluxo que não estava no escopo original.", "Essa distinção mantém o processo justo e claro."] },
      { heading: "Como solicitar suporte", body: ["Descreva o problema com clareza, informe a página ou tela, explique o que esperava e envie um print se possível.", "Informações claras ajudam o suporte a avançar mais rápido."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Trabalho seguro via Bionluk",
    description: "Uma nota clara sobre o uso do Bionluk como camada de confiança para pedido, comunicação, confirmação de escopo e segurança de entrega quando fizer sentido.",
    sections: [
      { heading: "Por que o Bionluk pode ser usado", body: ["O Bionluk pode ser usado como canal seguro quando o cliente quer acompanhamento de pedido em plataforma e um fluxo de compra conhecido.", "É opcional; a comunicação direta também pode ser usada conforme o projeto."] },
      { heading: "O escopo ainda precisa estar claro", body: ["Seja pelo Bionluk ou diretamente, o escopo deve ser esclarecido antes do início.", "Páginas, módulos, expectativas de entrega, revisões e limites de trabalho extra devem estar escritos com clareza."] },
      { heading: "Exemplos ao vivo e portfólio são separados", body: ["Exemplos ao vivo são sistemas de demonstração adaptáveis. Itens de portfólio são projetos concluídos de clientes mostrados conforme permissão.", "Essa distinção é mantida clara para que o cliente entenda o que está vendo."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Processo de trabalho",
    description: "O processo passo a passo para entender a necessidade, definir escopo, preparar o sistema, compartilhar prévias, entregar, lançar e dar suporte pós-entrega.",
    sections: [
      { heading: "1. A necessidade é esclarecida", body: ["São coletados tipo de negócio, objetivo, situação atual, páginas ou módulos desejados, exemplos e necessidades técnicas.", "Se o cliente não tem certeza, o primeiro passo é identificar o ponto de partida correto."] },
      { heading: "2. O escopo é definido", body: ["Telas, páginas, formulários, áreas administrativas, integrações, responsabilidades de conteúdo, entrega e suporte são escritos com clareza.", "Pontos vagos são discutidos antes do desenvolvimento começar."] },
      { heading: "3. O desenvolvimento começa", body: ["O sistema é preparado conforme o escopo acordado. Conteúdo, organização visual, responsividade e fluxos técnicos são desenvolvidos juntos.", "Em projetos adequados, o progresso pode ser compartilhado por links de prévia ou revisões por etapa."] },
      { heading: "4. Revisão e entrega", body: ["O trabalho preparado é revisado, os fluxos principais são checados e revisões ligadas ao escopo são tratadas.", "Após aprovação, o site ou sistema é preparado para lançamento ou entrega."] },
      { heading: "5. Suporte e melhorias", body: ["Depois da entrega, manutenção, suporte, novos módulos ou melhorias adicionais podem ser planejados separadamente.", "O objetivo é manter o sistema sustentável, em vez de deixá-lo sem gestão após o lançamento."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "Informações KVKK",
    description: "Informações gerais sobre responsabilidade por dados pessoais, conteúdo fornecido pelo cliente, formulários, infraestrutura técnica e necessidade de revisão legal.",
    sections: [
      { heading: "Nota geral", body: ["Esta página é uma nota informativa sobre responsabilidade de dados e não substitui aconselhamento jurídico.", "Textos legais finais, consentimentos e decisões de conformidade devem ser revisados pelo cliente e especialistas relevantes."] },
      { heading: "Papel técnico", body: ["Formulários, campos de dados, telas administrativas, fluxos de armazenamento e mecanismos de notificação podem ser preparados tecnicamente conforme o escopo acordado.", "Quais dados são coletados e qual base legal é usada devem ser esclarecidos pelo cliente."] },
      { heading: "Responsabilidade do cliente", body: ["O cliente é responsável pela precisão, legalidade e direitos de uso do conteúdo, dados, imagens, textos e processos que fornece.", "Setores regulados devem receber revisão jurídica ou profissional separada."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Política de privacidade",
    description: "Informações gerais de privacidade para formulários de contato, solicitações de comunicação, avaliação de projeto e informações fornecidas pelo cliente.",
    sections: [
      { heading: "Informações coletadas", body: ["Ao entrar em contato com a NT Web Solutions, nome, empresa, e-mail, telefone, tipo de projeto e mensagem podem ser coletados para responder à solicitação.", "Essas informações são usadas para avaliar o projeto e se comunicar com você."] },
      { heading: "Como as informações são usadas", body: ["As informações enviadas são usadas para comunicação, avaliação de escopo, preparação de proposta, suporte e acompanhamento relacionado à sua solicitação.", "Elas não são usadas para criar compras automáticas ocultas ou assinaturas sem relação com o pedido."] },
      { heading: "Serviços de terceiros", body: ["E-mail, WhatsApp, provedores de formulário, hospedagem, analytics ou outros serviços técnicos podem ser usados conforme a configuração do site.", "Cada serviço de terceiro pode ter suas próprias regras de privacidade e tratamento de dados."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Política de cookies",
    description: "Informações gerais sobre cookies, armazenamento técnico, analytics, preferências e serviços de terceiros que podem ser usados no site.",
    sections: [
      { heading: "O que são cookies", body: ["Cookies são pequenos itens de armazenamento usados por sites para funcionamento técnico, preferências, analytics ou integrações de serviços.", "O uso exato de cookies pode mudar conforme as ferramentas e integrações ativas no site."] },
      { heading: "Possíveis tipos de cookies", body: ["Cookies necessários podem apoiar funções essenciais do site. Cookies de analytics ou performance podem ajudar a entender o uso das páginas. Ferramentas de terceiros podem definir seus próprios cookies.", "Você pode gerenciar cookies nas configurações do navegador."] },
      { heading: "Não há pagamento direto neste site", body: ["O site da NT Web Solutions é usado para informação e solicitação de proposta. Ele não coleta pagamentos diretamente pelo site.", "Se ferramentas de terceiros forem adicionadas depois, o comportamento de cookies delas deve ser revisado separadamente."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Condições de trabalho",
    description: "Condições gerais sobre escopo, entrega, revisões, suporte, serviços de terceiros, responsabilidades do cliente e solicitações extras.",
    sections: [
      { heading: "Escopo e entrega", body: ["O trabalho é entregue conforme o escopo acordado. Páginas, módulos, telas administrativas, integrações e expectativas de suporte devem ser esclarecidos antes do início.", "O prazo de entrega depende do tamanho do projeto, prontidão do conteúdo, complexidade técnica e velocidade de retorno do cliente."] },
      { heading: "Revisões e mudanças", body: ["Revisões ligadas ao escopo podem ser tratadas para que a entrega corresponda à estrutura acordada.", "Novas páginas, novos recursos, novos módulos, fluxos diferentes e grandes pedidos de redesign são avaliados como novo escopo."] },
      { heading: "Serviços de terceiros", body: ["Domínio, hospedagem, e-mail, pagamento, SMS, WhatsApp, APIs, marketplaces, licenças e outros serviços externos podem ter seus próprios custos e regras.", "Interrupções, limites, mudanças de preço ou alterações de política de serviços externos não são tratados como bugs diretos do software."] },
      { heading: "Trabalhos legais e regulados", body: ["A infraestrutura técnica pode ser desenvolvida, mas decisões legais, fiscais, médicas, financeiras, setoriais e oficiais devem ser revisadas pelos especialistas relevantes.", "O cliente é responsável por verificar os requisitos legais e operacionais do próprio modelo de negócio."] },
    ],
  },
};

export const itTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Domande frequenti",
    description: "Domande comuni su siti web, cataloghi, ordini WhatsApp, appuntamenti, pannelli amministrativi, integrazioni, software su misura, manutenzione, prezzi e consegna.",
    sections: [
      { heading: "Come inizia un progetto?", body: ["Prima si chiariscono esigenza, obiettivo, situazione attuale e risultato atteso. Poi vengono definiti ambito, schermate, moduli, integrazioni e percorso di consegna.", "Se non sai ancora esattamente cosa ti serve, puoi descrivere la tua azienda e il problema da risolvere. La struttura giusta può essere scelta insieme."] },
      { heading: "Ogni progetto parte dallo stesso pacchetto?", body: ["No. Alcuni progetti possono partire da una struttura adattabile, mentre altri richiedono modelli dati, schermate amministrative, integrazioni o flussi specifici.", "L'obiettivo non è forzare ogni azienda nello stesso modello, ma definire un ambito pratico e utile."] },
      { heading: "Posso vedere un esempio live prima di decidere?", body: ["Sì. Gli esempi live servono a mostrare come possono funzionare sistemi simili. Sono sistemi demo, non elementi di portfolio clienti.", "I progetti completati per clienti vengono mostrati separatamente nel portfolio quando c'è permesso di condivisione."] },
      { heading: "Il sito funziona su mobile?", body: ["Sì. Siti e pannelli vengono preparati per funzionare su telefono, tablet e desktop.", "Se un flusso richiede molti dati o tabelle, il modello d'uso più comodo viene discusso nella pianificazione dell'ambito."] },
      { heading: "Come viene definito il prezzo?", body: ["Il prezzo dipende da numero di pagine, profondità del design, necessità di pannello, struttura dati, integrazioni, automazione, tempi e supporto.", "Un prezzo chiaro viene condiviso dopo aver compreso l'ambito. Nuovi moduli o flussi diversi dopo l'ambito iniziale vengono valutati separatamente."] },
      { heading: "C'è supporto dopo la consegna?", body: ["Sì. Manutenzione, piccoli aggiustamenti tecnici, aggiornamenti di contenuto, nuovi moduli e miglioramenti possono essere pianificati dopo la consegna.", "Supporto non significa redesign illimitato né sviluppo illimitato di nuove funzionalità."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Ambito e prezzi",
    description: "Come vengono chiariti ambito del progetto, prezzo, aspettative di consegna, revisioni e richieste extra prima dell'inizio.",
    sections: [
      { heading: "L'ambito viene prima del prezzo", body: ["Una proposta sana parte dall'ambito. Pagine, moduli, form, esigenze amministrative, integrazioni, contenuto, consegna e supporto vengono rivisti prima del prezzo.", "Questo evita aspettative vaghe e rende il progetto più gestibile."] },
      { heading: "Cosa influenza il prezzo?", body: ["Numero di pagine, livello di design su misura, preparazione contenuti, modello dati, complessità del pannello, integrazioni API/XML, automazione, report, ruoli utente e rapidità di consegna possono influire sul prezzo.", "Un sito vetrina semplice e un pannello operativo non vengono valutati allo stesso modo."] },
      { heading: "Cosa conta come lavoro extra?", body: ["Nuove pagine, nuovi moduli, nuove integrazioni, cambi importanti di direzione visiva, modifiche rilevanti di flusso, migrazione dati e nuovi ruoli utente sono nuovo ambito se non inclusi all'inizio.", "Le richieste extra vengono chiarite e preventivate separatamente prima dello sviluppo."] },
      { heading: "Perché l'ambito chiaro è importante", body: ["Un ambito chiaro protegge entrambe le parti. Il cliente sa cosa verrà consegnato e lo sviluppo procede con meno sorprese.", "L'obiettivo è un processo professionale e sostenibile, non una promessa vaga."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Pacchetti di manutenzione",
    description: "Manutenzione post-consegna, controlli tecnici, aggiornamenti, piccoli aggiustamenti, monitoraggio e pianificazione dei miglioramenti.",
    sections: [
      { heading: "Cosa può includere la manutenzione", body: ["La manutenzione può includere piccoli aggiornamenti di contenuto, controlli tecnici, verifica di disponibilità e form, performance, backup, sicurezza di base e piccole migliorie tecniche.", "L'ambito esatto viene definito in base al tipo di progetto."] },
      { heading: "Cosa non significa manutenzione", body: ["Manutenzione non significa sviluppo illimitato di nuove funzionalità, redesign illimitato o creazione di un flusso completamente diverso.", "Nuove pagine, nuovi moduli, integrazioni e grandi cambi strutturali vengono pianificati come nuovo sviluppo."] },
      { heading: "Chi ha bisogno di manutenzione?", body: ["Siti attivi, cataloghi, flussi e-commerce, pannelli amministrativi e sistemi basati su integrazioni beneficiano di controlli regolari.", "Le verifiche ricorrenti aiutano a individuare problemi prima e mantenere il sistema più sano nel tempo."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Supporto post-consegna",
    description: "Come vengono gestite richieste di supporto, correzioni, modifiche di contenuto, nuove esigenze e miglioramenti dopo la consegna.",
    sections: [
      { heading: "Supporto dopo la consegna", body: ["Dopo la consegna può esserci supporto per domande, piccoli aggiustamenti tecnici, spiegazioni d'uso, aggiornamenti di contenuto e pianificazione di miglioramenti.", "Tipo e durata del supporto dipendono dall'ambito del progetto e dall'accordo."] },
      { heading: "Bug o nuova richiesta", body: ["Un bug è qualcosa incluso nell'ambito concordato che non funziona come previsto. Una nuova richiesta è una pagina, funzione, modulo, integrazione o flusso non incluso all'inizio.", "Questa distinzione mantiene il processo corretto e chiaro."] },
      { heading: "Come richiedere supporto", body: ["Descrivi il problema con chiarezza, indica pagina o schermata, spiega cosa ti aspettavi e invia uno screenshot se possibile.", "Informazioni chiare aiutano il supporto ad avanzare più velocemente."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Lavoro sicuro tramite Bionluk",
    description: "Una nota chiara sull'uso di Bionluk come livello di fiducia per ordine, comunicazione, conferma dell'ambito e sicurezza di consegna quando ha senso.",
    sections: [
      { heading: "Perché può essere usato Bionluk", body: ["Bionluk può essere usato come canale sicuro quando il cliente preferisce un tracciamento dell'ordine basato su piattaforma e un flusso d'acquisto familiare.", "È opzionale; anche la comunicazione diretta può essere usata in base al progetto."] },
      { heading: "L'ambito deve comunque essere chiaro", body: ["Che si lavori tramite Bionluk o direttamente, l'ambito deve essere chiarito prima dell'inizio.", "Pagine, moduli, aspettative di consegna, revisioni e limiti del lavoro extra devono essere scritti con chiarezza."] },
      { heading: "Esempi live e portfolio sono separati", body: ["Gli esempi live sono sistemi demo adattabili. Gli elementi del portfolio sono progetti clienti completati mostrati in base al permesso.", "Questa distinzione viene mantenuta chiara affinché il cliente capisca cosa sta vedendo."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Processo di lavoro",
    description: "Il processo passo dopo passo per capire l'esigenza, definire l'ambito, preparare il sistema, condividere anteprime, consegnare, pubblicare e supportare.",
    sections: [
      { heading: "1. L'esigenza viene chiarita", body: ["Si raccolgono tipo di azienda, obiettivo, situazione attuale, pagine o moduli richiesti, esempi e necessità tecniche.", "Se il cliente non è sicuro, il primo passo è identificare il punto di partenza corretto."] },
      { heading: "2. L'ambito viene definito", body: ["Schermate, pagine, form, aree amministrative, integrazioni, responsabilità sui contenuti, consegna e supporto vengono scritti con chiarezza.", "I punti vaghi vengono discussi prima dell'inizio dello sviluppo."] },
      { heading: "3. Inizia lo sviluppo", body: ["Il sistema viene preparato secondo l'ambito concordato. Contenuto, ordine visivo, responsività e flussi tecnici vengono sviluppati insieme.", "Nei progetti adatti, l'avanzamento può essere condiviso con link di anteprima o revisioni per fase."] },
      { heading: "4. Revisione e consegna", body: ["Il lavoro preparato viene rivisto, i flussi principali vengono controllati e le revisioni legate all'ambito vengono gestite.", "Dopo l'approvazione, il sito o sistema viene preparato per pubblicazione o consegna."] },
      { heading: "5. Supporto e miglioramenti", body: ["Dopo la consegna, manutenzione, supporto, nuovi moduli o miglioramenti aggiuntivi possono essere pianificati separatamente.", "L'obiettivo è mantenere il sistema sostenibile, non lasciarlo senza gestione dopo il lancio."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "Informazioni KVKK",
    description: "Informazioni generali sulla responsabilità dei dati personali, contenuti forniti dal cliente, form, infrastruttura tecnica e necessità di revisione legale.",
    sections: [
      { heading: "Nota generale", body: ["Questa pagina è una nota informativa sulla responsabilità dei dati e non sostituisce una consulenza legale.", "Testi legali finali, consensi e decisioni di conformità devono essere verificati dal cliente e dagli specialisti pertinenti."] },
      { heading: "Ruolo tecnico", body: ["Form, campi dati, schermate amministrative, flussi di archiviazione e meccanismi di notifica possono essere preparati tecnicamente secondo l'ambito concordato.", "Quali dati vengono raccolti e quale base legale viene usata devono essere chiariti dal cliente."] },
      { heading: "Responsabilità del cliente", body: ["Il cliente è responsabile di accuratezza, legalità e diritti d'uso di contenuti, dati, immagini, testi e processi che fornisce.", "I settori regolamentati devono ricevere una revisione legale o professionale separata."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Informativa sulla privacy",
    description: "Informazioni generali sulla privacy per form di contatto, richieste, valutazione di progetto e informazioni inviate dal cliente.",
    sections: [
      { heading: "Informazioni raccolte", body: ["Quando contatti NT Web Solutions, nome, azienda, e-mail, telefono, tipo di progetto e messaggio possono essere raccolti per rispondere alla richiesta.", "Queste informazioni vengono usate per valutare il progetto e comunicare con te."] },
      { heading: "Uso delle informazioni", body: ["Le informazioni inviate vengono usate per comunicazione, valutazione dell'ambito, preparazione della proposta, supporto e follow-up della richiesta.", "Non vengono usate per acquisti automatici nascosti o abbonamenti non correlati."] },
      { heading: "Servizi di terze parti", body: ["E-mail, WhatsApp, provider di form, hosting, analytics o altri servizi tecnici possono essere usati in base alla configurazione del sito.", "Ogni servizio di terze parti può avere proprie regole di privacy e trattamento dati."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Informativa sui cookie",
    description: "Informazioni generali su cookie, archiviazione tecnica, analytics, preferenze e servizi di terze parti che possono essere usati nel sito.",
    sections: [
      { heading: "Cosa sono i cookie", body: ["I cookie sono piccoli elementi di archiviazione usati dai siti per funzionamento tecnico, preferenze, analytics o integrazioni di servizi.", "L'uso esatto dei cookie può cambiare in base agli strumenti e alle integrazioni attive sul sito."] },
      { heading: "Possibili tipi di cookie", body: ["I cookie necessari possono supportare funzioni essenziali del sito. Cookie di analytics o performance possono aiutare a capire l'uso delle pagine. Strumenti di terze parti possono impostare cookie propri.", "Puoi gestire i cookie dalle impostazioni del browser."] },
      { heading: "Nessun pagamento diretto su questo sito", body: ["Il sito NT Web Solutions viene usato per informazioni e richieste di preventivo. Non raccoglie pagamenti direttamente dal sito.", "Se in futuro verranno aggiunti strumenti di terze parti, il loro comportamento sui cookie dovrà essere rivisto separatamente."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Condizioni di lavoro",
    description: "Condizioni generali su ambito, consegna, revisioni, supporto, servizi di terze parti, responsabilità del cliente e richieste extra.",
    sections: [
      { heading: "Ambito e consegna", body: ["Il lavoro viene consegnato secondo l'ambito concordato. Pagine, moduli, schermate amministrative, integrazioni e aspettative di supporto devono essere chiariti prima dell'inizio.", "Il tempo di consegna dipende da dimensione del progetto, prontezza dei contenuti, complessità tecnica e rapidità di feedback del cliente."] },
      { heading: "Revisioni e modifiche", body: ["Le revisioni legate all'ambito possono essere gestite affinché la consegna corrisponda alla struttura concordata.", "Nuove pagine, nuove funzioni, nuovi moduli, flussi diversi e grandi richieste di redesign vengono valutati come nuovo ambito."] },
      { heading: "Servizi di terze parti", body: ["Dominio, hosting, e-mail, pagamenti, SMS, WhatsApp, API, marketplace, licenze e altri servizi esterni possono avere costi e regole propri.", "Interruzioni, limiti, cambi di prezzo o modifiche di policy di servizi esterni non sono trattati come bug diretti del software."] },
      { heading: "Lavori legali e regolamentati", body: ["L'infrastruttura tecnica può essere sviluppata, ma decisioni legali, fiscali, mediche, finanziarie, settoriali e ufficiali devono essere verificate dagli specialisti pertinenti.", "Il cliente è responsabile della verifica dei requisiti legali e operativi del proprio modello di business."] },
    ],
  },
};

export const nlTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "Veelgestelde vragen",
    description: "Veelgestelde vragen over websites, catalogi, WhatsApp-bestellingen, afspraken, beheerpaneels, integraties, maatwerksoftware, onderhoud, prijzen en oplevering.",
    sections: [
      { heading: "Hoe start een project?", body: ["Eerst worden behoefte, doel, huidige situatie en verwacht resultaat verduidelijkt. Daarna worden scope, schermen, modules, integraties en oplevering bepaald.", "Als je nog niet precies weet wat je nodig hebt, kun je je bedrijf en het probleem beschrijven. De juiste structuur kan samen worden gekozen."] },
      { heading: "Begint elk project met hetzelfde pakket?", body: ["Nee. Sommige projecten kunnen starten vanuit een aanpasbare structuur, terwijl andere specifieke datamodellen, beheerschermen, integraties of workflows nodig hebben.", "Het doel is niet elk bedrijf in hetzelfde sjabloon te duwen, maar een praktische en nuttige scope te bepalen."] },
      { heading: "Kan ik eerst een live voorbeeld bekijken?", body: ["Ja. Live voorbeelden laten zien hoe vergelijkbare systemen kunnen werken. Het zijn demosystemen, geen portfolio-items van klanten.", "Afgeronde klantprojecten worden apart in het portfolio getoond wanneer er toestemming is."] },
      { heading: "Werkt de site op mobiel?", body: ["Ja. Websites en paneels worden voorbereid voor telefoon, tablet en desktop.", "Als een workflow veel data of tabellen bevat, wordt het meest comfortabele gebruiksmodel tijdens de scopeplanning besproken."] },
      { heading: "Hoe wordt de prijs bepaald?", body: ["De prijs hangt af van aantal pagina's, ontwerpdiepte, behoefte aan een paneel, datastructuur, integraties, automatisering, deadline en ondersteuning.", "Een duidelijke prijs wordt gedeeld nadat de scope is begrepen. Nieuwe modules of andere flows na de eerste scope worden apart beoordeeld."] },
      { heading: "Is er ondersteuning na oplevering?", body: ["Ja. Onderhoud, kleine technische aanpassingen, contentupdates, nieuwe modules en verbeteringen kunnen na oplevering worden gepland.", "Ondersteuning betekent geen onbeperkt redesign of onbeperkte ontwikkeling van nieuwe functies."] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "Scope en prijsstelling",
    description: "Hoe projectscope, prijs, opleververwachtingen, revisies en extra verzoeken voor de start duidelijk worden gemaakt.",
    sections: [
      { heading: "Scope komt vóór prijs", body: ["Een gezonde offerte begint met scope. Pagina's, modules, formulieren, beheerbehoeften, integraties, content, oplevering en ondersteuning worden bekeken vóór de prijs.", "Dit voorkomt vage verwachtingen en maakt het project beter beheersbaar."] },
      { heading: "Wat beïnvloedt de prijs?", body: ["Aantal pagina's, maatwerkontwerp, contentvoorbereiding, datamodel, complexiteit van het paneel, API/XML-integraties, automatisering, rapportages, gebruikersrollen en snelheid van oplevering kunnen de prijs beïnvloeden.", "Een eenvoudige presentatiesite en een operationeel paneel worden niet hetzelfde geprijsd."] },
      { heading: "Wat telt als extra werk?", body: ["Nieuwe pagina's, modules, integraties, grote visuele koerswijzigingen, belangrijke flowwijzigingen, datamigratie en nieuwe gebruikersrollen zijn nieuwe scope als ze niet vanaf het begin zijn opgenomen.", "Extra verzoeken worden eerst verduidelijkt en apart begroot."] },
      { heading: "Waarom duidelijke scope belangrijk is", body: ["Duidelijke scope beschermt beide kanten. De klant weet wat wordt opgeleverd en ontwikkeling verloopt met minder verrassingen.", "Het doel is een professioneel en duurzaam opleverproces, geen vage belofte."] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "Onderhoudspakketten",
    description: "Onderhoud na oplevering, technische controles, updates, kleine aanpassingen, monitoring en verbeterplanning voor websites en systemen.",
    sections: [
      { heading: "Wat onderhoud kan bevatten", body: ["Onderhoud kan kleine contentupdates, technische controles, beschikbaarheids- en formulierchecks, performancecontrole, backupcontrole, basisveiligheid en kleine technische verbeteringen bevatten.", "De exacte scope wordt bepaald volgens het type project."] },
      { heading: "Wat onderhoud niet betekent", body: ["Onderhoud betekent geen onbeperkte ontwikkeling van nieuwe functies, onbeperkt redesign of een volledig andere workflow.", "Nieuwe pagina's, modules, integraties en grote structurele wijzigingen worden als nieuwe ontwikkelscope gepland."] },
      { heading: "Wie heeft onderhoud nodig?", body: ["Actieve websites, catalogi, e-commerceflows, beheerpaneels en systemen met integraties profiteren van regelmatige controles.", "Terugkerende controles helpen problemen eerder te vinden en het systeem gezonder te houden."] },
    ],
  },
  "support": {
    slug: "support",
    title: "Ondersteuning na oplevering",
    description: "Hoe supportvragen, bugfixes, contentwijzigingen, nieuwe behoeften en verbeteringen na oplevering worden behandeld.",
    sections: [
      { heading: "Support na oplevering", body: ["Na oplevering kan er ondersteuning zijn voor vragen, kleine technische aanpassingen, uitleg over gebruik, contentupdates en verbeterplanning.", "Type en duur van support hangen af van projectscope en afspraak."] },
      { heading: "Bug of nieuw verzoek", body: ["Een bug is iets binnen de afgesproken scope dat niet werkt zoals verwacht. Een nieuw verzoek is een pagina, functie, module, integratie of flow die niet in de oorspronkelijke scope zat.", "Dit onderscheid houdt het proces eerlijk en duidelijk."] },
      { heading: "Support aanvragen", body: ["Beschrijf het probleem duidelijk, vermeld pagina of scherm, leg uit wat je verwachtte en stuur indien mogelijk een screenshot.", "Duidelijke informatie helpt support sneller vooruit."] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "Veilig werken via Bionluk",
    description: "Een duidelijke notitie over het gebruik van Bionluk als vertrouwenslaag voor bestelling, communicatie, scopebevestiging en opleverzekerheid wanneer dat zinvol is.",
    sections: [
      { heading: "Waarom Bionluk gebruikt kan worden", body: ["Bionluk kan worden gebruikt als veilig kanaal wanneer de klant platformgebaseerde ordertracking en een bekend aankoopproces wil.", "Het is optioneel; directe communicatie kan ook worden gebruikt afhankelijk van het project."] },
      { heading: "Scope moet alsnog duidelijk zijn", body: ["Of er via Bionluk of direct wordt gewerkt, de scope moet vóór de start duidelijk zijn.", "Pagina's, modules, opleververwachtingen, revisies en grenzen van extra werk moeten helder geschreven zijn."] },
      { heading: "Live voorbeelden en portfolio zijn gescheiden", body: ["Live voorbeelden zijn aanpasbare demosystemen. Portfolio-items zijn afgeronde klantprojecten die volgens toestemming worden getoond.", "Dit onderscheid blijft duidelijk zodat de klant begrijpt waar hij naar kijkt."] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "Werkwijze",
    description: "Het stapsgewijze proces om behoefte te begrijpen, scope te bepalen, het systeem voor te bereiden, previews te delen, op te leveren, te lanceren en support te geven.",
    sections: [
      { heading: "1. De behoefte wordt verduidelijkt", body: ["Bedrijfstype, doel, huidige situatie, gewenste pagina's of modules, voorbeelden en technische behoeften worden verzameld.", "Als de klant niet zeker is, is de eerste stap het juiste startpunt bepalen."] },
      { heading: "2. De scope wordt bepaald", body: ["Schermen, pagina's, formulieren, beheergebieden, integraties, contentverantwoordelijkheid, oplevering en support worden helder vastgelegd.", "Vage punten worden besproken voordat ontwikkeling start."] },
      { heading: "3. Ontwikkeling begint", body: ["Het systeem wordt voorbereid volgens de afgesproken scope. Content, visuele ordening, responsiveness en technische flows worden samen ontwikkeld.", "Bij geschikte projecten kan voortgang worden gedeeld via previewlinks of fasereviews."] },
      { heading: "4. Review en oplevering", body: ["Het voorbereide werk wordt gereviewd, hoofdflows worden gecontroleerd en scopegebonden revisies worden behandeld.", "Na goedkeuring wordt de site of het systeem voorbereid voor lancering of oplevering."] },
      { heading: "5. Support en verbeteringen", body: ["Na oplevering kunnen onderhoud, support, nieuwe modules of aanvullende verbeteringen apart worden gepland.", "Het doel is het systeem duurzaam te houden, niet het onbeheerd achter te laten na lancering."] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "KVKK-informatie",
    description: "Algemene informatie over verantwoordelijkheid voor persoonsgegevens, door de klant aangeleverde content, formulieren, technische infrastructuur en juridische controle.",
    sections: [
      { heading: "Algemene notitie", body: ["Deze pagina is een informatieve notitie over dataverantwoordelijkheid en vervangt geen juridisch advies.", "Definitieve juridische teksten, toestemmingen en compliancebeslissingen moeten door klant en relevante specialisten worden gecontroleerd."] },
      { heading: "Technische rol", body: ["Formulieren, datavelden, beheerschermen, opslagflows en notificatiemechanismen kunnen technisch worden voorbereid volgens de afgesproken scope.", "Welke data wordt verzameld en welke juridische basis wordt gebruikt, moet door de klant worden verduidelijkt."] },
      { heading: "Verantwoordelijkheid van de klant", body: ["De klant is verantwoordelijk voor juistheid, legaliteit en gebruiksrechten van aangeleverde content, data, beelden, teksten en processen.", "Gereguleerde sectoren moeten aparte juridische of professionele controle krijgen."] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "Privacybeleid",
    description: "Algemene privacyinformatie voor contactformulieren, communicatieverzoeken, projectevaluatie en informatie die door de klant wordt aangeleverd.",
    sections: [
      { heading: "Verzamelde informatie", body: ["Wanneer je contact opneemt met NT Web Solutions, kunnen naam, bedrijf, e-mail, telefoon, projecttype en bericht worden verzameld om op je aanvraag te reageren.", "Deze informatie wordt gebruikt om het project te beoordelen en met je te communiceren."] },
      { heading: "Gebruik van informatie", body: ["Verzonden informatie wordt gebruikt voor communicatie, scopebeoordeling, offertevoorbereiding, support en opvolging van je aanvraag.", "Ze wordt niet gebruikt voor verborgen automatische aankopen of niet-gerelateerde abonnementen."] },
      { heading: "Diensten van derden", body: ["E-mail, WhatsApp, formulierproviders, hosting, analytics of andere technische diensten kunnen worden gebruikt volgens de siteconfiguratie.", "Elke externe dienst kan eigen privacy- en dataverwerkingsregels hebben."] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Cookiebeleid",
    description: "Algemene informatie over cookies, technische opslag, analytics, voorkeuren en externe diensten die op de site gebruikt kunnen worden.",
    sections: [
      { heading: "Wat cookies zijn", body: ["Cookies zijn kleine opslagitems die websites gebruiken voor technische werking, voorkeuren, analytics of service-integraties.", "Het exacte cookiegebruik kan veranderen volgens actieve tools en integraties op de site."] },
      { heading: "Mogelijke soorten cookies", body: ["Noodzakelijke cookies kunnen essentiële sitefuncties ondersteunen. Analytics- of performancecookies kunnen helpen pagina-gebruik te begrijpen. Externe tools kunnen eigen cookies plaatsen.", "Je kunt cookies beheren via de browserinstellingen."] },
      { heading: "Geen directe betaling op deze site", body: ["De site van NT Web Solutions wordt gebruikt voor informatie en offerteaanvragen. De site int geen betalingen direct.", "Als later externe tools worden toegevoegd, moet hun cookiegedrag apart worden gecontroleerd."] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "Werkvoorwaarden",
    description: "Algemene voorwaarden over scope, oplevering, revisies, support, externe diensten, klantverantwoordelijkheden en extra verzoeken.",
    sections: [
      { heading: "Scope en oplevering", body: ["Werk wordt opgeleverd volgens de afgesproken scope. Pagina's, modules, beheerschermen, integraties en supportverwachtingen moeten vóór de start duidelijk zijn.", "De oplevertijd hangt af van projectgrootte, gereedheid van content, technische complexiteit en reactiesnelheid van de klant."] },
      { heading: "Revisies en wijzigingen", body: ["Scopegebonden revisies kunnen worden behandeld zodat de oplevering overeenkomt met de afgesproken structuur.", "Nieuwe pagina's, functies, modules, andere flows en grote redesignverzoeken worden als nieuwe scope beoordeeld."] },
      { heading: "Diensten van derden", body: ["Domein, hosting, e-mail, betaling, SMS, WhatsApp, API's, marketplaces, licenties en andere externe diensten kunnen eigen kosten en regels hebben.", "Storingen, limieten, prijswijzigingen of beleidswijzigingen van externe diensten worden niet als directe softwarebug behandeld."] },
      { heading: "Juridisch en gereguleerd werk", body: ["Technische infrastructuur kan worden ontwikkeld, maar juridische, fiscale, medische, financiële, sectorale en officiële beslissingen moeten door relevante specialisten worden gecontroleerd.", "De klant is verantwoordelijk voor het controleren van wettelijke en operationele vereisten van het eigen businessmodel."] },
    ],
  },
};

export const zhTrustPages: Record<string, TrustPage> = {
  "faq": {
    slug: "faq",
    title: "常见问题",
    description: "关于网站、目录、WhatsApp 订单、预约、管理面板、集成、定制软件、维护、价格和交付的常见问题。",
    sections: [
      { heading: "项目如何开始？", body: ["首先明确需求、目标、当前情况和期望结果。之后再确定范围、页面、模块、集成和交付方式。", "如果您还不确定自己需要什么，可以先描述企业和问题，我们可以一起选择合适结构。"] },
      { heading: "每个项目都从同一个套餐开始吗？", body: ["不是。有些项目可以从可适配结构开始，有些则需要专门的数据模型、管理屏幕、集成或工作流。", "目标不是把每个企业塞进同一个模板，而是确定实用且有价值的范围。"] },
      { heading: "可以先查看在线示例吗？", body: ["可以。在线示例用于展示类似系统如何运行。它们是演示系统，不是客户作品集项目。", "已完成客户项目会在获得许可后单独展示在作品集中。"] },
      { heading: "网站支持移动端吗？", body: ["支持。网站和面板会为手机、平板和桌面端准备。", "如果工作流包含大量数据或表格，会在范围规划中讨论最舒适的使用方式。"] },
      { heading: "价格如何确定？", body: ["价格取决于页面数量、设计深度、是否需要面板、数据结构、集成、自动化、截止时间和支持范围。", "范围明确后才会给出清晰价格。初始范围后的新模块或不同流程会单独评估。"] },
      { heading: "交付后有支持吗？", body: ["有。维护、小型技术调整、内容更新、新模块和改进可以在交付后规划。", "支持不代表无限制重设计或无限制开发新功能。"] },
    ],
  },
  "scope-pricing": {
    slug: "scope-pricing",
    title: "范围和定价",
    description: "项目开始前如何明确范围、价格、交付预期、修改和额外需求。",
    sections: [
      { heading: "范围先于价格", body: ["健康的报价从范围开始。页面、模块、表单、管理需求、集成、内容、交付和支持会在报价前一起查看。", "这样可以避免模糊预期，让项目更容易管理。"] },
      { heading: "哪些因素影响价格？", body: ["页面数量、定制设计、内容准备、数据模型、面板复杂度、API/XML 集成、自动化、报告、用户角色和交付速度都可能影响价格。", "简单展示网站和运营面板不会按同一种方式定价。"] },
      { heading: "什么算额外工作？", body: ["如果新页面、模块、集成、大幅视觉方向变化、关键流程变化、数据迁移或新用户角色没有包含在初始范围内，就属于新范围。", "额外需求会先被明确，再单独报价。"] },
      { heading: "为什么清晰范围重要？", body: ["清晰范围保护双方。客户知道会交付什么，开发也会少一些意外。", "目标是专业、可持续的交付流程，而不是模糊承诺。"] },
    ],
  },
  "maintenance-packages": {
    slug: "maintenance-packages",
    title: "维护套餐",
    description: "网站和系统交付后的维护、技术检查、更新、小调整、监控和改进规划。",
    sections: [
      { heading: "维护可以包含什么？", body: ["维护可以包含小型内容更新、技术检查、可用性和表单检查、性能检查、备份检查、基础安全检查和小型技术改进。", "准确范围会根据项目类型确定。"] },
      { heading: "维护不等于什么？", body: ["维护不代表无限制开发新功能、无限制重设计或完全不同的工作流。", "新页面、模块、集成和大型结构变化会作为新的开发范围规划。"] },
      { heading: "谁需要维护？", body: ["活跃网站、目录、电商流程、管理面板和带集成的系统都适合定期检查。", "周期性检查有助于更早发现问题，让系统保持更健康。"] },
    ],
  },
  "support": {
    slug: "support",
    title: "交付后支持",
    description: "交付后如何处理支持请求、bug 修复、内容修改、新需求和改进。",
    sections: [
      { heading: "交付后支持", body: ["交付后可以针对问题、小型技术调整、使用说明、内容更新和改进规划提供支持。", "支持类型和持续时间取决于项目范围和约定。"] },
      { heading: "Bug 还是新需求？", body: ["Bug 是约定范围内本应正常运行但没有按预期工作的内容。新需求是初始范围中没有的页面、功能、模块、集成或流程。", "这个区分让流程更公平、更清晰。"] },
      { heading: "如何请求支持？", body: ["请清楚描述问题，指出页面或屏幕，说明您原本期待的结果，并尽可能附上截图。", "信息越清晰，支持推进越快。"] },
    ],
  },
  "safe-bionluk": {
    slug: "safe-bionluk",
    title: "通过 Bionluk 安全合作",
    description: "在合适情况下，Bionluk 可作为订单、沟通、范围确认和交付安全的信任层。",
    sections: [
      { heading: "为什么可以使用 Bionluk？", body: ["当客户希望通过平台跟踪订单并使用熟悉的购买流程时，可以使用 Bionluk。", "这不是强制选项；根据项目也可以直接沟通。"] },
      { heading: "范围仍然必须清楚", body: ["无论通过 Bionluk 还是直接合作，开始前都必须明确范围。", "页面、模块、交付预期、修改和额外工作的边界都应写清楚。"] },
      { heading: "在线示例和作品集是分开的", body: ["在线示例是可适配的演示系统。作品集项目是已完成的真实客户项目，会根据许可展示。", "这个区别会保持清晰，让客户知道自己正在查看什么。"] },
    ],
  },
  "work-process": {
    slug: "work-process",
    title: "工作流程",
    description: "从理解需求、确定范围、准备系统、分享预览，到交付、上线和支持的分步流程。",
    sections: [
      { heading: "1. 明确需求", body: ["收集企业类型、目标、当前情况、需要的页面或模块、参考示例和技术需求。", "如果客户不确定，第一步就是找到正确的起点。"] },
      { heading: "2. 确定范围", body: ["屏幕、页面、表单、管理区域、集成、内容责任、交付和支持会被清楚记录。", "模糊点会在开发开始前讨论。"] },
      { heading: "3. 开始开发", body: ["系统会按照约定范围准备。内容、视觉秩序、响应式结构和技术流程会一起开发。", "合适的项目可以通过预览链接或阶段评审分享进度。"] },
      { heading: "4. 审查和交付", body: ["准备好的工作会被审查，主要流程会被检查，范围内修改会被处理。", "确认后，网站或系统会准备上线或交付。"] },
      { heading: "5. 支持和改进", body: ["交付后可以单独规划维护、支持、新模块或额外改进。", "目标是让系统保持可持续，而不是上线后无人管理。"] },
    ],
  },
  "kvkk": {
    slug: "kvkk",
    title: "KVKK 信息",
    description: "关于个人数据责任、客户提供内容、表单、技术基础设施和法律检查的一般信息。",
    sections: [
      { heading: "一般说明", body: ["本页是关于数据责任的信息说明，不替代法律建议。", "最终法律文本、同意机制和合规决定应由客户和相关专家检查。"] },
      { heading: "技术角色", body: ["表单、数据字段、管理屏幕、存储流程和通知机制可以按照约定范围从技术上准备。", "收集哪些数据以及使用哪种法律依据，需要由客户明确。"] },
      { heading: "客户责任", body: ["客户负责所提供内容、数据、图片、文本和流程的准确性、合法性和使用权。", "受监管行业应接受单独的法律或专业检查。"] },
    ],
  },
  "privacy": {
    slug: "privacy",
    title: "隐私政策",
    description: "关于联系表单、沟通请求、项目评估和客户提交信息的一般隐私说明。",
    sections: [
      { heading: "收集的信息", body: ["当您联系 NT Web Solutions 时，可能会收集姓名、公司、电子邮件、电话、项目类型和消息，以便回复您的请求。", "这些信息用于评估项目并与您沟通。"] },
      { heading: "信息使用", body: ["提交的信息用于沟通、范围评估、报价准备、支持和请求跟进。", "不会用于隐藏的自动购买或无关订阅。"] },
      { heading: "第三方服务", body: ["根据网站配置，可能使用电子邮件、WhatsApp、表单提供商、托管、analytics 或其他技术服务。", "每个第三方服务可能有自己的隐私和数据处理规则。"] },
    ],
  },
  "cookies": {
    slug: "cookies",
    title: "Cookie 政策",
    description: "关于 Cookie、技术存储、analytics、偏好和网站可能使用的外部服务的一般信息。",
    sections: [
      { heading: "什么是 Cookie？", body: ["Cookie 是网站用于技术运行、偏好、analytics 或服务集成的小型存储项。", "准确的 Cookie 使用方式可能会根据网站启用的工具和集成而变化。"] },
      { heading: "可能的 Cookie 类型", body: ["必要 Cookie 可以支持网站基本功能。Analytics 或 performance Cookie 可帮助理解页面使用情况。外部工具可能设置自己的 Cookie。", "您可以在浏览器设置中管理 Cookie。"] },
      { heading: "本站不直接收款", body: ["NT Web Solutions 网站用于信息展示和报价请求，不直接在网站上收取付款。", "如果之后加入外部工具，其 Cookie 行为应单独检查。"] },
    ],
  },
  "terms": {
    slug: "terms",
    title: "合作条款",
    description: "关于范围、交付、修改、支持、第三方服务、客户责任和额外需求的一般条款。",
    sections: [
      { heading: "范围和交付", body: ["工作会按照约定范围交付。页面、模块、管理屏幕、集成和支持预期应在开始前明确。", "交付时间取决于项目规模、内容准备情况、技术复杂度和客户反馈速度。"] },
      { heading: "修改和变更", body: ["范围内修改可以处理，以确保交付符合约定结构。", "新页面、功能、模块、不同流程和大型重设计请求会作为新范围评估。"] },
      { heading: "第三方服务", body: ["域名、托管、电子邮件、支付、SMS、WhatsApp、API、marketplace、许可证和其他外部服务可能有自己的费用和规则。", "外部服务的故障、限制、价格变化或政策变化不会被视为直接的软件 bug。"] },
      { heading: "法律和受监管工作", body: ["可以开发技术基础设施，但法律、税务、医疗、金融、行业和官方决定必须由相关专家检查。", "客户负责检查自身商业模式的法律和运营要求。"] },
    ],
  },
};

export function getTrustPage(slug: string, locale: "tr" | "en" | "de" | "fr" | "es" | "ar" | "ru" | "pt" | "it" | "nl" | "zh" = "tr") {
  if (locale === "en") return enTrustPages[slug] ?? trustPages[slug];
  if (locale === "de") return deTrustPages[slug] ?? trustPages[slug];
  if (locale === "fr") return frTrustPages[slug] ?? trustPages[slug];
  if (locale === "es") return esTrustPages[slug] ?? trustPages[slug];
  if (locale === "ar") return arTrustPages[slug] ?? trustPages[slug];
  if (locale === "ru") return ruTrustPages[slug] ?? trustPages[slug];
  if (locale === "pt") return ptTrustPages[slug] ?? trustPages[slug];
  if (locale === "it") return itTrustPages[slug] ?? trustPages[slug];
  if (locale === "nl") return nlTrustPages[slug] ?? trustPages[slug];
  if (locale === "zh") return zhTrustPages[slug] ?? trustPages[slug];
  return trustPages[slug];
}
