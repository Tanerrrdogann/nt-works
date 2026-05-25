import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velora Coffee | Coffee, Kitchen ve Sakin Çalışma Alanı",
  description:
    "Kadıköy’de kahve, sıcak mutfak, tatlılar, ücretsiz Wi-Fi ve sakin çalışma alanı sunan modern coffee & kitchen deneyimi.",
  openGraph: {
    title: "Velora Coffee",
    description:
      "Kahve, mutfak ve sakin bir mola için modern landing page örneği.",
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
