'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { OfficesSection } from '@/components/contact/offices-section';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 py-24">
          <ContactForm />
          <OfficesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
