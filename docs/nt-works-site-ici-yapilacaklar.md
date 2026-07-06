# NT Works Site İçi Yapılacaklar

Bu dosya yalnızca NT Works sitesinin içinde, kod / içerik / bağlantı yapısı tarafında birlikte yapacağımız işleri tutar. Google hesabı, sosyal medya hesabı, Bionluk profil düzenleme gibi site dışı işler burada tutulmaz.

## Tur Planı

Site içi tarafı sorunsuz bitirmek için 134 mikro tur yeterli. Hiçbir site içi iş "sonraya bırakıldı" kabul edilmeyecek; yalnızca sıraya alınacak. Çok dilli/global açılım ile şehir SEO ayrı işlerdir; birbirine karıştırılmayacak. Çok dilli sistemde hedef, seçilen dilde tüm siteyi en ince detayına kadar hazır hale getirmektir; sadece birkaç landing sayfası açmak yeterli sayılmayacak.

Çok dilli yapıda yeni bağımsız sayfa mantığı kurulmayacak. Aynı site rotaları dil prefix'i ile çalışacak: örneğin `/services`, `/en/services`, `/de/services`. Dil değişince aynı içerik ailesinin o dile çevrilmiş hali gösterilecek. Copy/paste ile sayfa çoğaltma değil; aynı veri ve şablonların dil bazlı karşılıklarını üretme mantığı kullanılacak.

1. Teknik SEO cila: schema profil bağlantıları, footer profil bağlantıları, eski URL redirectleri, sitemap/robots/canonical kontrolü.
2. İç link ve içerik doğrulama: önemli landing, hizmet, sektör, blog ve portföy sayfalarının birbirini doğru beslediğini kontrol etme.
3. Güven ve yaklaşım cilası: hakkımızda, güven, Bionluk güvenli çalışma ve dış profillere geçiş metinlerini satış akışını bozmadan netleştirme.
4. Global/çok dilli SEO mimarisi: dil/ülke açılımı için URL, metadata, canonical, hreflang, sitemap ve çeviri veri altyapısını kurma.
5-14. İngilizce mikro turlar: `/en` altında tüm site.
15-24. Almanca mikro turlar: `/de` altında tüm site.
25-34. Fransızca mikro turlar: `/fr` altında tüm site.
35-44. İspanyolca mikro turlar: `/es` altında tüm site.
45-54. Arapça mikro turlar: `/ar` altında tüm site.
55-64. Rusça mikro turlar: `/ru` altında tüm site.
65-74. Portekizce mikro turlar: `/pt` altında tüm site.
75-84. İtalyanca mikro turlar: `/it` altında tüm site.
85-94. Hollandaca mikro turlar: `/nl` altında tüm site.
95-104. Çince mikro turlar: `/zh` altında tüm site.
105. Şehir SEO mimarisi: Türkiye şehirleri için ayrı URL, içerik, canonical ve iç link mantığını kurma.
106-108. İstanbul şehir SEO mikro turları.
109-111. Ankara şehir SEO mikro turları.
112-114. İzmir şehir SEO mikro turları.
115-117. Bursa şehir SEO mikro turları.
118-120. Antalya şehir SEO mikro turları.
121-123. Konya şehir SEO mikro turları.
124-126. Kocaeli şehir SEO mikro turları.
127-129. Kayseri şehir SEO mikro turları.
130-132. Gaziantep şehir SEO mikro turları.
133-134. Adana şehir SEO mikro turları.

## Tur 1 - Teknik SEO Cila

- [x] Organization JSON-LD `sameAs` alanına GitHub, LinkedIn ve Bionluk profil bağlantıları eklenecek.
- [x] Footer içinde GitHub, LinkedIn ve Bionluk güven/profil bağlantıları görünecek.
- [x] Eski veya karışabilecek URL'ler için 301 redirect kuralları eklenecek.
- [x] Redirect kuralları build ile kontrol edilecek.
- [x] Sitemap, robots ve canonical yapısı build sonrası tekrar kontrol edilecek.

## Tur 2 - İç Link ve İçerik Doğrulama

- [x] Ana hizmet sayfaları ilgili landing sayfalarına, bloglara ve teklif sayfasına doğru bağlanıyor mu kontrol edilecek.
- [x] Sektörel landing sayfaları ilgili demo, blog ve teklif akışına bağlanıyor mu kontrol edilecek.
- [x] Blog detaylarında "ilgili hizmet" ve "ilgili portföy/canlı örnek" akışı tekrar taranacak.
- [x] Ana sayfadaki canlı örnek / portföy ayrımı ve yönlendirme blokları tekrar kontrol edilecek.
- [x] Eski ilerleme dokümanlarında kalan yanlış "eksik" notları temizlenecek.

## Tur 3 - Güven ve Yaklaşım Cilası

- [x] Hakkımızda sayfasına "hangi işleri alıyoruz / hangi işleri almıyoruz" bölümü eklenecek.
- [x] Regülasyonlu projelerde teknik altyapı ve yasal sorumluluk ayrımı net anlatılacak.
- [x] Bionluk güvenli çalışma sayfası teklif akışına daha doğal bağlanacak.
- [x] Site dışı profillere yönlendiren metinler satış akışını bölmeyecek şekilde sadeleştirilecek.
- [x] Master plan yalnızca gerçekten yapılan site içi işler için işaretlenecek.

## Tur 4 - Global / Çok Dilli SEO Mimarisi

- [x] Global açılımın ülke/dil mantığı netleştirilecek; şehir SEO ile aynı yapı içinde ele alınmayacak.
- [x] Türkçe ana site kök URL'de korunacak; yabancı diller prefix ile çalışacak.
- [x] Global sayfalar için URL prefix yapısı hazırlanacak: `/en`, `/de`, `/fr`, `/es`, `/ar`, `/ru`, `/pt`, `/it`, `/nl`, `/zh`.
- [x] Tüm site metinlerini kapsayan çeviri veri modeli kurulacak: navigasyon, footer, ana sayfa, hizmetler, landingler, sektörler, bloglar, portföy, güven sayfaları, formlar, CTA'lar, hata/boş durum metinleri.
- [x] Her global sayfanın Türkçe karşılığı, global slug karşılığı ve ticari niyeti veri dosyasında tutulacak.
- [x] Dil/ülke sayfaları için title, description, canonical ve Open Graph üretim mantığı kurulacak.
- [x] Hreflang karşılıklılığı ve `x-default` kuralı kod tarafında uygulanabilir hale getirilecek.
- [x] Sitemap üretimi global URL'leri doğru şekilde kapsayacak hale getirilecek.
- [x] İç linklerde kullanıcıyı otomatik yanlış dile zorlamayan sade dil geçiş mantığı hazırlanacak.
- [x] Her dil turunda "Türkçe kelime/metin kaldı mı" kontrolü yapılacak doğrulama yöntemi hazırlanacak.
- [x] Master plan yalnızca bu mimari gerçekten site içine işlendiğinde güncellenecek.

## Dil Başına 10 Mikro Tur Şablonu

Her dil şu 10 mikro turla bitecek. Örnek: İngilizce için Tur 5-14, Almanca için Tur 15-24 aynı sırayı takip eder.

1. Dil route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı.
2. Navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
3. Ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
4. Hizmet ana sayfası ve tüm hizmet detayları.
5. Ana landing sayfaları ilk grup.
6. Ana landing sayfaları ikinci grup.
7. Sektörel landing sayfaları ilk grup.
8. Sektörel landing sayfaları ikinci grup.
9. Blog kategori/etiket/listesi ve tüm blog detayları.
10. Portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Dil Mikro Tur Sırası

- [x] Tur 5-14: İngilizce `/en`
- [x] Tur 15-24: Almanca `/de`
- [x] Tur 25-34: Fransızca `/fr`
- [x] Tur 35-44: İspanyolca `/es`
- [x] Tur 45-54: Arapça `/ar` ve RTL kontrolü
- [x] Tur 55-64: Rusça `/ru`
- [x] Tur 65-74: Portekizce `/pt`
- [x] Tur 75-84: İtalyanca `/it`
- [x] Tur 85-94: Hollandaca `/nl`
- [x] Tur 95-104: Çince `/zh`

## İngilizce Mikro Turlar

- [x] Tur 5: `/en` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı.
- [x] Tur 6: İngilizce navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 7: İngilizce ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 8: İngilizce hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 9: İngilizce ana landing sayfaları ilk grup.
- [x] Tur 10: İngilizce ana landing sayfaları ikinci grup.
- [x] Tur 11: İngilizce sektörel landing sayfaları ilk grup.
- [x] Tur 12: İngilizce sektörel landing sayfaları ikinci grup.
- [x] Tur 13: İngilizce blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 14: İngilizce portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Almanca Mikro Turlar

- [x] Tur 15: `/de` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Almanca tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 16: Almanca navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 17: Almanca ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 18: Almanca hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 19: Almanca ana landing sayfaları ilk grup.
- [x] Tur 20: Almanca ana landing sayfaları ikinci grup.
- [x] Tur 21: Almanca sektörel landing sayfaları ilk grup.
- [x] Tur 22: Almanca sektörel landing sayfaları ikinci grup.
- [x] Tur 23: Almanca blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 24: Almanca portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Fransızca Mikro Turlar

- [x] Tur 25: `/fr` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Fransızca tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 26: Fransızca navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 27: Fransızca ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 28: Fransızca hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 29: Fransızca ana landing sayfaları ilk grup.
- [x] Tur 30: Fransızca ana landing sayfaları ikinci grup.
- [x] Tur 31: Fransızca sektörel landing sayfaları ilk grup.
- [x] Tur 32: Fransızca sektörel landing sayfaları ikinci grup.
- [x] Tur 33: Fransızca blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 34: Fransızca portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## İspanyolca Mikro Turlar

- [x] Tur 35: `/es` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. İspanyolca tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 36: İspanyolca navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 37: İspanyolca ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 38: İspanyolca hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 39: İspanyolca ana landing sayfaları ilk grup.
- [x] Tur 40: İspanyolca ana landing sayfaları ikinci grup.
- [x] Tur 41: İspanyolca sektörel landing sayfaları ilk grup.
- [x] Tur 42: İspanyolca sektörel landing sayfaları ikinci grup.
- [x] Tur 43: İspanyolca blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 44: İspanyolca portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Arapça Mikro Turlar

- [x] Tur 45: `/ar` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Arapça tamamlanana kadar noindex ve sitemap dışı kalacak; RTL temeli kurulacak.
- [x] Tur 46: Arapça navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 47: Arapça ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 48: Arapça hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 49: Arapça ana landing sayfaları ilk grup.
- [x] Tur 50: Arapça ana landing sayfaları ikinci grup.
- [x] Tur 51: Arapça sektörel landing sayfaları ilk grup.
- [x] Tur 52: Arapça sektörel landing sayfaları ikinci grup.
- [x] Tur 53: Arapça blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 54: Arapça portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Rusça Mikro Turlar

- [x] Tur 55: `/ru` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Rusça tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 56: Rusça navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 57: Rusça ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 58: Rusça hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 59: Rusça ana landing sayfaları ilk grup.
- [x] Tur 60: Rusça ana landing sayfaları ikinci grup.
- [x] Tur 61: Rusça sektörel landing sayfaları ilk grup.
- [x] Tur 62: Rusça sektörel landing sayfaları ikinci grup.
- [x] Tur 63: Rusça blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 64: Rusça portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Portekizce Mikro Turlar

- [x] Tur 65: `/pt` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Portekizce tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 66: Portekizce navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 67: Portekizce ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 68: Portekizce hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 69: Portekizce ana landing sayfaları ilk grup.
- [x] Tur 70: Portekizce ana landing sayfaları ikinci grup.
- [x] Tur 71: Portekizce sektörel landing sayfaları ilk grup.
- [x] Tur 72: Portekizce sektörel landing sayfaları ikinci grup.
- [x] Tur 73: Portekizce blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 74: Portekizce portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## İtalyanca Mikro Turlar

- [x] Tur 75: `/it` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. İtalyanca tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 76: İtalyanca navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 77: İtalyanca ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 78: İtalyanca hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 79: İtalyanca ana landing sayfaları ilk grup.
- [x] Tur 80: İtalyanca ana landing sayfaları ikinci grup.
- [x] Tur 81: İtalyanca sektörel landing sayfaları ilk grup.
- [x] Tur 82: İtalyanca sektörel landing sayfaları ikinci grup.
- [x] Tur 83: İtalyanca blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 84: İtalyanca portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Hollandaca Mikro Turlar

- [x] Tur 85: `/nl` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Hollandaca tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 86: Hollandaca navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 87: Hollandaca ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 88: Hollandaca hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 89: Hollandaca ana landing sayfaları ilk grup.
- [x] Tur 90: Hollandaca ana landing sayfaları ikinci grup.
- [x] Tur 91: Hollandaca sektörel landing sayfaları ilk grup.
- [x] Tur 92: Hollandaca sektörel landing sayfaları ikinci grup.
- [x] Tur 93: Hollandaca blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 94: Hollandaca portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Çince Mikro Turlar

- [x] Tur 95: `/zh` route altyapısı, dil switcher, ortak layout, metadata ve sitemap başlangıcı. Çince tamamlanana kadar noindex ve sitemap dışı kalacak.
- [x] Tur 96: Çince navigasyon, footer, butonlar, form etiketleri, genel CTA'lar, hata/boş durum metinleri.
- [x] Tur 97: Çince ana sayfa, Hakkımızda, İletişim, SSS, çalışma süreci, güven ve yasal sayfalar.
- [x] Tur 98: Çince hizmet ana sayfası ve tüm hizmet detayları.
- [x] Tur 99: Çince ana landing sayfaları ilk grup.
- [x] Tur 100: Çince ana landing sayfaları ikinci grup.
- [x] Tur 101: Çince sektörel landing sayfaları ilk grup.
- [x] Tur 102: Çince sektörel landing sayfaları ikinci grup.
- [x] Tur 103: Çince blog kategori/etiket/listesi ve tüm blog detayları.
- [x] Tur 104: Çince portföy, canlı örnekler, proje detayları, hreflang/canonical/sitemap, Türkçe metin kalmadı kontrolü ve build.

## Tur 105 - Şehir SEO Mimarisi

- [x] Şehir SEO'nun global dil/ülke açılımından ayrı olduğu site yapısında netleştirilecek.
- [x] Şehir sayfaları için URL yapısı belirlenecek.
- [x] Şehir sayfalarının hangi ana hizmetlerle eşleşeceği veri dosyasında tanımlanacak.
- [x] Kopya içerik üretmemek için her şehirde farklı sektör, problem, hizmet ve CTA vurgusu hazırlanacak.
- [x] Şehir sayfalarında canonical, sitemap ve iç link mantığı kurulacak.
- [x] Şehir sayfaları için ana sayfaya yük bindirmeyen ama Google'ın bulabileceği iç link yolu hazırlanacak.
- [x] Master plan yalnızca şehir mimarisi gerçekten site içine işlendiğinde güncellenecek.

## Şehir Başına Mikro Tur Şablonu

Her şehir kendi içinde küçük parçalara bölünecek. Şehir SEO, dil çevirisi gibi tüm siteyi değiştirme işi değildir; Türkiye içindeki şehir + hizmet aramalarını yakalayacak özgün şehir sayfası ve bağlantı işidir.

1. Şehir içerik stratejisi: şehirde öne çıkacak sektörler, hizmetler, problem ve CTA dili.
2. Şehir sayfası üretimi: içerik, ilgili hizmet/landing/blog/portföy bağlantıları, metadata.
3. Şehir teknik kontrolü: canonical, sitemap, iç link, build ve kopya içerik kontrolü.

## Şehir Mikro Tur Sırası

- [x] Tur 106-108: İstanbul
- [x] Tur 109-111: Ankara
- [x] Tur 112-114: İzmir
- [x] Tur 115-117: Bursa
- [x] Tur 118-120: Antalya
- [x] Tur 121-123: Konya
- [x] Tur 124-126: Kocaeli
- [x] Tur 127-129: Kayseri
- [x] Tur 130-132: Gaziantep
- [x] Tur 133-134: Adana
