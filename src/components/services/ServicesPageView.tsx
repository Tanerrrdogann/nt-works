"use client";

import { usePathname } from "next/navigation";
import { RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { featuredServiceSlugs, serviceCategories, servicesData } from "@/data/services";
import { getLocalizedServiceCategories, getLocalizedServices } from "@/data/i18n/services-en";
import { getLocaleFromPath } from "@/lib/i18n";

function getServicesBySlugs(slugs: string[], services: typeof servicesData) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

const pageCopy = {
  tr: {
    kicker: "Hizmetler",
    title: <>Web sitesinden fazlası: <span className="text-gray-500">satış, panel ve özel yazılım sistemleri</span></>,
    desc: "Kurumsal site, katalog, WhatsApp sipariş, e-ticaret, randevu, CRM, stok, bayi paneli, entegrasyon, AI otomasyon ve bakım hizmetleri aynı çatı altında ihtiyaca göre planlanabilir.",
    explain: "Projeyi Anlat",
    examples: "Canlı Örnekler",
    featuredKicker: "Öne Çıkanlar",
    featuredTitle: "En çok satışa dönebilecek hizmet omurgası",
    detail: "Detay",
    example: "Örnek",
    quote: "Teklif",
    categoriesKicker: "Kategoriler",
    categoriesTitle: "Hizmetleri ihtiyaca göre gezin",
    forWho: "Kimler için",
    problem: "Çözdüğü problem",
    inspect: "Detaylı İncele",
    liveExample: "Canlı Örnek",
    modulesTitle: "Ne yapabiliriz?",
    modulesDesc: "Müşteri çoğu zaman ihtiyacının adını bilmez. Bu yüzden hizmetleri modül mantığıyla da düşünebiliriz: önce en kritik akış seçilir, sonra panel, ödeme, entegrasyon, rapor ve mobil kullanım gibi parçalar eklenir.",
    combineTitle: "Sistemler ihtiyaca göre birleşebilir",
    combineDesc: "Tek hizmet seçmek zorunda değilsiniz. Örneğin katalog sitesi daha sonra e-ticarete, randevu sistemi müşteri takip paneline, admin panel entegrasyonlu özel yazılıma dönüşebilir.",
    combinations: [
      ["Kafe / Restoran", "Landing page + QR menü + WhatsApp sipariş + admin panel"],
      ["Butik / Ürün Satışı", "Katalog + WhatsApp sipariş + stok + e-ticaret yükseltmesi"],
      ["Güzellik Merkezi / Klinik", "Tanıtım sitesi + randevu + müşteri takip paneli"],
      ["Toptancı / Üretici", "B2B bayi paneli + stok + sipariş + entegrasyon"],
    ],
  },
  en: {
    kicker: "Services",
    title: <>More than a website: <span className="text-gray-500">sales, panels, and custom software systems</span></>,
    desc: "Corporate websites, catalogs, WhatsApp orders, e-commerce, appointments, CRM, stock, dealer panels, integrations, AI automation, and maintenance can be planned under one roof according to need.",
    explain: "Describe the Project",
    examples: "Live Examples",
    featuredKicker: "Featured",
    featuredTitle: "The service backbone most likely to turn into sales",
    detail: "Detail",
    example: "Example",
    quote: "Quote",
    categoriesKicker: "Categories",
    categoriesTitle: "Browse services by need",
    forWho: "Best for",
    problem: "Problem solved",
    inspect: "Review Details",
    liveExample: "Live Example",
    modulesTitle: "What can we build?",
    modulesDesc: "Customers often do not know the exact name of what they need. Services can also be planned as modules: first the critical workflow is selected, then panels, payments, integrations, reports, and mobile usage can be added.",
    combineTitle: "Systems can be combined by need",
    combineDesc: "You do not have to choose only one service. A catalog can later grow into e-commerce, an appointment system can connect to CRM, and an admin panel can become a custom integrated system.",
    combinations: [
      ["Cafe / Restaurant", "Landing page + QR menu + WhatsApp order + admin panel"],
      ["Boutique / Product Sales", "Catalog + WhatsApp order + stock + e-commerce upgrade"],
      ["Beauty Center / Clinic", "Presentation website + appointment + customer tracking panel"],
      ["Wholesaler / Manufacturer", "B2B dealer panel + stock + orders + integration"],
    ],
  },
  de: {
    kicker: "Leistungen",
    title: <>Mehr als eine Website: <span className="text-gray-500">Verkauf, Panels und individuelle Softwaresysteme</span></>,
    desc: "Unternehmenswebsites, Kataloge, WhatsApp-Bestellungen, E-Commerce, Termine, CRM, Bestand, Händlerpanels, Integrationen, KI-Automatisierung und Wartung können je nach Bedarf unter einem Dach geplant werden.",
    explain: "Projekt beschreiben",
    examples: "Live-Beispiele",
    featuredKicker: "Empfohlen",
    featuredTitle: "Die Leistungsbasis mit dem höchsten Verkaufspotenzial",
    detail: "Detail",
    example: "Beispiel",
    quote: "Anfrage",
    categoriesKicker: "Kategorien",
    categoriesTitle: "Leistungen nach Bedarf ansehen",
    forWho: "Geeignet für",
    problem: "Gelöstes Problem",
    inspect: "Details ansehen",
    liveExample: "Live-Beispiel",
    modulesTitle: "Was können wir bauen?",
    modulesDesc: "Kunden kennen oft nicht den genauen Namen ihres Bedarfs. Deshalb können Leistungen auch modular geplant werden: zuerst wird der wichtigste Ablauf gewählt, danach können Panels, Zahlung, Integrationen, Berichte und mobile Nutzung ergänzt werden.",
    combineTitle: "Systeme können je nach Bedarf kombiniert werden",
    combineDesc: "Sie müssen nicht nur eine Leistung wählen. Ein Katalog kann später zu E-Commerce wachsen, ein Terminsystem kann mit CRM verbunden werden und ein Admin-Panel kann zu einem integrierten individuellen System werden.",
    combinations: [
      ["Cafe / Restaurant", "Landingpage + QR-Menü + WhatsApp-Bestellung + Admin-Panel"],
      ["Boutique / Produktverkauf", "Katalog + WhatsApp-Bestellung + Bestand + E-Commerce-Ausbau"],
      ["Beauty Center / Klinik", "Präsentationswebsite + Termin + Kundenverfolgungspanel"],
      ["Großhändler / Hersteller", "B2B-Händlerpanel + Bestand + Bestellungen + Integration"],
    ],
  },
  fr: {
    kicker: "Services",
    title: <>Plus qu&apos;un site web : <span className="text-gray-500">vente, panneaux et logiciels sur mesure</span></>,
    desc: "Sites d'entreprise, catalogues, commandes WhatsApp, e-commerce, rendez-vous, CRM, stock, panneaux revendeurs, intégrations, automatisation IA et maintenance peuvent être planifiés sous un même toit selon le besoin.",
    explain: "Décrire le projet",
    examples: "Exemples en direct",
    featuredKicker: "Mis en avant",
    featuredTitle: "L'ossature de services la plus susceptible de générer des ventes",
    detail: "Détail",
    example: "Exemple",
    quote: "Devis",
    categoriesKicker: "Catégories",
    categoriesTitle: "Parcourir les services par besoin",
    forWho: "Pour qui",
    problem: "Problème résolu",
    inspect: "Voir les détails",
    liveExample: "Exemple en direct",
    modulesTitle: "Que pouvons-nous construire ?",
    modulesDesc: "Le client ne connaît pas toujours le nom exact de son besoin. Les services peuvent donc aussi être pensés en modules : on choisit d'abord le flux critique, puis on ajoute panneaux, paiement, intégrations, rapports et usage mobile.",
    combineTitle: "Les systèmes peuvent être combinés selon le besoin",
    combineDesc: "Vous n'avez pas à choisir un seul service. Un catalogue peut évoluer vers l'e-commerce, un système de rendez-vous peut se connecter au CRM, et un panneau d'administration peut devenir un système intégré sur mesure.",
    combinations: [
      ["Café / Restaurant", "Landing page + menu QR + commande WhatsApp + panneau d'administration"],
      ["Boutique / Vente produit", "Catalogue + commande WhatsApp + stock + évolution e-commerce"],
      ["Centre esthétique / Clinique", "Site de présentation + rendez-vous + panneau de suivi client"],
      ["Grossiste / Fabricant", "Panneau revendeur B2B + stock + commandes + intégration"],
    ],
  },
  es: {
    kicker: "Servicios",
    title: <>Más que un sitio web: <span className="text-gray-500">ventas, paneles y sistemas de software a medida</span></>,
    desc: "Sitios corporativos, catálogos, pedidos por WhatsApp, e-commerce, citas, CRM, stock, paneles de distribuidores, integraciones, automatización IA y mantenimiento pueden planificarse bajo un mismo techo según la necesidad.",
    explain: "Describir el proyecto",
    examples: "Ejemplos en vivo",
    featuredKicker: "Destacados",
    featuredTitle: "La base de servicios con mayor potencial de convertirse en ventas",
    detail: "Detalle",
    example: "Ejemplo",
    quote: "Propuesta",
    categoriesKicker: "Categorías",
    categoriesTitle: "Explora servicios según la necesidad",
    forWho: "Para quién",
    problem: "Problema que resuelve",
    inspect: "Ver detalles",
    liveExample: "Ejemplo en vivo",
    modulesTitle: "¿Qué podemos construir?",
    modulesDesc: "El cliente muchas veces no sabe el nombre exacto de lo que necesita. Por eso los servicios también pueden pensarse como módulos: primero se elige el flujo crítico y luego se añaden paneles, pagos, integraciones, reportes y uso móvil.",
    combineTitle: "Los sistemas pueden combinarse según la necesidad",
    combineDesc: "No tienes que elegir un solo servicio. Un catálogo puede crecer hacia e-commerce, un sistema de citas puede conectarse con CRM y un panel puede convertirse en un sistema integrado a medida.",
    combinations: [
      ["Café / Restaurante", "Landing page + menú QR + pedido por WhatsApp + panel de administración"],
      ["Boutique / Venta de productos", "Catálogo + pedido por WhatsApp + stock + evolución e-commerce"],
      ["Centro de belleza / Clínica", "Sitio de presentación + citas + panel de seguimiento de clientes"],
      ["Mayorista / Fabricante", "Panel B2B de distribuidores + stock + pedidos + integración"],
    ],
  },
  ar: {
    kicker: "الخدمات",
    title: <>أكثر من موقع ويب: <span className="text-gray-500">مبيعات ولوحات وأنظمة برمجية مخصصة</span></>,
    desc: "يمكن تخطيط مواقع الشركات والكتالوجات وطلبات واتساب والتجارة الإلكترونية والمواعيد وCRM والمخزون ولوحات الموزعين والتكاملات وأتمتة الذكاء الاصطناعي والصيانة تحت سقف واحد حسب الحاجة.",
    explain: "اشرح المشروع",
    examples: "شاهد الأمثلة الحية",
    featuredKicker: "الأبرز",
    featuredTitle: "عمود الخدمات الأكثر قابلية للتحول إلى مبيعات",
    detail: "تفاصيل",
    example: "مثال",
    quote: "عرض سعر",
    categoriesKicker: "الفئات",
    categoriesTitle: "تصفح الخدمات حسب الحاجة",
    forWho: "مناسب لـ",
    problem: "المشكلة التي يحلها",
    inspect: "راجع التفاصيل",
    liveExample: "مثال حي",
    modulesTitle: "ماذا يمكننا أن نبني؟",
    modulesDesc: "غالباً لا يعرف العميل الاسم الدقيق لما يحتاجه. لذلك يمكن التفكير في الخدمات كأجزاء: نحدد أولاً التدفق الأكثر أهمية، ثم نضيف اللوحات والدفع والتكاملات والتقارير والاستخدام عبر الجوال.",
    combineTitle: "يمكن دمج الأنظمة حسب الحاجة",
    combineDesc: "لست مضطراً لاختيار خدمة واحدة فقط. يمكن أن يتحول الكتالوج لاحقاً إلى تجارة إلكترونية، وأن يرتبط نظام المواعيد بـ CRM، وأن تتطور لوحة الإدارة إلى نظام مخصص متكامل.",
    combinations: [
      ["مقهى / مطعم", "Landing page + قائمة QR + طلب واتساب + لوحة إدارة"],
      ["بوتيك / بيع منتجات", "كتالوج + طلب واتساب + مخزون + ترقية للتجارة الإلكترونية"],
      ["مركز تجميل / عيادة", "موقع تعريفي + مواعيد + لوحة متابعة العملاء"],
      ["تاجر جملة / مصنع", "لوحة موزعين B2B + مخزون + طلبات + تكامل"],
    ],
  },
  ru: {
    kicker: "Услуги",
    title: <>Больше чем сайт: <span className="text-gray-500">продажи, панели и индивидуальные программные системы</span></>,
    desc: "Корпоративные сайты, каталоги, заказы WhatsApp, e-commerce, запись, CRM, склад, дилерские панели, интеграции, AI-автоматизация и поддержка могут планироваться под одной крышей по потребности.",
    explain: "Описать проект",
    examples: "Живые примеры",
    featuredKicker: "Выделенное",
    featuredTitle: "Основа услуг с наибольшим потенциалом продаж",
    detail: "Детали",
    example: "Пример",
    quote: "Предложение",
    categoriesKicker: "Категории",
    categoriesTitle: "Просматривайте услуги по потребности",
    forWho: "Для кого",
    problem: "Какую проблему решает",
    inspect: "Подробно",
    liveExample: "Живой пример",
    modulesTitle: "Что мы можем построить?",
    modulesDesc: "Клиент часто не знает точного названия своей потребности. Поэтому услуги можно мыслить модульно: сначала выбирается самый критичный поток, затем добавляются панели, оплата, интеграции, отчеты и мобильное использование.",
    combineTitle: "Системы можно объединять по потребности",
    combineDesc: "Не нужно выбирать только одну услугу. Например, каталог позже может вырасти в e-commerce, система записи может подключиться к CRM, а админ-панель может стать интегрированной индивидуальной системой.",
    combinations: [
      ["Кафе / ресторан", "Landing page + QR-меню + заказ WhatsApp + админ-панель"],
      ["Бутик / продажа товаров", "Каталог + заказ WhatsApp + склад + e-commerce upgrade"],
      ["Салон красоты / клиника", "Презентационный сайт + запись + панель учета клиентов"],
      ["Оптовик / производитель", "B2B дилерская панель + склад + заказы + интеграция"],
    ],
  },
  pt: {
    kicker: "Serviços",
    title: <>Mais que um site: <span className="text-gray-500">vendas, painéis e sistemas de software sob medida</span></>,
    desc: "Sites institucionais, catálogos, pedidos por WhatsApp, e-commerce, agendamentos, CRM, estoque, painéis de revendedores, integrações, automação com IA e manutenção podem ser planejados sob o mesmo teto conforme a necessidade.",
    explain: "Descrever o projeto",
    examples: "Exemplos ao vivo",
    featuredKicker: "Destaques",
    featuredTitle: "A base de serviços com maior potencial de virar venda",
    detail: "Detalhe",
    example: "Exemplo",
    quote: "Proposta",
    categoriesKicker: "Categorias",
    categoriesTitle: "Navegue pelos serviços conforme a necessidade",
    forWho: "Para quem",
    problem: "Problema resolvido",
    inspect: "Ver detalhes",
    liveExample: "Exemplo ao vivo",
    modulesTitle: "O que podemos construir?",
    modulesDesc: "O cliente muitas vezes não sabe o nome exato do que precisa. Por isso os serviços também podem ser pensados como módulos: primeiro escolhemos o fluxo crítico, depois painéis, pagamentos, integrações, relatórios e uso mobile podem ser adicionados.",
    combineTitle: "Sistemas podem ser combinados conforme a necessidade",
    combineDesc: "Você não precisa escolher apenas um serviço. Um catálogo pode evoluir para e-commerce, um sistema de agendamento pode se conectar ao CRM e um painel administrativo pode virar um sistema integrado sob medida.",
    combinations: [
      ["Café / Restaurante", "Landing page + menu QR + pedido por WhatsApp + painel administrativo"],
      ["Boutique / Venda de produtos", "Catálogo + pedido por WhatsApp + estoque + evolução para e-commerce"],
      ["Centro de beleza / Clínica", "Site de apresentação + agendamento + painel de acompanhamento de clientes"],
      ["Atacadista / Fabricante", "Painel B2B de revendedores + estoque + pedidos + integração"],
    ],
  },
  it: {
    kicker: "Servizi",
    title: <>Più di un sito: <span className="text-gray-500">vendite, pannelli e sistemi software su misura</span></>,
    desc: "Siti aziendali, cataloghi, ordini WhatsApp, e-commerce, appuntamenti, CRM, stock, pannelli rivenditori, integrazioni, automazione IA e manutenzione possono essere pianificati sotto lo stesso tetto in base all'esigenza.",
    explain: "Descrivi il progetto",
    examples: "Esempi live",
    featuredKicker: "In evidenza",
    featuredTitle: "La base di servizi con maggior potenziale di vendita",
    detail: "Dettaglio",
    example: "Esempio",
    quote: "Preventivo",
    categoriesKicker: "Categorie",
    categoriesTitle: "Sfoglia i servizi per esigenza",
    forWho: "Per chi",
    problem: "Problema risolto",
    inspect: "Vedi dettagli",
    liveExample: "Esempio live",
    modulesTitle: "Cosa possiamo costruire?",
    modulesDesc: "Spesso il cliente non conosce il nome esatto di ciò di cui ha bisogno. Per questo i servizi possono essere pensati anche come moduli: prima si sceglie il flusso critico, poi si aggiungono pannelli, pagamenti, integrazioni, report e uso mobile.",
    combineTitle: "I sistemi possono essere combinati in base all'esigenza",
    combineDesc: "Non devi scegliere un solo servizio. Un catalogo può crescere verso l'e-commerce, un sistema appuntamenti può collegarsi al CRM e un pannello può diventare un sistema integrato su misura.",
    combinations: [
      ["Caffè / Ristorante", "Landing page + menu QR + ordine WhatsApp + pannello amministrativo"],
      ["Boutique / Vendita prodotti", "Catalogo + ordine WhatsApp + stock + evoluzione e-commerce"],
      ["Centro estetico / Clinica", "Sito di presentazione + appuntamenti + pannello clienti"],
      ["Grossista / Produttore", "Pannello B2B rivenditori + stock + ordini + integrazione"],
    ],
  },
  nl: {
    kicker: "Diensten",
    title: <>Meer dan een website: <span className="text-gray-500">verkoop, paneels en maatwerksystemen</span></>,
    desc: "Bedrijfswebsites, catalogi, WhatsApp-bestellingen, e-commerce, afspraken, CRM, voorraad, dealerpaneels, integraties, AI-automatisering en onderhoud kunnen volgens behoefte onder één dak worden gepland.",
    explain: "Project beschrijven",
    examples: "Live voorbeelden",
    featuredKicker: "Uitgelicht",
    featuredTitle: "De dienstenbasis met de meeste verkoopkans",
    detail: "Detail",
    example: "Voorbeeld",
    quote: "Offerte",
    categoriesKicker: "Categorieën",
    categoriesTitle: "Bekijk diensten volgens behoefte",
    forWho: "Voor wie",
    problem: "Opgelost probleem",
    inspect: "Details bekijken",
    liveExample: "Live voorbeeld",
    modulesTitle: "Wat kunnen we bouwen?",
    modulesDesc: "Klanten weten vaak niet exact hoe hun behoefte heet. Daarom kunnen diensten ook modulair worden gepland: eerst wordt de kritieke flow gekozen, daarna kunnen paneels, betalingen, integraties, rapportages en mobiel gebruik worden toegevoegd.",
    combineTitle: "Systemen kunnen volgens behoefte worden gecombineerd",
    combineDesc: "Je hoeft niet één dienst te kiezen. Een catalogus kan later groeien naar e-commerce, een afsprakensysteem kan koppelen met CRM en een beheerpaneel kan een geïntegreerd maatwerksysteem worden.",
    combinations: [
      ["Café / restaurant", "Landingpage + QR-menu + WhatsApp-bestelling + beheerpaneel"],
      ["Boutique / productverkoop", "Catalogus + WhatsApp-bestelling + voorraad + e-commerce-uitbreiding"],
      ["Schoonheidscentrum / kliniek", "Presentatiewebsite + afspraak + klantvolgpaneel"],
      ["Groothandel / fabrikant", "B2B-dealerpaneel + voorraad + orders + integratie"],
    ],
  },
  zh: {
    kicker: "服务",
    title: <>不只是网站：<span className="text-gray-500">销售、面板和定制系统</span></>,
    desc: "企业网站、目录、WhatsApp 订单、电商、预约、CRM、库存、经销商面板、集成、AI 自动化和维护都可以按需求在同一体系下规划。",
    explain: "描述项目",
    examples: "在线示例",
    featuredKicker: "精选",
    featuredTitle: "最有销售潜力的服务基础",
    detail: "详情",
    example: "示例",
    quote: "报价",
    categoriesKicker: "类别",
    categoriesTitle: "按需求浏览服务",
    forWho: "适合谁",
    problem: "解决的问题",
    inspect: "查看详情",
    liveExample: "在线示例",
    modulesTitle: "我们可以构建什么？",
    modulesDesc: "客户通常不知道自己的需求准确名称。因此服务也可以按模块规划：先选择关键流程，再加入面板、支付、集成、报告和移动端使用。",
    combineTitle: "系统可以按需求组合",
    combineDesc: "您不必只选择一项服务。目录可以发展为电商，预约系统可以连接 CRM，管理面板可以变成定制集成系统。",
    combinations: [
      ["咖啡馆 / 餐厅", "落地页 + QR 菜单 + WhatsApp 订单 + 管理面板"],
      ["精品店 / 产品销售", "目录 + WhatsApp 订单 + 库存 + 电商升级"],
      ["美容中心 / 诊所", "展示网站 + 预约 + 客户跟踪面板"],
      ["批发商 / 制造商", "B2B 经销商面板 + 库存 + 订单 + 集成"],
    ],
  },
};

export default function ServicesPageView() {
  const locale = getLocaleFromPath(usePathname() ?? "/");
  const copy = locale === "en" ? pageCopy.en : locale === "de" ? pageCopy.de : locale === "fr" ? pageCopy.fr : locale === "es" ? pageCopy.es : locale === "ar" ? pageCopy.ar : locale === "ru" ? pageCopy.ru : locale === "pt" ? pageCopy.pt : locale === "it" ? pageCopy.it : locale === "nl" ? pageCopy.nl : locale === "zh" ? pageCopy.zh : pageCopy.tr;
  const localizedServices = getLocalizedServices(servicesData, locale);
  const localizedCategories = getLocalizedServiceCategories(serviceCategories, locale);
  const featuredServices = getServicesBySlugs(featuredServiceSlugs, localizedServices);
  const serviceGroups = localizedCategories
    .map((category) => ({
      ...category,
      services: localizedServices.filter((service) => service.categorySlug === category.slug),
    }))
    .filter((group) => group.services.length > 0);
  const modulePool = Array.from(new Set(localizedServices.flatMap((service) => service.modules))).slice(0, 36);

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem disableOnMobile={false} className="mb-12 md:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">{copy.title}</h1>
        <p className="mobile-compact-text mt-6 max-w-4xl text-base md:text-xl leading-8 text-gray-400">{copy.desc}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LocalizedLink href="/contact?source=services" className="shimmer-button bg-white px-5 py-3 text-sm font-bold text-black">{copy.explain}</LocalizedLink>
          <LocalizedLink href="/projects" className="border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">{copy.examples}</LocalizedLink>
        </div>
      </RevealItem>

      {featuredServices.length > 0 && (
        <section className="mb-14 border-t border-white/10 pt-8">
          <RevealItem disableOnMobile={false} className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.featuredKicker}</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{copy.featuredTitle}</h2>
          </RevealItem>
          <div className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <RevealItem disableOnMobile={false} key={service.slug} className="premium-card mobile-compact-card group relative flex min-h-[14rem] flex-col overflow-hidden border border-white/10 bg-[rgba(9,26,49,0.92)] p-3 md:min-h-[18rem] md:p-5">
                <span className="card-sheen" aria-hidden="true" />
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{service.category}</p>
                  <h3 className="mt-3 text-base font-medium leading-6 text-white md:text-xl md:leading-7">{service.title}</h3>
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-400 md:line-clamp-none md:text-sm md:leading-6">{service.shortDesc}</p>
                </div>
                <div className="relative z-10 mt-auto grid grid-cols-1 gap-2 border-t border-white/10 pt-4 md:flex md:flex-wrap md:pt-5">
                  <LocalizedLink href={`/services/${service.slug}`} className="bg-white px-3 py-2 text-center text-xs font-bold text-black hover:bg-gray-200 md:px-4">{copy.detail}</LocalizedLink>
                  <LocalizedLink href={service.relatedProjects[0] ? `/projects/${service.relatedProjects[0]}` : "/projects"} className="hidden border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10 md:inline-block">{copy.example}</LocalizedLink>
                  <LocalizedLink href={`/contact?service=${service.slug}`} className="border border-white/20 px-3 py-2 text-center text-xs font-bold text-white hover:bg-white/10 md:px-4">{copy.quote}</LocalizedLink>
                </div>
              </RevealItem>
            ))}
          </div>
        </section>
      )}

      <section className="mb-14 border-t border-white/10 pt-8">
        <RevealItem disableOnMobile={false} className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.categoriesKicker}</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{copy.categoriesTitle}</h2>
        </RevealItem>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group) => (
            <RevealItem disableOnMobile={false} key={group.slug}>
              <a href={`#${group.slug}`} className="block h-full border border-white/10 bg-[#071225]/65 p-5 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium leading-7 text-white">{group.title}</h3>
                  <span className="shrink-0 border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-gray-500">{group.services.length}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">{group.description}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">{group.signal}</p>
              </a>
            </RevealItem>
          ))}
        </div>
      </section>

      <div className="grid gap-12">
        {serviceGroups.map((group) => (
          <section key={group.slug} id={group.slug} className="scroll-mt-28 border-t border-white/10 pt-8">
            <RevealItem disableOnMobile={false} className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{group.signal}</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{group.title}</h2>
              <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-gray-400">{group.description}</p>
            </RevealItem>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.services.map((service) => (
                <RevealItem disableOnMobile={false} key={service.slug} className="mobile-compact-card flex min-h-[21rem] flex-col justify-between border border-white/10 bg-[#071225]/72 p-5 md:p-6">
                  <div>
                    <h3 className="text-xl font-medium leading-8 text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{service.shortDesc}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">{copy.forWho}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{service.suitableFor.slice(0, 2).join(", ")}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">{copy.problem}</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">{service.problemSolved}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.modules.slice(0, 3).map((module) => <span key={module} className="border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400">{module}</span>)}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    <LocalizedLink href={`/services/${service.slug}`} className="bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-200">{copy.inspect}</LocalizedLink>
                    <LocalizedLink href={service.relatedProjects[0] ? `/projects/${service.relatedProjects[0]}` : "/projects"} className="border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10">{copy.liveExample}</LocalizedLink>
                    <LocalizedLink href={`/contact?service=${service.slug}`} className="border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10">{copy.explain}</LocalizedLink>
                  </div>
                </RevealItem>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14 border-t border-white/10 pt-8">
        <RevealItem disableOnMobile={false} className="premium-panel relative overflow-hidden border border-white/10 bg-[#071225]/78 p-5 md:p-8">
          <h2 className="text-2xl md:text-3xl font-medium text-white">{copy.modulesTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-7 text-gray-400">{copy.modulesDesc}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modulePool.map((module) => <span key={module} className="border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">{module}</span>)}
          </div>
        </RevealItem>
      </section>

      <section className="mt-8 border border-white/10 bg-[#071225]/65 p-5 md:p-8">
        <RevealItem disableOnMobile={false}>
          <h2 className="text-2xl md:text-3xl font-medium text-white">{copy.combineTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-7 text-gray-400">{copy.combineDesc}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.combinations.map(([title, description]) => (
              <div key={title} className="border border-white/10 bg-white/5 p-4">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </RevealItem>
      </section>
    </main>
  );
}
