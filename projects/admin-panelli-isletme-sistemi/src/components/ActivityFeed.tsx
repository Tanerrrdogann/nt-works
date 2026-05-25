import { crmConfig } from "@/config/crm";

export function ActivityFeed() {
  return (
    <div className="rounded-3xl panel-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-950">Son Aktiviteler</h2>
          <p className="mt-1 text-sm text-slate-500">
            Müşteri, teklif ve görev hareketleri
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
          Canlı akış
        </span>
      </div>

      <div className="space-y-4">
        {crmConfig.activities.map((activity) => (
          <div key={activity.id} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
            <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-blue-600" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-black text-slate-900">{activity.title}</p>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                  {activity.type}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {activity.description}
              </p>
              <p className="mt-2 text-xs font-bold text-slate-400">
                {activity.time} · {activity.relatedCustomer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
