import React from 'react';
import { Project, ProjectCategory } from '../types';
import { AssetRenderer } from './AssetRenderer';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface DirtverseGalleryProps {
  projects: Project[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  onSelectProject: (project: Project) => void;
}

export const DirtverseGallery: React.FC<DirtverseGalleryProps> = ({
  projects,
  activeCategory,
  onCategoryChange,
  onSelectProject
}) => {
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'brand-identity') return p.category === 'brand-identity';
    if (activeCategory === 'pitch-deck') return p.category === 'pitch-deck';
    return true;
  });

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Studio Archival Intro / Filter Header */}
      <section className="space-y-8 pb-8 border-b border-[#262421]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <div className="font-mono text-xs text-[#c97a48] tracking-widest uppercase flex items-center gap-2">
              <span>+</span>
              <span>STEPHEN OLUWASANMI</span>
              <span>·</span>
              <span>ARCHIVE: 2022—2024</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#ede9e1] leading-[0.9]">
              Forever worlds for real-world brands.
            </h1>
          </div>

          {/* Dirtverse Filter Ledger */}
          <div className="flex flex-wrap items-center gap-1 font-mono text-xs text-[#8e8a83] border border-[#262421] p-1 bg-[#12110f]">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'hover:text-[#ede9e1]'
              }`}
            >
              ALL [{projects.length}]
            </button>
            <button
              onClick={() => onCategoryChange('brand-identity')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeCategory === 'brand-identity'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'hover:text-[#ede9e1]'
              }`}
            >
              BRAND [{projects.filter((p) => p.category === 'brand-identity').length}]
            </button>
            <button
              onClick={() => onCategoryChange('pitch-deck')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                activeCategory === 'pitch-deck'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'hover:text-[#ede9e1]'
              }`}
            >
              DECKS [{projects.filter((p) => p.category === 'pitch-deck').length}]
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-[#8e8a83] pt-4 border-t border-[#262421]">
          <div>DISCIPLINE 01: BRAND IDENTITY ARCHITECTURE</div>
          <div>DISCIPLINE 02: HIGH-STAKES PITCH DECKS</div>
          <div className="text-right hidden md:block text-[#6d6962]">LOCATED: WAT / WORKING GLOBALLY</div>
        </div>
      </section>

      {/* Dirtverse Project Case Stream */}
      <section className="space-y-24 md:space-y-36">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer space-y-6"
          >
            {/* Top Project Tagline & Ledger Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 font-mono text-xs border-b border-[#262421] pb-3 text-[#8e8a83]">
              <div className="flex items-center gap-3">
                <span className="text-[#c97a48] font-bold">[ {String(index + 1).padStart(2, '0')} ]</span>
                <span className="uppercase text-[#ede9e1]">{project.clientSector}</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="uppercase">{project.discipline}</span>
                <span>·</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Giant Title on Hover */}
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-[#ede9e1] group-hover:text-[#c97a48] transition-colors leading-[0.9]">
                {project.title}
              </h2>
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#8e8a83] group-hover:text-[#ede9e1] transition-colors shrink-0">
                <span>VIEW CASE STUDY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Massive Cinematic Media Frame with Film Crosshairs */}
            <div className="relative border border-[#262421] group-hover:border-[#ede9e1] transition-colors overflow-hidden bg-[#141311]">
              <AssetRenderer
                asset={project.assets[0]}
                className="w-full aspect-[16/9] md:aspect-[21/9] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                showDetailsOnHover={false}
              />

              {/* Technical Overlay Tags */}
              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#ede9e1] bg-[#0e0d0c]/80 backdrop-blur-md px-2 py-1 border border-[#262421]">
                {project.deliverables.slice(0, 2).join(' / ')}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#ede9e1] bg-[#0e0d0c]/80 backdrop-blur-md px-2 py-1 border border-[#262421]">
                SPEC: {project.assets[0].recommendedDimensions}
              </div>
            </div>

            {/* Concise Summary Footnote */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-mono text-xs text-[#8e8a83] pt-2">
              <p className="max-w-2xl leading-relaxed text-[#a39e94] font-sans text-sm">
                {project.briefSummary}
              </p>
              <span className="shrink-0 text-[#c97a48] font-mono group-hover:underline">
                OPEN STUDY // {project.slug.toUpperCase()} →
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
