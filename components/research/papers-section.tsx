'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { FileText, Download } from 'lucide-react';

const papers = [
  {
    title: 'Neural Architecture Search for Efficiency',
    category: 'Architecture',
  },
  {
    title: 'Transformers Explained: A Complete Guide',
    category: 'Foundations',
  },
  {
    title: 'Few-shot Learning in Language Models',
    category: 'Learning',
  },
  {
    title: 'Constitutional AI: Harmlessness by Design',
    category: 'Safety',
  },
  {
    title: 'Emergent Abilities in Large Models',
    category: 'Capabilities',
  },
  {
    title: 'Prompt Engineering Best Practices',
    category: 'Practical',
  },
];

export function PapersSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured Papers</h2>
        <p className="text-xl text-muted-foreground">
          Deep dives into AI research topics and methodologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map((paper, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer group flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-8 h-8 text-accent" />
              <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors flex-grow">
              {paper.title}
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium w-fit">
              {paper.category}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
