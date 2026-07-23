"use client";

import { RevealItem } from "@/components/animations/PageReveal";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";
import ProjectDemoGrid from "@/components/projects/ProjectDemoGrid";
import type { ProjectType } from "@/types";

const copy = {
  tr: {
    title: "Proje Örnekleri ve",
    muted: "Uyarlanabilir Sistem Kapsamları",
    intro: "Canlı demoları, bakımdaki örnekleri ve henüz geliştirilmesi planlanan sistem kapsamlarını durum etiketleriyle karşılaştırın.",
    note: "Her kart gerçek yayın durumunu açıkça gösterir. Planlanan kartlar canlı demo değildir; tamamlanan müşteri işleri ve değerlendirmeler ayrı Portföy sayfasında yer alır.",
  },
  en: {
    title: "Project Examples and",
    muted: "Adaptable System Scopes",
    intro: "Compare live demos, examples under maintenance, and planned system scopes using clear availability labels.",
    note: "Every card states its real publication status. Planned cards are not live demos; completed client work and reviews are listed separately on the Portfolio page.",
  },
  de: {
    title: "Projektbeispiele und",
    muted: "anpassbare Systemumfänge",
    intro: "Vergleichen Sie Live-Demos, Beispiele in Wartung und geplante Systemumfänge anhand klarer Statusangaben.",
    note: "Jede Karte zeigt den tatsächlichen Veröffentlichungsstatus. Geplante Karten sind keine Live-Demos; abgeschlossene Kundenarbeiten stehen separat im Portfolio.",
  },
  fr: {
    title: "Exemples de projets et",
    muted: "périmètres système adaptables",
    intro: "Comparez les démos live, les exemples en maintenance et les périmètres planifiés grâce à des statuts clairs.",
    note: "Chaque carte indique son état réel de publication. Les cartes planifiées ne sont pas des démos live ; les travaux clients terminés sont présentés dans le Portfolio.",
  },
  es: {
    title: "Ejemplos de proyectos y",
    muted: "alcances de sistema adaptables",
    intro: "Compara demos en vivo, ejemplos en mantenimiento y alcances planificados mediante etiquetas de estado claras.",
    note: "Cada tarjeta muestra su estado real de publicación. Las tarjetas planificadas no son demos en vivo; los trabajos de clientes terminados están en el Portafolio.",
  },
  ar: {
    title: "أمثلة المشاريع و",
    muted: "نطاقات أنظمة قابلة للتكييف",
    intro: "قارن بين النماذج الحية والأمثلة قيد الصيانة ونطاقات الأنظمة المخطط لها عبر حالات واضحة.",
    note: "تعرض كل بطاقة حالة النشر الحقيقية. البطاقات المخططة ليست نماذج حية، وتوجد أعمال العملاء المكتملة في صفحة البورتفوليو.",
  },
  ru: {
    title: "Примеры проектов и",
    muted: "адаптируемые объемы систем",
    intro: "Сравните живые демо, примеры на обслуживании и запланированные системы по понятным статусам.",
    note: "Каждая карточка показывает реальный статус публикации. Запланированные карточки не являются живыми демо; завершенные клиентские работы находятся в Портфолио.",
  },
  pt: {
    title: "Exemplos de projetos e",
    muted: "escopos de sistema adaptáveis",
    intro: "Compare demos ao vivo, exemplos em manutenção e escopos planejados por meio de etiquetas de status claras.",
    note: "Cada cartão mostra seu estado real de publicação. Cartões planejados não são demos ao vivo; trabalhos de clientes concluídos ficam no Portfólio.",
  },
  it: {
    title: "Esempi di progetto e",
    muted: "ambiti di sistema adattabili",
    intro: "Confronta demo live, esempi in manutenzione e ambiti pianificati tramite etichette di stato chiare.",
    note: "Ogni scheda mostra il reale stato di pubblicazione. Le schede pianificate non sono demo live; i lavori cliente completati sono nel Portfolio.",
  },
  nl: {
    title: "Projectvoorbeelden en",
    muted: "aanpasbare systeemscopes",
    intro: "Vergelijk live demo’s, voorbeelden in onderhoud en geplande systeemscopes met duidelijke statuslabels.",
    note: "Elke kaart toont de echte publicatiestatus. Geplande kaarten zijn geen live demo’s; afgeronde klantprojecten staan apart in het Portfolio.",
  },
  zh: {
    title: "项目案例与",
    muted: "可定制系统范围",
    intro: "通过清晰状态标签比较在线演示、维护中案例和计划中的系统范围。",
    note: "每张卡片都会标明真实发布状态。计划中的卡片不是在线演示；已完成客户项目会单独展示在作品集页面。",
  },
};

export default function ProjectsPageView({ projects }: { projects: ProjectType[] }) {
  const locale = useCurrentLocale();
  const text = copy[locale];

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

      <ProjectDemoGrid projects={projects} />
    </main>
  );
}
