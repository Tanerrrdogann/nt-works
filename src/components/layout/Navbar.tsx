"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { getLocaleFromPath, stripLocaleFromPath } from "@/lib/i18n";
import { getUiText } from "@/data/i18n/ui-translations";

export default function Navbar() {
  const pathname = usePathname();
  const activePathname = stripLocaleFromPath(pathname ?? "/");
  const text = getUiText(getLocaleFromPath(pathname ?? "/"));
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: text.nav.home, path: "/" },
    { name: text.nav.services, path: "/services" },
    { name: text.nav.projects, path: "/projects" },
    { name: text.nav.portfolio, path: "/portfolio" },
    { name: text.nav.blog, path: "/blog" },
    { name: text.nav.about, path: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full border-b border-white/10 bg-[#050505]/88 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <LocalizedLink href="/" className="logo-mark flex items-center gap-1 transition-opacity">
          <Image src="/logo.png" alt="NT Web Çözümleri Logo" width={54} height={54} className="invert opacity-90" priority />
        </LocalizedLink>
        
        <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <LocalizedLink key={link.path} href={link.path} className={`nav-link ${activePathname === link.path || (link.path !== "/" && activePathname.startsWith(link.path)) ? "is-active text-white" : "text-gray-500"} hover:text-white transition-colors`}>
              {link.name}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
          <LocalizedLink href="/contact" className="shimmer-button bg-white text-black px-6 py-2.5 rounded-sm font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-95">
            {text.nav.contact}
          </LocalizedLink>
        </nav>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitcher />
          <LocalizedLink href="/contact" className="shimmer-button bg-white text-black px-4 py-2 rounded-sm text-xs font-bold transition-all active:scale-95">
            {text.nav.contact}
          </LocalizedLink>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)} aria-label={text.nav.menuToggle}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu-panel absolute right-6 top-20 flex w-max max-w-[calc(100vw-3rem)] flex-col gap-3 border border-white/10 bg-[#050505]/92 px-5 py-4 shadow-2xl shadow-black/35 xl:hidden">
          {navLinks.map((link) => (
            <LocalizedLink key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`whitespace-nowrap border-b border-white/10 py-2 text-center text-base font-medium last:border-b-0 ${activePathname === link.path ? "text-white" : "text-gray-400"}`}>
              {link.name}
            </LocalizedLink>
          ))}
        </div>
      )}
    </header>
  );
}
