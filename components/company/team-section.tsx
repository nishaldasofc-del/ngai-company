'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';

const departments = [
  {
    name: 'Research',
    count: '120+',
    description: 'Advancing the frontiers of AI science and development',
  },
  {
    name: 'Engineering',
    count: '150+',
    description: 'Building scalable, robust systems for global scale',
  },
  {
    name: 'Product',
    count: '60+',
    description: 'Crafting intuitive experiences for our users',
  },
  {
    name: 'Safety & Policy',
    count: '40+',
    description: 'Ensuring responsible AI development and deployment',
  },
  {
    name: 'Sales & Support',
    count: '80+',
    description: 'Helping customers succeed with our platform',
  },
  {
    name: 'Finance & Operations',
    count: '50+',
    description: 'Supporting sustainable business growth',
  },
];

export function TeamSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-xl text-muted-foreground">
          Talented individuals from around the world working together
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all"
          >
            <p className="text-3xl font-bold text-accent mb-2">{dept.count}</p>
            <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
            <p className="text-muted-foreground">{dept.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
