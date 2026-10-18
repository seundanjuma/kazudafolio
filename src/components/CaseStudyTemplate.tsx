import React from 'react';
import { Project, PitchDeckSlide } from '../types';
import { WORK_SNAPSHOTS } from '../data/snapshots';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { NextProjectPreview } from './NextProjectPreview';

interface CaseStudyTemplateProps {
  project: Project;
  onNextProject: () => void;
  onPrevProject: () => void;
  onBackToWork: () => void;
  onSelectProjectSlug?: (slug: string) => void;
}

/**
 * Clean, borderless image artwork renderer:
 * - Pure artwork only
 * - No captions beneath
 * - No project titles, labels, or tags
 * - No hover text overlays or scrims
 * - No decorative borders or outer card containers
 */
const ImageArtwork: React.FC<{
  url: string;
  aspectRatio?: string;
  className?: string;
}> = ({ url, aspectRatio = 'aspect-[16/9]', className = '' }) => {
  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-[4px] bg-[#141416] select-none ${className}`}>
      <img
        src={url}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
      />
    </div>
  );
};

/**
 * Pure pitch deck slide artwork renderer:
 * - Sized cleanly in 16:9 widescreen
 * - Renders slide headline, key metrics, and data graphics cleanly
 * - Zero explanatory UI, toolbars, or captions around it
 */
const SlideArtwork: React.FC<{
  slide: PitchDeckSlide;
  projectTitle: string;
  aspectRatio?: string;
}> = ({ slide, projectTitle, aspectRatio = 'aspect-[16/9]' }) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-[4px] overflow-hidden select-none p-5 sm:p-7 md:p-9 flex flex-col justify-between`}
      style={{
        backgroundColor: slide.bgColor || '#0C111C',
        color: slide.textColor || '#FFFFFF',
      }}
    >
      {/* Slide Top Indicator */}
      <div className="flex justify-between items-center opacity-60 text-[10px] sm:text-[11px] font-['Inter'] tracking-widest uppercase">
        <span className="font-semibold">{slide.slideType || 'Presentation Slide'}</span>
        <span className="tabular-nums">0{slide.slideNumber}</span>
      </div>

      {/* Slide Center: Prominent Headline & Metrics */}
      <div className="space-y-3 sm:space-y-4 my-auto">
        <h3 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold uppercase tracking-tight leading-[0.92] max-w-2xl">
          {slide.headline}
        </h3>

        {slide.keyMetric ? (
          <div className="pt-1 sm:pt-2">
            <div
              className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
              style={{ color: slide.accentColor || '#3874FF' }}
            >
              {slide.keyMetric.value}
            </div>
            <div className="text-[10px] sm:text-xs font-['Inter'] opacity-70 uppercase tracking-wider mt-0.5">
              {slide.keyMetric.label}
            </div>
          </div>
        ) : slide.bulletPoints && slide.bulletPoints.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
            {slide.bulletPoints.slice(0, 3).map((bp, i) => (
              <div
                key={i}
                className="p-2.5 sm:p-3 rounded-[3px] bg-white/5 border border-white/10 text-[11px] sm:text-xs font-['Inter'] leading-relaxed opacity-85"
              >
                {bp}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Slide Bottom Bar */}
      <div className="flex justify-between items-center text-[10px] font-['Inter'] opacity-40 uppercase tracking-wider pt-2 border-t border-white/10">
        <span>{projectTitle}</span>
        <span>16:9 Presentation</span>
      </div>
    </div>
  );
};

export const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  project,
  onNextProject,
  onPrevProject,
  onBackToWork,
  onSelectProjectSlug,
}) => {
  // Collect matching snapshots for this project from the curated work wall
  const projectSnapshots = WORK_SNAPSHOTS.filter(
    (s) => s.projectId === project.id || s.projectSlug === project.slug
  );

  /**
   * Continuous, art-directed visual gallery renderer.
   * Tight gutters matching the homepage work wall: gap-2 sm:gap-2.5 md:gap-3
   * Varied image sizes and proportions tailored to the project.
   * No captions, no labels, no hover text, no decorative card wrappers.
   */
  const renderArtworkGallery = () => {
    const slug = project.slug || project.id;
    const slides = project.slides || [];

    // 1. PACKAGEHOOK (Logistics & Supply Chain Brand Identity)
    if (slug === 'packagehook') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Brand Hero */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Packaging + Courier Interface */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* 3-Column Dense Row: Livery + Label Matrix + Monogram in Context */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[16/10]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1507842229458-57793d1dd78e?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[16/10]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[16/10]"
            />
          </div>

          {/* Full-Width Panoramic Motion & Transit Livery */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 2. REPAY (Fintech & Digital Payments Brand Identity)
    if (slug === 'repay') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Matte Obsidian Card */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Spline Mathematical Grid + Settlement Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* 2-Column Pairing: Chromatic Dark Mode Tokens + Editorial Specimen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
          </div>

          {/* Full-Width Seamless Terminal Interaction */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1556742049-0a67e5572240?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 3. AFRICAN EXPORT CLUB (Global Trade & Investment Club)
    if (slug === 'african-export-club') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Continental Guild Crest & Seal */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Monograph + Anti-Counterfeit Certificate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* 2-Column Pairing: Commerce Typography + Maritime Export Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
          </div>

          {/* Full-Width Institutional Parchment & Seal */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 4. THE YARD FITNESS (Athletic Conditioning & Gym Facility)
    if (slug === 'the-yard-fitness') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Raw Industrial Steel Stencil Signage */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 3-Column Dense Row: Apparel Tag + Concrete Wayfinding + Laser Pass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[4/3]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[4/3]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Full-Width Atmospheric Facility Space */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />

          {/* 2-Column Pairing: Heavy Resistance Conditioning Graphics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/10]"
            />
          </div>
        </div>
      );
    }

    // 5. NEXA HEALTH (Series A Clinical Diagnostic Pitch Deck)
    if (slug === 'nexa-health') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Autonomous Emergency Diagnostic Infrastructure */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Slide 1 (Cover) + Slide 2 (The Bottleneck) */}
          {slides.length >= 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
              <SlideArtwork slide={slides[0]} projectTitle={project.title} />
              <SlideArtwork slide={slides[1]} projectTitle={project.title} />
            </div>
          )}

          {/* 2-Column Pairing: Clinical Trials Radiology Scanner + Slide 3 (The Breakthrough) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
            {slides.length >= 3 && (
              <SlideArtwork slide={slides[2]} projectTitle={project.title} />
            )}
          </div>

          {/* 2-Column Pairing: Slide 4 (Market Sizing) + Emergency TAM Hospital Data Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            {slides.length >= 4 && (
              <SlideArtwork slide={slides[3]} projectTitle={project.title} />
            )}
            <ImageArtwork
              url="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* 2-Column Pairing: Slide 5 (Unit Economics) + Slide 6 (Commercial Traction) */}
          {slides.length >= 6 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
              <SlideArtwork slide={slides[4]} projectTitle={project.title} />
              <SlideArtwork slide={slides[5]} projectTitle={project.title} />
            </div>
          )}

          {/* Full-Width Telemetry & Enterprise Hospital Deployment */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 6. ORBIT FLEET (Seed Logistics & Autonomous Telematics Pitch Deck)
    if (slug === 'orbit-fleet') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Autonomous Freight Fleet in Transit */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Slide 1 (Seed Cover) + Slide 2 (The Operating Crisis) */}
          {slides.length >= 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
              <SlideArtwork slide={slides[0]} projectTitle={project.title} />
              <SlideArtwork slide={slides[1]} projectTitle={project.title} />
            </div>
          )}

          {/* 2-Column Pairing: Sensor Telemetry Hardware + Slide 3 (Frictionless OBD-II Solution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
            {slides.length >= 3 && (
              <SlideArtwork slide={slides[2]} projectTitle={project.title} />
            )}
          </div>

          {/* 2-Column Pairing: Slide 4 (Commercial Traction) + Predictive Fleet Radar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            {slides.length >= 4 && (
              <SlideArtwork slide={slides[3]} projectTitle={project.title} />
            )}
            <ImageArtwork
              url="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Full-Width Heavy Commercial Freight Corridor */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 7. KORA CARBON (Climate Tech & Carbon Removal Registry Pitch Deck)
    if (slug === 'kora-carbon') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Geochemical Soil Spectroscopy Verification */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Institutional Slide Spread + Satellite Optical Monitoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <SlideArtwork
              slide={{
                slideNumber: 1,
                slideType: 'Cover',
                title: 'Institutional Deck',
                headline: 'Permanent Carbon Sequestration Registry & Verification Infrastructure',
                narrativeObjective: 'Institutional sovereign capital placement.',
                graphicType: 'cover-statement',
                keyMetric: { label: 'Verified Geochemical Permanence', value: '10,000+ Yrs' },
                accentColor: '#10B981',
                bgColor: '#061B13',
                textColor: '#FFFFFF',
              }}
              projectTitle={project.title}
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* 2-Column Pairing: Carbon Market MRV Model + Geospatial Sensor Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Full-Width Agricultural Field Sequestration Trial Site */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // 8. VESPER RETAIL (Omnichannel Merchant OS Presentation & Identity)
    if (slug === 'vesper-retail') {
      return (
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {/* Panoramic Hero: Flagship Retail Space */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />

          {/* 2-Column Pairing: Debossed Packaging Suite + Series B Deck Spread */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
            <SlideArtwork
              slide={{
                slideNumber: 1,
                slideType: 'Cover',
                title: 'Series B Presentation',
                headline: 'Unified Physical & Digital Merchant Operating System',
                narrativeObjective: 'Enterprise cohort multi-store expansion.',
                graphicType: 'cover-statement',
                keyMetric: { label: 'Net Merchant Expansion Rate', value: '144%' },
                accentColor: '#8B5CF6',
                bgColor: '#130C24',
                textColor: '#FFFFFF',
              }}
              projectTitle={project.title}
            />
          </div>

          {/* 2-Column Pairing: Flagship Boutique Architecture + Typography Specimen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            <ImageArtwork
              url="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
            <ImageArtwork
              url="https://images.unsplash.com/photo-1507842229458-57793d1dd78e?auto=format&fit=crop&w=1200&q=80"
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Full-Width Luxury Fragrance Glass Architecture */}
          <ImageArtwork
            url="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80"
            aspectRatio="aspect-[16/9]"
          />
        </div>
      );
    }

    // Dynamic Fallback for any other projects (Ligada, Cota, Cipher, Catalyst Bio, etc.)
    const urls: string[] = [];
    projectSnapshots.forEach((s) => {
      if (s.customUrl && !urls.includes(s.customUrl)) urls.push(s.customUrl);
    });
    project.assets.forEach((a) => {
      if (a.customUrl && !urls.includes(a.customUrl)) urls.push(a.customUrl);
    });

    if (urls.length === 0) {
      urls.push('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80');
    }

    return (
      <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
        {/* Full-width hero */}
        <ImageArtwork url={urls[0]} aspectRatio="aspect-[16/9] md:aspect-[21/9]" />

        {/* 2-column or 3-column remaining images */}
        {urls.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            {urls.slice(1, 3).map((url, i) => (
              <ImageArtwork key={i} url={url} aspectRatio="aspect-[4/3]" />
            ))}
          </div>
        )}

        {urls.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
            {urls.slice(3, 6).map((url, i) => (
              <ImageArtwork key={i} url={url} aspectRatio="aspect-[16/10]" />
            ))}
          </div>
        )}

        {/* Supporting pitch deck slides if available */}
        {slides.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
            {slides.slice(0, 2).map((slide, i) => (
              <SlideArtwork key={i} slide={slide} projectTitle={project.title} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <article className="w-full px-3 sm:px-4 md:px-5 pt-3 md:pt-6 pb-12 sm:pb-16 space-y-8 sm:space-y-12">
      {/* 1. Case Study Navigation Breadcrumb */}
      <div className="flex items-center justify-between font-['Inter'] text-xs text-[rgba(10,10,10,0.5)] border-b border-[rgba(10,10,10,0.08)] pb-4">
        <button
          onClick={onBackToWork}
          className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Work</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline uppercase tracking-wider text-[11px]">
            {project.discipline} · {project.year}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={onPrevProject}
              className="p-1 hover:text-[#0a0a0a] border border-[rgba(10,10,10,0.12)] rounded-[4px] transition-colors cursor-pointer"
              title="Previous Project"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNextProject}
              className="p-1 hover:text-[#0a0a0a] border border-[rgba(10,10,10,0.12)] rounded-[4px] transition-colors cursor-pointer"
              title="Next Project"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Project Title & Metadata Specification Ledger */}
      <section className="space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <div className="font-['Inter'] text-xs font-semibold uppercase tracking-widest text-[rgba(10,10,10,0.5)]">
            {project.clientSector}
          </div>
          <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-6xl sm:text-8xl md:text-9xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-[0.88] break-words">
            {project.title}
          </h1>
        </div>

        {/* 4-Column Metadata Ledger (Spec Sheet) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[rgba(10,10,10,0.08)] divide-y md:divide-y-0 md:divide-x divide-[rgba(10,10,10,0.08)] font-['Inter'] text-xs">
          <div className="p-4 sm:p-5 space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">CLIENT</span>
            <span className="text-[#0a0a0a] font-medium block text-sm">{project.title}</span>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">YEAR</span>
            <span className="text-[#0a0a0a] font-medium block text-sm">{project.year}</span>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">DISCIPLINE</span>
            <span className="text-[#0a0a0a] font-medium block text-sm">{project.discipline}</span>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">ROLE & SCOPE</span>
            <span className="text-[#0a0a0a] font-medium block text-sm">{project.role}</span>
          </div>
        </div>
      </section>

      {/* 3. Strategic Narrative & Context: Compact Objective and Scope Mini-Section & Project Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-8 border-y border-[rgba(10,10,10,0.08)]">
        <div className="lg:col-span-4 font-['Inter'] text-xs text-[rgba(10,10,10,0.6)] space-y-4">
          <div className="font-semibold uppercase text-[#0a0a0a] tracking-wider text-[11px]">
            The Objective & Scope
          </div>
          <p className="leading-relaxed">
            Constructing an enduring visual ecosystem that eliminates unnecessary decorative noise and delivers crystalline clarity across all touchpoints.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-tight">
            {project.briefSummary}
          </h2>
          {project.narrativeStrategy && (
            <p className="text-base text-[rgba(10,10,10,0.7)] leading-relaxed font-['Inter']">
              {project.narrativeStrategy}
            </p>
          )}
        </div>
      </section>

      {/* 4. Dense Artwork Gallery: Visual work begins immediately after Objective & Scope */}
      <section className="w-full">
        {renderArtworkGallery()}
      </section>

      {/* 5. Visual Next Project Preview (Dynamic Work page order) */}
      <NextProjectPreview
        currentProjectSlug={project.slug || project.id}
        onSelectProjectSlug={(slug) => {
          if (onSelectProjectSlug) {
            onSelectProjectSlug(slug);
          } else {
            onNextProject();
          }
        }}
      />
    </article>
  );
};
