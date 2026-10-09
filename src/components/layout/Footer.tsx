import React from 'react';
import { LogoFull } from '../brand/LogoFull';
import { LogoMark } from '../brand/LogoMark';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowUp } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Reveal as="footer" variant="fade" className="relative bg-tinta border-t border-white/[0.12] pt-24 pb-16 overflow-hidden text-[#D6D1C6]">
      <FlowingWaves variant="footer" />
      {/* Huge subtle J watermark */}
      <div 
        className="absolute -right-16 -bottom-16 opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <LogoMark size="min(90vw, 520px)" color="#F1EDE3" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Presentation */}
          <div className="md:col-span-6 space-y-4">
            <LogoFull size="lg" textColor="#F1EDE3" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed pt-2 font-light">
              Dirección de arte, diseño y desarrollo web para emprendimientos, productos digitales e iniciativas con propósito.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-slate-500">
              Navegación
            </p>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#mantenimiento" className="hover:text-white transition-colors">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-slate-500">
              Canales
            </p>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a
                  href="https://wa.me/584124835420?text=Hola%20Johannes,%20quiero%20conversar%20sobre%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Directo →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Canva Mantra */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} Johannes &mdash; Desarrollo Web &amp; Soluciones Digitales.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </Reveal>
  );
};
