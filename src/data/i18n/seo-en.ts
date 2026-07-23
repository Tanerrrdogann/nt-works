type SeoCopy = {
  title: string;
  description: string;
};

const englishStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Web Development, E-Commerce and Custom Software",
    description:
      "NT Web Çözümleri plans and builds business websites, e-commerce solutions, admin panels and custom software systems.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about NT Web Çözümleri, our working process and our approach to transparent web and software projects.",
  },
  "/blog": {
    title: "Blog and Knowledge Center",
    description:
      "Practical guides to websites, admin panels, e-commerce, catalogs, booking systems, integrations and custom software.",
  },
  "/contact": {
    title: "Contact and Project Inquiry",
    description:
      "Contact NT Web Çözümleri about your website, online store, admin panel, booking system or custom software project.",
  },
  "/portfolio": {
    title: "Portfolio and Completed Projects",
    description:
      "Completed client projects, project outcomes and customer reviews from the NT Web Çözümleri portfolio.",
  },
  "/projects": {
    title: "Live Demos and Software Examples",
    description:
      "Live examples of adaptable websites, e-commerce systems, admin panels, booking systems and custom software.",
  },
  "/services": {
    title: "Web and Software Services",
    description:
      "Websites, catalogs, ordering systems, admin panels, CRM, booking systems, integrations, automation and custom software.",
  },
};

export function getEnglishStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return englishStaticSeo[path] ?? fallback;
}
