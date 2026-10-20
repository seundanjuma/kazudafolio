import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Toggle site-wide maintenance mode.
 * Set `MAINTENANCE_MODE = false` to disable the holding screen and restore the full website.
 */
export const MAINTENANCE_MODE = true;

/**
 * URL for the previous PDF portfolio.
 */
export const PREVIOUS_PORTFOLIO_PDF_URL = 'https://bit.ly/kazudafolio';

export const HoldingScreen: React.FC = () => {
  return (
    <main
      aria-label="Site under construction"
      className="min-h-screen w-full bg-[#f2f2ef] text-[#0a0a0a] flex flex-col items-center justify-center px-4 sm:px-6 py-12 select-none"
    >
      <div className="w-full max-w-xl mx-auto text-center space-y-5 sm:space-y-6">
        <p className="font-['Inter'] text-xs uppercase tracking-widest font-semibold text-[rgba(10,10,10,0.5)]">
          Stephen Oluwasanmi
        </p>

        <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-6xl md:text-7xl font-black normal-case tracking-[0em] text-[#0a0a0a] leading-[0.92]">
          Currently under construction.
        </h1>

        <p className="font-['Inter'] text-sm sm:text-base text-[rgba(10,10,10,0.7)] max-w-md mx-auto leading-relaxed font-normal">
          This portfolio is currently being updated. In the meantime, you can view my previous portfolio (PDF) below.
        </p>

        <div className="pt-2">
          <a
            href={PREVIOUS_PORTFOLIO_PDF_URL}
            target="_blan"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[4px] bg-[#0a0a0a] hover:bg-[#222222] text-[#f2f2ef] font-['Inter'] text-xs font-semibold tracking-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a0a0a]"
          >
            <span>View Previous Portfolio (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
};
