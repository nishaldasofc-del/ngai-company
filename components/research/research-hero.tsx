'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { BookOpen, ArrowRight } from 'lucide-react';

export function ResearchHero() {
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
              Advancing AI Research
            </h1>
            <p className="text-xl text-muted-foreground">
              Groundbreaking research publications and papers driving the future of AI technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button type="button" className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center gap-2 font-semibold">
              Read Our Papers
              <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" className="px-8 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-semibold">
              Latest Publications
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
            <BookOpen className="w-24 h-24 text-muted-foreground/30" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
