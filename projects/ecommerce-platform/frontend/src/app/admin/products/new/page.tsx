"use client";

import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { createAdminProduct } from "@/lib/api";
import type { AdminProductPayload } from "@/types/admin";

export default function NewProductPage() {
  const router = useRouter();
  const { token, ready } = useAdminGuard();

  async function handleSubmit(payload: AdminProductPayload) {
    if (!token) return;
    await createAdminProduct(payload, token);
    router.push("/admin/products");
  }

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  return (
    <AdminShell>
      <div className="admin-heading">
        <p className="eyebrow">Ürün yönetimi</p>
        <h1>Yeni Ürün</h1>
      </div>
      <ProductForm submitLabel="Ürünü Kaydet" onSubmit={handleSubmit} />
    </AdminShell>
  );
}
