import { techStack } from "@/data/tech-stack";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description: "NT Web Çözümleri, işletmelerin web sitesi ve özel yazılım ihtiyaçlarını canlı örneklerle netleştiren geliştirme ekibidir.",
  path: "/about",
});

const stats = [
  ["10+", "canlı örnek sistem"],
  ["Modüler", "uyarlanabilir yapı"],
  ["Net", "kapsam ve iletişim"],
];

const team = [
  {
    name: "İsmail Taner Erdoğan",
    role: "Web geliştirme, backend, admin panel, e-ticaret ve özel yazılım altyapıları",
    desc: "Projelerin teknik tarafını, sistem mimarisini, sayfa akışını, veritabanı/API mantığını ve yayına hazırlık sürecini geliştirir.",
  },
  {
    name: "Nisa Gökşen",
    role: "İçerik dili, görsel akış, müşteri sunumu ve proje düzeni desteği",
    desc: "Sayfaların daha anlaşılır, düzenli ve müşteriye hitap eden bir yapıya kavuşması için içerik ve sunum tarafında destek sağlar.",
  },
];

const principles = [
  ["Canlı örnekle gösterim", "Müşteri sadece açıklama okumaz; benzer çalışan örnekleri gezerek nasıl bir yapı alacağını daha net görebilir."],
  ["İşletmeye göre uyarlama", "Hazır kalıp mantığı yerine; renkler, metinler, sayfalar, modüller ve akış işletmenin ihtiyacına göre düzenlenir."],
  ["Net kapsam ve dürüst iletişim", "Proje başlamadan önce ne yapılacağı, hangi modüllerin dahil olduğu ve nelerin ekstra olacağı açık şekilde konuşulur."],
  ["Teslim öncesi önizleme", "Uygun projelerde yayına almadan önce canlı önizleme bağlantısı paylaşılır ve son kontroller birlikte yapılabilir."],
];

const process = [
  ["İhtiyaç dinlenir", "İşletmenin neye ihtiyacı olduğu, hedefi ve mevcut durumu netleştirilir."],
  ["Canlı örnek seçilir", "Size en yakın örnek sistem üzerinden nasıl uyarlanacağı konuşulur."],
  ["Sistem uyarlanır", "Sayfalar, içerikler, modüller ve tasarım işletmeye göre düzenlenir."],
  ["Önizleme paylaşılır", "Teslimden önce kontrol edilebilir bir canlı bağlantı paylaşılabilir."],
  ["Yayına alınır", "Onay sonrası site veya sistem yayına hazır hale getirilir."],
];

export default function About() {
  return (
    <>
    <JsonLd data={breadcrumbJsonLd([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hakkımızda", path: "/about" },
    ])} />
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem className="mb-14 relative overflow-hidden p-0">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Hakkımızda</p>
        <h1 className="mt-4 max-w-5xl text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          NT Web Çözümleri, işletmelerin ne alacağını <span className="text-gray-500">canlı örneklerle görerek</span> karar verebilmesi için kuruldu.
        </h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">
          Web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım ihtiyaçlarında; sadece sözle anlatılan değil, canlı incelenebilen örnekler üzerinden ilerleyen bir çalışma anlayışı benimsiyoruz.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects" className="shimmer-button bg-white text-black px-7 py-3 rounded-sm text-sm font-bold transition-colors">
            Canlı Örnekleri İncele
          </Link>
          <Link href="/contact" className="border border-white/20 text-white px-7 py-3 rounded-sm text-sm font-medium hover:bg-white/10 transition-colors">
            İletişime Geç
          </Link>
        </div>
      </RevealItem>

      <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map(([value, label]) => (
          <RevealItem key={label} className="border border-white/10 bg-[#08162c]/88 p-6">
            <p className="text-xl md:text-3xl font-light text-white">{value}</p>
            <p className="mt-2 text-[11px] md:text-sm text-gray-500 leading-4">{label}</p>
          </RevealItem>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] mb-10">
        <RevealItem className="relative overflow-hidden p-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Yaklaşımımız</p>
          <h2 className="mt-4 text-3xl font-medium text-white">Klasik ajans dili yerine, görülebilir ve anlaşılır sistemler</h2>
          <div className="mt-6 space-y-5 text-gray-400 leading-8">
            <p>Birçok işletme web sitesi yaptırmak isterken ne alacağını tam göremediği için kararsız kalır. Bu yüzden NT Web Çözümleri’nde canlı örnekler önemli bir yer tutar.</p>
            <p>Hazırlanan örnekler; farklı sektörlere uyarlanabilecek web sitesi, katalog, randevu, e-ticaret ve admin panel altyapılarını göstermek için kullanılır.</p>
            <p>Amaç, müşterinin sadece tasarıma değil; sitenin akışına, kullanımına ve işletmesine nasıl fayda sağlayacağına da bakarak karar verebilmesidir.</p>
          </div>
        </RevealItem>

        <RevealItem className="premium-panel relative overflow-hidden border border-white/10 bg-[#08162c]/88 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Dürüst Sunum</p>
          <h2 className="mt-4 text-3xl font-medium text-white">Canlı örnekler müşteri işi gibi gösterilmez</h2>
          <p className="mt-6 text-gray-400 leading-8">
            Bu sitedeki canlı örnekler, gerçek müşteri işi gibi gösterilmez. Bunlar; farklı sektörlere uyarlanabilecek, çalışma mantığını göstermek için hazırlanmış örnek sistemlerdir.
          </p>
          <div className="mt-6 border border-white/10 bg-white/5 p-4 text-sm leading-7 text-gray-300">
            Gerçek müşteri işleri oluştukça ve paylaşım izni oldukça ayrı şekilde referans olarak gösterilebilir.
          </div>
        </RevealItem>
      </div>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Ekip</p>
        <h2 className="mt-4 text-3xl font-medium text-white">NT Web Çözümleri ekibi</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">
          Projelerde teknik geliştirme, içerik akışı, görsel düzen ve müşteri sunumu birlikte düşünülür. Böylece sadece çalışan değil, müşteriye güven veren ve anlaşılır duran yapılar hazırlanır.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-6">
          {team.map((member) => (
            <div key={member.name} className="border border-white/10 bg-[#071225]/55 p-4 md:p-6">
              <h3 className="text-sm md:text-xl font-bold text-white">{member.name}</h3>
              <p className="mt-2 text-xs md:text-sm font-semibold leading-5 md:leading-6 text-gray-300">{member.role}</p>
              <p className="mobile-compact-text mt-3 md:mt-4 text-xs md:text-sm leading-5 md:leading-7 text-gray-500">{member.desc}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Neden Bu Yaklaşım?</p>
        <h2 className="mt-4 text-3xl font-medium text-white">Müşteri ne alacağını baştan görebilmeli</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {principles.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white leading-6">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] mb-10">
        <RevealItem className="border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Çalışma Süreci</p>
          <h2 className="mt-4 text-3xl font-medium text-white">Nasıl çalışıyoruz?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {process.map(([title, text], index) => (
              <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="premium-panel relative overflow-hidden border border-white/10 bg-[#08162c]/88 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Teknik Altyapı</p>
          <h2 className="mt-4 text-3xl font-medium text-white">Kullandığımız teknolojiler</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="tech-chip border border-white/10 bg-[#071225]/65 px-4 py-2 text-sm text-gray-400 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <h3 className="text-2xl font-medium text-white">Hangi sistemin size uygun olduğunu bilmiyorsanız birlikte netleştirebiliriz.</h3>
            <p className="mt-4 text-gray-400 leading-8">İşletmenizi, ihtiyacınızı ve varsa beğendiğiniz canlı örneği yazmanız yeterli. Size uygun sistem, kapsam ve ilerleme şekli birlikte belirlenebilir.</p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gray-300 transition-colors">
              Hizmetleri İncele <ArrowRight size={16} />
            </Link>
          </div>
        </RevealItem>
      </div>
    </PageReveal>
    </>
  );
}
