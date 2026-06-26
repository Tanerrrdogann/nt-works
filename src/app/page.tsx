"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import RatingStars from "@/components/RatingStars";
import { bionlukStats, testimonials } from "@/data/testimonials";
import { techStack } from "@/data/tech-stack";
import { servicesData } from "@/data/services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -42 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 42 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const staticReveal: Variants = {
  hidden: { opacity: 1, x: 0, y: 0 },
  show: { opacity: 1, x: 0, y: 0 },
};

const staticStagger: Variants = {
  hidden: {},
  show: {},
};

const processSteps = ["İhtiyacınızı yazarsınız", "Uygun yapı seçilir", "Kapsam belirlenir", "Önizleme paylaşılır", "Yayına alınır"];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const disableSectionMotion = prefersReducedMotion || isMobile;
  const sectionFadeUp = disableSectionMotion ? staticReveal : fadeUp;
  const sectionSlideLeft = disableSectionMotion ? staticReveal : slideLeft;
  const sectionSlideRight = disableSectionMotion ? staticReveal : slideRight;
  const sectionStagger = disableSectionMotion ? staticStagger : stagger;

  return (
    <main className="premium-stage relative text-white overflow-hidden pt-20">
      <div className="premium-grid absolute inset-0 z-0" />
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-orb hero-orb-one" />
        <span className="hero-orb hero-orb-two" />
        <span className="hero-orb hero-orb-three" />
      </div>
      
      <section className="relative z-10 px-6 pb-24 pt-32 md:pb-32">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" animate="show" variants={stagger}>
          <h1 className="max-w-6xl text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
            <motion.span variants={fadeUp} className="block">İşletmeniz için web sitesi, katalog,</motion.span>
            <motion.span variants={fadeUp} className="block text-gray-500">
              e-ticaret ve özel sistemler <span className="rotating-word" aria-label="geliştiriyoruz tasarlıyoruz yayına alıyoruz büyütüyoruz"><span>geliştiriyoruz.</span><span>tasarlıyoruz.</span><span>yayına alıyoruz.</span><span>büyütüyoruz.</span></span>
            </motion.span>
          </h1>
          <motion.p variants={fadeUp} className="max-w-3xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            Web sitesi, ürün katalog sistemi, WhatsApp sipariş akışı, randevu/rezervasyon altyapısı, e-ticaret, admin panel, entegrasyon ve özel yazılım çözümlerini işletmenizin ihtiyacına göre planlayıp geliştiriyoruz.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link href="/services" className="shimmer-button magnetic-button flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm font-bold transition-all">
              Hizmetleri İncele <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="magnetic-button flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-200/8 transition-all">
              Teklif Al
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-gray-400 px-4 py-4 font-medium hover:text-white transition-all underline-offset-4 hover:underline">
              Yaklaşımımızı Oku
            </Link>
            <Link href="/projects" className="flex items-center gap-2 text-gray-400 px-4 py-4 font-medium hover:text-white transition-all underline-offset-4 hover:underline">
              Canlı Örnekleri Gör
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 px-4 md:px-6 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            ["Bionluk değerlendirmesi", `${bionlukStats.reviewCount} doğrulanmış yorum ve ${bionlukStats.completedOrders} tamamlanan sipariş görünürlüğü.`],
            ["Canlı demo", "Müşteri ne alacağını yalnızca metinden değil, çalışan örneklerden görür."],
            ["Net kapsam", "Sayfa, modül, teslim ve ek geliştirme sınırları baştan konuşulur."],
            ["Bakım desteği", "Teslim sonrası geliştirme ve bakım ihtiyacı ayrıca planlanabilir."],
          ].map(([title, text]) => (
            <motion.div key={title} variants={sectionFadeUp} className="border border-white/10 bg-[#071225]/70 p-4 md:p-5">
              <h2 className="text-sm md:text-base font-bold text-white">{title}</h2>
              {title === "Bionluk değerlendirmesi" && <div className="mt-3"><RatingStars rating={bionlukStats.rating} inline /></div>}
              <p className="mt-2 text-xs md:text-sm leading-6 text-gray-500">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionFadeUp} className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-medium mb-4">Bionluk üzerinden doğrulanmış müşteri yorumları</h2>
              <p className="mobile-compact-text max-w-3xl text-gray-400">Şimdilik yayına alınan yorumlar Bionluk profilindeki doğrulanmış 5 yıldızlı değerlendirmelerden oluşur.</p>
            </div>
            <Link href="/testimonials" className="w-fit border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              Tüm Yorumlar
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.slug} variants={sectionFadeUp} className="premium-panel border border-white/10 bg-[#101010]/88 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-white">{testimonial.displayName}</h3>
                  <RatingStars rating={testimonial.rating} label="Puan" inline />
                </div>
                <p className="mt-2 text-xs text-gray-500">{testimonial.projectType}</p>
                <p className="mt-4 text-sm leading-7 text-gray-400">{testimonial.text}</p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-gray-500">Bionluk doğrulanmış yorum</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionSlideLeft} className="mb-16">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">İşletmeniz için hazırlanabilecek sistem türleri</h2>
            <p className="mobile-compact-text text-gray-400 max-w-2xl">Kurumsal site, katalog, WhatsApp sipariş, e-ticaret, randevu ve admin panel gibi yapılar ihtiyaca göre tek projede birleştirilebilir.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {servicesData.map((srv) => (
              <motion.div key={srv.slug} variants={sectionFadeUp}>
                <Link href={`/services/${srv.slug}`} className="premium-card mobile-compact-card group relative flex h-full min-h-[12.5rem] md:min-h-[17rem] flex-col items-center justify-center overflow-hidden bg-[#0b1830]/82 p-4 md:p-8 text-center border border-white/10 backdrop-blur-xl">
                  <span className="card-sheen" aria-hidden="true" />
                  <h3 className="text-base md:text-xl font-medium mb-3 relative z-10">{srv.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm relative z-10 mb-5 md:mb-7 leading-5 md:leading-6">{srv.shortDesc}</p>
                  <span className="details-pill relative z-10 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white/50 transition-all group-hover:text-white">
                    Detaylı Öğren <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={sectionFadeUp} className="mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">İhtiyaca göre başlangıç noktaları</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              ["Tanıtım Sitesi", ["Kurumsal web sitesi", "Landing page", "İletişim ve teklif akışı"]],
              ["Satış / Katalog Sistemi", ["Ürün katalog", "WhatsApp sipariş", "E-ticaret başlangıcı"]],
              ["Özel Panel / Yazılım", ["Admin panel", "Randevu / görev / stok", "Özel iş akışları"]],
              ["Canlı Örnekten Uyarlama", ["Mevcut örnek seçimi", "İçerik düzenleme", "Yayına hazırlık"]],
            ].map(([title, items]) => (
              <motion.div key={title as string} variants={sectionFadeUp} className="premium-panel mobile-compact-card border border-white/10 bg-[#101010]/88 p-4 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">{title as string}</h3>
                <ul className="space-y-2 md:space-y-4 text-xs md:text-base text-gray-400">
                  {(items as string[]).map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionFadeUp} className="mb-14">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">Hangi problemleri çözüyoruz?</h2>
            <p className="mobile-compact-text text-gray-400 max-w-3xl">Amaç sadece sayfa yapmak değil; işletmenin dağınık işlerini daha yönetilebilir ve teklif alınabilir hale getirmek.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Excel ve WhatsApp dağınıklığı", "Müşteri, stok, sipariş, görev veya ödeme takibini tek panelde toplamak."],
              ["Ne alacağını görememe", "Canlı örneklerle müşterinin karar vermeden önce sistemi gezebilmesini sağlamak."],
              ["Belirsiz kapsam ve fiyat", "Proje başlamadan önce modül, teslim, destek ve ek iş sınırlarını netleştirmek."],
            ].map(([title, text]) => (
              <motion.div key={title} variants={sectionFadeUp} className="premium-panel border border-white/10 bg-[#101010]/88 p-6">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-500">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionFadeUp} className="mb-14 text-center">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">Kimler için çalışıyoruz?</h2>
            <p className="mobile-compact-text mx-auto max-w-3xl text-gray-400">Küçük işletmelerden özel yazılım ihtiyacı olan ekiplere kadar, kapsamı netleşebilen ve çalışan sistem isteyen projelerle ilerliyoruz.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionStagger} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {["Hizmet işletmeleri", "Butik ve katalog satıcıları", "Randevulu çalışan ekipler", "E-ticaret satıcıları", "Stok/sipariş takip eden firmalar", "Ajans ve operasyon ekipleri", "Entegrasyon ihtiyacı olanlar", "Özel panel isteyen işletmeler"].map((item) => (
              <motion.div key={item} variants={sectionFadeUp} className="border border-white/10 bg-[#071225]/55 p-4 text-center text-sm font-semibold leading-6 text-gray-300">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mobile-tight-section py-24 px-4 md:px-6 bg-[#071225]/58 border-y border-white/10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionFadeUp} className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Projelerde kullanılan teknolojiler</h2>
          <p className="mobile-compact-text text-gray-400 max-w-2xl mx-auto mb-12">Projeler gerçek web uygulamalarında kullanılan pratik ve tam kapsamlı geliştirme araçları üzerine kuruludur.</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.span initial={disableSectionMotion ? false : { opacity: 0, y: 18 }} whileInView={disableSectionMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.025 }} key={tech} className="tech-chip px-3 md:px-6 py-2 md:py-3 bg-[#0b1830]/88 border border-white/10 text-gray-300 rounded-sm font-medium cursor-default">
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 md:py-32 px-6">
        <div className="mx-auto grid max-w-5xl justify-center gap-12 lg:grid-cols-[minmax(0,560px)_360px] lg:items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionSlideLeft}>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">Dükkan sahibinin anlayacağı, kullanacağı ve güveneceği sistemler.</h2>
            <div className="space-y-6 mt-12">
              {[
                { title: "Ne Alacağınızı Baştan Netleştirin", desc: "Sayfa yapısı, modüller, yönetim paneli ihtiyacı ve teslim kapsamı proje başlamadan önce anlaşılır şekilde belirlenir." },
                { title: "Mobil Uyumlu Yapı", desc: "Web sitesi ve paneller telefon, tablet ve bilgisayarda rahat kullanılacak şekilde hazırlanır." },
                { title: "Net Kapsam", desc: "Sayfa sayısı, modüller, ekstra istekler, teslim süreci ve fiyatlandırma baştan konuşulur." },
                { title: "Güvenli İlerleme", desc: "İstenirse süreç Bionluk üzerinden özel teklif veya paket mantığıyla ilerletilebilir." }
              ].map((item, i) => (
                <motion.div key={item.title} initial={disableSectionMotion ? false : { opacity: 0, x: -18 }} whileInView={disableSectionMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4">
                  <CheckCircle2 className="text-white shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} variants={sectionSlideRight} className="process-card relative mx-auto w-full max-w-[360px] overflow-hidden border border-white/10 bg-[#0b1830]/88 p-8">
            <h3 className="text-2xl font-medium mb-8 border-b border-white/10 pb-6">Nasıl ilerliyoruz?</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:bg-white/10">
              <span className="process-line" aria-hidden="true" />
              {processSteps.map((step, i) => (
                <motion.div key={step} initial={disableSectionMotion ? false : { opacity: 0, x: 28 }} whileInView={disableSectionMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#071225]/88 border-2 border-white flex items-center justify-center text-[10px] font-bold">{i + 1}</div>
                  <p className="text-gray-300 font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-static-band relative z-10 py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Hangi sistemin uygun olduğunu bilmiyorsanız birlikte netleştirebiliriz.</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">İşletmenizi, ihtiyacınızı ve istediğiniz özellikleri yazmanız yeterli. Uygun yapı, kapsam, süre ve fiyat birlikte netleştirilebilir.</p>
          <Link href="/contact" className="shimmer-button cta-static-button inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold transition-all shadow-xl">
            Projem İçin Teklif Al <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
