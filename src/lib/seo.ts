import type { Metadata } from "next";

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
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const mergedKeywords = Array.from(new Set([...seoKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    "https://bionluk.com/tanererdogann",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: "sales",
    availableLanguage: ["tr"],
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

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: Array<{ name: string; description: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
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
}: {
  name: string;
  description: string;
  path: string;
  offers?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: siteConfig.language,
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
          name: `${name} kapsamları`,
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
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  image?: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : absoluteUrl(siteConfig.image),
    inLanguage: siteConfig.language,
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
