'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CompanyHero } from '@/components/company/company-hero';
import { MissionSection } from '@/components/company/mission-section';
import { ValuesSection } from '@/components/company/values-section';
import { TeamSection } from '@/components/company/team-section';
import { LeadershipSection } from '@/components/company/leadership-section';
import { CTASection } from '@/components/home/cta-section';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CompanyHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <LeadershipSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
