import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "NT Web Çözümleri",
  description: "Web sitesi, e-ticaret ve özel yazılım çözümleri."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <div className="site-fixed-background" aria-hidden="true">
            <div className="site-dashboard-collage">
              <span />
              <span />
              <span />
            </div>
          </div>
          <Navbar />
          <main className="site-shell-surface">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
