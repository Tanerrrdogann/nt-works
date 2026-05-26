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
    <article className="border-r border-b border-[#adb7c2] bg-white px-2.5 py-3 last:border-r-0 md:px-3 md:py-4">
      <div className="flex items-start justify-between gap-2 md:gap-3">
        <div className="flex min-w-0 items-start gap-2">
          {Icon && (
            <Icon className="mt-1 shrink-0 text-[#73879c]" size={15} />
          )}
          <div>
            <p className="truncate text-xs font-normal text-[#5a738e] md:text-sm">{title}</p>
            <p className="text-2xl font-bold leading-none tracking-tight text-[#73879c] md:text-[40px]">
              {value}
            </p>
          </div>
        </div>
        <span className="pt-5 text-[10px] font-bold text-[#1abb9c] md:pt-7 md:text-xs">
          {change}
        </span>
      </div>
      <p className="mt-1 line-clamp-2 text-xs font-normal leading-5 text-[#73879c] md:text-sm">{description}</p>
    </article>
  );
}
