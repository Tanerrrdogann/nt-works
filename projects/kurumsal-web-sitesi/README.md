# Marketing Solutions

Kurumsal, landing page, hizmet işletmesi, hukuk, muhasebe, inşaat, spor hocası ve organizasyon/düğün siteleri için seçilebilir örnek web sitesi sunumu.

## Amaç

Bu proje tek bir kopya site değildir. Aynı marketing altyapısı içinde farklı sektör örneklerini bitmiş site hissiyle gösterir.

Müşteri linki açar, kendi ihtiyacına yakın örneği seçer ve şu akışı görür:

```text
Sektör seçimi -> hayali firma demosu -> hizmetler -> güven/süreç -> SSS -> WhatsApp/mail/telefon aksiyonu
```

## İçindeki Örnekler

- Kurumsal Tanıtım: Arven Kurumsal
- Landing Page: TeklifPro
- Hizmet Veren İşletme: Nova Hizmet
- Avukat / Hukuk Bürosu: Duru Hukuk Bürosu
- Muhasebe / Mali Müşavir: Mizan Mali Müşavirlik
- İnşaat Projesi: Kule Vista
- Spor Hocası / Personal Trainer: FormLab Coach
- Organizasyon / Düğün: Liva Organizasyon

## İletişim Mantığı

Tüm örneklerde telefon, WhatsApp ve mail `src/config/site.ts` içindeki `centralContact` alanına yönlenir. Satış sunumunda:

```text
Bu örnek hayali firma için hazırlandı. İletişim bilgileri şimdilik bize yönleniyor.
Beğenirseniz aynı yapıyı sizin firma bilgileriniz ve görsellerinizle düzenliyoruz.
```

denebilir.

## Ana Dosya

```text
src/config/site.ts
```

Burada her çözüm için:

```text
company
theme
hero
trustItems
services
benefits
process
showcase
testimonials
faqs
```

alanları bulunur.
