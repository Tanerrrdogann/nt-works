import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("support");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/support",
});

export default function SupportPage() {
  return <TrustPageView page={page} />;
}
