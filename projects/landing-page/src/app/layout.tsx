import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velora Kafe | Kahve, Mutfak ve Sakin Çalışma Alanı",
  description:
    "Kadıköy’de kahve, sıcak mutfak, tatlılar, kablosuz internet ve sakin çalışma alanı sunan modern kafe deneyimi.",
  openGraph: {
    title: "Velora Kafe",
    description:
      "Kahve, mutfak ve sakin bir mola için modern tek sayfa kafe örneği.",
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
