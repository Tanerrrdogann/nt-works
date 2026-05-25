import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { StatusBadge, PriorityBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";

export function generateStaticParams() {
  return crmConfig.jobs.map((job) => ({ id: job.id }));
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = crmConfig.jobs.find((item) => item.id === id);

  if (!job) {
    notFound();
  }

  const customer = crmConfig.customers.find((item) => item.id === job.customerId);
  const relatedTasks = crmConfig.tasks.filter((task) => task.jobTitle === job.title);
  const quote = crmConfig.quotes.find((item) => item.customerName === job.customerName);

  return (
    <AppShell
      title={job.title}
      description={`${job.customerName} için sipariş / operasyon detayı`}
      actionLabel="Görev Ekle"
    >
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="rounded-3xl panel-card p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              <StatusBadge status={job.status} />
              <PriorityBadge priority={job.priority} />
            </div>

            <h2 className="text-2xl font-black">{job.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{job.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Müşteri</p>
                <p className="mt-1 font-black">{job.customerName}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Değer</p>
                <p className="mt-1 font-black">{job.value}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Son Tarih</p>
                <p className="mt-1 font-black">{job.dueDate}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Sorumlu</p>
                <p className="mt-1 font-black">{job.assignedTo}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-lg font-black">Durum Güncelleme Görünümü</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none focus:border-blue-600" defaultValue={job.status}>
                {crmConfig.pipelineStages.map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
              <button className="rounded-2xl bg-[#1abb9c] px-4 py-3 text-sm font-black text-white">
                Durumu Güncelle
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-lg font-black">Müşteri Bilgisi</h2>
            {customer ? (
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="font-black">{customer.name}</p>
                <p className="mt-1 text-sm text-slate-500">{customer.address}</p>
                <p className="mt-3 text-sm">{customer.phone}</p>
                <p className="mt-1 text-sm">Bakiye: {customer.balance}</p>
              </div>
            ) : (
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
                Müşteri bilgisi bulunamadı.
              </p>
            )}
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-lg font-black">Görevler</h2>
            <div className="mt-5 space-y-3">
              {(relatedTasks.length > 0 ? relatedTasks : job.tasks.map((task, index) => ({
                id: `${job.id}-task-${index}`,
                title: task,
                status: "Bekliyor",
                priority: job.priority,
                dueDate: job.dueDate,
              }))).map((task) => (
                <div key={task.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{task.title}</p>
                      <p className="mt-1 text-xs font-bold text-slate-400">
                        Son tarih: {task.dueDate}
                      </p>
                    </div>
                    <PriorityBadge priority={task.priority} />
                  </div>
                  <div className="mt-3">
                    <StatusBadge status={task.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-lg font-black">Teklif Bağlantısı</h2>
            {quote ? (
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-black">{quote.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{quote.quoteNumber}</p>
                  </div>
                  <StatusBadge status={quote.status} />
                </div>
                <p className="mt-4 text-2xl font-black">{quote.amount}</p>
              </div>
            ) : (
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-500">
                Bu iş için henüz teklif bağlanmamış.
              </p>
            )}
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-lg font-black">Notlar</h2>
            <div className="mt-5 space-y-3">
              {job.notes.map((note) => (
                <div key={note} className="rounded-2xl bg-slate-50 p-4 leading-7 text-slate-600">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
