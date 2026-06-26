import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import { blogPosts, getBlogPost } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { blogPostingJsonLd, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return;

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [...post.tags, post.category],
    type: "article",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const relatedServices = post.relatedServices
    .map((serviceSlug) => servicesData.find((service) => service.slug === serviceSlug))
    .filter(Boolean);

  const relatedProjects = post.relatedProjects
    .map((projectSlug) => projectsData.find((project) => project.slug === projectSlug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          blogPostingJsonLd({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
          }),
          faqJsonLd(post.faqs),
        ]}
      />
      <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
        <Link href="/blog" className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-white">
          &larr; Bloga Dön
        </Link>

        <RevealItem className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">
              {post.category}
            </span>
            <span className="border border-white/10 bg-[#071225]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">
              {post.readingMinutes} dk okuma
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">{post.title}</h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{post.description}</p>
          <p className="mt-5 text-sm text-gray-500">Son güncelleme: {post.updatedAt}</p>
        </RevealItem>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0">
            {post.sections.map((section) => (
              <RevealItem key={section.heading} className="mb-8 border-t border-white/10 pt-8">
                <h2 className="text-2xl md:text-3xl font-medium text-white">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-gray-400 leading-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </RevealItem>
            ))}

            {post.faqs.length > 0 && (
              <RevealItem className="mb-8 border-t border-white/10 pt-8">
                <h2 className="text-2xl md:text-3xl font-medium text-white">Sık sorulan sorular</h2>
                <div className="mt-6 grid gap-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="border border-white/10 bg-[#071225]/55 p-5">
                      <h3 className="font-bold text-white">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </RevealItem>
            )}
          </article>

          <aside className="lg:sticky lg:top-28 h-fit">
            <RevealItem className="premium-panel border border-white/10 bg-[#08162c]/88 p-6">
              <h2 className="text-xl font-medium text-white">Bu konuda destek alın</h2>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                İhtiyacınız net değilse proje türünü, mevcut durumunuzu ve aklınızdaki modülleri yazmanız yeterli.
              </p>
              <Link href={`/contact?source=blog&topic=${post.slug}`} className="shimmer-button mt-5 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-black">
                Teklif Al <ArrowRight size={16} />
              </Link>
            </RevealItem>

            {relatedServices.length > 0 && (
              <RevealItem className="mt-5 border border-white/10 bg-[#071225]/65 p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">İlgili hizmetler</h2>
                <div className="mt-4 grid gap-3">
                  {relatedServices.map((service) => service && (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="block border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-gray-200 hover:bg-white/10">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </RevealItem>
            )}

            {relatedProjects.length > 0 && (
              <RevealItem className="mt-5 border border-white/10 bg-[#071225]/65 p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">İlgili canlı örnekler</h2>
                <div className="mt-4 grid gap-3">
                  {relatedProjects.map((project) => project && (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className="block border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-gray-200 hover:bg-white/10">
                      {project.title}
                    </Link>
                  ))}
                </div>
              </RevealItem>
            )}
          </aside>
        </div>
      </PageReveal>
    </>
  );
}
