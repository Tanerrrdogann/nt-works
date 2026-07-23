import JsonLd from "@/components/seo/JsonLd";
import BlogIndexView, { type BlogIndexPost } from "@/components/blog/BlogIndexView";
import { blogCategories, blogPosts } from "@/data/blog";
import { featuredBlogSlugs } from "@/data/blog-content-system";
import { getLocalizedBlogCategories, getLocalizedBlogPosts } from "@/data/i18n/blog-en";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { localizedStaticPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedStaticPageMetadata({
    path: "/blog",
    fallback: {
      title: "Blog ve Bilgi Merkezi",
      description: "Web sitesi, admin panel, e-ticaret, katalog, randevu, entegrasyon, özel yazılım ve AI otomasyon projeleri için kapsam netleştiren rehberler.",
    },
  });
}

function toBlogIndexPost(post: (typeof blogPosts)[number]): BlogIndexPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    readingMinutes: post.readingMinutes,
    relatedServices: post.relatedServices,
  };
}

export default async function BlogPage() {
  const locale = await getServerLocale();
  const posts = getLocalizedBlogPosts(blogPosts, locale);
  const indexPosts = posts.map(toBlogIndexPost);
  const localizedCategories = getLocalizedBlogCategories(blogCategories, locale);
  const categories = blogCategories.map((originalCategory, index) => ({
    originalCategory,
    localizedCategory: localizedCategories[index],
    count: blogPosts.filter((post) => post.category === originalCategory).length,
  }));
  const featuredPosts = featuredBlogSlugs
    .map((slug) => indexPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogIndexPost => Boolean(post));

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
          ], locale),
          itemListJsonLd({
            name: locale === "de"
              ? "Wissenszentrum von NT Web Çözümleri"
              : locale === "en"
                ? "NT Web Çözümleri Knowledge Center"
                : locale === "fr"
                  ? "Centre de ressources NT Web Çözümleri"
                  : locale === "es"
                    ? "Centro de recursos de NT Web Çözümleri"
                    : locale === "ar"
                      ? "مركز المعرفة لدى NT Web Çözümleri"
                      : locale === "ru"
                        ? "Центр знаний NT Web Çözümleri"
                        : locale === "pt"
                          ? "Centro de conhecimento da NT Web Çözümleri"
                          : locale === "it"
                            ? "Centro risorse NT Web Çözümleri"
                            : locale === "nl"
                              ? "Kenniscentrum van NT Web Çözümleri"
                              : locale === "zh" ? "NT Web Çözümleri 知识中心" : "NT Web Çözümleri bilgi merkezi",
            description: locale === "de"
              ? "Leitfäden zu Websites, Admin-Panels, Katalogen, Buchungssystemen und individueller Software."
              : locale === "en"
                ? "Guides to websites, admin panels, catalogs, booking systems and custom software."
                : locale === "fr"
                  ? "Guides sur les sites, panneaux d’administration, catalogues, réservations et logiciels sur mesure."
                  : locale === "es"
                    ? "Guías sobre sitios, paneles de administración, catálogos, reservas y software a medida."
                    : locale === "ar"
                      ? "أدلة حول المواقع ولوحات الإدارة والكتالوجات والحجوزات والبرمجيات المخصصة."
                      : locale === "ru"
                        ? "Руководства по сайтам, панелям управления, каталогам, бронированию и программному обеспечению на заказ."
                        : locale === "pt"
                          ? "Guias sobre sites, painéis de administração, catálogos, reservas e software à medida."
                          : locale === "it"
                            ? "Guide su siti, pannelli di amministrazione, cataloghi, prenotazioni e software su misura."
                            : locale === "nl"
                              ? "Handleidingen over websites, beheerpanelen, catalogi, reserveringen en maatwerksoftware."
                              : locale === "zh"
                                ? "涵盖网站、管理面板、产品目录、预约系统和定制软件的指南。"
              : "Web sitesi, admin panel, katalog, randevu ve özel yazılım rehberleri.",
            locale,
            items: posts.map((post) => ({
              name: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogIndexView posts={indexPosts} featuredPosts={featuredPosts} categories={categories} />
    </>
  );
}
