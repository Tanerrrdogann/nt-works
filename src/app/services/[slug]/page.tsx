"use client";

import { useParams } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServiceDetailPage() {
  const params = useParams();
  const { language } = useLanguage();
  const isTr = language === "tr";
  const slug = String(params?.slug || "");

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <h1 className="text-2xl font-black text-slate-950">
              {isTr ? "Hizmet bulunamadı" : "Service not found"}
            </h1>
            <p className="mt-3 text-slate-600">
              {isTr
                ? "Aradığınız hizmet sayfası bulunamadı."
                : "The service page you are looking for could not be found."}
            </p>
            <div className="mt-6">
              <Button href="/services">
                {isTr ? "Hizmetlere Dön" : "Back to Services"}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const title = isTr ? service.titleTr : service.title;
  const description = isTr ? service.descriptionTr : service.description;
  const examples = isTr ? service.examplesTr : service.examples;
  const infrastructure = isTr ? service.infrastructureTr : service.infrastructure;
  const detail = isTr ? service.detailTr : service.detail;

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
              {isTr ? "Hizmet Detayı" : "Service Detail"}
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-row">
              <Button href="/contact" className="h-12 min-h-12 justify-center">
                {isTr ? "Bu Hizmet İçin Fiyat Al" : "Get a Quote"}
              </Button>
              <Button href="/projects" variant="secondary" className="h-12 min-h-12 justify-center">
                {isTr ? "Canlı Örnekleri İncele" : "View Live Demos"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black leading-8 text-slate-950">
              {isTr ? "Bu hizmet ne işe yarar?" : "What is this service for?"}
            </h2>

            <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
              {detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-black leading-8">
              {isTr ? "Canlı önizleme avantajı" : "Live preview advantage"}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isTr
                ? "Proje başlamadan önce benzer canlı örnekleri inceleyebilirsiniz. Proje sürecinde de uygun durumlarda size özel önizleme bağlantısı paylaşılabilir. Böylece sadece ekran görüntüsü değil, telefonunuzdan gezebileceğiniz çalışan bir yapı üzerinden kontrol sağlayabilirsiniz."
                : "Before the project starts, you can review similar live demos. During the project, a private preview link can be shared when suitable. This allows you to check a working structure from your phone instead of only seeing screenshots."}
            </p>

            <div className="mt-5 grid gap-3">
              {[
                isTr ? "Canlı örnek üzerinden güven" : "Trust through live demos",
                isTr ? "İşletmeye göre uyarlama" : "Adaptation to your business",
                isTr ? "Teslim öncesi kontrol" : "Pre-delivery review",
                isTr ? "Bionluk üzerinden güvenli ilerleme seçeneği" : "Secure Bionluk order option"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold leading-6 text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black leading-8 text-slate-950">
              {isTr ? "Örnek kullanım alanları" : "Example use cases"}
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {examples.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black leading-8 text-slate-950">
              {isTr ? "Kullanılabilecek altyapılar" : "Possible infrastructure"}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {infrastructure.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold leading-5 text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              {isTr
                ? "Bu altyapılar sabit paket gibi düşünülmez. İhtiyacınıza göre bazı modüller çıkarılabilir, bazıları eklenebilir veya aynı proje içinde birleştirilebilir."
                : "These infrastructures are not fixed packages. Depending on your needs, some modules can be removed, added or combined in the same project."}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black leading-8 text-slate-950">
            {isTr ? "Satın alma süreci nasıl ilerler?" : "How does the purchase process work?"}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                tr: "İhtiyacınızı yazarsınız",
                en: "You share your need",
                trDesc: "İşletme türünüz, istediğiniz sistem ve varsa örnek aldığınız yapı konuşulur.",
                enDesc: "Your business type, desired system and references are discussed."
              },
              {
                tr: "Canlı örnek seçilir",
                en: "A live demo is selected",
                trDesc: "Size en yakın canlı örnek üzerinden nasıl uyarlanacağı netleştirilir.",
                enDesc: "The closest live demo is used to clarify how it can be adapted."
              },
              {
                tr: "Kapsam ve fiyat netleşir",
                en: "Scope and price are clarified",
                trDesc: "Sayfalar, modüller, admin panel, ödeme veya randevu ihtiyaçları belirlenir.",
                enDesc: "Pages, modules, admin panel, payment or appointment needs are defined."
              },
              {
                tr: "Güvenli şekilde ilerlenir",
                en: "The process moves securely",
                trDesc: "İsterseniz Bionluk üzerinden özel teklif veya uygun paketle ilerlenebilir.",
                enDesc: "If preferred, the project can continue through Bionluk with a custom offer or package."
              }
            ].map((step, index) => (
              <div
                key={step.tr}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-base font-black leading-6 text-slate-950 md:text-sm">
                  {isTr ? step.tr : step.en}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-xs md:leading-5 lg:text-sm lg:leading-6">
                  {isTr ? step.trDesc : step.enDesc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-row">
            <Button href="/contact" className="h-12 min-h-12 justify-center">
              {isTr ? "Bu Hizmet İçin İletişime Geç" : "Contact for This Service"}
            </Button>
            <Button href="/services" variant="secondary" className="h-12 min-h-12 justify-center">
              {isTr ? "Tüm Hizmetlere Dön" : "Back to All Services"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
