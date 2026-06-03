"use client";

import { PointerEvent, useRef, useState } from "react";

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
  const pointerStart = useRef<number | null>(null);
  const activeImage = images[index] ?? images[0];

  function move(direction: -1 | 1) {
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null || images.length < 2) return;

    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < 35) return;
    move(distance > 0 ? -1 : 1);
  }

  if (!activeImage) {
    return (
      <div className={`${className} bg-zinc-950 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-sm">[GÖRSEL ALANI]</div>
      </div>
    );
  }

  return (
    <div
      className={`${className} catalog-image-slider bg-zinc-950 relative overflow-hidden`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
    >
      <img src={activeImage} alt={title} className="w-full h-full object-cover select-none" draggable={false} />
      {images.length > 1 ? (
        <div className="catalog-slider-controls" aria-label="Fotoğraf değiştir" onPointerDown={(event) => event.stopPropagation()}>
          <button aria-label="Önceki fotoğraf" onClick={() => move(-1)} type="button">‹</button>
          <span>{index + 1}/{images.length}</span>
          <button aria-label="Sonraki fotoğraf" onClick={() => move(1)} type="button">›</button>
        </div>
      ) : null}
    </div>
  );
}
