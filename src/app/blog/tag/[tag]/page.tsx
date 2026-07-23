import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import BlogTagView from "@/components/blog/BlogTagView";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { blogPosts } from "@/data/blog";
import { getLocalizedBlogPosts, getLocalizedBlogTag } from "@/data/i18n/blog-en";
import { servicesData } from "@/data/services";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import { getBlogHubSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata | undefined> {
  const { tag } = await params;
  const locale = await getServerLocale();
  const current = tags.find((item) => normalizeBlogPath(item) === tag);
  if (!current) return;
  const localizedTag = getLocalizedBlogTag(current, locale);
  const copy = getBlogHubSeoCopy({
    kind: "tag",
    label: localizedTag,
    locale,
    articleCount: blogPosts.filter((post) => post.tags.includes(current)).length,
  });
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/blog/tag/${tag}`,
    locale,
  });
}

export function generateStaticParams() {
  return tags.map((tag) => ({ tag: normalizeBlogPath(tag) }));
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const locale = await getServerLocale();
  const current = tags.find((item) => normalizeBlogPath(item) === tag);
  if (!current) return notFound();
  const localizedTag = getLocalizedBlogTag(current, locale);
  const sourcePosts = blogPosts.filter((post) => post.tags.includes(current));
  const posts = getLocalizedBlogPosts(sourcePosts, locale);
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const localizedServices = getLocalizedServices(servicesData, locale);
  const relatedServices = Array.from(new Set(sourcePosts.flatMap((post) => post.relatedServices)))
    .map((serviceSlug) => localizedServices.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .slice(0, 4);

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
            { name: localizedTag, path: `/blog/tag/${tag}` },
          ], locale),
          itemListJsonLd({
            name: locale === "de"
              ? `${localizedTag}: Leitfäden`
              : locale === "en"
                ? `${localizedTag}: Guides`
                : locale === "fr"
                  ? `${localizedTag} : guides`
                  : locale === "es"
                    ? `${localizedTag}: guías`
                    : locale === "ar"
                      ? `${localizedTag}: أدلة`
                      : locale === "ru"
                        ? `${localizedTag}: руководства`
                        : locale === "pt"
                          ? `${localizedTag}: guias`
                          : locale === "it"
                            ? `${localizedTag}: guide`
                            : locale === "nl"
                              ? `${localizedTag}: handleidingen`
                              : locale === "zh" ? `${localizedTag}：指南` : `${current} rehberleri`,
            description: locale === "de"
              ? `Blogartikel zum Thema ${localizedTag}.`
              : locale === "en"
                ? `Blog articles about ${localizedTag}.`
                : locale === "fr"
                  ? `Articles de blog sur ${localizedTag}.`
                  : locale === "es"
                    ? `Artículos del blog sobre ${localizedTag}.`
                    : locale === "ar"
                      ? `مقالات المدونة حول ${localizedTag}.`
                      : locale === "ru"
                        ? `Статьи блога по теме ${localizedTag}.`
                        : locale === "pt"
                          ? `Artigos do blog sobre ${localizedTag}.`
                          : locale === "it"
                            ? `Articoli del blog su ${localizedTag}.`
                            : locale === "nl"
                              ? `Blogartikelen over ${localizedTag}.`
                              : locale === "zh" ? `${localizedTag} 相关博客文章。` : `${current} etiketiyle ilgili blog yazıları.`,
            locale,
            items: posts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogTagView
        tagSlug={tag}
        current={localizedTag}
        posts={posts}
        categories={categories}
        relatedServices={relatedServices}
      />
    </>
  );
}
