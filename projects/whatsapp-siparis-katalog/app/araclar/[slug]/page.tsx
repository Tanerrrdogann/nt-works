import { siteConfig } from "../../../src/config/site.config";
import VehicleImageSlider from "../../../src/components/VehicleImageSlider";
import VehicleQuestionBox from "../../../src/components/VehicleQuestionBox";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteConfig.vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export default async function VehicleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = siteConfig.vehicles.find(v => v.slug === slug);
  if (!vehicle) notFound();
  const moreImagesMessage = encodeURIComponent(`Merhaba, ${vehicle.title} aracı için daha fazla fotoğraf görmek istiyorum.`);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 md:py-12 w-full">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{vehicle.title}</h1>
        <div className="flex flex-wrap gap-3">
          {vehicle.tags.map(tag => (
            <span key={tag} className="bg-red-600 text-white px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider">{tag}</span>
          ))}
          <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center">
            📍 {vehicle.location}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Sol Alan: Görsel Galerisi & Detaylar */}
        <div className="flex-1 space-y-10">
          
          <div className="flex flex-col gap-3">
            <VehicleImageSlider className="aspect-[16/9] border border-zinc-800 rounded-sm" images={vehicle.images} title={vehicle.title} />
            <div className="grid grid-cols-4 gap-3">
               {vehicle.images.slice(1, 5).map((image) => (
                 <div key={image} className="aspect-video bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-red-600 transition-colors">
                   <img src={image} alt={`${vehicle.title} görseli`} className="w-full h-full object-cover" />
                 </div>
               ))}
               <a
                 href={`https://wa.me/${siteConfig.company.whatsapp}?text=${moreImagesMessage}`}
                 target="_blank"
                 rel="noreferrer"
                 className="aspect-video bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-200 text-center text-xs font-black uppercase tracking-widest hover:border-red-600 hover:bg-zinc-800 transition-colors"
               >
                 Daha fazla fotoğraf iste
               </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-5 md:p-8">
            <h2 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-zinc-800 pb-4">Araç Açıklaması</h2>
            <p className="text-zinc-300 whitespace-pre-line leading-relaxed font-medium">{vehicle.description}</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-5 md:p-8">
            <h2 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-zinc-800 pb-4">Donanım Listesi</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4">
              {vehicle.features.map(feature => (
                <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <VehicleQuestionBox vehicleTitle={vehicle.title} whatsapp={siteConfig.company.whatsapp} />

          {/* SSS Akordeon - Native HTML details tag ile */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-5 md:p-8">
            <h2 className="text-xl font-black uppercase tracking-widest text-white mb-6 border-b border-zinc-800 pb-4">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              <details className="group border border-zinc-800 bg-zinc-950 p-4 rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white uppercase tracking-wider text-sm">
                  Araçlar ekspertizli mi?
                  <span className="transition group-open:rotate-180 text-red-600">▼</span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">Evet, tüm araçlarımız bağımsız ekspertiz firmaları tarafından detaylı olarak incelenmektedir. Raporlarımızı yerinde görebilirsiniz.</p>
              </details>
              <details className="group border border-zinc-800 bg-zinc-950 p-4 rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white uppercase tracking-wider text-sm">
                  Takas imkanı var mı?
                  <span className="transition group-open:rotate-180 text-red-600">▼</span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm leading-relaxed">Aracınızın ekspertiz durumuna ve piyasa şartlarına göre takas değerlendirmesi yapmaktayız.</p>
              </details>
            </div>
          </div>

        </div>

        {/* Sağ Alan: Sticky Satış Kartı */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-5 md:p-8 sticky top-24 md:top-28 shadow-2xl">
            <div className="text-3xl md:text-4xl font-black text-red-500 mb-6 md:mb-8 tracking-tighter">{vehicle.price}</div>
            
            <div className="space-y-4 text-sm border-b border-zinc-800 pb-8 mb-8">
              <div className="flex justify-between items-center"><span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Yıl</span><span className="font-black text-white">{vehicle.year}</span></div>
              <div className="flex justify-between items-center"><span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Kilometre</span><span className="font-black text-white">{vehicle.km} km</span></div>
              <div className="flex justify-between items-center"><span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Yakıt</span><span className="font-black text-white">{vehicle.fuel}</span></div>
              <div className="flex justify-between items-center"><span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Vites</span><span className="font-black text-white">{vehicle.transmission}</span></div>
              <div className="flex justify-between items-center"><span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Motor</span><span className="font-black text-white">{vehicle.engine} - {vehicle.power}</span></div>
            </div>

            <div className="space-y-4">
              <a href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, ${vehicle.title} aracı için bilgi almak istiyorum.`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-red-600 text-white rounded-sm py-4 font-black uppercase tracking-widest hover:bg-red-700 transition-colors">
                WhatsApp İle Sor
              </a>
              <a href={`tel:${siteConfig.company.phone}`} className="w-full flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 text-white rounded-sm py-4 font-black uppercase tracking-widest hover:border-red-600 transition-colors">
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
