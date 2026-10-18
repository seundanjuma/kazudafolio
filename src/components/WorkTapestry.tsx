import React from 'react';
import { Project, ProjectCategory } from '../types';
import { AssetRenderer } from './AssetRenderer';
import { ArrowUpRight, Presentation, Sparkles, SlidersHorizontal } from 'lucide-react';

interface WorkTapestryProps {
  projects: Project[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  onSelectProject: (project: Project) => void;
}

export const WorkTapestry: React.FC<WorkTapestryProps> = ({
  projects,
  activeCategory,
  onCategoryChange,
  onSelectProject
}) => {
  // Filtered projects
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'brand-identity') return p.category === 'brand-identity';
    if (activeCategory === 'pitch-deck') return p.category === 'pitch-deck';
    return true;
  });

  // Top flagship projects
  const packagehook = projects.find((p) => p.id === 'packagehook');
  const repay = projects.find((p) => p.id === 'repay');
  const aec = projects.find((p) => p.id === 'african-export-club');
  const theYard = projects.find((p) => p.id === 'the-yard-fitness');
  const nexa = projects.find((p) => p.id === 'nexa-health');
  const orbit = projects.find((p) => p.id === 'orbit-fleet');

  return (
    <section className="space-y-12">
      {/* Editorial Viewport Masthead: Work-first introduction */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider uppercase">
            <span>Selected Projects</span>
            <span aria-hidden="true">·</span>
            <span>2022—2024</span>
            <span aria-hidden="true">·</span>
            <span className="text-white/80">Brand Systems & Strategic Decks</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Visual craft & structured strategic storytelling.
          </h2>
        </div>

        {/* Interactive Filter Controls: Clean segmented button tabs */}
        <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/10 rounded-lg shrink-0">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => onCategoryChange('brand-identity')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === 'brand-identity'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Brand Identity ({projects.filter((p) => p.category === 'brand-identity').length})
          </button>
          <button
            onClick={() => onCategoryChange('pitch-deck')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === 'pitch-deck'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Pitch Decks ({projects.filter((p) => p.category === 'pitch-deck').length})
          </button>
        </div>
      </div>

      {/* If viewing All or Curated View, render the Art-Directed Varied Footprint Tapestry */}
      {activeCategory === 'all' ? (
        <div className="space-y-16">
          {/* 1. Flagship Anchor: Packagehook (12-column Asymmetric Split) */}
          {packagehook && (
            <div
              onClick={() => onSelectProject(packagehook)}
              className="group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0f1116] overflow-hidden transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left Visual: Primary Brand Mark & Monogram (7 cols) */}
                <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
                  <AssetRenderer
                    asset={packagehook.assets[0]}
                    className="w-full h-full min-h-[340px] md:min-h-[440px]"
                    showDetailsOnHover={false}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                      FLAGSHIP · IDENTITY SYSTEM
                    </span>
                  </div>
                </div>

                {/* Right Visual: Modular Packaging Collateral & Context (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-[#0e1014]">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                      <span className="font-mono text-white/70">{packagehook.discipline}</span>
                      <span className="font-mono">{packagehook.year}</span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-white/90 transition-colors flex items-center justify-between">
                      <span>{packagehook.title}</span>
                      <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="text-sm md:text-base text-white/70 leading-relaxed mt-4 font-normal">
                      {packagehook.briefSummary}
                    </p>

                    {/* Secondary asset preview within container */}
                    {packagehook.assets[1] && (
                      <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
                        <AssetRenderer
                          asset={packagehook.assets[1]}
                          className="w-full aspect-[16/9]"
                          showDetailsOnHover={false}
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50">
                    <span>{packagehook.clientSector}</span>
                    <span className="font-mono text-white/80 group-hover:underline">Explore Full System →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Asymmetric Duo: Repay (Fintech) + The Yard Fitness (Athletic Brutalism) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Repay (6 cols) */}
            {repay && (
              <div
                onClick={() => onSelectProject(repay)}
                className="lg:col-span-6 group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0e111a] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div className="relative">
                  <AssetRenderer
                    asset={repay.assets[0]}
                    className="w-full aspect-[16/10]"
                    showDetailsOnHover={false}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                      FINTECH IDENTITY
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                      <span className="font-mono text-white/70">{repay.discipline}</span>
                      <span className="font-mono">{repay.year}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>{repay.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mt-3">
                      {repay.briefSummary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50">
                    <span>{repay.clientSector}</span>
                    <span className="font-mono text-white/70">Design Tokens & App Theme</span>
                  </div>
                </div>
              </div>
            )}

            {/* The Yard Fitness (6 cols) */}
            {theYard && (
              <div
                onClick={() => onSelectProject(theYard)}
                className="lg:col-span-6 group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0d0e11] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div className="relative">
                  <AssetRenderer
                    asset={theYard.assets[0]}
                    className="w-full aspect-[16/10]"
                    showDetailsOnHover={false}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                      BRUTALIST ATHLETICS
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                      <span className="font-mono text-white/70">{theYard.discipline}</span>
                      <span className="font-mono">{theYard.year}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>{theYard.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mt-3">
                      {theYard.briefSummary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50">
                    <span>{theYard.clientSector}</span>
                    <span className="font-mono text-white/70">Custom Stencil & Wayfinding</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Featured Pitch Deck Spotlight Banner: Nexa Health ($18M Series A) */}
          {nexa && (
            <div
              onClick={() => onSelectProject(nexa)}
              className="group cursor-pointer rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-b from-[#091517] to-[#050c0d] overflow-hidden p-8 md:p-12 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase mb-1">
                    <Presentation className="w-4 h-4" />
                    <span>PITCH DECK DISCIPLINE · SERIES A ROUND</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    {nexa.title} — $18M Strategic Narrative
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/60">
                    18 Slides · 99.4% Precision Data Model
                  </span>
                  <div className="px-4 py-2 rounded bg-emerald-500 text-black text-xs font-bold font-mono group-hover:bg-emerald-400 transition-colors">
                    OPEN SLIDE DECK →
                  </div>
                </div>
              </div>

              {/* 3 Sequential Slide Cards Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nexa.slides?.slice(0, 3).map((slide, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between h-[260px] group-hover:border-white/20 transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-white/50 mb-3">
                        <span className="text-emerald-400 font-bold uppercase">0{slide.slideNumber} · {slide.slideType}</span>
                        <span>16:9</span>
                      </div>
                      <h4 className="font-display font-bold text-base text-white leading-snug">
                        {slide.headline}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
                      {slide.narrativeObjective.slice(0, 75)}...
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/60 gap-4">
                <p className="max-w-2xl leading-relaxed">
                  {nexa.narrativeStrategy}
                </p>
                <span className="font-mono text-emerald-400 shrink-0">
                  Interactive Deck Viewer Available
                </span>
              </div>
            </div>
          )}

          {/* 4. Editorial Trio: African Export Club + Orbit Fleet + Ligada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* African Export Club */}
            {aec && (
              <div
                onClick={() => onSelectProject(aec)}
                className="group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0b130e] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <AssetRenderer
                  asset={aec.assets[0]}
                  className="w-full aspect-[4/3]"
                  showDetailsOnHover={false}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                      <span className="font-mono text-white/70">{aec.discipline}</span>
                      <span className="font-mono">{aec.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>{aec.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mt-2 line-clamp-3">
                      {aec.briefSummary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-xs text-white/50">
                    {aec.clientSector}
                  </div>
                </div>
              </div>
            )}

            {/* Orbit Fleet (Pitch Deck) */}
            {orbit && (
              <div
                onClick={() => onSelectProject(orbit)}
                className="group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#080d17] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <AssetRenderer
                  asset={orbit.assets[0]}
                  className="w-full aspect-[4/3]"
                  showDetailsOnHover={false}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                      <span className="font-mono text-blue-400">{orbit.discipline}</span>
                      <span className="font-mono">{orbit.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>{orbit.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mt-2 line-clamp-3">
                      {orbit.briefSummary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-xs text-white/50">
                    {orbit.clientSector}
                  </div>
                </div>
              </div>
            )}

            {/* Ligada (Brand Identity) */}
            {projects.find((p) => p.id === 'ligada') && (
              <div
                onClick={() => onSelectProject(projects.find((p) => p.id === 'ligada')!)}
                className="group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0f0d0b] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <AssetRenderer
                  asset={projects.find((p) => p.id === 'ligada')!.assets[0]}
                  className="w-full aspect-[4/3]"
                  showDetailsOnHover={false}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                      <span className="font-mono text-white/70">Brand Identity</span>
                      <span className="font-mono">2023</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>Ligada</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mt-2 line-clamp-3">
                      Warm architectural brand identity and sales gallery environmental collateral for boutique residences.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-xs text-white/50">
                    Modern Architectural Real Estate
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Additional Projects Mosaic Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                Expanded Project Portfolio
              </span>
              <span className="text-xs font-mono text-white/40">
                {projects.length - 6} ADDITIONAL COMMISSIONS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.slice(6).map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer rounded-xl border border-white/[0.06] hover:border-white/20 bg-[#0d0f14] overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  <AssetRenderer
                    asset={project.assets[0]}
                    className="w-full aspect-[16/10]"
                    showDetailsOnHover={false}
                  />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-white/40 mb-1.5 font-mono">
                        <span className={project.category === 'pitch-deck' ? 'text-blue-400' : 'text-white/60'}>
                          {project.discipline}
                        </span>
                        <span>{project.year}</span>
                      </div>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed mt-1.5 line-clamp-2">
                        {project.briefSummary}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/[0.06] text-[11px] text-white/40 truncate">
                      {project.clientSector}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* If Category Filter is active (Brand Identity or Pitch Decks), render targeted grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl border border-white/[0.08] hover:border-white/25 bg-[#0e1015] overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div className="relative">
                <AssetRenderer
                  asset={project.assets[0]}
                  className="w-full aspect-[16/10]"
                  showDetailsOnHover={false}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                    {project.clientSector}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono">
                    <span className={project.category === 'pitch-deck' ? 'text-emerald-400' : 'text-white/70'}>
                      {project.discipline}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mt-3 line-clamp-3">
                    {project.briefSummary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50 font-mono">
                  <span>{project.deliverables.length} Deliverables</span>
                  <span className="text-white/80 group-hover:underline">View Case →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
