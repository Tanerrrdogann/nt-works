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
    <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-rose-50 px-4 py-2 rounded-bl-2xl text-xs font-semibold text-rose-500">
        {service.category}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 mt-4 group-hover:text-rose-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-2">
        {service.description}
      </p>
      <div className="flex items-center justify-between mb-6 text-sm text-rose-400 font-medium">
        <span>⏱ {service.duration}</span>
        <span>✨ {service.price}</span>
      </div>
      <Link href={`/hizmetler/${service.slug}`} className="block w-full py-3 text-center rounded-2xl bg-rose-50 text-rose-600 font-semibold group-hover:bg-rose-500 group-hover:text-white transition-colors">
        Detayları İncele
      </Link>
    </div>
  );
}
