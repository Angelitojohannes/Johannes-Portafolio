import React from 'react';
import { FlowingWaves } from '../background/FlowingWaves';
import { LogoMark } from '../brand/LogoMark';
import { Reveal } from '../ui/Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="relative py-32 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="about" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          05 // PERFIL &amp; CRITERIO.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      {/* Huge subtle J watermark in background */}
      <Reveal variant="zoom" distance={12} duration={1100} className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
        <div aria-hidden="true">
          <LogoMark size="min(88vw, 720px)" color="#111210" opacity={0.035} />
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">
          {/* Left Column: Heading & Discipline */}
          <Reveal className="lg:col-span-5 space-y-4" variant="left" distance={36}>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva block">
              05 &mdash; Perfil
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
              Detrás del{' '}
              <span className="relative inline-block">
                <span>código</span>
                <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
              </span>.
            </h2>
            <p className="text-xs font-sans tracking-[0.16em] uppercase text-oliva pt-4">
              Johannes &mdash; Desarrollador &amp; Estudiante de Ingeniería
            </p>

            {/* Architectural Monograph Stamp with official J */}
            <div className="pt-6 border-t border-tinta/10 max-w-sm">
              <div className="flex items-start gap-4">
                <figure className="flex w-24 shrink-0 flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-tinta/20 bg-white/30 p-3">
                  <LogoMark size={50} color="#111210" />
                  </div>
                  <figcaption className="mt-3 text-center text-[9.5px] font-sans tracking-[0.18em] uppercase text-tinta font-medium">
                    ESTUDIO JOHANNES
                  </figcaption>
                </figure>
                <Reveal variant="zoom" distance={12} delay={100} className="block">
                  <figure className="flex w-24 flex-col items-center">
                    <div className="h-24 w-24 overflow-hidden rounded-full border border-tinta/20 bg-marfil-warm p-1">
                    <img
                      src="/about-johannes.png"
                      alt="Johannes, desarrollador web"
                      className="h-full w-full rounded-full object-cover object-[center_36%]"
                      loading="lazy"
                      decoding="async"
                    />
                    </div>
                    <figcaption className="mt-3 text-center font-sans text-[9.5px] leading-relaxed text-tinta">
                      <span className="block text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-tinta">
                        Angel Rodriguez
                      </span>
                      <span className="block tracking-[0.12em] uppercase text-oliva">
                        Fundador de Johannes
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Authentic Human Text with Generous Leading */}
          <Reveal className="lg:col-span-7 space-y-6 text-tinta text-base sm:text-lg font-light leading-relaxed" variant="right" distance={36} delay={100}>
            <p className="text-tinta text-xl sm:text-2xl font-serif font-normal leading-relaxed">
              Soy estudiante de Ingeniería en Sistemas y desarrollador web en formación profesional.
            </p>

            <p>
              Mi aprendizaje ha ido más allá de la teoría: he trabajado en proyectos reales, desarrollado sitios web, colaborado en productos digitales y comenzado a trabajar directamente con clientes.
            </p>

            <p className="text-oliva text-sm sm:text-base">
              Actualmente continúo fortaleciendo mis conocimientos en desarrollo web, bases de datos, software y tecnologías modernas.
            </p>

            <p className="text-tinta text-base sm:text-lg font-serif italic pt-3 border-l border-terracota/50 pl-4">
              &ldquo;Mi objetivo es seguir creciendo, aprender constantemente y utilizar la tecnología para crear soluciones que generen valor real.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
