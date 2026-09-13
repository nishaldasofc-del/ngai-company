'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Shield, Users, Lightbulb, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize AI safety and responsible development in everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open dialogue with the community.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous research and development to push the boundaries of AI capabilities.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in our research and products.',
  },
];

export function ValuesSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Values</h2>
        <p className="text-xl text-muted-foreground">
          Guiding principles that drive our decisions and culture
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all"
            >
              <Icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
