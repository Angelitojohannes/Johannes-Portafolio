import React, { useState, useEffect } from 'react';
import { LogoFull } from '../brand/LogoFull';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Mantenimiento', href: '#mantenimiento' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <Reveal
      variant="down"
      distance={20}
      className="fixed inset-x-0 top-0 z-50"
    >
      <header className={`transition-all duration-300 ${
        isScrolled
          ? 'border-b border-tinta/10 bg-marfil py-3 shadow-sm'
          : 'border-b border-tinta/10 bg-marfil py-5'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-14"
        aria-label="Navegación principal"
      >
        <a href="#hero" aria-label="Johannes, inicio" className="shrink-0">
          <LogoFull size="sm" textColor="#111210" showMark={false} showTagline={false} />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-3 md:flex xl:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] font-light text-oliva transition-colors hover:text-tinta"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex xl:gap-4">
          <a
            href="https://wa.me/584124835420?text=Hola%20Johannes,%20quiero%20conversar%20sobre%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-oliva transition-colors hover:text-tinta"
          >
            WhatsApp
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-tinta/20 px-5 py-2 text-xs text-tinta transition-colors hover:border-tinta/50"
          >
            Cotizar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="p-2 text-tinta transition-colors hover:text-terracota focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracota md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-tinta/10 bg-marfil px-8 pb-6 pt-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-tinta">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 transition-colors hover:text-terracota"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/584124835420?text=Hola%20Johannes,%20quiero%20conversar%20sobre%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 transition-colors hover:text-terracota"
            >
              WhatsApp Directo →
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-sans tracking-wide text-marfil bg-tinta border border-tinta hover:bg-tinta/90 transition-colors shadow-sm"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      )}
      </header>
    </Reveal>
);
};