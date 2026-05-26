import { siteConfig } from "@/config/site";
import { CalendarCheck, ShieldCheck, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Hijyen ve güven",
    desc: "Her uygulama öncesi steril alan, temiz ekipman ve doğru bilgilendirme standardı.",
  },
  {
    icon: <Users size={24} />,
    title: "Uzman ekip",
    desc: "Hizmete göre yönlendirilen uzmanlar ve kişisel bakım ihtiyacına uygun öneriler.",
  },
  {
    icon: <CalendarCheck size={24} />,
    title: "Planlı randevu",
    desc: "Tarih, saat, hizmet ve uzman seçimiyle bekleme süresini azaltan randevu akışı.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <section className="max-w-5xl mx-auto text-center bg-rose-50/70 border border-rose-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-14">
          <div className="inline-flex items-center gap-2 text-rose-500 font-black tracking-[0.2em] uppercase text-xs mb-5">
            <Sparkles size={16} fill="currentColor" /> Biz Kimiz?
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Güzellik, bakım ve randevu deneyimini tek akışta topluyoruz.
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.company.name} olarak cilt bakımı, lazer epilasyon, kaş-kirpik, el-ayak bakımı, saç bakımı ve spa hizmetlerinde planlı, güvenli ve kişiye özel bir bakım deneyimi sunuyoruz.
          </p>
          <p className="mt-5 text-rose-500 font-semibold italic">
            &quot;{siteConfig.company.slogan}&quot;
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-12">
          {values.map((item) => (
            <div className="bg-white border border-rose-100 rounded-2xl md:rounded-[2rem] p-4 md:p-7 shadow-sm shadow-rose-100/50" key={item.title}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center mb-3 md:mb-5">
                {item.icon}
              </div>
              <h2 className="text-sm md:text-xl font-black text-slate-800 mb-2 md:mb-3">{item.title}</h2>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10">
            <h2 className="text-3xl font-black mb-4">Bakım sürecimiz</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Müşteri önce hizmeti inceler, uzman ve uygun saati seçer, ardından WhatsApp üzerinden randevu onayı alır. Bu yapı, gerçek işletmeler için hızlı talep toplama ve düzenli planlama örneğidir.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <strong className="block text-3xl text-rose-300">{siteConfig.services.length}+</strong>
                <span className="text-sm text-white/70">hizmet seçeneği</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <strong className="block text-3xl text-rose-300">{siteConfig.specialists.length}</strong>
                <span className="text-sm text-white/70">uzman profili</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {siteConfig.process.map((item) => (
              <div className="bg-rose-50 border border-rose-100 rounded-2xl md:rounded-[2rem] p-3 md:p-6" key={item.step}>
                <span className="text-rose-400 font-black tracking-widest text-xs md:text-sm">{item.step}</span>
                <h3 className="text-sm md:text-lg font-black text-slate-800 mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
