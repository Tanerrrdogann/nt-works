"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

const displayHours = [
  ["Hafta içi", "09.00 - 22.00"],
  ["Hafta sonu", "10.00 - 23.00"],
];

const menuImages: Record<string, string> = {
  Espresso: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=420&q=80",
  Americano: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=420&q=80",
  Latte: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=420&q=80",
  Cappuccino: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=420&q=80",
  "Flat White": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=420&q=80",
  Mocha: "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?auto=format&fit=crop&w=420&q=80",
  "Iced Americano": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=420&q=80",
  "Iced Latte": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=420&q=80",
  "Cold Brew": "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=420&q=80",
  "Espresso Tonic": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=420&q=80",
  "Caramel Frappe": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=420&q=80",
  Kruvasan: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=420&q=80",
  "Avokado Tost": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=420&q=80",
  "Hindi Füme Sandviç": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=420&q=80",
  "Mozzarella Tost": "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=420&q=80",
  "Granola Bowl": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=420&q=80",
  "Margherita Pizza": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=420&q=80",
  "Füme Etli Pizza": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=420&q=80",
  "Pesto Makarna": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=420&q=80",
  "Kremalı Tavuklu Makarna": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=420&q=80",
  "Sezar Salata": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=420&q=80",
  "San Sebastian Cheesecake": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=420&q=80",
  Brownie: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=420&q=80",
  "Limonlu Cheesecake": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=420&q=80",
  Tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=420&q=80",
  "Cookie Plate": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=420&q=80",
  "Ev Yapımı Limonata": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=420&q=80",
  "Berry Iced Tea": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=420&q=80",
  "Portakal Suyu": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=420&q=80",
  "Soda & Lime": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=420&q=80",
};

function ContactIcon({ type }: { type: "whatsapp" | "instagram" | "location" }) {
  const imageClass = "h-full w-full object-contain";

  if (type === "whatsapp") {
    return (
      <span className="grid h-9 w-9 place-items-center md:h-10 md:w-10">
        <img src="/landing-page/whatsapp-icon.png" alt="" className={`${imageClass} scale-125`} />
      </span>
    );
  }

  if (type === "instagram") {
    return (
      <span className="grid h-9 w-9 place-items-center md:h-10 md:w-10">
        <img src="/landing-page/instagram-icon.png" alt="" className={imageClass} />
      </span>
    );
  }

  return (
    <span className="grid h-9 w-9 place-items-center md:h-10 md:w-10">
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-[#9a7442]" aria-hidden="true">
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="2" />
      </svg>
    </span>
  );
}

function FloatingNav() {
  const [activeSection, setActiveSection] = useState(siteConfig.panels[0].href.slice(1));

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const marker = window.scrollY + window.innerHeight * 0.42;
      const nextSection =
        siteConfig.panels
          .map((item) => document.getElementById(item.href.slice(1)))
          .filter((section): section is HTMLElement => Boolean(section))
          .reduce((active, section) => (section.offsetTop <= marker ? section.id : active), siteConfig.panels[0].href.slice(1));

      setActiveSection(nextSection);
    }

    function handleScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-16px)] max-w-[360px] -translate-x-1/2 rounded-full border border-white/35 bg-white/18 p-1 shadow-2xl backdrop-blur-2xl md:top-5 md:max-w-[520px]">
      <div className="grid grid-cols-4 gap-0.5 md:gap-1">
        {siteConfig.panels.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveSection(item.href.slice(1))}
            className={`rounded-full px-1.5 py-2.5 text-center text-[10px] font-black leading-none text-white/88 transition hover:bg-white/26 hover:text-white sm:px-3 sm:py-3 sm:text-xs ${
              activeSection === item.href.slice(1) ? "bg-white/34 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.28)]" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SectionTitle({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="mb-7 md:mb-9">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">{label}</p>
      <h2 className="mt-3 text-2xl font-black leading-tight text-stone-950 sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-600 md:text-lg md:leading-8">{text}</p> : null}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="landing-stage relative min-h-screen overflow-x-hidden text-stone-950">
      <div
        className="landing-backdrop"
        style={{
          backgroundImage: `linear-gradient(104deg, rgba(18,15,13,.14) 0%, rgba(18,15,13,.2) 45%, transparent 45.2%), url(${siteConfig.hero.landingImage})`,
        }}
      />
      <FloatingNav />

      <section id="menu" className="relative z-10 min-h-screen px-5 py-28">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-white/38 bg-[#f6efe5]/92 p-4 shadow-2xl backdrop-blur-xl md:rounded-[36px] md:p-10">
          <SectionTitle
            label="Menü"
            title="Günün her saatine uygun geniş kafe menüsü"
            text="Sıcak kahve, soğuk kahve, kahvaltı, pizza, makarna, tatlı ve ferah içecekler kategori kategori listelenir."
          />
          <div className="space-y-10">
            {siteConfig.menu.map((group) => (
              <div key={group.category}>
                <div className="mb-4 flex items-end justify-between border-b border-stone-300 pb-3">
                  <h3 className="text-2xl font-black text-stone-950">{group.category}</h3>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Velora</p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:block md:divide-y md:divide-stone-300">
                  {group.items.map(([name, description, price]) => (
                    <article key={name} className="overflow-hidden rounded-[20px] bg-white/42 p-2 md:grid md:grid-cols-[112px_1fr_auto] md:items-center md:gap-4 md:rounded-none md:bg-transparent md:p-0 md:py-4">
                      <img src={menuImages[name]} alt={name} className="aspect-square w-full rounded-[16px] object-cover md:h-28 md:w-28" />
                      <div>
                        <h4 className="mt-2 text-sm font-black leading-5 text-stone-950 md:mt-0 md:text-lg">{name}</h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-600 md:text-sm md:leading-6">{description}</p>
                      </div>
                      <p className="mt-2 text-sm font-black text-stone-950 md:mt-0 md:text-lg">{price}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="relative z-10 min-h-screen px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[36px] border border-white/38 bg-white/18 p-4 shadow-2xl backdrop-blur-xl">
            <img src={siteConfig.about.image} alt="Velora Kafe iç mekan" className="aspect-[16/10] w-full rounded-[28px] object-cover lg:aspect-[4/5]" />
          </div>
          <div className="rounded-[36px] border border-white/38 bg-[#f6efe5]/92 p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <SectionTitle label="Hakkımızda" title={siteConfig.about.title} />
            <p className="text-base leading-7 text-stone-700 md:text-xl md:leading-9">{siteConfig.about.text}</p>
            <div className="mt-8 grid gap-3">
              {siteConfig.about.notes.map((note) => (
                <p key={note} className="border-t border-stone-300 pt-4 text-sm font-black text-stone-950 md:text-lg">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="relative z-10 min-h-screen px-5 py-28">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-white/38 bg-[#f6efe5]/92 p-4 shadow-2xl backdrop-blur-xl md:rounded-[36px] md:p-10">
          <SectionTitle label="Galeri" title="Mekanın hissini ilk bakışta gösteren kareler" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {siteConfig.gallery.map((image, index) => (
              <a key={image} href={image} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[24px]">
                <img src={image} alt={`Velora Kafe galeri ${index + 1}`} className="aspect-square w-full object-cover transition duration-500 hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/38 bg-[#f6efe5]/94 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-5 md:p-10">
            <SectionTitle label="İletişim" title={siteConfig.contact.title} text={siteConfig.contact.description} />
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="grid min-h-24 content-center justify-items-center gap-2 rounded-[22px] bg-stone-950 p-3 text-white transition hover:-translate-y-1 md:min-h-28 md:content-between md:justify-items-start md:p-5">
                <ContactIcon type="whatsapp" />
                <strong className="text-xs font-black md:text-lg">WhatsApp</strong>
              </a>
              <a href={siteConfig.brand.mapsLink} target="_blank" rel="noreferrer" className="grid min-h-24 content-center justify-items-center gap-2 rounded-[22px] border border-stone-300 bg-white/58 p-3 text-stone-950 transition hover:-translate-y-1 hover:bg-white/72 md:min-h-28 md:content-between md:justify-items-start md:p-5">
                <ContactIcon type="location" />
                <strong className="text-xs font-black md:text-lg">Konum</strong>
              </a>
              <a href={siteConfig.brand.instagramLink} target="_blank" rel="noreferrer" className="grid min-h-24 content-center justify-items-center gap-2 rounded-[22px] border border-stone-300 bg-white/58 p-3 text-stone-950 transition hover:-translate-y-1 hover:bg-white/72 md:min-h-28 md:content-between md:justify-items-start md:p-5">
                <ContactIcon type="instagram" />
                <strong className="text-xs font-black md:text-lg">Instagram</strong>
              </a>
            </div>

            <div className="mt-4 rounded-[24px] border border-stone-300 bg-white/46 p-4 md:hidden">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Saatler</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-bold text-stone-700">
                {displayHours.map(([label, hour]) => (
                  <div key={label} className="rounded-[18px] bg-white/58 p-3">
                    <span className="block text-xs uppercase tracking-[0.12em] text-stone-500">{label}</span>
                    <span className="mt-1 block text-stone-950">{hour}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 hidden gap-3 md:mt-8 md:grid md:grid-cols-2 md:gap-4">
              <div className="rounded-[24px] border border-stone-300 bg-white/46 p-4 md:rounded-[28px] md:p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Adres</p>
                <p className="mt-3 text-sm font-black leading-6 text-stone-950 md:text-lg md:leading-7">{siteConfig.brand.address}</p>
                <a href={siteConfig.brand.phoneLink} className="mt-4 block text-xs font-black text-stone-600 md:text-sm">
                  {siteConfig.brand.phone}
                </a>
                <a href={siteConfig.brand.emailLink} className="mt-1 block text-xs font-black text-stone-600 md:text-sm">
                  {siteConfig.brand.email}
                </a>
              </div>
              <div className="rounded-[24px] border border-stone-300 bg-white/46 p-4 md:rounded-[28px] md:p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Saatler</p>
                <div className="mt-3 grid gap-3">
                  {displayHours.map(([label, hour]) => (
                    <div key={label} className="rounded-[18px] bg-white/58 p-3 text-sm font-bold text-stone-700">
                      <span className="block text-xs uppercase tracking-[0.12em] text-stone-500">{label}</span>
                      <span>{hour}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            <div className="relative min-h-[280px] border-t border-stone-300 md:min-h-[360px] lg:border-l lg:border-t-0">
              <iframe
                src={siteConfig.brand.mapEmbed}
                title="Velora Kafe harita"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
