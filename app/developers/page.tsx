'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { DevelopersHero } from '@/components/developers/developers-hero';
import { DocumentationSection } from '@/components/developers/documentation-section';
import { SDKsSection } from '@/components/developers/sdks-section';
import { ExamplesSection } from '@/components/developers/examples-section';
import { CommunitySection } from '@/components/developers/community-section';
import { CTASection } from '@/components/home/cta-section';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DevelopersHero />
        <DocumentationSection />
        <SDKsSection />
        <ExamplesSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
