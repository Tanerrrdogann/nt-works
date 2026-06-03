"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode
} from "react";

export type Language = "en" | "tr";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "nav.projects": "Live Examples",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "brand.subtitle": "Web sitesi, e-ticaret ve özel yazılım çözümleri",

    "hero.badge": "NT Web Çözümleri",
    "hero.title": "Canlı örneklerle incelenebilir web sitesi ve özel sistemler",
    "hero.description":
      "We build usable, mobile-friendly and manageable web systems for businesses, startups and individual brands.",
    "hero.projects": "View Live Examples",
    "hero.contact": "Request a Quote",
    "hero.stat.projects": "Completed projects",
    "hero.stat.fullstack": "Frontend + backend",
    "hero.stat.demo": "Ready systems",
    "hero.demoStatus": "Project Status",
    "hero.preparing": "Ready",
    "hero.demoDisabled": "Preview unavailable",

    "projects.eyebrow": "Live Examples",
    "projects.title": "Live Reviewable Example Systems",
    "projects.description":
      "Review adaptable live examples and request a similar website, e-commerce system or custom software for your business.",
    "projects.featuredTitle": "Live Reviewable Example Systems",
    "projects.featuredDescription":
      "Review adaptable live examples and request a similar website, e-commerce system or custom software for your business.",
    "projects.details": "Details",
    "projects.openDemo": "View Live Example",
    "projects.back": "Back to Live Examples",
    "projects.problem": "Business Problem",
    "projects.solution": "Solution",
    "projects.features": "Core Features",
    "projects.visual": "Project visual placeholder",
    "projects.technicalInfo": "Technical Info",
    "projects.database": "Database",
    "projects.deployment": "Delivery",

    "demo.title": "Live Project Preview",
    "demo.description": "Review what is available in the live preview before inspecting the ready system.",
    "demo.noAccount": "This project does not require an account.",
    "demo.open": "Open Live Preview",
    "demo.github": "Technical link",
    "demo.disabled":
      "This project is documented through screenshots instead of a browser preview.",
    "demo.email": "Email",
    "demo.password": "Password",

    "status.live": "Ready",
    "status.offline": "Documented",
    "status.preparing": "Pending",
    "status.maintenance": "Client Pending",

    "services.eyebrow": "Services",
    "services.title": "Software services for real businesses",
    "services.description":
      "NT Web Çözümleri is positioned as a service brand for building modern web systems.",
    "services.homeTitle": "What NT Web Çözümleri can build",
    "services.homeDescription":
      "The site is also designed as a sales page for business websites, e-commerce systems and custom software projects.",
    "services.flowTitle": "Project request flow",
    "services.flowDescription":
      "The goal is to understand the business need, design a clean interface, build the system, prepare admin management and deploy it with a usable live link.",
    "services.start": "Start a Project",

    "demoCenter.eyebrow": "Ready Projects",
    "demoCenter.title": "Working systems that prove the offer",
    "demoCenter.description":
      "The site is a sales page first. Ready projects are used as proof that visitors can inspect before requesting a similar system.",
    "demoCenter.phase1": "Sales site, project pages and live preview links.",
    "demoCenter.phase2": "Project preview runtime and start/stop logic.",
    "demoCenter.phase3": "Subdomains, cloud deployment and automatic preview reset.",

    "tech.eyebrow": "Tech Stack",
    "tech.title": "Technologies used across projects",
    "tech.description":
      "The projects are built around practical full-stack tools used for real web applications.",

    "cta.title": "Need a website or custom system?",
    "cta.description":
      "NT Web Çözümleri presents real examples and builds web development solutions for businesses.",
    "cta.button": "Contact NT Web Çözümleri",

    "about.eyebrow": "About",
    "about.title": "About NT Web Çözümleri",
    "about.description":
      "Websites, e-commerce systems and custom software for businesses, startups and individual brands.",
    "about.focus": "Focus",
    "about.p1":
      "Under NT Web Çözümleri, we are İsmail Taner Erdoğan and Nisa Gökşen. We build websites, e-commerce systems and custom software solutions for businesses, startups and individual brands.",
    "about.p2":
      "Our goal is not only to prepare pages that look good, but to build usable, mobile-friendly, fast and manageable systems shaped around real needs.",
    "about.stack": "Stack",

    "contact.eyebrow": "Contact",
    "contact.title": "Let’s clarify the right system for your business",
    "contact.description":
      "If you liked a live example or are not sure what you need, you can start with a short message.",
    "contact.github": "Add your GitHub profile link",
    "contact.linkedin": "Add your LinkedIn profile link",
    "contact.noteTitle": "If you are not sure what to write",
    "contact.noteDescription":
      "Share your business type, the live example you liked, desired features and any budget/timeline expectation. The right structure can be clarified together.",
    "contact.viewProjects": "View Live Examples",

    "footer.description":
      "Web sitesi, e-ticaret ve özel yazılım çözümleri."
  },

  tr: {
    "nav.projects": "Canlı Örnekler",
    "nav.services": "Hizmetler",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    "nav.cta": "İletişime geç",
    "brand.subtitle": "Web sitesi, e-ticaret ve özel yazılım çözümleri",

    "hero.badge": "NT Web Çözümleri",
    "hero.title": "Canlı örneklerle incelenebilir web sitesi ve özel sistemler",
    "hero.description":
      "İşletmeniz için kurumsal web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım çözümleri hazırlıyoruz.",
    "hero.projects": "Canlı Örnekleri İncele",
    "hero.contact": "Teklif Al",
    "hero.stat.projects": "Canlı örnek sistem",
    "hero.stat.fullstack": "Frontend + backend",
    "hero.stat.demo": "Uyarlanabilir yapılar",
    "hero.demoStatus": "Proje Durumu",
    "hero.preparing": "Hazır",
    "hero.demoDisabled": "İnceleme kapalı",

    "projects.eyebrow": "Canlı Örnekler",
    "projects.title": "Canlı İnceleyebileceğiniz Örnek Sistemler",
    "projects.description":
      "Bu sayfadaki çalışmalar gerçek müşteri işi gibi gösterilmez; farklı sektörlere uyarlanabilecek canlı örnek sistemlerdir.",
    "projects.featuredTitle": "Canlı İnceleyebileceğiniz Örnek Sistemler",
    "projects.featuredDescription":
      "Canlı örnekleri inceleyin, beğendiğiniz yapının benzerini işletmenize göre uyarlayalım.",
    "projects.details": "Detaylar",
    "projects.openDemo": "Canlı Örneği İncele",
    "projects.back": "Canlı Örneklere Dön",
    "projects.problem": "İşletme problemi",
    "projects.solution": "Çözüm",
    "projects.features": "Temel Özellikler",
    "projects.visual": "Proje görsel alanı",
    "projects.technicalInfo": "Teknik Bilgi",
    "projects.database": "Veritabanı",
    "projects.deployment": "Teslim şekli",

    "demo.title": "Canlı Proje İncelemesi",
    "demo.description": "Hazır sistemi incelemeden önce canlı incelemede nelerin açık olduğunu görebilirsin.",
    "demo.noAccount": "Bu proje için hesap gerekmez.",
    "demo.open": "Canlı İncele",
    "demo.github": "Teknik bağlantı",
    "demo.disabled":
      "Bu proje tarayıcı incelemesi yerine ekran görüntüleriyle dokümante edilir.",
    "demo.email": "E-posta",
    "demo.password": "Şifre",

    "status.live": "Hazır",
    "status.offline": "Dokümante",
    "status.preparing": "Beklemede",
    "status.maintenance": "Müşteri bekleniyor",

    "services.eyebrow": "Hizmetler",
    "services.title": "Gerçek işletmeler için yazılım hizmetleri",
    "services.description":
      "NT Web Çözümleri modern web sistemleri geliştiren bir hizmet markası olarak konumlandırılır.",
    "services.homeTitle": "NT Web Çözümleri neler geliştirebilir?",
    "services.homeDescription":
      "Site aynı zamanda işletme web siteleri, e-ticaret sistemleri ve özel yazılım projeleri için satış sayfası olarak tasarlanır.",
    "services.flowTitle": "Proje talep süreci",
    "services.flowDescription":
      "Amaç; işletme ihtiyacını anlamak, temiz bir arayüz tasarlamak, sistemi geliştirmek, admin yönetimini hazırlamak ve kullanılabilir canlı linkle teslim etmektir.",
    "services.start": "Proje Başlat",

    "demoCenter.eyebrow": "Hazır Projeler",
    "demoCenter.title": "Satış vaadini kanıtlayan çalışan sistemler",
    "demoCenter.description":
      "Site önce satış sitesidir. Hazır projeler, ziyaretçinin benzer sistem talep etmeden önce inceleyebileceği kanıtlar olarak kullanılır.",
    "demoCenter.phase1": "Satış sitesi, proje sayfaları ve canlı inceleme linkleri.",
    "demoCenter.phase2": "Proje inceleme altyapısı ve açma/kapatma mantığı.",
    "demoCenter.phase3": "Subdomainler, yayın altyapısı ve otomatik temizleme.",

    "tech.eyebrow": "Teknolojiler",
    "tech.title": "Projelerde kullanılan teknolojiler",
    "tech.description":
      "Projeler gerçek web uygulamalarında kullanılan pratik tam kapsamlı geliştirme araçları üzerine kuruludur.",

    "cta.title": "Web sitesi veya özel sistem mi lazım?",
    "cta.description":
      "NT Web Çözümleri gerçek örnekleri sunar ve işletmelere web geliştirme çözümleri sağlar.",
    "cta.button": "NT Web Çözümleri ile İletişime Geç",

    "about.eyebrow": "Hakkında",
    "about.title": "NT Web Çözümleri hakkında",
    "about.description":
      "İşletmeler, girişimler ve bireysel markalar için web sitesi, e-ticaret ve özel yazılım çözümleri.",
    "about.focus": "Odak",
    "about.p1":
      "Biz İsmail Taner Erdoğan ve Nisa Gökşen olarak NT Web Çözümleri çatısı altında; işletmeler, girişimler ve bireysel markalar için web sitesi, e-ticaret ve özel yazılım çözümleri geliştiriyoruz.",
    "about.p2":
      "Amacımız sadece güzel görünen sayfalar hazırlamak değil; kullanılabilir, mobil uyumlu, hızlı ve ihtiyaca göre yönetilebilir sistemler kurmaktır.",
    "about.stack": "Teknoloji",

    "contact.eyebrow": "İletişim",
    "contact.title": "İşletmen için uygun sistemi birlikte netleştirelim",
    "contact.description":
      "Canlı örneklerden birini beğendiyseniz veya neye ihtiyacınız olduğunu bilmiyorsanız, kısa bir mesajla başlayabilirsiniz.",
    "contact.github": "GitHub profil linkini ekle",
    "contact.linkedin": "LinkedIn profil linkini ekle",
    "contact.noteTitle": "Ne yazacağınızı bilmiyorsanız",
    "contact.noteDescription":
      "İşletme türünüzü, beğendiğiniz canlı örneği, istediğiniz özellikleri ve varsa bütçe/süre beklentinizi yazmanız yeterli. Uygun yapı birlikte netleştirilebilir.",
    "contact.viewProjects": "Canlı Örnekleri İncele",

    "footer.description":
      "Web sitesi, e-ticaret ve özel yazılım çözümleri."
  }
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "ntworks-language";
const LANGUAGE_CHANGE_EVENT = "ntworks-language-change";

function readStoredLanguage(): Language {
  return "tr";
}

function subscribeToLanguageChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChanges,
    readStoredLanguage,
    () => "tr"
  );

  const setLanguage = () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "tr");
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => dictionaries[language][key] ?? key
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      language: "tr" as Language,
      setLanguage: () => {},
      t: (key: string) => dictionaries.tr[key] ?? key
    };
  }

  return context;
}
