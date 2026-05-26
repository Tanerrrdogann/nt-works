"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { StatCard } from "@/components/StatCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge, PriorityBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { AlertTriangle, Boxes, CalendarClock, ChartNoAxesCombined, PackageCheck, ReceiptText } from "lucide-react";

export default function DashboardPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const lowProducts = crmConfig.products.filter((product) => ["Azaldı", "Kritik", "Tükendi"].includes(product.status));
  const expiryProducts = crmConfig.products.filter((product) => product.status === "SKT Yaklaşıyor");
  const urgentTasks = crmConfig.tasks.filter((task) => task.priority === "Acil" || task.priority === "Yüksek");
  const maxSales = Math.max(...crmConfig.weeklySalesSeries.map((item) => item.sales));

  return (
    <AppShell
      title="Dashboard"
      description="Minta Market için günlük satış, stok, tedarik ve görev özeti"
      actionLabel="Yeni Ürün Ekle"
      onAction={() => setIsCreateOpen(true)}
    >
      <QuickCreateModal
        isOpen={isCreateOpen}
        title="Yeni Ürün Ekle"
        description="Dashboard üzerinden hızlı ürün kaydı oluşturun."
        submitLabel="Ürünü Kaydet"
        onClose={() => setIsCreateOpen(false)}
        onCreate={() => setIsCreateOpen(false)}
        fields={[
          { name: "name", label: "Ürün Adı", placeholder: "Yeni ürün" },
          { name: "barcode", label: "Barkod", placeholder: "869..." },
          { name: "salePrice", label: "Satış Fiyatı", placeholder: "₺0,00" },
          { name: "stock", label: "Stok", placeholder: "12" },
        ]}
      />
      <section className="grid grid-cols-2 border border-[#e6e9ed] bg-white md:grid-cols-3 xl:grid-cols-6">
        {crmConfig.stats.map((stat, index) => {
          const icons = [ReceiptText, Boxes, PackageCheck, AlertTriangle, ChartNoAxesCombined, CalendarClock];
          const Icon = icons[index];
          return <StatCard key={stat.title} Icon={Icon} title={stat.title} value={stat.value} change={stat.change} description={stat.description} />;
        })}
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_280px]">
        <div className="panel-card p-4">
          <div className="mb-4 flex flex-col gap-3 border-b border-[#e6e9ed] pb-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-normal text-[#5a738e] sm:text-2xl">
                Market Aktiviteleri <span className="block text-sm text-[#73879c] sm:inline sm:text-base">satış ve stok hareketleri</span>
              </h2>
            </div>
            <span className="w-fit border border-[#d9dee4] bg-white px-3 py-2 text-xs font-bold text-[#73879c] sm:text-sm">
              Bugün - Bu hafta
            </span>
          </div>
          <div className="relative h-[278px] overflow-hidden bg-white">
            <div className="absolute inset-x-0 bottom-8 top-0 grid grid-rows-6 border-b border-l border-[#e6e9ed]">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="border-t border-[#edf0f2]" />
              ))}
            </div>
            <div className="absolute inset-x-4 bottom-8 top-4 flex items-end gap-3 pl-4">
              {crmConfig.weeklySalesSeries.map((item) => (
                <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-[10px] font-bold text-[#73879c]">₺{Math.round(item.sales / 1000)}k</span>
                  <div className="w-full bg-[#1abb9c]/35" style={{ height: `${(item.sales / maxSales) * 190}px` }} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-7 pl-8 text-center text-xs text-[#73879c]">
              {crmConfig.weeklySalesSeries.map((item) => <span key={item.day}>{item.day}</span>)}
            </div>
          </div>
        </div>

        <div className="panel-card p-4">
          <h2 className="border-b border-[#e6e9ed] pb-3 text-xl font-normal text-[#5a738e]">Bugün Dikkat</h2>
          <div className="mt-4 space-y-4">
            {lowProducts.slice(0, 4).map((product) => (
              <div key={product.id}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-[#5a738e]">{product.name}</span>
                  <span className="font-bold text-[#73879c]">{product.stock}/{product.minStock}</span>
                </div>
                <div className="h-2 bg-[#f2f2f2]">
                  <div className="h-full bg-[#1abb9c]" style={{ width: `${Math.max(8, Math.min(100, (product.stock / Math.max(product.minStock, 1)) * 100))}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-[#e6e9ed] pt-4">
            {crmConfig.dashboardHighlights.map(([label, value]) => (
              <div key={label} className="mb-3 flex items-center justify-between text-sm last:mb-0">
                <span className="text-[#73879c]">{label}</span>
                <span className="font-bold text-[#5a738e]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-3">
        <div className="panel-card p-5">
          <h2 className="border-b border-[#e6e9ed] pb-3 text-xl font-normal text-[#5a738e]">Kasa / Gün Sonu</h2>
          <div className="mt-4 divide-y divide-[#e6e9ed]">
            {crmConfig.cashSummary.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between py-3">
                <span className="text-sm font-bold text-[#73879c]">{label}</span>
                <span className="text-lg font-bold text-[#5a738e]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-card p-5">
          <h2 className="border-b border-[#e6e9ed] pb-3 text-xl font-normal text-[#5a738e]">Kategori Dağılımı</h2>
          <div className="mt-5 flex items-center gap-4 md:gap-6">
            <div className="h-28 w-28 shrink-0 rounded-full md:h-36 md:w-36" style={{ background: buildCategoryGradient() }} />
            <div className="space-y-2 text-sm">
              {crmConfig.categorySummary.slice(0, 4).map((item) => (
                <p key={item.name} className="font-bold text-[#73879c]">{item.name} %{item.percent}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-card p-5">
          <h2 className="border-b border-[#e6e9ed] pb-3 text-xl font-normal text-[#5a738e]">Öncelikli Görevler</h2>
          <div className="space-y-3">
            {urgentTasks.slice(0, 4).map((task) => (
              <article key={task.id} className="border-b border-[#e6e9ed] py-3 last:border-b-0">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-bold text-[#5a738e]">{task.title}</p>
                    <p className="mt-1 text-xs font-bold text-[#73879c]">
                      {task.jobTitle} · {task.dueDate} · {task.assignedTo}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <PriorityBadge priority={task.priority} />
                    <StatusBadge status={task.status} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <ActivityFeed />

        <div className="panel-card p-6">
          <h2 className="text-lg font-extrabold text-slate-950">SKT Yaklaşan Ürünler</h2>
          <div className="mt-5 space-y-3">
            {expiryProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between rounded-2xl bg-rose-50 p-4">
                <div>
                  <p className="font-black text-slate-950">{product.name}</p>
                  <p className="text-xs font-bold text-rose-700">SKT: {product.expiryDate}</p>
                </div>
                <StatusBadge status={product.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="panel-card p-6">
          <h2 className="text-lg font-extrabold text-slate-950">Bugünkü Satış Hareketleri</h2>
          <div className="mt-5 space-y-3">
            {crmConfig.sales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="font-black text-slate-950">{sale.items}</p>
                  <p className="text-xs font-bold text-slate-500">
                    {sale.time} · {sale.channel} · {sale.payment}
                  </p>
                </div>
                <p className="text-lg font-black text-blue-600">{sale.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function buildCategoryGradient() {
  const colors = ["#1abb9c", "#3498db", "#9b59b6", "#e74c3c", "#f39c12", "#5a738e"];
  let start = 0;
  const parts = crmConfig.categorySummary.map((item, index) => {
    const end = start + item.percent;
    const part = `${colors[index]} ${start}% ${end}%`;
    start = end;
    return part;
  });
  return `conic-gradient(${parts.join(", ")})`;
}
