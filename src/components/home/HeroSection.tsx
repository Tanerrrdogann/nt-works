"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HeroSection() {
  const { t, language } = useLanguage();

  const featuredProducts = [
    "ecommerce-platform",
    "kurumsal-web-sitesi",
    "whatsapp-siparis-katalog",
    "randevu-rezervasyon-sistemi",
    "admin-panelli-isletme-sistemi"
  ].flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);

    return project
      ? [{
    title: language === "tr" ? project.titleTr ?? project.title : project.title,
          description: language === "tr"
            ? project.shortDescriptionTr ?? project.shortDescription
            : project.shortDescription,
          href: `/projects/${project.slug}`
        }]
      : [];
  });

  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="grid min-w-0 items-stretch gap-8 lg:grid-cols-[1.03fr_0.97fr] xl:gap-10">
          <div className="min-w-0 p-2 text-center sm:p-6 sm:text-left lg:p-10">
            <div className="mb-7 flex justify-center sm:mb-9 sm:justify-start">
              <Image
                src="/nt-web-cozumleri-logo.png"
                alt="NT Web Çözümleri"
                width={520}
                height={416}
                priority
                className="h-auto w-full max-w-[18rem] object-contain sm:max-w-[23rem] lg:max-w-[26rem]"
              />
            </div>

            <Badge>{t("hero.badge")}</Badge>

            <h1 className="mx-auto mt-5 max-w-[21rem] text-3xl font-black tracking-tight text-slate-950 sm:mx-0 sm:mt-6 sm:max-w-4xl sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            <p className="mx-auto mt-4 max-w-[21rem] text-base leading-7 text-slate-600 sm:mx-0 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
              {t("hero.description")}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 sm:justify-start">
              <Button href="/contact" variant="secondary">
                {t("hero.contact")}
              </Button>
            </div>

            <div className="mx-auto mt-8 grid max-w-[24rem] grid-cols-2 gap-3 sm:mx-0 sm:mt-10 sm:max-w-2xl md:grid-cols-3 lg:gap-4">
              {[
                ["10", t("hero.stat.projects")],
                ["Uçtan uca", t("hero.stat.fullstack")],
                ["Hazır", t("hero.stat.demo")]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur sm:p-4"
                >
                  <p className="break-words text-base font-bold text-slate-950 sm:text-xl">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-7 pt-2 sm:gap-10 lg:-translate-y-4 lg:gap-14">
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.24em]">
                {language === "tr" ? "Canlı örnekleri keşfet" : "Explore live examples"}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                {language === "tr"
                  ? "Hazır ürünleri inceleyip işletmen için nasıl uyarlanabileceğini görebilirsin."
                  : "Review ready products and see how they can be adapted for your business."}
              </p>
              <Button href="/projects" className="mt-5 h-12 w-fit px-7 text-sm sm:mt-6 sm:h-[4.5rem] sm:px-12 sm:text-xl">
                {t("hero.projects")}
              </Button>
            </div>
            <div className="min-w-0 rounded-3xl border border-slate-200/70 bg-[#eaf3f6]/82 p-3 shadow-xl shadow-slate-950/18 backdrop-blur-md sm:rounded-[2.5rem] sm:p-5 lg:translate-y-10 lg:p-7">
            <div className="min-w-0 rounded-2xl border border-slate-200/90 bg-[#f5f9fb]/86 p-3 shadow-sm sm:rounded-3xl sm:p-5">
              <div className="mb-3 sm:mb-5">
                <p className="text-xs font-semibold text-slate-950 sm:text-sm">
                  {language === "tr" ? "Öne Çıkan Ürünler" : "Featured Products"}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-sm sm:leading-5">
                  {language === "tr"
                    ? "Müşteri kazanmak için en çok talep edilen web çözümleri."
                    : "The most requested web solutions for client acquisition."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-1 lg:gap-3">
                {featuredProducts.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-xl border border-slate-200 bg-white/82 px-3 py-2 transition hover:border-slate-300 hover:bg-white hover:shadow-sm sm:rounded-2xl sm:px-4 sm:py-3"
                  >
                    <span className="line-clamp-2 block text-xs font-semibold leading-4 text-slate-950 sm:text-sm sm:leading-5">{item.title}</span>
                    <span className="mt-1 line-clamp-2 block text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
