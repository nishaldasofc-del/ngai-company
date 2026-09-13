"use client"

import { SectionWrapper, FadeIn, StaggerChildren, StaggerItem } from "@/components/section-wrapper"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "NGAI has fundamentally changed how we approach AI development. The performance and reliability are unmatched.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
    avatar: "SC",
  },
  {
    quote: "We evaluated every major AI platform and NGAI was the clear winner for enterprise. The security features alone sold us.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "FinanceHub",
    avatar: "MR",
  },
  {
    quote: "The developer experience is incredible. Our team was productive within hours, not weeks.",
    author: "Emily Watson",
    role: "Lead Developer",
    company: "StartupXYZ",
    avatar: "EW",
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Loved by engineering teams
          </h2>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.1}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="flex flex-col h-full p-8 rounded-2xl bg-card border border-border/50">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-foreground leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  )
}
