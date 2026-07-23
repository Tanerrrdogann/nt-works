type SeoCopy = {
  title: string;
  description: string;
};

const spanishStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Desarrollo web y software a medida",
    description:
      "NT Web Çözümleri planifica y desarrolla sitios empresariales, soluciones de comercio electrónico, paneles de administración y software a medida.",
  },
  "/about": {
    title: "Sobre nosotros",
    description:
      "Conoce NT Web Çözümleri, nuestra forma de trabajar y nuestro enfoque transparente para proyectos web y de software.",
  },
  "/blog": {
    title: "Blog y centro de recursos",
    description:
      "Guías prácticas sobre sitios web, paneles de administración, comercio electrónico, catálogos, reservas, integraciones y software a medida.",
  },
  "/contact": {
    title: "Contacto y solicitud de proyecto",
    description:
      "Contacta con NT Web Çözümleri para tu sitio web, tienda online, panel de administración, sistema de reservas o software a medida.",
  },
  "/portfolio": {
    title: "Portafolio y proyectos realizados",
    description:
      "Proyectos de clientes realizados, resultados y valoraciones del portafolio de NT Web Çözümleri.",
  },
  "/projects": {
    title: "Demos en vivo y ejemplos de software",
    description:
      "Ejemplos en vivo de sitios, comercio electrónico, paneles de administración, reservas y software a medida adaptable.",
  },
  "/services": {
    title: "Servicios web y de software",
    description:
      "Sitios web, catálogos, pedidos, paneles de administración, CRM, reservas, integraciones, automatización y software a medida.",
  },
};

export function getSpanishStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return spanishStaticSeo[path] ?? fallback;
}
