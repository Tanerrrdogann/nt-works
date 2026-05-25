"use client";

import { siteConfig } from "@/config/site";

const schedule = [
  { open: 9, close: 22 },
  { open: 9, close: 22 },
  { open: 9, close: 22 },
  { open: 9, close: 22 },
  { open: 9, close: 23 },
  { open: 10, close: 23 },
  { open: 10, close: 22 },
];

export function OpenStatus() {
  const now = new Date();
  const mondayFirstDay = (now.getDay() + 6) % 7;
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = schedule[mondayFirstDay];
  const isOpen = hour >= today.open && hour < today.close;

  return (
    <div className="rounded-[8px] border border-sky-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-700">
        Bugünkü durum
      </p>
      <p className={isOpen ? "mt-2 text-3xl font-black text-teal-700" : "mt-2 text-3xl font-black text-stone-700"}>
        {isOpen ? "Şu anda açık" : "Şu anda kapalı"}
      </p>
      <p className="mt-2 text-sm font-semibold text-stone-500">
        Bugün: {siteConfig.hours[mondayFirstDay][1]}
      </p>
    </div>
  );
}
