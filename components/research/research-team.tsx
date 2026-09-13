'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';

const researchers = [
  { name: 'Dr. Sarah Chen', role: 'Chief Research Officer', specialty: 'Transformer Models' },
  { name: 'Dr. James Wilson', role: 'Senior Researcher', specialty: 'Multimodal Learning' },
  { name: 'Dr. Elena Rodriguez', role: 'Safety & Alignment Lead', specialty: 'AI Safety' },
  { name: 'Dr. Kenji Yamamoto', role: 'Senior Researcher', specialty: 'Computer Vision' },
  { name: 'Dr. Aisha Patel', role: 'Research Scientist', specialty: 'NLP & Understanding' },
  { name: 'Dr. Marcus Johnson', role: 'Research Scientist', specialty: 'Optimization' },
];

export function ResearchTeam() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Research Team</h2>
        <p className="text-xl text-muted-foreground">
          Leading experts driving innovation in artificial intelligence
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchers.map((researcher, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/50 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-1">{researcher.name}</h3>
            <p className="text-sm text-accent mb-2">{researcher.role}</p>
            <p className="text-sm text-muted-foreground">{researcher.specialty}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
