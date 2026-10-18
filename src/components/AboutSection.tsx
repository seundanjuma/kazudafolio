import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <article className="space-y-16 md:space-y-24 max-w-5xl mx-auto py-6">
      {/* Editorial Profile Header */}
      <section className="space-y-6 border-b border-[#262421] pb-12">
        <div className="font-mono text-xs text-[#c97a48] uppercase tracking-widest flex items-center gap-2">
          <span>+</span>
          <span>STEPHEN OLUWASANMI</span>
          <span>·</span>
          <span>PRACTICE OVERVIEW</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#ede9e1] leading-[0.9]">
          Design for endurance, not the scroll cycle.
        </h1>

        <div className="font-mono text-xs text-[#8e8a83] grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#262421]">
          <div>
            <span className="text-[#6d6962] block text-[10px]">TENURE</span>
            <span className="text-[#ede9e1] font-bold">7+ YEARS</span>
          </div>
          <div>
            <span className="text-[#6d6962] block text-[10px]">FOCUS</span>
            <span className="text-[#ede9e1] font-bold">BRAND & DECKS</span>
          </div>
          <div>
            <span className="text-[#6d6962] block text-[10px]">LOCATION</span>
            <span className="text-[#ede9e1] font-bold">WAT / GLOBAL</span>
          </div>
          <div>
            <span className="text-[#6d6962] block text-[10px]">STATUS</span>
            <span className="text-[#c97a48] font-bold">ACCEPTING COMMISSIONS</span>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Manifesto */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 font-mono text-xs text-[#8e8a83] space-y-4">
          <div className="text-[#ede9e1] uppercase font-bold">THE ETHOS</div>
          <p className="leading-relaxed">
            True craft withstands time. Visual systems should outlive marketing fads and fleeting digital trends.
          </p>
        </div>

        <div className="md:col-span-8 space-y-6 text-base md:text-lg text-[#a39e94] leading-relaxed font-sans">
          <p>
            I am a brand and graphic designer with over seven years of professional experience building comprehensive visual identity systems, typography, editorial frameworks, and strategic presentation decks.
          </p>
          <p>
            Over the past three years, I have engineered pitch decks for high-growth ventures and institutional funds. A deck is not cosmetic slide decoration—it is cognitive architecture. I translate dense unit economics, clinical trial data, and regulatory mechanisms into clear, high-conviction investor narratives.
          </p>
        </div>
      </section>

      {/* Disciplines Ledger */}
      <section className="border-t border-[#262421] pt-12 space-y-8">
        <div className="font-mono text-xs text-[#8e8a83] uppercase tracking-wider">
          CORE DISCIPLINES & SCOPE
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
          <div className="p-8 border border-[#262421] bg-[#12110f] space-y-4">
            <span className="text-[#c97a48] block text-[10px] uppercase font-bold">01 // BRAND SYSTEMS</span>
            <h3 className="font-display font-extrabold text-2xl uppercase text-[#ede9e1]">
              Identity Architecture
            </h3>
            <p className="text-[#8e8a83] leading-relaxed font-sans text-sm">
              Comprehensive brand marks, dynamic vector monograms, mathematical grid constructions, packaging suites, and environmental wayfinding.
            </p>
            <div className="pt-4 border-t border-[#262421] space-y-1 text-[#6d6962]">
              <div>· Monogram & Mark Development</div>
              <div>· Die-Cut Packaging & Print Production</div>
              <div>· Architectural Wayfinding & Signage</div>
              <div>· Typographic Hierarchy & Guidelines</div>
            </div>
          </div>

          <div className="p-8 border border-[#262421] bg-[#12110f] space-y-4">
            <span className="text-[#c97a48] block text-[10px] uppercase font-bold">02 // PITCH DECKS</span>
            <h3 className="font-display font-extrabold text-2xl uppercase text-[#ede9e1]">
              Strategic Investor Decks
            </h3>
            <p className="text-[#8e8a83] leading-relaxed font-sans text-sm">
              High-stakes presentations structuring TAM/SAM market opportunity, proprietary technology validation, unit economics, and fundraising narratives.
            </p>
            <div className="pt-4 border-t border-[#262421] space-y-1 text-[#6d6962]">
              <div>· Venture Capital Storyline Pacing</div>
              <div>· TAM / SAM / SOM Visual Sizing</div>
              <div>· Unit Economics & Cohort Retentions</div>
              <div>· Executive One-Pagers & Board Presentations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Collaboration Callout */}
      <section className="p-8 md:p-12 border border-[#262421] bg-[#141311] flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[#c97a48] uppercase">ENGAGEMENT</div>
          <div className="font-display font-extrabold text-2xl uppercase text-[#ede9e1]">
            Ready to build an enduring brand world?
          </div>
        </div>

        <button
          onClick={onOpenContact}
          className="px-6 py-3 bg-[#ede9e1] hover:bg-white text-[#0e0d0c] font-bold uppercase tracking-wider text-xs transition-colors shrink-0 cursor-pointer"
        >
          INITIATE CONVERSATION +
        </button>
      </section>
    </article>
  );
};
