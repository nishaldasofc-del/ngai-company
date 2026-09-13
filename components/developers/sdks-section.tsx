'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';

const sdks = [
  {
    name: 'Python SDK',
    language: 'Python',
    description: 'Complete Python library for NGAI integration',
  },
  {
    name: 'JavaScript/TypeScript SDK',
    language: 'JS/TS',
    description: 'Official SDK for Node.js and browser environments',
  },
  {
    name: 'Go SDK',
    language: 'Go',
    description: 'High-performance Go client library',
  },
  {
    name: 'Java SDK',
    language: 'Java',
    description: 'Enterprise-ready Java SDK for NGAI',
  },
  {
    name: 'C# SDK',
    language: 'C#',
    description: '.NET compatible SDK for C# applications',
  },
  {
    name: 'REST API',
    language: 'HTTP',
    description: 'Direct REST API access without SDK dependency',
  },
];

export function SDKsSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">SDKs & Libraries</h2>
        <p className="text-xl text-muted-foreground">
          Official client libraries for all major programming languages
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdks.map((sdk, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 cursor-pointer hover:bg-muted/40 transition-all"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              {sdk.language}
            </div>
            <h3 className="text-lg font-semibold mb-2">{sdk.name}</h3>
            <p className="text-muted-foreground text-sm">{sdk.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
