"use client";

import { FormEvent, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function VehicleQuestionBox({
  vehicleTitle,
  whatsapp,
}: {
  vehicleTitle: string;
  whatsapp: string;
}) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanMessage = message.trim() || "Bu araç hakkında bilgi almak istiyorum.";
    const text = encodeURIComponent(`Merhaba, ${vehicleTitle} için sorum var: ${cleanMessage}`);
    window.open(`https://wa.me/${whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
      <h2 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-zinc-800 pb-4">Soru Sor</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">Mesajınız</span>
          <textarea
            className="w-full min-h-32 border-zinc-800 rounded-sm border p-4 bg-zinc-950 text-white focus:border-red-600 focus:outline-none transition-colors placeholder-zinc-700"
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Araç durumu, takas, ekspertiz veya randevu hakkında sorunuzu yazın"
            value={message}
          />
        </label>
        <button className="w-full flex items-center justify-center gap-3 bg-red-600 text-white rounded-sm py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-colors" type="submit">
          <WhatsAppIcon className="w-7 h-7 object-contain" />
          WhatsApp&apos;tan Gönder
        </button>
      </form>
    </div>
  );
}
