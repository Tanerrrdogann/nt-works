"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPreview() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionTitle
          eyebrow={isTr ? "Hizmetler" : "Services"}
          title={
            isTr
              ? "İşletmeniz için hazırlanabilecek sistem türleri"
              : "System types that can be prepared for your business"
          }
          description={
            isTr
              ? "Kurumsal site, katalog, WhatsApp sipariş, e-ticaret, randevu ve admin panel gibi yapılar ihtiyaca göre tek projede birleştirilebilir."
              : "Corporate websites, catalogs, WhatsApp order flows, e-commerce, appointment systems and admin panels can be combined according to your need."
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-6 lg:text-left"
            >
              <h3 className="text-xl font-black leading-7 text-slate-950">
                {isTr ? service.titleTr : service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {isTr ? service.shortTr ?? service.descriptionTr : service.short ?? service.description}
              </p>

              <span className="mt-5 inline-flex justify-center text-sm font-black text-slate-950 group-hover:underline lg:justify-start">
                {isTr ? "Detaylı Öğren" : "Learn More"}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Button href="/services" variant="secondary" className="h-12 min-h-12 justify-center px-6 text-sm">
            {isTr ? "Tüm Hizmetleri İncele" : "View All Services"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
