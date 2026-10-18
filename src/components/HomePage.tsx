import React from 'react';
import { AnimatedWorkWall } from './AnimatedWorkWall';
import { WorkSnapshot, Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  snapshots: WorkSnapshot[];
  featuredProjects: Project[];
  onSelectProjectSlug: (slug: string) => void;
  onNavigateToWork: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  snapshots,
  onSelectProjectSlug,
  onNavigateToWork
}) => {
  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      {/* Prominent Hero Headline & Short Left-Aligned Introduction */}
      <section className="w-full px-3 sm:px-4 md:px-5 pt-3 md:pt-6 space-y-3 md:space-y-4">
        <div className="font-['Inter'] text-xs uppercase tracking-widest font-semibold text-[rgba(10,10,10,0.5)] flex items-center gap-2">
          <span>Stephen Oluwasanmi</span>
          <span>·</span>
          <span>Brand Identity & Pitch Deck Design</span>
          <span>·</span>
          <span>2022—2024</span>
        </div>

        <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold uppercase tracking-tight text-[#0a0a0a] leading-[0.88] max-w-6xl">
          Visual Systems & High-Stakes Presentations.
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1 max-w-6xl">
          <p className="font-['Inter'] text-base md:text-lg text-[rgba(10,10,10,0.7)] max-w-2xl leading-relaxed font-normal">
            Seven years building enduring brand identities and strategic investor pitch decks for high-growth ventures and ambitious institutions.
          </p>

          <button
            onClick={onNavigateToWork}
            className="inline-flex items-center gap-1.5 font-['Inter'] text-xs font-semibold text-[#0a0a0a] hover:opacity-75 transition-opacity cursor-pointer group shrink-0 pb-1"
          >
            <span>Browse Full Index</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* The Dense, Immersive Three-Column Work Wall Extending Close to Viewport Edges */}
      <section className="w-full px-2 sm:px-3 md:px-4">
        <AnimatedWorkWall
          snapshots={snapshots}
          onSelectProjectSlug={onSelectProjectSlug}
        />
      </section>
      
      {/* Absolute zero footer on homepage as explicitly instructed */}
    </div>
  );
};
