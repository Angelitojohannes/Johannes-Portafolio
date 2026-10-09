import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Project, ProjectStatus } from '../../types';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { RevealGroup } from '../ui/RevealGroup';

const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Completado',
  'in-progress': 'En desarrollo',
  concept: 'Concepto',
  collaborative: 'Colaborativo',
};

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const hasImage = Boolean(project.image && !imageUnavailable);
  const isFlyvest = project.id === 'flyvest';
  const preserveImageRatio = project.imageFit === 'contain' && !isFlyvest;
  const aspectClass = {
    portrait: 'aspect-[4/5]',
    square: 'aspect-square',
    landscape: 'aspect-[5/4]',
  }[project.imageAspect || (preserveImageRatio ? 'square' : 'landscape')];

  return (
    <Reveal variant="zoom" distance={12} duration={850} className="block">
      <div
        className={`relative isolate ${aspectClass} overflow-hidden rounded-2xl border ${
          isFlyvest ? 'border-transparent bg-[#f6781b]' : `border-white/10 ${preserveImageRatio ? 'bg-marfil' : 'bg-[#20211F]'}`
        }`}
        role={hasImage ? undefined : 'img'}
        aria-label={
          hasImage
            ? undefined
            : `${project.title}: ${
                preserveImageRatio
                  ? 'imagen «Muy Pronto» pendiente'
                  : 'captura del proyecto pendiente'
              }`
        }
      >
        {hasImage && (
          <img
            src={project.image}
            alt={project.imageAlt || `Vista previa de ${project.title}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageUnavailable(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transform-none"
          />
        )}
        {!hasImage && (
          <div
            className={`absolute inset-0 flex flex-col justify-between p-5 sm:p-7 ${
              preserveImageRatio ? 'text-tinta' : 'text-marfil'
            }`}
            aria-hidden="true"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-serif text-sm opacity-70">Nº {project.number}</span>
              <span className="border-b border-terracota/70 pb-1 text-right text-[10px] uppercase tracking-[0.12em] opacity-75">
                {preserveImageRatio
                  ? 'Imagen «Muy Pronto» pendiente'
                  : 'Captura pendiente'}
              </span>
            </div>
            <div>
              <span className="mb-3 block h-px w-8 bg-terracota" />
              <p className="max-w-[15ch] break-words font-serif text-2xl leading-tight sm:text-3xl">
                {project.title}
              </p>
            </div>
          </div>
        )}
        <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-white/35" aria-hidden="true" />
        <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/35" aria-hidden="true" />
      </div>
    </Reveal>
  );
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { label: `Todos (${projectsData.length})`, value: 'all' },
    { label: 'Clientes', value: 'Cliente' },
    { label: 'Proyectos', value: 'Proyecto' },
    { label: 'Completados', value: 'Completado' },
    { label: 'Colaborativos', value: 'Proyecto colaborativo' },
    { label: 'Conceptos', value: 'Concepto' },
    { label: 'En desarrollo', value: 'En desarrollo' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : filter === 'En desarrollo'
      ? projectsData.filter((project) => project.status === 'in-progress')
      : filter === 'Completado'
        ? projectsData.filter((project) => project.status === 'completed')
        : projectsData.filter((project) => project.tag === filter);

  return (
    <section id="proyectos" className="relative py-28 border-t border-white/[0.12] overflow-hidden bg-tinta text-marfil">
      <FlowingWaves variant="projects" />
      {/* Vertical Rotated Editorial Guide */}
      <div 
        className="hidden md:flex absolute right-[-100px] top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-slate-500 whitespace-nowrap">
          03 // ARCHIVO &amp; CASOS.
        </span>
        <span className="w-12 h-[1px] bg-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <Reveal as="span" variant="fade" className="text-[10px] font-sans tracking-[0.25em] uppercase text-slate-500 block">
              03 &mdash; Portafolio
            </Reveal>
            <Reveal as="h2" variant="left" distance={36} className="text-3xl sm:text-5xl font-serif text-[#F4F2EB] font-normal leading-[1.12]">
              Proyectos{' '}
              <span className="relative inline-block">
                <span>seleccionados</span>
                <span className="absolute left-0 bottom-0.5 w-full h-[1.5px] bg-[#F4F2EB]/70" />
              </span>.
            </Reveal>
          </div>
          <Reveal as="p" variant="fade" delay={100} className="text-xs font-light text-slate-400 max-w-xs leading-relaxed md:text-right">
            Selección transparente de encargos para clientes, productos digitales e iniciativas en curso.
          </Reveal>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-white/[0.12] pb-4 font-sans sm:mb-14 sm:gap-x-8">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFilter(opt.value)}
              aria-pressed={filter === opt.value}
              aria-controls="projects-gallery"
              className={`border-b pb-2 text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota ${
                filter === opt.value
                  ? 'border-terracota text-marfil font-medium'
                  : 'border-transparent text-[#B7B1A5] hover:text-marfil'
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#B7B1A5]" aria-live="polite" aria-atomic="true">
            {String(filteredProjects.length).padStart(2, '0')} proyectos
          </span>
        </div>

        <RevealGroup
          as="div"
          stagger={110}
          id="projects-gallery"
          className="projects-masonry"
          aria-label="Galería de proyectos"
        >
          {filteredProjects.map((project, index) => (
            <Reveal
              as="article"
              key={`${filter}-${project.id}`}
              variant={index % 2 === 0 ? 'left' : 'right'}
              distance={30}
              className={`group mb-8 min-w-0 break-inside-avoid ${
                project.id === 'flyvest' ? 'projects-masonry__staggered' : ''
              }`}
            >
              <ProjectPreview project={project} />
              <div className="flex min-w-0 flex-col border-b border-white/15 py-5">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#D6D1C6]">
                    {project.tag}
                  </span>
                  <span className="h-px w-5 bg-terracota/80" aria-hidden="true" />
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-[#D6D1C6]">
                    {statusLabels[project.status]}
                    {project.statusDetail ? ` · ${project.statusDetail}` : ''}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="break-words font-serif text-2xl font-normal text-marfil sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[#D6D1C6]">
                      {project.description}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 shrink-0 items-center gap-2 text-xs text-marfil transition-colors hover:text-terracota focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota"
                    >
                      {project.urlLabel || 'Visitar proyecto'}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#B7B1A5]">
                  {project.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
                {project.highlight && (
                  <p className="mt-2 text-xs font-light text-[#B7B1A5]">
                    {project.highlight}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </RevealGroup>

        <aside
          aria-labelledby="amplify-title"
          className="mt-16 grid grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:mt-20 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div className="min-w-0">
            <Reveal as="p" variant="fade" className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#B7B1A5]">
              Colaboración profesional
            </Reveal>
            <Reveal variant="up" distance={22} className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#090b0a] p-2">
                <img
                  src="/brand/amplify-mark.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <h3 id="amplify-title" className="font-serif text-3xl text-marfil">
                Amplify
              </h3>
            </Reveal>
            <Reveal as="p" variant="fade" delay={100} className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[#D6D1C6]">
              Johannes es mi marca personal para desarrollo web y soluciones digitales. Si un proyecto requiere mayor escala, colaboro con otros profesionales a través de Amplify.
            </Reveal>
          </div>
          <a
            href="https://clamper2006.github.io/amplify/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-xs text-marfil transition-colors hover:text-terracota focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracota"
          >
            Conocer Amplify
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
};
