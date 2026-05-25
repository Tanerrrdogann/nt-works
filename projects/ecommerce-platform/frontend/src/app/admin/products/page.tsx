"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { deactivateAdminProduct, getAdminProducts } from "@/lib/api";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

export default function AdminProductsPage() {
  const { token, ready } = useAdminGuard();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  function loadProducts(authToken: string) {
    getAdminProducts(authToken).then(setProducts).catch((err: Error) => setError(err.message));
  }

  useEffect(() => {
    if (token) loadProducts(token);
  }, [token]);

  async function deactivateProduct(id: number) {
    if (!token) return;
    await deactivateAdminProduct(id, token);
    loadProducts(token);
  }

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  return (
    <AdminShell>
      <div className="admin-heading row">
        <div>
          <p className="eyebrow">Ürün yönetimi</p>
          <h1>Ürünler</h1>
        </div>
        <Link className="btn" href="/admin/products/new">Yeni Ürün</Link>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      <div className="admin-table">
        {products.map((product) => (
          <div className="admin-row" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>
              <strong>{product.name}</strong>
              <span>{product.category} | {formatPrice(product.price)} | Stok: {product.stock}</span>
            </div>
            <span className={product.active ? "admin-badge active" : "admin-badge"}>{product.active ? "Aktif" : "Pasif"}</span>
            <Link className="text-link" href={`/admin/products/${product.id}/edit`}>Düzenle</Link>
            <button className="text-button" type="button" onClick={() => deactivateProduct(product.id)}>Pasifleştir</button>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
