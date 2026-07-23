import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("privacy");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/privacy" });
}

export default function PrivacyPage() {
  return <TrustPageView page={page} />;
}
