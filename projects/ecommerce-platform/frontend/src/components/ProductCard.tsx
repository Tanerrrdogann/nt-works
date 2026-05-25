"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice, getProductDisplayPrice } from "@/lib/products";
import { AddToCartButton } from "@/components/AddToCartButton";
import { StarRating } from "@/components/StarRating";
import { getAverageRating, initialProductReviews } from "@/lib/reviews";
import type { Product } from "@/types/product";

const cardFallbackImages: Record<string, string[]> = {
  kolye: [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
  ],
  bileklik: [
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=85",
  ],
  kupe: [
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
  ],
  yuzuk: [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=85",
  ],
  set: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=85",
  ],
};

export function ProductCard({ product }: { product: Product }) {
  const displayPrice = getProductDisplayPrice(product);
  const hasVisibleDiscount = displayPrice < product.price;
  const fallbackImages = cardFallbackImages[product.categorySlug ?? "kolye"] ?? cardFallbackImages.kolye;
  const gallery = Array.from(new Set([product.imageUrl, ...(product.imageUrls ?? []), ...fallbackImages].filter(Boolean))).slice(0, 5);
  const [imageIndex, setImageIndex] = useState(0);
  const activeImage = gallery[imageIndex] ?? product.imageUrl;
  const reviews = initialProductReviews[product.slug] ?? [];
  const averageRating = getAverageRating(reviews);

  function moveImage(direction: -1 | 1) {
    setImageIndex((current) => (current + direction + gallery.length) % gallery.length);
  }

  return (
    <article className="product-card">
      <div className="product-image-link">
        <Link href={`/products/${product.slug}`} aria-label={`${product.name} detayını aç`}>
          <img src={activeImage} alt={product.name} />
        </Link>
        {gallery.length > 1 ? (
          <div className="product-slider-controls" aria-label="Ürün fotoğrafı değiştir">
            <button aria-label="Önceki ürün fotoğrafı" onClick={() => moveImage(-1)} type="button">‹</button>
            <span>{imageIndex + 1}/{gallery.length}</span>
            <button aria-label="Sonraki ürün fotoğrafı" onClick={() => moveImage(1)} type="button">›</button>
          </div>
        ) : null}
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
      </div>
      <div className="product-card-body">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.name}</h3>
          {reviews.length ? <StarRating rating={averageRating} count={reviews.length} compact /> : null}
        </div>
        <div className="price-row">
          <strong>{formatPrice(displayPrice)}</strong>
          {hasVisibleDiscount || product.oldPrice ? <span>{formatPrice(product.oldPrice ?? product.price)}</span> : null}
        </div>
        <p className={product.stock > 0 ? "stock in-stock" : "stock out-stock"}>
          {product.stock > 0 ? "Stokta var" : "Stokta yok"}
        </p>
        <div className="card-actions">
          <AddToCartButton product={product} variant="compact" />
          <Link className="text-link" href={`/products/${product.slug}`}>
            Detay
          </Link>
        </div>
      </div>
    </article>
  );
}
