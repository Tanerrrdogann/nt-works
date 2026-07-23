import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("cookies");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/cookies" });
}

export default function CookiesPage() {
  return <TrustPageView page={page} />;
}
