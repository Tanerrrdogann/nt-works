import TrustPageView from "@/components/TrustPageView";
import { getTrustPage } from "@/data/trust-pages";
import { localizedTrustPageMetadata } from "@/lib/localized-metadata";

const page = getTrustPage("maintenance-packages");

export function generateMetadata() {
  return localizedTrustPageMetadata({ path: "/maintenance-packages" });
}

export default function MaintenancePackagesPage() {
  return <TrustPageView page={page} />;
}
