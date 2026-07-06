"use client";

import { PageReveal, RevealItem } from "@/components/animations/PageReveal";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import RatingStars from "@/components/RatingStars";
import { getProjectMeta } from "@/data/project-meta";
import { projectsData } from "@/data/projects";
import { bionlukStats } from "@/data/testimonials";
import { getLocalizedProjectMeta, getLocalizedProjects, getLocalizedTestimonials } from "@/data/i18n/projects-en";
import { getLocaleFromPath } from "@/lib/i18n";
import { usePathname } from "next/navigation";

const copy = {
  tr: {
    eyebrow: "Yapılan İşler",
    title: "Portföy, tamamlanan işler ve",
    muted: "müşteri memnuniyeti",
    intro: "Bu sayfada tamamlanan gerçek işler, proje sonuçları ve müşterilerden gelen değerlendirmeler birlikte yer alır. Detaylar izin ve gizlilik durumuna göre açık ya da anonim gösterilir.",
    rating: "ortalama değerlendirme",
    reviews: "müşteri yorumu",
    completed: "tamamlanan iş",
    blockTitle: "Yapılan işler ve müşteri memnuniyeti",
    p1: "Portföydeki her iş; çözülen problem, yapılan çalışma ve varsa müşteri değerlendirmesiyle birlikte gösterilir. Amaç yalnızca görsel referans sunmak değil, işin nasıl ele alındığını ve teslim sonrası geri bildirimi aynı yerde göstermek.",
    p2: "Bazı projelerde müşteri adı, ekran görüntüsü veya teknik detaylar izin ve gizlilik nedeniyle sınırlı paylaşılabilir. Böyle durumlarda iş türü, kapsam ve sonuç daha genel ifadelerle aktarılır.",
    result: "Sonuç",
    fallback: "Tamamlanan gerçek müşteri işi.",
    inspect: "İşi Detaylı İncele",
    testimonials: "Müşteri değerlendirmeleri",
    testimonialsIntro: "Aşağıdaki yorumlar tamamlanan işlerden gelen geri bildirimlerdir. Uygun olan yorumlar ilgili portföy işiyle bağlanır.",
    score: "Puan",
    related: "İlgili İşi Gör",
  },
  en: {
    eyebrow: "Completed Work",
    title: "Portfolio, completed projects and",
    muted: "customer satisfaction",
    intro: "This page brings completed client work, project results, and customer reviews together. Details are shown openly or anonymously depending on permission and privacy.",
    rating: "average rating",
    reviews: "customer reviews",
    completed: "completed work",
    blockTitle: "Completed work and customer satisfaction",
    p1: "Each portfolio item shows the problem, the delivered scope, and the customer feedback when it can be shared. The aim is to explain how the work was handled, not just show a visual reference.",
    p2: "In some projects, customer names, screenshots, or technical details may be limited because of permission and privacy. In those cases, scope and result are explained in a more general way.",
    result: "Result",
    fallback: "Completed real client work.",
    inspect: "Review Project",
    testimonials: "Customer reviews",
    testimonialsIntro: "The reviews below come from completed work. When possible, each review is linked to the related portfolio project.",
    score: "Rating",
    related: "View Related Work",
  },
  de: {
    eyebrow: "Abgeschlossene Arbeiten",
    title: "Portfolio, abgeschlossene Projekte und",
    muted: "Kundenzufriedenheit",
    intro: "Diese Seite bündelt abgeschlossene Kundenarbeiten, Projektergebnisse und Kundenbewertungen. Details werden je nach Freigabe und Datenschutz offen oder anonym gezeigt.",
    rating: "durchschnittliche Bewertung",
    reviews: "Kundenbewertungen",
    completed: "abgeschlossene Arbeit",
    blockTitle: "Abgeschlossene Arbeiten und Kundenzufriedenheit",
    p1: "Jeder Portfolio-Eintrag zeigt das gelöste Problem, den gelieferten Umfang und, wenn teilbar, das Kundenfeedback. Ziel ist nicht nur ein visueller Nachweis, sondern zu erklären, wie die Arbeit behandelt wurde.",
    p2: "Bei manchen Projekten können Kundennamen, Screenshots oder technische Details wegen Freigabe und Datenschutz begrenzt sein. In solchen Fällen werden Umfang und Ergebnis allgemeiner erklärt.",
    result: "Ergebnis",
    fallback: "Abgeschlossene echte Kundenarbeit.",
    inspect: "Projekt ansehen",
    testimonials: "Kundenbewertungen",
    testimonialsIntro: "Die folgenden Bewertungen stammen aus abgeschlossenen Arbeiten. Wenn möglich, ist jede Bewertung mit dem passenden Portfolio-Projekt verbunden.",
    score: "Bewertung",
    related: "Zugehörige Arbeit ansehen",
  },
  fr: {
    eyebrow: "Travaux terminés",
    title: "Portfolio, projets terminés et",
    muted: "satisfaction client",
    intro: "Cette page rassemble les travaux client terminés, les résultats de projet et les avis clients. Les détails sont affichés ouvertement ou anonymement selon l'autorisation et la confidentialité.",
    rating: "note moyenne",
    reviews: "avis clients",
    completed: "travaux terminés",
    blockTitle: "Travaux réalisés et satisfaction client",
    p1: "Chaque élément du portfolio montre le problème traité, le périmètre livré et, lorsque c'est partageable, le retour client. L'objectif est d'expliquer comment le travail a été mené, pas seulement de montrer une référence visuelle.",
    p2: "Dans certains projets, le nom client, les captures ou les détails techniques peuvent être limités pour des raisons d'autorisation et de confidentialité. Dans ce cas, le périmètre et le résultat sont expliqués de façon plus générale.",
    result: "Résultat",
    fallback: "Travail client réel terminé.",
    inspect: "Voir le projet",
    testimonials: "Avis clients",
    testimonialsIntro: "Les avis ci-dessous proviennent de travaux terminés. Lorsque c'est possible, chaque avis est relié au projet portfolio correspondant.",
    score: "Note",
    related: "Voir le travail lié",
  },
  es: {
    eyebrow: "Trabajos completados",
    title: "Portafolio, proyectos terminados y",
    muted: "satisfacción del cliente",
    intro: "Esta página reúne trabajos reales de clientes, resultados de proyecto y reseñas. Los detalles se muestran de forma abierta o anónima según permiso y privacidad.",
    rating: "valoración media",
    reviews: "reseñas de clientes",
    completed: "trabajos completados",
    blockTitle: "Trabajos realizados y satisfacción del cliente",
    p1: "Cada elemento del portafolio muestra el problema tratado, el alcance entregado y, cuando puede compartirse, la reseña del cliente. El objetivo es explicar cómo se llevó el trabajo, no solo mostrar una referencia visual.",
    p2: "En algunos proyectos, el nombre del cliente, las capturas o los detalles técnicos pueden limitarse por permiso y privacidad. En esos casos, el alcance y el resultado se explican de forma más general.",
    result: "Resultado",
    fallback: "Trabajo real de cliente completado.",
    inspect: "Revisar proyecto",
    testimonials: "Reseñas de clientes",
    testimonialsIntro: "Las reseñas siguientes provienen de trabajos completados. Cuando es posible, cada reseña se conecta con el proyecto de portafolio correspondiente.",
    score: "Valoración",
    related: "Ver trabajo relacionado",
  },
  ar: {
    eyebrow: "أعمال مكتملة",
    title: "البورتفوليو، المشاريع المكتملة و",
    muted: "رضا العملاء",
    intro: "تجمع هذه الصفحة أعمال العملاء المكتملة ونتائج المشاريع وتقييمات العملاء. تعرض التفاصيل بشكل واضح أو مجهول حسب الإذن والخصوصية.",
    rating: "متوسط التقييم",
    reviews: "تقييمات العملاء",
    completed: "عمل مكتمل",
    blockTitle: "الأعمال المنجزة ورضا العملاء",
    p1: "كل عنصر في البورتفوليو يوضح المشكلة التي تمت معالجتها والنطاق المسلم وتعليق العميل عندما يمكن مشاركته. الهدف هو شرح طريقة تنفيذ العمل، وليس عرض مرجع بصري فقط.",
    p2: "في بعض المشاريع قد يكون اسم العميل أو لقطات الشاشة أو التفاصيل التقنية محدود المشاركة بسبب الإذن والخصوصية. في هذه الحالات يشرح النطاق والنتيجة بصياغة عامة أكثر.",
    result: "النتيجة",
    fallback: "عمل عميل حقيقي مكتمل.",
    inspect: "راجع المشروع",
    testimonials: "تقييمات العملاء",
    testimonialsIntro: "التقييمات أدناه تأتي من أعمال مكتملة. عندما يكون ذلك ممكنا، يتم ربط كل تقييم بمشروع البورتفوليو المرتبط به.",
    score: "التقييم",
    related: "شاهد العمل المرتبط",
  },
  ru: {
    eyebrow: "Завершенные работы",
    title: "Portfolio, завершенные проекты и",
    muted: "удовлетворенность клиентов",
    intro: "На этой странице собраны завершенные клиентские работы, результаты проектов и отзывы. Детали показываются открыто или анонимно в зависимости от разрешения и privacy.",
    rating: "средняя оценка",
    reviews: "отзывов клиентов",
    completed: "завершенных работ",
    blockTitle: "Выполненные работы и удовлетворенность клиентов",
    p1: "Каждый portfolio item показывает решенную проблему, выполненный объем и, если можно поделиться, customer feedback. Цель — объяснить, как была выполнена работа, а не просто показать визуальную ссылку.",
    p2: "В некоторых проектах имя клиента, screenshots или технические детали могут быть ограничены из-за разрешений и privacy. В таких случаях объем и результат объясняются более общими формулировками.",
    result: "Результат",
    fallback: "Завершенная реальная клиентская работа.",
    inspect: "Изучить проект",
    testimonials: "Отзывы клиентов",
    testimonialsIntro: "Отзывы ниже получены из завершенных работ. Когда это возможно, каждый отзыв связан с соответствующим portfolio project.",
    score: "Оценка",
    related: "Смотреть связанную работу",
  },
  pt: {
    eyebrow: "Trabalhos concluídos",
    title: "Portfólio, projetos concluídos e",
    muted: "satisfação do cliente",
    intro: "Esta página reúne trabalhos reais de clientes, resultados de projeto e avaliações. Os detalhes aparecem abertamente ou de forma anônima conforme permissão e privacidade.",
    rating: "avaliação média",
    reviews: "avaliações de clientes",
    completed: "trabalhos concluídos",
    blockTitle: "Trabalhos realizados e satisfação do cliente",
    p1: "Cada item do portfólio mostra o problema tratado, o escopo entregue e, quando pode ser compartilhado, o feedback do cliente. O objetivo é explicar como o trabalho foi conduzido, não apenas mostrar uma referência visual.",
    p2: "Em alguns projetos, nome do cliente, capturas ou detalhes técnicos podem ser limitados por permissão e privacidade. Nesses casos, escopo e resultado são explicados de forma mais geral.",
    result: "Resultado",
    fallback: "Trabalho real de cliente concluído.",
    inspect: "Revisar projeto",
    testimonials: "Avaliações de clientes",
    testimonialsIntro: "As avaliações abaixo vêm de trabalhos concluídos. Quando possível, cada avaliação é conectada ao projeto de portfólio correspondente.",
    score: "Avaliação",
    related: "Ver trabalho relacionado",
  },
  nl: {
    eyebrow: "Afgerond werk",
    title: "Portfolio, afgeronde projecten en",
    muted: "klanttevredenheid",
    intro: "Deze pagina brengt afgeronde klantprojecten, projectresultaten en klantbeoordelingen samen. Details worden open of anoniem getoond afhankelijk van toestemming en privacy.",
    rating: "gemiddelde beoordeling",
    reviews: "klantbeoordelingen",
    completed: "afgeronde werken",
    blockTitle: "Afgerond werk en klanttevredenheid",
    p1: "Elk portfolio-item toont het opgeloste probleem, de geleverde scope en waar mogelijk de klantfeedback. Het doel is niet alleen visueel bewijs tonen, maar ook uitleggen hoe het werk is aangepakt.",
    p2: "Bij sommige projecten kunnen klantnaam, schermafbeeldingen of technische details beperkt gedeeld worden vanwege toestemming en privacy. In die gevallen worden scope en resultaat algemener uitgelegd.",
    result: "Resultaat",
    fallback: "Afgerond echt klantproject.",
    inspect: "Project bekijken",
    testimonials: "Klantbeoordelingen",
    testimonialsIntro: "De beoordelingen hieronder komen uit afgerond werk. Waar mogelijk is elke beoordeling gekoppeld aan het bijbehorende portfolioproject.",
    score: "Beoordeling",
    related: "Bekijk gerelateerd werk",
  },
};

export default function PortfolioPageView() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const text = locale === "en" ? copy.en : locale === "de" ? copy.de : locale === "fr" ? copy.fr : locale === "es" ? copy.es : locale === "ar" ? copy.ar : locale === "ru" ? copy.ru : locale === "pt" ? copy.pt : locale === "nl" ? copy.nl : copy.tr;
  const localizedProjects = getLocalizedProjects(projectsData, locale);
  const localizedTestimonials = getLocalizedTestimonials(locale);
  const clientProjects = localizedProjects.filter((project) => getProjectMeta(project.slug).projectKind === "client");

  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{text.eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          {text.title} <span className="text-gray-500">{text.muted}</span>
        </h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{text.intro}</p>
      </RevealItem>

      <RevealItem className="mb-10 grid grid-cols-3 gap-3 md:gap-5">
        <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
          <div className="flex justify-center"><RatingStars rating={bionlukStats.rating} /></div>
          <p className="mt-2 text-xs md:text-sm text-gray-500">{text.rating}</p>
        </div>
        <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
          <p className="text-3xl md:text-5xl font-light">{bionlukStats.reviewCount}</p>
          <p className="mt-2 text-xs md:text-sm text-gray-500">{text.reviews}</p>
        </div>
        <div className="border border-white/10 bg-[#071225]/70 p-5 text-center">
          <p className="text-3xl md:text-5xl font-light">{bionlukStats.completedOrders}</p>
          <p className="mt-2 text-xs md:text-sm text-gray-500">{text.completed}</p>
        </div>
      </RevealItem>

      <RevealItem className="mb-8 border border-white/10 bg-[#071225]/65 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-medium text-white">{text.blockTitle}</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{text.p1}</p>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{text.p2}</p>
      </RevealItem>

      <RevealItem className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {clientProjects.map((project) => {
          const meta = getLocalizedProjectMeta(project.slug, locale);

          return (
            <div key={project.slug} className="portfolio-card relative overflow-hidden border border-white/10 bg-[#071225]/88 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
              <h2 className="mt-3 text-2xl font-medium text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-gray-400">{project.shortDesc}</p>
              <div className="mt-5 border-t border-white/10 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">{text.result}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-500">{meta.result ?? text.fallback}</p>
              </div>
              <LocalizedLink href={`/projects/${project.slug}`} className="shimmer-button mt-6 inline-block bg-white px-5 py-2.5 text-sm font-bold text-black">
                {text.inspect}
              </LocalizedLink>
            </div>
          );
        })}
      </RevealItem>

      <RevealItem className="mt-12 border-t border-white/10 pt-10">
        <h2 className="text-2xl md:text-3xl font-medium text-white">{text.testimonials}</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{text.testimonialsIntro}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {localizedTestimonials.map((testimonial) => (
            <div key={testimonial.slug} className="border border-white/10 bg-[#071225]/70 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-white">{testimonial.displayName}</h3>
                  <p className="mt-1 text-xs text-gray-500">{testimonial.projectType}</p>
                </div>
                <RatingStars rating={testimonial.rating} label={text.score} />
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-400">{testimonial.text}</p>
              {testimonial.relatedProject && (
                <LocalizedLink href={`/projects/${testimonial.relatedProject}`} className="mt-5 inline-block border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10">
                  {text.related}
                </LocalizedLink>
              )}
            </div>
          ))}
        </div>
      </RevealItem>
    </PageReveal>
  );
}
