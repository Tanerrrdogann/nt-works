"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { Search } from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState(crmConfig.customers);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.phone} ${customer.address}`.toLowerCase().includes(query.toLowerCase()),
  );

  function addCustomer(values: Record<string, string>) {
    setCustomers((current) => [
      {
        id: `musteri-${Date.now()}`,
        name: values.name || "Yeni Müşteri",
        phone: values.phone || "05xx xxx xx xx",
        address: values.address || "Mahalle / adres",
        balance: values.balance || "₺0",
        lastShopping: "Yeni kayıt",
        status: "Aktif",
        note: values.note || "Yeni cari müşteri",
        tags: ["Yeni"],
        notes: ["Panel üzerinden eklenen müşteri kaydı."],
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Müşteriler" description="Cari / veresiye müşteri takibi ve tahsilat notları" actionLabel="Yeni Müşteri" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Cari Müşteri"
        description="Veresiye / cari takip için müşteri bilgilerini girin."
        submitLabel="Müşteriyi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addCustomer}
        fields={[
          { name: "name", label: "Müşteri Adı", placeholder: "Ayşe Yılmaz" },
          { name: "phone", label: "Telefon", placeholder: "0551 000 00 00" },
          { name: "address", label: "Mahalle / Adres", placeholder: "Merkez Mahallesi" },
          { name: "balance", label: "Bakiye", placeholder: "₺450" },
          { name: "note", label: "Not", placeholder: "Tahsilat cuma günü" },
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
              placeholder="Müşteri adı, telefon veya adres ara..."
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl panel-card p-6">
        <div className="table-scroll">
          <table className="w-full min-w-[940px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Müşteri</th>
                <th>Telefon</th>
                <th>Mahalle / Adres</th>
                <th>Bakiye</th>
                <th>Son Alışveriş</th>
                <th>Durum</th>
                <th>Not</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-4 font-black text-slate-950">
                    {crmConfig.customers.some((item) => item.id === customer.id) ? (
                      <Link href={`/musteriler/${customer.id}`} className="hover:text-blue-600">{customer.name}</Link>
                    ) : (
                      customer.name
                    )}
                  </td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td className="font-black text-blue-600">{customer.balance}</td>
                  <td>{customer.lastShopping}</td>
                  <td><StatusBadge status={customer.status} /></td>
                  <td>{customer.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
