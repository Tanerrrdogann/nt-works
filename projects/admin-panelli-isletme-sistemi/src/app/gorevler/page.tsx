"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { PriorityBadge, StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { CheckSquare, Clock, User } from "lucide-react";

export default function TasksPage() {
  const [tasks, setTasks] = useState(crmConfig.tasks);
  const [showForm, setShowForm] = useState(false);

  function addTask(values: Record<string, string>) {
    setTasks((current) => [
      {
        id: `gorev-${Date.now()}`,
        title: values.title || "Yeni market görevi",
        customerName: values.related || "Minta Market",
        jobTitle: values.jobTitle || "Günlük operasyon",
        status: "Yapılacak",
        priority: values.priority || "Orta",
        dueDate: values.dueDate || "Bugün",
        assignedTo: values.assignedTo || "Taner",
      },
      ...current,
    ]);
    setShowForm(false);
  }

  return (
    <AppShell title="Görevler" description="Personel, stok, reyon ve kasa görevleri" actionLabel="Görev Oluştur" onAction={() => setShowForm(true)}>
      <QuickCreateModal
        isOpen={showForm}
        title="Yeni Görev Oluştur"
        description="Reyon, stok, kasa veya tahsilat işini görev listesine ekleyin."
        submitLabel="Görevi Kaydet"
        onClose={() => setShowForm(false)}
        onCreate={addTask}
        fields={[
          { name: "title", label: "Görev Başlığı", placeholder: "İçecek reyonunu düzenle" },
          { name: "related", label: "İlgili Kişi / Bölüm", placeholder: "Depo" },
          { name: "jobTitle", label: "İş Tipi", placeholder: "Günlük operasyon" },
          { name: "dueDate", label: "Son Tarih", placeholder: "Bugün 18:00" },
          { name: "priority", label: "Öncelik", placeholder: "Orta" },
          { name: "assignedTo", label: "Sorumlu", placeholder: "Nisa" },
        ]}
      />
      <div className="rounded-3xl panel-card p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950">Günlük Market Görevleri</h2>
            <p className="text-sm font-bold text-slate-500">Reyon, stok, kasa ve tahsilat işleri</p>
          </div>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <article key={task.id} className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:flex-row md:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm">
                <CheckSquare size={20} />
              </div>
              <div className="flex-1">
                <p className="font-black text-slate-950">{task.title}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">İş: {task.jobTitle} · İlgili: {task.customerName}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-red-600 ring-1 ring-red-100"><Clock size={14} /> {task.dueDate}</span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-100"><User size={14} /> {task.assignedTo}</span>
                <PriorityBadge priority={task.priority} />
                <StatusBadge status={task.status} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
