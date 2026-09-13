'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const offices = [
  {
    region: 'North America',
    city: 'San Francisco',
    address: '123 AI Street, San Francisco, CA 94105',
    email: 'contact-sf@ngai.com',
    phone: '+1 (415) 555-0123',
  },
  {
    region: 'Europe',
    city: 'London',
    address: '456 Tech Avenue, London, UK EC1A 1BB',
    email: 'contact-london@ngai.com',
    phone: '+44 (20) 7946 0958',
  },
  {
    region: 'Asia Pacific',
    city: 'Tokyo',
    address: '789 Future Blvd, Tokyo, Japan 100-0005',
    email: 'contact-tokyo@ngai.com',
    phone: '+81 (3) 1234 5678',
  },
  {
    region: 'Asia Pacific',
    city: 'Singapore',
    address: '321 Innovation Way, Singapore 018956',
    email: 'contact-sg@ngai.com',
    phone: '+65 6655 1234',
  },
];

export function OfficesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold">Our Offices</h2>

      <div className="space-y-6">
        {offices.map((office, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border hover:border-accent/50 bg-muted/20 hover:bg-muted/40 transition-all"
          >
            <h3 className="text-lg font-semibold mb-1">{office.city}</h3>
            <p className="text-sm text-accent mb-4">{office.region}</p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>{office.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${office.email}`} className="hover:text-accent transition-colors">
                  {office.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`tel:${office.phone}`} className="hover:text-accent transition-colors">
                  {office.phone}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
