"use client"

import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { 
  Zap, 
  Globe, 
  GitBranch, 
  BarChart3, 
  Workflow,
  Database,
  Settings,
  Layers
} from "lucide-react"

const capabilities = [
  {
    icon: Zap,
    title: "Real-time Inference",
    description: "Process millions of requests per second with sub-millisecond latency. Optimized for both batch and streaming workloads.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Deploy models to 50+ edge locations worldwide. Automatic routing ensures users always hit the nearest endpoint.",
  },
  {
    icon: GitBranch,
    title: "Model Versioning",
    description: "Git-like versioning for all your models. Branch, merge, rollback, and A/B test with confidence.",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description: "Full visibility into model performance, costs, and usage. Custom dashboards and alerting built in.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Chain multiple models together with visual workflows. Build complex AI pipelines without code.",
  },
  {
    icon: Database,
    title: "Vector Storage",
    description: "Built-in vector database for RAG applications. Automatic indexing and retrieval at scale.",
  },
  {
    icon: Settings,
    title: "Fine-tuning",
    description: "Fine-tune foundation models on your data. Managed training infrastructure with automatic optimization.",
  },
  {
    icon: Layers,
    title: "Multi-modal Support",
    description: "Text, image, audio, and video models all on one platform. Unified API for all modalities.",
  },
]

export function PlatformCapabilities() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Everything you need to succeed with AI
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From inference to fine-tuning, from monitoring to deployment—all the tools you need in one integrated platform.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/50 mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <capability.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
