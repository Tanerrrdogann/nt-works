import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import HtmlLocaleSync from "@/components/i18n/HtmlLocaleSync";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { createLanguageAlternates, getLocaleConfig } from "@/lib/i18n";
import { getSeoKeywordsForLocale, globalJsonLdForLocale, seoKeywords, siteConfig } from "@/lib/seo";
import { getStaticSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

const inter = Inter({ subsets: ["latin"] });

const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NT Web Çözümleri | Web Sitesi, E-Ticaret ve Özel Yazılım",
    template: "%s | NT Web Çözümleri",
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  applicationName: siteConfig.name,
  authors: [{ name: "İsmail Taner Erdoğan" }],
  creator: "İsmail Taner Erdoğan",
  publisher: siteConfig.name,
  category: "web development",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ...createLanguageAlternates("/"),
      "x-default": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "NT Web Çözümleri | Web Sitesi, E-Ticaret ve Özel Yazılım",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "NT Web Çözümleri | Web Sitesi, E-Ticaret ve Özel Yazılım",
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  if (locale !== "de" && locale !== "en" && locale !== "fr" && locale !== "es" && locale !== "ar" && locale !== "ru" && locale !== "pt" && locale !== "it" && locale !== "nl" && locale !== "zh") return baseMetadata;

  const seo = getStaticSeoCopy("/", locale);
  const localeConfig = getLocaleConfig(locale);
  const localizedRoot = `/${locale}`;

  return {
    ...baseMetadata,
    title: {
      default: `${seo.title} | NT Web Çözümleri`,
      template: "%s | NT Web Çözümleri",
    },
    description: seo.description,
    keywords: getSeoKeywordsForLocale(locale),
    alternates: {
      canonical: localizedRoot,
      languages: {
        ...createLanguageAlternates("/"),
        "x-default": "/",
      },
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${seo.title} | NT Web Çözümleri`,
      description: seo.description,
      url: `${siteConfig.url}${localizedRoot}`,
      locale: localeConfig.ogLocale,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${seo.title} | NT Web Çözümleri`,
      description: seo.description,
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const localeConfig = getLocaleConfig(locale);

  return (
    <html lang={localeConfig.languageTag} dir={localeConfig.dir} className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#071225]`}>
        <LocaleProvider initialLocale={locale}>
          <HtmlLocaleSync />
          <div className="software-split-background" aria-hidden="true">
            <span className="software-split-background-divider" />
            <span className="software-split-mobile-middle" />
            <span className="software-split-mobile-line software-split-mobile-line-top" />
            <span className="software-split-mobile-line software-split-mobile-line-bottom" />
          </div>
          <Navbar />
          <div className="relative z-10 flex-grow">
            {children}
          </div>
          <Footer />
          <JsonLd data={globalJsonLdForLocale(locale)} />
          <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' } }} />
        </LocaleProvider>
      </body>
    </html>
  );
}
