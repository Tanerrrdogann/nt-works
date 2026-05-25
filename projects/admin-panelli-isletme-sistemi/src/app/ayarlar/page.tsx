"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { crmConfig } from "@/config/crm";
import { FeedbackModal } from "@/components/FeedbackModal";
import { Bell, Save, ShieldCheck, Store } from "lucide-react";

export default function SettingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppShell title="Ayarlar" description="Market bilgileri, şube ve bildirim tercihleri" actionLabel="Ayarları Kaydet" onAction={() => setIsModalOpen(true)}>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ayarlar Kaydedildi"
        message="Ayarlar kaydedildi. Market paneli güncel bilgilerle devam ediyor."
      />

      <div className="space-y-6">
        <section className="rounded-3xl panel-card p-6 md:p-8">
          <h3 className="flex items-center gap-3 text-xl font-extrabold text-slate-950"><Store size={22} /> Market Bilgileri</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Input label="Market adı" value={crmConfig.company.appName} />
            <Input label="Şube" value={crmConfig.company.branch} />
            <Input label="Telefon" value={crmConfig.company.phone} />
            <Input label="E-posta" value={crmConfig.company.email} />
            <Input label="Konum" value={crmConfig.company.location} />
            <Input label="Fiş / vergi bilgisi" value={crmConfig.company.taxLabel} />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl panel-card p-6 md:p-8">
            <h3 className="flex items-center gap-3 text-xl font-extrabold text-slate-950"><Bell size={22} /> Bildirim Ayarları</h3>
            <div className="mt-6 space-y-4">
              {["Stok minimum seviyeye düşünce uyar", "SKT yaklaşınca bildirim göster", "Gün sonu kasa kontrolünü hatırlat", "Tedarik siparişi teslim günü bildir"].map((item) => (
                <label key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
                  {item}
                  <input type="checkbox" defaultChecked className="h-5 w-5 accent-blue-600" />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6 md:p-8">
            <h3 className="flex items-center gap-3 text-xl font-extrabold text-slate-950"><ShieldCheck size={22} /> Panel Tercihleri</h3>
            <div className="mt-6 space-y-4">
              {[
                ["Varsayılan stok uyarı limiti", "10 adet"],
                ["Kasa kapanış saati", "22:00"],
                ["Rapor para birimi", "Türk Lirası"],
                ["Bildirim alıcı rolü", "Yönetici"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between bg-slate-50 p-4 text-sm">
                  <span className="font-bold text-slate-600">{label}</span>
                  <span className="font-black text-slate-950">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hidden justify-end">
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-2xl bg-[#1abb9c] px-6 py-3.5 text-sm font-bold text-white shadow-md ">
            <Save size={18} /> Değişiklikleri Kaydet
          </button>
        </div>
      </div>
    </AppShell>
  );
}

function Input({ label, value }: { label: string; value: string }) {
  return (
    <label className="text-sm font-semibold text-slate-500">
      {label}
      <input defaultValue={value} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-bold text-slate-950 outline-none focus:border-blue-500 focus:bg-white" />
    </label>
  );
}
