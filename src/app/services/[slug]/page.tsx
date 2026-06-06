import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return;
  return pageMetadata({
    title: service.title,
    description: service.longDesc,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      ...service.features,
      ...service.examples,
      ...service.infrastructure,
    ],
  });
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

const process = [
  ["İhtiyacınızı yazarsınız", "İşletme türünüz, istediğiniz sistem ve varsa örnek aldığınız yapı konuşulur."],
  ["Canlı örnek seçilir", "Size en yakın canlı örnek üzerinden nasıl uyarlanacağı netleştirilir."],
  ["Kapsam ve fiyat netleşir", "Sayfalar, modüller, admin panel, ödeme veya randevu ihtiyaçları belirlenir."],
  ["Güvenli şekilde ilerlenir", "İsterseniz Bionluk üzerinden özel teklif veya uygun paketle ilerlenebilir."],
];

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
        serviceJsonLd({
          name: service.title,
          description: service.longDesc,
          path: `/services/${service.slug}`,
          offers: service.features,
        }),
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <RevealItem className="mb-8 relative overflow-hidden p-0 md:p-0">
        <div className="mb-4 inline-block border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-widest">
          Hizmet Detayı
        </div>
        <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">{service.title}</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-8">{service.longDesc}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/contact?service=${service.slug}`} className="shimmer-button bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
            Bu Hizmet İçin Fiyat Al <ArrowRight size={18} />
          </Link>
          <Link href="/projects" className="border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">
            Canlı Örnekleri İncele
          </Link>
          <Link href="/services" className="border border-white/10 text-gray-400 px-6 py-3 font-medium hover:text-white hover:bg-white/5 transition-colors">
            Tüm Hizmetler
          </Link>
        </div>
      </RevealItem>

      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">Bu hizmet ne işe yarar?</h2>
          <div className="space-y-5 text-gray-400 leading-8">
            {service.detail.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="relative overflow-hidden border-l-4 border-white pl-6 py-2">
          <h2 className="text-2xl md:text-3xl font-medium mb-5">Canlı önizleme avantajı</h2>
          <p className="text-gray-400 leading-8">
            Proje başlamadan önce benzer canlı örnekleri inceleyebilirsiniz. Proje sürecinde de uygun durumlarda size özel önizleme bağlantısı paylaşılabilir. Böylece sadece ekran görüntüsü değil, telefonunuzdan gezebileceğiniz çalışan bir yapı üzerinden kontrol sağlayabilirsiniz.
          </p>
          <div className="mt-6 grid gap-3">
            {["Canlı örnek üzerinden güven", "İşletmeye göre uyarlama", "Teslim öncesi kontrol", "Bionluk üzerinden güvenli ilerleme seçeneği"].map((item) => (
              <div key={item} className="border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold leading-6 text-gray-200">
                {item}
              </div>
            ))}
          </div>
        </RevealItem>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-8">
        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Örnek kullanım alanları</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.examples.map((item) => (
              <div key={item} className="border border-white/10 bg-[#071225]/55 p-4 text-sm font-medium leading-6 text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="border-t border-white/10 pt-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Kullanılabilecek altyapılar</h2>
          <div className="flex flex-wrap gap-2">
            {service.infrastructure.map((tech) => (
              <span key={tech} className="tech-chip px-3 py-2 bg-[#071225]/65 border border-white/10 text-sm text-gray-400 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 border-l-2 border-white/20 pl-4 leading-7">
            Bu altyapılar sabit paket gibi düşünülmez. İhtiyacınıza göre bazı modüller çıkarılabilir, bazıları eklenebilir veya aynı proje içinde birleştirilebilir.
          </p>
        </RevealItem>
      </div>

      <RevealItem className="border-t border-white/10 pt-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Satın alma süreci nasıl ilerler?</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {process.map(([title, desc], index) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold">{index + 1}</div>
              <h3 className="mt-4 font-bold text-white leading-6">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/contact?service=${service.slug}`} className="bg-white text-black px-7 py-3 font-bold hover:bg-gray-200 transition-colors">
            Bu Hizmet İçin İletişime Geç
          </Link>
          <Link href="/services" className="border border-white/20 text-white px-7 py-3 font-medium hover:bg-white/10 transition-colors">
            Tüm Hizmetlere Dön
          </Link>
        </div>
      </RevealItem>
      </PageReveal>
    </>
  );
}
