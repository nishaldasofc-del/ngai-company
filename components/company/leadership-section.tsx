'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Dr. Michael Zhang',
    role: 'CEO & Co-founder',
    background: 'PhD in Computer Science',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    background: 'Former VP Engineering at Tech Corp',
  },
  {
    name: 'Dr. David Brown',
    role: 'Chief Research Officer',
    background: 'Published researcher with 200+ papers',
  },
  {
    name: 'Jennifer Lee',
    role: 'Chief Product Officer',
    background: 'Led product at multiple unicorns',
  },
];

export function LeadershipSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
        <p className="text-xl text-muted-foreground">
          Visionary leaders shaping the future of AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all group text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-1">{leader.name}</h3>
            <p className="text-sm text-accent mb-3">{leader.role}</p>
            <p className="text-xs text-muted-foreground mb-4">{leader.background}</p>
            <Linkedin className="w-4 h-4 mx-auto text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
