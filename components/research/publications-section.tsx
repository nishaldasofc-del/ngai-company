'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Calendar, Users } from 'lucide-react';

const publications = [
  {
    title: 'Scaling Language Models with Attention Mechanisms',
    date: 'March 2024',
    authors: '12 Authors',
    citations: '234 Citations',
  },
  {
    title: 'Multimodal Learning: Vision and Language Integration',
    date: 'February 2024',
    authors: '8 Authors',
    citations: '189 Citations',
  },
  {
    title: 'Efficient Fine-tuning of Large Language Models',
    date: 'January 2024',
    authors: '10 Authors',
    citations: '156 Citations',
  },
  {
    title: 'Safety and Alignment in Neural Networks',
    date: 'December 2023',
    authors: '15 Authors',
    citations: '412 Citations',
  },
];

export function PublicationsSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Recent Publications</h2>
        <p className="text-xl text-muted-foreground">
          Latest research from our team and collaborators
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4 hover:text-accent transition-colors">
              {pub.title}
            </h3>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {pub.date}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {pub.authors}
              </div>
              <div className="text-accent font-semibold">{pub.citations}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
