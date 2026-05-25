import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.slogan}`,
  description: "Güzellik ve bakım hizmetleri için hemen online randevu alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="text-slate-800 antialiased">
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
