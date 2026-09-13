"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PlatformHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.92 0.01 85 / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.92 0.01 85 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Platform
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            The complete AI infrastructure platform
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Built from the ground up for enterprise AI workloads. Everything you need to build, 
            deploy, and scale intelligent applications with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/developers">
              <Button variant="outline" size="lg" className="h-12 px-8 border-border/50">
                View Documentation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
