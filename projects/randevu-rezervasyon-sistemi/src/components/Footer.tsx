import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rose-50 pt-16 pb-24 md:pb-8 border-t border-rose-100">
      <div className="container mx-auto px-4 grid grid-cols-[0.85fr_1.35fr] md:grid-cols-3 gap-x-5 gap-y-8 md:gap-12 text-center md:text-left">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold text-rose-800 mb-4">{siteConfig.company.name}</h3>
          <p className="text-rose-600/80 mb-6 italic">&quot;{siteConfig.company.slogan}&quot;</p>
          <p className="text-sm text-rose-500">Işıltınızı ortaya çıkarmak için buradayız.</p>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-lg font-semibold text-rose-800 mb-4">Hızlı Menü</h3>
          <ul className="space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-rose-600 hover:text-rose-500 transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-lg font-semibold text-rose-800 mb-4">Bize Ulaşın</h3>
          <ul className="space-y-3 text-rose-600">
            <li>📍 {siteConfig.company.address}</li>
            <li>📞 <a href={siteConfig.company.phoneLink} className="hover:text-rose-500">{siteConfig.company.phone}</a></li>
            <li>💬 <a href={siteConfig.company.whatsappLink} className="hover:text-rose-500">{siteConfig.company.whatsapp}</a></li>
            <li>🕒 {siteConfig.company.workingHours}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-rose-200 text-center text-rose-400 text-sm">
        © {new Date().getFullYear()} {siteConfig.company.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
