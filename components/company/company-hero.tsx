'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Briefcase } from 'lucide-react';

export function CompanyHero() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-balance">
              About NGAI
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the future of artificial intelligence with a mission to create safe, beneficial AI that empowers humanity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="button" className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold">
              Our Story
            </button>
            <button type="button" className="px-8 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-semibold">
              Join Our Team
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-lg overflow-hidden border border-border bg-muted/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Briefcase className="w-24 h-24 text-muted-foreground/30" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
