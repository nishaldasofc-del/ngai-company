"use client"

import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does NGAI pricing work?",
    answer: "NGAI offers flexible pricing based on usage. We have a free tier for experimentation, pay-as-you-go for growing teams, and custom enterprise plans for large organizations. All plans include access to our full platform with usage-based billing for compute.",
  },
  {
    question: "What security certifications does NGAI have?",
    answer: "NGAI is SOC 2 Type II certified, GDPR compliant, and HIPAA eligible. We also offer additional security features for enterprise customers including dedicated infrastructure, custom data retention policies, and advanced audit logging.",
  },
  {
    question: "Can I bring my own models to NGAI?",
    answer: "Yes, NGAI supports custom model deployment. You can bring your own fine-tuned models or train new models on our infrastructure. We support all major frameworks including PyTorch, TensorFlow, and JAX.",
  },
  {
    question: "What's the difference between NGAI Core and NGAI Studio?",
    answer: "NGAI Core is our high-performance inference engine designed for production workloads. NGAI Studio is a visual development environment for building and testing AI applications without code. Both integrate seamlessly.",
  },
  {
    question: "How do I migrate from another AI provider?",
    answer: "We provide migration tools and dedicated support for transitioning from other platforms. Our API is designed to be familiar if you've used other AI services, and our team can help ensure a smooth transition.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include access to our documentation and community forums. Paid plans include email support with guaranteed response times. Enterprise plans include dedicated support engineers, 24/7 availability, and custom SLAs.",
  },
]

export function FAQSection() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
