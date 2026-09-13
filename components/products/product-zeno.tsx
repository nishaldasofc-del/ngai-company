"use client"

import { motion } from "framer-motion"
import { MessageSquare, Sparkles, Zap, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage in fluid, context-aware conversations that feel genuinely human.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Responses",
    description: "Powered by advanced AI to understand nuance and provide helpful answers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time responses with minimal latency for seamless interactions.",
  },
  {
    icon: Globe,
    title: "Always Available",
    description: "24/7 availability to assist users whenever they need help.",
  },
]

export function ProductZeno() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svgviewer-png-output-S2aNUwykFU4oFQHLelSTuockxnX6X1.png"
                  alt="ZenoAI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-medium tracking-widest text-accent uppercase">
                  AI Chatbot
                </span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                  ZenoAI
                </h2>
              </div>
            </div>

            <p className="text-lg text-foreground/75 mb-8 leading-relaxed">
              Meet Zeno, your intelligent AI assistant. Built on NGAI's powerful infrastructure, 
              ZenoAI delivers natural, helpful conversations that understand context and provide 
              meaningful assistance for any task.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group"
            >
              <a href="https://zenoai-bot.vercel.app" target="_blank" rel="noopener noreferrer">
                Try Zeno
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
              {/* Chat Preview */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-accent/20 text-foreground rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
                    <p className="text-sm">How can AI help my business grow?</p>
                  </div>
                </div>

                {/* Zeno Response */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svgviewer-png-output-S2aNUwykFU4oFQHLelSTuockxnX6X1.png"
                      alt="Zeno"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Great question! AI can transform your business in several ways: automating repetitive tasks, 
                      providing 24/7 customer support, analyzing data for insights, and personalizing customer experiences. 
                      Would you like me to dive deeper into any of these areas?
                    </p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svgviewer-png-output-S2aNUwykFU4oFQHLelSTuockxnX6X1.png"
                      alt="Zeno"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-accent/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-accent/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-accent/60 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
