import { siteConfig } from "@/config/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = siteConfig.services.find(s => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Üst Başlık Alanı */}
        <div className="bg-rose-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 mb-8 md:mb-12 text-center border border-rose-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full opacity-40 blur-3xl"></div>
          <span className="relative z-10 text-rose-500 font-bold tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2">
            <Sparkles size={16} /> {service.category}
          </span>
          <h1 className="relative z-10 text-3xl md:text-6xl font-black text-slate-800 mb-6">{service.title}</h1>
          <p className="relative z-10 text-base md:text-xl text-slate-600 max-w-2xl mx-auto">{service.description}</p>
        </div>

        {/* İçerik ve Sticky Kart Grid'i */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
          
          {/* Sol: Detaylar */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                Uygulama Adımları
              </h3>
              <ul className="space-y-4 bg-slate-50 p-5 md:p-8 rounded-3xl border border-slate-100">
                {service.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 font-medium pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">İşlem Sonrası Dikkat Edilmesi Gerekenler</h3>
              <ul className="space-y-3">
                {service.aftercare.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ: Sticky (Sabit) Randevu Kartı */}
          <div className="sticky top-24 md:top-28 bg-white p-5 md:p-8 rounded-[2rem] shadow-xl shadow-rose-100 border border-rose-50">
            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-6 border-b border-rose-50">Hizmet Özeti</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Clock size={18} /> Süre</span>
                <span className="font-bold text-slate-800">{service.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Sparkles size={18} /> Başlangıç</span>
                <span className="font-bold text-rose-500 text-xl">{service.price}</span>
              </div>
            </div>

            <Link href={`/randevu?service=${service.slug}`} className="block w-full text-center bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-rose-200 transform hover:-translate-y-1 mb-4">
              Hemen Randevu Al
            </Link>
            
            <a href={siteConfig.company.whatsappLink} className="flex w-full items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-4 rounded-2xl transition-colors">
              <img src="/randevu-rezervasyon-sistemi/pink-whatsapp-logo.png" alt="" className="w-6 h-6 object-contain" />
              WhatsApp ile Soru Sor
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
