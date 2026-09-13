"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Developer",
    description: "For individuals and small projects",
    price: "Free",
    period: "",
    features: [
      "1,000 API calls/month",
      "Access to base models",
      "Community support",
      "Standard rate limits",
      "Public documentation"
    ],
    cta: "Get Started",
    href: "/contact",
    featured: false
  },
  {
    name: "Pro",
    description: "For growing teams and applications",
    price: "$99",
    period: "/month",
    features: [
      "100,000 API calls/month",
      "Access to all models",
      "Priority support",
      "Higher rate limits",
      "Advanced analytics",
      "Custom fine-tuning"
    ],
    cta: "Start Free Trial",
    href: "/contact",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large-scale deployments",
    price: "Custom",
    period: "",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Custom SLAs",
      "Private deployment options",
      "Advanced security features",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    href: "/contact",
    featured: false
  }
]

export function ProductsPricing() {
  return (
    <SectionWrapper className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider text-muted-foreground mb-4 block"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Start for free, scale as you grow. No hidden fees.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.featured 
                  ? "border-accent bg-accent/5" 
                  : "border-border/50 bg-card/30"
              } flex flex-col`}
            >
              {plan.featured && (
                <span className="text-xs uppercase tracking-wider text-accent mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-medium">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                variant={plan.featured ? "default" : "outline"}
                className={`w-full group ${
                  plan.featured 
                    ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                    : ""
                }`}
              >
                <Link href={plan.href}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
