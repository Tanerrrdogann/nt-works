"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { techStack } from "@/data/tech-stack";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const team = ["İsmail Taner Erdoğan", "Nisa Gökşen"];

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          description={t("about.description")}
        />

        <div className="grid gap-4 sm:gap-8 lg:grid-cols-[1fr_0.86fr]">
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="h-2 bg-gradient-to-r from-slate-950 via-cyan-500 to-emerald-400" />
            <div className="flex flex-1 flex-col p-4 sm:p-8">
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">{t("about.focus")}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                {t("about.p1")}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                {t("about.p2")}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">
                {[
                  ["10+", language === "tr" ? "canlı inceleme adayı" : "live preview candidates"],
                  ["Uçtan uca", language === "tr" ? "tasarım ve geliştirme" : "design and development"],
                  ["Net", language === "tr" ? "teklif ve kapsam dili" : "scope and proposal language"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <p className="text-base font-black text-slate-950 sm:text-xl">{value}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-500 sm:text-sm sm:leading-5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
                {[
                  [
                    language === "tr" ? "Net kapsam" : "Clear scope",
                    language === "tr"
                      ? "Her proje; sayfa, modül, demo akışı ve teslim kapsamı ayrı ayrı okunacak şekilde hazırlanır."
                      : "Each project is shaped with readable pages, modules, demo flow and delivery scope."
                  ],
                  [
                    language === "tr" ? "Canlı örnek" : "Live example",
                    language === "tr"
                      ? "Müşteri yalnızca açıklama okumaz; çalışan ekranları gezip sistemin mantığını görür."
                      : "Clients do not only read copy; they can review working screens and understand the system."
                  ]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
                    <p className="text-sm font-black text-slate-950 sm:text-base">{title}</p>
                    <p className="mt-2 line-clamp-4 text-xs leading-5 text-slate-600 sm:line-clamp-none sm:text-sm sm:leading-6">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-8">
              <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
                {language === "tr" ? "Ekip" : "Team"}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 lg:grid-cols-1">
                {team.map((member) => (
                  <div key={member} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
                    <p className="text-sm font-black leading-5 text-slate-950 sm:text-lg sm:leading-6">{member}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-8">
              <h2 className="text-xl font-black text-slate-950 sm:text-2xl">{t("about.stack")}</h2>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {techStack.map((tech) => (
                  <Badge key={tech} className="px-3 text-xs">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
