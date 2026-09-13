"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { ArrowRight, Building2, ShoppingCart, Stethoscope, Landmark, Truck, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const useCases = [
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise",
    company: "Fortune 500 Tech Company",
    stat: "85%",
    statLabel: "reduction in support tickets",
    description: "Deployed intelligent customer service agents that handle complex queries in real-time, reducing support costs while improving customer satisfaction scores by 40%.",
    quote: "NGAI transformed how we handle customer interactions at scale.",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    company: "Global Retail Platform",
    stat: "2.3x",
    statLabel: "increase in conversion",
    description: "Personalized product recommendations powered by NGAI increased average order value by 45% and reduced cart abandonment by 30%.",
    quote: "The AI recommendations feel genuinely helpful to our customers.",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    company: "Leading Health System",
    stat: "60%",
    statLabel: "faster diagnosis",
    description: "AI-assisted medical imaging analysis helps radiologists identify potential issues faster, improving patient outcomes while maintaining strict HIPAA compliance.",
    quote: "NGAI helps us deliver better care without compromising on security.",
  },
  {
    id: "finance",
    icon: Landmark,
    title: "Financial Services",
    company: "Top 10 Global Bank",
    stat: "$50M",
    statLabel: "fraud prevented annually",
    description: "Real-time transaction analysis detects and prevents fraudulent activity before it impacts customers, with sub-10ms response times for instant decisions.",
    quote: "The speed and accuracy of detection is unlike anything else.",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    company: "International Shipping Co.",
    stat: "35%",
    statLabel: "reduction in delivery times",
    description: "Intelligent route optimization and demand forecasting reduced operational costs by 25% while improving delivery reliability across all regions.",
    quote: "We can now promise and deliver faster than ever before.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    company: "Online Learning Platform",
    stat: "3x",
    statLabel: "improvement in completion rates",
    description: "Personalized learning paths adapt to each student's pace and style, resulting in dramatically improved engagement and course completion rates.",
    quote: "Every student now gets a truly personalized learning experience.",
  },
]

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(useCases[0])

  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Powering AI across industries
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            See how leading organizations are using NGAI to transform their operations and deliver exceptional results.
          </p>
        </FadeIn>

        {/* Use Cases Tabs */}
        <FadeIn delay={0.2}>
          <div className="mt-12">
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {useCases.map((useCase) => (
                <button
                  type="button"
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCase.id === useCase.id
                      ? "bg-foreground text-background"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <useCase.icon className="h-4 w-4" />
                  {useCase.title}
                </button>
              ))}
            </div>

            {/* Content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 gap-8 lg:gap-12"
              >
                {/* Stats and info */}
                <div className="p-8 rounded-2xl bg-card border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">{activeCase.company}</p>
                  <div className="mt-4">
                    <p className="text-5xl md:text-6xl font-bold text-foreground">{activeCase.stat}</p>
                    <p className="text-lg text-muted-foreground mt-2">{activeCase.statLabel}</p>
                  </div>
                  <p className="mt-8 text-muted-foreground leading-relaxed">
                    {activeCase.description}
                  </p>
                  <blockquote className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-foreground italic">&quot;{activeCase.quote}&quot;</p>
                  </blockquote>
                </div>

                {/* Visual representation */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-transparent border border-border/50 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-foreground mb-6">
                      <activeCase.icon className="h-10 w-10 text-background" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{activeCase.title}</h3>
                    <a
                      href={`/company#case-${activeCase.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Read case study
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
