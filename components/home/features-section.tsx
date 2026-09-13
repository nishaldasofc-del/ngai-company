"use client"

import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { 
  Gauge, 
  Lock, 
  Globe, 
  GitBranch, 
  BarChart3, 
  Sparkles,
  Clock,
  Server,
  Users
} from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Sub-millisecond Latency",
    description: "Optimized inference pipelines deliver responses in under 10ms for real-time applications.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, RBAC, and audit logging.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Deploy models to 50+ edge locations worldwide for minimal latency anywhere.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git-like versioning for models with rollback, branching, and collaboration features.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, costs, and usage with detailed dashboards and alerts.",
  },
  {
    icon: Sparkles,
    title: "Auto-scaling",
    description: "Automatically scale from zero to millions of requests without configuration.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Enterprise SLA guarantees with multi-region redundancy and failover.",
  },
  {
    icon: Server,
    title: "Hybrid Deployment",
    description: "Run on our cloud, your VPC, or on-premises with consistent APIs.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools with roles, permissions, and shared workspaces.",
  },
]

export function FeaturesSection() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Built for serious AI workloads
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every feature designed with enterprise requirements in mind. 
            From compliance to performance, we've got you covered.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border/50 mb-4 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
