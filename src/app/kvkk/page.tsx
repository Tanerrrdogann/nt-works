import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("kvkk");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/kvkk",
});

export default function KvkkPage() {
  return <TrustPageView page={page} />;
}
