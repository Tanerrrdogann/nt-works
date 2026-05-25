import { Footer, Header, MobileBar, PageHero } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      <Header />
      <PageHero eyebrow="Kariyer" title="NovaCore’da Kariyer" description="Teknolojiye ilgi duyan, üretmeyi seven ve kendini geliştirmek isteyen ekip arkadaşlarıyla tanışmaktan memnuniyet duyarız." />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Açık Pozisyonlar</h2>
          <p className="mt-4 leading-8 text-slate-600">Şu anda aktif açık pozisyonumuz bulunmamaktadır. Genel başvuru için formu doldurabilirsiniz.</p>
          <div className="mt-6 grid gap-3">
            {["Staj başvurusu", "Genel başvuru", "Ürün ve yazılım ekipleri", "Çalışma kültürü"].map((item) => (
              <p key={item} className="rounded-[8px] bg-slate-100 px-4 py-3 font-bold text-slate-900">{item}</p>
            ))}
          </div>
        </article>
        <form action={siteConfig.brand.emailLink} method="post" encType="text/plain" className="rounded-[8px] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">Genel Başvuru Formu</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {["Ad Soyad", "E-posta", "Telefon", "Pozisyon / İlgi Alanı"].map((field) => (
              <input key={field} name={field} className="rounded-[8px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder={field} />
            ))}
          </div>
          <textarea name="Not" className="mt-4 min-h-32 w-full rounded-[8px] border border-slate-300 px-4 py-3 outline-none focus:border-slate-700" placeholder="Kısaca kendinizden bahsedin" />
          <button type="submit" className="corporate-button mt-5 rounded-[8px] bg-slate-950 px-6 py-4 text-sm font-black text-white">Başvuru Taslağı Aç</button>
        </form>
      </section>
      <Footer />
      <MobileBar />
    </main>
  );
}
