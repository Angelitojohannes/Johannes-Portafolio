import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const ServicesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (num: string) => {
    setExpanded(expanded === num ? null : num);
  };

  return (
    <section id="servicios" className="relative py-28 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="services" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          02 // SERVICIOS &amp; DISCIPLINA.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
              02 &mdash; Servicios
            </Reveal>
            <Reveal as="h2" variant="right" distance={36} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
              Soluciones digitales{' '}
              <span className="relative inline-block">
                <span>para tu proyecto</span>
                <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
              </span>.
            </Reveal>
          </div>
          <Reveal as="p" variant="fade" delay={100} className="text-xs font-light text-oliva max-w-xs leading-relaxed md:text-right">
            Especialidades de diseño y desarrollo web orientadas a necesidades comerciales concretas.
          </Reveal>
        </div>

        {/* Pure Editorial List - Exact User Specification */}
        <RevealGroup className="border-t border-tinta/10">
          {servicesData.map((service) => {
            const isOpened = expanded === service.number;

            return (
              <Reveal
                key={service.number}
                variant="zoom"
                className="block"
              >
              <div className="group border-b border-tinta/10 transition-colors duration-300">
                <div 
                  onClick={() => toggleExpand(service.number)}
                  className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
                >
                  {/* Left: Number and Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-serif text-xl sm:text-2xl text-oliva group-hover:text-tinta transition-colors duration-300">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-3xl font-serif text-tinta group-hover:text-tinta transition-colors duration-300 font-normal tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-xs text-oliva font-light mt-1 hidden sm:block">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Center: Brief Concise Description (30-50% text reduction) */}
                  <div className="lg:max-w-md">
                    <p className="text-xs sm:text-sm text-oliva font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Expand / Action indicator */}
                  <div className="flex items-center gap-4 self-end lg:self-center">
                    <button
                      type="button"
                      aria-label="Ver detalles"
                      className="text-oliva group-hover:text-tinta transition-colors p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
                    >
                      {isOpened ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                    <a
                      href="#contacto"
                      onClick={(e) => e.stopPropagation()}
                      className="text-oliva group-hover:text-tinta transition-colors"
                      aria-label={`Cotizar ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Progressive Disclosure: Deliverables reveal smoothly only on interaction */}
                {isOpened && (
                  <div className="pb-8 pt-2 pl-12 sm:pl-16 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-oliva font-light animate-fade-in">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-px bg-oliva" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
};
