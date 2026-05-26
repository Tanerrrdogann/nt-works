import { siteConfig } from "@/config/site";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import { Sparkles, Heart, ShieldCheck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-white to-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-5 bg-white border border-rose-100 rounded-full text-rose-500 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Sparkles size={14} fill="currentColor" /> Glow & Go Deneyimi
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Güzellik Bir <br/> <span className="text-rose-500 italic">Ritüeldir.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Sadece bir bakım değil, kendinizi yeniden keşfedeceğiniz bir yolculuk. Profesyonel kadromuz ve modern teknolojimizle parlamaya hazır olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/randevu" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-rose-500 transition-all shadow-2xl hover:shadow-rose-200">
              Şimdi Yerini Ayırt
            </Link>
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-rose-200 flex items-center justify-center text-xs font-bold">👩</div>
               ))}
               <div className="pl-6 text-sm font-bold text-slate-400 self-center">+1.2k Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar / Neden Biz */}
      <section className="py-12 bg-white -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: <Heart fill="currentColor" />, title: "Kişiye Özel", desc: "Sizin cildiniz, sizin kurallarınız." },
               { icon: <ShieldCheck fill="currentColor" />, title: "%100 Hijyen", desc: "Steril ve güvenli ortam." },
               { icon: <Clock fill="currentColor" />, title: "Planlı Seans", desc: "Bekleme yok, tam vaktinde." },
               { icon: <Sparkles fill="currentColor" />, title: "Uzman Ekip", desc: "Sertifikalı profesyoneller." }
             ].map((item, i) => (
               <div key={i} className="p-6 rounded-[2rem] bg-rose-50/50 border border-rose-100 flex flex-col items-center text-center">
                 <div className="text-rose-500 mb-3">{item.icon}</div>
                 <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                 <p className="text-[10px] text-slate-500 uppercase mt-1 font-bold">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Popüler Bakımlar</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Randevu Alanı (Takvimli Form) */}
      <section id="randevu" className="py-24 bg-rose-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-center mb-12">Sıkça Sorulanlar</h2>
          <FAQ />
          
          <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <h3 className="text-3xl font-bold mb-6 relative z-10">Sorunuz mu var?</h3>
            <p className="mb-8 opacity-70 relative z-10">Bize her zaman WhatsApp üzerinden danışabilirsiniz. Uzmanlarımız size yardımcı olmaktan mutluluk duyacaktır.</p>
            <a href={siteConfig.company.whatsappLink} className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-rose-600 transition-all relative z-10">
              <img src="/randevu-rezervasyon-sistemi/pink-whatsapp-logo.png" alt="" className="w-6 h-6 object-contain" />
              WhatsApp Destek Hattı
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
