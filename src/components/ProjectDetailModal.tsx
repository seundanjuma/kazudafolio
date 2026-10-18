import React, { useEffect } from 'react';
import { Project, VisualAsset } from '../types';
import { PitchDeckViewer } from './PitchDeckViewer';
import { BrandSystemViewer } from './BrandSystemViewer';
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
  onInspectAsset?: (asset: VisualAsset) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
  onInspectAsset
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fade-in flex flex-col justify-between">
      {/* Top Modal Bar */}
      <div className="sticky top-0 z-30 bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </button>
          <span className="text-white/20">/</span>
          <span className="text-xs font-mono text-white/40 truncate max-w-[200px] md:max-w-none">
            {project.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/50">
            <button
              onClick={onPrevProject}
              className="p-1.5 hover:text-white border border-white/10 rounded transition-colors cursor-pointer"
              title="Previous Project"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNextProject}
              className="p-1.5 hover:text-white border border-white/10 rounded transition-colors cursor-pointer"
              title="Next Project"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 py-12 space-y-16 flex-1">
        {/* Project Header Context */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="font-mono text-white/80">{project.discipline}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientSector}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.year}</span>
            {project.role && (
              <>
                <span aria-hidden="true">·</span>
                <span>Role: {project.role}</span>
              </>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            {project.title}
          </h1>

          <p className="text-base md:text-xl text-white/80 font-normal leading-relaxed max-w-3xl">
            {project.briefSummary}
          </p>

          {/* Deliverables unboxed tags with subtle separators */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-white/50">
            <span className="text-white/40 uppercase">Deliverables:</span>
            {project.deliverables.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-white/20">/</span>}
                <span className="text-white/70">{item}</span>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Dynamic Presentation Component */}
        <section className="pt-4">
          {project.category === 'pitch-deck' ? (
            <PitchDeckViewer project={project} />
          ) : (
            <BrandSystemViewer
              project={project}
              onInspectAsset={onInspectAsset}
            />
          )}
        </section>

        {/* Narrative Strategy note if present */}
        {project.narrativeStrategy && (
          <section className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/40 block">
              Strategic Design Notes
            </span>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
              {project.narrativeStrategy}
            </p>
          </section>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="border-t border-white/10 bg-[#0c0d10] px-6 md:px-12 py-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <button
            onClick={onPrevProject}
            className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Project</span>
          </button>

          <span className="text-xs font-mono text-white/30">
            Stephen Oluwasanmi Portfolio
          </span>

          <button
            onClick={onNextProject}
            className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <span>Next Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
