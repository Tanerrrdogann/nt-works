"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { cityPages } from "@/data/city-pages";
import { getLocaleFromPath } from "@/lib/i18n";
import { getUiText } from "@/data/i18n/ui-translations";

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPath(pathname);
  const text = getUiText(locale);

  return (
    <footer className="relative z-20 border-t border-white/14 bg-[#050505]/95 pt-10 md:pt-16 pb-8 px-4 md:px-6 text-white backdrop-blur-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 mb-10 md:mb-12">
        <div className="min-w-0">
          <div className="flex items-center gap-1 mb-3 md:mb-4">
            <Image src="/logo.png" alt="NT Logo" width={30} height={30} className="invert opacity-90" />
          </div>
          <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-6">
            {text.footer.description}
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{text.footer.quickLinks}</h4>
          <LocalizedLink href="/" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.home}</LocalizedLink>
          <LocalizedLink href="/services" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.services}</LocalizedLink>
          <LocalizedLink href="/projects" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.projects}</LocalizedLink>
          <LocalizedLink href="/portfolio" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.portfolio}</LocalizedLink>
          <LocalizedLink href="/blog" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.blog}</LocalizedLink>
          <LocalizedLink href="/about" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.nav.about}</LocalizedLink>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{text.footer.servicesTitle}</h4>
          <LocalizedLink href="/services/tanitim-kurumsal-web-siteleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.corporateWebsite}</LocalizedLink>
          <LocalizedLink href="/services/urun-katalog-whatsapp-siparis" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.productCatalog}</LocalizedLink>
          <LocalizedLink href="/services/e-ticaret-satis-sistemleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.ecommerce}</LocalizedLink>
          <LocalizedLink href="/services/randevu-rezervasyon-sistemleri" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.appointmentSystem}</LocalizedLink>
          <LocalizedLink href="/services/admin-panel-isletme-yonetimi" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.adminPanel}</LocalizedLink>
          <LocalizedLink href="/pazaryeri-entegrasyonu" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.marketplaceIntegration}</LocalizedLink>
          <LocalizedLink href="/maintenance-packages" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.maintenancePackages}</LocalizedLink>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 md:gap-3">
          <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{text.footer.contactTitle}</h4>
          <LocalizedLink href="/contact" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.getQuote}</LocalizedLink>
          <a href="mailto:ismailtanererdogan54@gmail.com" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.email}</a>
          <a href="https://wa.me/905511955566" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.whatsapp}</a>
          <a href="https://github.com/Tanerrrdogann" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">GitHub</a>
          <a href="https://www.linkedin.com/in/ismail-taner-erdo%C4%9Fan28632232b" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">LinkedIn</a>
          <a href="https://bionluk.com/tanererdogann" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.bionlukProfile}</a>
          <LocalizedLink href="/safe-bionluk" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.safeWork}</LocalizedLink>
          <LocalizedLink href="/work-process" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.workProcess}</LocalizedLink>
          <LocalizedLink href="/faq" className="text-slate-400 hover:text-white text-xs md:text-sm transition-colors w-fit leading-5">{text.footer.faq}</LocalizedLink>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
        <LocalizedLink href="/privacy" className="hover:text-white transition-colors">{text.footer.privacy}</LocalizedLink>
        <LocalizedLink href="/kvkk" className="hover:text-white transition-colors">{text.footer.kvkk}</LocalizedLink>
        <LocalizedLink href="/cookies" className="hover:text-white transition-colors">{text.footer.cookies}</LocalizedLink>
        <LocalizedLink href="/terms" className="hover:text-white transition-colors">{text.footer.terms}</LocalizedLink>
        <LocalizedLink href="/support" className="hover:text-white transition-colors">{text.footer.support}</LocalizedLink>
        <LocalizedLink href="/scope-pricing" className="hover:text-white transition-colors">{text.footer.scopePricing}</LocalizedLink>
        <LocalizedLink href="/safe-bionluk" className="hover:text-white transition-colors">{text.footer.safeWork}</LocalizedLink>
      </div>
      {locale === "tr" && (
        <div className="mx-auto mb-8 flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-xs text-slate-500">
          <span className="font-semibold text-slate-400">Hizmet Bölgeleri</span>
          {cityPages.map((city) => (
            <Link key={city.slug} href={`/sehir/${city.slug}`} className="hover:text-white transition-colors">
              {city.city}
            </Link>
          ))}
        </div>
      )}
      <div className="max-w-7xl mx-auto border-t border-white/14 pt-6 md:pt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NT Web Çözümleri. {text.footer.rights}
      </div>
    </footer>
  );
}
