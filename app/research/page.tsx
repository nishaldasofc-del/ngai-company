'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ResearchHero } from '@/components/research/research-hero';
import { PublicationsSection } from '@/components/research/publications-section';
import { PapersSection } from '@/components/research/papers-section';
import { ResearchTeam } from '@/components/research/research-team';
import { CTASection } from '@/components/home/cta-section';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ResearchHero />
        <PublicationsSection />
        <PapersSection />
        <ResearchTeam />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
