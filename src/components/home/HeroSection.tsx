"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  const featuredProducts = [
    "ecommerce-platform",
    "kurumsal-web-sitesi",
    "whatsapp-siparis-katalog",
    "randevu-rezervasyon-sistemi",
    "admin-panelli-isletme-sistemi"
  ].flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);

    return project
      ? [
          {
            title: isTr ? project.titleTr ?? project.title : project.title,
            description: isTr
              ? project.shortDescriptionTr ?? project.shortDescription
              : project.shortDescription,
            href: `/projects/${project.slug}`
          }
        ]
      : [];
  });

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[1fr_1fr] xl:gap-12">
          <div className="min-w-0 text-center">
            <div className="mb-6 flex justify-center sm:mb-8">
              <Image
                src="/nt-web-cozumleri-logo.png"
                alt="NT Web Çözümleri"
                width={520}
                height={416}
                priority
                className="h-auto w-full max-w-[15rem] object-contain sm:max-w-[21rem] lg:max-w-[25rem]"
              />
            </div>

            <Badge>{isTr ? "NT Web Çözümleri" : "NT Web Solutions"}</Badge>

            <h1 className="mx-auto mt-5 max-w-[24rem] text-3xl font-black leading-tight tracking-tight text-slate-950 sm:max-w-3xl sm:text-5xl lg:max-w-4xl lg:text-6xl xl:text-7xl">
              {isTr
                ? "Canlı örneklerle inceleyebileceğiniz web sitesi ve özel sistemler"
                : "Websites and custom systems you can review through live examples"}
            </h1>

            <p className="mx-auto mt-4 max-w-[25rem] text-base leading-8 text-slate-600 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
              {isTr
                ? "İşletmeniz için kurumsal web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım çözümleri hazırlıyoruz. Önce canlı örnekleri inceleyebilir, sonra benzer yapının işletmenize nasıl uyarlanacağını konuşabilirsiniz."
                : "We build business websites, catalogs, appointment systems, e-commerce systems, admin panels and custom software solutions. You can review live examples first, then discuss how a similar structure can be adapted to your business."}
            </p>

            <div className="mx-auto mt-7 grid max-w-[25rem] grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
              <Button href="/projects" className="h-12 min-h-12 justify-center px-6 text-sm">
                {isTr ? "Canlı Örnekleri İncele" : "View Live Examples"}
              </Button>
              <Button href="/services" variant="secondary" className="h-12 min-h-12 justify-center px-6 text-sm">
                {isTr ? "Hizmetleri Gör" : "View Services"}
              </Button>
              <Button href="/contact" variant="secondary" className="h-12 min-h-12 justify-center px-6 text-sm">
                {isTr ? "Teklif Al" : "Request a Quote"}
              </Button>
            </div>

            <div className="mx-auto mt-7 grid max-w-[25rem] grid-cols-1 gap-3 sm:mt-9 sm:max-w-2xl sm:grid-cols-3">
              {[
                ["10+", isTr ? "canlı örnek sistem" : "live example systems"],
                [isTr ? "Modüler" : "Modular", isTr ? "işletmeye göre uyarlama" : "adapted to your business"],
                [isTr ? "Güvenli" : "Secure", isTr ? "Bionluk ile ilerleme seçeneği" : "Bionluk process option"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/10 sm:p-6 lg:max-w-xl lg:rounded-[2rem] lg:p-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  {isTr ? "Önce canlı inceleyin" : "Review live first"}
                </p>

                <h2 className="mt-3 text-2xl font-black leading-8 text-slate-950 sm:text-3xl">
                  {isTr
                    ? "Ne alacağınızı görerek karar verin"
                    : "Decide after seeing what you will receive"}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">
                  {isTr
                    ? "Bu örnekler gerçek müşteri işi gibi gösterilmez. İşletmenize göre uyarlanabilecek çalışan demo sistemlerdir."
                    : "These examples are not shown as real client projects. They are working demo systems that can be adapted to your business."}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {featuredProducts.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300 hover:shadow-sm"
                  >
                    <span className="block text-sm font-black leading-5 text-slate-950">
                      {item.title}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>

              <Button href="/projects" className="mt-5 h-12 min-h-12 w-full justify-center text-sm">
                {isTr ? "Tüm Canlı Örnekleri Gör" : "View All Live Examples"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
