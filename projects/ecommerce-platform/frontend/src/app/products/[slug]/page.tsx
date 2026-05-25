"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductDetailActions } from "@/components/ProductDetailActions";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductReviews } from "@/components/ProductReviews";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, getProducts } from "@/lib/api";
import { formatPrice, getProductDisplayPrice } from "@/lib/products";
import type { Product } from "@/types/product";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getProduct(params.slug)
      .then((nextProduct) => {
        setProduct(nextProduct);
        return getProducts(nextProduct.categorySlug);
      })
      .then((nextProducts) => {
        setRelatedProducts(nextProducts.filter((item) => item.slug !== params.slug).slice(0, 8));
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [params.slug]);

  if (loading) {
    return (
      <section className="page-shell">
        <p className="loading-text">Ürün yükleniyor...</p>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="page-shell narrow">
        <div className="empty-state">
          <h1>Ürün bulunamadı</h1>
          <p>{error || "Aradığınız ürün şu anda görüntülenemiyor."}</p>
        </div>
      </section>
    );
  }

  const displayPrice = getProductDisplayPrice(product);
  const hasVisibleDiscount = displayPrice < product.price;

  return (
    <section className="page-shell product-detail-shell">
      <div className="product-detail">
        <ProductGallery product={product} />
        <div className="detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="price-row large">
            <strong>{formatPrice(displayPrice)}</strong>
            {hasVisibleDiscount || product.oldPrice ? <span>{formatPrice(product.oldPrice ?? product.price)}</span> : null}
          </div>
          {product.discountType && product.discountType !== "NONE" && product.discountMinQuantity && product.discountMinQuantity > 1 ? (
            <p className="stock in-stock">
              {product.discountMinQuantity} adet ve üzeri alımda indirim uygulanır.
            </p>
          ) : null}
          <p className={product.stock > 0 ? "stock in-stock" : "stock out-stock"}>
            {product.stock > 0 ? `${product.stock} adet stokta` : "Stokta yok"}
          </p>
          <ProductDetailActions product={product} />
          <div className="info-list">
            <div>
              <strong>Ürün bilgisi</strong>
              <span>{product.material}</span>
            </div>
            <div>
              <strong>Teslimat</strong>
              <span>{product.delivery}</span>
            </div>
            <div>
              <strong>İade / değişim</strong>
              <span>Ürün tesliminden sonra yasal süre içinde destek alınabilir.</span>
            </div>
          </div>
        </div>
      </div>

      <ProductReviews productSlug={product.slug} />

      {relatedProducts.length ? (
        <section className="related-products">
          <div className="section-heading compact">
            <p className="eyebrow">Benzer ürünler</p>
            <h2>Bunları da beğenebilirsiniz</h2>
          </div>
          <div className="product-grid related">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
