"use client"

import { motion } from "framer-motion"
import { Shield, Users, Headphones, Lock, Server, FileCheck } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "SOC 2 Type II certified with enterprise-grade encryption and access controls",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Role-based access control, SSO integration, and centralized billing",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Dedicated account manager and 24/7 technical support with guaranteed SLAs",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR compliant with data residency options and zero data retention",
  },
  {
    icon: Server,
    title: "Private Deployment",
    description: "Deploy on your own infrastructure with VPC peering and private endpoints",
  },
  {
    icon: FileCheck,
    title: "SLA Guarantee",
    description: "99.99% uptime guarantee with financial credits for any downtime",
  },
]

export function ProductEnterprise() {
  return (
    <SectionWrapper className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Enterprise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Built for the Enterprise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Security, compliance, and support features designed for large-scale deployments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
