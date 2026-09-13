'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Users, MessageCircle, Lightbulb, TrendingUp } from 'lucide-react';

const community = [
  {
    icon: Users,
    title: 'Developer Community',
    description: 'Join thousands of developers building with NGAI',
  },
  {
    icon: MessageCircle,
    title: 'Discord Server',
    description: 'Real-time chat with other developers and our team',
  },
  {
    icon: Lightbulb,
    title: 'Ideas & Feedback',
    description: 'Shape the future of NGAI with your suggestions',
  },
  {
    icon: TrendingUp,
    title: 'Showcase',
    description: 'Feature your projects and get recognized',
  },
];

export function CommunitySection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Community</h2>
        <p className="text-xl text-muted-foreground">
          Connect with developers, share knowledge, and grow together
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {community.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer"
            >
              <Icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <button type="button" className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold">
          Join Our Community
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
