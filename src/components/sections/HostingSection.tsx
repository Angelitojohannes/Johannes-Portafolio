import React from 'react';
import { FlowingWaves } from '../background/FlowingWaves';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const HostingSection: React.FC = () => {
  const items = [
    {
      num: '01',
      title: 'Dominio',
      desc: 'La dirección web que utilizarán tus clientes para encontrar tu negocio (ej. tunegocio.com).',
    },
    {
      num: '02',
      title: 'Alojamiento',
      desc: 'El servicio donde se almacenan los archivos y recursos para que tu sitio funcione 24/7 con rapidez y seguridad.',
    },
    {
      num: '03',
      title: 'Configuración',
      desc: 'Conectamos el dominio con el sitio y dejamos todo listo para su publicación, sin tecnicismos para ti.',
    },
  ];

  return (
    <section className="relative py-28 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="hosting" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          08 // INFRAESTRUCTURA &amp; NUBE.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        <div className="max-w-xl mb-16 space-y-3">
          <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
            08 &mdash; Infraestructura
          </Reveal>
          <Reveal as="h2" variant="left" distance={36} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
            También puedo ayudarte a poner tu{' '}
            <span className="relative inline-block">
              <span>negocio en Internet</span>
              <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
            </span>.
          </Reveal>
        </div>

        {/* 3 Columns in Open Architectural Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-tinta/10 pt-12">
          {items.map((item, index) => (
            <Reveal key={item.title} variant={index % 2 === 0 ? 'left' : 'right'} className="space-y-3 group">
              <span className="font-serif text-2xl text-oliva group-hover:text-tinta transition-colors duration-300 block">
                {item.num}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-tinta font-normal">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-oliva font-light leading-relaxed">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
