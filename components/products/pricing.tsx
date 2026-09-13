"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

const pricingPlans = [
  {
    name: "Developer",
    price: "Free",
    description: "Perfect for getting started and experimentation",
    features: [
      "1,000 API calls/month",
      "Community support",
      "Basic models access",
      "Standard rate limits",
      "Public documentation",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For teams building production applications",
    features: [
      "100,000 API calls/month",
      "Priority email support",
      "All models access",
      "Higher rate limits",
      "Analytics dashboard",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments with custom needs",
    features: [
      "Unlimited API calls",
      "24/7 dedicated support",
      "Custom model training",
      "No rate limits",
      "Advanced analytics",
      "SLA guarantee",
      "Private deployment",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export function ProductsPricing() {
  return (
    <SectionWrapper className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border ${
                plan.featured
                  ? "border-accent bg-card shadow-lg shadow-accent/10"
                  : "border-border/50 bg-card/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
