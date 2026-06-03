import Link from "next/link";
import { siteConfig } from "../config/site.config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 z-50 px-2 py-3 flex justify-around items-center pb-safe">
      <a href={`tel:${siteConfig.company.phone}`} className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        <span className="text-[9px] font-black uppercase tracking-widest">Ara</span>
      </a>
      <Link href="/araclar" className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors">
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
        <span className="text-[9px] font-black uppercase tracking-widest">Araçlar</span>
      </Link>
      <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="flex flex-col items-center text-red-600 hover:text-red-500 transition-colors">
        <WhatsAppIcon className="w-7 h-7 mb-1 object-contain" />
        <span className="text-[9px] font-black uppercase tracking-widest">Mesaj</span>
      </a>
    </div>
  );
}
