"use client";

import { useRouter } from "next/navigation";
import { PointerEvent, useRef, useState } from "react";

export default function VehicleImageSlider({
  images,
  title,
  detailHref,
  activeIndex,
  onIndexChange,
  className = "",
}: {
  images: string[];
  title: string;
  detailHref?: string;
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}) {
  const router = useRouter();
  const [internalIndex, setInternalIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const index = activeIndex ?? internalIndex;
  const activeImage = images[index] ?? images[0];

  function move(direction: -1 | 1) {
    const nextIndex = (index + direction + images.length) % images.length;
    setInternalIndex(nextIndex);
    onIndexChange?.(nextIndex);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null || images.length < 2) return;

    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < 35) {
      if (detailHref && window.matchMedia("(max-width: 1023px)").matches) {
        router.push(detailHref);
      }
      return;
    }

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
      <img src={activeImage} alt={title} className="max-w-full max-h-full w-auto h-auto object-contain object-center select-none" draggable={false} />
      {images.length > 1 ? (
        <>
          <button
            aria-label="Önceki fotoğraf"
            className="catalog-slider-zone catalog-slider-zone-left"
            onClick={() => move(-1)}
            onPointerDown={(event) => event.stopPropagation()}
            type="button"
          />
          <button
            aria-label="Sonraki fotoğraf"
            className="catalog-slider-zone catalog-slider-zone-right"
            onClick={() => move(1)}
            onPointerDown={(event) => event.stopPropagation()}
            type="button"
          />
        </>
      ) : null}
    </div>
  );
}
