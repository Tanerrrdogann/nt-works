import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("scope-pricing");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/scope-pricing" });
}

export default function ScopePricingPage() {
  return <TrustPageView page={page} />;
}
