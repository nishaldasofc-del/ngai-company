"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.92 0.01 85 / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.92 0.01 85 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-all duration-300 group"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Introducing NGAI Research Labs</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1]"
        >
          The infrastructure for
          <br />
          <span className="text-muted-foreground">next-generation AI</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Enterprise-grade AI platform that empowers teams to build, deploy, and scale 
          intelligent applications with unprecedented performance and reliability.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/platform">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border/50 hover:bg-secondary/50">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-foreground/70"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>99.99% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-foreground/50" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-foreground/50" />
            <span>GDPR Compliant</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
