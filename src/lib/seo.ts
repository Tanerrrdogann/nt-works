import type { Metadata } from "next";
import { createLanguageAlternates, defaultLocale, getLocaleConfig, publishedLocales, type Locale, withLocalePath } from "@/lib/i18n";
import { getSeoRouteProfile } from "@/lib/seo-strategy";

export const siteConfig = {
  name: "NT Web Çözümleri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ntwebcozumleri.com.tr",
  description:
    "İşletmeler için kurumsal web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım çözümleri planlayıp geliştiriyoruz.",
  email: "ismailtanererdogan54@gmail.com",
  phone: "+905511955566",
  locale: "tr_TR",
  language: "tr-TR",
  image: "/opengraph-image",
  logo: "/logo.png",
};

export const seoKeywords = [
  "web sitesi yaptırma",
  "kurumsal web sitesi",
  "e-ticaret sitesi",
  "admin panel",
  "randevu sistemi",
  "WhatsApp sipariş sitesi",
  "ürün katalog sitesi",
  "özel yazılım",
  "web yazılım",
  "NT Web Çözümleri",
];

const germanSeoKeywords = [
  "Webentwicklung",
  "Unternehmenswebsite",
  "Onlineshop erstellen lassen",
  "Admin-Panel",
  "Buchungssystem",
  "Produktkatalog",
  "individuelle Software",
  "Webanwendung",
  "NT Web Çözümleri",
];

const englishSeoKeywords = [
  "web development",
  "business website",
  "e-commerce development",
  "admin panel",
  "booking system",
  "product catalog",
  "custom software",
  "web application",
  "NT Web Çözümleri",
];

const frenchSeoKeywords = [
  "développement web",
  "site internet professionnel",
  "développement e-commerce",
  "panneau d’administration",
  "système de réservation",
  "catalogue de produits",
  "logiciel sur mesure",
  "application web",
  "NT Web Çözümleri",
];

const spanishSeoKeywords = [
  "desarrollo web",
  "sitio web empresarial",
  "desarrollo de comercio electrónico",
  "panel de administración",
  "sistema de reservas",
  "catálogo de productos",
  "software a medida",
  "aplicación web",
  "NT Web Çözümleri",
];

const arabicSeoKeywords = [
  "تطوير مواقع الويب",
  "موقع شركة",
  "تطوير متجر إلكتروني",
  "لوحة إدارة",
  "نظام حجز",
  "كتالوج منتجات",
  "برمجيات مخصصة",
  "تطبيق ويب",
  "NT Web Çözümleri",
];

const russianSeoKeywords = [
  "веб-разработка",
  "корпоративный сайт",
  "разработка интернет-магазина",
  "панель управления",
  "система бронирования",
  "каталог товаров",
  "программное обеспечение на заказ",
  "веб-приложение",
  "NT Web Çözümleri",
];

const portugueseSeoKeywords = [
  "desenvolvimento web",
  "site empresarial",
  "desenvolvimento de comércio eletrónico",
  "painel de administração",
  "sistema de reservas",
  "catálogo de produtos",
  "software à medida",
  "aplicação web",
  "NT Web Çözümleri",
];

const italianSeoKeywords = [
  "sviluppo web",
  "sito aziendale",
  "sviluppo e-commerce",
  "pannello di amministrazione",
  "sistema di prenotazione",
  "catalogo prodotti",
  "software su misura",
  "applicazione web",
  "NT Web Çözümleri",
];

const dutchSeoKeywords = [
  "webontwikkeling",
  "bedrijfswebsite",
  "e-commerce ontwikkeling",
  "beheerpaneel",
  "reserveringssysteem",
  "productcatalogus",
  "maatwerksoftware",
  "webapplicatie",
  "NT Web Çözümleri",
];

const chineseSeoKeywords = [
  "网站开发",
  "企业网站",
  "电子商务开发",
  "管理面板",
  "预约系统",
  "产品目录",
  "定制软件",
  "Web 应用",
  "NT Web Çözümleri",
];

export function getSeoKeywordsForLocale(locale: Locale) {
  if (locale === "de") return germanSeoKeywords;
  if (locale === "en") return englishSeoKeywords;
  if (locale === "fr") return frenchSeoKeywords;
  if (locale === "es") return spanishSeoKeywords;
  if (locale === "ar") return arabicSeoKeywords;
  if (locale === "ru") return russianSeoKeywords;
  if (locale === "pt") return portugueseSeoKeywords;
  if (locale === "it") return italianSeoKeywords;
  if (locale === "nl") return dutchSeoKeywords;
  if (locale === "zh") return chineseSeoKeywords;
  return seoKeywords;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = siteConfig.image,
  keywords = [],
  type = "website",
  noIndex = false,
  noFollow = false,
  locale = defaultLocale,
  alternateLocales = publishedLocales,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  noFollow?: boolean;
  locale?: Locale;
  alternateLocales?: Locale[];
  publishedAt?: string;
  updatedAt?: string;
}): Metadata {
  const normalizedTitle = title
    .replace(/\s*[|–—-]\s*NT Web Çözümleri\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  const normalizedDescription = description.replace(/\s+/g, " ").trim();
  const localizedPath = withLocalePath(path, locale);
  const url = absoluteUrl(localizedPath);
  const imageUrl = absoluteUrl(image);
  const baseKeywords = getSeoKeywordsForLocale(locale);
  const mergedKeywords = Array.from(
    new Set([...baseKeywords, ...keywords].map((keyword) => keyword.trim()).filter(Boolean)),
  );
  const localeConfig = getLocaleConfig(locale);
  const profile = getSeoRouteProfile(path);
  const alternateOgLocales = alternateLocales
    .filter((alternateLocale) => alternateLocale !== locale)
    .map((alternateLocale) => getLocaleConfig(alternateLocale).ogLocale);
  const sharedOpenGraph = {
    title: normalizedTitle,
    description: normalizedDescription,
    url,
    siteName: siteConfig.name,
    locale: localeConfig.ogLocale,
    alternateLocale: alternateOgLocales,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: normalizedTitle,
      },
    ],
  };

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    keywords: mergedKeywords,
    category: profile.routeType,
    classification: `${profile.searchIntent}:${profile.funnelStage}`,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...createLanguageAlternates(path, alternateLocales),
        "x-default": path,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: type === "article"
      ? {
          ...sharedOpenGraph,
          type: "article",
          publishedTime: publishedAt,
          modifiedTime: updatedAt,
          authors: ["İsmail Taner Erdoğan"],
        }
      : {
          ...sharedOpenGraph,
          type: "website",
        },
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description: normalizedDescription,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.image),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [
    "https://github.com/Tanerrrdogann",
    "https://www.linkedin.com/in/ismail-taner-erdo%C4%9Fan28632232b",
    "https://bionluk.com/tanererdogann",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: "sales",
    availableLanguage: publishedLocales,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.image),
  logo: absoluteUrl(siteConfig.logo),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  priceRange: "$$",
  knowsAbout: [
    "Kurumsal web sitesi",
    "E-ticaret sitesi",
    "Admin panel geliştirme",
    "Randevu sistemi",
    "Özel yazılım",
  ],
};

export function globalJsonLdForLocale(locale: Locale) {
  const description = locale === "tr"
    ? siteConfig.description
    : locale === "de"
    ? "NT Web Çözümleri plant und entwickelt Unternehmenswebsites, E-Commerce-Lösungen, Admin-Panels und individuelle Softwaresysteme."
    : locale === "en"
      ? "NT Web Çözümleri plans and builds business websites, e-commerce solutions, admin panels and custom software systems."
      : locale === "fr"
        ? "NT Web Çözümleri conçoit et développe des sites professionnels, des solutions e-commerce, des panneaux d’administration et des logiciels sur mesure."
        : locale === "es"
          ? "NT Web Çözümleri planifica y desarrolla sitios empresariales, soluciones de comercio electrónico, paneles de administración y software a medida."
          : locale === "ar"
            ? "تخطط NT Web Çözümleri وتطور مواقع الشركات وحلول التجارة الإلكترونية ولوحات الإدارة والأنظمة البرمجية المخصصة."
            : locale === "ru"
              ? "NT Web Çözümleri проектирует и разрабатывает корпоративные сайты, решения для электронной коммерции, панели управления и программное обеспечение на заказ."
              : locale === "pt"
                ? "A NT Web Çözümleri planeia e desenvolve sites empresariais, soluções de comércio eletrónico, painéis de administração e software à medida."
                : locale === "it"
                  ? "NT Web Çözümleri progetta e sviluppa siti aziendali, soluzioni e-commerce, pannelli di amministrazione e software su misura."
                  : locale === "nl"
                    ? "NT Web Çözümleri ontwerpt en ontwikkelt bedrijfswebsites, e-commerceoplossingen, beheerpanelen en maatwerksoftware."
                    : "NT Web Çözümleri 为企业规划并开发公司网站、电子商务解决方案、管理面板和定制软件系统。";
  const localizedRoot = locale === defaultLocale ? "/" : `/${locale}`;

  return [
    {
      ...organizationJsonLd,
      url: absoluteUrl(localizedRoot),
      contactPoint: {
        ...organizationJsonLd.contactPoint,
        availableLanguage: publishedLocales,
      },
    },
    {
      ...websiteJsonLd,
      url: absoluteUrl(localizedRoot),
      inLanguage: getLocaleConfig(locale).languageTag,
      description,
    },
    {
      ...localBusinessJsonLd,
      url: absoluteUrl(localizedRoot),
      description,
    },
  ];
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(withLocalePath(item.path, locale)),
    })),
  };
}

export function itemListJsonLd({
  name,
  description,
  items,
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  items: Array<{ name: string; description: string; path: string }>;
  locale?: Locale;
}) {
  const localeConfig = getLocaleConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    inLanguage: localeConfig.languageTag,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(withLocalePath(item.path, locale)),
      name: item.name,
      description: item.description,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  offers,
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  path: string;
  offers?: string[];
  locale?: Locale;
}) {
  const localeConfig = getLocaleConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(withLocalePath(path, locale)),
    inLanguage: localeConfig.languageTag,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    serviceType: name,
    hasOfferCatalog: offers?.length
      ? {
          "@type": "OfferCatalog",
          name: locale === "de"
            ? `${name}: Leistungsumfang`
            : locale === "en"
              ? `${name} Scope`
              : locale === "fr"
                ? `Périmètre de ${name}`
                : locale === "es"
                  ? `Alcance de ${name}`
                  : locale === "ar"
                    ? `نطاق ${name}`
                    : locale === "ru"
                      ? `Состав услуги: ${name}`
                      : locale === "pt"
                        ? `Âmbito de ${name}`
                        : locale === "it"
                          ? `Ambito di ${name}`
                          : locale === "nl"
                            ? `Omvang van ${name}`
                            : locale === "zh" ? `${name} 服务范围` : `${name} kapsamları`,
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offer,
            },
          })),
        }
      : undefined,
  };
}

export function softwareExampleJsonLd({
  name,
  description,
  path,
  category,
  image,
  features = [],
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  image?: string;
  features?: string[];
  locale?: Locale;
}) {
  const localeConfig = getLocaleConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: absoluteUrl(withLocalePath(path, locale)),
    image: image ? absoluteUrl(image) : absoluteUrl(siteConfig.image),
    inLanguage: localeConfig.languageTag,
    applicationCategory: category,
    operatingSystem: "Web",
    featureList: features,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      category: "Demo",
    },
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function blogPostingJsonLd({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  locale = defaultLocale,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  locale?: Locale;
}) {
  const localeConfig = getLocaleConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(withLocalePath(path, locale)),
    inLanguage: localeConfig.languageTag,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: "İsmail Taner Erdoğan",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
    },
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
