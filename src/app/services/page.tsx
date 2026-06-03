"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { serviceCombinations, services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesPage() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <SectionTitle
          eyebrow={isTr ? "Hizmetler" : "Services"}
          title={
            isTr
              ? "İşletmenize Göre Uyarlanabilir Web Sitesi ve Yazılım Hizmetleri"
              : "Adaptable Website and Software Services for Your Business"
          }
          description={
            isTr
              ? "Tek bir kalıba bağlı kalmadan; web sitesi, katalog, randevu, e-ticaret ve admin panel altyapıları ihtiyaca göre birleştirilebilir."
              : "Website, catalog, appointment, e-commerce and admin panel infrastructures can be combined according to your needs."
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 xl:gap-6">
          {services.map((service) => {
            const title = isTr ? service.titleTr : service.title;
            const short = isTr ? service.shortTr : service.short;
            const infrastructure = isTr ? service.infrastructureTr : service.infrastructure;

            return (
              <article
                key={service.slug}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 md:rounded-2xl md:p-4 lg:rounded-3xl lg:p-6 xl:hover:-translate-y-1"
              >
                <div className="mb-3 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 md:text-[10px] lg:text-[11px]">
                  {isTr ? "Uyarlanabilir Hizmet" : "Adaptable Service"}
                </div>

                <h2 className="text-xl font-black leading-7 text-slate-950 md:text-base md:leading-6 lg:text-2xl lg:leading-8">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:line-clamp-4 md:text-xs md:leading-5 lg:line-clamp-none lg:text-sm lg:leading-6">
                  {short}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 md:hidden lg:flex">
                  {infrastructure.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 md:px-2 md:py-1 md:text-[11px] lg:px-3 lg:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6 md:grid-cols-1 md:gap-2 md:pt-4 lg:grid-cols-2 lg:pt-6">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="secondary"
                    className="h-11 min-h-11 justify-center px-3 text-xs sm:text-sm md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
                  >
                    {isTr ? "Detaylı Öğren" : "Learn More"}
                  </Button>

                  <Button
                    href="/contact"
                    className="h-11 min-h-11 justify-center px-3 text-xs sm:text-sm md:h-9 md:min-h-9 md:text-[11px] lg:h-11 lg:min-h-11 lg:text-sm"
                  >
                    {isTr ? "Fiyat Al" : "Get Quote"}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              {isTr ? "Modüler Yapı" : "Modular Structure"}
            </p>

            <h2 className="mt-3 text-2xl font-black leading-8 text-slate-950 lg:text-3xl">
              {isTr
                ? "Sistemler ihtiyaca göre birleşebilir"
                : "Systems can be combined according to the need"}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">
              {isTr
                ? "Katalog, randevu, WhatsApp yönlendirme, ödeme altyapısı ve admin panel gibi parçalar aynı projede birleştirilebilir. Böylece işletmeniz için sadece tek bir sayfa değil, ihtiyaca göre büyüyebilen bir sistem kurulabilir."
                : "Catalog, appointment, WhatsApp direction, payment flow and admin panel modules can be combined in one project. This makes it possible to build a system that can grow according to your business needs."}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {serviceCombinations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-sm font-black leading-5 text-slate-950">
                  {isTr ? item.titleTr : item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-xs md:leading-5 lg:text-sm lg:leading-6">
                  {isTr ? item.descriptionTr : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                {isTr ? "Satın Alma Süreci" : "Purchase Process"}
              </p>

              <h2 className="mt-3 text-2xl font-black leading-8 sm:text-3xl sm:leading-9">
                {isTr
                  ? "Önce canlı örneği inceleyin, sonra kapsamı netleştirelim"
                  : "Review the live demo first, then clarify the scope"}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">
                {isTr
                  ? "İhtiyacınıza en yakın canlı örnek seçilir, sistemin işletmenize nasıl uyarlanacağı konuşulur, kapsam ve fiyat netleşir. İsterseniz süreç Bionluk üzerinden güvenli sipariş şeklinde ilerletilebilir."
                  : "The closest live demo is selected, how it will be adapted to your business is discussed, and scope and pricing are clarified. If preferred, the process can continue through Bionluk as a secure order."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                href="/contact"
                className="h-12 min-h-12 w-full justify-center px-5 text-sm"
              >
                {isTr ? "Fiyat Almak İstiyorum" : "I Want to Get a Quote"}
              </Button>

              <Button
                href="/projects"
                variant="secondary"
                className="h-12 min-h-12 w-full justify-center px-5 text-sm"
              >
                {isTr ? "Canlı Örnekleri İncele" : "View Live Demos"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
