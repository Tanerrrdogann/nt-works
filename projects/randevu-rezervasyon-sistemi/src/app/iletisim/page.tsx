"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleWhatsAppSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Merhaba, Glow & Go web sitesinden yazıyorum.\nAd: ${name || "-"}\nTelefon: ${phone || "-"}\nMesaj: ${message || "-"}`
    );
    window.open(`${siteConfig.company.whatsappLink}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <section className="max-w-5xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-rose-500 font-black tracking-[0.2em] uppercase text-xs mb-5">
            <Sparkles size={16} fill="currentColor" /> İletişim
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-5">Bize Ulaşın</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Randevu, hizmet detayı veya uygun saat soruları için WhatsApp üzerinden hızlıca yazabilir ya da e-posta gönderebilirsiniz.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-5 mb-10">
          <a href={siteConfig.company.phoneLink} className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:border-rose-300 transition-colors">
            <Phone className="text-rose-500 mb-4" />
            <h3 className="font-bold text-slate-800 mb-2">Telefon</h3>
            <p className="text-slate-600">{siteConfig.company.phone}</p>
          </a>
          <a href={siteConfig.company.whatsappLink} className="bg-rose-500 p-6 rounded-3xl shadow-lg shadow-rose-200 text-white hover:bg-rose-600 transition-colors">
            <img src="/randevu-rezervasyon-sistemi/pink-whatsapp-logo.png" alt="WhatsApp" className="w-10 h-10 object-contain mb-4" />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-white/85">{siteConfig.company.whatsapp}</p>
          </a>
          <a href={siteConfig.company.emailLink} className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:border-rose-300 transition-colors">
            <Mail className="text-rose-500 mb-4" />
            <h3 className="font-bold text-slate-800 mb-2">E-posta</h3>
            <p className="text-slate-600 break-all">{siteConfig.company.email}</p>
          </a>
          <a href={siteConfig.company.mapLink} className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:border-rose-300 transition-colors">
            <MapPin className="text-rose-500 mb-4" />
            <h3 className="font-bold text-slate-800 mb-2">Adres</h3>
            <p className="text-slate-600">{siteConfig.company.address}</p>
          </a>
        </section>

        <section className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
          <div className="bg-white border border-rose-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl font-black text-slate-800 mb-3">WhatsApp&apos;tan soru sor</h2>
            <p className="text-slate-500 mb-8">Mesajınızı hazırlayalım, gönder butonuyla WhatsApp konuşmasını açalım.</p>
            <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input value={name} onChange={(event) => setName(event.target.value)} className="w-full px-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 outline-none" placeholder="Adınız Soyadınız" />
                <input value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full px-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 outline-none" placeholder="Telefon Numaranız" />
              </div>
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={5} className="w-full px-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 outline-none" placeholder="Hangi hizmet veya randevu hakkında bilgi almak istiyorsunuz?" required />
              <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-2xl font-black transition-colors flex items-center justify-center gap-2" type="submit">
                <img src="/randevu-rezervasyon-sistemi/pink-whatsapp-logo.png" alt="" className="w-6 h-6 object-contain" /> WhatsApp&apos;tan Gönder
              </button>
            </form>
          </div>

          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10">
            <h2 className="text-3xl font-black mb-4">Randevu öncesi hızlı bilgi</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Cilt tipi, işlem bölgesi, seans süresi veya fiyat aralığı hakkında karar veremiyorsanız bize yazın. Uzmanlarımız hizmet seçimi ve uygun saat konusunda yönlendirme yapabilir.
            </p>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span>Çalışma saatleri</span>
                <strong>{siteConfig.company.workingHours}</strong>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span>Randevu kanalı</span>
                <strong className="text-rose-300">WhatsApp onaylı</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>İlk görüşme</span>
                <strong className="text-rose-300">Ücretsiz</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
