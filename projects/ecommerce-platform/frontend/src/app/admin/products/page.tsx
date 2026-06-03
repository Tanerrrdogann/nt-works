"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Edit3, PackageX, Plus, Tag } from "lucide-react";
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
          <p>Ürün bilgilerini, stok durumunu ve mağaza görünürlüğünü buradan yönet.</p>
        </div>
        <Link className="btn" href="/admin/products/new">
          <Plus size={17} />
          Yeni Ürün
        </Link>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      {products.length > 0 ? (
        <div className="admin-product-grid">
          {products.map((product) => (
            <article className="admin-product-card" key={product.id}>
              <div className="admin-product-image">
                <img src={product.imageUrl} alt={product.name} />
                <span className={product.active ? "admin-badge active" : "admin-badge"}>
                  {product.active ? "Aktif" : "Pasif"}
                </span>
              </div>

              <div className="admin-product-body">
                <div className="admin-product-title">
                  <div>
                    <span className="admin-product-category">
                      <Tag size={14} />
                      {product.category}
                    </span>
                    <h2>{product.name}</h2>
                  </div>
                  <strong>{formatPrice(product.price)}</strong>
                </div>

                <div className="admin-product-meta">
                  <div>
                    <span>Stok</span>
                    <strong>{product.stock} adet</strong>
                  </div>
                  <div>
                    <span>Slug</span>
                    <strong>{product.slug}</strong>
                  </div>
                  <div>
                    <span>Öne çıkan</span>
                    <strong>{product.featured ? "Evet" : "Hayır"}</strong>
                  </div>
                </div>

                <div className="admin-product-actions">
                  <Link className="btn btn-small" href={`/admin/products/${product.id}/edit`}>
                    <Edit3 size={15} />
                    Düzenle
                  </Link>
                  <button
                    className="btn btn-small admin-danger-button"
                    type="button"
                    disabled={!product.active}
                    onClick={() => deactivateProduct(product.id)}
                  >
                    <PackageX size={15} />
                    {product.active ? "Pasifleştir" : "Pasif"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-admin-state admin-empty-card">
          <PackageX size={34} />
          <strong>Henüz ürün bulunmuyor</strong>
          <span>Mağazaya ilk ürünü ekleyerek ürün yönetimine başlayabilirsin.</span>
          <Link className="btn btn-small" href="/admin/products/new">
            <Plus size={15} />
            Ürün Ekle
          </Link>
        </div>
      )}
    </AdminShell>
  );
}
