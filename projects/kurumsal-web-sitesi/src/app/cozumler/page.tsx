import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

const solutionDetails = [
  {
    title: "E-Ticaret",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    modules: ["Ürün ve kategori yönetimi", "Sepet ve sipariş akışı", "Ödeme altyapısı", "Admin panel", "Kampanya yönetimi"],
    fit: "Online satışa başlamak veya mevcut satış sürecini daha kontrollü hale getirmek isteyen işletmeler.",
  },
  {
    title: "Eğitim",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    modules: ["Öğrenci paneli", "Ders ve içerik yönetimi", "Ödev takibi", "Raporlama", "Online kayıt akışı"],
    fit: "Kurs, akademi, eğitim platformu veya kurum içi eğitim süreçleri olan markalar.",
  },
  {
    title: "Sağlık",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    modules: ["Randevu takvimi", "Danışan kayıtları", "Hizmet paketleri", "Hatırlatma akışı", "Yetkili panel"],
    fit: "Klinik, danışmanlık merkezi, güzellik merkezi ve randevuyla çalışan hizmet işletmeleri.",
  },
  {
    title: "Lojistik",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    modules: ["Teslimat takibi", "Operasyon paneli", "Rota ve durum akışı", "Müşteri bildirimi", "Raporlama"],
    fit: "Sipariş, teslimat, saha operasyonu veya araç/ekip takibi yapan işletmeler.",
  },
  {
    title: "Üretim",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    modules: ["Stok takibi", "Üretim planı", "Malzeme listesi", "Personel görevleri", "Fire ve rapor akışı"],
    fit: "Atölye, imalat, gıda üretimi veya ürün/stok süreci yoğun işletmeler.",
  },
  {
    title: "Hizmet Sektörü",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    modules: ["Rezervasyon", "Müşteri yönetimi", "Teklif ve ödeme takibi", "Görev paneli", "Mail üzerinden talep akışı"],
    fit: "Restoran, kafe, ajans, servis, bakım, danışmanlık ve yerel hizmet işletmeleri.",
  },
];

const solutionsMailUrl = `${siteConfig.brand.emailLink}&body=${encodeURIComponent(
  "Merhaba, NovaCore çözümleri hakkında görüşmek istiyorum.",
)}`;

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#071225] pb-20 text-white md:pb-0">
      <Header />
      <PageHero
        eyebrow="Çözümler"
        title="Sektörlere göre uyarlanabilen yazılım çözümleri"
        description="Her işletmenin satış, operasyon, müşteri ve raporlama akışı farklıdır. Bu yüzden çözümü hazır kalıp gibi değil, sektörün çalışma ritmine göre kurarız."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-px bg-white/14 lg:grid-cols-3">
          {solutionDetails.map((solution) => (
            <article key={solution.title} className="bg-[#0b1830]">
              <div
                aria-label={solution.title}
                className="image-zoom aspect-[16/10] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${solution.image}')` }}
              >
                <div className="h-full w-full bg-[#071225]/18" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-black text-white">{solution.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{solution.fit}</p>
                <div className="mt-6 grid gap-2">
                  {solution.modules.map((module) => (
                    <p key={module} className="border-t border-white/12 pt-2 text-sm font-bold text-slate-400">
                      {module}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/14 bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-6xl">Çözüm önce iş akışını anlamakla başlar.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Analiz", "Mevcut süreci, kullanıcı rollerini ve hedeflenen çıktıyı netleştiririz."],
              ["Tasarım", "İşletme sahibinin ve son kullanıcının rahat anlayacağı ekranlar kurarız."],
              ["Geliştirme", "Web, panel, otomasyon ve entegrasyon katmanlarını ihtiyaca göre geliştiririz."],
              ["Destek", "Yayın sonrası bakım, iyileştirme ve yeni özellik planlamasını sürdürürüz."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[8px] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071225]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[48%] bg-cover bg-center opacity-45 lg:block"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#071225 0%,rgba(7,18,37,0.52) 44%,rgba(7,18,37,0.2) 100%),url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_0.7fr]">
          <h2 className="text-5xl font-black leading-tight sm:text-7xl">Sektörünüze yakın bir demo üzerinden konuşalım.</h2>
          <div className="self-end">
            <p className="text-lg font-semibold leading-8 text-slate-300">
              İsterseniz mevcut örnekleri birlikte inceleyip işletmenize yakın kapsamı hızlıca çıkarabiliriz.
            </p>
            <a href={solutionsMailUrl} className="corporate-button mt-7 inline-flex border border-slate-200 bg-slate-200 px-7 py-4 text-sm font-black text-black">
              Mail ile Görüşelim
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBar />
    </main>
  );
}
