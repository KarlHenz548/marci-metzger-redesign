import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import PropertySearchSection from "@/components/sections/PropertySearchSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <PropertySearchSection />
        <PropertiesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
