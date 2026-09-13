"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { ArrowRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const codeExamples = [
  {
    language: "Python",
    code: `from ngai import Client

client = Client(api_key="your-api-key")

response = client.generate(
    model="ngai-large",
    prompt="Explain quantum computing",
    max_tokens=500
)

print(response.text)`,
  },
  {
    language: "Node.js",
    code: `import { NGAI } from '@ngai/sdk';

const client = new NGAI({
  apiKey: process.env.NGAI_API_KEY
});

const response = await client.generate({
  model: 'ngai-large',
  prompt: 'Explain quantum computing',
  maxTokens: 500
});

console.log(response.text);`,
  },
  {
    language: "cURL",
    code: `curl -X POST https://api.ngai.com/v1/generate \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "ngai-large",
    "prompt": "Explain quantum computing",
    "max_tokens": 500
  }'`,
  },
]

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeIn>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              For Developers
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Start building in minutes
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Comprehensive SDKs, detailed documentation, and an intuitive API make integration seamless. 
              Go from idea to production faster than ever.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "SDKs for Python, Node.js, Go, and more",
                "OpenAPI specification for code generation",
                "Interactive API playground",
                "Webhook support for async workflows",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/developers">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/developers#quickstart">
                <Button variant="outline" className="border-border/50">
                  Quick Start Guide
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Right: Code example */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl bg-[#0a0a0a] border border-border/50 overflow-hidden">
              {/* Tab header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-secondary/10">
                <div className="flex gap-2">
                  {codeExamples.map((example, i) => (
                    <button
                      type="button"
                      key={example.language}
                      onClick={() => setActiveTab(i)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                        activeTab === i
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {example.language}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Code area */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="p-6 overflow-x-auto"
              >
                <pre className="text-sm font-mono">
                  <code className="text-foreground/90">
                    {codeExamples[activeTab].code}
                  </code>
                </pre>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
