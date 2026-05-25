"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, Sparkle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-rose-200">
            <Sparkle size={24} fill="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent leading-none">
              {siteConfig.company.name.split(' ')[0]}
            </span>
            <span className="text-[10px] text-rose-400 font-bold tracking-[0.2em] uppercase">Beauty Center</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-600 hover:text-rose-500 font-bold text-sm transition-colors uppercase tracking-wider">
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link href="/randevu" className="bg-slate-900 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-200">
            RANDEVU AL
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-rose-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {siteConfig.nav.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-700 hover:text-rose-500 py-2 border-b border-rose-50"
            >
              {item.title}
            </Link>
          ))}
          <Link 
            href="/randevu" 
            onClick={() => setIsOpen(false)}
            className="bg-rose-500 text-white text-center py-4 rounded-2xl font-bold mt-4"
          >
            HEMEN RANDEVU AL
          </Link>
        </div>
      )}
    </header>
  );
}
