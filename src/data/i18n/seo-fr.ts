type SeoCopy = {
  title: string;
  description: string;
};

const frenchStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Sites web et logiciels sur mesure",
    description:
      "NT Web Çözümleri conçoit et développe des sites professionnels, des solutions e-commerce, des panneaux d’administration et des logiciels sur mesure.",
  },
  "/about": {
    title: "À propos",
    description:
      "Découvrez NT Web Çözümleri, notre méthode de travail et notre approche transparente des projets web et logiciels.",
  },
  "/blog": {
    title: "Blog et centre de ressources",
    description:
      "Guides pratiques sur les sites web, panneaux d’administration, boutiques en ligne, catalogues, réservations, intégrations et logiciels sur mesure.",
  },
  "/contact": {
    title: "Contact et demande de projet",
    description:
      "Contactez NT Web Çözümleri pour votre site, boutique en ligne, panneau d’administration, système de réservation ou logiciel sur mesure.",
  },
  "/portfolio": {
    title: "Portfolio et projets réalisés",
    description:
      "Projets clients réalisés, résultats et avis présentés dans le portfolio de NT Web Çözümleri.",
  },
  "/projects": {
    title: "Démos en direct et exemples de logiciels",
    description:
      "Exemples en direct de sites, solutions e-commerce, panneaux d’administration, réservations et logiciels sur mesure adaptables.",
  },
  "/services": {
    title: "Services web et logiciels",
    description:
      "Sites web, catalogues, commandes, panneaux d’administration, CRM, réservations, intégrations, automatisation et logiciels sur mesure.",
  },
};

export function getFrenchStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return frenchStaticSeo[path] ?? fallback;
}
