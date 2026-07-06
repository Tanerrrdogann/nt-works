"use client";

import { RevealItem } from "@/components/animations/PageReveal";
import ProjectDemoGrid from "@/components/projects/ProjectDemoGrid";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { getLocalizedProjects } from "@/data/i18n/projects-en";
import { getLocaleFromPath } from "@/lib/i18n";
import { usePathname } from "next/navigation";

const copy = {
  tr: {
    title: "Canlı Örnekler ve",
    muted: "Uyarlanabilir Sistem Kapsamları",
    intro: "Canlı inceleyebileceğiniz uyarlanabilir web sitesi ve yazılım örnekleri. Gerçek müşteri işleri ayrı Portföy sayfasında gösterilir.",
    note: "Bu sayfadaki sistemler demo/önizleme amaçlıdır ve gerçek müşteri işi gibi gösterilmez. Tamamlanan işler ve müşteri değerlendirmeleri Portföy sayfasında yer alır.",
  },
  en: {
    title: "Live Examples and",
    muted: "Adaptable System Scopes",
    intro: "Adaptable website and software examples you can review live. Completed client work is shown separately on the Portfolio page.",
    note: "The systems on this page are demo and preview examples. They are not presented as completed client projects. Completed work and customer reviews are listed on the Portfolio page.",
  },
  de: {
    title: "Live-Beispiele und",
    muted: "anpassbare Systemumfänge",
    intro: "Anpassbare Website- und Softwarebeispiele, die Sie live prüfen können. Abgeschlossene Kundenarbeiten werden separat auf der Portfolio-Seite gezeigt.",
    note: "Die Systeme auf dieser Seite sind Demo- und Vorschaubeispiele. Sie werden nicht als abgeschlossene Kundenprojekte dargestellt. Abgeschlossene Arbeiten und Kundenbewertungen stehen im Portfolio.",
  },
  fr: {
    title: "Exemples live et",
    muted: "périmètres système adaptables",
    intro: "Exemples de sites web et logiciels adaptables que vous pouvez consulter en live. Les travaux client terminés sont présentés séparément sur la page Portfolio.",
    note: "Les systèmes de cette page sont des exemples de démonstration et de prévisualisation. Ils ne sont pas présentés comme des projets client terminés. Les travaux terminés et avis clients sont listés sur la page Portfolio.",
  },
  es: {
    title: "Ejemplos en vivo y",
    muted: "alcances de sistema adaptables",
    intro: "Ejemplos adaptables de sitios web y software que puedes revisar en vivo. Los trabajos reales de clientes se muestran por separado en la página de Portafolio.",
    note: "Los sistemas de esta página son ejemplos demo o de vista previa. No se presentan como proyectos de cliente terminados. Los trabajos completados y las reseñas de clientes están en Portafolio.",
  },
  ar: {
    title: "أمثلة حية و",
    muted: "نطاقات أنظمة قابلة للتكييف",
    intro: "أمثلة قابلة للتكييف لمواقع وأنظمة برمجية يمكن مراجعتها مباشرة. أعمال العملاء المكتملة تظهر بشكل منفصل في صفحة البورتفوليو.",
    note: "الأنظمة في هذه الصفحة هي أمثلة demo ومعاينة، ولا تعرض كأنها مشاريع عملاء مكتملة. الأعمال المكتملة وتقييمات العملاء موجودة في صفحة البورتفوليو.",
  },
  ru: {
    title: "Live examples и",
    muted: "адаптируемые system scopes",
    intro: "Адаптируемые примеры web-сайтов и software systems, которые можно изучить live. Завершенные клиентские работы отдельно показаны на странице Portfolio.",
    note: "Системы на этой странице являются demo и preview examples. Они не показываются как завершенные клиентские проекты. Завершенные работы и отзывы клиентов находятся на странице Portfolio.",
  },
  pt: {
    title: "Exemplos ao vivo e",
    muted: "escopos de sistema adaptáveis",
    intro: "Exemplos adaptáveis de sites e sistemas que você pode revisar ao vivo. Trabalhos reais de clientes aparecem separadamente na página de Portfólio.",
    note: "Os sistemas desta página são exemplos demo e prévia. Eles não são apresentados como projetos de cliente concluídos. Trabalhos concluídos e avaliações de clientes ficam no Portfólio.",
  },
  nl: {
    title: "Live voorbeelden en",
    muted: "aanpasbare systeemscopes",
    intro: "Aanpasbare website- en softwarevoorbeelden die je live kunt bekijken. Afgeronde klantprojecten staan apart op de portfoliopagina.",
    note: "De systemen op deze pagina zijn demo- en previewvoorbeelden. Ze worden niet gepresenteerd als afgeronde klantprojecten. Afgerond werk en klantbeoordelingen staan in het portfolio.",
  },
  zh: {
    title: "在线示例与",
    muted: "可定制系统范围",
    intro: "可在线查看的网站与软件系统示例。已完成的真实客户项目会单独展示在作品集页面。",
    note: "本页系统用于演示和预览，不会被包装成已完成客户项目。真实交付案例和客户评价位于作品集页面。",
  },
};

export default function ProjectsPageView() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const text = locale === "en" ? copy.en : locale === "de" ? copy.de : locale === "fr" ? copy.fr : locale === "es" ? copy.es : locale === "ar" ? copy.ar : locale === "ru" ? copy.ru : locale === "pt" ? copy.pt : locale === "nl" ? copy.nl : locale === "zh" ? copy.zh : copy.tr;
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const demoProjects = localizedProjects.filter((project) => getProjectMeta(project.slug).projectKind !== "client");

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem className="mb-12 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
          {text.title} <br /><span className="text-gray-500">{text.muted}</span>
        </h1>
        <p className="mobile-compact-text text-base md:text-xl text-gray-400 max-w-3xl">{text.intro}</p>
        <div className="mt-7 max-w-4xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-gray-300">
          {text.note}
        </div>
      </RevealItem>

      <ProjectDemoGrid projects={demoProjects} />
    </main>
  );
}
