import { Header } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

const proposalMailUrl = `${siteConfig.brand.emailLink}&body=${encodeURIComponent(
  "Merhaba, NovaCore Teknoloji için proje / teklif görüşmesi yapmak istiyorum.",
)}`;

function SharpTitle({
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-5xl border-t border-white/16 pt-8">
      <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-white">
      <Header />
      <div className="home-split-background" aria-hidden="true" />

      <section className="relative z-10 overflow-hidden bg-[#071225]/72 backdrop-blur-[1px]">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-300/70" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/16" />

        <div className="pointer-events-none absolute inset-0 opacity-45">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(7,18,37,0.82))]" />
          <div className="absolute right-0 top-1/3 h-px w-1/2 bg-white/12" />
        </div>

        <div className="mx-auto grid min-h-[760px] max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.6fr_0.4fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="mt-8 max-w-6xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              İşletmenizi geleceğe taşıyan yazılım sistemleri.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Kurumsal web, özel yazılım, e-ticaret, mobil uygulama ve yönetim paneli projelerinde net kapsam, güçlü mimari ve sürdürülebilir teslim yaklaşımı.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={proposalMailUrl} className="corporate-button border border-slate-200 bg-slate-200 px-7 py-4 text-center text-sm font-black text-black transition hover:border-white hover:bg-white">
                Teklif Al
              </a>
              <a href="#hizmetler" className="corporate-button border border-white/26 px-7 py-4 text-center text-sm font-black text-white transition hover:border-slate-200 hover:text-slate-100">
                Hizmetleri İncele
              </a>
              <a href="#projeler" className="corporate-button px-7 py-4 text-center text-sm font-black text-slate-200 transition hover:text-white">
                Projeleri Gör
              </a>
            </div>
          </div>

          <aside className="reveal-card flex flex-col justify-end gap-5 pt-8 lg:pl-8">
            <div
              aria-label="Modern yazılım ekibi çalışma ortamı"
              className="image-zoom aspect-[4/5] overflow-hidden border border-white/16 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=80')",
              }}
            >
              <div className="h-full w-full bg-[#071225]/18" />
            </div>
            <div className="grid grid-cols-2 border border-white/14">
              {[
                ["20+", "tamamlanan proje"],
                ["10+", "sektörel deneyim"],
                ["6", "ana çözüm alanı"],
                ["360°", "analizden desteğe"],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-r border-white/14 p-5 last:border-r-0">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-b border-white/14 bg-[#0b1830]/72 py-4 backdrop-blur-[1px]">
        <div className="marquee-track flex w-max gap-8 text-sm font-black uppercase tracking-[0.16em] text-slate-300">
          {[...siteConfig.marquee, ...siteConfig.marquee].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap border-l border-white/18 pl-8">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/14 bg-[#0b1830]/72 backdrop-blur-[1px]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/14 px-5 md:grid-cols-4 md:divide-x md:divide-y-0">
          {siteConfig.stats.map(([value, label]) => (
            <article key={value} className="py-8 md:px-6">
              <p className="text-3xl font-black text-slate-200">{value}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-400">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <SharpTitle
          label="Kimlik"
          title="Ciddi görünen değil, ciddi çalışan dijital altyapılar kurarız."
          description="NovaCore Teknoloji, işletmelerin operasyonlarını dijitalleştiren, veriyi görünür kılan ve büyümeye dayanıklı yazılım sistemleri geliştiren teknoloji ortağıdır."
        />
        <div className="grid gap-0 border border-white/14 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            aria-label="Kurumsal yazılım planlama toplantısı"
            className="image-zoom min-h-[360px] overflow-hidden border-b border-white/14 bg-cover bg-center bg-no-repeat lg:border-b-0 lg:border-r"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80')",
            }}
          >
            <div className="h-full min-h-[360px] w-full bg-[#071225]/22" />
          </div>
          <div className="grid lg:grid-rows-3">
            {[
              "İhtiyaç analizi net yapılır.",
              "Kapsam, süre ve teslimatlar baştan konuşulur.",
              "Arayüz, mimari ve destek tek süreçte düşünülür.",
            ].map((item) => (
              <p key={item} className="border-b border-white/14 p-6 text-xl font-black leading-8 text-white last:border-b-0">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="white-section-pattern relative border-y border-white/14 bg-white text-black">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 border-t border-black/18 pt-8">
            <h2 className="max-w-5xl text-4xl font-black leading-tight text-black sm:text-6xl">
              İşletmenin gerçek ihtiyacına göre kurulan teknoloji blokları.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Kurumsal webden özel yazılıma, panelden mobil uygulamaya kadar her başlık aynı hedefe çalışır: süreçleri daha net, yönetilebilir ve ölçeklenebilir hale getirmek.
            </p>
          </div>
          <div className="divide-y divide-black/16 border-y border-black/16">
            {siteConfig.services.map((service) => (
              <article key={service.slug} className="grid gap-6 py-8 lg:grid-cols-[0.75fr_1fr_160px] lg:items-start">
                <h3 className="text-3xl font-black leading-tight text-black">{service.title}</h3>
                <div>
                  <p className="leading-8 text-slate-700">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.bullets.slice(0, 4).map((item) => (
                      <span key={item} className="border border-black/16 px-3 py-2 text-xs font-black text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={`/kurumsal-web-sitesi/hizmetler/${service.slug}`} className="corporate-button text-sm font-black text-slate-700 hover:text-black">
                  Detaylı İncele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/14 bg-[#071225]/92">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SharpTitle
            label="Kanıt"
            title="Kurumsal site sadece vitrin değil, karar ve güven alanıdır."
            description="Ziyaretçinin ilk bakışta yetkinlik görmesi için hizmet anlatımı; ekip, dashboard, süreç ve iletişim kanıtlarıyla desteklenir."
          />
          <div className="grid gap-px bg-white/14 lg:grid-cols-3">
            {[
              [
                "Yönetilebilir operasyon",
                "Tek panelden müşteri, sipariş, stok, görev ve rapor takibi.",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
              ],
              [
                "Kurumsal sunum gücü",
                "Markanın ciddiyetini artıran net başlıklar, güçlü görseller ve sade aksiyonlar.",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
              ],
              [
                "Yayın sonrası destek",
                "Teslimden sonra bakım, geliştirme ve yeni ihtiyaç planlaması.",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
              ],
            ].map(([title, description, image]) => (
              <article key={title} className="reveal-card bg-[#0b1830]">
                <div
                  aria-label={title}
                  className="image-zoom aspect-[16/10] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${image}')` }}
                >
                  <div className="h-full w-full bg-[#071225]/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cozumler" className="relative mx-auto max-w-7xl px-5 py-20">
        <SharpTitle
          label="Sektörler"
          title="Aynı kalıbı herkese satmayız. Süreci sektöre göre okuruz."
          description="E-ticaret, eğitim, sağlık, lojistik, üretim ve hizmet sektörleri için kullanıcı, operasyon ve veri akışı farklıdır. Çözüm de buna göre tasarlanır."
        />
          <div className="grid border border-white/14 bg-[#071225]/76 backdrop-blur md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.solutions.map(([title, description]) => (
            <article key={title} className="min-h-64 border-b border-white/14 p-6 md:border-r lg:[&:nth-child(3n)]:border-r-0">
              <h3 className="text-2xl font-black text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{description}</p>
              <a href="/kurumsal-web-sitesi/cozumler" className="corporate-button mt-7 inline-flex text-sm font-black text-slate-200">
                Çözümü İncele
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/14 bg-[#0b1830]/92">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SharpTitle
            label="Süreç"
            title="Planlı ilerleyen projeler, daha az belirsizlik üretir."
            description="Çalışma biçimimiz müşterinin ne zaman ne göreceğini bilmesini sağlar. Bu yüzden proje sadece kod yazımı değil, kararların doğru sıraya konmasıdır."
          />
          <div className="divide-y divide-white/14 border-y border-white/14">
            {siteConfig.process.map(([step, title, description]) => (
              <article key={step} className="grid gap-6 py-7 lg:grid-cols-[120px_0.6fr_1fr] lg:items-start">
                <p className="text-4xl font-black text-slate-200">{step}</p>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="leading-8 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <SharpTitle
          label="Teknoloji"
          title="Teknoloji tercihi moda değil, sürdürülebilirlik kararıdır."
          description="Projelerde ihtiyaç, ekip, güvenlik, bakım ve ölçeklenme hedeflerine göre araç seçeriz."
        />
        <div className="grid gap-px bg-white/14 lg:grid-cols-5">
          {siteConfig.technologies.map(([category, items]) => (
            <article key={category} className="bg-[#071225] p-6">
              <h3 className="text-xl font-black text-white">{category}</h3>
              <div className="mt-5 grid gap-3">
                {items.map((item) => (
                  <p key={item} className="border-t border-white/14 pt-3 text-sm font-bold text-slate-400">{item}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projeler" className="white-section-pattern relative border-y border-white/14 bg-white text-black">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 border-t border-black/18 pt-8">
            <h2 className="max-w-5xl text-4xl font-black leading-tight text-black sm:text-6xl">
              Somut sistem örnekleri, teknik kapasiteyi daha hızlı anlatır.
            </h2>
          </div>
          <div className="grid gap-px bg-slate-300 md:grid-cols-2">
            {siteConfig.projects.map((project) => (
              <article key={project.title} className="bg-white p-7">
                <div
                  aria-label={project.title}
                  className="image-zoom -mx-7 -mt-7 mb-7 aspect-[16/9] overflow-hidden border-b border-black/18 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className="h-full w-full bg-[#071225]/10" />
                </div>
                <h3 className="text-3xl font-black text-black">{project.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="bg-[#071225] px-3 py-2 text-xs font-black text-white">{item}</span>
                  ))}
                </div>
                <a href="/kurumsal-web-sitesi/projeler" className="corporate-button mt-7 inline-flex text-sm font-black text-slate-700">
                  Projeyi İncele
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <SharpTitle
          label="Neden"
          title="Kalıp değil, karar kalitesi sunarız."
          description="Kurumsal müşteri için iyi web sitesi sadece şık ekran değildir; satış, operasyon, güven ve bakım kararlarının aynı yerde çözülmesidir."
        />
        <div className="grid gap-px bg-white/14 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.reasons.map(([title, description]) => (
            <article key={title} className="bg-[#071225] p-6">
              <h3 className="text-2xl font-black text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/14 bg-[#0b1830]/92">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SharpTitle label="Söz" title="İş ortaklarımız sade, hızlı ve yönetilebilir sistemleri önemser." />
          <div className="grid gap-px bg-white/14 md:grid-cols-3">
            {siteConfig.testimonials.map(([name, role, quote]) => (
              <article key={name} className="bg-[#0b1830] p-6">
                <p className="text-5xl font-black text-slate-300">“</p>
                <p className="mt-2 leading-8 text-slate-300">{quote}</p>
                <p className="mt-6 font-black text-white">{name}</p>
                <p className="text-sm font-semibold text-slate-500">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20">
        <SharpTitle
          label="İçerik"
          title="Karar vermeyi kolaylaştıran teknoloji rehberleri."
          description="Kurumsal web, özel yazılım, e-ticaret ve yönetim paneli kararlarını anlaşılır hale getiren içerikler."
        />
        <div className="divide-y divide-white/14 border-y border-white/14">
          {siteConfig.blog.map(([title, description, date, category]) => (
            <article key={title} className="grid gap-5 py-7 lg:grid-cols-[1fr_160px]">
              <div>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
                <p className="mt-4 text-sm font-bold text-slate-500">{category} · {date}</p>
              </div>
              <a href="/kurumsal-web-sitesi/blog" className="corporate-button text-sm font-black text-slate-300">Devamını Oku</a>
            </article>
          ))}
        </div>
      </section>

      <section id="iletisim" className="relative overflow-hidden border-t border-white/14 bg-[#071225] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[46%] bg-cover bg-center opacity-42 lg:block"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#071225 0%,rgba(7,18,37,0.48) 42%,rgba(7,18,37,0.2) 100%),url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
              Dijital projenizi net kapsamla başlatalım.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-lg font-semibold leading-8 text-slate-300">
              İşletmenizin ihtiyacına uygun web, mobil veya özel yazılım çözümü için bizimle iletişime geçin. Projenizi birlikte değerlendirelim.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={proposalMailUrl} className="corporate-button border border-slate-200 bg-slate-200 px-7 py-4 text-center text-sm font-black text-black">
                Teklif Al
              </a>
              <a href={siteConfig.brand.emailLink} className="corporate-button border border-white/24 px-7 py-4 text-center text-sm font-black text-white">
                Mail Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
