# Canlı Örnekler Profesyonelleştirme Planı

Bu planın amacı NT Works sitesindeki canlı örnekleri yalnızca "demo proje" gibi değil; müşterinin satın almadan önce gezebileceği, güven veren, sektör ve hizmet sayfalarını besleyen satış varlıkları haline getirmektir.

## 0. Seviye 8 Bu Tur Kararı

- [x] Mevcut çalışan demo uygulamalarına dokunulmadı; bu turda NT Works site sunumu iyileştirildi.
- [x] Yeni üretilecek demo fikirleri canlı deneme açılmadan kart olarak kaydedildi.
- [x] Planlanan demo kartlarında "Canlı İncele" kapalı bırakıldı.
- [x] Canlı örnekler sayfasına web, katalog, panel, CRM, entegrasyon, randevu, sektörel, AI ve planlanan filtreleri eklendi.
- [x] Ziyaretçi her karttan detay sayfasına ve "Benzerini İste" akışına gidebilir.
- [x] Gelecekte üretilecek canlı örnekler için basit takip listesi `src/data/projects.ts` içindeki `status: "planned"` kartlarında tutuluyor.

## 1. Mevcut Durum

Canlı örnek sayfasında demo olarak gösterilen başlıca işler:

- [x] Kurumsal Web Sitesi Örneği
- [x] E-Ticaret Sistemi Canlı Örneği
- [x] WhatsApp Siparişli Katalog Örneği
- [x] Randevu / Rezervasyon Sistemi Örneği
- [x] Admin Panelli İşletme Sistemi Örneği
- [x] Landing Page / Tek Sayfa Satış Örneği
- [x] Cloud Dosya Yönetim Platformu Örneği
- [x] Görev Yönetimi Sistemi Örneği
- [x] AI / Log Analiz Paneli Örneği
- [x] Video Analiz Platformu Örneği

Deploy/static demo tarafında hazır görünenler:

- [ ] `kurumsal-web-sitesi`
- [ ] `landing-page`
- [ ] `whatsapp-siparis-katalog`
- [ ] `randevu-rezervasyon-sistemi`
- [ ] `admin-panelli-isletme-sistemi`

İlk kontrol:

- [ ] Canlı örnek sayfasındaki her "Canlı İncele" linki gerçekten çalışan demoya gidiyor mu?
- [ ] Çalışmayan veya yayında olmayan demo varsa buton geçici olarak kapatılacak ya da statik demo üretilecek.
- [ ] Her demo için müşteri işi olmadığı, uyarlanabilir örnek olduğu açık kalacak.

## 2. Profesyonelleştirme Standardı

Her canlı örnekte bulunması gereken standartlar:

- [ ] Gerçekçi sektör senaryosu.
- [ ] İlk ekranda net marka/ürün/sistem sinyali.
- [ ] Mobil ve masaüstünde düzgün çalışan tasarım.
- [ ] Demo içinde boş placeholder metin bırakılmaması.
- [ ] Gerçekçi veri seti: müşteri, ürün, sipariş, randevu, görev, stok veya rapor örnekleri.
- [ ] "Bu demo neyi gösteriyor?" açıklaması sadece NT Works proje detay sayfasında olacak; demo içinde öğretici metin minimum tutulacak.
- [ ] Demo sayfasında gereksiz landing/marketing anlatımı değil, doğrudan kullanılabilir deneyim olacak.
- [ ] Header, footer, CTA ve iletişim akışı gerçek müşteri sitesine uyarlanabilir seviyede olacak.
- [ ] Demo içinde kırık görsel, kırık link, boş sayfa veya çalışmayan buton kalmayacak.
- [ ] Demo hesapları gerekiyorsa proje detay sayfasında gösterilecek.
- [ ] Demo verileri gerçek kişi/kurum bilgisi içermeyecek.
- [ ] Her demo için en az 2 ekran görüntüsü hazırlanacak.
- [ ] Her demo için kapak görseli hazırlanacak.
- [x] Her demo için "kimler için uygun?", "hangi modüller var?", "benzerini yaptır" bilgisi proje detayında standart olacak.

## 3. Mevcut Demoları İyileştirme Listesi

### 3.1 Kurumsal Web Sitesi Örneği

- [ ] Sektör senaryosu netleştirilecek: üretici firma, hizmet şirketi veya B2B tedarikçi.
- [ ] İlk ekranda marka, teklif ve güven sinyali güçlendirilecek.
- [ ] Hizmet detayları, referans alanı, iletişim CTA ve SSS akışı daha gerçekçi yapılacak.
- [ ] B2B üretici / ihracatçı web sitesi varyantı için temel oluşturacak şekilde düzenlenecek.
- [ ] SEO uyumlu başlık, açıklama, Open Graph ve schema kontrol edilecek.

### 3.2 Landing Page / Tek Sayfa Satış Örneği

- [ ] Tek hizmet / tek kampanya senaryosu seçilecek.
- [ ] Reklamdan gelen ziyaretçiyi tek CTA'ya götüren akış güçlendirilecek.
- [ ] Güven alanı, SSS, fiyat/kapsam ve form bölümü eklenecek.
- [ ] Mobilde buton ve metin taşması kontrol edilecek.
- [ ] Alternatif sektör varyantları planlanacak: klinik, kurs, yazılım hizmeti, ürün lansmanı.

### 3.3 WhatsApp Siparişli Katalog Örneği

- [ ] Ürün verileri daha profesyonel hale getirilecek.
- [ ] Kategori, filtre, ürün detay ve WhatsApp mesaj akışı kontrol edilecek.
- [ ] Butik, oto galeri, restoran/QR menü ve toptancı kataloglarına uyarlanabilir varyant mantığı eklenecek.
- [ ] Görseller tek kalite standardına çekilecek.
- [ ] Ürün detay sayfasında fiyat, varyant, açıklama ve WhatsApp CTA netleştirilecek.

### 3.4 Randevu / Rezervasyon Sistemi Örneği

- [ ] Sektör senaryosu netleştirilecek: klinik, güzellik merkezi, danışmanlık veya rent a car.
- [ ] Randevu formu daha gerçekçi alanlarla güncellenecek.
- [ ] Admin takip ekranı varsa görünür hale getirilecek; yoksa eklenecek.
- [ ] Tarih/saat seçimi, durum takibi ve müşteri notu akışı gösterilecek.
- [ ] Demo için örnek randevu verileri hazırlanacak.

### 3.5 Admin Panelli İşletme Sistemi Örneği

- [ ] Dashboard ilk ekranı daha ciddi ve veri dolu hale getirilecek.
- [ ] Müşteri, sipariş, görev, teklif, stok ve rapor modülleri net ayrılacak.
- [ ] Rol/yetki ve durum takibi örnekleri eklenecek.
- [ ] Demo hesap veya demo giriş akışı proje detayında açık yazılacak.
- [ ] B2B, teknik servis, üretici ve ajans paneli varyantlarına temel olacak hale getirilecek.

### 3.6 E-Ticaret Sistemi Canlı Örneği

- [ ] Canlı demo linki çalışıyor mu kontrol edilecek.
- [ ] Ürün listeleme, ürün detay, sepet, checkout ve admin akışı gezilebilir olmalı.
- [ ] Test ödeme/checkout sınırları açık yazılmalı.
- [ ] Ürün görselleri ve ürün açıklamaları gerçekçi yapılmalı.
- [ ] Admin panel ekran görüntüleri hazırlanmalı.

### 3.7 Cloud Dosya Yönetim Platformu

- [ ] Canlı demo linki çalışıyor mu kontrol edilecek.
- [ ] Demo hesaplarıyla giriş akışı test edilecek.
- [ ] Dosya, klasör, yetki, aktivite geçmişi ve admin kontrol ekranları dolu gösterilecek.
- [ ] Bu demo "özel platform / kurumsal iç sistem" kategorisine bağlanacak.
- [ ] Ekran görüntüleri proje detayında daha görünür yapılacak.

### 3.8 Görev Yönetimi Sistemi

- [ ] Canlı demo linki çalışıyor mu kontrol edilecek.
- [ ] Görev listesi, yeni görev, durum güncelleme, PDF çıktı ve rapor akışı gösterilecek.
- [ ] Demo verileri gerçek işletme senaryosuna göre çoğaltılacak.
- [ ] Teknik servis, ajans, üretici ve ekip içi takip varyantlarına bağlanacak.

### 3.9 AI / Log Analiz Paneli

- [ ] Canlı demo linki çalışıyor mu kontrol edilecek.
- [ ] Teknik müşteriye hitap eden açıklama korunacak ama satış dili sadeleştirilecek.
- [ ] Dashboard, incident, log, analiz ve rapor ekranları ekran görüntüsüyle desteklenecek.
- [ ] AI otomasyon ve dashboard hizmetlerine bağlanacak.

### 3.10 Video Analiz Platformu

- [ ] Canlı demo linki çalışıyor mu kontrol edilecek.
- [ ] Video yükleme, analiz sonucu, timeline ve rapor ekranları test edilecek.
- [ ] Çok niş kaldığı için "özel platform / medya analiz sistemi" olarak konumlanacak.
- [ ] Müşteri açısından anlaşılır kullanım senaryosu yazılacak.

## 4. Eklenmesi Gereken Yeni Canlı Örnekler

Bu turda aşağıdaki başlıklar canlı demo olarak üretilmedi; ileride yapılmak üzere canlı denemesi kapalı plan kartı olarak eklendi.

### Öncelik 1 - Satış Getirme İhtimali En Yüksek Demolar

- [x] Teknik SEO Audit Dashboard
- [x] Search Console Hata Analiz Paneli
- [x] SEO Migration Recovery / Redirect Mapping Paneli
- [x] B2B Üretici Web Sitesi
- [x] İhracatçı Firma Web Sitesi
- [x] CRM / Lead Takip Sistemi
- [x] Teklif Takip Sistemi
- [x] Stok ve Sipariş Takip Paneli
- [x] B2B Bayi Sipariş Sistemi
- [x] Teknik Servis İş Takip Paneli

### Öncelik 2 - Sektörel Satış Demoları

- [x] Emlak İlan ve Müşteri Takip Sistemi
- [x] Rent a Car Rezervasyon Sistemi
- [x] Kuyumcu Ürün Katalog ve Fiyat Takip Sistemi
- [x] Turizm Operasyon Paneli
- [x] Klinik Randevu Sistemi
- [x] Güzellik Merkezi Randevu Sistemi
- [x] Restoran QR Menü ve WhatsApp Sipariş Sistemi
- [x] Butik Ürün Katalog Sistemi
- [x] Toptancı B2B Sipariş Sistemi
- [x] Depo ve Sevkiyat Takip Paneli

### Öncelik 3 - Premium / Portföy Gücü Yüksek Demolar

- [x] SaaS MVP Demo Platformu
- [x] Müşteri Paneli / Portal Sistemi
- [x] Bayi Paneli
- [x] Raporlama Dashboard Sistemi
- [x] AI WhatsApp Müşteri Asistanı
- [x] Lead Toplama ve Sınıflandırma Paneli
- [x] Power Apps / SharePoint Operasyon Paneli Temsili Demo
- [x] Sağlık Turizmi Operasyon Paneli
- [x] Üretim ve Sipariş Takip Paneli
- [x] Ajans Müşteri Paneli

## 5. Teknik SEO Demo Fikirleri

Infinity Chassis tecrübesinden sonra NT Works'ün en değerli yeni demo hattı teknik SEO tarafı olacak.

### 5.1 Teknik SEO Audit Dashboard

- [ ] Search Console özet kartları.
- [ ] Tıklama, gösterim, CTR, pozisyon grafik alanları.
- [ ] Indexing problem listesi.
- [ ] 404, 5xx, noindex, canonical ve redirect hata kırılımları.
- [ ] Öncelik skoru: kritik, yüksek, orta, düşük.
- [ ] Teknik görev listesi.
- [ ] PDF rapor oluşturma butonu temsili.

### 5.2 SEO Migration Recovery Paneli

- [ ] Eski URL listesi.
- [ ] Yeni URL önerisi.
- [ ] 301 redirect durumu.
- [ ] Eski trafik değeri.
- [ ] Backlink var/yok bilgisi.
- [ ] Mapping doğruluk skoru.
- [ ] Export CSV butonu temsili.

### 5.3 Search Console Hata Çözüm Demo

- [ ] Search Console sorun tipleri simülasyonu.
- [ ] Her sorun için açıklama, etki ve çözüm adımı.
- [ ] URL inspection sonucu temsili.
- [ ] Doğrulama başlatıldı / beklemede / tamamlandı durumları.

Bu demo grubu NT Works'ü "site yapan kişi" seviyesinden "trafik ve teknik hasar çözen partner" seviyesine çıkarır.

## 6. Orta-Büyük Şirket Algısı Verecek Çalışmalar

Bu bölümün amacı NT Works'e bakan bir yöneticinin "bu sadece küçük işletme sitesi yapan biri değil; operasyon, veri, entegrasyon ve yönetim sistemi mantığını biliyor" demesini sağlamaktır.

### 6.1 Kurumsal Operasyon ve Yönetim Demoları

- [ ] Çok Şubeli İşletme Yönetim Paneli
- [ ] Üretim ve Sipariş Takip Paneli
- [ ] Satın Alma Talep ve Onay Sistemi
- [ ] Depo, Sevkiyat ve Stok Kontrol Paneli
- [ ] Teknik Servis / Bakım Operasyon Paneli
- [ ] İnsan Kaynakları Talep ve İzin Yönetim Paneli
- [ ] Saha Ekipleri Görev ve Raporlama Paneli
- [ ] Bayi / Distribütör Sipariş ve Fiyat Listesi Paneli
- [ ] Proje ve Teklif Yönetim Dashboard'u
- [ ] Müşteri Destek / Ticket Yönetim Sistemi

### 6.2 Yönetici Dashboard ve Raporlama Demoları

- [ ] CEO / Yönetici Özet Dashboard'u
- [ ] Satış Performans Dashboard'u
- [ ] Lead, Teklif ve Dönüşüm Takip Dashboard'u
- [ ] Stok, Sipariş ve Tahsilat Rapor Dashboard'u
- [ ] Pazaryeri Entegrasyon Durum Dashboard'u
- [ ] Web Trafik ve SEO Performans Dashboard'u
- [ ] PDF / Excel dışa aktarma örnekleri
- [ ] Rol bazlı görünüm: yönetici, operasyon, satış, muhasebe

### 6.3 Entegrasyon ve Veri Akışı Demoları

- [ ] XML / API ürün veri aktarım paneli
- [ ] Pazaryeri stok ve fiyat senkronizasyon paneli
- [ ] ERP / muhasebe aktarım simülasyonu
- [ ] Web formundan CRM'e lead aktarma örneği
- [ ] WhatsApp / e-posta bildirim otomasyonu
- [ ] Cron job ve log takip ekranı
- [ ] Hatalı kayıt, eksik alan ve retry mantığı gösterimi
- [ ] Veri import/export merkezi

### 6.4 Kurumsal Güven Sinyali Verecek Detaylar

- [ ] Login, rol ve yetki yapısı.
- [ ] Audit log / işlem geçmişi.
- [ ] Kullanıcı bazlı aksiyon kayıtları.
- [ ] Durum bazlı iş akışı: beklemede, onaylandı, reddedildi, tamamlandı.
- [ ] Filtre, arama, sıralama ve kayıt dışa aktarma.
- [ ] Dashboard metrikleri ve grafikler.
- [ ] Bildirim ve hatırlatma akışı.
- [ ] Yedekleme, bakım ve güvenlik açıklaması.
- [ ] Demo verilerinin gerçekçi ve tutarlı olması.
- [ ] Proje detayında "hangi departmanlar kullanır?" bölümü.

### 6.5 Orta-Büyük Şirket İçin Öncelikli Demo Paketi

İlk etapta şu 5 demo NT Works'ün seviyesini en hızlı yükseltir:

1. [x] B2B Üretici / İhracatçı Web Sitesi
2. [x] SEO Migration Recovery Dashboard
3. [x] CRM + Lead + Teklif Takip Paneli
4. [x] Stok + Sipariş + Sevkiyat Operasyon Paneli
5. [x] Pazaryeri XML/API Entegrasyon Dashboard'u

Bu 5 demo birlikte gösterildiğinde NT Works şu algıyı verir:

- Web sitesi yapabilir.
- Teknik SEO ve migration hasarı analiz edebilir.
- Satış/lead sürecini takip edebilir.
- Operasyonu panelle yönetilebilir hale getirebilir.
- Dış sistemlerle veri akışı kurabilir.

## 7. Her Demo İçin Proje Detay Sayfası Standardı

Her demo detayında şu alanlar olacak:

- [ ] Demo adı.
- [ ] Hedef sektör.
- [ ] Çözdüğü problem.
- [ ] Demo içinde görülebilen modüller.
- [ ] Uyarlanabilir modüller.
- [ ] Demo sınırları.
- [ ] Kullanılan teknoloji.
- [ ] Ekran görüntüleri.
- [ ] Canlı incele butonu.
- [ ] Benzerini yaptır CTA.
- [ ] İlgili hizmet sayfaları.
- [ ] İlgili blog yazıları.
- [ ] İlgili sektörel landing sayfaları.

## 8. Görsel ve Tasarım Standardı

- [ ] Her demo için 1200x630 Open Graph görseli.
- [ ] Her demo için portföy kapak görseli.
- [ ] Her demo için en az 2 ekran görüntüsü.
- [ ] Demo kapakları aynı görsel dilde hazırlanacak.
- [ ] Gereksiz stok görsel kullanılmayacak; ekran görüntüsü veya gerçek arayüz öncelikli olacak.
- [ ] Kartlar yalnızca tekrar eden item'lar için kullanılacak; demo içi ana deneyim kart yığını gibi durmayacak.
- [ ] SaaS/panel demoları yoğun ama düzenli olacak; landing page gibi boş ve süslü görünmeyecek.
- [ ] Kurumsal/B2B demo sayfaları ürün, hizmet, süreç ve iletişim sinyalini ilk ekranda gösterecek.

## 9. Uygulama Sırası

1. [ ] Mevcut canlı demo linklerini tek tek test et.
2. [ ] Çalışmayan demo butonlarını geçici kapat veya statik demo üret.
3. [ ] Mevcut 5 statik demoyu profesyonelleştir.
4. [ ] E-ticaret, cloud, görev, AI log ve video analiz demolarını çalışır hale getir veya detay sayfasında "canlı incele" durumunu düzenle.
5. [x] Teknik SEO Audit Dashboard demosunu tasarla.
6. [x] SEO Migration Recovery / Redirect Mapping demosunu tasarla.
7. [x] B2B Üretici Web Sitesi ve İhracatçı Firma Web Sitesi demolarını ekle.
8. [x] CRM + Lead + Teklif Takip demosunu ekle.
9. [x] Stok + Sipariş + Sevkiyat Operasyon Paneli demosunu ekle.
10. [x] Pazaryeri XML/API Entegrasyon Dashboard'u demosunu ekle.
11. [x] Sektörel demo serisine geç: emlak, rent a car, kuyumcu, turizm, klinik, güzellik merkezi.
12. [ ] Her demo için kapak, ekran görüntüsü ve proje detay metinlerini tamamla.
13. [x] Canlı örnekler sayfasına kategori filtresi ekle.
14. [ ] Hizmet, blog, landing ve demo iç linklerini bağla.
15. [ ] Sitemap ve metadata kontrolü yap.

## 10. Tamamlanma Tanımı

Bu plan tamamlandığında:

- [ ] Canlı örnek sayfasında bozuk veya yarım görünen demo kalmayacak.
- [ ] Her demo bir hizmet veya sektör sayfasını destekleyecek.
- [ ] Her demo satış görüşmesinde gönderilebilecek kadar profesyonel olacak.
- [ ] Teknik SEO/migration recovery için en az 2 güçlü demo olacak.
- [x] Küçük işletme, B2B üretici ve özel yazılım segmentleri ayrı ayrı örneklenmiş olacak.
- [x] Site sadece "biz yaparız" demeyecek; müşteriye "buna benzerini alabilirim" hissi verecek.
