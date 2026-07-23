"use client";

import { ArrowRight } from "lucide-react";
import { RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";
import { serviceCategories, servicesData } from "@/data/services";
import { getLocalizedServiceCategories, getLocalizedServices } from "@/data/i18n/services-en";

const processCopy = {
  tr: [
    ["İhtiyacı anlatın", "İşletme türü, mevcut durum, istediğiniz ekranlar ve örnek aldığınız yapı konuşulur."],
    ["Kapsamı sadeleştirelim", "Önce gerekli ilk sürüm seçilir; sonraki modüller ayrıca planlanır."],
    ["Süre ve teklif netleşir", "Modüller, panel, entegrasyon, destek ve teslim beklentisi yazılı hale getirilir."],
    ["Geliştirme başlar", "Uygun durumlarda canlı önizleme üzerinden ilerlenir ve teslim sonrası destek planı konuşulur."],
  ],
  en: [
    ["Describe the need", "Business type, current situation, required screens, and reference examples are discussed."],
    ["Simplify the scope", "The first necessary version is selected; later modules can be planned separately."],
    ["Timeline and quote become clear", "Modules, panel needs, integrations, support, and delivery expectations are written clearly."],
    ["Development starts", "When suitable, progress continues through a live preview and post-delivery support is discussed."],
  ],
  de: [
    ["Bedarf beschreiben", "Unternehmenstyp, aktueller Stand, benötigte Screens und Referenzbeispiele werden besprochen."],
    ["Umfang vereinfachen", "Zuerst wird die notwendige erste Version gewählt; spätere Module können separat geplant werden."],
    ["Zeitplan und Angebot klären", "Module, Panel-Bedarf, Integrationen, Support und Liefererwartungen werden klar festgehalten."],
    ["Entwicklung startet", "Wenn passend, läuft der Fortschritt über eine Live-Vorschau und Support nach Lieferung wird besprochen."],
  ],
  fr: [
    ["Décrire le besoin", "Type d'entreprise, situation actuelle, écrans nécessaires et exemples de référence sont discutés."],
    ["Simplifier le périmètre", "La première version nécessaire est choisie ; les modules suivants peuvent être planifiés séparément."],
    ["Délai et devis deviennent clairs", "Modules, besoin de panneau, intégrations, support et attentes de livraison sont écrits clairement."],
    ["Le développement commence", "Quand c'est adapté, l'avancement passe par un aperçu en direct et le support après livraison est discuté."],
  ],
  es: [
    ["Describir la necesidad", "Se habla del tipo de empresa, situación actual, pantallas necesarias y ejemplos de referencia."],
    ["Simplificar el alcance", "Primero se elige la primera versión necesaria; los módulos posteriores pueden planificarse por separado."],
    ["Plazo y propuesta quedan claros", "Módulos, panel, integraciones, soporte y expectativas de entrega se escriben con claridad."],
    ["Empieza el desarrollo", "Cuando conviene, el avance continúa con una vista previa en vivo y se habla del soporte posterior a la entrega."],
  ],
  ar: [
    ["اشرح الحاجة", "تتم مناقشة نوع الشركة والوضع الحالي والشاشات المطلوبة والأمثلة المرجعية."],
    ["نبسط النطاق", "يتم اختيار أول نسخة ضرورية؛ ويمكن تخطيط الوحدات اللاحقة بشكل منفصل."],
    ["تتضح المدة والعرض", "تكتب الوحدات واحتياج اللوحة والتكاملات والدعم وتوقعات التسليم بوضوح."],
    ["يبدأ التطوير", "عند الحاجة يستمر العمل عبر معاينة حية، ثم يتم توضيح دعم ما بعد التسليم."],
  ],
  ru: [
    ["Опишите потребность", "Обсуждаются тип бизнеса, текущая ситуация, нужные экраны и референсные примеры."],
    ["Упростим объем", "Сначала выбирается первая необходимая версия; последующие модули можно планировать отдельно."],
    ["Сроки и предложение уточняются", "Модули, панель, интеграции, поддержка и ожидания по сдаче фиксируются ясно."],
    ["Начинается разработка", "В подходящих случаях работа идет через live preview, а поддержка после сдачи обсуждается заранее."],
  ],
  pt: [
    ["Descreva a necessidade", "Tipo de negócio, situação atual, telas necessárias e exemplos de referência são discutidos."],
    ["Simplificamos o escopo", "A primeira versão necessária é escolhida; módulos posteriores podem ser planejados separadamente."],
    ["Prazo e proposta ficam claros", "Módulos, necessidade de painel, integrações, suporte e expectativas de entrega são escritos com clareza."],
    ["O desenvolvimento começa", "Quando adequado, o avanço continua por uma prévia ao vivo e o suporte pós-entrega é discutido."],
  ],
  it: [
    ["Descrivi l'esigenza", "Tipo di azienda, situazione attuale, schermate necessarie ed esempi di riferimento vengono discussi."],
    ["Semplifichiamo l'ambito", "Si sceglie la prima versione necessaria; i moduli successivi possono essere pianificati separatamente."],
    ["Tempi e preventivo diventano chiari", "Moduli, necessità di pannello, integrazioni, supporto e aspettative di consegna vengono scritti chiaramente."],
    ["Inizia lo sviluppo", "Quando adatto, l'avanzamento continua tramite anteprima live e il supporto post-consegna viene discusso."],
  ],
  nl: [
    ["Beschrijf de behoefte", "Bedrijfstype, huidige situatie, benodigde schermen en referentievoorbeelden worden besproken."],
    ["We vereenvoudigen de scope", "Eerst wordt de noodzakelijke eerste versie gekozen; latere modules kunnen apart worden gepland."],
    ["Planning en offerte worden duidelijk", "Modules, paneelbehoefte, integraties, support en opleververwachtingen worden helder vastgelegd."],
    ["Ontwikkeling start", "Wanneer geschikt loopt voortgang via een live preview en wordt support na oplevering besproken."],
  ],
  zh: [
    ["描述需求", "讨论企业类型、当前情况、需要的屏幕和参考结构。"],
    ["简化范围", "先选择必要的第一版本，后续模块单独规划。"],
    ["明确时间和报价", "模块、面板需求、集成、支持和交付预期会被清楚写下来。"],
    ["开始开发", "合适情况下通过在线预览推进，并讨论交付后支持计划。"],
  ],
};

const copy = {
  tr: {
    back: "← Hizmetlere Dön",
    quote: "Bu Hizmet İçin Teklif Al",
    examples: "Canlı Örnekleri İncele",
    what: "Bu hizmet ne işe yarar?",
    problem: "Çözdüğü problem",
    suitable: "Kimler için uygun?",
    usage: "Örnek kullanım alanları",
    modules: "Projeye dahil olabilecek modüller",
    price: "Fiyatı etkileyenler",
    priceNote: "Net fiyat, kapsam ve teslim beklentisi konuşulduktan sonra belirlenir. Ek modül ve yeni istekler ayrıca değerlendirilir.",
    infrastructure: "Kullanılabilecek altyapılar",
    infrastructureNote: "Teknoloji seçimi sabit paket gibi düşünülmez. İhtiyaca göre daha sade veya daha gelişmiş mimari kurulabilir.",
    risk: "Kapsam ve sorumluluk notu",
    relatedSolutions: "İlgili çözümler",
    relatedDemos: "İlgili canlı örnekler",
    relatedPortfolio: "İlgili portföy işleri",
    relatedGuides: "İlgili rehberler",
    siblings: "Aynı kategorideki diğer hizmetler",
    faq: "Sık sorulan sorular",
    process: "Süreç nasıl ilerler?",
    contact: "Bu Hizmet İçin İletişime Geç",
    all: "Tüm Hizmetlere Dön",
  },
  en: {
    back: "← Back to Services",
    quote: "Get a Quote for This Service",
    examples: "View Live Examples",
    what: "What does this service do?",
    problem: "Problem solved",
    suitable: "Who is it suitable for?",
    usage: "Example use cases",
    modules: "Modules that can be included",
    price: "What affects pricing",
    priceNote: "The final price is defined after scope and delivery expectations are discussed. Extra modules and new requests are evaluated separately.",
    infrastructure: "Possible infrastructure",
    infrastructureNote: "Technology is not treated as a fixed package. A simpler or more advanced architecture can be selected according to need.",
    risk: "Scope and responsibility note",
    relatedSolutions: "Related solutions",
    relatedDemos: "Related live examples",
    relatedPortfolio: "Related portfolio work",
    relatedGuides: "Related guides",
    siblings: "Other services in the same category",
    faq: "Frequently asked questions",
    process: "How does the process move forward?",
    contact: "Contact Us for This Service",
    all: "Back to All Services",
  },
  de: {
    back: "← Zurück zu den Leistungen",
    quote: "Angebot für diese Leistung anfragen",
    examples: "Live-Beispiele ansehen",
    what: "Was leistet diese Leistung?",
    problem: "Gelöstes Problem",
    suitable: "Für wen geeignet?",
    usage: "Beispielhafte Einsatzbereiche",
    modules: "Module, die enthalten sein können",
    price: "Was den Preis beeinflusst",
    priceNote: "Der endgültige Preis wird nach Klärung von Umfang und Liefererwartung festgelegt. Zusätzliche Module und neue Wünsche werden separat bewertet.",
    infrastructure: "Mögliche Infrastruktur",
    infrastructureNote: "Technologie wird nicht als starres Paket betrachtet. Je nach Bedarf kann eine einfachere oder fortgeschrittenere Architektur gewählt werden.",
    risk: "Hinweis zu Umfang und Verantwortung",
    relatedSolutions: "Verwandte Lösungen",
    relatedDemos: "Verwandte Live-Beispiele",
    relatedPortfolio: "Verwandte Portfolio-Arbeiten",
    relatedGuides: "Verwandte Leitfäden",
    siblings: "Weitere Leistungen in derselben Kategorie",
    faq: "Häufig gestellte Fragen",
    process: "Wie läuft der Prozess?",
    contact: "Für diese Leistung Kontakt aufnehmen",
    all: "Zurück zu allen Leistungen",
  },
  fr: {
    back: "← Retour aux services",
    quote: "Demander un devis pour ce service",
    examples: "Voir les exemples en direct",
    what: "À quoi sert ce service ?",
    problem: "Problème résolu",
    suitable: "Pour qui est-ce adapté ?",
    usage: "Exemples d'utilisation",
    modules: "Modules pouvant être inclus",
    price: "Ce qui influence le prix",
    priceNote: "Le prix final est défini après discussion du périmètre et des attentes de livraison. Les modules supplémentaires et nouvelles demandes sont évalués séparément.",
    infrastructure: "Infrastructure possible",
    infrastructureNote: "La technologie n'est pas traitée comme un forfait fixe. Une architecture plus simple ou plus avancée peut être choisie selon le besoin.",
    risk: "Note sur le périmètre et les responsabilités",
    relatedSolutions: "Solutions liées",
    relatedDemos: "Exemples en direct liés",
    relatedPortfolio: "Travaux portfolio liés",
    relatedGuides: "Guides liés",
    siblings: "Autres services dans la même catégorie",
    faq: "Questions fréquentes",
    process: "Comment le processus avance-t-il ?",
    contact: "Nous contacter pour ce service",
    all: "Retour à tous les services",
  },
  es: {
    back: "← Volver a servicios",
    quote: "Solicitar propuesta para este servicio",
    examples: "Ver ejemplos en vivo",
    what: "¿Para qué sirve este servicio?",
    problem: "Problema que resuelve",
    suitable: "¿Para quién es adecuado?",
    usage: "Ejemplos de uso",
    modules: "Módulos que pueden incluirse",
    price: "Qué influye en el precio",
    priceNote: "El precio final se define después de hablar del alcance y las expectativas de entrega. Módulos extra y nuevas solicitudes se valoran por separado.",
    infrastructure: "Infraestructura posible",
    infrastructureNote: "La tecnología no se trata como un paquete fijo. Según la necesidad, puede elegirse una arquitectura más simple o más avanzada.",
    risk: "Nota sobre alcance y responsabilidad",
    relatedSolutions: "Soluciones relacionadas",
    relatedDemos: "Ejemplos en vivo relacionados",
    relatedPortfolio: "Trabajos de portafolio relacionados",
    relatedGuides: "Guías relacionadas",
    siblings: "Otros servicios de la misma categoría",
    faq: "Preguntas frecuentes",
    process: "¿Cómo avanza el proceso?",
    contact: "Contactar por este servicio",
    all: "Volver a todos los servicios",
  },
  ar: {
    back: "← العودة إلى الخدمات",
    quote: "اطلب عرضاً لهذه الخدمة",
    examples: "شاهد الأمثلة الحية",
    what: "ما وظيفة هذه الخدمة؟",
    problem: "المشكلة التي تحلها",
    suitable: "لمن تناسب؟",
    usage: "أمثلة استخدام",
    modules: "وحدات يمكن أن تدخل في المشروع",
    price: "ما الذي يؤثر على السعر",
    priceNote: "يتم تحديد السعر النهائي بعد مناقشة النطاق وتوقعات التسليم. يتم تقييم الوحدات الإضافية والطلبات الجديدة بشكل منفصل.",
    infrastructure: "البنية التي يمكن استخدامها",
    infrastructureNote: "لا يتم التعامل مع التقنية كباقة ثابتة. يمكن اختيار بنية أبسط أو أكثر تقدماً حسب الحاجة.",
    risk: "ملاحظة النطاق والمسؤولية",
    relatedSolutions: "حلول مرتبطة",
    relatedDemos: "أمثلة حية مرتبطة",
    relatedPortfolio: "أعمال بورتفوليو مرتبطة",
    relatedGuides: "أدلة مرتبطة",
    siblings: "خدمات أخرى في نفس الفئة",
    faq: "أسئلة شائعة",
    process: "كيف تسير العملية؟",
    contact: "تواصل بخصوص هذه الخدمة",
    all: "العودة إلى كل الخدمات",
  },
  ru: {
    back: "← Назад к услугам",
    quote: "Получить предложение по этой услуге",
    examples: "Смотреть живые примеры",
    what: "Для чего нужна эта услуга?",
    problem: "Какую проблему решает",
    suitable: "Для кого подходит?",
    usage: "Примеры использования",
    modules: "Модули, которые могут входить в проект",
    price: "Что влияет на цену",
    priceNote: "Финальная цена определяется после обсуждения объема и ожиданий по сдаче. Дополнительные модули и новые запросы оцениваются отдельно.",
    infrastructure: "Возможная инфраструктура",
    infrastructureNote: "Технология не рассматривается как фиксированный пакет. По потребности можно выбрать более простую или более продвинутую архитектуру.",
    risk: "Заметка об объеме и ответственности",
    relatedSolutions: "Связанные решения",
    relatedDemos: "Связанные живые примеры",
    relatedPortfolio: "Связанные работы портфолио",
    relatedGuides: "Связанные гайды",
    siblings: "Другие услуги в той же категории",
    faq: "Частые вопросы",
    process: "Как идет процесс?",
    contact: "Связаться по этой услуге",
    all: "Назад ко всем услугам",
  },
  pt: {
    back: "← Voltar aos serviços",
    quote: "Solicitar proposta para este serviço",
    examples: "Ver exemplos ao vivo",
    what: "Para que serve este serviço?",
    problem: "Problema resolvido",
    suitable: "Para quem é adequado?",
    usage: "Exemplos de uso",
    modules: "Módulos que podem entrar no projeto",
    price: "O que influencia o preço",
    priceNote: "O preço final é definido depois de discutir escopo e expectativas de entrega. Módulos extras e novas solicitações são avaliados separadamente.",
    infrastructure: "Infraestrutura possível",
    infrastructureNote: "A tecnologia não é tratada como um pacote fixo. Conforme a necessidade, uma arquitetura mais simples ou mais avançada pode ser escolhida.",
    risk: "Nota sobre escopo e responsabilidade",
    relatedSolutions: "Soluções relacionadas",
    relatedDemos: "Exemplos ao vivo relacionados",
    relatedPortfolio: "Trabalhos de portfólio relacionados",
    relatedGuides: "Guias relacionados",
    siblings: "Outros serviços da mesma categoria",
    faq: "Perguntas frequentes",
    process: "Como o processo avança?",
    contact: "Entrar em contato sobre este serviço",
    all: "Voltar a todos os serviços",
  },
  it: {
    back: "← Torna ai servizi",
    quote: "Richiedi un preventivo per questo servizio",
    examples: "Vedi esempi live",
    what: "A cosa serve questo servizio?",
    problem: "Problema risolto",
    suitable: "Per chi è adatto?",
    usage: "Esempi di utilizzo",
    modules: "Moduli che possono essere inclusi",
    price: "Cosa influenza il prezzo",
    priceNote: "Il prezzo finale viene definito dopo aver discusso ambito e aspettative di consegna. Moduli extra e nuove richieste vengono valutati separatamente.",
    infrastructure: "Infrastruttura possibile",
    infrastructureNote: "La tecnologia non viene trattata come un pacchetto fisso. In base all'esigenza si può scegliere un'architettura più semplice o più avanzata.",
    risk: "Nota su ambito e responsabilità",
    relatedSolutions: "Soluzioni correlate",
    relatedDemos: "Esempi live correlati",
    relatedPortfolio: "Lavori portfolio correlati",
    relatedGuides: "Guide correlate",
    siblings: "Altri servizi nella stessa categoria",
    faq: "Domande frequenti",
    process: "Come procede il processo?",
    contact: "Contattaci per questo servizio",
    all: "Torna a tutti i servizi",
  },
  nl: {
    back: "← Terug naar diensten",
    quote: "Offerte aanvragen voor deze dienst",
    examples: "Live voorbeelden bekijken",
    what: "Waarvoor dient deze dienst?",
    problem: "Opgelost probleem",
    suitable: "Voor wie is dit geschikt?",
    usage: "Voorbeelden van gebruik",
    modules: "Modules die kunnen worden opgenomen",
    price: "Wat de prijs beïnvloedt",
    priceNote: "De uiteindelijke prijs wordt bepaald nadat scope en opleververwachtingen zijn besproken. Extra modules en nieuwe verzoeken worden apart beoordeeld.",
    infrastructure: "Mogelijke infrastructuur",
    infrastructureNote: "Technologie wordt niet als vast pakket behandeld. Volgens behoefte kan een eenvoudigere of geavanceerdere architectuur worden gekozen.",
    risk: "Notitie over scope en verantwoordelijkheid",
    relatedSolutions: "Gerelateerde oplossingen",
    relatedDemos: "Gerelateerde live voorbeelden",
    relatedPortfolio: "Gerelateerd portfoliowerk",
    relatedGuides: "Gerelateerde gidsen",
    siblings: "Andere diensten in dezelfde categorie",
    faq: "Veelgestelde vragen",
    process: "Hoe verloopt het proces?",
    contact: "Contact opnemen voor deze dienst",
    all: "Terug naar alle diensten",
  },
  zh: {
    back: "← 返回服务",
    quote: "为此服务获取报价",
    examples: "查看在线示例",
    what: "这项服务用于什么？",
    problem: "解决的问题",
    suitable: "适合谁？",
    usage: "使用示例",
    modules: "可包含的模块",
    price: "影响价格的因素",
    priceNote: "最终价格会在讨论范围和交付预期后确定。额外模块和新需求会单独评估。",
    infrastructure: "可能的基础设施",
    infrastructureNote: "技术不是固定套餐。可按需求选择更简单或更高级的架构。",
    risk: "范围和责任说明",
    relatedSolutions: "相关解决方案",
    relatedDemos: "相关在线示例",
    relatedPortfolio: "相关作品集项目",
    relatedGuides: "相关指南",
    siblings: "同类别其他服务",
    faq: "常见问题",
    process: "流程如何进行？",
    contact: "咨询此服务",
    all: "返回全部服务",
  },
};

type RelatedContentItem = {
  title: string;
  description: string;
  path: string;
};

export type ServiceRelatedContent = {
  solutions: RelatedContentItem[];
  projects: RelatedContentItem[];
  guides: RelatedContentItem[];
};

export default function ServiceDetailPageView({
  slug,
  relatedContent,
}: {
  slug: string;
  relatedContent: ServiceRelatedContent;
}) {
  const locale = useCurrentLocale();
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
  const localizedServices = getLocalizedServices(servicesData, locale);
  const localizedCategories = getLocalizedServiceCategories(serviceCategories, locale);
  const service = localizedServices.find((item) => item.slug === slug);
  if (!service) return null;

  const category = localizedCategories.find((item) => item.slug === service.categorySlug);
  const siblingServices = localizedServices
    .filter((item) => item.categorySlug === service.categorySlug && item.slug !== service.slug)
    .slice(0, 5);
  const process = isEnglish ? processCopy.en : isGerman ? processCopy.de : isFrench ? processCopy.fr : isSpanish ? processCopy.es : isArabic ? processCopy.ar : isRussian ? processCopy.ru : isPortuguese ? processCopy.pt : isItalian ? processCopy.it : isDutch ? processCopy.nl : isChinese ? processCopy.zh : processCopy.tr;

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <RevealItem disableOnMobile={false} className="mb-8">
        <LocalizedLink href="/services" className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-white">
          {text.back}
        </LocalizedLink>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">{service.category}</span>
          {category?.signal && <span className="border border-white/10 bg-[#071225]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">{category.signal}</span>}
        </div>
        <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">{service.title}</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-8">{service.longDesc}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <LocalizedLink href={`/contact?service=${service.slug}&source=service-detail-hero`} className="shimmer-button bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
            {text.quote} <ArrowRight size={18} />
          </LocalizedLink>
          <LocalizedLink href="/projects" className="border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">{text.examples}</LocalizedLink>
        </div>
      </RevealItem>

      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] mb-8">
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">{text.what}</h2>
          <div className="space-y-5 text-gray-400 leading-8">{service.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </RevealItem>

        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">{text.problem}</h2>
          <p className="text-gray-400 leading-8">{service.problemSolved}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {service.scopeLevels.map((level) => (
              <div key={level.name} className="border border-white/10 bg-[#071225]/55 p-3 md:p-4">
                <h3 className="font-bold text-white">{level.name}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500 md:text-sm md:leading-6">{level.description}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-8">
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.suitable}</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2">{service.suitableFor.map((item) => <div key={item} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-medium leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{item}</div>)}</div>
        </RevealItem>

        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.usage}</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2">{service.examples.map((item) => <div key={item} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-medium leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{item}</div>)}</div>
        </RevealItem>
      </div>

      <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.modules}</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">{service.modules.map((module) => <div key={module} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-medium leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{module}</div>)}</div>
      </RevealItem>

      <div className="grid gap-8 lg:grid-cols-2 mb-8">
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.price}</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2">{service.priceFactors.map((factor) => <div key={factor} className="border border-white/10 bg-[#071225]/55 p-3 text-xs font-medium leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">{factor}</div>)}</div>
          <p className="mt-5 border-l-2 border-white/20 pl-4 text-sm leading-7 text-gray-500">{text.priceNote}</p>
        </RevealItem>

        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.infrastructure}</h2>
          <div className="flex flex-wrap gap-2">{service.infrastructure.map((tech) => <span key={tech} className="tech-chip px-3 py-2 bg-[#071225]/65 border border-white/10 text-sm text-gray-400 rounded-sm">{tech}</span>)}</div>
          <p className="mt-6 text-sm text-gray-500 border-l-2 border-white/20 pl-4 leading-7">{text.infrastructureNote}</p>
        </RevealItem>
      </div>

      {service.riskNote && (
        <RevealItem disableOnMobile={false} className="mb-8 border border-white/10 bg-[#071225]/78 p-5 md:p-6">
          <h2 className="text-xl font-medium text-white">{text.risk}</h2>
          <p className="mt-3 text-sm leading-7 text-gray-400">{service.riskNote}</p>
        </RevealItem>
      )}

      {relatedContent.solutions.length > 0 && (
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.relatedSolutions}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {relatedContent.solutions.map((item) => (
              <LocalizedLink key={item.path} href={item.path} className="border border-white/10 bg-[#071225]/55 p-4 transition-colors hover:bg-white/10">
                <span className="text-sm font-semibold leading-6 text-gray-200">{item.title}</span>
                <span className="mt-2 block text-xs leading-5 text-gray-500">{item.description}</span>
              </LocalizedLink>
            ))}
          </div>
        </RevealItem>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        {relatedContent.projects.length > 0 && (
          <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              {service.relatedProjects.length > 0 && service.relatedProjects.every((projectSlug) => projectSlug.includes("demo"))
                ? text.relatedDemos
                : text.relatedPortfolio}
            </h2>
            <div className="grid gap-3">
              {relatedContent.projects.map((item) => (
                <LocalizedLink key={item.path} href={item.path} className="border border-white/10 bg-[#071225]/55 p-4 transition-colors hover:bg-white/10">
                  <span className="text-sm font-semibold leading-6 text-gray-200">{item.title}</span>
                  <span className="mt-2 block text-xs leading-5 text-gray-500">{item.description}</span>
                </LocalizedLink>
              ))}
            </div>
          </RevealItem>
        )}

        {relatedContent.guides.length > 0 && (
          <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.relatedGuides}</h2>
            <div className="grid gap-3">
              {relatedContent.guides.map((item) => (
                <LocalizedLink key={item.path} href={item.path} className="border border-white/10 bg-[#071225]/55 p-4 transition-colors hover:bg-white/10">
                  <span className="text-sm font-semibold leading-6 text-gray-200">{item.title}</span>
                  <span className="mt-2 block text-xs leading-5 text-gray-500">{item.description}</span>
                </LocalizedLink>
              ))}
            </div>
          </RevealItem>
        )}
      </div>

      {siblingServices.length > 0 && (
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.siblings}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {siblingServices.map((item) => (
              <LocalizedLink key={item.slug} href={`/services/${item.slug}`} className="border border-white/10 bg-[#071225]/55 p-4 hover:bg-white/10">
                <span className="text-sm font-semibold leading-6 text-gray-200">{item.title}</span>
                <span className="mt-2 block text-xs leading-5 text-gray-500">{item.shortDesc}</span>
              </LocalizedLink>
            ))}
          </div>
        </RevealItem>
      )}

      {service.faqs.length > 0 && (
        <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.faq}</h2>
          <div className="grid gap-4">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border border-white/10 bg-[#071225]/55 p-5">
                <h3 className="font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      )}

      <RevealItem disableOnMobile={false} className="border-t border-white/10 pt-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">{text.process}</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {process.map(([title, desc], index) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-4 md:p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-black md:h-10 md:w-10 md:text-base">{index + 1}</div>
              <h3 className="mt-3 text-sm font-bold leading-5 text-white md:mt-4 md:text-base md:leading-6">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500 md:text-sm md:leading-6">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <LocalizedLink href={`/contact?service=${service.slug}&source=service-detail-bottom`} className="bg-white text-black px-7 py-3 font-bold hover:bg-gray-200 transition-colors">{text.contact}</LocalizedLink>
          <LocalizedLink href="/services" className="border border-white/20 text-white px-7 py-3 font-medium hover:bg-white/10 transition-colors">{text.all}</LocalizedLink>
        </div>
      </RevealItem>
    </main>
  );
}
