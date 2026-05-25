"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPreview() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow={t("services.eyebrow")}
          title={t("services.homeTitle")}
          description={t("services.homeDescription")}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {language === "tr" ? service.titleTr : service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {language === "tr" ? service.descriptionTr : service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
