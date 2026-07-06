# Infinity Chassis Units

## Teknik SEO ve Migration Ön İnceleme Raporu

**Site:** https://infinitychassis.com  
**İnceleme tarihi:** 2 Temmuz 2026  
**Kapsam:** Google Search Console, cPanel, eski WordPress dosya yapısı, eski WordPress database, robots.txt, sitemap, .htaccess, indexleme, performans ve migration sinyalleri

---

## 1. Yönetici Özeti

Yapılan incelemeye göre organik trafik düşüşünün ana nedeni React/Next altyapısının Google tarafından okunamaması değildir. Google mevcut siteyi tarayabiliyor, sitemap'i okuyabiliyor ve bazı yeni URL'leri indeksliyor.

Ana problem, WordPress'ten yeni React/Next siteye geçiş sırasında SEO migration sürecinin eksik ve hatalı tamamlanmış olmasıdır.

Özellikle eski WordPress URL'leri, ürün URL'leri, kategori URL'leri, attachment URL'leri, PDF/katalog URL'leri, `?add-to-cart`, `?attachment_id`, eski dil URL'leri ve yeni `/en/...` URL yapısı aynı anda Google tarafından görülmeye devam ediyor. Bu durum Google'ın site yapısını net algılamasını zorlaştırıyor ve eski SEO değerinin yeni siteye sağlıklı aktarılmasını engelliyor.

İlk öneri WordPress'e geri dönmek değildir. Öncelik mevcut React/Next site üzerinde migration, redirect, canonical, noindex, robots, sitemap ve internal link problemlerini düzeltmek olmalıdır.

---

## 2. Ana Bulgular

### 2.1 Trafik Düşüşü

Search Console verilerine göre son 3 ay ile önceki 3 ay karşılaştırıldığında ciddi düşüş vardır:

| Metrik | Son 3 Ay | Önceki 3 Ay | Değişim |
|---|---:|---:|---:|
| Tıklama | 721 | 1.570 | -849 |
| Gösterim | 84,6K | 213K | -128,4K |
| Ortalama CTR | %0,9 | %0,7 | +%0,2 |
| Ortalama konum | 28,1 | 19,8 | -8,3 pozisyon |

16 aylık grafikte Mart 2025 - Eylül 2025 arası güçlü görünürlük vardır. Eylül 2025 sonrası düşüş başlamakta, Ocak 2026 sonrası zayıflama artmakta, Mart 2026 sonrası belirgin şekilde sertleşmektedir.

### 2.2 Trafik Kaybı Eski WordPress URL'leriyle İlişkili

Search Console'da en çok trafik alan ve trafik kaybeden sayfaların önemli bölümü eski WordPress URL yapısındadır:

- `https://infinitychassis.com/price-of-ambulance/`
- `https://infinitychassis.com/toyota-hiace-ambulance-price-lowest/`
- `https://infinitychassis.com/product/toyota-hiace-ambulance/`
- `https://infinitychassis.com/mercedes-ambulance-sprinter/`
- `https://infinitychassis.com/product/fiat-ducato-ambulance/`
- `https://infinitychassis.com/wp-content/uploads/...`
- `https://infinitychassis.com/?attachment_id=...`

Yeni URL yapısı olan `/en/products/...` sayfaları eski performansı henüz devralamamış görünmektedir.

Örnek:

- `https://infinitychassis.com/en/products`
- Son 3 ay: 3 tıklama
- Gösterim: 9.064
- Ortalama pozisyon: 51,3

Bu sayfa görünürlük alıyor fakat çok geride konumlanıyor ve tıklama üretemiyor.

---

## 3. Search Console Bulguları

### 3.1 Indexleme Durumu

Search Console > Sayfalar raporunda görülen durum:

| Durum | URL Sayısı |
|---|---:|
| Dizine eklenmeyen | 21,1K |
| Dizine eklenen | 2,27K |
| Yönlendirmeli sayfa | 9.941 |
| Robots.txt tarafından engellendi | 2.489 |
| Bulunamadı 404 | 1.453 |
| Sunucu hatası 5xx | 21 |
| Tarandı, şu anda dizine eklenmiş değil | 5.111 |
| Kullanıcı tarafından seçilen canonical olmadan kopya | 438 |
| Doğru canonical etikete sahip alternatif sayfa | 146 |
| Yeniden yönlendirme hatası | 3 |
| Noindex etiketi nedeniyle hariç tutuldu | 1.450 |
| Robots tarafından engelleniyor olsa da dizine eklendi | 19 |

Bu tablo, Google'ın sitede çok fazla eski, yönlenen, engellenen, kopya, 404 ve noindex URL gördüğünü göstermektedir.

### 3.2 404 Problemleri

404 raporunda eski WordPress ürün, kategori ve dosya URL'leri görünmektedir:

- `/en/product/...`
- `/fr/product/...`
- `/ru/product/...`
- `/ar/product/...`
- `/product-categories/...`
- `/brand/...`
- `/wp-content/uploads/2026/04/SAMU-Ambulance_compressed.pdf`
- `/wp-content/uploads/2026/04/Ford-Transit-Ambulance-Catalog.pdf`

Bu durum eski URL'lerin yeni karşılıklarına doğru taşınmadığını göstermektedir.

### 3.3 Noindex Problemleri

Noindex raporunda sadece admin veya teknik sayfalar değil, ürün ve haber sayfaları da görünmektedir:

- `/tr/urunler/...`
- `/fr/produits/...`
- `/ar/muntajatuna/...`
- `/ru/produkty/...`
- `/en/products/gmc-savana-ambulance/`
- `/en/news/mobile-surgery-ambulance`
- `/en/news/mobile-laboratories-manufacturer`
- `/en/news/ambulance-spare-parts`

Bu URL'ler ticari veya içerik değeri taşıyorsa noindex durumu kritik bir hatadır.

### 3.4 Canonical ve Duplicate Problemleri

Google'ın kullanıcıdan farklı canonical seçtiği URL örnekleri arasında önemli ticari sayfalar vardır:

- `/en/mercedes-sprinter-ambulance/`
- `/en/toyota-hilux-ambulance/`
- `/en/toyota-land-cruiser-ambulance/`
- `/en/military-mobile-command-control-center/`
- `/en/product/toyota-hiace-ambulance/`
- `/product/toyota-hiace-4x4-ambulance/`

Bu, aynı veya çok benzer içeriklerin birden fazla URL'de bulunduğunu ve canonical kararının Google'a bırakıldığını gösterir.

### 3.5 Robots Problemleri

Robots blocked raporunda şu tip URL'ler görünmektedir:

- `?attachment_id=...`
- `?add-to-cart=...`
- eski WooCommerce URL'leri
- eski attachment URL'leri
- bazı statik dosyalar

Bu URL'lerin hâlâ Google tarafından bulunması eski WordPress/WooCommerce kalıntılarının tam temizlenmediğini göstermektedir.

### 3.6 Sitemap Durumu

Güncel sitemap Search Console'a doğru gönderilmiştir:

- `/sitemap.xml`
- Durum: Başarılı
- Son okuma: 30 Haziran 2026
- Keşfedilen sayfa: 368

Alt sitemap'ler:

- `/sitemap/case-studies.xml` - 7 URL
- `/sitemap/categories.xml` - 7 URL
- `/sitemap/pages.xml` - 9 URL
- `/sitemap/posts.xml` - 198 URL
- `/sitemap/products.xml` - 136 URL
- `/sitemap/segments.xml` - 4 URL
- `/sitemap/static.xml` - 7 URL

Sitemap tarafında ana problem görünmemektedir. Ancak önemli çelişki şudur:

- Sitemap'te 368 URL var.
- Google'ın gördüğü dizine eklenmeyen URL sayısı 21,1K.

Bu, Google'ın sitemap dışından çok fazla eski/çöp URL bulduğunu göstermektedir.

### 3.7 Removals Geçmişi

13 Ocak 2026'da şu URL tipleri için kaldırma istekleri verilmiş, ancak iptal edilmiştir:

- `?add-to-cart=`
- `?attachment_id=`
- `*attachment_id*`
- `*add-to-cart*`

Bu, daha önce WooCommerce/attachment URL kirliliğinin fark edildiğini fakat çözümün tamamlanmadığını göstermektedir.

---

## 4. cPanel ve Eski WordPress Bulguları

### 4.1 Eski WordPress Dosyaları Duruyor

cPanel'de eski WordPress kurulumu durmaktadır:

- `public_html/old/old.infinitychassis.com/`

İçeride bulunan önemli dosya ve klasörler:

- `wp-admin`
- `wp-content`
- `wp-includes`
- `wp-config.php`
- `wp-login.php`
- `xmlrpc.php`
- `robots.txt`
- `.htaccess`
- `.htaccess.bk`
- `error_log`

Bu durum recovery için avantajdır. Eski dosya ve URL yapısı üzerinden kurtarma/mapping çalışması yapılabilir.

### 4.2 Aktif .htaccess

Aktif `.htaccess` dosyasında eski URL'leri yeni URL'lere taşıyan 301 redirect kuralları bulunmamaktadır. Dosya yalnızca PHP handler bilgisi içermektedir.

Bu kritik bir migration eksikliğidir.

### 4.3 Eski .htaccess.bk

Eski `.htaccess.bk` dosyasında da eski WordPress URL'lerini yeni React/Next URL'lerine taşıyan redirect mapping bulunmamaktadır.

İçerik ağırlıklı olarak:

- WordPress rewrite
- cache header
- gzip
- expires
- SpeedyCache
- LiteSpeed
- Wordfence
- PHP handler

kurallarından oluşmaktadır.

### 4.4 Eski Robots.txt

Eski robots.txt içinde eski WordPress sitemap'i tanımlıdır:

```txt
Sitemap: https://infinitychassis.com/sitemap_index.xml
```

Güncel sitemap ise:

```txt
https://infinitychassis.com/sitemap.xml
```

Eski robots.txt ayrıca PDF ve medya dosyalarını engelliyordu:

```txt
Disallow: /*.pdf$
Disallow: /*.jpg$
Disallow: /*.jpeg$
Disallow: /*.png$
Disallow: /*.webp$
```

Bu yapı katalog/PDF gibi değerli dosyaların Google tarafından doğru işlenmesini zorlaştırmış olabilir.

---

## 5. Eski WordPress Database Bulguları

Eski WordPress database durmaktadır:

- Database: `infini10_wp862`
- Table prefix: `wp9v_`

Temel URL ayarları:

| Alan | Değer |
|---|---|
| `siteurl` | `https://old.infinitychassis.com` |
| `home` | `https://old.infinitychassis.com` |
| `permalink_structure` | `/%postname%/` |
| `blogname` | `Ambulance Manufacturer` |

Yayınlanmış içerik sayıları:

| Tip | Durum | Sayı |
|---|---|---:|
| post | publish | 720 |
| product | publish | 351 |
| page | publish | 38 |
| attachment | inherit | 2.067 |

Eski URL yapısı büyük ihtimalle slug bazlıydı:

```txt
https://infinitychassis.com/{post_name}/
```

Bu database, eski URL listesini çıkarmak ve yeni URL'lerle eşleştirmek için güçlü veri kaynağıdır.

### 5.1 Eski 404 Logları

`wp9v_redirects_404` tablosunda eski 404 kayıtları bulunmaktadır.

Örnek değerli eski URL'ler:

- `/product-categories/ambulance-manufacturer-en/`
- `/product-categories/ambulance-manufacturer-en/renault-ambulance/`
- `/product/cash-in-transit-vehicles/`
- `/product/ford-transit-ambulance-350l/`
- `/mobile-laboratory-sales/`
- `/armored-money-transport-vehicle/`
- `/high-performance-armor-for-cash-in-transit/`
- `/brand/mercedes/`
- `/contact-us/`

Örnek teknik/temizlenecek URL'ler:

- `/wp-includes/...`
- `?attachment_id=...`
- `?p=...`
- `?uicore-tb=...`
- `/cart/`

Örnek güvenlik/bot kaynaklı URL'ler:

- `/shell.php`
- `/class-t.api.php`
- `/alfa-rex.php7`
- `/system_log.php`
- `/inputs.php`
- `/0.php`
- `/100.php`

Bu bot URL'leri SEO redirect mapping'e alınmamalıdır. Eski ürün, kategori, blog, landing page ve PDF/katalog URL'leri mapping'e alınmalıdır.

---

## 6. Link ve Internal Link Bulguları

### 6.1 Harici Linkler

Search Console Links raporunda harici link alan URL sayısı sınırlıdır.

En çok link alan sayfalar:

- Ana sayfa: 146 link
- `/contact`: 7 link
- `/en/products`: 5 link

Link veren başlıca domainler:

- `ayanambulans.com`
- `mercedesambulances.com`
- `toyotaambulance.com`
- `hiaceambulance.com`
- `fordtransitambulance.com`
- `medicalexpo.com`
- `medicalexpo.com.cn`
- `medicalexpo.es`

Anchor textlerde ticari ifadeler vardır:

- `mercedes ambulance manufacturer`
- `toyota land cruiser ambulance`
- `ambulance conversion`
- `box ambulance`
- `download 2026 catalog`
- `request a quote`

Ancak bu link değeri ürün ve kategori landing page'lerine yeterince dağılmamış görünmektedir.

### 6.2 Dahili Linkler

Toplam dahili link sayısı:

- 19.114

En çok dahili link alan sayfalar:

- Ana sayfa: 2.448
- `/en/products`: 1.277
- `/contact`: 1.099

Sorunlu durum:

- Aynı ürünlerin hem `/products/...` hem `/en/products/...` versiyonları internal link almaktadır.
- `/ar/products`, `/es/products`, `/ru/products`, `/ru/produkty/...` gibi karışık URL yapıları internal linklerde yer almaktadır.
- Önemli kategori sayfalarının bazıları az internal link almaktadır:
  - `/en/products/mobile-health-vehicles`: 22
  - `/en/products/mobile-health-containers`: 11
  - `/en/products/hospital-tents`: 10

Bu durum canonical karmaşasını ve site içi otorite dağılımı problemini artırmaktadır.

---

## 7. Performans, Güvenlik ve HTTPS

### 7.1 Core Web Vitals

Mobil:

- Poor: 0
- Needs improvement: 48
- Good: 0

Ana sorun:

- Mobil LCP 2,5 saniyeden uzun

Örnek gruplar:

- `/en/products` - 27 URL - LCP 2,7 sn
- `/en` - 21 URL - LCP 2,6 sn

Desktop tarafında aktif problem görünmemektedir.

Performans iyileştirilmelidir fakat trafik düşüşünün ana nedeni Core Web Vitals görünmemektedir.

### 7.2 HTTPS

- HTTPS olmayan URL: 0
- HTTPS URL: 48
- Kritik sorun yok

### 7.3 Manual Actions

- Manuel işlem yok

### 7.4 Security Issues

- Güvenlik sorunu yok

Trafik düşüşü manuel ceza, güvenlik problemi veya HTTPS kaynaklı görünmemektedir.

---

## 8. Ana Problem Listesi

1. Eski WordPress URL'leri yeni siteye birebir taşınmamış.
2. Eski URL'ler için 301 redirect mapping yok.
3. `.htaccess` içinde migration redirect kuralları yok.
4. Eski ürün URL'leri 404 veya yanlış sayfalara düşüyor.
5. Eski kategori URL'leri 404/noindex/redirect durumlarında.
6. Eski PDF/katalog URL'leri 404 veriyor.
7. Google hâlâ `?attachment_id` ve `?add-to-cart` URL'lerini görüyor.
8. Çok sayıda noindex URL içinde ticari ürün ve haber sayfaları var.
9. Canonical sinyalleri tutarsız.
10. Aynı içeriğin farklı dil/slug/product URL'leri bir arada bulunuyor.
11. Yeni `/en/...` URL yapısı eski trafiği devralamamış.
12. Internal linklerde canonical olmayan URL'ler kullanılıyor.
13. Önemli kategori sayfaları yeterli internal link almıyor.
14. Eski WordPress database ve dosyaları duruyor fakat yeni siteye sağlıklı migration yapılmamış.
15. Sitemap doğru görünse de Google sitemap dışından 21K+ URL görüyor.

---

## 9. Çözüm Planı

### Aşama 1: Acil Teknik Temizlik

1. Eski WordPress URL listesi çıkarılacak.
2. Eski URL'ler önem sırasına göre sınıflandırılacak:
   - Trafik alan URL'ler
   - Backlink alan URL'ler
   - Ürün URL'leri
   - Kategori URL'leri
   - Blog/landing page URL'leri
   - PDF/katalog URL'leri
   - Teknik/çöp URL'ler
   - Bot/güvenlik tarama URL'leri
3. Değerli eski URL'ler yeni sitedeki en alakalı URL'lere 301 ile yönlendirilecek.
4. Çöp URL'ler redirect mapping'e alınmayacak.
5. Bot/güvenlik URL'leri SEO aksiyon listesine alınmayacak.

### Aşama 2: Redirect Mapping

İlk örnek redirect mantığı:

```txt
/product-categories/ambulance-manufacturer-en/ -> /en/products/ambulances
/product/ford-transit-ambulance-350l/ -> /en/products/ambulances/ford-transit-ambulance
/product/cash-in-transit-vehicles/ -> /en/products/government-service-vehicles veya ilgili yeni sayfa
/mobile-laboratory-sales/ -> /en/products/mobile-technical-laboratories veya ilgili yeni sayfa
/brand/mercedes/ -> Mercedes ambulans kategori/ürün sayfası
/contact-us/ -> /contact veya /en/contact
```

Nihai redirect listesi eski URL export'u, Search Console kayıpları, 404 logları ve yeni site URL listesi eşleştirilerek hazırlanmalıdır.

### Aşama 3: Noindex ve Canonical Düzeltmeleri

1. Noindex olan ürün/haber/kategori URL'leri kontrol edilecek.
2. Ticari değeri olan sayfalarda noindex kaldırılacak.
3. Canonical her sayfada tek ve doğru hedefe işaret edecek.
4. `/product/...`, `/products/...`, `/en/product/...`, `/en/products/...` gibi varyasyonlar sadeleştirilecek.
5. Dil URL'lerinde hreflang/canonical ilişkisi netleştirilecek.

### Aşama 4: Internal Link Temizliği

1. Site içi linkler canonical URL'lere güncellenecek.
2. `/products/...` ile `/en/products/...` karışıklığı giderilecek.
3. Ana kategori sayfalarına daha fazla iç link verilecek.
4. Ana sayfa, blog, ürün ve kategori sayfaları birbirini ticari anahtar kelimelerle destekleyecek.

### Aşama 5: PDF ve Katalog Kurtarma

Eski WordPress dosya arşivi indirildikten sonra şu çalışma yapılacak:

1. Eski `wp-content/uploads` içinde PDF/katalog dosyaları taranacak.
2. Search Console'da 404 görünen PDF'ler fiziksel olarak aranacak.
3. Bulunan dosyalar yeni aktif siteye taşınacak veya eski URL yolu restore edilecek.
4. Bulunamayan dosyalar için en yakın yeni katalog/sayfa hedefi belirlenip 301 yönlendirme yapılacak.
5. Kataloglar SEO ve lead generation açısından yeniden değerlendirilecek.

Bu aşamada kurtarılabilen tüm dosyalar kurtarılacak; kurtarılamayanlar için doğru redirect stratejisi uygulanacaktır.

### Aşama 6: Meta ve İçerik Optimizasyonu

Öncelikli optimize edilecek ticari alanlar:

- Ambulance Manufacturer
- Ambulance Manufacturer Turkey
- Toyota Ambulance
- Toyota Hiace Ambulance Price
- Mercedes Sprinter Ambulance
- Ford Transit Ambulance
- Mobile Clinic Manufacturer
- Mobile Dental Clinic
- Mobile Laboratory
- Mobile X-Ray Van
- EN1789 Ambulance
- Armored Ambulance
- Cash in Transit Vehicle

Sayfa bazında yapılacaklar:

1. Title güncellemesi
2. Meta description güncellemesi
3. H1/H2 yapısı
4. İçerik derinliği
5. Ürün teknik detayları
6. Sertifika ve kalite sinyalleri
7. CTA ve teklif alma akışı
8. Schema markup kontrolü

---

## 10. Önceliklendirilmiş Aksiyon Listesi

### İlk 24-48 Saat

1. Eski URL listesinin tamamını export et.
2. En değerli 100 eski URL'yi belirle.
3. Eski 404 loglarını temizle ve sınıflandır.
4. 404 veren PDF/katalog URL'lerini eski dosya arşivinde ara.
5. İlk 301 redirect mapping listesini hazırla.
6. Yanlış noindex verilen ticari URL'leri tespit et.
7. Canonical çakışması olan önemli ürün URL'lerini listele.

### İlk 7 Gün

1. 301 redirectleri uygula.
2. PDF/katalog dosyalarını restore et veya yönlendir.
3. Noindex/canonical problemlerini düzelt.
4. Internal linkleri canonical URL'lere çevir.
5. GSC URL Inspection ile kritik URL'leri test et.
6. Sitemap'i yeniden gönder.
7. GSC Pages raporunda doğrulama başlat.

### İlk 30 Gün

1. En değerli ürün/kategori sayfalarını SEO açısından güçlendir.
2. Düşen sorgulara göre içerik güncelle.
3. Çok dilli sayfalarda hreflang/canonical kontrolü yap.
4. Core Web Vitals mobil LCP değerini iyileştir.
5. Organik lead event tracking kontrolü yap.
6. Haftalık GSC takip raporu oluştur.

---

## 11. Beklenen Etki

Bu çalışma Google'a sitenin yeni yapısını daha net anlatacaktır.

Beklenen iyileşmeler:

- Eski URL değerlerinin yeni sayfalara aktarılması
- 404 ve redirect karmaşasının azalması
- Noindex/canonical hatalarının temizlenmesi
- Yeni URL yapısının Google tarafından daha sağlıklı algılanması
- Önemli ürün/kategori sayfalarının tekrar görünürlük kazanması
- Ticari sorgularda pozisyon toparlanması
- Organik lead potansiyelinin yeniden artması

SEO toparlanması anlık olmaz. Ancak teknik migration eksikleri düzeltildiğinde Google'ın yeni sinyalleri işlemesiyle 2-8 hafta içinde anlamlı indeksleme ve görünürlük değişimleri beklenebilir. Rekabetçi ticari sorgularda tam toparlanma daha uzun sürebilir.

---

## 12. Sonuç

İlk inceleme sonucunda trafik düşüşünün ana nedeni React/Next altyapısı değil, WordPress'ten yeni siteye geçişte eski SEO değerinin yeni URL yapısına doğru taşınmamasıdır.

Mevcut site üzerinde teknik SEO migration düzeltmeleri yapılmadan WordPress'e geri dönmek ikinci bir migration riski yaratır.

Önerilen yol:

1. Mevcut React/Next site korunmalı.
2. Eski WordPress URL'leri yeni sayfalara 301 ile taşınmalı.
3. 404, noindex, canonical, robots ve internal link problemleri temizlenmeli.
4. Eski PDF/katalog dosyaları kurtarılmalı veya doğru sayfalara yönlendirilmeli.
5. Ticari ürün ve kategori sayfaları SEO açısından güçlendirilmeli.

Bu yaklaşım, mevcut yatırımın korunmasını ve eski organik performansa geri dönüş için en kontrollü yolu sağlar.

