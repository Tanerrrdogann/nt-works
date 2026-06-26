import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

const page = getTrustPage("faq");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(page.sections.map((section) => ({ question: section.heading, answer: section.body.join(" ") })))} />
      <TrustPageView page={page} />
    </>
  );
}
