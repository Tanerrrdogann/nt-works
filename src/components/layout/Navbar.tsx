"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.about"), href: "/about" },
    { label: "İletişim", href: "/contact" }
  ];

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-center">
          <nav className="pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-0 overflow-x-auto rounded-full border border-white/60 bg-white/68 px-1.5 py-2 shadow-2xl shadow-slate-950/16 ring-1 ring-slate-950/8 backdrop-blur-2xl [scrollbar-width:none] sm:gap-2 sm:px-3 [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-semibold transition sm:px-4 sm:text-sm",
                    isActive
                      ? "bg-slate-200/90 text-slate-950 shadow-sm ring-1 ring-slate-300/70"
                      : "text-slate-950 hover:bg-white/70 hover:text-slate-950"
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
