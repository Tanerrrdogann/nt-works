import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { QuotePdfButton } from "@/components/QuotePdfButton";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { CheckCircle2, PencilLine, Truck } from "lucide-react";

export function generateStaticParams() {
  return crmConfig.quotes.map((quote) => ({ id: quote.id }));
}

export default async function QuoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quote = crmConfig.quotes.find((item) => item.id === id);

  if (!quote) {
    notFound();
  }

  return (
    <AppShell title={quote.title} description={`${quote.supplierName} için tedarikçi alım teklifi`} actionLabel="Teklifi Düzenle">
      <section className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <div className="space-y-6">
          <div className="rounded-3xl panel-card p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <StatusBadge status={quote.status} />
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{quote.quoteNumber}</span>
            </div>
            <h2 className="text-3xl font-black text-slate-950">{quote.title}</h2>
            <p className="mt-3 text-sm font-bold text-slate-500">{quote.notes}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">Toplam Tutar</p>
                <p className="mt-2 text-2xl font-black text-blue-600">{quote.amount}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">Oluşturma</p>
                <p className="mt-2 text-lg font-black text-slate-950">{quote.createdAt}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">Geçerlilik</p>
                <p className="mt-2 text-lg font-black text-slate-950">{quote.validUntil}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6 md:p-8">
            <h2 className="text-xl font-black text-slate-950">Teklif Kalemleri</h2>
            <div className="mt-5 table-scroll">
              <table className="w-full min-w-[640px] text-left text-sm font-medium">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="py-3">Ürün / Kalem</th>
                    <th>Miktar</th>
                    <th className="text-right">Tutar</th>
                  </tr>
                </thead>
                <tbody>
                  {quote.items.map(([name, quantity, amount]) => (
                    <tr key={name} className="border-b border-slate-100 last:border-0">
                      <td className="py-4 font-black text-slate-950">{name}</td>
                      <td>{quantity}</td>
                      <td className="text-right text-lg font-black text-blue-600">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl panel-card p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Truck size={28} />
            </div>
            <h2 className="mt-5 text-xl font-black text-slate-950">Tedarikçi Bilgisi</h2>
            <p className="mt-2 text-lg font-black text-slate-700">{quote.supplierName}</p>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-500">
              Bu teklif marketin raf ve depo stoklarını yenilemek için alınan fiyat teklifidir.
            </p>
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-xl font-black text-slate-950">Aksiyonlar</h2>
            <div className="mt-5 grid gap-3">
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white">
                <CheckCircle2 size={18} /> Teklifi Onayla
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700">
                <PencilLine size={18} /> Teklifi Revize Et
              </button>
              <QuotePdfButton quote={quote} />
            </div>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
