import { siteConfig } from "@/config/site";
import SpecialistCard from "@/components/SpecialistCard";

export default function SpecialistsPage() {
  return (
    <div className="pt-12 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Sihirli Ellere Teslim Olun</h1>
          <p className="text-rose-500 text-lg">Alanında profesyonel, size özel hissettirecek uzman kadromuzla tanışın.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {siteConfig.specialists.map((specialist, i) => (
            <SpecialistCard key={i} specialist={specialist} />
          ))}
        </div>
      </div>
    </div>
  );
}
