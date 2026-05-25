import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { CreditCard, MapPin, Phone, Plus, ReceiptText } from "lucide-react";

export function generateStaticParams() {
  return crmConfig.customers.map((customer) => ({ id: customer.id }));
}

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const customer = crmConfig.customers.find((item) => item.id === id);

  if (!customer) {
    notFound();
  }

  return (
    <AppShell title={customer.name} description="Cari / veresiye müşteri detayları" actionLabel="Tahsilat Ekle">
      <section className="rounded-3xl panel-card p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-3xl font-black text-blue-600">
              {customer.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-950">{customer.name}</h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusBadge status={customer.status} />
                {customer.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#1abb9c] px-5 py-3 text-sm font-black text-white">
              <CreditCard size={17} /> Tahsilat Ekle
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700">
              <Plus size={17} /> Not Ekle
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-xl font-black text-slate-950">İletişim ve Cari Bilgiler</h2>
            <div className="mt-5 grid gap-4">
              <Info icon={<Phone size={18} />} label="Telefon" value={customer.phone} />
              <Info icon={<MapPin size={18} />} label="Mahalle / Adres" value={customer.address} />
              <Info icon={<ReceiptText size={18} />} label="Son alışveriş" value={customer.lastShopping} />
              <Info icon={<CreditCard size={18} />} label="Açık bakiye" value={customer.balance} />
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-xl font-black text-slate-950">Müşteri Notu</h2>
            <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-600">{customer.note}</p>
          </div>
        </div>

        <div className="rounded-3xl panel-card p-6">
          <h2 className="text-xl font-black text-slate-950">Veresiye / Alışveriş Geçmişi</h2>
          <div className="mt-5 space-y-3">
            {customer.notes.map((note, index) => (
              <div key={note} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-bold leading-7 text-slate-700">{note}</p>
                <p className="mt-2 text-xs font-black text-slate-400">{index + 1}. kayıt</p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-4">
              <p className="font-black text-blue-700">Tahsilat Aksiyonu</p>
              <p className="mt-1 text-sm font-bold text-blue-600">Tahsilat veya yeni alışveriş kaydı burada listelenir.</p>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function Info({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <span className="text-blue-600">{icon}</span>
      <div>
        <p className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-1 font-black text-slate-950">{value}</p>
      </div>
    </div>
  );
}
