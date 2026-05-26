import Link from "next/link";

type ServiceProps = {
  service: {
    slug: string;
    category: string;
    title: string;
    description: string;
    duration: string;
    price: string;
  };
};

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 border border-rose-100 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-rose-50 px-2 py-1 md:px-4 md:py-2 rounded-bl-2xl text-[10px] md:text-xs font-semibold text-rose-500">
        {service.category}
      </div>
      <h3 className="text-sm leading-5 md:text-xl md:leading-7 font-bold text-slate-800 mb-1 md:mb-2 mt-5 md:mt-4 group-hover:text-rose-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-xs leading-5 md:text-sm md:leading-6 mb-3 md:mb-6 line-clamp-2">
        {service.description}
      </p>
      <div className="grid gap-1 mb-3 md:mb-6 text-[11px] md:text-sm text-rose-400 font-medium">
        <span>⏱ {service.duration}</span>
        <span>✨ {service.price}</span>
      </div>
      <Link href={`/hizmetler/${service.slug}`} className="block w-full py-2 md:py-3 text-center rounded-xl md:rounded-2xl bg-rose-50 text-rose-600 text-xs md:text-sm font-semibold group-hover:bg-rose-500 group-hover:text-white transition-colors">
        Detayları İncele
      </Link>
    </div>
  );
}
