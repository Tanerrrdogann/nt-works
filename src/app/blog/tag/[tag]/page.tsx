import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import BlogTagView from "@/components/blog/BlogTagView";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { blogPosts } from "@/data/blog";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata | undefined> {
  const { tag } = await params;
  const current = tags.find((item) => normalizeBlogPath(item) === tag);
  if (!current) return;
  return pageMetadata({
    title: `${current} Rehberleri`,
    description: `${current} etiketiyle ilgili NT Web Çözümleri rehberleri.`,
    path: `/blog/tag/${tag}`,
  });
}

export function generateStaticParams() {
  return tags.map((tag) => ({ tag: normalizeBlogPath(tag) }));
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const current = tags.find((item) => normalizeBlogPath(item) === tag);
  if (!current) return notFound();
  const posts = blogPosts.filter((post) => post.tags.includes(current));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: current, path: `/blog/tag/${tag}` },
          ]),
          itemListJsonLd({
            name: `${current} rehberleri`,
            description: `${current} etiketiyle ilgili blog yazıları.`,
            items: posts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogTagView tagSlug={tag} />
    </>
  );
}
