import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/store/cartStore";
import { CustomerProvider } from "@/store/customerStore";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teddy Jewellry | Zarif Takı Alışverişi",
  description:
    "Teddy Jewellry modern kolye, küpe, bileklik, yüzük ve hediye setleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <CustomerProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
