import React from 'react';
import { pricingTiers } from '../../data/pricing';
import { ArrowUpRight } from 'lucide-react';
import { FlowingWaves } from '../background/FlowingWaves';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const PricingSection: React.FC = () => {
  return (
    <section id="inversion" className="relative py-28 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          07 // FORMATOS &amp; ALCANCE.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
              07 &mdash; Inversión
            </Reveal>
            <Reveal as="h2" variant="right" distance={36} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
              Formatos de{' '}
              <span className="relative inline-block">
                <span>solución</span>
                <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
              </span>.
            </Reveal>
          </div>
          <Reveal as="p" variant="fade" delay={100} className="text-xs font-light text-oliva max-w-xs leading-relaxed md:text-right">
            Propuestas claras según la escala del proyecto. Sin tarifas ficticias ni costos ocultos.
          </Reveal>
        </div>

        {/* 4 Architectural Columns - NO bulky SaaS cards */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-tinta/10">
          {pricingTiers.map((tier, idx) => {
            return (
              <Reveal
                key={tier.id}
                variant={tier.popular ? 'zoom' : 'up'}
                className="block"
              >
              <div className={`py-8 px-6 lg:px-8 border-b lg:border-b-0 ${
                idx < pricingTiers.length - 1 ? 'lg:border-r border-tinta/10' : ''
              } flex flex-col justify-between space-y-8 group transition-colors duration-300 hover:bg-tinta/[0.025]`}>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-oliva block">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-tinta font-normal">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-xs text-oliva font-light leading-relaxed min-h-[36px]">
                    {tier.targetAudience}
                  </p>

                  <div className="pt-3 border-t border-tinta/10 space-y-1">
                    <span className="text-[9.5px] font-sans tracking-[0.16em] uppercase text-oliva block">
                      Inversión
                    </span>
                    <p className="font-serif text-lg text-tinta">
                      {tier.priceNote}
                    </p>
                    <p className="text-[11px] text-oliva font-light pt-1">
                      Plazo: {tier.estimatedTime}
                    </p>
                  </div>

                  {/* Core 3 Essential Features (30-50% text reduced) */}
                  <div className="pt-4 border-t border-tinta/10 space-y-2">
                    <span className="text-[9.5px] font-sans tracking-[0.16em] uppercase text-oliva block">
                      Incluye:
                    </span>
                    <ul className="space-y-1.5 text-xs text-tinta font-light">
                      {tier.includes.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-oliva font-serif">—</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wide text-tinta border-b border-tinta/20 hover:border-tinta pb-0.5 transition-colors"
                  >
                    <span>Cotizar propuesta</span>
                    <ArrowUpRight className="w-3 h-3 text-oliva" />
                  </a>
                </div>
              </div>
              </Reveal>
            );
          })}
        </RevealGroup>

        {/* Scope Note */}
        <Reveal variant="fade" className="mt-12 pt-6 border-t border-tinta/10 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-light text-oliva">
          <p>
            * El precio final depende del alcance, número de vistas y funcionalidades requeridas. El diseño de logotipo es opcional, se cotiza por separado y no está incluido en los paquetes web.
          </p>
          <a href="#contacto" className="text-tinta hover:text-terracota hover:underline">
            Solicitar evaluación técnica personalizada →
          </a>
        </Reveal>
      </div>
      <FlowingWaves variant="pricing" />
    </section>
  );
};
