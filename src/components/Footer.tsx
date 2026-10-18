import React from 'react';

interface FooterProps {
  onTabChange?: (tab: 'home' | 'work' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="w-full border-t border-[rgba(10,10,10,0.08)] bg-[#f2f2ef] pt-8 sm:pt-10 pb-12 sm:pb-14 font-['Inter'] text-xs text-[rgba(10,10,10,0.55)]">
      <div className="w-full px-3 sm:px-4 md:px-5 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        {/* Left: Direct Contact Information (Email & Phone as clean text links) */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
          <span className="font-medium text-[#0a0a0a]">Stephen Oluwasanmi</span>
          <span className="text-[rgba(10,10,10,0.25)] select-none">/</span>
          <a
            href="mailto:seunsteve1@gmail.com"
            className="text-[rgba(10,10,10,0.65)] hover:text-[#0a0a0a] transition-colors underline-offset-2 hover:underline"
          >
            seunsteve1@gmail.com
          </a>
          <span className="text-[rgba(10,10,10,0.25)] select-none">/</span>
          <a
            href="tel:+2348149678522"
            className="text-[rgba(10,10,10,0.65)] hover:text-[#0a0a0a] transition-colors underline-offset-2 hover:underline"
          >
            +234 (0) 814 967 8522
          </a>
        </div>

        {/* Right: Clean Social Text Links & Colophon */}
        <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://readcv.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            ReadCV
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            Behance
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            X (Twitter)
          </a>
          {onTabChange && (
            <>
              <span className="text-[rgba(10,10,10,0.25)] select-none">·</span>
              <button
                onClick={() => onTabChange('contact')}
                className="hover:text-[#0a0a0a] transition-colors cursor-pointer text-left"
              >
                Inquiries
              </button>
            </>
          )}
          <span className="text-[rgba(10,10,10,0.35)] select-none">·</span>
          <span className="text-[rgba(10,10,10,0.4)]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};
