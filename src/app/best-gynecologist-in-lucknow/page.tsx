import { HeroSection } from "@/components/landing/HeroSection";
import { InfoStrip } from "@/components/landing/InfoStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
// import { BlogSection } from "@/components/landing/BlogSection";
import { FaqMapSection } from "@/components/landing/FaqMapSection";

export const metadata = {
  title: "Best Gynecologist in Sushant Golf City, Lucknow | June Women's Health",
  description: "Consult Dr. Shamim Sultana Yashine (MS - Obstetrician & Gynaecologist, Laparoscopic Surgeon) with 10+ years experience at June Women's Health, Felix Square, Sushant Golf City, Lucknow. Specializing in normal delivery, pregnancy care, PCOD/PCOS treatment, & IUI/IVF care. Book an appointment today.",
  alternates: {
    canonical: "/best-gynecologist-in-lucknow/",
  },
};

export default function GynecologistLandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <InfoStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        {/* <BlogSection /> */}
        <TestimonialsSection />
        <FaqMapSection />
      </main>
    </>
  );
}
