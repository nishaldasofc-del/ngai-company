'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Book, Zap, Shield, Layers } from 'lucide-react';

const docs = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Quick setup guide to integrate NGAI into your application in minutes.',
  },
  {
    icon: Zap,
    title: 'API Basics',
    description: 'Learn core API concepts, authentication, and how to make your first request.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Best practices for API key management, rate limiting, and data protection.',
  },
  {
    icon: Layers,
    title: 'Advanced Features',
    description: 'Explore advanced capabilities like custom models, fine-tuning, and webhooks.',
  },
];

export function DocumentationSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Documentation</h2>
        <p className="text-xl text-muted-foreground">
          Comprehensive guides and references for every aspect of the NGAI platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {docs.map((doc, index) => {
          const Icon = doc.icon;
          return (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border hover:border-accent/50 transition-colors bg-muted/20"
            >
              <Icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{doc.title}</h3>
              <p className="text-muted-foreground">{doc.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
