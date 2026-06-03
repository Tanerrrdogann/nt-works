"use client";

import { TouchEvent, useMemo, useState } from "react";
import type { Product } from "@/types/product";

const categoryGallery: Record<string, string[]> = {
  kolye: [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85",
  ],
  bileklik: [
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
  ],
  kupe: [
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=85",
  ],
  yuzuk: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1602752250015-52934bc45613?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85",
  ],
  set: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
  ],
};

function buildGallery(product: Product) {
  const existingImages = [product.imageUrl, ...(product.imageUrls ?? [])].filter(Boolean);
  const fallbackImages = categoryGallery[product.categorySlug ?? "kolye"] ?? categoryGallery.kolye;
  return Array.from(new Set([...existingImages, ...fallbackImages])).slice(0, 5);
}

export function ProductGallery({ product }: { product: Product }) {
  const gallery = useMemo(() => buildGallery(product), [product]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const selectedImage = gallery[selectedIndex] ?? product.imageUrl;

  function moveImage(direction: -1 | 1) {
    setSelectedIndex((current) => (current + direction + gallery.length) % gallery.length);
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX === null || gallery.length < 2) return;

    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 38) {
      moveImage(distance < 0 ? 1 : -1);
    }
    setTouchStartX(null);
  }

  return (
    <div className="detail-image">
      <div
        className="detail-main-image"
        onTouchEnd={handleTouchEnd}
        onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
      >
        <img src={selectedImage} alt={product.name} />
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        {gallery.length > 1 ? (
          <div className="product-slider-controls detail" aria-label="Ürün fotoğrafı değiştir">
            <button aria-label="Önceki ürün fotoğrafı" onClick={() => moveImage(-1)} type="button">‹</button>
            <span>{selectedIndex + 1}/{gallery.length}</span>
            <button aria-label="Sonraki ürün fotoğrafı" onClick={() => moveImage(1)} type="button">›</button>
          </div>
        ) : null}
        {gallery.length > 1 ? (
          <div className="product-swipe-hint detail" aria-label={`${gallery.length} ürün görseli`}>
            {gallery.map((url, index) => (
              <span className={index === selectedIndex ? "active" : ""} key={`${url}-detail-dot-${index}`} />
            ))}
          </div>
        ) : null}
      </div>
      {gallery.length > 1 ? (
        <div className="detail-gallery">
          {gallery.map((url, index) => (
            <button
              className={url === selectedImage ? "active" : ""}
              key={`${url}-${index}`}
              onClick={() => setSelectedIndex(index)}
              type="button"
            >
              <img src={url} alt={`${product.name} görseli ${index + 1}`} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
