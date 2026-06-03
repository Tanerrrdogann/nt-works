"use client";

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:mb-10 sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            {isTr ? "Canlı Örnekler" : "Live Examples"}
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {isTr
              ? "Canlı inceleyebileceğiniz uyarlanabilir web sitesi ve yazılım örnekleri"
              : "Adaptable website and software examples you can review live"}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            {isTr
              ? "Bu sayfadaki çalışmalar gerçek müşteri işi gibi gösterilmez. Farklı sektörlere uyarlanabilecek örnek sistemlerdir. Beğendiğiniz yapının benzeri işletmenizin içerikleri, renkleri, ürünleri ve ihtiyaçlarına göre hazırlanabilir."
              : "The works on this page are not presented as real client projects. They are sample systems that can be adapted to different industries. A similar structure can be prepared according to your business content, colors, products and needs."}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              [isTr ? "Canlı inceleme" : "Live review", isTr ? "Sadece ekran görüntüsü değil, çalışan örnekler." : "Working examples, not only screenshots."],
              [isTr ? "Uyarlanabilir yapı" : "Adaptable structure", isTr ? "Renk, içerik, sayfa ve modüller değişebilir." : "Colors, content, pages and modules can change."],
              [isTr ? "Güvenli ilerleme" : "Secure process", isTr ? "İsterseniz Bionluk üzerinden teklif/sipariş." : "Bionluk order/offer option if preferred."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-sm font-black text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 xl:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
