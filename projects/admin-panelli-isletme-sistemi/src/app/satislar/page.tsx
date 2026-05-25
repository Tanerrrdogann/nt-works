"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { crmConfig } from "@/config/crm";
import { CreditCard, ReceiptText, Wallet } from "lucide-react";

export default function SalesPage() {
  const [sales, setSales] = useState(crmConfig.sales);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const icons = [Wallet, CreditCard, ReceiptText];

  function addSale(values: Record<string, string>) {
    setSales((current) => [
      {
        id: `satis-${Date.now()}`,
        time: values.time || "Şimdi",
        channel: values.channel || "Kasa",
        amount: values.amount || "₺0",
        amountValue: Number((values.amount || "0").replace(/[^0-9]/g, "")) || 0,
        payment: values.payment || "Nakit",
        items: values.items || "Yeni satış",
      },
      ...current,
    ]);
  }

  return (
    <AppShell title="Satışlar" description="Günlük kasa, ödeme tipi ve satış hareketleri" actionLabel="Satış Ekle" onAction={() => setIsCreateOpen(true)}>
      <QuickCreateModal
        isOpen={isCreateOpen}
        title="Satış Ekle"
        description="Kasa, ödeme tipi ve ürün bilgisini girerek satış hareketi oluşturun."
        submitLabel="Satışı Kaydet"
        onClose={() => setIsCreateOpen(false)}
        onCreate={addSale}
        fields={[
          { name: "time", label: "Saat", placeholder: "19:20" },
          { name: "channel", label: "Kanal", placeholder: "Kasa / Eve teslim" },
          { name: "items", label: "Ürünler", placeholder: "Ekmek, süt" },
          { name: "payment", label: "Ödeme", placeholder: "Nakit / Kart / Cari" },
          { name: "amount", label: "Tutar", placeholder: "₺420" },
        ]}
      />
      <section className="grid gap-5 md:grid-cols-3">
        {crmConfig.paymentSummary.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={item.method} className="rounded-3xl panel-card p-6">
              <Icon className="text-[#1abb9c]" size={30} />
              <p className="mt-4 text-sm font-black text-slate-500">{item.method} Satış</p>
              <p className="mt-1 text-4xl font-black text-slate-950">{item.amount}</p>
              <div className="mt-4 h-2 bg-[#f2f2f2]"><div className="h-full bg-[#1abb9c]" style={{ width: `${item.percent}%` }} /></div>
            </div>
          );
        })}
      </section>

      <section className="mt-6 rounded-3xl panel-card p-6">
        <h2 className="text-xl font-black text-slate-950">Bugünkü Satışlar</h2>
        <div className="mt-5 table-scroll">
          <table className="w-full min-w-[780px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Saat</th>
                <th>Kanal</th>
                <th>Ürünler</th>
                <th>Ödeme</th>
                <th>Tutar</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-4 font-black">{sale.time}</td>
                  <td>{sale.channel}</td>
                  <td>{sale.items}</td>
                  <td>{sale.payment}</td>
                  <td className="text-lg font-black text-blue-600">{sale.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
