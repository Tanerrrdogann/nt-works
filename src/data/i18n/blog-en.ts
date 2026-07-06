import type { BlogPostType } from "@/types";

const categoryMap: Record<string, string> = {
  "Admin Panel": "Admin Panel",
  "Entegrasyon": "Integration",
  "Katalog": "Catalog",
  "Randevu": "Appointment",
  "E-Ticaret": "E-Commerce",
  "Özel Yazılım": "Custom Software",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Website",
  "Bakım": "Maintenance",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Stock and Orders",
  "Satış Sistemleri": "Sales Systems",
  "Yapay Zeka": "AI",
  "Sektörel Yazılım": "Industry Software",
  "Karşılaştırma": "Comparison",
  "Fiyat Rehberi": "Pricing Guide",
  "Mobil": "Mobile",
  "SEO": "SEO",
};

const categoryMapDe: Record<string, string> = {
  "Admin Panel": "Admin-Panel",
  "Entegrasyon": "Integration",
  "Katalog": "Katalog",
  "Randevu": "Termin",
  "E-Ticaret": "E-Commerce",
  "Özel Yazılım": "Individuelle Software",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Website",
  "Bakım": "Wartung",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Bestand und Bestellungen",
  "Satış Sistemleri": "Verkaufssysteme",
  "Yapay Zeka": "KI",
  "Sektörel Yazılım": "Branchensoftware",
  "Karşılaştırma": "Vergleich",
  "Fiyat Rehberi": "Preisleitfaden",
  "Mobil": "Mobil",
  "SEO": "SEO",
};

const categoryMapFr: Record<string, string> = {
  "Admin Panel": "Panneau d'administration",
  "Entegrasyon": "Intégration",
  "Katalog": "Catalogue",
  "Randevu": "Rendez-vous",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Logiciel sur mesure",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Site web",
  "Bakım": "Maintenance",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Stock et commandes",
  "Satış Sistemleri": "Systèmes de vente",
  "Yapay Zeka": "IA",
  "Sektörel Yazılım": "Logiciel sectoriel",
  "Karşılaştırma": "Comparaison",
  "Fiyat Rehberi": "Guide de prix",
  "Mobil": "Mobile",
  "SEO": "SEO",
};

const categoryMapEs: Record<string, string> = {
  "Admin Panel": "Panel de administración",
  "Entegrasyon": "Integración",
  "Katalog": "Catálogo",
  "Randevu": "Citas",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Software a medida",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Sitio web",
  "Bakım": "Mantenimiento",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Stock y pedidos",
  "Satış Sistemleri": "Sistemas de venta",
  "Yapay Zeka": "IA",
  "Sektörel Yazılım": "Software sectorial",
  "Karşılaştırma": "Comparación",
  "Fiyat Rehberi": "Guía de precios",
  "Mobil": "Móvil",
  "SEO": "SEO",
};

const categoryMapAr: Record<string, string> = {
  "Admin Panel": "لوحات الإدارة",
  "Entegrasyon": "التكاملات",
  "Katalog": "الكتالوج",
  "Randevu": "المواعيد",
  "E-Ticaret": "التجارة الإلكترونية",
  "Özel Yazılım": "البرمجيات المخصصة",
  "Power Apps": "Power Apps",
  "Web Sitesi": "مواقع الويب",
  "Bakım": "الصيانة",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "المخزون والطلبات",
  "Satış Sistemleri": "أنظمة المبيعات",
  "Yapay Zeka": "الذكاء الاصطناعي",
  "Sektörel Yazılım": "برمجيات القطاعات",
  "Karşılaştırma": "مقارنات",
  "Fiyat Rehberi": "دليل الأسعار",
  "Mobil": "الموبايل",
  "SEO": "SEO",
};

const categoryMapRu: Record<string, string> = {
  "Admin Panel": "Админ-панели",
  "Entegrasyon": "Интеграции",
  "Katalog": "Каталог",
  "Randevu": "Запись",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Индивидуальная разработка",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Web-сайт",
  "Bakım": "Обслуживание",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Склад и заказы",
  "Satış Sistemleri": "Системы продаж",
  "Yapay Zeka": "AI",
  "Sektörel Yazılım": "Отраслевое ПО",
  "Karşılaştırma": "Сравнение",
  "Fiyat Rehberi": "Гид по цене",
  "Mobil": "Mobile",
  "SEO": "SEO",
};

const categoryMapPt: Record<string, string> = {
  "Admin Panel": "Painel administrativo",
  "Entegrasyon": "Integração",
  "Katalog": "Catálogo",
  "Randevu": "Agendamento",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Software sob medida",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Site web",
  "Bakım": "Manutenção",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Estoque e pedidos",
  "Satış Sistemleri": "Sistemas de venda",
  "Yapay Zeka": "IA",
  "Sektörel Yazılım": "Software setorial",
  "Karşılaştırma": "Comparação",
  "Fiyat Rehberi": "Guia de preços",
  "Mobil": "Mobile",
  "SEO": "SEO",
};

const categoryMapIt: Record<string, string> = {
  "Admin Panel": "Pannello amministrativo",
  "Entegrasyon": "Integrazione",
  "Katalog": "Catalogo",
  "Randevu": "Appuntamenti",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Software su misura",
  "Power Apps": "Power Apps",
  "Web Sitesi": "Sito web",
  "Bakım": "Manutenzione",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "Stock e ordini",
  "Satış Sistemleri": "Sistemi di vendita",
  "Yapay Zeka": "AI",
  "Sektörel Yazılım": "Software settoriale",
  "Karşılaştırma": "Confronto",
  "Fiyat Rehberi": "Guida prezzi",
  "Mobil": "Mobile",
  "SEO": "SEO",
};

const categoryMapNl: Record<string, string> = {
  "Admin Panel": "Beheerpaneel",
  "Entegrasyon": "Integratie",
  "Katalog": "Catalogus",
  "Randevu": "Afspraken",
  "E-Ticaret": "E-commerce",
  "Özel Yazılım": "Software op maat",
  "Power Apps": "Power Apps-oplossingen",
  "Web Sitesi": "Website",
  "Bakım": "Onderhoud",
  "MVP": "MVP-producten",
  "CRM": "CRM-systemen",
  "Stok ve Sipariş": "Voorraad en orders",
  "Satış Sistemleri": "Verkoopsystemen",
  "Yapay Zeka": "AI",
  "Sektörel Yazılım": "Sectorsoftware",
  "Karşılaştırma": "Vergelijking",
  "Fiyat Rehberi": "Prijsgids",
  "Mobil": "Mobiel",
  "SEO": "SEO en zichtbaarheid",
};

const categoryMapZh: Record<string, string> = {
  "Admin Panel": "管理面板",
  "Entegrasyon": "集成",
  "Katalog": "目录",
  "Randevu": "预约",
  "E-Ticaret": "电商",
  "Özel Yazılım": "定制软件",
  "Power Apps": "Power Apps",
  "Web Sitesi": "网站",
  "Bakım": "维护",
  "MVP": "MVP",
  "CRM": "CRM",
  "Stok ve Sipariş": "库存和订单",
  "Satış Sistemleri": "销售系统",
  "Yapay Zeka": "AI",
  "Sektörel Yazılım": "行业软件",
  "Karşılaştırma": "对比",
  "Fiyat Rehberi": "价格指南",
  "Mobil": "移动端",
  "SEO": "SEO 和可见性",
};

const titleMap: Record<string, string> = {
  "admin-panel-nedir": "What Is an Admin Panel and What Does It Do for Businesses?",
  "pazaryeri-xml-entegrasyonu-nedir": "What Is Marketplace XML Integration and How Is It Planned in a Real Project?",
  "whatsapp-katalog-sitesi-nedir": "What Is a WhatsApp Catalog Website?",
  "randevu-sistemi-nedir": "What Is an Appointment System and Which Businesses Need It?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "What Is the Difference Between an E-Commerce Website and a Catalog Website?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "What Should You Consider When Building a Stock Tracking System?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "How Are Custom Software Prices Determined?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "How Can Business Processes Be Digitized with Power Apps?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "How Is Scope Defined in a Website Project?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Why Is a Maintenance Package Important for Admin Panel Projects?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "What Should You Consider When Building a Corporate Website?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "A Practical Guide for Small Businesses Planning Custom Software",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Software Systems for Small Businesses: From Website to Admin Panel",
  "saas-mvp-gelistirme-nedir": "What Is SaaS MVP Development and How Does an Idea Become a First Product?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Scope Guide for Businesses Planning an Admin Panel",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "What Does a CRM Customer Tracking System Do for Small Businesses?",
  "stok-takip-sistemi-yaptirmak": "Guide for Businesses Planning a Stock Tracking System",
  "siparis-takip-sistemi-nedir": "What Is an Order Tracking System and How Does It Organize WhatsApp and Marketplace Orders?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "How Does a Quote Tracking System Organize Sales for Service Businesses?",
  "whatsapp-siparis-sistemi-nedir": "What Is a WhatsApp Order System and Which Businesses Need It?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "A Realistic E-Commerce Website Guide for Small Businesses",
  "b2b-bayi-siparis-sistemi-nedir": "What Is a B2B Dealer Order System and How Does It Work for Wholesalers and Manufacturers?",
  "pazaryeri-entegrasyonu-nedir": "What Is Marketplace Integration and How Is Product Management Planned?",
  "xml-entegrasyonu-nedir": "What Is XML Integration and How Is Product Data Transferred?",
  "api-entegrasyonu-nedir": "What Is API Integration and How Do Two Software Systems Communicate?",
  "whatsapp-ai-asistan-kucuk-isletme": "How Can a WhatsApp AI Assistant Organize Customer Messages for Small Businesses?",
  "randevu-sistemi-yaptirmak": "Scope Guide for Businesses Planning an Appointment System",
  "rezervasyon-sistemi-turizm-kiralama": "What Is a Reservation System and How Is It Used in Tourism and Rental Businesses?",
  "turizm-operasyon-paneli-nedir": "What Is a Tourism Operation Panel and How Does It Organize Tour Processes?",
  "emlakcilar-icin-web-ve-crm-sistemi": "How Should a Website and CRM System Be Planned for Real Estate Agents?",
  "kuyumcular-icin-yazilim-sistemi": "Software Systems for Jewelers: Catalogs, Price Tracking, and Orders",
  "rent-a-car-yazilimi-nasil-planlanir": "How Is Rent a Car Software Planned?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Ready-Made System or Custom Software: Which Makes More Sense for Small Businesses?",
  "web-sitesi-mi-admin-panel-mi": "Website or Admin Panel: What Does Your Business Really Need?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Catalog Website or E-Commerce Website: Which Is the Right Choice?",
  "yazilim-projesi-fiyati-neden-degisir": "Why Does Software Project Pricing Change?",
  "web-admin-ozel-yazilim-teslim-suresi": "How Is Delivery Time Defined for Websites, Admin Panels, and Custom Software?",
  "isletme-yonetim-paneli-nedir": "What Is a Business Management Panel?",
  "lead-takip-sistemi-nedir": "What Is a Lead Tracking System and How Does It Prevent Lost Customers?",
  "mobil-uygulama-mi-webview-mi": "Mobile App or Webview: Which Makes More Sense for Small Businesses?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "How Are AI Automations Used in Businesses?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "How Are Industry-Specific Software Solutions Planned?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Why Is a Maintenance and Development Package Important?",
  "teknik-servis-takip-sistemi": "What Is a Technical Service Tracking System?",
  "restoran-qr-menu-ve-siparis-sistemi": "How Is a Restaurant QR Menu and Order System Planned?",
  "ajanslar-icin-musteri-paneli": "What Does a Customer Panel Do for Agencies?",
  "depo-ve-sevkiyat-takip-paneli": "Which Businesses Need a Warehouse and Shipment Tracking Panel?",
  "online-kurs-platformu-nasil-yapilir": "How Is an Online Course Platform Built?",
  "yerel-market-siparis-sistemi": "What Does a Local Market Order System Bring to Neighborhood Businesses?",
  "google-da-one-cikmak-icin-blog-stratejisi": "How Should a Blog Strategy Be Built to Stand Out on Google?",
};

const titleMapDe: Record<string, string> = {
  "admin-panel-nedir": "Was ist ein Admin-Panel und welchen Nutzen hat es für Unternehmen?",
  "pazaryeri-xml-entegrasyonu-nedir": "Was ist Marktplatz-XML-Integration und wie wird sie geplant?",
  "whatsapp-katalog-sitesi-nedir": "Was ist eine WhatsApp-Katalogwebsite?",
  "randevu-sistemi-nedir": "Was ist ein Terminsystem und welche Unternehmen brauchen es?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Was ist der Unterschied zwischen E-Commerce-Website und Katalogwebsite?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "Worauf sollte man bei einem Bestandsverfolgungssystem achten?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Wie werden Preise für individuelle Software bestimmt?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Wie werden Geschäftsprozesse mit Power Apps digitalisiert?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Wie wird der Umfang eines Website-Projekts definiert?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Warum ist ein Wartungspaket für Admin-Panel-Projekte wichtig?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "Worauf sollte man bei einer Unternehmenswebsite achten?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Praxisleitfaden für Unternehmen, die individuelle Software planen",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Softwaresysteme für kleine Unternehmen: Von Website bis Admin-Panel",
  "saas-mvp-gelistirme-nedir": "Was ist SaaS-MVP-Entwicklung und wie wird aus einer Idee ein erstes Produkt?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Umfangsleitfaden für Unternehmen, die ein Admin-Panel planen",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "Was bringt ein CRM-Kundenverfolgungssystem kleinen Unternehmen?",
  "stok-takip-sistemi-yaptirmak": "Leitfaden für Unternehmen, die ein Bestandsverfolgungssystem planen",
  "siparis-takip-sistemi-nedir": "Was ist ein Bestellverfolgungssystem?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Wie organisiert ein Angebotsverfolgungssystem den Verkauf für Dienstleister?",
  "whatsapp-siparis-sistemi-nedir": "Was ist ein WhatsApp-Bestellsystem?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Realistischer E-Commerce-Website-Leitfaden für kleine Unternehmen",
  "b2b-bayi-siparis-sistemi-nedir": "Was ist ein B2B-Händlerbestellsystem?",
  "pazaryeri-entegrasyonu-nedir": "Was ist Marktplatzintegration und wie wird Produktmanagement geplant?",
  "xml-entegrasyonu-nedir": "Was ist XML-Integration und wie werden Produktdaten übertragen?",
  "api-entegrasyonu-nedir": "Was ist API-Integration und wie kommunizieren zwei Softwaresysteme?",
  "whatsapp-ai-asistan-kucuk-isletme": "Wie organisiert ein WhatsApp-KI-Assistent Kundennachrichten?",
  "randevu-sistemi-yaptirmak": "Umfangsleitfaden für Unternehmen, die ein Terminsystem planen",
  "rezervasyon-sistemi-turizm-kiralama": "Was ist ein Reservierungssystem für Tourismus und Vermietung?",
  "turizm-operasyon-paneli-nedir": "Was ist ein Tourismus-Operationspanel?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Wie sollten Website und CRM für Immobilienmakler geplant werden?",
  "kuyumcular-icin-yazilim-sistemi": "Softwaresysteme für Juweliere: Katalog, Preisverfolgung und Bestellungen",
  "rent-a-car-yazilimi-nasil-planlanir": "Wie wird Rent-a-Car-Software geplant?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Fertiges System oder individuelle Software?",
  "web-sitesi-mi-admin-panel-mi": "Website oder Admin-Panel: Was braucht Ihr Unternehmen wirklich?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Katalogwebsite oder E-Commerce-Website?",
  "yazilim-projesi-fiyati-neden-degisir": "Warum ändern sich Softwareprojektpreise?",
  "web-admin-ozel-yazilim-teslim-suresi": "Wie wird die Lieferzeit für Website, Admin-Panel und Software definiert?",
  "isletme-yonetim-paneli-nedir": "Was ist ein Unternehmensverwaltungspanel?",
  "lead-takip-sistemi-nedir": "Was ist ein Lead-Verfolgungssystem?",
  "mobil-uygulama-mi-webview-mi": "Mobile App oder Webview?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Wie werden KI-Automatisierungen in Unternehmen genutzt?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Wie werden branchenspezifische Softwarelösungen geplant?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Warum ist ein Wartungs- und Entwicklungspaket wichtig?",
  "teknik-servis-takip-sistemi": "Was ist ein technisches Service-Tracking-System?",
  "restoran-qr-menu-ve-siparis-sistemi": "Wie wird ein Restaurant-QR-Menü- und Bestellsystem geplant?",
  "ajanslar-icin-musteri-paneli": "Was bringt ein Kundenpanel für Agenturen?",
  "depo-ve-sevkiyat-takip-paneli": "Welche Unternehmen brauchen ein Lager- und Versandpanel?",
  "online-kurs-platformu-nasil-yapilir": "Wie wird eine Online-Kursplattform gebaut?",
  "yerel-market-siparis-sistemi": "Was bringt ein lokales Markt-Bestellsystem?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Wie sollte eine Blogstrategie für Google aufgebaut werden?",
};

const titleMapFr: Record<string, string> = {
  "admin-panel-nedir": "Qu'est-ce qu'un panneau d'administration et à quoi sert-il ?",
  "pazaryeri-xml-entegrasyonu-nedir": "Qu'est-ce qu'une intégration XML marketplace et comment la planifier ?",
  "whatsapp-katalog-sitesi-nedir": "Qu'est-ce qu'un site catalogue WhatsApp ?",
  "randevu-sistemi-nedir": "Qu'est-ce qu'un système de rendez-vous et quelles entreprises en ont besoin ?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Quelle différence entre site e-commerce et site catalogue ?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "À quoi faire attention lors d'un système de suivi de stock ?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Comment les prix d'un logiciel sur mesure sont-ils définis ?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Comment digitaliser les processus métier avec Power Apps ?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Comment définir le périmètre d'un projet de site web ?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Pourquoi un forfait de maintenance est-il important pour un panneau admin ?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "À quoi faire attention lors d'un site corporate ?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Guide pratique pour les entreprises qui veulent un logiciel sur mesure",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Systèmes logiciels pour petites entreprises : du site web au panneau admin",
  "saas-mvp-gelistirme-nedir": "Qu'est-ce que le développement SaaS MVP ?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Guide de périmètre pour créer un panneau d'administration",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "À quoi sert un CRM de suivi client pour les petites entreprises ?",
  "stok-takip-sistemi-yaptirmak": "Guide pour planifier un système de suivi de stock",
  "siparis-takip-sistemi-nedir": "Qu'est-ce qu'un système de suivi des commandes ?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Comment un système de suivi des devis organise les ventes de services ?",
  "whatsapp-siparis-sistemi-nedir": "Qu'est-ce qu'un système de commande WhatsApp ?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Guide réaliste de site e-commerce pour petites entreprises",
  "b2b-bayi-siparis-sistemi-nedir": "Qu'est-ce qu'un système de commande revendeur B2B ?",
  "pazaryeri-entegrasyonu-nedir": "Qu'est-ce qu'une intégration marketplace et comment planifier la gestion produit ?",
  "xml-entegrasyonu-nedir": "Qu'est-ce qu'une intégration XML et comment transférer les données produit ?",
  "api-entegrasyonu-nedir": "Qu'est-ce qu'une intégration API et comment deux logiciels communiquent-ils ?",
  "whatsapp-ai-asistan-kucuk-isletme": "Comment un assistant IA WhatsApp organise les messages client ?",
  "randevu-sistemi-yaptirmak": "Guide de périmètre pour planifier un système de rendez-vous",
  "rezervasyon-sistemi-turizm-kiralama": "Qu'est-ce qu'un système de réservation pour tourisme et location ?",
  "turizm-operasyon-paneli-nedir": "Qu'est-ce qu'un panneau opérationnel touristique ?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Comment planifier un site web et CRM pour agences immobilières ?",
  "kuyumcular-icin-yazilim-sistemi": "Systèmes logiciels pour bijouteries : catalogue, prix et commandes",
  "rent-a-car-yazilimi-nasil-planlanir": "Comment planifier un logiciel rent a car ?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Système prêt à l'emploi ou logiciel sur mesure : que choisir ?",
  "web-sitesi-mi-admin-panel-mi": "Site web ou panneau admin : de quoi votre entreprise a-t-elle vraiment besoin ?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Site catalogue ou site e-commerce : lequel choisir ?",
  "yazilim-projesi-fiyati-neden-degisir": "Pourquoi le prix d'un projet logiciel change-t-il ?",
  "web-admin-ozel-yazilim-teslim-suresi": "Comment définir le délai de livraison d'un site, panneau admin ou logiciel ?",
  "isletme-yonetim-paneli-nedir": "Qu'est-ce qu'un panneau de gestion d'entreprise ?",
  "lead-takip-sistemi-nedir": "Qu'est-ce qu'un système de suivi des leads ?",
  "mobil-uygulama-mi-webview-mi": "Application mobile ou webview : que choisir ?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Comment utiliser les automatisations IA en entreprise ?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Comment planifier des solutions logicielles sectorielles ?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Pourquoi un forfait maintenance et développement est-il important ?",
  "teknik-servis-takip-sistemi": "Qu'est-ce qu'un système de suivi de service technique ?",
  "restoran-qr-menu-ve-siparis-sistemi": "Comment planifier un menu QR et système de commande restaurant ?",
  "ajanslar-icin-musteri-paneli": "À quoi sert un panneau client pour agences ?",
  "depo-ve-sevkiyat-takip-paneli": "Quelles entreprises ont besoin d'un panneau stock et expédition ?",
  "online-kurs-platformu-nasil-yapilir": "Comment construire une plateforme de cours en ligne ?",
  "yerel-market-siparis-sistemi": "Qu'apporte un système de commande pour marché local ?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Comment construire une stratégie blog pour gagner en visibilité Google ?",
};

const titleMapEs: Record<string, string> = {
  "admin-panel-nedir": "¿Qué es un panel de administración y para qué sirve en empresas?",
  "pazaryeri-xml-entegrasyonu-nedir": "¿Qué es la integración XML marketplace y cómo se planifica?",
  "whatsapp-katalog-sitesi-nedir": "¿Qué es un sitio de catálogo por WhatsApp?",
  "randevu-sistemi-nedir": "¿Qué es un sistema de citas y qué empresas lo necesitan?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Diferencia entre un sitio e-commerce y un sitio catálogo",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "Qué tener en cuenta al crear un sistema de seguimiento de stock",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Cómo se determinan los precios de software a medida",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Cómo digitalizar procesos empresariales con Power Apps",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Cómo definir el alcance de un proyecto web",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Por qué es importante el mantenimiento en proyectos de panel admin",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "Qué tener en cuenta al crear un sitio corporativo",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Guía práctica para empresas que quieren software a medida",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Sistemas de software para pequeñas empresas: del sitio web al panel admin",
  "saas-mvp-gelistirme-nedir": "Qué es el desarrollo SaaS MVP y cómo una idea se convierte en producto",
  "admin-panel-yaptirmak-kapsam-rehberi": "Guía de alcance para crear un panel de administración",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "Para qué sirve un CRM de seguimiento de clientes",
  "stok-takip-sistemi-yaptirmak": "Guía para planificar un sistema de seguimiento de stock",
  "siparis-takip-sistemi-nedir": "Qué es un sistema de seguimiento de pedidos",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Cómo un sistema de seguimiento de propuestas organiza ventas de servicios",
  "whatsapp-siparis-sistemi-nedir": "Qué es un sistema de pedidos por WhatsApp",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Guía realista de e-commerce para pequeñas empresas",
  "b2b-bayi-siparis-sistemi-nedir": "Qué es un sistema B2B de pedidos para distribuidores",
  "pazaryeri-entegrasyonu-nedir": "Qué es la integración marketplace y cómo se planifica la gestión de productos",
  "xml-entegrasyonu-nedir": "Qué es la integración XML y cómo se transfieren datos de productos",
  "api-entegrasyonu-nedir": "Qué es la integración API y cómo se comunican dos sistemas",
  "whatsapp-ai-asistan-kucuk-isletme": "Cómo un asistente IA de WhatsApp organiza mensajes de clientes",
  "randevu-sistemi-yaptirmak": "Guía de alcance para planificar un sistema de citas",
  "rezervasyon-sistemi-turizm-kiralama": "Qué es un sistema de reservas y cómo se usa en turismo y alquiler",
  "turizm-operasyon-paneli-nedir": "Qué es un panel operativo de turismo",
  "emlakcilar-icin-web-ve-crm-sistemi": "Cómo planificar sitio web y CRM para inmobiliarias",
  "kuyumcular-icin-yazilim-sistemi": "Sistemas para joyerías: catálogo, precios y pedidos",
  "rent-a-car-yazilimi-nasil-planlanir": "Cómo se planifica un software para rent a car",
  "hazir-sistem-mi-ozel-yazilim-mi": "Sistema listo o software a medida: cuál conviene a pequeñas empresas",
  "web-sitesi-mi-admin-panel-mi": "Sitio web o panel admin: qué necesita realmente tu empresa",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Sitio catálogo o e-commerce: cuál es la opción correcta",
  "yazilim-projesi-fiyati-neden-degisir": "Por qué cambia el precio de un proyecto de software",
  "web-admin-ozel-yazilim-teslim-suresi": "Cómo se define el plazo de entrega para sitio web, panel admin y software",
  "isletme-yonetim-paneli-nedir": "Qué es un panel de gestión empresarial",
  "lead-takip-sistemi-nedir": "Qué es un sistema de seguimiento de leads",
  "mobil-uygulama-mi-webview-mi": "Aplicación móvil o webview: cuál tiene más sentido",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Cómo se usan las automatizaciones con IA en empresas",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Cómo se planifican soluciones de software sectoriales",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Por qué es importante un paquete de mantenimiento y desarrollo",
  "teknik-servis-takip-sistemi": "Qué es un sistema de seguimiento para servicio técnico",
  "restoran-qr-menu-ve-siparis-sistemi": "Cómo planificar un menú QR y sistema de pedidos para restaurante",
  "ajanslar-icin-musteri-paneli": "Para qué sirve un panel de cliente en agencias",
  "depo-ve-sevkiyat-takip-paneli": "Qué empresas necesitan un panel de almacén y despacho",
  "online-kurs-platformu-nasil-yapilir": "Cómo se construye una plataforma de cursos online",
  "yerel-market-siparis-sistemi": "Qué aporta un sistema de pedidos a mercados locales",
  "google-da-one-cikmak-icin-blog-stratejisi": "Cómo crear una estrategia de blog para destacar en Google",
};

const titleMapAr: Record<string, string> = {
  "admin-panel-nedir": "ما هي لوحة الإدارة وما فائدتها للشركات؟",
  "pazaryeri-xml-entegrasyonu-nedir": "ما هو تكامل XML للـ marketplace وكيف يتم تخطيطه؟",
  "whatsapp-katalog-sitesi-nedir": "ما هو موقع كتالوج واتساب؟",
  "randevu-sistemi-nedir": "ما هو نظام المواعيد وما الشركات التي تحتاجه؟",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "ما الفرق بين موقع التجارة الإلكترونية وموقع الكتالوج؟",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "ما الذي يجب الانتباه إليه عند بناء نظام تتبع مخزون؟",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "كيف يتم تحديد أسعار البرمجيات المخصصة؟",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "كيف يمكن رقمنة عمليات الأعمال باستخدام Power Apps؟",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "كيف يتم تحديد نطاق مشروع موقع ويب؟",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "لماذا تعتبر باقة الصيانة مهمة في مشاريع لوحات الإدارة؟",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "ما الذي يجب الانتباه إليه عند إنشاء موقع شركة؟",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "دليل عملي للشركات التي تريد برمجيات مخصصة",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "أنظمة برمجية للشركات الصغيرة: من الموقع إلى لوحة الإدارة",
  "saas-mvp-gelistirme-nedir": "ما هو تطوير SaaS MVP وكيف تتحول الفكرة إلى منتج أول؟",
  "admin-panel-yaptirmak-kapsam-rehberi": "دليل نطاق للشركات التي تخطط للوحة إدارة",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "ما فائدة نظام CRM لتتبع العملاء للشركات الصغيرة؟",
  "stok-takip-sistemi-yaptirmak": "دليل للشركات التي تخطط لنظام تتبع مخزون",
  "siparis-takip-sistemi-nedir": "ما هو نظام تتبع الطلبات وكيف ينظم طلبات واتساب وmarketplace؟",
  "teklif-takip-sistemi-hizmet-isletmeleri": "كيف ينظم نظام تتبع العروض المبيعات في شركات الخدمات؟",
  "whatsapp-siparis-sistemi-nedir": "ما هو نظام طلبات واتساب وما الشركات التي تحتاجه؟",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "دليل واقعي لموقع تجارة إلكترونية للشركات الصغيرة",
  "b2b-bayi-siparis-sistemi-nedir": "ما هو نظام طلبات موزعين B2B وكيف يعمل؟",
  "pazaryeri-entegrasyonu-nedir": "ما هو تكامل marketplace وكيف يتم تخطيط إدارة المنتجات؟",
  "xml-entegrasyonu-nedir": "ما هو تكامل XML وكيف يتم نقل بيانات المنتجات؟",
  "api-entegrasyonu-nedir": "ما هو تكامل API وكيف يتواصل نظامان برمجيان؟",
  "whatsapp-ai-asistan-kucuk-isletme": "كيف ينظم مساعد واتساب بالذكاء الاصطناعي رسائل العملاء؟",
  "randevu-sistemi-yaptirmak": "دليل نطاق للشركات التي تخطط لنظام مواعيد",
  "rezervasyon-sistemi-turizm-kiralama": "ما هو نظام الحجوزات وكيف يستخدم في السياحة والتأجير؟",
  "turizm-operasyon-paneli-nedir": "ما هي لوحة عمليات السياحة وكيف تنظم عمليات الرحلات؟",
  "emlakcilar-icin-web-ve-crm-sistemi": "كيف يتم تخطيط موقع وCRM للعقاريين؟",
  "kuyumcular-icin-yazilim-sistemi": "أنظمة برمجية لمحلات المجوهرات: كتالوج وأسعار وطلبات",
  "rent-a-car-yazilimi-nasil-planlanir": "كيف يتم تخطيط برنامج Rent a Car؟",
  "hazir-sistem-mi-ozel-yazilim-mi": "نظام جاهز أم برمجية مخصصة: أيهما أنسب للشركات الصغيرة؟",
  "web-sitesi-mi-admin-panel-mi": "موقع ويب أم لوحة إدارة: ماذا تحتاج شركتك فعلاً؟",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "موقع كتالوج أم تجارة إلكترونية: أيهما الخيار الصحيح؟",
  "yazilim-projesi-fiyati-neden-degisir": "لماذا يتغير سعر مشروع البرمجيات؟",
  "web-admin-ozel-yazilim-teslim-suresi": "كيف يتم تحديد مدة تسليم موقع أو لوحة إدارة أو برمجية مخصصة؟",
  "isletme-yonetim-paneli-nedir": "ما هي لوحة إدارة الأعمال؟",
  "lead-takip-sistemi-nedir": "ما هو نظام تتبع leads وكيف يمنع ضياع العملاء؟",
  "mobil-uygulama-mi-webview-mi": "تطبيق موبايل أم Webview: أيهما أنسب للشركات الصغيرة؟",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "كيف تستخدم أتمتة الذكاء الاصطناعي داخل الشركات؟",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "كيف يتم تخطيط الحلول البرمجية القطاعية؟",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "لماذا تعتبر باقة الصيانة والتطوير مهمة؟",
  "teknik-servis-takip-sistemi": "ما هو نظام تتبع الصيانة الفنية؟",
  "restoran-qr-menu-ve-siparis-sistemi": "كيف يتم تخطيط قائمة QR ونظام طلبات للمطاعم؟",
  "ajanslar-icin-musteri-paneli": "ما فائدة لوحة العملاء للوكالات؟",
  "depo-ve-sevkiyat-takip-paneli": "ما الشركات التي تحتاج لوحة مخزون وشحن؟",
  "online-kurs-platformu-nasil-yapilir": "كيف يتم بناء منصة دورات online؟",
  "yerel-market-siparis-sistemi": "ما فائدة نظام طلبات المتاجر المحلية؟",
  "google-da-one-cikmak-icin-blog-stratejisi": "كيف تبنى استراتيجية blog للظهور في Google؟",
};

const titleMapRu: Record<string, string> = {
  "admin-panel-nedir": "Что такое админ-панель и зачем она нужна бизнесу?",
  "pazaryeri-xml-entegrasyonu-nedir": "Что такое XML-интеграция marketplace и как она планируется?",
  "whatsapp-katalog-sitesi-nedir": "Что такое каталог-сайт для WhatsApp?",
  "randevu-sistemi-nedir": "Что такое система записи и каким бизнесам она нужна?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Чем e-commerce сайт отличается от каталога?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "На что обратить внимание при создании системы складского учета?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Как определяется цена индивидуальной разработки?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Как бизнес-процессы цифровизируются с Power Apps?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Как определить объем проекта web-сайта?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Почему пакет обслуживания важен для проектов админ-панели?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "На что обратить внимание при создании корпоративного сайта?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Практический гид для бизнеса, который планирует индивидуальную разработку",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Программные системы для малого бизнеса: от сайта до панели",
  "saas-mvp-gelistirme-nedir": "Что такое разработка SaaS MVP и как идея становится первым продуктом?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Гид по объему для бизнеса, который планирует админ-панель",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "Чем CRM-система учета клиентов полезна малому бизнесу?",
  "stok-takip-sistemi-yaptirmak": "Гид для бизнеса, который планирует систему складского учета",
  "siparis-takip-sistemi-nedir": "Что такое система отслеживания заказов и как она организует WhatsApp и marketplace-заказы?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Как система отслеживания предложений организует продажи услуг?",
  "whatsapp-siparis-sistemi-nedir": "Что такое система заказов через WhatsApp и кому она нужна?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Реалистичный гид по e-commerce сайту для малого бизнеса",
  "b2b-bayi-siparis-sistemi-nedir": "Что такое B2B система заказов дилеров и как она работает?",
  "pazaryeri-entegrasyonu-nedir": "Что такое marketplace-интеграция и как планируется управление товарами?",
  "xml-entegrasyonu-nedir": "Что такое XML-интеграция и как передаются товарные данные?",
  "api-entegrasyonu-nedir": "Что такое API-интеграция и как общаются две системы?",
  "whatsapp-ai-asistan-kucuk-isletme": "Как WhatsApp AI assistant организует сообщения клиентов?",
  "randevu-sistemi-yaptirmak": "Гид по объему для бизнеса, который планирует систему записи",
  "rezervasyon-sistemi-turizm-kiralama": "Что такое система бронирования для туризма и аренды?",
  "turizm-operasyon-paneli-nedir": "Что такое операционная панель для туризма?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Как планировать сайт и CRM для риелторов?",
  "kuyumcular-icin-yazilim-sistemi": "Программные системы для ювелиров: каталог, цены и заказы",
  "rent-a-car-yazilimi-nasil-planlanir": "Как планируется программа для Rent a Car?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Готовая система или индивидуальная разработка: что лучше для малого бизнеса?",
  "web-sitesi-mi-admin-panel-mi": "Web-сайт или админ-панель: что действительно нужно бизнесу?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Каталог-сайт или e-commerce: какой вариант выбрать?",
  "yazilim-projesi-fiyati-neden-degisir": "Почему меняется цена software-проекта?",
  "web-admin-ozel-yazilim-teslim-suresi": "Как определяется срок сдачи сайта, админ-панели и индивидуальной разработки?",
  "isletme-yonetim-paneli-nedir": "Что такое панель управления бизнесом?",
  "lead-takip-sistemi-nedir": "Что такое система отслеживания leads и как она предотвращает потерю клиентов?",
  "mobil-uygulama-mi-webview-mi": "Mobile app или Webview: что логичнее для малого бизнеса?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Как AI automations используются в бизнесе?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Как планируются отраслевые software-решения?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Почему важен пакет обслуживания и развития?",
  "teknik-servis-takip-sistemi": "Что такое система отслеживания технического сервиса?",
  "restoran-qr-menu-ve-siparis-sistemi": "Как планируется QR-меню и система заказов для ресторана?",
  "ajanslar-icin-musteri-paneli": "Чем клиентский panel полезен агентствам?",
  "depo-ve-sevkiyat-takip-paneli": "Каким бизнесам нужна панель склада и отгрузки?",
  "online-kurs-platformu-nasil-yapilir": "Как создается online course platform?",
  "yerel-market-siparis-sistemi": "Что дает система заказов локальному маркету?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Как строить blog strategy для видимости в Google?",
};

const titleMapPt: Record<string, string> = {
  "admin-panel-nedir": "O que é um painel administrativo e para que serve nas empresas?",
  "pazaryeri-xml-entegrasyonu-nedir": "O que é integração XML com marketplaces e como ela é planejada?",
  "whatsapp-katalog-sitesi-nedir": "O que é um site catálogo para WhatsApp?",
  "randevu-sistemi-nedir": "O que é um sistema de agendamento e quais empresas precisam dele?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Qual é a diferença entre site de e-commerce e site catálogo?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "O que considerar ao criar um sistema de controle de estoque?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Como são definidos os preços de software sob medida?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Como processos empresariais são digitalizados com Power Apps?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Como definir o escopo de um projeto de site?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Por que um pacote de manutenção é importante em projetos de painel administrativo?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "O que considerar ao criar um site corporativo?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Guia prático para pequenas empresas que planejam software sob medida",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Sistemas de software para pequenas empresas: do site ao painel administrativo",
  "saas-mvp-gelistirme-nedir": "O que é desenvolvimento de SaaS MVP e como uma ideia vira o primeiro produto?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Guia de escopo para empresas que planejam um painel administrativo",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "Para que serve um sistema CRM de acompanhamento de clientes em pequenas empresas?",
  "stok-takip-sistemi-yaptirmak": "Guia para empresas que planejam um sistema de controle de estoque",
  "siparis-takip-sistemi-nedir": "O que é um sistema de acompanhamento de pedidos e como organiza WhatsApp e marketplaces?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Como um sistema de acompanhamento de propostas organiza vendas em empresas de serviço?",
  "whatsapp-siparis-sistemi-nedir": "O que é um sistema de pedidos por WhatsApp e quais empresas precisam dele?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Guia realista de e-commerce para pequenas empresas",
  "b2b-bayi-siparis-sistemi-nedir": "O que é um sistema B2B de pedidos para revendedores e como ele funciona?",
  "pazaryeri-entegrasyonu-nedir": "O que é integração com marketplaces e como o gerenciamento de produtos é planejado?",
  "xml-entegrasyonu-nedir": "O que é integração XML e como dados de produto são transferidos?",
  "api-entegrasyonu-nedir": "O que é integração API e como dois sistemas conversam?",
  "whatsapp-ai-asistan-kucuk-isletme": "Como um assistente de IA para WhatsApp organiza mensagens de clientes?",
  "randevu-sistemi-yaptirmak": "Guia de escopo para empresas que planejam um sistema de agendamento",
  "rezervasyon-sistemi-turizm-kiralama": "O que é um sistema de reservas e como ele é usado em turismo e locação?",
  "turizm-operasyon-paneli-nedir": "O que é um painel operacional de turismo e como organiza processos de tours?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Como planejar site e CRM para imobiliárias?",
  "kuyumcular-icin-yazilim-sistemi": "Sistemas de software para joalherias: catálogo, preços e pedidos",
  "rent-a-car-yazilimi-nasil-planlanir": "Como planejar software para rent a car?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Sistema pronto ou software sob medida: qual faz mais sentido para pequenas empresas?",
  "web-sitesi-mi-admin-panel-mi": "Site web ou painel administrativo: do que sua empresa realmente precisa?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Site catálogo ou e-commerce: qual é a escolha certa?",
  "yazilim-projesi-fiyati-neden-degisir": "Por que o preço de um projeto de software muda?",
  "web-admin-ozel-yazilim-teslim-suresi": "Como definir o prazo de entrega de sites, painéis e software sob medida?",
  "isletme-yonetim-paneli-nedir": "O que é um painel de gestão empresarial?",
  "lead-takip-sistemi-nedir": "O que é um sistema de acompanhamento de leads e como evita perda de clientes?",
  "mobil-uygulama-mi-webview-mi": "Aplicativo mobile ou webview: qual faz mais sentido para pequenas empresas?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Como automações com IA são usadas nas empresas?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Como planejar soluções de software setorial?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Por que um pacote de manutenção e desenvolvimento é importante?",
  "teknik-servis-takip-sistemi": "O que é um sistema de acompanhamento de serviço técnico?",
  "restoran-qr-menu-ve-siparis-sistemi": "Como planejar menu QR e sistema de pedidos para restaurantes?",
  "ajanslar-icin-musteri-paneli": "Para que serve um painel do cliente em agências?",
  "depo-ve-sevkiyat-takip-paneli": "Quais empresas precisam de painel de estoque e expedição?",
  "online-kurs-platformu-nasil-yapilir": "Como criar uma plataforma de curso online?",
  "yerel-market-siparis-sistemi": "O que um sistema de pedidos traz para mercados locais?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Como construir uma estratégia de blog para aparecer melhor no Google?",
};

const titleMapIt: Record<string, string> = {
  "admin-panel-nedir": "Che cos'è un pannello amministrativo e a cosa serve alle aziende?",
  "pazaryeri-xml-entegrasyonu-nedir": "Che cos'è l'integrazione XML marketplace e come si pianifica in un progetto reale?",
  "whatsapp-katalog-sitesi-nedir": "Che cos'è un sito catalogo per WhatsApp?",
  "randevu-sistemi-nedir": "Che cos'è un sistema appuntamenti e quali aziende ne hanno bisogno?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Qual è la differenza tra sito e-commerce e sito catalogo?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "Cosa considerare quando si crea un sistema di gestione stock?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Come vengono definiti i prezzi del software su misura?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Come si digitalizzano i processi aziendali con Power Apps?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Come si definisce l'ambito di un progetto sito web?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Perché un pacchetto di manutenzione è importante nei progetti di pannello amministrativo?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "Cosa considerare quando si realizza un sito corporate?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Guida pratica per piccole aziende che vogliono software su misura",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Sistemi software per piccole imprese: dal sito web al pannello amministrativo",
  "saas-mvp-gelistirme-nedir": "Che cos'è lo sviluppo SaaS MVP e come un'idea diventa un primo prodotto?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Guida all'ambito per aziende che pianificano un pannello amministrativo",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "A cosa serve un sistema CRM di monitoraggio clienti nelle piccole aziende?",
  "stok-takip-sistemi-yaptirmak": "Guida per aziende che pianificano un sistema di gestione stock",
  "siparis-takip-sistemi-nedir": "Che cos'è un sistema di monitoraggio ordini e come organizza WhatsApp e marketplace?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Come un sistema di monitoraggio preventivi organizza le vendite nelle aziende di servizi?",
  "whatsapp-siparis-sistemi-nedir": "Che cos'è un sistema ordini WhatsApp e quali aziende ne hanno bisogno?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Guida realistica all'e-commerce per piccole imprese",
  "b2b-bayi-siparis-sistemi-nedir": "Che cos'è un sistema ordini B2B per rivenditori e come funziona?",
  "pazaryeri-entegrasyonu-nedir": "Che cos'è l'integrazione marketplace e come si pianifica la gestione prodotti?",
  "xml-entegrasyonu-nedir": "Che cos'è l'integrazione XML e come si trasferiscono i dati prodotto?",
  "api-entegrasyonu-nedir": "Che cos'è l'integrazione API e come comunicano due sistemi software?",
  "whatsapp-ai-asistan-kucuk-isletme": "Come un assistente AI per WhatsApp organizza i messaggi clienti?",
  "randevu-sistemi-yaptirmak": "Guida all'ambito per aziende che pianificano un sistema appuntamenti",
  "rezervasyon-sistemi-turizm-kiralama": "Che cos'è un sistema prenotazioni e come si usa in turismo e noleggio?",
  "turizm-operasyon-paneli-nedir": "Che cos'è un pannello operativo turistico e come organizza i processi tour?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Come pianificare sito web e CRM per agenzie immobiliari?",
  "kuyumcular-icin-yazilim-sistemi": "Sistemi software per gioiellerie: catalogo, prezzi e ordini",
  "rent-a-car-yazilimi-nasil-planlanir": "Come si pianifica un software rent a car?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Sistema pronto o software su misura: cosa conviene alle piccole aziende?",
  "web-sitesi-mi-admin-panel-mi": "Sito web o pannello amministrativo: di cosa ha davvero bisogno la tua azienda?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Sito catalogo o e-commerce: qual è la scelta giusta?",
  "yazilim-projesi-fiyati-neden-degisir": "Perché cambia il prezzo di un progetto software?",
  "web-admin-ozel-yazilim-teslim-suresi": "Come si definisce il tempo di consegna di siti, pannelli e software su misura?",
  "isletme-yonetim-paneli-nedir": "Che cos'è un pannello di gestione aziendale?",
  "lead-takip-sistemi-nedir": "Che cos'è un sistema di monitoraggio lead e come evita la perdita di clienti?",
  "mobil-uygulama-mi-webview-mi": "App mobile o webview: cosa ha più senso per piccole aziende?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Come si usano le automazioni AI nelle aziende?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Come si pianificano soluzioni software settoriali?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Perché è importante un pacchetto di manutenzione e sviluppo?",
  "teknik-servis-takip-sistemi": "Che cos'è un sistema di monitoraggio assistenza tecnica?",
  "restoran-qr-menu-ve-siparis-sistemi": "Come pianificare menu QR e sistema ordini per ristoranti?",
  "ajanslar-icin-musteri-paneli": "A cosa serve un pannello clienti per agenzie?",
  "depo-ve-sevkiyat-takip-paneli": "Quali aziende hanno bisogno di un pannello magazzino e spedizioni?",
  "online-kurs-platformu-nasil-yapilir": "Come si costruisce una piattaforma corsi online?",
  "yerel-market-siparis-sistemi": "Cosa porta un sistema ordini ai market locali?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Come costruire una strategia blog per emergere su Google?",
};

const titleMapNl: Record<string, string> = {
  "admin-panel-nedir": "Wat is een beheerpaneel en waarvoor dient het in bedrijven?",
  "pazaryeri-xml-entegrasyonu-nedir": "Wat is marketplace XML-integratie en hoe plan je dit in een echt project?",
  "whatsapp-katalog-sitesi-nedir": "Wat is een WhatsApp-cataloguswebsite?",
  "randevu-sistemi-nedir": "Wat is een afsprakensysteem en voor welke bedrijven is het geschikt?",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "Wat is het verschil tussen een e-commerce website en een cataloguswebsite?",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "Waar moet je op letten bij het laten bouwen van een voorraadvolgsysteem?",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "Hoe worden prijzen voor software op maat bepaald?",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "Hoe digitaliseer je bedrijfsprocessen met Power Apps?",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "Hoe wordt de scope van een websiteproject bepaald?",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "Waarom is een onderhoudspakket belangrijk bij beheerpaneelprojecten?",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "Waar moet je op letten bij een corporate website?",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "Praktische gids voor bedrijven die software op maat willen laten bouwen",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "Softwaresystemen voor kleine bedrijven: van website tot beheerpaneel",
  "saas-mvp-gelistirme-nedir": "Wat is SaaS MVP-ontwikkeling en hoe wordt een idee een eerste product?",
  "admin-panel-yaptirmak-kapsam-rehberi": "Scopegids voor bedrijven die een beheerpaneel willen laten bouwen",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "Waarvoor dient een CRM-klantvolgsysteem bij kleine bedrijven?",
  "stok-takip-sistemi-yaptirmak": "Gids voor bedrijven die een voorraadvolgsysteem plannen",
  "siparis-takip-sistemi-nedir": "Wat is een ordervolgsysteem en hoe ordent het WhatsApp- en marketplace-orders?",
  "teklif-takip-sistemi-hizmet-isletmeleri": "Hoe organiseert een offertevolgsysteem verkoop bij dienstverleners?",
  "whatsapp-siparis-sistemi-nedir": "Wat is een WhatsApp-bestelsysteem en welke bedrijven hebben het nodig?",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "Realistische e-commercegids voor kleine bedrijven",
  "b2b-bayi-siparis-sistemi-nedir": "Wat is een B2B-dealerbestelsysteem en hoe werkt het?",
  "pazaryeri-entegrasyonu-nedir": "Wat is marketplace-integratie en hoe wordt productbeheer gepland?",
  "xml-entegrasyonu-nedir": "Wat is XML-integratie en hoe wordt productdata overgedragen?",
  "api-entegrasyonu-nedir": "Wat is API-integratie en hoe communiceren twee softwaresystemen?",
  "whatsapp-ai-asistan-kucuk-isletme": "Hoe ordent een WhatsApp AI-assistent klantberichten voor kleine bedrijven?",
  "randevu-sistemi-yaptirmak": "Scopegids voor bedrijven die een afsprakensysteem plannen",
  "rezervasyon-sistemi-turizm-kiralama": "Wat is een reserveringssysteem en hoe gebruik je het in toerisme en verhuur?",
  "turizm-operasyon-paneli-nedir": "Wat is een toerisme-operatiepaneel en hoe ordent het tourprocessen?",
  "emlakcilar-icin-web-ve-crm-sistemi": "Hoe plan je een website en CRM-systeem voor makelaars?",
  "kuyumcular-icin-yazilim-sistemi": "Softwaresystemen voor juweliers: catalogus, prijsopvolging en orders",
  "rent-a-car-yazilimi-nasil-planlanir": "Hoe wordt rent a car software gepland?",
  "hazir-sistem-mi-ozel-yazilim-mi": "Kant-en-klaar systeem of software op maat: wat is logischer voor kleine bedrijven?",
  "web-sitesi-mi-admin-panel-mi": "Website of beheerpaneel: wat heeft je bedrijf echt nodig?",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "Cataloguswebsite of e-commerce website: welke keuze past beter?",
  "yazilim-projesi-fiyati-neden-degisir": "Waarom verandert de prijs van een softwareproject?",
  "web-admin-ozel-yazilim-teslim-suresi": "Hoe wordt de oplevertijd voor websites, panelen en software op maat bepaald?",
  "isletme-yonetim-paneli-nedir": "Wat is een bedrijfsbeheerpaneel?",
  "lead-takip-sistemi-nedir": "Wat is een leadvolgsysteem en hoe voorkomt het verloren klanten?",
  "mobil-uygulama-mi-webview-mi": "Mobiele app of webview: wat is logischer voor kleine bedrijven?",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "Hoe worden AI-automatiseringen gebruikt in bedrijven?",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "Hoe worden sectorspecifieke softwareoplossingen gepland?",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "Waarom is een onderhouds- en ontwikkelpakket belangrijk?",
  "teknik-servis-takip-sistemi": "Wat is een volgsysteem voor technische service?",
  "restoran-qr-menu-ve-siparis-sistemi": "Hoe plan je een QR-menu en bestelsysteem voor restaurants?",
  "ajanslar-icin-musteri-paneli": "Waarvoor dient een klantportaal bij bureaus?",
  "depo-ve-sevkiyat-takip-paneli": "Welke bedrijven hebben een magazijn- en verzendpaneel nodig?",
  "online-kurs-platformu-nasil-yapilir": "Hoe bouw je een online cursusplatform?",
  "yerel-market-siparis-sistemi": "Wat levert een lokaal bestelsysteem op voor buurtwinkels?",
  "google-da-one-cikmak-icin-blog-stratejisi": "Hoe bouw je een blogstrategie om beter zichtbaar te worden in Google?",
};

const titleMapZh: Record<string, string> = {
  "admin-panel-nedir": "什么是管理面板，它对企业有什么作用？",
  "pazaryeri-xml-entegrasyonu-nedir": "什么是 Marketplace XML 集成，真实项目中如何规划？",
  "whatsapp-katalog-sitesi-nedir": "什么是 WhatsApp 目录网站？",
  "randevu-sistemi-nedir": "什么是预约系统，哪些企业需要它？",
  "e-ticaret-sitesi-ile-katalog-sitesi-farki": "电商网站和目录网站有什么区别？",
  "stok-takip-sistemi-yaptirirken-nelere-dikkat-edilmeli": "开发库存跟踪系统时需要注意什么？",
  "ozel-yazilim-fiyatlari-nasil-belirlenir": "定制软件价格如何确定？",
  "power-apps-ile-isletme-surecleri-nasil-dijitallesir": "如何用 Power Apps 数字化企业流程？",
  "web-sitesi-projesinde-kapsam-nasil-belirlenir": "网站项目的范围如何确定？",
  "admin-panel-projelerinde-bakim-paketi-neden-onemlidir": "为什么管理面板项目需要维护包？",
  "kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli": "建设企业网站时需要注意什么？",
  "ozel-yazilim-yaptirmak-isteyenler-icin-rehber": "计划定制软件的小企业实用指南",
  "kucuk-isletmeler-icin-yazilim-sistemleri": "小企业软件系统：从网站到管理面板",
  "saas-mvp-gelistirme-nedir": "什么是 SaaS MVP 开发，想法如何变成第一版产品？",
  "admin-panel-yaptirmak-kapsam-rehberi": "计划开发管理面板的企业范围指南",
  "crm-musteri-takip-sistemi-ne-ise-yarar": "CRM 客户跟踪系统对小企业有什么作用？",
  "stok-takip-sistemi-yaptirmak": "计划库存跟踪系统的企业指南",
  "siparis-takip-sistemi-nedir": "什么是订单跟踪系统，它如何整理 WhatsApp 和 marketplace 订单？",
  "teklif-takip-sistemi-hizmet-isletmeleri": "报价跟踪系统如何组织服务型企业销售？",
  "whatsapp-siparis-sistemi-nedir": "什么是 WhatsApp 订单系统，哪些企业需要？",
  "e-ticaret-sitesi-yaptirmak-kucuk-isletme": "小企业建设电商网站的现实指南",
  "b2b-bayi-siparis-sistemi-nedir": "什么是 B2B 经销商订单系统，它如何工作？",
  "pazaryeri-entegrasyonu-nedir": "什么是 marketplace 集成，产品管理如何规划？",
  "xml-entegrasyonu-nedir": "什么是 XML 集成，产品数据如何传输？",
  "api-entegrasyonu-nedir": "什么是 API 集成，两个软件系统如何通信？",
  "whatsapp-ai-asistan-kucuk-isletme": "WhatsApp AI 助手如何为小企业整理客户消息？",
  "randevu-sistemi-yaptirmak": "计划预约系统的企业范围指南",
  "rezervasyon-sistemi-turizm-kiralama": "什么是预订系统，旅游和租赁业务如何使用？",
  "turizm-operasyon-paneli-nedir": "什么是旅游运营面板，它如何整理行程流程？",
  "emlakcilar-icin-web-ve-crm-sistemi": "房地产经纪网站和 CRM 系统如何规划？",
  "kuyumcular-icin-yazilim-sistemi": "珠宝商软件系统：目录、价格跟踪和订单",
  "rent-a-car-yazilimi-nasil-planlanir": "租车软件如何规划？",
  "hazir-sistem-mi-ozel-yazilim-mi": "现成系统还是定制软件：小企业该如何选择？",
  "web-sitesi-mi-admin-panel-mi": "网站还是管理面板：企业真正需要什么？",
  "katalog-sitesi-mi-e-ticaret-sitesi-mi": "目录网站还是电商网站：哪种选择更合适？",
  "yazilim-projesi-fiyati-neden-degisir": "为什么软件项目价格会变化？",
  "web-admin-ozel-yazilim-teslim-suresi": "网站、面板和定制软件的交付时间如何确定？",
  "isletme-yonetim-paneli-nedir": "什么是企业管理面板？",
  "lead-takip-sistemi-nedir": "什么是线索跟踪系统，它如何避免客户流失？",
  "mobil-uygulama-mi-webview-mi": "移动应用还是 Webview：小企业哪种更合理？",
  "yapay-zeka-otomasyonlari-isletmelerde-nasil-kullanilir": "AI 自动化如何在企业中使用？",
  "sektorel-yazilim-cozumleri-nasil-planlanir": "行业软件解决方案如何规划？",
  "bakim-ve-gelistirme-paketi-neden-onemlidir": "为什么维护和开发包很重要？",
  "teknik-servis-takip-sistemi": "什么是技术服务跟踪系统？",
  "restoran-qr-menu-ve-siparis-sistemi": "餐厅 QR 菜单和订单系统如何规划？",
  "ajanslar-icin-musteri-paneli": "机构客户面板有什么作用？",
  "depo-ve-sevkiyat-takip-paneli": "哪些企业需要仓库和发货面板？",
  "online-kurs-platformu-nasil-yapilir": "在线课程平台如何构建？",
  "yerel-market-siparis-sistemi": "本地市场订单系统能带来什么？",
  "google-da-one-cikmak-icin-blog-stratejisi": "如何建立提升 Google 可见性的博客策略？",
};

function readableTag(tag: string) {
  return tag
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const germanTagWords: Record<string, string> = {
  abonelikli: "Abo",
  admin: "Admin",
  ai: "KI",
  ajans: "Agentur",
  aktarimi: "Ubertragung",
  altin: "Gold",
  api: "API",
  arac: "Fahrzeug",
  asistan: "Assistent",
  avantajlari: "Vorteile",
  bakim: "Wartung",
  barkodlu: "Barcode",
  bayi: "Handler",
  b2b: "B2B",
  blog: "Blog",
  butik: "Boutique",
  canli: "Live",
  cari: "Konten",
  cevap: "Antwort",
  chatbot: "Chatbot",
  cihaz: "Gerat",
  crm: "CRM",
  dashboard: "Dashboard",
  depo: "Lager",
  destek: "Support",
  dijital: "Digital",
  distributor: "Distributor",
  dokuman: "Dokument",
  dosya: "Datei",
  egitim: "Bildung",
  emlak: "Immobilien",
  entegrasyonu: "Integration",
  evrak: "Dokument",
  fiyat: "Preis",
  fiyati: "Preis",
  fiyatlandirma: "Preisplanung",
  filo: "Flotte",
  firma: "Firma",
  firmasi: "Firma",
  gayrimenkul: "Immobilien",
  gelistirme: "Entwicklung",
  giris: "Eingang",
  guncelleme: "Aktualisierung",
  guzellik: "Schonheit",
  hazir: "Fertig",
  hepsiburada: "Hepsiburada",
  hizmet: "Dienstleistung",
  ic: "Interne",
  icerik: "Inhalt",
  ilan: "Inserat",
  is: "Aufgabe",
  isletme: "Unternehmen",
  isletmeye: "Unternehmensspezifisch",
  kabul: "Annahme",
  kapora: "Anzahlung",
  kargo: "Versand",
  kasap: "Metzger",
  kapsam: "Umfang",
  katalog: "Katalog",
  kayit: "Registrierung",
  kiralama: "Vermietung",
  klinik: "Klinik",
  kucuk: "Kleine",
  kur: "Wechselkurs",
  kurs: "Kurs",
  kurumsal: "Unternehmens",
  kuyumcu: "Juwelier",
  kumesi: "Cluster",
  lead: "Lead",
  mahalle: "Nachbarschaft",
  maliyeti: "Kosten",
  manav: "Gemusehandler",
  market: "Markt",
  masa: "Tisch",
  menu: "Menu",
  mesaj: "Nachricht",
  merkezi: "Zentrum",
  mi: "Oder",
  mobil: "Mobil",
  musaitlik: "Verfugbarkeit",
  musteri: "Kunden",
  mvp: "MVP",
  n11: "n11",
  native: "Nativ",
  odeme: "Zahlung",
  ogrenci: "Studenten",
  onarim: "Reparatur",
  online: "Online",
  onerisi: "Vorschlag",
  operasyon: "Operations",
  otomasyon: "Automatisierung",
  otel: "Hotel",
  ozel: "Individuelle",
  pazarama: "Pazarama",
  paneli: "Panel",
  pazaryeri: "Marktplatz",
  planlama: "Planung",
  portfoy: "Portfolio",
  potansiyel: "Potenzielle",
  power: "Power",
  proje: "Projekt",
  pwa: "PWA",
  qr: "QR",
  reklam: "Werbung",
  rent: "Rent",
  rest: "REST",
  restoran: "Restaurant",
  revize: "Revision",
  randevu: "Termin",
  rezervasyon: "Reservierung",
  saas: "SaaS",
  satis: "Verkauf",
  secimi: "Auswahl",
  sektorel: "Branchen",
  seo: "SEO",
  servis: "Service",
  sevkiyat: "Versand",
  sharepoint: "SharePoint",
  siparis: "Bestell",
  siparisi: "Bestellung",
  sistem: "System",
  sistemi: "System",
  sitesi: "Website",
  stok: "Bestand",
  stratejisi: "Strategie",
  suresi: "Dauer",
  taki: "Schmuck",
  takip: "Verfolgung",
  takvimi: "Kalender",
  talep: "Anfrage",
  tasarim: "Design",
  tedarikci: "Lieferant",
  teklif: "Angebot",
  teknik: "Technischer",
  teslim: "Lieferung",
  teslimat: "Zustellung",
  sonrasi: "Nach",
  toptanci: "Grosshandler",
  trendyol: "Trendyol",
  tur: "Tour",
  turizm: "Tourismus",
  ucus: "Flug",
  umre: "Umrah",
  uygulama: "App",
  uygulamasi: "App",
  urun: "Produkt",
  veri: "Daten",
  verisi: "Daten",
  web: "Web",
  webview: "Webview",
  webhook: "Webhook",
  whatsapp: "WhatsApp",
  xml: "XML",
  yapay: "Kunstliche",
  yaptirmak: "Beauftragen",
  yazilim: "Software",
  yazilimi: "Software",
  yerel: "Lokaler",
  yolcu: "Passagier",
  yonetim: "Verwaltungs",
  yonetimi: "Verwaltung",
};

function germanTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  return normalized
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => germanTagWords[word] ?? readableTag(word))
    .join(" ")
    .replace(/\bE Ticaret\b/g, "E-Commerce");
}

const frenchTagWords: Record<string, string> = {
  abonelikli: "abonnement",
  admin: "admin",
  ai: "IA",
  ajans: "agence",
  aktarimi: "transfert",
  altin: "or",
  api: "API",
  arac: "véhicule",
  asistan: "assistant",
  avantajlari: "avantages",
  bakim: "maintenance",
  barkodlu: "code-barres",
  bayi: "revendeur",
  b2b: "B2B",
  blog: "blog",
  butik: "boutique",
  canli: "live",
  cari: "compte",
  cevap: "réponse",
  chatbot: "chatbot",
  cihaz: "appareil",
  crm: "CRM",
  dashboard: "dashboard",
  depo: "entrepôt",
  destek: "support",
  dijital: "digital",
  distributor: "distributeur",
  dokuman: "document",
  dosya: "fichier",
  egitim: "formation",
  emlak: "immobilier",
  entegrasyonu: "intégration",
  evrak: "document",
  fiyat: "prix",
  fiyati: "prix",
  fiyatlandirma: "tarification",
  filo: "flotte",
  firma: "entreprise",
  firmasi: "entreprise",
  gayrimenkul: "immobilier",
  gelistirme: "développement",
  giris: "entrée",
  guncelleme: "mise à jour",
  guzellik: "beauté",
  hazir: "prêt",
  hepsiburada: "Hepsiburada",
  hizmet: "service",
  ic: "interne",
  icerik: "contenu",
  ilan: "annonce",
  is: "travail",
  isletme: "entreprise",
  isletmeye: "sur mesure entreprise",
  kabul: "réception",
  kapora: "acompte",
  kargo: "livraison",
  kasap: "boucher",
  kapsam: "périmètre",
  katalog: "catalogue",
  kayit: "inscription",
  kiralama: "location",
  klinik: "clinique",
  kucuk: "petite",
  kur: "taux",
  kurs: "cours",
  kurumsal: "corporate",
  kuyumcu: "bijouterie",
  kumesi: "cluster",
  lead: "lead",
  mahalle: "quartier",
  maliyeti: "coût",
  manav: "primeur",
  market: "marché",
  masa: "table",
  menu: "menu",
  mesaj: "message",
  merkezi: "centre",
  mi: "ou",
  mobil: "mobile",
  musaitlik: "disponibilité",
  musteri: "client",
  mvp: "MVP",
  n11: "n11",
  native: "native",
  odeme: "paiement",
  ogrenci: "étudiant",
  onarim: "réparation",
  online: "en ligne",
  onerisi: "suggestion",
  operasyon: "opération",
  otomasyon: "automatisation",
  otel: "hôtel",
  ozel: "sur mesure",
  pazarama: "Pazarama",
  paneli: "panneau",
  pazaryeri: "marketplace",
  planlama: "planification",
  portfoy: "portefeuille",
  potansiyel: "potentiel",
  power: "Power",
  proje: "projet",
  pwa: "PWA",
  qr: "QR",
  reklam: "publicité",
  rent: "rent",
  rest: "REST",
  restoran: "restaurant",
  revize: "révision",
  randevu: "rendez-vous",
  rezervasyon: "réservation",
  saas: "SaaS",
  satis: "vente",
  secimi: "choix",
  sektorel: "sectoriel",
  seo: "SEO",
  servis: "service",
  sevkiyat: "expédition",
  sharepoint: "SharePoint",
  siparis: "commande",
  siparisi: "commande",
  sistem: "système",
  sistemi: "système",
  sitesi: "site",
  stok: "stock",
  stratejisi: "stratégie",
  suresi: "durée",
  taki: "bijou",
  takip: "suivi",
  takvimi: "calendrier",
  talep: "demande",
  tasarim: "design",
  tedarikci: "fournisseur",
  teklif: "devis",
  teknik: "technique",
  teslim: "livraison",
  teslimat: "livraison",
  sonrasi: "après",
  toptanci: "grossiste",
  trendyol: "Trendyol",
  tur: "tour",
  turizm: "tourisme",
  ucus: "vol",
  umre: "Omra",
  uygulama: "application",
  uygulamasi: "application",
  urun: "produit",
  veri: "données",
  verisi: "données",
  web: "web",
  webview: "webview",
  webhook: "webhook",
  whatsapp: "WhatsApp",
  xml: "XML",
  yapay: "IA",
  yaptirmak: "faire réaliser",
  yazilim: "logiciel",
  yazilimi: "logiciel",
  yerel: "local",
  zeka: "IA",
  yolcu: "voyageur",
  yonetim: "gestion",
  yonetimi: "gestion",
};

function frenchTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  return normalized
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => frenchTagWords[word] ?? readableTag(word))
    .join(" ")
    .replace(/\bE Ticaret\b/g, "E-commerce");
}

const spanishTagWords: Record<string, string> = {
  abonelikli: "suscripción",
  admin: "admin",
  ai: "IA",
  ajans: "agencia",
  aktarimi: "transferencia",
  altin: "oro",
  api: "API",
  arac: "vehículo",
  asistan: "asistente",
  avantajlari: "ventajas",
  bakim: "mantenimiento",
  barkodlu: "código de barras",
  bayi: "distribuidor",
  b2b: "B2B",
  blog: "blog",
  butik: "boutique",
  canli: "en vivo",
  cari: "cuenta",
  cevap: "respuesta",
  chatbot: "chatbot",
  cihaz: "equipo",
  crm: "CRM",
  dashboard: "dashboard",
  depo: "almacén",
  destek: "soporte",
  dijital: "digital",
  distributor: "distribuidor",
  dokuman: "documento",
  dosya: "archivo",
  egitim: "formación",
  emlak: "inmobiliaria",
  entegrasyonu: "integración",
  evrak: "documento",
  fiyat: "precio",
  fiyati: "precio",
  fiyatlandirma: "tarificación",
  filo: "flota",
  firma: "empresa",
  firmasi: "empresa",
  gayrimenkul: "inmobiliaria",
  gelistirme: "desarrollo",
  giris: "entrada",
  guncelleme: "actualización",
  guzellik: "belleza",
  hazir: "listo",
  hepsiburada: "Hepsiburada",
  hizmet: "servicio",
  ic: "interno",
  icerik: "contenido",
  ilan: "anuncio",
  is: "trabajo",
  isletme: "empresa",
  isletmeye: "para empresa",
  kabul: "recepción",
  kapora: "anticipo",
  kargo: "envío",
  kasap: "carnicería",
  kapsam: "alcance",
  katalog: "catálogo",
  kayit: "registro",
  kiralama: "alquiler",
  klinik: "clínica",
  kucuk: "pequeña",
  kur: "tipo de cambio",
  kurs: "curso",
  kurumsal: "corporativo",
  kuyumcu: "joyería",
  kumesi: "grupo",
  lead: "lead",
  mahalle: "barrio",
  maliyeti: "coste",
  manav: "frutería",
  market: "mercado",
  masa: "mesa",
  menu: "menú",
  mesaj: "mensaje",
  merkezi: "centro",
  mi: "o",
  mobil: "móvil",
  musaitlik: "disponibilidad",
  musteri: "cliente",
  mvp: "MVP",
  n11: "n11",
  native: "nativo",
  odeme: "pago",
  ogrenci: "estudiante",
  onarim: "reparación",
  online: "online",
  onerisi: "sugerencia",
  operasyon: "operación",
  otomasyon: "automatización",
  otel: "hotel",
  ozel: "a medida",
  pazarama: "Pazarama",
  paneli: "panel",
  pazaryeri: "marketplace",
  planlama: "planificación",
  portfoy: "portfolio",
  potansiyel: "potencial",
  power: "Power",
  proje: "proyecto",
  pwa: "PWA",
  qr: "QR",
  reklam: "publicidad",
  rent: "rent",
  rest: "REST",
  restoran: "restaurante",
  revize: "revisión",
  randevu: "cita",
  rezervasyon: "reserva",
  saas: "SaaS",
  satis: "venta",
  secimi: "elección",
  sektorel: "sectorial",
  seo: "SEO",
  servis: "servicio",
  sevkiyat: "despacho",
  sharepoint: "SharePoint",
  siparis: "pedido",
  siparisi: "pedido",
  sistem: "sistema",
  sistemi: "sistema",
  sitesi: "sitio",
  stok: "stock",
  stratejisi: "estrategia",
  suresi: "plazo",
  taki: "joya",
  takip: "seguimiento",
  takvimi: "calendario",
  talep: "solicitud",
  tasarim: "diseño",
  tedarikci: "proveedor",
  teklif: "propuesta",
  teknik: "técnico",
  teslim: "entrega",
  teslimat: "entrega",
  sonrasi: "posterior",
  toptanci: "mayorista",
  trendyol: "Trendyol",
  tur: "tour",
  turizm: "turismo",
  ucus: "vuelo",
  umre: "Umrah",
  uygulama: "aplicación",
  uygulamasi: "aplicación",
  urun: "producto",
  veri: "datos",
  verisi: "datos",
  web: "web",
  webview: "webview",
  webhook: "webhook",
  whatsapp: "WhatsApp",
  xml: "XML",
  yapay: "IA",
  yaptirmak: "contratar",
  yazilim: "software",
  yazilimi: "software",
  yerel: "local",
  zeka: "IA",
  yolcu: "pasajero",
  yonetim: "gestión",
  yonetimi: "gestión",
};

function spanishTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  return normalized
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => spanishTagWords[word] ?? readableTag(word))
    .join(" ")
    .replace(/\bE Ticaret\b/g, "E-commerce");
}

function arabicTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  if (/seo|canonical|redirect|index|sitemap|google|blog|icerik/.test(normalized)) return "SEO والمحتوى";
  if (/crm|lead|musteri|teklif|satis/.test(normalized)) return "CRM والمبيعات";
  if (/stok|siparis|depo|sevkiyat|kargo|urun|katalog|whatsapp/.test(normalized)) return "المخزون والطلبات";
  if (/randevu|rezervasyon|takvim|otel|villa|tur|turizm|rent|arac/.test(normalized)) return "المواعيد والحجوزات";
  if (/api|xml|pazaryeri|entegrasyon|webhook|odeme/.test(normalized)) return "التكاملات";
  if (/ai|yapay|zeka|otomasyon|asistan|chatbot|dokuman|mesaj/.test(normalized)) return "الذكاء الاصطناعي";
  if (/mobil|webview|native|pwa|uygulama/.test(normalized)) return "الموبايل";
  if (/bakim|destek|teslim|onarim|servis/.test(normalized)) return "الصيانة والدعم";
  if (/panel|admin|dashboard|operasyon|yonetim|isletme|gorev|dosya/.test(normalized)) return "لوحات الإدارة";
  if (/ozel|yazilim|mvp|saas|hazir|fiyat|kapsam|sure/.test(normalized)) return "البرمجيات المخصصة";
  if (/emlak|kuyumcu|restoran|ajans|kurs|market|kasap|manav/.test(normalized)) return "برمجيات القطاعات";
  return "حلول رقمية";
}

function russianTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  if (/seo|canonical|redirect|index|sitemap|google|blog|icerik/.test(normalized)) return "SEO и контент";
  if (/crm|lead|musteri|teklif|satis/.test(normalized)) return "CRM и продажи";
  if (/stok|siparis|depo|sevkiyat|kargo|urun|katalog|whatsapp/.test(normalized)) return "Склад и заказы";
  if (/randevu|rezervasyon|takvim|otel|villa|tur|turizm|rent|arac/.test(normalized)) return "Запись и бронирование";
  if (/api|xml|pazaryeri|entegrasyon|webhook|odeme/.test(normalized)) return "Интеграции";
  if (/ai|yapay|zeka|otomasyon|asistan|chatbot|dokuman|mesaj/.test(normalized)) return "AI automation";
  if (/mobil|webview|native|pwa|uygulama/.test(normalized)) return "Mobile";
  if (/bakim|destek|teslim|onarim|servis/.test(normalized)) return "Обслуживание и support";
  if (/panel|admin|dashboard|operasyon|yonetim|isletme|gorev|dosya/.test(normalized)) return "Админ-панели";
  if (/ozel|yazilim|mvp|saas|hazir|fiyat|kapsam|sure/.test(normalized)) return "Индивидуальная разработка";
  if (/emlak|kuyumcu|restoran|ajans|kurs|market|kasap|manav/.test(normalized)) return "Отраслевое ПО";
  return "Цифровые решения";
}

function portugueseTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  if (/seo|canonical|redirect|index|sitemap|google|blog|icerik/.test(normalized)) return "SEO e conteúdo";
  if (/crm|lead|musteri|teklif|satis/.test(normalized)) return "CRM e vendas";
  if (/stok|siparis|depo|sevkiyat|kargo|urun|katalog|whatsapp/.test(normalized)) return "Estoque e pedidos";
  if (/randevu|rezervasyon|takvim|otel|villa|tur|turizm|rent|arac/.test(normalized)) return "Agendamento e reservas";
  if (/api|xml|pazaryeri|entegrasyon|webhook|odeme/.test(normalized)) return "Integrações";
  if (/ai|yapay|zeka|otomasyon|asistan|chatbot|dokuman|mesaj/.test(normalized)) return "IA e automação";
  if (/mobil|webview|native|pwa|uygulama/.test(normalized)) return "Mobile";
  if (/bakim|destek|teslim|onarim|servis/.test(normalized)) return "Manutenção e suporte";
  if (/panel|admin|dashboard|operasyon|yonetim|isletme|gorev|dosya/.test(normalized)) return "Painéis administrativos";
  if (/ozel|yazilim|mvp|saas|hazir|fiyat|kapsam|sure/.test(normalized)) return "Software sob medida";
  if (/emlak|kuyumcu|restoran|ajans|kurs|market|kasap|manav/.test(normalized)) return "Software setorial";
  return "Soluções digitais";
}

function italianTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  if (/seo|canonical|redirect|index|sitemap|google|blog|icerik/.test(normalized)) return "SEO e contenuti";
  if (/crm|lead|musteri|teklif|satis/.test(normalized)) return "CRM e vendite";
  if (/stok|siparis|depo|sevkiyat|kargo|urun|katalog|whatsapp/.test(normalized)) return "Stock e ordini";
  if (/randevu|rezervasyon|takvim|otel|villa|tur|turizm|rent|arac/.test(normalized)) return "Appuntamenti e prenotazioni";
  if (/api|xml|pazaryeri|entegrasyon|webhook|odeme/.test(normalized)) return "Integrazioni";
  if (/ai|yapay|zeka|otomasyon|asistan|chatbot|dokuman|mesaj/.test(normalized)) return "AI e automazione";
  if (/mobil|webview|native|pwa|uygulama/.test(normalized)) return "Mobile";
  if (/bakim|destek|teslim|onarim|servis/.test(normalized)) return "Manutenzione e supporto";
  if (/panel|admin|dashboard|operasyon|yonetim|isletme|gorev|dosya/.test(normalized)) return "Pannelli amministrativi";
  if (/ozel|yazilim|mvp|saas|hazir|fiyat|kapsam|sure/.test(normalized)) return "Software su misura";
  if (/emlak|kuyumcu|restoran|ajans|kurs|market|kasap|manav/.test(normalized)) return "Software settoriale";
  return "Soluzioni digitali";
}

function dutchTag(tag: string) {
  const normalized = tag.toLowerCase().replace("e-ticaret", "e ticaret");
  if (/seo|canonical|redirect|index|sitemap|google|blog|icerik/.test(normalized)) return "SEO en content";
  if (/crm|lead|musteri|teklif|satis/.test(normalized)) return "CRM en verkoop";
  if (/stok|siparis|depo|sevkiyat|kargo|urun|katalog|whatsapp/.test(normalized)) return "Voorraad en orders";
  if (/randevu|rezervasyon|takvim|otel|villa|tur|turizm|rent|arac/.test(normalized)) return "Afspraken en reserveringen";
  if (/api|xml|pazaryeri|entegrasyon|webhook|odeme/.test(normalized)) return "Integraties";
  if (/ai|yapay|zeka|otomasyon|asistan|chatbot|dokuman|mesaj/.test(normalized)) return "AI en automatisering";
  if (/mobil|webview|native|pwa|uygulama/.test(normalized)) return "Mobiel";
  if (/bakim|destek|teslim|onarim|servis/.test(normalized)) return "Onderhoud en support";
  if (/panel|admin|dashboard|operasyon|yonetim|isletme|gorev|dosya/.test(normalized)) return "Beheerpanelen";
  if (/ozel|yazilim|mvp|saas|hazir|fiyat|kapsam|sure/.test(normalized)) return "Software op maat";
  if (/emlak|kuyumcu|restoran|ajans|kurs|market|kasap|manav/.test(normalized)) return "Sectorsoftware";
  return "Digitale oplossingen";
}

const chineseTagWords: Record<string, string> = {
  admin: "管理",
  panel: "面板",
  paneli: "面板",
  api: "API",
  xml: "XML",
  pazaryeri: "marketplace",
  entegrasyon: "集成",
  entegrasyonu: "集成",
  katalog: "目录",
  whatsapp: "WhatsApp",
  randevu: "预约",
  rezervasyon: "预订",
  e: "电商",
  ticaret: "电商",
  stok: "库存",
  siparis: "订单",
  siparisi: "订单",
  teklif: "报价",
  takip: "跟踪",
  sistemi: "系统",
  sistem: "系统",
  ozel: "定制",
  yazilim: "软件",
  yazilimi: "软件",
  fiyat: "价格",
  fiyati: "价格",
  kapsam: "范围",
  bakim: "维护",
  destek: "支持",
  web: "网站",
  sitesi: "网站",
  kurumsal: "企业",
  kucuk: "小企业",
  isletme: "企业",
  isletmeler: "企业",
  crm: "CRM",
  lead: "线索",
  b2b: "B2B",
  bayi: "经销商",
  mobil: "移动端",
  uygulama: "应用",
  webview: "Webview",
  yapay: "AI",
  zeka: "AI",
  otomasyon: "自动化",
  otomasyonlari: "自动化",
  asistan: "助手",
  sektorel: "行业",
  teknik: "技术",
  servis: "服务",
  restoran: "餐厅",
  qr: "QR",
  menu: "菜单",
  ajans: "机构",
  depo: "仓库",
  sevkiyat: "发货",
  online: "在线",
  kurs: "课程",
  yerel: "本地",
  market: "市场",
  google: "Google",
  seo: "SEO",
  blog: "博客",
  stratejisi: "策略",
  power: "Power",
  apps: "Apps",
  saas: "SaaS",
  mvp: "MVP",
  rent: "租车",
  car: "租车",
  emlak: "房地产",
  kuyumcu: "珠宝",
  turizm: "旅游",
  kiralama: "租赁",
  hazir: "现成系统",
  teslim: "交付",
  suresi: "时间",
  musteri: "客户",
  dosya: "文件",
  urun: "产品",
  veri: "数据",
};

function chineseTag(tag: string) {
  const words = tag
    .toLowerCase()
    .replace("e-ticaret", "e ticaret")
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => chineseTagWords[word])
    .filter((word): word is string => Boolean(word));
  return Array.from(new Set(words)).join(" / ") || "数字解决方案";
}

function englishDescription(title: string, category: string) {
  return `${title} explained with scope, pricing, process, delivery, and decision points for ${category.toLowerCase()} projects.`;
}

function germanDescription(title: string, category: string) {
  return `${title} erklärt mit Umfang, Preis, Prozess, Lieferung und Entscheidungspunkten für ${category.toLowerCase()}-Projekte.`;
}

function frenchDescription(title: string, category: string) {
  return `${title} expliqué avec le périmètre, le prix, le processus, la livraison et les points de décision pour les projets ${category.toLowerCase()}.`;
}

function spanishDescription(title: string, category: string) {
  return `${title} explicado con alcance, precio, proceso, entrega y puntos de decisión para proyectos de ${category.toLowerCase()}.`;
}

function arabicDescription(title: string, category: string) {
  return `${title} مع توضيح النطاق والسعر والعملية والتسليم ونقاط القرار لمشاريع ${category}.`;
}

function russianDescription(title: string, category: string) {
  return `${title}: объем, цена, процесс, сдача и ключевые решения для проектов в категории ${category.toLowerCase()}.`;
}

function portugueseDescription(title: string, category: string) {
  return `${title} explicado com escopo, preço, processo, entrega e pontos de decisão para projetos de ${category.toLowerCase()}.`;
}

function italianDescription(title: string, category: string) {
  return `${title} spiegato con ambito, prezzo, processo, consegna e punti decisionali per progetti di ${category.toLowerCase()}.`;
}

function dutchDescription(title: string, category: string) {
  return `${title} uitgelegd met scope, prijs, proces, oplevering en beslispunten voor projecten rond ${category.toLowerCase()}.`;
}

function chineseDescription(title: string, category: string) {
  return `${title}：从范围、价格、流程、交付和决策点说明${category}项目应如何规划。`;
}

function englishSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "What This Topic Means",
      body: [
        `${title} is not only a technical decision. It affects how the business collects requests, manages records, follows customers, and keeps the project maintainable after delivery.`,
        `For ${category.toLowerCase()} projects, the first step is to understand the current workflow, the users involved, the data that must be tracked, and the result expected from the system.`,
      ],
    },
    {
      heading: "What Should Be Clarified First",
      body: [
        "Before development starts, the required screens, forms, roles, content, integrations, reporting needs, and support expectations should be written clearly.",
        "This avoids vague pricing, uncontrolled extra requests, and a delivery process where both sides have different expectations.",
      ],
    },
    {
      heading: "How Scope and Price Are Planned",
      body: [
        "Price changes according to screen count, data structure, admin panel depth, integrations, automation, content readiness, and delivery timeline.",
        "A small first version can be planned before a larger system. This makes the budget easier to control and lets the business improve the system with real feedback.",
      ],
    },
    {
      heading: "How NT Web Solutions Approaches It",
      body: [
        "The goal is to build a usable and supportable structure, not just a page that looks finished on the first day.",
        "Live examples, related service pages, and portfolio items can be used to make the expected result easier to understand before the project starts.",
      ],
    },
  ];
}

function germanSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Was dieses Thema bedeutet",
      body: [
        `${title} ist nicht nur eine technische Entscheidung. Es beeinflusst, wie das Unternehmen Anfragen sammelt, Einträge verwaltet, Kunden verfolgt und das Projekt nach der Lieferung wartbar hält.`,
        `Bei ${category.toLowerCase()}-Projekten ist der erste Schritt, den aktuellen Workflow, beteiligte Nutzer, zu verfolgende Daten und das erwartete Ergebnis zu verstehen.`,
      ],
    },
    {
      heading: "Was zuerst geklärt werden sollte",
      body: [
        "Vor Entwicklungsbeginn sollten benötigte Screens, Formulare, Rollen, Inhalte, Integrationen, Reporting-Bedarf und Supporterwartungen klar geschrieben werden.",
        "So werden unklare Preise, unkontrollierte Zusatzwünsche und unterschiedliche Erwartungen im Lieferprozess vermieden.",
      ],
    },
    {
      heading: "Wie Umfang und Preis geplant werden",
      body: [
        "Der Preis hängt von Screen-Anzahl, Datenstruktur, Tiefe des Admin-Panels, Integrationen, Automatisierung, Inhaltsbereitschaft und Lieferzeit ab.",
        "Vor einem großen System kann eine kleine erste Version geplant werden. So bleibt das Budget kontrollierbarer und das System kann mit echtem Feedback wachsen.",
      ],
    },
    {
      heading: "Wie NT Web Solutions vorgeht",
      body: [
        "Ziel ist eine nutzbare und supportfähige Struktur, nicht nur eine Seite, die am ersten Tag fertig aussieht.",
        "Live-Beispiele, verwandte Leistungsseiten und Portfolio-Einträge können genutzt werden, um das erwartete Ergebnis vor Projektbeginn verständlicher zu machen.",
      ],
    },
  ];
}

function frenchSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Ce que ce sujet signifie",
      body: [
        `${title} n'est pas seulement une décision technique. Cela influence la façon dont l'entreprise collecte les demandes, gère les enregistrements, suit les clients et maintient le projet après livraison.`,
        `Pour les projets ${category.toLowerCase()}, la première étape consiste à comprendre le workflow actuel, les utilisateurs concernés, les données à suivre et le résultat attendu du système.`,
      ],
    },
    {
      heading: "Ce qu'il faut clarifier d'abord",
      body: [
        "Avant le développement, les écrans, formulaires, rôles, contenus, intégrations, besoins de reporting et attentes de support doivent être écrits clairement.",
        "Cela évite les prix flous, les demandes supplémentaires incontrôlées et un processus de livraison où les deux parties n'ont pas les mêmes attentes.",
      ],
    },
    {
      heading: "Comment le périmètre et le prix sont planifiés",
      body: [
        "Le prix varie selon le nombre d'écrans, la structure de données, la profondeur du panneau admin, les intégrations, l'automatisation, la disponibilité du contenu et le délai de livraison.",
        "Une première version plus petite peut être planifiée avant un système plus large. Cela rend le budget plus contrôlable et permet d'améliorer le système avec de vrais retours.",
      ],
    },
    {
      heading: "Comment NT Web Solutions l'aborde",
      body: [
        "L'objectif est de construire une structure utilisable et maintenable, pas seulement une page qui semble terminée le premier jour.",
        "Les exemples live, pages de service liées et références portfolio peuvent aider à rendre le résultat attendu plus clair avant le démarrage du projet.",
      ],
    },
  ];
}

function spanishSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Qué significa este tema",
      body: [
        `${title} no es solo una decisión técnica. Influye en cómo la empresa recoge solicitudes, gestiona registros, sigue clientes y mantiene el proyecto después de la entrega.`,
        `En proyectos de ${category.toLowerCase()}, el primer paso es entender el flujo actual, los usuarios implicados, los datos que deben seguirse y el resultado esperado del sistema.`,
      ],
    },
    {
      heading: "Qué debe aclararse primero",
      body: [
        "Antes de empezar el desarrollo conviene dejar claros los paneles, formularios, roles, contenidos, integraciones, necesidades de reporte y expectativas de soporte.",
        "Así se evitan precios difusos, solicitudes extra sin control y un proceso de entrega donde cada parte espera algo distinto.",
      ],
    },
    {
      heading: "Cómo se planifican alcance y precio",
      body: [
        "El precio cambia según la cantidad de pantallas, estructura de datos, profundidad del panel, integraciones, automatización, preparación del contenido y plazo de entrega.",
        "Antes de un sistema grande puede planificarse una primera versión utilizable. Esto facilita controlar el presupuesto y mejorar con comentarios reales.",
      ],
    },
    {
      heading: "Cómo lo aborda NT Web Solutions",
      body: [
        "El objetivo es construir una estructura usable y mantenible, no solo una página que parezca terminada el primer día.",
        "Los ejemplos en vivo, páginas de servicio relacionadas y trabajos de portfolio ayudan a entender el resultado esperado antes de iniciar el proyecto.",
      ],
    },
  ];
}

function arabicSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "ماذا يعني هذا الموضوع؟",
      body: [
        `${title} ليس قراراً تقنياً فقط. إنه يؤثر في طريقة جمع الطلبات وإدارة السجلات ومتابعة العملاء والحفاظ على المشروع قابلاً للدعم بعد التسليم.`,
        `في مشاريع ${category}، تبدأ العملية بفهم سير العمل الحالي، والمستخدمين المعنيين، والبيانات التي يجب تتبعها، والنتيجة المتوقعة من النظام.`,
      ],
    },
    {
      heading: "ما الذي يجب توضيحه أولاً؟",
      body: [
        "قبل بدء التطوير يجب توضيح الشاشات والنماذج والأدوار والمحتوى والتكاملات واحتياجات التقارير وتوقعات الدعم بشكل مكتوب.",
        "هذا يقلل التسعير الغامض، والطلبات الإضافية غير المضبوطة، وعملية تسليم يتوقع فيها كل طرف شيئاً مختلفاً.",
      ],
    },
    {
      heading: "كيف يتم تخطيط النطاق والسعر؟",
      body: [
        "يتغير السعر حسب عدد الشاشات وبنية البيانات وعمق لوحة الإدارة والتكاملات والأتمتة وجاهزية المحتوى ومدة التسليم.",
        "يمكن تخطيط نسخة أولى صغيرة قبل النظام الأكبر. هذا يجعل الميزانية أسهل في التحكم ويسمح بتحسين النظام بناءً على استخدام حقيقي.",
      ],
    },
    {
      heading: "كيف تتعامل NT Web Solutions مع هذا؟",
      body: [
        "الهدف هو بناء بنية قابلة للاستخدام والدعم، وليس مجرد صفحة تبدو مكتملة في اليوم الأول.",
        "يمكن استخدام الأمثلة الحية وصفحات الخدمات المرتبطة وأعمال البورتفوليو لجعل النتيجة المتوقعة أوضح قبل بدء المشروع.",
      ],
    },
  ];
}

function russianSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Что означает эта тема",
      body: [
        `${title} — это не только техническое решение. Оно влияет на то, как бизнес собирает заявки, ведет записи, отслеживает клиентов и поддерживает систему после сдачи.`,
        `В проектах категории ${category.toLowerCase()} сначала нужно понять текущий workflow, пользователей, данные для отслеживания и ожидаемый результат системы.`,
      ],
    },
    {
      heading: "Что нужно уточнить сначала",
      body: [
        "До разработки стоит письменно уточнить экраны, формы, роли, контент, интеграции, отчетность и ожидания по support.",
        "Так снижается риск размытой цены, неконтролируемых дополнительных запросов и сдачи, где стороны ожидают разного результата.",
      ],
    },
    {
      heading: "Как планируются объем и цена",
      body: [
        "Цена зависит от количества экранов, структуры данных, глубины панели, интеграций, автоматизации, готовности контента и срока сдачи.",
        "Перед большой системой можно спланировать небольшую first usable version. Так бюджет проще контролировать, а систему можно улучшать на основе реального использования.",
      ],
    },
    {
      heading: "Как NT Web Solutions подходит к этому",
      body: [
        "Цель — собрать usable и поддерживаемую структуру, а не просто страницу, которая выглядит завершенной в первый день.",
        "Живые примеры, связанные service pages и portfolio могут помочь понять ожидаемый результат до старта проекта.",
      ],
    },
  ];
}

function portugueseSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "O que este tema significa",
      body: [
        `${title} não é apenas uma decisão técnica. Ele afeta como a empresa recebe solicitações, organiza registros, acompanha clientes e mantém o sistema sustentável depois da entrega.`,
        `Em projetos de ${category.toLowerCase()}, o primeiro passo é entender o fluxo atual, os usuários envolvidos, os dados que precisam ser acompanhados e o resultado esperado do sistema.`,
      ],
    },
    {
      heading: "O que precisa ser esclarecido primeiro",
      body: [
        "Antes do desenvolvimento, telas, formulários, papéis, conteúdo, integrações, relatórios e expectativas de suporte devem ser esclarecidos por escrito.",
        "Isso reduz preço indefinido, pedidos extras sem controle e uma entrega em que cada lado espera um resultado diferente.",
      ],
    },
    {
      heading: "Como escopo e preço são planejados",
      body: [
        "O preço muda conforme quantidade de telas, estrutura de dados, profundidade do painel, integrações, automações, prontidão do conteúdo e prazo de entrega.",
        "Antes de um sistema grande, pode ser planejada uma primeira versão utilizável. Assim o orçamento fica mais controlável e o sistema evolui com uso real.",
      ],
    },
    {
      heading: "Como a NT Web Solutions aborda isso",
      body: [
        "O objetivo é criar uma estrutura utilizável e sustentável, não apenas uma página que pareça pronta no primeiro dia.",
        "Exemplos ao vivo, páginas de serviço relacionadas e trabalhos de portfólio podem ajudar a deixar o resultado esperado mais claro antes do início do projeto.",
      ],
    },
  ];
}

function italianSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Cosa significa questo tema",
      body: [
        `${title} non è solo una decisione tecnica. Influisce su come l'azienda raccoglie richieste, organizza registri, segue clienti e mantiene il sistema dopo la consegna.`,
        `Nei progetti di ${category.toLowerCase()}, il primo passo è capire il flusso attuale, gli utenti coinvolti, i dati da monitorare e il risultato atteso dal sistema.`,
      ],
    },
    {
      heading: "Cosa chiarire prima",
      body: [
        "Prima dello sviluppo conviene chiarire per iscritto schermate, form, ruoli, contenuti, integrazioni, report e aspettative di supporto.",
        "Questo riduce prezzi vaghi, richieste extra senza controllo e una consegna in cui le parti si aspettano risultati diversi.",
      ],
    },
    {
      heading: "Come si pianificano ambito e prezzo",
      body: [
        "Il prezzo cambia in base a numero di schermate, struttura dati, profondità del pannello, integrazioni, automazioni, preparazione dei contenuti e tempi di consegna.",
        "Prima di un sistema grande si può pianificare una prima versione utilizzabile. Così il budget resta più controllabile e il sistema cresce con uso reale.",
      ],
    },
    {
      heading: "Come lo affronta NT Web Solutions",
      body: [
        "L'obiettivo è costruire una struttura utilizzabile e mantenibile, non solo una pagina che sembri finita il primo giorno.",
        "Esempi live, pagine servizio collegate e lavori di portfolio possono rendere più chiaro il risultato atteso prima dell'avvio del progetto.",
      ],
    },
  ];
}

function dutchSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "Wat dit onderwerp betekent",
      body: [
        `${title} is niet alleen een technische keuze. Het bepaalt hoe het bedrijf aanvragen verzamelt, records beheert, klanten opvolgt en het systeem na oplevering onderhoudbaar houdt.`,
        `Bij projecten rond ${category.toLowerCase()} begint de juiste planning met de huidige workflow, betrokken gebruikers, te volgen data en het gewenste resultaat van het systeem.`,
      ],
    },
    {
      heading: "Wat eerst duidelijk moet worden",
      body: [
        "Voor de ontwikkeling moeten schermen, formulieren, rollen, content, integraties, rapportagebehoeften en supportverwachtingen duidelijk worden opgeschreven.",
        "Zo voorkom je vage prijzen, ongecontroleerde extra wensen en een oplevering waarbij beide kanten iets anders verwachten.",
      ],
    },
    {
      heading: "Hoe scope en prijs worden gepland",
      body: [
        "De prijs hangt af van het aantal schermen, de datastructuur, diepte van het paneel, integraties, automatisering, contentvoorbereiding en opleverplanning.",
        "Vaak is een eerste bruikbare versie verstandiger dan direct een groot systeem. Daarna kan het systeem groeien op basis van echt gebruik en concrete feedback.",
      ],
    },
    {
      heading: "Hoe NT Web Solutions dit benadert",
      body: [
        "Het doel is een bruikbare en onderhoudbare structuur bouwen, niet alleen een pagina die op de eerste dag af lijkt.",
        "Live voorbeelden, gerelateerde servicepagina's en portfolio-items helpen om het verwachte resultaat duidelijker te maken voordat het project start.",
      ],
    },
  ];
}

function chineseSections(title: string, category: string): BlogPostType["sections"] {
  return [
    {
      heading: "这个主题意味着什么",
      body: [
        `${title}不只是一个技术选择。它会影响企业如何收集请求、管理记录、跟进客户，并在交付后保持系统可维护。`,
        `在${category}项目中，正确规划的第一步是理解当前工作流、参与用户、需要跟踪的数据，以及企业希望系统最终带来的结果。`,
      ],
    },
    {
      heading: "开始前需要先明确什么",
      body: [
        "开发开始前，应把所需屏幕、表单、角色、内容、集成、报告需求和支持预期写清楚。",
        "这样可以避免模糊报价、失控的额外需求，以及交付时双方期待不一致的问题。",
      ],
    },
    {
      heading: "范围和价格如何规划",
      body: [
        "价格会根据屏幕数量、数据结构、管理面板深度、集成、自动化、内容准备情况和交付时间变化。",
        "在大型系统之前，通常可以先规划一个第一版可用结构。这样预算更容易控制，系统也能根据真实使用反馈逐步改进。",
      ],
    },
    {
      heading: "NT Web Solutions 如何处理",
      body: [
        "目标不是只做一个第一天看起来完成的页面，而是建立可使用、可维护、后续可扩展的结构。",
        "在线示例、相关服务页和作品集项目可以帮助在项目开始前更清楚地理解预期结果。",
      ],
    },
  ];
}

function englishFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `How is ${title} priced?`,
      answer: "Pricing is clarified after the screens, modules, data structure, integration needs, delivery expectations, and support scope are reviewed.",
    },
    {
      question: "Does everything need to be clear before the first meeting?",
      answer: "No. Describing the current situation, the business goal, and similar examples is enough. The scope can be simplified during the discussion.",
    },
    {
      question: "Can the system grow after the first version?",
      answer: "Yes. A first usable version can be delivered first, and new modules, integrations, or reports can be planned after real use.",
    },
  ];
}

function germanFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Wie wird ${title} bepreist?`,
      answer: "Der Preis wird geklärt, nachdem Screens, Module, Datenstruktur, Integrationsbedarf, Liefererwartung und Supportumfang geprüft wurden.",
    },
    {
      question: "Muss vor dem ersten Gespräch alles klar sein?",
      answer: "Nein. Aktuelle Situation, Geschäftsziel und ähnliche Beispiele reichen aus. Der Umfang kann im Gespräch vereinfacht werden.",
    },
    {
      question: "Kann das System nach der ersten Version wachsen?",
      answer: "Ja. Zuerst kann eine nutzbare erste Version geliefert werden; neue Module, Integrationen oder Berichte können nach echter Nutzung geplant werden.",
    },
  ];
}

function frenchFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Comment ${title} est-il tarifé ?`,
      answer: "Le prix est clarifié après analyse des écrans, modules, structure de données, besoins d'intégration, attentes de livraison et périmètre de support.",
    },
    {
      question: "Tout doit-il être clair avant le premier échange ?",
      answer: "Non. Décrire la situation actuelle, l'objectif métier et des exemples similaires suffit. Le périmètre peut être simplifié pendant l'échange.",
    },
    {
      question: "Le système peut-il grandir après la première version ?",
      answer: "Oui. Une première version utilisable peut être livrée d'abord, puis de nouveaux modules, intégrations ou rapports peuvent être planifiés après une vraie utilisation.",
    },
  ];
}

function spanishFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `¿Cómo se presupuesta ${title}?`,
      answer: "El precio se aclara después de revisar pantallas, módulos, estructura de datos, integraciones, expectativas de entrega y alcance del soporte.",
    },
    {
      question: "¿Todo debe estar claro antes de la primera reunión?",
      answer: "No. Basta con describir la situación actual, el objetivo del negocio y ejemplos similares. El alcance puede simplificarse durante la conversación.",
    },
    {
      question: "¿El sistema puede crecer después de la primera versión?",
      answer: "Sí. Primero puede entregarse una versión utilizable y después planificar nuevos módulos, integraciones o reportes con uso real.",
    },
  ];
}

function arabicFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `كيف يتم تسعير ${title}؟`,
      answer: "يتم توضيح السعر بعد مراجعة الشاشات والوحدات وبنية البيانات واحتياجات التكامل وتوقعات التسليم ونطاق الدعم.",
    },
    {
      question: "هل يجب أن يكون كل شيء واضحاً قبل أول اجتماع؟",
      answer: "لا. يكفي شرح الوضع الحالي وهدف العمل وأمثلة مشابهة. يمكن تبسيط النطاق أثناء النقاش.",
    },
    {
      question: "هل يمكن أن ينمو النظام بعد النسخة الأولى؟",
      answer: "نعم. يمكن تسليم نسخة أولى قابلة للاستخدام أولاً، ثم تخطيط وحدات أو تكاملات أو تقارير جديدة بعد الاستخدام الحقيقي.",
    },
  ];
}

function russianFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Как оценивается ${title}?`,
      answer: "Цена уточняется после анализа экранов, модулей, структуры данных, интеграций, ожиданий по сдаче и объема support.",
    },
    {
      question: "Нужно ли все знать до первой встречи?",
      answer: "Нет. Достаточно описать текущую ситуацию, цель бизнеса и похожие примеры. Объем можно упростить во время обсуждения.",
    },
    {
      question: "Может ли система расти после первой версии?",
      answer: "Да. Сначала можно запустить first usable version, а новые модули, интеграции или отчеты планировать после реального использования.",
    },
  ];
}

function portugueseFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Como ${title} é precificado?`,
      answer: "O preço é esclarecido depois de revisar telas, módulos, estrutura de dados, integrações, expectativa de entrega e escopo de suporte.",
    },
    {
      question: "Tudo precisa estar claro antes da primeira conversa?",
      answer: "Não. Descrever a situação atual, o objetivo do negócio e exemplos semelhantes é suficiente. O escopo pode ser simplificado durante a conversa.",
    },
    {
      question: "O sistema pode crescer depois da primeira versão?",
      answer: "Sim. Primeiro pode ser entregue uma versão utilizável; depois novos módulos, integrações ou relatórios podem ser planejados com uso real.",
    },
  ];
}

function italianFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Come viene prezzato ${title}?`,
      answer: "Il prezzo viene chiarito dopo aver analizzato schermate, moduli, struttura dati, integrazioni, aspettative di consegna e ambito del supporto.",
    },
    {
      question: "Tutto deve essere chiaro prima del primo incontro?",
      answer: "No. È sufficiente descrivere la situazione attuale, l'obiettivo aziendale e alcuni esempi simili. L'ambito può essere semplificato durante il confronto.",
    },
    {
      question: "Il sistema può crescere dopo la prima versione?",
      answer: "Sì. Prima si può consegnare una versione utilizzabile; poi nuovi moduli, integrazioni o report possono essere pianificati con l'uso reale.",
    },
  ];
}

function dutchFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `Hoe wordt ${title} geprijsd?`,
      answer: "De prijs wordt duidelijk nadat schermen, modules, datastructuur, integraties, opleververwachtingen en supportscope zijn bekeken.",
    },
    {
      question: "Moet alles duidelijk zijn voor het eerste gesprek?",
      answer: "Nee. De huidige situatie, het bedrijfsdoel en vergelijkbare voorbeelden zijn genoeg. De scope kan tijdens het gesprek worden vereenvoudigd.",
    },
    {
      question: "Kan het systeem na de eerste versie groeien?",
      answer: "Ja. Eerst kan een bruikbare eerste versie worden opgeleverd; daarna kunnen nieuwe modules, integraties of rapportages worden gepland op basis van echt gebruik.",
    },
  ];
}

function chineseFaqs(title: string): BlogPostType["faqs"] {
  return [
    {
      question: `${title}如何定价？`,
      answer: "价格会在检查屏幕、模块、数据结构、集成需求、交付预期和支持范围后明确。",
    },
    {
      question: "第一次沟通前所有细节都必须明确吗？",
      answer: "不需要。说明当前情况、业务目标和类似参考示例就足够，范围可以在沟通过程中一起简化。",
    },
    {
      question: "第一版之后系统还能继续扩展吗？",
      answer: "可以。可以先交付第一版可用结构，再根据真实使用情况规划新模块、集成或报告。",
    },
  ];
}

export function getLocalizedBlogPost(post: BlogPostType, locale: string): BlogPostType {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return post;

  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";
  const title = (isGerman ? titleMapDe : isFrench ? titleMapFr : isSpanish ? titleMapEs : isArabic ? titleMapAr : isRussian ? titleMapRu : isPortuguese ? titleMapPt : isItalian ? titleMapIt : isDutch ? titleMapNl : isChinese ? titleMapZh : titleMap)[post.slug] ?? (isChinese ? "数字项目规划指南" : readableTag(post.slug.replace(/-/g, " ")));
  const category = (isGerman ? categoryMapDe : isFrench ? categoryMapFr : isSpanish ? categoryMapEs : isArabic ? categoryMapAr : isRussian ? categoryMapRu : isPortuguese ? categoryMapPt : isItalian ? categoryMapIt : isDutch ? categoryMapNl : isChinese ? categoryMapZh : categoryMap)[post.category] ?? (isChinese ? "数字解决方案" : readableTag(post.category));

  return {
    ...post,
    title,
    description: isGerman ? germanDescription(title, category) : isFrench ? frenchDescription(title, category) : isSpanish ? spanishDescription(title, category) : isArabic ? arabicDescription(title, category) : isRussian ? russianDescription(title, category) : isPortuguese ? portugueseDescription(title, category) : isItalian ? italianDescription(title, category) : isDutch ? dutchDescription(title, category) : isChinese ? chineseDescription(title, category) : englishDescription(title, category),
    category,
    tags: Array.from(new Set([category, ...post.tags.slice(0, 5).map((tag) => isGerman ? germanTag(tag) : isFrench ? frenchTag(tag) : isSpanish ? spanishTag(tag) : isArabic ? arabicTag(tag) : isRussian ? russianTag(tag) : isPortuguese ? portugueseTag(tag) : isItalian ? italianTag(tag) : isDutch ? dutchTag(tag) : isChinese ? chineseTag(tag) : readableTag(tag))])),
    sections: isGerman ? germanSections(title, category) : isFrench ? frenchSections(title, category) : isSpanish ? spanishSections(title, category) : isArabic ? arabicSections(title, category) : isRussian ? russianSections(title, category) : isPortuguese ? portugueseSections(title, category) : isItalian ? italianSections(title, category) : isDutch ? dutchSections(title, category) : isChinese ? chineseSections(title, category) : englishSections(title, category),
    faqs: isGerman ? germanFaqs(title) : isFrench ? frenchFaqs(title) : isSpanish ? spanishFaqs(title) : isArabic ? arabicFaqs(title) : isRussian ? russianFaqs(title) : isPortuguese ? portugueseFaqs(title) : isItalian ? italianFaqs(title) : isDutch ? dutchFaqs(title) : isChinese ? chineseFaqs(title) : englishFaqs(title),
  };
}

export function getLocalizedBlogPosts(posts: BlogPostType[], locale: string): BlogPostType[] {
  return posts.map((post) => getLocalizedBlogPost(post, locale));
}

export function getLocalizedBlogCategories(categories: string[], locale: string): string[] {
  if (locale === "de") return categories.map((category) => categoryMapDe[category] ?? readableTag(category));
  if (locale === "fr") return categories.map((category) => categoryMapFr[category] ?? readableTag(category));
  if (locale === "es") return categories.map((category) => categoryMapEs[category] ?? readableTag(category));
  if (locale === "ar") return categories.map((category) => categoryMapAr[category] ?? readableTag(category));
  if (locale === "ru") return categories.map((category) => categoryMapRu[category] ?? readableTag(category));
  if (locale === "pt") return categories.map((category) => categoryMapPt[category] ?? readableTag(category));
  if (locale === "it") return categories.map((category) => categoryMapIt[category] ?? readableTag(category));
  if (locale === "nl") return categories.map((category) => categoryMapNl[category] ?? readableTag(category));
  if (locale === "zh") return categories.map((category) => categoryMapZh[category] ?? "数字解决方案");
  if (locale !== "en") return categories;
  return categories.map((category) => categoryMap[category] ?? readableTag(category));
}

export function getEnglishCategory(originalCategory: string) {
  return categoryMap[originalCategory] ?? readableTag(originalCategory);
}

export function getLocalizedBlogCategory(originalCategory: string, locale: string) {
  if (locale === "de") return categoryMapDe[originalCategory] ?? readableTag(originalCategory);
  if (locale === "fr") return categoryMapFr[originalCategory] ?? readableTag(originalCategory);
  if (locale === "es") return categoryMapEs[originalCategory] ?? readableTag(originalCategory);
  if (locale === "ar") return categoryMapAr[originalCategory] ?? readableTag(originalCategory);
  if (locale === "ru") return categoryMapRu[originalCategory] ?? readableTag(originalCategory);
  if (locale === "pt") return categoryMapPt[originalCategory] ?? readableTag(originalCategory);
  if (locale === "it") return categoryMapIt[originalCategory] ?? readableTag(originalCategory);
  if (locale === "nl") return categoryMapNl[originalCategory] ?? readableTag(originalCategory);
  if (locale === "zh") return categoryMapZh[originalCategory] ?? "数字解决方案";
  if (locale === "en") return getEnglishCategory(originalCategory);
  return originalCategory;
}
