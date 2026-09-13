'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';

export function MissionSection() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To develop safe, beneficial artificial intelligence that augments human capabilities and drives positive progress across all sectors of society. We believe AI should be accessible, transparent, and aligned with human values.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { label: 'Founded', value: '2020' },
            { label: 'Team Size', value: '500+' },
            { label: 'Global Presence', value: '15 Offices' },
          ].map((stat, index) => (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
