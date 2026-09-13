"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Zap, Shield, Layers } from "lucide-react"
import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const platformCards = [
  {
    icon: Cpu,
    title: "NGAI Core",
    description: "High-performance inference engine with sub-millisecond latency. Optimized for production workloads at any scale.",
    href: "/products#core",
    highlight: true,
  },
  {
    icon: Zap,
    title: "NGAI Studio",
    description: "Visual development environment for building, testing, and iterating on AI applications without code.",
    href: "/products#studio",
    highlight: false,
  },
  {
    icon: Shield,
    title: "NGAI API",
    description: "RESTful and GraphQL APIs with comprehensive SDKs for seamless integration into your existing stack.",
    href: "/products#api",
    highlight: false,
  },
  {
    icon: Layers,
    title: "NGAI Enterprise",
    description: "Dedicated infrastructure with custom SLAs, advanced security features, and 24/7 premium support.",
    href: "/products#enterprise",
    highlight: false,
  },
]

export function PlatformSection() {
  return (
    <SectionWrapper id="platform">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Everything you need to build AI at scale
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A complete platform designed from the ground up for enterprise AI workloads. 
            From development to deployment, we handle the complexity so you can focus on innovation.
          </p>
        </FadeIn>

        {/* Platform Cards Grid */}
        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
          {platformCards.map((card) => (
            <StaggerItem key={card.title}>
              <Link href={card.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all duration-300",
                    card.highlight && "ring-1 ring-foreground/10"
                  )}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-6">
                    <card.icon className="h-6 w-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>

                  {card.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View all link */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Explore the full platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
