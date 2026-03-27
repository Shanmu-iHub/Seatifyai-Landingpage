import Navbar from "@/components/landing/Navbar";
import NewHero from "@/components/landing/NewHero";
import WhatIsSection from "@/components/landing/WhatIsSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import EntryPathsSection from "@/components/landing/EntryPathsSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />
      <NewHero />
      <WhatIsSection />
      <ProblemsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <EntryPathsSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
