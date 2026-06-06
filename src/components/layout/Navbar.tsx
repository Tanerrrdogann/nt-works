"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/services" },
    { name: "Canlı Örnekler", path: "/projects" },
    { name: "Hakkımızda", path: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full border-b border-white/10 bg-[#050505]/88 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="logo-mark flex items-center gap-1 transition-opacity">
          <Image src="/logo.png" alt="NT Web Çözümleri Logo" width={54} height={54} className="invert opacity-90" priority />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className={`nav-link ${pathname === link.path || (link.path !== "/" && pathname?.startsWith(link.path)) ? "is-active text-white" : "text-gray-500"} hover:text-white transition-colors`}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="shimmer-button bg-white text-black px-6 py-2.5 rounded-sm font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-95">
            Teklif Al
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <Link href="/contact" className="shimmer-button bg-white text-black px-4 py-2 rounded-sm text-xs font-bold transition-all active:scale-95">
            Teklif Al
          </Link>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Menüyü aç/kapat">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu-panel md:hidden absolute top-20 left-0 w-full bg-[#050505]/88 border-b border-white/10 flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium py-2 border-b border-white/10 ${pathname === link.path ? "text-white" : "text-gray-400"}`}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
