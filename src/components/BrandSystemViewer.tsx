import React, { useState } from 'react';
import { Project, VisualAsset } from '../types';
import { AssetRenderer } from './AssetRenderer';
import { Layers, Palette, Type, Box, Smartphone, Check, Copy } from 'lucide-react';

interface BrandSystemViewerProps {
  project: Project;
  onInspectAsset?: (asset: VisualAsset) => void;
}

export const BrandSystemViewer: React.FC<BrandSystemViewerProps> = ({
  project,
  onInspectAsset
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const colors = [
    { name: 'Primary Core', hex: project.colorTheme.primary, desc: 'Dominant identity mark & key focus' },
    { name: 'Structural Charcoal', hex: project.colorTheme.secondary, desc: 'Container surfaces & frames' },
    { name: 'Canvas Void', hex: project.colorTheme.background, desc: 'Base canvas contrast field' },
    { name: 'Accent Highlight', hex: project.colorTheme.accent, desc: 'Action points & high-impact tokens' }
  ];

  return (
    <div className="space-y-12">
      {/* 1. Primary Identity Lockup & Core Asset */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-white/50" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/70">
              01. Core Identity & Construction
            </h4>
          </div>
          <span className="text-xs font-mono text-white/40">VECTOR MATRIX</span>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10">
          <AssetRenderer
            asset={project.assets[0]}
            className="w-full aspect-[16/9]"
            onInspect={() => onInspectAsset?.(project.assets[0])}
          />
        </div>
      </section>

      {/* 2. Color System & Design Tokens */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-white/50" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/70">
              02. Color Architecture & Tonal Ratios
            </h4>
          </div>
          <span className="text-xs font-mono text-white/40">60-30-10 DISTRIBUTION</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {colors.map((c, i) => (
            <div
              key={i}
              onClick={() => copyToClipboard(c.hex)}
              className="p-4 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all cursor-pointer group space-y-3"
            >
              <div
                className="w-full h-16 rounded-md shadow-inner border border-white/10 relative flex items-center justify-center"
                style={{ backgroundColor: c.hex }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-black/60 rounded text-[10px] font-mono text-white flex items-center gap-1">
                  {copiedHex === c.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copiedHex === c.hex ? 'Copied' : 'Copy'}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-white/80 transition-colors">
                  {c.name}
                </div>
                <div className="text-[11px] font-mono text-white/50 mt-0.5">
                  {c.hex}
                </div>
                <div className="text-[10px] text-white/40 mt-1">
                  {c.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Typography Specimen */}
      {project.typographySpecimen && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-white/50" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/70">
                03. Typographic System & Hierarchy
              </h4>
            </div>
            <span className="text-xs font-mono text-white/40">HIERARCHY PAIRING</span>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono text-white/40 uppercase block">PRIMARY DISPLAY FACE</span>
                <span className="text-lg md:text-xl font-display font-bold text-white">
                  {project.typographySpecimen.primaryFont}
                </span>
              </div>
              <div className="text-xs font-mono text-white/60">
                TRACKING -0.02EM · OPTICAL BALANCE
              </div>
            </div>

            <div className="py-2">
              <p className="font-display text-2xl md:text-4xl font-black text-white/95 leading-tight tracking-tight">
                {project.typographySpecimen.sampleText}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/60 font-mono gap-2">
              <span>SECONDARY BODY PROSE: {project.typographySpecimen.secondaryFont}</span>
              <span>FIGURE NUMERALS: 0123456789 / TABULAR</span>
            </div>
          </div>
        </section>
      )}

      {/* 4. Touchpoints & Collateral Gallery */}
      {project.assets.length > 1 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4 text-white/50" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/70">
                04. Packaging, Physical Mockups & Touchpoints
              </h4>
            </div>
            <span className="text-xs font-mono text-white/40">APPLICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.assets.slice(1).map((asset) => (
              <div key={asset.id} className="space-y-2">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <AssetRenderer
                    asset={asset}
                    className="w-full aspect-[4/3]"
                    onInspect={() => onInspectAsset?.(asset)}
                  />
                </div>
                <div className="px-1 text-xs text-white/60">
                  <span className="font-medium text-white/80">{asset.slotLabel}</span>
                  {asset.caption && <span className="block text-white/40 mt-0.5">{asset.caption}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
