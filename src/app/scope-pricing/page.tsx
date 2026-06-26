import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("scope-pricing");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/scope-pricing",
});

export default function ScopePricingPage() {
  return <TrustPageView page={page} />;
}
