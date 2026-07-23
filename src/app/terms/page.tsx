import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("terms");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/terms" });
}

export default function TermsPage() {
  return <TrustPageView page={page} />;
}
