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
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          description={t("about.description")}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr]">
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="h-2 bg-gradient-to-r from-slate-950 via-cyan-500 to-emerald-400" />
            <div className="flex flex-1 flex-col p-8">
              <h2 className="text-3xl font-black text-slate-950">{t("about.focus")}</h2>
              <p className="mt-5 leading-8 text-slate-600">
                {t("about.p1")}
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                {t("about.p2")}
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {[
                  ["10+", language === "tr" ? "canlı inceleme adayı" : "live preview candidates"],
                  ["Uçtan uca", language === "tr" ? "tasarım ve geliştirme" : "design and development"],
                  ["Net", language === "tr" ? "teklif ve kapsam dili" : "scope and proposal language"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xl font-black text-slate-950">{value}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
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
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="font-black text-slate-950">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">
                {language === "tr" ? "Ekip" : "Team"}
              </h2>
              <div className="mt-5 grid gap-4">
                {team.map((member) => (
                  <div key={member} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-lg font-black text-slate-950">{member}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{t("about.stack")}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
