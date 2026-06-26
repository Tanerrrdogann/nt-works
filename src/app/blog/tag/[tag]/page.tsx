import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR").replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c");
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata | undefined> {
  const { tag } = await params;
  const current = tags.find((item) => normalize(item) === tag);
  if (!current) return;
  return pageMetadata({
    title: `${current} Rehberleri`,
    description: `${current} etiketiyle ilgili NT Web Çözümleri blog yazıları.`,
    path: `/blog/tag/${tag}`,
  });
}

export function generateStaticParams() {
  return tags.map((tag) => ({ tag: normalize(tag) }));
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const current = tags.find((item) => normalize(item) === tag);
  if (!current) return notFound();

  const posts = blogPosts.filter((post) => post.tags.includes(current));

  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <RevealItem className="mb-10">
        <Link href="/blog" className="mb-6 inline-block text-sm text-gray-500 hover:text-white">&larr; Bloga Dön</Link>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">{current} Rehberleri</h1>
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
