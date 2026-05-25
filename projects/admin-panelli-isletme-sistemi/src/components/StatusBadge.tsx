import { crmConfig } from "@/config/crm";

type StatusKey = keyof typeof crmConfig.statusColors;
type PriorityKey = keyof typeof crmConfig.priorityColors;

export function StatusBadge({ status }: { status: string }) {
  const classes =
    crmConfig.statusColors[status as StatusKey] ??
    "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${classes}`}>
      {status}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: string }) {
  const classes =
    crmConfig.priorityColors[priority as PriorityKey] ??
    "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${classes}`}>
      {priority}
    </span>
  );
}
