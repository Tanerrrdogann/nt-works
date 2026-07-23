"use client";

import LocalizedLink from "@/components/i18n/LocalizedLink";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";
import { normalizeBlogPath } from "@/data/blog-content-system";
import type { BlogPostType } from "@/types";

export type BlogIndexPost = Pick<
  BlogPostType,
  "slug" | "title" | "description" | "category" | "readingMinutes" | "relatedServices"
>;

export type BlogIndexCategory = {
  originalCategory: string;
  localizedCategory: string;
  count: number;
};

type BlogIndexViewProps = {
  posts: BlogIndexPost[];
  featuredPosts: BlogIndexPost[];
  categories: BlogIndexCategory[];
};

const compactBlogCategoryDescTr: Record<string, string> = {
  "Admin Panel": "Panel kapsamı ve işletme yönetimi.",
  Entegrasyon: "XML API ve bağlantı rehberleri.",
  Katalog: "Ürün kataloğu ve sipariş akışı.",
  Randevu: "Takvim ve rezervasyon seçimi.",
  "E-Ticaret": "Online satış altyapısı rehberleri.",
  "Özel Yazılım": "Özel sistem kapsamı ve planı.",
  "Power Apps": "Power Apps süreç notları.",
  "Web Sitesi": "Tanıtım sitesi ve teklif akışı.",
  Bakım: "Destek bakım ve geliştirme.",
  MVP: "İlk sürüm kapsam rehberi.",
  CRM: "Müşteri takip sistemi rehberleri.",
  "Stok ve Sipariş": "Stok sipariş ve operasyon.",
  "Satış Sistemleri": "Satışa dönen sistem fikirleri.",
  "Yapay Zeka": "AI otomasyon ve asistanlar.",
  "Sektörel Yazılım": "Sektöre göre yazılım seçimi.",
  Karşılaştırma: "Seçenekleri net kıyaslama.",
  "Fiyat Rehberi": "Fiyatı etkileyen kapsamlar.",
  Mobil: "Mobil kullanım ve webview.",
  SEO: "Arama görünürlüğü ve teknik SEO.",
};

function compactBlogCategoryDesc(originalCategory: string, localizedCategory: string, locale: string) {
  if (locale === "tr") return compactBlogCategoryDescTr[originalCategory] ?? `${originalCategory} rehberleri.`;
  return `${localizedCategory} guides.`;
}

export default function BlogIndexView({ posts, featuredPosts, categories }: BlogIndexViewProps) {
  const locale = useCurrentLocale();
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
  const text = isEnglish ? {
    kicker: "Knowledge Center",
    title: "Guides that clarify scope before starting a project",
    desc: "Guides that help you choose the right starting point for websites, admin panels, catalogs, appointments, e-commerce, integrations, custom software, mobile, and AI automation projects.",
    featured: "Featured Guides",
    featuredTitle: "Scope articles to read first",
    explain: "Describe the Project",
    read: "Read Guide",
    categories: "Categories",
    categoryTitle: "What topic are you researching?",
    posts: "posts",
    viewPosts: "View Posts",
    all: "All Guides",
    allTitle: "Scope, pricing, and system selection articles",
    reading: "min read",
    relatedService: "Related Service",
  } : isGerman ? {
    kicker: "Wissensbereich",
    title: "Leitfäden, die den Umfang vor Projektbeginn klären",
    desc: "Leitfäden, die helfen, den richtigen Startpunkt für Websites, Admin-Panels, Kataloge, Termine, E-Commerce, Integrationen, individuelle Software, Mobil und KI-Automatisierung zu wählen.",
    featured: "Empfohlene Leitfäden",
    featuredTitle: "Umfangsartikel, die zuerst gelesen werden sollten",
    explain: "Projekt beschreiben",
    read: "Leitfaden lesen",
    categories: "Kategorien",
    categoryTitle: "Zu welchem Thema recherchieren Sie?",
    posts: "Artikel",
    viewPosts: "Artikel ansehen",
    all: "Alle Leitfäden",
    allTitle: "Artikel zu Umfang, Preis und Systemauswahl",
    reading: "Min. Lesezeit",
    relatedService: "Verwandte Leistung",
  } : isFrench ? {
    kicker: "Centre de ressources",
    title: "Guides pour clarifier le périmètre avant de démarrer un projet",
    desc: "Des guides pour choisir le bon point de départ pour sites web, panneaux admin, catalogues, rendez-vous, e-commerce, intégrations, logiciels sur mesure, mobile et automatisations IA.",
    featured: "Guides à lire",
    featuredTitle: "Articles de périmètre à lire en premier",
    explain: "Décrire le projet",
    read: "Lire le guide",
    categories: "Catégories",
    categoryTitle: "Quel sujet recherchez-vous ?",
    posts: "articles",
    viewPosts: "Voir les articles",
    all: "Tous les guides",
    allTitle: "Articles sur le périmètre, le prix et le choix du système",
    reading: "min de lecture",
    relatedService: "Service lié",
  } : isSpanish ? {
    kicker: "Centro de conocimiento",
    title: "Guías que aclaran el alcance antes de iniciar un proyecto",
    desc: "Guías para elegir el punto de partida correcto en sitios web, paneles admin, catálogos, citas, e-commerce, integraciones, software a medida, móvil y automatizaciones con IA.",
    featured: "Guías destacadas",
    featuredTitle: "Artículos de alcance para leer primero",
    explain: "Describir el proyecto",
    read: "Leer guía",
    categories: "Categorías",
    categoryTitle: "¿Qué tema estás investigando?",
    posts: "artículos",
    viewPosts: "Ver artículos",
    all: "Todas las guías",
    allTitle: "Artículos sobre alcance, precio y elección del sistema",
    reading: "min de lectura",
    relatedService: "Servicio relacionado",
  } : isArabic ? {
    kicker: "مركز المعرفة",
    title: "أدلة توضح النطاق قبل بدء المشروع",
    desc: "أدلة تساعدك على اختيار نقطة البداية الصحيحة لمشاريع مواقع الويب ولوحات الإدارة والكتالوجات والمواعيد والتجارة الإلكترونية والتكاملات والبرمجيات المخصصة والموبايل وأتمتة الذكاء الاصطناعي.",
    featured: "أدلة مختارة",
    featuredTitle: "مقالات النطاق التي يفضل قراءتها أولاً",
    explain: "اشرح المشروع",
    read: "اقرأ الدليل",
    categories: "الفئات",
    categoryTitle: "ما الموضوع الذي تبحث عنه؟",
    posts: "مقالات",
    viewPosts: "عرض المقالات",
    all: "كل الأدلة",
    allTitle: "مقالات عن النطاق والسعر واختيار النظام",
    reading: "دقيقة قراءة",
    relatedService: "الخدمة المرتبطة",
  } : isRussian ? {
    kicker: "База знаний",
    title: "Гиды, которые уточняют объем до старта проекта",
    desc: "Материалы, которые помогают выбрать правильную отправную точку для сайтов, панелей, каталогов, записи, e-commerce, интеграций, индивидуальной разработки, mobile и AI automation.",
    featured: "Избранные гиды",
    featuredTitle: "Статьи по объему, которые стоит прочитать первыми",
    explain: "Описать проект",
    read: "Читать гид",
    categories: "Категории",
    categoryTitle: "Какую тему вы изучаете?",
    posts: "статей",
    viewPosts: "Смотреть статьи",
    all: "Все гиды",
    allTitle: "Статьи про объем, цену и выбор системы",
    reading: "мин чтения",
    relatedService: "Связанная услуга",
  } : isPortuguese ? {
    kicker: "Centro de conhecimento",
    title: "Guias que esclarecem o escopo antes de iniciar um projeto",
    desc: "Guias para escolher o ponto de partida correto em sites, painéis administrativos, catálogos, agendamentos, e-commerce, integrações, software sob medida, mobile e automações com IA.",
    featured: "Guias em destaque",
    featuredTitle: "Artigos de escopo para ler primeiro",
    explain: "Descrever o projeto",
    read: "Ler guia",
    categories: "Categorias",
    categoryTitle: "Qual tema você está pesquisando?",
    posts: "artigos",
    viewPosts: "Ver artigos",
    all: "Todos os guias",
    allTitle: "Artigos sobre escopo, preço e escolha do sistema",
    reading: "min de leitura",
    relatedService: "Serviço relacionado",
  } : isItalian ? {
    kicker: "Centro conoscenza",
    title: "Guide che chiariscono l'ambito prima di iniziare un progetto",
    desc: "Guide per scegliere il punto di partenza corretto in siti web, pannelli amministrativi, cataloghi, appuntamenti, e-commerce, integrazioni, software su misura, mobile e automazioni AI.",
    featured: "Guide in evidenza",
    featuredTitle: "Articoli sull'ambito da leggere per primi",
    explain: "Descrivi il progetto",
    read: "Leggi la guida",
    categories: "Categorie",
    categoryTitle: "Quale tema stai ricercando?",
    posts: "articoli",
    viewPosts: "Vedi articoli",
    all: "Tutte le guide",
    allTitle: "Articoli su ambito, prezzo e scelta del sistema",
    reading: "min di lettura",
    relatedService: "Servizio correlato",
  } : isDutch ? {
    kicker: "Kenniscentrum",
    title: "Gidsen die de scope verduidelijken voordat een project start",
    desc: "Gidsen om het juiste startpunt te kiezen voor websites, beheerpanelen, catalogi, afspraken, e-commerce, integraties, software op maat, mobiel en AI-automatisering.",
    featured: "Uitgelichte gidsen",
    featuredTitle: "Scope-artikelen om eerst te lezen",
    explain: "Beschrijf het project",
    read: "Lees gids",
    categories: "Categorieen",
    categoryTitle: "Welk onderwerp onderzoekt u?",
    posts: "artikelen",
    viewPosts: "Bekijk artikelen",
    all: "Alle gidsen",
    allTitle: "Artikelen over scope, prijs en systeemkeuze",
    reading: "min lezen",
    relatedService: "Gerelateerde service",
  } : isChinese ? {
    kicker: "知识中心",
    title: "项目开始前明确范围的指南",
    desc: "这些指南帮助您为网站、管理面板、目录、预约、电商、集成、定制软件、移动端和 AI 自动化项目选择正确起点。",
    featured: "精选指南",
    featuredTitle: "建议先阅读的范围文章",
    explain: "描述项目",
    read: "阅读指南",
    categories: "分类",
    categoryTitle: "您正在研究哪个主题？",
    posts: "篇文章",
    viewPosts: "查看文章",
    all: "全部指南",
    allTitle: "关于范围、价格和系统选择的文章",
    reading: "分钟阅读",
    relatedService: "相关服务",
  } : {
    kicker: "Bilgi Merkezi",
    title: "Proje yaptırmadan önce kapsamı netleştiren rehberler",
    desc: "Web sitesi, admin panel, katalog, randevu, e-ticaret, entegrasyon, özel yazılım, mobil ve AI otomasyon projelerinde doğru başlangıcı seçmenize yardımcı olacak rehberler.",
    featured: "Öne Çıkan Rehberler",
    featuredTitle: "İlk okunacak kapsam yazıları",
    explain: "Projeyi Anlat",
    read: "Rehberi Oku",
    categories: "Kategoriler",
    categoryTitle: "Hangi konuda bilgi arıyorsunuz?",
    posts: "yazı",
    viewPosts: "Yazıları Gör",
    all: "Tüm Rehberler",
    allTitle: "Kapsam, fiyat ve sistem seçimi yazıları",
    reading: "dk okuma",
    relatedService: "İlgili Hizmet",
  };

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight mb-6">{text.title}</h1>
        <p className="mobile-compact-text text-base md:text-xl text-gray-400 max-w-3xl leading-8">{text.desc}</p>
      </div>

      {featuredPosts.length > 0 && (
        <section className="mb-14 border-t border-white/10 pt-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.featured}</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.featuredTitle}</h2>
            </div>
            <LocalizedLink href="/contact?source=blog-index" className="w-fit border border-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">{text.explain}</LocalizedLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="border border-white/10 bg-[#071225]/78 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{post.category}</p>
                <h3 className="mt-3 text-lg font-medium leading-7 text-white">{post.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                <LocalizedLink href={`/blog/${post.slug}`} className="mt-5 inline-block text-sm font-bold text-white hover:text-gray-300">{text.read}</LocalizedLink>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mb-14 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.categories}</p>
        <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.categoryTitle}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {categories.map(({ originalCategory, localizedCategory, count }) => {
            return (
              <article key={originalCategory} className="border border-white/10 bg-[#071225]/65 p-3 md:p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                  <h3 className="text-base font-medium leading-6 text-white md:text-xl">{localizedCategory}</h3>
                  <span className="w-fit shrink-0 border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-bold text-gray-500 md:px-2.5 md:text-xs">{count} {text.posts}</span>
                </div>
                <p className="phone-card-copy mt-3 text-xs leading-5 text-gray-400 sm:hidden">{compactBlogCategoryDesc(originalCategory, localizedCategory, locale)}</p>
                <p className="desktop-card-copy mt-3 hidden text-sm leading-7 text-gray-400 sm:block">{isEnglish ? `Guides about ${localizedCategory.toLowerCase()} scope, pricing, process, and system selection.` : isGerman ? `Leitfäden zu Umfang, Preis, Prozess und Systemauswahl im Bereich ${localizedCategory.toLowerCase()}.` : isFrench ? `Guides sur le périmètre, le prix, le processus et le choix du système pour ${localizedCategory.toLowerCase()}.` : isSpanish ? `Guías sobre alcance, precio, proceso y elección del sistema para ${localizedCategory.toLowerCase()}.` : isArabic ? `أدلة حول النطاق والسعر والعملية واختيار النظام ضمن ${localizedCategory}.` : isRussian ? `Гиды про объем, цену, процесс и выбор системы в теме ${localizedCategory.toLowerCase()}.` : isPortuguese ? `Guias sobre escopo, preço, processo e escolha do sistema em ${localizedCategory.toLowerCase()}.` : isItalian ? `Guide su ambito, prezzo, processo e scelta del sistema per ${localizedCategory.toLowerCase()}.` : isDutch ? `Gidsen over scope, prijs, proces en systeemkeuze rond ${localizedCategory.toLowerCase()}.` : isChinese ? `关于${localizedCategory}项目范围、价格、流程和系统选择的指南。` : `${originalCategory} konusunda kapsam, fiyat, süreç ve doğru sistem seçimi için rehber içerikler.`}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <LocalizedLink href={`/blog/category/${normalizeBlogPath(originalCategory)}`} className="bg-white px-3 py-2 text-xs font-bold text-black hover:bg-gray-200 md:px-4 md:text-sm">{text.viewPosts}</LocalizedLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 pt-8">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.all}</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-white">{text.allTitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="mobile-compact-card flex min-h-[18rem] flex-col justify-between border border-white/10 bg-[#071225]/78 p-5 md:p-8">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>{post.category}</span><span aria-hidden="true">/</span><span>{post.readingMinutes} {text.reading}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-medium leading-8 text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-400">{post.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                <LocalizedLink href={`/blog/${post.slug}`} className="bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-gray-200">{isEnglish ? "Read Article" : isGerman ? "Artikel lesen" : isFrench ? "Lire l'article" : isSpanish ? "Leer artículo" : isArabic ? "اقرأ المقال" : isRussian ? "Читать статью" : isPortuguese ? "Ler artigo" : isItalian ? "Leggi articolo" : isDutch ? "Lees artikel" : isChinese ? "阅读文章" : "Yazıyı Oku"}</LocalizedLink>
                {post.relatedServices[0] && <LocalizedLink href={`/services/${post.relatedServices[0]}`} className="border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">{text.relatedService}</LocalizedLink>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
