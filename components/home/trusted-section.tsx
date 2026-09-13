"use client"

import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { LogoMarquee } from "@/components/logo-marquee"

export function TrustedSection() {
  return (
    <SectionWrapper className="py-12 md:py-16 border-y border-border/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by innovative teams at
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <LogoMarquee />
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
