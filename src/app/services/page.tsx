"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:rounded-3xl lg:p-7"
            >
              <h2 className="text-sm font-bold leading-5 text-slate-950 sm:text-lg sm:leading-6 lg:text-2xl">
                {language === "tr" ? service.titleTr : service.title}
              </h2>
              <p className="mt-2 line-clamp-5 text-xs leading-5 text-slate-600 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-6 lg:mt-4 lg:text-base lg:leading-7">
                {language === "tr" ? service.descriptionTr : service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm sm:mt-10 sm:rounded-[2rem] sm:p-8">
          <h2 className="text-xl font-black sm:text-3xl">{t("services.flowTitle")}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-700 sm:mt-4 sm:text-base">
            {t("services.flowDescription")}
          </p>
          <div className="mt-4 sm:mt-6">
            <Button href="/contact" className="h-10 min-h-10 px-4 text-xs sm:h-12 sm:min-h-12 sm:px-5 sm:text-sm">
              {t("services.start")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
