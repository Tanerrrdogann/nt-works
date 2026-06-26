import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("safe-bionluk");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/safe-bionluk",
});

export default function SafeBionlukPage() {
  return <TrustPageView page={page} />;
}
