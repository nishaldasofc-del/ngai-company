"use client"

import { motion } from "framer-motion"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { 
  Cloud, 
  Database, 
  Cpu, 
  Shield, 
  Zap,
  ArrowDown,
  ArrowRight
} from "lucide-react"

export function ArchitectureSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Architecture
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Built on proven infrastructure
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A multi-layered architecture designed for reliability, performance, and security at every level.
          </p>
        </FadeIn>

        {/* Architecture Diagram */}
        <FadeIn delay={0.2}>
          <div className="mt-16 relative">
            {/* Diagram container */}
            <div className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/30">
              
              {/* Layer 1: Client Applications */}
              <div className="mb-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Application Layer
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Web Apps", "Mobile Apps", "IoT Devices", "APIs"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
              </div>

              {/* Layer 2: NGAI Gateway */}
              <div className="mb-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  NGAI Gateway
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ArchBlock icon={Shield} title="Authentication" description="OAuth 2.0 / API Keys" />
                  <ArchBlock icon={Zap} title="Rate Limiting" description="Adaptive throttling" />
                  <ArchBlock icon={Cloud} title="Load Balancing" description="Global distribution" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
              </div>

              {/* Layer 3: Core Services */}
              <div className="mb-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Core Services
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-foreground/5 border border-foreground/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                        <Cpu className="h-5 w-5 text-background" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Inference Engine</h4>
                        <p className="text-xs text-muted-foreground">NGAI Core Runtime</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="text-center p-2 rounded-lg bg-secondary/50">
                        <p className="text-lg font-semibold text-foreground">&lt;10ms</p>
                        <p className="text-xs text-muted-foreground">Latency</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-secondary/50">
                        <p className="text-lg font-semibold text-foreground">10M+</p>
                        <p className="text-xs text-muted-foreground">RPS</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Database className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Model Registry</h4>
                        <p className="text-xs text-muted-foreground">Versioned storage</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["LLMs", "Vision", "Audio", "Custom"].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
              </div>

              {/* Layer 4: Infrastructure */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Infrastructure
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 p-6 rounded-xl bg-secondary/20 border border-border/30">
                  {[
                    { region: "US-East", status: "active" },
                    { region: "US-West", status: "active" },
                    { region: "EU-West", status: "active" },
                    { region: "APAC", status: "active" },
                  ].map((node, i) => (
                    <div key={node.region} className="flex items-center gap-2">
                      {i > 0 && <ArrowRight className="h-4 w-4 text-muted-foreground/30 hidden md:block" />}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm text-foreground">{node.region}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}

function ArchBlock({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: typeof Shield
  title: string
  description: string 
}) {
  return (
    <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
