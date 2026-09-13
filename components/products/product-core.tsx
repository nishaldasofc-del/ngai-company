"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { Cpu, Zap, Globe, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "Sub-10ms Latency",
    description: "Optimized inference pipelines deliver lightning-fast responses for real-time applications.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "50+ edge locations ensure low latency for users anywhere in the world.",
  },
  {
    icon: BarChart3,
    title: "Auto-scaling",
    description: "Scale from zero to millions of requests automatically based on demand.",
  },
]

export function ProductCore() {
  return (
    <SectionWrapper id="core">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 mb-6">
              <Cpu className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">NGAI Core</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              The fastest inference engine
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Purpose-built for production workloads, NGAI Core delivers unprecedented performance 
              with automatic optimization and scaling. Run any model at any scale.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Get Started with Core
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Right: Visual */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                    <span className="text-sm text-muted-foreground">Latency</span>
                    <span className="text-sm font-mono text-foreground">8.2ms</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                    <span className="text-sm text-muted-foreground">Throughput</span>
                    <span className="text-sm font-mono text-foreground">12.4k req/s</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                    <span className="text-sm text-muted-foreground">Uptime</span>
                    <span className="text-sm font-mono text-green-500">99.99%</span>
                  </div>
                  
                  <motion.div
                    animate={{ width: ["0%", "100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="h-1 bg-foreground rounded-full"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
