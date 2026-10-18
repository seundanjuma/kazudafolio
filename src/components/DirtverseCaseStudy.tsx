import React, { useState } from 'react';
import { Project, VisualAsset } from '../types';
import { AssetRenderer } from './AssetRenderer';
import { ArrowLeft, ArrowUpRight, Copy, Check, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { NextProjectPreview } from './NextProjectPreview';

interface DirtverseCaseStudyProps {
  project: Project;
  onNextProject: () => void;
  onPrevProject: () => void;
  onBackToArchive?: () => void;
  onSelectProjectSlug?: (slug: string) => void;
}

export const DirtverseCaseStudy: React.FC<DirtverseCaseStudyProps> = ({
  project,
  onNextProject,
  onPrevProject,
  onBackToArchive,
  onSelectProjectSlug,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const slides = project.slides || [];
  const activeSlide = slides[currentSlideIndex];

  return (
    <article className="space-y-20 md:space-y-32">
      {/* 1. ARCHIVAL CASE HEADER (Strict Dirtverse / WldCntry layout) */}
      <section className="space-y-10">
        {/* Navigation Breadcrumb / Archive Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#8e8a83] border-b border-[#262421] pb-4">
          <div className="flex items-center gap-3">
            {onBackToArchive && (
              <button
                onClick={onBackToArchive}
                className="hover:text-[#ede9e1] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>ARCHIVE</span>
              </button>
            )}
            <span className="text-[#3a3733]">/</span>
            <span className="uppercase text-[#ede9e1]">CASE REF: {project.slug.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block">EDITION: 2024.VOL_01</span>
            <div className="flex items-center gap-2">
              <button
                onClick={onPrevProject}
                className="p-1 hover:text-[#ede9e1] border border-[#262421] rounded transition-colors cursor-pointer"
                title="Previous Case"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onNextProject}
                className="p-1 hover:text-[#ede9e1] border border-[#262421] rounded transition-colors cursor-pointer"
                title="Next Case"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Massive Architectural Project Title */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-[#c97a48] uppercase tracking-widest flex items-center gap-2">
            <span>+</span>
            <span>{project.discipline.toUpperCase()}</span>
            <span>·</span>
            <span>{project.clientSector.toUpperCase()}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-[#ede9e1] leading-[0.88] break-words">
            {project.title}
          </h1>
        </div>

        {/* Archival Ledger Grid (Bordered table with crosshair corners) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[#262421] divide-y md:divide-y-0 md:divide-x divide-[#262421] font-mono text-xs">
          <div className="p-4 md:p-6 space-y-1">
            <span className="text-[#6d6962] uppercase block text-[10px] tracking-wider">CLIENT</span>
            <span className="text-[#ede9e1] font-medium block text-sm">{project.title}</span>
          </div>
          <div className="p-4 md:p-6 space-y-1">
            <span className="text-[#6d6962] uppercase block text-[10px] tracking-wider">YEAR / TIMELINE</span>
            <span className="text-[#ede9e1] font-medium block text-sm">{project.year}</span>
          </div>
          <div className="p-4 md:p-6 space-y-1">
            <span className="text-[#6d6962] uppercase block text-[10px] tracking-wider">DISCIPLINE</span>
            <span className="text-[#ede9e1] font-medium block text-sm">{project.discipline}</span>
          </div>
          <div className="p-4 md:p-6 space-y-1">
            <span className="text-[#6d6962] uppercase block text-[10px] tracking-wider">ROLE</span>
            <span className="text-[#ede9e1] font-medium block text-sm">{project.role}</span>
          </div>
        </div>
      </section>

      {/* 2. CINEMATIC HERO MEDIA (Full-Bleed Archival Frame) */}
      <section className="space-y-3">
        <div className="relative border border-[#262421] bg-[#141311] overflow-hidden">
          {/* Film Crosshairs */}
          <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-[#8e8a83] bg-[#0e0d0c]/80 backdrop-blur-md px-2 py-0.5 border border-[#262421]">
            FIG. 01 / ARTIFACT EMBLEM
          </div>
          <div className="absolute top-3 right-3 z-10 font-mono text-[10px] text-[#8e8a83] bg-[#0e0d0c]/80 backdrop-blur-md px-2 py-0.5 border border-[#262421]">
            16:9 CINEMATIC
          </div>

          <AssetRenderer
            asset={project.assets[0]}
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
            showDetailsOnHover={false}
          />
        </div>

        <div className="flex items-center justify-between font-mono text-[11px] text-[#6d6962] px-1">
          <span>{project.assets[0].slotLabel.toUpperCase()}</span>
          <span>SYSTEM VERIFICATION: ARCHIVE READY</span>
        </div>
      </section>

      {/* 3. NARRATIVE PROSE & CONCEPT (Large Editorial Lead like WldCntry) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-8 border-y border-[#262421]">
        <div className="lg:col-span-4 font-mono text-xs text-[#8e8a83] space-y-4">
          <div className="text-[#c97a48] uppercase tracking-wider">01 // THE MANDATE</div>
          <p className="leading-relaxed">
            Constructing an enduring visual ecosystem that eliminates unnecessary decorative noise and delivers crystalline clarity across all touchpoints.
          </p>
          <div className="pt-4 border-t border-[#262421] space-y-2">
            <div className="text-[10px] uppercase text-[#6d6962]">SCOPE & DELIVERABLES</div>
            <div className="flex flex-wrap gap-2 text-xs text-[#ede9e1]">
              {project.deliverables.map((item, idx) => (
                <span key={idx} className="border border-[#262421] px-2 py-0.5 bg-[#141311]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#ede9e1] leading-snug">
            {project.briefSummary}
          </h2>
          {project.narrativeStrategy && (
            <p className="text-sm md:text-base text-[#a39e94] leading-relaxed font-sans">
              {project.narrativeStrategy}
            </p>
          )}
        </div>
      </section>

      {/* 4. DISCIPLINE SPECIFIC PRESENTATION */}

      {/* If Pitch Deck: Archival Slide Sequence Studio */}
      {project.category === 'pitch-deck' && slides.length > 0 && (
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#262421] pb-4 font-mono text-xs">
            <div>
              <span className="text-[#c97a48] uppercase block text-[10px]">PITCH DECK DISCIPLINE</span>
              <h3 className="font-display text-2xl font-bold text-[#ede9e1] mt-0.5">
                Strategic Slide Sequence
              </h3>
            </div>
            <div className="flex items-center gap-3 text-[#8e8a83]">
              <span>SLIDE {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="px-2 py-1 border border-[#262421] hover:text-[#ede9e1] transition-colors cursor-pointer"
                >
                  PREV
                </button>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
                  className="px-2 py-1 border border-[#262421] hover:text-[#ede9e1] transition-colors cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>

          {/* Active 16:9 Slide Display */}
          {activeSlide && (
            <div className="border border-[#262421] bg-[#12110f] p-6 md:p-12 space-y-8">
              <div className="flex justify-between items-start font-mono text-xs text-[#8e8a83] border-b border-[#262421] pb-4">
                <span className="text-[#c97a48] uppercase">
                  {activeSlide.slideType} · SEQUENCE 0{activeSlide.slideNumber}
                </span>
                <span>INVESTOR MEMORANDUM</span>
              </div>

              <div className="max-w-3xl space-y-4">
                <h4 className="font-display text-2xl sm:text-4xl font-extrabold text-[#ede9e1] leading-tight">
                  {activeSlide.headline}
                </h4>
                <p className="font-mono text-xs text-[#8e8a83] leading-relaxed">
                  STRATEGIC GOAL: {activeSlide.narrativeObjective}
                </p>
              </div>

              {/* Data / Diagram module */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#262421]">
                {activeSlide.bulletPoints?.map((bp, i) => (
                  <div key={i} className="p-4 border border-[#262421] bg-[#161513] space-y-2">
                    <span className="font-mono text-[10px] text-[#6d6962] block">POINT 0{i + 1}</span>
                    <p className="text-xs text-[#ede9e1] leading-relaxed font-sans">{bp}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Thumbnail Rail */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono text-[11px]">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`p-3 border text-left transition-all cursor-pointer ${
                  idx === currentSlideIndex
                    ? 'border-[#ede9e1] bg-[#1a1816] text-[#ede9e1]'
                    : 'border-[#262421] bg-[#12110f] text-[#6d6962] hover:text-[#ede9e1]'
                }`}
              >
                <div className="text-[10px] text-[#c97a48] mb-1">0{s.slideNumber}</div>
                <div className="truncate font-medium">{s.title}</div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 5. TACTILE MEDIA ASSETS (Asymmetric Juxtaposition) */}
      {project.assets.length > 1 && (
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-[#262421] pb-3 font-mono text-xs text-[#8e8a83]">
            <span>SYSTEM ARTIFACTS & COLLATERAL</span>
            <span>{project.assets.length - 1} EXTENSIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {project.assets.slice(1).map((asset, i) => (
              <div key={asset.id} className="space-y-3">
                <div className="border border-[#262421] bg-[#141311] overflow-hidden">
                  <AssetRenderer
                    asset={asset}
                    className="w-full aspect-[4/3] object-cover"
                    showDetailsOnHover={false}
                  />
                </div>
                <div className="flex justify-between font-mono text-[11px] text-[#6d6962]">
                  <span className="uppercase text-[#8e8a83]">{asset.slotLabel}</span>
                  <span>{asset.recommendedDimensions}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. COLOR LEDGER & TYPOGRAPHY SPECIMEN */}
      <section className="space-y-8 pt-8 border-t border-[#262421]">
        <div className="font-mono text-xs text-[#8e8a83] uppercase tracking-wider flex justify-between">
          <span>03 // FORM & CHROMATIC ARCHITECTURE</span>
          <span>DESIGN TOKENS</span>
        </div>

        {/* Color Palette Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          {[
            { label: 'PRIMARY CORE', hex: project.colorTheme.primary },
            { label: 'SURFACE CHARCOAL', hex: project.colorTheme.secondary },
            { label: 'VOID CANVAS', hex: project.colorTheme.background },
            { label: 'ACCENT HIGHLIGHT', hex: project.colorTheme.accent }
          ].map((c, idx) => (
            <div
              key={idx}
              onClick={() => copyHex(c.hex)}
              className="p-4 border border-[#262421] bg-[#141311] hover:border-[#44403b] transition-all cursor-pointer group space-y-3"
            >
              <div
                className="w-full h-12 border border-[#262421]"
                style={{ backgroundColor: c.hex }}
              />
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-[#6d6962] block">{c.label}</span>
                  <span className="text-xs text-[#ede9e1] font-bold">{c.hex}</span>
                </div>
                <span className="text-[10px] text-[#c97a48] opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedHex === c.hex ? 'COPIED' : 'COPY'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Typographic Specimen */}
        {project.typographySpecimen && (
          <div className="p-8 border border-[#262421] bg-[#12110f] space-y-6">
            <div className="flex justify-between font-mono text-xs text-[#8e8a83] border-b border-[#262421] pb-3">
              <span>SPECIMEN: {project.typographySpecimen.primaryFont.toUpperCase()}</span>
              <span>FIGURES 0-9 / TABULAR</span>
            </div>
            <p className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#ede9e1]">
              {project.typographySpecimen.sampleText}
            </p>
            <div className="font-mono text-xs text-[#6d6962] flex justify-between pt-2">
              <span>BODY PROSE: {project.typographySpecimen.secondaryFont}</span>
              <span>TRACKING: -0.03EM</span>
            </div>
          </div>
        )}
      </section>

      {/* 7. Visual Next Project Preview (Work page order) */}
      <NextProjectPreview
        currentProjectSlug={project.slug || project.id}
        onSelectProjectSlug={(slug) => {
          if (onSelectProjectSlug) {
            onSelectProjectSlug(slug);
          } else {
            onNextProject();
          }
        }}
      />
    </article>
  );
};
