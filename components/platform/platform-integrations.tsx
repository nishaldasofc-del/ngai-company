"use client"

import { SectionWrapper, FadeIn } from "@/components/section-wrapper"

const integrations = {
  cloud: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare"],
  data: ["Snowflake", "Databricks", "BigQuery", "Redshift", "PostgreSQL"],
  tools: ["Slack", "Jira", "GitHub", "Notion", "Linear"],
  monitoring: ["Datadog", "Grafana", "PagerDuty", "Splunk", "New Relic"],
}

export function PlatformIntegrations() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Integrations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Works with your stack
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            NGAI integrates seamlessly with your existing tools and infrastructure. 
            No rip and replace—just add AI capabilities where you need them.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(integrations).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {category === "cloud" ? "Cloud Providers" : 
                   category === "data" ? "Data Platforms" :
                   category === "tools" ? "Productivity" : "Monitoring"}
                </p>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/30"
                    >
                      <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                        {item.slice(0, 2)}
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your tool?{" "}
            <a href="/contact" className="text-foreground underline underline-offset-4 hover:no-underline">
              Let us know
            </a>{" "}
            and we'll add it.
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
