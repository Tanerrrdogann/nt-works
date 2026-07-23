import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("safe-bionluk");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/safe-bionluk" });
}

export default function SafeBionlukPage() {
  return <TrustPageView page={page} />;
}
