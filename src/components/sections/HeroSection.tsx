import React from 'react';
import { FlowingWaves } from '../background/FlowingWaves';
import { LogoMark } from '../brand/LogoMark';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden bg-marfil text-tinta"
    >
      {/* Background Architectural Grid Lines & Cinematic Light Wash */}
      <FlowingWaves variant="hero" />

      {/* Vertical Rotated Editorial Guide Text (from Canva reference) */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          IDENTIDAD QUE TRASCIENDE.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      {/* Monumental Watermark of the REAL "J" Isotype in vector SVG */}
      <Reveal variant="zoom" distance={12} duration={1100} className="absolute right-[-4%] sm:right-0 lg:right-[3%] top-0 bottom-0 flex items-center pointer-events-none select-none z-0">
        <div aria-hidden="true">
          <LogoMark size="min(72vw, 560px)" color="#111210" opacity={0.035} />
        </div>
      </Reveal>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10 w-full my-auto">
        <div className="max-w-4xl space-y-8">
          {/* Overline with signature hairline and official LogoMark */}
          <Reveal variant="down" distance={18} delay={80} className="flex items-center gap-3">
            <LogoMark size={20} color="#111210" opacity={0.9} />
            <span className="w-6 h-px bg-tinta/30" />
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva">
              Johannes &mdash; Estudio &amp; Desarrollo Web
            </span>
          </Reveal>

          {/* Grand Editorial Headline */}
          <RevealGroup className="space-y-4">
            <Reveal as="h1" variant="up" distance={42} duration={900} className="text-4xl sm:text-6xl lg:text-7xl font-serif text-tinta leading-[1.05] font-normal">
              Transformo ideas y negocios en{' '}
              <span className="relative inline-block">
                <span className="italic font-normal">experiencias digitales</span>
                <span className="absolute left-0 bottom-1 w-full h-px bg-terracota/70" />
              </span>{' '}
              profesionales.
            </Reveal>

            <Reveal as="p" variant="fade" className="text-base sm:text-lg text-oliva max-w-xl font-light leading-relaxed pt-2">
              Diseño y desarrollo sitios web modernos, responsivos y orientados a los objetivos de cada proyecto.
            </Reveal>
          </RevealGroup>

          {/* Minimalist Editorial Action */}
          <RevealGroup className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Reveal variant="up" distance={24}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-sans tracking-wide text-marfil bg-tinta hover:bg-tinta-soft transition-colors duration-300"
            >
              <span>Quiero iniciar un proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-marfil" />
            </a>
            </Reveal>

            <Reveal variant="up" distance={24}>
            <a
              href="#proyectos"
              className="text-xs font-sans tracking-wider uppercase text-oliva hover:text-tinta transition-colors duration-300 py-2 border-b border-tinta/20 hover:border-tinta"
            >
              Ver proyectos seleccionados ↓
            </a>
            </Reveal>
          </RevealGroup>
        </div>
      </div>

      {/* Bottom Editorial Bar (Direct from Canva reference layout) */}
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10 w-full pt-12">
        <Reveal variant="line" className="h-px w-full">
          <span className="block h-px w-full bg-tinta/10" aria-hidden="true" />
        </Reveal>
        <Reveal variant="fade" delay={140} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 text-xs text-oliva font-light">
          {/* Studio Brand Descriptor */}
          <div className="md:col-span-5 space-y-1">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-tinta font-medium">
              JOHANNES
            </p>
            <p className="text-[9px] font-sans tracking-[0.16em] uppercase text-oliva">
              Desarrollo Web &amp; Dirección Creativa &mdash; EST. 2024
            </p>
          </div>

          {/* Center Dividing Hairline */}
          <div className="hidden md:block md:col-span-1 h-8 w-px bg-tinta/10 mx-auto" />

          {/* Canva Signature Mantra */}
          <div className="md:col-span-6">
            <p className="text-[10px] font-sans tracking-[0.18em] uppercase text-oliva leading-relaxed">
              Creamos marcas con propósito, diseñamos futuro.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
