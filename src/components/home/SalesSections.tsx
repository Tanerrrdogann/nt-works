"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageProvider";

const whyItems = [
  {
    title: "Canlı görerek karar",
    titleTr: "Canlı görerek karar",
    description:
      "Müşteri sadece açıklama okumaz; uygun ürünlerde sistemi açıp canlı örneği inceleyebilir.",
    descriptionTr:
      "Müşteri sadece açıklama okumaz; uygun ürünlerde sistemi açıp canlı örneği inceleyebilir."
  },
  {
    title: "Yönetilebilir yapı",
    titleTr: "Yönetilebilir yapı",
    description:
      "İhtiyaca göre ürün, içerik, sipariş, randevu veya kayıt yönetimi için admin panel hazırlanabilir.",
    descriptionTr:
      "İhtiyaca göre ürün, içerik, sipariş, randevu veya kayıt yönetimi için admin panel hazırlanabilir."
  },
  {
    title: "Mobil uyumlu teslim",
    titleTr: "Mobil uyumlu teslim",
    description:
      "Site ve paneller telefon, tablet ve bilgisayarda kullanılabilecek şekilde düzenlenir.",
    descriptionTr:
      "Site ve paneller telefon, tablet ve bilgisayarda kullanılabilecek şekilde düzenlenir."
  },
  {
    title: "Yayına alma desteği",
    titleTr: "Yayına alma desteği",
    description:
      "Domain, hosting, canlıya alma ve teslim sonrası temel yönlendirme süreci beraber planlanır.",
    descriptionTr:
      "Domain, hosting, canlıya alma ve teslim sonrası temel yönlendirme süreci beraber planlanır."
  }
];

const processItems = [
  ["Need", "İhtiyacı konuşuyoruz", "We clarify what the business sells, who the customer is and what the site should achieve.", "Ne sattığını, müşterinin kim olduğunu ve sitenin ne işe yaraması gerektiğini netleştiriyoruz."],
  ["Draft", "Taslağı hazırlıyoruz", "We prepare the page flow, sections and key actions before development gets heavy.", "Sayfa akışını, bölümleri ve ana aksiyonları geliştirme ağırlaşmadan önce hazırlıyoruz."],
  ["Build", "Sistemi geliştiriyoruz", "We build the website, product flow, form, panel or custom features according to the approved scope.", "Onaylanan kapsama göre web sitesini, ürün akışını, formu, paneli veya özel özellikleri geliştiriyoruz."],
  ["Review", "Birlikte kontrol ediyoruz", "You review the screens and requested changes are handled before launch.", "Ekranları birlikte inceliyoruz; istenen düzenlemeler yayına almadan önce tamamlanıyor."],
  ["Launch", "Yayına alıyoruz", "We prepare the live link and explain how the delivered system should be used.", "Canlı linki hazırlıyor, teslim edilen sistemin nasıl kullanılacağını anlatıyoruz."]
];

const packages = [
  {
    title: "Starter",
    titleTr: "Başlangıç",
    items: ["Responsive website", "Contact area", "Clear service pages"],
    itemsTr: ["Mobil uyumlu web sitesi", "İletişim alanı", "Net hizmet sayfaları"]
  },
  {
    title: "Business",
    titleTr: "İşletme",
    items: ["Admin panel", "Content management", "Dashboard and records"],
    itemsTr: ["Admin panel", "İçerik yönetimi", "Dashboard ve kayıtlar"]
  },
  {
    title: "Custom System",
    titleTr: "Özel Yazılım",
    items: ["E-commerce", "File management", "Payments, reports and custom workflows"],
    itemsTr: ["E-ticaret", "Dosya yönetimi", "Ödeme, rapor ve özel iş akışları"]
  }
];

export default function SalesSections() {
  const { language } = useLanguage();

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow={language === "tr" ? "Neden NT Web Çözümleri?" : "Why NT Web Çözümleri?"}
            title={
              language === "tr"
                ? "Dükkan sahibinin anlayacağı, kullanacağı ve güveneceği sistemler"
                : "Systems business owners can understand, use and trust"
            }
            description={
              language === "tr"
                ? "Amaç sadece güzel görünen bir sayfa hazırlamak değil; müşterinin işini anlatan, talep toplayan ve gerektiğinde yönetilebilen bir yapı kurmaktır."
                : "The goal is not only a good-looking page, but a usable structure that explains the business, collects leads and can be managed when needed."
            }
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {whyItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 xl:rounded-3xl xl:p-6">
                <h3 className="text-sm font-bold leading-5 text-slate-950 sm:text-base sm:leading-6 xl:text-lg">
                  {language === "tr" ? item.titleTr : item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 xl:mt-3">
                  {language === "tr" ? item.descriptionTr : item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle
                eyebrow={language === "tr" ? "Süreç" : "Process"}
                title={language === "tr" ? "Nasıl ilerliyoruz?" : "How the work moves"}
                description={
                  language === "tr"
                    ? "Süreci teknik terimlere boğmadan, küçük ve anlaşılır adımlarla ilerletiyoruz."
                    : "The goal is to break the work into clear steps and deliver a usable system at the end."
                }
              />
              <Button href="/contact">
                {language === "tr" ? "Projem İçin Teklif Al" : "Request a Quote"}
              </Button>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {processItems.map(([title, titleTr, description, descriptionTr], index) => (
                <div key={title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-5 lg:rounded-3xl">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold leading-5 text-slate-950 sm:text-base sm:leading-6">
                      {language === "tr" ? titleTr : title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                      {language === "tr" ? descriptionTr : description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow={language === "tr" ? "Hizmet paketleri" : "Service Packages"}
            title={language === "tr" ? "İhtiyaca göre proje türleri" : "Project types by need"}
            description={
              language === "tr"
                ? "Net fiyat yerine önce ihtiyaç belirlenir; benzer sistemler için teklif alınabilir."
                : "Instead of forcing one fixed price, the scope is clarified first; similar systems can be quoted."
            }
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 lg:rounded-3xl lg:p-6">
                <h3 className="text-base font-black text-slate-950 sm:text-lg lg:text-xl">
                  {language === "tr" ? pkg.titleTr : pkg.title}
                </h3>
                <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:mt-5 lg:space-y-3">
                  {(language === "tr" ? pkg.itemsTr : pkg.items).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold leading-5 text-emerald-800 sm:text-sm lg:mt-6 lg:rounded-2xl lg:p-4">
                  {language === "tr"
                    ? "Projeye göre fiyatlandırılır. Benzer sistem için teklif alın."
                    : "Priced by scope. Request a quote for a similar system."}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
