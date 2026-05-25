import { siteConfig } from "@/config/site";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Hizmetlerimiz</h1>
          <p className="text-rose-500 text-lg">Güzelliğinize güzellik katacak profesyonel bakım ritüellerimizi inceleyin.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
