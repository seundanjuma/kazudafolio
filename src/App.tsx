import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { WorkPage, WORK_PROJECTS } from './components/WorkPage';
import { CaseStudyTemplate } from './components/CaseStudyTemplate';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import { WORK_SNAPSHOTS } from './data/snapshots';
import { Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'about' | 'contact'>('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Sync tab change
  const handleTabChange = (tab: 'home' | 'work' | 'about' | 'contact') => {
    setActiveTab(tab);
    setActiveCaseStudy(null);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectSlug = (slug: string) => {
    const found = PROJECTS.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      setActiveCaseStudy(found);
      window.location.hash = `work/${found.slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToWork = () => {
    setActiveCaseStudy(null);
    setActiveTab('work');
    window.location.hash = 'work';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveCaseStudy(null);
    setActiveTab('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step through next/previous case study following exact Work page order
  const handleNextCase = () => {
    if (!activeCaseStudy) return;
    const currentIndex = WORK_PROJECTS.findIndex(
      (p) => p.slug === activeCaseStudy.slug || p.id === activeCaseStudy.id
    );
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % WORK_PROJECTS.length;
    handleSelectProjectSlug(WORK_PROJECTS[nextIndex].slug);
  };

  const handlePrevCase = () => {
    if (!activeCaseStudy) return;
    const currentIndex = WORK_PROJECTS.findIndex(
      (p) => p.slug === activeCaseStudy.slug || p.id === activeCaseStudy.id
    );
    const prevIndex =
      currentIndex === -1
        ? WORK_PROJECTS.length - 1
        : (currentIndex - 1 + WORK_PROJECTS.length) % WORK_PROJECTS.length;
    handleSelectProjectSlug(WORK_PROJECTS[prevIndex].slug);
  };

  // URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActiveCaseStudy(null);
        setActiveTab('home');
        return;
      }

      if (hash.startsWith('work/')) {
        const slug = hash.replace('work/', '');
        const found = PROJECTS.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setActiveCaseStudy(found);
        }
      } else if (hash === 'work') {
        setActiveTab('work');
        setActiveCaseStudy(null);
      } else if (hash === 'about') {
        setActiveTab('about');
        setActiveCaseStudy(null);
      } else if (hash === 'contact') {
        setActiveTab('contact');
        setActiveCaseStudy(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2ef] text-[#0a0a0a]">
      {/* Minimal Navigation Bar */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        hasActiveCaseStudy={Boolean(activeCaseStudy)}
        onBackToHome={handleBackToHome}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
        {activeCaseStudy ? (
          /* Reusable Case Study Template (Dirtverse Wldcntry Layout) */
          <CaseStudyTemplate
            project={activeCaseStudy}
            onNextProject={handleNextCase}
            onPrevProject={handlePrevCase}
            onBackToWork={handleBackToWork}
            onSelectProjectSlug={handleSelectProjectSlug}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomePage
                snapshots={WORK_SNAPSHOTS}
                featuredProjects={PROJECTS.filter((p) => p.featured)}
                onSelectProjectSlug={handleSelectProjectSlug}
                onNavigateToWork={() => handleTabChange('work')}
              />
            )}

            {activeTab === 'work' && (
              <WorkPage
                projects={PROJECTS}
                onSelectProjectSlug={handleSelectProjectSlug}
              />
            )}

            {activeTab === 'about' && (
              <AboutPage
                onOpenContact={() => handleTabChange('contact')}
              />
            )}

            {activeTab === 'contact' && (
              <ContactPage />
            )}
          </>
        )}
      </main>

      {/* Shared Footer on non-homepage pages only (HomePage strictly has NO footer) */}
      {(activeTab !== 'home' || activeCaseStudy !== null) && (
        <Footer onTabChange={handleTabChange} />
      )}
    </div>
  );
}
