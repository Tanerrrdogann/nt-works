import { siteConfig } from "@/config/site";

const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

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

function FloatingNav() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-[520px] -translate-x-1/2 rounded-full border border-white/35 bg-white/18 p-1 shadow-2xl backdrop-blur-2xl">
      <div className="grid grid-cols-4 gap-1">
        {siteConfig.panels.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-3 text-center text-xs font-black text-white/88 transition hover:bg-white/26 hover:text-white"
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
    <div className="mb-9">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">{label}</p>
      <h2 className="mt-3 text-4xl font-black leading-tight text-stone-950 sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">{text}</p> : null}
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
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/38 bg-[#f6efe5]/92 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <SectionTitle
            label="Menu"
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
                <div className="divide-y divide-stone-300">
                  {group.items.map(([name, description, price]) => (
                    <article key={name} className="grid gap-4 py-4 sm:grid-cols-[112px_1fr_auto] sm:items-center">
                      <img src={menuImages[name]} alt={name} className="h-24 w-full rounded-[18px] object-cover sm:w-28" />
                      <div>
                        <h4 className="text-lg font-black text-stone-950">{name}</h4>
                        <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
                      </div>
                      <p className="text-lg font-black text-stone-950">{price}</p>
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
            <img src={siteConfig.about.image} alt="Velora Coffee iç mekan" className="aspect-[4/5] w-full rounded-[28px] object-cover" />
          </div>
          <div className="rounded-[36px] border border-white/38 bg-[#f6efe5]/92 p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <SectionTitle label="About" title={siteConfig.about.title} />
            <p className="text-xl leading-9 text-stone-700">{siteConfig.about.text}</p>
            <div className="mt-8 grid gap-3">
              {siteConfig.about.notes.map((note) => (
                <p key={note} className="border-t border-stone-300 pt-4 text-lg font-black text-stone-950">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="relative z-10 min-h-screen px-5 py-28">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-white/38 bg-[#f6efe5]/92 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <SectionTitle label="Gallery" title="Mekanın hissini ilk bakışta gösteren kareler" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.gallery.map((image, index) => (
              <a key={image} href={image} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[24px]">
                <img src={image} alt={`Velora Coffee galeri ${index + 1}`} className="aspect-[3/4] w-full object-cover transition duration-500 hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/38 bg-[#f6efe5]/94 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-6 md:p-10">
            <SectionTitle label="Contact" title={siteConfig.contact.title} text={siteConfig.contact.description} />
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="grid min-h-28 content-between rounded-[24px] bg-stone-950 p-5 text-white transition hover:-translate-y-1">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/55">Mesaj</span>
                <strong className="text-lg font-black">WhatsApp</strong>
              </a>
              <a href={siteConfig.brand.mapsLink} target="_blank" rel="noreferrer" className="grid min-h-28 content-between rounded-[24px] border border-stone-300 bg-white/48 p-5 text-stone-950 transition hover:-translate-y-1 hover:bg-white/72">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Konum</span>
                <strong className="text-lg font-black">Yol Tarifi</strong>
              </a>
              <a href={siteConfig.brand.instagramLink} target="_blank" rel="noreferrer" className="grid min-h-28 content-between rounded-[24px] border border-stone-300 bg-white/48 p-5 text-stone-950 transition hover:-translate-y-1 hover:bg-white/72">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Sosyal</span>
                <strong className="text-lg font-black">Instagram</strong>
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-stone-300 bg-white/46 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Adres</p>
                <p className="mt-3 text-lg font-black leading-7 text-stone-950">{siteConfig.brand.address}</p>
                <a href={siteConfig.brand.phoneLink} className="mt-4 block text-sm font-black text-stone-600">
                  {siteConfig.brand.phone}
                </a>
                <a href={siteConfig.brand.emailLink} className="mt-1 block text-sm font-black text-stone-600">
                  {siteConfig.brand.email}
                </a>
              </div>
              <div className="rounded-[28px] border border-stone-300 bg-white/46 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Saatler</p>
                <div className="mt-3 divide-y divide-stone-200">
                  {siteConfig.hours.slice(0, 4).map(([day, hour]) => (
                    <div key={day} className="flex justify-between py-2 text-sm font-bold text-stone-700">
                      <span>{day}</span>
                      <span>{hour}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-stone-500">Hafta sonu 10.00’dan itibaren</p>
              </div>
            </div>
          </div>
            <div className="relative min-h-[420px] border-t border-stone-300 lg:border-l lg:border-t-0">
              <iframe
                src={siteConfig.brand.mapEmbed}
                title="Velora Coffee harita"
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
