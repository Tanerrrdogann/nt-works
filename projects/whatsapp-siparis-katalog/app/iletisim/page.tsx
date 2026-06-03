"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "../../src/config/site.config";
import WhatsAppIcon from "../../src/components/WhatsAppIcon";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Merhaba, katalog üzerinden iletişim kuruyorum.\nAd: ${name || "-"}\nTelefon: ${phone || "-"}\nMesaj: ${message || "-"}`
    );
    window.open(`https://wa.me/${siteConfig.company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 md:py-20 w-full">
      <div className="text-center mb-10 md:mb-16 border-b border-zinc-800 pb-8 md:pb-10">
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">İletişim</h1>
        <p className="text-zinc-400 uppercase tracking-widest text-sm font-bold">Araçlarımız hakkında bilgi almak veya test sürüşü planlamak için bize ulaşın.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-12 max-w-5xl mx-auto">
        {/* İletişim Bilgileri (Sol Blok) */}
        <div className="grid grid-cols-2 gap-3 md:block md:space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-4 md:p-8 hover:border-red-600/50 transition-colors">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">TELEFON</h3>
            <a href={`tel:${siteConfig.company.phone}`} className="text-sm md:text-xl font-bold text-white tracking-widest hover:text-red-500 transition-colors">{siteConfig.company.phone}</a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-4 md:p-8 hover:border-red-600/50 transition-colors">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">WHATSAPP</h3>
            <a href={`https://wa.me/${siteConfig.company.whatsapp}`} target="_blank" rel="noreferrer" className="text-sm md:text-xl font-bold text-white tracking-widest hover:text-red-500 transition-colors">{siteConfig.company.phone}</a>
          </div>
          <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-sm p-4 md:p-8 hover:border-red-600/50 transition-colors">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">ADRES</h3>
            <p className="text-sm md:text-lg font-bold text-white tracking-wider uppercase">{siteConfig.company.address}</p>
          </div>
        </div>

        {/* İletişim Formu (Sağ Blok) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-5 md:p-10 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
          <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">WhatsApp&apos;tan Yaz</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">AD SOYAD</label>
              <input name="name" type="text" required value={name} onChange={(event) => setName(event.target.value)} className="w-full border-zinc-800 rounded-sm border p-4 bg-zinc-950 text-white focus:border-red-600 focus:outline-none transition-colors uppercase placeholder-zinc-700" placeholder="ADINIZ SOYADINIZ" />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">TELEFON</label>
              <input name="phone" type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full border-zinc-800 rounded-sm border p-4 bg-zinc-950 text-white focus:border-red-600 focus:outline-none transition-colors uppercase placeholder-zinc-700" placeholder="05XX XXX XX XX" />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">MESAJINIZ</label>
              <textarea name="message" rows={4} required value={message} onChange={(event) => setMessage(event.target.value)} className="w-full border-zinc-800 rounded-sm border p-4 bg-zinc-950 text-white focus:border-red-600 focus:outline-none transition-colors uppercase placeholder-zinc-700" placeholder="SİZE NASIL YARDIMCI OLABİLİRİZ?"></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-3 bg-red-600 text-white font-black py-4 rounded-sm uppercase tracking-widest hover:bg-red-700 transition-colors">
              <WhatsAppIcon className="w-7 h-7 object-contain" />
              WhatsApp&apos;tan Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
