"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { techStack } from "@/data/tech-stack";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  const team = [
    {
      name: "İsmail Taner Erdoğan",
      roleTr: "Web geliştirme, backend, admin panel, e-ticaret ve özel yazılım altyapıları",
      role: "Web development, backend, admin panels, e-commerce and custom software systems",
      descriptionTr:
        "Projelerin teknik tarafını, sistem mimarisini, sayfa akışını, veritabanı/API mantığını ve yayına hazırlık sürecini geliştirir.",
      description:
        "Develops the technical side of projects, system architecture, page flow, database/API logic and deployment preparation."
    },
    {
      name: "Nisa Gökşen",
      roleTr: "İçerik dili, görsel akış, müşteri sunumu ve proje düzeni desteği",
      role: "Content language, visual flow, client presentation and project organization support",
      descriptionTr:
        "Sayfaların daha anlaşılır, düzenli ve müşteriye hitap eden bir yapıya kavuşması için içerik ve sunum tarafında destek sağlar.",
      description:
        "Supports the content and presentation side so pages become clearer, more organized and more suitable for clients."
    }
  ];

  const principles = [
    {
      titleTr: "Canlı örnekle gösterim",
      title: "Live demo presentation",
      textTr:
        "Müşteri sadece açıklama okumaz; benzer çalışan örnekleri gezerek nasıl bir yapı alacağını daha net görebilir.",
      text:
        "Clients do not only read descriptions; they can review similar working examples and understand the structure better."
    },
    {
      titleTr: "İşletmeye göre uyarlama",
      title: "Adapted to the business",
      textTr:
        "Hazır kalıp mantığı yerine; renkler, metinler, sayfalar, modüller ve akış işletmenin ihtiyacına göre düzenlenir.",
      text:
        "Instead of a fixed template approach, colors, texts, pages, modules and flows are adapted to the business need."
    },
    {
      titleTr: "Net kapsam ve dürüst iletişim",
      title: "Clear scope and honest communication",
      textTr:
        "Proje başlamadan önce ne yapılacağı, hangi modüllerin dahil olduğu ve nelerin ekstra olacağı açık şekilde konuşulur.",
      text:
        "Before the project starts, the scope, included modules and possible extras are discussed clearly."
    },
    {
      titleTr: "Teslim öncesi önizleme",
      title: "Preview before delivery",
      textTr:
        "Uygun projelerde yayına almadan önce canlı önizleme bağlantısı paylaşılır ve son kontroller birlikte yapılabilir.",
      text:
        "For suitable projects, a live preview link can be shared before publishing and final checks can be done together."
    }
  ];

  const process = [
    {
      titleTr: "İhtiyaç dinlenir",
      title: "Need is understood",
      textTr: "İşletmenin neye ihtiyacı olduğu, hedefi ve mevcut durumu netleştirilir.",
      text: "The business need, goal and current situation are clarified."
    },
    {
      titleTr: "Canlı örnek seçilir",
      title: "A live example is selected",
      textTr: "Size en yakın örnek sistem üzerinden nasıl uyarlanacağı konuşulur.",
      text: "The closest example system is used to discuss how it can be adapted."
    },
    {
      titleTr: "Sistem uyarlanır",
      title: "The system is adapted",
      textTr: "Sayfalar, içerikler, modüller ve tasarım işletmeye göre düzenlenir.",
      text: "Pages, content, modules and design are adjusted to the business."
    },
    {
      titleTr: "Önizleme paylaşılır",
      title: "Preview is shared",
      textTr: "Teslimden önce kontrol edilebilir bir canlı bağlantı paylaşılabilir.",
      text: "A reviewable live preview link can be shared before delivery."
    },
    {
      titleTr: "Yayına alınır",
      title: "Project goes live",
      textTr: "Onay sonrası site veya sistem yayına hazır hale getirilir.",
      text: "After approval, the website or system is prepared for publishing."
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
              {isTr ? "Hakkımızda" : "About Us"}
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {isTr
                ? "NT Web Çözümleri, işletmelerin ne alacağını canlı örneklerle görerek karar verebilmesi için kuruldu."
                : "NT Web Solutions was built so businesses can decide by seeing live examples of what they will receive."}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              {isTr
                ? "Web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım ihtiyaçlarında; sadece sözle anlatılan değil, canlı incelenebilen örnekler üzerinden ilerleyen bir çalışma anlayışı benimsiyoruz."
                : "For websites, catalogs, appointment systems, e-commerce, admin panels and custom software needs, we follow a workflow based on live, reviewable examples instead of only written explanations."}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["10+", isTr ? "canlı örnek sistem" : "live demo systems"],
                [isTr ? "Modüler" : "Modular", isTr ? "uyarlanabilir yapı" : "adaptable structure"],
                [isTr ? "Net" : "Clear", isTr ? "kapsam ve iletişim" : "scope and communication"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects" className="h-12 min-h-12 justify-center">
                {isTr ? "Canlı Örnekleri İncele" : "View Live Demos"}
              </Button>
              <Button href="/contact" variant="secondary" className="h-12 min-h-12 justify-center">
                {isTr ? "İletişime Geç" : "Contact Us"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
              {isTr ? "Yaklaşımımız" : "Our Approach"}
            </p>

            <h2 className="mt-3 text-2xl font-black leading-8 text-slate-950 sm:text-3xl">
              {isTr
                ? "Klasik ajans dili yerine, görülebilir ve anlaşılır sistemler"
                : "Visible and understandable systems instead of classic agency language"}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>
                {isTr
                  ? "Birçok işletme web sitesi yaptırmak isterken ne alacağını tam göremediği için kararsız kalır. Bu yüzden NT Web Çözümleri’nde canlı örnekler önemli bir yer tutar."
                  : "Many businesses hesitate because they cannot clearly see what they will receive before ordering a website. That is why live examples are central to NT Web Solutions."}
              </p>

              <p>
                {isTr
                  ? "Hazırlanan örnekler; farklı sektörlere uyarlanabilecek web sitesi, katalog, randevu, e-ticaret ve admin panel altyapılarını göstermek için kullanılır."
                  : "The prepared examples are used to show website, catalog, appointment, e-commerce and admin panel infrastructures that can be adapted to different industries."}
              </p>

              <p>
                {isTr
                  ? "Amaç, müşterinin sadece tasarıma değil; sitenin akışına, kullanımına ve işletmesine nasıl fayda sağlayacağına da bakarak karar verebilmesidir."
                  : "The goal is to help clients decide not only by looking at design, but also by understanding the flow, usage and business value of the system."}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
              {isTr ? "Dürüst Sunum" : "Honest Presentation"}
            </p>

            <h2 className="mt-3 text-2xl font-black leading-8 sm:text-3xl">
              {isTr
                ? "Canlı örnekler müşteri işi gibi gösterilmez"
                : "Live examples are not presented as client projects"}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {isTr
                ? "Bu sitedeki canlı örnekler, gerçek müşteri işi gibi gösterilmez. Bunlar; farklı sektörlere uyarlanabilecek, çalışma mantığını göstermek için hazırlanmış örnek sistemlerdir."
                : "The live examples on this website are not presented as real client projects. They are sample systems created to show the workflow and how they can be adapted to different industries."}
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
              {isTr
                ? "Gerçek müşteri işleri oluştukça ve paylaşım izni oldukça ayrı şekilde referans olarak gösterilebilir."
                : "As real client projects are completed and permission is granted, they can be shown separately as references."}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            {isTr ? "Ekip" : "Team"}
          </p>

          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
            {isTr ? "NT Web Çözümleri ekibi" : "NT Web Solutions team"}
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {isTr
              ? "Projelerde teknik geliştirme, içerik akışı, görsel düzen ve müşteri sunumu birlikte düşünülür. Böylece sadece çalışan değil, müşteriye güven veren ve anlaşılır duran yapılar hazırlanır."
              : "Technical development, content flow, visual structure and client presentation are considered together. This helps create systems that work and also feel clear and trustworthy to clients."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                  {isTr ? member.roleTr : member.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {isTr ? member.descriptionTr : member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            {isTr ? "Neden Bu Yaklaşım?" : "Why This Approach?"}
          </p>

          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
            {isTr ? "Müşteri ne alacağını baştan görebilmeli" : "Clients should see what they will receive from the start"}
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div
                key={item.titleTr}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-base font-black leading-6 text-slate-950">
                  {isTr ? item.titleTr : item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {isTr ? item.textTr : item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            {isTr ? "Çalışma Süreci" : "Work Process"}
          </p>

          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
            {isTr ? "Nasıl çalışıyoruz?" : "How do we work?"}
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step.titleTr}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-base font-black leading-6 text-slate-950">
                  {isTr ? step.titleTr : step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {isTr ? step.textTr : step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
              {isTr ? "Teknik Altyapı" : "Technical Stack"}
            </p>

            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {isTr ? "Kullandığımız teknolojiler" : "Technologies we use"}
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} className="px-3 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-black leading-8">
              {isTr
                ? "Hangi sistemin size uygun olduğunu bilmiyorsanız birlikte netleştirebiliriz."
                : "If you are not sure which system fits your business, we can clarify it together."}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isTr
                ? "İşletmenizi, ihtiyacınızı ve varsa beğendiğiniz canlı örneği yazmanız yeterli. Size uygun sistem, kapsam ve ilerleme şekli birlikte belirlenebilir."
                : "You can simply share your business, your need and any live example you liked. The suitable system, scope and process can be defined together."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="h-12 min-h-12 justify-center">
                {isTr ? "İletişime Geç" : "Contact Us"}
              </Button>
              <Link
                href="/services"
                className="inline-flex h-12 min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                {isTr ? "Hizmetleri İncele" : "View Services"}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
