import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

const mailActions = [
  [
    "Proje kapsamı",
    "Web, panel, e-ticaret veya özel yazılım ihtiyacınızı kısa notla başlatın.",
    `${siteConfig.brand.emailLink}&body=${encodeURIComponent("Merhaba, proje / teklif görüşmesi için iletişime geçmek istiyorum.")}`,
  ],
  [
    "Görüşme talebi",
    "Uygun zaman aralığınızı iletin, proje görüşmesini netleştirelim.",
    siteConfig.brand.phoneLink,
  ],
  [
    "Toplantı planı",
    "Firma, gündem ve hedef bilgisini paylaşın; toplantı akışını hazırlayalım.",
    siteConfig.brand.mapsLink,
  ],
  [
    "Bakım ve destek",
    "Mevcut siteniz veya yazılımınız için geliştirme ve bakım talebi oluşturun.",
    `mailto:${siteConfig.brand.email}?subject=Kurumsal%20%C4%B0%C5%9F%20Birli%C4%9Fi%20Talebi`,
  ],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="İletişim" title="Projeyi netleştirelim, sonra doğru çözümü kuralım." description="İhtiyacınızı birkaç başlıkla paylaşmanız yeterli. Kapsam, öncelik, süre ve teknik yol haritasını birlikte netleştiririz." />
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(7,18,37,0.08),transparent_28%),linear-gradient(135deg,rgba(7,18,37,0.035)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <div className="overflow-hidden border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-200">
            <div
              aria-hidden="true"
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(0deg,rgba(7,18,37,0.52),rgba(7,18,37,0.18)),url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Kurumsal iletişim</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Önce ihtiyacı netleştirir, sonra kapsamı çıkarırız.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                Proje tipi, hedef, örnek ekranlar ve beklenen teslim tarihi yazılı ilerlediğinde hem teklif hem geliştirme süreci daha sağlam olur.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {mailActions.map(([label, value, href], index) => (
              <a key={label} href={href} className="reveal-card block border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-sm font-black text-slate-400">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-xl font-black text-slate-950">{label}</p>
                <p className="mt-3 leading-7 text-slate-600">{value}</p>
                <p className="mt-4 text-sm font-black text-slate-900">{siteConfig.brand.email}</p>
              </a>
            ))}
          </div>
        </div>
        <form action={siteConfig.brand.emailLink} method="post" encType="text/plain" className="border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200 md:p-8">
          <div className="mb-7 border-b border-slate-200 pb-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">Teklif formu</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Kısa bilgileri bırakın, ilk kapsam notunu hazırlayalım.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["Ad Soyad", "Firma Adı", "E-posta", "Telefon"].map((field) => (
              <label key={field}>
                <span className="mb-2 block text-sm font-black">{field}</span>
                <input name={field} className="w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950 focus:bg-slate-50" placeholder={field} />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <select name="Hizmet" className="border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-950">
              {siteConfig.services.map((service) => <option key={service.slug}>{service.title}</option>)}
              <option>Diğer</option>
            </select>
            <select name="Bütçe" className="border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-950">
              {["10.000 TL altı", "10.000 - 25.000 TL", "25.000 - 50.000 TL", "50.000 TL üzeri", "Henüz net değil"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <textarea name="Proje Açıklaması" className="mt-4 min-h-40 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950 focus:bg-slate-50" placeholder="Proje hedefi, örnek site, ihtiyaç duyulan ekranlar veya teslim beklentinizi yazabilirsiniz." />
          <label className="mt-4 flex gap-3 text-sm font-semibold leading-6 text-slate-600">
            <input type="checkbox" className="mt-1 h-4 w-4" />
            KVKK Aydınlatma Metni’ni okudum ve kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.
          </label>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button type="submit" className="corporate-button bg-slate-950 px-6 py-4 text-sm font-black text-white">E-posta Taslağı Aç</button>
            <a href={`mailto:${siteConfig.brand.email}?subject=Toplant%C4%B1%20Talebi`} className="corporate-button border border-slate-950 px-6 py-4 text-center text-sm font-black text-slate-950">Toplantı Maili Aç</a>
          </div>
        </form>
        </div>
      </section>
      <section className="bg-[#071225] text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/14 px-5 py-14 md:grid-cols-4">
          {[
            ["01", "İhtiyaç", "Ne yapılacak ve kimin için yapılacak?"],
            ["02", "Kapsam", "Hangi ekranlar, entegrasyonlar ve teslimler var?"],
            ["03", "Takvim", "Öncelikler ve yayın planı nasıl ilerleyecek?"],
            ["04", "Teklif", "Net kapsamla gerçekçi teklif hazırlanır."],
          ].map(([step, title, text]) => (
            <article key={step} className="bg-[#071225] p-6">
              <p className="text-3xl font-black text-slate-500">{step}</p>
              <h3 className="mt-3 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
