'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';

export function ContactHero() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-balance">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground">
          Have questions or want to discuss a partnership? We'd love to hear from you.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
