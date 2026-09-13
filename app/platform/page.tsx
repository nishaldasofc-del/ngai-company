import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlatformHero } from "@/components/platform/platform-hero"
import { PlatformOverview } from "@/components/platform/platform-overview"
import { PlatformCapabilities } from "@/components/platform/platform-capabilities"
import { PlatformSecurity } from "@/components/platform/platform-security"
import { PlatformIntegrations } from "@/components/platform/platform-integrations"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Platform - NGAI",
  description: "Explore the NGAI platform - enterprise-grade AI infrastructure designed for performance, security, and scale.",
}

export default function PlatformPage() {
  return (
    <main>
      <Navbar />
      <PlatformHero />
      <PlatformOverview />
      <PlatformCapabilities />
      <PlatformSecurity />
      <PlatformIntegrations />
      <CTASection />
      <Footer />
    </main>
  )
}
