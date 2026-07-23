"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";
import { getTrustPage, type TrustPage } from "@/data/trust-pages";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { useCurrentLocale } from "@/components/i18n/LocaleProvider";

export function MarkdownBody({ content }: { content: string }) {
  const lines = content.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    nodes.push(
      <p key={`p-${nodes.length}`} className="text-gray-400 leading-8">
        {paragraph.join(" ")}
      </p>
    );
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    nodes.push(
      <ul key={`ul-${nodes.length}`} className="list-disc space-y-2 pl-5 text-gray-400 leading-7">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line || line === "---") {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      nodes.push(
        <h3 key={`h3-${nodes.length}`} className="pt-3 text-xl font-semibold text-white">
          {line.replace(/^###\s+/, "")}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      nodes.push(
        <h2 key={`h2-${nodes.length}`} className="pt-8 text-2xl md:text-3xl font-medium text-white">
          {line.replace(/^##\s+/, "")}
        </h2>
      );
      return;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      nodes.push(
        <h2 key={`h1-${nodes.length}`} className="pt-8 text-2xl md:text-3xl font-medium text-white">
          {line.replace(/^#\s+/, "")}
        </h2>
      );
      return;
    }

    if (line.startsWith("* ") || line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      return;
    }

    flushList();
    paragraph.push(line);
  });

  flushParagraph();
  flushList();

  return <div className="space-y-5">{nodes}</div>;
}

export default function TrustPageView({ page }: { page: TrustPage }) {
  const locale = useCurrentLocale();
  const localizedPage = getTrustPage(page.slug, locale === "en" || locale === "de" || locale === "fr" || locale === "es" || locale === "ar" || locale === "ru" || locale === "pt" || locale === "it" || locale === "nl" || locale === "zh" ? locale : "tr");
  const ctaMap = {
    tr: {
      kicker: "NT Web Çözümleri",
      title: "Projenizi netleştirelim",
      desc: "Kapsam, teslim süresi ve uygun ilerleme şeklini konuşmak için proje ihtiyacınızı kısa şekilde yazabilirsiniz.",
      button: "Teklif Al",
    },
    en: {
      kicker: "NT Web Solutions",
      title: "Let’s clarify your project",
      desc: "You can briefly describe your project need so we can discuss scope, delivery timeline, and the right way forward.",
      button: "Get a Quote",
    },
    de: {
      kicker: "NT Web Solutions",
      title: "Lassen Sie uns Ihr Projekt klären",
      desc: "Beschreiben Sie kurz Ihren Projektbedarf, damit Umfang, Lieferzeit und der passende nächste Schritt besprochen werden können.",
      button: "Angebot anfragen",
    },
    fr: {
      kicker: "NT Web Solutions",
      title: "Clarifions votre projet",
      desc: "Décrivez brièvement votre besoin afin que nous puissions discuter du périmètre, du délai de livraison et de la bonne façon d'avancer.",
      button: "Demander un devis",
    },
    es: {
      kicker: "NT Web Solutions",
      title: "Aclaremos tu proyecto",
      desc: "Describe brevemente tu necesidad para que podamos hablar del alcance, el plazo de entrega y la mejor forma de avanzar.",
      button: "Solicitar propuesta",
    },
    ar: {
      kicker: "NT Web Solutions",
      title: "لنوضح مشروعك",
      desc: "يمكنك وصف حاجتك باختصار حتى نناقش النطاق ومدة التسليم والطريقة الأنسب للتقدم.",
      button: "اطلب عرضاً",
    },
    ru: {
      kicker: "NT Web Solutions",
      title: "Давайте уточним ваш проект",
      desc: "Кратко опишите потребность проекта, чтобы мы могли обсудить объем, сроки сдачи и подходящий способ движения дальше.",
      button: "Получить предложение",
    },
    pt: {
      kicker: "NT Web Solutions",
      title: "Vamos definir seu projeto",
      desc: "Descreva brevemente sua necessidade para discutirmos escopo, prazo de entrega e o melhor caminho para avançar.",
      button: "Solicitar proposta",
    },
    it: {
      kicker: "NT Web Solutions",
      title: "Definiamo il tuo progetto",
      desc: "Descrivi brevemente la tua esigenza così possiamo discutere ambito, tempi di consegna e il modo migliore per procedere.",
      button: "Richiedi un preventivo",
    },
    nl: {
      kicker: "NT Web Solutions",
      title: "Laten we je project verduidelijken",
      desc: "Beschrijf kort wat je nodig hebt, zodat we scope, oplevertijd en de juiste vervolgstap kunnen bespreken.",
      button: "Offerte aanvragen",
    },
    zh: {
      kicker: "NT Web Solutions",
      title: "一起明确您的项目",
      desc: "您可以简要说明项目需求，我们会一起讨论范围、交付周期和合适的推进方式。",
      button: "获取报价",
    },
  };
  const cta = locale === "en" ? ctaMap.en : locale === "de" ? ctaMap.de : locale === "fr" ? ctaMap.fr : locale === "es" ? ctaMap.es : locale === "ar" ? ctaMap.ar : locale === "ru" ? ctaMap.ru : locale === "pt" ? ctaMap.pt : locale === "it" ? ctaMap.it : locale === "nl" ? ctaMap.nl : locale === "zh" ? ctaMap.zh : ctaMap.tr;

  return (
    <main className="content-page pt-32 pb-24 px-6 text-white max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{cta.kicker}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">{localizedPage.title}</h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{localizedPage.description}</p>
      </div>

      {localizedPage.content ? (
        <div className="border border-white/10 bg-[#071225]/65 p-6 md:p-8">
          <MarkdownBody content={localizedPage.content} />
        </div>
      ) : (
      <div className="grid gap-5">
        {localizedPage.sections?.map((section) => (
          <div key={section.heading} className="border border-white/10 bg-[#071225]/65 p-6 md:p-8">
            <h2 className="text-2xl font-medium text-white">{section.heading}</h2>
            <div className="mt-5 space-y-4 text-gray-400 leading-8">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      )}

      <div className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl md:text-3xl font-medium text-white">{cta.title}</h2>
        <p className="mt-4 max-w-3xl text-gray-400 leading-8">
          {cta.desc}
        </p>
        <LocalizedLink href={`/contact?source=trust-page&topic=${page.slug}`} className="shimmer-button mt-6 inline-flex items-center gap-2 bg-white px-7 py-3 text-sm font-bold text-black">
          {cta.button} <ArrowRight size={16} />
        </LocalizedLink>
      </div>
    </main>
  );
}
