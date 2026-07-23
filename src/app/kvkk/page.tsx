import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("kvkk");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/kvkk" });
}

export default function KvkkPage() {
  return <TrustPageView page={page} />;
}
