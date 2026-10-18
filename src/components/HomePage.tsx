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
        <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] xl:text-[7.25rem] 2xl:text-[7.5rem] font-black normal-case tracking-[0em] text-[#0a0a0a] leading-[0.9] max-w-6xl lg:max-w-none">
          <span className="lg:whitespace-nowrap">Hi, I'm Stephen Oluwasanmi,</span>{' '}
          <span className="lg:block lg:whitespace-nowrap">I design brand identities</span>
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-3 sm:gap-4 pt-1">
          <p className="font-['Inter'] text-base md:text-lg text-[rgba(10,10,10,0.7)] max-w-2xl leading-relaxed font-normal">
            I find the story a brand is already trying to tell, then build an identity that makes it delightful to experience and impossible to forget.
          </p>

          <button
            onClick={onNavigateToWork}
            className="inline-flex items-center gap-1.5 font-['Inter'] text-xs font-semibold text-[#0a0a0a] hover:opacity-75 transition-opacity cursor-pointer group lg:shrink-0 pb-1 self-start lg:self-auto lg:ml-auto text-left"
          >
            <span>Browse Full Index</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
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
