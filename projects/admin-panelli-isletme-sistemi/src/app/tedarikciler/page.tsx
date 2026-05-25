"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { Phone } from "lucide-react";

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState(crmConfig.suppliers);
  const [showForm, setShowForm] = useState(false);

  function addSupplier(values: Record<string, string>) {
    setSuppliers((current) => [
      {
        id: `tedarikci-${Date.now()}`,
        name: values.name || "Yeni Tedarikçi",
        contact: values.contact || "Yetkili",
        phone: values.phone || "05xx xxx xx xx",
        category: values.category || "Genel",
        lastOrder: "Yeni kayıt",
        balance: values.balance || "₺0",
        status: "Aktif",
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Tedarikçiler" description="Marketin çalıştığı gıda, içecek ve temizlik tedarikçileri" actionLabel="Yeni Tedarikçi" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Tedarikçi Ekle"
        description="Firma, yetkili, telefon ve cari bilgilerini düzenli şekilde girin."
        submitLabel="Tedarikçiyi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addSupplier}
        fields={[
          { name: "name", label: "Firma Adı", placeholder: "Bereket Gıda Dağıtım" },
          { name: "contact", label: "Yetkili Kişi", placeholder: "Ahmet Kaya" },
          { name: "phone", label: "Telefon", placeholder: "0532 000 00 00" },
          { name: "category", label: "Kategori", placeholder: "Temel gıda" },
          { name: "balance", label: "Cari Durum", placeholder: "₺0" },
        ]}
      />
      <div className="mb-6 rounded-3xl panel-card p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-950">Tedarikçi Listesi</h2>
            <p className="text-sm font-bold text-slate-500">Son sipariş ve cari durumlarıyla birlikte</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {suppliers.map((supplier) => (
          <article key={supplier.id} className="rounded-3xl panel-card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-slate-950">{supplier.name}</h3>
                <p className="mt-1 text-sm font-bold text-slate-500">{supplier.category}</p>
              </div>
              <StatusBadge status={supplier.status} />
            </div>
            <div className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-600">
              <p>Yetkili: <span className="text-slate-950">{supplier.contact}</span></p>
              <p className="flex items-center gap-2"><Phone size={15} /> {supplier.phone}</p>
              <p>Son sipariş: <span className="text-slate-950">{supplier.lastOrder}</span></p>
              <p>Cari durum: <span className="text-blue-600">{supplier.balance}</span></p>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
