"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";

export default function OrdersPage() {
  const [orders, setOrders] = useState(crmConfig.orders);
  const [showForm, setShowForm] = useState(false);

  function addOrder(values: Record<string, string>) {
    setOrders((current) => [
      {
        id: `siparis-${Date.now()}`,
        orderNo: `SPR-${1100 + current.length}`,
        type: values.type || "Tedarik siparişi",
        related: values.related || "Yeni kayıt",
        amount: values.amount || "₺0",
        status: "Hazırlanıyor",
        date: "Bugün",
        delivery: values.delivery || "Planlanacak",
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Siparişler" description="Tedarik, WhatsApp ve eve teslim sipariş takibi" actionLabel="Yeni Sipariş" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Sipariş Oluştur"
        description="Tedarik veya müşteri siparişini tek ekrandan kaydedin."
        submitLabel="Siparişi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addOrder}
        fields={[
          { name: "type", label: "Sipariş Tipi", placeholder: "Tedarik siparişi" },
          { name: "related", label: "İlgili Kişi / Firma", placeholder: "Bereket Gıda Dağıtım" },
          { name: "amount", label: "Tutar", placeholder: "₺4.850" },
          { name: "delivery", label: "Teslimat", placeholder: "Bugün 17:00" },
        ]}
      />
      <div className="mb-6 rounded-3xl panel-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-950">Sipariş Akışı</h2>
            <p className="text-sm font-bold text-slate-500">Tedarik ve müşteri siparişleri tek listede</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl panel-card p-6">
        <div className="table-scroll">
          <table className="w-full min-w-[900px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Sipariş No</th>
                <th>Tip</th>
                <th>İlgili Kişi / Firma</th>
                <th>Tutar</th>
                <th>Durum</th>
                <th>Tarih</th>
                <th>Teslimat</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-4 font-black text-slate-950">{order.orderNo}</td>
                  <td>{order.type}</td>
                  <td>{order.related}</td>
                  <td className="font-black text-blue-600">{order.amount}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>{order.date}</td>
                  <td>{order.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
