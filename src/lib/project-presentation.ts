import type { Locale } from "@/lib/i18n";
import type { ProjectType } from "@/types";

export type ProjectPresentationStatus = "client" | "live" | "maintenance" | "planned";

function compactTitle(title: string) {
  if (title.length <= 49) return title;
  const shortened = title.slice(0, 48).replace(/\s+\S*$/, "").replace(/[\s,:;–—-]+$/, "");
  return `${shortened || title.slice(0, 48)}…`;
}

export function getProjectPresentationStatus(
  project: Pick<ProjectType, "projectKind" | "status" | "isDemoEnabled" | "demoUrl">,
): ProjectPresentationStatus {
  if (project.projectKind === "client" || project.status === "client") return "client";
  if (project.status === "maintenance") return "maintenance";
  if (project.status === "planned" || project.isDemoEnabled === false || !project.demoUrl) return "planned";
  return "live";
}

const projectStatusDescription = {
  tr: {
    planned: (title: string, category: string) => `${title}, ${category.toLocaleLowerCase("tr-TR")} ihtiyacı için planlanan kapsamı, temel modülleri, iş akışını ve işletmeye özel uyarlama seçeneklerini açıklar.`,
    maintenance: (title: string) => `${title} erişilebilir bir uygulama örneğidir; demo şu anda bakım sürecindedir. Sayfada kapsam, özellikler ve uyarlama seçenekleri incelenebilir.`,
  },
  en: {
    planned: (title: string, category: string) => `${title} documents the planned ${category.toLowerCase()} scope, core modules, workflow, and adaptation options before a live demo is published.`,
    maintenance: (title: string) => `${title} is an existing application example currently under maintenance. Review its scope, features, workflow, and adaptation options.`,
  },
  de: {
    planned: (title: string, category: string) => `${title} beschreibt den geplanten Umfang für ${category.toLowerCase()}, Kernmodule, Abläufe und Anpassungsoptionen vor Veröffentlichung einer Live-Demo.`,
    maintenance: (title: string) => `${title} ist ein bestehendes Anwendungsbeispiel, das derzeit gewartet wird. Umfang, Funktionen und Anpassungsoptionen bleiben einsehbar.`,
  },
  fr: {
    planned: (title: string, category: string) => `${title} présente le périmètre ${category.toLowerCase()} planifié, les modules, le workflow et les adaptations possibles avant la publication d’une démo.`,
    maintenance: (title: string) => `${title} est un exemple d’application existant actuellement en maintenance. Consultez son périmètre, ses fonctions et ses adaptations possibles.`,
  },
  es: {
    planned: (title: string, category: string) => `${title} explica el alcance planificado de ${category.toLowerCase()}, los módulos, el flujo y las opciones de adaptación antes de publicar una demo.`,
    maintenance: (title: string) => `${title} es un ejemplo de aplicación existente actualmente en mantenimiento. Revisa su alcance, funciones y opciones de adaptación.`,
  },
  ar: {
    planned: (title: string, category: string) => `${title} يوضح النطاق المخطط لـ${category} والوحدات الأساسية وسير العمل وخيارات التخصيص قبل نشر نموذج تجريبي حي.`,
    maintenance: (title: string) => `${title} مثال تطبيق قائم يخضع حاليا للصيانة. يمكن مراجعة نطاقه وخصائصه وسير العمل وخيارات التخصيص.`,
  },
  ru: {
    planned: (title: string, category: string) => `${title} описывает запланированный объем для ${category.toLowerCase()}, основные модули, рабочий процесс и варианты адаптации до публикации демо.`,
    maintenance: (title: string) => `${title} — существующий пример приложения, который сейчас на обслуживании. Доступно описание функций, процесса и вариантов адаптации.`,
  },
  pt: {
    planned: (title: string, category: string) => `${title} apresenta o escopo planejado de ${category.toLowerCase()}, módulos, fluxo de trabalho e opções de adaptação antes da publicação da demo.`,
    maintenance: (title: string) => `${title} é um exemplo de aplicação existente atualmente em manutenção. Consulte o escopo, os recursos e as opções de adaptação.`,
  },
  it: {
    planned: (title: string, category: string) => `${title} descrive l’ambito pianificato di ${category.toLowerCase()}, i moduli, il flusso e le opzioni di adattamento prima della pubblicazione della demo.`,
    maintenance: (title: string) => `${title} è un esempio applicativo esistente attualmente in manutenzione. Consulta ambito, funzioni e opzioni di adattamento.`,
  },
  nl: {
    planned: (title: string, category: string) => `${title} beschrijft de geplande scope voor ${category.toLowerCase()}, kernmodules, workflow en aanpassingsopties voordat een live demo verschijnt.`,
    maintenance: (title: string) => `${title} is een bestaand toepassingsvoorbeeld dat momenteel in onderhoud is. Bekijk scope, functies en aanpassingsopties.`,
  },
  zh: {
    planned: (title: string, category: string) => `${title}说明${category}的规划范围、核心模块、业务流程和定制方式；在线演示将在完成后发布。`,
    maintenance: (title: string) => `${title}是已存在的应用案例，目前处于维护状态。页面仍可查看项目范围、功能、流程与定制方式。`,
  },
} satisfies Record<Locale, {
  planned: (title: string, category: string) => string;
  maintenance: (title: string) => string;
}>;

export function getProjectSeoCopy(project: ProjectType, locale: Locale) {
  const status = getProjectPresentationStatus(project);
  const description = status === "planned"
    ? projectStatusDescription[locale].planned(project.title, project.category)
    : status === "maintenance"
      ? projectStatusDescription[locale].maintenance(project.title)
      : project.shortDesc;
  const compactDescription = description.length > 178
    ? `${description.slice(0, 175).replace(/\s+\S*$/, "").replace(/[,:;–—-]+$/, "")}…`
    : description;

  return {
    title: compactTitle(project.title),
    description: compactDescription,
  };
}
