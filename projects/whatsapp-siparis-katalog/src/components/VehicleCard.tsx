import Link from "next/link";
import { siteConfig } from "../config/site.config";
import VehicleImageSlider from "./VehicleImageSlider";

export default function VehicleCard({ vehicle }: { vehicle: typeof siteConfig.vehicles[0] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden group flex flex-col hover:border-red-600/50 transition-colors">
      <div className="aspect-[4/3] bg-zinc-950 relative overflow-hidden">
        <VehicleImageSlider
          className="absolute inset-0"
          detailHref={`/araclar/${vehicle.slug}`}
          images={vehicle.images}
          title={vehicle.title}
        />
        {vehicle.featured && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm">
            Öne Çıkan
          </span>
        )}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
      </div>
      
      <div className="p-3 md:p-5 flex-grow flex flex-col border-t border-zinc-800 z-10 relative">
        <Link href={`/araclar/${vehicle.slug}`} className="lg:pointer-events-none">
          <h3 className="font-bold text-white text-sm leading-tight md:text-lg uppercase tracking-wide">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="hidden lg:block text-xs text-zinc-400 mt-1 uppercase tracking-wider line-clamp-1">
            {vehicle.version}
          </p>
          <div className="text-lg md:text-2xl font-black text-red-500 mt-2 mb-3 md:mt-4 md:mb-6 tracking-tighter">
            {vehicle.price}
          </div>
        </Link>

        <div className="hidden lg:grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-zinc-300 mb-6 font-medium uppercase tracking-wider">
          <div className="grid gap-0.5 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">YIL</span> {vehicle.year}</div>
          <div className="grid gap-0.5 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">KM</span> {vehicle.km}</div>
          <div className="grid gap-0.5 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">YAKIT</span> {vehicle.fuel}</div>
          <div className="grid gap-0.5 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">VİTES</span> {vehicle.transmission}</div>
        </div>

        <div className="hidden lg:block mt-auto">
          <Link href={`/araclar/${vehicle.slug}`} className="block w-full text-center py-2.5 md:py-3 bg-zinc-800 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-zinc-700 transition-colors">
            İncele
          </Link>
        </div>
      </div>
    </div>
  );
}
