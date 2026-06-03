"use client";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "../config/site.config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">
            {siteConfig.company.name.split(' ')[0]} <span className="text-red-600">{siteConfig.company.name.split(' ')[1]}</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <a href={`https://wa.me/${siteConfig.company.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
              <WhatsAppIcon className="w-8 h-8 object-contain" />
              İletişime Geç
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-zinc-300 hover:text-white p-2" aria-label="Menüyü aç veya kapat">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menü Açılır Alan */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-5 space-y-1">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:bg-zinc-800 uppercase tracking-wider">
                {item.label}
              </Link>
            ))}
            <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="flex items-center gap-3 w-full mt-3 text-white px-3 py-3 text-sm font-bold uppercase tracking-wider">
              <WhatsAppIcon className="w-8 h-8 object-contain" />
              WhatsApp Destek
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
