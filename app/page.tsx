import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustedSection } from "@/components/home/trusted-section"
import { PlatformSection } from "@/components/home/platform-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ArchitectureSection } from "@/components/home/architecture-section"
import { UseCasesSection } from "@/components/home/use-cases-section"
import { MetricsSection } from "@/components/home/metrics-section"
import { DevelopersSection } from "@/components/home/developers-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <PlatformSection />
      <FeaturesSection />
      <ArchitectureSection />
      <UseCasesSection />
      <MetricsSection />
      <DevelopersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
