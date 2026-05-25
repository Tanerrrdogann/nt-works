import Link from "next/link";
import { siteConfig } from "../src/config/site.config";
import VehicleCard from "../src/components/VehicleCard";

export default function Home() {
  const featuredVehicles = siteConfig.vehicles.filter(v => v.featured);

  return (
    <div>
      {/* Hero Alanı (Agresif / Koyu) */}
      <section className="relative bg-zinc-950 py-32 px-4 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 via-zinc-950 to-zinc-950"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            Güç, Güven ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Prestij</span>
          </h1>
          <p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto mb-10 tracking-widest uppercase text-sm">
            {siteConfig.company.slogan}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/araclar" className="bg-red-600 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-red-700 transition-colors">Stokları İncele</Link>
            <a href={`tel:${siteConfig.company.phone}`} className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:border-red-600 transition-colors">Randevu Al</a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Premium Vitrin</h2>
            </div>
            <Link href="/araclar" className="hidden md:block text-sm font-bold text-red-600 uppercase tracking-widest hover:text-white transition-colors">Tüm Stoğu Gör &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
