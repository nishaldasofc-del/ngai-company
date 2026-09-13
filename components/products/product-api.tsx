"use client"

import Link from "next/link"
import { SectionWrapper, FadeIn } from "@/components/section-wrapper"
import { Code2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  { name: "Python", icon: "Py" },
  { name: "Node.js", icon: "JS" },
  { name: "Go", icon: "Go" },
  { name: "Ruby", icon: "Rb" },
  { name: "Java", icon: "Ja" },
  { name: "Rust", icon: "Rs" },
]

export function ProductAPI() {
  return (
    <SectionWrapper id="api">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 mb-6">
              <Code2 className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">NGAI API</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Built for developers
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Comprehensive APIs and SDKs that make integration seamless. 
              RESTful endpoints, GraphQL queries, and real-time streaming—all with excellent developer experience.
            </p>

            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-4">Official SDKs</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/30"
                  >
                    <span className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-xs font-mono text-foreground">
                      {lang.icon}
                    </span>
                    <span className="text-sm text-foreground">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "OpenAPI specification for code generation",
                "Interactive API playground",
                "Webhook support for async workflows",
                "Comprehensive error handling",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4">
              <Link href="/developers">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/developers#api">
                <Button variant="outline" className="border-border/50">
                  API Reference
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Right: Code example */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl bg-[#0a0a0a] border border-border/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-xs text-muted-foreground">example.py</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code className="text-foreground/90">
{`from ngai import Client

# Initialize the client
client = Client(api_key="...")

# Generate text
response = client.generate(
    model="ngai-large",
    messages=[{
        "role": "user",
        "content": "Hello, world!"
    }],
    stream=True
)

# Stream the response
for chunk in response:
    print(chunk.text, end="")`}
                  </code>
                </pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
