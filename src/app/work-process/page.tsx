import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("work-process");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/work-process" });
}

export default function WorkProcessPage() {
  return <TrustPageView page={page} />;
}
