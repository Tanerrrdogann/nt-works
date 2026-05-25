"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { getAdminProduct, updateAdminProduct } from "@/lib/api";
import type { AdminProductPayload } from "@/types/admin";
import type { Product } from "@/types/product";

export default function EditProductPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { token, ready } = useAdminGuard();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    getAdminProduct(params.id, token).then(setProduct).catch((err: Error) => setError(err.message));
  }, [params.id, token]);

  async function handleSubmit(payload: AdminProductPayload) {
    if (!token) return;
    await updateAdminProduct(params.id, payload, token);
    router.push("/admin/products");
  }

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  return (
    <AdminShell>
      <div className="admin-heading">
        <p className="eyebrow">Ürün yönetimi</p>
        <h1>Ürün Düzenle</h1>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      {product ? <ProductForm initialProduct={product} submitLabel="Değişiklikleri Kaydet" onSubmit={handleSubmit} /> : <p className="loading-text">Ürün yükleniyor...</p>}
    </AdminShell>
  );
}
