import { siteConfig } from "@/config/site";

const proposalMailUrl = `${siteConfig.brand.emailLink}&body=${encodeURIComponent(
  "Merhaba, NovaCore Teknoloji için proje / teklif görüşmesi yapmak istiyorum.",
)}`;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/14 bg-[#071225]/92 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="/kurumsal-web-sitesi" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center md:h-14 md:w-14">
            <img src="/kurumsal-web-sitesi/novacore-logo-transparent.png" alt="NovaCore logo" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block text-base font-black text-white">{siteConfig.brand.name}</span>
            <span className="block text-xs font-semibold text-slate-500">{siteConfig.brand.slogan}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-400 xl:flex">
          {siteConfig.nav.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-slate-100">
              {label}
            </a>
          ))}
        </nav>
        <a href={proposalMailUrl} className="corporate-button hidden border border-slate-200 bg-slate-200 px-5 py-3 text-sm font-black text-black hover:border-white hover:bg-white md:inline-flex">
          Teklif Al
        </a>
        <details className="group relative xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/24 text-white [&::-webkit-details-marker]:hidden">
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 bg-current transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="block h-0.5 w-5 bg-current transition group-open:opacity-0" />
              <span className="block h-0.5 w-5 bg-current transition group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-2rem))] border border-white/14 bg-[#071225] p-2 shadow-xl">
            {siteConfig.nav.map(([label, href]) => (
              <a key={href} href={href} className="block px-4 py-3 text-sm font-bold text-slate-300 hover:bg-white/8 hover:text-white">
                {label}
              </a>
            ))}
            <a href={proposalMailUrl} className="mt-2 block bg-slate-200 px-4 py-3 text-center text-sm font-black text-black">
              Teklif Al
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/14 bg-[#071225] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center">
              <img src="/kurumsal-web-sitesi/novacore-logo-transparent.png" alt="NovaCore logo" className="h-full w-full object-contain" />
            </span>
            <p className="text-xl font-black text-white">{siteConfig.brand.name}</p>
          </div>
          <p className="mt-3 leading-7">{siteConfig.brand.description}</p>
        </div>
        <div>
          <p className="font-black text-white">Hızlı Linkler</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold">
            {siteConfig.nav.slice(0, 7).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </div>
        <div>
          <p className="font-black text-white">Hizmetler</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold">
            {siteConfig.services.map((service) => <a key={service.slug} href={`/kurumsal-web-sitesi/hizmetler/${service.slug}`}>{service.title}</a>)}
          </div>
        </div>
        <div>
          <p className="font-black text-white">İletişim</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold">
            <a href={siteConfig.brand.phoneLink}>Telefon görüşmesi talebi</a>
            <a href={siteConfig.brand.emailLink}>{siteConfig.brand.email}</a>
            <a href={siteConfig.brand.mapsLink}>Toplantı bilgisi talebi</a>
            <a href={siteConfig.brand.linkedin}>LinkedIn görüşme maili</a>
            <a href={siteConfig.brand.instagram}>Sosyal medya görüşme maili</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/14 px-5 py-5 text-center text-sm font-semibold">
        © 2026 {siteConfig.brand.name}. Tüm hakları saklıdır. · Gizlilik Politikası · KVKK Aydınlatma Metni · Kullanım Şartları
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-white/14 bg-[#071225] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-black uppercase text-slate-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/14 bg-[#071225] p-2 shadow-2xl md:hidden">
      <a href={proposalMailUrl} className="bg-slate-200 px-3 py-3 text-center text-sm font-black text-black">Mail At</a>
      <a href="/kurumsal-web-sitesi/hizmetler" className="px-3 py-3 text-center text-sm font-black text-white">Hizmetler</a>
      <a href="/kurumsal-web-sitesi/iletisim" className="px-3 py-3 text-center text-sm font-black text-white">İletişim</a>
    </div>
  );
}
