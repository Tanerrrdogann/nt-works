import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("cookies");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/cookies",
});

export default function CookiesPage() {
  return <TrustPageView page={page} />;
}
