import { servicesData } from "@/data/services";
import Link from "next/link";
import type { Metadata } from "next";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";

export const metadata: Metadata = pageMetadata({
  title: "Hizmetler",
  description: "İşletmenize göre uyarlanabilir web sitesi, katalog, e-ticaret, randevu, admin panel ve özel yazılım hizmetleri.",
  path: "/services",
});

export default function Services() {
  return (
    <>
    <JsonLd data={[
      breadcrumbJsonLd([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hizmetler", path: "/services" },
      ]),
      itemListJsonLd({
        name: "NT Web Çözümleri hizmetleri",
        description: "Web sitesi, katalog, e-ticaret, randevu, admin panel ve özel yazılım hizmetleri.",
        items: servicesData.map((service) => ({
          name: service.title,
          description: service.shortDesc,
          path: `/services/${service.slug}`,
        })),
      }),
    ]} />
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">İşletmenize Göre Uyarlanabilir <br/><span className="text-gray-500">Web Sitesi ve Yazılım Hizmetleri</span></h1>
        <p className="mobile-compact-text text-base md:text-xl text-gray-400 max-w-3xl">Tek bir kalıba bağlı kalmadan; web sitesi, katalog, randevu, e-ticaret ve admin panel altyapıları ihtiyaca göre birleştirilebilir. Önce ihtiyacı netleştirelim, sonra kapsamı ve fiyatı belirleyelim.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-20 md:mb-32">
        {servicesData.map((srv) => (
          <RevealItem key={srv.slug} className="premium-card mobile-compact-card group relative overflow-hidden bg-[rgba(9,26,49,0.92)] border border-white/10 p-4 md:p-10 flex min-h-[13rem] md:min-h-[19rem] flex-col justify-center text-center">
            <span className="card-sheen" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-xl">
              <h2 className="text-base md:text-2xl font-medium mb-3 md:mb-4">{srv.title}</h2>
              <p className="text-gray-400 mb-4 md:mb-8 leading-6 md:leading-7">{srv.shortDesc}</p>
              <p className="mobile-hide-detail mb-4 text-xs md:text-sm leading-6 text-gray-500">{srv.problemSolved}</p>
            </div>
            <div className="mobile-actions relative z-10 mt-auto flex flex-wrap justify-center gap-2 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
              <Link href={`/services/${srv.slug}`} className="shimmer-button bg-white text-black px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-bold transition-colors">
                Detaylı Öğren
              </Link>
              <Link href={`/contact?service=${srv.slug}`} className="border border-white/20 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors">
                Fiyat Al
              </Link>
            </div>
          </RevealItem>
        ))}
      </div>

      <div className="premium-panel relative overflow-hidden bg-[#071225]/78 border border-white/10 p-5 md:p-16">
        <h2 className="text-3xl font-medium mb-6">Sistemler ihtiyaca göre birleşebilir</h2>
        <p className="mobile-compact-text text-gray-400 mb-8 md:mb-12 max-w-3xl text-sm md:text-lg">
          Katalog, randevu, WhatsApp yönlendirme, ödeme altyapısı ve admin panel gibi parçalar aynı projede birleştirilebilir. Böylece işletmeniz için sadece tek bir sayfa değil, ihtiyaca göre büyüyebilen bir sistem kurulabilir.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h4 className="font-bold text-white mb-2">Kafe / Restoran</h4>
            <p className="text-gray-500 text-sm">Landing page + QR menü + WhatsApp + rezervasyon + isteğe bağlı admin panel</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Butik / Ürün Satışı</h4>
            <p className="text-gray-500 text-sm">Katalog + WhatsApp sipariş + ürün yönetimi + isteğe bağlı ödeme akışı</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Güzellik Merkezi / Klinik</h4>
            <p className="text-gray-500 text-sm">Tanıtım sitesi + randevu sistemi + müşteri takip paneli</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Rent a Car / Araç Listeleme</h4>
            <p className="text-gray-500 text-sm">Araç katalog + rezervasyon talebi + iletişim yönlendirme + admin panel</p>
          </div>
        </div>
      </div>
    </PageReveal>
    </>
  );
}
