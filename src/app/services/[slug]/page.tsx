import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import ServiceDetailPageView from "@/components/services/ServiceDetailPageView";
import { blogPosts } from "@/data/blog";
import { getLocalizedBlogPost } from "@/data/i18n/blog-en";
import { getLocalizedLandingPage } from "@/data/i18n/landing-pages-en";
import { getLocalizedProjectBySlug } from "@/data/i18n/projects-en";
import { servicesData } from "@/data/services";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { landingPages } from "@/data/landing-pages";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { getServiceSeoCopy } from "@/lib/seo-strategy";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const service = getLocalizedServices(servicesData, locale).find((s) => s.slug === slug);
  if (!service) return;
  const seo = getServiceSeoCopy(service, locale);

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      service.category,
      ...service.features,
      ...service.examples,
      ...service.priceFactors,
    ],
    locale,
  });
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const service = getLocalizedServices(servicesData, locale).find((s) => s.slug === slug);
  if (!service) return notFound();
  const relatedContent = {
    solutions: landingPages
      .filter((page) => page.serviceSlug === service.slug || page.serviceSlug === service.categorySlug)
      .sort((a, b) => Number(b.serviceSlug === service.slug) - Number(a.serviceSlug === service.slug))
      .map((page) => {
        const localizedPage = getLocalizedLandingPage(page, locale);
        return {
          title: localizedPage.title,
          description: localizedPage.description,
          path: `/${localizedPage.slug}`,
        };
      }),
    projects: service.relatedProjects
      .map((projectSlug) => getLocalizedProjectBySlug(projectSlug, locale))
      .filter((project): project is NonNullable<typeof project> => Boolean(project))
      .slice(0, 3)
      .map((project) => ({
        title: project.title,
        description: project.shortDesc,
        path: `/projects/${project.slug}`,
      })),
    guides: service.relatedBlogPosts
      .map((postSlug) => blogPosts.find((post) => post.slug === postSlug))
      .filter((post): post is NonNullable<typeof post> => Boolean(post))
      .map((post) => getLocalizedBlogPost(post, locale))
      .slice(0, 3)
      .map((post) => ({
        title: post.title,
        description: post.description,
        path: `/blog/${post.slug}`,
      })),
  };

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
            {
              name: locale === "de"
                ? "Leistungen"
                : locale === "en" || locale === "fr" || locale === "es"
                  ? "Services"
                  : locale === "ar"
                    ? "الخدمات"
                    : locale === "ru"
                      ? "Услуги"
                      : locale === "pt"
                        ? "Serviços"
                        : locale === "it"
                          ? "Servizi"
                          : locale === "nl" ? "Diensten" : locale === "zh" ? "服务" : "Hizmetler",
              path: "/services",
            },
            { name: service.title, path: `/services/${service.slug}` },
          ], locale),
          serviceJsonLd({
            name: service.title,
            description: service.longDesc,
            path: `/services/${service.slug}`,
            offers: service.modules,
            locale,
          }),
          faqJsonLd(service.faqs),
        ]}
      />
      <ServiceDetailPageView slug={slug} relatedContent={relatedContent} />
    </>
  );
}
