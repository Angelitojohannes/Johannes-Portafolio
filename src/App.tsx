import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ValuePropSection } from './components/sections/ValuePropSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { AboutSection } from './components/sections/AboutSection';
import { MaintenanceSection } from './components/sections/MaintenanceSection';
import { PricingSection } from './components/sections/PricingSection';
import { HostingSection } from './components/sections/HostingSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <MaintenanceSection />
        <PricingSection />
        <HostingSection />
        <ContactSection />
      </main>
      <Footer />
      <a
        href="https://wa.me/584124835420?text=Hola%20Johannes,%20quiero%20hacerte%20una%20consulta%20sobre%20un%20proyecto%20web"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tinta text-marfil shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
    </>
  );
};

export default App;