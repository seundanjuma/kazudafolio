import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <article className="w-full px-3 sm:px-4 md:px-5 py-8 md:py-12 space-y-16 md:space-y-24">
      {/* Editorial Profile Header */}
      <section className="space-y-6 border-b border-[rgba(10,10,10,0.08)] pb-10">
        <div className="font-['Inter'] text-xs uppercase tracking-widest font-semibold text-[rgba(10,10,10,0.5)]">
          Stephen Oluwasanmi · Profile & Practice
        </div>

        <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-[0.88] max-w-4xl">
          Design for endurance, not the scroll cycle.
        </h1>

        <div className="font-['Inter'] text-xs text-[rgba(10,10,10,0.6)] grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[rgba(10,10,10,0.08)]">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.4)] block">TENURE</span>
            <span className="text-[#0a0a0a] font-semibold">7+ Years</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.4)] block">FOCUS</span>
            <span className="text-[#0a0a0a] font-semibold">Brand Systems & Pitch Decks</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.4)] block">LOCATION</span>
            <span className="text-[#0a0a0a] font-semibold">WAT · Working Globally</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.4)] block">STATUS</span>
            <span className="text-[#0a0a0a] font-semibold">Available for Commissions</span>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 font-['Inter'] text-xs text-[rgba(10,10,10,0.5)] space-y-3">
          <div className="font-semibold uppercase text-[#0a0a0a] tracking-wider text-[11px]">
            The Design Ethos
          </div>
          <p className="leading-relaxed">
            True craft communicates through its own structure and conviction, not through unnecessary decorative noise.
          </p>
        </div>

        <div className="md:col-span-8 space-y-6 text-base md:text-lg text-[rgba(10,10,10,0.75)] leading-relaxed font-['Inter'] font-normal">
          <p>
            I am a brand and graphic designer with over seven years of professional practice building comprehensive visual identity systems, typography, editorial frameworks, and strategic presentation decks.
          </p>
          <p>
            Over the past three years, I have specialized in pitch deck architecture. Rather than treating presentations as cosmetic slide formatting, I approach decks through the lens of cognitive pacing and information design—translating dense unit economics, clinical trial data, and regulatory mechanisms into clear, high-conviction investor narratives.
          </p>
        </div>
      </section>

      {/* Core Disciplines Breakdown */}
      <section className="border-t border-[rgba(10,10,10,0.08)] pt-12 space-y-8">
        <div className="font-['Inter'] text-xs uppercase tracking-wider font-semibold text-[rgba(10,10,10,0.5)]">
          Core Disciplines & Scope
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[8px] border border-[rgba(10,10,10,0.08)] bg-white space-y-4 shadow-xs">
            <span className="font-['Inter'] text-[10px] font-bold uppercase text-[rgba(10,10,10,0.4)] block">
              DISCIPLINE 01
            </span>
            <h3 className="font-['Formula_Condensed','Barlow_Condensed','Bebas_Neue',sans-serif] text-3xl font-bold uppercase text-[#0a0a0a]">
              Brand Identity Systems
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[rgba(10,10,10,0.65)] leading-relaxed">
              End-to-end visual identity programs that provide longevity, distinctiveness, and systematic scalability across physical and digital mediums.
            </p>
            <div className="pt-4 border-t border-[rgba(10,10,10,0.08)] space-y-1 font-['Inter'] text-xs text-[rgba(10,10,10,0.55)]">
              <div>· Monogram & Primary Mark Systems</div>
              <div>· Die-Cut Packaging & Print Production</div>
              <div>· Architectural Wayfinding & Signage</div>
              <div>· Typographic Hierarchy & Guidelines</div>
            </div>
          </div>

          <div className="p-8 rounded-[8px] border border-[rgba(10,10,10,0.08)] bg-white space-y-4 shadow-xs">
            <span className="font-['Inter'] text-[10px] font-bold uppercase text-[rgba(10,10,10,0.4)] block">
              DISCIPLINE 02
            </span>
            <h3 className="font-['Formula_Condensed','Barlow_Condensed','Bebas_Neue',sans-serif] text-3xl font-bold uppercase text-[#0a0a0a]">
              Strategic Pitch Decks
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-[rgba(10,10,10,0.65)] leading-relaxed">
              High-stakes presentations structuring TAM/SAM market opportunity, proprietary technology validation, unit economics, and fundraising narratives.
            </p>
            <div className="pt-4 border-t border-[rgba(10,10,10,0.08)] space-y-1 font-['Inter'] text-xs text-[rgba(10,10,10,0.55)]">
              <div>· Venture Capital Storyline Pacing</div>
              <div>· TAM / SAM / SOM Visual Sizing</div>
              <div>· Unit Economics & Cohort Retentions</div>
              <div>· Executive One-Pagers & Board Presentations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="p-8 sm:p-12 rounded-[8px] border border-[rgba(10,10,10,0.08)] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-['Inter'] text-xs shadow-xs">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)]">COLLABORATION STATUS</span>
          <h4 className="font-['Formula_Condensed','Barlow_Condensed','Bebas_Neue',sans-serif] text-2xl sm:text-3xl font-bold uppercase text-[#0a0a0a]">
            Available for Select Brand & Deck Commissions
          </h4>
        </div>

        <button
          onClick={onOpenContact}
          className="px-5 py-2.5 rounded-[8px] bg-[#000000] text-white font-semibold text-xs transition-colors hover:bg-[#222222] shrink-0 cursor-pointer"
        >
          Initiate Conversation →
        </button>
      </section>
    </article>
  );
};
