import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { blogCategories, blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata | undefined> {
  const { category } = await params;
  const current = blogCategories.find((item) => normalize(item) === category);
  if (!current) return;
  return pageMetadata({
    title: `${current} Yazıları`,
    description: `${current} kategorisindeki NT Web Çözümleri rehberleri.`,
    path: `/blog/category/${category}`,
  });
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: normalize(category) }));
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const current = blogCategories.find((item) => normalize(item) === category);
  if (!current) return notFound();

  const posts = blogPosts.filter((post) => post.category === current);

  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <RevealItem className="mb-10">
        <Link href="/blog" className="mb-6 inline-block text-sm text-gray-500 hover:text-white">&larr; Bloga Dön</Link>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">{current} Yazıları</h1>
      </RevealItem>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <RevealItem key={post.slug} className="border border-white/10 bg-[#071225]/65 p-6">
            <h2 className="text-xl font-medium text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-400">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-block border border-white/20 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">
              Yazıyı Oku
            </Link>
          </RevealItem>
        ))}
      </div>
    </PageReveal>
  );
}
