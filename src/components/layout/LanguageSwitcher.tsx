"use client";

import { useLanguage, type Language } from "@/i18n/LanguageProvider";

const languages: Array<{ label: string; value: Language }> = [
  { label: "EN", value: "en" },
  { label: "TR", value: "tr" }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1">
      {languages.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setLanguage(item.value)}
          className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            language === item.value
              ? "bg-white text-slate-950 shadow-sm"
              : "text-slate-500 hover:text-slate-950"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
