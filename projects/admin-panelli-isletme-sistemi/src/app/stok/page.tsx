"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";

export default function StockPage() {
  const [movements, setMovements] = useState(crmConfig.stockMovements);
  const [showForm, setShowForm] = useState(false);
  const lowProducts = crmConfig.products.filter((product) => ["Azaldı", "Kritik"].includes(product.status));
  const emptyProducts = crmConfig.products.filter((product) => product.status === "Tükendi");
  const expiryProducts = crmConfig.products.filter((product) => product.status === "SKT Yaklaşıyor");

  function addMovement(values: Record<string, string>) {
    setMovements((current) => [
      {
        id: `stok-${Date.now()}`,
        product: values.product || "Yeni stok hareketi",
        type: values.type || "Giriş",
        amount: values.amount || "+1",
        reason: values.reason || "Stok düzeltmesi",
        time: values.time || "Şimdi",
      },
      ...current,
    ]);
  }

  return (
    <AppShell title="Stok Takibi" description="Azalan, kritik, tükenen ve SKT riski taşıyan ürünler" actionLabel="Stok Girişi" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Stok Hareketi Ekle"
        description="Tedarik girişi, satış çıkışı, fire veya sayım düzeltmesi kaydedin."
        submitLabel="Hareketi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addMovement}
        fields={[
          { name: "product", label: "Ürün", placeholder: "Süt 1L" },
          { name: "type", label: "Hareket Tipi", placeholder: "Giriş / Çıkış" },
          { name: "amount", label: "Miktar", placeholder: "+24" },
          { name: "reason", label: "Sebep", placeholder: "Tedarikten geldi" },
          { name: "time", label: "Zaman", placeholder: "Şimdi" },
        ]}
      />
      <section className="grid gap-5 lg:grid-cols-4">
        {[
          ["Azalan Ürünler", lowProducts.length, "Minimum seviyeye yaklaşanlar"],
          ["Kritik Stok", crmConfig.products.filter((p) => p.status === "Kritik").length, "Hemen sipariş geçilmeli"],
          ["Tükenen Ürün", emptyProducts.length, "Rafta kalmayan ürünler"],
          ["SKT Riski", expiryProducts.length, "Yakın tarihli ürünler"],
        ].map(([title, value, text]) => (
          <div key={title} className="rounded-3xl panel-card p-5">
            <p className="text-sm font-black text-slate-500">{title}</p>
            <p className="mt-2 text-4xl font-black text-slate-950">{value}</p>
            <p className="mt-2 text-sm font-bold text-slate-400">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <StockList title="Azalan / Kritik Ürünler" products={lowProducts} />
        <StockList title="Tükenen Ürünler" products={emptyProducts} />
        <StockList title="SKT Yaklaşan Ürünler" products={expiryProducts} />
      </section>

      <section className="mt-6 rounded-3xl panel-card p-6">
        <h2 className="text-xl font-black text-slate-950">Son Stok Hareketleri</h2>
        <div className="mt-5 grid gap-3">
          {movements.map((movement) => (
            <div key={movement.id} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
              <div>
                <p className="font-black text-slate-950">{movement.product}</p>
                <p className="text-xs font-bold text-slate-500">{movement.reason} · {movement.time}</p>
              </div>
              <span className="font-black text-slate-700">{movement.type}</span>
              <span className="text-lg font-black text-blue-600">{movement.amount}</span>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function StockList({ title, products }: { title: string; products: typeof crmConfig.products }) {
  return (
    <div className="rounded-3xl panel-card p-6">
      <h2 className="text-lg font-black text-slate-950">{title}</h2>
      <div className="mt-5 space-y-3">
        {products.length ? products.map((product) => (
          <div key={product.id} className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-black text-slate-950">{product.name}</p>
                <p className="text-xs font-bold text-slate-500">
                  {product.stock} adet kaldı · Min: {product.minStock} · SKT: {product.expiryDate}
                </p>
              </div>
              <StatusBadge status={product.status} />
            </div>
          </div>
        )) : <p className="rounded-2xl bg-slate-50 p-5 text-sm font-bold text-slate-400">Bu grupta ürün yok.</p>}
      </div>
    </div>
  );
}
