import React from 'react';
import { FlowingWaves } from '../background/FlowingWaves';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const ProcessSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Descubrimiento', desc: 'Entendemos el negocio, sus objetivos y necesidades.' },
    { num: '02', title: 'Planificación', desc: 'Definimos estructura, contenido y alcance.' },
    { num: '03', title: 'Diseño', desc: 'Construimos la propuesta visual y experiencia de usuario.' },
    { num: '04', title: 'Desarrollo', desc: 'Transformamos el diseño en código funcional y responsivo.' },
    { num: '05', title: 'Despliegue', desc: 'Publicamos y configuramos el proyecto en Internet.' },
    { num: '06', title: 'Evolución', desc: 'Acompañamiento con mantenimiento continuo y mejoras.' },
  ];

  return (
    <section id="proceso" className="relative py-28 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="process" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          04 // METODOLOGÍA &amp; RIGOR.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
            04 &mdash; Proceso
          </Reveal>
          <Reveal as="h2" variant="up" distance={30} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
            De una idea a una{' '}
            <span className="relative inline-block">
              <span>solución digital</span>
              <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
            </span>.
          </Reveal>
        </div>

        {/* 6 Steps in Minimal Editorial Grid - Short, Pure, Punchy */}
        <Reveal variant="line" className="mb-12 h-px w-full">
          <span className="block h-px w-full bg-tinta/10" aria-hidden="true" />
        </Reveal>
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step) => (
            <Reveal key={step.num} variant="up" className="space-y-3 group">
              <span className="font-serif text-2xl sm:text-3xl text-oliva group-hover:text-tinta transition-colors duration-300 block">
                {step.num}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-tinta font-normal tracking-wide">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-oliva font-light leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
