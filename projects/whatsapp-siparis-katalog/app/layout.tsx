import type { Metadata } from "next";
import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import MobileActionBar from "../src/components/MobileActionBar";

export const metadata: Metadata = {
  title: "Premium Motors | Performans ve Güven",
  description: "Filtrelenebilir araç galerisi ve WhatsApp üzerinden hızlı talep demo sitesi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
        <Header />
        <main className="flex-grow flex flex-col pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
