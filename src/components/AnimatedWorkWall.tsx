import React, { useState, useEffect, useRef } from 'react';
import { WorkSnapshot } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface AnimatedWorkWallProps {
  snapshots: WorkSnapshot[];
  onSelectProjectSlug: (slug: string) => void;
}

export const AnimatedWorkWall: React.FC<AnimatedWorkWallProps> = ({
  snapshots,
  onSelectProjectSlug
}) => {
  // Start with 2 cycles of snapshots in normal document flow
  const [batchCount, setBatchCount] = useState<number>(2);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Automatically append more work batches when the user scrolls near the bottom of the page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Seamlessly extend the page downward
          setBatchCount((prev) => prev + 1);
        }
      },
      {
        root: null, // Viewport
        rootMargin: '1000px 0px 400px 0px', // Pre-fetch next batch 1000px before reaching the end
        threshold: 0
      }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
      observer.disconnect();
    };
  }, []);

  // Distribute snapshots evenly into 3 columns on desktop, 2 on mobile
  const col1Items: { snap: WorkSnapshot; key: string }[] = [];
  const col2Items: { snap: WorkSnapshot; key: string }[] = [];
  const col3Items: { snap: WorkSnapshot; key: string }[] = [];

  for (let batch = 0; batch < batchCount; batch++) {
    snapshots.forEach((snap, idx) => {
      const item = { snap, key: `b${batch}-${snap.id}` };
      const colIndex = idx % 3;
      if (colIndex === 0) col1Items.push(item);
      else if (colIndex === 1) col2Items.push(item);
      else col3Items.push(item);
    });
  }

  // Helper to render an individual snapshot card
  const renderCard = (snap: WorkSnapshot, key: string) => {
    let heightClass = 'h-[320px] sm:h-[360px] md:h-[400px]'; // standard
    if (snap.cardSpan === 'tall') heightClass = 'h-[420px] sm:h-[480px] md:h-[540px]';
    if (snap.cardSpan === 'short') heightClass = 'h-[230px] sm:h-[260px] md:h-[290px]';
    if (snap.cardSpan === 'wide') heightClass = 'h-[270px] sm:h-[310px] md:h-[350px]';

    return (
      <div
        key={key}
        onClick={() => onSelectProjectSlug(snap.projectSlug)}
        className={`group relative w-full shrink-0 overflow-hidden cursor-pointer rounded-[4px] bg-[#141416] transition-all duration-300 ease-out select-none ${heightClass}`}
        tabIndex={0}
        role="button"
        aria-label={`Open ${snap.projectTitle} case study — ${snap.headline}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectProjectSlug(snap.projectSlug);
          }
        }}
      >
        {/* Full-bleed visual imagery - only image visible in default state */}
        {snap.customUrl ? (
          <img
            src={snap.customUrl}
            alt={`${snap.projectTitle} — ${snap.headline}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: snap.surfaceColor || '#181A20' }}
          />
        )}

        {/* Hover State: Reveal existing project text in pure white with subtle scrim */}
        {/* No text background, no coloured highlights, no pills, no rectangles behind text */}
        <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 ease-out p-3.5 sm:p-4.5 md:p-5 flex flex-col justify-between pointer-events-none">
          {/* Subtle top-right arrow in pure white */}
          <div className="flex justify-end">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-90" />
          </div>

          {/* Bottom project text in pure white */}
          <div className="space-y-1">
            <h3 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-2xl sm:text-3xl md:text-[2rem] font-bold uppercase tracking-tight text-white leading-none">
              {snap.projectTitle}
            </h3>
            <p className="font-['Inter'] text-xs sm:text-[13px] md:text-sm text-white font-medium leading-snug">
              {snap.headline}
            </p>
            <div className="font-['Inter'] text-[10px] sm:text-[11px] text-white/80 font-normal uppercase tracking-wider pt-0.5">
              {snap.discipline} · {snap.artifactType}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="w-full relative"
      aria-label="Infinite Document-Flow Work Gallery"
    >
      {/* 
        Dense, editorial 3-column layout (2 on mobile):
        - Dramatically reduced gutters (gap-2 sm:gap-2.5 md:gap-3)
        - Extends close to viewport edges with small consistent perimeter
        - No borders, no outlines, pure images in default state
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 w-full">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
          {col1Items.map(({ snap, key }) => renderCard(snap, key))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
          {col2Items.map(({ snap, key }) => renderCard(snap, key))}
        </div>

        {/* Column 3 (Desktop) */}
        <div className="hidden md:flex flex-col gap-2 sm:gap-2.5 md:gap-3">
          {col3Items.map(({ snap, key }) => renderCard(snap, key))}
        </div>
      </div>

      {/* Sentinel element to trigger seamless page extension before bottom is reached */}
      <div ref={sentinelRef} className="h-16 w-full pointer-events-none" aria-hidden="true" />
    </div>
  );
};
