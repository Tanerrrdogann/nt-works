type SeoCopy = {
  title: string;
  description: string;
};

const germanStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Webentwicklung und individuelle Software",
    description:
      "NT Web Çözümleri plant und entwickelt Unternehmenswebsites, E-Commerce-Lösungen, Admin-Panels und individuelle Softwaresysteme.",
  },
  "/about": {
    title: "Über uns",
    description:
      "Lernen Sie NT Web Çözümleri, unsere Arbeitsweise und unseren Ansatz für nachvollziehbare Web- und Softwareprojekte kennen.",
  },
  "/blog": {
    title: "Blog und Wissenszentrum",
    description:
      "Praxisnahe Leitfäden zu Websites, Admin-Panels, E-Commerce, Katalogen, Buchungssystemen, Integrationen und individueller Software.",
  },
  "/contact": {
    title: "Kontakt und Projektanfrage",
    description:
      "Sprechen Sie mit NT Web Çözümleri über Ihre Website, Ihren Onlineshop, Ihr Admin-Panel, Ihr Buchungssystem oder Ihre individuelle Software.",
  },
  "/portfolio": {
    title: "Portfolio und abgeschlossene Projekte",
    description:
      "Abgeschlossene Kundenprojekte, Projektergebnisse und Bewertungen aus dem Portfolio von NT Web Çözümleri.",
  },
  "/projects": {
    title: "Live-Demos und Softwarebeispiele",
    description:
      "Live prüfbare Beispiele für Websites, E-Commerce, Admin-Panels, Buchungssysteme und individuelle Software.",
  },
  "/services": {
    title: "Web- und Softwareleistungen",
    description:
      "Websites, Kataloge, Bestellsysteme, Admin-Panels, CRM, Buchungssysteme, Integrationen, Automatisierung und individuelle Software.",
  },
};

export function getGermanStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return germanStaticSeo[path] ?? fallback;
}
