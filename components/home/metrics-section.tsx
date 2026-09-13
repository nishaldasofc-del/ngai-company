"use client"

import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { AnimatedCounter } from "@/components/animated-counter"

const metrics = [
  {
    value: 10,
    suffix: "B+",
    label: "API Requests Daily",
    description: "Processed with 99.99% reliability"
  },
  {
    value: 500,
    suffix: "+",
    label: "Enterprise Customers",
    description: "Including 50+ Fortune 500 companies"
  },
  {
    value: 50,
    suffix: "+",
    label: "Edge Locations",
    description: "Global infrastructure for low latency"
  },
  {
    value: 8,
    suffix: "ms",
    prefix: "<",
    label: "Average Latency",
    description: "Industry-leading inference speed"
  },
]

export function MetricsSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Scale that speaks for itself
          </h2>
        </FadeIn>

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="text-center p-8 rounded-2xl bg-secondary/30 border border-border/30">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    target={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-lg font-medium text-foreground mb-2">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
