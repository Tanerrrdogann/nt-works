import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaCore Teknoloji | Kurumsal Yazılım ve Dijital Dönüşüm Çözümleri",
  description:
    "NovaCore Teknoloji; işletmeler için kurumsal web siteleri, özel yazılım, e-ticaret, mobil uygulama ve yönetim paneli çözümleri geliştirir.",
  openGraph: {
    title: "NovaCore Teknoloji A.Ş.",
    description:
      "İşletmeler için modern, güvenilir ve ölçeklenebilir yazılım çözümleri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
