import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import BlogCategoryView from "@/components/blog/BlogCategoryView";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { blogCategories, blogPosts } from "@/data/blog";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata | undefined> {
  const { category } = await params;
  const current = blogCategories.find((item) => normalizeBlogPath(item) === category);
  if (!current) return;
  return pageMetadata({
    title: `${current} Yazıları`,
    description: `${current} kategorisindeki NT Web Çözümleri rehberleri.`,
    path: `/blog/category/${category}`,
  });
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: normalizeBlogPath(category) }));
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const current = blogCategories.find((item) => normalizeBlogPath(item) === category);
  if (!current) return notFound();
  const posts = blogPosts.filter((post) => post.category === current);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: current, path: `/blog/category/${category}` },
          ]),
          itemListJsonLd({
            name: `${current} yazıları`,
            description: `${current} kategorisindeki rehberler.`,
            items: posts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogCategoryView categorySlug={category} />
    </>
  );
}
