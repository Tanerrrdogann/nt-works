"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {language === "tr" ? service.titleTr : service.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {language === "tr" ? service.descriptionTr : service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-sm">
          <h2 className="text-3xl font-black">{t("services.flowTitle")}</h2>
          <p className="mt-4 max-w-3xl text-zinc-700">
            {t("services.flowDescription")}
          </p>
          <div className="mt-6">
            <Button href="/contact">
              {t("services.start")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
