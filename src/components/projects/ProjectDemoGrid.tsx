"use client";

import { RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { getProjectMeta } from "@/data/project-meta";
import { getLocaleFromPath } from "@/lib/i18n";
import type { ProjectType } from "@/types";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type ProjectWithDemo = ProjectType & {
  demoUrl?: string;
  isDemoEnabled?: boolean;
  status?: string;
};

type DemoFilter = {
  key: string;
  label: string;
  labelDe: string;
  labelFr: string;
  labelEs: string;
  labelAr: string;
  labelRu: string;
  labelPt: string;
  labelIt: string;
  labelNl: string;
  labelZh: string;
};

const demoFilters: Array<DemoFilter & { labelEn: string }> = [
  { key: "all", label: "Tümü", labelEn: "All", labelDe: "Alle", labelFr: "Tous", labelEs: "Todos", labelAr: "الكل", labelRu: "Все", labelPt: "Todos", labelIt: "Tutti", labelNl: "Alle", labelZh: "全部" },
  { key: "web", label: "Web", labelEn: "Web", labelDe: "Web", labelFr: "Web", labelEs: "Web", labelAr: "ويب", labelRu: "Web", labelPt: "Web", labelIt: "Web", labelNl: "Web", labelZh: "网站" },
  { key: "catalog", label: "Katalog", labelEn: "Catalog", labelDe: "Katalog", labelFr: "Catalogue", labelEs: "Catálogo", labelAr: "كتالوج", labelRu: "Каталог", labelPt: "Catálogo", labelIt: "Catalogo", labelNl: "Catalogus", labelZh: "目录" },
  { key: "panel", label: "Panel", labelEn: "Panel", labelDe: "Panel", labelFr: "Panneau", labelEs: "Panel", labelAr: "لوحة", labelRu: "Panel", labelPt: "Painel", labelIt: "Pannello", labelNl: "Paneel", labelZh: "面板" },
  { key: "crm", label: "CRM", labelEn: "CRM", labelDe: "CRM", labelFr: "CRM", labelEs: "CRM", labelAr: "CRM", labelRu: "CRM", labelPt: "CRM", labelIt: "CRM", labelNl: "CRM", labelZh: "CRM" },
  { key: "integration", label: "Entegrasyon", labelEn: "Integration", labelDe: "Integration", labelFr: "Intégration", labelEs: "Integración", labelAr: "تكامل", labelRu: "Интеграция", labelPt: "Integração", labelIt: "Integrazione", labelNl: "Integratie", labelZh: "集成" },
  { key: "booking", label: "Randevu", labelEn: "Booking", labelDe: "Termin", labelFr: "Réservation", labelEs: "Reservas", labelAr: "مواعيد", labelRu: "Запись", labelPt: "Agendamento", labelIt: "Prenotazioni", labelNl: "Afspraken", labelZh: "预约" },
  { key: "sector", label: "Sektörel", labelEn: "Industry", labelDe: "Branche", labelFr: "Secteur", labelEs: "Sectorial", labelAr: "قطاعي", labelRu: "Отрасль", labelPt: "Setorial", labelIt: "Settoriale", labelNl: "Sector", labelZh: "行业" },
  { key: "ai", label: "AI", labelEn: "AI", labelDe: "KI", labelFr: "IA", labelEs: "IA", labelAr: "AI", labelRu: "AI", labelPt: "IA", labelIt: "AI", labelNl: "AI", labelZh: "AI" },
  { key: "planned", label: "Planlanan", labelEn: "Planned", labelDe: "Geplant", labelFr: "Planifié", labelEs: "Planificado", labelAr: "مخطط", labelRu: "План", labelPt: "Planejado", labelIt: "Pianificato", labelNl: "Gepland", labelZh: "计划中" },
];

const labels = {
  tr: {
    shown: (count: number) => `${count} örnek gösteriliyor`,
    plannedCard: "Planlanan demo kartı",
    clientCard: "Gerçek müşteri işi",
    demoCard: "Uyarlanabilir demo",
    problem: "Çözülen Problem",
    detail: "Detayları İncele",
    live: "Canlı İncele",
    planned: "Planlandı",
    request: "Benzerini İste",
  },
  en: {
    shown: (count: number) => `${count} examples shown`,
    plannedCard: "Planned demo card",
    clientCard: "Completed client work",
    demoCard: "Adaptable demo",
    problem: "Problem Solved",
    detail: "Review Details",
    live: "View Live",
    planned: "Planned",
    request: "Request Similar",
  },
  de: {
    shown: (count: number) => `${count} Beispiele werden angezeigt`,
    plannedCard: "Geplante Demo-Karte",
    clientCard: "Abgeschlossene Kundenarbeit",
    demoCard: "Anpassbare Demo",
    problem: "Gelöstes Problem",
    detail: "Details ansehen",
    live: "Live ansehen",
    planned: "Geplant",
    request: "Ähnliches anfragen",
  },
  fr: {
    shown: (count: number) => `${count} exemples affichés`,
    plannedCard: "Carte démo planifiée",
    clientCard: "Travail client terminé",
    demoCard: "Démo adaptable",
    problem: "Problème résolu",
    detail: "Voir les détails",
    live: "Voir en live",
    planned: "Planifié",
    request: "Demander similaire",
  },
  es: {
    shown: (count: number) => `${count} ejemplos mostrados`,
    plannedCard: "Tarjeta demo planificada",
    clientCard: "Trabajo de cliente completado",
    demoCard: "Demo adaptable",
    problem: "Problema resuelto",
    detail: "Revisar detalles",
    live: "Ver en vivo",
    planned: "Planificado",
    request: "Solicitar similar",
  },
  ar: {
    shown: (count: number) => `يتم عرض ${count} مثال`,
    plannedCard: "بطاقة demo مخططة",
    clientCard: "عمل عميل مكتمل",
    demoCard: "Demo قابل للتكييف",
    problem: "المشكلة التي تم حلها",
    detail: "راجع التفاصيل",
    live: "شاهد مباشرة",
    planned: "مخطط",
    request: "اطلب مشابها",
  },
  ru: {
    shown: (count: number) => `Показано ${count} примеров`,
    plannedCard: "План demo",
    clientCard: "Завершенная клиентская работа",
    demoCard: "Адаптируемый demo",
    problem: "Решенная проблема",
    detail: "Посмотреть детали",
    live: "Смотреть live",
    planned: "Планируется",
    request: "Запросить похожее",
  },
  pt: {
    shown: (count: number) => `${count} exemplos exibidos`,
    plannedCard: "Cartão demo planejado",
    clientCard: "Trabalho de cliente concluído",
    demoCard: "Demo adaptável",
    problem: "Problema resolvido",
    detail: "Revisar detalhes",
    live: "Ver ao vivo",
    planned: "Planejado",
    request: "Pedir semelhante",
  },
  it: {
    shown: (count: number) => `${count} esempi mostrati`,
    plannedCard: "Scheda demo pianificata",
    clientCard: "Lavoro cliente completato",
    demoCard: "Demo adattabile",
    problem: "Problema risolto",
    detail: "Vedi dettagli",
    live: "Vedi live",
    planned: "Pianificato",
    request: "Richiedi simile",
  },
  nl: {
    shown: (count: number) => `${count} voorbeelden getoond`,
    plannedCard: "Geplande demokaart",
    clientCard: "Afgerond klantproject",
    demoCard: "Aanpasbare demo",
    problem: "Opgelost probleem",
    detail: "Bekijk details",
    live: "Live bekijken",
    planned: "Gepland",
    request: "Vergelijkbaar aanvragen",
  },
  zh: {
    shown: (count: number) => `显示 ${count} 个示例`,
    plannedCard: "计划中的演示卡片",
    clientCard: "已完成客户项目",
    demoCard: "可定制演示",
    problem: "解决的问题",
    detail: "查看详情",
    live: "在线查看",
    planned: "计划中",
    request: "申请类似项目",
  },
};

const sectorKeywords = [
  "emlak",
  "rent",
  "kuyumcu",
  "turizm",
  "klinik",
  "guzellik",
  "güzellik",
  "restoran",
  "butik",
  "toptanci",
  "toptancı",
  "depo",
  "teknik-servis",
  "uretici",
  "üretici",
  "b2b",
];

const getProjectText = (project: ProjectWithDemo) =>
  `${project.slug} ${project.title} ${project.category} ${project.shortDesc}`.toLocaleLowerCase("tr-TR");

const projectMatches = (project: ProjectWithDemo, filter: string) => {
  if (filter === "all") return true;

  const text = getProjectText(project);
  const isPlanned = project.status === "planned" || project.isDemoEnabled === false || !project.demoUrl;

  if (filter === "planned") return isPlanned;
  if (filter === "web") return /web|site|landing|kurumsal|b2b/.test(text);
  if (filter === "catalog") return /katalog|catalog|qr|whatsapp|kuyumcu|butik/.test(text);
  if (filter === "panel") return /panel|dashboard|admin|yonetim|yönetim|stok|siparis|sipariş|teklif|operasyon|sevkiyat/.test(text);
  if (filter === "crm") return /crm|lead|musteri|müşteri|teklif/.test(text);
  if (filter === "integration") return /entegrasyon|integration|xml|api|pazaryeri|seo|redirect|migration/.test(text);
  if (filter === "booking") return /randevu|rezervasyon|reservation|booking|rent/.test(text);
  if (filter === "sector") return sectorKeywords.some((keyword) => text.includes(keyword));
  if (filter === "ai") return /ai|yapay|log|analiz|asistan|video/.test(text);

  return true;
};

export default function ProjectDemoGrid({ projects }: { projects: ProjectWithDemo[] }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const text = locale === "en" ? labels.en : locale === "de" ? labels.de : locale === "fr" ? labels.fr : locale === "es" ? labels.es : locale === "ar" ? labels.ar : locale === "ru" ? labels.ru : locale === "pt" ? labels.pt : locale === "it" ? labels.it : locale === "nl" ? labels.nl : locale === "zh" ? labels.zh : labels.tr;

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectMatches(project, activeFilter)),
    [activeFilter, projects]
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {demoFilters.map((filter) => {
          const isActive = activeFilter === filter.key;

          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`border px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {locale === "en" ? filter.labelEn : locale === "de" ? filter.labelDe : locale === "fr" ? filter.labelFr : locale === "es" ? filter.labelEs : locale === "ar" ? filter.labelAr : locale === "ru" ? filter.labelRu : locale === "pt" ? filter.labelPt : locale === "it" ? filter.labelIt : locale === "nl" ? filter.labelNl : locale === "zh" ? filter.labelZh : filter.label}
            </button>
          );
        })}
      </div>

      <div className="mb-5 text-sm text-gray-500">
        {text.shown(filteredProjects.length)}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
        {filteredProjects.map((project) => {
          const meta = getProjectMeta(project.slug);
          const demoEnabled = project.isDemoEnabled !== false && Boolean(project.demoUrl);
          const isPlanned = project.status === "planned" || !demoEnabled;

          return (
            <RevealItem key={project.slug} className="project-showcase-card mobile-compact-card group relative overflow-hidden bg-[rgba(9,26,49,0.92)] border border-white/10 p-4 md:p-8 flex flex-col justify-between">
              <div className="relative z-10">
                <span className="text-gray-500 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-2 md:mb-3 block">{project.category}</span>
                <span className="mb-3 inline-block border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {isPlanned ? text.plannedCard : meta.projectKind === "client" ? text.clientCard : text.demoCard}
                </span>
                <h2 className="text-base md:text-2xl font-medium mb-3 md:mb-4">{project.title}</h2>
                <p className="text-gray-400 mb-4 md:mb-8 text-xs md:text-sm leading-5">{project.shortDesc}</p>

                <div className="mobile-hide-detail mb-6 pb-6 border-b border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">{text.problem}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.problem}</p>
                </div>
              </div>

              <div className="mobile-actions relative z-10 flex flex-wrap gap-2 md:gap-4 mt-auto">
                <LocalizedLink href={`/projects/${project.slug}`} className="shimmer-button bg-white text-black px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-bold transition-colors">
                  {text.detail}
                </LocalizedLink>
                {demoEnabled ? (
                  <LocalizedLink href={project.demoUrl!} target="_blank" rel="noreferrer" className="border border-white/20 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors">
                    {text.live}
                  </LocalizedLink>
                ) : (
                  <button type="button" disabled className="border border-white/15 text-gray-500 px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium cursor-not-allowed opacity-75">
                    {text.planned}
                  </button>
                )}
                <LocalizedLink href={`/contact?project=${project.slug}`} className="border border-white/20 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors project-secondary-action">
                  {text.request}
                </LocalizedLink>
              </div>
            </RevealItem>
          );
        })}
      </div>
    </>
  );
}
