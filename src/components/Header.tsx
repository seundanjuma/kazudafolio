import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeTab: 'home' | 'work' | 'about' | 'contact';
  onTabChange: (tab: 'home' | 'work' | 'about' | 'contact') => void;
  hasActiveCaseStudy?: boolean;
  onBackToHome?: () => void;
}

const getFormattedTime = (): string => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  hasActiveCaseStudy,
  onBackToHome
}) => {
  const [timeStr, setTimeStr] = useState<string>(getFormattedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStr(getFormattedTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (tab: 'home' | 'work' | 'about' | 'contact') => {
    if (hasActiveCaseStudy && onBackToHome) {
      onBackToHome();
    }
    onTabChange(tab);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f2f2ef]/95 backdrop-blur-md transition-colors">
      <div className="w-full px-3 sm:px-4 md:px-5 py-4 sm:py-5 flex items-center justify-between gap-4">
        {/* Left: Studio Wordmark in Inter Medium (Reference Typography & Hierarchy) */}
        <button
          onClick={() => handleNav('home')}
          className="font-['Inter'] text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#0a0a0a] tracking-normal hover:opacity-60 transition-opacity cursor-pointer text-left shrink-0"
        >
          Stephen Oluwasanmi
        </button>

        {/* Right: Live Clock & Minimalist Editorial Navigation Row */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 font-['Inter'] text-[12px] sm:text-[13px] md:text-sm">
          {/* Live Clock (Clean Digital Time matching reference: 10:25:03 PM) */}
          <span className="hidden sm:inline-block tabular-nums text-[#0a0a0a] font-normal tracking-normal select-none">
            {timeStr}
          </span>

          {/* Navigation Links: Pure text, generous spacing, no pills, no borders */}
          <nav className="flex items-center gap-3.5 sm:gap-5 md:gap-7 lg:gap-9">
            <button
              onClick={() => handleNav('home')}
              className={`cursor-pointer transition-colors ${
                activeTab === 'home' && !hasActiveCaseStudy
                  ? 'text-[#0a0a0a] font-medium'
                  : 'text-[#0a0a0a]/50 hover:text-[#0a0a0a]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('work')}
              className={`cursor-pointer transition-colors ${
                activeTab === 'work' || hasActiveCaseStudy
                  ? 'text-[#0a0a0a] font-medium'
                  : 'text-[#0a0a0a]/50 hover:text-[#0a0a0a]'
              }`}
            >
              Works
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`cursor-pointer transition-colors ${
                activeTab === 'about' && !hasActiveCaseStudy
                  ? 'text-[#0a0a0a] font-medium'
                  : 'text-[#0a0a0a]/50 hover:text-[#0a0a0a]'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`cursor-pointer transition-colors ${
                activeTab === 'contact' && !hasActiveCaseStudy
                  ? 'text-[#0a0a0a] font-medium'
                  : 'text-[#0a0a0a]/50 hover:text-[#0a0a0a]'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
