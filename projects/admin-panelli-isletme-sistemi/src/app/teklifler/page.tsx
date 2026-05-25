"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { QuotePdfButton } from "@/components/QuotePdfButton";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { Calendar } from "lucide-react";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState(crmConfig.quotes);
  const [showForm, setShowForm] = useState(false);

  function addQuote(values: Record<string, string>) {
    const title = values.title || "Yeni Tedarikçi Teklifi";
    const supplierName = values.supplierName || "Yeni Tedarikçi";
    const amount = values.amount || "₺0";

    setQuotes((current) => [
      {
        id: `teklif-${Date.now()}`,
        quoteNumber: `ALM-2026-${String(100 + current.length)}`,
        supplierName,
        customerName: supplierName,
        title,
        amount,
        status: "Onay Bekliyor",
        createdAt: "Bugün",
        validUntil: values.validUntil || "7 gün",
        notes: "Panel üzerinden oluşturulan tedarikçi alım teklifi.",
        items: [[title, "1 kalem", amount]],
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Tedarikçi Teklifleri" description="Market için alınan fiyat teklifleri ve toplu alım talepleri" actionLabel="Teklif Oluştur" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Tedarikçi Teklifi"
        description="Alış teklifi başlığı, tedarikçi ve geçerlilik bilgilerini girin."
        submitLabel="Teklifi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addQuote}
        fields={[
          { name: "title", label: "Teklif Başlığı", placeholder: "Süt ürünleri haftalık alım" },
          { name: "supplierName", label: "Tedarikçi", placeholder: "Marmara Süt Ürünleri" },
          { name: "amount", label: "Tutar", placeholder: "₺9.740" },
          { name: "validUntil", label: "Geçerlilik", placeholder: "7 gün" },
        ]}
      />
      <div className="mb-6 rounded-3xl panel-card p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-950">Alış Teklifleri</h2>
            <p className="text-sm font-bold text-slate-500">Tedarikçilerden gelen fiyat ve toplu alım teklifleri</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl panel-card p-6">
        <div className="table-scroll">
          <table className="w-full min-w-[1020px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Teklif</th>
                <th>Tedarikçi</th>
                <th>Tutar</th>
                <th>Durum</th>
                <th>Oluşturma</th>
                <th>Geçerlilik</th>
                <th className="text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-4">
                    {crmConfig.quotes.some((item) => item.id === quote.id) ? (
                      <Link href={`/teklifler/${quote.id}`} className="hover:text-blue-600">
                        <p className="font-black text-slate-950">{quote.title}</p>
                        <p className="text-xs font-bold text-slate-500">{quote.quoteNumber}</p>
                      </Link>
                    ) : (
                      <div>
                        <p className="font-black text-slate-950">{quote.title}</p>
                        <p className="text-xs font-bold text-slate-500">{quote.quoteNumber}</p>
                      </div>
                    )}
                  </td>
                  <td>{quote.supplierName}</td>
                  <td className="text-lg font-black text-blue-600">{quote.amount}</td>
                  <td><StatusBadge status={quote.status} /></td>
                  <td className="inline-flex items-center gap-1.5 py-4"><Calendar size={14} /> {quote.createdAt}</td>
                  <td>{quote.validUntil}</td>
                  <td className="text-right">
                    <QuotePdfButton quote={quote} compact />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
