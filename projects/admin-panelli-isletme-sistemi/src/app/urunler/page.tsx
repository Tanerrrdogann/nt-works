"use client";

import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { Barcode, Search } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState(crmConfig.products);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.barcode}`.toLowerCase().includes(query.toLowerCase()),
  );

  function addProduct(values: Record<string, string>) {
    const name = values.name || "Yeni Ürün";
    const stock = Number(values.stock || 1);
    const minStock = Number(values.minStock || 5);

    setProducts((current) => [
      {
        id: `urun-${Date.now()}`,
        name,
        category: values.category || "Genel",
        barcode: values.barcode || "8690000000000",
        buyPrice: values.buyPrice || "₺0,00",
        salePrice: values.salePrice || "₺0,00",
        stock,
        minStock,
        status: stock === 0 ? "Tükendi" : stock <= minStock ? "Azaldı" : "Stokta",
        expiryDate: values.expiryDate || "30 gün",
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Ürünler" description="Barkod, fiyat, stok ve son kullanma tarihi takibi" actionLabel="Yeni Ürün" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Ürün Ekle"
        description="Ürün adı, barkod, fiyat ve stok bilgilerini girin."
        submitLabel="Ürünü Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addProduct}
        fields={[
          { name: "name", label: "Ürün Adı", placeholder: "Süt 1L" },
          { name: "category", label: "Kategori", placeholder: "Süt ürünleri" },
          { name: "barcode", label: "Barkod", placeholder: "869..." },
          { name: "buyPrice", label: "Alış Fiyatı", placeholder: "₺24,00" },
          { name: "salePrice", label: "Satış Fiyatı", placeholder: "₺32,00" },
          { name: "stock", label: "Stok", placeholder: "24" },
          { name: "minStock", label: "Minimum Stok", placeholder: "8" },
          { name: "expiryDate", label: "Son Kullanma", placeholder: "18 gün" },
        ]}
      />
      <div className="mb-6 rounded-3xl panel-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm font-semibold outline-none focus:border-blue-500"
              placeholder="Barkod, ürün adı veya kategori ara..."
            />
          </div>
        </div>

      </div>

      <div className="rounded-3xl panel-card p-6">
        <div className="table-scroll">
          <table className="w-full min-w-[1100px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Ürün Adı</th>
                <th>Kategori</th>
                <th>Barkod</th>
                <th>Alış</th>
                <th>Satış</th>
                <th>Stok</th>
                <th>Min. Stok</th>
                <th>Durum</th>
                <th>SKT</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-4 font-black text-slate-950">
                    {crmConfig.products.some((item) => item.id === product.id) ? (
                      <Link href={`/urunler/${product.id}`} className="hover:text-blue-600">
                        {product.name}
                      </Link>
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>{product.category}</td>
                  <td className="text-xs font-bold text-slate-500">
                    <span className="inline-flex items-center gap-1"><Barcode size={14} /> {product.barcode}</span>
                  </td>
                  <td>{product.buyPrice}</td>
                  <td className="font-black text-blue-600">{product.salePrice}</td>
                  <td className="font-black">{product.stock}</td>
                  <td>{product.minStock}</td>
                  <td><StatusBadge status={product.status} /></td>
                  <td>{product.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
