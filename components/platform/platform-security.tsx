"use client"

import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { Shield, Lock, Key, FileCheck, Eye, Server } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Independently audited security controls. Annual assessments ensure ongoing compliance.",
  },
  {
    icon: Lock,
    title: "End-to-end Encryption",
    description: "All data encrypted in transit and at rest. AES-256 encryption with customer-managed keys.",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Fine-grained RBAC with SSO integration. Support for SAML, OAuth, and OIDC.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "GDPR, HIPAA, and CCPA compliant. Data residency options for regulated industries.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all actions. Integrate with your SIEM for centralized monitoring.",
  },
  {
    icon: Server,
    title: "Private Deployment",
    description: "Deploy in your VPC or on-premises. Air-gapped options for maximum security.",
  },
]

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "CCPA",
  "FedRAMP (in progress)",
]

export function PlatformSecurity() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <FadeIn>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Security & Compliance
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Enterprise-grade security
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Security isn't an afterthought—it's built into every layer of our platform. 
              From infrastructure to application, we protect your data and your customers.
            </p>

            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-4">Certifications & Compliance</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Security features grid */}
          <StaggerChildren className="grid gap-6 sm:grid-cols-2" staggerDelay={0.08}>
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <feature.icon className="h-6 w-6 text-foreground mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionWrapper>
  )
}
