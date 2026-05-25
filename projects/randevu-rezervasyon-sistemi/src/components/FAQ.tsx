"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {siteConfig.faqs.map((faq, i) => (
        <div key={i} className="border border-rose-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button 
            onClick={() => setActive(active === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-rose-50/50"
          >
            <span className="font-bold text-slate-800">{faq.question}</span>
            <span className="text-rose-500">
              {active === i ? <Minus size={20} /> : <Plus size={20} />}
            </span>
          </button>
          {active === i && (
            <div className="p-5 pt-0 text-slate-600 bg-rose-50/30 text-sm leading-relaxed animate-in fade-in duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
