"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { blogCategories, blogPosts } from "@/data/blog";
import { normalizeBlogPath } from "@/data/blog-content-system";
import { getLocalizedBlogCategory, getLocalizedBlogPosts } from "@/data/i18n/blog-en";
import { getLocaleFromPath } from "@/lib/i18n";

export default function BlogCategoryView({ categorySlug }: { categorySlug: string }) {
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
  const originalCategory = blogCategories.find((item) => normalizeBlogPath(item) === categorySlug);
  if (!originalCategory) return null;

  const originalPosts = blogPosts.filter((post) => post.category === originalCategory);
  const posts = getLocalizedBlogPosts(originalPosts, locale);
  const current = getLocalizedBlogCategory(originalCategory, locale);
  const featuredPosts = posts.slice(0, 2);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).slice(0, 12);

  const text = isEnglish ? {
    back: "← Back to Blog",
    kicker: "Blog Category",
    suffix: "Guides",
    desc: `${current} guides prepared for scope, pricing, process, and system selection decisions.`,
    featured: "Featured",
    featuredTitle: "First articles to read in this category",
    reading: "min read",
    read: "Read Guide",
    relatedTags: "Related Tags",
    all: "All Articles",
    similar: "Planning a similar project?",
    similarDesc: "Even if the need is not fully clear, you can describe the current situation, goal, and modules you have in mind.",
    explain: "Describe the Project",
  } : isGerman ? {
    back: "← Zurück zum Blog",
    kicker: "Blog-Kategorie",
    suffix: "Leitfäden",
    desc: `${current}-Leitfäden für Entscheidungen zu Umfang, Preis, Prozess und Systemauswahl.`,
    featured: "Empfohlen",
    featuredTitle: "Erste Artikel in dieser Kategorie",
    reading: "Min. Lesezeit",
    read: "Leitfaden lesen",
    relatedTags: "Verwandte Tags",
    all: "Alle Artikel",
    similar: "Planen Sie ein ähnliches Projekt?",
    similarDesc: "Auch wenn der Bedarf noch nicht vollständig klar ist, können Sie aktuelle Situation, Ziel und gewünschte Module kurz beschreiben.",
    explain: "Projekt beschreiben",
  } : isFrench ? {
    back: "← Retour au blog",
    kicker: "Catégorie blog",
    suffix: "Guides",
    desc: `Guides ${current} préparés pour les décisions de périmètre, prix, processus et choix du système.`,
    featured: "À lire",
    featuredTitle: "Premiers articles à lire dans cette catégorie",
    reading: "min de lecture",
    read: "Lire le guide",
    relatedTags: "Tags liés",
    all: "Tous les articles",
    similar: "Vous planifiez un projet similaire ?",
    similarDesc: "Même si le besoin n'est pas encore totalement clair, vous pouvez décrire la situation actuelle, l'objectif et les modules envisagés.",
    explain: "Décrire le projet",
  } : isSpanish ? {
    back: "← Volver al blog",
    kicker: "Categoría del blog",
    suffix: "Guías",
    desc: `Guías de ${current} preparadas para decisiones de alcance, precio, proceso y elección del sistema.`,
    featured: "Destacados",
    featuredTitle: "Primeros artículos para leer en esta categoría",
    reading: "min de lectura",
    read: "Leer guía",
    relatedTags: "Etiquetas relacionadas",
    all: "Todos los artículos",
    similar: "¿Estás planificando un proyecto similar?",
    similarDesc: "Aunque la necesidad todavía no esté totalmente clara, puedes describir la situación actual, el objetivo y los módulos que tienes en mente.",
    explain: "Describir el proyecto",
  } : isArabic ? {
    back: "← العودة إلى المدونة",
    kicker: "فئة المدونة",
    suffix: "أدلة",
    desc: `أدلة ${current} معدة لقرارات النطاق والسعر والعملية واختيار النظام.`,
    featured: "مختارة",
    featuredTitle: "أول مقالات يجب قراءتها في هذه الفئة",
    reading: "دقيقة قراءة",
    read: "اقرأ الدليل",
    relatedTags: "وسوم مرتبطة",
    all: "كل المقالات",
    similar: "هل تخطط لمشروع مشابه؟",
    similarDesc: "حتى لو لم تكن الحاجة واضحة بالكامل، يمكنك شرح الوضع الحالي والهدف والوحدات التي تفكر بها باختصار.",
    explain: "اشرح المشروع",
  } : isRussian ? {
    back: "← Назад к блогу",
    kicker: "Категория блога",
    suffix: "гиды",
    desc: `Гиды по теме ${current}, подготовленные для решений по объему, цене, процессу и выбору системы.`,
    featured: "Избранное",
    featuredTitle: "Первые статьи для чтения в этой категории",
    reading: "мин чтения",
    read: "Читать гид",
    relatedTags: "Связанные теги",
    all: "Все статьи",
    similar: "Планируете похожий проект?",
    similarDesc: "Даже если потребность еще не полностью ясна, можно коротко описать текущую ситуацию, цель и модули, которые вы рассматриваете.",
    explain: "Описать проект",
  } : isPortuguese ? {
    back: "← Voltar ao blog",
    kicker: "Categoria do blog",
    suffix: "Guias",
    desc: `Guias de ${current} preparados para decisões de escopo, preço, processo e escolha do sistema.`,
    featured: "Em destaque",
    featuredTitle: "Primeiros artigos para ler nesta categoria",
    reading: "min de leitura",
    read: "Ler guia",
    relatedTags: "Tags relacionadas",
    all: "Todos os artigos",
    similar: "Planejando um projeto parecido?",
    similarDesc: "Mesmo que a necessidade ainda não esteja totalmente clara, você pode descrever a situação atual, o objetivo e os módulos em mente.",
    explain: "Descrever o projeto",
  } : isItalian ? {
    back: "← Torna al blog",
    kicker: "Categoria blog",
    suffix: "Guide",
    desc: `Guide di ${current} preparate per decisioni su ambito, prezzo, processo e scelta del sistema.`,
    featured: "In evidenza",
    featuredTitle: "Primi articoli da leggere in questa categoria",
    reading: "min di lettura",
    read: "Leggi la guida",
    relatedTags: "Tag correlati",
    all: "Tutti gli articoli",
    similar: "Stai pianificando un progetto simile?",
    similarDesc: "Anche se il bisogno non è ancora completamente chiaro, puoi descrivere situazione attuale, obiettivo e moduli che hai in mente.",
    explain: "Descrivi il progetto",
  } : isDutch ? {
    back: "← Terug naar blog",
    kicker: "Blogcategorie",
    suffix: "Gidsen",
    desc: `${current}-gidsen voor beslissingen over scope, prijs, proces en systeemkeuze.`,
    featured: "Uitgelicht",
    featuredTitle: "Eerste artikelen om in deze categorie te lezen",
    reading: "min lezen",
    read: "Lees gids",
    relatedTags: "Gerelateerde tags",
    all: "Alle artikelen",
    similar: "Plant u een vergelijkbaar project?",
    similarDesc: "Ook als de behoefte nog niet volledig duidelijk is, kunt u de huidige situatie, het doel en de gewenste modules kort beschrijven.",
    explain: "Beschrijf het project",
  } : isChinese ? {
    back: "← 返回博客",
    kicker: "博客分类",
    suffix: "指南",
    desc: `${current}指南，用于明确范围、价格、流程和系统选择。`,
    featured: "精选",
    featuredTitle: "此分类中建议先阅读的文章",
    reading: "分钟阅读",
    read: "阅读指南",
    relatedTags: "相关标签",
    all: "全部文章",
    similar: "正在规划类似项目？",
    similarDesc: "即使需求还不完全清楚，也可以简要说明当前情况、目标和考虑中的模块。",
    explain: "描述项目",
  } : {
    back: "← Bloga Dön",
    kicker: "Blog Kategorisi",
    suffix: "Yazıları",
    desc: `${current} projelerinde kapsam, fiyat, süreç ve doğru sistem seçimi için hazırlanmış rehberler.`,
    featured: "Öne Çıkanlar",
    featuredTitle: "Bu kategoride ilk okunacak yazılar",
    reading: "dk okuma",
    read: "Rehberi Oku",
    relatedTags: "İlgili Etiketler",
    all: "Tüm Yazılar",
    similar: "Benzer bir proje mi planlıyorsunuz?",
    similarDesc: "Ne istediğiniz tamamen net değilse de mevcut durumu, hedefi ve aklınızdaki modülleri birkaç cümleyle yazabilirsiniz.",
    explain: "Projeyi Anlat",
  };

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <div className="mb-12">
        <LocalizedLink href="/blog" className="mb-6 inline-block text-sm text-gray-500 hover:text-white">{text.back}</LocalizedLink>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">{current} {text.suffix}</h1>
        <p className="mt-6 max-w-4xl text-base md:text-xl leading-8 text-gray-400">{text.desc}</p>
      </div>

      {featuredPosts.length > 0 && (
        <section className="mb-12 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.featured}</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.featuredTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featuredPosts.map((post) => <article key={post.slug} className="border border-white/10 bg-[#071225]/78 p-6"><div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500"><span>{post.readingMinutes} {text.reading}</span><span aria-hidden="true">/</span><span>{post.updatedAt}</span></div><h3 className="text-xl md:text-2xl font-medium leading-8 text-white">{post.title}</h3><p className="mt-4 text-sm leading-7 text-gray-400">{post.description}</p><LocalizedLink href={`/blog/${post.slug}`} className="mt-6 inline-block bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-gray-200">{text.read}</LocalizedLink></article>)}
          </div>
        </section>
      )}

      {tags.length > 0 && <section className="mb-12 border-t border-white/10 pt-8"><p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.relatedTags}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map((tag, index) => <LocalizedLink key={tag} href={`/blog/tag/${normalizeBlogPath(originalPosts[0]?.tags[index] ?? tag)}`} className="border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400 hover:bg-white/10 hover:text-white">{tag}</LocalizedLink>)}</div></section>}

      <section className="border-t border-white/10 pt-8">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.all}</p><h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{current} {isEnglish ? "articles" : isGerman ? "Artikel" : isFrench ? "articles" : isSpanish ? "artículos" : isArabic ? "مقالات" : isRussian ? "статьи" : isPortuguese ? "artigos" : isItalian ? "articoli" : isDutch ? "artikelen" : isChinese ? "文章" : "rehberleri"}</h2></div>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => <article key={post.slug} className="flex min-h-[17rem] flex-col justify-between border border-white/10 bg-[#071225]/65 p-6"><div><div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500"><span>{post.readingMinutes} {text.reading}</span><span aria-hidden="true">/</span><span>{post.updatedAt}</span></div><h3 className="text-xl font-medium leading-8 text-white">{post.title}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{post.description}</p></div><LocalizedLink href={`/blog/${post.slug}`} className="mt-6 w-fit border border-white/20 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">{isEnglish ? "Read Article" : isGerman ? "Artikel lesen" : isFrench ? "Lire l'article" : isSpanish ? "Leer artículo" : isArabic ? "اقرأ المقال" : isRussian ? "Читать статью" : isPortuguese ? "Ler artigo" : isItalian ? "Leggi articolo" : isDutch ? "Lees artikel" : isChinese ? "阅读文章" : "Yazıyı Oku"}</LocalizedLink></article>)}
        </div>
      </section>

      <section className="mt-12 border border-white/10 bg-[#071225]/78 p-6 md:p-8">
        <h2 className="text-2xl font-medium text-white">{text.similar}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">{text.similarDesc}</p>
        <LocalizedLink href={`/contact?source=blog-category&topic=${categorySlug}`} className="mt-6 inline-block bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-200">{text.explain}</LocalizedLink>
      </section>
    </main>
  );
}
