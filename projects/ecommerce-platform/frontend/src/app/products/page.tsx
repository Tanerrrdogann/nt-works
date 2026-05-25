"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/api";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "";
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    Promise.all([getProducts(selectedCategory), getCategories()])
      .then(([productData, categoryData]) => {
        if (!active) return;
        setProducts(productData);
        setCategories(categoryData);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [selectedCategory]);

  const categoryLinks = useMemo(
    () => [{ name: "Tümü", slug: "" }, ...categories.map(({ name, slug }) => ({ name, slug }))],
    [categories],
  );

  return (
    <section className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Teddy koleksiyonu</p>
        <h1>Ürünler</h1>
        <p>
          Kolye, küpe, bileklik, yüzük ve setlerden oluşan zarif seçkiyi keşfet.
        </p>
      </div>

      <div className="filter-row" aria-label="Kategori filtresi">
        {categoryLinks.map((category) => (
          <a
            className={category.slug === selectedCategory ? "filter active" : "filter"}
            href={category.slug ? `/ecommerce-platform/products?category=${category.slug}` : "/ecommerce-platform/products"}
            key={category.slug || "all"}
          >
            {category.name}
          </a>
        ))}
      </div>

      {loading ? <ProductsLoading /> : null}
      {error ? <p className="inline-error">{error}</p> : null}
      {!loading && !error ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ProductsLoading() {
  return <p className="loading-text">Ürünler yükleniyor...</p>;
}
