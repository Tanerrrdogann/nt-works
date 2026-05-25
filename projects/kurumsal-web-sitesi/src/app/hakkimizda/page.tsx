import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero
        eyebrow="Hakkımızda"
        title="NovaCore Teknoloji Hakkında"
        description="İşletmelerin dijital dönüşüm süreçlerini kolaylaştıran, sürdürülebilir ve güvenilir yazılım çözümleri geliştiriyoruz."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2">
        {[
          ["Misyon", "İşletmelerin dijital dönüşüm süreçlerini kolaylaştıran, sürdürülebilir ve güvenilir yazılım çözümleri geliştirmek."],
          ["Vizyon", "Modern teknolojilerle işletmelerin büyümesine katkı sağlayan, güvenilir bir teknoloji çözüm ortağı olmak."],
          ["Çalışma Anlayışımız", "İhtiyacı doğru analiz eder, kapsamı netleştirir, tasarım ve geliştirme sürecini şeffaf şekilde yürütürüz."],
          ["Ekip Yapısı", "Ürün, tasarım, yazılım, test ve yayınlama süreçlerini birlikte düşünen çevik bir teknoloji ekibiyle çalışırız."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">{title}</h2>
            <p className="mt-4 leading-8 text-slate-600">{text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-[8px] bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">Değerlerimiz</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Güvenilirlik", "Şeffaflık", "Sürekli gelişim", "Kaliteli yazılım", "Kullanıcı odaklılık", "Uzun vadeli iş ortaklığı"].map((item) => (
              <p key={item} className="rounded-[8px] border border-white/10 bg-white/5 px-4 py-4 font-bold text-slate-100">{item}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
