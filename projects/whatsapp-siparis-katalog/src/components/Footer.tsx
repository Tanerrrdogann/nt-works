import Link from "next/link";
import { siteConfig } from "../config/site.config";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{siteConfig.company.name}</h3>
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 leading-relaxed max-w-xs">{siteConfig.company.slogan}</p>
        </div>
        <div>
          <h4 className="text-white font-black mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2 inline-block">Menü</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-red-600 transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2 inline-block">İletişim</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-zinc-400">
            <li>{siteConfig.company.phone}</li>
            <li>{siteConfig.company.email}</li>
            <li>{siteConfig.company.address}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
