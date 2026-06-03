"use client";

import { useState } from "react";
import VehicleImageSlider from "./VehicleImageSlider";
import WhatsAppIcon from "./WhatsAppIcon";

export default function VehicleDetailGallery({
  images,
  title,
  whatsapp,
}: {
  images: string[];
  title: string;
  whatsapp: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const moreImagesMessage = encodeURIComponent(
    `Merhaba, ${title} aracı için daha fazla fotoğraf görmek istiyorum.`,
  );

  return (
    <div className="flex flex-col gap-3">
      <VehicleImageSlider
        activeIndex={activeIndex}
        className="aspect-[16/9] border border-zinc-800 rounded-sm"
        images={images}
        onIndexChange={setActiveIndex}
        title={title}
      />

      <div className="grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((image, index) => (
          <button
            aria-label={`${title} görsel ${index + 1}`}
            className={`${activeIndex === index ? "border-red-600" : "border-zinc-800"} aspect-video bg-zinc-900 border rounded-sm overflow-hidden hover:border-red-600 transition-colors cursor-pointer`}
            key={image}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <img src={image} alt={`${title} görseli`} className="w-full h-full object-contain object-center" />
          </button>
        ))}

        <a
          href={`https://wa.me/${whatsapp}?text=${moreImagesMessage}`}
          target="_blank"
          rel="noreferrer"
          className="aspect-video bg-zinc-900 border border-zinc-800 rounded-sm flex flex-col gap-2 items-center justify-center text-zinc-200 text-center text-xs font-black uppercase tracking-widest hover:border-red-600 hover:bg-zinc-800 transition-colors"
        >
          <WhatsAppIcon className="w-9 h-9 object-contain" />
          Daha fazla fotoğraf iste
        </a>
      </div>
    </div>
  );
}
