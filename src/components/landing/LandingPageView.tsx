"use client";

import { ArrowRight, CheckCircle2, ClipboardCheck, Layers, Target, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { blogPosts } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import type { LandingPage } from "@/data/landing-pages";
import { getLocalizedLandingFaqs, getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { getLocaleFromPath } from "@/lib/i18n";

const copy = {
  tr: {
    defaultEyebrow: "Satış Odaklı Hizmet Sayfası",
    talk: "Bu Projeyi Konuşalım",
    mainService: "Ana Hizmeti İncele",
    summary: "Hızlı karar özeti",
    moduleIdea: "modül fikri",
    priceFactor: "fiyat faktörü",
    faq: "SSS",
    problemKicker: "Problem",
    problemTitle: "Hangi problemi çözer?",
    scopeKicker: "Kapsam",
    priceTitle: "Fiyatı etkileyenler",
    fitKicker: "Uygunluk",
    fitTitle: "Kimler için doğru?",
    outcomeKicker: "Sonuç",
    outcomeTitle: "İşletmeye ne kazandırır?",
    modulesKicker: "Modüller",
    modulesTitle: "Projeye dahil olabilecek modüller",
    scenariosTitle: "Örnek kullanım senaryoları",
    clarifyTitle: "Kapsam nasıl netleşir?",
    clarifyDesc: "Önce mevcut durumunuz, istediğiniz ekranlar, veri yapısı, teslim beklentisi ve bütçe aralığınız konuşulur. Sonrasında kapsam, süre ve fiyat netleşir. Ek modül, entegrasyon veya özel istekler ayrıca fiyatlandırılır.",
    processTitle: "Süreç nasıl ilerler?",
    process: ["İhtiyaç ve mevcut durum dinlenir", "Ekran, modül ve veri kapsamı netleşir", "İlk sürüm veya faz planı çıkarılır", "Teklif, süre ve bakım beklentisi paylaşılır"],
    faqTitle: "Sık sorulan sorular",
    resourcesTitle: "İlgili kaynaklar",
    service: "Hizmet",
    blog: "Blog",
    portfolio: "Portföy",
    liveExample: "Canlı örnek",
    nextStep: "Sonraki adım",
    finalTitle: "Bu yapı işletmenize uyuyor mu birlikte netleştirelim.",
    finalDesc: "İhtiyacınız tamamen net değilse de mevcut durumu, yaşadığınız problemi ve aklınızdaki örnekleri yazmanız yeterli.",
    quote: "Teklif Al",
  },
  en: {
    defaultEyebrow: "Conversion-Focused Service Page",
    talk: "Let’s Discuss This Project",
    mainService: "Review Main Service",
    summary: "Quick decision summary",
    moduleIdea: "module ideas",
    priceFactor: "price factors",
    faq: "FAQs",
    problemKicker: "Problem",
    problemTitle: "Which problem does it solve?",
    scopeKicker: "Scope",
    priceTitle: "What affects pricing",
    fitKicker: "Fit",
    fitTitle: "Who is it right for?",
    outcomeKicker: "Outcome",
    outcomeTitle: "What does it give the business?",
    modulesKicker: "Modules",
    modulesTitle: "Modules that can be included",
    scenariosTitle: "Example use scenarios",
    clarifyTitle: "How is the scope clarified?",
    clarifyDesc: "First, your current situation, required screens, data structure, delivery expectations, and budget range are discussed. Then scope, timeline, and price become clear. Extra modules, integrations, or special requests are priced separately.",
    processTitle: "How does the process move forward?",
    process: ["Need and current situation are understood", "Screens, modules, and data scope are clarified", "First version or phase plan is prepared", "Quote, timeline, and support expectations are shared"],
    faqTitle: "Frequently asked questions",
    resourcesTitle: "Related resources",
    service: "Service",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Live example",
    nextStep: "Next step",
    finalTitle: "Let’s clarify whether this structure fits your business.",
    finalDesc: "Even if your need is not fully clear, describe the current situation, the problem you face, and the examples you have in mind.",
    quote: "Get a Quote",
  },
  de: {
    defaultEyebrow: "Conversion-orientierte Leistungsseite",
    talk: "Dieses Projekt besprechen",
    mainService: "Hauptleistung ansehen",
    summary: "Schnelle Entscheidungsübersicht",
    moduleIdea: "Modulideen",
    priceFactor: "Preisfaktoren",
    faq: "FAQs",
    problemKicker: "Problem",
    problemTitle: "Welches Problem löst es?",
    scopeKicker: "Umfang",
    priceTitle: "Was beeinflusst den Preis?",
    fitKicker: "Eignung",
    fitTitle: "Für wen ist es passend?",
    outcomeKicker: "Ergebnis",
    outcomeTitle: "Was bringt es dem Unternehmen?",
    modulesKicker: "Module",
    modulesTitle: "Module, die enthalten sein können",
    scenariosTitle: "Beispielhafte Nutzungsszenarien",
    clarifyTitle: "Wie wird der Umfang geklärt?",
    clarifyDesc: "Zuerst werden aktueller Stand, gewünschte Screens, Datenstruktur, Liefererwartung und Budgetrahmen besprochen. Danach werden Umfang, Zeitplan und Preis klar. Zusatzmodule, Integrationen oder Sonderwünsche werden separat bepreist.",
    processTitle: "Wie läuft der Prozess?",
    process: ["Bedarf und aktueller Stand werden verstanden", "Screens, Module und Datenumfang werden geklärt", "Erste Version oder Phasenplan wird vorbereitet", "Angebot, Zeitplan und Supporterwartung werden geteilt"],
    faqTitle: "Häufig gestellte Fragen",
    resourcesTitle: "Verwandte Ressourcen",
    service: "Leistung",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Live-Beispiel",
    nextStep: "Nächster Schritt",
    finalTitle: "Lassen Sie uns klären, ob diese Struktur zu Ihrem Unternehmen passt.",
    finalDesc: "Auch wenn Ihr Bedarf noch nicht vollständig klar ist, reichen aktueller Stand, Problem und Beispiele, die Sie im Kopf haben.",
    quote: "Angebot anfragen",
  },
  fr: {
    defaultEyebrow: "Page de service orientée conversion",
    talk: "Discuter ce projet",
    mainService: "Voir le service principal",
    summary: "Résumé rapide",
    moduleIdea: "idées de modules",
    priceFactor: "facteurs de prix",
    faq: "FAQ",
    problemKicker: "Problème",
    problemTitle: "Quel problème cela résout-il ?",
    scopeKicker: "Périmètre",
    priceTitle: "Ce qui influence le prix",
    fitKicker: "Adéquation",
    fitTitle: "Pour qui est-ce adapté ?",
    outcomeKicker: "Résultat",
    outcomeTitle: "Qu'apporte cela à l'entreprise ?",
    modulesKicker: "Modules",
    modulesTitle: "Modules pouvant être inclus",
    scenariosTitle: "Scénarios d'utilisation",
    clarifyTitle: "Comment le périmètre est-il clarifié ?",
    clarifyDesc: "D'abord, la situation actuelle, les écrans nécessaires, la structure de données, les attentes de livraison et la fourchette budgétaire sont discutés. Ensuite, le périmètre, le délai et le prix deviennent clairs.",
    processTitle: "Comment le processus avance-t-il ?",
    process: ["Le besoin et la situation actuelle sont compris", "Les écrans, modules et données sont clarifiés", "Une première version ou un plan de phases est préparé", "Le devis, le délai et le support sont partagés"],
    faqTitle: "Questions fréquentes",
    resourcesTitle: "Ressources liées",
    service: "Service",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Exemple en direct",
    nextStep: "Étape suivante",
    finalTitle: "Clarifions si cette structure convient à votre entreprise.",
    finalDesc: "Même si votre besoin n'est pas encore totalement clair, décrivez la situation actuelle, le problème et les exemples que vous avez en tête.",
    quote: "Demander un devis",
  },
  es: {
    defaultEyebrow: "Página de servicio orientada a conversión",
    talk: "Hablemos de este proyecto",
    mainService: "Ver servicio principal",
    summary: "Resumen rápido para decidir",
    moduleIdea: "ideas de módulos",
    priceFactor: "factores de precio",
    faq: "FAQ",
    problemKicker: "Problema",
    problemTitle: "¿Qué problema resuelve?",
    scopeKicker: "Alcance",
    priceTitle: "Qué influye en el precio",
    fitKicker: "Adecuación",
    fitTitle: "¿Para quién es adecuado?",
    outcomeKicker: "Resultado",
    outcomeTitle: "¿Qué aporta al negocio?",
    modulesKicker: "Módulos",
    modulesTitle: "Módulos que pueden incluirse",
    scenariosTitle: "Escenarios de uso",
    clarifyTitle: "¿Cómo se aclara el alcance?",
    clarifyDesc: "Primero se habla de la situación actual, las pantallas necesarias, la estructura de datos, las expectativas de entrega y el rango de presupuesto. Después se aclaran alcance, plazo y precio. Módulos extra, integraciones o solicitudes especiales se valoran por separado.",
    processTitle: "¿Cómo avanza el proceso?",
    process: ["Se entiende la necesidad y situación actual", "Se aclaran pantallas, módulos y datos", "Se prepara primera versión o plan por fases", "Se comparte propuesta, plazo y expectativa de soporte"],
    faqTitle: "Preguntas frecuentes",
    resourcesTitle: "Recursos relacionados",
    service: "Servicio",
    blog: "Blog",
    portfolio: "Portafolio",
    liveExample: "Ejemplo en vivo",
    nextStep: "Siguiente paso",
    finalTitle: "Aclaremos si esta estructura encaja con tu empresa.",
    finalDesc: "Aunque tu necesidad no esté totalmente clara, basta con describir la situación actual, el problema y los ejemplos que tienes en mente.",
    quote: "Solicitar propuesta",
  },
  ar: {
    defaultEyebrow: "صفحة خدمة موجهة للتحويل",
    talk: "لنناقش هذا المشروع",
    mainService: "راجع الخدمة الرئيسية",
    summary: "ملخص سريع للقرار",
    moduleIdea: "أفكار وحدات",
    priceFactor: "عوامل سعر",
    faq: "أسئلة",
    problemKicker: "المشكلة",
    problemTitle: "ما المشكلة التي يحلها؟",
    scopeKicker: "النطاق",
    priceTitle: "ما الذي يؤثر على السعر",
    fitKicker: "الملاءمة",
    fitTitle: "لمن يناسب؟",
    outcomeKicker: "النتيجة",
    outcomeTitle: "ماذا يضيف للعمل؟",
    modulesKicker: "الوحدات",
    modulesTitle: "وحدات يمكن أن تدخل في المشروع",
    scenariosTitle: "سيناريوهات استخدام",
    clarifyTitle: "كيف يتضح النطاق؟",
    clarifyDesc: "أولاً تتم مناقشة الوضع الحالي، الشاشات المطلوبة، بنية البيانات، توقعات التسليم ونطاق الميزانية. بعد ذلك يتضح النطاق والمدة والسعر. يتم تسعير الوحدات الإضافية أو التكاملات أو الطلبات الخاصة بشكل منفصل.",
    processTitle: "كيف تسير العملية؟",
    process: ["يتم فهم الحاجة والوضع الحالي", "تتضح الشاشات والوحدات ونطاق البيانات", "تجهز النسخة الأولى أو خطة المراحل", "يتم مشاركة العرض والمدة وتوقعات الدعم"],
    faqTitle: "أسئلة شائعة",
    resourcesTitle: "مصادر مرتبطة",
    service: "خدمة",
    blog: "Blog",
    portfolio: "بورتفوليو",
    liveExample: "مثال حي",
    nextStep: "الخطوة التالية",
    finalTitle: "لنوضح معاً هل هذه البنية تناسب عملك.",
    finalDesc: "حتى لو لم تكن الحاجة واضحة بالكامل، يكفي شرح الوضع الحالي والمشكلة والأمثلة الموجودة في ذهنك.",
    quote: "اطلب عرض سعر",
  },
  ru: {
    defaultEyebrow: "Страница услуги, ориентированная на конверсию",
    talk: "Обсудить этот проект",
    mainService: "Посмотреть основную услугу",
    summary: "Краткое резюме для решения",
    moduleIdea: "идеи модулей",
    priceFactor: "факторы цены",
    faq: "FAQ",
    problemKicker: "Проблема",
    problemTitle: "Какую проблему решает?",
    scopeKicker: "Объем",
    priceTitle: "Что влияет на цену",
    fitKicker: "Соответствие",
    fitTitle: "Для кого подходит?",
    outcomeKicker: "Результат",
    outcomeTitle: "Что дает бизнесу?",
    modulesKicker: "Модули",
    modulesTitle: "Модули, которые могут входить в проект",
    scenariosTitle: "Сценарии использования",
    clarifyTitle: "Как уточняется объем?",
    clarifyDesc: "Сначала обсуждаются текущая ситуация, нужные экраны, структура данных, ожидания по сдаче и бюджетный диапазон. Затем становятся ясны объем, сроки и цена. Дополнительные модули, интеграции или особые запросы оцениваются отдельно.",
    processTitle: "Как идет процесс?",
    process: ["Понимается потребность и текущая ситуация", "Уточняются экраны, модули и объем данных", "Готовится первая версия или phase plan", "Делятся предложение, сроки и ожидания по поддержке"],
    faqTitle: "Частые вопросы",
    resourcesTitle: "Связанные ресурсы",
    service: "Услуга",
    blog: "Блог",
    portfolio: "Портфолио",
    liveExample: "Живой пример",
    nextStep: "Следующий шаг",
    finalTitle: "Давайте уточним, подходит ли эта структура вашему бизнесу.",
    finalDesc: "Даже если потребность пока не полностью ясна, достаточно описать текущую ситуацию, проблему и примеры, которые вы держите в голове.",
    quote: "Получить предложение",
  },
  pt: {
    defaultEyebrow: "Pagina de servico focada em conversao",
    talk: "Vamos discutir este projeto",
    mainService: "Ver servico principal",
    summary: "Resumo rapido para decisao",
    moduleIdea: "ideias de modulo",
    priceFactor: "fatores de preco",
    faq: "FAQ",
    problemKicker: "Problema",
    problemTitle: "Qual problema resolve?",
    scopeKicker: "Escopo",
    priceTitle: "O que influencia o preco",
    fitKicker: "Adequacao",
    fitTitle: "Para quem e indicado?",
    outcomeKicker: "Resultado",
    outcomeTitle: "O que entrega ao negocio?",
    modulesKicker: "Modulos",
    modulesTitle: "Modulos que podem entrar no projeto",
    scenariosTitle: "Cenarios de uso",
    clarifyTitle: "Como o escopo e esclarecido?",
    clarifyDesc: "Primeiro sao discutidos a situacao atual, telas necessarias, estrutura de dados, expectativas de entrega e faixa de orcamento. Depois escopo, prazo e preco ficam claros. Modulos extras, integracoes ou solicitacoes especiais sao precificados separadamente.",
    processTitle: "Como o processo avanca?",
    process: ["A necessidade e a situacao atual sao entendidas", "Telas, modulos e escopo de dados sao esclarecidos", "A primeira versao ou plano de fases e preparado", "Proposta, prazo e expectativa de suporte sao compartilhados"],
    faqTitle: "Perguntas frequentes",
    resourcesTitle: "Recursos relacionados",
    service: "Servico",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Exemplo ao vivo",
    nextStep: "Proximo passo",
    finalTitle: "Vamos esclarecer se esta estrutura combina com sua empresa.",
    finalDesc: "Mesmo que sua necessidade ainda nao esteja totalmente clara, descreva a situacao atual, o problema e os exemplos que tem em mente.",
    quote: "Solicitar proposta",
  },
  it: {
    defaultEyebrow: "Pagina servizio orientata alla conversione",
    talk: "Parliamo di questo progetto",
    mainService: "Vedi il servizio principale",
    summary: "Riepilogo rapido per decidere",
    moduleIdea: "idee modulo",
    priceFactor: "fattori di prezzo",
    faq: "FAQ",
    problemKicker: "Problema",
    problemTitle: "Quale problema risolve?",
    scopeKicker: "Ambito",
    priceTitle: "Cosa influenza il prezzo",
    fitKicker: "Adeguatezza",
    fitTitle: "Per chi è adatto?",
    outcomeKicker: "Risultato",
    outcomeTitle: "Cosa porta all'azienda?",
    modulesKicker: "Moduli",
    modulesTitle: "Moduli che possono rientrare nel progetto",
    scenariosTitle: "Scenari di utilizzo",
    clarifyTitle: "Come si chiarisce l'ambito?",
    clarifyDesc: "Prima si discutono situazione attuale, schermate necessarie, struttura dati, aspettative di consegna e fascia di budget. Poi ambito, tempi e prezzo diventano chiari. Moduli extra, integrazioni o richieste speciali vengono valutati separatamente.",
    processTitle: "Come avanza il processo?",
    process: ["Si comprende il bisogno e la situazione attuale", "Si chiariscono schermate, moduli e dati", "Si prepara la prima versione o il piano per fasi", "Si condividono preventivo, tempi e aspettative di supporto"],
    faqTitle: "Domande frequenti",
    resourcesTitle: "Risorse correlate",
    service: "Servizio",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Esempio live",
    nextStep: "Prossimo passo",
    finalTitle: "Chiariamo se questa struttura è adatta alla tua azienda.",
    finalDesc: "Anche se il bisogno non è ancora completamente chiaro, basta descrivere la situazione attuale, il problema e gli esempi che hai in mente.",
    quote: "Richiedi preventivo",
  },
  nl: {
    defaultEyebrow: "Conversiegerichte servicepagina",
    talk: "Bespreek dit project",
    mainService: "Bekijk hoofdservice",
    summary: "Snelle beslissamenvatting",
    moduleIdea: "module-ideeen",
    priceFactor: "prijsfactoren",
    faq: "FAQ",
    problemKicker: "Probleem",
    problemTitle: "Welk probleem lost dit op?",
    scopeKicker: "Scope",
    priceTitle: "Wat beinvloedt de prijs",
    fitKicker: "Geschiktheid",
    fitTitle: "Voor wie is dit geschikt?",
    outcomeKicker: "Resultaat",
    outcomeTitle: "Wat levert het het bedrijf op?",
    modulesKicker: "Modules",
    modulesTitle: "Modules die in het project kunnen zitten",
    scenariosTitle: "Voorbeelden van gebruik",
    clarifyTitle: "Hoe wordt de scope duidelijk?",
    clarifyDesc: "Eerst worden de huidige situatie, benodigde schermen, datastructuur, opleververwachtingen en budgetrange besproken. Daarna worden scope, planning en prijs duidelijk. Extra modules, integraties of speciale wensen worden apart geprijsd.",
    processTitle: "Hoe verloopt het proces?",
    process: ["Behoefte en huidige situatie worden begrepen", "Schermen, modules en datascope worden verduidelijkt", "Eerste versie of fasenplan wordt voorbereid", "Offerte, planning en supportverwachting worden gedeeld"],
    faqTitle: "Veelgestelde vragen",
    resourcesTitle: "Gerelateerde bronnen",
    service: "Service",
    blog: "Blog",
    portfolio: "Portfolio",
    liveExample: "Live voorbeeld",
    nextStep: "Volgende stap",
    finalTitle: "Laten we verduidelijken of deze structuur bij uw bedrijf past.",
    finalDesc: "Ook als de behoefte nog niet volledig duidelijk is, is het genoeg om de huidige situatie, het probleem en voorbeelden die u in gedachten heeft te beschrijven.",
    quote: "Vraag offerte aan",
  },
  zh: {
    defaultEyebrow: "转化导向服务页",
    talk: "讨论这个项目",
    mainService: "查看主要服务",
    summary: "快速决策摘要",
    moduleIdea: "模块想法",
    priceFactor: "价格因素",
    faq: "常见问题",
    problemKicker: "问题",
    problemTitle: "解决什么问题？",
    scopeKicker: "范围",
    priceTitle: "影响价格的因素",
    fitKicker: "适用性",
    fitTitle: "适合谁？",
    outcomeKicker: "结果",
    outcomeTitle: "给企业带来什么？",
    modulesKicker: "模块",
    modulesTitle: "项目可包含的模块",
    scenariosTitle: "使用场景示例",
    clarifyTitle: "范围如何明确？",
    clarifyDesc: "首先讨论当前情况、需要的屏幕、数据结构、交付预期和预算范围。之后范围、时间和价格会更清楚。额外模块、集成或特殊需求会单独评估。",
    processTitle: "流程如何推进？",
    process: ["理解需求和当前情况", "明确屏幕、模块和数据范围", "准备第一版或阶段计划", "共享报价、时间和支持预期"],
    faqTitle: "常见问题",
    resourcesTitle: "相关资源",
    service: "服务",
    blog: "博客",
    portfolio: "作品集",
    liveExample: "在线示例",
    nextStep: "下一步",
    finalTitle: "一起明确这个结构是否适合您的企业。",
    finalDesc: "即使需求还不完全清楚，也可以先描述当前情况、遇到的问题和参考示例。",
    quote: "获取报价",
  },
};

export default function LandingPageView({ page }: { page: LandingPage }) {
  const locale = getLocaleFromPath(usePathname() ?? "/");
  const isEnglish = locale === "en";
  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";
  const text = isEnglish ? copy.en : isGerman ? copy.de : isFrench ? copy.fr : isSpanish ? copy.es : isArabic ? copy.ar : isRussian ? copy.ru : isPortuguese ? copy.pt : isItalian ? copy.it : isDutch ? copy.nl : isChinese ? copy.zh : copy.tr;
  const localizedPage = getLocalizedLandingPage(page, locale);
  const localizedServices = getLocalizedServices(servicesData, locale);
  const service = localizedServices.find((item) => item.slug === localizedPage.serviceSlug)
    ?? localizedServices.find((item) => item.categorySlug === localizedPage.serviceSlug);
  const faqs = getLocalizedLandingFaqs(page, locale);
  const relatedBlogs = isEnglish || isGerman || isSpanish || isArabic || isRussian || isPortuguese || isItalian || isDutch || isChinese ? [] : localizedPage.relatedBlogSlugs
    ?.map((blogSlug) => blogPosts.find((post) => post.slug === blogSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post)) ?? [];
  const relatedProjects = isEnglish || isGerman || isSpanish || isArabic || isRussian || isPortuguese || isItalian || isDutch || isChinese ? [] : localizedPage.relatedProjectSlugs
    ?.map((projectSlug) => projectsData.find((project) => project.slug === projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project)) ?? [];
  const heroPoints = localizedPage.heroPoints?.length ? localizedPage.heroPoints : [
    isEnglish ? "Scope is clarified during the discussion" : isGerman ? "Der Umfang wird im Gespräch geklärt" : isFrench ? "Le périmètre est clarifié pendant l'échange" : isSpanish ? "El alcance se aclara durante la conversación" : isArabic ? "يتم توضيح النطاق أثناء النقاش" : isRussian ? "Объем уточняется во время обсуждения" : isPortuguese ? "O escopo e esclarecido durante a conversa" : isItalian ? "L'ambito viene chiarito durante il confronto" : isDutch ? "De scope wordt tijdens het gesprek verduidelijkt" : isChinese ? "范围会在沟通中明确" : "Kapsam görüşmede netleştirilir",
    isEnglish ? "First version and growth phases are separated" : isGerman ? "Erste Version und Wachstumsphasen werden getrennt" : isFrench ? "La première version et les phases de croissance sont séparées" : isSpanish ? "Primera versión y fases de crecimiento se separan" : isArabic ? "يتم فصل النسخة الأولى عن مراحل النمو" : isRussian ? "Первая версия и фазы роста разделяются" : isPortuguese ? "A primeira versao e as fases de crescimento sao separadas" : isItalian ? "La prima versione e le fasi di crescita vengono separate" : isDutch ? "Eerste versie en groeifasen worden gescheiden" : isChinese ? "第一版和增长阶段分开规划" : "İlk sürüm ve büyüme fazları ayrılır",
    isEnglish ? "Module and process boundaries are discussed before the quote" : isGerman ? "Modul- und Prozessgrenzen werden vor dem Angebot besprochen" : isFrench ? "Les limites des modules et processus sont discutées avant le devis" : isSpanish ? "Límites de módulos y proceso se hablan antes de la propuesta" : isArabic ? "تتم مناقشة حدود الوحدات والعملية قبل العرض" : isRussian ? "Границы модулей и процесса обсуждаются до предложения" : isPortuguese ? "Limites de modulos e processo sao discutidos antes da proposta" : isItalian ? "Confini di moduli e processo vengono discussi prima del preventivo" : isDutch ? "Module- en procesgrenzen worden voor de offerte besproken" : isChinese ? "报价前会讨论模块和流程边界" : "Teklif öncesi modül ve süreç sınırları konuşulur",
  ];
  const audience = localizedPage.audience?.length ? localizedPage.audience : [];
  const outcomes = localizedPage.outcomes?.length ? localizedPage.outcomes : [];
  const scenarios = localizedPage.scenarios?.length ? localizedPage.scenarios : [];

  return (
    <>
      <RevealItem className="mb-12 grid gap-8 lg:grid-cols-[1.08fr_0.72fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{localizedPage.eyebrow ?? text.defaultEyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl md:text-6xl font-medium tracking-tight leading-tight">{localizedPage.title}</h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{localizedPage.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LocalizedLink href={`/contact?service=${localizedPage.serviceSlug}&source=${localizedPage.slug}`} className="shimmer-button inline-flex items-center gap-2 bg-white px-6 py-3 font-bold text-black">
              {text.talk} <ArrowRight size={18} />
            </LocalizedLink>
            {service && <LocalizedLink href={`/services/${service.slug}`} className="border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10">{text.mainService}</LocalizedLink>}
          </div>
        </div>

        <div className="border border-white/10 bg-[#071225]/70 p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{text.summary}</p>
          <div className="mt-5 grid gap-3">
            {heroPoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-6 text-gray-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
            {[[String(localizedPage.modules.length), text.moduleIdea], [String(localizedPage.priceFactors.length), text.priceFactor], [String(faqs.length), text.faq]].map(([value, label]) => (
              <div key={label} className="bg-white/5 p-3">
                <p className="text-lg font-bold text-white">{value}</p>
                <p className="mt-1 text-[11px] leading-4 text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealItem>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <RevealItem className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500"><Target size={18} /><p className="text-xs font-bold uppercase tracking-[0.18em]">{text.problemKicker}</p></div>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium">{text.problemTitle}</h2>
          <p className="mt-5 text-gray-400 leading-8">{localizedPage.problem}</p>
        </RevealItem>
        <RevealItem className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500"><TrendingUp size={18} /><p className="text-xs font-bold uppercase tracking-[0.18em]">{text.scopeKicker}</p></div>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium">{text.priceTitle}</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">{localizedPage.priceFactors.map((factor) => <div key={factor} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-semibold leading-5 text-gray-300 md:text-sm md:leading-6">{factor}</div>)}</div>
        </RevealItem>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RevealItem className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500"><ClipboardCheck size={18} /><p className="text-xs font-bold uppercase tracking-[0.18em]">{text.fitKicker}</p></div>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium">{text.fitTitle}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">{audience.map((item) => <div key={item} className="flex gap-2 border border-white/10 bg-[#071225]/55 p-3 text-xs leading-5 text-gray-300 md:gap-3 md:p-4 md:text-sm md:leading-6"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" /><span>{item}</span></div>)}</div>
        </RevealItem>
        <RevealItem className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500"><TrendingUp size={18} /><p className="text-xs font-bold uppercase tracking-[0.18em]">{text.outcomeKicker}</p></div>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium">{text.outcomeTitle}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">{outcomes.map((item) => <div key={item} className="border border-white/10 bg-white/[0.04] p-3 text-xs font-semibold leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{item}</div>)}</div>
        </RevealItem>
      </div>

      <RevealItem className="mt-8 border-t border-white/10 pt-8">
        <div className="flex items-center gap-3 text-gray-500"><Layers size={18} /><p className="text-xs font-bold uppercase tracking-[0.18em]">{text.modulesKicker}</p></div>
        <h2 className="mt-4 text-2xl md:text-3xl font-medium">{text.modulesTitle}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">{localizedPage.modules.map((module) => <div key={module} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-medium leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{module}</div>)}</div>
      </RevealItem>

      <RevealItem className="mt-8 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium">{text.scenariosTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{scenarios.map((scenario) => <div key={scenario.title} className="border border-white/10 bg-[#071225]/55 p-5"><h3 className="font-bold leading-6 text-white">{scenario.title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{scenario.text}</p></div>)}</div>
      </RevealItem>

      <RevealItem className="mt-8 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium">{text.clarifyTitle}</h2>
        <p className="mt-5 max-w-4xl text-gray-400 leading-8">{text.clarifyDesc}</p>
        {localizedPage.closingNote && <p className="mt-5 max-w-4xl border-l-2 border-white/30 pl-5 text-sm font-semibold leading-7 text-gray-300">{localizedPage.closingNote}</p>}
      </RevealItem>

      <RevealItem className="mt-8 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium">{text.processTitle}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{text.process.map((item, index) => <div key={item} className="border border-white/10 bg-[#071225]/55 p-3 md:p-4"><span className="flex h-8 w-8 items-center justify-center bg-white text-sm font-bold text-black">{index + 1}</span><p className="mt-3 text-xs font-semibold leading-5 text-gray-300 md:mt-4 md:text-sm md:leading-6">{item}</p></div>)}</div>
      </RevealItem>

      <RevealItem className="mt-8 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium">{text.faqTitle}</h2>
        <div className="mt-6 grid gap-4">{faqs.map((faq) => <div key={faq.question} className="border border-white/10 bg-[#071225]/55 p-5"><h3 className="font-bold text-white">{faq.question}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{faq.answer}</p></div>)}</div>
      </RevealItem>

      {(relatedBlogs.length > 0 || relatedProjects.length > 0 || service) && (
        <RevealItem className="mt-8 border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium">{text.resourcesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service && <LocalizedLink href={`/services/${service.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 transition-colors hover:bg-white/10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{text.service}</p><h3 className="mt-3 font-bold leading-6 text-white">{service.title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{service.shortDesc}</p></LocalizedLink>}
            {relatedBlogs.slice(0, 2).map((post) => <LocalizedLink key={post.slug} href={`/blog/${post.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 transition-colors hover:bg-white/10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{text.blog}</p><h3 className="mt-3 font-bold leading-6 text-white">{post.title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{post.description}</p></LocalizedLink>)}
            {relatedProjects.slice(0, 2).map((project) => <LocalizedLink key={project.slug} href={`/projects/${project.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 transition-colors hover:bg-white/10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{project.projectKind === "client" ? text.portfolio : text.liveExample}</p><h3 className="mt-3 font-bold leading-6 text-white">{project.title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{project.shortDesc}</p></LocalizedLink>)}
          </div>
        </RevealItem>
      )}

      <RevealItem className="mt-10 border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{text.nextStep}</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.finalTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">{text.finalDesc}</p>
          </div>
          <LocalizedLink href={`/contact?service=${localizedPage.serviceSlug}&source=${localizedPage.slug}`} className="shimmer-button inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-black">
            {text.quote} <ArrowRight size={18} />
          </LocalizedLink>
        </div>
      </RevealItem>
    </>
  );
}
