import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

const mailActions = [
  [
    "Proje ve teklif",
    "Kurumsal web sitesi veya özel yazılım projesi için detayları maille paylaşın.",
    `${siteConfig.brand.emailLink}&body=${encodeURIComponent("Merhaba, proje / teklif görüşmesi için iletişime geçmek istiyorum.")}`,
  ],
  [
    "Telefon görüşmesi talebi",
    "Uygun gün ve saat bilgisini gönderin, görüşmeyi mail üzerinden netleştirelim.",
    siteConfig.brand.phoneLink,
  ],
  [
    "Toplantı planlama",
    "Online ya da yüz yüze toplantı için firma ve gündem bilgisini iletin.",
    siteConfig.brand.mapsLink,
  ],
  [
    "Kurumsal iş birliği",
    "Partnerlik, bakım veya uzun vadeli destek taleplerinizi maille başlatın.",
    `mailto:${siteConfig.brand.email}?subject=Kurumsal%20%C4%B0%C5%9F%20Birli%C4%9Fi%20Talebi`,
  ],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="İletişim" title="Bizimle İletişime Geçin" description="Projeniz, iş birliği talepleriniz veya sorularınız için bize ulaşabilirsiniz. En kısa sürede dönüş sağlarız." />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {mailActions.map(([label, value, href]) => (
            <a key={label} href={href} className="block rounded-[8px] border border-slate-200 bg-white p-5">
              <p className="text-lg font-black text-slate-950">{label}</p>
              <p className="mt-3 leading-7 text-slate-600">{value}</p>
              <p className="mt-4 text-sm font-black text-slate-900">{siteConfig.brand.email}</p>
            </a>
          ))}
          <div className="rounded-[8px] border border-slate-200 bg-white p-6">
            <p className="text-2xl font-black text-slate-950">Kurumsal iletişim mail üzerinden yürütülür.</p>
            <p className="mt-4 leading-7 text-slate-600">
              Kapsam, bütçe, toplantı saati ve teklif detayları yazılı ilerlediğinde süreç daha net yönetilir.
            </p>
          </div>
        </div>
        <form action={siteConfig.brand.emailLink} method="post" encType="text/plain" className="rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            {["Ad Soyad", "Firma Adı", "E-posta", "Telefon"].map((field) => (
              <label key={field}>
                <span className="mb-2 block text-sm font-black">{field}</span>
                <input name={field} className="w-full rounded-[8px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder={field} />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <select name="Hizmet" className="rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-700">
              {siteConfig.services.map((service) => <option key={service.slug}>{service.title}</option>)}
              <option>Diğer</option>
            </select>
            <select name="Bütçe" className="rounded-[8px] border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-700">
              {["10.000 TL altı", "10.000 - 25.000 TL", "25.000 - 50.000 TL", "50.000 TL üzeri", "Henüz net değil"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <textarea name="Proje Açıklaması" className="mt-4 min-h-36 w-full rounded-[8px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder="Proje Açıklaması" />
          <label className="mt-4 flex gap-3 text-sm font-semibold leading-6 text-slate-600">
            <input type="checkbox" className="mt-1 h-4 w-4" />
            KVKK Aydınlatma Metni’ni okudum ve kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.
          </label>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button type="submit" className="corporate-button rounded-[8px] bg-slate-950 px-6 py-4 text-sm font-black text-white">E-posta Taslağı Aç</button>
            <a href={`mailto:${siteConfig.brand.email}?subject=Toplant%C4%B1%20Talebi`} className="corporate-button rounded-[8px] border border-slate-950 px-6 py-4 text-center text-sm font-black text-slate-950">Toplantı Maili Aç</a>
          </div>
        </form>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
