"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { QuickCreateModal } from "@/components/QuickCreateModal";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";
import { AlertTriangle, FileDown, Package, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  const [reports, setReports] = useState(crmConfig.generatedReports);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const maxSales = Math.max(...crmConfig.weeklySalesSeries.map((item) => item.sales));
  const maxTransactions = Math.max(...crmConfig.weeklySalesSeries.map((item) => item.transactions));
  const reportCards = [
    ["Bugünkü satış", crmConfig.reports.todaySales],
    ["Bu haftaki toplam satış", crmConfig.reports.weeklySales],
    ["Bu ay tahmini ciro", crmConfig.reports.monthlyRevenue],
    ["En aktif tedarikçi", crmConfig.reports.mostActiveSupplier],
  ];

  function createReport(values: Record<string, string>) {
    setReports((current) => [
      {
        id: `rapor-${Date.now()}`,
        title: values.title || "Yeni Rapor",
        period: values.period || "Bugün",
        owner: values.owner || "Taner",
        status: "Hazır",
      },
      ...current,
    ]);
  }

  function openPdfReport(reportTitle = "Detaylı Market Raporu") {
    const reportWindow = window.open("", "_blank", "width=1100,height=820");
    if (!reportWindow) return;

    const salesRows = crmConfig.weeklySalesSeries
      .map((item) => `<tr><td>${item.day}</td><td>₺${item.sales.toLocaleString("tr-TR")}</td><td>${item.transactions}</td></tr>`)
      .join("");
    const categoryRows = crmConfig.categorySummary
      .map((item) => `<tr><td>${item.name}</td><td>₺${item.value.toLocaleString("tr-TR")}</td><td>%${item.percent}</td></tr>`)
      .join("");
    const stockRows = crmConfig.products
      .filter((product) => ["Azaldı", "Kritik", "Tükendi", "SKT Yaklaşıyor"].includes(product.status))
      .map((product) => `<tr><td>${product.name}</td><td>${product.stock}</td><td>${product.minStock}</td><td>${product.status}</td><td>${product.expiryDate}</td></tr>`)
      .join("");
    const cashRows = crmConfig.cashSummary.map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`).join("");
    const taskRows = crmConfig.staffWorkload
      .map((staff) => `<tr><td>${staff.name}</td><td>${staff.role}</td><td>${staff.openTasks}</td><td>${staff.completedTasks}</td><td>${staff.shift}</td></tr>`)
      .join("");

    reportWindow.document.write(`
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <title>${reportTitle}</title>
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; padding: 32px; font-family: Arial, Helvetica, sans-serif; color: #2a3f54; background: #fff; }
            .header { display: flex; justify-content: space-between; gap: 24px; border-bottom: 3px solid #1abb9c; padding-bottom: 18px; margin-bottom: 24px; }
            h1 { margin: 0; font-size: 28px; color: #2a3f54; }
            h2 { margin: 28px 0 12px; font-size: 18px; color: #5a738e; border-bottom: 1px solid #d9dee4; padding-bottom: 8px; }
            .muted { color: #73879c; font-size: 13px; line-height: 1.6; }
            .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 18px 0 8px; }
            .card { border: 1px solid #d9dee4; padding: 14px; }
            .label { color: #73879c; font-size: 12px; font-weight: 700; }
            .value { margin-top: 6px; font-size: 22px; font-weight: 800; color: #2a3f54; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 12px; page-break-inside: avoid; }
            th { background: #2a3f54; color: #fff; text-align: left; font-size: 12px; padding: 9px; }
            td { border: 1px solid #d9dee4; padding: 9px; font-size: 12px; }
            .note { margin-top: 24px; padding: 12px; border-left: 4px solid #1abb9c; background: #f7f7f7; color: #5a738e; font-size: 12px; }
            @media print { body { padding: 18px; } .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>${reportTitle}</h1>
              <p class="muted">${crmConfig.company.appName} · ${crmConfig.company.branch}<br/>${crmConfig.company.location}</p>
            </div>
            <div class="muted">
              Oluşturma: ${new Date().toLocaleDateString("tr-TR")}<br/>
              Sorumlu: ${crmConfig.company.userName}<br/>
              Para birimi: TL
            </div>
          </div>

          <div class="summary">
            <div class="card"><div class="label">Bugünkü Satış</div><div class="value">${crmConfig.reports.todaySales}</div></div>
            <div class="card"><div class="label">Haftalık Satış</div><div class="value">${crmConfig.reports.weeklySales}</div></div>
            <div class="card"><div class="label">Aylık Ciro</div><div class="value">${crmConfig.reports.monthlyRevenue}</div></div>
            <div class="card"><div class="label">Kritik Stok</div><div class="value">${crmConfig.reports.criticalStockCount}</div></div>
          </div>

          <h2>Kasa Özeti</h2>
          <table><thead><tr><th>Kalem</th><th>Tutar</th></tr></thead><tbody>${cashRows}</tbody></table>

          <h2>Haftalık Satış ve İşlem Sayısı</h2>
          <table><thead><tr><th>Gün</th><th>Satış</th><th>İşlem</th></tr></thead><tbody>${salesRows}</tbody></table>

          <h2>Kategori Performansı</h2>
          <table><thead><tr><th>Kategori</th><th>Satış</th><th>Pay</th></tr></thead><tbody>${categoryRows}</tbody></table>

          <h2>Stok Riskleri</h2>
          <table><thead><tr><th>Ürün</th><th>Stok</th><th>Minimum</th><th>Durum</th><th>SKT</th></tr></thead><tbody>${stockRows}</tbody></table>

          <h2>Personel Görev Yükü</h2>
          <table><thead><tr><th>Personel</th><th>Rol</th><th>Açık Görev</th><th>Tamamlanan</th><th>Vardiya</th></tr></thead><tbody>${taskRows}</tbody></table>

          <div class="note">
            Bu rapor; satış, stok, kasa, tedarik ve personel görev verilerinden hazırlanmıştır. Yazdır ekranında “PDF olarak kaydet” seçeneğiyle PDF dosyası alınabilir.
          </div>
          <script>
            window.onload = () => {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    reportWindow.document.close();
  }

  return (
    <AppShell title="Raporlar" description="Kasa, stok, ciro ve tedarik performansı" actionLabel="Detaylı PDF Raporu Al" onAction={() => openPdfReport()}>
      <QuickCreateModal
        isOpen={isCreateOpen}
        title="Rapor Oluştur"
        description="Rapor türü, dönem ve sorumlu bilgisiyle yeni rapor hazırlayın."
        submitLabel="Raporu Oluştur"
        onClose={() => setIsCreateOpen(false)}
        onCreate={createReport}
        fields={[
          { name: "title", label: "Rapor Adı", placeholder: "Gün sonu kasa raporu" },
          { name: "period", label: "Dönem", placeholder: "Bugün / Bu hafta" },
          { name: "owner", label: "Sorumlu", placeholder: "Taner" },
        ]}
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map(([label, value]) => (
          <div key={label} className="rounded-3xl panel-card p-6">
            <p className="text-sm font-black text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-black text-slate-950">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl panel-card p-6">
          <TrendingUp className="text-[#1abb9c]" size={30} />
          <h2 className="mt-4 text-xl font-black text-slate-950">Satış Performansı</h2>
          <div className="mt-5 space-y-4">
            <ReportRow label="En çok satan ürün" value={crmConfig.reports.bestSeller} />
            <ReportRow label="En az satan ürün" value={crmConfig.reports.leastSeller} />
            <ReportRow label="En çok kâr bırakan" value={crmConfig.reports.mostProfitable} />
          </div>
        </div>

        <div className="rounded-3xl panel-card p-6">
          <AlertTriangle className="text-amber-600" size={30} />
          <h2 className="mt-4 text-xl font-black text-slate-950">Stok Riskleri</h2>
          <div className="mt-5 space-y-4">
            <ReportRow label="Kritik stok sayısı" value={crmConfig.reports.criticalStockCount} />
            <ReportRow label="SKT riski olan ürün" value={crmConfig.reports.expiryRiskCount} />
            <ReportRow label="Tedarik bekleyen" value="4 sipariş" />
          </div>
        </div>

        <div className="rounded-3xl panel-card p-6">
          <Package className="text-[#1abb9c]" size={30} />
          <h2 className="mt-4 text-xl font-black text-slate-950">Personel Görev Yükü</h2>
          <div className="mt-5 space-y-4">
            {crmConfig.staffWorkload.slice(0, 2).map((staff) => (
              <ReportRow key={staff.name} label={staff.name} value={`${staff.openTasks} açık görev`} />
            ))}
            <ReportRow label="Tamamlama oranı" value={crmConfig.reports.taskCompletionRate} />
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="panel-card rounded-3xl p-8">
          <h3 className="text-lg font-extrabold text-slate-950">Haftalık Satış Özeti</h3>
          <div className="mt-6 flex h-44 items-end gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            {crmConfig.weeklySalesSeries.map((item) => (
              <div key={item.day} className="relative flex-1 rounded-lg bg-[#1abb9c]" style={{ height: `${(item.sales / maxSales) * 100}%` }}>
                <span className="absolute -top-6 w-full text-center text-[10px] font-black text-[#169f85]">₺{Math.round(item.sales / 1000)}k</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel-card rounded-3xl p-8">
          <h3 className="text-lg font-extrabold text-slate-950">Günlük İşlem Sayısı</h3>
          <div className="mt-6 flex h-44 items-end gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            {crmConfig.weeklySalesSeries.map((item) => (
              <div key={item.day} className="relative flex-1 rounded-lg bg-[#5a738e]" style={{ height: `${(item.transactions / maxTransactions) * 100}%` }}>
                <span className="absolute -top-6 w-full text-center text-[10px] font-black text-[#5a738e]">{item.transactions}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl panel-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-extrabold text-slate-950">Oluşturulan Raporlar</h3>
          <button onClick={() => setIsCreateOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#5a738e] px-4 py-2 text-sm font-black text-white transition hover:bg-[#2a3f54]">
            Rapor Oluştur
          </button>
        </div>
        <div className="mt-5 table-scroll">
          <table className="w-full min-w-[760px] text-left text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3">Rapor</th>
                <th>Dönem</th>
                <th>Sorumlu</th>
                <th>Durum</th>
                <th className="text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 font-black text-slate-950">{report.title}</td>
                  <td>{report.period}</td>
                  <td>{report.owner}</td>
                  <td><StatusBadge status={report.status} /></td>
                  <td className="text-right">
                    <button onClick={() => openPdfReport(report.title)} className="inline-flex items-center gap-2 bg-[#1abb9c] px-3 py-1.5 text-xs font-black text-white">
                      <FileDown size={14} /> PDF Al
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}

function ReportRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <span className="text-sm font-bold text-slate-500">{label}</span>
      <span className="font-black text-slate-950">{value}</span>
    </div>
  );
}
