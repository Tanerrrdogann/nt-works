import type { ServiceCategory, servicesData } from "@/data/services";
import type { ServiceType } from "@/types";

type ServiceItem = (typeof servicesData)[number];

const categoryText: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "Websites and Presentation",
    description: "Website solutions that present the brand, services, trust signals, and quote flow clearly.",
    signal: "Visibility and trust",
  },
  "satis-siparis": {
    title: "Catalog, Sales, and Orders",
    description: "Services that turn products, WhatsApp, stock, orders, dealer flows, and quotes into a sales system.",
    signal: "Sales and orders",
  },
  "panel-crm": {
    title: "Admin Panels, CRM, and Operations",
    description: "Business systems that collect scattered Excel, WhatsApp, and manual records into one management panel.",
    signal: "Operational control",
  },
  "randevu-rezervasyon": {
    title: "Appointments and Reservations",
    description: "Systems that organize date, time, availability, requests, reservations, and service selection.",
    signal: "Calendar and reservation",
  },
  entegrasyon: {
    title: "Integration Services",
    description: "Solutions that connect marketplaces, XML feeds, APIs, payment, cargo, and external services.",
    signal: "Connecting systems",
  },
  "ozel-yazilim-platform": {
    title: "Custom Software and Platforms",
    description: "Custom panels, platforms, and MVPs for workflows that ready-made tools cannot cover.",
    signal: "Custom workflow",
  },
  "ai-mobil": {
    title: "AI, Automation, and Mobile",
    description: "AI assistants, automation, mobile/webview apps, and customer messaging workflows.",
    signal: "Next-generation automation",
  },
  "bakim-destek": {
    title: "Maintenance and Support",
    description: "Post-delivery bug fixes, new modules, content updates, security checks, backup review, and development support.",
    signal: "Continuity",
  },
};

const categoryTextDe: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "Websites und Präsentation",
    description: "Website-Lösungen, die Marke, Leistungen, Vertrauenssignale und Anfragefluss klar darstellen.",
    signal: "Sichtbarkeit und Vertrauen",
  },
  "satis-siparis": {
    title: "Katalog, Verkauf und Bestellungen",
    description: "Leistungen, die Produkte, WhatsApp, Bestand, Bestellungen, Händlerabläufe und Angebote in ein Verkaufssystem bringen.",
    signal: "Verkauf und Bestellung",
  },
  "panel-crm": {
    title: "Admin-Panels, CRM und Operationen",
    description: "Geschäftssysteme, die verstreute Excel-, WhatsApp- und manuelle Einträge in einem Verwaltungspanel sammeln.",
    signal: "Operative Kontrolle",
  },
  "randevu-rezervasyon": {
    title: "Termine und Reservierungen",
    description: "Systeme für Datum, Uhrzeit, Verfügbarkeit, Anfragen, Reservierungen und Leistungsauswahl.",
    signal: "Kalender und Reservierung",
  },
  entegrasyon: {
    title: "Integrationsleistungen",
    description: "Lösungen, die Marktplätze, XML-Feeds, APIs, Zahlung, Versand und externe Dienste verbinden.",
    signal: "Systeme verbinden",
  },
  "ozel-yazilim-platform": {
    title: "Individuelle Software und Plattformen",
    description: "Eigene Panels, Plattformen und MVPs für Workflows, die Standardtools nicht abdecken.",
    signal: "Individueller Workflow",
  },
  "ai-mobil": {
    title: "KI, Automatisierung und Mobil",
    description: "KI-Assistenten, Automatisierung, Mobile-/Webview-Apps und Kundenkommunikationsabläufe.",
    signal: "Moderne Automatisierung",
  },
  "bakim-destek": {
    title: "Wartung und Support",
    description: "Fehlerkorrekturen, neue Module, Inhaltsupdates, Sicherheitschecks, Backup-Prüfung und Entwicklungssupport nach der Lieferung.",
    signal: "Kontinuität",
  },
};

const categoryTextFr: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "Sites web et présentation",
    description: "Solutions de site web qui présentent clairement la marque, les services, les signaux de confiance et le flux de demande.",
    signal: "Visibilité et confiance",
  },
  "satis-siparis": {
    title: "Catalogue, vente et commandes",
    description: "Services qui transforment produits, WhatsApp, stock, commandes, flux revendeurs et devis en système de vente.",
    signal: "Vente et commandes",
  },
  "panel-crm": {
    title: "Panneaux d'administration, CRM et opérations",
    description: "Systèmes métier qui rassemblent Excel, WhatsApp et les suivis manuels dans un seul panneau de gestion.",
    signal: "Contrôle opérationnel",
  },
  "randevu-rezervasyon": {
    title: "Rendez-vous et réservations",
    description: "Systèmes qui organisent date, heure, disponibilité, demandes, réservations et choix de service.",
    signal: "Calendrier et réservation",
  },
  entegrasyon: {
    title: "Services d'intégration",
    description: "Solutions qui connectent marketplaces, flux XML, API, paiement, livraison et services externes.",
    signal: "Connexion des systèmes",
  },
  "ozel-yazilim-platform": {
    title: "Logiciels sur mesure et plateformes",
    description: "Panneaux, plateformes et MVP sur mesure pour les workflows que les outils prêts à l'emploi ne couvrent pas.",
    signal: "Workflow sur mesure",
  },
  "ai-mobil": {
    title: "IA, automatisation et mobile",
    description: "Assistants IA, automatisations, applications mobile/webview et workflows de messagerie client.",
    signal: "Automatisation nouvelle génération",
  },
  "bakim-destek": {
    title: "Maintenance et support",
    description: "Corrections après livraison, nouveaux modules, mises à jour de contenu, contrôles sécurité, sauvegardes et support de développement.",
    signal: "Continuité",
  },
};

const categoryTextEs: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "Sitios web y presentación",
    description: "Soluciones web que presentan marca, servicios, señales de confianza y flujo de contacto con claridad.",
    signal: "Visibilidad y confianza",
  },
  "satis-siparis": {
    title: "Catálogo, ventas y pedidos",
    description: "Servicios que convierten productos, WhatsApp, stock, pedidos, distribuidores y propuestas en un sistema de venta.",
    signal: "Ventas y pedidos",
  },
  "panel-crm": {
    title: "Paneles, CRM y operaciones",
    description: "Sistemas empresariales que reúnen Excel, WhatsApp y registros manuales dispersos en un solo panel.",
    signal: "Control operativo",
  },
  "randevu-rezervasyon": {
    title: "Citas y reservas",
    description: "Sistemas que organizan fecha, hora, disponibilidad, solicitudes, reservas y selección de servicio.",
    signal: "Calendario y reserva",
  },
  entegrasyon: {
    title: "Servicios de integración",
    description: "Soluciones que conectan marketplaces, XML, API, pagos, envíos y servicios externos.",
    signal: "Conexión de sistemas",
  },
  "ozel-yazilim-platform": {
    title: "Software a medida y plataformas",
    description: "Paneles, plataformas y MVP a medida para flujos que las herramientas estándar no cubren.",
    signal: "Flujo a medida",
  },
  "ai-mobil": {
    title: "IA, automatización y móvil",
    description: "Asistentes IA, automatización, apps mobile/webview y flujos de mensajería con clientes.",
    signal: "Automatización moderna",
  },
  "bakim-destek": {
    title: "Mantenimiento y soporte",
    description: "Correcciones, nuevos módulos, actualizaciones de contenido, seguridad, copias y soporte posterior a la entrega.",
    signal: "Continuidad",
  },
};

const categoryTextAr: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "مواقع ويب وعرض",
    description: "حلول مواقع تعرض العلامة والخدمات وإشارات الثقة ومسار الطلب بوضوح.",
    signal: "ظهور وثقة",
  },
  "satis-siparis": {
    title: "كتالوج ومبيعات وطلبات",
    description: "خدمات تحول المنتجات وواتساب والمخزون والطلبات وتدفقات الموزعين والعروض إلى نظام بيع.",
    signal: "مبيعات وطلبات",
  },
  "panel-crm": {
    title: "لوحات إدارة وCRM وعمليات",
    description: "أنظمة تجمع Excel وWhatsApp والسجلات اليدوية المتفرقة في لوحة إدارة واحدة.",
    signal: "تحكم تشغيلي",
  },
  "randevu-rezervasyon": {
    title: "مواعيد وحجوزات",
    description: "أنظمة تنظم التاريخ والوقت والتوفر والطلبات والحجوزات واختيار الخدمة.",
    signal: "تقويم وحجز",
  },
  entegrasyon: {
    title: "خدمات تكامل",
    description: "حلول تربط marketplaces وXML وAPI والدفع والشحن والخدمات الخارجية.",
    signal: "ربط الأنظمة",
  },
  "ozel-yazilim-platform": {
    title: "برمجيات ومنصات مخصصة",
    description: "لوحات ومنصات وMVP مخصصة لتدفقات لا تغطيها الأدوات الجاهزة.",
    signal: "تدفق مخصص",
  },
  "ai-mobil": {
    title: "ذكاء اصطناعي وأتمتة وموبايل",
    description: "مساعدو IA وأتمتة وتطبيقات mobile/webview وتدفقات رسائل العملاء.",
    signal: "أتمتة حديثة",
  },
  "bakim-destek": {
    title: "صيانة ودعم",
    description: "إصلاحات بعد التسليم، وحدات جديدة، تحديث محتوى، فحوصات أمان، نسخ احتياطية ودعم تطوير.",
    signal: "استمرارية",
  },
};

const categoryTextRu: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": {
    title: "Сайты и презентация",
    description: "Решения для сайтов, которые понятно показывают бренд, услуги, доверие и поток заявки.",
    signal: "Видимость и доверие",
  },
  "satis-siparis": {
    title: "Каталог, продажи и заказы",
    description: "Услуги, которые превращают товары, WhatsApp, склад, заказы, дилеров и предложения в систему продаж.",
    signal: "Продажи и заказы",
  },
  "panel-crm": {
    title: "Админ-панели, CRM и операции",
    description: "Бизнес-системы, которые собирают разрозненные Excel, WhatsApp и ручные записи в одну панель управления.",
    signal: "Операционный контроль",
  },
  "randevu-rezervasyon": {
    title: "Запись и бронирование",
    description: "Системы, которые организуют дату, время, доступность, запросы, бронирования и выбор услуги.",
    signal: "Календарь и бронь",
  },
  entegrasyon: {
    title: "Интеграционные услуги",
    description: "Решения, которые соединяют marketplaces, XML feeds, API, оплату, доставку и внешние сервисы.",
    signal: "Соединение систем",
  },
  "ozel-yazilim-platform": {
    title: "Индивидуальное ПО и платформы",
    description: "Индивидуальные панели, платформы и MVP для workflow, которые готовые инструменты не покрывают.",
    signal: "Индивидуальный workflow",
  },
  "ai-mobil": {
    title: "AI, автоматизация и мобильные решения",
    description: "AI-ассистенты, автоматизация, mobile/webview приложения и клиентские messaging workflow.",
    signal: "Современная автоматизация",
  },
  "bakim-destek": {
    title: "Обслуживание и поддержка",
    description: "Исправления после сдачи, новые модули, обновления контента, security checks, backup review и поддержка разработки.",
    signal: "Непрерывность",
  },
};

const categoryTextPt: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": { title: "Sites e apresentação", description: "Soluções de site que apresentam marca, serviços, sinais de confiança e fluxo de proposta com clareza.", signal: "Visibilidade e confiança" },
  "satis-siparis": { title: "Catálogo, vendas e pedidos", description: "Serviços que transformam produtos, WhatsApp, estoque, pedidos, revendedores e propostas em um sistema de venda.", signal: "Vendas e pedidos" },
  "panel-crm": { title: "Painéis administrativos, CRM e operações", description: "Sistemas de negócio que reúnem Excel, WhatsApp e registros manuais dispersos em um painel de gestão.", signal: "Controle operacional" },
  "randevu-rezervasyon": { title: "Agendamentos e reservas", description: "Sistemas que organizam data, hora, disponibilidade, solicitações, reservas e escolha de serviço.", signal: "Calendário e reserva" },
  entegrasyon: { title: "Serviços de integração", description: "Soluções que conectam marketplaces, feeds XML, APIs, pagamento, envio e serviços externos.", signal: "Conexão de sistemas" },
  "ozel-yazilim-platform": { title: "Software sob medida e plataformas", description: "Painéis, plataformas e MVPs sob medida para fluxos que ferramentas prontas não cobrem.", signal: "Fluxo personalizado" },
  "ai-mobil": { title: "IA, automação e mobile", description: "Assistentes de IA, automação, apps mobile/webview e fluxos de mensagens com clientes.", signal: "Automação moderna" },
  "bakim-destek": { title: "Manutenção e suporte", description: "Correções pós-entrega, novos módulos, atualizações de conteúdo, verificações de segurança, revisão de backup e suporte de desenvolvimento.", signal: "Continuidade" },
};

const categoryTextIt: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": { title: "Siti web e presentazione", description: "Soluzioni web che presentano brand, servizi, segnali di fiducia e flusso di preventivo con chiarezza.", signal: "Visibilità e fiducia" },
  "satis-siparis": { title: "Catalogo, vendite e ordini", description: "Servizi che trasformano prodotti, WhatsApp, stock, ordini, rivenditori e preventivi in un sistema di vendita.", signal: "Vendite e ordini" },
  "panel-crm": { title: "Pannelli amministrativi, CRM e operazioni", description: "Sistemi aziendali che raccolgono Excel, WhatsApp e registri manuali dispersi in un pannello di gestione.", signal: "Controllo operativo" },
  "randevu-rezervasyon": { title: "Appuntamenti e prenotazioni", description: "Sistemi che organizzano data, ora, disponibilità, richieste, prenotazioni e scelta del servizio.", signal: "Calendario e prenotazione" },
  entegrasyon: { title: "Servizi di integrazione", description: "Soluzioni che collegano marketplace, feed XML, API, pagamenti, spedizioni e servizi esterni.", signal: "Connessione sistemi" },
  "ozel-yazilim-platform": { title: "Software su misura e piattaforme", description: "Pannelli, piattaforme e MVP su misura per flussi che gli strumenti pronti non coprono.", signal: "Flusso personalizzato" },
  "ai-mobil": { title: "IA, automazione e mobile", description: "Assistenti IA, automazione, app mobile/webview e flussi di messaggistica con clienti.", signal: "Automazione moderna" },
  "bakim-destek": { title: "Manutenzione e supporto", description: "Correzioni post-consegna, nuovi moduli, aggiornamenti contenuti, controlli di sicurezza, revisione backup e supporto sviluppo.", signal: "Continuità" },
};

const categoryTextNl: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": { title: "Websites en presentatie", description: "Websiteoplossingen die merk, diensten, vertrouwen en offerteflow duidelijk presenteren.", signal: "Zichtbaarheid en vertrouwen" },
  "satis-siparis": { title: "Catalogus, verkoop en orders", description: "Diensten die producten, WhatsApp, voorraad, orders, dealers en offertes omzetten in een verkoopsysteem.", signal: "Verkoop en orders" },
  "panel-crm": { title: "Beheerpaneels, CRM en operatie", description: "Bedrijfssystemen die verspreide Excel-, WhatsApp- en handmatige registraties samenbrengen in één beheerpaneel.", signal: "Operationele controle" },
  "randevu-rezervasyon": { title: "Afspraken en reserveringen", description: "Systemen die datum, tijd, beschikbaarheid, aanvragen, reserveringen en dienstkeuze organiseren.", signal: "Agenda en reservering" },
  entegrasyon: { title: "Integratiediensten", description: "Oplossingen die marketplaces, XML-feeds, API's, betaling, verzending en externe diensten verbinden.", signal: "Systemen koppelen" },
  "ozel-yazilim-platform": { title: "Maatwerksoftware en platforms", description: "Maatwerkpaneels, platforms en MVP's voor workflows die standaardtools niet afdekken.", signal: "Maatwerkworkflow" },
  "ai-mobil": { title: "AI, automatisering en mobiel", description: "AI-assistenten, automatisering, mobile/webview-apps en klantcommunicatieflows.", signal: "Moderne automatisering" },
  "bakim-destek": { title: "Onderhoud en support", description: "Bugfixes na oplevering, nieuwe modules, contentupdates, veiligheidschecks, backupcontrole en ontwikkelsupport.", signal: "Continuïteit" },
};

const categoryTextZh: Record<string, Pick<ServiceCategory, "title" | "description" | "signal">> = {
  "web-tanitim": { title: "网站与展示", description: "清晰展示品牌、服务、信任信号和询盘流程的网站解决方案。", signal: "可见性和信任" },
  "satis-siparis": { title: "目录、销售和订单", description: "把产品、WhatsApp、库存、订单、经销商流程和报价转化为销售系统的服务。", signal: "销售和订单" },
  "panel-crm": { title: "管理面板、CRM 和运营", description: "把分散的 Excel、WhatsApp 和手动记录集中到一个管理面板的业务系统。", signal: "运营控制" },
  "randevu-rezervasyon": { title: "预约和预订", description: "组织日期、时间、可用性、请求、预订和服务选择的系统。", signal: "日历和预订" },
  entegrasyon: { title: "集成服务", description: "连接 marketplace、XML feed、API、支付、物流和外部服务的解决方案。", signal: "连接系统" },
  "ozel-yazilim-platform": { title: "定制软件和平台", description: "为现成工具无法覆盖的工作流开发定制面板、平台和 MVP。", signal: "定制工作流" },
  "ai-mobil": { title: "AI、自动化和移动端", description: "AI 助手、自动化、移动/webview 应用和客户消息工作流。", signal: "新一代自动化" },
  "bakim-destek": { title: "维护和支持", description: "交付后的 bug 修复、新模块、内容更新、安全检查、备份检查和开发支持。", signal: "持续性" },
};

const serviceTitles: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Corporate and Presentation Website", shortDesc: "Present your company, services, trust signals, and contact channels through a professional website." },
  "landing-page-satis-sayfasi": { title: "Landing Page / Sales Page", shortDesc: "A conversion-focused page for a single offer, campaign, product, service, or advertising flow." },
  "hizmet-sitesi": { title: "Service Website", shortDesc: "A quote-focused website for consultants, clinics, agencies, local services, trainers, and service businesses." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfolio / Personal Brand Website", shortDesc: "Show your expertise, projects, resume, and contact channels in one professional place." },
  "seo-blog-bilgi-merkezi": { title: "SEO Blog / Knowledge Base Setup", shortDesc: "Create a structured content center that supports organic visibility and internal linking." },
  "urun-katalog-whatsapp-siparis": { title: "Product Catalog Website", shortDesc: "Display products clearly and move customer demand into WhatsApp or quote flows." },
  "whatsapp-siparis-sistemi": { title: "WhatsApp Order System", shortDesc: "Let customers select products or services and send structured requests through WhatsApp." },
  "qr-menu-sistemi": { title: "QR Menu System", shortDesc: "A mobile-friendly digital menu system for restaurants, cafes, and food businesses." },
  "e-ticaret-satis-sistemleri": { title: "E-Commerce Website", shortDesc: "A sales system with product listing, cart, order tracking, stock, and management needs." },
  "siparis-takip-sistemi": { title: "Order Tracking System", shortDesc: "Track customer orders, statuses, notes, delivery stages, and operational follow-up in one panel." },
  "stok-takip-sistemi": { title: "Stock Tracking System", shortDesc: "Manage product quantities, stock movements, warnings, and basic inventory control." },
  "b2b-bayi-siparis-sistemi": { title: "B2B Dealer Order System", shortDesc: "A dealer-focused order flow with customer-specific products, prices, and panel access." },
  "bayi-distributor-paneli": { title: "Dealer / Distributor Panel", shortDesc: "A management panel for dealer accounts, distributor requests, product lists, and order workflows." },
  "teklif-alma-sistemi": { title: "Quote Request System", shortDesc: "Collect structured quote requests with the right fields, routing, and follow-up process." },
  "teklif-takip-sistemi": { title: "Quote Tracking System", shortDesc: "Track quotes, statuses, customer responses, notes, and follow-up actions in one place." },
  "admin-panel-isletme-yonetimi": { title: "Admin Panel Development", shortDesc: "Build a custom management panel for records, users, products, orders, and business operations." },
  "isletme-yonetim-paneli": { title: "Business Management Panel", shortDesc: "Collect daily business operations, records, tasks, and reports inside one manageable panel." },
  "crm-musteri-takip-sistemi": { title: "CRM Customer Tracking System", shortDesc: "Track customers, notes, conversations, offers, statuses, and follow-up tasks." },
  "lead-takip-sistemi": { title: "Lead Tracking System", shortDesc: "Manage incoming leads, sources, stages, owners, and conversion follow-up." },
  "gorev-is-takip-paneli": { title: "Task / Work Tracking Panel", shortDesc: "Plan tasks, responsibilities, statuses, deadlines, and operational work tracking." },
  "dosya-belge-yonetim-sistemi": { title: "File / Document Management System", shortDesc: "Organize files, documents, categories, customer records, and access needs." },
  "raporlama-dashboard-sistemi": { title: "Reporting Dashboard System", shortDesc: "Turn operational data into dashboards, metrics, summaries, and decision screens." },
  "randevu-rezervasyon-sistemleri": { title: "Appointment System", shortDesc: "Let customers choose service, date, time, and contact details through a clear appointment flow." },
  "rezervasyon-sistemi": { title: "Reservation System", shortDesc: "Manage availability, reservations, guest details, status tracking, and request collection." },
  "kapora-on-talep-sistemi": { title: "Deposit / Pre-Request Collection System", shortDesc: "Collect pre-requests, deposits, reservation intent, and customer information in an organized flow." },
  "pazaryeri-entegrasyonu": { title: "Marketplace Integration", shortDesc: "Plan marketplace product transfer, stock-price updates, order sync, and data matching workflows." },
  "xml-entegrasyonu": { title: "XML Integration", shortDesc: "Import, update, match, and control product data from XML feeds." },
  "api-entegrasyonu": { title: "API Integration", shortDesc: "Connect systems through APIs for product, stock, order, customer, payment, or operational data." },
  "odeme-kargo-servis-entegrasyonu": { title: "Payment / Cargo / External Service Integration", shortDesc: "Connect payment, shipping, SMS, email, WhatsApp, or third-party service workflows." },
  "ozel-yazilim-premium-sistemler": { title: "Custom Software Development", shortDesc: "Design and build custom software when standard websites or tools are not enough." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Software Systems for Small Businesses", shortDesc: "Practical panels and workflows for small businesses that need better daily control." },
  "saas-mvp-gelistirme": { title: "SaaS MVP Development", shortDesc: "Create a first usable SaaS product with core screens, user flow, and scalable foundations." },
  "mini-platform-uyelikli-sistem": { title: "Mini Platform / Membership System", shortDesc: "Build a member-based platform with login, content, records, roles, and controlled access." },
  "whatsapp-ai-asistan": { title: "WhatsApp AI Assistant", shortDesc: "Plan AI-supported WhatsApp workflows for customer questions, routing, and response support." },
  "yapay-zeka-isletme-otomasyonlari": { title: "AI and Business Automation", shortDesc: "Automate repetitive business tasks, messages, records, and decision flows with AI-supported systems." },
  "mobil-webview-uygulama": { title: "Mobile App / Webview App", shortDesc: "Turn a web system into a mobile-friendly app experience when a native-like presence is needed." },
  "bakim-gelistirme-destek-hizmeti": { title: "Maintenance, Development, and Support", shortDesc: "Continue improving delivered systems with fixes, updates, new modules, and technical support." },
};

const serviceTitlesDe: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Unternehmens- und Präsentationswebsite", shortDesc: "Präsentieren Sie Unternehmen, Leistungen, Vertrauenssignale und Kontaktwege über eine professionelle Website." },
  "landing-page-satis-sayfasi": { title: "Landingpage / Verkaufsseite", shortDesc: "Eine conversion-orientierte Seite für ein Angebot, eine Kampagne, ein Produkt, eine Leistung oder einen Anzeigenfluss." },
  "hizmet-sitesi": { title: "Leistungswebsite", shortDesc: "Eine anfrageorientierte Website für Berater, Kliniken, Agenturen, lokale Dienstleister, Trainer und Serviceunternehmen." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfolio- / Personal-Brand-Website", shortDesc: "Zeigen Sie Expertise, Projekte, Lebenslauf und Kontaktwege an einem professionellen Ort." },
  "seo-blog-bilgi-merkezi": { title: "SEO-Blog / Wissensbereich", shortDesc: "Ein strukturierter Inhaltsbereich, der organische Sichtbarkeit und interne Verlinkung unterstützt." },
  "urun-katalog-whatsapp-siparis": { title: "Produktkatalog-Website", shortDesc: "Produkte klar darstellen und Kundenanfragen in WhatsApp- oder Angebotsabläufe führen." },
  "whatsapp-siparis-sistemi": { title: "WhatsApp-Bestellsystem", shortDesc: "Kunden wählen Produkte oder Leistungen aus und senden strukturierte Anfragen über WhatsApp." },
  "qr-menu-sistemi": { title: "QR-Menü-System", shortDesc: "Ein mobilfreundliches digitales Menüsystem für Restaurants, Cafes und Food-Unternehmen." },
  "e-ticaret-satis-sistemleri": { title: "E-Commerce-Website", shortDesc: "Ein Verkaufssystem mit Produktliste, Warenkorb, Bestellverfolgung, Bestand und Verwaltung." },
  "siparis-takip-sistemi": { title: "Bestellverfolgungssystem", shortDesc: "Kundenbestellungen, Status, Notizen, Lieferphasen und operative Nachverfolgung in einem Panel verfolgen." },
  "stok-takip-sistemi": { title: "Bestandsverfolgungssystem", shortDesc: "Produktmengen, Bestandsbewegungen, Warnungen und grundlegende Lagerkontrolle verwalten." },
  "b2b-bayi-siparis-sistemi": { title: "B2B-Händlerbestellsystem", shortDesc: "Ein händlerorientierter Bestellablauf mit kundenspezifischen Produkten, Preisen und Panel-Zugang." },
  "bayi-distributor-paneli": { title: "Händler- / Distributor-Panel", shortDesc: "Ein Verwaltungspanel für Händlerkonten, Distributoranfragen, Produktlisten und Bestellabläufe." },
  "teklif-alma-sistemi": { title: "Angebotsanfrage-System", shortDesc: "Strukturierte Angebotsanfragen mit passenden Feldern, Weiterleitung und Nachverfolgung sammeln." },
  "teklif-takip-sistemi": { title: "Angebotsverfolgungssystem", shortDesc: "Angebote, Status, Kundenantworten, Notizen und Follow-up-Aktionen an einem Ort verfolgen." },
  "admin-panel-isletme-yonetimi": { title: "Admin-Panel-Entwicklung", shortDesc: "Ein eigenes Verwaltungspanel für Einträge, Nutzer, Produkte, Bestellungen und Geschäftsoperationen bauen." },
  "isletme-yonetim-paneli": { title: "Unternehmensverwaltungspanel", shortDesc: "Tägliche Geschäftsabläufe, Einträge, Aufgaben und Berichte in einem verwaltbaren Panel sammeln." },
  "crm-musteri-takip-sistemi": { title: "CRM-Kundenverfolgungssystem", shortDesc: "Kunden, Notizen, Gespräche, Angebote, Status und Follow-up-Aufgaben verfolgen." },
  "lead-takip-sistemi": { title: "Lead-Verfolgungssystem", shortDesc: "Eingehende Leads, Quellen, Phasen, Verantwortliche und Conversion-Nachverfolgung verwalten." },
  "gorev-is-takip-paneli": { title: "Aufgaben- / Arbeitsverfolgungspanel", shortDesc: "Aufgaben, Verantwortlichkeiten, Status, Fristen und operative Arbeit planen und verfolgen." },
  "dosya-belge-yonetim-sistemi": { title: "Datei- / Dokumentenmanagementsystem", shortDesc: "Dateien, Dokumente, Kategorien, Kundeneinträge und Zugriffsanforderungen organisieren." },
  "raporlama-dashboard-sistemi": { title: "Reporting-Dashboard-System", shortDesc: "Operative Daten in Dashboards, Kennzahlen, Zusammenfassungen und Entscheidungsscreens verwandeln." },
  "randevu-rezervasyon-sistemleri": { title: "Terminsystem", shortDesc: "Kunden wählen Leistung, Datum, Uhrzeit und Kontaktdaten über einen klaren Terminablauf." },
  "rezervasyon-sistemi": { title: "Reservierungssystem", shortDesc: "Verfügbarkeit, Reservierungen, Gästedaten, Statusverfolgung und Anfragen verwalten." },
  "kapora-on-talep-sistemi": { title: "Anzahlungs- / Voranfrage-System", shortDesc: "Voranfragen, Anzahlungen, Reservierungsabsichten und Kundendaten strukturiert sammeln." },
  "pazaryeri-entegrasyonu": { title: "Marktplatz-Integration", shortDesc: "Produktübertragung, Preis-/Bestandsupdates, Bestellsynchronisierung und Datenabgleich für Marktplätze planen." },
  "xml-entegrasyonu": { title: "XML-Integration", shortDesc: "Produktdaten aus XML-Feeds importieren, aktualisieren, abgleichen und kontrollieren." },
  "api-entegrasyonu": { title: "API-Integration", shortDesc: "Systeme über APIs für Produkt-, Bestands-, Bestell-, Kunden-, Zahlungs- oder operative Daten verbinden." },
  "odeme-kargo-servis-entegrasyonu": { title: "Zahlungs- / Versand- / externe Service-Integration", shortDesc: "Zahlung, Versand, SMS, E-Mail, WhatsApp oder Drittanbieter-Workflows verbinden." },
  "ozel-yazilim-premium-sistemler": { title: "Individuelle Softwareentwicklung", shortDesc: "Individuelle Software entwerfen und entwickeln, wenn Standardwebsites oder Tools nicht ausreichen." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Softwaresysteme für kleine Unternehmen", shortDesc: "Praktische Panels und Workflows für kleine Unternehmen, die mehr Kontrolle im Alltag brauchen." },
  "saas-mvp-gelistirme": { title: "SaaS-MVP-Entwicklung", shortDesc: "Ein erstes nutzbares SaaS-Produkt mit Kernscreen, Nutzerfluss und skalierbarer Grundlage erstellen." },
  "mini-platform-uyelikli-sistem": { title: "Mini-Plattform / Mitgliedersystem", shortDesc: "Eine mitgliederbasierte Plattform mit Login, Inhalten, Einträgen, Rollen und kontrolliertem Zugriff bauen." },
  "whatsapp-ai-asistan": { title: "WhatsApp-KI-Assistent", shortDesc: "KI-gestützte WhatsApp-Abläufe für Kundenfragen, Weiterleitung und Antwortunterstützung planen." },
  "yapay-zeka-isletme-otomasyonlari": { title: "KI- und Unternehmensautomatisierung", shortDesc: "Wiederkehrende Aufgaben, Nachrichten, Einträge und Entscheidungsflüsse mit KI-gestützten Systemen automatisieren." },
  "mobil-webview-uygulama": { title: "Mobile App / Webview-App", shortDesc: "Ein Websystem in ein mobilfreundliches App-Erlebnis verwandeln, wenn eine App-Präsenz nötig ist." },
  "bakim-gelistirme-destek-hizmeti": { title: "Wartung, Entwicklung und Support", shortDesc: "Gelieferte Systeme mit Korrekturen, Updates, neuen Modulen und technischem Support weiter verbessern." },
};

const serviceTitlesFr: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Site web d'entreprise et de présentation", shortDesc: "Présentez votre entreprise, vos services, vos signaux de confiance et vos canaux de contact avec un site professionnel." },
  "landing-page-satis-sayfasi": { title: "Landing page / page de vente", shortDesc: "Une page orientée conversion pour une offre, campagne, produit, service ou flux publicitaire précis." },
  "hizmet-sitesi": { title: "Site de services", shortDesc: "Un site orienté demande de devis pour consultants, cliniques, agences, services locaux, formateurs et entreprises de service." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfolio / site de marque personnelle", shortDesc: "Présentez votre expertise, vos projets, votre CV et vos canaux de contact dans un espace professionnel." },
  "seo-blog-bilgi-merkezi": { title: "Blog SEO / centre de connaissances", shortDesc: "Créez un centre de contenu structuré qui soutient la visibilité organique et le maillage interne." },
  "urun-katalog-whatsapp-siparis": { title: "Site catalogue produit", shortDesc: "Affichez les produits clairement et dirigez la demande client vers WhatsApp ou un flux de devis." },
  "whatsapp-siparis-sistemi": { title: "Système de commande WhatsApp", shortDesc: "Permettez aux clients de choisir produits ou services et d'envoyer des demandes structurées via WhatsApp." },
  "qr-menu-sistemi": { title: "Système de menu QR", shortDesc: "Un système de menu numérique adapté au mobile pour restaurants, cafés et entreprises alimentaires." },
  "e-ticaret-satis-sistemleri": { title: "Site e-commerce", shortDesc: "Un système de vente avec liste produit, panier, suivi des commandes, stock et besoins de gestion." },
  "siparis-takip-sistemi": { title: "Système de suivi des commandes", shortDesc: "Suivez commandes client, statuts, notes, étapes de livraison et suivi opérationnel dans un seul panneau." },
  "stok-takip-sistemi": { title: "Système de suivi de stock", shortDesc: "Gérez quantités produit, mouvements de stock, alertes et contrôle d'inventaire de base." },
  "b2b-bayi-siparis-sistemi": { title: "Système de commande revendeur B2B", shortDesc: "Un flux de commande orienté revendeurs avec produits, prix et accès panneau spécifiques au client." },
  "bayi-distributor-paneli": { title: "Panneau revendeur / distributeur", shortDesc: "Un panneau de gestion pour comptes revendeurs, demandes distributeurs, listes produit et workflows de commande." },
  "teklif-alma-sistemi": { title: "Système de demande de devis", shortDesc: "Collectez des demandes de devis structurées avec les bons champs, la bonne redirection et le suivi." },
  "teklif-takip-sistemi": { title: "Système de suivi des devis", shortDesc: "Suivez devis, statuts, réponses client, notes et actions de relance au même endroit." },
  "admin-panel-isletme-yonetimi": { title: "Développement de panneau d'administration", shortDesc: "Construisez un panneau de gestion sur mesure pour enregistrements, utilisateurs, produits, commandes et opérations." },
  "isletme-yonetim-paneli": { title: "Panneau de gestion d'entreprise", shortDesc: "Regroupez opérations quotidiennes, enregistrements, tâches et rapports dans un panneau gérable." },
  "crm-musteri-takip-sistemi": { title: "CRM et suivi client", shortDesc: "Suivez clients, notes, conversations, offres, statuts et tâches de relance." },
  "lead-takip-sistemi": { title: "Système de suivi des leads", shortDesc: "Gérez leads entrants, sources, étapes, responsables et suivi de conversion." },
  "gorev-is-takip-paneli": { title: "Panneau de suivi des tâches / travaux", shortDesc: "Planifiez tâches, responsabilités, statuts, échéances et suivi opérationnel." },
  "dosya-belge-yonetim-sistemi": { title: "Système de gestion de fichiers / documents", shortDesc: "Organisez fichiers, documents, catégories, dossiers client et besoins d'accès." },
  "raporlama-dashboard-sistemi": { title: "Système de tableau de bord reporting", shortDesc: "Transformez les données opérationnelles en tableaux de bord, indicateurs, résumés et écrans de décision." },
  "randevu-rezervasyon-sistemleri": { title: "Système de rendez-vous", shortDesc: "Permettez aux clients de choisir service, date, heure et coordonnées via un flux clair." },
  "rezervasyon-sistemi": { title: "Système de réservation", shortDesc: "Gérez disponibilité, réservations, informations invité, suivi de statut et collecte de demandes." },
  "kapora-on-talep-sistemi": { title: "Système d'acompte / pré-demande", shortDesc: "Collectez pré-demandes, acomptes, intention de réservation et informations client dans un flux organisé." },
  "pazaryeri-entegrasyonu": { title: "Intégration marketplace", shortDesc: "Planifiez transfert produit, mises à jour stock/prix, synchronisation commandes et correspondance de données marketplace." },
  "xml-entegrasyonu": { title: "Intégration XML", shortDesc: "Importez, mettez à jour, associez et contrôlez les données produit à partir de flux XML." },
  "api-entegrasyonu": { title: "Intégration API", shortDesc: "Connectez les systèmes via API pour produits, stock, commandes, clients, paiement ou données opérationnelles." },
  "odeme-kargo-servis-entegrasyonu": { title: "Intégration paiement / livraison / service externe", shortDesc: "Connectez workflows de paiement, livraison, SMS, e-mail, WhatsApp ou services tiers." },
  "ozel-yazilim-premium-sistemler": { title: "Développement logiciel sur mesure", shortDesc: "Concevez et développez un logiciel sur mesure lorsque les sites ou outils standards ne suffisent pas." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Systèmes logiciels pour petites entreprises", shortDesc: "Panneaux et workflows pratiques pour petites entreprises ayant besoin de mieux contrôler le quotidien." },
  "saas-mvp-gelistirme": { title: "Développement SaaS MVP", shortDesc: "Créez un premier produit SaaS utilisable avec écrans clés, parcours utilisateur et bases évolutives." },
  "mini-platform-uyelikli-sistem": { title: "Mini plateforme / système d'adhésion", shortDesc: "Construisez une plateforme avec connexion, contenus, enregistrements, rôles et accès contrôlé." },
  "whatsapp-ai-asistan": { title: "Assistant IA WhatsApp", shortDesc: "Planifiez des workflows WhatsApp assistés par IA pour questions client, routage et aide à la réponse." },
  "yapay-zeka-isletme-otomasyonlari": { title: "IA et automatisations d'entreprise", shortDesc: "Automatisez tâches répétitives, messages, enregistrements et décisions avec des systèmes assistés par IA." },
  "mobil-webview-uygulama": { title: "Application mobile / webview", shortDesc: "Transformez un système web en expérience mobile quand une présence de type application est nécessaire." },
  "bakim-gelistirme-destek-hizmeti": { title: "Maintenance, développement et support", shortDesc: "Continuez à améliorer les systèmes livrés avec corrections, mises à jour, nouveaux modules et support technique." },
};

const serviceTitlesEs: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Sitio web corporativo y de presentación", shortDesc: "Presenta tu empresa, servicios, señales de confianza y canales de contacto con un sitio profesional." },
  "landing-page-satis-sayfasi": { title: "Landing page / página de ventas", shortDesc: "Una página orientada a conversión para una oferta, campaña, producto, servicio o flujo publicitario." },
  "hizmet-sitesi": { title: "Sitio web de servicios", shortDesc: "Un sitio orientado a solicitudes para consultores, clínicas, agencias, servicios locales y negocios de servicio." },
  "portfoy-kisisel-marka-sitesi": { title: "Portafolio / sitio de marca personal", shortDesc: "Muestra experiencia, proyectos, CV y canales de contacto en un espacio profesional." },
  "seo-blog-bilgi-merkezi": { title: "Blog SEO / centro de conocimiento", shortDesc: "Crea un centro de contenido estructurado que apoya visibilidad orgánica e interlinking." },
  "urun-katalog-whatsapp-siparis": { title: "Sitio de catálogo de productos", shortDesc: "Muestra productos con claridad y lleva la demanda del cliente a WhatsApp o a una propuesta." },
  "whatsapp-siparis-sistemi": { title: "Sistema de pedidos por WhatsApp", shortDesc: "Permite que clientes elijan productos o servicios y envíen solicitudes estructuradas por WhatsApp." },
  "qr-menu-sistemi": { title: "Sistema de menú QR", shortDesc: "Un menú digital compatible con móvil para restaurantes, cafeterías y negocios de comida." },
  "e-ticaret-satis-sistemleri": { title: "Sitio e-commerce", shortDesc: "Sistema de venta con listado de productos, carrito, seguimiento de pedidos, stock y gestión." },
  "siparis-takip-sistemi": { title: "Sistema de seguimiento de pedidos", shortDesc: "Sigue pedidos, estados, notas, etapas de entrega y operación desde un solo panel." },
  "stok-takip-sistemi": { title: "Sistema de seguimiento de stock", shortDesc: "Gestiona cantidades, movimientos de stock, alertas y control básico de inventario." },
  "b2b-bayi-siparis-sistemi": { title: "Sistema de pedidos B2B para distribuidores", shortDesc: "Flujo de pedidos para distribuidores con productos, precios y acceso de panel específicos." },
  "bayi-distributor-paneli": { title: "Panel de distribuidor / revendedor", shortDesc: "Panel para cuentas de distribuidores, solicitudes, listas de productos y flujos de pedido." },
  "teklif-alma-sistemi": { title: "Sistema de solicitud de propuesta", shortDesc: "Recoge solicitudes estructuradas con campos, enrutamiento y seguimiento adecuados." },
  "teklif-takip-sistemi": { title: "Sistema de seguimiento de propuestas", shortDesc: "Sigue propuestas, estados, respuestas de clientes, notas y acciones posteriores en un lugar." },
  "admin-panel-isletme-yonetimi": { title: "Desarrollo de panel de administración", shortDesc: "Construye un panel a medida para registros, usuarios, productos, pedidos y operaciones." },
  "isletme-yonetim-paneli": { title: "Panel de gestión empresarial", shortDesc: "Reúne operaciones diarias, registros, tareas y reportes en un panel gestionable." },
  "crm-musteri-takip-sistemi": { title: "CRM y seguimiento de clientes", shortDesc: "Sigue clientes, notas, conversaciones, ofertas, estados y tareas de seguimiento." },
  "lead-takip-sistemi": { title: "Sistema de seguimiento de leads", shortDesc: "Gestiona leads entrantes, fuentes, etapas, responsables y seguimiento de conversión." },
  "gorev-is-takip-paneli": { title: "Panel de tareas / seguimiento de trabajo", shortDesc: "Planifica tareas, responsables, estados, fechas límite y seguimiento operativo." },
  "dosya-belge-yonetim-sistemi": { title: "Sistema de gestión de archivos / documentos", shortDesc: "Organiza archivos, documentos, categorías, registros de clientes y necesidades de acceso." },
  "raporlama-dashboard-sistemi": { title: "Sistema de dashboard y reportes", shortDesc: "Convierte datos operativos en dashboards, métricas, resúmenes y pantallas de decisión." },
  "randevu-rezervasyon-sistemleri": { title: "Sistema de citas", shortDesc: "Permite elegir servicio, fecha, hora y datos de contacto mediante un flujo claro." },
  "rezervasyon-sistemi": { title: "Sistema de reservas", shortDesc: "Gestiona disponibilidad, reservas, datos de invitados, estados y solicitudes." },
  "kapora-on-talep-sistemi": { title: "Sistema de depósito / pre-solicitud", shortDesc: "Recoge pre-solicitudes, depósitos, intención de reserva y datos del cliente en un flujo ordenado." },
  "pazaryeri-entegrasyonu": { title: "Integración marketplace", shortDesc: "Planifica transferencia de productos, stock/precio, sincronización de pedidos y mapeo de datos." },
  "xml-entegrasyonu": { title: "Integración XML", shortDesc: "Importa, actualiza, empareja y controla datos de productos desde feeds XML." },
  "api-entegrasyonu": { title: "Integración API", shortDesc: "Conecta sistemas por API para productos, stock, pedidos, clientes, pagos u operación." },
  "odeme-kargo-servis-entegrasyonu": { title: "Integración de pagos / envíos / servicios externos", shortDesc: "Conecta pagos, envíos, SMS, e-mail, WhatsApp o flujos de terceros." },
  "ozel-yazilim-premium-sistemler": { title: "Desarrollo de software a medida", shortDesc: "Diseña y desarrolla software a medida cuando un sitio o herramienta estándar no basta." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Sistemas de software para pequeñas empresas", shortDesc: "Paneles y flujos prácticos para pequeñas empresas que necesitan más control diario." },
  "saas-mvp-gelistirme": { title: "Desarrollo de SaaS MVP", shortDesc: "Crea un primer producto SaaS usable con pantallas clave, flujo de usuario y base escalable." },
  "mini-platform-uyelikli-sistem": { title: "Mini plataforma / sistema con membresía", shortDesc: "Construye una plataforma con login, contenido, registros, roles y acceso controlado." },
  "whatsapp-ai-asistan": { title: "Asistente IA para WhatsApp", shortDesc: "Planifica flujos de WhatsApp con IA para preguntas de clientes, enrutamiento y apoyo de respuesta." },
  "yapay-zeka-isletme-otomasyonlari": { title: "IA y automatizaciones empresariales", shortDesc: "Automatiza tareas repetitivas, mensajes, registros y decisiones con sistemas apoyados por IA." },
  "mobil-webview-uygulama": { title: "Aplicación móvil / webview", shortDesc: "Convierte un sistema web en una experiencia móvil cuando se necesita presencia tipo app." },
  "bakim-gelistirme-destek-hizmeti": { title: "Mantenimiento, desarrollo y soporte", shortDesc: "Sigue mejorando sistemas entregados con correcciones, actualizaciones, nuevos módulos y soporte técnico." },
};

const serviceTitlesAr: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "موقع شركة وتعريف", shortDesc: "اعرض شركتك وخدماتك وإشارات الثقة وقنوات التواصل عبر موقع احترافي." },
  "landing-page-satis-sayfasi": { title: "Landing page / صفحة مبيعات", shortDesc: "صفحة مركزة على التحويل لعرض واحد أو حملة أو منتج أو خدمة أو إعلان." },
  "hizmet-sitesi": { title: "موقع خدمات", shortDesc: "موقع موجه لطلبات العروض للمستشارين والعيادات والوكالات والخدمات المحلية والمدربين." },
  "portfoy-kisisel-marka-sitesi": { title: "موقع بورتفوليو / علامة شخصية", shortDesc: "اعرض خبرتك ومشاريعك وسيرتك وقنوات التواصل في مكان احترافي واحد." },
  "seo-blog-bilgi-merkezi": { title: "مدونة SEO / مركز معرفة", shortDesc: "إنشاء مركز محتوى منظم يدعم الظهور العضوي والروابط الداخلية." },
  "urun-katalog-whatsapp-siparis": { title: "موقع كتالوج منتجات", shortDesc: "اعرض المنتجات بوضوح وانقل طلب العميل إلى واتساب أو مسار عرض السعر." },
  "whatsapp-siparis-sistemi": { title: "نظام طلبات واتساب", shortDesc: "دع العملاء يختارون المنتجات أو الخدمات ويرسلون طلبات منظمة عبر واتساب." },
  "qr-menu-sistemi": { title: "نظام قائمة QR", shortDesc: "قائمة رقمية مناسبة للجوال للمطاعم والمقاهي وأعمال الطعام." },
  "e-ticaret-satis-sistemleri": { title: "موقع تجارة إلكترونية", shortDesc: "نظام بيع يشمل قائمة منتجات وسلة وتتبع طلبات ومخزون واحتياجات إدارة." },
  "siparis-takip-sistemi": { title: "نظام تتبع الطلبات", shortDesc: "تتبع طلبات العملاء والحالات والملاحظات ومراحل التسليم والمتابعة التشغيلية في لوحة واحدة." },
  "stok-takip-sistemi": { title: "نظام تتبع المخزون", shortDesc: "إدارة كميات المنتجات وحركات المخزون والتنبيهات والتحكم الأساسي بالمخزون." },
  "b2b-bayi-siparis-sistemi": { title: "نظام طلبات موزعين B2B", shortDesc: "مسار طلبات للموزعين مع منتجات وأسعار مخصصة ووصول للوحة." },
  "bayi-distributor-paneli": { title: "لوحة موزعين / Distributor", shortDesc: "لوحة لإدارة حسابات الموزعين وطلبات التوزيع وقوائم المنتجات ومسارات الطلب." },
  "teklif-alma-sistemi": { title: "نظام طلب عرض سعر", shortDesc: "جمع طلبات عروض منظمة بالحقول والتوجيه والمتابعة المناسبة." },
  "teklif-takip-sistemi": { title: "نظام تتبع العروض", shortDesc: "تتبع العروض والحالات وردود العملاء والملاحظات وخطوات المتابعة في مكان واحد." },
  "admin-panel-isletme-yonetimi": { title: "تطوير لوحة إدارة", shortDesc: "بناء لوحة مخصصة للسجلات والمستخدمين والمنتجات والطلبات وعمليات الشركة." },
  "isletme-yonetim-paneli": { title: "لوحة إدارة أعمال", shortDesc: "جمع العمليات اليومية والسجلات والمهام والتقارير داخل لوحة قابلة للإدارة." },
  "crm-musteri-takip-sistemi": { title: "CRM وتتبع العملاء", shortDesc: "تتبع العملاء والملاحظات والمحادثات والعروض والحالات ومهام المتابعة." },
  "lead-takip-sistemi": { title: "نظام تتبع leads", shortDesc: "إدارة leads الواردة والمصادر والمراحل والمسؤولين ومتابعة التحويل." },
  "gorev-is-takip-paneli": { title: "لوحة مهام / تتبع عمل", shortDesc: "تخطيط المهام والمسؤوليات والحالات والمواعيد النهائية وتتبع العمل التشغيلي." },
  "dosya-belge-yonetim-sistemi": { title: "نظام إدارة ملفات / مستندات", shortDesc: "تنظيم الملفات والمستندات والتصنيفات وسجلات العملاء واحتياجات الوصول." },
  "raporlama-dashboard-sistemi": { title: "نظام dashboard وتقارير", shortDesc: "تحويل البيانات التشغيلية إلى dashboards ومؤشرات وملخصات وشاشات قرار." },
  "randevu-rezervasyon-sistemleri": { title: "نظام مواعيد", shortDesc: "دع العملاء يختارون الخدمة والتاريخ والوقت وبيانات التواصل عبر مسار واضح." },
  "rezervasyon-sistemi": { title: "نظام حجوزات", shortDesc: "إدارة التوفر والحجوزات وبيانات الضيوف وتتبع الحالة وجمع الطلبات." },
  "kapora-on-talep-sistemi": { title: "نظام عربون / طلب مسبق", shortDesc: "جمع الطلبات المسبقة والعربون ونية الحجز ومعلومات العميل في مسار منظم." },
  "pazaryeri-entegrasyonu": { title: "تكامل marketplace", shortDesc: "تخطيط نقل المنتجات وتحديث السعر/المخزون ومزامنة الطلبات ومطابقة البيانات." },
  "xml-entegrasyonu": { title: "تكامل XML", shortDesc: "استيراد وتحديث ومطابقة والتحكم ببيانات المنتجات من feeds XML." },
  "api-entegrasyonu": { title: "تكامل API", shortDesc: "ربط الأنظمة عبر API للمنتجات والمخزون والطلبات والعملاء والدفع أو البيانات التشغيلية." },
  "odeme-kargo-servis-entegrasyonu": { title: "تكامل دفع / شحن / خدمة خارجية", shortDesc: "ربط الدفع والشحن وSMS والبريد وواتساب أو تدفقات خدمات طرف ثالث." },
  "ozel-yazilim-premium-sistemler": { title: "تطوير برمجيات مخصصة", shortDesc: "تصميم وتطوير برمجيات مخصصة عندما لا تكفي المواقع أو الأدوات القياسية." },
  "kucuk-isletme-yazilim-sistemleri": { title: "أنظمة برمجية للشركات الصغيرة", shortDesc: "لوحات وتدفقات عملية للشركات الصغيرة التي تحتاج تحكماً يومياً أفضل." },
  "saas-mvp-gelistirme": { title: "تطوير SaaS MVP", shortDesc: "إنشاء أول منتج SaaS قابل للاستخدام بشاشات أساسية وتدفق مستخدم وأساس قابل للتوسع." },
  "mini-platform-uyelikli-sistem": { title: "منصة صغيرة / نظام عضوية", shortDesc: "بناء منصة عضوية مع تسجيل دخول ومحتوى وسجلات وأدوار ووصول مضبوط." },
  "whatsapp-ai-asistan": { title: "مساعد واتساب بالذكاء الاصطناعي", shortDesc: "تخطيط تدفقات واتساب مدعومة بالذكاء الاصطناعي لأسئلة العملاء والتوجيه ودعم الردود." },
  "yapay-zeka-isletme-otomasyonlari": { title: "ذكاء اصطناعي وأتمتة أعمال", shortDesc: "أتمتة المهام المتكررة والرسائل والسجلات وتدفقات القرار بأنظمة مدعومة بالذكاء الاصطناعي." },
  "mobil-webview-uygulama": { title: "تطبيق موبايل / Webview", shortDesc: "تحويل نظام ويب إلى تجربة موبايل عندما تكون هناك حاجة لحضور شبيه بالتطبيق." },
  "bakim-gelistirme-destek-hizmeti": { title: "صيانة وتطوير ودعم", shortDesc: "متابعة تحسين الأنظمة المسلّمة بإصلاحات وتحديثات ووحدات جديدة ودعم تقني." },
};

const serviceTitlesRu: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Корпоративный и презентационный сайт", shortDesc: "Представьте компанию, услуги, сигналы доверия и каналы связи через профессиональный сайт." },
  "landing-page-satis-sayfasi": { title: "Landing page / продающая страница", shortDesc: "Страница, ориентированная на конверсию для одного предложения, кампании, продукта, услуги или рекламного потока." },
  "hizmet-sitesi": { title: "Сайт услуг", shortDesc: "Сайт, ориентированный на заявки, для консультантов, клиник, агентств, локальных сервисов, тренеров и сервисного бизнеса." },
  "portfoy-kisisel-marka-sitesi": { title: "Портфолио / сайт личного бренда", shortDesc: "Покажите экспертизу, проекты, резюме и каналы связи в одном профессиональном месте." },
  "seo-blog-bilgi-merkezi": { title: "SEO-блог / база знаний", shortDesc: "Создайте структурированный центр контента, который поддерживает органическую видимость и внутренние ссылки." },
  "urun-katalog-whatsapp-siparis": { title: "Сайт каталога товаров", shortDesc: "Покажите товары понятно и переводите запрос клиента в WhatsApp или поток предложения." },
  "whatsapp-siparis-sistemi": { title: "Система заказов через WhatsApp", shortDesc: "Позвольте клиентам выбирать товары или услуги и отправлять структурированные запросы через WhatsApp." },
  "qr-menu-sistemi": { title: "Система QR-меню", shortDesc: "Мобильное цифровое меню для ресторанов, кафе и food-бизнеса." },
  "e-ticaret-satis-sistemleri": { title: "E-commerce сайт", shortDesc: "Система продаж с каталогом товаров, корзиной, отслеживанием заказов, складом и управлением." },
  "siparis-takip-sistemi": { title: "Система отслеживания заказов", shortDesc: "Отслеживайте заказы клиентов, статусы, заметки, этапы доставки и операционную работу в одной панели." },
  "stok-takip-sistemi": { title: "Система учета склада", shortDesc: "Управляйте количеством товаров, движениями склада, предупреждениями и базовым контролем запасов." },
  "b2b-bayi-siparis-sistemi": { title: "B2B система заказов для дилеров", shortDesc: "Поток заказов для дилеров с индивидуальными товарами, ценами и доступом к панели." },
  "bayi-distributor-paneli": { title: "Панель дилера / дистрибьютора", shortDesc: "Панель управления для дилерских аккаунтов, запросов дистрибьюторов, списков товаров и заказов." },
  "teklif-alma-sistemi": { title: "Система запроса предложения", shortDesc: "Собирайте структурированные запросы предложений с правильными полями, маршрутизацией и follow-up." },
  "teklif-takip-sistemi": { title: "Система отслеживания предложений", shortDesc: "Отслеживайте предложения, статусы, ответы клиентов, заметки и действия follow-up в одном месте." },
  "admin-panel-isletme-yonetimi": { title: "Разработка админ-панели", shortDesc: "Создайте индивидуальную панель управления для записей, пользователей, товаров, заказов и операций бизнеса." },
  "isletme-yonetim-paneli": { title: "Панель управления бизнесом", shortDesc: "Соберите ежедневные операции, записи, задачи и отчеты в одной управляемой панели." },
  "crm-musteri-takip-sistemi": { title: "CRM и отслеживание клиентов", shortDesc: "Отслеживайте клиентов, заметки, разговоры, предложения, статусы и задачи follow-up." },
  "lead-takip-sistemi": { title: "Система отслеживания лидов", shortDesc: "Управляйте входящими лидами, источниками, этапами, ответственными и конверсионным follow-up." },
  "gorev-is-takip-paneli": { title: "Панель задач / учета работ", shortDesc: "Планируйте задачи, ответственности, статусы, сроки и операционное отслеживание работ." },
  "dosya-belge-yonetim-sistemi": { title: "Система управления файлами / документами", shortDesc: "Организуйте файлы, документы, категории, записи клиентов и потребности доступа." },
  "raporlama-dashboard-sistemi": { title: "Система отчетного dashboard", shortDesc: "Превращайте операционные данные в dashboard, метрики, сводки и экраны принятия решений." },
  "randevu-rezervasyon-sistemleri": { title: "Система записи", shortDesc: "Позвольте клиентам выбирать услугу, дату, время и контактные данные через понятный поток записи." },
  "rezervasyon-sistemi": { title: "Система бронирования", shortDesc: "Управляйте доступностью, бронированиями, данными гостей, статусами и сбором запросов." },
  "kapora-on-talep-sistemi": { title: "Система депозита / предварительного запроса", shortDesc: "Собирайте предварительные запросы, депозиты, намерение бронирования и данные клиента в организованном потоке." },
  "pazaryeri-entegrasyonu": { title: "Интеграция marketplace", shortDesc: "Планируйте перенос товаров, обновление цены/склада, синхронизацию заказов и сопоставление данных marketplace." },
  "xml-entegrasyonu": { title: "XML-интеграция", shortDesc: "Импортируйте, обновляйте, сопоставляйте и контролируйте товарные данные из XML feeds." },
  "api-entegrasyonu": { title: "API-интеграция", shortDesc: "Соединяйте системы через API для товаров, склада, заказов, клиентов, оплаты или операционных данных." },
  "odeme-kargo-servis-entegrasyonu": { title: "Интеграция оплаты / доставки / внешних сервисов", shortDesc: "Соединяйте оплату, доставку, SMS, e-mail, WhatsApp или workflow сторонних сервисов." },
  "ozel-yazilim-premium-sistemler": { title: "Индивидуальная разработка ПО", shortDesc: "Проектируйте и разрабатывайте индивидуальное ПО, когда стандартных сайтов или инструментов недостаточно." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Программные системы для малого бизнеса", shortDesc: "Практичные панели и workflow для малого бизнеса, которому нужен лучший ежедневный контроль." },
  "saas-mvp-gelistirme": { title: "Разработка SaaS MVP", shortDesc: "Создайте первый usable SaaS-продукт с ключевыми экранами, пользовательским потоком и масштабируемой основой." },
  "mini-platform-uyelikli-sistem": { title: "Мини-платформа / система членства", shortDesc: "Создайте платформу с входом, контентом, записями, ролями и контролируемым доступом." },
  "whatsapp-ai-asistan": { title: "AI-ассистент WhatsApp", shortDesc: "Планируйте AI-поддержанные WhatsApp потоки для вопросов клиентов, маршрутизации и помощи с ответами." },
  "yapay-zeka-isletme-otomasyonlari": { title: "AI и автоматизация бизнеса", shortDesc: "Автоматизируйте повторяющиеся задачи, сообщения, записи и решения через AI-поддержанные системы." },
  "mobil-webview-uygulama": { title: "Мобильное приложение / Webview", shortDesc: "Превратите web-систему в мобильный опыт, когда нужна app-подобная представленность." },
  "bakim-gelistirme-destek-hizmeti": { title: "Обслуживание, развитие и поддержка", shortDesc: "Продолжайте улучшать сданные системы исправлениями, обновлениями, новыми модулями и технической поддержкой." },
};

const serviceTitlesPt: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Site institucional e de apresentação", shortDesc: "Apresente sua empresa, serviços, sinais de confiança e canais de contato com um site profissional." },
  "landing-page-satis-sayfasi": { title: "Landing page / página de vendas", shortDesc: "Uma página focada em conversão para uma oferta, campanha, produto, serviço ou fluxo de anúncios." },
  "hizmet-sitesi": { title: "Site de serviços", shortDesc: "Um site orientado a propostas para consultores, clínicas, agências, serviços locais, instrutores e empresas prestadoras." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfólio / site de marca pessoal", shortDesc: "Mostre sua experiência, projetos, currículo e canais de contato em um espaço profissional." },
  "seo-blog-bilgi-merkezi": { title: "Blog SEO / central de conhecimento", shortDesc: "Crie um centro de conteúdo estruturado que apoia visibilidade orgânica e links internos." },
  "urun-katalog-whatsapp-siparis": { title: "Site de catálogo de produtos", shortDesc: "Exiba produtos com clareza e leve a demanda do cliente para WhatsApp ou fluxo de proposta." },
  "whatsapp-siparis-sistemi": { title: "Sistema de pedidos por WhatsApp", shortDesc: "Permita que clientes escolham produtos ou serviços e enviem solicitações estruturadas pelo WhatsApp." },
  "qr-menu-sistemi": { title: "Sistema de menu QR", shortDesc: "Um sistema de menu digital compatível com mobile para restaurantes, cafés e negócios de alimentação." },
  "e-ticaret-satis-sistemleri": { title: "Site de e-commerce", shortDesc: "Um sistema de vendas com listagem de produtos, carrinho, acompanhamento de pedidos, estoque e gestão." },
  "siparis-takip-sistemi": { title: "Sistema de acompanhamento de pedidos", shortDesc: "Acompanhe pedidos de clientes, status, notas, etapas de entrega e operação em um painel." },
  "stok-takip-sistemi": { title: "Sistema de controle de estoque", shortDesc: "Gerencie quantidades de produtos, movimentações de estoque, alertas e controle básico de inventário." },
  "b2b-bayi-siparis-sistemi": { title: "Sistema de pedidos B2B para revendedores", shortDesc: "Um fluxo de pedidos para revendedores com produtos, preços e acesso a painel específicos por cliente." },
  "bayi-distributor-paneli": { title: "Painel de revendedor / distribuidor", shortDesc: "Um painel de gestão para contas de revendedores, solicitações de distribuidores, listas de produtos e pedidos." },
  "teklif-alma-sistemi": { title: "Sistema de solicitação de proposta", shortDesc: "Colete solicitações estruturadas com campos, direcionamento e acompanhamento adequados." },
  "teklif-takip-sistemi": { title: "Sistema de acompanhamento de propostas", shortDesc: "Acompanhe propostas, status, respostas de clientes, notas e ações de follow-up em um só lugar." },
  "admin-panel-isletme-yonetimi": { title: "Desenvolvimento de painel administrativo", shortDesc: "Crie um painel de gestão sob medida para registros, usuários, produtos, pedidos e operações." },
  "isletme-yonetim-paneli": { title: "Painel de gestão empresarial", shortDesc: "Reúna operações diárias, registros, tarefas e relatórios em um painel gerenciável." },
  "crm-musteri-takip-sistemi": { title: "CRM e acompanhamento de clientes", shortDesc: "Acompanhe clientes, notas, conversas, ofertas, status e tarefas de follow-up." },
  "lead-takip-sistemi": { title: "Sistema de acompanhamento de leads", shortDesc: "Gerencie leads recebidos, fontes, etapas, responsáveis e acompanhamento de conversão." },
  "gorev-is-takip-paneli": { title: "Painel de tarefas / acompanhamento de trabalho", shortDesc: "Planeje tarefas, responsabilidades, status, prazos e acompanhamento operacional." },
  "dosya-belge-yonetim-sistemi": { title: "Sistema de gestão de arquivos / documentos", shortDesc: "Organize arquivos, documentos, categorias, registros de clientes e necessidades de acesso." },
  "raporlama-dashboard-sistemi": { title: "Sistema de dashboard e relatórios", shortDesc: "Transforme dados operacionais em dashboards, métricas, resumos e telas de decisão." },
  "randevu-rezervasyon-sistemleri": { title: "Sistema de agendamento", shortDesc: "Permita que clientes escolham serviço, data, hora e dados de contato em um fluxo claro." },
  "rezervasyon-sistemi": { title: "Sistema de reservas", shortDesc: "Gerencie disponibilidade, reservas, dados de hóspedes, status e coleta de solicitações." },
  "kapora-on-talep-sistemi": { title: "Sistema de sinal / pré-solicitação", shortDesc: "Colete pré-solicitações, sinais, intenção de reserva e dados do cliente de forma organizada." },
  "pazaryeri-entegrasyonu": { title: "Integração com marketplace", shortDesc: "Planeje envio de produtos, atualizações de estoque/preço, sincronização de pedidos e correspondência de dados para marketplaces." },
  "xml-entegrasyonu": { title: "Integração XML", shortDesc: "Importe, atualize, associe e controle dados de produtos vindos de feeds XML." },
  "api-entegrasyonu": { title: "Integração API", shortDesc: "Conecte sistemas por APIs para produtos, estoque, pedidos, clientes, pagamentos ou dados operacionais." },
  "odeme-kargo-servis-entegrasyonu": { title: "Integração de pagamento / envio / serviço externo", shortDesc: "Conecte fluxos de pagamento, envio, SMS, e-mail, WhatsApp ou serviços de terceiros." },
  "ozel-yazilim-premium-sistemler": { title: "Desenvolvimento de software sob medida", shortDesc: "Planeje e desenvolva software sob medida quando sites ou ferramentas padrão não bastam." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Sistemas de software para pequenas empresas", shortDesc: "Painéis e fluxos práticos para pequenas empresas que precisam de mais controle diário." },
  "saas-mvp-gelistirme": { title: "Desenvolvimento de SaaS MVP", shortDesc: "Crie o primeiro produto SaaS utilizável com telas principais, fluxo de usuário e base escalável." },
  "mini-platform-uyelikli-sistem": { title: "Mini plataforma / sistema com membros", shortDesc: "Crie uma plataforma com login, conteúdos, registros, papéis e acesso controlado." },
  "whatsapp-ai-asistan": { title: "Assistente de IA para WhatsApp", shortDesc: "Planeje fluxos de WhatsApp com IA para perguntas de clientes, roteamento e apoio de respostas." },
  "yapay-zeka-isletme-otomasyonlari": { title: "IA e automação empresarial", shortDesc: "Automatize tarefas repetitivas, mensagens, registros e fluxos de decisão com sistemas apoiados por IA." },
  "mobil-webview-uygulama": { title: "App mobile / app webview", shortDesc: "Transforme um sistema web em uma experiência mobile quando uma presença parecida com app for necessária." },
  "bakim-gelistirme-destek-hizmeti": { title: "Manutenção, desenvolvimento e suporte", shortDesc: "Continue melhorando sistemas entregues com correções, atualizações, novos módulos e suporte técnico." },
};

const serviceTitlesIt: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Sito aziendale e di presentazione", shortDesc: "Presenta azienda, servizi, segnali di fiducia e canali di contatto con un sito professionale." },
  "landing-page-satis-sayfasi": { title: "Landing page / pagina di vendita", shortDesc: "Una pagina orientata alla conversione per offerta, campagna, prodotto, servizio o flusso pubblicitario." },
  "hizmet-sitesi": { title: "Sito per servizi", shortDesc: "Un sito orientato ai preventivi per consulenti, cliniche, agenzie, servizi locali, formatori e aziende di servizi." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfolio / sito di personal brand", shortDesc: "Mostra competenze, progetti, curriculum e canali di contatto in uno spazio professionale." },
  "seo-blog-bilgi-merkezi": { title: "Blog SEO / centro conoscenze", shortDesc: "Crea un centro contenuti strutturato che supporta visibilità organica e link interni." },
  "urun-katalog-whatsapp-siparis": { title: "Sito catalogo prodotti", shortDesc: "Mostra i prodotti con chiarezza e porta la richiesta cliente verso WhatsApp o un flusso di preventivo." },
  "whatsapp-siparis-sistemi": { title: "Sistema ordini WhatsApp", shortDesc: "Permetti ai clienti di scegliere prodotti o servizi e inviare richieste strutturate tramite WhatsApp." },
  "qr-menu-sistemi": { title: "Sistema menu QR", shortDesc: "Un sistema di menu digitale mobile-friendly per ristoranti, caffè e attività food." },
  "e-ticaret-satis-sistemleri": { title: "Sito e-commerce", shortDesc: "Un sistema di vendita con elenco prodotti, carrello, gestione ordini, stock e pannello." },
  "siparis-takip-sistemi": { title: "Sistema di monitoraggio ordini", shortDesc: "Monitora ordini cliente, stati, note, fasi di consegna e follow-up operativo in un pannello." },
  "stok-takip-sistemi": { title: "Sistema di controllo stock", shortDesc: "Gestisci quantità prodotti, movimenti di magazzino, avvisi e controllo inventario di base." },
  "b2b-bayi-siparis-sistemi": { title: "Sistema ordini B2B per rivenditori", shortDesc: "Un flusso ordini per rivenditori con prodotti, prezzi e accesso pannello specifici per cliente." },
  "bayi-distributor-paneli": { title: "Pannello rivenditore / distributore", shortDesc: "Un pannello di gestione per account rivenditori, richieste distributori, liste prodotti e ordini." },
  "teklif-alma-sistemi": { title: "Sistema richiesta preventivo", shortDesc: "Raccogli richieste strutturate con campi, instradamento e follow-up corretti." },
  "teklif-takip-sistemi": { title: "Sistema di monitoraggio preventivi", shortDesc: "Segui preventivi, stati, risposte clienti, note e azioni di follow-up in un unico posto." },
  "admin-panel-isletme-yonetimi": { title: "Sviluppo pannello amministrativo", shortDesc: "Crea un pannello di gestione su misura per registri, utenti, prodotti, ordini e operazioni." },
  "isletme-yonetim-paneli": { title: "Pannello di gestione aziendale", shortDesc: "Raccogli operazioni quotidiane, registri, attività e report in un pannello gestibile." },
  "crm-musteri-takip-sistemi": { title: "CRM e monitoraggio clienti", shortDesc: "Segui clienti, note, conversazioni, offerte, stati e attività di follow-up." },
  "lead-takip-sistemi": { title: "Sistema di monitoraggio lead", shortDesc: "Gestisci lead in entrata, fonti, fasi, responsabili e follow-up di conversione." },
  "gorev-is-takip-paneli": { title: "Pannello attività / lavoro", shortDesc: "Pianifica attività, responsabilità, stati, scadenze e monitoraggio operativo." },
  "dosya-belge-yonetim-sistemi": { title: "Sistema gestione file / documenti", shortDesc: "Organizza file, documenti, categorie, registri clienti e necessità di accesso." },
  "raporlama-dashboard-sistemi": { title: "Sistema dashboard e report", shortDesc: "Trasforma dati operativi in dashboard, metriche, riepiloghi e schermate decisionali." },
  "randevu-rezervasyon-sistemleri": { title: "Sistema appuntamenti", shortDesc: "Permetti ai clienti di scegliere servizio, data, ora e contatti in un flusso chiaro." },
  "rezervasyon-sistemi": { title: "Sistema di prenotazione", shortDesc: "Gestisci disponibilità, prenotazioni, dati ospiti, stati e raccolta richieste." },
  "kapora-on-talep-sistemi": { title: "Sistema acconto / pre-richiesta", shortDesc: "Raccogli pre-richieste, acconti, intenzioni di prenotazione e dati cliente in modo organizzato." },
  "pazaryeri-entegrasyonu": { title: "Integrazione marketplace", shortDesc: "Pianifica invio prodotti, aggiornamenti stock/prezzo, sincronizzazione ordini e corrispondenza dati marketplace." },
  "xml-entegrasyonu": { title: "Integrazione XML", shortDesc: "Importa, aggiorna, abbina e controlla dati prodotto provenienti da feed XML." },
  "api-entegrasyonu": { title: "Integrazione API", shortDesc: "Collega sistemi tramite API per prodotti, stock, ordini, clienti, pagamenti o dati operativi." },
  "odeme-kargo-servis-entegrasyonu": { title: "Integrazione pagamento / spedizione / servizio esterno", shortDesc: "Collega flussi di pagamento, spedizione, SMS, e-mail, WhatsApp o servizi di terze parti." },
  "ozel-yazilim-premium-sistemler": { title: "Sviluppo software su misura", shortDesc: "Progetta e sviluppa software su misura quando siti o strumenti standard non bastano." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Sistemi software per piccole imprese", shortDesc: "Pannelli e flussi pratici per piccole imprese che hanno bisogno di più controllo quotidiano." },
  "saas-mvp-gelistirme": { title: "Sviluppo SaaS MVP", shortDesc: "Crea un primo prodotto SaaS utilizzabile con schermate principali, flusso utente e base scalabile." },
  "mini-platform-uyelikli-sistem": { title: "Mini piattaforma / sistema membership", shortDesc: "Crea una piattaforma con login, contenuti, registri, ruoli e accesso controllato." },
  "whatsapp-ai-asistan": { title: "Assistente IA per WhatsApp", shortDesc: "Pianifica flussi WhatsApp con IA per domande clienti, instradamento e supporto risposte." },
  "yapay-zeka-isletme-otomasyonlari": { title: "IA e automazione aziendale", shortDesc: "Automatizza attività ripetitive, messaggi, registri e flussi decisionali con sistemi supportati da IA." },
  "mobil-webview-uygulama": { title: "App mobile / app webview", shortDesc: "Trasforma un sistema web in un'esperienza mobile quando serve una presenza simile a un'app." },
  "bakim-gelistirme-destek-hizmeti": { title: "Manutenzione, sviluppo e supporto", shortDesc: "Continua a migliorare sistemi consegnati con correzioni, aggiornamenti, nuovi moduli e supporto tecnico." },
};

const serviceTitlesNl: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "Bedrijfs- en presentatiewebsite", shortDesc: "Presenteer je bedrijf, diensten, vertrouwenssignalen en contactkanalen via een professionele website." },
  "landing-page-satis-sayfasi": { title: "Landingpage / verkooppagina", shortDesc: "Een conversiegerichte pagina voor één aanbod, campagne, product, dienst of advertentiefunnel." },
  "hizmet-sitesi": { title: "Dienstgerichte website", shortDesc: "Een offertegerichte website voor consultants, klinieken, bureaus, lokale diensten, trainers en servicebedrijven." },
  "portfoy-kisisel-marka-sitesi": { title: "Portfolio / personal brand website", shortDesc: "Toon expertise, projecten, cv en contactkanalen op één professionele plek." },
  "seo-blog-bilgi-merkezi": { title: "SEO-blog / kennisbank", shortDesc: "Maak een gestructureerd contentcentrum dat organische zichtbaarheid en interne links ondersteunt." },
  "urun-katalog-whatsapp-siparis": { title: "Productcataloguswebsite", shortDesc: "Toon producten duidelijk en leid klantvraag naar WhatsApp of offerteflows." },
  "whatsapp-siparis-sistemi": { title: "WhatsApp-bestelsysteem", shortDesc: "Laat klanten producten of diensten kiezen en gestructureerde aanvragen via WhatsApp versturen." },
  "qr-menu-sistemi": { title: "QR-menusysteem", shortDesc: "Een mobielvriendelijk digitaal menusysteem voor restaurants, cafés en foodbedrijven." },
  "e-ticaret-satis-sistemleri": { title: "E-commercewebsite", shortDesc: "Een verkoopsysteem met productlijst, winkelwagen, ordertracking, voorraad en beheer." },
  "siparis-takip-sistemi": { title: "Ordervolgsysteem", shortDesc: "Volg klantorders, statussen, notities, leveringsfases en operationele opvolging in één paneel." },
  "stok-takip-sistemi": { title: "Voorraadvolgsysteem", shortDesc: "Beheer productaantallen, voorraadbewegingen, waarschuwingen en basisvoorraadcontrole." },
  "b2b-bayi-siparis-sistemi": { title: "B2B-dealerbestelsysteem", shortDesc: "Een dealergerichte orderflow met klantspecifieke producten, prijzen en paneeltoegang." },
  "bayi-distributor-paneli": { title: "Dealer- / distributeurspaneel", shortDesc: "Een beheerpaneel voor dealeraccounts, distributeursaanvragen, productlijsten en orderflows." },
  "teklif-alma-sistemi": { title: "Offerteaanvraagsysteem", shortDesc: "Verzamel gestructureerde offerteaanvragen met de juiste velden, routing en opvolging." },
  "teklif-takip-sistemi": { title: "Offertevolgsysteem", shortDesc: "Volg offertes, statussen, klantreacties, notities en opvolgacties op één plek." },
  "admin-panel-isletme-yonetimi": { title: "Beheerpaneelontwikkeling", shortDesc: "Bouw een maatwerkbeheerpaneel voor registraties, gebruikers, producten, orders en bedrijfsprocessen." },
  "isletme-yonetim-paneli": { title: "Bedrijfsbeheerpaneel", shortDesc: "Breng dagelijkse bedrijfsprocessen, registraties, taken en rapportages samen in één beheerpaneel." },
  "crm-musteri-takip-sistemi": { title: "CRM klantvolgsysteem", shortDesc: "Volg klanten, notities, gesprekken, offertes, statussen en opvolgtaken." },
  "lead-takip-sistemi": { title: "Leadvolgsysteem", shortDesc: "Beheer binnenkomende leads, bronnen, fases, eigenaren en conversieopvolging." },
  "gorev-is-takip-paneli": { title: "Taak- / werkvolgpaneel", shortDesc: "Plan taken, verantwoordelijkheden, statussen, deadlines en operationele werkopvolging." },
  "dosya-belge-yonetim-sistemi": { title: "Bestands- / documentbeheersysteem", shortDesc: "Organiseer bestanden, documenten, categorieën, klantregistraties en toegangsbehoeften." },
  "raporlama-dashboard-sistemi": { title: "Rapportage-dashboard", shortDesc: "Zet operationele data om in dashboards, metrics, samenvattingen en beslisschermen." },
  "randevu-rezervasyon-sistemleri": { title: "Afsprakensysteem", shortDesc: "Laat klanten dienst, datum, tijd en contactgegevens kiezen via een duidelijke afsprakenflow." },
  "rezervasyon-sistemi": { title: "Reserveringssysteem", shortDesc: "Beheer beschikbaarheid, reserveringen, gastgegevens, statusopvolging en aanvraagverzameling." },
  "kapora-on-talep-sistemi": { title: "Aanbetaling / vooraanvraagsysteem", shortDesc: "Verzamel vooraanvragen, aanbetalingen, reserveringsintentie en klantinformatie in een georganiseerde flow." },
  "pazaryeri-entegrasyonu": { title: "Marketplace-integratie", shortDesc: "Plan productoverdracht, voorraad-prijsupdates, ordersynchronisatie en datamatching voor marketplaces." },
  "xml-entegrasyonu": { title: "XML-integratie", shortDesc: "Importeer, update, match en controleer productdata uit XML-feeds." },
  "api-entegrasyonu": { title: "API-integratie", shortDesc: "Koppel systemen via API's voor product-, voorraad-, order-, klant-, betalings- of operationele data." },
  "odeme-kargo-servis-entegrasyonu": { title: "Betaling / verzending / externe service-integratie", shortDesc: "Koppel betalings-, verzend-, SMS-, e-mail-, WhatsApp- of externe serviceflows." },
  "ozel-yazilim-premium-sistemler": { title: "Maatwerksoftwareontwikkeling", shortDesc: "Ontwerp en bouw maatwerksoftware wanneer standaardwebsites of tools niet genoeg zijn." },
  "kucuk-isletme-yazilim-sistemleri": { title: "Softwaresystemen voor kleine bedrijven", shortDesc: "Praktische paneels en workflows voor kleine bedrijven die meer dagelijkse controle nodig hebben." },
  "saas-mvp-gelistirme": { title: "SaaS MVP-ontwikkeling", shortDesc: "Maak een eerste bruikbaar SaaS-product met kernschermen, gebruikersflow en schaalbare basis." },
  "mini-platform-uyelikli-sistem": { title: "Mini-platform / lidmaatschapssysteem", shortDesc: "Bouw een ledenplatform met login, content, registraties, rollen en gecontroleerde toegang." },
  "whatsapp-ai-asistan": { title: "WhatsApp AI-assistent", shortDesc: "Plan AI-ondersteunde WhatsApp-flows voor klantvragen, routing en antwoordondersteuning." },
  "yapay-zeka-isletme-otomasyonlari": { title: "AI en bedrijfsautomatisering", shortDesc: "Automatiseer herhalende taken, berichten, registraties en beslisflows met AI-ondersteunde systemen." },
  "mobil-webview-uygulama": { title: "Mobiele app / webview-app", shortDesc: "Zet een websysteem om naar een mobielvriendelijke app-ervaring wanneer appaanwezigheid nodig is." },
  "bakim-gelistirme-destek-hizmeti": { title: "Onderhoud, ontwikkeling en support", shortDesc: "Verbeter opgeleverde systemen verder met fixes, updates, nieuwe modules en technische support." },
};

const serviceTitlesZh: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": { title: "企业展示网站", shortDesc: "以可信赖的网站清晰展示公司、服务和联系渠道。" },
  "landing-page-satis-sayfasi": { title: "落地页 / 销售页", shortDesc: "为单一优惠、活动、产品或服务准备转化导向页面。" },
  "hizmet-sitesi": { title: "服务型网站", shortDesc: "面向顾问、诊所、机构、本地服务、培训师和服务企业的询盘型网站。" },
  "portfoy-kisisel-marka-sitesi": { title: "作品集 / 个人品牌网站", shortDesc: "在一个专业位置展示专业能力、项目、简历和联系渠道。" },
  "seo-blog-bilgi-merkezi": { title: "SEO 博客 / 知识中心", shortDesc: "建立结构化内容中心，支持自然可见性和内部链接。" },
  "urun-katalog-whatsapp-siparis": { title: "产品目录网站", shortDesc: "清晰展示产品，并将客户需求引导到 WhatsApp 或报价流程。" },
  "whatsapp-siparis-sistemi": { title: "WhatsApp 订单系统", shortDesc: "让客户选择产品或服务，并通过 WhatsApp 发送结构化需求。" },
  "qr-menu-sistemi": { title: "QR 菜单系统", shortDesc: "适合餐厅、咖啡馆和餐饮企业的移动友好数字菜单系统。" },
  "e-ticaret-satis-sistemleri": { title: "电商网站", shortDesc: "包含产品列表、购物车、订单跟踪、库存和管理的销售系统。" },
  "siparis-takip-sistemi": { title: "订单跟踪系统", shortDesc: "在一个面板中跟踪客户订单、状态、备注、交付阶段和运营跟进。" },
  "stok-takip-sistemi": { title: "库存跟踪系统", shortDesc: "管理产品数量、库存变动、提醒和基础库存控制。" },
  "b2b-bayi-siparis-sistemi": { title: "B2B 经销商订单系统", shortDesc: "面向经销商的订单流程，包含客户专属产品、价格和面板访问。" },
  "bayi-distributor-paneli": { title: "经销商 / 分销商面板", shortDesc: "用于经销商账户、分销申请、产品列表和订单流程的管理面板。" },
  "teklif-alma-sistemi": { title: "报价请求系统", shortDesc: "通过正确字段、路由和跟进收集结构化报价请求。" },
  "teklif-takip-sistemi": { title: "报价跟踪系统", shortDesc: "在一个位置跟踪报价、状态、客户反馈、备注和跟进行动。" },
  "admin-panel-isletme-yonetimi": { title: "管理面板开发", shortDesc: "为记录、用户、产品、订单和业务流程构建定制管理面板。" },
  "isletme-yonetim-paneli": { title: "企业管理面板", shortDesc: "把日常业务流程、记录、任务和报告集中到一个管理面板。" },
  "crm-musteri-takip-sistemi": { title: "CRM 客户跟踪系统", shortDesc: "跟踪客户、备注、沟通、报价、状态和后续任务。" },
  "lead-takip-sistemi": { title: "线索跟踪系统", shortDesc: "管理进入的线索、来源、阶段、负责人和转化跟进。" },
  "gorev-is-takip-paneli": { title: "任务 / 工作跟踪面板", shortDesc: "规划任务、责任人、状态、截止日期和运营工作跟进。" },
  "dosya-belge-yonetim-sistemi": { title: "文件 / 文档管理系统", shortDesc: "组织文件、文档、分类、客户记录和访问需求。" },
  "raporlama-dashboard-sistemi": { title: "报告仪表盘", shortDesc: "把运营数据转化为仪表盘、指标、摘要和决策屏幕。" },
  "randevu-rezervasyon-sistemleri": { title: "预约系统", shortDesc: "让客户通过清晰预约流程选择服务、日期、时间和联系方式。" },
  "rezervasyon-sistemi": { title: "预订系统", shortDesc: "管理可用性、预订、客人信息、状态跟踪和请求收集。" },
  "kapora-on-talep-sistemi": { title: "定金 / 预请求系统", shortDesc: "有组织地收集预请求、定金、预订意向和客户信息。" },
  "pazaryeri-entegrasyonu": { title: "Marketplace 集成", shortDesc: "规划 marketplace 的产品传输、库存价格更新、订单同步和数据匹配。" },
  "xml-entegrasyonu": { title: "XML 集成", shortDesc: "导入、更新、匹配并检查 XML feed 中的产品数据。" },
  "api-entegrasyonu": { title: "API 集成", shortDesc: "通过 API 连接产品、库存、订单、客户、支付或运营数据。" },
  "odeme-kargo-servis-entegrasyonu": { title: "支付 / 物流 / 外部服务集成", shortDesc: "连接支付、物流、SMS、电子邮件、WhatsApp 或外部服务流程。" },
  "ozel-yazilim-premium-sistemler": { title: "定制软件开发", shortDesc: "当标准网站或工具不够用时，设计并开发定制软件。" },
  "kucuk-isletme-yazilim-sistemleri": { title: "小企业软件系统", shortDesc: "为需要更多日常控制的小企业准备实用面板和工作流。" },
  "saas-mvp-gelistirme": { title: "SaaS MVP 开发", shortDesc: "用核心屏幕、用户流程和可扩展基础创建首个可用 SaaS 产品。" },
  "mini-platform-uyelikli-sistem": { title: "小型平台 / 会员系统", shortDesc: "构建带登录、内容、记录、角色和受控访问的会员平台。" },
  "whatsapp-ai-asistan": { title: "WhatsApp AI 助手", shortDesc: "为客户问题、路由和回答支持规划 AI 支持的 WhatsApp 流程。" },
  "yapay-zeka-isletme-otomasyonlari": { title: "AI 和企业自动化", shortDesc: "用 AI 支持系统自动化重复任务、消息、记录和决策流程。" },
  "mobil-webview-uygulama": { title: "移动应用 / Webview 应用", shortDesc: "在需要应用存在感时，把 Web 系统转化为移动友好的应用体验。" },
  "bakim-gelistirme-destek-hizmeti": { title: "维护、开发和支持", shortDesc: "通过修复、更新、新模块和技术支持持续改进已交付系统。" },
};

const genericModules = ["Admin screen", "Form flow", "Status tracking", "Notification flow", "Reporting area", "Mobile-friendly interface"];
const genericInfrastructure = ["Next.js / React", "Database", "REST API", "Responsive interface", "SEO metadata", "Form and notification flow"];
const genericInfrastructureDe = ["Next.js / React", "Datenbank", "REST API", "Responsive Oberfläche", "SEO-Metadaten", "Formular- und Benachrichtigungsablauf"];
const genericInfrastructureFr = ["Next.js / React", "Base de données", "API REST", "Interface responsive", "Métadonnées SEO", "Flux formulaire et notification"];
const genericInfrastructureEs = ["Next.js / React", "Base de datos", "API REST", "Interfaz responsive", "Metadatos SEO", "Flujo de formulario y notificación"];
const genericInfrastructureAr = ["Next.js / React", "قاعدة بيانات", "REST API", "واجهة متجاوبة", "بيانات SEO", "تدفق نموذج وإشعار"];
const genericInfrastructureRu = ["Next.js / React", "База данных", "REST API", "Адаптивный интерфейс", "SEO metadata", "Поток формы и уведомлений"];
const genericInfrastructurePt = ["Next.js / React", "Banco de dados", "API REST", "Interface responsiva", "Metadados SEO", "Fluxo de formulário e notificação"];
const genericInfrastructureIt = ["Next.js / React", "Database", "API REST", "Interfaccia responsive", "Metadati SEO", "Flusso form e notifiche"];
const genericInfrastructureNl = ["Next.js / React", "Database", "REST API", "Responsive interface", "SEO-metadata", "Formulier- en notificatieflow"];
const genericInfrastructureZh = ["Next.js / React", "数据库", "REST API", "响应式界面", "SEO 元数据", "表单和通知流程"];

function englishScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Starter", description: `Core screens and a simple first usable version are prepared for ${title}.` },
    { name: "Advanced", description: "Admin panel, filtering, status tracking, reporting, and business-specific fields are added." },
    { name: "Custom System", description: "Integrations, roles, automation, maintenance, and new module development can be planned." },
  ];
}

function englishFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `Is ${title} delivered as a fixed package?`, answer: "The scope is defined according to the business need. Some projects can start from an adaptable structure, while others require custom panels and data models." },
    { question: "Can it be improved after delivery?", answer: "Yes. Bug fixes, new modules, content updates, integrations, and maintenance needs can be planned separately." },
    { question: "How is the price clarified?", answer: "Price is clarified after screen count, modules, admin panel needs, data structure, integrations, delivery timeline, and support scope are reviewed." },
  ];
}

function germanScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Starter", description: `Kernseiten und eine erste nutzbare Version für ${title} werden vorbereitet.` },
    { name: "Erweitert", description: "Admin-Panel, Filterung, Statusverfolgung, Reporting und geschäftsspezifische Felder werden ergänzt." },
    { name: "Individuelles System", description: "Integrationen, Rollen, Automatisierung, Wartung und neue Module können geplant werden." },
  ];
}

function germanFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `Wird ${title} als festes Paket geliefert?`, answer: "Der Umfang wird nach dem Geschäftsbedarf definiert. Manche Projekte starten mit einer anpassbaren Struktur, andere brauchen eigene Panels und Datenmodelle." },
    { question: "Kann es nach der Lieferung erweitert werden?", answer: "Ja. Fehlerkorrekturen, neue Module, Inhaltsupdates, Integrationen und Wartung können separat geplant werden." },
    { question: "Wie wird der Preis geklärt?", answer: "Der Preis wird nach Prüfung von Screen-Anzahl, Modulen, Admin-Panel, Datenstruktur, Integrationen, Lieferzeit und Supportumfang geklärt." },
  ];
}

function frenchScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Départ", description: `Les écrans essentiels et une première version utilisable sont préparés pour ${title}.` },
    { name: "Avancé", description: "Panneau d'administration, filtres, suivi de statut, reporting et champs métier spécifiques sont ajoutés." },
    { name: "Système sur mesure", description: "Intégrations, rôles, automatisation, maintenance et nouveaux modules peuvent être planifiés." },
  ];
}

function frenchFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `${title} est-il livré comme un forfait fixe ?`, answer: "Le périmètre est défini selon le besoin métier. Certains projets partent d'une structure adaptable, d'autres demandent des panneaux et modèles de données sur mesure." },
    { question: "Peut-il être amélioré après livraison ?", answer: "Oui. Corrections, nouveaux modules, mises à jour de contenu, intégrations et maintenance peuvent être planifiés séparément." },
    { question: "Comment le prix est-il clarifié ?", answer: "Le prix est clarifié après examen du nombre d'écrans, des modules, du panneau d'administration, de la structure de données, des intégrations, du délai et du support." },
  ];
}

function spanishScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Inicio", description: `Se preparan las pantallas esenciales y una primera versión usable para ${title}.` },
    { name: "Avanzado", description: "Se añaden panel de administración, filtros, seguimiento de estado, reportes y campos específicos del negocio." },
    { name: "Sistema a medida", description: "Integraciones, roles, automatización, mantenimiento y nuevos módulos pueden planificarse por separado." },
  ];
}

function spanishFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `¿${title} se entrega como paquete fijo?`, answer: "El alcance se define según la necesidad del negocio. Algunos proyectos parten de una estructura adaptable, otros requieren paneles y modelos de datos a medida." },
    { question: "¿Puede mejorarse después de la entrega?", answer: "Sí. Correcciones, nuevos módulos, actualizaciones de contenido, integraciones y mantenimiento pueden planificarse por separado." },
    { question: "¿Cómo se aclara el precio?", answer: "El precio se aclara tras revisar número de pantallas, módulos, panel, estructura de datos, integraciones, plazo de entrega y soporte." },
  ];
}

function arabicScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "بداية", description: `يتم تجهيز الشاشات الأساسية وأول نسخة قابلة للاستخدام لـ ${title}.` },
    { name: "متقدم", description: "تضاف لوحة الإدارة والفلاتر وتتبع الحالة والتقارير والحقول الخاصة بالشركة." },
    { name: "نظام مخصص", description: "يمكن تخطيط التكاملات والأدوار والأتمتة والصيانة والوحدات الجديدة بشكل منفصل." },
  ];
}

function arabicFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `هل يتم تسليم ${title} كباقة ثابتة؟`, answer: "يتم تحديد النطاق حسب حاجة الشركة. بعض المشاريع تبدأ من هيكل قابل للتكييف، وأخرى تحتاج لوحات ونماذج بيانات مخصصة." },
    { question: "هل يمكن تحسينه بعد التسليم؟", answer: "نعم. يمكن تخطيط الإصلاحات والوحدات الجديدة وتحديث المحتوى والتكاملات والصيانة بشكل منفصل." },
    { question: "كيف يتم توضيح السعر؟", answer: "يتم توضيح السعر بعد مراجعة عدد الشاشات والوحدات واحتياج اللوحة وبنية البيانات والتكاملات ومدة التسليم والدعم." },
  ];
}

function russianScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Старт", description: `Для ${title} готовятся ключевые экраны и первая простая usable версия.` },
    { name: "Расширенный", description: "Добавляются админ-панель, фильтры, отслеживание статуса, отчеты и бизнес-специфичные поля." },
    { name: "Индивидуальная система", description: "Интеграции, роли, автоматизация, обслуживание и новые модули можно планировать отдельно." },
  ];
}

function russianFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `${title} поставляется как фиксированный пакет?`, answer: "Объем определяется по потребности бизнеса. Некоторые проекты начинаются с адаптируемой структуры, а другим нужны индивидуальные панели и модели данных." },
    { question: "Можно ли улучшать после сдачи?", answer: "Да. Исправления, новые модули, обновления контента, интеграции и обслуживание можно планировать отдельно." },
    { question: "Как уточняется цена?", answer: "Цена уточняется после проверки количества экранов, модулей, потребности в панели, структуры данных, интеграций, сроков сдачи и объема поддержки." },
  ];
}

function portugueseScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Início", description: `As telas principais e a primeira versão utilizável de ${title} são preparadas.` },
    { name: "Avançado", description: "Painel administrativo, filtros, acompanhamento de status, relatórios e campos específicos do negócio são adicionados." },
    { name: "Sistema sob medida", description: "Integrações, papéis, automação, manutenção e novos módulos podem ser planejados separadamente." },
  ];
}

function portugueseFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `${title} é entregue como pacote fixo?`, answer: "O escopo é definido conforme a necessidade do negócio. Alguns projetos começam por uma estrutura adaptável, enquanto outros exigem painéis e modelos de dados sob medida." },
    { question: "Pode ser melhorado após a entrega?", answer: "Sim. Correções, novos módulos, atualizações de conteúdo, integrações e manutenção podem ser planejados separadamente." },
    { question: "Como o preço é esclarecido?", answer: "O preço é definido após revisar quantidade de telas, módulos, necessidade de painel, estrutura de dados, integrações, prazo de entrega e escopo de suporte." },
  ];
}

function italianScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Inizio", description: `Le schermate principali e la prima versione utilizzabile di ${title} vengono preparate.` },
    { name: "Avanzato", description: "Pannello amministrativo, filtri, monitoraggio stato, report e campi specifici dell'azienda vengono aggiunti." },
    { name: "Sistema su misura", description: "Integrazioni, ruoli, automazione, manutenzione e nuovi moduli possono essere pianificati separatamente." },
  ];
}

function italianFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `${title} viene consegnato come pacchetto fisso?`, answer: "L'ambito viene definito in base all'esigenza aziendale. Alcuni progetti partono da una struttura adattabile, mentre altri richiedono pannelli e modelli dati su misura." },
    { question: "Può essere migliorato dopo la consegna?", answer: "Sì. Correzioni, nuovi moduli, aggiornamenti di contenuto, integrazioni e manutenzione possono essere pianificati separatamente." },
    { question: "Come viene chiarito il prezzo?", answer: "Il prezzo viene definito dopo aver rivisto numero di schermate, moduli, necessità di pannello, struttura dati, integrazioni, tempi di consegna e ambito di supporto." },
  ];
}

function dutchScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "Start", description: `De hoofdschermen en een eerste bruikbare versie van ${title} worden voorbereid.` },
    { name: "Uitgebreid", description: "Beheerpaneel, filters, statusopvolging, rapportage en bedrijfsspecifieke velden worden toegevoegd." },
    { name: "Maatwerksysteem", description: "Integraties, rollen, automatisering, onderhoud en nieuwe modules kunnen apart worden gepland." },
  ];
}

function dutchFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `Wordt ${title} als vast pakket geleverd?`, answer: "De scope wordt bepaald volgens de bedrijfsbehoefte. Sommige projecten starten vanuit een aanpasbare structuur, terwijl andere maatwerkpaneels en datamodellen nodig hebben." },
    { question: "Kan het na oplevering worden verbeterd?", answer: "Ja. Fixes, nieuwe modules, contentupdates, integraties en onderhoud kunnen apart worden gepland." },
    { question: "Hoe wordt de prijs verduidelijkt?", answer: "De prijs wordt bepaald na controle van schermenaantal, modules, paneelbehoefte, datastructuur, integraties, oplevertijd en supportscope." },
  ];
}

function chineseScopeLevels(title: string): ServiceType["scopeLevels"] {
  return [
    { name: "起步版", description: `为${title}准备核心屏幕和第一版可用结构。` },
    { name: "进阶版", description: "加入管理面板、筛选、状态跟踪、报告和业务专属字段。" },
    { name: "定制系统", description: "可以规划集成、角色权限、自动化、维护和新模块开发。" },
  ];
}

function chineseFaqs(title: string): ServiceType["faqs"] {
  return [
    { question: `${title}是固定套餐吗？`, answer: "范围会根据企业需求确定。有些项目可以从可调整结构开始，有些项目需要定制面板和数据模型。" },
    { question: "交付后还能继续改进吗？", answer: "可以。修复、新模块、内容更新、集成和维护需求都可以单独规划。" },
    { question: "价格如何明确？", answer: "价格会在确认屏幕数量、模块、管理面板需求、数据结构、集成、交付时间和支持范围后明确。" },
  ];
}

export function getLocalizedServiceCategories(categories: ServiceCategory[], locale: string): ServiceCategory[] {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return categories;
  const texts = locale === "de" ? categoryTextDe : locale === "fr" ? categoryTextFr : locale === "es" ? categoryTextEs : locale === "ar" ? categoryTextAr : locale === "ru" ? categoryTextRu : locale === "pt" ? categoryTextPt : locale === "it" ? categoryTextIt : locale === "nl" ? categoryTextNl : locale === "zh" ? categoryTextZh : categoryText;
  return categories.map((category) => ({
    ...category,
    ...(texts[category.slug] ?? {}),
  }));
}

function contextualizeFirst(title: string, items: string[], locale: string) {
  if (items.length === 0) return items;
  const separator = locale === "zh" ? "：" : ": ";
  return [`${title}${separator}${items[0]}`, ...items.slice(1)];
}

function makeLocalizedServiceSpecific(service: ServiceType, locale: string): ServiceType {
  return {
    ...service,
    features: contextualizeFirst(service.title, service.features, locale),
    examples: contextualizeFirst(service.title, service.examples, locale),
    modules: contextualizeFirst(service.title, service.modules, locale),
    priceFactors: contextualizeFirst(service.title, service.priceFactors, locale),
    suitableFor: contextualizeFirst(service.title, service.suitableFor, locale),
    problemSolved: `${service.shortDesc} ${service.problemSolved}`,
  };
}

export function getLocalizedServices(services: ServiceItem[], locale: string): ServiceType[] {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return services;

  return services.map((service) => {
    const isGerman = locale === "de";
    const isFrench = locale === "fr";
    const isSpanish = locale === "es";
    const isArabic = locale === "ar";
    const isRussian = locale === "ru";
    const isPortuguese = locale === "pt";
    const isItalian = locale === "it";
    const isDutch = locale === "nl";
    const isChinese = locale === "zh";
    const titleDictionary = isGerman ? serviceTitlesDe : isFrench ? serviceTitlesFr : isSpanish ? serviceTitlesEs : isArabic ? serviceTitlesAr : isRussian ? serviceTitlesRu : isPortuguese ? serviceTitlesPt : isItalian ? serviceTitlesIt : isDutch ? serviceTitlesNl : isChinese ? serviceTitlesZh : serviceTitles;
    const categoryDictionary = isGerman ? categoryTextDe : isFrench ? categoryTextFr : isSpanish ? categoryTextEs : isArabic ? categoryTextAr : isRussian ? categoryTextRu : isPortuguese ? categoryTextPt : isItalian ? categoryTextIt : isDutch ? categoryTextNl : isChinese ? categoryTextZh : categoryText;
    const text = titleDictionary[service.slug] ?? { title: service.title, shortDesc: service.shortDesc };
    const category = categoryDictionary[service.categorySlug];
    const localizedService: ServiceType = {
      ...service,
      category: category?.title ?? service.category,
      title: text.title,
      shortDesc: text.shortDesc,
      longDesc: isFrench
        ? `${text.shortDesc} La solution est adaptée au flux réel de l’entreprise, avec un périmètre, des intégrations et un support définis avant le développement.`
        : isSpanish
        ? `${text.shortDesc} La solución se adapta al flujo real del negocio y define alcance, integraciones, entrega y soporte antes del desarrollo.`
        : isArabic
        ? `${text.shortDesc} يتم تكييف الحل مع سير العمل الحقيقي، مع توضيح النطاق والتكاملات والتسليم والدعم قبل التطوير.`
        : isRussian
        ? `${text.shortDesc} Решение адаптируется к реальному процессу бизнеса, а объем, интеграции, сдача и поддержка уточняются до разработки.`
        : isPortuguese
        ? `${text.shortDesc} A solução é adaptada ao fluxo real do negócio, com escopo, integrações, entrega e suporte definidos antes do desenvolvimento.`
        : isItalian
        ? `${text.shortDesc} La soluzione viene adattata al flusso reale dell’azienda, chiarendo ambito, integrazioni, consegna e supporto prima dello sviluppo.`
        : isDutch
        ? `${text.shortDesc} De oplossing wordt afgestemd op de echte bedrijfsworkflow; scope, integraties, oplevering en support worden vooraf vastgelegd.`
        : isChinese
        ? `${text.shortDesc} 方案会结合企业真实流程定制，并在开发前明确功能范围、系统集成、交付标准和后续支持。`
        : isGerman
        ? `${text.shortDesc} Die Lösung wird an den echten Geschäftsablauf angepasst; Umfang, Integrationen, Lieferung und Support werden vor der Entwicklung geklärt.`
        : `${text.shortDesc} The solution is adapted to the real business workflow, with scope, integrations, delivery, and support clarified before development.`,
      detail: isFrench ? [
        `Ce service est planifié autour du vrai workflow métier, pas seulement autour de l'écran visible. L'objectif est de rendre ${text.title.toLowerCase()} pratique, compréhensible et utile après livraison.`,
        "Pages, formulaires, zones d'administration, champs de données, intégrations, permissions et attentes de support sont clarifiés avant le développement.",
      ] : isSpanish ? [
        `Este servicio se planifica alrededor del flujo real del negocio, no solo de la pantalla visible. El objetivo es que ${text.title.toLowerCase()} sea práctico, comprensible y útil después de la entrega.`,
        "Páginas, formularios, áreas de administración, campos de datos, integraciones, permisos y expectativas de soporte se aclaran antes del desarrollo.",
      ] : isArabic ? [
        `يتم تخطيط هذه الخدمة حول سير العمل الحقيقي للشركة، وليس الشاشة الظاهرة فقط. الهدف أن يكون ${text.title} عملياً ومفهوماً ومفيداً بعد التسليم.`,
        "يتم توضيح الصفحات والنماذج ومناطق الإدارة وحقول البيانات والتكاملات والصلاحيات وتوقعات الدعم قبل التطوير.",
      ] : isRussian ? [
        `Эта услуга планируется вокруг реального рабочего процесса бизнеса, а не только вокруг видимого экрана. Цель — сделать ${text.title.toLowerCase()} практичным, понятным и полезным после сдачи.`,
        "Страницы, формы, зоны администрирования, поля данных, интеграции, права доступа и ожидания по поддержке уточняются до начала разработки.",
      ] : isPortuguese ? [
        `Este serviço é planejado ao redor do fluxo real do negócio, não apenas da tela visível. O objetivo é tornar ${text.title.toLowerCase()} prático, compreensível e útil após a entrega.`,
        "Páginas, formulários, áreas administrativas, campos de dados, integrações, permissões e expectativas de suporte são esclarecidos antes do desenvolvimento.",
      ] : isItalian ? [
        `Questo servizio viene pianificato intorno al vero flusso aziendale, non solo alla schermata visibile. L'obiettivo è rendere ${text.title.toLowerCase()} pratico, comprensibile e utile dopo la consegna.`,
        "Pagine, form, aree amministrative, campi dati, integrazioni, permessi e aspettative di supporto vengono chiariti prima dello sviluppo.",
      ] : isDutch ? [
        `Deze dienst wordt gepland rond de echte bedrijfsworkflow, niet alleen rond het zichtbare scherm. Het doel is om ${text.title.toLowerCase()} praktisch, begrijpelijk en nuttig te maken na oplevering.`,
        "Pagina's, formulieren, beheergebieden, datavelden, integraties, rechten en supportverwachtingen worden vóór ontwikkeling verduidelijkt.",
      ] : isChinese ? [
        `这项服务围绕真实业务流程规划，而不只是可见屏幕。目标是让${text.title}在交付后真正实用、清晰并可持续使用。`,
        "页面、表单、管理区域、数据字段、集成、权限和支持预期会在开发前明确。",
      ] : isGerman ? [
        `Diese Leistung wird nach dem echten Geschäftsablauf geplant, nicht nur nach dem sichtbaren Screen. Ziel ist, ${text.title.toLowerCase()} praktisch, verständlich und nach der Lieferung nutzbar zu machen.`,
        "Seiten, Formulare, Admin-Bereiche, Datenfelder, Integrationen, Berechtigungen und Supporterwartungen werden vor Entwicklungsbeginn geklärt.",
      ] : [
        `This service is planned around the actual business workflow, not only the visual screen. The goal is to make ${text.title.toLowerCase()} practical, understandable, and useful after delivery.`,
        "Pages, forms, admin areas, data fields, integrations, permissions, and support expectations are clarified before development starts.",
      ],
      features: isFrench ? ["Parcours de page clair", "Interface responsive", "Formulaire de contact ou demande", "Structure prête pour l'administration", "Structure favorable au SEO", "Base de code maintenable"] : isSpanish ? ["Flujo de página claro", "Interfaz responsive", "Formulario de contacto o solicitud", "Estructura lista para administración", "Base favorable para SEO", "Código mantenible"] : isArabic ? ["تدفق صفحة واضح", "واجهة متجاوبة", "نموذج تواصل أو طلب", "هيكل جاهز للإدارة", "إعداد مناسب لـ SEO", "قاعدة كود قابلة للدعم"] : isRussian ? ["Понятный поток страниц", "Адаптивный интерфейс", "Форма контакта или заявки", "Структура, готовая к администрированию", "SEO-friendly настройка", "Поддерживаемая codebase"] : isPortuguese ? ["Fluxo de página claro", "Interface responsiva", "Formulário de contato ou solicitação", "Estrutura pronta para administração", "Configuração favorável a SEO", "Base de código sustentável"] : isItalian ? ["Flusso pagina chiaro", "Interfaccia responsive", "Form di contatto o richiesta", "Struttura pronta per amministrazione", "Impostazione favorevole alla SEO", "Base codice sostenibile"] : isDutch ? ["Duidelijke paginaflow", "Responsive interface", "Contact- of aanvraagformulier", "Beheerklare structuur", "SEO-vriendelijke opzet", "Onderhoudbare codebasis"] : isChinese ? ["清晰页面流程", "响应式界面", "联系或请求表单", "可管理的结构", "适合 SEO 的基础", "可维护代码库"] : isGerman ? ["Klarer Seitenablauf", "Responsive Oberfläche", "Kontakt- oder Anfrageformular", "Admin-fähige Struktur", "SEO-freundlicher Aufbau", "Supportfähige Codebasis"] : ["Clear page flow", "Responsive interface", "Contact or request form", "Admin-ready structure", "SEO-friendly setup", "Supportable codebase"],
      examples: isFrench ? ["Workflow de petite entreprise", "Processus d'entreprise de service", "Parcours de vente ou de demande", "Besoin de gestion client"] : isSpanish ? ["Flujo de pequeña empresa", "Proceso de negocio de servicios", "Flujo de venta o solicitud", "Necesidad de gestión de clientes"] : isArabic ? ["تدفق شركة صغيرة", "عملية شركة خدمات", "مسار بيع أو طلب", "حاجة إدارة عملاء"] : isRussian ? ["Workflow малого бизнеса", "Процесс сервисной компании", "Поток продажи или заявки", "Потребность управления клиентами"] : isPortuguese ? ["Fluxo de pequena empresa", "Processo de empresa de serviços", "Fluxo de venda ou solicitação", "Necessidade de gestão de clientes"] : isItalian ? ["Flusso di piccola impresa", "Processo di azienda di servizi", "Flusso di vendita o richiesta", "Necessità di gestione clienti"] : isDutch ? ["Workflow voor kleine bedrijven", "Proces van een servicebedrijf", "Verkoop- of aanvraagflow", "Behoefte aan klantbeheer"] : isChinese ? ["小企业工作流", "服务型企业流程", "销售或请求流程", "客户管理需求"] : isGerman ? ["Workflow für kleine Unternehmen", "Dienstleistungsprozess", "Verkaufs- oder Anfrageablauf", "Kundenverwaltungsbedarf"] : ["Small business workflow", "Service business process", "Sales or request flow", "Customer management need"],
      infrastructure: service.infrastructure?.length ? service.infrastructure.map((item) => {
        if (item === "Veritabanı") return isFrench ? "Base de données" : isSpanish ? "Base de datos" : isArabic ? "قاعدة بيانات" : isRussian ? "База данных" : isPortuguese ? "Banco de dados" : isItalian ? "Database" : isDutch ? "Database" : isChinese ? "数据库" : isGerman ? "Datenbank" : "Database";
        if (item === "Responsive arayüz") return isFrench ? "Interface responsive" : isSpanish ? "Interfaz responsive" : isArabic ? "واجهة متجاوبة" : isRussian ? "Адаптивный интерфейс" : isPortuguese ? "Interface responsiva" : isItalian ? "Interfaccia responsive" : isDutch ? "Responsive interface" : isChinese ? "响应式界面" : isGerman ? "Responsive Oberfläche" : "Responsive interface";
        if (item === "Form ve bildirim akışı") return isFrench ? "Flux formulaire et notification" : isSpanish ? "Flujo de formulario y notificación" : isArabic ? "تدفق نموذج وإشعار" : isRussian ? "Поток формы и уведомлений" : isPortuguese ? "Fluxo de formulário e notificação" : isItalian ? "Flusso form e notifiche" : isDutch ? "Formulier- en notificatieflow" : isChinese ? "表单和通知流程" : isGerman ? "Formular- und Benachrichtigungsablauf" : "Form and notification flow";
        if (item === "Admin panel") return isFrench ? "Panneau d'administration" : isSpanish ? "Panel de administración" : isArabic ? "لوحة إدارة" : isRussian ? "Админ-панель" : isPortuguese ? "Painel administrativo" : isItalian ? "Pannello amministrativo" : isDutch ? "Beheerpaneel" : isChinese ? "管理面板" : isGerman ? "Admin-Panel" : "Admin panel";
        if (item === "Rol yönetimi") return isFrench ? "Gestion des rôles" : isSpanish ? "Gestión de roles" : isArabic ? "إدارة الأدوار" : isRussian ? "Управление ролями" : isPortuguese ? "Gestão de papéis" : isItalian ? "Gestione ruoli" : isDutch ? "Rollenbeheer" : isChinese ? "角色管理" : isGerman ? "Rollenverwaltung" : "Role management";
        return item;
      }) : isFrench ? genericInfrastructureFr : isSpanish ? genericInfrastructureEs : isArabic ? genericInfrastructureAr : isRussian ? genericInfrastructureRu : isPortuguese ? genericInfrastructurePt : isItalian ? genericInfrastructureIt : isDutch ? genericInfrastructureNl : isChinese ? genericInfrastructureZh : isGerman ? genericInfrastructureDe : genericInfrastructure,
      combinations: isFrench ? ["Site web + formulaire de devis", "Panneau d'administration + reporting", "Catalogue + flux WhatsApp", "Intégration + suivi de statut"] : isSpanish ? ["Sitio web + formulario de propuesta", "Panel de administración + reportes", "Catálogo + flujo WhatsApp", "Integración + seguimiento de estado"] : isArabic ? ["موقع ويب + نموذج عرض سعر", "لوحة إدارة + تقارير", "كتالوج + مسار واتساب", "تكامل + تتبع حالة"] : isRussian ? ["Сайт + форма предложения", "Админ-панель + отчеты", "Каталог + поток WhatsApp", "Интеграция + отслеживание статуса"] : isPortuguese ? ["Site + formulário de proposta", "Painel administrativo + relatórios", "Catálogo + fluxo WhatsApp", "Integração + acompanhamento de status"] : isItalian ? ["Sito + form preventivo", "Pannello amministrativo + report", "Catalogo + flusso WhatsApp", "Integrazione + monitoraggio stato"] : isDutch ? ["Website + offerteformulier", "Beheerpaneel + rapportage", "Catalogus + WhatsApp-flow", "Integratie + statusopvolging"] : isChinese ? ["网站 + 报价表单", "管理面板 + 报告", "目录 + WhatsApp 流程", "集成 + 状态跟踪"] : isGerman ? ["Website + Angebotsformular", "Admin-Panel + Reporting", "Katalog + WhatsApp-Ablauf", "Integration + Statusverfolgung"] : ["Website + quote form", "Admin panel + reporting", "Catalog + WhatsApp flow", "Integration + status tracking"],
      modules: isFrench ? ["Écran d'administration", "Flux formulaire", "Suivi de statut", "Flux de notification", "Zone de reporting", "Interface adaptée au mobile"] : isSpanish ? ["Pantalla de administración", "Flujo de formulario", "Seguimiento de estado", "Flujo de notificación", "Área de reportes", "Interfaz compatible con móvil"] : isArabic ? ["شاشة إدارة", "تدفق نموذج", "تتبع حالة", "تدفق إشعار", "منطقة تقارير", "واجهة مناسبة للجوال"] : isRussian ? ["Экран администрирования", "Поток формы", "Отслеживание статуса", "Поток уведомлений", "Зона отчетов", "Мобильный интерфейс"] : isPortuguese ? ["Tela administrativa", "Fluxo de formulário", "Acompanhamento de status", "Fluxo de notificação", "Área de relatórios", "Interface compatível com mobile"] : isItalian ? ["Schermata amministrativa", "Flusso form", "Monitoraggio stato", "Flusso notifiche", "Area report", "Interfaccia mobile-friendly"] : isDutch ? ["Beheerscherm", "Formulierflow", "Statusopvolging", "Notificatieflow", "Rapportagegebied", "Mobielvriendelijke interface"] : isChinese ? ["管理屏幕", "表单流程", "状态跟踪", "通知流程", "报告区域", "移动友好界面"] : isGerman ? ["Admin-Screen", "Formularablauf", "Statusverfolgung", "Benachrichtigungsablauf", "Reporting-Bereich", "Mobilfreundliche Oberfläche"] : genericModules,
      priceFactors: isFrench ? ["Nombre d'écrans", "Profondeur du panneau d'administration", "Modèle de données", "Besoin d'intégration", "Disponibilité du contenu", "Délai de livraison", "Périmètre du support"] : isSpanish ? ["Número de pantallas", "Profundidad del panel", "Modelo de datos", "Necesidad de integración", "Preparación de contenido", "Plazo de entrega", "Alcance del soporte"] : isArabic ? ["عدد الشاشات", "عمق لوحة الإدارة", "نموذج البيانات", "حاجة التكامل", "جاهزية المحتوى", "مدة التسليم", "نطاق الدعم"] : isRussian ? ["Количество экранов", "Глубина админ-панели", "Модель данных", "Потребность в интеграции", "Готовность контента", "Срок сдачи", "Объем поддержки"] : isPortuguese ? ["Quantidade de telas", "Profundidade do painel", "Modelo de dados", "Necessidade de integração", "Prontidão do conteúdo", "Prazo de entrega", "Escopo de suporte"] : isItalian ? ["Numero di schermate", "Profondità del pannello", "Modello dati", "Necessità di integrazione", "Prontezza dei contenuti", "Tempi di consegna", "Ambito del supporto"] : isDutch ? ["Aantal schermen", "Diepte van het beheerpaneel", "Datamodel", "Integratiebehoefte", "Gereedheid van content", "Oplevertijd", "Supportscope"] : isChinese ? ["屏幕数量", "管理面板深度", "数据模型", "集成需求", "内容准备情况", "交付时间", "支持范围"] : isGerman ? ["Screen-Anzahl", "Tiefe des Admin-Panels", "Datenmodell", "Integrationsbedarf", "Inhaltsbereitschaft", "Lieferzeit", "Supportumfang"] : ["Screen count", "Admin panel depth", "Data model", "Integration needs", "Content readiness", "Delivery timeline", "Support scope"],
      suitableFor: isFrench ? ["Petites et moyennes entreprises", "Prestataires de services", "Entreprises vendant des produits", "Équipes ayant besoin de clarté opérationnelle"] : isSpanish ? ["Pequeñas y medianas empresas", "Prestadores de servicios", "Negocios que venden productos", "Equipos que necesitan claridad operativa"] : isArabic ? ["الشركات الصغيرة والمتوسطة", "مقدمو الخدمات", "شركات تبيع منتجات", "فرق تحتاج وضوحاً تشغيلياً"] : isRussian ? ["Малый и средний бизнес", "Поставщики услуг", "Компании, продающие товары", "Команды, которым нужна операционная ясность"] : isPortuguese ? ["Pequenas e médias empresas", "Prestadores de serviços", "Empresas que vendem produtos", "Equipes que precisam de clareza operacional"] : isItalian ? ["Piccole e medie imprese", "Fornitori di servizi", "Aziende che vendono prodotti", "Team che hanno bisogno di chiarezza operativa"] : isDutch ? ["Kleine en middelgrote bedrijven", "Dienstverleners", "Productverkopende bedrijven", "Teams die operationele duidelijkheid nodig hebben"] : isChinese ? ["中小企业", "服务提供商", "销售产品的企业", "需要运营清晰度的团队"] : isGerman ? ["Kleine und mittlere Unternehmen", "Dienstleister", "Produktverkaufende Unternehmen", "Teams mit Bedarf an operativer Klarheit"] : ["Small and medium-sized businesses", "Service providers", "Product-selling businesses", "Teams that need operational clarity"],
      problemSolved: isFrench
        ? "Il réduit le suivi manuel, les demandes client floues, les enregistrements dispersés et les workflows difficiles à gérer."
        : isSpanish
        ? "Reduce el seguimiento manual, las solicitudes confusas, los registros dispersos y los flujos difíciles de gestionar."
        : isArabic
        ? "يقلل التتبع اليدوي والطلبات غير الواضحة والسجلات المتفرقة وتدفقات العمل الصعبة الإدارة."
        : isRussian
        ? "Это снижает ручное отслеживание, неясные клиентские запросы, разрозненные записи и workflow, которыми трудно управлять."
        : isPortuguese
        ? "Reduz acompanhamento manual, solicitações pouco claras, registros dispersos e fluxos de trabalho difíceis de gerenciar."
        : isItalian
        ? "Riduce monitoraggio manuale, richieste poco chiare, registri dispersi e flussi di lavoro difficili da gestire."
        : isDutch
        ? "Het vermindert handmatige opvolging, onduidelijke klantaanvragen, verspreide registraties en moeilijk te beheren workflows."
        : isChinese
        ? "它减少手动跟进、不清晰的客户请求、分散记录和难以管理的业务流程。"
        : isGerman
        ? "Es reduziert manuelle Nachverfolgung, unklare Kundenanfragen, verstreute Einträge und schwer steuerbare Geschäftsabläufe."
        : "It reduces manual tracking, unclear customer requests, scattered records, and hard-to-manage business workflows.",
      scopeLevels: isFrench ? frenchScopeLevels(text.title) : isSpanish ? spanishScopeLevels(text.title) : isArabic ? arabicScopeLevels(text.title) : isRussian ? russianScopeLevels(text.title) : isPortuguese ? portugueseScopeLevels(text.title) : isItalian ? italianScopeLevels(text.title) : isDutch ? dutchScopeLevels(text.title) : isChinese ? chineseScopeLevels(text.title) : isGerman ? germanScopeLevels(text.title) : englishScopeLevels(text.title),
      faqs: isFrench ? frenchFaqs(text.title) : isSpanish ? spanishFaqs(text.title) : isArabic ? arabicFaqs(text.title) : isRussian ? russianFaqs(text.title) : isPortuguese ? portugueseFaqs(text.title) : isItalian ? italianFaqs(text.title) : isDutch ? dutchFaqs(text.title) : isChinese ? chineseFaqs(text.title) : isGerman ? germanFaqs(text.title) : englishFaqs(text.title),
      riskNote: service.riskNote
        ? isFrench
          ? "Les responsabilités juridiques, financières, médicales, fiscales, de paiement, de données personnelles et de secteurs réglementés doivent être vérifiées par le client avec les experts concernés."
          : isSpanish
          ? "Las responsabilidades legales, financieras, médicas, fiscales, de pago, datos personales y sectores regulados deben ser revisadas por el cliente con los expertos correspondientes."
          : isArabic
          ? "يجب على العميل مراجعة المسؤوليات القانونية والمالية والطبية والضريبية والدفع والبيانات الشخصية والقطاعات المنظمة مع الخبراء المناسبين."
          : isRussian
          ? "Юридические, финансовые, медицинские, налоговые, платежные, персональные данные и регулируемые отраслевые обязанности должны проверяться клиентом с соответствующими экспертами."
          : isPortuguese
          ? "Responsabilidades legais, financeiras, médicas, fiscais, de pagamento, dados pessoais e setores regulados devem ser revisadas pelo cliente com os especialistas relevantes."
          : isItalian
          ? "Responsabilità legali, finanziarie, mediche, fiscali, di pagamento, dati personali e settori regolamentati devono essere verificate dal cliente con gli specialisti pertinenti."
          : isDutch
          ? "Juridische, financiële, medische, fiscale, betalings-, persoonsgegevens- en gereguleerde-sectorverantwoordelijkheden moeten door de klant met relevante specialisten worden gecontroleerd."
          : isChinese
          ? "法律、财务、医疗、税务、支付、个人数据和受监管行业相关责任，需要客户与相关专家确认。"
          : isGerman
          ? "Rechtliche, finanzielle, medizinische, steuerliche, zahlungsbezogene, personenbezogene und regulierte Verantwortlichkeiten sollten vom Kunden mit passenden Fachleuten geprüft werden."
          : "Legal, financial, medical, tax, payment, personal data, and regulated-sector responsibilities should be reviewed by the customer with the relevant experts."
        : undefined,
    };

    return makeLocalizedServiceSpecific(localizedService, locale);
  });
}
