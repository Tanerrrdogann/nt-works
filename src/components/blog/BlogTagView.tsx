"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { blogPosts } from "@/data/blog";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { servicesData } from "@/data/services";
import { getLocalizedBlogPost, getLocalizedBlogPosts } from "@/data/i18n/blog-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { getLocaleFromPath } from "@/lib/i18n";

const originalTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogTagView({ tagSlug }: { tagSlug: string }) {
  const locale = getLocaleFromPath(usePathname() ?? "/");
  const isEnglish = locale === "en";
  const isGerman = locale === "de";
  const isFrench = locale === "fr";
  const isSpanish = locale === "es";
  const isArabic = locale === "ar";
  const isRussian = locale === "ru";
  const isPortuguese = locale === "pt";
  const isItalian = locale === "it";
  const isDutch = locale === "nl";
  const isChinese = locale === "zh";
  const originalTag = originalTags.find((item) => normalizeBlogPath(item) === tagSlug);
  if (!originalTag) return null;

  const originalPosts = blogPosts.filter((post) => post.tags.includes(originalTag));
  const posts = getLocalizedBlogPosts(originalPosts, locale);
  const localizedServices = getLocalizedServices(servicesData, locale);
  const originalTagIndex = originalPosts[0]?.tags.indexOf(originalTag) ?? -1;
  const localizedTag =
    originalTagIndex >= 0 && (isEnglish || isGerman || isFrench || isSpanish || isArabic || isRussian || isPortuguese || isItalian || isDutch || isChinese)
      ? getLocalizedBlogPost(originalPosts[0], locale).tags[originalTagIndex + 1]
      : undefined;
  const current = localizedTag ?? originalTag;
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const relatedServices = Array.from(new Set(originalPosts.flatMap((post) => post.relatedServices)))
    .map((serviceSlug) => localizedServices.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .slice(0, 4);

  const text = isEnglish ? {
    back: "← Back to Blog",
    kicker: "Blog Tag",
    suffix: "Guides",
    desc: `Articles under the ${current} tag explain related needs from different angles: scope, pricing, process, and system selection.`,
    relatedServices: "Related Services",
    relatedTitle: "Services connected to this tag",
    count: "Articles",
    read: "Read Article",
    reading: "min read",
    idea: "If you have a project idea under this topic",
    ideaDesc: "Describe your need briefly; the right page, panel, integration, or automation structure can be clarified together.",
    explain: "Describe the Project",
  } : isGerman ? {
    back: "← Zurück zum Blog",
    kicker: "Blog-Tag",
    suffix: "Leitfäden",
    desc: `Artikel unter dem Tag ${current} erklären verwandte Anforderungen aus verschiedenen Blickwinkeln: Umfang, Preis, Prozess und Systemauswahl.`,
    relatedServices: "Verwandte Leistungen",
    relatedTitle: "Leistungen zu diesem Tag",
    count: "Artikel",
    read: "Artikel lesen",
    reading: "Min. Lesezeit",
    idea: "Wenn Sie zu diesem Thema eine Projektidee haben",
    ideaDesc: "Beschreiben Sie Ihren Bedarf kurz; die passende Seiten-, Panel-, Integrations- oder Automatisierungsstruktur kann gemeinsam geklärt werden.",
    explain: "Projekt beschreiben",
  } : isFrench ? {
    back: "← Retour au blog",
    kicker: "Tag blog",
    suffix: "Guides",
    desc: `Les articles sous le tag ${current} expliquent les besoins liés sous différents angles : périmètre, prix, processus et choix du système.`,
    relatedServices: "Services liés",
    relatedTitle: "Services connectés à ce tag",
    count: "Articles",
    read: "Lire l'article",
    reading: "min de lecture",
    idea: "Si vous avez une idée de projet sur ce sujet",
    ideaDesc: "Décrivez brièvement votre besoin ; la bonne structure de page, panneau, intégration ou automatisation peut être clarifiée ensemble.",
    explain: "Décrire le projet",
  } : isSpanish ? {
    back: "← Volver al blog",
    kicker: "Etiqueta del blog",
    suffix: "Guías",
    desc: `Los artículos bajo la etiqueta ${current} explican necesidades relacionadas desde distintos ángulos: alcance, precio, proceso y elección del sistema.`,
    relatedServices: "Servicios relacionados",
    relatedTitle: "Servicios conectados con esta etiqueta",
    count: "Artículos",
    read: "Leer artículo",
    reading: "min de lectura",
    idea: "Si tienes una idea de proyecto sobre este tema",
    ideaDesc: "Describe brevemente tu necesidad; podemos aclarar juntos la estructura correcta de página, panel, integración o automatización.",
    explain: "Describir el proyecto",
  } : isArabic ? {
    back: "← العودة إلى المدونة",
    kicker: "وسم في المدونة",
    suffix: "أدلة",
    desc: `المقالات تحت وسم ${current} تشرح الاحتياجات المرتبطة من زوايا مختلفة: النطاق والسعر والعملية واختيار النظام.`,
    relatedServices: "خدمات مرتبطة",
    relatedTitle: "خدمات متصلة بهذا الوسم",
    count: "مقالات",
    read: "اقرأ المقال",
    reading: "دقيقة قراءة",
    idea: "إذا كانت لديك فكرة مشروع تحت هذا الموضوع",
    ideaDesc: "اشرح حاجتك باختصار؛ يمكن توضيح بنية الصفحة أو اللوحة أو التكامل أو الأتمتة المناسبة معاً.",
    explain: "اشرح المشروع",
  } : isRussian ? {
    back: "← Назад к блогу",
    kicker: "Тег блога",
    suffix: "гиды",
    desc: `Статьи с тегом ${current} объясняют связанные потребности с разных сторон: объем, цена, процесс и выбор системы.`,
    relatedServices: "Связанные услуги",
    relatedTitle: "Услуги, связанные с этим тегом",
    count: "статей",
    read: "Читать статью",
    reading: "мин чтения",
    idea: "Если у вас есть идея проекта по этой теме",
    ideaDesc: "Коротко опишите потребность; подходящую структуру страницы, панели, интеграции или автоматизации можно уточнить вместе.",
    explain: "Описать проект",
  } : isPortuguese ? {
    back: "← Voltar ao blog",
    kicker: "Tag do blog",
    suffix: "Guias",
    desc: `Os artigos com a tag ${current} explicam necessidades relacionadas por diferentes ângulos: escopo, preço, processo e escolha do sistema.`,
    relatedServices: "Serviços relacionados",
    relatedTitle: "Serviços conectados a esta tag",
    count: "Artigos",
    read: "Ler artigo",
    reading: "min de leitura",
    idea: "Se você tem uma ideia de projeto neste tema",
    ideaDesc: "Descreva sua necessidade brevemente; a estrutura certa de página, painel, integração ou automação pode ser esclarecida em conjunto.",
    explain: "Descrever o projeto",
  } : isItalian ? {
    back: "← Torna al blog",
    kicker: "Tag blog",
    suffix: "Guide",
    desc: `Gli articoli con il tag ${current} spiegano esigenze correlate da angoli diversi: ambito, prezzo, processo e scelta del sistema.`,
    relatedServices: "Servizi correlati",
    relatedTitle: "Servizi collegati a questo tag",
    count: "Articoli",
    read: "Leggi articolo",
    reading: "min di lettura",
    idea: "Se hai un'idea di progetto su questo tema",
    ideaDesc: "Descrivi brevemente il bisogno; la struttura giusta di pagina, pannello, integrazione o automazione può essere chiarita insieme.",
    explain: "Descrivi il progetto",
  } : isDutch ? {
    back: "← Terug naar blog",
    kicker: "Blogtag",
    suffix: "Gidsen",
    desc: `Artikelen met de tag ${current} leggen verwante behoeften uit vanuit verschillende hoeken: scope, prijs, proces en systeemkeuze.`,
    relatedServices: "Gerelateerde services",
    relatedTitle: "Services die bij deze tag horen",
    count: "Artikelen",
    read: "Lees artikel",
    reading: "min lezen",
    idea: "Als u een projectidee rond dit onderwerp heeft",
    ideaDesc: "Beschrijf uw behoefte kort; de juiste structuur voor pagina, paneel, integratie of automatisering kan samen worden verduidelijkt.",
    explain: "Beschrijf het project",
  } : isChinese ? {
    back: "← 返回博客",
    kicker: "博客标签",
    suffix: "指南",
    desc: `${current}标签下的文章会从范围、价格、流程和系统选择等角度解释相关需求。`,
    relatedServices: "相关服务",
    relatedTitle: "与此标签相关的服务",
    count: "文章",
    read: "阅读文章",
    reading: "分钟阅读",
    idea: "如果您有此主题下的项目想法",
    ideaDesc: "简要说明需求；我们可以一起明确更合适的页面、面板、集成或自动化结构。",
    explain: "描述项目",
  } : {
    back: "← Bloga Dön",
    kicker: "Blog Etiketi",
    suffix: "Rehberleri",
    desc: `${current} etiketi altındaki yazılar, benzer ihtiyaçları farklı açılardan ele alır. Kapsam, fiyat, süreç ve sistem seçimiyle ilgili bağlantılı rehberleri bu sayfadan birlikte okuyabilirsiniz.`,
    relatedServices: "İlgili Hizmetler",
    relatedTitle: "Bu etiketin bağlandığı hizmetler",
    count: "Yazı",
    read: "Yazıyı Oku",
    reading: "dk okuma",
    idea: "Bu başlıkta proje fikriniz varsa",
    ideaDesc: "İhtiyacınızı birkaç cümleyle anlatın; hangi sayfa, panel, entegrasyon veya otomasyon yapısının daha doğru olacağı birlikte netleştirilebilir.",
    explain: "Projeyi Anlat",
  };

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <div className="mb-12">
        <LocalizedLink href="/blog" className="mb-6 inline-block text-sm text-gray-500 hover:text-white">{text.back}</LocalizedLink>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">{current} {text.suffix}</h1>
        <p className="mt-6 max-w-4xl text-base md:text-xl leading-8 text-gray-400">{text.desc}</p>
        {categories.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{categories.map((category) => <span key={category} className="border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400">{category}</span>)}</div>}
      </div>

      {relatedServices.length > 0 && (
        <section className="mb-12 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.relatedServices}</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.relatedTitle}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {relatedServices.map((service) => <LocalizedLink key={service.slug} href={`/services/${service.slug}`} className="border border-white/10 bg-[#071225]/65 p-5 hover:bg-white/10"><span className="text-base font-semibold text-white">{service.title}</span><span className="mt-2 block text-sm leading-6 text-gray-400">{service.shortDesc}</span></LocalizedLink>)}
          </div>
        </section>
      )}

      <section className="border-t border-white/10 pt-8">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{posts.length} {text.count}</p><h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{current} {isEnglish ? "articles" : isGerman ? "Artikel" : isFrench ? "articles" : isSpanish ? "artículos" : isArabic ? "مقالات" : isRussian ? "статьи" : isPortuguese ? "artigos" : isItalian ? "articoli" : isDutch ? "artikelen" : isChinese ? "文章" : "yazıları"}</h2></div>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => <article key={post.slug} className="flex min-h-[17rem] flex-col justify-between border border-white/10 bg-[#071225]/65 p-6"><div><div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500"><span>{post.category}</span><span aria-hidden="true">/</span><span>{post.readingMinutes} {text.reading}</span></div><h3 className="text-xl font-medium leading-8 text-white">{post.title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{post.description}</p></div><LocalizedLink href={`/blog/${post.slug}`} className="mt-6 w-fit border border-white/20 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">{text.read}</LocalizedLink></article>)}
        </div>
      </section>

      <section className="mt-12 border border-white/10 bg-[#071225]/78 p-6 md:p-8">
        <h2 className="text-2xl font-medium text-white">{text.idea}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">{text.ideaDesc}</p>
        <LocalizedLink href={`/contact?source=blog-tag&topic=${tagSlug}`} className="mt-6 inline-block bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-200">{text.explain}</LocalizedLink>
      </section>
    </main>
  );
}
