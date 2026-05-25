import Link from "next/link";
import { crmConfig } from "@/config/crm";
import { PriorityBadge, StatusBadge } from "@/components/StatusBadge";

export function PipelineBoard() {
  return (
    <div className="rounded-3xl panel-card p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h2 className="text-lg font-black text-slate-950">İş Pipeline</h2>
          <p className="mt-1 text-sm text-slate-500">
            Satış fırsatları, servis talepleri ve müşteri işlerinin aşama takibi
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
            {crmConfig.jobs.length} iş
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
            {crmConfig.jobs.filter((job) => job.status === "Tamamlandı").length} tamamlandı
          </span>
        </div>
      </div>

      <div className="grid gap-4 overflow-x-auto pb-2 lg:grid-cols-3 xl:grid-cols-6">
        {crmConfig.pipelineStages.map((stage) => {
          const jobs = crmConfig.jobs.filter((job) => job.status === stage);
          const totalValue = jobs.reduce((sum, job) => {
            const numeric = Number(job.value.replace(/[^\d]/g, ""));
            return sum + (Number.isNaN(numeric) ? 0 : numeric);
          }, 0);

          return (
            <section key={stage} className="min-w-64 rounded-3xl bg-slate-50 p-4">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black text-slate-800">{stage}</h3>
                  <p className="mt-1 text-xs font-bold text-slate-400">
                    ₺{totalValue.toLocaleString("tr-TR")}
                  </p>
                </div>

                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-slate-500">
                  {jobs.length}
                </span>
              </div>

              <div className="space-y-3">
                {jobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/isler/${job.id}`}
                    className="block rounded-2xl bg-white p-4 transition hover:ring-2 hover:ring-blue-100"
                  >
                    <div className="mb-3">
                      <StatusBadge status={job.status} />
                    </div>

                    <p className="font-black text-slate-900">{job.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{job.customerName}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <PriorityBadge priority={job.priority} />
                      <span className="text-xs font-black text-slate-500">
                        {job.value}
                      </span>
                    </div>

                    <p className="mt-3 text-xs font-bold text-slate-400">
                      Son tarih: {job.dueDate}
                    </p>
                  </Link>
                ))}

                {jobs.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 text-sm font-bold text-slate-400">
                    Bu aşamada iş yok
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
