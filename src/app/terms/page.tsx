import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("terms");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/terms",
});

export default function TermsPage() {
  return <TrustPageView page={page} />;
}
