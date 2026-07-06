import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/lib/i18n";
import type { ProjectType, TestimonialType } from "@/types";

type ProjectMeta = ReturnType<typeof getProjectMeta>;
type ProjectWithDemoAccounts = ProjectType & {
  demoAccounts?: Array<{ role: string; email: string; password: string }>;
};

const titleMap: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Marketplace XML Integration",
  "mizan-mulk-yonetim-sistemi": "Mizan Property Management System",
  "menar-operasyon-paneli": "MENAR Operation Panel",
  "kurumsal-web-sitesi": "Corporate Website Example",
  "ecommerce-platform": "E-Commerce System Live Example",
  "whatsapp-siparis-katalog": "WhatsApp Order Catalog Example",
  "randevu-rezervasyon-sistemi": "Appointment / Reservation System Example",
  "admin-panelli-isletme-sistemi": "Admin Panel Business System Example",
  "landing-page": "Landing Page / One-Page Sales Example",
  "cloud-storage-platform": "Cloud File Management Platform Example",
  "task-management-system": "Task Management System Example",
  "ai-log-analysis-panel": "AI / Log Analysis Panel Example",
  "video-analysis-platform": "Video Analysis Platform Example",
  "teknik-seo-audit-dashboard-demo": "Technical SEO Audit Dashboard Demo Plan",
  "seo-migration-recovery-dashboard-demo": "SEO Migration Recovery Panel Demo Plan",
  "crm-lead-teklif-takip-demo": "CRM, Lead, and Quote Tracking System Demo Plan",
  "stok-siparis-sevkiyat-paneli-demo": "Stock, Order, and Shipment Panel Demo Plan",
  "b2b-uretici-web-sitesi-demo": "B2B Manufacturer Website Demo Plan",
  "b2b-bayi-siparis-demo": "B2B Dealer Order System Demo Plan",
  "pazaryeri-entegrasyon-dashboard-demo": "Marketplace Integration Dashboard Demo Plan",
  "rent-a-car-rezervasyon-demo": "Rent a Car Reservation System Demo Plan",
  "emlak-ilan-musteri-takip-demo": "Real Estate Listing and Customer Tracking Demo Plan",
  "kuyumcu-katalog-fiyat-takip-demo": "Jewelry Catalog and Price Tracking Demo Plan",
  "turizm-operasyon-paneli-demo": "Tourism Operation Panel Demo Plan",
  "ai-whatsapp-musteri-asistani-demo": "AI WhatsApp Customer Assistant Demo Plan",
  "search-console-hata-analiz-paneli-demo": "Search Console Error Analysis Panel Demo Plan",
  "ihracatci-firma-web-sitesi-demo": "Exporter Company Website Demo Plan",
  "teklif-takip-sistemi-demo": "Quote Tracking System Demo Plan",
  "teknik-servis-is-takip-paneli-demo": "Technical Service Work Tracking Panel Demo Plan",
  "klinik-randevu-sistemi-demo": "Clinic Appointment System Demo Plan",
  "guzellik-merkezi-randevu-sistemi-demo": "Beauty Center Appointment System Demo Plan",
  "restoran-qr-menu-whatsapp-demo": "Restaurant QR Menu and WhatsApp Order Demo Plan",
  "butik-urun-katalog-sistemi-demo": "Boutique Product Catalog System Demo Plan",
  "toptanci-b2b-siparis-sistemi-demo": "Wholesaler B2B Order System Demo Plan",
  "depo-sevkiyat-takip-paneli-demo": "Warehouse and Shipment Tracking Panel Demo Plan",
  "saas-mvp-demo-platformu": "SaaS MVP Demo Platform Plan",
  "musteri-paneli-portal-demo": "Customer Panel / Portal System Demo Plan",
  "bayi-paneli-demo": "Dealer Panel Demo Plan",
  "raporlama-dashboard-sistemi-demo": "Reporting Dashboard System Demo Plan",
  "lead-siniflandirma-paneli-demo": "Lead Collection and Classification Panel Demo Plan",
  "power-apps-sharepoint-operasyon-demo": "Power Apps / SharePoint Operation Demo Plan",
  "saglik-turizmi-operasyon-paneli-demo": "Health Tourism Operation Panel Demo Plan",
  "uretim-siparis-takip-paneli-demo": "Production and Order Tracking Panel Demo Plan",
  "ajans-musteri-paneli-demo": "Agency Customer Panel Demo Plan",
};

const categoryMap: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Marketplace Integration",
  "Gayrimenkul Yönetim Sistemi": "Property Management System",
  "Operasyon Paneli": "Operation Panel",
  "Kurumsal Web Sitesi": "Corporate Website",
  "E-Ticaret Sistemi": "E-Commerce System",
  "Katalog ve Sipariş": "Catalog and Order",
  "Randevu Sistemi": "Appointment System",
  "İşletme Yönetimi": "Business Management",
  "Satış Sayfası": "Sales Page",
  "Dosya Yönetim Sistemi": "File Management System",
  "İş Takip Sistemi": "Work Tracking System",
  "Analiz ve Raporlama": "Analytics and Reporting",
  "Medya Analiz Sistemi": "Media Analysis System",
  "Teknik SEO Paneli": "Technical SEO Panel",
  "SEO Migration": "SEO Migration",
  "CRM ve Satış Paneli": "CRM and Sales Panel",
  "B2B Web Sitesi": "B2B Website",
  "Bayi Sipariş Paneli": "Dealer Order Panel",
  "Sektörel Rezervasyon": "Industry Reservation",
  "Emlak CRM": "Real Estate CRM",
  "Katalog ve Fiyat Paneli": "Catalog and Pricing Panel",
  "Turizm Operasyon Paneli": "Tourism Operation Panel",
  "AI Otomasyon": "AI Automation",
  "Satış Paneli": "Sales Panel",
  "Sektörel İş Takip": "Industry Work Tracking",
  "Sağlık Randevu": "Healthcare Appointment",
  "QR Menü ve Sipariş": "QR Menu and Order",
  "Katalog Sistemi": "Catalog System",
  "B2B Sipariş": "B2B Order",
  "Depo Operasyonu": "Warehouse Operation",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "Portal Development",
  "Bayi Paneli": "Dealer Panel",
  "Raporlama Dashboard": "Reporting Dashboard",
  "Lead Otomasyonu": "Lead Automation",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Health Tourism",
  "Üretim Operasyonu": "Production Operation",
  "Müşteri Paneli": "Customer Panel",
};

const titleMapDe: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Marktplatz-XML-Integration",
  "mizan-mulk-yonetim-sistemi": "Mizan Immobilienverwaltungssystem",
  "menar-operasyon-paneli": "MENAR Operationspanel",
  "kurumsal-web-sitesi": "Unternehmenswebsite Beispiel",
  "ecommerce-platform": "E-Commerce-System Live-Beispiel",
  "whatsapp-siparis-katalog": "WhatsApp-Bestellkatalog Beispiel",
  "randevu-rezervasyon-sistemi": "Termin- und Reservierungssystem Beispiel",
  "admin-panelli-isletme-sistemi": "Unternehmenssystem mit Admin-Panel Beispiel",
  "landing-page": "Landingpage / One-Page-Verkaufsbeispiel",
  "cloud-storage-platform": "Cloud-Dateiverwaltungsplattform Beispiel",
  "task-management-system": "Aufgabenmanagementsystem Beispiel",
  "ai-log-analysis-panel": "KI- und Log-Analysepanel Beispiel",
  "video-analysis-platform": "Videoanalyseplattform Beispiel",
  "teknik-seo-audit-dashboard-demo": "Technisches SEO-Audit-Dashboard Demoplan",
  "seo-migration-recovery-dashboard-demo": "SEO-Migration-Recovery-Panel Demoplan",
  "crm-lead-teklif-takip-demo": "CRM-, Lead- und Angebotsverfolgung Demoplan",
  "stok-siparis-sevkiyat-paneli-demo": "Bestand-, Bestell- und Versandpanel Demoplan",
  "b2b-uretici-web-sitesi-demo": "B2B-Herstellerwebsite Demoplan",
  "b2b-bayi-siparis-demo": "B2B-Händlerbestellsystem Demoplan",
  "pazaryeri-entegrasyon-dashboard-demo": "Marktplatzintegrations-Dashboard Demoplan",
  "rent-a-car-rezervasyon-demo": "Rent-a-Car-Reservierungssystem Demoplan",
  "emlak-ilan-musteri-takip-demo": "Immobilieninserat- und Kundenverfolgung Demoplan",
  "kuyumcu-katalog-fiyat-takip-demo": "Juwelierkatalog und Preisverfolgung Demoplan",
  "turizm-operasyon-paneli-demo": "Tourismus-Operationspanel Demoplan",
  "ai-whatsapp-musteri-asistani-demo": "KI-WhatsApp-Kundenassistent Demoplan",
  "search-console-hata-analiz-paneli-demo": "Search-Console-Fehleranalysepanel Demoplan",
  "ihracatci-firma-web-sitesi-demo": "Exporteur-Unternehmenswebsite Demoplan",
  "teklif-takip-sistemi-demo": "Angebotsverfolgungssystem Demoplan",
  "teknik-servis-is-takip-paneli-demo": "Technisches Service-Aufgabenpanel Demoplan",
  "klinik-randevu-sistemi-demo": "Klinik-Terminsystem Demoplan",
  "guzellik-merkezi-randevu-sistemi-demo": "Beauty-Center-Terminsystem Demoplan",
  "restoran-qr-menu-whatsapp-demo": "Restaurant-QR-Menü und WhatsApp-Bestellung Demoplan",
  "butik-urun-katalog-sistemi-demo": "Boutique-Produktkatalogsystem Demoplan",
  "toptanci-b2b-siparis-sistemi-demo": "Großhändler-B2B-Bestellsystem Demoplan",
  "depo-sevkiyat-takip-paneli-demo": "Lager- und Versandverfolgungspanel Demoplan",
  "saas-mvp-demo-platformu": "SaaS-MVP-Demoplattform Plan",
  "musteri-paneli-portal-demo": "Kundenpanel / Portal-System Demoplan",
  "bayi-paneli-demo": "Händlerpanel Demoplan",
  "raporlama-dashboard-sistemi-demo": "Reporting-Dashboard-System Demoplan",
  "lead-siniflandirma-paneli-demo": "Lead-Erfassung und Klassifizierung Demoplan",
  "power-apps-sharepoint-operasyon-demo": "Power Apps / SharePoint Operationsdemo Plan",
  "saglik-turizmi-operasyon-paneli-demo": "Gesundheitstourismus-Operationspanel Demoplan",
  "uretim-siparis-takip-paneli-demo": "Produktions- und Bestellverfolgung Demoplan",
  "ajans-musteri-paneli-demo": "Agentur-Kundenpanel Demoplan",
};

const categoryMapDe: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Marktplatzintegration",
  "Gayrimenkul Yönetim Sistemi": "Immobilienverwaltungssystem",
  "Operasyon Paneli": "Operationspanel",
  "Kurumsal Web Sitesi": "Unternehmenswebsite",
  "E-Ticaret Sistemi": "E-Commerce-System",
  "Katalog ve Sipariş": "Katalog und Bestellung",
  "Randevu Sistemi": "Terminsystem",
  "İşletme Yönetimi": "Unternehmensverwaltung",
  "Satış Sayfası": "Verkaufsseite",
  "Dosya Yönetim Sistemi": "Dateiverwaltungssystem",
  "İş Takip Sistemi": "Aufgabenverfolgungssystem",
  "Analiz ve Raporlama": "Analyse und Reporting",
  "Medya Analiz Sistemi": "Medienanalysesystem",
  "Teknik SEO Paneli": "Technisches SEO-Panel",
  "SEO Migration": "SEO-Migration",
  "CRM ve Satış Paneli": "CRM- und Verkaufspanel",
  "B2B Web Sitesi": "B2B-Website",
  "Bayi Sipariş Paneli": "Händlerbestellpanel",
  "Sektörel Rezervasyon": "Branchenspezifische Reservierung",
  "Emlak CRM": "Immobilien-CRM",
  "Katalog ve Fiyat Paneli": "Katalog- und Preispanel",
  "Turizm Operasyon Paneli": "Tourismus-Operationspanel",
  "AI Otomasyon": "KI-Automatisierung",
  "Satış Paneli": "Verkaufspanel",
  "Sektörel İş Takip": "Branchenspezifische Aufgabenverfolgung",
  "Sağlık Randevu": "Gesundheitstermine",
  "QR Menü ve Sipariş": "QR-Menü und Bestellung",
  "Katalog Sistemi": "Katalogsystem",
  "B2B Sipariş": "B2B-Bestellung",
  "Depo Operasyonu": "Lageroperation",
  "SaaS MVP": "SaaS-MVP",
  "Portal Geliştirme": "Portalentwicklung",
  "Bayi Paneli": "Händlerpanel",
  "Raporlama Dashboard": "Reporting-Dashboard",
  "Lead Otomasyonu": "Lead-Automatisierung",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Gesundheitstourismus",
  "Üretim Operasyonu": "Produktionsoperation",
  "Müşteri Paneli": "Kundenpanel",
};

const titleMapFr: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Intégration XML marketplace",
  "mizan-mulk-yonetim-sistemi": "Système de gestion immobilière Mizan",
  "menar-operasyon-paneli": "Panneau opérationnel MENAR",
  "kurumsal-web-sitesi": "Exemple de site corporate",
  "ecommerce-platform": "Exemple live de système e-commerce",
  "whatsapp-siparis-katalog": "Exemple de catalogue de commande WhatsApp",
  "randevu-rezervasyon-sistemi": "Exemple de système de rendez-vous / réservation",
  "admin-panelli-isletme-sistemi": "Exemple de système d'entreprise avec panneau admin",
  "landing-page": "Exemple de landing page / page de vente",
  "cloud-storage-platform": "Exemple de plateforme de gestion de fichiers cloud",
  "task-management-system": "Exemple de système de gestion des tâches",
  "ai-log-analysis-panel": "Exemple de panneau IA / analyse de logs",
  "video-analysis-platform": "Exemple de plateforme d'analyse vidéo",
  "teknik-seo-audit-dashboard-demo": "Plan démo de dashboard d'audit SEO technique",
  "seo-migration-recovery-dashboard-demo": "Plan démo de panneau de récupération SEO migration",
  "crm-lead-teklif-takip-demo": "Plan démo CRM, lead et suivi des devis",
  "stok-siparis-sevkiyat-paneli-demo": "Plan démo stock, commandes et expédition",
  "b2b-uretici-web-sitesi-demo": "Plan démo de site web fabricant B2B",
  "b2b-bayi-siparis-demo": "Plan démo de système de commande revendeur B2B",
  "pazaryeri-entegrasyon-dashboard-demo": "Plan démo de dashboard d'intégration marketplace",
  "rent-a-car-rezervasyon-demo": "Plan démo de système de réservation rent a car",
  "emlak-ilan-musteri-takip-demo": "Plan démo annonces immobilières et suivi client",
  "kuyumcu-katalog-fiyat-takip-demo": "Plan démo catalogue bijouterie et suivi des prix",
  "turizm-operasyon-paneli-demo": "Plan démo de panneau opérationnel tourisme",
  "ai-whatsapp-musteri-asistani-demo": "Plan démo assistant client IA WhatsApp",
  "search-console-hata-analiz-paneli-demo": "Plan démo de panneau d'analyse des erreurs Search Console",
  "ihracatci-firma-web-sitesi-demo": "Plan démo de site web pour entreprise exportatrice",
  "teklif-takip-sistemi-demo": "Plan démo de système de suivi des devis",
  "teknik-servis-is-takip-paneli-demo": "Plan démo de panneau de suivi service technique",
  "klinik-randevu-sistemi-demo": "Plan démo de système de rendez-vous clinique",
  "guzellik-merkezi-randevu-sistemi-demo": "Plan démo de système de rendez-vous centre de beauté",
  "restoran-qr-menu-whatsapp-demo": "Plan démo menu QR restaurant et commande WhatsApp",
  "butik-urun-katalog-sistemi-demo": "Plan démo de système catalogue boutique",
  "toptanci-b2b-siparis-sistemi-demo": "Plan démo de système de commande B2B grossiste",
  "depo-sevkiyat-takip-paneli-demo": "Plan démo de panneau stock et expédition",
  "saas-mvp-demo-platformu": "Plan de plateforme démo SaaS MVP",
  "musteri-paneli-portal-demo": "Plan démo de panneau client / portail",
  "bayi-paneli-demo": "Plan démo de panneau revendeur",
  "raporlama-dashboard-sistemi-demo": "Plan démo de dashboard reporting",
  "lead-siniflandirma-paneli-demo": "Plan démo de collecte et classification des leads",
  "power-apps-sharepoint-operasyon-demo": "Plan démo opérations Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "Plan démo de panneau opérationnel tourisme médical",
  "uretim-siparis-takip-paneli-demo": "Plan démo de suivi production et commandes",
  "ajans-musteri-paneli-demo": "Plan démo de panneau client pour agence",
};

const categoryMapFr: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Intégration marketplace",
  "Gayrimenkul Yönetim Sistemi": "Système de gestion immobilière",
  "Operasyon Paneli": "Panneau opérationnel",
  "Kurumsal Web Sitesi": "Site corporate",
  "E-Ticaret Sistemi": "Système e-commerce",
  "Katalog ve Sipariş": "Catalogue et commande",
  "Randevu Sistemi": "Système de rendez-vous",
  "İşletme Yönetimi": "Gestion d'entreprise",
  "Satış Sayfası": "Page de vente",
  "Dosya Yönetim Sistemi": "Système de gestion de fichiers",
  "İş Takip Sistemi": "Système de suivi du travail",
  "Analiz ve Raporlama": "Analyse et reporting",
  "Medya Analiz Sistemi": "Système d'analyse média",
  "Teknik SEO Paneli": "Panneau SEO technique",
  "SEO Migration": "Migration SEO",
  "CRM ve Satış Paneli": "Panneau CRM et ventes",
  "B2B Web Sitesi": "Site web B2B",
  "Bayi Sipariş Paneli": "Panneau de commande revendeur",
  "Sektörel Rezervasyon": "Réservation sectorielle",
  "Emlak CRM": "CRM immobilier",
  "Katalog ve Fiyat Paneli": "Panneau catalogue et prix",
  "Turizm Operasyon Paneli": "Panneau opérationnel tourisme",
  "AI Otomasyon": "Automatisation IA",
  "Satış Paneli": "Panneau de vente",
  "Sektörel İş Takip": "Suivi de travail sectoriel",
  "Sağlık Randevu": "Rendez-vous santé",
  "QR Menü ve Sipariş": "Menu QR et commande",
  "Katalog Sistemi": "Système catalogue",
  "B2B Sipariş": "Commande B2B",
  "Depo Operasyonu": "Opération entrepôt",
  "SaaS MVP": "Plateforme SaaS MVP",
  "Portal Geliştirme": "Développement de portail",
  "Bayi Paneli": "Panneau revendeur",
  "Raporlama Dashboard": "Dashboard reporting",
  "Lead Otomasyonu": "Automatisation des leads",
  "Power Platform": "Power Platform opérationnelle",
  "Sağlık Turizmi": "Tourisme médical",
  "Üretim Operasyonu": "Opération production",
  "Müşteri Paneli": "Panneau client",
};

const titleMapEs: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Integración XML marketplace",
  "mizan-mulk-yonetim-sistemi": "Sistema de gestión inmobiliaria Mizan",
  "menar-operasyon-paneli": "Panel operativo MENAR",
  "kurumsal-web-sitesi": "Ejemplo de sitio corporativo",
  "ecommerce-platform": "Ejemplo en vivo de sistema e-commerce",
  "whatsapp-siparis-katalog": "Ejemplo de catálogo de pedidos por WhatsApp",
  "randevu-rezervasyon-sistemi": "Ejemplo de sistema de citas y reservas",
  "admin-panelli-isletme-sistemi": "Ejemplo de sistema empresarial con panel admin",
  "landing-page": "Ejemplo de landing page / página de ventas",
  "cloud-storage-platform": "Ejemplo de plataforma de archivos cloud",
  "task-management-system": "Ejemplo de sistema de gestión de tareas",
  "ai-log-analysis-panel": "Ejemplo de panel de IA y análisis de logs",
  "video-analysis-platform": "Ejemplo de plataforma de análisis de video",
  "teknik-seo-audit-dashboard-demo": "Plan demo de dashboard de auditoría SEO técnica",
  "seo-migration-recovery-dashboard-demo": "Plan demo de panel de recuperación SEO migration",
  "crm-lead-teklif-takip-demo": "Plan demo de CRM, leads y seguimiento de propuestas",
  "stok-siparis-sevkiyat-paneli-demo": "Plan demo de panel de stock, pedidos y despacho",
  "b2b-uretici-web-sitesi-demo": "Plan demo de sitio B2B para fabricantes",
  "b2b-bayi-siparis-demo": "Plan demo de sistema B2B de pedidos para distribuidores",
  "pazaryeri-entegrasyon-dashboard-demo": "Plan demo de dashboard de integración marketplace",
  "rent-a-car-rezervasyon-demo": "Plan demo de sistema de reservas rent a car",
  "emlak-ilan-musteri-takip-demo": "Plan demo de anuncios inmobiliarios y seguimiento de clientes",
  "kuyumcu-katalog-fiyat-takip-demo": "Plan demo de catálogo de joyería y seguimiento de precios",
  "turizm-operasyon-paneli-demo": "Plan demo de panel operativo de turismo",
  "ai-whatsapp-musteri-asistani-demo": "Plan demo de asistente IA para clientes en WhatsApp",
  "search-console-hata-analiz-paneli-demo": "Plan demo de panel de análisis de errores Search Console",
  "ihracatci-firma-web-sitesi-demo": "Plan demo de sitio web para empresa exportadora",
  "teklif-takip-sistemi-demo": "Plan demo de sistema de seguimiento de propuestas",
  "teknik-servis-is-takip-paneli-demo": "Plan demo de panel de trabajo para servicio técnico",
  "klinik-randevu-sistemi-demo": "Plan demo de sistema de citas para clínicas",
  "guzellik-merkezi-randevu-sistemi-demo": "Plan demo de citas para centro de belleza",
  "restoran-qr-menu-whatsapp-demo": "Plan demo de menú QR y pedidos WhatsApp para restaurante",
  "butik-urun-katalog-sistemi-demo": "Plan demo de catálogo de productos para boutique",
  "toptanci-b2b-siparis-sistemi-demo": "Plan demo de sistema B2B de pedidos mayoristas",
  "depo-sevkiyat-takip-paneli-demo": "Plan demo de panel de almacén y despacho",
  "saas-mvp-demo-platformu": "Plan de plataforma demo SaaS MVP",
  "musteri-paneli-portal-demo": "Plan demo de panel de cliente / portal",
  "bayi-paneli-demo": "Plan demo de panel de distribuidores",
  "raporlama-dashboard-sistemi-demo": "Plan demo de dashboard de reportes",
  "lead-siniflandirma-paneli-demo": "Plan demo de captación y clasificación de leads",
  "power-apps-sharepoint-operasyon-demo": "Plan demo de operación Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "Plan demo de panel operativo para turismo de salud",
  "uretim-siparis-takip-paneli-demo": "Plan demo de seguimiento de producción y pedidos",
  "ajans-musteri-paneli-demo": "Plan demo de panel de cliente para agencias",
};

const categoryMapEs: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Integración marketplace",
  "Gayrimenkul Yönetim Sistemi": "Sistema de gestión inmobiliaria",
  "Operasyon Paneli": "Panel operativo",
  "Kurumsal Web Sitesi": "Sitio corporativo",
  "E-Ticaret Sistemi": "Sistema e-commerce",
  "Katalog ve Sipariş": "Catálogo y pedidos",
  "Randevu Sistemi": "Sistema de citas",
  "İşletme Yönetimi": "Gestión empresarial",
  "Satış Sayfası": "Página de ventas",
  "Dosya Yönetim Sistemi": "Sistema de gestión de archivos",
  "İş Takip Sistemi": "Sistema de seguimiento de tareas",
  "Analiz ve Raporlama": "Análisis y reportes",
  "Medya Analiz Sistemi": "Sistema de análisis multimedia",
  "Teknik SEO Paneli": "Panel SEO técnico",
  "SEO Migration": "Migración SEO",
  "CRM ve Satış Paneli": "Panel CRM y ventas",
  "B2B Web Sitesi": "Sitio web B2B",
  "Bayi Sipariş Paneli": "Panel de pedidos para distribuidores",
  "Sektörel Rezervasyon": "Reserva sectorial",
  "Emlak CRM": "CRM inmobiliario",
  "Katalog ve Fiyat Paneli": "Panel de catálogo y precios",
  "Turizm Operasyon Paneli": "Panel operativo de turismo",
  "AI Otomasyon": "Automatización IA",
  "Satış Paneli": "Panel de ventas",
  "Sektörel İş Takip": "Seguimiento sectorial de tareas",
  "Sağlık Randevu": "Citas de salud",
  "QR Menü ve Sipariş": "Menú QR y pedidos",
  "Katalog Sistemi": "Sistema de catálogo",
  "B2B Sipariş": "Pedido B2B",
  "Depo Operasyonu": "Operación de almacén",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "Desarrollo de portal",
  "Bayi Paneli": "Panel de distribuidores",
  "Raporlama Dashboard": "Dashboard de reportes",
  "Lead Otomasyonu": "Automatización de leads",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Turismo de salud",
  "Üretim Operasyonu": "Operación de producción",
  "Müşteri Paneli": "Panel de cliente",
};

const titleMapAr: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "تكامل XML للـ Marketplace",
  "mizan-mulk-yonetim-sistemi": "نظام Mizan لإدارة العقارات",
  "menar-operasyon-paneli": "لوحة عمليات MENAR",
  "kurumsal-web-sitesi": "مثال موقع شركة",
  "ecommerce-platform": "مثال حي لنظام تجارة إلكترونية",
  "whatsapp-siparis-katalog": "مثال كتالوج طلبات واتساب",
  "randevu-rezervasyon-sistemi": "مثال نظام مواعيد / حجوزات",
  "admin-panelli-isletme-sistemi": "مثال نظام أعمال مع لوحة إدارة",
  "landing-page": "مثال Landing Page / صفحة مبيعات",
  "cloud-storage-platform": "مثال منصة إدارة ملفات سحابية",
  "task-management-system": "مثال نظام إدارة مهام",
  "ai-log-analysis-panel": "مثال لوحة تحليل AI / Logs",
  "video-analysis-platform": "مثال منصة تحليل فيديو",
  "teknik-seo-audit-dashboard-demo": "خطة Demo للوحة تدقيق SEO تقني",
  "seo-migration-recovery-dashboard-demo": "خطة Demo للوحة استعادة SEO بعد Migration",
  "crm-lead-teklif-takip-demo": "خطة Demo لنظام CRM وLead وتتبع عروض",
  "stok-siparis-sevkiyat-paneli-demo": "خطة Demo للوحة مخزون وطلبات وشحن",
  "b2b-uretici-web-sitesi-demo": "خطة Demo لموقع B2B للمصنعين",
  "b2b-bayi-siparis-demo": "خطة Demo لنظام طلبات موزعين B2B",
  "pazaryeri-entegrasyon-dashboard-demo": "خطة Demo لـ Dashboard تكامل Marketplace",
  "rent-a-car-rezervasyon-demo": "خطة Demo لنظام حجوزات Rent a Car",
  "emlak-ilan-musteri-takip-demo": "خطة Demo لإعلانات عقارية وتتبع عملاء",
  "kuyumcu-katalog-fiyat-takip-demo": "خطة Demo لكتالوج مجوهرات وتتبع أسعار",
  "turizm-operasyon-paneli-demo": "خطة Demo للوحة عمليات سياحية",
  "ai-whatsapp-musteri-asistani-demo": "خطة Demo لمساعد عملاء واتساب بالذكاء الاصطناعي",
  "search-console-hata-analiz-paneli-demo": "خطة Demo للوحة تحليل أخطاء Search Console",
  "ihracatci-firma-web-sitesi-demo": "خطة Demo لموقع شركة مصدرة",
  "teklif-takip-sistemi-demo": "خطة Demo لنظام تتبع عروض الأسعار",
  "teknik-servis-is-takip-paneli-demo": "خطة Demo للوحة تتبع أعمال الصيانة الفنية",
  "klinik-randevu-sistemi-demo": "خطة Demo لنظام مواعيد عيادة",
  "guzellik-merkezi-randevu-sistemi-demo": "خطة Demo لنظام مواعيد مركز تجميل",
  "restoran-qr-menu-whatsapp-demo": "خطة Demo لقائمة QR وطلبات واتساب للمطاعم",
  "butik-urun-katalog-sistemi-demo": "خطة Demo لنظام كتالوج منتجات بوتيك",
  "toptanci-b2b-siparis-sistemi-demo": "خطة Demo لنظام طلبات B2B لتجار الجملة",
  "depo-sevkiyat-takip-paneli-demo": "خطة Demo للوحة مخزون وشحن",
  "saas-mvp-demo-platformu": "خطة منصة Demo لـ SaaS MVP",
  "musteri-paneli-portal-demo": "خطة Demo لنظام لوحة عملاء / Portal",
  "bayi-paneli-demo": "خطة Demo للوحة موزعين",
  "raporlama-dashboard-sistemi-demo": "خطة Demo لنظام Dashboard وتقارير",
  "lead-siniflandirma-paneli-demo": "خطة Demo للوحة جمع وتصنيف Leads",
  "power-apps-sharepoint-operasyon-demo": "خطة Demo لعمليات Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "خطة Demo للوحة عمليات سياحة صحية",
  "uretim-siparis-takip-paneli-demo": "خطة Demo لتتبع الإنتاج والطلبات",
  "ajans-musteri-paneli-demo": "خطة Demo للوحة عملاء وكالة",
};

const categoryMapAr: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "تكامل Marketplace",
  "Gayrimenkul Yönetim Sistemi": "نظام إدارة عقارات",
  "Operasyon Paneli": "لوحة عمليات",
  "Kurumsal Web Sitesi": "موقع شركة",
  "E-Ticaret Sistemi": "نظام تجارة إلكترونية",
  "Katalog ve Sipariş": "كتالوج وطلبات",
  "Randevu Sistemi": "نظام مواعيد",
  "İşletme Yönetimi": "إدارة أعمال",
  "Satış Sayfası": "صفحة مبيعات",
  "Dosya Yönetim Sistemi": "نظام إدارة ملفات",
  "İş Takip Sistemi": "نظام تتبع أعمال",
  "Analiz ve Raporlama": "تحليل وتقارير",
  "Medya Analiz Sistemi": "نظام تحليل Media",
  "Teknik SEO Paneli": "لوحة SEO تقنية",
  "SEO Migration": "SEO Migration",
  "CRM ve Satış Paneli": "لوحة CRM ومبيعات",
  "B2B Web Sitesi": "موقع B2B",
  "Bayi Sipariş Paneli": "لوحة طلبات موزعين",
  "Sektörel Rezervasyon": "حجوزات قطاعية",
  "Emlak CRM": "CRM عقاري",
  "Katalog ve Fiyat Paneli": "لوحة كتالوج وأسعار",
  "Turizm Operasyon Paneli": "لوحة عمليات سياحية",
  "AI Otomasyon": "أتمتة AI",
  "Satış Paneli": "لوحة مبيعات",
  "Sektörel İş Takip": "تتبع أعمال قطاعي",
  "Sağlık Randevu": "مواعيد صحية",
  "QR Menü ve Sipariş": "قائمة QR وطلبات",
  "Katalog Sistemi": "نظام كتالوج",
  "B2B Sipariş": "طلبات B2B",
  "Depo Operasyonu": "عمليات مستودع",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "تطوير Portal",
  "Bayi Paneli": "لوحة موزعين",
  "Raporlama Dashboard": "Dashboard وتقارير",
  "Lead Otomasyonu": "أتمتة Leads",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "سياحة صحية",
  "Üretim Operasyonu": "عمليات إنتاج",
  "Müşteri Paneli": "لوحة عملاء",
};

const titleMapRu: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "XML-интеграция marketplace",
  "mizan-mulk-yonetim-sistemi": "Система управления недвижимостью Mizan",
  "menar-operasyon-paneli": "Операционный panel MENAR",
  "kurumsal-web-sitesi": "Пример корпоративного web-сайта",
  "ecommerce-platform": "Живой пример e-commerce системы",
  "whatsapp-siparis-katalog": "Пример каталога заказов WhatsApp",
  "randevu-rezervasyon-sistemi": "Пример системы записи / бронирования",
  "admin-panelli-isletme-sistemi": "Пример бизнес-системы с админ-панелью",
  "landing-page": "Пример landing page / sales page",
  "cloud-storage-platform": "Пример платформы управления cloud-файлами",
  "task-management-system": "Пример системы управления задачами",
  "ai-log-analysis-panel": "Пример AI / log analysis panel",
  "video-analysis-platform": "Пример платформы video analysis",
  "teknik-seo-audit-dashboard-demo": "План demo dashboard для technical SEO audit",
  "seo-migration-recovery-dashboard-demo": "План demo panel для SEO migration recovery",
  "crm-lead-teklif-takip-demo": "План demo CRM, lead и quote tracking",
  "stok-siparis-sevkiyat-paneli-demo": "План demo panel склада, заказов и отгрузки",
  "b2b-uretici-web-sitesi-demo": "План demo B2B web-сайта производителя",
  "b2b-bayi-siparis-demo": "План demo B2B dealer order system",
  "pazaryeri-entegrasyon-dashboard-demo": "План demo dashboard marketplace-интеграции",
  "rent-a-car-rezervasyon-demo": "План demo системы бронирования Rent a Car",
  "emlak-ilan-musteri-takip-demo": "План demo объявлений недвижимости и CRM",
  "kuyumcu-katalog-fiyat-takip-demo": "План demo ювелирного каталога и price tracking",
  "turizm-operasyon-paneli-demo": "План demo операционного panel для туризма",
  "ai-whatsapp-musteri-asistani-demo": "План demo AI WhatsApp customer assistant",
  "search-console-hata-analiz-paneli-demo": "План demo panel анализа ошибок Search Console",
  "ihracatci-firma-web-sitesi-demo": "План demo web-сайта компании-экспортера",
  "teklif-takip-sistemi-demo": "План demo системы отслеживания предложений",
  "teknik-servis-is-takip-paneli-demo": "План demo panel технического сервиса",
  "klinik-randevu-sistemi-demo": "План demo системы записи для клиники",
  "guzellik-merkezi-randevu-sistemi-demo": "План demo системы записи для салона красоты",
  "restoran-qr-menu-whatsapp-demo": "План demo QR-меню и WhatsApp-заказов для ресторана",
  "butik-urun-katalog-sistemi-demo": "План demo каталога товаров для бутика",
  "toptanci-b2b-siparis-sistemi-demo": "План demo B2B системы заказов для оптовиков",
  "depo-sevkiyat-takip-paneli-demo": "План demo panel склада и отгрузки",
  "saas-mvp-demo-platformu": "План demo-платформы для SaaS MVP",
  "musteri-paneli-portal-demo": "План demo customer panel / portal",
  "bayi-paneli-demo": "План demo dealer panel",
  "raporlama-dashboard-sistemi-demo": "План demo reporting dashboard",
  "lead-siniflandirma-paneli-demo": "План demo panel сбора и классификации leads",
  "power-apps-sharepoint-operasyon-demo": "План demo для операций Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "План demo panel для medical tourism",
  "uretim-siparis-takip-paneli-demo": "План demo panel производства и заказов",
  "ajans-musteri-paneli-demo": "План demo customer panel для агентств",
};

const categoryMapRu: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Marketplace-интеграция",
  "Gayrimenkul Yönetim Sistemi": "Система управления недвижимостью",
  "Operasyon Paneli": "Операционный panel",
  "Kurumsal Web Sitesi": "Корпоративный web-сайт",
  "E-Ticaret Sistemi": "E-commerce система",
  "Katalog ve Sipariş": "Каталог и заказы",
  "Randevu Sistemi": "Система записи",
  "İşletme Yönetimi": "Управление бизнесом",
  "Satış Sayfası": "Страница продаж",
  "Dosya Yönetim Sistemi": "Система управления файлами",
  "İş Takip Sistemi": "Система отслеживания работ",
  "Analiz ve Raporlama": "Аналитика и отчетность",
  "Medya Analiz Sistemi": "Система анализа медиа",
  "Teknik SEO Paneli": "Панель технического SEO",
  "SEO Migration": "SEO-миграция",
  "CRM ve Satış Paneli": "CRM и панель продаж",
  "B2B Web Sitesi": "B2B web-сайт",
  "Bayi Sipariş Paneli": "Панель заказов дилеров",
  "Sektörel Rezervasyon": "Отраслевое бронирование",
  "Emlak CRM": "Real estate CRM",
  "Katalog ve Fiyat Paneli": "Панель каталога и цен",
  "Turizm Operasyon Paneli": "Панель туристических операций",
  "AI Otomasyon": "AI-автоматизация",
  "Satış Paneli": "Панель продаж",
  "Sektörel İş Takip": "Отраслевое отслеживание работ",
  "Sağlık Randevu": "Healthcare appointments",
  "QR Menü ve Sipariş": "QR-меню и заказы",
  "Katalog Sistemi": "Система каталога",
  "B2B Sipariş": "B2B заказы",
  "Depo Operasyonu": "Warehouse operations",
  "SaaS MVP": "SaaS MVP платформа",
  "Portal Geliştirme": "Разработка портала",
  "Bayi Paneli": "Дилерская панель",
  "Raporlama Dashboard": "Дашборд отчетности",
  "Lead Otomasyonu": "Автоматизация лидов",
  "Power Platform": "Power Platform операции",
  "Sağlık Turizmi": "Медицинский туризм",
  "Üretim Operasyonu": "Производственные операции",
  "Müşteri Paneli": "Клиентская панель",
};

const titleMapPt: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Integração XML com marketplaces",
  "mizan-mulk-yonetim-sistemi": "Sistema de gestão imobiliária Mizan",
  "menar-operasyon-paneli": "Painel operacional MENAR",
  "kurumsal-web-sitesi": "Exemplo de site corporativo",
  "ecommerce-platform": "Exemplo ao vivo de sistema de e-commerce",
  "whatsapp-siparis-katalog": "Exemplo de catálogo de pedidos por WhatsApp",
  "randevu-rezervasyon-sistemi": "Exemplo de sistema de agendamento e reservas",
  "admin-panelli-isletme-sistemi": "Exemplo de sistema empresarial com painel administrativo",
  "landing-page": "Exemplo de landing page / página de vendas",
  "cloud-storage-platform": "Exemplo de plataforma de gestão de arquivos na nuvem",
  "task-management-system": "Exemplo de sistema de gestão de tarefas",
  "ai-log-analysis-panel": "Exemplo de painel de IA e análise de logs",
  "video-analysis-platform": "Exemplo de plataforma de análise de vídeo",
  "teknik-seo-audit-dashboard-demo": "Plano demo de dashboard de auditoria técnica de SEO",
  "seo-migration-recovery-dashboard-demo": "Plano demo de painel de recuperação de SEO migration",
  "crm-lead-teklif-takip-demo": "Plano demo de CRM, leads e acompanhamento de propostas",
  "stok-siparis-sevkiyat-paneli-demo": "Plano demo de painel de estoque, pedidos e expedição",
  "b2b-uretici-web-sitesi-demo": "Plano demo de site B2B para fabricantes",
  "b2b-bayi-siparis-demo": "Plano demo de sistema B2B de pedidos para revendedores",
  "pazaryeri-entegrasyon-dashboard-demo": "Plano demo de dashboard de integração com marketplaces",
  "rent-a-car-rezervasyon-demo": "Plano demo de sistema de reservas para rent a car",
  "emlak-ilan-musteri-takip-demo": "Plano demo de anúncios imobiliários e acompanhamento de clientes",
  "kuyumcu-katalog-fiyat-takip-demo": "Plano demo de catálogo de joalheria e acompanhamento de preços",
  "turizm-operasyon-paneli-demo": "Plano demo de painel operacional de turismo",
  "ai-whatsapp-musteri-asistani-demo": "Plano demo de assistente de IA para WhatsApp",
  "search-console-hata-analiz-paneli-demo": "Plano demo de painel de análise de erros do Search Console",
  "ihracatci-firma-web-sitesi-demo": "Plano demo de site para empresa exportadora",
  "teklif-takip-sistemi-demo": "Plano demo de sistema de acompanhamento de propostas",
  "teknik-servis-is-takip-paneli-demo": "Plano demo de painel de acompanhamento de serviço técnico",
  "klinik-randevu-sistemi-demo": "Plano demo de sistema de agendamento para clínica",
  "guzellik-merkezi-randevu-sistemi-demo": "Plano demo de sistema de agendamento para centro de beleza",
  "restoran-qr-menu-whatsapp-demo": "Plano demo de menu QR e pedidos por WhatsApp para restaurante",
  "butik-urun-katalog-sistemi-demo": "Plano demo de sistema de catálogo de produtos para boutique",
  "toptanci-b2b-siparis-sistemi-demo": "Plano demo de sistema B2B de pedidos para atacadistas",
  "depo-sevkiyat-takip-paneli-demo": "Plano demo de painel de estoque e expedição",
  "saas-mvp-demo-platformu": "Plano de plataforma demo para SaaS MVP",
  "musteri-paneli-portal-demo": "Plano demo de painel do cliente / portal",
  "bayi-paneli-demo": "Plano demo de painel de revendedores",
  "raporlama-dashboard-sistemi-demo": "Plano demo de sistema de dashboard e relatórios",
  "lead-siniflandirma-paneli-demo": "Plano demo de painel de coleta e classificação de leads",
  "power-apps-sharepoint-operasyon-demo": "Plano demo de operação Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "Plano demo de painel operacional para turismo de saúde",
  "uretim-siparis-takip-paneli-demo": "Plano demo de acompanhamento de produção e pedidos",
  "ajans-musteri-paneli-demo": "Plano demo de painel do cliente para agências",
};

const categoryMapPt: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Integração com marketplaces",
  "Gayrimenkul Yönetim Sistemi": "Sistema de gestão imobiliária",
  "Operasyon Paneli": "Painel operacional",
  "Kurumsal Web Sitesi": "Site corporativo",
  "E-Ticaret Sistemi": "Sistema de e-commerce",
  "Katalog ve Sipariş": "Catálogo e pedidos",
  "Randevu Sistemi": "Sistema de agendamento",
  "İşletme Yönetimi": "Gestão empresarial",
  "Satış Sayfası": "Página de vendas",
  "Dosya Yönetim Sistemi": "Sistema de gestão de arquivos",
  "İş Takip Sistemi": "Sistema de acompanhamento de tarefas",
  "Analiz ve Raporlama": "Análise e relatórios",
  "Medya Analiz Sistemi": "Sistema de análise de mídia",
  "Teknik SEO Paneli": "Painel de SEO técnico",
  "SEO Migration": "SEO migration",
  "CRM ve Satış Paneli": "Painel de CRM e vendas",
  "B2B Web Sitesi": "Site B2B",
  "Bayi Sipariş Paneli": "Painel de pedidos de revendedores",
  "Sektörel Rezervasyon": "Reserva setorial",
  "Emlak CRM": "CRM imobiliário",
  "Katalog ve Fiyat Paneli": "Painel de catálogo e preços",
  "Turizm Operasyon Paneli": "Painel operacional de turismo",
  "AI Otomasyon": "Automação com IA",
  "Satış Paneli": "Painel de vendas",
  "Sektörel İş Takip": "Acompanhamento setorial de tarefas",
  "Sağlık Randevu": "Agendamento de saúde",
  "QR Menü ve Sipariş": "Menu QR e pedidos",
  "Katalog Sistemi": "Sistema de catálogo",
  "B2B Sipariş": "Pedido B2B",
  "Depo Operasyonu": "Operação de depósito",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "Desenvolvimento de portal",
  "Bayi Paneli": "Painel de revendedores",
  "Raporlama Dashboard": "Dashboard de relatórios",
  "Lead Otomasyonu": "Automação de leads",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Turismo de saúde",
  "Üretim Operasyonu": "Operação de produção",
  "Müşteri Paneli": "Painel do cliente",
};

const titleMapIt: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Integrazione XML marketplace",
  "mizan-mulk-yonetim-sistemi": "Sistema di gestione immobiliare Mizan",
  "menar-operasyon-paneli": "Pannello operativo MENAR",
  "kurumsal-web-sitesi": "Esempio sito corporate",
  "ecommerce-platform": "Esempio live sistema e-commerce",
  "whatsapp-siparis-katalog": "Esempio catalogo ordini WhatsApp",
  "randevu-rezervasyon-sistemi": "Esempio sistema appuntamenti / prenotazioni",
  "admin-panelli-isletme-sistemi": "Esempio sistema aziendale con pannello amministrativo",
  "landing-page": "Esempio landing page / pagina vendita",
  "cloud-storage-platform": "Esempio piattaforma gestione file cloud",
  "task-management-system": "Esempio sistema gestione attività",
  "ai-log-analysis-panel": "Esempio pannello AI / analisi log",
  "video-analysis-platform": "Esempio piattaforma analisi video",
  "teknik-seo-audit-dashboard-demo": "Piano demo dashboard audit SEO tecnico",
  "seo-migration-recovery-dashboard-demo": "Piano demo pannello recupero SEO migration",
  "crm-lead-teklif-takip-demo": "Piano demo CRM, lead e monitoraggio preventivi",
  "stok-siparis-sevkiyat-paneli-demo": "Piano demo pannello stock, ordini e spedizioni",
  "b2b-uretici-web-sitesi-demo": "Piano demo sito B2B per produttori",
  "b2b-bayi-siparis-demo": "Piano demo sistema ordini B2B per rivenditori",
  "pazaryeri-entegrasyon-dashboard-demo": "Piano demo dashboard integrazione marketplace",
  "rent-a-car-rezervasyon-demo": "Piano demo sistema prenotazioni rent a car",
  "emlak-ilan-musteri-takip-demo": "Piano demo annunci immobiliari e monitoraggio clienti",
  "kuyumcu-katalog-fiyat-takip-demo": "Piano demo catalogo gioielleria e monitoraggio prezzi",
  "turizm-operasyon-paneli-demo": "Piano demo pannello operativo turismo",
  "ai-whatsapp-musteri-asistani-demo": "Piano demo assistente AI WhatsApp per clienti",
  "search-console-hata-analiz-paneli-demo": "Piano demo pannello analisi errori Search Console",
  "ihracatci-firma-web-sitesi-demo": "Piano demo sito web per azienda esportatrice",
  "teklif-takip-sistemi-demo": "Piano demo sistema monitoraggio preventivi",
  "teknik-servis-is-takip-paneli-demo": "Piano demo pannello lavori assistenza tecnica",
  "klinik-randevu-sistemi-demo": "Piano demo sistema appuntamenti clinica",
  "guzellik-merkezi-randevu-sistemi-demo": "Piano demo sistema appuntamenti centro estetico",
  "restoran-qr-menu-whatsapp-demo": "Piano demo menu QR e ordini WhatsApp per ristorante",
  "butik-urun-katalog-sistemi-demo": "Piano demo sistema catalogo prodotti boutique",
  "toptanci-b2b-siparis-sistemi-demo": "Piano demo sistema ordini B2B per grossisti",
  "depo-sevkiyat-takip-paneli-demo": "Piano demo pannello magazzino e spedizioni",
  "saas-mvp-demo-platformu": "Piano piattaforma demo SaaS MVP",
  "musteri-paneli-portal-demo": "Piano demo pannello cliente / portale",
  "bayi-paneli-demo": "Piano demo pannello rivenditori",
  "raporlama-dashboard-sistemi-demo": "Piano demo sistema dashboard e reportistica",
  "lead-siniflandirma-paneli-demo": "Piano demo pannello raccolta e classificazione lead",
  "power-apps-sharepoint-operasyon-demo": "Piano demo operazione Power Apps / SharePoint",
  "saglik-turizmi-operasyon-paneli-demo": "Piano demo pannello operativo turismo sanitario",
  "uretim-siparis-takip-paneli-demo": "Piano demo monitoraggio produzione e ordini",
  "ajans-musteri-paneli-demo": "Piano demo pannello clienti per agenzie",
};

const categoryMapIt: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Integrazione marketplace",
  "Gayrimenkul Yönetim Sistemi": "Sistema gestione immobiliare",
  "Operasyon Paneli": "Pannello operativo",
  "Kurumsal Web Sitesi": "Sito corporate",
  "E-Ticaret Sistemi": "Sistema e-commerce",
  "Katalog ve Sipariş": "Catalogo e ordini",
  "Randevu Sistemi": "Sistema appuntamenti",
  "İşletme Yönetimi": "Gestione aziendale",
  "Satış Sayfası": "Pagina vendita",
  "Dosya Yönetim Sistemi": "Sistema gestione file",
  "İş Takip Sistemi": "Sistema monitoraggio attività",
  "Analiz ve Raporlama": "Analisi e reportistica",
  "Medya Analiz Sistemi": "Sistema analisi media",
  "Teknik SEO Paneli": "Pannello SEO tecnico",
  "SEO Migration": "SEO migration",
  "CRM ve Satış Paneli": "Pannello CRM e vendite",
  "B2B Web Sitesi": "Sito B2B",
  "Bayi Sipariş Paneli": "Pannello ordini rivenditori",
  "Sektörel Rezervasyon": "Prenotazione settoriale",
  "Emlak CRM": "CRM immobiliare",
  "Katalog ve Fiyat Paneli": "Pannello catalogo e prezzi",
  "Turizm Operasyon Paneli": "Pannello operativo turismo",
  "AI Otomasyon": "Automazione AI",
  "Satış Paneli": "Pannello vendite",
  "Sektörel İş Takip": "Monitoraggio attività settoriale",
  "Sağlık Randevu": "Appuntamenti sanitari",
  "QR Menü ve Sipariş": "Menu QR e ordini",
  "Katalog Sistemi": "Sistema catalogo",
  "B2B Sipariş": "Ordine B2B",
  "Depo Operasyonu": "Operazione magazzino",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "Sviluppo portale",
  "Bayi Paneli": "Pannello rivenditori",
  "Raporlama Dashboard": "Dashboard reportistica",
  "Lead Otomasyonu": "Automazione lead",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Turismo sanitario",
  "Üretim Operasyonu": "Operazione produzione",
  "Müşteri Paneli": "Pannello cliente",
};

const titleMapNl: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Marketplace XML-integratie",
  "mizan-mulk-yonetim-sistemi": "Mizan vastgoedbeheersysteem",
  "menar-operasyon-paneli": "MENAR operatiepaneel",
  "kurumsal-web-sitesi": "Corporate website voorbeeld",
  "ecommerce-platform": "E-commerce systeem live voorbeeld",
  "whatsapp-siparis-katalog": "WhatsApp bestelcatalogus voorbeeld",
  "randevu-rezervasyon-sistemi": "Afspraken- en reserveringssysteem voorbeeld",
  "admin-panelli-isletme-sistemi": "Bedrijfssysteem met beheerpaneel voorbeeld",
  "landing-page": "Landingpage / one-page verkoopvoorbeeld",
  "cloud-storage-platform": "Cloud bestandsbeheerplatform voorbeeld",
  "task-management-system": "Taakbeheersysteem voorbeeld",
  "ai-log-analysis-panel": "AI- en loganalysepaneel voorbeeld",
  "video-analysis-platform": "Videoanalyseplatform voorbeeld",
  "teknik-seo-audit-dashboard-demo": "Technische SEO-audit dashboard demoplan",
  "seo-migration-recovery-dashboard-demo": "SEO-migratieherstel paneel demoplan",
  "crm-lead-teklif-takip-demo": "CRM, lead en offertevolgsysteem demoplan",
  "stok-siparis-sevkiyat-paneli-demo": "Voorraad-, order- en verzendpaneel demoplan",
  "b2b-uretici-web-sitesi-demo": "B2B producentenwebsite demoplan",
  "b2b-bayi-siparis-demo": "B2B dealerbestelsysteem demoplan",
  "pazaryeri-entegrasyon-dashboard-demo": "Marketplace-integratie dashboard demoplan",
  "rent-a-car-rezervasyon-demo": "Rent a car reserveringssysteem demoplan",
  "emlak-ilan-musteri-takip-demo": "Vastgoedadvertentie en klantopvolging demoplan",
  "kuyumcu-katalog-fiyat-takip-demo": "Juwelier catalogus en prijsopvolging demoplan",
  "turizm-operasyon-paneli-demo": "Toerisme operatiepaneel demoplan",
  "ai-whatsapp-musteri-asistani-demo": "AI WhatsApp klantassistent demoplan",
  "search-console-hata-analiz-paneli-demo": "Search Console foutanalysepaneel demoplan",
  "ihracatci-firma-web-sitesi-demo": "Exportbedrijf website demoplan",
  "teklif-takip-sistemi-demo": "Offertevolgsysteem demoplan",
  "teknik-servis-is-takip-paneli-demo": "Technische service werkvolgpaneel demoplan",
  "klinik-randevu-sistemi-demo": "Kliniek afsprakensysteem demoplan",
  "guzellik-merkezi-randevu-sistemi-demo": "Schoonheidssalon afsprakensysteem demoplan",
  "restoran-qr-menu-whatsapp-demo": "Restaurant QR-menu en WhatsApp bestelling demoplan",
  "butik-urun-katalog-sistemi-demo": "Boetiek productcatalogussysteem demoplan",
  "toptanci-b2b-siparis-sistemi-demo": "Groothandel B2B-bestelsysteem demoplan",
  "depo-sevkiyat-takip-paneli-demo": "Magazijn- en verzendvolgpaneel demoplan",
  "saas-mvp-demo-platformu": "SaaS MVP demoplatform plan",
  "musteri-paneli-portal-demo": "Klantportaal / portalsysteem demoplan",
  "bayi-paneli-demo": "Dealerpaneel demoplan",
  "raporlama-dashboard-sistemi-demo": "Rapportage dashboard systeem demoplan",
  "lead-siniflandirma-paneli-demo": "Leadverzameling en classificatiepaneel demoplan",
  "power-apps-sharepoint-operasyon-demo": "Power Apps / SharePoint operatie demoplan",
  "saglik-turizmi-operasyon-paneli-demo": "Gezondheidstoerisme operatiepaneel demoplan",
  "uretim-siparis-takip-paneli-demo": "Productie- en ordervolgpaneel demoplan",
  "ajans-musteri-paneli-demo": "Bureau klantportaal demoplan",
};

const categoryMapNl: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "Marketplace-integratie",
  "Gayrimenkul Yönetim Sistemi": "Vastgoedbeheersysteem",
  "Operasyon Paneli": "Operatiepaneel",
  "Kurumsal Web Sitesi": "Corporate website",
  "E-Ticaret Sistemi": "E-commerce systeem",
  "Katalog ve Sipariş": "Catalogus en bestelling",
  "Randevu Sistemi": "Afsprakensysteem",
  "İşletme Yönetimi": "Bedrijfsbeheer",
  "Satış Sayfası": "Verkooppagina",
  "Dosya Yönetim Sistemi": "Bestandsbeheersysteem",
  "İş Takip Sistemi": "Werkvolgsysteem",
  "Analiz ve Raporlama": "Analyse en rapportage",
  "Medya Analiz Sistemi": "Media-analysesysteem",
  "Teknik SEO Paneli": "Technisch SEO-paneel",
  "SEO Migration": "SEO-migratie",
  "CRM ve Satış Paneli": "CRM- en verkooppaneel",
  "B2B Web Sitesi": "B2B website",
  "Bayi Sipariş Paneli": "Dealerbestelpaneel",
  "Sektörel Rezervasyon": "Sectorreservering",
  "Emlak CRM": "Vastgoed CRM",
  "Katalog ve Fiyat Paneli": "Catalogus- en prijspaneel",
  "Turizm Operasyon Paneli": "Toerisme operatiepaneel",
  "AI Otomasyon": "AI-automatisering",
  "Satış Paneli": "Verkooppaneel",
  "Sektörel İş Takip": "Sector werkopvolging",
  "Sağlık Randevu": "Zorgafspraken",
  "QR Menü ve Sipariş": "QR-menu en bestelling",
  "Katalog Sistemi": "Catalogussysteem",
  "B2B Sipariş": "B2B-bestelling",
  "Depo Operasyonu": "Magazijnoperatie",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "Portalontwikkeling",
  "Bayi Paneli": "Dealerpaneel",
  "Raporlama Dashboard": "Rapportage dashboard",
  "Lead Otomasyonu": "Leadautomatisering",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "Gezondheidstoerisme",
  "Üretim Operasyonu": "Productieoperatie",
  "Müşteri Paneli": "Klantportaal",
};

const titleMapZh: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "市场平台 XML 集成",
  "mizan-mulk-yonetim-sistemi": "Mizan 房产管理系统",
  "menar-operasyon-paneli": "MENAR 运营面板",
  "kurumsal-web-sitesi": "企业官网示例",
  "ecommerce-platform": "电商系统在线示例",
  "whatsapp-siparis-katalog": "WhatsApp 订单目录示例",
  "randevu-rezervasyon-sistemi": "预约与预订系统示例",
  "admin-panelli-isletme-sistemi": "带管理面板的业务系统示例",
  "landing-page": "单页销售落地页示例",
  "cloud-storage-platform": "云端文件管理平台示例",
  "task-management-system": "任务管理系统示例",
  "ai-log-analysis-panel": "AI 与日志分析面板示例",
  "video-analysis-platform": "视频分析平台示例",
  "teknik-seo-audit-dashboard-demo": "技术 SEO 审计仪表盘演示方案",
  "seo-migration-recovery-dashboard-demo": "SEO 迁移恢复面板演示方案",
  "crm-lead-teklif-takip-demo": "CRM、线索与报价跟进系统演示方案",
  "stok-siparis-sevkiyat-paneli-demo": "库存、订单与发货面板演示方案",
  "b2b-uretici-web-sitesi-demo": "B2B 制造商网站演示方案",
  "b2b-bayi-siparis-demo": "B2B 经销商订货系统演示方案",
  "pazaryeri-entegrasyon-dashboard-demo": "市场平台集成仪表盘演示方案",
  "rent-a-car-rezervasyon-demo": "租车预订系统演示方案",
  "emlak-ilan-musteri-takip-demo": "房产房源与客户跟进系统演示方案",
  "kuyumcu-katalog-fiyat-takip-demo": "珠宝目录与价格跟进系统演示方案",
  "turizm-operasyon-paneli-demo": "旅游运营面板演示方案",
  "ai-whatsapp-musteri-asistani-demo": "AI WhatsApp 客服助手演示方案",
  "search-console-hata-analiz-paneli-demo": "Search Console 错误分析面板演示方案",
  "ihracatci-firma-web-sitesi-demo": "出口企业网站演示方案",
  "teklif-takip-sistemi-demo": "报价跟进系统演示方案",
  "teknik-servis-is-takip-paneli-demo": "技术服务工单跟进面板演示方案",
  "klinik-randevu-sistemi-demo": "诊所预约系统演示方案",
  "guzellik-merkezi-randevu-sistemi-demo": "美容中心预约系统演示方案",
  "restoran-qr-menu-whatsapp-demo": "餐厅 QR 菜单与 WhatsApp 订单演示方案",
  "butik-urun-katalog-sistemi-demo": "精品店产品目录系统演示方案",
  "toptanci-b2b-siparis-sistemi-demo": "批发商 B2B 订货系统演示方案",
  "depo-sevkiyat-takip-paneli-demo": "仓库与发货跟进面板演示方案",
  "saas-mvp-demo-platformu": "SaaS MVP 演示平台方案",
  "musteri-paneli-portal-demo": "客户面板与门户系统演示方案",
  "bayi-paneli-demo": "经销商面板演示方案",
  "raporlama-dashboard-sistemi-demo": "报表仪表盘系统演示方案",
  "lead-siniflandirma-paneli-demo": "线索收集与分类面板演示方案",
  "power-apps-sharepoint-operasyon-demo": "Power Apps 与 SharePoint 运营演示方案",
  "saglik-turizmi-operasyon-paneli-demo": "医疗旅游运营面板演示方案",
  "uretim-siparis-takip-paneli-demo": "生产与订单跟进面板演示方案",
  "ajans-musteri-paneli-demo": "代理机构客户面板演示方案",
};

const categoryMapZh: Record<string, string> = {
  "Pazaryeri Entegrasyonu": "市场平台集成",
  "Gayrimenkul Yönetim Sistemi": "房产管理系统",
  "Operasyon Paneli": "运营面板",
  "Kurumsal Web Sitesi": "企业官网",
  "E-Ticaret Sistemi": "电商系统",
  "Katalog ve Sipariş": "目录与订单",
  "Randevu Sistemi": "预约系统",
  "İşletme Yönetimi": "业务管理",
  "Satış Sayfası": "销售页面",
  "Dosya Yönetim Sistemi": "文件管理系统",
  "İş Takip Sistemi": "任务跟进系统",
  "Analiz ve Raporlama": "分析与报表",
  "Medya Analiz Sistemi": "媒体分析系统",
  "Teknik SEO Paneli": "技术 SEO 面板",
  "SEO Migration": "SEO 迁移",
  "CRM ve Satış Paneli": "CRM 与销售面板",
  "B2B Web Sitesi": "B2B 网站",
  "Bayi Sipariş Paneli": "经销商订货面板",
  "Sektörel Rezervasyon": "行业预订",
  "Emlak CRM": "房产 CRM",
  "Katalog ve Fiyat Paneli": "目录与价格面板",
  "Turizm Operasyon Paneli": "旅游运营面板",
  "AI Otomasyon": "AI 自动化",
  "Satış Paneli": "销售面板",
  "Sektörel İş Takip": "行业工单跟进",
  "Sağlık Randevu": "医疗预约",
  "QR Menü ve Sipariş": "QR 菜单与订单",
  "Katalog Sistemi": "目录系统",
  "B2B Sipariş": "B2B 订单",
  "Depo Operasyonu": "仓库运营",
  "SaaS MVP": "SaaS MVP",
  "Portal Geliştirme": "门户开发",
  "Bayi Paneli": "经销商面板",
  "Raporlama Dashboard": "报表仪表盘",
  "Lead Otomasyonu": "线索自动化",
  "Power Platform": "Power Platform",
  "Sağlık Turizmi": "医疗旅游",
  "Üretim Operasyonu": "生产运营",
  "Müşteri Paneli": "客户面板",
};

const testimonialText: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / integration work",
    text: "A careful and capable freelancer who understood the customer need, worked in an organized way, and delivered a strong result.",
    dateLabel: "Customer review",
  },
  "sefayama-bionluk": {
    projectType: "MENAR operation panel",
    text: "Overall, it was a good piece of work.",
    dateLabel: "Customer review",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR additional scope",
    text: "Thank you.",
    dateLabel: "Customer review",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan property management system",
    text: "The process was handled with a flexible, constructive, and solution-focused approach despite technical constraints and architectural changes.",
    dateLabel: "Customer review",
  },
};

const testimonialTextDe: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Marktplatz-XML / Integrationsarbeit",
    text: "Sorgfältiger und kompetenter Freelancer, der den Kundenbedarf verstanden, organisiert gearbeitet und ein starkes Ergebnis geliefert hat.",
    dateLabel: "Kundenbewertung",
  },
  "sefayama-bionluk": {
    projectType: "MENAR Operationspanel",
    text: "Insgesamt war es eine gute Arbeit.",
    dateLabel: "Kundenbewertung",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR Zusatzumfang",
    text: "Vielen Dank.",
    dateLabel: "Kundenbewertung",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan Immobilienverwaltungssystem",
    text: "Der Prozess wurde trotz technischer Einschränkungen und architektonischer Änderungen flexibel, konstruktiv und lösungsorientiert geführt.",
    dateLabel: "Kundenbewertung",
  },
};

const testimonialTextFr: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Travail XML marketplace / intégration",
    text: "Freelance soigneux et compétent, qui a compris le besoin client, travaillé de façon organisée et livré un résultat solide.",
    dateLabel: "Avis client",
  },
  "sefayama-bionluk": {
    projectType: "Panneau opérationnel MENAR",
    text: "Dans l'ensemble, c'était un bon travail.",
    dateLabel: "Avis client",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Périmètre supplémentaire MENAR",
    text: "Merci.",
    dateLabel: "Avis client",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Système de gestion immobilière Mizan",
    text: "Le processus a été mené avec une approche flexible, constructive et orientée solution malgré les contraintes techniques et les changements d'architecture.",
    dateLabel: "Avis client",
  },
};

const testimonialTextEs: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Trabajo XML marketplace / integración",
    text: "Un profesional cuidadoso y competente que entendió la necesidad del cliente, trabajó de forma organizada y entregó un resultado sólido.",
    dateLabel: "Reseña de cliente",
  },
  "sefayama-bionluk": {
    projectType: "Panel operativo MENAR",
    text: "En general, fue un buen trabajo.",
    dateLabel: "Reseña de cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Alcance adicional MENAR",
    text: "Gracias.",
    dateLabel: "Reseña de cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema de gestión inmobiliaria Mizan",
    text: "El proceso se llevó con un enfoque flexible, constructivo y orientado a soluciones pese a las limitaciones técnicas y los cambios de arquitectura.",
    dateLabel: "Reseña de cliente",
  },
};

const testimonialTextAr: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "عمل XML / تكامل Marketplace",
    text: "مستقل دقيق وقادر على فهم حاجة العميل، عمل بشكل منظم، وسلم نتيجة قوية.",
    dateLabel: "تقييم عميل",
  },
  "sefayama-bionluk": {
    projectType: "لوحة عمليات MENAR",
    text: "بشكل عام كان عملا جيدا.",
    dateLabel: "تقييم عميل",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "نطاق إضافي MENAR",
    text: "شكرا.",
    dateLabel: "تقييم عميل",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "نظام Mizan لإدارة العقارات",
    text: "تمت إدارة العملية بمنهج مرن وبناء وموجه للحل رغم القيود التقنية وتغييرات البنية.",
    dateLabel: "تقييم عميل",
  },
};

const testimonialTextRu: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "XML / marketplace integration",
    text: "Внимательный и компетентный исполнитель, который понял потребность клиента, работал организованно и довел задачу до сильного результата.",
    dateLabel: "Отзыв клиента",
  },
  "sefayama-bionluk": {
    projectType: "Операционный panel MENAR",
    text: "В целом работа была хорошей.",
    dateLabel: "Отзыв клиента",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Дополнительный объем MENAR",
    text: "Спасибо.",
    dateLabel: "Отзыв клиента",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Система управления недвижимостью Mizan",
    text: "Процесс велся гибко, конструктивно и с фокусом на решение, несмотря на технические ограничения и изменения архитектуры.",
    dateLabel: "Отзыв клиента",
  },
};

const testimonialTextPt: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Trabalho de integração XML / marketplace",
    text: "Profissional cuidadoso e competente, que entendeu a necessidade do cliente, trabalhou de forma organizada e entregou um resultado forte.",
    dateLabel: "Avaliação de cliente",
  },
  "sefayama-bionluk": {
    projectType: "Painel operacional MENAR",
    text: "No geral, foi um bom trabalho.",
    dateLabel: "Avaliação de cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Escopo adicional MENAR",
    text: "Obrigado.",
    dateLabel: "Avaliação de cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema de gestão imobiliária Mizan",
    text: "O processo foi conduzido com uma abordagem flexível, construtiva e orientada à solução, apesar das restrições técnicas e mudanças de arquitetura.",
    dateLabel: "Avaliação de cliente",
  },
};

const testimonialTextIt: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Lavoro integrazione XML / marketplace",
    text: "Professionista attento e competente, che ha capito il bisogno del cliente, ha lavorato in modo organizzato e ha consegnato un risultato solido.",
    dateLabel: "Recensione cliente",
  },
  "sefayama-bionluk": {
    projectType: "Pannello operativo MENAR",
    text: "Nel complesso è stato un buon lavoro.",
    dateLabel: "Recensione cliente",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "Ambito aggiuntivo MENAR",
    text: "Grazie.",
    dateLabel: "Recensione cliente",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Sistema gestione immobiliare Mizan",
    text: "Il processo è stato gestito con un approccio flessibile, costruttivo e orientato alla soluzione, nonostante vincoli tecnici e cambiamenti architetturali.",
    dateLabel: "Recensione cliente",
  },
};

const testimonialTextNl: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "Marketplace XML / integratiewerk",
    text: "Zorgvuldige en capabele freelancer die de klantbehoefte begreep, georganiseerd werkte en een sterk resultaat opleverde.",
    dateLabel: "Klantbeoordeling",
  },
  "sefayama-bionluk": {
    projectType: "MENAR operatiepaneel",
    text: "Over het geheel was het goed werk.",
    dateLabel: "Klantbeoordeling",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR extra scope",
    text: "Dank u.",
    dateLabel: "Klantbeoordeling",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan vastgoedbeheersysteem",
    text: "Het proces werd flexibel, constructief en oplossingsgericht uitgevoerd ondanks technische beperkingen en architectuurwijzigingen.",
    dateLabel: "Klantbeoordeling",
  },
};

const testimonialTextZh: Record<string, Pick<TestimonialType, "projectType" | "text" | "dateLabel">> = {
  "okanersoy-bionluk": {
    projectType: "市场平台 XML 与集成工作",
    text: "细致且有能力的自由职业者，理解客户需求，工作有条理，并交付了有力结果。",
    dateLabel: "客户评价",
  },
  "sefayama-bionluk": {
    projectType: "MENAR 运营面板",
    text: "整体来说，这是一项不错的工作。",
    dateLabel: "客户评价",
  },
  "sefayama-menar-ek-kapsam": {
    projectType: "MENAR 追加范围",
    text: "谢谢。",
    dateLabel: "客户评价",
  },
  "htopbas-bionluk-mizan-mulk": {
    projectType: "Mizan 房产管理系统",
    text: "尽管存在技术限制和架构调整，整个过程仍以灵活、建设性且面向解决方案的方式推进。",
    dateLabel: "客户评价",
  },
};

const metaResult: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Completed client integration work with a 5-star review. XML source data was structured for multiple marketplaces with stock, price, duplicate control, batch tracking, and scheduled automation flows.",
  "mizan-mulk-yonetim-sistemi": "Two completed client work phases with a 5-star review. The project covered property operations, accrual flows, notification automations, and custom admin / user panel planning.",
  "menar-operasyon-paneli": "Two completed client work phases with a 5-star review. The work covered operation modelling, Power Platform structure, file center flows, tour package management, and exchange-rate scope planning.",
};

const metaResultDe: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Abgeschlossene Kundenintegration mit 5-Sterne-Bewertung. XML-Quelldaten wurden für mehrere Marktplätze mit Bestand, Preis, Dublettenprüfung, Batch-Verfolgung und geplanten Automatisierungsabläufen strukturiert.",
  "mizan-mulk-yonetim-sistemi": "Zwei abgeschlossene Kundenarbeitsphasen mit 5-Sterne-Bewertung. Der Umfang umfasste Immobilienoperationen, Abrechnungsabläufe, Benachrichtigungsautomatisierungen sowie individuelle Admin- und Nutzerpanel-Planung.",
  "menar-operasyon-paneli": "Zwei abgeschlossene Kundenarbeitsphasen mit 5-Sterne-Bewertung. Die Arbeit umfasste Operationsmodellierung, Power-Platform-Struktur, Dateicenter-Abläufe, Tourpaketverwaltung und Wechselkursumfang.",
};

const metaResultFr: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Travail d'intégration client terminé avec avis 5 étoiles. Les données source XML ont été structurées pour plusieurs marketplaces avec stock, prix, contrôle des doublons, suivi batch et automatisations planifiées.",
  "mizan-mulk-yonetim-sistemi": "Deux phases de travail client terminées avec avis 5 étoiles. Le projet a couvert les opérations immobilières, les flux d'échéance, les automatisations de notification et la planification de panneaux admin / utilisateur sur mesure.",
  "menar-operasyon-paneli": "Deux phases de travail client terminées avec avis 5 étoiles. Le travail a couvert la modélisation opérationnelle, la structure Power Platform, les flux de centre de fichiers, la gestion des forfaits de voyage et le périmètre lié aux taux de change.",
};

const metaResultEs: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Trabajo de integración de cliente completado con reseña de 5 estrellas. Los datos fuente XML se estructuraron para varios marketplaces con stock, precio, control de duplicados, seguimiento batch y automatizaciones programadas.",
  "mizan-mulk-yonetim-sistemi": "Dos fases de trabajo de cliente completadas con reseña de 5 estrellas. El proyecto cubrió operaciones inmobiliarias, flujos de devengo, automatizaciones de notificación y planificación de panel admin / usuario a medida.",
  "menar-operasyon-paneli": "Dos fases de trabajo de cliente completadas con reseña de 5 estrellas. El trabajo cubrió modelado operativo, estructura Power Platform, flujos de centro de archivos, gestión de paquetes turísticos y alcance de tipos de cambio.",
};

const metaResultAr: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "عمل تكامل عميل مكتمل مع تقييم 5 نجوم. تم تنظيم بيانات XML المصدر لعدة marketplaces مع مخزون وسعر وتحكم بالتكرار وتتبع batch وتدفقات أتمتة مجدولة.",
  "mizan-mulk-yonetim-sistemi": "مرحلتان مكتملتان من عمل عميل مع تقييم 5 نجوم. شمل المشروع عمليات العقارات وتدفقات الاستحقاق وأتمتة الإشعارات وتخطيط لوحات إدارة ومستخدم مخصصة.",
  "menar-operasyon-paneli": "مرحلتان مكتملتان من عمل عميل مع تقييم 5 نجوم. شمل العمل نمذجة العمليات وبنية Power Platform وتدفقات مركز الملفات وإدارة باقات الرحلات ونطاق أسعار الصرف.",
};

const metaResultRu: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Завершенная клиентская интеграция с 5-звездочным отзывом. XML-данные были структурированы для нескольких marketplaces с учетом склада, цены, duplicate control, batch tracking и scheduled automation flows.",
  "mizan-mulk-yonetim-sistemi": "Две завершенные фазы клиентской работы с 5-звездочным отзывом. Объем включал операции недвижимости, начисления, notification automations и планирование custom admin/user panels.",
  "menar-operasyon-paneli": "Две завершенные фазы клиентской работы с 5-звездочным отзывом. Работа охватила операционное моделирование, Power Platform structure, file center flows, управление tour packages и exchange rate scope.",
};

const metaResultPt: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Trabalho de integração de cliente concluído com avaliação de 5 estrelas. Os dados XML de origem foram estruturados para vários marketplaces com estoque, preço, controle de duplicados, acompanhamento batch e automações agendadas.",
  "mizan-mulk-yonetim-sistemi": "Duas fases de trabalho de cliente concluídas com avaliação de 5 estrelas. O projeto cobriu operações imobiliárias, fluxos de lançamento, automações de notificação e planejamento de painéis personalizados para admin e usuário.",
  "menar-operasyon-paneli": "Duas fases de trabalho de cliente concluídas com avaliação de 5 estrelas. O trabalho cobriu modelagem operacional, estrutura Power Platform, fluxos de central de arquivos, gestão de pacotes turísticos e escopo de câmbio.",
};

const metaResultIt: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Lavoro di integrazione cliente completato con recensione a 5 stelle. I dati sorgente XML sono stati strutturati per più marketplace con stock, prezzo, controllo duplicati, tracciamento batch e automazioni pianificate.",
  "mizan-mulk-yonetim-sistemi": "Due fasi di lavoro cliente completate con recensione a 5 stelle. Il progetto ha coperto operazioni immobiliari, flussi di maturazione, automazioni notifiche e pianificazione di pannelli admin / utente personalizzati.",
  "menar-operasyon-paneli": "Due fasi di lavoro cliente completate con recensione a 5 stelle. Il lavoro ha coperto modellazione operativa, struttura Power Platform, flussi centro file, gestione pacchetti turistici e ambito tassi di cambio.",
};

const metaResultNl: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "Afgerond klantintegratiewerk met 5-sterrenbeoordeling. XML-brongegevens zijn gestructureerd voor meerdere marketplaces met voorraad, prijs, duplicaatcontrole, batchopvolging en geplande automatiseringsstromen.",
  "mizan-mulk-yonetim-sistemi": "Twee afgeronde klantfasen met 5-sterrenbeoordeling. Het project omvatte vastgoedoperaties, betalingsstromen, notificatie-automatiseringen en planning van maatwerk admin- en gebruikerspanelen.",
  "menar-operasyon-paneli": "Twee afgeronde klantfasen met 5-sterrenbeoordeling. Het werk omvatte procesmodellering, Power Platform-structuur, bestandscentrumstromen, beheer van tourpakketten en wisselkoersscope.",
};

const metaResultZh: Record<string, string> = {
  "pazaryeri-xml-entegrasyonu": "已完成的客户集成工作，并获得 5 星评价。XML 源数据被整理为可服务多个市场平台的结构，覆盖库存、价格、重复控制、批次跟进和定时自动化流程。",
  "mizan-mulk-yonetim-sistemi": "两阶段已完成客户项目，并获得 5 星评价。项目覆盖房产运营、应收流程、通知自动化，以及定制管理端和用户端规划。",
  "menar-operasyon-paneli": "两阶段已完成客户项目，并获得 5 星评价。工作覆盖运营建模、Power Platform 结构、文件中心流程、旅游套餐管理和汇率范围规划。",
};

const englishFeatures = [
  "Clear workflow and role-based usage",
  "Admin-ready management screens",
  "Status, record, and request tracking",
  "Reporting view for daily decisions",
  "Responsive interface for desktop and mobile",
  "Supportable delivery scope",
];

const englishDelivery = [
  "Scope analysis and screen planning",
  "Interface and workflow implementation",
  "Admin or management structure",
  "Test content and sample records",
  "Deployment support and handover notes",
];

const germanFeatures = [
  "Klarer Workflow und rollenbasierte Nutzung",
  "Verwaltungsbereite Management-Screens",
  "Status-, Eintrags- und Anfrageverfolgung",
  "Reporting-Ansicht für tägliche Entscheidungen",
  "Responsive Oberfläche für Desktop und Mobil",
  "Supportfähiger Lieferumfang",
];

const germanDelivery = [
  "Umfangsanalyse und Screen-Planung",
  "Umsetzung von Oberfläche und Workflow",
  "Admin- oder Managementstruktur",
  "Testinhalte und Beispieldaten",
  "Deployment-Unterstützung und Übergabenotizen",
];

const frenchFeatures = [
  "Workflow clair et usage basé sur les rôles",
  "Écrans de gestion prêts pour l'administration",
  "Suivi des statuts, enregistrements et demandes",
  "Vue reporting pour les décisions quotidiennes",
  "Interface responsive pour desktop et mobile",
  "Périmètre de livraison maintenable",
];

const frenchDelivery = [
  "Analyse du périmètre et planification des écrans",
  "Implémentation de l'interface et du workflow",
  "Structure admin ou de gestion",
  "Contenu de test et exemples d'enregistrements",
  "Support de déploiement et notes de livraison",
];

const spanishFeatures = [
  "Flujo claro y uso basado en roles",
  "Pantallas de gestión listas para administración",
  "Seguimiento de estados, registros y solicitudes",
  "Vista de reportes para decisiones diarias",
  "Interfaz responsive para escritorio y móvil",
  "Alcance de entrega mantenible",
];

const spanishDelivery = [
  "Análisis de alcance y planificación de pantallas",
  "Implementación de interfaz y flujo de trabajo",
  "Estructura admin o de gestión",
  "Contenido de prueba y registros de ejemplo",
  "Soporte de despliegue y notas de entrega",
];

const arabicFeatures = [
  "تدفق عمل واضح واستخدام حسب الأدوار",
  "شاشات إدارة جاهزة",
  "تتبع الحالة والسجلات والطلبات",
  "عرض تقارير للقرارات اليومية",
  "واجهة متجاوبة للديسكتوب والجوال",
  "نطاق تسليم قابل للدعم",
];

const arabicDelivery = [
  "تحليل النطاق وتخطيط الشاشات",
  "تنفيذ الواجهة وسير العمل",
  "بنية إدارة أو لوحة تحكم",
  "محتوى اختبار وسجلات نموذجية",
  "دعم النشر وملاحظات التسليم",
];

const russianFeatures = [
  "Понятный workflow и role-based usage",
  "Управленческие экраны, готовые для администрирования",
  "Отслеживание статусов, записей и запросов",
  "Reporting view для ежедневных решений",
  "Responsive интерфейс для desktop и mobile",
  "Поддерживаемый delivery scope",
];

const russianDelivery = [
  "Анализ объема и планирование экранов",
  "Реализация интерфейса и workflow",
  "Админская или управленческая структура",
  "Тестовый контент и примерные записи",
  "Deployment support и handover notes",
];

const portugueseFeatures = [
  "Fluxo claro e uso baseado em papéis",
  "Telas de gestão prontas para administração",
  "Acompanhamento de status, registros e solicitações",
  "Visão de relatórios para decisões diárias",
  "Interface responsiva para desktop e mobile",
  "Escopo de entrega sustentável",
];

const portugueseDelivery = [
  "Análise de escopo e planejamento de telas",
  "Implementação de interface e fluxo de trabalho",
  "Estrutura administrativa ou de gestão",
  "Conteúdo de teste e registros de exemplo",
  "Suporte de publicação e notas de entrega",
];

const italianFeatures = [
  "Flusso chiaro e uso basato sui ruoli",
  "Schermate di gestione pronte per l'amministrazione",
  "Monitoraggio di stati, registri e richieste",
  "Vista report per decisioni quotidiane",
  "Interfaccia responsive per desktop e mobile",
  "Ambito di consegna mantenibile",
];

const italianDelivery = [
  "Analisi dell'ambito e pianificazione schermate",
  "Implementazione interfaccia e flusso di lavoro",
  "Struttura amministrativa o gestionale",
  "Contenuti di test e registri di esempio",
  "Supporto pubblicazione e note di consegna",
];

const dutchFeatures = [
  "Duidelijke workflow en rolgebaseerd gebruik",
  "Beheerschermen klaar voor administratie",
  "Status-, record- en aanvraagopvolging",
  "Rapportageweergave voor dagelijkse beslissingen",
  "Responsive interface voor desktop en mobiel",
  "Onderhoudbare opleverscope",
];

const dutchDelivery = [
  "Scopeanalyse en schermplanning",
  "Implementatie van interface en workflow",
  "Admin- of beheerstructuur",
  "Testinhoud en voorbeeldrecords",
  "Publicatiehulp en overdrachtsnotities",
];

const chineseFeatures = [
  "清晰流程与按角色使用",
  "可用于管理的后台界面",
  "状态、记录与请求跟进",
  "支持日常决策的报表视图",
  "适配桌面与移动端的响应式界面",
  "便于后续支持的交付范围",
];

const chineseDelivery = [
  "范围分析与页面规划",
  "界面与流程实现",
  "管理端或运营管理结构",
  "测试内容与示例记录",
  "上线支持与交接说明",
];

function localizeDemoAccounts(project: ProjectWithDemoAccounts, locale: Locale) {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return project.demoAccounts;

  const roleMap: Record<string, Partial<Record<Locale, string>>> = {
    "Kullanıcı": { en: "User", de: "Nutzer", fr: "Utilisateur", es: "Usuario", ar: "مستخدم", ru: "Пользователь", pt: "Usuário", it: "Utente", nl: "Gebruiker", zh: "用户" },
    "Müşteri": { en: "Customer", de: "Kunde", fr: "Client", es: "Cliente", ar: "عميل", ru: "Клиент", pt: "Cliente", it: "Cliente", nl: "Klant", zh: "客户" },
    "Moderatör": { en: "Moderator", de: "Moderator", fr: "Modérateur", es: "Moderador", ar: "مشرف", ru: "Модератор", pt: "Moderador", it: "Moderatore", nl: "Moderator", zh: "协管员" },
    "Yönetici": { en: "Admin", de: "Admin", fr: "Admin", es: "Administrador", ar: "مدير", ru: "Админ", pt: "Administrador", it: "Admin", nl: "Beheerder", zh: "管理员" },
  };
  const passwordMap: Record<string, Partial<Record<Locale, string>>> = {
    "Gerekmez": { en: "Not required", de: "Nicht erforderlich", fr: "Non requis", es: "No requerido", ar: "غير مطلوب", ru: "Не требуется", pt: "Não necessário", it: "Non richiesto", nl: "Niet nodig", zh: "无需密码" },
    "Giriş gerekmez": { en: "No login required", de: "Kein Login erforderlich", fr: "Connexion non requise", es: "No requiere inicio de sesión", ar: "لا يحتاج تسجيل دخول", ru: "Вход не требуется", pt: "Login não necessário", it: "Accesso non richiesto", nl: "Geen login nodig", zh: "无需登录" },
    "Yükleme akışını kullanın": { en: "Use the upload flow", de: "Upload-Ablauf verwenden", fr: "Utiliser le flux d'upload", es: "Usar el flujo de carga", ar: "استخدم تدفق الرفع", ru: "Используйте upload flow", pt: "Use o fluxo de upload", it: "Usa il flusso di caricamento", nl: "Gebruik de uploadflow", zh: "使用上传流程" },
    "Sepet akışını kullanın": { en: "Use the cart flow", de: "Warenkorb-Ablauf verwenden", fr: "Utiliser le flux panier", es: "Usar el flujo de carrito", ar: "استخدم تدفق السلة", ru: "Используйте cart flow", pt: "Use o fluxo de carrinho", it: "Usa il flusso carrello", nl: "Gebruik de winkelwagenflow", zh: "使用购物车流程" },
  };

  return project.demoAccounts?.map((account) => ({
    ...account,
    role: roleMap[account.role]?.[locale] ?? account.role,
    email: passwordMap[account.email]?.[locale] ?? account.email,
    password: passwordMap[account.password]?.[locale] ?? account.password,
  }));
}

export function getLocalizedProject(project: ProjectType, locale: Locale): ProjectType {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return project;

  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";
  const title = (isGerman ? titleMapDe : isFrench ? titleMapFr : isSpanish ? titleMapEs : isArabic ? titleMapAr : isRussian ? titleMapRu : isPortuguese ? titleMapPt : isItalian ? titleMapIt : isDutch ? titleMapNl : isChinese ? titleMapZh : titleMap)[project.slug] ?? project.title;
  const category = (isGerman ? categoryMapDe : isFrench ? categoryMapFr : isSpanish ? categoryMapEs : isArabic ? categoryMapAr : isRussian ? categoryMapRu : isPortuguese ? categoryMapPt : isItalian ? categoryMapIt : isDutch ? categoryMapNl : isChinese ? categoryMapZh : categoryMap)[project.category] ?? (isGerman ? "Individuelle Software" : isFrench ? "Logiciel sur mesure" : isSpanish ? "Software a medida" : isArabic ? "برمجية مخصصة" : isRussian ? "Индивидуальная разработка" : isPortuguese ? "Software sob medida" : isItalian ? "Software su misura" : isDutch ? "Software op maat" : isChinese ? "定制软件" : "Custom Software");
  const isClient = getProjectMeta(project.slug).projectKind === "client";
  const localizedDemoAccounts = localizeDemoAccounts(project as ProjectWithDemoAccounts, locale);

  return {
    ...project,
    title,
    category,
    shortDesc: isGerman
      ? isClient
        ? `${title} ist ein abgeschlossener Kundenarbeitsnachweis. Die Seite erklärt Bedarf, Umfang, Ergebnis und Bewertungskontext, ohne private Kundendetails offenzulegen.`
        : `${title} zeigt, wie ein ${category.toLowerCase()} als anpassbares Live-Beispiel für ähnliche Geschäftsanforderungen strukturiert werden kann.`
      : isFrench
        ? isClient
          ? `${title} est un enregistrement de travail client terminé. La page explique le besoin métier, le périmètre, le résultat et le contexte d'avis sans exposer les détails privés du client.`
          : `${title} montre comment un ${category.toLowerCase()} peut être structuré comme exemple live adaptable pour des besoins métier similaires.`
        : isSpanish
          ? isClient
            ? `${title} es un registro de trabajo de cliente completado. La página explica la necesidad, el alcance, el resultado y el contexto de la reseña sin exponer detalles privados del cliente.`
            : `${title} muestra cómo un ${category.toLowerCase()} puede estructurarse como ejemplo en vivo adaptable para necesidades empresariales similares.`
          : isArabic
            ? isClient
              ? `${title} هو سجل عمل عميل مكتمل. تشرح الصفحة حاجة العمل والنطاق والنتيجة وسياق التقييم دون كشف تفاصيل العميل الخاصة.`
              : `${title} يوضح كيف يمكن تنظيم ${category} كمثال حي قابل للتكييف لاحتياجات أعمال مشابهة.`
            : isRussian
              ? isClient
                ? `${title} — запись завершенной клиентской работы. Страница объясняет бизнес-потребность, объем, результат и контекст отзыва без раскрытия приватных деталей клиента.`
                : `${title} показывает, как ${category.toLowerCase()} может быть структурирован как адаптируемый live example для похожих бизнес-потребностей.`
              : isPortuguese
                ? isClient
                  ? `${title} é um registro de trabalho de cliente concluído. A página explica a necessidade do negócio, o escopo, o resultado e o contexto da avaliação sem expor detalhes privados do cliente.`
                  : `${title} mostra como um ${category.toLowerCase()} pode ser estruturado como exemplo ao vivo adaptável para necessidades empresariais semelhantes.`
                : isItalian
                  ? isClient
                    ? `${title} è una scheda di lavoro cliente completato. La pagina spiega bisogno aziendale, ambito, risultato e contesto della recensione senza esporre dettagli privati del cliente.`
                    : `${title} mostra come un ${category.toLowerCase()} può essere strutturato come esempio live adattabile per esigenze aziendali simili.`
                  : isDutch
                    ? isClient
                      ? `${title} is een afgerond klantproject. De pagina legt behoefte, scope, resultaat en beoordelingscontext uit zonder private klantdetails te tonen.`
                      : `${title} laat zien hoe een ${category.toLowerCase()} als aanpasbaar live voorbeeld voor vergelijkbare bedrijfsbehoeften kan worden ingericht.`
                    : isChinese
                      ? isClient
                        ? `${title} 是已完成客户项目记录。本页说明业务需求、范围、结果和评价背景，同时不公开客户隐私细节。`
                        : `${title} 展示了如何把${category}整理成可定制的在线示例，用于相似业务需求。`
                : isClient
                  ? `${title} is a completed client work record. The page explains the business need, scope, result, and review context without exposing private customer details.`
                  : `${title} shows how a ${category.toLowerCase()} can be structured as an adaptable live example for similar business needs.`,
    problem: isGerman
      ? "Manuelle Nachverfolgung, verstreute Dateien, unklare Zuständigkeiten und getrennte Datenflüsse machen den Prozess schwer kontrollierbar und schwer skalierbar."
      : isFrench
        ? "Le suivi manuel, les fichiers dispersés, les responsabilités floues et les flux de données séparés rendent le processus difficile à contrôler et à faire évoluer."
        : isSpanish
          ? "El seguimiento manual, los archivos dispersos, las responsabilidades poco claras y los flujos de datos desconectados hacen que el proceso sea difícil de controlar y escalar."
          : isArabic
            ? "التتبع اليدوي والملفات المتفرقة والمسؤوليات غير الواضحة وتدفقات البيانات المنفصلة تجعل العملية صعبة المتابعة والتوسع."
            : isRussian
              ? "Ручное отслеживание, разрозненные файлы, неясные ответственности и disconnected data flows делают процесс сложным для контроля и масштабирования."
              : isPortuguese
                ? "Acompanhamento manual, arquivos dispersos, responsabilidades pouco claras e fluxos de dados desconectados tornam o processo difícil de monitorar e escalar."
                : isItalian
                  ? "Monitoraggio manuale, file dispersi, responsabilità poco chiare e flussi dati scollegati rendono il processo difficile da controllare e scalare."
                  : isDutch
                    ? "Handmatige opvolging, verspreide bestanden, onduidelijke verantwoordelijkheden en losse datastromen maken het proces moeilijk te controleren en op te schalen."
                    : isChinese
                      ? "手动跟进、分散文件、职责不清和断开的数据流会让流程难以监控，也难以扩展。"
                : "Manual tracking, scattered files, unclear responsibilities, and disconnected data flows make the process hard to monitor and scale.",
    solution: isGerman
      ? "Das System organisiert Einträge, Screens, Status, Workflows und Reporting in einer klaren Struktur, die an das Geschäftsmodell angepasst werden kann."
      : isFrench
        ? "Le système organise les enregistrements, écrans, statuts, workflows et rapports dans une structure claire adaptable au modèle métier."
        : isSpanish
          ? "El sistema organiza registros, pantallas, estados, flujos y reportes dentro de una estructura clara que puede adaptarse al modelo de negocio."
          : isArabic
            ? "ينظم النظام السجلات والشاشات والحالات وسير العمل والتقارير داخل بنية واضحة يمكن تكييفها مع نموذج العمل."
            : isRussian
              ? "Система организует записи, экраны, статусы, workflows и reporting в понятную структуру, которую можно адаптировать под бизнес-модель."
              : isPortuguese
                ? "O sistema organiza registros, telas, status, fluxos de trabalho e relatórios em uma estrutura clara que pode ser adaptada ao modelo de negócio."
                : isItalian
                  ? "Il sistema organizza registri, schermate, stati, flussi di lavoro e report in una struttura chiara che può essere adattata al modello aziendale."
                  : isDutch
                    ? "Het systeem organiseert records, schermen, statussen, workflows en rapportage in een duidelijke structuur die aan het bedrijfsmodel kan worden aangepast."
                    : isChinese
                      ? "系统会把记录、页面、状态、流程和报表整理到清晰结构中，并可按照业务模式调整。"
                : "The system organizes records, screens, statuses, workflows, and reporting into a clear structure that can be adapted to the business model.",
    features: isGerman ? germanFeatures : isFrench ? frenchFeatures : isSpanish ? spanishFeatures : isArabic ? arabicFeatures : isRussian ? russianFeatures : isPortuguese ? portugueseFeatures : isItalian ? italianFeatures : isDutch ? dutchFeatures : isChinese ? chineseFeatures : englishFeatures,
    database: isGerman ? "Strukturierte Datenbank / projektspezifisches Datenmodell" : isFrench ? "Base de données structurée / modèle de données propre au projet" : isSpanish ? "Base de datos estructurada / modelo de datos propio del proyecto" : isArabic ? "قاعدة بيانات منظمة / نموذج بيانات خاص بالمشروع" : isRussian ? "Структурированная база данных / проектная модель данных" : isPortuguese ? "Banco de dados estruturado / modelo de dados específico do projeto" : isItalian ? "Database strutturato / modello dati specifico del progetto" : isDutch ? "Gestructureerde database / projectspecifiek datamodel" : isChinese ? "结构化数据库 / 项目专属数据模型" : "Structured database / project-specific data model",
    deployment: isGerman ? "Web-Deployment mit Review, Übergabe und Supportablauf" : isFrench ? "Déploiement web avec revue, livraison et flux de support" : isSpanish ? "Despliegue web con revisión, entrega y flujo de soporte" : isArabic ? "نشر ويب مع مراجعة وتسليم وتدفق دعم" : isRussian ? "Web deployment с review, handover и support flow" : isPortuguese ? "Publicação web com revisão, entrega e fluxo de suporte" : isItalian ? "Pubblicazione web con revisione, consegna e flusso di supporto" : isDutch ? "Webpublicatie met review, overdracht en supportflow" : isChinese ? "带检查、交接和支持流程的 Web 上线" : "Web deployment with review, handover, and support flow",
    deliveryScope: isGerman ? germanDelivery : isFrench ? frenchDelivery : isSpanish ? spanishDelivery : isArabic ? arabicDelivery : isRussian ? russianDelivery : isPortuguese ? portugueseDelivery : isItalian ? italianDelivery : isDutch ? dutchDelivery : isChinese ? chineseDelivery : englishDelivery,
    ...(localizedDemoAccounts ? { demoAccounts: localizedDemoAccounts } : {}),
    metrics: project.metrics?.map((metric, index) => ({
      value: metric.value,
      label: (isGerman ? ["Umfangspunkt", "Workflow-Screen", "Verfolgungsfeld", "Bewertungspunkt"] : isFrench ? ["Point de périmètre", "Écran de workflow", "Champ de suivi", "Point d'avis"] : isSpanish ? ["Punto de alcance", "Pantalla de flujo", "Campo de seguimiento", "Punto de reseña"] : isArabic ? ["عنصر نطاق", "شاشة سير عمل", "حقل تتبع", "نقطة تقييم"] : isRussian ? ["Элемент объема", "Workflow screen", "Поле отслеживания", "Пункт отзыва"] : isPortuguese ? ["Item de escopo", "Tela de fluxo", "Campo de acompanhamento", "Ponto de avaliação"] : isItalian ? ["Elemento di ambito", "Schermata flusso", "Campo monitoraggio", "Punto recensione"] : isDutch ? ["Scopepunt", "Workflowscherm", "Opvolgveld", "Beoordelingspunt"] : isChinese ? ["范围项", "流程页面", "跟进字段", "评价点"] : ["Scope item", "Workflow screen", "Tracking field", "Review point"])[index] ?? (isGerman ? "Projektkennzahl" : isFrench ? "Indicateur projet" : isSpanish ? "Indicador del proyecto" : isArabic ? "مؤشر مشروع" : isRussian ? "Метрика проекта" : isPortuguese ? "Métrica do projeto" : isItalian ? "Metrica progetto" : isDutch ? "Projectmetriek" : isChinese ? "项目指标" : "Project metric"),
    })),
    screenshots: project.screenshots?.map((screenshot, index) => ({
      ...screenshot,
      alt: isGerman ? `${title} Screenshot ${index + 1}` : isFrench ? `${title} capture ${index + 1}` : isSpanish ? `${title} captura ${index + 1}` : isArabic ? `${title} لقطة شاشة ${index + 1}` : isRussian ? `${title} скриншот ${index + 1}` : isPortuguese ? `${title} captura ${index + 1}` : isItalian ? `${title} schermata ${index + 1}` : isDutch ? `${title} schermafbeelding ${index + 1}` : isChinese ? `${title} 截图 ${index + 1}` : `${title} screenshot ${index + 1}`,
      altTr: undefined,
      caption: isFrench ? `Écran ${index + 1}` : isSpanish ? `Pantalla ${index + 1}` : isArabic ? `شاشة ${index + 1}` : isRussian ? `Экран ${index + 1}` : isPortuguese ? `Tela ${index + 1}` : isItalian ? `Schermata ${index + 1}` : isDutch ? `Scherm ${index + 1}` : isChinese ? `页面 ${index + 1}` : `Screen ${index + 1}`,
    })),
    caseStudies: project.caseStudies?.map((caseStudy, index) => ({
      title: isGerman
        ? isClient ? `Abgeschlossene Arbeitsphase ${index + 1}` : `Anpassbarer Anwendungsfall ${index + 1}`
        : isFrench ? isClient ? `Phase de travail terminée ${index + 1}` : `Cas d'usage adaptable ${index + 1}`
        : isSpanish ? isClient ? `Fase de trabajo completada ${index + 1}` : `Caso de uso adaptable ${index + 1}`
        : isArabic ? isClient ? `مرحلة عمل مكتملة ${index + 1}` : `حالة استخدام قابلة للتكييف ${index + 1}`
        : isRussian ? isClient ? `Завершенная рабочая фаза ${index + 1}` : `Адаптируемый use case ${index + 1}`
        : isPortuguese ? isClient ? `Fase de trabalho concluída ${index + 1}` : `Caso de uso adaptável ${index + 1}`
        : isItalian ? isClient ? `Fase di lavoro completata ${index + 1}` : `Caso d'uso adattabile ${index + 1}`
        : isDutch ? isClient ? `Afgeronde werkfase ${index + 1}` : `Aanpasbare use case ${index + 1}`
        : isChinese ? isClient ? `已完成工作阶段 ${index + 1}` : `可定制使用场景 ${index + 1}`
        : isClient ? `Completed Work Phase ${index + 1}` : `Adaptable Use Case ${index + 1}`,
      summary: isGerman
        ? "Dieser Abschnitt fasst den Geschäftskontext, die geplante Struktur und die Art von Ergebnis zusammen, die ein ähnliches Projekt liefern kann."
        : isFrench
          ? "Cette section résume le contexte métier, la structure planifiée et le type de résultat qu'un projet similaire peut livrer."
          : isSpanish
            ? "Esta sección resume el contexto de negocio, la estructura planificada y el tipo de resultado que puede entregar un proyecto similar."
            : isArabic
              ? "يلخص هذا القسم سياق العمل والبنية المخططة ونوع النتيجة التي يمكن أن يقدمها مشروع مشابه."
              : isRussian
                ? "Этот раздел кратко описывает бизнес-контекст, планируемую структуру и тип результата, который может дать похожий проект."
                : isPortuguese
                  ? "Esta seção resume o contexto do negócio, a estrutura planejada e o tipo de resultado que um projeto semelhante pode entregar."
                  : isItalian
                    ? "Questa sezione riassume il contesto aziendale, la struttura pianificata e il tipo di risultato che un progetto simile può consegnare."
                    : isDutch
                      ? "Deze sectie vat de bedrijfscontext, de geplande structuur en het type resultaat samen dat een vergelijkbaar project kan opleveren."
                      : isChinese
                        ? "本节概述业务背景、规划结构，以及相似项目可以交付的结果类型。"
                  : "This section summarizes the business context, the planned structure, and the kind of result a similar project can deliver.",
      sections: caseStudy.sections.map((_, sectionIndex) => ({
        title: (isGerman ? ["Bedarf und Umfang", "Systemstruktur", "Lieferansatz"] : isFrench ? ["Besoin et périmètre", "Structure système", "Approche de livraison"] : isSpanish ? ["Necesidad y alcance", "Estructura del sistema", "Enfoque de entrega"] : isArabic ? ["الحاجة والنطاق", "بنية النظام", "أسلوب التسليم"] : isRussian ? ["Потребность и объем", "Структура системы", "Подход к delivery"] : isPortuguese ? ["Necessidade e escopo", "Estrutura do sistema", "Abordagem de entrega"] : isItalian ? ["Bisogno e ambito", "Struttura del sistema", "Approccio di consegna"] : isDutch ? ["Behoefte en scope", "Systeemstructuur", "Opleveraanpak"] : isChinese ? ["需求与范围", "系统结构", "交付方式"] : ["Need and Scope", "System Structure", "Delivery Approach"])[sectionIndex] ?? (isGerman ? "Umsetzungsdetail" : isFrench ? "Détail d'implémentation" : isSpanish ? "Detalle de implementación" : isArabic ? "تفصيل التنفيذ" : isRussian ? "Деталь реализации" : isPortuguese ? "Detalhe de implementação" : isItalian ? "Dettaglio implementazione" : isDutch ? "Implementatiedetail" : isChinese ? "实现细节" : "Implementation Detail"),
        body: isGerman
          ? [
            "Die Arbeit wird um den realen operativen Bedarf herum geplant, nicht als generische Vorlage.",
            "Screens, Einträge, Rollen und Reporting werden so organisiert, dass das Team das System im Tagesbetrieb nutzen kann.",
          ]
          : isFrench
            ? [
              "Le travail est cadré autour du vrai besoin opérationnel, pas comme un modèle générique.",
              "Les écrans, enregistrements, rôles et rapports sont organisés pour que l'équipe puisse utiliser le système au quotidien.",
            ]
            : isSpanish
              ? [
                "El trabajo se define alrededor de la necesidad operativa real, no como una plantilla genérica.",
                "Las pantallas, registros, roles y reportes se organizan para que el equipo pueda usar el sistema en el trabajo diario.",
              ]
              : isArabic
                ? [
                  "يتم تأطير العمل حول الحاجة التشغيلية الحقيقية بدلا من قالب عام.",
                  "يتم تنظيم الشاشات والسجلات والأدوار والتقارير حتى يستطيع الفريق استخدام النظام في العمل اليومي.",
                ]
                : isRussian
                  ? [
                    "Работа строится вокруг реальной операционной потребности, а не вокруг generic template.",
                    "Экраны, записи, роли и отчеты организуются так, чтобы команда могла использовать систему в ежедневной работе.",
                  ]
                  : isPortuguese
                    ? [
                      "O trabalho é definido em torno da necessidade operacional real, não como um modelo genérico.",
                      "Telas, registros, papéis e relatórios são organizados para que a equipe possa usar o sistema no dia a dia.",
                    ]
                    : isItalian
                      ? [
                        "Il lavoro viene definito intorno al bisogno operativo reale, non come modello generico.",
                        "Schermate, registri, ruoli e report vengono organizzati affinché il team possa usare il sistema nel lavoro quotidiano.",
                      ]
                      : isDutch
                        ? [
                          "Het werk wordt ingericht rond de echte operationele behoefte, niet als algemene template.",
                          "Schermen, records, rollen en rapportage worden zo georganiseerd dat het team het systeem dagelijks kan gebruiken.",
                        ]
                      : isChinese
                        ? [
                          "工作会围绕真实运营需求来规划，而不是套用通用模板。",
                          "页面、记录、角色和报表会被组织成团队日常可使用的结构。",
                        ]
                    : [
                      "The work is framed around the real operational need instead of a generic template.",
                      "Screens, records, roles, and reporting are organized so the team can use the system in daily operations.",
                    ],
        bullets: isGerman
          ? ["Klares Datenmodell", "Steuerbarer Screen-Ablauf", "Prüfbarer Lieferumfang"]
          : isFrench
            ? ["Modèle de données clair", "Flux d'écrans maîtrisable", "Périmètre de livraison vérifiable"]
            : isSpanish
              ? ["Modelo de datos claro", "Flujo de pantallas gestionable", "Alcance de entrega verificable"]
              : isArabic
              ? ["نموذج بيانات واضح", "تدفق شاشات قابل للإدارة", "نطاق تسليم قابل للمراجعة"]
              : isRussian
                ? ["Понятная data model", "Управляемый screen flow", "Проверяемый delivery scope"]
                : isPortuguese
                  ? ["Modelo de dados claro", "Fluxo de telas gerenciável", "Escopo de entrega revisável"]
                  : isItalian
                    ? ["Modello dati chiaro", "Flusso schermate gestibile", "Ambito di consegna verificabile"]
                  : isDutch
                    ? ["Duidelijk datamodel", "Beheersbare schermflow", "Controleerbare opleverscope"]
                    : isChinese
                      ? ["清晰数据模型", "可管理页面流程", "可检查交付范围"]
                  : ["Clear data model", "Manageable screen flow", "Reviewable delivery scope"],
      })),
      outcomes: isGerman
        ? ["Klarere Betriebsstruktur", "Besser nachverfolgbarer Workflow", "Wartbare Grundlage für spätere Verbesserungen"]
        : isFrench
          ? ["Structure opérationnelle plus claire", "Workflow plus facile à suivre", "Base maintenable pour les améliorations futures"]
          : isSpanish
            ? ["Estructura operativa más clara", "Flujo de trabajo más fácil de seguir", "Base mantenible para mejoras futuras"]
            : isArabic
            ? ["بنية تشغيلية أوضح", "سير عمل أسهل في التتبع", "أساس قابل للصيانة لتحسينات لاحقة"]
            : isRussian
              ? ["Более понятная операционная структура", "Более отслеживаемый workflow", "Поддерживаемая основа для будущих улучшений"]
              : isPortuguese
                ? ["Estrutura operacional mais clara", "Fluxo de trabalho mais fácil de acompanhar", "Base sustentável para melhorias futuras"]
                : isItalian
                  ? ["Struttura operativa più chiara", "Flusso di lavoro più tracciabile", "Base mantenibile per miglioramenti futuri"]
                  : isDutch
                    ? ["Duidelijkere operationele structuur", "Beter opvolgbare workflow", "Onderhoudbare basis voor latere verbeteringen"]
                    : isChinese
                      ? ["更清晰的运营结构", "更容易跟进的流程", "便于后续改进的可维护基础"]
                : ["A clearer operating structure", "A more trackable workflow", "A maintainable foundation for future improvements"],
    })),
  };
}

export function getLocalizedProjects(projects: ProjectType[], locale: Locale): ProjectType[] {
  return projects.map((project) => getLocalizedProject(project, locale));
}

export function getLocalizedProjectBySlug(slug: string, locale: Locale) {
  const project = projectsData.find((item) => item.slug === slug);
  return project ? getLocalizedProject(project, locale) : undefined;
}

export function getLocalizedProjectMeta(slug: string, locale: Locale): ProjectMeta {
  const meta = getProjectMeta(slug);
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return meta;
  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";

  return {
    ...meta,
    clientDisplayName: meta.clientDisplayName === "Anonim müşteri"
      ? isGerman ? "Anonymer Kunde" : isFrench ? "Client anonyme" : isSpanish ? "Cliente anónimo" : isArabic ? "عميل مجهول" : isRussian ? "Анонимный клиент" : isPortuguese ? "Cliente anônimo" : isItalian ? "Cliente anonimo" : isDutch ? "Anonieme klant" : isChinese ? "匿名客户" : "Anonymous client"
      : meta.clientDisplayName?.replace("Mülk", "Mulk"),
    result: (isGerman ? metaResultDe : isFrench ? metaResultFr : isSpanish ? metaResultEs : isArabic ? metaResultAr : isRussian ? metaResultRu : isPortuguese ? metaResultPt : isItalian ? metaResultIt : isDutch ? metaResultNl : isChinese ? metaResultZh : metaResult)[slug] ?? (isRussian ? "Завершенная работа с понятным объемом, результатом и customer review context." : isPortuguese ? "Trabalho concluído com escopo, resultado e contexto de avaliação claros." : isItalian ? "Lavoro completato con ambito, risultato e contesto recensione chiari." : isDutch ? "Afgerond werk met duidelijke scope, resultaat en beoordelingscontext." : isChinese ? "已完成工作，具备清晰范围、结果和评价背景。" : meta.result),
  };
}

export function getLocalizedTestimonials(locale: Locale): TestimonialType[] {
  if (locale !== "en" && locale !== "de" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return testimonials;
  const dictionary = locale === "de" ? testimonialTextDe : locale === "fr" ? testimonialTextFr : locale === "es" ? testimonialTextEs : locale === "ar" ? testimonialTextAr : locale === "ru" ? testimonialTextRu : locale === "pt" ? testimonialTextPt : locale === "it" ? testimonialTextIt : locale === "nl" ? testimonialTextNl : locale === "zh" ? testimonialTextZh : testimonialText;

  return testimonials.map((testimonial) => ({
    ...testimonial,
    ...(dictionary[testimonial.slug] ?? {}),
  }));
}

export function getLocalizedTestimonial(slug: string | undefined, locale: Locale) {
  if (!slug) return undefined;
  return getLocalizedTestimonials(locale).find((testimonial) => testimonial.slug === slug);
}
