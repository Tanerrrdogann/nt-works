type SeoCopy = {
  title: string;
  description: string;
};

const portugueseStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Sites e software à medida",
    description:
      "A NT Web Çözümleri planeia e desenvolve sites empresariais, soluções de comércio eletrónico, painéis de administração e software à medida.",
  },
  "/about": {
    title: "Sobre nós",
    description:
      "Conheça a NT Web Çözümleri, o nosso processo de trabalho e a nossa abordagem transparente a projetos web e de software.",
  },
  "/blog": {
    title: "Blog e centro de conhecimento",
    description:
      "Guias práticos sobre sites, painéis de administração, comércio eletrónico, catálogos, reservas, integrações e software à medida.",
  },
  "/contact": {
    title: "Contacto e pedido de projeto",
    description:
      "Contacte a NT Web Çözümleri para falar sobre o seu site, loja online, painel de administração, sistema de reservas ou software à medida.",
  },
  "/portfolio": {
    title: "Portefólio e projetos concluídos",
    description:
      "Projetos de clientes concluídos, resultados e avaliações no portefólio da NT Web Çözümleri.",
  },
  "/projects": {
    title: "Demonstrações ao vivo e exemplos de software",
    description:
      "Exemplos ao vivo de sites, comércio eletrónico, painéis de administração, reservas e software à medida adaptável.",
  },
  "/services": {
    title: "Serviços web e de software",
    description:
      "Sites, catálogos, sistemas de pedidos, painéis de administração, CRM, reservas, integrações, automação e software à medida.",
  },
};

export function getPortugueseStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return portugueseStaticSeo[path] ?? fallback;
}
