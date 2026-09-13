"use client"

import { motion } from "framer-motion"
import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { Cpu, Palette, Code2, Building2 } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    icon: Cpu,
    name: "NGAI Core",
    tagline: "Inference Engine",
    description: "High-performance inference engine optimized for production workloads. Sub-millisecond latency with automatic scaling.",
    features: ["<10ms latency", "Auto-scaling", "Multi-model support"],
    href: "/products#core",
  },
  {
    icon: Palette,
    name: "NGAI Studio",
    tagline: "Visual Development",
    description: "Build, test, and iterate on AI applications without code. Visual workflows for rapid prototyping.",
    features: ["No-code builder", "Real-time testing", "Team collaboration"],
    href: "/products#studio",
  },
  {
    icon: Code2,
    name: "NGAI API",
    tagline: "Developer Tools",
    description: "Comprehensive APIs and SDKs for seamless integration. RESTful, GraphQL, and streaming endpoints.",
    features: ["REST & GraphQL", "SDKs for 10+ languages", "Webhooks"],
    href: "/products#api",
  },
  {
    icon: Building2,
    name: "NGAI Enterprise",
    tagline: "Enterprise Solutions",
    description: "Dedicated infrastructure with custom SLAs. Advanced security and compliance features.",
    features: ["Dedicated instances", "Custom SLAs", "24/7 support"],
    href: "/products#enterprise",
  },
]

export function PlatformOverview() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Four products, one platform
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Each component designed to work seamlessly together, giving you complete control over your AI infrastructure.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <Link href={product.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {product.tagline}
                      </p>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
