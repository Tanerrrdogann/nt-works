import type { TestimonialType } from "@/types";

export const bionlukStats = {
  rating: 5,
  reviewCount: 3,
  completedOrders: 4,
  profileLabel: "Bionluk değerlendirmesi",
};

export const testimonials: TestimonialType[] = [
  {
    slug: "okanersoy-bionluk",
    source: "Bionluk",
    author: "okanersoy",
    displayName: "okanersoy",
    rating: 5,
    projectType: "Pazaryeri XML / entegrasyon işi",
    text: "Mükemmel Bir Freelancer müşterinin ne istediğini bilen işin de becerikli ve yetenekli çok düzenli ve titiz çalışan kesinlikle tavsiye ettiğim bir freelancer",
    dateLabel: "Bionluk değerlendirmesi",
    verified: true,
    relatedProject: "pazaryeri-xml-entegrasyonu",
  },
  {
    slug: "sefayama-bionluk",
    source: "Bionluk",
    author: "sefayama",
    displayName: "sefayama",
    rating: 5,
    projectType: "MENAR operasyon paneli",
    text: "genel olarak güzel bir çalışma oldu",
    dateLabel: "Bionluk değerlendirmesi",
    verified: true,
    relatedProject: "menar-operasyon-paneli",
  },
  {
    slug: "htopbas-bionluk-mizan-mulk",
    source: "Bionluk",
    author: "htopbas",
    displayName: "htopbas",
    rating: 5,
    projectType: "Mizan Mülk yönetim sistemi",
    text: "Proje geliştirme aşamalarında karşılaştığımız teknik kısıtlamalara ve mimari değişikliklere karşı son derece esnek, yapıcı ve çözüm odaklı yaklaştı. Sürecin başından itibaren gösterdiği profesyonel yaklaşım, kurumsal iletişim dili ve en önemlisi güvene dayalı iş ahlakı oldukça sağlıklıydı.",
    dateLabel: "Bionluk değerlendirmesi",
    verified: true,
    relatedProject: "mizan-mulk-yonetim-sistemi",
  },
];
