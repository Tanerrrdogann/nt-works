import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("support");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/support" });
}

export default function SupportPage() {
  return <TrustPageView page={page} />;
}
