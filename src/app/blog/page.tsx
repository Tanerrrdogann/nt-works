import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BlogIndexView from "@/components/blog/BlogIndexView";
import { blogPosts } from "@/data/blog";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog ve Bilgi Merkezi",
  description: "Web sitesi, admin panel, e-ticaret, katalog, randevu, entegrasyon, özel yazılım ve AI otomasyon projeleri için kapsam netleştiren rehberler.",
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
      <BlogIndexView />
    </>
  );
}
