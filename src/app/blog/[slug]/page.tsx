import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import BlogPostView from "@/components/blog/BlogPostView";
import { blogPosts, getBlogPost } from "@/data/blog";
import { getLocalizedBlogPost, getLocalizedBlogPosts } from "@/data/i18n/blog-en";
import { landingPages } from "@/data/landing-pages";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { getLocalizedProjects } from "@/data/i18n/projects-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { getBlogSeoCopy } from "@/lib/blog-presentation";
import { blogPostingJsonLd, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const sourcePost = getBlogPost(slug);
  if (!sourcePost) return;
  const post = getLocalizedBlogPost(sourcePost, locale);
  const copy = getBlogSeoCopy(post);

  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/blog/${post.slug}`,
    keywords: [...post.tags, post.category],
    type: "article",
    locale,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const sourcePost = getBlogPost(slug);
  if (!sourcePost) return notFound();
  const post = getLocalizedBlogPost(sourcePost, locale);
  const seoCopy = getBlogSeoCopy(post);
  const localizedPosts = getLocalizedBlogPosts(blogPosts, locale);
  const localizedServices = getLocalizedServices(servicesData, locale);
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const relatedServices = post.relatedServices
    .map((serviceSlug) => localizedServices.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const relatedProjects = post.relatedProjects
    .map((projectSlug) => localizedProjects.find((project) => project.slug === projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const relatedLandingPages = landingPages
    .filter((page) => page.relatedBlogSlugs?.includes(post.slug) || post.relatedServices.includes(page.serviceSlug))
    .map((page) => getLocalizedLandingPage(page, locale))
    .slice(0, 4);
  const relatedBlogPosts = localizedPosts
    .filter((candidate) =>
      candidate.slug !== post.slug
      && (candidate.category === post.category || candidate.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 4);
  const localizedTagLabels = locale === "tr" ? post.tags : post.tags.slice(1);
  const tagLinks = localizedTagLabels.map((label, index) => ({
    label,
    slug: normalizeBlogPath(sourcePost.tags[index] ?? label),
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
            { name: post.title, path: `/blog/${post.slug}` },
          ], locale),
          blogPostingJsonLd({
            title: post.title,
            description: seoCopy.description,
            path: `/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            locale,
          }),
          faqJsonLd(post.faqs),
        ]}
      />
      <BlogPostView
        post={post}
        tagLinks={tagLinks}
        relatedBlogPosts={relatedBlogPosts}
        relatedServices={relatedServices}
        relatedLandingPages={relatedLandingPages}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
