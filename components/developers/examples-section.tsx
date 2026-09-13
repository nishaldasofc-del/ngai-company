'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Github } from 'lucide-react';

const examples = [
  {
    title: 'Chatbot Integration',
    description: 'Build an intelligent chatbot with multi-turn conversations',
    repo: 'ngai-chatbot-example',
  },
  {
    title: 'Content Generation',
    description: 'Generate blog posts, emails, and marketing copy automatically',
    repo: 'ngai-content-gen',
  },
  {
    title: 'Image Analysis',
    description: 'Process and analyze images with vision capabilities',
    repo: 'ngai-vision-example',
  },
  {
    title: 'Fine-tuning Pipeline',
    description: 'Create and deploy custom fine-tuned models',
    repo: 'ngai-finetune-pipeline',
  },
  {
    title: 'RAG Application',
    description: 'Build retrieval-augmented generation applications',
    repo: 'ngai-rag-example',
  },
  {
    title: 'Real-time Streaming',
    description: 'Implement streaming responses for real-time applications',
    repo: 'ngai-streaming-example',
  },
];

export function ExamplesSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Code Examples</h2>
        <p className="text-xl text-muted-foreground">
          Ready-to-use examples and starter projects from our community
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer group"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
              {example.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{example.description}</p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Github className="w-4 h-4" />
              {example.repo}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <button type="button" className="px-8 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors font-semibold">
          Browse All Examples on GitHub
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
