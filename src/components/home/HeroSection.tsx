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
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid min-w-0 items-stretch gap-8 lg:grid-cols-[1.03fr_0.97fr] xl:gap-10">
          <div className="min-w-0 p-6 sm:p-9 lg:p-10">
            <div className="mb-9 flex justify-center sm:justify-start">
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

            <h1 className="mt-6 max-w-[21rem] text-3xl font-black tracking-tight text-slate-950 sm:max-w-4xl sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-[21rem] text-lg leading-8 text-slate-600 sm:max-w-2xl">
              {t("hero.description")}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary">
                {t("hero.contact")}
              </Button>
            </div>

            <div className="mt-10 grid max-w-[21rem] gap-4 sm:max-w-2xl sm:grid-cols-3">
              {[
                ["10", t("hero.stat.projects")],
                ["Uçtan uca", t("hero.stat.fullstack")],
                ["Hazır", t("hero.stat.demo")]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="break-words text-xl font-bold text-slate-950">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-14 pt-2 lg:-translate-y-4">
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                {language === "tr" ? "Canlı örnekleri keşfet" : "Explore live examples"}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {language === "tr"
                  ? "Hazır ürünleri inceleyip işletmen için nasıl uyarlanabileceğini görebilirsin."
                  : "Review ready products and see how they can be adapted for your business."}
              </p>
              <Button href="/projects" className="mt-6 h-16 w-fit px-10 text-lg sm:h-[4.5rem] sm:px-12 sm:text-xl">
                {t("hero.projects")}
              </Button>
            </div>
            <div className="min-w-0 rounded-[2.5rem] border border-slate-200/70 bg-[#eaf3f6]/82 p-5 shadow-xl shadow-slate-950/18 backdrop-blur-md sm:p-7 lg:translate-y-10">
            <div className="min-w-0 rounded-3xl border border-slate-200/90 bg-[#f5f9fb]/86 p-4 shadow-sm sm:p-5">
              <div className="mb-5">
                <p className="text-sm font-semibold text-slate-950">
                  {language === "tr" ? "Öne Çıkan Ürünler" : "Featured Products"}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {language === "tr"
                    ? "Müşteri kazanmak için en çok talep edilen web çözümleri."
                    : "The most requested web solutions for client acquisition."}
                </p>
              </div>

              <div className="space-y-3">
                {featuredProducts.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-2xl border border-slate-200 bg-white/82 px-4 py-3 transition hover:border-slate-300 hover:bg-white hover:shadow-sm"
                  >
                    <span className="block text-sm font-semibold text-slate-950">{item.title}</span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-5 text-slate-500">
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
