import JsonLd from "@/components/seo/JsonLd";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { faqJsonLd } from "@/lib/seo";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";
import { getServerLocale } from "@/lib/server-locale";

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/faq" });
}

export default async function FaqPage() {
  const locale = await getServerLocale();
  const page = getTrustPage("faq", locale);
  const faqItems = page.sections?.map((section) => ({ question: section.heading, answer: section.body.join(" ") })) ?? [];

  return (
    <>
      {faqItems.length > 0 && <JsonLd data={faqJsonLd(faqItems)} />}
      <TrustPageView page={page} />
    </>
  );
}
