import type { Metadata } from "next";
import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { pageMetadata } from "@/lib/seo";

const page = getTrustPage("maintenance-packages");

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: "/maintenance-packages",
});

export default function MaintenancePackagesPage() {
  return <TrustPageView page={page} />;
}
