import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("privacy");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <TrustPageView page={page} />;
}
