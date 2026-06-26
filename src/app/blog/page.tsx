import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { blogCategories, blogPosts } from "@/data/blog";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export const metadata: Metadata = pageMetadata({
  title: "Blog ve Bilgi Merkezi",
  description: "Web sitesi, admin panel, e-ticaret, katalog, randevu ve özel yazılım projeleri için rehber içerikler.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          itemListJsonLd({
            name: "NT Web Çözümleri bilgi merkezi",
            description: "Web sitesi, admin panel, katalog, randevu ve özel yazılım rehberleri.",
            items: blogPosts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
        <RevealItem className="mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">Bilgi Merkezi</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Proje yaptırmadan önce <span className="text-gray-500">kapsamı netleştiren rehberler</span>
          </h1>
          <p className="mobile-compact-text text-base md:text-xl text-gray-400 max-w-3xl leading-8">
            Web sitesi, admin panel, katalog, randevu, e-ticaret ve özel yazılım projelerinde doğru kapsamı seçmenize yardımcı olacak sade içerikler.
          </p>
        </RevealItem>

        <RevealItem className="mb-10 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <Link key={category} href={`/blog/category/${normalize(category)}`} className="border border-white/10 bg-[#071225]/65 px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-white/10">
              {category}
            </Link>
          ))}
        </RevealItem>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <RevealItem key={post.slug} className="premium-card mobile-compact-card group relative flex min-h-[18rem] flex-col justify-between overflow-hidden border border-white/10 bg-[rgba(9,26,49,0.92)] p-5 md:p-8">
              <span className="card-sheen" aria-hidden="true" />
              <div className="relative z-10">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>{post.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{post.readingMinutes} dk okuma</span>
                </div>
                <h2 className="text-xl md:text-2xl font-medium leading-8 text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-400">{post.description}</p>
              </div>
              <div className="relative z-10 mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                <Link href={`/blog/${post.slug}`} className="shimmer-button bg-white px-5 py-2.5 text-sm font-bold text-black">
                  Yazıyı Oku
                </Link>
                {post.relatedServices[0] && (
                  <Link href={`/services/${post.relatedServices[0]}`} className="border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">
                    İlgili Hizmet
                  </Link>
                )}
              </div>
            </RevealItem>
          ))}
        </div>
      </PageReveal>
    </>
  );
}
