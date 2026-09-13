"use client"

import Link from "next/link"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { Palette, Wand2, Users, Repeat, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Wand2,
    title: "Visual Builder",
    description: "Drag-and-drop interface for building AI workflows without writing code.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together with your team on the same project simultaneously.",
  },
  {
    icon: Repeat,
    title: "Instant Testing",
    description: "Test your AI applications in real-time with built-in playground.",
  },
]

export function ProductStudio() {
  return (
    <SectionWrapper id="studio" className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                {/* Mock UI */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 h-10 rounded-lg bg-secondary/50 flex items-center px-4">
                    <span className="text-sm text-muted-foreground">Search components...</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                    <span className="text-background text-lg">+</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {["Input", "Process", "Output"].map((label) => (
                    <div key={label} className="p-4 rounded-lg bg-secondary/30 text-center">
                      <div className="w-8 h-8 rounded-md bg-secondary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-foreground/5 border border-foreground/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-foreground">Workflow running</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Last edited 2m ago</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 mb-6">
              <Palette className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">NGAI Studio</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Build AI visually
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              NGAI Studio lets anyone build powerful AI applications without writing code. 
              Design workflows visually, test instantly, and deploy with one click.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center">
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
                  Try Studio Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
