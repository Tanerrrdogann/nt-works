import Link from "next/link";
import { siteConfig } from "../config/site.config";
import VehicleImageSlider from "./VehicleImageSlider";

export default function VehicleCard({ vehicle }: { vehicle: typeof siteConfig.vehicles[0] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden group flex flex-col hover:border-red-600/50 transition-colors">
      <div className="aspect-[4/3] bg-zinc-950 relative overflow-hidden">
        <VehicleImageSlider className="absolute inset-0" images={vehicle.images} title={vehicle.title} />
        {vehicle.featured && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm">
            Öne Çıkan
          </span>
        )}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        <span className="absolute bottom-3 right-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm">
          {vehicle.images.length} fotoğraf
        </span>
      </div>
      
      <div className="p-5 flex-grow flex flex-col border-t border-zinc-800 z-10 relative">
        <h3 className="font-bold text-white text-lg leading-tight uppercase tracking-wide">{vehicle.brand} {vehicle.model}</h3>
        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{vehicle.version}</p>
        
        <div className="text-2xl font-black text-red-500 my-4 tracking-tighter">{vehicle.price}</div>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-zinc-300 mb-6 font-medium uppercase tracking-wider">
          <div className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">YIL</span> {vehicle.year}</div>
          <div className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">KM</span> {vehicle.km}</div>
          <div className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">YAKIT</span> {vehicle.fuel}</div>
          <div className="flex items-center gap-2 bg-zinc-950/50 p-2 rounded-sm"><span className="text-zinc-500">VİTES</span> {vehicle.transmission}</div>
        </div>
        
        <div className="mt-auto grid grid-cols-2 gap-3">
          <Link href={`/araclar/${vehicle.slug}`} className="text-center py-3 bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-zinc-700 transition-colors">
            İncele
          </Link>
          <a href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, ${vehicle.title} aracı hakkında bilgi almak istiyorum.`} target="_blank" rel="noreferrer" className="text-center py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-red-700 transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
