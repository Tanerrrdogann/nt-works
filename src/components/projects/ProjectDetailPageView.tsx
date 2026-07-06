"use client";

import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import ProjectImageGallery from "@/components/projects/ProjectImageGallery";
import { getProjectMeta } from "@/data/project-meta";
import { getLocalizedProjectBySlug, getLocalizedProjectMeta, getLocalizedTestimonial } from "@/data/i18n/projects-en";
import { getLocaleFromPath } from "@/lib/i18n";
import type { ProjectType } from "@/types";
import { CheckCircle2, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";

type RichProject = ProjectType & {
  descriptionTr?: string;
  demoIncludesTr?: string[];
  demoLimitationsTr?: string[];
  demoAccounts?: Array<{ role: string; email: string; password: string }>;
  status?: string;
  isDemoEnabled?: boolean;
  demoUrl?: string;
};

const copy = {
  tr: {
    backPortfolio: "← Portföye Dön",
    backProjects: "← Tüm Canlı Örneklere Dön",
    client: "Gerçek Müşteri İşi",
    demo: "Uyarlanabilir Canlı Örnek",
    live: "Canlı İncele",
    planned: "Planlandı",
    request: "Benzerini İstiyorum",
    problem: "İşletme Problemi",
    solution: "Çözüm Mimarisi",
    resultTitle: "Sonuç ve müşteri geri bildirimi",
    result: "Proje sonucu",
    review: "Müşteri değerlendirmesi",
    caseStudy: "Detaylı case study",
    work: "iş",
    doneTitle: "Bu işte ne yapıldı?",
    demoTitle: "Bu canlı örnek neyi gösterir?",
    focusClient: "Case study odağı",
    focusDemo: "Canlı inceleme odağı",
    focusClientText: "Bu kayıt; tamamlanan işin problem, çözüm, teknik kapsam ve müşteri geri bildirimi tarafını özetler.",
    focusDemoText: "Ziyaretçi örnek akışı, sistem mantığını, kullanılabilecek modülleri ve işletmeye nasıl uyarlanabileceğini tek sayfada görebilir.",
    features: "Sistemin temel özellikleri",
    demoScope: "Canlı inceleme kapsamı",
    openItems: "Açık olanlar",
    limits: "Bilinçli sınırlar",
    accounts: "Demo hesapları",
    tech: "Teknolojiler ve altyapı",
    database: "Veritabanı",
    deployment: "Teslim Şekli",
    adaptClient: "Benzer iş nasıl planlanır?",
    adaptDemo: "Bu canlı örnek nasıl uyarlanır?",
    cards: [
      ["İhtiyaç", "Bu ihtiyaç canlı ekranlar, süreç akışı ve gerçek kullanım senaryosu üzerinden netleştirilir."],
      ["Uyarlama", "Metinler, örnek veriler, renk dili, formlar, raporlar ve panel bölümleri işletmenin sektörüne göre yeniden düzenlenebilir."],
      ["Teslim", "Kapsam netleşince benzer yapı domain, hosting, yönetim paneli ve içerik düzeniyle işletmeye özel teslim edilebilir."],
    ],
  },
  en: {
    backPortfolio: "← Back to Portfolio",
    backProjects: "← Back to Live Examples",
    client: "Completed Client Work",
    demo: "Adaptable Live Example",
    live: "View Live",
    planned: "Planned",
    request: "Request Similar",
    problem: "Business Problem",
    solution: "Solution Architecture",
    resultTitle: "Result and Customer Feedback",
    result: "Project result",
    review: "Customer review",
    caseStudy: "Detailed case study",
    work: "phase",
    doneTitle: "What was delivered?",
    demoTitle: "What does this live example show?",
    focusClient: "Case study focus",
    focusDemo: "Live review focus",
    focusClientText: "This record summarizes the completed work, the problem, the solution, the technical scope, and the customer feedback.",
    focusDemoText: "Visitors can review the sample flow, system logic, usable modules, and how the structure can be adapted for a business.",
    features: "Core system features",
    demoScope: "Live review scope",
    openItems: "Included",
    limits: "Intentional limits",
    accounts: "Demo accounts",
    tech: "Technologies and infrastructure",
    database: "Database",
    deployment: "Delivery model",
    adaptClient: "How is a similar project planned?",
    adaptDemo: "How can this live example be adapted?",
    cards: [
      ["Need", "The business need is clarified through screens, workflow, roles, and real usage scenarios."],
      ["Adaptation", "Texts, sample data, forms, reports, colors, and panel modules can be reshaped for the business model."],
      ["Delivery", "After scope approval, a similar structure can be delivered with domain, hosting, admin flow, and handover support."],
    ],
  },
  de: {
    backPortfolio: "← Zurück zum Portfolio",
    backProjects: "← Zurück zu allen Live-Beispielen",
    client: "Abgeschlossene Kundenarbeit",
    demo: "Anpassbares Live-Beispiel",
    live: "Live ansehen",
    planned: "Geplant",
    request: "Ähnliches anfragen",
    problem: "Geschäftsproblem",
    solution: "Lösungsarchitektur",
    resultTitle: "Ergebnis und Kundenfeedback",
    result: "Projektergebnis",
    review: "Kundenbewertung",
    caseStudy: "Detaillierte Case Study",
    work: "Phase",
    doneTitle: "Was wurde geliefert?",
    demoTitle: "Was zeigt dieses Live-Beispiel?",
    focusClient: "Case-Study-Fokus",
    focusDemo: "Live-Prüfungsfokus",
    focusClientText: "Dieser Eintrag fasst abgeschlossene Arbeit, Problem, Lösung, technischen Umfang und Kundenfeedback zusammen.",
    focusDemoText: "Besucher können Beispielablauf, Systemlogik, nutzbare Module und Anpassungsmöglichkeiten für ein Unternehmen prüfen.",
    features: "Kernfunktionen des Systems",
    demoScope: "Umfang der Live-Prüfung",
    openItems: "Enthalten",
    limits: "Bewusste Grenzen",
    accounts: "Demo-Konten",
    tech: "Technologien und Infrastruktur",
    database: "Datenbank",
    deployment: "Liefermodell",
    adaptClient: "Wie wird ein ähnliches Projekt geplant?",
    adaptDemo: "Wie kann dieses Live-Beispiel angepasst werden?",
    cards: [
      ["Bedarf", "Der Geschäftsbedarf wird über Screens, Workflow, Rollen und echte Nutzungsszenarien geklärt."],
      ["Anpassung", "Texte, Beispieldaten, Formulare, Berichte, Farben und Panelmodule können an das Geschäftsmodell angepasst werden."],
      ["Lieferung", "Nach Umfangsfreigabe kann eine ähnliche Struktur mit Domain, Hosting, Admin-Ablauf und Übergabeunterstützung geliefert werden."],
    ],
  },
  fr: {
    backPortfolio: "← Retour au portfolio",
    backProjects: "← Retour aux exemples live",
    client: "Travail client terminé",
    demo: "Exemple live adaptable",
    live: "Voir en live",
    planned: "Planifié",
    request: "Demander similaire",
    problem: "Problème métier",
    solution: "Architecture de solution",
    resultTitle: "Résultat et retour client",
    result: "Résultat du projet",
    review: "Avis client",
    caseStudy: "Case study détaillé",
    work: "phase",
    doneTitle: "Qu'est-ce qui a été livré ?",
    demoTitle: "Que montre cet exemple live ?",
    focusClient: "Focus case study",
    focusDemo: "Focus de consultation live",
    focusClientText: "Cet enregistrement résume le travail terminé, le problème, la solution, le périmètre technique et le retour client.",
    focusDemoText: "Le visiteur peut consulter le flux exemple, la logique système, les modules utilisables et la façon dont la structure peut être adaptée à une entreprise.",
    features: "Fonctionnalités clés du système",
    demoScope: "Périmètre de consultation live",
    openItems: "Inclus",
    limits: "Limites intentionnelles",
    accounts: "Comptes démo",
    tech: "Technologies et infrastructure",
    database: "Base de données",
    deployment: "Modèle de livraison",
    adaptClient: "Comment planifier un projet similaire ?",
    adaptDemo: "Comment adapter cet exemple live ?",
    cards: [
      ["Besoin", "Le besoin métier est clarifié avec des écrans, un workflow, des rôles et des scénarios d'utilisation réels."],
      ["Adaptation", "Les textes, données exemples, formulaires, rapports, couleurs et modules de panneau peuvent être remodelés selon le modèle métier."],
      ["Livraison", "Après validation du périmètre, une structure similaire peut être livrée avec domaine, hébergement, flux admin et support de passation."],
    ],
  },
  es: {
    backPortfolio: "← Volver al portafolio",
    backProjects: "← Volver a ejemplos en vivo",
    client: "Trabajo de cliente completado",
    demo: "Ejemplo en vivo adaptable",
    live: "Ver en vivo",
    planned: "Planificado",
    request: "Solicitar similar",
    problem: "Problema del negocio",
    solution: "Arquitectura de solución",
    resultTitle: "Resultado y reseña del cliente",
    result: "Resultado del proyecto",
    review: "Reseña de cliente",
    caseStudy: "Case study detallado",
    work: "fase",
    doneTitle: "¿Qué se entregó?",
    demoTitle: "¿Qué muestra este ejemplo en vivo?",
    focusClient: "Enfoque del case study",
    focusDemo: "Enfoque de revisión en vivo",
    focusClientText: "Este registro resume el trabajo completado, el problema, la solución, el alcance técnico y la reseña del cliente.",
    focusDemoText: "El visitante puede revisar el flujo de ejemplo, la lógica del sistema, los módulos utilizables y cómo la estructura puede adaptarse a una empresa.",
    features: "Funciones principales del sistema",
    demoScope: "Alcance de revisión en vivo",
    openItems: "Incluido",
    limits: "Límites intencionales",
    accounts: "Cuentas demo",
    tech: "Tecnologías e infraestructura",
    database: "Base de datos",
    deployment: "Modelo de entrega",
    adaptClient: "¿Cómo se planifica un proyecto similar?",
    adaptDemo: "¿Cómo se adapta este ejemplo en vivo?",
    cards: [
      ["Necesidad", "La necesidad del negocio se aclara mediante pantallas, flujo de trabajo, roles y escenarios reales de uso."],
      ["Adaptación", "Textos, datos de ejemplo, formularios, reportes, colores y módulos del panel pueden ajustarse al modelo de negocio."],
      ["Entrega", "Tras aprobar el alcance, una estructura similar puede entregarse con dominio, hosting, flujo admin y soporte de traspaso."],
    ],
  },
  ar: {
    backPortfolio: "← العودة إلى البورتفوليو",
    backProjects: "← العودة إلى الأمثلة الحية",
    client: "عمل عميل مكتمل",
    demo: "مثال حي قابل للتكييف",
    live: "شاهد مباشرة",
    planned: "مخطط",
    request: "أريد مشابها",
    problem: "مشكلة العمل",
    solution: "بنية الحل",
    resultTitle: "النتيجة وتعليق العميل",
    result: "نتيجة المشروع",
    review: "تقييم العميل",
    caseStudy: "Case study مفصل",
    work: "مرحلة",
    doneTitle: "ما الذي تم تنفيذه في هذا العمل؟",
    demoTitle: "ماذا يوضح هذا المثال الحي؟",
    focusClient: "تركيز case study",
    focusDemo: "تركيز المراجعة الحية",
    focusClientText: "يلخص هذا السجل العمل المكتمل والمشكلة والحل والنطاق التقني وتعليق العميل.",
    focusDemoText: "يمكن للزائر مراجعة التدفق النموذجي ومنطق النظام والوحدات القابلة للاستخدام وكيف يمكن تكييف البنية مع العمل.",
    features: "الخصائص الأساسية للنظام",
    demoScope: "نطاق المراجعة الحية",
    openItems: "المتاح",
    limits: "حدود مقصودة",
    accounts: "حسابات demo",
    tech: "التقنيات والبنية",
    database: "قاعدة البيانات",
    deployment: "نموذج التسليم",
    adaptClient: "كيف يخطط مشروع مشابه؟",
    adaptDemo: "كيف يمكن تكييف هذا المثال الحي؟",
    cards: [
      ["الحاجة", "توضح حاجة العمل من خلال الشاشات وسير العمل والأدوار وسيناريوهات الاستخدام الواقعية."],
      ["التكييف", "يمكن إعادة تشكيل النصوص والبيانات النموذجية والنماذج والتقارير والألوان ووحدات اللوحة حسب نموذج العمل."],
      ["التسليم", "بعد اعتماد النطاق، يمكن تسليم بنية مشابهة مع الدومين والاستضافة وتدفق الإدارة ودعم التسليم."],
    ],
  },
  ru: {
    backPortfolio: "← Назад к Portfolio",
    backProjects: "← Назад ко всем live examples",
    client: "Завершенная клиентская работа",
    demo: "Адаптируемый live example",
    live: "Смотреть live",
    planned: "Планируется",
    request: "Хочу похожее",
    problem: "Бизнес-проблема",
    solution: "Архитектура решения",
    resultTitle: "Результат и customer feedback",
    result: "Результат проекта",
    review: "Отзыв клиента",
    caseStudy: "Подробный case study",
    work: "фаза",
    doneTitle: "Что было сделано?",
    demoTitle: "Что показывает этот live example?",
    focusClient: "Фокус case study",
    focusDemo: "Фокус live review",
    focusClientText: "Эта запись кратко показывает завершенную работу, проблему, решение, технический объем и customer feedback.",
    focusDemoText: "Посетитель может увидеть sample flow, system logic, usable modules и то, как структуру можно адаптировать под бизнес.",
    features: "Ключевые возможности системы",
    demoScope: "Объем live review",
    openItems: "Что включено",
    limits: "Сознательные ограничения",
    accounts: "Demo accounts",
    tech: "Технологии и инфраструктура",
    database: "База данных",
    deployment: "Модель delivery",
    adaptClient: "Как планируется похожая работа?",
    adaptDemo: "Как адаптируется этот live example?",
    cards: [
      ["Потребность", "Потребность бизнеса уточняется через экраны, workflow, роли и реальные сценарии использования."],
      ["Адаптация", "Тексты, sample data, формы, отчеты, цвета и panel modules можно перестроить под бизнес-модель."],
      ["Delivery", "После утверждения объема похожую структуру можно передать с domain, hosting, admin flow и handover support."],
    ],
  },
  pt: {
    backPortfolio: "← Voltar ao portfólio",
    backProjects: "← Voltar aos exemplos ao vivo",
    client: "Trabalho de cliente concluído",
    demo: "Exemplo ao vivo adaptável",
    live: "Ver ao vivo",
    planned: "Planejado",
    request: "Quero algo semelhante",
    problem: "Problema do negócio",
    solution: "Arquitetura da solução",
    resultTitle: "Resultado e feedback do cliente",
    result: "Resultado do projeto",
    review: "Avaliação do cliente",
    caseStudy: "Case study detalhado",
    work: "fase",
    doneTitle: "O que foi entregue?",
    demoTitle: "O que este exemplo ao vivo mostra?",
    focusClient: "Foco do case study",
    focusDemo: "Foco da revisão ao vivo",
    focusClientText: "Este registro resume o trabalho concluído, o problema, a solução, o escopo técnico e o feedback do cliente.",
    focusDemoText: "O visitante pode revisar o fluxo de exemplo, a lógica do sistema, os módulos utilizáveis e como a estrutura pode ser adaptada a uma empresa.",
    features: "Recursos principais do sistema",
    demoScope: "Escopo da revisão ao vivo",
    openItems: "Incluído",
    limits: "Limites intencionais",
    accounts: "Contas demo",
    tech: "Tecnologias e infraestrutura",
    database: "Banco de dados",
    deployment: "Modelo de entrega",
    adaptClient: "Como um projeto semelhante é planejado?",
    adaptDemo: "Como este exemplo ao vivo pode ser adaptado?",
    cards: [
      ["Necessidade", "A necessidade do negócio é esclarecida por telas, fluxo de trabalho, papéis e cenários reais de uso."],
      ["Adaptação", "Textos, dados de exemplo, formulários, relatórios, cores e módulos do painel podem ser ajustados ao modelo de negócio."],
      ["Entrega", "Após aprovação do escopo, uma estrutura semelhante pode ser entregue com domínio, hospedagem, fluxo administrativo e suporte de passagem."],
    ],
  },
  it: {
    backPortfolio: "← Torna al portfolio",
    backProjects: "← Torna agli esempi live",
    client: "Lavoro cliente completato",
    demo: "Esempio live adattabile",
    live: "Vedi live",
    planned: "Pianificato",
    request: "Ne voglio uno simile",
    problem: "Problema aziendale",
    solution: "Architettura della soluzione",
    resultTitle: "Risultato e feedback cliente",
    result: "Risultato del progetto",
    review: "Recensione cliente",
    caseStudy: "Case study dettagliato",
    work: "fase",
    doneTitle: "Cosa è stato consegnato?",
    demoTitle: "Cosa mostra questo esempio live?",
    focusClient: "Focus del case study",
    focusDemo: "Focus della revisione live",
    focusClientText: "Questa scheda riassume il lavoro completato, il problema, la soluzione, l'ambito tecnico e il feedback cliente.",
    focusDemoText: "Il visitatore può esaminare il flusso di esempio, la logica del sistema, i moduli utilizzabili e come la struttura può essere adattata a un'azienda.",
    features: "Funzionalità principali del sistema",
    demoScope: "Ambito della revisione live",
    openItems: "Incluso",
    limits: "Limiti intenzionali",
    accounts: "Account demo",
    tech: "Tecnologie e infrastruttura",
    database: "Database",
    deployment: "Modello di consegna",
    adaptClient: "Come si pianifica un progetto simile?",
    adaptDemo: "Come si adatta questo esempio live?",
    cards: [
      ["Bisogno", "Il bisogno aziendale viene chiarito tramite schermate, flusso di lavoro, ruoli e scenari d'uso reali."],
      ["Adattamento", "Testi, dati di esempio, form, report, colori e moduli del pannello possono essere adattati al modello aziendale."],
      ["Consegna", "Dopo l'approvazione dell'ambito, una struttura simile può essere consegnata con dominio, hosting, flusso admin e supporto di passaggio."],
    ],
  },
  nl: {
    backPortfolio: "← Terug naar portfolio",
    backProjects: "← Terug naar live voorbeelden",
    client: "Afgerond klantproject",
    demo: "Aanpasbaar live voorbeeld",
    live: "Live bekijken",
    planned: "Gepland",
    request: "Vergelijkbaar aanvragen",
    problem: "Bedrijfsprobleem",
    solution: "Oplossingsarchitectuur",
    resultTitle: "Resultaat en klantfeedback",
    result: "Projectresultaat",
    review: "Klantbeoordeling",
    caseStudy: "Gedetailleerde case study",
    work: "fase",
    doneTitle: "Wat is er opgeleverd?",
    demoTitle: "Wat laat dit live voorbeeld zien?",
    focusClient: "Case study focus",
    focusDemo: "Live voorbeeld focus",
    focusClientText: "Deze kaart vat het afgeronde werk, het probleem, de oplossing, de technische scope en de klantfeedback samen.",
    focusDemoText: "De bezoeker kan de voorbeeldflow, systeemlogica, bruikbare modules en aanpasbaarheid voor een bedrijf in één overzicht bekijken.",
    features: "Belangrijkste systeemfuncties",
    demoScope: "Scope van live voorbeeld",
    openItems: "Inbegrepen",
    limits: "Bewuste grenzen",
    accounts: "Demoaccounts",
    tech: "Technologie en infrastructuur",
    database: "Database",
    deployment: "Oplevermodel",
    adaptClient: "Hoe wordt een vergelijkbaar project gepland?",
    adaptDemo: "Hoe kan dit live voorbeeld worden aangepast?",
    cards: [
      ["Behoefte", "De bedrijfsbehoefte wordt verduidelijkt via schermen, workflow, rollen en echte gebruiksscenario's."],
      ["Aanpassing", "Teksten, voorbeelddata, formulieren, rapportages, kleuren en paneelmodules kunnen op het bedrijfsmodel worden afgestemd."],
      ["Oplevering", "Na scopegoedkeuring kan een vergelijkbare structuur worden opgeleverd met domein, hosting, adminflow en overdrachtsondersteuning."],
    ],
  },
  zh: {
    backPortfolio: "← 返回作品集",
    backProjects: "← 返回所有在线示例",
    client: "已完成客户项目",
    demo: "可定制在线示例",
    live: "在线查看",
    planned: "计划中",
    request: "申请类似项目",
    problem: "业务问题",
    solution: "解决方案架构",
    resultTitle: "结果与客户反馈",
    result: "项目结果",
    review: "客户评价",
    caseStudy: "详细案例研究",
    work: "阶段",
    doneTitle: "本项目交付了什么？",
    demoTitle: "这个在线示例展示什么？",
    focusClient: "案例研究重点",
    focusDemo: "在线查看重点",
    focusClientText: "本记录概述已完成工作的业务问题、解决方案、技术范围和客户反馈。",
    focusDemoText: "访客可以在一个页面中查看示例流程、系统逻辑、可用模块，以及该结构如何适配业务。",
    features: "系统核心功能",
    demoScope: "在线查看范围",
    openItems: "包含内容",
    limits: "有意保留的限制",
    accounts: "演示账号",
    tech: "技术与基础设施",
    database: "数据库",
    deployment: "交付方式",
    adaptClient: "类似项目如何规划？",
    adaptDemo: "这个在线示例如何定制？",
    cards: [
      ["需求", "通过页面、流程、角色和真实使用场景澄清业务需求。"],
      ["定制", "文案、示例数据、表单、报表、颜色和面板模块都可按业务模式调整。"],
      ["交付", "范围确认后，可结合域名、托管、管理流程和交接支持交付类似结构。"],
    ],
  },
};

const englishDemoInfo = {
  includes: ["Preview screens", "Sample records", "Core workflow", "Admin-style structure"],
  limitations: ["Payment, private credentials, and production data are not exposed", "Final modules are shaped after scope approval"],
};

const germanDemoInfo = {
  includes: ["Vorschau-Screens", "Beispieldatensätze", "Kernworkflow", "Admin-ähnliche Struktur"],
  limitations: ["Zahlungen, private Zugangsdaten und Produktionsdaten werden nicht offengelegt", "Finale Module werden nach Umfangsfreigabe geformt"],
};

const frenchDemoInfo = {
  includes: ["Écrans de prévisualisation", "Enregistrements exemples", "Workflow principal", "Structure de type admin"],
  limitations: ["Les paiements, identifiants privés et données de production ne sont pas exposés", "Les modules finaux sont définis après validation du périmètre"],
};

const spanishDemoInfo = {
  includes: ["Pantallas de vista previa", "Registros de ejemplo", "Flujo principal", "Estructura tipo admin"],
  limitations: ["Pagos, credenciales privadas y datos de producción no se exponen", "Los módulos finales se definen después de aprobar el alcance"],
};

const arabicDemoInfo = {
  includes: ["شاشات معاينة", "سجلات نموذجية", "تدفق العمل الأساسي", "بنية شبيهة بلوحة إدارة"],
  limitations: ["لا يتم عرض المدفوعات أو بيانات الدخول الخاصة أو بيانات الإنتاج", "تحدد الوحدات النهائية بعد اعتماد النطاق"],
};

const russianDemoInfo = {
  includes: ["Preview screens", "Sample records", "Основной workflow", "Admin-style structure"],
  limitations: ["Оплаты, приватные credentials и production data не раскрываются", "Финальные модули формируются после утверждения scope"],
};

const portugueseDemoInfo = {
  includes: ["Telas de prévia", "Registros de exemplo", "Fluxo principal", "Estrutura em estilo administrativo"],
  limitations: ["Pagamentos, credenciais privadas e dados de produção não são expostos", "Os módulos finais são definidos após aprovação do escopo"],
};

const italianDemoInfo = {
  includes: ["Schermate di anteprima", "Registri di esempio", "Flusso principale", "Struttura in stile amministrativo"],
  limitations: ["Pagamenti, credenziali private e dati di produzione non sono esposti", "I moduli finali vengono definiti dopo l'approvazione dell'ambito"],
};

const dutchDemoInfo = {
  includes: ["Previewschermen", "Voorbeeldrecords", "Kernworkflow", "Adminachtige structuur"],
  limitations: ["Betalingen, private inloggegevens en productiedata worden niet getoond", "Definitieve modules worden gevormd na scopegoedkeuring"],
};

const chineseDemoInfo = {
  includes: ["预览页面", "示例记录", "核心流程", "管理端风格结构"],
  limitations: ["不会展示付款、私人凭据或生产数据", "最终模块会在范围确认后确定"],
};

export default function ProjectDetailPageView({ slug }: { slug: string }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const project = getLocalizedProjectBySlug(slug, locale) as RichProject | undefined;
  if (!project) return null;

  const text = locale === "en" ? copy.en : locale === "de" ? copy.de : locale === "fr" ? copy.fr : locale === "es" ? copy.es : locale === "ar" ? copy.ar : locale === "ru" ? copy.ru : locale === "pt" ? copy.pt : locale === "it" ? copy.it : locale === "nl" ? copy.nl : locale === "zh" ? copy.zh : copy.tr;
  const originalMeta = getProjectMeta(project.slug);
  const meta = getLocalizedProjectMeta(project.slug, locale);
  const testimonial = getLocalizedTestimonial(meta.testimonialSlug, locale);
  const demoEnabled = project.isDemoEnabled !== false && Boolean(project.demoUrl);
  const isPlannedDemo = originalMeta.projectKind !== "client" && (project.status === "planned" || !demoEnabled);
  const demoIncludes = locale === "en" ? englishDemoInfo.includes : locale === "de" ? germanDemoInfo.includes : locale === "fr" ? frenchDemoInfo.includes : locale === "es" ? spanishDemoInfo.includes : locale === "ar" ? arabicDemoInfo.includes : locale === "ru" ? russianDemoInfo.includes : locale === "pt" ? portugueseDemoInfo.includes : locale === "it" ? italianDemoInfo.includes : locale === "nl" ? dutchDemoInfo.includes : locale === "zh" ? chineseDemoInfo.includes : project.demoIncludesTr ?? [];
  const demoLimitations = locale === "en" ? englishDemoInfo.limitations : locale === "de" ? germanDemoInfo.limitations : locale === "fr" ? frenchDemoInfo.limitations : locale === "es" ? spanishDemoInfo.limitations : locale === "ar" ? arabicDemoInfo.limitations : locale === "ru" ? russianDemoInfo.limitations : locale === "pt" ? portugueseDemoInfo.limitations : locale === "it" ? italianDemoInfo.limitations : locale === "nl" ? dutchDemoInfo.limitations : locale === "zh" ? chineseDemoInfo.limitations : project.demoLimitationsTr ?? [];
  const hasDemoInfo = originalMeta.projectKind !== "client" && (demoIncludes.length > 0 || demoLimitations.length > 0 || Boolean(project.demoAccounts?.length));

  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <LocalizedLink href={originalMeta.projectKind === "client" ? "/portfolio" : "/projects"} className="text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block">
        {originalMeta.projectKind === "client" ? text.backPortfolio : text.backProjects}
      </LocalizedLink>

      <RevealItem className="mb-8 relative overflow-hidden p-0 md:p-0">
        <div className="flow-root">
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-6 w-full lg:float-right lg:mb-4 lg:ml-10 lg:w-[min(52vw,620px)]">
              <ProjectImageGallery screenshots={project.screenshots} projectSlug={project.slug} />
            </div>
          )}

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">{project.category}</span>
            <span className="border border-white/10 bg-[#071225]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">
              {originalMeta.projectKind === "client" ? text.client : text.demo}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">{project.title}</h1>
          <p className="text-lg md:text-xl text-gray-400 leading-8">{locale === "en" || locale === "de" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh" ? project.shortDesc : project.descriptionTr ?? project.shortDesc}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {demoEnabled ? (
              <LocalizedLink href={project.demoUrl!} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors">
                {text.live}
              </LocalizedLink>
            ) : (
              <button type="button" disabled className="bg-white text-black px-6 py-3 font-bold opacity-70 cursor-not-allowed">
                {isPlannedDemo ? text.planned : text.live}
              </button>
            )}
            <LocalizedLink href={`/contact?project=${project.slug}`} className="border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">
              {text.request}
            </LocalizedLink>
          </div>
        </div>
      </RevealItem>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium mb-4">{text.problem}</h2>
          <p className="text-gray-400 leading-8">{project.problem}</p>
        </RevealItem>
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium mb-4">{text.solution}</h2>
          <p className="text-gray-400 leading-8">{project.solution}</p>
        </RevealItem>
      </div>

      {(meta.result || testimonial) && (
        <RevealItem className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.resultTitle}</h2>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {meta.result && (
              <div className="border border-white/10 bg-[#071225]/55 p-5">
                <h3 className="font-bold text-white">{text.result}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{meta.result}</p>
              </div>
            )}
            {testimonial && (
              <div className="border border-white/10 bg-[#08162c]/88 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-bold text-white">{testimonial.displayName}</h3>
                  <span className="text-sm font-bold text-white">{testimonial.rating}.0 / 5</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-400">{testimonial.text}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">{text.review}</p>
              </div>
            )}
          </div>
        </RevealItem>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <RevealItem className="mb-8 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={`${metric.value}-${metric.label}`} className="border border-white/10 bg-[#071225]/70 p-5">
              <p className="text-3xl md:text-4xl font-light text-white">{metric.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">{metric.label}</p>
            </div>
          ))}
        </RevealItem>
      )}

      {project.caseStudies && project.caseStudies.length > 0 && (
        <RevealItem className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.caseStudy}</h2>
          <div className="space-y-6">
            {project.caseStudies.map((caseStudy, index) => (
              <article key={caseStudy.title} className="border border-white/10 bg-[#071225]/70 p-5 md:p-7">
                <div className="mb-4 inline-flex border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                  {index + 1}. {text.work}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-white">{caseStudy.title}</h3>
                <p className="mt-4 max-w-4xl text-sm md:text-base leading-8 text-gray-400">{caseStudy.summary}</p>
                <div className="mt-7 grid gap-5 lg:grid-cols-2">
                  {caseStudy.sections.map((section) => (
                    <section key={section.title} className="border border-white/10 bg-[#08162c]/70 p-5">
                      <h4 className="text-lg font-bold text-white">{section.title}</h4>
                      <div className="mt-4 space-y-4">
                        {section.body.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-gray-400">{paragraph}</p>)}
                      </div>
                      {section.bullets && section.bullets.length > 0 && (
                        <div className="mt-5 space-y-3">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-gray-500" size={16} />
                              <span className="text-sm leading-6 text-gray-300">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </RevealItem>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{originalMeta.projectKind === "client" ? text.doneTitle : text.demoTitle}</h2>
          <div className="space-y-5 text-gray-400 leading-8">
            <p>{project.shortDesc}</p>
            <p>{project.solution}</p>
          </div>
          <div className="mt-6 border-l-4 border-white pl-5 py-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{originalMeta.projectKind === "client" ? text.focusClient : text.focusDemo}</p>
            <p className="mt-3 text-gray-300 leading-7">{originalMeta.projectKind === "client" ? text.focusClientText : text.focusDemoText}</p>
          </div>
        </RevealItem>

        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.features}</h2>
          <div className="space-y-3">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 border border-white/10 bg-[#071225]/55 p-3">
                <CheckCircle2 className="text-gray-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-300 text-sm leading-6">{feature}</span>
              </div>
            ))}
          </div>
        </RevealItem>
      </div>

      {hasDemoInfo && (
        <RevealItem className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.demoScope}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{text.openItems}</h3>
              <ul className="space-y-3">
                {demoIncludes.map((item) => <li key={item} className="text-sm text-gray-400 border-l-2 border-white/20 pl-3 leading-6">{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{text.limits}</h3>
              <ul className="space-y-3">
                {demoLimitations.map((item) => <li key={item} className="text-sm text-gray-400 border-l-2 border-white/20 pl-3 leading-6">{item}</li>)}
              </ul>
            </div>
            {project.demoAccounts && project.demoAccounts.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{text.accounts}</h3>
                <div className="space-y-3">
                  {project.demoAccounts.map((account) => (
                    <div key={`${account.role}-${account.email}`} className="border border-white/10 bg-[#071225]/55 p-3 text-sm">
                      <p className="font-bold text-white">{account.role}</p>
                      <p className="mt-1 text-gray-400">{account.email}</p>
                      <p className="text-gray-500">{account.password}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </RevealItem>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] mb-8">
        <RevealItem className="relative overflow-hidden p-0 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <Code2 className="text-gray-600 hidden md:block" size={48} />
          <div>
            <h2 className="text-2xl font-medium mb-5 text-white">{text.tech}</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => <span key={tech} className="tech-chip px-3 py-2 bg-[#071225]/65 border border-white/10 text-sm text-gray-400 rounded-sm">{tech}</span>)}
            </div>
          </div>
        </RevealItem>

        <RevealItem className="grid gap-4">
          <div className="border border-white/10 bg-[#08162c]/88 p-6">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">{text.database}</h3>
            <p className="text-white text-sm leading-6">{project.database}</p>
          </div>
          <div className="border border-white/10 bg-[#08162c]/88 p-6">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">{text.deployment}</h3>
            <p className="text-white text-sm leading-6">{project.deployment}</p>
          </div>
        </RevealItem>
      </div>

      <RevealItem className="border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">{originalMeta.projectKind === "client" ? text.adaptClient : text.adaptDemo}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.cards.map(([title, body]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-7">{body}</p>
            </div>
          ))}
        </div>
      </RevealItem>
    </PageReveal>
  );
}
