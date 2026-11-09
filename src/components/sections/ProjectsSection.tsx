import React, { useMemo, useState } from 'react';
import { projectsData } from '../../data/projects';
import { ProjectStatus } from '../../types';
import { FlowingWaves } from '../background/FlowingWaves';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { CardSwap } from '../ui/CardSwap';

const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Completado',
  'in-progress': 'En desarrollo',
  concept: 'Concepto',
  collaborative: 'Colaborativo',
};

export const ProjectsSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const featuredProjects = useMemo(
    () => [
      {
        ...projectsData.find((project) => project.id === 'meilingbeauty')!,
        background: 'linear-gradient(180deg, #efe5ea 0%, #f5e9ee 100%)',
        largeText: 'Meilingbeauty',
      },
      {
        ...projectsData.find((project) => project.id === 'flyvest')!,
        background: 'linear-gradient(180deg, #f58123 0%, #eb6b0d 100%)',
        largeText: 'FLYVEST',
      },
      {
        ...projectsData.find((project) => project.id === 'el-rey-jesus')!,
        background: 'linear-gradient(180deg, #121d2f 0%, #111827 100%)',
        largeText: 'ERJ. VENEZUELA',
      },
    ],
    [],
  );

  const activeProject = featuredProjects[activeProjectIndex] ?? featuredProjects[0];

  const cardItems = featuredProjects.map((project) => ({
    title: project.largeText,
    image: project.image ?? '/projects/muy-pronto.png',
    alt: project.imageAlt || `${project.title} preview`,
    icon: <span className="inline-flex h-6 items-center rounded-full border border-current/20 bg-white/10 px-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-inherit">{project.tag}</span>,
    style: {
      background: project.background,
      '--swap-ink': project.id === 'el-rey-jesus' ? '#f5f2ee' : '#111210',
      '--swap-badge': project.id === 'el-rey-jesus' ? 'rgba(255,255,255,0.10)' : 'rgba(17,18,16,0.05)',
      '--swap-tile-highlight': project.id === 'el-rey-jesus' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.35)',
    } as React.CSSProperties,
  }));

  return (
    <section id="proyectos" className="relative overflow-hidden border-t border-white/[0.12] bg-tinta py-28 text-marfil">
      <FlowingWaves variant="projects" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-14 lg:px-24">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <Reveal as="span" variant="fade" className="block text-[10px] font-sans uppercase tracking-[0.25em] text-slate-500">
              03 &mdash; Portafolio
            </Reveal>
            <Reveal as="h2" variant="left" distance={36} className="font-serif text-3xl font-normal leading-[1.12] text-[#F4F2EB] sm:text-5xl">
              Proyectos{' '}
              <span className="relative inline-block">
                <span>seleccionados</span>
                <span className="absolute bottom-0.5 left-0 h-[1.5px] w-full bg-[#F4F2EB]/70" />
              </span>.
            </Reveal>
          </div>
          <Reveal as="p" variant="fade" delay={100} className="max-w-xs text-xs font-light leading-relaxed text-slate-400 md:text-right">
            Soluciones digitales con identidad propia, narrativa clara y experiencia pensada para convertir.
          </Reveal>
        </div>

        <div className="flex justify-center pb-8">
          <CardSwap
            items={cardItems}
            width={420}
            height={320}
            visibleCards={3}
            cardDistance={52}
            verticalDistance={42}
            depth={70}
            skewAmount={8}
            delay={4200}
            autoplay
            pauseOnHover
            theme="light"
            onChange={setActiveProjectIndex}
            className="mx-auto"
          />
        </div>

        <div className="mx-auto mt-6 max-w-4xl border-t border-white/15 pt-7 text-center">
          <Reveal as="div" variant="fade" className="mb-3 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.14em] text-[#CFC8BF]">
            <span>{activeProject.tag}</span>
            <span className="h-px w-6 bg-terracota/80" aria-hidden="true" />
            <span>{statusLabels[activeProject.status]}</span>
          </Reveal>
          <Reveal as="h3" variant="up" distance={18} className="font-serif text-3xl text-marfil sm:text-5xl">
            {activeProject.title}
          </Reveal>
          <Reveal as="p" variant="fade" delay={120} className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#D6D1C6] sm:text-base">
            {activeProject.description}
          </Reveal>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-[#B7B1A5]">
            {activeProject.areas.map((area) => (
              <span key={`${activeProject.id}-${area}`} className="rounded-full border border-white/10 px-2.5 py-1.5">
                {area}
              </span>
            ))}
          </div>
        </div>

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
