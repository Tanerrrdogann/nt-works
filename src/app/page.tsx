"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import RatingStars from "@/components/RatingStars";
import { bionlukStats, testimonials } from "@/data/testimonials";
import { techStack } from "@/data/tech-stack";
import { homepageServiceSlugs, servicesData } from "@/data/services";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { getLocaleFromPath } from "@/lib/i18n";

const processSteps = ["İhtiyacınızı yazarsınız", "Uygun yapı seçilir", "Kapsam belirlenir", "Önizleme paylaşılır", "Yayına alınır"];

const homepageServices = homepageServiceSlugs
  .map((slug) => servicesData.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

const trustSignals = [
  ["Tamamlanan işler", `${bionlukStats.reviewCount} müşteri değerlendirmesi ve ${bionlukStats.completedOrders} tamamlanan iş deneyimi.`],
  ["Uyarlanabilir canlı örnekler", "Canlı örnekler gerçek müşteri işi değildir; benzeri hazırlanabilecek demo sistemlerdir."],
  ["Net kapsam", "Sayfa, modül, teslim ve ek geliştirme sınırları baştan konuşulur."],
  ["Teslim sonrası destek", "Bakım, yeni modül ve geliştirme ihtiyaçları teslimden sonra ayrıca planlanabilir."],
];

const quickStartOptions = [
  {
    title: "Web sitesi istiyorum",
    desc: "Kurumsal site, hizmet sitesi veya landing page ile güven veren bir vitrin kurulur.",
    href: "/services/tanitim-kurumsal-web-siteleri",
  },
  {
    title: "Katalog / WhatsApp sipariş istiyorum",
    desc: "Ürünler düzenli gösterilir, müşteri seçimini WhatsApp veya teklif akışına taşır.",
    href: "/services/urun-katalog-whatsapp-siparis",
  },
  {
    title: "Randevu sistemi istiyorum",
    desc: "Tarih, saat, müsaitlik ve müşteri talebi tek randevu akışında toplanır.",
    href: "/services/randevu-rezervasyon-sistemleri",
  },
  {
    title: "Admin panel istiyorum",
    desc: "İşletme verileri, kullanıcılar, kayıtlar ve süreçler yönetilebilir hale gelir.",
    href: "/services/admin-panel-isletme-yonetimi",
  },
  {
    title: "CRM / stok / sipariş takibi istiyorum",
    desc: "Müşteri, ürün, stok, sipariş veya teklif süreçleri tek panelden takip edilir.",
    href: "/services/crm-musteri-takip-sistemi",
  },
  {
    title: "Entegrasyon istiyorum",
    desc: "Pazaryeri, XML, API, ödeme, kargo veya harici servis bağlantıları planlanır.",
    href: "/services/pazaryeri-entegrasyonu",
  },
];

const enProcessSteps = ["You describe the need", "The right structure is selected", "Scope is defined", "A preview is shared", "Launch is prepared"];
const deProcessSteps = ["Sie beschreiben den Bedarf", "Die passende Struktur wird gewählt", "Der Umfang wird definiert", "Eine Vorschau wird geteilt", "Der Launch wird vorbereitet"];
const frProcessSteps = ["Vous décrivez le besoin", "La bonne structure est choisie", "Le périmètre est défini", "Un aperçu est partagé", "La mise en ligne est préparée"];
const esProcessSteps = ["Describes la necesidad", "Se elige la estructura adecuada", "Se define el alcance", "Se comparte una vista previa", "Se prepara el lanzamiento"];
const arProcessSteps = ["تشرح الحاجة", "يتم اختيار الهيكل المناسب", "يتم تحديد النطاق", "تتم مشاركة معاينة", "يتم تجهيز الإطلاق"];
const ruProcessSteps = ["Вы описываете задачу", "Выбирается подходящая структура", "Определяется объем", "Делится предварительный просмотр", "Готовится запуск"];
const ptProcessSteps = ["Você descreve a necessidade", "A estrutura certa é escolhida", "O escopo é definido", "Uma prévia é compartilhada", "O lançamento é preparado"];
const itProcessSteps = ["Descrivi l'esigenza", "Si sceglie la struttura giusta", "Si definisce l'ambito", "Si condivide un'anteprima", "Si prepara il lancio"];
const nlProcessSteps = ["Je beschrijft de behoefte", "De juiste structuur wordt gekozen", "De scope wordt bepaald", "Een preview wordt gedeeld", "Lancering wordt voorbereid"];
const zhProcessSteps = ["您描述需求", "选择合适结构", "明确项目范围", "分享预览链接", "准备上线发布"];

const enHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Corporate Website",
    shortDesc: "Present your company, services, and contact channels through a trustworthy website.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Product Catalog and WhatsApp Orders",
    shortDesc: "List products clearly and move customer demand into WhatsApp or quote flows.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-Commerce and Sales Systems",
    shortDesc: "Create a sales structure with product listing, cart, order tracking, stock, and management needs.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Appointment and Reservation Systems",
    shortDesc: "Collect date, time, availability, service choice, and customer requests in one flow.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Admin Panel and Business Management",
    shortDesc: "Turn business data, users, records, and processes into a manageable panel.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Custom Software Systems",
    shortDesc: "Build custom panels, platforms, workflows, and integrations when ready-made tools are not enough.",
  },
};

const deHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Unternehmenswebsite",
    shortDesc: "Präsentieren Sie Ihr Unternehmen, Ihre Leistungen und Kontaktwege über eine vertrauenswürdige Website.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Produktkatalog und WhatsApp-Bestellungen",
    shortDesc: "Produkte klar darstellen und Kundenanfragen in WhatsApp- oder Angebotsabläufe übertragen.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-Commerce- und Verkaufssysteme",
    shortDesc: "Eine Verkaufsstruktur mit Produktliste, Warenkorb, Bestellverfolgung, Bestand und Verwaltung aufbauen.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Termin- und Reservierungssysteme",
    shortDesc: "Datum, Uhrzeit, Verfügbarkeit, Leistungsauswahl und Kundenanfrage in einem Ablauf sammeln.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Admin-Panel und Unternehmensverwaltung",
    shortDesc: "Geschäftsdaten, Nutzer, Einträge und Prozesse in einem verwaltbaren Panel bündeln.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Individuelle Softwaresysteme",
    shortDesc: "Eigene Panels, Plattformen, Workflows und Integrationen entwickeln, wenn Standardtools nicht ausreichen.",
  },
};

const frHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Site web d'entreprise",
    shortDesc: "Présentez votre entreprise, vos services et vos canaux de contact avec un site fiable.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Catalogue produit et commandes WhatsApp",
    shortDesc: "Présentez vos produits clairement et dirigez les demandes vers WhatsApp ou un flux de devis.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce et systèmes de vente",
    shortDesc: "Construisez une structure de vente avec catalogue, panier, suivi des commandes, stock et gestion.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Systèmes de rendez-vous et réservation",
    shortDesc: "Collectez date, heure, disponibilité, choix de service et demande client dans un seul flux.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Panneau d'administration et gestion d'entreprise",
    shortDesc: "Transformez données, utilisateurs, enregistrements et processus en un panneau gérable.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Logiciels sur mesure",
    shortDesc: "Développez des panneaux, plateformes, workflows et intégrations lorsque les outils standards ne suffisent pas.",
  },
};

const esHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Sitio web corporativo",
    shortDesc: "Presenta tu empresa, servicios y canales de contacto con un sitio fiable.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Catálogo de productos y pedidos por WhatsApp",
    shortDesc: "Muestra productos con claridad y lleva la demanda del cliente a WhatsApp o a un flujo de propuesta.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce y sistemas de venta",
    shortDesc: "Crea una estructura de venta con catálogo, carrito, seguimiento de pedidos, stock y gestión.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Sistemas de cita y reserva",
    shortDesc: "Reúne fecha, hora, disponibilidad, servicio y solicitud del cliente en un solo flujo.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Panel de administración y gestión empresarial",
    shortDesc: "Convierte datos, usuarios, registros y procesos en un panel gestionable.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Software a medida",
    shortDesc: "Desarrolla paneles, plataformas, flujos e integraciones cuando las herramientas estándar no bastan.",
  },
};

const arHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "موقع شركة",
    shortDesc: "اعرض شركتك وخدماتك وقنوات التواصل من خلال موقع موثوق.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "كتالوج منتجات وطلبات واتساب",
    shortDesc: "اعرض المنتجات بوضوح وانقل طلب العميل إلى واتساب أو مسار عرض السعر.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "تجارة إلكترونية وأنظمة بيع",
    shortDesc: "أنشئ هيكل بيع يشمل المنتجات والسلة وتتبع الطلبات والمخزون والإدارة.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "أنظمة مواعيد وحجوزات",
    shortDesc: "اجمع التاريخ والوقت والتوفر وطلب العميل في مسار واحد.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "لوحة إدارة وإدارة أعمال",
    shortDesc: "حوّل بيانات الشركة والمستخدمين والسجلات والعمليات إلى لوحة قابلة للإدارة.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "برمجيات مخصصة",
    shortDesc: "طوّر لوحات ومنصات وتدفقات وتكاملات عندما لا تكفي الأدوات الجاهزة.",
  },
};

const ruHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Корпоративный сайт",
    shortDesc: "Представьте компанию, услуги и каналы связи через сайт, вызывающий доверие.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Каталог товаров и заказы WhatsApp",
    shortDesc: "Покажите товары понятно и переводите запрос клиента в WhatsApp или форму предложения.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce и системы продаж",
    shortDesc: "Создайте структуру продаж с каталогом, корзиной, заказами, складом и управлением.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Системы записи и бронирования",
    shortDesc: "Собирайте дату, время, доступность, выбор услуги и запрос клиента в одном процессе.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Админ-панель и управление бизнесом",
    shortDesc: "Превратите данные, пользователей, записи и процессы бизнеса в управляемую панель.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Индивидуальные программные системы",
    shortDesc: "Разрабатывайте панели, платформы, workflow и интеграции, когда готовых инструментов недостаточно.",
  },
};

const ptHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Site institucional",
    shortDesc: "Apresente sua empresa, serviços e canais de contato com um site confiável.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Catálogo de produtos e pedidos por WhatsApp",
    shortDesc: "Mostre produtos com clareza e leve a demanda do cliente para WhatsApp ou fluxo de proposta.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce e sistemas de venda",
    shortDesc: "Crie uma estrutura de venda com catálogo, carrinho, acompanhamento de pedidos, estoque e gestão.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Sistemas de agendamento e reserva",
    shortDesc: "Reúna data, hora, disponibilidade, escolha de serviço e solicitação do cliente em um fluxo.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Painel administrativo e gestão empresarial",
    shortDesc: "Transforme dados, usuários, registros e processos da empresa em um painel gerenciável.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Sistemas de software sob medida",
    shortDesc: "Desenvolva painéis, plataformas, fluxos e integrações quando ferramentas prontas não forem suficientes.",
  },
};

const itHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Sito aziendale",
    shortDesc: "Presenta azienda, servizi e canali di contatto con un sito affidabile.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Catalogo prodotti e ordini WhatsApp",
    shortDesc: "Mostra i prodotti con chiarezza e porta la richiesta del cliente verso WhatsApp o un flusso di preventivo.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce e sistemi di vendita",
    shortDesc: "Crea una struttura di vendita con catalogo, carrello, gestione ordini, stock e pannello.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Sistemi di appuntamento e prenotazione",
    shortDesc: "Raccogli data, ora, disponibilità, scelta del servizio e richiesta cliente in un unico flusso.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Pannello amministrativo e gestione aziendale",
    shortDesc: "Trasforma dati, utenti, registri e processi aziendali in un pannello gestibile.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Software su misura",
    shortDesc: "Sviluppa pannelli, piattaforme, flussi e integrazioni quando gli strumenti pronti non bastano.",
  },
};

const nlHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "Bedrijfswebsite",
    shortDesc: "Presenteer je bedrijf, diensten en contactkanalen met een betrouwbare website.",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "Productcatalogus en WhatsApp-bestellingen",
    shortDesc: "Toon producten duidelijk en leid klantvraag naar WhatsApp of een offerteflow.",
  },
  "e-ticaret-satis-sistemleri": {
    title: "E-commerce en verkoopsystemen",
    shortDesc: "Bouw een verkoopstructuur met catalogus, winkelwagen, orderbeheer, voorraad en beheer.",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "Afspraak- en reserveringssystemen",
    shortDesc: "Verzamel datum, tijd, beschikbaarheid, dienstkeuze en klantvraag in één flow.",
  },
  "admin-panel-isletme-yonetimi": {
    title: "Beheerpaneel en bedrijfsbeheer",
    shortDesc: "Maak bedrijfsdata, gebruikers, registraties en processen beheerbaar in één paneel.",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "Maatwerksoftware",
    shortDesc: "Ontwikkel paneels, platforms, workflows en integraties wanneer standaardtools niet genoeg zijn.",
  },
};

const zhHomepageServiceText: Record<string, { title: string; shortDesc: string }> = {
  "tanitim-kurumsal-web-siteleri": {
    title: "企业网站",
    shortDesc: "通过可信赖的网站展示公司、服务和联系渠道。",
  },
  "urun-katalog-whatsapp-siparis": {
    title: "产品目录和 WhatsApp 订单",
    shortDesc: "清晰展示产品，并将客户需求引导到 WhatsApp 或报价流程。",
  },
  "e-ticaret-satis-sistemleri": {
    title: "电商和销售系统",
    shortDesc: "建立包含目录、购物车、订单跟踪、库存和管理需求的销售结构。",
  },
  "randevu-rezervasyon-sistemleri": {
    title: "预约和预订系统",
    shortDesc: "在一个流程中收集日期、时间、可用性、服务选择和客户请求。",
  },
  "admin-panel-isletme-yonetimi": {
    title: "管理面板和企业管理",
    shortDesc: "把业务数据、用户、记录和流程变成可管理的面板。",
  },
  "ozel-yazilim-premium-sistemler": {
    title: "定制软件系统",
    shortDesc: "当现成工具不够用时，开发定制面板、平台、工作流和集成。",
  },
};

const enTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / integration work",
    text: "A careful and capable freelancer who understands what the customer needs and works in a very organized way.",
    label: "Customer review",
  },
  "sefayama-bionluk": {
    projectType: "MENAR operation panel",
    text: "Overall, it was a good piece of work.",
    label: "Customer review",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR additional scope development",
    text: "Thank you.",
    label: "Customer review",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan property management system",
    text: "The process was handled with a flexible, constructive, and solution-oriented approach despite technical constraints and architectural changes.",
    label: "Customer review",
  },
};

const deTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marktplatz-XML / Integrationsarbeit",
    text: "Ein sorgfältiger und fähiger Freelancer, der Kundenbedürfnisse versteht und sehr strukturiert arbeitet.",
    label: "Kundenbewertung",
  },
  "sefayama-bionluk": {
    projectType: "MENAR Operationspanel",
    text: "Insgesamt war es eine gute Arbeit.",
    label: "Kundenbewertung",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR Zusatzumfang",
    text: "Vielen Dank.",
    label: "Kundenbewertung",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan Immobilienverwaltungssystem",
    text: "Der Prozess wurde trotz technischer Einschränkungen und Architekturänderungen flexibel, konstruktiv und lösungsorientiert geführt.",
    label: "Kundenbewertung",
  },
};

const frTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / travail d'intégration",
    text: "Un freelance soigneux et compétent, qui comprend les besoins du client et travaille de façon très organisée.",
    label: "Avis client",
  },
  "sefayama-bionluk": {
    projectType: "Panneau opérationnel MENAR",
    text: "Dans l'ensemble, c'était un bon travail.",
    label: "Avis client",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Développement de périmètre additionnel MENAR",
    text: "Merci.",
    label: "Avis client",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Système de gestion immobilière Mizan",
    text: "Le processus a été mené avec une approche flexible, constructive et orientée solution malgré les contraintes techniques et les changements d'architecture.",
    label: "Avis client",
  },
};

const esTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / trabajo de integración",
    text: "Un freelance cuidadoso y capaz, que entiende lo que el cliente necesita y trabaja de forma muy organizada.",
    label: "Opinión de cliente",
  },
  "sefayama-bionluk": {
    projectType: "Panel operativo MENAR",
    text: "En general, fue un buen trabajo.",
    label: "Opinión de cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Desarrollo de alcance adicional MENAR",
    text: "Gracias.",
    label: "Opinión de cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema de gestión inmobiliaria Mizan",
    text: "El proceso se gestionó con un enfoque flexible, constructivo y orientado a soluciones pese a restricciones técnicas y cambios de arquitectura.",
    label: "Opinión de cliente",
  },
};

const arTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "عمل XML marketplace / تكامل",
    text: "مستقل دقيق وقادر، يفهم حاجة العميل ويعمل بطريقة منظمة جداً.",
    label: "تقييم عميل",
  },
  "sefayama-bionluk": {
    projectType: "لوحة عمليات MENAR",
    text: "بشكل عام كان عملاً جيداً.",
    label: "تقييم عميل",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "تطوير نطاق إضافي لـ MENAR",
    text: "شكراً لك.",
    label: "تقييم عميل",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "نظام إدارة عقارات Mizan",
    text: "تمت إدارة العملية بمرونة وبنهج بنّاء وموجه للحلول رغم القيود التقنية وتغيرات البنية.",
    label: "تقييم عميل",
  },
};

const ruTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "XML marketplace / интеграционная работа",
    text: "Внимательный и компетентный специалист, который понимает потребность клиента и работает очень структурированно.",
    label: "Отзыв клиента",
  },
  "sefayama-bionluk": {
    projectType: "Операционная панель MENAR",
    text: "В целом это была хорошая работа.",
    label: "Отзыв клиента",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Дополнительный объем MENAR",
    text: "Спасибо.",
    label: "Отзыв клиента",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Система управления недвижимостью Mizan",
    text: "Процесс велся гибко, конструктивно и ориентированно на решение, несмотря на технические ограничения и изменения архитектуры.",
    label: "Отзыв клиента",
  },
};

const ptTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / trabalho de integração",
    text: "Um freelancer cuidadoso e competente, que entende a necessidade do cliente e trabalha de forma muito organizada.",
    label: "Avaliação de cliente",
  },
  "sefayama-bionluk": {
    projectType: "Painel operacional MENAR",
    text: "No geral, foi um bom trabalho.",
    label: "Avaliação de cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Desenvolvimento de escopo adicional MENAR",
    text: "Obrigado.",
    label: "Avaliação de cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema de gestão imobiliária Mizan",
    text: "O processo foi conduzido com uma abordagem flexível, construtiva e orientada a soluções, apesar das limitações técnicas e mudanças de arquitetura.",
    label: "Avaliação de cliente",
  },
};

const itTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / lavoro di integrazione",
    text: "Un professionista attento e competente, che capisce l'esigenza del cliente e lavora in modo molto organizzato.",
    label: "Recensione cliente",
  },
  "sefayama-bionluk": {
    projectType: "Pannello operativo MENAR",
    text: "Nel complesso è stato un buon lavoro.",
    label: "Recensione cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Sviluppo di ambito aggiuntivo MENAR",
    text: "Grazie.",
    label: "Recensione cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema di gestione immobiliare Mizan",
    text: "Il processo è stato gestito con un approccio flessibile, costruttivo e orientato alla soluzione, nonostante vincoli tecnici e cambi di architettura.",
    label: "Recensione cliente",
  },
};

const nlTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / integratiewerk",
    text: "Een zorgvuldige en competente professional die de klantbehoefte begrijpt en zeer georganiseerd werkt.",
    label: "Klantbeoordeling",
  },
  "sefayama-bionluk": {
    projectType: "MENAR operationeel paneel",
    text: "Over het algemeen was het goed werk.",
    label: "Klantbeoordeling",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Aanvullende MENAR-scopeontwikkeling",
    text: "Bedankt.",
    label: "Klantbeoordeling",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan vastgoedbeheersysteem",
    text: "Het proces werd flexibel, constructief en oplossingsgericht geleid ondanks technische beperkingen en architectuurwijzigingen.",
    label: "Klantbeoordeling",
  },
};

const zhTestimonials: Record<string, { projectType: string; text: string; label: string }> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / 集成工作",
    text: "一位细致且有能力的专业人士，能够理解客户需求，并以非常有条理的方式工作。",
    label: "客户评价",
  },
  "sefayama-bionluk": {
    projectType: "MENAR 运营面板",
    text: "整体来说，这是一项不错的工作。",
    label: "客户评价",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR 追加范围开发",
    text: "谢谢。",
    label: "客户评价",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan 房产管理系统",
    text: "尽管存在技术限制和架构变更，整个过程仍以灵活、建设性和解决问题为导向的方式推进。",
    label: "客户评价",
  },
};

const homeCopy = {
  tr: {
    heroLine1: "İşletmeniz için web sitesi, katalog,",
    heroLine2Prefix: "e-ticaret ve özel sistemler",
    rotatingLabel: "geliştiriyoruz tasarlıyoruz yayına alıyoruz büyütüyoruz",
    rotatingWords: ["geliştiriyoruz.", "tasarlıyoruz.", "yayına alıyoruz.", "büyütüyoruz."],
    heroDesc: "Web sitesi, ürün katalog sistemi, WhatsApp sipariş akışı, randevu/rezervasyon altyapısı, e-ticaret, admin panel, entegrasyon ve özel yazılım çözümlerini işletmenizin ihtiyacına göre planlayıp geliştiriyoruz.",
    servicesCta: "Hizmetleri İncele",
    quoteCta: "Teklif Al",
    approachCta: "Yaklaşımımızı Oku",
    examplesCta: "Canlı Örnekleri Gör",
    trustSignals,
    quickTitle: "Ne yaptırmak istiyorsunuz?",
    quickDesc: "En doğru başlangıç noktası ihtiyacınıza göre seçilir. Hazır başlıktan ilerleyebilir veya teklif formunda kapsamı birlikte netleştirebiliriz.",
    unsureCta: "Emin Değilim, Birlikte Netleştirelim",
    quickOptions: quickStartOptions,
    starterLabel: "Başlangıç seçimi",
    detailCta: "Detayına Git",
    systemsTitle: "İşletmeniz için hazırlanabilecek sistem türleri",
    systemsDesc: "Kurumsal site, katalog, WhatsApp sipariş, e-ticaret, randevu ve admin panel gibi yapılar ihtiyaca göre tek projede birleştirilebilir.",
    learnMore: "Detaylı Öğren",
    allServices: "37 Hizmetin Tamamını Gör",
    demoPortfolioKicker: "Canlı örnek / portföy ayrımı",
    demoPortfolioTitle: "Gezilecek demo ile tamamlanan işi ayrı tutuyoruz.",
    demoPortfolioDesc: "Canlı örnekler, işletmenize uyarlanabilecek demo sistemlerdir. Portföy ise tamamlanan gerçek müşteri işlerini ve izin durumuna göre anonim tutulan proje çıktılarını gösterir.",
    demoLabel: "Demo sistemler",
    demoTitle: "Canlı Örnekleri Gör",
    demoDesc: "Uyarlanabilir web, katalog, panel, randevu ve entegrasyon örnekleri.",
    portfolioLabel: "Gerçek işler",
    portfolioTitle: "Portföyü İncele",
    portfolioDesc: "Tamamlanan müşteri işleri, sonuçlar ve değerlendirme sinyalleri.",
    inspect: "İncele",
    problemsTitle: "Hangi problemleri çözüyoruz?",
    problemsDesc: "Amaç sadece sayfa yapmak değil; işletmenin dağınık işlerini daha yönetilebilir ve teklif alınabilir hale getirmek.",
    problems: [
      ["Excel ve WhatsApp dağınıklığı", "Müşteri, stok, sipariş, görev veya ödeme takibini tek panelde toplamak."],
      ["Ne alacağını görememe", "Canlı örneklerle müşterinin karar vermeden önce sistemi gezebilmesini sağlamak."],
      ["Belirsiz kapsam ve fiyat", "Proje başlamadan önce modül, teslim, destek ve ek iş sınırlarını netleştirmek."],
    ],
    testimonialsTitle: "Tamamlanan işlerden gelen müşteri yorumları",
    testimonialsDesc: "Yayına alınan yorumlar tamamlanan işlerden gelen müşteri değerlendirmelerinden oluşur. Gerçek müşteri işleri Portföy tarafında ayrı gösterilir.",
    portfolioReviews: "Portföy ve Yorumlar",
    ratingLabel: "Puan",
    merchantTitle: "Dükkan sahibinin anlayacağı, kullanacağı ve güveneceği sistemler.",
    merchantItems: [
      { title: "Ne Alacağınızı Baştan Netleştirin", desc: "Sayfa yapısı, modüller, yönetim paneli ihtiyacı ve teslim kapsamı proje başlamadan önce anlaşılır şekilde belirlenir." },
      { title: "Mobil Uyumlu Yapı", desc: "Web sitesi ve paneller telefon, tablet ve bilgisayarda rahat kullanılacak şekilde hazırlanır." },
      { title: "Net Kapsam", desc: "Sayfa sayısı, modüller, ekstra istekler, teslim süreci ve fiyatlandırma baştan konuşulur." },
      { title: "Net İlerleme", desc: "Kapsam, teslim süreci ve ek taleplerin nasıl ele alınacağı baştan netleştirilir." },
    ],
    processTitle: "Nasıl ilerliyoruz?",
    processSteps,
    techTitle: "Projelerde kullanılan teknolojiler",
    techDesc: "Projeler gerçek web uygulamalarında kullanılan pratik ve tam kapsamlı geliştirme araçları üzerine kuruludur.",
    finalTitle: "Hangi sistemin uygun olduğunu bilmiyorsanız birlikte netleştirebiliriz.",
    finalDesc: "İşletmenizi, ihtiyacınızı ve istediğiniz özellikleri yazmanız yeterli. Uygun yapı, kapsam, süre ve fiyat birlikte netleştirilebilir.",
    finalCta: "Projem İçin Teklif Al",
  },
  en: {
    heroLine1: "Websites, catalogs,",
    heroLine2Prefix: "e-commerce and custom systems",
    rotatingLabel: "we build design launch grow",
    rotatingWords: ["we build.", "we design.", "we launch.", "we grow."],
    heroDesc: "We plan and build websites, product catalog systems, WhatsApp order flows, appointment/reservation structures, e-commerce, admin panels, integrations, and custom software according to your business needs.",
    servicesCta: "Explore Services",
    quoteCta: "Get a Quote",
    approachCta: "Read Our Approach",
    examplesCta: "View Live Examples",
    trustSignals: [
      ["Completed work", `${bionlukStats.reviewCount} customer reviews and ${bionlukStats.completedOrders} completed-work experience.`],
      ["Adaptable live examples", "Live examples are not real customer work; they are demo systems that can be adapted to similar needs."],
      ["Clear scope", "Pages, modules, delivery expectations, and extra development boundaries are discussed from the start."],
      ["Post-delivery support", "Maintenance, new modules, and development needs can be planned separately after delivery."],
    ],
    quickTitle: "What do you want to build?",
    quickDesc: "The right starting point is selected according to your need. You can begin with a ready topic or clarify the scope together through the quote form.",
    unsureCta: "I’m Not Sure, Let’s Clarify Together",
    quickOptions: [
      { title: "I need a website", desc: "A trustworthy corporate, service, or landing page presence is created.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "I need catalog / WhatsApp orders", desc: "Products are presented clearly and customer demand moves to WhatsApp or quote flow.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "I need an appointment system", desc: "Date, time, availability, and customer request are collected in one appointment flow.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "I need an admin panel", desc: "Business data, users, records, and processes become manageable.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "I need CRM / stock / order tracking", desc: "Customer, product, stock, order, or quote processes are tracked from one panel.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "I need integration", desc: "Marketplace, XML, API, payment, cargo, or external service connections are planned.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Starting point",
    detailCta: "Go to Details",
    systemsTitle: "System types that can be built for your business",
    systemsDesc: "Corporate websites, catalogs, WhatsApp ordering, e-commerce, appointment flows, and admin panels can be combined in one project when needed.",
    learnMore: "Learn More",
    allServices: "See All 37 Services",
    demoPortfolioKicker: "Live examples / portfolio distinction",
    demoPortfolioTitle: "We keep browsable demos and completed work separate.",
    demoPortfolioDesc: "Live examples are demo systems that can be adapted to your business. Portfolio items show completed customer projects and outputs that may be anonymized depending on permission.",
    demoLabel: "Demo systems",
    demoTitle: "View Live Examples",
    demoDesc: "Adaptable website, catalog, panel, appointment, and integration examples.",
    portfolioLabel: "Real work",
    portfolioTitle: "Explore Portfolio",
    portfolioDesc: "Completed customer projects, outcomes, and trust signals.",
    inspect: "View",
    problemsTitle: "What problems do we solve?",
    problemsDesc: "The goal is not only to create pages; it is to make scattered business operations more manageable and easier to turn into qualified requests.",
    problems: [
      ["Excel and WhatsApp clutter", "Bring customer, stock, order, task, or payment tracking into one panel."],
      ["Not seeing what you will get", "Let customers browse live examples before deciding."],
      ["Unclear scope and pricing", "Clarify modules, delivery, support, and extra work boundaries before the project starts."],
    ],
    testimonialsTitle: "Customer reviews from completed work",
    testimonialsDesc: "Published reviews come from completed customer work. Real customer projects are shown separately in the portfolio area.",
    portfolioReviews: "Portfolio and Reviews",
    ratingLabel: "Rating",
    merchantTitle: "Systems a business owner can understand, use, and trust.",
    merchantItems: [
      { title: "Clarify What You Will Get", desc: "Page structure, modules, admin panel needs, and delivery scope are defined clearly before development starts." },
      { title: "Mobile-Friendly Structure", desc: "Websites and panels are prepared for comfortable use on phone, tablet, and desktop." },
      { title: "Clear Scope", desc: "Page count, modules, extra requests, delivery flow, and pricing are discussed from the beginning." },
      { title: "Clear Progress", desc: "Scope, delivery process, and how extra requests will be handled are clarified upfront." },
    ],
    processTitle: "How do we move forward?",
    processSteps: enProcessSteps,
    techTitle: "Technologies used in projects",
    techDesc: "Projects are built on practical and full-featured development tools used in real web applications.",
    finalTitle: "If you are not sure which system fits, we can clarify it together.",
    finalDesc: "Tell us about your business, your need, and the features you want. The right structure, scope, timeline, and price can be clarified together.",
    finalCta: "Get a Quote for My Project",
  },
  de: {
    heroLine1: "Websites, Kataloge,",
    heroLine2Prefix: "E-Commerce und individuelle Systeme",
    rotatingLabel: "wir entwickeln gestalten veröffentlichen wachsen",
    rotatingWords: ["entwickeln wir.", "gestalten wir.", "bringen wir online.", "bauen wir aus."],
    heroDesc: "Wir planen und entwickeln Websites, Produktkataloge, WhatsApp-Bestellabläufe, Termin- und Reservierungssysteme, E-Commerce, Admin-Panels, Integrationen und individuelle Software passend zu Ihrem Unternehmen.",
    servicesCta: "Leistungen ansehen",
    quoteCta: "Angebot anfragen",
    approachCta: "Unseren Ansatz lesen",
    examplesCta: "Live-Beispiele ansehen",
    trustSignals: [
      ["Abgeschlossene Arbeiten", `${bionlukStats.reviewCount} Kundenbewertungen und ${bionlukStats.completedOrders} abgeschlossene Arbeiten.`],
      ["Anpassbare Live-Beispiele", "Live-Beispiele sind keine echten Kundenarbeiten, sondern Demo-Systeme, die an ähnliche Bedürfnisse angepasst werden können."],
      ["Klarer Umfang", "Seiten, Module, Lieferung und Grenzen für Zusatzentwicklung werden von Anfang an besprochen."],
      ["Support nach Übergabe", "Wartung, neue Module und weitere Entwicklungen können nach der Lieferung separat geplant werden."],
    ],
    quickTitle: "Was möchten Sie umsetzen lassen?",
    quickDesc: "Der richtige Startpunkt wird nach Ihrem Bedarf gewählt. Sie können mit einem fertigen Thema beginnen oder den Umfang über das Anfrageformular gemeinsam klären.",
    unsureCta: "Ich bin unsicher, gemeinsam klären",
    quickOptions: [
      { title: "Ich brauche eine Website", desc: "Eine vertrauenswürdige Unternehmens-, Leistungs- oder Landingpage-Präsenz wird erstellt.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Ich brauche Katalog / WhatsApp-Bestellung", desc: "Produkte werden klar dargestellt und die Nachfrage läuft in WhatsApp oder in einen Angebotsprozess.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Ich brauche ein Terminsystem", desc: "Datum, Uhrzeit, Verfügbarkeit und Kundenanfrage werden in einem Terminablauf gesammelt.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Ich brauche ein Admin-Panel", desc: "Geschäftsdaten, Nutzer, Einträge und Prozesse werden verwaltbar.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Ich brauche CRM / Bestand / Bestellverfolgung", desc: "Kunden-, Produkt-, Lager-, Bestell- oder Angebotsprozesse werden aus einem Panel verfolgt.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Ich brauche eine Integration", desc: "Marktplatz-, XML-, API-, Zahlungs-, Versand- oder externe Service-Anbindungen werden geplant.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Startpunkt",
    detailCta: "Details ansehen",
    systemsTitle: "Systemarten, die für Ihr Unternehmen gebaut werden können",
    systemsDesc: "Unternehmenswebsite, Katalog, WhatsApp-Bestellung, E-Commerce, Terminabläufe und Admin-Panels können bei Bedarf in einem Projekt kombiniert werden.",
    learnMore: "Mehr erfahren",
    allServices: "Alle 37 Leistungen ansehen",
    demoPortfolioKicker: "Live-Beispiele / Portfolio-Trennung",
    demoPortfolioTitle: "Wir trennen begehbare Demos und abgeschlossene Arbeiten klar.",
    demoPortfolioDesc: "Live-Beispiele sind Demo-Systeme, die an Ihr Unternehmen angepasst werden können. Portfolio-Einträge zeigen abgeschlossene Kundenprojekte und je nach Freigabe anonymisierte Ergebnisse.",
    demoLabel: "Demo-Systeme",
    demoTitle: "Live-Beispiele ansehen",
    demoDesc: "Anpassbare Beispiele für Website, Katalog, Panel, Termin und Integration.",
    portfolioLabel: "Echte Arbeiten",
    portfolioTitle: "Portfolio ansehen",
    portfolioDesc: "Abgeschlossene Kundenprojekte, Ergebnisse und Vertrauenssignale.",
    inspect: "Ansehen",
    problemsTitle: "Welche Probleme lösen wir?",
    problemsDesc: "Ziel ist nicht nur eine Seite zu bauen, sondern verstreute Geschäftsabläufe besser steuerbar und anfragefähig zu machen.",
    problems: [
      ["Excel- und WhatsApp-Chaos", "Kunden-, Bestands-, Bestell-, Aufgaben- oder Zahlungsabläufe in einem Panel bündeln."],
      ["Nicht sehen, was geliefert wird", "Kunden können Live-Beispiele ansehen, bevor sie entscheiden."],
      ["Unklarer Umfang und Preis", "Module, Lieferung, Support und Zusatzgrenzen werden vor Projektbeginn geklärt."],
    ],
    testimonialsTitle: "Kundenstimmen aus abgeschlossenen Arbeiten",
    testimonialsDesc: "Veröffentlichte Bewertungen stammen aus abgeschlossenen Kundenarbeiten. Echte Kundenprojekte werden separat im Portfolio gezeigt.",
    portfolioReviews: "Portfolio und Bewertungen",
    ratingLabel: "Bewertung",
    merchantTitle: "Systeme, die ein Unternehmer versteht, nutzt und denen er vertraut.",
    merchantItems: [
      { title: "Von Anfang an wissen, was Sie erhalten", desc: "Seitenstruktur, Module, Admin-Panel-Bedarf und Lieferumfang werden vor Entwicklungsbeginn klar definiert." },
      { title: "Mobilfreundliche Struktur", desc: "Websites und Panels werden für komfortable Nutzung auf Smartphone, Tablet und Desktop vorbereitet." },
      { title: "Klarer Umfang", desc: "Seitenanzahl, Module, Zusatzwünsche, Lieferprozess und Preisgestaltung werden früh besprochen." },
      { title: "Klarer Fortschritt", desc: "Umfang, Lieferprozess und Umgang mit Zusatzwünschen werden vorab geklärt." },
    ],
    processTitle: "Wie gehen wir vor?",
    processSteps: deProcessSteps,
    techTitle: "Technologien in Projekten",
    techDesc: "Projekte basieren auf praktischen und vollwertigen Entwicklungswerkzeugen, die in echten Webanwendungen genutzt werden.",
    finalTitle: "Wenn Sie nicht sicher sind, welches System passt, klären wir es gemeinsam.",
    finalDesc: "Beschreiben Sie Ihr Unternehmen, Ihren Bedarf und gewünschte Funktionen. Die passende Struktur, der Umfang, Zeitplan und Preis können gemeinsam geklärt werden.",
    finalCta: "Angebot für mein Projekt anfragen",
  },
  fr: {
    heroLine1: "Sites web, catalogues,",
    heroLine2Prefix: "e-commerce et systèmes sur mesure",
    rotatingLabel: "nous développons concevons lançons faisons grandir",
    rotatingWords: ["nous développons.", "nous concevons.", "nous lançons.", "nous faisons grandir."],
    heroDesc: "Nous planifions et développons des sites web, systèmes de catalogue produit, parcours de commande WhatsApp, structures de rendez-vous/réservation, e-commerce, panneaux d'administration, intégrations et logiciels sur mesure selon les besoins de votre entreprise.",
    servicesCta: "Voir les services",
    quoteCta: "Demander un devis",
    approachCta: "Lire notre approche",
    examplesCta: "Voir les exemples en direct",
    trustSignals: [
      ["Travaux terminés", `${bionlukStats.reviewCount} avis client et ${bionlukStats.completedOrders} expériences de travaux terminés.`],
      ["Exemples en direct adaptables", "Les exemples en direct ne sont pas de vrais travaux client ; ce sont des systèmes de démonstration adaptables à des besoins similaires."],
      ["Périmètre clair", "Pages, modules, livraison et limites de développement supplémentaire sont discutés dès le départ."],
      ["Support après livraison", "Maintenance, nouveaux modules et besoins d'amélioration peuvent être planifiés séparément après la livraison."],
    ],
    quickTitle: "Que souhaitez-vous faire réaliser ?",
    quickDesc: "Le bon point de départ est choisi selon votre besoin. Vous pouvez partir d'un sujet prêt ou clarifier le périmètre avec le formulaire de devis.",
    unsureCta: "Je ne suis pas sûr, clarifions ensemble",
    quickOptions: [
      { title: "Je veux un site web", desc: "Une présence d'entreprise, de service ou landing page fiable est créée.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Je veux un catalogue / commande WhatsApp", desc: "Les produits sont présentés clairement et la demande client va vers WhatsApp ou un devis.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Je veux un système de rendez-vous", desc: "Date, heure, disponibilité et demande client sont collectées dans un seul flux.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Je veux un panneau d'administration", desc: "Données, utilisateurs, enregistrements et processus deviennent gérables.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Je veux CRM / stock / suivi des commandes", desc: "Les processus client, produit, stock, commande ou devis sont suivis depuis un panneau.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Je veux une intégration", desc: "Connexions marketplace, XML, API, paiement, livraison ou services externes sont planifiées.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Point de départ",
    detailCta: "Voir le détail",
    systemsTitle: "Types de systèmes pouvant être préparés pour votre entreprise",
    systemsDesc: "Site d'entreprise, catalogue, commande WhatsApp, e-commerce, rendez-vous et panneau d'administration peuvent être combinés dans un même projet si besoin.",
    learnMore: "En savoir plus",
    allServices: "Voir les 37 services",
    demoPortfolioKicker: "Exemples en direct / distinction portfolio",
    demoPortfolioTitle: "Nous séparons les démonstrations consultables et les travaux terminés.",
    demoPortfolioDesc: "Les exemples en direct sont des systèmes de démonstration adaptables à votre entreprise. Le portfolio montre des projets client terminés et des résultats anonymisés selon les autorisations.",
    demoLabel: "Systèmes de démonstration",
    demoTitle: "Voir les exemples en direct",
    demoDesc: "Exemples adaptables de site, catalogue, panneau, rendez-vous et intégration.",
    portfolioLabel: "Travaux réels",
    portfolioTitle: "Voir le portfolio",
    portfolioDesc: "Projets client terminés, résultats et signaux de confiance.",
    inspect: "Voir",
    problemsTitle: "Quels problèmes résolvons-nous ?",
    problemsDesc: "L'objectif n'est pas seulement de créer des pages ; il est de rendre les opérations dispersées plus gérables et plus faciles à transformer en demandes qualifiées.",
    problems: [
      ["Désordre Excel et WhatsApp", "Regrouper le suivi client, stock, commande, tâche ou paiement dans un seul panneau."],
      ["Ne pas voir ce qui sera livré", "Permettre aux clients de parcourir des exemples en direct avant de décider."],
      ["Périmètre et prix flous", "Clarifier modules, livraison, support et limites de travail supplémentaire avant le début du projet."],
    ],
    testimonialsTitle: "Avis client issus de travaux terminés",
    testimonialsDesc: "Les avis publiés proviennent de travaux client terminés. Les vrais projets client sont présentés séparément dans le portfolio.",
    portfolioReviews: "Portfolio et avis",
    ratingLabel: "Note",
    merchantTitle: "Des systèmes qu'un dirigeant peut comprendre, utiliser et auxquels il peut faire confiance.",
    merchantItems: [
      { title: "Clarifier ce que vous recevrez", desc: "Structure de page, modules, besoin de panneau d'administration et périmètre de livraison sont définis clairement avant le développement." },
      { title: "Structure adaptée au mobile", desc: "Sites et panneaux sont préparés pour une utilisation confortable sur téléphone, tablette et ordinateur." },
      { title: "Périmètre clair", desc: "Nombre de pages, modules, demandes supplémentaires, livraison et tarification sont discutés dès le départ." },
      { title: "Progression claire", desc: "Périmètre, processus de livraison et gestion des demandes additionnelles sont clarifiés en amont." },
    ],
    processTitle: "Comment avançons-nous ?",
    processSteps: frProcessSteps,
    techTitle: "Technologies utilisées dans les projets",
    techDesc: "Les projets reposent sur des outils de développement pratiques et complets utilisés dans de vraies applications web.",
    finalTitle: "Si vous ne savez pas quel système convient, nous pouvons le clarifier ensemble.",
    finalDesc: "Décrivez votre entreprise, votre besoin et les fonctionnalités souhaitées. La bonne structure, le périmètre, le délai et le prix peuvent être clarifiés ensemble.",
    finalCta: "Demander un devis pour mon projet",
  },
  es: {
    heroLine1: "Sitios web, catálogos,",
    heroLine2Prefix: "e-commerce y sistemas a medida",
    rotatingLabel: "desarrollamos diseñamos lanzamos hacemos crecer",
    rotatingWords: ["desarrollamos.", "diseñamos.", "lanzamos.", "hacemos crecer."],
    heroDesc: "Planificamos y desarrollamos sitios web, sistemas de catálogo de productos, flujos de pedido por WhatsApp, estructuras de cita/reserva, e-commerce, paneles de administración, integraciones y software a medida según las necesidades de tu empresa.",
    servicesCta: "Ver servicios",
    quoteCta: "Solicitar propuesta",
    approachCta: "Leer nuestro enfoque",
    examplesCta: "Ver ejemplos en vivo",
    trustSignals: [
      ["Trabajos completados", `${bionlukStats.reviewCount} opiniones de clientes y ${bionlukStats.completedOrders} trabajos completados.`],
      ["Ejemplos en vivo adaptables", "Los ejemplos en vivo no son trabajos reales de clientes; son sistemas demo adaptables a necesidades similares."],
      ["Alcance claro", "Páginas, módulos, entrega y límites de desarrollo adicional se hablan desde el inicio."],
      ["Soporte posterior a la entrega", "Mantenimiento, nuevos módulos y necesidades de mejora pueden planificarse por separado tras la entrega."],
    ],
    quickTitle: "¿Qué quieres construir?",
    quickDesc: "El punto de partida correcto se elige según tu necesidad. Puedes empezar desde un tema preparado o aclarar el alcance mediante el formulario de propuesta.",
    unsureCta: "No estoy seguro, aclaremos juntos",
    quickOptions: [
      { title: "Quiero un sitio web", desc: "Se crea una presencia corporativa, de servicios o landing page fiable.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Quiero catálogo / pedidos por WhatsApp", desc: "Los productos se muestran con claridad y la demanda pasa a WhatsApp o a un flujo de propuesta.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Quiero un sistema de citas", desc: "Fecha, hora, disponibilidad y solicitud del cliente se reúnen en un solo flujo.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Quiero un panel de administración", desc: "Datos, usuarios, registros y procesos de la empresa se vuelven gestionables.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Quiero CRM / stock / seguimiento de pedidos", desc: "Clientes, productos, stock, pedidos o propuestas se siguen desde un solo panel.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Quiero integración", desc: "Se planifican conexiones con marketplaces, XML, API, pagos, envíos o servicios externos.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Punto de partida",
    detailCta: "Ver detalle",
    systemsTitle: "Tipos de sistemas que podemos preparar para tu empresa",
    systemsDesc: "Sitio corporativo, catálogo, pedidos por WhatsApp, e-commerce, citas y paneles de administración pueden combinarse en un solo proyecto si hace falta.",
    learnMore: "Saber más",
    allServices: "Ver los 37 servicios",
    demoPortfolioKicker: "Diferencia entre ejemplos en vivo y portafolio",
    demoPortfolioTitle: "Separamos las demos navegables de los trabajos completados.",
    demoPortfolioDesc: "Los ejemplos en vivo son sistemas demo que pueden adaptarse a tu empresa. El portafolio muestra proyectos reales completados y resultados que pueden anonimizarse según el permiso.",
    demoLabel: "Sistemas demo",
    demoTitle: "Ver ejemplos en vivo",
    demoDesc: "Ejemplos adaptables de sitio web, catálogo, panel, cita e integración.",
    portfolioLabel: "Trabajos reales",
    portfolioTitle: "Ver portafolio",
    portfolioDesc: "Proyectos de clientes completados, resultados y señales de confianza.",
    inspect: "Ver",
    problemsTitle: "¿Qué problemas resolvemos?",
    problemsDesc: "El objetivo no es solo crear páginas; es convertir operaciones dispersas en procesos más gestionables y fáciles de convertir en solicitudes cualificadas.",
    problems: [
      ["Desorden de Excel y WhatsApp", "Reunir seguimiento de clientes, stock, pedidos, tareas o pagos en un solo panel."],
      ["No ver qué se recibirá", "Permitir que el cliente navegue ejemplos en vivo antes de decidir."],
      ["Alcance y precio poco claros", "Aclarar módulos, entrega, soporte y límites de trabajo adicional antes de empezar."],
    ],
    testimonialsTitle: "Opiniones de clientes de trabajos completados",
    testimonialsDesc: "Las opiniones publicadas provienen de trabajos completados. Los proyectos reales de clientes se muestran por separado en el portafolio.",
    portfolioReviews: "Portafolio y opiniones",
    ratingLabel: "Puntuación",
    merchantTitle: "Sistemas que un dueño de negocio puede entender, usar y confiar.",
    merchantItems: [
      { title: "Aclara qué recibirás", desc: "Estructura de páginas, módulos, necesidad de panel y alcance de entrega se definen con claridad antes del desarrollo." },
      { title: "Estructura compatible con móvil", desc: "Sitios y paneles se preparan para usarse cómodamente en teléfono, tablet y ordenador." },
      { title: "Alcance claro", desc: "Número de páginas, módulos, solicitudes extra, entrega y precio se hablan desde el principio." },
      { title: "Progreso claro", desc: "El alcance, el proceso de entrega y la gestión de solicitudes adicionales se aclaran por adelantado." },
    ],
    processTitle: "¿Cómo avanzamos?",
    processSteps: esProcessSteps,
    techTitle: "Tecnologías utilizadas en los proyectos",
    techDesc: "Los proyectos se construyen sobre herramientas prácticas y completas usadas en aplicaciones web reales.",
    finalTitle: "Si no sabes qué sistema encaja, podemos aclararlo juntos.",
    finalDesc: "Cuéntanos sobre tu empresa, tu necesidad y las funciones que quieres. La estructura, el alcance, el plazo y el precio adecuados pueden aclararse juntos.",
    finalCta: "Solicitar propuesta para mi proyecto",
  },
  ar: {
    heroLine1: "مواقع ويب، كتالوجات،",
    heroLine2Prefix: "تجارة إلكترونية وأنظمة مخصصة",
    rotatingLabel: "نطوّر نصمّم نطلق نوسّع",
    rotatingWords: ["نطوّر.", "نصمّم.", "نطلق.", "نوسّع."],
    heroDesc: "نخطط ونطوّر مواقع ويب، أنظمة كتالوج منتجات، مسارات طلب عبر واتساب، أنظمة مواعيد وحجوزات، تجارة إلكترونية، لوحات إدارة، تكاملات وبرمجيات مخصصة حسب حاجة شركتك.",
    servicesCta: "استعرض الخدمات",
    quoteCta: "اطلب عرضاً",
    approachCta: "اقرأ منهجنا",
    examplesCta: "شاهد الأمثلة المباشرة",
    trustSignals: [
      ["أعمال مكتملة", `${bionlukStats.reviewCount} تقييمات عملاء و${bionlukStats.completedOrders} تجربة عمل مكتملة.`],
      ["أمثلة مباشرة قابلة للتكييف", "الأمثلة المباشرة ليست أعمال عملاء حقيقية؛ إنها أنظمة تجريبية يمكن تكييفها مع احتياجات مشابهة."],
      ["نطاق واضح", "تتم مناقشة الصفحات والوحدات والتسليم وحدود التطوير الإضافي من البداية."],
      ["دعم بعد التسليم", "يمكن تخطيط الصيانة والوحدات الجديدة واحتياجات التطوير بعد التسليم بشكل منفصل."],
    ],
    quickTitle: "ماذا تريد أن تنشئ؟",
    quickDesc: "يتم اختيار نقطة البداية الصحيحة حسب حاجتك. يمكنك البدء من عنوان جاهز أو توضيح النطاق معنا عبر نموذج العرض.",
    unsureCta: "لست متأكداً، لنوضح الأمر معاً",
    quickOptions: [
      { title: "أريد موقع ويب", desc: "يتم إنشاء حضور موثوق لشركة أو خدمة أو صفحة بيع.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "أريد كتالوج / طلبات واتساب", desc: "تُعرض المنتجات بوضوح وينتقل طلب العميل إلى واتساب أو مسار عرض السعر.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "أريد نظام مواعيد", desc: "يتم جمع التاريخ والوقت والتوفر وطلب العميل في مسار واحد.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "أريد لوحة إدارة", desc: "تصبح بيانات الشركة والمستخدمون والسجلات والعمليات قابلة للإدارة.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "أريد CRM / مخزون / تتبع طلبات", desc: "يتم تتبع العملاء والمنتجات والمخزون والطلبات أو العروض من لوحة واحدة.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "أريد تكاملاً", desc: "يتم تخطيط ربط marketplaces وXML وAPI والدفع والشحن أو الخدمات الخارجية.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "نقطة البداية",
    detailCta: "اذهب للتفاصيل",
    systemsTitle: "أنواع الأنظمة التي يمكن إعدادها لشركتك",
    systemsDesc: "يمكن دمج موقع الشركة والكتالوج وطلبات واتساب والتجارة الإلكترونية والمواعيد ولوحات الإدارة في مشروع واحد عند الحاجة.",
    learnMore: "اعرف المزيد",
    allServices: "شاهد كل الخدمات الـ 37",
    demoPortfolioKicker: "الفرق بين الأمثلة المباشرة والأعمال المنجزة",
    demoPortfolioTitle: "نفصل بين الديموهات القابلة للتصفح والأعمال المكتملة.",
    demoPortfolioDesc: "الأمثلة المباشرة هي أنظمة تجريبية يمكن تكييفها مع شركتك. أما الأعمال المنجزة فتُظهر مشاريع عملاء حقيقية ونتائج قد تُعرض بشكل مجهول حسب الإذن.",
    demoLabel: "أنظمة تجريبية",
    demoTitle: "شاهد الأمثلة المباشرة",
    demoDesc: "أمثلة قابلة للتكييف لموقع، كتالوج، لوحة، موعد وتكامل.",
    portfolioLabel: "أعمال حقيقية",
    portfolioTitle: "استعرض الأعمال المنجزة",
    portfolioDesc: "مشاريع عملاء مكتملة ونتائج وإشارات ثقة.",
    inspect: "استعرض",
    problemsTitle: "ما المشكلات التي نحلها؟",
    problemsDesc: "الهدف ليس إنشاء صفحات فقط؛ بل جعل عمليات الشركة المتفرقة أكثر قابلية للإدارة والتحويل إلى طلبات واضحة.",
    problems: [
      ["فوضى Excel وWhatsApp", "جمع تتبع العملاء والمخزون والطلبات والمهام أو المدفوعات في لوحة واحدة."],
      ["عدم رؤية ما سيتم استلامه", "إتاحة تصفح أمثلة مباشرة قبل اتخاذ القرار."],
      ["نطاق وسعر غير واضحين", "توضيح الوحدات والتسليم والدعم وحدود العمل الإضافي قبل بداية المشروع."],
    ],
    testimonialsTitle: "آراء العملاء من أعمال مكتملة",
    testimonialsDesc: "التقييمات المنشورة تأتي من أعمال مكتملة. مشاريع العملاء الحقيقية تظهر بشكل منفصل في قسم الأعمال المنجزة.",
    portfolioReviews: "الأعمال والتقييمات",
    ratingLabel: "التقييم",
    merchantTitle: "أنظمة يستطيع صاحب العمل فهمها واستخدامها والثقة بها.",
    merchantItems: [
      { title: "وضّح ما ستحصل عليه", desc: "يتم تحديد هيكل الصفحات والوحدات واحتياج لوحة الإدارة ونطاق التسليم بوضوح قبل التطوير." },
      { title: "هيكل مناسب للجوال", desc: "تُجهز المواقع واللوحات للاستخدام المريح على الهاتف والتابلت والحاسوب." },
      { title: "نطاق واضح", desc: "عدد الصفحات والوحدات والطلبات الإضافية ومسار التسليم والتسعير تُناقش منذ البداية." },
      { title: "تقدم واضح", desc: "يتم توضيح النطاق ومسار التسليم وكيفية التعامل مع الطلبات الإضافية مسبقاً." },
    ],
    processTitle: "كيف نتقدم؟",
    processSteps: arProcessSteps,
    techTitle: "التقنيات المستخدمة في المشاريع",
    techDesc: "تُبنى المشاريع على أدوات تطوير عملية وكاملة تُستخدم في تطبيقات ويب حقيقية.",
    finalTitle: "إذا لم تكن متأكداً من النظام المناسب، يمكننا توضيحه معاً.",
    finalDesc: "أخبرنا عن شركتك وحاجتك والميزات التي تريدها. يمكننا توضيح الهيكل والنطاق والمدة والسعر المناسبين معاً.",
    finalCta: "اطلب عرضاً لمشروعي",
  },
  pt: {
    heroLine1: "Sites, catálogos,",
    heroLine2Prefix: "e-commerce e sistemas sob medida",
    rotatingLabel: "desenvolvemos desenhamos lançamos ampliamos",
    rotatingWords: ["desenvolvemos.", "desenhamos.", "lançamos.", "ampliamos."],
    heroDesc: "Planejamos e desenvolvemos sites, sistemas de catálogo de produtos, fluxos de pedido por WhatsApp, estruturas de agendamento e reserva, e-commerce, painéis administrativos, integrações e software sob medida conforme a necessidade da sua empresa.",
    servicesCta: "Ver serviços",
    quoteCta: "Solicitar proposta",
    approachCta: "Ler nossa abordagem",
    examplesCta: "Ver exemplos ao vivo",
    trustSignals: [
      ["Trabalhos concluídos", `${bionlukStats.reviewCount} avaliações de clientes e ${bionlukStats.completedOrders} experiências de trabalhos concluídos.`],
      ["Exemplos ao vivo adaptáveis", "Exemplos ao vivo não são trabalhos reais de clientes; são sistemas de demonstração que podem ser adaptados a necessidades parecidas."],
      ["Escopo claro", "Páginas, módulos, entrega e limites de desenvolvimento extra são discutidos desde o início."],
      ["Suporte pós-entrega", "Manutenção, novos módulos e necessidades de desenvolvimento podem ser planejados separadamente após a entrega."],
    ],
    quickTitle: "O que você quer criar?",
    quickDesc: "O ponto de partida certo é escolhido de acordo com sua necessidade. Você pode começar por um tema pronto ou esclarecer o escopo junto pelo formulário de proposta.",
    unsureCta: "Não tenho certeza, vamos definir juntos",
    quickOptions: [
      { title: "Preciso de um site", desc: "É criada uma presença confiável para empresa, serviço ou landing page.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Preciso de catálogo / pedidos por WhatsApp", desc: "Os produtos são apresentados com clareza e a demanda segue para WhatsApp ou proposta.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Preciso de sistema de agendamento", desc: "Data, hora, disponibilidade e solicitação do cliente ficam em um único fluxo.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Preciso de painel administrativo", desc: "Dados, usuários, registros e processos da empresa ficam gerenciáveis.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Preciso de CRM / estoque / pedidos", desc: "Clientes, produtos, estoque, pedidos ou propostas são acompanhados em um painel.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Preciso de integração", desc: "Conexões com marketplace, XML, API, pagamento, envio ou serviços externos são planejadas.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Ponto de partida",
    detailCta: "Ir para detalhes",
    systemsTitle: "Tipos de sistemas que podem ser preparados para sua empresa",
    systemsDesc: "Site institucional, catálogo, pedidos por WhatsApp, e-commerce, agendamentos e painéis administrativos podem ser combinados em um único projeto quando necessário.",
    learnMore: "Saiba mais",
    allServices: "Ver todos os 37 serviços",
    demoPortfolioKicker: "Diferença entre exemplos ao vivo e portfólio",
    demoPortfolioTitle: "Separamos demos navegáveis de trabalhos concluídos.",
    demoPortfolioDesc: "Exemplos ao vivo são sistemas de demonstração que podem ser adaptados à sua empresa. O portfólio mostra projetos reais concluídos e resultados que podem ser anonimizados conforme a permissão.",
    demoLabel: "Sistemas demo",
    demoTitle: "Ver exemplos ao vivo",
    demoDesc: "Exemplos adaptáveis de site, catálogo, painel, agendamento e integração.",
    portfolioLabel: "Trabalhos reais",
    portfolioTitle: "Explorar portfólio",
    portfolioDesc: "Projetos concluídos, resultados e sinais de confiança.",
    inspect: "Ver",
    problemsTitle: "Quais problemas resolvemos?",
    problemsDesc: "O objetivo não é apenas criar páginas; é tornar operações dispersas da empresa mais gerenciáveis e mais fáceis de converter em solicitações qualificadas.",
    problems: [
      ["Bagunça entre Excel e WhatsApp", "Reunir clientes, estoque, pedidos, tarefas ou pagamentos em um único painel."],
      ["Não enxergar o que será entregue", "Permitir que o cliente navegue por exemplos ao vivo antes de decidir."],
      ["Escopo e preço pouco claros", "Definir módulos, entrega, suporte e limites de trabalho extra antes do início."],
    ],
    testimonialsTitle: "Avaliações de clientes de trabalhos concluídos",
    testimonialsDesc: "As avaliações publicadas vêm de trabalhos concluídos. Projetos reais de clientes aparecem separadamente no portfólio.",
    portfolioReviews: "Portfólio e avaliações",
    ratingLabel: "Nota",
    merchantTitle: "Sistemas que um dono de empresa entende, usa e confia.",
    merchantItems: [
      { title: "Entenda o que você vai receber", desc: "Estrutura de páginas, módulos, necessidade de painel e escopo de entrega são definidos com clareza antes do desenvolvimento." },
      { title: "Estrutura compatível com mobile", desc: "Sites e painéis são preparados para uso confortável em celular, tablet e computador." },
      { title: "Escopo claro", desc: "Quantidade de páginas, módulos, pedidos extras, fluxo de entrega e preço são discutidos desde o início." },
      { title: "Progresso claro", desc: "Escopo, processo de entrega e tratamento de solicitações extras são esclarecidos previamente." },
    ],
    processTitle: "Como avançamos?",
    processSteps: ptProcessSteps,
    techTitle: "Tecnologias usadas nos projetos",
    techDesc: "Os projetos são construídos sobre ferramentas práticas e completas usadas em aplicações web reais.",
    finalTitle: "Se você não sabe qual sistema é o mais adequado, podemos definir juntos.",
    finalDesc: "Conte sobre sua empresa, sua necessidade e os recursos que deseja. Estrutura, escopo, prazo e preço podem ser definidos juntos.",
    finalCta: "Solicitar proposta para meu projeto",
  },
  it: {
    heroLine1: "Siti web, cataloghi,",
    heroLine2Prefix: "e-commerce e sistemi su misura",
    rotatingLabel: "sviluppiamo progettiamo lanciamo facciamo crescere",
    rotatingWords: ["sviluppiamo.", "progettiamo.", "lanciamo.", "facciamo crescere."],
    heroDesc: "Pianifichiamo e sviluppiamo siti web, sistemi di catalogo prodotti, flussi di ordine via WhatsApp, strutture di appuntamento e prenotazione, e-commerce, pannelli amministrativi, integrazioni e software su misura in base alle esigenze della tua azienda.",
    servicesCta: "Vedi i servizi",
    quoteCta: "Richiedi un preventivo",
    approachCta: "Leggi il nostro approccio",
    examplesCta: "Vedi esempi live",
    trustSignals: [
      ["Lavori completati", `${bionlukStats.reviewCount} recensioni clienti e ${bionlukStats.completedOrders} esperienze di lavoro completate.`],
      ["Esempi live adattabili", "Gli esempi live non sono lavori reali di clienti; sono sistemi demo adattabili a esigenze simili."],
      ["Ambito chiaro", "Pagine, moduli, consegna e limiti dello sviluppo extra vengono discussi fin dall'inizio."],
      ["Supporto post-consegna", "Manutenzione, nuovi moduli e sviluppi successivi possono essere pianificati separatamente dopo la consegna."],
    ],
    quickTitle: "Cosa vuoi creare?",
    quickDesc: "Il punto di partenza giusto viene scelto in base alla tua esigenza. Puoi partire da un tema pronto o chiarire l'ambito con noi tramite il modulo di preventivo.",
    unsureCta: "Non sono sicuro, definiamolo insieme",
    quickOptions: [
      { title: "Ho bisogno di un sito web", desc: "Si crea una presenza affidabile per azienda, servizio o landing page.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Ho bisogno di catalogo / ordini WhatsApp", desc: "I prodotti vengono mostrati con chiarezza e la richiesta passa a WhatsApp o al preventivo.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Ho bisogno di un sistema appuntamenti", desc: "Data, ora, disponibilità e richiesta cliente vengono raccolte in un unico flusso.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Ho bisogno di un pannello admin", desc: "Dati, utenti, registri e processi aziendali diventano gestibili.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Ho bisogno di CRM / stock / ordini", desc: "Clienti, prodotti, stock, ordini o preventivi vengono seguiti da un unico pannello.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Ho bisogno di integrazione", desc: "Si pianificano collegamenti con marketplace, XML, API, pagamenti, spedizioni o servizi esterni.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Punto di partenza",
    detailCta: "Vai ai dettagli",
    systemsTitle: "Tipi di sistemi che possiamo preparare per la tua azienda",
    systemsDesc: "Sito aziendale, catalogo, ordini WhatsApp, e-commerce, appuntamenti e pannelli amministrativi possono essere combinati in un unico progetto quando necessario.",
    learnMore: "Scopri di più",
    allServices: "Vedi tutti i 37 servizi",
    demoPortfolioKicker: "Differenza tra esempi live e portfolio",
    demoPortfolioTitle: "Separiamo le demo navigabili dai lavori completati.",
    demoPortfolioDesc: "Gli esempi live sono sistemi demo adattabili alla tua azienda. Il portfolio mostra progetti reali completati e risultati che possono essere anonimizzati in base al permesso.",
    demoLabel: "Sistemi demo",
    demoTitle: "Vedi esempi live",
    demoDesc: "Esempi adattabili di sito, catalogo, pannello, appuntamento e integrazione.",
    portfolioLabel: "Lavori reali",
    portfolioTitle: "Esplora il portfolio",
    portfolioDesc: "Progetti completati, risultati e segnali di fiducia.",
    inspect: "Vedi",
    problemsTitle: "Quali problemi risolviamo?",
    problemsDesc: "L'obiettivo non è solo creare pagine; è rendere le operazioni sparse dell'azienda più gestibili e più facili da trasformare in richieste qualificate.",
    problems: [
      ["Caos tra Excel e WhatsApp", "Raccogliere clienti, stock, ordini, attività o pagamenti in un unico pannello."],
      ["Non vedere cosa verrà consegnato", "Permettere al cliente di navigare esempi live prima di decidere."],
      ["Ambito e prezzo poco chiari", "Definire moduli, consegna, supporto e limiti del lavoro extra prima dell'inizio."],
    ],
    testimonialsTitle: "Recensioni clienti da lavori completati",
    testimonialsDesc: "Le recensioni pubblicate provengono da lavori completati. I progetti reali dei clienti sono mostrati separatamente nel portfolio.",
    portfolioReviews: "Portfolio e recensioni",
    ratingLabel: "Valutazione",
    merchantTitle: "Sistemi che un imprenditore può capire, usare e di cui fidarsi.",
    merchantItems: [
      { title: "Capisci cosa riceverai", desc: "Struttura delle pagine, moduli, necessità del pannello e ambito di consegna vengono definiti chiaramente prima dello sviluppo." },
      { title: "Struttura mobile-friendly", desc: "Siti e pannelli vengono preparati per un uso comodo su telefono, tablet e computer." },
      { title: "Ambito chiaro", desc: "Numero di pagine, moduli, richieste extra, consegna e prezzo vengono discussi dall'inizio." },
      { title: "Avanzamento chiaro", desc: "Ambito, processo di consegna e gestione delle richieste extra vengono chiariti in anticipo." },
    ],
    processTitle: "Come procediamo?",
    processSteps: itProcessSteps,
    techTitle: "Tecnologie usate nei progetti",
    techDesc: "I progetti sono costruiti su strumenti pratici e completi usati in vere applicazioni web.",
    finalTitle: "Se non sai quale sistema è adatto, possiamo definirlo insieme.",
    finalDesc: "Raccontaci la tua azienda, la tua esigenza e le funzioni che desideri. Struttura, ambito, tempi e prezzo possono essere chiariti insieme.",
    finalCta: "Richiedi un preventivo per il mio progetto",
  },
  nl: {
    heroLine1: "Websites, catalogi,",
    heroLine2Prefix: "e-commerce en maatwerksystemen",
    rotatingLabel: "ontwikkelen ontwerpen lanceren laten groeien",
    rotatingWords: ["ontwikkelen.", "ontwerpen.", "lanceren.", "laten groeien."],
    heroDesc: "We plannen en ontwikkelen websites, productcatalogi, WhatsApp-bestelflows, afspraak- en reserveringsstructuren, e-commerce, beheerpaneels, integraties en maatwerksoftware volgens de behoefte van je bedrijf.",
    servicesCta: "Diensten bekijken",
    quoteCta: "Offerte aanvragen",
    approachCta: "Onze aanpak lezen",
    examplesCta: "Live voorbeelden bekijken",
    trustSignals: [
      ["Afgeronde opdrachten", `${bionlukStats.reviewCount} klantbeoordelingen en ${bionlukStats.completedOrders} afgeronde opdrachten.`],
      ["Aanpasbare live voorbeelden", "Live voorbeelden zijn geen echte klantprojecten; het zijn demosystemen die aan vergelijkbare behoeften kunnen worden aangepast."],
      ["Duidelijke scope", "Pagina's, modules, oplevering en grenzen van extra ontwikkeling worden vanaf het begin besproken."],
      ["Support na oplevering", "Onderhoud, nieuwe modules en verdere ontwikkeling kunnen na oplevering apart worden gepland."],
    ],
    quickTitle: "Wat wil je laten maken?",
    quickDesc: "Het juiste startpunt wordt gekozen volgens je behoefte. Je kunt starten met een bestaande categorie of de scope samen verduidelijken via het offerteformulier.",
    unsureCta: "Ik weet het niet zeker, laten we het samen bepalen",
    quickOptions: [
      { title: "Ik heb een website nodig", desc: "Er wordt een betrouwbare aanwezigheid gemaakt voor bedrijf, dienst of landing page.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Ik heb catalogus / WhatsApp-bestellingen nodig", desc: "Producten worden duidelijk getoond en de aanvraag gaat naar WhatsApp of offerteflow.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Ik heb een afsprakensysteem nodig", desc: "Datum, tijd, beschikbaarheid en klantvraag komen samen in één flow.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Ik heb een beheerpaneel nodig", desc: "Data, gebruikers, registraties en bedrijfsprocessen worden beheerbaar.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Ik heb CRM / voorraad / orders nodig", desc: "Klanten, producten, voorraad, orders of offertes worden in één paneel gevolgd.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Ik heb integratie nodig", desc: "Koppelingen met marketplace, XML, API, betaling, verzending of externe diensten worden gepland.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Startpunt",
    detailCta: "Naar details",
    systemsTitle: "Systeemtypen die voor je bedrijf kunnen worden voorbereid",
    systemsDesc: "Bedrijfswebsite, catalogus, WhatsApp-bestellingen, e-commerce, afspraken en beheerpaneels kunnen wanneer nodig in één project worden gecombineerd.",
    learnMore: "Meer weten",
    allServices: "Alle 37 diensten bekijken",
    demoPortfolioKicker: "Verschil tussen live voorbeelden en portfolio",
    demoPortfolioTitle: "We houden navigeerbare demo's en afgeronde opdrachten gescheiden.",
    demoPortfolioDesc: "Live voorbeelden zijn demosystemen die aan je bedrijf kunnen worden aangepast. Het portfolio toont echte afgeronde klantprojecten en resultaten die volgens toestemming geanonimiseerd kunnen zijn.",
    demoLabel: "Demosystemen",
    demoTitle: "Live voorbeelden bekijken",
    demoDesc: "Aanpasbare voorbeelden van website, catalogus, paneel, afspraak en integratie.",
    portfolioLabel: "Echte opdrachten",
    portfolioTitle: "Portfolio bekijken",
    portfolioDesc: "Afgeronde projecten, resultaten en vertrouwenssignalen.",
    inspect: "Bekijken",
    problemsTitle: "Welke problemen lossen we op?",
    problemsDesc: "Het doel is niet alleen pagina's maken; het is verspreide bedrijfsprocessen beheerbaarder maken en makkelijker omzetten in gekwalificeerde aanvragen.",
    problems: [
      ["Chaos tussen Excel en WhatsApp", "Klanten, voorraad, orders, taken of betalingen in één paneel verzamelen."],
      ["Niet zien wat wordt opgeleverd", "De klant live voorbeelden laten bekijken voordat hij beslist."],
      ["Onduidelijke scope en prijs", "Modules, oplevering, support en grenzen van extra werk vóór de start bepalen."],
    ],
    testimonialsTitle: "Klantbeoordelingen van afgeronde opdrachten",
    testimonialsDesc: "Gepubliceerde beoordelingen komen uit afgeronde opdrachten. Echte klantprojecten worden apart in het portfolio getoond.",
    portfolioReviews: "Portfolio en beoordelingen",
    ratingLabel: "Score",
    merchantTitle: "Systemen die een ondernemer begrijpt, gebruikt en vertrouwt.",
    merchantItems: [
      { title: "Begrijp wat je krijgt", desc: "Paginastructuur, modules, behoefte aan een paneel en opleverscope worden duidelijk bepaald vóór ontwikkeling." },
      { title: "Mobielvriendelijke structuur", desc: "Sites en paneels worden voorbereid voor comfortabel gebruik op telefoon, tablet en computer." },
      { title: "Duidelijke scope", desc: "Aantal pagina's, modules, extra verzoeken, opleverflow en prijs worden vanaf het begin besproken." },
      { title: "Duidelijke voortgang", desc: "Scope, opleverproces en behandeling van extra verzoeken worden vooraf verduidelijkt." },
    ],
    processTitle: "Hoe gaan we verder?",
    processSteps: nlProcessSteps,
    techTitle: "Technologieën die in projecten worden gebruikt",
    techDesc: "Projecten worden gebouwd met praktische en complete tools die in echte webapplicaties worden gebruikt.",
    finalTitle: "Als je niet weet welk systeem past, kunnen we dat samen bepalen.",
    finalDesc: "Vertel over je bedrijf, je behoefte en de functies die je wilt. Structuur, scope, planning en prijs kunnen samen worden verduidelijkt.",
    finalCta: "Offerte aanvragen voor mijn project",
  },
  zh: {
    heroLine1: "网站、目录、",
    heroLine2Prefix: "电商和定制系统",
    rotatingLabel: "开发 设计 上线 增长",
    rotatingWords: ["开发。", "设计。", "上线。", "增长。"],
    heroDesc: "我们根据企业需求规划并开发网站、产品目录系统、WhatsApp 订单流程、预约/预订结构、电商、管理面板、集成和定制软件解决方案。",
    servicesCta: "查看服务",
    quoteCta: "获取报价",
    approachCta: "了解我们的方式",
    examplesCta: "查看在线示例",
    trustSignals: [
      ["已完成工作", `${bionlukStats.reviewCount} 条客户评价和 ${bionlukStats.completedOrders} 个已完成项目经验。`],
      ["可适配在线示例", "在线示例不是真实客户项目；它们是可以适配类似需求的演示系统。"],
      ["清晰范围", "页面、模块、交付和额外开发边界从一开始就会沟通清楚。"],
      ["交付后支持", "维护、新模块和后续开发需求可以在交付后单独规划。"],
    ],
    quickTitle: "您想做什么？",
    quickDesc: "会根据您的需求选择最合适的起点。您可以从现有类别开始，也可以通过报价表单一起明确范围。",
    unsureCta: "我不确定，一起明确",
    quickOptions: [
      { title: "我需要网站", desc: "为企业、服务或落地页建立可信赖的线上展示。", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "我需要目录 / WhatsApp 订单", desc: "清晰展示产品，并把客户选择引导到 WhatsApp 或报价流程。", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "我需要预约系统", desc: "日期、时间、可用性和客户请求在一个预约流程中收集。", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "我需要管理面板", desc: "让业务数据、用户、记录和流程变得可管理。", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "我需要 CRM / 库存 / 订单跟踪", desc: "客户、产品、库存、订单或报价流程在一个面板中跟踪。", href: "/services/crm-musteri-takip-sistemi" },
      { title: "我需要集成", desc: "规划 marketplace、XML、API、支付、物流或外部服务连接。", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "起点",
    detailCta: "查看详情",
    systemsTitle: "可以为您的企业准备的系统类型",
    systemsDesc: "企业网站、目录、WhatsApp 订单、电商、预约和管理面板可按需要组合到同一个项目中。",
    learnMore: "了解更多",
    allServices: "查看全部 37 项服务",
    demoPortfolioKicker: "在线示例 / 作品集区别",
    demoPortfolioTitle: "可浏览演示和已完成项目保持分开。",
    demoPortfolioDesc: "在线示例是可以适配您企业的演示系统。作品集展示真实已完成客户项目，以及根据许可可能匿名化的项目结果。",
    demoLabel: "演示系统",
    demoTitle: "查看在线示例",
    demoDesc: "可适配的网站、目录、面板、预约和集成示例。",
    portfolioLabel: "真实项目",
    portfolioTitle: "查看作品集",
    portfolioDesc: "已完成客户项目、结果和信任信号。",
    inspect: "查看",
    problemsTitle: "我们解决哪些问题？",
    problemsDesc: "目标不只是制作页面，而是让分散的业务流程更可管理，也更容易转化为有效询盘。",
    problems: [
      ["Excel 和 WhatsApp 混乱", "把客户、库存、订单、任务或付款跟踪集中到一个面板。"],
      ["看不清最终会得到什么", "让客户在决定前可以浏览在线示例。"],
      ["范围和价格不清楚", "项目开始前明确模块、交付、支持和额外工作的边界。"],
    ],
    testimonialsTitle: "已完成项目的客户评价",
    testimonialsDesc: "公开评价来自已完成的客户工作。真实客户项目会在作品集区域单独展示。",
    portfolioReviews: "作品集和评价",
    ratingLabel: "评分",
    merchantTitle: "企业主能理解、能使用、能信任的系统。",
    merchantItems: [
      { title: "提前明确会得到什么", desc: "页面结构、模块、管理面板需求和交付范围会在开发前清楚定义。" },
      { title: "移动端友好结构", desc: "网站和面板会针对手机、平板和电脑的舒适使用进行准备。" },
      { title: "清晰范围", desc: "页面数量、模块、额外需求、交付流程和价格从一开始就沟通。" },
      { title: "清晰进度", desc: "范围、交付流程以及额外需求的处理方式会提前明确。" },
    ],
    processTitle: "我们如何推进？",
    processSteps: zhProcessSteps,
    techTitle: "项目中使用的技术",
    techDesc: "项目建立在真实 Web 应用中使用的实用、完整的开发工具之上。",
    finalTitle: "如果您不确定哪种系统适合，我们可以一起明确。",
    finalDesc: "只需说明您的企业、需求和想要的功能。合适结构、范围、周期和价格可以一起明确。",
    finalCta: "为我的项目获取报价",
  },
  ru: {
    heroLine1: "Сайты, каталоги,",
    heroLine2Prefix: "e-commerce и индивидуальные системы",
    rotatingLabel: "разрабатываем проектируем запускаем развиваем",
    rotatingWords: ["разрабатываем.", "проектируем.", "запускаем.", "развиваем."],
    heroDesc: "Мы планируем и разрабатываем сайты, каталоги товаров, процессы заказов через WhatsApp, системы записи и бронирования, e-commerce, админ-панели, интеграции и индивидуальное ПО под потребности вашего бизнеса.",
    servicesCta: "Посмотреть услуги",
    quoteCta: "Получить предложение",
    approachCta: "Прочитать наш подход",
    examplesCta: "Смотреть живые примеры",
    trustSignals: [
      ["Завершенные работы", `${bionlukStats.reviewCount} отзывов клиентов и ${bionlukStats.completedOrders} завершенных работ.`],
      ["Адаптируемые живые примеры", "Живые примеры не являются реальными клиентскими проектами; это demo-системы, которые можно адаптировать под похожие задачи."],
      ["Четкий объем", "Страницы, модули, сдача и границы дополнительной разработки обсуждаются с самого начала."],
      ["Поддержка после сдачи", "Обслуживание, новые модули и дальнейшие улучшения можно планировать отдельно после сдачи."],
    ],
    quickTitle: "Что вы хотите создать?",
    quickDesc: "Правильная отправная точка выбирается по вашей потребности. Можно начать с готовой темы или уточнить объем через форму предложения.",
    unsureCta: "Я не уверен, давайте уточним вместе",
    quickOptions: [
      { title: "Мне нужен сайт", desc: "Создается надежное присутствие для компании, услуги или landing page.", href: "/services/tanitim-kurumsal-web-siteleri" },
      { title: "Нужен каталог / заказы WhatsApp", desc: "Товары показываются понятно, а запрос клиента переходит в WhatsApp или процесс предложения.", href: "/services/urun-katalog-whatsapp-siparis" },
      { title: "Нужна система записи", desc: "Дата, время, доступность и запрос клиента собираются в одном процессе записи.", href: "/services/randevu-rezervasyon-sistemleri" },
      { title: "Нужна админ-панель", desc: "Данные, пользователи, записи и процессы бизнеса становятся управляемыми.", href: "/services/admin-panel-isletme-yonetimi" },
      { title: "Нужен CRM / склад / учет заказов", desc: "Клиенты, товары, склад, заказы или предложения отслеживаются из одной панели.", href: "/services/crm-musteri-takip-sistemi" },
      { title: "Нужна интеграция", desc: "Планируются связи с marketplace, XML, API, оплатой, доставкой или внешними сервисами.", href: "/services/pazaryeri-entegrasyonu" },
    ],
    starterLabel: "Отправная точка",
    detailCta: "Перейти к деталям",
    systemsTitle: "Типы систем, которые можно подготовить для вашего бизнеса",
    systemsDesc: "Корпоративный сайт, каталог, заказы WhatsApp, e-commerce, запись и админ-панель при необходимости можно объединить в одном проекте.",
    learnMore: "Подробнее",
    allServices: "Смотреть все 37 услуг",
    demoPortfolioKicker: "Разница между живыми примерами и портфолио",
    demoPortfolioTitle: "Мы разделяем просматриваемые demo и завершенные работы.",
    demoPortfolioDesc: "Живые примеры — это demo-системы, которые можно адаптировать под ваш бизнес. Портфолио показывает реальные завершенные клиентские проекты и результаты, которые могут быть анонимизированы по разрешению.",
    demoLabel: "Demo-системы",
    demoTitle: "Смотреть живые примеры",
    demoDesc: "Адаптируемые примеры сайта, каталога, панели, записи и интеграции.",
    portfolioLabel: "Реальные работы",
    portfolioTitle: "Посмотреть портфолио",
    portfolioDesc: "Завершенные клиентские проекты, результаты и сигналы доверия.",
    inspect: "Смотреть",
    problemsTitle: "Какие проблемы мы решаем?",
    problemsDesc: "Цель не только в создании страниц; мы помогаем сделать разрозненные операции бизнеса более управляемыми и легче превращать их в качественные заявки.",
    problems: [
      ["Хаос Excel и WhatsApp", "Собрать клиентов, склад, заказы, задачи или платежи в одной панели."],
      ["Непонятно, что будет получено", "Дать возможность пройти живые примеры до принятия решения."],
      ["Неясный объем и цена", "Уточнить модули, сдачу, поддержку и границы дополнительных работ до старта проекта."],
    ],
    testimonialsTitle: "Отзывы клиентов по завершенным работам",
    testimonialsDesc: "Опубликованные отзывы относятся к завершенным работам. Реальные клиентские проекты отдельно показываются в портфолио.",
    portfolioReviews: "Портфолио и отзывы",
    ratingLabel: "Оценка",
    merchantTitle: "Системы, которые владелец бизнеса может понять, использовать и которым может доверять.",
    merchantItems: [
      { title: "Понимать, что вы получите", desc: "Структура страниц, модули, потребность в панели и объем сдачи ясно определяются до начала разработки." },
      { title: "Удобно на мобильных", desc: "Сайты и панели готовятся для комфортного использования на телефоне, планшете и компьютере." },
      { title: "Четкий объем", desc: "Количество страниц, модули, дополнительные запросы, процесс сдачи и стоимость обсуждаются заранее." },
      { title: "Понятный прогресс", desc: "Объем, процесс сдачи и обработка дополнительных запросов уточняются до старта." },
    ],
    processTitle: "Как мы двигаемся дальше?",
    processSteps: ruProcessSteps,
    techTitle: "Технологии, используемые в проектах",
    techDesc: "Проекты строятся на практичных и полноценных инструментах разработки, которые используются в реальных web-приложениях.",
    finalTitle: "Если вы не уверены, какая система подходит, мы можем уточнить это вместе.",
    finalDesc: "Расскажите о бизнесе, потребности и нужных функциях. Подходящую структуру, объем, сроки и стоимость можно определить вместе.",
    finalCta: "Получить предложение для моего проекта",
  },
};

export default function Home() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPath(pathname);
  const copy = locale === "en" ? homeCopy.en : locale === "de" ? homeCopy.de : locale === "fr" ? homeCopy.fr : locale === "es" ? homeCopy.es : locale === "ar" ? homeCopy.ar : locale === "ru" ? homeCopy.ru : locale === "pt" ? homeCopy.pt : locale === "it" ? homeCopy.it : locale === "nl" ? homeCopy.nl : locale === "zh" ? homeCopy.zh : homeCopy.tr;
  return (
    <main className="premium-stage relative text-white overflow-hidden pt-20">
      <div className="premium-grid absolute inset-0 z-0" />
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-orb hero-orb-one" />
        <span className="hero-orb hero-orb-two" />
        <span className="hero-orb hero-orb-three" />
      </div>
      
      <section className="relative z-10 px-6 pb-24 pt-32 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
            <span className="block">{copy.heroLine1}</span>
            <span className="block text-gray-500">
              {copy.heroLine2Prefix} <span className="rotating-word" aria-label={copy.rotatingLabel}>{copy.rotatingWords.map((word) => <span key={word}>{word}</span>)}</span>
            </span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            {copy.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <LocalizedLink href="/services" className="shimmer-button magnetic-button flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm font-bold transition-all">
              {copy.servicesCta} <ArrowRight size={18} />
            </LocalizedLink>
            <LocalizedLink href="/contact" className="magnetic-button flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-200/8 transition-all">
              {copy.quoteCta}
            </LocalizedLink>
            <LocalizedLink href="/about" className="flex items-center gap-2 text-gray-400 px-4 py-4 font-medium hover:text-white transition-all underline-offset-4 hover:underline">
              {copy.approachCta}
            </LocalizedLink>
            <LocalizedLink href="/projects" className="flex items-center gap-2 text-gray-400 px-4 py-4 font-medium hover:text-white transition-all underline-offset-4 hover:underline">
              {copy.examplesCta}
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 md:px-6 pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {copy.trustSignals.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/70 p-4 md:p-5">
              <h2 className="text-sm md:text-base font-bold text-white">{title}</h2>
              {(title === "Tamamlanan işler" || title === "Completed work" || title === "Abgeschlossene Arbeiten" || title === "Travaux terminés" || title === "Trabajos completados" || title === "أعمال مكتملة" || title === "已完成工作") && <div className="mt-3"><RatingStars rating={bionlukStats.rating} inline /></div>}
              <p className="mt-2 text-xs md:text-sm leading-6 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-4xl font-medium mb-4">{copy.quickTitle}</h2>
              <p className="mobile-compact-text text-gray-400">{copy.quickDesc}</p>
            </div>
            <LocalizedLink href="/contact" className="w-fit border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              {copy.unsureCta}
            </LocalizedLink>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {copy.quickOptions.map((option) => (
              <div key={option.title}>
                <LocalizedLink href={option.href} className="premium-card mobile-compact-card group relative flex h-full min-h-[12.5rem] flex-col justify-between overflow-hidden border border-white/10 bg-[#0b1830]/82 p-5 md:p-6">
                  <span className="card-sheen" aria-hidden="true" />
                  <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-gray-500">{copy.starterLabel}</span>
                  <div className="relative z-10 mt-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">{option.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500">{option.desc}</p>
                  </div>
                  <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/55 transition-colors group-hover:text-white">
                    {copy.detailCta} <ArrowRight size={14} />
                  </span>
                </LocalizedLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">{copy.systemsTitle}</h2>
            <p className="mobile-compact-text text-gray-400 max-w-2xl">{copy.systemsDesc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {homepageServices.map((srv) => (
              <div key={srv.slug}>
                <LocalizedLink href={`/services/${srv.slug}`} className="premium-card mobile-compact-card group relative flex h-full min-h-[12.5rem] md:min-h-[17rem] flex-col items-center justify-center overflow-hidden bg-[#0b1830]/82 p-4 md:p-8 text-center border border-white/10 backdrop-blur-xl">
                  <span className="card-sheen" aria-hidden="true" />
                  <h3 className="text-base md:text-xl font-medium mb-3 relative z-10">{locale === "en" ? enHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "de" ? deHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "fr" ? frHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "es" ? esHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "ar" ? arHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "ru" ? ruHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "pt" ? ptHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "it" ? itHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "nl" ? nlHomepageServiceText[srv.slug]?.title ?? srv.title : locale === "zh" ? zhHomepageServiceText[srv.slug]?.title ?? srv.title : srv.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm relative z-10 mb-5 md:mb-7 leading-5 md:leading-6">{locale === "en" ? enHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "de" ? deHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "fr" ? frHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "es" ? esHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "ar" ? arHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "ru" ? ruHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "pt" ? ptHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "it" ? itHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "nl" ? nlHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : locale === "zh" ? zhHomepageServiceText[srv.slug]?.shortDesc ?? srv.shortDesc : srv.shortDesc}</p>
                  <span className="details-pill relative z-10 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white/50 transition-all group-hover:text-white">
                    {copy.learnMore} <ArrowRight size={14} />
                  </span>
                </LocalizedLink>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <LocalizedLink href="/services" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              {copy.allServices} <ArrowRight size={16} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 border border-white/10 bg-[#071225]/58 p-5 md:grid-cols-[1fr_1fr] md:p-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">{copy.demoPortfolioKicker}</p>
              <h2 className="text-2xl md:text-4xl font-medium mb-4">{copy.demoPortfolioTitle}</h2>
              <p className="mobile-compact-text text-gray-400 leading-7">
                {copy.demoPortfolioDesc}
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <LocalizedLink href="/projects" className="premium-card group relative flex min-h-[12rem] flex-col justify-between overflow-hidden border border-white/10 bg-[#0b1830]/82 p-5">
                <span className="card-sheen" aria-hidden="true" />
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-gray-500">{copy.demoLabel}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{copy.demoTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{copy.demoDesc}</p>
                </div>
                <span className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/55 group-hover:text-white">
                  {copy.inspect} <ArrowRight size={14} />
                </span>
              </LocalizedLink>
              <LocalizedLink href="/portfolio" className="premium-card group relative flex min-h-[12rem] flex-col justify-between overflow-hidden border border-white/10 bg-[#0b1830]/82 p-5">
                <span className="card-sheen" aria-hidden="true" />
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-gray-500">{copy.portfolioLabel}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{copy.portfolioTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{copy.portfolioDesc}</p>
                </div>
                <span className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/55 group-hover:text-white">
                  {copy.inspect} <ArrowRight size={14} />
                </span>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">{copy.problemsTitle}</h2>
            <p className="mobile-compact-text text-gray-400 max-w-3xl">{copy.problemsDesc}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.problems.map(([title, text]) => (
              <div key={title} className="premium-panel border border-white/10 bg-[#101010]/88 p-6">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium mb-4">{copy.testimonialsTitle}</h2>
              <p className="mobile-compact-text max-w-3xl text-gray-400">{copy.testimonialsDesc}</p>
            </div>
            <LocalizedLink href="/portfolio" className="w-fit border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              {copy.portfolioReviews}
            </LocalizedLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.slug} className="premium-panel border border-white/10 bg-[#101010]/88 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-white">{testimonial.displayName}</h3>
                  <RatingStars rating={testimonial.rating} label={copy.ratingLabel} inline />
                </div>
                <p className="mt-2 text-xs text-gray-500">{locale === "en" ? enTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "de" ? deTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "fr" ? frTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "es" ? esTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "ar" ? arTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "ru" ? ruTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "pt" ? ptTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "it" ? itTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "nl" ? nlTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : locale === "zh" ? zhTestimonials[testimonial.slug]?.projectType ?? testimonial.projectType : testimonial.projectType}</p>
                <p className="mt-4 text-sm leading-7 text-gray-400">{locale === "en" ? enTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "de" ? deTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "fr" ? frTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "es" ? esTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "ar" ? arTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "ru" ? ruTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "pt" ? ptTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "it" ? itTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "nl" ? nlTestimonials[testimonial.slug]?.text ?? testimonial.text : locale === "zh" ? zhTestimonials[testimonial.slug]?.text ?? testimonial.text : testimonial.text}</p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-gray-500">{locale === "en" ? enTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "de" ? deTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "fr" ? frTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "es" ? esTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "ar" ? arTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "ru" ? ruTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "pt" ? ptTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "it" ? itTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "nl" ? nlTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : locale === "zh" ? zhTestimonials[testimonial.slug]?.label ?? testimonial.dateLabel : testimonial.dateLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 md:py-32 px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="mx-auto grid max-w-5xl justify-center gap-12 lg:grid-cols-[minmax(0,560px)_360px] lg:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">{copy.merchantTitle}</h2>
            <div className="space-y-6 mt-12">
              {copy.merchantItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="text-white shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="process-card relative mx-auto w-full max-w-[360px] overflow-hidden border border-white/10 bg-[#0b1830]/88 p-8">
            <h3 className="text-2xl font-medium mb-8 border-b border-white/10 pb-6">{copy.processTitle}</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:bg-white/10">
              <span className="process-line" aria-hidden="true" />
              {copy.processSteps.map((step, i) => (
                <div key={step} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#071225]/88 border-2 border-white flex items-center justify-center text-[10px] font-bold">{i + 1}</div>
                  <p className="text-gray-300 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">{copy.techTitle}</h2>
          <p className="mobile-compact-text text-gray-400 max-w-2xl mx-auto mb-12">{copy.techDesc}</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <span key={tech} className="tech-chip px-3 md:px-6 py-2 md:py-3 bg-[#0b1830]/88 border border-white/10 text-gray-300 rounded-sm font-medium cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-static-band relative z-10 py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">{copy.finalTitle}</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">{copy.finalDesc}</p>
          <LocalizedLink href="/contact" className="shimmer-button cta-static-button inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold transition-all shadow-xl">
            {copy.finalCta} <ArrowRight size={18} />
          </LocalizedLink>
        </div>
      </section>
    </main>
  );
}
