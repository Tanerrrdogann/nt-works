import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal } from "@/components/animations/PageReveal";
import LandingPageView from "@/components/landing/LandingPageView";
import { blogPosts } from "@/data/blog";
import { getLocalizedBlogPost } from "@/data/i18n/blog-en";
import { defaultLandingFaqs, getLandingPage, landingPages } from "@/data/landing-pages";
import { getLocalizedLandingFaqs, getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { getLocalizedProjectBySlug } from "@/data/i18n/projects-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { servicesData } from "@/data/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { getLandingSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const sourcePage = getLandingPage(slug);
  if (!sourcePage) return;
  const page = getLocalizedLandingPage(sourcePage, locale);
  const seo = getLandingSeoCopy(page, locale);

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/${page.slug}`,
    keywords: [page.title, ...page.modules, ...page.priceFactors],
    locale,
  });
}

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const sourcePage = getLandingPage(slug);
  if (!sourcePage) return notFound();
  const page = getLocalizedLandingPage(sourcePage, locale);

  const faqs = locale !== "tr"
    ? getLocalizedLandingFaqs(sourcePage, locale)
    : page.faqs?.length ? page.faqs : defaultLandingFaqs(page.title);
  const localizedServices = getLocalizedServices(servicesData, locale);
  const service = localizedServices.find((item) => item.slug === page.serviceSlug)
    ?? localizedServices.find((item) => item.categorySlug === page.serviceSlug);
  const relatedContent = {
    service: service
      ? {
          title: service.title,
          description: service.shortDesc,
          path: `/services/${service.slug}`,
        }
      : undefined,
    blogs: (sourcePage.relatedBlogSlugs ?? [])
      .map((postSlug) => blogPosts.find((post) => post.slug === postSlug))
      .filter((post): post is NonNullable<typeof post> => Boolean(post))
      .map((post) => getLocalizedBlogPost(post, locale))
      .slice(0, 2)
      .map((post) => ({
        title: post.title,
        description: post.description,
        path: `/blog/${post.slug}`,
      })),
    projects: (sourcePage.relatedProjectSlugs ?? [])
      .map((projectSlug) => getLocalizedProjectBySlug(projectSlug, locale))
      .filter((project): project is NonNullable<typeof project> => Boolean(project))
      .slice(0, 2)
      .map((project) => ({
        title: project.title,
        description: project.shortDesc,
        path: `/projects/${project.slug}`,
        projectKind: project.projectKind,
      })),
  };

  return (
    <>
      <JsonLd data={[
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
                          : locale === "it" || locale === "nl"
                            ? "Home"
                            : locale === "zh" ? "首页" : "Ana Sayfa",
            path: "/",
          },
          { name: page.title, path: `/${page.slug}` },
        ], locale),
        serviceJsonLd({
          name: page.title,
          description: page.description,
          path: `/${page.slug}`,
          offers: page.modules,
          locale,
        }),
        faqJsonLd(faqs),
      ]} />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
        <LandingPageView page={page} faqs={faqs} relatedContent={relatedContent} />
      </PageReveal>
    </>
  );
}
