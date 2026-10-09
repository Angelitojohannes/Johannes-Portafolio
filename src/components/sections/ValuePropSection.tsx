import React from 'react';
import { FlowingWaves } from '../background/FlowingWaves';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const ValuePropSection: React.FC = () => {
  const pillars = [
    { title: 'Diseño', desc: 'Identidad editorial y sobria que proyecta valor y distinción.' },
    { title: 'Desarrollo', desc: 'Estructura moderna, código limpio y rendimiento a largo plazo.' },
    { title: 'Experiencia', desc: 'Navegación intuitiva orientada a facilitar la acción del cliente.' },
    { title: 'Responsive', desc: 'Adaptación natural y armónica a cualquier tamaño de pantalla.' },
    { title: 'Optimización', desc: 'Tiempos de carga rápidos y estándares técnicos actuales.' },
    { title: 'Mantenimiento', desc: 'Cuidado continuo para mantener tu plataforma siempre vigente.' },
  ];

  return (
    <section id="propuesta" className="relative py-28 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="proposal" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          01 // FILOSOFÍA &amp; INTENCIÓN.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Narrative Block with high whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5 space-y-4">
            <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
              01 &mdash; Propuesta
            </Reveal>
            <Reveal as="h2" variant="left" distance={36} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
              Más que una{' '}
              <span className="relative inline-block">
                <span>página web</span>
                <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
              </span>.
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-5 text-tinta text-base sm:text-lg font-light leading-relaxed">
            <Reveal as="p" variant="fade" className="text-tinta font-normal">
              Una presencia digital debe comunicar quién eres, mostrar el valor de lo que ofreces y facilitar que tus clientes den el siguiente paso.
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="text-oliva text-sm leading-relaxed">
              Cada proyecto parte de entender qué necesita lograr el negocio para convertir esa necesidad en una experiencia digital funcional, atractiva y fácil de utilizar.
            </Reveal>
          </div>
        </div>

        {/* 6 Pillars in an open architectural grid with hairlines - ZERO CARDS */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 pt-12 border-t border-tinta/10">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} variant={idx % 2 === 0 ? 'up' : 'down'} className="space-y-2 group">
              <span className="text-xs font-serif text-oliva block">
                0{idx + 1}
              </span>
              <h3 className="text-xl font-serif text-tinta font-normal tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-xs text-oliva leading-relaxed font-light">
                {pillar.desc}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
