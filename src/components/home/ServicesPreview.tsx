"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPreview() {
  const { t, language } = useLanguage();

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow={t("services.eyebrow")}
          title={t("services.homeTitle")}
          description={t("services.homeDescription")}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 lg:rounded-3xl lg:p-6"
            >
              <h3 className="text-sm font-bold leading-5 text-slate-950 sm:text-base sm:leading-6 lg:text-lg">
                {language === "tr" ? service.titleTr : service.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:mt-3">
                {language === "tr" ? service.descriptionTr : service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
