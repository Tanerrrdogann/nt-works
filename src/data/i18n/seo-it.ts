type SeoCopy = {
  title: string;
  description: string;
};

const italianStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "Sviluppo web, e-commerce e software su misura",
    description:
      "NT Web Çözümleri progetta e sviluppa siti aziendali, soluzioni e-commerce, pannelli di amministrazione e software su misura.",
  },
  "/about": {
    title: "Chi siamo",
    description:
      "Scopri NT Web Çözümleri, il nostro metodo di lavoro e il nostro approccio trasparente ai progetti web e software.",
  },
  "/blog": {
    title: "Blog e centro risorse",
    description:
      "Guide pratiche su siti web, pannelli di amministrazione, e-commerce, cataloghi, prenotazioni, integrazioni e software su misura.",
  },
  "/contact": {
    title: "Contatti e richiesta di progetto",
    description:
      "Contatta NT Web Çözümleri per il tuo sito, negozio online, pannello di amministrazione, sistema di prenotazione o software su misura.",
  },
  "/portfolio": {
    title: "Portfolio e progetti completati",
    description:
      "Progetti clienti completati, risultati e recensioni nel portfolio di NT Web Çözümleri.",
  },
  "/projects": {
    title: "Demo live ed esempi di software",
    description:
      "Esempi live di siti, e-commerce, pannelli di amministrazione, prenotazioni e software su misura adattabile.",
  },
  "/services": {
    title: "Servizi web e software",
    description:
      "Siti web, cataloghi, sistemi di ordine, pannelli di amministrazione, CRM, prenotazioni, integrazioni, automazione e software su misura.",
  },
};

export function getItalianStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return italianStaticSeo[path] ?? fallback;
}
