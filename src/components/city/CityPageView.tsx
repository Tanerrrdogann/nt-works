import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin, Network, Target } from "lucide-react";
import type { CityPage } from "@/data/city-pages";
import { blogPosts } from "@/data/blog";
import { landingPages } from "@/data/landing-pages";
import { servicesData } from "@/data/services";

export default function CityPageView({ page }: { page: CityPage }) {
  const services = page.serviceSlugs
    .map((slug) => servicesData.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const landings = page.landingSlugs
    .map((slug) => landingPages.find((landing) => landing.slug === slug))
    .filter((landing): landing is NonNullable<typeof landing> => Boolean(landing));
  const blogs = page.blogSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));
  const searchIntents = page.searchIntents ?? [];
  const districtFocus = page.districtFocus ?? [];
  const startPlan = page.startPlan ?? [];

  return (
    <>
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
            <MapPin size={15} /> Türkiye • Web ve Yazılım
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400 md:text-xl">
            {page.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/contact?source=sehir-${page.slug}`} className="shimmer-button inline-flex items-center gap-2 bg-white px-6 py-3 font-bold text-black">
              {page.city} İçin Teklif Al <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10">
              Hizmetleri İncele
            </Link>
          </div>
        </div>

        <aside className="border border-white/10 bg-[#071225]/70 p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Şehir odağı</p>
          <p className="mt-4 text-sm leading-7 text-gray-300">{page.focus}</p>
          <div className="mt-6 grid gap-2 border-t border-white/10 pt-5">
            {page.sectorFocus.map((sector) => (
              <div key={sector} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500">
            <Target size={18} />
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Yerel problem</p>
          </div>
          <h2 className="mt-4 text-2xl font-medium md:text-3xl">{page.city} için hangi ihtiyaçları hedefliyoruz?</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {page.problems.map((problem) => (
              <div key={problem} className="border border-white/10 bg-white/[0.04] p-3 text-xs font-semibold leading-5 text-gray-300 md:p-4 md:text-sm md:leading-6">
                {problem}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-500">
            <Network size={18} />
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Çözüm mimarisi</p>
          </div>
          <h2 className="mt-4 text-2xl font-medium md:text-3xl">Nasıl bir sistem kurulur?</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {page.solutions.map((solution) => (
              <div key={solution.title} className="border border-white/10 bg-[#071225]/55 p-3 md:p-5">
                <h3 className="text-sm font-bold leading-5 text-white md:text-base md:leading-6">{solution.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-400 md:mt-3 md:text-sm md:leading-7">{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(searchIntents.length > 0 || districtFocus.length > 0) && (
        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          {searchIntents.length > 0 && (
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-medium md:text-3xl">{page.city} aramalarında hangi niyetleri yakalar?</h2>
              <div className="mt-6 grid gap-3">
                {searchIntents.map((intent) => (
                  <div key={intent} className="flex gap-3 border border-white/10 bg-[#071225]/55 p-4 text-sm leading-6 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span>{intent}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {districtFocus.length > 0 && (
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-medium md:text-3xl">Bölge ve lokasyon odağı</h2>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Hizmet uzaktan yürütülebilir; ancak {page.city} içinde arama yapan işletmelerin lokasyon niyetini karşılamak için sayfa şehir ve ilçe bağlamını net taşır.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {districtFocus.map((district) => (
                  <span key={district} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-gray-300">
                    {district}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <section className="mt-10 border-t border-white/10 pt-8">
        <div className="flex items-center gap-3 text-gray-500">
          <Building2 size={18} />
          <p className="text-xs font-bold uppercase tracking-[0.18em]">İlgili hizmetler</p>
        </div>
        <h2 className="mt-4 text-2xl font-medium md:text-3xl">{page.city} sayfasının beslendiği ana çözümler</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="border border-white/10 bg-[#071225]/55 p-3 transition-colors hover:bg-white/10 md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Hizmet</p>
              <h3 className="mt-3 text-sm font-bold leading-5 text-white md:text-base md:leading-6">{service.title}</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500 md:text-sm md:leading-6">{service.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

      {startPlan.length > 0 && (
        <section className="mt-10 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium md:text-3xl">{page.city} projesine nasıl başlanır?</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {startPlan.map((step, index) => (
              <div key={step.title} className="border border-white/10 bg-[#071225]/55 p-3 md:p-5">
                <span className="flex h-8 w-8 items-center justify-center bg-white text-sm font-bold text-black">{index + 1}</span>
                <h3 className="mt-3 text-sm font-bold leading-5 text-white md:mt-4 md:text-base md:leading-6">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-400 md:mt-3 md:text-sm md:leading-7">{step.text}</p>
              </div>
            ))}
          </div>
          {page.localNote && (
            <p className="mt-6 max-w-4xl border-l-2 border-white/25 pl-5 text-sm font-semibold leading-7 text-gray-300">
              {page.localNote}
            </p>
          )}
        </section>
      )}

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium md:text-3xl">{page.city} için ilgili çözüm sayfaları</h2>
          <div className="mt-6 grid gap-4">
            {landings.map((landing) => (
              <Link key={landing.slug} href={`/${landing.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 transition-colors hover:bg-white/10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Çözüm</p>
                <h3 className="mt-3 font-bold leading-6 text-white">{landing.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{landing.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h2 className="text-2xl font-medium md:text-3xl">Okunabilecek rehberler</h2>
          <div className="mt-6 grid gap-4">
            {blogs.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 transition-colors hover:bg-white/10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Blog</p>
                <h3 className="mt-3 font-bold leading-6 text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Sonraki adım</p>
            <h2 className="mt-3 text-2xl font-medium text-white md:text-3xl">{page.cta}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
              Mesajınızda şehir, sektör, mevcut takip şekli ve hedeflediğiniz sistemi yazmanız yeterli. İlk kapsamı web sitesi, panel, CRM, randevu, sipariş veya entegrasyon olarak birlikte ayırırız.
            </p>
          </div>
          <Link href={`/contact?source=sehir-${page.slug}`} className="shimmer-button inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-black">
            Teklif Al <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
