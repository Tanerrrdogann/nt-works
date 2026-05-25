import { ElementType } from "react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  description: string;
  Icon?: ElementType; // TypeScript'e İkon gelebileceğini söylüyoruz
};

export function StatCard({ title, value, change, description, Icon }: StatCardProps) {
  return (
    <article className="border-r border-[#adb7c2] bg-white px-3 py-4 last:border-r-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          {Icon && (
            <Icon className="mt-1 shrink-0 text-[#73879c]" size={15} />
          )}
          <div>
            <p className="text-sm font-normal text-[#5a738e]">{title}</p>
            <p className="text-[40px] font-bold leading-none tracking-tight text-[#73879c]">
              {value}
            </p>
          </div>
        </div>
        <span className="pt-7 text-xs font-bold text-[#1abb9c]">
          {change}
        </span>
      </div>
      <p className="mt-1 text-sm font-normal leading-5 text-[#73879c]">{description}</p>
    </article>
  );
}
