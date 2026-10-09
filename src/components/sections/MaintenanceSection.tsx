import React from 'react';
import { LogoMark } from '../brand/LogoMark';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

export const MaintenanceSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Desarrollo', desc: 'Creación de diseño y código.' },
    { num: '02', title: 'Publicación', desc: 'Configuración y puesta en línea.' },
    { num: '03', title: 'Mantenimiento', desc: 'Actualización mensual de contenido.' },
    { num: '04', title: 'Evolución', desc: 'Nuevas mejoras continuas.' },
  ];

  const updateTypes = [
    'Actualización de textos y precios',
    'Nuevos productos e imágenes',
    'Promociones de temporada',
    'Ajustes visuales y técnicos',
    'Monitoreo de estabilidad',
    'Soporte directo por WhatsApp',
  ];

  return (
    <section id="mantenimiento" className="relative py-28 border-t border-white/[0.12] overflow-hidden bg-tinta text-marfil">
      <FlowingWaves variant="maintenance" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-slate-500 whitespace-nowrap">
          06 // CONTINUIDAD &amp; EVOLUCIÓN.
        </span>
        <span className="w-12 h-[1px] bg-white/20" />
      </div>

      {/* Subtle J Watermark Motif in vector SVG */}
      <div 
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <LogoMark size="min(76vw, 440px)" color="#F1EDE3" opacity={0.035} />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Header */}
        <Reveal variant="down" className="max-w-xl mb-16 space-y-3">
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-slate-500 block">
            06 &mdash; Continuidad
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F2EB] font-normal leading-[1.12]">
            Tu sitio no termina{' '}
            <span className="relative inline-block">
              <span>cuando se publica</span>
              <span className="absolute left-0 bottom-0.5 w-full h-[1.5px] bg-[#F4F2EB]/70" />
            </span>.
          </h2>
          <p className="text-xs sm:text-sm font-light text-slate-400 pt-2 leading-relaxed">
            Una plataforma necesita mantenerse actualizada para seguir generando confianza ante tus clientes.
          </p>
        </Reveal>

        {/* Linear Stepped Formula: DESARROLLO + MANTENIMIENTO */}
        <div className="border-t border-b border-white/[0.08] py-10 mb-16">
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <Reveal key={step.title} variant={idx % 2 === 0 ? 'down' : 'up'} className="space-y-2 relative">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-serif text-xl sm:text-2xl text-slate-500">
                    {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                  )}
                </div>
                <h3 className="font-serif text-xl text-[#F4F2EB] font-normal">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        {/* Direct Scope with Hairlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5 space-y-3" variant="down">
            <h3 className="font-serif text-2xl text-[#F4F2EB] font-normal">
              Desarrollo inicial + Mantenimiento mensual
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              El desarrollo corresponde a la puesta en marcha de la web. El mantenimiento es el servicio mensual que te permite enviar cambios sin preocuparte por tocar código ni paneles técnicos.
            </p>
          </Reveal>

          <RevealGroup className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {updateTypes.map((item, idx) => (
              <Reveal as="div" key={idx} variant={idx % 2 === 0 ? 'up' : 'down'} className="py-2 border-b border-white/[0.06] flex items-center gap-2 text-xs text-slate-300 font-light">
                <span className="text-slate-500 font-serif">—</span>
                <span>{item}</span>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
