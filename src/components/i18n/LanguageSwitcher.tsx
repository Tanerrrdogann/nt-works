"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeConfigs, getLocaleFromPath, stripLocaleFromPath, withLocalePath, type Locale } from "@/lib/i18n";
import { getUiText } from "@/data/i18n/ui-translations";

const shortLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  fr: "FR",
  es: "ES",
  ar: "AR",
  ru: "RU",
  pt: "PT",
  it: "IT",
  nl: "NL",
  zh: "ZH",
};

const flagLabels: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
  ar: "🇸🇦",
  ru: "🇷🇺",
  pt: "🇵🇹",
  it: "🇮🇹",
  nl: "🇳🇱",
  zh: "🇨🇳",
};

export default function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const currentLocale = getLocaleFromPath(pathname);
  const text = getUiText(currentLocale);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeLocale = localeConfigs.find((locale) => locale.code === currentLocale) ?? localeConfigs[0];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    setIsOpen(false);
    if (nextLocale === currentLocale) return;
    router.push(withLocalePath(stripLocaleFromPath(pathname), nextLocale));
  };

  return (
    <div ref={wrapperRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 border border-white/12 bg-white/[0.04] px-3 text-xs font-bold uppercase text-gray-200 outline-none transition-colors hover:border-white/25 hover:bg-white/[0.08]"
        aria-label={text.nav.languageSelect}
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{flagLabels[activeLocale.code]}</span>
        <span>{shortLabels[activeLocale.code]}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden border border-white/12 bg-[#071225]/96 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <div>
            {localeConfigs.map((locale) => {
              const isActive = locale.code === currentLocale;
              return (
                <button
                  key={locale.code}
                  type="button"
                  onClick={() => handleLocaleChange(locale.code)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  <span className="shrink-0 text-base leading-none">{flagLabels[locale.code]}</span>
                  <span className="min-w-0 flex-1 truncate">{locale.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
