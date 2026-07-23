import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import BlogCategoryView from "@/components/blog/BlogCategoryView";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { blogCategories, blogPosts } from "@/data/blog";
import { getLocalizedBlogCategory, getLocalizedBlogPosts, getLocalizedBlogTag } from "@/data/i18n/blog-en";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import { getBlogHubSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata | undefined> {
  const { category } = await params;
  const locale = await getServerLocale();
  const current = blogCategories.find((item) => normalizeBlogPath(item) === category);
  if (!current) return;
  const localizedCategory = getLocalizedBlogCategory(current, locale);
  const copy = getBlogHubSeoCopy({
    kind: "category",
    label: localizedCategory,
    locale,
    articleCount: blogPosts.filter((post) => post.category === current).length,
  });
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/blog/category/${category}`,
    locale,
  });
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: normalizeBlogPath(category) }));
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const locale = await getServerLocale();
  const current = blogCategories.find((item) => normalizeBlogPath(item) === category);
  if (!current) return notFound();
  const localizedCategory = getLocalizedBlogCategory(current, locale);
  const sourcePosts = blogPosts.filter((post) => post.category === current);
  const posts = getLocalizedBlogPosts(sourcePosts, locale);
  const tagLinks = Array.from(new Set(sourcePosts.flatMap((post) => post.tags)))
    .slice(0, 12)
    .map((tag) => ({
      label: getLocalizedBlogTag(tag, locale),
      slug: normalizeBlogPath(tag),
    }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            {
              name: locale === "de"
                ? "Startseite"
                : locale === "en"
                  ? "Home"
                  : locale === "fr"
                    ? "Accueil"
                    : locale === "es"
                      ? "Inicio"
                      : locale === "ar"
                        ? "الرئيسية"
                        : locale === "ru"
                          ? "Главная"
                          : locale === "pt"
                            ? "Início"
                            : locale === "it" || locale === "nl" ? "Home" : locale === "zh" ? "首页" : "Ana Sayfa",
              path: "/",
            },
            { name: "Blog", path: "/blog" },
            { name: localizedCategory, path: `/blog/category/${category}` },
          ], locale),
          itemListJsonLd({
            name: locale === "de"
              ? `${localizedCategory}: Artikel`
              : locale === "en"
                ? `${localizedCategory}: Articles`
                : locale === "fr"
                  ? `${localizedCategory} : articles`
                  : locale === "es"
                    ? `${localizedCategory}: artículos`
                    : locale === "ar"
                      ? `${localizedCategory}: مقالات`
                      : locale === "ru"
                        ? `${localizedCategory}: статьи`
                        : locale === "pt"
                          ? `${localizedCategory}: artigos`
                          : locale === "it"
                            ? `${localizedCategory}: articoli`
                            : locale === "nl"
                              ? `${localizedCategory}: artikelen`
                              : locale === "zh" ? `${localizedCategory}：文章` : `${current} yazıları`,
            description: locale === "de"
              ? `Leitfäden zum Thema ${localizedCategory}.`
              : locale === "en"
                ? `Guides about ${localizedCategory}.`
                : locale === "fr"
                  ? `Guides sur ${localizedCategory}.`
                  : locale === "es"
                    ? `Guías sobre ${localizedCategory}.`
                    : locale === "ar"
                      ? `أدلة حول ${localizedCategory}.`
                      : locale === "ru"
                        ? `Руководства по теме ${localizedCategory}.`
                        : locale === "pt"
                          ? `Guias sobre ${localizedCategory}.`
                          : locale === "it"
                            ? `Guide su ${localizedCategory}.`
                            : locale === "nl"
                              ? `Handleidingen over ${localizedCategory}.`
                              : locale === "zh" ? `${localizedCategory} 相关指南。` : `${current} kategorisindeki rehberler.`,
            locale,
            items: posts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogCategoryView
        categorySlug={category}
        current={localizedCategory}
        posts={posts}
        tagLinks={tagLinks}
      />
    </>
  );
}
