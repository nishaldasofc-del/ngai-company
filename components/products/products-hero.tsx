"use client"

import { motion } from "framer-motion"

export function ProductsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Products
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Tools for every stage of your AI journey
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            From experimentation to production, our products work together to help you build and deploy AI at any scale.
          </p>
        </motion.div>

        {/* Quick nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            { name: "Core", href: "#core" },
            { name: "Studio", href: "#studio" },
            { name: "API", href: "#api" },
            { name: "Enterprise", href: "#enterprise" },
            { name: "Pricing", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
