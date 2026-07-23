type SeoCopy = {
  title: string;
  description: string;
};

const dutchStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Webontwikkeling, e-commerce en maatwerksoftware",
    description:
      "NT Web Çözümleri ontwerpt en ontwikkelt bedrijfswebsites, e-commerceoplossingen, beheerpanelen en maatwerksoftware.",
  },
  "/about": {
    title: "Over ons",
    description:
      "Maak kennis met NT Web Çözümleri, onze werkwijze en onze transparante aanpak voor web- en softwareprojecten.",
  },
  "/blog": {
    title: "Blog en kenniscentrum",
    description:
      "Praktische gidsen over websites, beheerpanelen, e-commerce, catalogi, reserveringen, integraties en maatwerksoftware.",
  },
  "/contact": {
    title: "Contact en projectaanvraag",
    description:
      "Neem contact op met NT Web Çözümleri over je website, webshop, beheerpaneel, reserveringssysteem of maatwerksoftware.",
  },
  "/portfolio": {
    title: "Portfolio en afgeronde projecten",
    description:
      "Afgeronde klantprojecten, resultaten en beoordelingen in het portfolio van NT Web Çözümleri.",
  },
  "/projects": {
    title: "Live demo’s en softwarevoorbeelden",
    description:
      "Live voorbeelden van aanpasbare websites, e-commerce, beheerpanelen, reserveringssystemen en maatwerksoftware.",
  },
  "/services": {
    title: "Web- en softwarediensten",
    description:
      "Websites, catalogi, bestelsystemen, beheerpanelen, CRM, reserveringen, integraties, automatisering en maatwerksoftware.",
  },
};

export function getDutchStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return dutchStaticSeo[path] ?? fallback;
}
