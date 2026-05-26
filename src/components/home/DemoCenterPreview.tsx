"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function DemoCenterPreview() {
  const { language } = useLanguage();
  const cards = [
    {
      title: "Try the product",
      titleTr: "Ürünü deneyin",
      description:
        "Open the live preview, browse the sample screens and see how the system feels before requesting a similar one.",
      descriptionTr:
        "Canlı incelemeyi açıp örnek ekranları gezebilir, benzerini talep etmeden önce sistemin nasıl çalıştığını görebilirsiniz."
    },
    {
      title: "Clear examples",
      titleTr: "Net örnekler",
      description:
        "Each product page explains what the system includes, who it is useful for and what can be customized.",
      descriptionTr:
        "Her ürün sayfası sistemin neleri içerdiğini, kimler için uygun olduğunu ve hangi noktaların özelleştirilebileceğini anlatır."
    },
    {
      title: "Request similar",
      titleTr: "Benzerini talep edin",
      description:
        "After reviewing a product, visitors can request a similar website, e-commerce system or custom panel.",
      descriptionTr:
        "Ürünü inceledikten sonra benzer bir web sitesi, e-ticaret sistemi veya özel panel için teklif talep edebilirsiniz."
    }
  ];

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="px-0 py-6 sm:px-4 sm:py-8 md:px-10 md:py-12">
          <SectionTitle
            eyebrow={language === "tr" ? "Canlı Ürünler" : "Live Products"}
            title={
              language === "tr"
                ? "Ürünlerimizi canlı olarak deneyebilirsiniz"
                : "You can try our products live"
            }
            description={
              language === "tr"
                ? "E-ticaret, dosya yönetimi, görev takibi, AI/log analizi ve video analiz gibi örnek sistemleri inceleyebilir; işletmeniz için benzerini talep edebilirsiniz."
                : "You can review sample systems such as e-commerce, file management, task tracking, AI/log analysis and video analysis, then request a similar solution for your business."
            }
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 lg:rounded-3xl lg:p-6"
              >
                <h3 className="text-sm font-bold leading-5 text-slate-950 sm:text-base sm:leading-6">
                  {language === "tr" ? card.titleTr : card.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:mt-3">
                  {language === "tr" ? card.descriptionTr : card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
