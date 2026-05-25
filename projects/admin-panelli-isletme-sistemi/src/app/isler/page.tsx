"use client";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { crmConfig } from "@/config/crm";
import { PriorityBadge } from "@/components/StatusBadge";
import { Search, Filter, LayoutGrid, Clock } from "lucide-react";
import Link from "next/link";
import { FeedbackModal } from "@/components/FeedbackModal";

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = crmConfig.jobs.filter(j => 
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    j.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppShell title="İşler / Fırsatlar" description="Devam eden işler, servis talepleri ve satış fırsatlarının takibi" actionLabel="Yeni İş Ekle">
      <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Filtreleme Seçenekleri" message="Tarih, değer, sorumlu ve durum kırılımlarına göre filtreleme paneli açıldı." />

      <div className="rounded-3xl panel-card p-5 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 py-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" placeholder="İş başlığı veya müşteri ara..." />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 px-5 py-3 text-sm font-bold shadow-inner flex items-center gap-2"><LayoutGrid size={16}/> Kanban</button>
          <button onClick={() => setIsModalOpen(true)} className="flex-1 md:flex-none flex items-center justify-center rounded-2xl bg-white border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition active:scale-95 shadow-sm"><Filter size={16} /> Filtrele</button>
        </div>
      </div>

      <div className="grid gap-6 overflow-x-auto pb-4 lg:grid-cols-3 xl:grid-cols-6 items-start">
        {crmConfig.pipelineStages.map((stage) => {
          const stageJobs = filteredJobs.filter((job) => job.status === stage);
          const stageValue = stageJobs.reduce((sum, job) => {
            const numericValue = parseInt(job.value.replace(/[^0-9]/g, ""));
            return sum + (numericValue || 0);
          }, 0);

          return (
            <div key={stage} className="min-w-64 space-y-4">
              <div className="p-4 rounded-2xl border border-slate-100 bg-slate-950 text-white shadow-lg shadow-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold truncate leading-none uppercase tracking-wider">{stage}</h3>
                  <span className="rounded-md bg-[#1abb9c] px-2.5 py-1 text-xs font-bold leading-none">{stageJobs.length}</span>
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-400 w-full text-right">₺{stageValue.toLocaleString("tr-TR")}</p>
              </div>

              <div className="space-y-4">
                {stageJobs.map((job) => (
                  <Link key={job.id} href={`/isler/${job.id}`} className="block rounded-2xl panel-card p-5 space-y-3.5 transition active:scale-[0.98] hover:ring-2 hover:ring-blue-100">
                    <div className="flex flex-wrap gap-1.5">
                      <PriorityBadge priority={job.priority} />
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 border px-2 py-0.5 rounded-full"><Clock size={13}/> {job.dueDate}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950 text-base leading-tight">{job.title}</p>
                      <p className="mt-1 text-xs text-slate-500 font-medium">{job.customerName}</p>
                    </div>
                    <div className="pt-3.5 border-t border-slate-100 text-lg font-extrabold text-blue-600 text-right w-full">{job.value}</div>
                  </Link>
                ))}
                {stageJobs.length === 0 && <div className="p-8 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center text-xs font-bold text-slate-400">Bu aşamada iş yok.</div>}
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
