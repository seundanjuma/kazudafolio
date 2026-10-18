import React from 'react';
import { Project } from '../types';

export interface WorkProjectItem {
  id: string;
  slug: string;
  title: string;
  discipline: string;
  category: 'brand-identity' | 'pitch-deck';
  year: string;
  imageUrl: string;
}

/**
 * Modular data structure for exactly 8 featured projects on the Work page.
 * Easy to edit, reorder, or replace.
 */
export const WORK_PROJECTS: WorkProjectItem[] = [
  {
    id: 'packagehook',
    slug: 'packagehook',
    title: 'Packagehook',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'repay',
    slug: 'repay',
    title: 'Repay',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'african-export-club',
    slug: 'african-export-club',
    title: 'African Export Club',
    discipline: 'Pitch Deck',
    category: 'pitch-deck',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'the-yard-fitness',
    slug: 'the-yard-fitness',
    title: 'The Yard Fitness',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'nexa-health',
    slug: 'nexa-health',
    title: 'Nexa Health',
    discipline: 'Pitch Deck',
    category: 'pitch-deck',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'orbit-fleet',
    slug: 'orbit-fleet',
    title: 'Orbit Fleet',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'kora-carbon',
    slug: 'kora-carbon',
    title: 'Kora Carbon',
    discipline: 'Pitch Deck',
    category: 'pitch-deck',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'vesper-retail',
    slug: 'vesper-retail',
    title: 'Vesper Retail',
    discipline: 'Brand Identity',
    category: 'brand-identity',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
  },
];

interface WorkPageProps {
  projects?: Project[];
  onSelectProjectSlug: (slug: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onSelectProjectSlug,
}) => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-5 pt-3 md:pt-6 pb-12 sm:pb-16 space-y-8 sm:space-y-12">
      {/* Clean Minimalist Editorial Title Section */}
      <section className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 sm:pb-8 border-b border-[rgba(10,10,10,0.08)]">
        <div className="space-y-1">
          <div className="font-['Inter'] text-xs uppercase tracking-widest font-semibold text-[rgba(10,10,10,0.5)]">
            Selected Work · 2022—2024
          </div>
          <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-none">
            Index of Projects.
          </h1>
        </div>

        <div className="font-['Inter'] text-xs uppercase tracking-widest text-[rgba(10,10,10,0.45)]">
          08 Works · All Disciplines
        </div>
      </section>

      {/* Two-Column Editorial Grid on Desktop, Single Column on Mobile */}
      {/* Exactly 8 projects in total, matching homepage outer margins (px-3 sm:px-4 md:px-5) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-14 md:gap-y-16">
        {WORK_PROJECTS.map((item) => (
          <article
            key={item.id}
            onClick={() => onSelectProjectSlug(item.slug)}
            className="group cursor-pointer select-none flex flex-col focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title} case study`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectProjectSlug(item.slug);
              }
            }}
          >
            {/* Large Image-Led Project Space (No text overlays, no decorative borders, no card backgrounds) */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#e4e4df]">
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            </div>

            {/* Simple Minimal Caption Directly Beneath Each Image */}
            <div className="mt-3 sm:mt-3.5 flex items-baseline justify-between gap-4 font-['Inter']">
              <h2 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-2xl sm:text-3xl md:text-[2rem] font-bold uppercase tracking-tight text-[#0a0a0a] leading-none group-hover:opacity-70 transition-opacity">
                {item.title}
              </h2>
              <span className="text-xs sm:text-[13px] text-[rgba(10,10,10,0.5)] font-normal tracking-normal shrink-0">
                {item.discipline}
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
