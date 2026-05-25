import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minta Market | Yönetim Paneli",
  description:
    "Mini marketler için ürün, stok, tedarikçi, sipariş, cari müşteri ve kasa takip paneli.",
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
