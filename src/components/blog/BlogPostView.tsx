"use client";

import { ArrowRight } from "lucide-react";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";
import { normalizeBlogPath } from "@/data/blog-content-system";
import type { BlogPostType, ProjectType, ServiceType } from "@/types";

type RelatedLandingPage = {
  slug: string;
  title: string;
  description: string;
};

const editorialCopy = {
  tr: {
    label: "İçerik yaklaşımı",
    note: "Bu rehber; gerçek proje kapsamları, uygulama kararları ve teslim deneyimlerinden yararlanılarak hazırlanır. Fiyat ve teknik kapsam, işletmenin verisi incelendikten sonra netleşir.",
    projects: "İlgili proje örnekleri",
    projectNote: "Rehberde anlatılan kararların proje veya demo kapsamındaki karşılıklarını inceleyin.",
    projectView: "Projeyi incele",
  },
  en: {
    label: "Editorial approach",
    note: "This guide draws on real project scopes, implementation decisions, and delivery experience. Pricing and technical scope are confirmed after reviewing the business data.",
    projects: "Related project examples",
    projectNote: "Review how the decisions discussed in this guide appear in a project or demo scope.",
    projectView: "Review project",
  },
  de: {
    label: "Redaktioneller Ansatz",
    note: "Dieser Leitfaden basiert auf realen Projektumfängen, Umsetzungsentscheidungen und Liefererfahrung. Preis und Technik werden nach Prüfung der Geschäftsdaten geklärt.",
    projects: "Verwandte Projektbeispiele",
    projectNote: "Sehen Sie, wie die beschriebenen Entscheidungen in einem Projekt- oder Demo-Umfang umgesetzt werden.",
    projectView: "Projekt ansehen",
  },
  fr: {
    label: "Approche éditoriale",
    note: "Ce guide s’appuie sur des périmètres réels, des décisions d’implémentation et l’expérience de livraison. Prix et technique sont confirmés après examen des données métier.",
    projects: "Exemples de projets liés",
    projectNote: "Voyez comment les décisions du guide se traduisent dans un projet ou une démo.",
    projectView: "Voir le projet",
  },
  es: {
    label: "Enfoque editorial",
    note: "Esta guía se basa en alcances reales, decisiones de implementación y experiencia de entrega. El precio y el alcance técnico se confirman tras revisar los datos del negocio.",
    projects: "Ejemplos de proyectos relacionados",
    projectNote: "Revisa cómo las decisiones de esta guía aparecen en el alcance de un proyecto o demo.",
    projectView: "Revisar proyecto",
  },
  ar: {
    label: "منهج إعداد المحتوى",
    note: "يستند هذا الدليل إلى نطاقات مشاريع حقيقية وقرارات تنفيذ وخبرة تسليم. يحدد السعر والنطاق التقني بعد مراجعة بيانات العمل.",
    projects: "أمثلة مشاريع مرتبطة",
    projectNote: "راجع كيف تظهر القرارات المذكورة في نطاق مشروع أو نموذج تجريبي.",
    projectView: "راجع المشروع",
  },
  ru: {
    label: "Редакционный подход",
    note: "Руководство основано на реальных объемах проектов, решениях по реализации и опыте сдачи. Цена и технический объем уточняются после анализа бизнес-данных.",
    projects: "Связанные примеры проектов",
    projectNote: "Посмотрите, как описанные решения отражены в проекте или демо.",
    projectView: "Посмотреть проект",
  },
  pt: {
    label: "Abordagem editorial",
    note: "Este guia usa escopos reais, decisões de implementação e experiência de entrega. Preço e escopo técnico são confirmados após revisar os dados do negócio.",
    projects: "Exemplos de projetos relacionados",
    projectNote: "Veja como as decisões discutidas aparecem no escopo de um projeto ou demo.",
    projectView: "Revisar projeto",
  },
  it: {
    label: "Approccio editoriale",
    note: "Questa guida si basa su ambiti reali, decisioni di implementazione ed esperienza di consegna. Prezzo e ambito tecnico sono confermati dopo l’analisi dei dati aziendali.",
    projects: "Esempi di progetti correlati",
    projectNote: "Scopri come le decisioni descritte compaiono nell’ambito di un progetto o di una demo.",
    projectView: "Vedi progetto",
  },
  nl: {
    label: "Redactionele aanpak",
    note: "Deze gids gebruikt echte projectscopes, implementatiekeuzes en opleverervaring. Prijs en technische scope worden bevestigd na beoordeling van de bedrijfsgegevens.",
    projects: "Gerelateerde projectvoorbeelden",
    projectNote: "Bekijk hoe de besproken keuzes terugkomen in een project- of demoscope.",
    projectView: "Bekijk project",
  },
  zh: {
    label: "内容编写方式",
    note: "本指南参考真实项目范围、实施决策与交付经验。价格和技术范围会在审查业务数据后确定。",
    projects: "相关项目案例",
    projectNote: "查看本指南讨论的决策如何体现在项目或演示范围中。",
    projectView: "查看项目",
  },
};

export default function BlogPostView({
  post,
  tagLinks,
  relatedBlogPosts,
  relatedServices,
  relatedLandingPages,
  relatedProjects,
}: {
  post: BlogPostType;
  tagLinks: Array<{ label: string; slug: string }>;
  relatedBlogPosts: BlogPostType[];
  relatedServices: ServiceType[];
  relatedLandingPages: RelatedLandingPage[];
  relatedProjects: ProjectType[];
}) {
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
  const tableOfContents = post.sections.map((section) => ({ id: normalizeBlogPath(section.heading), heading: section.heading }));
  const editorial = editorialCopy[locale];

  const text = isEnglish ? {
    back: "← Back to Blog",
    reading: "min read",
    updated: "Last update",
    faq: "Frequently asked questions",
    relatedGuides: "Related guides",
    relatedDesc: "Visitors reading this article usually want to clarify scope, pricing, delivery process, and similar system decisions.",
    contents: "Contents",
    support: "Get support on this topic",
    supportDesc: "If your need is not clear yet, describe the project type, current situation, and modules you have in mind.",
    quote: "Get a Quote",
    services: "Related services",
    landing: "Service pages on this topic",
  } : isGerman ? {
    back: "← Zurück zum Blog",
    reading: "Min. Lesezeit",
    updated: "Letzte Aktualisierung",
    faq: "Häufig gestellte Fragen",
    relatedGuides: "Verwandte Leitfäden",
    relatedDesc: "Besucher, die diesen Artikel lesen, möchten meist Umfang, Preis, Lieferprozess und ähnliche Systementscheidungen klären.",
    contents: "Inhalt",
    support: "Unterstützung zu diesem Thema erhalten",
    supportDesc: "Wenn Ihr Bedarf noch nicht klar ist, beschreiben Sie Projekttyp, aktuelle Situation und die Module, die Sie im Kopf haben.",
    quote: "Angebot anfragen",
    services: "Verwandte Leistungen",
    landing: "Leistungsseiten zu diesem Thema",
  } : isFrench ? {
    back: "← Retour au blog",
    reading: "min de lecture",
    updated: "Dernière mise à jour",
    faq: "Questions fréquentes",
    relatedGuides: "Guides liés",
    relatedDesc: "Les visiteurs qui lisent cet article veulent souvent clarifier le périmètre, le prix, le processus de livraison et les décisions système similaires.",
    contents: "Sommaire",
    support: "Obtenir de l'aide sur ce sujet",
    supportDesc: "Si votre besoin n'est pas encore clair, décrivez le type de projet, la situation actuelle et les modules envisagés.",
    quote: "Demander un devis",
    services: "Services liés",
    landing: "Pages de service sur ce sujet",
  } : isSpanish ? {
    back: "← Volver al blog",
    reading: "min de lectura",
    updated: "Última actualización",
    faq: "Preguntas frecuentes",
    relatedGuides: "Guías relacionadas",
    relatedDesc: "Quienes leen este artículo normalmente quieren aclarar alcance, precio, entrega y decisiones similares del sistema.",
    contents: "Contenido",
    support: "Recibir ayuda sobre este tema",
    supportDesc: "Si tu necesidad aún no está clara, describe el tipo de proyecto, la situación actual y los módulos que tienes en mente.",
    quote: "Solicitar propuesta",
    services: "Servicios relacionados",
    landing: "Páginas de servicio sobre este tema",
  } : isArabic ? {
    back: "← العودة إلى المدونة",
    reading: "دقيقة قراءة",
    updated: "آخر تحديث",
    faq: "أسئلة شائعة",
    relatedGuides: "أدلة مرتبطة",
    relatedDesc: "الزوار الذين يقرؤون هذا المقال يريدون غالباً توضيح النطاق والسعر وعملية التسليم وقرارات النظام المشابهة.",
    contents: "المحتويات",
    support: "احصل على دعم حول هذا الموضوع",
    supportDesc: "إذا لم تكن حاجتك واضحة بعد، اشرح نوع المشروع والوضع الحالي والوحدات التي تفكر بها.",
    quote: "اطلب عرض سعر",
    services: "خدمات مرتبطة",
    landing: "صفحات خدمة حول هذا الموضوع",
  } : isRussian ? {
    back: "← Назад к блогу",
    reading: "мин чтения",
    updated: "Последнее обновление",
    faq: "Частые вопросы",
    relatedGuides: "Связанные гиды",
    relatedDesc: "Читатели этой статьи обычно хотят уточнить объем, цену, процесс сдачи и похожие решения по системе.",
    contents: "Содержание",
    support: "Получить помощь по теме",
    supportDesc: "Если потребность еще не ясна, опишите тип проекта, текущую ситуацию и модули, которые вы рассматриваете.",
    quote: "Получить предложение",
    services: "Связанные услуги",
    landing: "Service pages по этой теме",
  } : isPortuguese ? {
    back: "← Voltar ao blog",
    reading: "min de leitura",
    updated: "Última atualização",
    faq: "Perguntas frequentes",
    relatedGuides: "Guias relacionados",
    relatedDesc: "Quem lê este artigo normalmente quer esclarecer escopo, preço, processo de entrega e decisões parecidas de sistema.",
    contents: "Conteúdo",
    support: "Receber ajuda sobre este tema",
    supportDesc: "Se sua necessidade ainda não está clara, descreva o tipo de projeto, a situação atual e os módulos em mente.",
    quote: "Solicitar proposta",
    services: "Serviços relacionados",
    landing: "Páginas de serviço sobre este tema",
  } : isItalian ? {
    back: "← Torna al blog",
    reading: "min di lettura",
    updated: "Ultimo aggiornamento",
    faq: "Domande frequenti",
    relatedGuides: "Guide correlate",
    relatedDesc: "Chi legge questo articolo di solito vuole chiarire ambito, prezzo, processo di consegna e decisioni simili sul sistema.",
    contents: "Indice",
    support: "Ricevi supporto su questo tema",
    supportDesc: "Se il bisogno non è ancora chiaro, descrivi il tipo di progetto, la situazione attuale e i moduli che hai in mente.",
    quote: "Richiedi preventivo",
    services: "Servizi correlati",
    landing: "Pagine servizio su questo tema",
  } : isDutch ? {
    back: "← Terug naar blog",
    reading: "min lezen",
    updated: "Laatste update",
    faq: "Veelgestelde vragen",
    relatedGuides: "Gerelateerde gidsen",
    relatedDesc: "Bezoekers die dit artikel lezen willen meestal scope, prijs, opleverproces en vergelijkbare systeemkeuzes verduidelijken.",
    contents: "Inhoud",
    support: "Krijg support over dit onderwerp",
    supportDesc: "Als de behoefte nog niet duidelijk is, beschrijf dan het projecttype, de huidige situatie en de modules die u in gedachten heeft.",
    quote: "Vraag offerte aan",
    services: "Gerelateerde services",
    landing: "Servicepagina's over dit onderwerp",
  } : isChinese ? {
    back: "← 返回博客",
    reading: "分钟阅读",
    updated: "最后更新",
    faq: "常见问题",
    relatedGuides: "相关指南",
    relatedDesc: "阅读这篇文章的访客通常也希望明确范围、价格、交付流程和类似系统决策。",
    contents: "目录",
    support: "获取此主题支持",
    supportDesc: "如果需求还不清楚，请描述项目类型、当前情况和考虑中的模块。",
    quote: "获取报价",
    services: "相关服务",
    landing: "此主题的服务页面",
  } : {
    back: "← Bloga Dön",
    reading: "dk okuma",
    updated: "Son güncelleme",
    faq: "Sık sorulan sorular",
    relatedGuides: "İlgili rehberler",
    relatedDesc: "Bu yazıyı okuyan ziyaretçiler genelde kapsam, fiyat, teslim süreci ve benzer sistem kararlarını da netleştirmek ister.",
    contents: "İçindekiler",
    support: "Bu konuda destek alın",
    supportDesc: "İhtiyacınız net değilse proje türünü, mevcut durumunuzu ve aklınızdaki modülleri yazmanız yeterli.",
    quote: "Teklif Al",
    services: "İlgili hizmetler",
    landing: "Bu konuda hizmet sayfası",
  };

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-6xl mx-auto">
      <LocalizedLink href="/blog" className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-white">{text.back}</LocalizedLink>

      <div className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">{post.category}</span>
          <span className="border border-white/10 bg-[#071225]/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">{post.readingMinutes} {text.reading}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">{post.title}</h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tagLinks.map((tag) => <LocalizedLink key={tag.slug} href={`/blog/tag/${tag.slug}`} className="border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-400 hover:bg-white/10 hover:text-white">{tag.label}</LocalizedLink>)}
        </div>
        <p className="mt-5 text-sm text-gray-500">{text.updated}: {post.updatedAt}</p>
        <div className="mt-6 max-w-4xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{editorial.label}</p>
          <p className="mt-3 text-sm leading-7 text-gray-400">{editorial.note}</p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          {post.sections.map((section) => (
            <section key={section.heading} id={normalizeBlogPath(section.heading)} className="mb-8 scroll-mt-28 border-t border-white/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-medium text-white">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-gray-400 leading-8">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}

          {post.faqs.length > 0 && (
            <section className="mb-8 border-t border-white/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-medium text-white">{text.faq}</h2>
              <div className="mt-6 grid gap-4">
                {post.faqs.map((faq) => <div key={faq.question} className="border border-white/10 bg-[#071225]/55 p-5"><h3 className="font-bold text-white">{faq.question}</h3><p className="mt-3 text-sm leading-7 text-gray-400">{faq.answer}</p></div>)}
              </div>
            </section>
          )}

          {relatedProjects.length > 0 && (
            <section className="mb-8 border-t border-white/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-medium text-white">{editorial.projects}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">{editorial.projectNote}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedProjects.map((project) => (
                  <LocalizedLink key={project.slug} href={`/projects/${project.slug}`} className="group border border-white/10 bg-[#071225]/55 p-5 hover:bg-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
                    <span className="mt-3 block text-base font-semibold leading-7 text-white">{project.title}</span>
                    <span className="mt-3 line-clamp-3 block text-sm leading-6 text-gray-400">{project.shortDesc}</span>
                    <span className="mt-4 inline-block text-sm font-bold text-gray-300 group-hover:text-white">{editorial.projectView} →</span>
                  </LocalizedLink>
                ))}
              </div>
            </section>
          )}

          {relatedBlogPosts.length > 0 && (
            <section className="mb-8 border-t border-white/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-medium text-white">{text.relatedGuides}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">{text.relatedDesc}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedBlogPosts.map((relatedPost) => <LocalizedLink key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="border border-white/10 bg-[#071225]/55 p-5 hover:bg-white/10"><span className="text-xs font-bold uppercase tracking-widest text-gray-500">{relatedPost.category}</span><span className="mt-3 block text-base font-semibold leading-7 text-white">{relatedPost.title}</span><span className="mt-3 block text-sm leading-6 text-gray-400">{relatedPost.description}</span></LocalizedLink>)}
              </div>
            </section>
          )}
        </article>

        <aside className="lg:sticky lg:top-28 h-fit">
          {tableOfContents.length > 0 && (
            <div className="mb-5 border border-white/10 bg-[#071225]/65 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">{text.contents}</h2>
              <nav className="mt-4 grid gap-2">{tableOfContents.map((item) => <a key={item.id} href={`#${item.id}`} className="block border border-white/10 bg-white/5 p-3 text-sm font-medium leading-6 text-gray-300 hover:bg-white/10 hover:text-white">{item.heading}</a>)}</nav>
            </div>
          )}

          <div className="border border-white/10 bg-[#071225]/78 p-6">
            <h2 className="text-xl font-medium text-white">{text.support}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-400">{text.supportDesc}</p>
            <LocalizedLink href={`/contact?source=blog&topic=${post.slug}${relatedServices[0] ? `&service=${relatedServices[0].slug}` : ""}`} className="mt-5 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-200">{text.quote} <ArrowRight size={16} /></LocalizedLink>
          </div>

          {relatedServices.length > 0 && <div className="mt-5 border border-white/10 bg-[#071225]/65 p-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">{text.services}</h2><div className="mt-4 grid gap-3">{relatedServices.map((service) => <LocalizedLink key={service.slug} href={`/services/${service.slug}`} className="block border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-gray-200 hover:bg-white/10">{service.title}</LocalizedLink>)}</div></div>}
          {relatedLandingPages.length > 0 && <div className="mt-5 border border-white/10 bg-[#071225]/65 p-6"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">{text.landing}</h2><div className="mt-4 grid gap-3">{relatedLandingPages.map((page) => <LocalizedLink key={page.slug} href={`/${page.slug}`} className="block border border-white/10 bg-white/5 p-4 hover:bg-white/10"><span className="block text-sm font-semibold leading-6 text-gray-200">{page.title}</span><span className="mt-2 block text-xs leading-5 text-gray-500">{page.description}</span></LocalizedLink>)}</div></div>}
        </aside>
      </div>
    </main>
  );
}
