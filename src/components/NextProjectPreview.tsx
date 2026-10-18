import React from 'react';
import { WORK_PROJECTS, WorkProjectItem } from './WorkPage';
import { ArrowUpRight } from 'lucide-react';

interface NextProjectPreviewProps {
  currentProjectSlug: string;
  onSelectProjectSlug: (slug: string) => void;
}

/**
 * Reusable visual Next Project Preview component:
 * - Dynamic label directly above the preview image in the format: "View [Next Project] Case Study ↗"
 * - Styled to match "Logistics & Supply Chain" typography from Packagehook case study
 * - Reduced preview image height to 2/5 (40%) of existing height while preserving full width
 * - Entire component (label and image) is clickable, linking to the next case study
 * - Follows exact Work page sequence and loops from last project back to the first
 */
export const NextProjectPreview: React.FC<NextProjectPreviewProps> = ({
  currentProjectSlug,
  onSelectProjectSlug,
}) => {
  // Find current index in WORK_PROJECTS (the Work page order)
  const currentIndex = WORK_PROJECTS.findIndex(
    (p) => p.slug === currentProjectSlug || p.id === currentProjectSlug
  );

  // Determine next project dynamically, looping back to index 0 after the last project
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % WORK_PROJECTS.length;
  const nextProject: WorkProjectItem = WORK_PROJECTS[nextIndex];

  return (
    <section className="pt-8 sm:pt-12 border-t border-[rgba(10,10,10,0.08)]">
      <div
        onClick={() => onSelectProjectSlug(nextProject.slug)}
        className="group cursor-pointer select-none flex flex-col focus:outline-none"
        tabIndex={0}
        role="button"
        aria-label={`View ${nextProject.title} Case Study`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectProjectSlug(nextProject.slug);
          }
        }}
      >
        {/* Dynamic Label matching "Logistics & Supply Chain" typography with small northeast arrow */}
        <div className="inline-flex items-center gap-1.5 font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[rgba(10,10,10,0.5)] group-hover:text-[#0a0a0a] transition-colors mb-2.5 sm:mb-3">
          <span>View {nextProject.title} Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Preview image with height reduced to 2/5 (40%) of existing height while preserving full width */}
        <div className="relative w-full aspect-[40/9] md:aspect-[35/6] overflow-hidden rounded-[4px] bg-[#141416]">
          <img
            src={nextProject.imageUrl}
            alt={nextProject.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </div>
    </section>
  );
};
