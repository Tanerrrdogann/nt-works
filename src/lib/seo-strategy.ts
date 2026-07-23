import { getArabicStaticSeo } from "@/data/i18n/seo-ar";
import { getGermanStaticSeo } from "@/data/i18n/seo-de";
import { getEnglishStaticSeo } from "@/data/i18n/seo-en";
import { getSpanishStaticSeo } from "@/data/i18n/seo-es";
import { getFrenchStaticSeo } from "@/data/i18n/seo-fr";
import { getItalianStaticSeo } from "@/data/i18n/seo-it";
import { getDutchStaticSeo } from "@/data/i18n/seo-nl";
import { getPortugueseStaticSeo } from "@/data/i18n/seo-pt";
import { getRussianStaticSeo } from "@/data/i18n/seo-ru";
import { getChineseStaticSeo } from "@/data/i18n/seo-zh";
import { getTrustPage } from "@/data/trust-pages";
import type { Locale } from "@/lib/i18n";
export { getProjectPresentationStatus, getProjectSeoCopy } from "@/lib/project-presentation";

export type SeoRouteType =
  | "static"
  | "service"
  | "landing"
  | "project"
  | "blog"
  | "blog-category"
  | "blog-tag"
  | "city";

export type SeoSearchIntent =
  | "navigational"
  | "informational"
  | "commercial"
  | "transactional"
  | "local";

export type SeoFunnelStage = "awareness" | "consideration" | "decision" | "retention";

export type SeoRouteProfile = {
  routeType: SeoRouteType;
  searchIntent: SeoSearchIntent;
  funnelStage: SeoFunnelStage;
  commercial: boolean;
};

export type SeoCopy = {
  title: string;
  description: string;
};

const staticSeoOverrides: Partial<Record<Locale, Record<string, Partial<SeoCopy>>>> = {
  tr: {
    "/maintenance-packages": {
      description:
        "Web sitesi, admin panel ve özel yazılım projeleri için güncelleme, güvenlik, yedekleme, performans ve geliştirme odaklı bakım paketleri.",
    },
    "/support": {
      description:
        "Teslim sonrası hata düzeltme, kullanım desteği, içerik güncelleme, bakım ve yeni geliştirme taleplerinin nasıl yönetildiğini inceleyin.",
    },
    "/scope-pricing": {
      description:
        "Web sitesi ve özel yazılım projelerinde kapsam, modül, entegrasyon, teslim süresi ve destek ihtiyaçlarının fiyatı nasıl belirlediğini öğrenin.",
    },
    "/work-process": {
      description:
        "İhtiyacın anlaşılmasından kapsam, geliştirme, canlı önizleme, teslim ve destek aşamalarına kadar çalışma sürecimizi inceleyin.",
    },
  },
  fr: {
    "/kvkk": {
      description:
        "Informations sur les données personnelles, les formulaires, les contenus client, l’infrastructure technique et les contrôles juridiques requis.",
    },
  },
};

const landingSeoTitleOverrides: Partial<Record<Locale, Record<string, string>>> = {
  tr: {
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Etkinlik Bilet ve Katılım Sistemi",
  },
  en: {
    "dernek-vakiflar-icin-uye-takip-sistemi": "Association Member Management System",
  },
  de: {
    "sitemap-robots-canonical-noindex-kontrolu": "Sitemap, Canonical und Noindex prüfen",
    "kasap-manav-sarkuteri-siparis-sistemi": "Bestellsystem für Metzgerei und Feinkost",
    "spor-salonlari-icin-uyelik-randevu-sistemi": "Mitglieder- und Terminsystem für Fitnessstudios",
    "dernek-vakiflar-icin-uye-takip-sistemi": "Mitgliederverwaltung für Vereine",
  },
  fr: {
    "kasap-manav-sarkuteri-siparis-sistemi": "Commande pour boucherie et épicerie",
    "ureticiler-icin-siparis-uretim-takip-sistemi": "Suivi commandes et production fabricant",
    "spor-salonlari-icin-uyelik-randevu-sistemi": "Abonnements et rendez-vous pour salles de sport",
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Billetterie et gestion des participants",
    "dernek-vakiflar-icin-uye-takip-sistemi": "Gestion des membres associatifs",
    "hukuk-burolari-icin-dosya-takip-paneli": "Suivi de dossiers pour cabinets d’avocats",
  },
  es: {
    "kasap-manav-sarkuteri-siparis-sistemi": "Pedidos para carnicerías y tiendas gourmet",
    "hizmet-verenler-icin-talep-teklif-platformu": "Plataforma de solicitudes y propuestas",
    "kurslar-icin-kayit-ogrenci-takip-sistemi": "Matrícula y seguimiento de alumnos",
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Entradas y gestión de participantes",
    "oto-galeriler-icin-arac-ilan-sistemi": "Anuncios de vehículos para concesionarios",
    "dernek-vakiflar-icin-uye-takip-sistemi": "Gestión de miembros para asociaciones",
    "muhasebe-mali-musavir-musteri-paneli": "Portal para contables y asesores fiscales",
    "hukuk-burolari-icin-dosya-takip-paneli": "Seguimiento de expedientes legales",
    "restoran-qr-menu-whatsapp-siparis": "Menú QR y pedidos WhatsApp para restaurantes",
    "otel-rezervasyon-oda-takip-sistemi": "Reservas y gestión de habitaciones de hotel",
    "teknik-servis-is-takip-paneli": "Panel de trabajos para servicio técnico",
  },
  ru: {
    "ureticiler-icin-siparis-uretim-takip-sistemi": "Заказы и производство для изготовителей",
    "hizmet-verenler-icin-talep-teklif-platformu": "Платформа заявок и предложений",
    "muhasebe-mali-musavir-musteri-paneli": "Клиентский портал для бухгалтерии",
  },
  pt: {
    "sitemap-robots-canonical-noindex-kontrolu": "Auditoria de sitemap, canonical e noindex",
    "kasap-manav-sarkuteri-siparis-sistemi": "Pedidos para açougues e delicatessens",
    "pazaryeri-saticilari-icin-entegrasyon-sistemi": "Integração para vendedores de marketplace",
    "ureticiler-icin-siparis-uretim-takip-sistemi": "Pedidos e produção para fabricantes",
    "hizmet-verenler-icin-talep-teklif-platformu": "Plataforma de pedidos e propostas",
    "kurslar-icin-kayit-ogrenci-takip-sistemi": "Matrícula e acompanhamento de alunos",
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Ingressos e gestão de participantes",
    "oto-galeriler-icin-arac-ilan-sistemi": "Anúncios de veículos para concessionárias",
    "dernek-vakiflar-icin-uye-takip-sistemi": "Gestão de membros de associações",
    "hukuk-burolari-icin-dosya-takip-paneli": "Gestão de processos para escritórios jurídicos",
    "restoran-qr-menu-whatsapp-siparis": "Menu QR e pedidos WhatsApp para restaurantes",
    "otel-rezervasyon-oda-takip-sistemi": "Reservas e gestão de quartos de hotel",
  },
  it: {
    "hizmet-verenler-icin-talep-teklif-platformu": "Piattaforma richieste e preventivi",
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Biglietti e gestione partecipanti",
    "dernek-vakiflar-icin-uye-takip-sistemi": "Gestione membri per associazioni",
  },
  nl: {
    "sitemap-robots-canonical-noindex-kontrolu": "Sitemap, canonical en noindex controleren",
    "kasap-manav-sarkuteri-siparis-sistemi": "Bestelsysteem voor slager en delicatessen",
    "spor-salonlari-icin-uyelik-randevu-sistemi": "Leden- en afsprakensysteem voor sportscholen",
    "organizasyon-firmalari-icin-bilet-katilim-sistemi": "Tickets en deelnemersbeheer voor evenementen",
    "muhasebe-mali-musavir-musteri-paneli": "Klantportaal voor accountants",
  },
};

const primaryStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Web Sitesi, E-Ticaret ve Özel Yazılım",
    description:
      "İşletmeler için kurumsal web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım çözümleri planlayıp geliştiriyoruz.",
  },
  "/about": {
    title: "Hakkımızda",
    description:
      "NT Web Çözümleri, işletmelerin web sitesi ve özel yazılım ihtiyaçlarını canlı örneklerle netleştiren geliştirme ekibidir.",
  },
  "/blog": {
    title: "Blog ve Bilgi Merkezi",
    description:
      "Web sitesi, admin panel, e-ticaret, katalog, randevu, entegrasyon, özel yazılım ve AI otomasyon projeleri için kapsam netleştiren rehberler.",
  },
  "/contact": {
    title: "İletişim ve Teklif Al",
    description:
      "Web sitesi, e-ticaret, admin panel, randevu sistemi ve özel yazılım projeniz için NT Web Çözümleri ile iletişime geçin.",
  },
  "/portfolio": {
    title: "Portföy ve Tamamlanan İşler",
    description:
      "NT Web Çözümleri tarafından tamamlanan gerçek müşteri işleri, müşteri yorumları ve detaylı proje portföyleri.",
  },
  "/projects": {
    title: "Canlı Örnekler",
    description:
      "Canlı inceleyebileceğiniz uyarlanabilir web sitesi, e-ticaret, admin panel, randevu ve özel yazılım örnekleri.",
  },
  "/services": {
    title: "Hizmetler",
    description:
      "Web sitesi, katalog, sipariş, admin panel, CRM, randevu, entegrasyon, özel yazılım, AI otomasyon, mobil/webview ve bakım hizmetleri.",
  },
};

const trustPathToSlug: Record<string, string> = {
  "/maintenance-packages": "maintenance-packages",
  "/privacy": "privacy",
  "/kvkk": "kvkk",
  "/cookies": "cookies",
  "/terms": "terms",
  "/support": "support",
  "/scope-pricing": "scope-pricing",
  "/work-process": "work-process",
  "/safe-bionluk": "safe-bionluk",
  "/faq": "faq",
};

export const staticSeoPaths = [
  "/",
  "/services",
  "/projects",
  "/portfolio",
  "/blog",
  "/about",
  "/contact",
  ...Object.keys(trustPathToSlug),
];

export function getStaticSeoCopy(
  path: string,
  locale: Locale,
  fallback?: SeoCopy,
): SeoCopy {
  const primaryFallback = primaryStaticSeo[path] ?? fallback;
  const trustSlug = trustPathToSlug[path];
  let copy: SeoCopy;

  if (trustSlug) {
    const page = getTrustPage(trustSlug, locale);
    copy = {
      title: page.title,
      description: page.description,
    };
  } else if (!primaryFallback) {
    throw new Error(`SEO copy is not registered for static path: ${path}`);
  } else if (locale === "de") {
    copy = getGermanStaticSeo(path, primaryFallback);
  } else if (locale === "en") {
    copy = getEnglishStaticSeo(path, primaryFallback);
  } else if (locale === "fr") {
    copy = getFrenchStaticSeo(path, primaryFallback);
  } else if (locale === "es") {
    copy = getSpanishStaticSeo(path, primaryFallback);
  } else if (locale === "ar") {
    copy = getArabicStaticSeo(path, primaryFallback);
  } else if (locale === "ru") {
    copy = getRussianStaticSeo(path, primaryFallback);
  } else if (locale === "pt") {
    copy = getPortugueseStaticSeo(path, primaryFallback);
  } else if (locale === "it") {
    copy = getItalianStaticSeo(path, primaryFallback);
  } else if (locale === "nl") {
    copy = getDutchStaticSeo(path, primaryFallback);
  } else if (locale === "zh") {
    copy = getChineseStaticSeo(path, primaryFallback);
  } else {
    copy = primaryFallback;
  }

  return {
    ...copy,
    ...staticSeoOverrides[locale]?.[path],
  };
}

export function getServiceSeoCopy(
  service: { slug: string; title: string; shortDesc: string },
  locale: Locale,
): SeoCopy {
  const title = locale === "it" && service.slug === "odeme-kargo-servis-entegrasyonu"
    ? "Integrazione pagamenti, spedizioni e servizi"
    : service.title;
  const description = locale === "zh"
    ? `${service.shortDesc} 可按企业实际流程定制，并在报价前明确功能、集成、交付范围与后续支持。`
    : service.shortDesc;

  return { title, description };
}

export function getLandingSeoCopy(
  page: { slug: string; title: string; description: string },
  locale: Locale,
): SeoCopy {
  return {
    title: landingSeoTitleOverrides[locale]?.[page.slug] ?? page.title,
    description: page.description,
  };
}

export function getCitySeoCopy(city: {
  city: string;
  description: string;
}): SeoCopy {
  return {
    title: `${city.city} Web Tasarım ve Yazılım Çözümleri`,
    description: city.description,
  };
}

export function getBlogHubSeoCopy({
  kind,
  label,
  locale,
  articleCount,
}: {
  kind: "category" | "tag";
  label: string;
  locale: Locale;
  articleCount?: number;
}): SeoCopy {
  const category = kind === "category";
  const count = articleCount ?? 0;
  const compact = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    const shortened = text.slice(0, limit - 1).replace(/\s+\S*$/, "").replace(/[\s,:;–—-]+$/, "");
    return `${shortened || text.slice(0, limit - 1)}…`;
  };
  const suffixes: Record<Locale, [string, string]> = {
    tr: ["Yazıları", "Rehberleri"],
    en: ["Articles", "Guides"],
    de: ["Artikel", "Leitfäden"],
    fr: ["Articles", "Guides"],
    es: ["Artículos", "Guías"],
    ar: ["مقالات", "أدلة"],
    ru: ["Статьи", "Руководства"],
    pt: ["Artigos", "Guias"],
    it: ["Articoli", "Guide"],
    nl: ["Artikelen", "Gidsen"],
    zh: ["文章", "指南"],
  };
  const descriptions: Record<Locale, string> = {
    tr: `${label} konusunda ${count || "ilgili"} rehberi; kapsam, maliyet, uygulama süreci ve doğru sistem seçimi açısından birlikte inceleyin.`,
    en: `Explore ${count || "selected"} practical guides about ${label}, covering scope, cost, implementation process, and system selection decisions.`,
    de: `Entdecken Sie ${count || "ausgewählte"} praxisnahe Leitfäden zu ${label}: Umfang, Kosten, Umsetzung und passende Systemauswahl.`,
    fr: `Consultez ${count || "plusieurs"} guides pratiques sur ${label} : périmètre, coût, mise en œuvre et choix du système.`,
    es: `Consulta ${count || "varias"} guías prácticas sobre ${label}: alcance, coste, implementación y elección del sistema adecuado.`,
    ar: `استعرض ${count || "مجموعة من"} أدلة عملية حول ${label} تشمل النطاق والتكلفة والتنفيذ واختيار النظام المناسب.`,
    ru: `Изучите ${count || "подборку"} практических руководств по теме ${label}: объем, стоимость, внедрение и выбор системы.`,
    pt: `Consulte ${count || "vários"} guias práticos sobre ${label}: escopo, custo, implementação e escolha do sistema adequado.`,
    it: `Consulta ${count || "diverse"} guide pratiche su ${label}: ambito, costi, implementazione e scelta del sistema.`,
    nl: `Bekijk ${count || "meerdere"} praktische gidsen over ${label}: scope, kosten, implementatie en systeemkeuze.`,
    zh: `查看关于${label}的${count || "多篇"}实用指南，了解项目范围、成本、实施流程和系统选择。`,
  };
  const suffix = suffixes[locale][category ? 0 : 1];

  return {
    title: compact(`${label}: ${suffix}`, 49),
    description: compact(descriptions[locale], 178),
  };
}

export function getSeoRouteProfile(path: string): SeoRouteProfile {
  if (path.startsWith("/sehir/")) {
    return {
      routeType: "city",
      searchIntent: "local",
      funnelStage: "decision",
      commercial: true,
    };
  }
  if (path.startsWith("/services/")) {
    return {
      routeType: "service",
      searchIntent: "transactional",
      funnelStage: "decision",
      commercial: true,
    };
  }
  if (path === "/services" || path === "/contact" || path === "/scope-pricing") {
    return {
      routeType: "static",
      searchIntent: "transactional",
      funnelStage: "decision",
      commercial: true,
    };
  }
  if (path.startsWith("/projects/") || path === "/projects" || path === "/portfolio") {
    return {
      routeType: path.startsWith("/projects/") ? "project" : "static",
      searchIntent: "commercial",
      funnelStage: "consideration",
      commercial: true,
    };
  }
  if (path.startsWith("/blog/category/")) {
    return {
      routeType: "blog-category",
      searchIntent: "informational",
      funnelStage: "awareness",
      commercial: false,
    };
  }
  if (path.startsWith("/blog/tag/")) {
    return {
      routeType: "blog-tag",
      searchIntent: "informational",
      funnelStage: "awareness",
      commercial: false,
    };
  }
  if (path.startsWith("/blog/") || path === "/blog") {
    return {
      routeType: path === "/blog" ? "static" : "blog",
      searchIntent: "informational",
      funnelStage: "awareness",
      commercial: false,
    };
  }
  if (
    path === "/about"
    || path === "/faq"
    || path === "/work-process"
    || path === "/safe-bionluk"
    || path === "/terms"
    || path === "/privacy"
    || path === "/kvkk"
    || path === "/cookies"
  ) {
    return {
      routeType: "static",
      searchIntent: "navigational",
      funnelStage: "consideration",
      commercial: false,
    };
  }
  if (
    path === "/maintenance-packages"
    || path === "/support"
  ) {
    return {
      routeType: "static",
      searchIntent: "commercial",
      funnelStage: "retention",
      commercial: true,
    };
  }

  return {
    routeType: path === "/" ? "static" : "landing",
    searchIntent: path === "/" ? "navigational" : "commercial",
    funnelStage: path === "/" ? "consideration" : "decision",
    commercial: true,
  };
}
