import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex">
      <a href={siteConfig.company.whatsappLink} className="flex-1 py-4 flex flex-col items-center justify-center text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors">
        <img src="/randevu-rezervasyon-sistemi/pink-whatsapp-logo.png" alt="" className="w-5 h-5 object-contain mb-1" />
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
      <Link href="/randevu" className="flex-1 py-4 flex flex-col items-center justify-center bg-rose-500 text-white shadow-inner font-semibold hover:bg-rose-600 transition-colors">
        Randevu Al
      </Link>
      <a href={siteConfig.company.phoneLink} className="flex-1 py-4 flex flex-col items-center justify-center text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors">
        <span className="text-sm font-semibold">Ara</span>
      </a>
    </div>
  );
}
