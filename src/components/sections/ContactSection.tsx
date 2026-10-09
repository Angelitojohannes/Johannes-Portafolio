import React, { useState } from 'react';
import { LogoMark } from '../brand/LogoMark';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    projectType: 'Sitio Web',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const projectTypes = [
    'Landing Page',
    'Sitio Web',
    'Catálogo Digital',
    'Portafolio',
    'Solución Personalizada',
    'Diseño de logotipo (servicio adicional)',
    'Otro',
  ];

  const generateWhatsAppUrl = () => {
    const text = `*Consulta de proyecto — Johannes*\n\n` +
      `*Nombre:* ${formData.name || 'No indicado'}\n` +
      `*WhatsApp:* ${formData.whatsapp || 'No indicado'}\n` +
      `*Tipo de proyecto:* ${formData.projectType}\n` +
      `*Mensaje:* ${formData.message || 'Sin mensaje adicional'}`;

    return `https://wa.me/584124835420?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contacto" className="relative py-32 border-t border-tinta/10 overflow-hidden bg-marfil text-tinta">
      <FlowingWaves variant="contact" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-oliva whitespace-nowrap">
          09 // INICIAR UN PROYECTO.
        </span>
        <span className="w-12 h-px bg-tinta/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Personal Studio Invitation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <LogoMark size={16} color="#111210" opacity={0.8} />
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-oliva">
                09 &mdash; Contacto
              </span>
            </div>
            <Reveal as="h2" variant="down" distance={32} className="text-3xl sm:text-5xl font-serif text-tinta font-normal leading-[1.12]">
              ¿Tienes una idea? <br />
              <span className="relative inline-block mt-1">
                <span className="italic font-normal">Construyamos algo con intención.</span>
                <span className="absolute left-0 bottom-0.5 w-full h-px bg-terracota/70" />
              </span>
            </Reveal>
            <Reveal as="p" variant="fade" className="text-sm font-light text-oliva leading-relaxed pt-2">
              Cuéntame sobre tu proyecto o negocio. Analizamos tu requerimiento y formulamos una propuesta clara y orientada a resultados.
            </Reveal>

            <div className="pt-6 border-t border-tinta/10 space-y-3">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-oliva">
                Atención Inmediata
              </p>
              <Reveal as="div" variant="fade" className="w-fit">
              <a
                href="https://wa.me/584124835420?text=Hola%20Johannes,%20quiero%20conversar%20sobre%20un%20proyecto%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-wide text-tinta hover:text-terracota hover:underline underline-offset-4"
              >
                <span>Escríbeme directamente por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-oliva" />
              </a>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Clean, Non-Corporate Form */}
          <Reveal className="lg:col-span-7" variant="up" distance={36} delay={100}>
            {status === 'success' ? (
              <div className="py-8 space-y-6">
                <h3 className="font-serif text-3xl text-tinta font-normal">
                  Mensaje preparado.
                </h3>
                <p className="text-sm text-oliva font-light leading-relaxed max-w-md">
                  Para una respuesta inmediata, puedes enviar este resumen directamente a mi WhatsApp con un solo clic:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start gap-4">
                  <Reveal as="div" variant="fade" className="w-fit">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-sans tracking-wide text-marfil bg-tinta hover:bg-tinta-soft transition-colors"
                  >
                    <span>Enviar resumen por WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-marfil" />
                  </a>
                  </Reveal>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs font-sans text-oliva hover:text-tinta py-3 border-b border-tinta/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
                  >
                    Modificar datos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-oliva block">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre o empresa"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-tinta/20 focus:border-terracota py-2.5 text-tinta placeholder:text-oliva text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-oliva block">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+58 412 000 0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-transparent border-b border-tinta/20 focus:border-terracota py-2.5 text-tinta placeholder:text-oliva text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-oliva block">
                    Tipo de proyecto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-marfil-warm border-b border-tinta/20 focus:border-terracota py-2.5 text-tinta text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-marfil-warm text-tinta">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-oliva block">
                    Mensaje o idea
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Cuéntame brevemente sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-tinta/20 focus:border-terracota py-2.5 text-tinta placeholder:text-oliva text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-sans tracking-wide text-marfil bg-tinta hover:bg-tinta-soft transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota"
                  >
                    <span>Cuéntame tu proyecto →</span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
