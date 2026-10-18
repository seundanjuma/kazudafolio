import React, { useState, useEffect } from 'react';
import { Project, PitchDeckSlide } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, BarChart3, ShieldCheck, TrendingUp, Compass, Layers } from 'lucide-react';

interface PitchDeckViewerProps {
  project: Project;
  onClose?: () => void;
}

export const PitchDeckViewer: React.FC<PitchDeckViewerProps> = ({ project }) => {
  const slides = project.slides || [];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeSlide: PitchDeckSlide | undefined = slides[currentSlideIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, isFullscreen]);

  if (!slides.length || !activeSlide) {
    return (
      <div className="p-8 text-center text-white/50 border border-white/10 rounded-lg">
        Slide presentation assets being updated.
      </div>
    );
  }

  const renderSlideGraphic = (slide: PitchDeckSlide) => {
    switch (slide.graphicType) {
      case 'cover-statement':
        return (
          <div className="w-full h-full flex flex-col justify-between p-8 md:p-14">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
                {project.title} // CONFIDENTIAL INVESTOR DECK
              </span>
              <span className="text-xs font-mono text-white/40">{project.year}</span>
            </div>
            <div className="max-w-2xl">
              <span
                className="text-xs font-mono font-bold tracking-widest uppercase mb-3 block"
                style={{ color: slide.accentColor }}
              >
                SERIES FINANCING MEMORANDUM
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {slide.headline}
              </h2>
            </div>
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs font-mono text-white/70">
              {slide.bulletPoints?.map((bp, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: slide.accentColor }} />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'metric-cards':
        return (
          <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
            <div>
              <span className="text-xs font-mono tracking-widest text-red-400 uppercase block mb-2">
                CRITICAL MARKET BOTTLENECK
              </span>
              <h3 className="font-display text-xl md:text-3xl font-bold text-white max-w-2xl leading-snug">
                {slide.headline}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {slide.bulletPoints?.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-red-500/20 bg-red-950/20 backdrop-blur-sm flex flex-col justify-between space-y-4"
                >
                  <span className="text-xs font-mono text-red-300/60 uppercase">0{idx + 1} / FRICTION</span>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">{point}</p>
                  <div className="h-0.5 w-12 bg-red-500/40 rounded" />
                </div>
              ))}
            </div>

            {slide.keyMetric && (
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/60">{slide.keyMetric.label}</span>
                <span className="text-2xl font-mono font-bold text-red-400 tabular-nums">
                  {slide.keyMetric.value}
                </span>
              </div>
            )}
          </div>
        );

      case 'system-diagram':
        return (
          <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
            <div>
              <span
                className="text-xs font-mono tracking-widest uppercase block mb-2"
                style={{ color: slide.accentColor }}
              >
                PROPRIETARY ARCHITECTURE
              </span>
              <h3 className="font-display text-xl md:text-3xl font-bold text-white max-w-2xl leading-snug">
                {slide.headline}
              </h3>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="my-6 grid grid-cols-3 gap-3 items-center">
              <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10 text-center">
                <div className="text-[10px] font-mono text-white/50 mb-1">INPUT</div>
                <div className="text-sm font-semibold text-white">Legacy PACS / DICOM</div>
                <div className="text-[11px] text-white/40 mt-1">Direct Hardware Feeds</div>
              </div>
              <div className="p-4 rounded-lg border text-center shadow-lg relative" style={{ borderColor: slide.accentColor, backgroundColor: `${slide.accentColor}10` }}>
                <div className="text-[10px] font-mono uppercase font-bold" style={{ color: slide.accentColor }}>NEXA INFERENCE</div>
                <div className="text-sm font-bold text-white mt-1">Edge Neural Triage</div>
                <div className="text-[11px] text-white/70 mt-1">&lt; 90s Turnaround</div>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10 text-center">
                <div className="text-[10px] font-mono text-white/50 mb-1">OUTPUT</div>
                <div className="text-sm font-semibold text-white">Prioritized Radiologist Alert</div>
                <div className="text-[11px] text-emerald-400 mt-1">99.4% Verified Precision</div>
              </div>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4">
              {slide.bulletPoints?.map((bp, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market-pyramid':
        return (
          <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
            <div>
              <span
                className="text-xs font-mono tracking-widest uppercase block mb-2"
                style={{ color: slide.accentColor }}
              >
                OPPORTUNITY DEFENSE
              </span>
              <h3 className="font-display text-xl md:text-3xl font-bold text-white max-w-2xl leading-snug">
                {slide.headline}
              </h3>
            </div>

            {/* Market Sizing Diagram */}
            <div className="my-6 space-y-3">
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-white/40 block">TAM</span>
                  <span className="text-sm font-medium text-white/90">Global Emergency Radiology Software</span>
                </div>
                <span className="text-xl font-mono font-bold text-white/60 tabular-nums">$42B</span>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.05] border border-white/[0.15] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-white/60 block">SAM</span>
                  <span className="text-sm font-medium text-white/90">North American Enterprise Trauma Systems</span>
                </div>
                <span className="text-xl font-mono font-bold text-white/80 tabular-nums">$6.8B</span>
              </div>
              <div
                className="p-4 rounded-lg border flex items-center justify-between shadow-xl"
                style={{ borderColor: slide.accentColor, backgroundColor: `${slide.accentColor}15` }}
              >
                <div>
                  <span className="text-xs font-mono font-bold block" style={{ color: slide.accentColor }}>SOM</span>
                  <span className="text-sm font-semibold text-white">First 48 High-Volume Trauma Centers</span>
                </div>
                <span className="text-2xl font-mono font-extrabold text-white tabular-nums" style={{ color: slide.accentColor }}>
                  $840M
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-white/50 border-t border-white/10 pt-3 flex justify-between">
              <span>BOTTOM-UP REVENUE DERIVATION</span>
              <span>138% NET REVENUE EXPANSION</span>
            </div>
          </div>
        );

      case 'data-chart':
      default:
        return (
          <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
            <div>
              <span
                className="text-xs font-mono tracking-widest uppercase block mb-2"
                style={{ color: slide.accentColor }}
              >
                UNIT ECONOMICS & TRACTION
              </span>
              <h3 className="font-display text-xl md:text-3xl font-bold text-white max-w-2xl leading-snug">
                {slide.headline}
              </h3>
            </div>

            {/* Interactive Bar Chart Representation */}
            <div className="my-6 p-6 rounded-lg bg-black/40 border border-white/10">
              <div className="flex justify-between items-end h-32 gap-4 pt-4 border-b border-white/10 pb-2">
                {[
                  { month: 'Q1', arr: '$0.4M', height: '20%' },
                  { month: 'Q2', arr: '$0.9M', height: '35%' },
                  { month: 'Q3', arr: '$1.8M', height: '55%' },
                  { month: 'Q4', arr: '$2.9M', height: '75%' },
                  { month: 'Current', arr: '$4.2M', height: '100%', highlight: true }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono text-white/60 tabular-nums">{bar.arr}</span>
                    <div
                      className={`w-full rounded-t transition-all duration-500 ${
                        bar.highlight ? '' : 'bg-white/20'
                      }`}
                      style={{
                        height: bar.height,
                        backgroundColor: bar.highlight ? slide.accentColor : undefined
                      }}
                    />
                    <span className="text-[10px] font-mono text-white/40">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {slide.bulletPoints?.map((bp, i) => (
                <div key={i} className="p-3 rounded bg-white/[0.03] border border-white/10 text-xs text-white/80">
                  {bp}
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-[#07090c] p-6 flex flex-col justify-between overflow-y-auto' : ''}`}>
      {/* Deck Header & Mode Switcher */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-white/50 tracking-wider uppercase block">
            PITCH DECK DISCIPLINE · {project.clientSector}
          </span>
          <h3 className="font-display font-bold text-xl text-white">
            {project.title} Investor Presentation
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-white/60">
            Slide <span className="text-white font-bold">{String(currentSlideIndex + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 border border-white/15 hover:border-white/30 rounded text-white/70 hover:text-white transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Deck'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main 16:9 Slide Stage */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#090b0e]">
        {/* Slide Canvas */}
        <div className="w-full h-full relative">
          {renderSlideGraphic(activeSlide)}
        </div>

        {/* Floating Slide Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-2.5 rounded-lg bg-black/70 hover:bg-black border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
            className="p-2.5 rounded-lg bg-black/70 hover:bg-black border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            title="Next Slide (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Type Tag */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/80">
            {activeSlide.slideType} · Slide {activeSlide.slideNumber}
          </span>
        </div>
      </div>

      {/* Narrative Strategy Callout Box */}
      <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div>
          <span className="text-[11px] font-mono text-white/40 uppercase block mb-1">
            NARRATIVE OBJECTIVE
          </span>
          <p className="text-white/80 leading-relaxed font-medium">
            {activeSlide.narrativeObjective}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-mono text-white/40 uppercase block mb-1">
            INFORMATION ARCHITECTURE
          </span>
          <p className="text-white/70 leading-relaxed">
            Layout engineered to lead executive decision-makers through single-point comprehension without cognitive overload.
          </p>
        </div>
        <div>
          <span className="text-[11px] font-mono text-white/40 uppercase block mb-1">
            SLIDE SHORTCUTS
          </span>
          <p className="text-white/60 font-mono text-[11px] leading-relaxed">
            Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">→</kbd> keys to step through the narrative flow.
          </p>
        </div>
      </div>

      {/* Slide Thumbnail Navigation Tray */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-white/40 uppercase block">SLIDE SEQUENCE TRAIL</span>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`p-2.5 rounded-lg text-left transition-all border cursor-pointer ${
                idx === currentSlideIndex
                  ? 'bg-white/10 border-white/40 shadow-md'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                <span className={idx === currentSlideIndex ? 'text-white font-bold' : 'text-white/40'}>
                  0{s.slideNumber}
                </span>
                <span className="text-[9px] text-white/30 truncate max-w-[60px]">{s.slideType}</span>
              </div>
              <div className="text-[11px] font-medium text-white/80 truncate">
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
