import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import DemoCenterPreview from "@/components/home/DemoCenterPreview";
import TechStackSection from "@/components/home/TechStackSection";
import ContactCTA from "@/components/home/ContactCTA";
import SalesSections from "@/components/home/SalesSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <DemoCenterPreview />
      <SalesSections />
      <TechStackSection />
      <ContactCTA />
    </>
  );
}
