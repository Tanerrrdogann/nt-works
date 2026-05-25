"use client";

import { useState } from "react";

export default function VehicleImageSlider({
  images,
  title,
  className = "",
}: {
  images: string[];
  title: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const activeImage = images[index] ?? images[0];

  function move(direction: -1 | 1) {
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  if (!activeImage) {
    return (
      <div className={`${className} bg-zinc-950 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-sm">[GÖRSEL ALANI]</div>
      </div>
    );
  }

  return (
    <div className={`${className} bg-zinc-950 relative overflow-hidden`}>
      <img src={activeImage} alt={title} className="w-full h-full object-cover" />
      {images.length > 1 ? (
        <div className="catalog-slider-controls" aria-label="Fotoğraf değiştir">
          <button aria-label="Önceki fotoğraf" onClick={() => move(-1)} type="button">‹</button>
          <span>{index + 1}/{images.length}</span>
          <button aria-label="Sonraki fotoğraf" onClick={() => move(1)} type="button">›</button>
        </div>
      ) : null}
    </div>
  );
}
