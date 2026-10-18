import React, { useState } from 'react';
import { VisualAsset } from '../types';
import { Maximize2 } from 'lucide-react';

interface AssetRendererProps {
  asset: VisualAsset;
  className?: string;
  showDetailsOnHover?: boolean;
  onInspect?: () => void;
  priority?: boolean;
}

export const AssetRenderer: React.FC<AssetRendererProps> = ({
  asset,
  className = '',
  showDetailsOnHover = true,
  onInspect
}) => {
  const [imageError, setImageError] = useState(false);

  // If a custom image was supplied and hasn't errored
  if (asset.customUrl && !imageError) {
    return (
      <div className={`relative overflow-hidden group bg-[#141311] ${className}`}>
        <img
          src={asset.customUrl}
          alt={asset.slotLabel}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {showDetailsOnHover && (
          <div className="absolute inset-0 bg-[#0e0d0c]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 pointer-events-none">
            <span className="text-[10px] font-mono tracking-wider text-[#ede9e1] uppercase">
              {asset.recommendedDimensions} · {asset.slotLabel}
            </span>
            {onInspect && (
              <div className="self-end p-2 bg-[#0e0d0c] border border-[#262421] text-[#ede9e1] pointer-events-auto">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Pure SVG/CSS high-fidelity art-directed placeholder representation with Dirtverse tactile styling
  return (
    <div
      className={`relative overflow-hidden group border border-[#262421] transition-all duration-300 hover:border-[#ede9e1]/40 ${className}`}
      style={{
        backgroundColor: asset.secondaryColor || '#141311'
      }}
    >
      {/* Visual Art Direction based on asset type */}
      {asset.type === 'brand-mark' && (
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-8 relative select-none">
          {/* Subtle Archival Grid Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none dirt-grid-bg" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Geometric Mark Mockup */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-[#ede9e1]/20"
              style={{
                backgroundColor: asset.accentColor,
                color: asset.textColor || '#FFFFFF'
              }}
            >
              <span className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase">
                {asset.sampleHeadline ? asset.sampleHeadline.slice(0, 2) : 'SO'}
              </span>
            </div>

            <h4
              className="font-display font-extrabold text-lg md:text-2xl tracking-tight mb-1 uppercase"
              style={{ color: asset.textColor || '#FFFFFF' }}
            >
              {asset.sampleHeadline || asset.slotLabel}
            </h4>
            <p className="font-mono text-xs opacity-70 tracking-widest uppercase" style={{ color: asset.textColor || '#FFFFFF' }}>
              {asset.sampleSubtitle || 'Brand Identity & Visual System'}
            </p>
          </div>
        </div>
      )}

      {asset.type === 'packaging' && (
        <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 md:p-8 relative select-none">
          <div className="flex items-center justify-between border-b border-[#262421] pb-3">
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#8e8a83]">
              DIE-CUT DIE-LINE // ARCHIVAL SUITE
            </span>
            <span
              className="w-2 h-2"
              style={{ backgroundColor: asset.accentColor }}
            />
          </div>

          <div className="my-8 flex items-center justify-center">
            <div className="w-3/4 max-w-[280px] aspect-[4/3] rounded-lg border border-dashed border-white/20 p-4 flex flex-col justify-between bg-black/30 backdrop-blur-sm shadow-xl">
              <div className="flex justify-between items-start">
                <span className="font-display font-bold text-sm tracking-tight text-white/90">
                  {asset.sampleHeadline?.split(' ')[0] || 'BOX'}
                </span>
                <span className="text-[9px] font-mono text-white/40">FSC-MIX</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-white/20 rounded w-full" />
                <div className="h-1 bg-white/10 rounded w-2/3" />
              </div>
              <div className="flex justify-between items-end pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/60">BATCH #804</span>
                <span
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded text-black"
                  style={{ backgroundColor: asset.accentColor }}
                >
                  SPEC
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60 pt-2">
            <span>{asset.sampleHeadline || 'Modular Packaging Suite'}</span>
            <span className="font-mono text-[11px] text-white/40">{asset.recommendedDimensions}</span>
          </div>
        </div>
      )}

      {asset.type === 'slide' && (
        <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 md:p-8 relative select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded text-black"
                style={{ backgroundColor: asset.accentColor }}
              >
                SLIDE
              </span>
              <span className="text-xs font-mono text-white/60">CONFIDENTIAL INVESTOR DECK</span>
            </div>
            <span className="text-xs font-mono text-white/40">16:9 WIDESCREEN</span>
          </div>

          <div className="my-6 space-y-3">
            <p className="text-xs font-mono text-white/50 tracking-wider uppercase">
              {asset.sampleSubtitle || 'Strategic Problem & Market Shift'}
            </p>
            <h4 className="font-display font-bold text-base md:text-lg text-white/95 leading-snug">
              {asset.sampleHeadline || 'Autonomous Clinical Triage at Scale'}
            </h4>
            
            {/* Simulated Data Graphic */}
            <div className="pt-2 grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded bg-white/[0.04] border border-white/[0.06]">
                <div className="text-[10px] text-white/50 font-mono">GROWTH</div>
                <div className="text-base font-bold font-mono tabular-nums text-white" style={{ color: asset.accentColor }}>
                  3.8x
                </div>
              </div>
              <div className="p-2.5 rounded bg-white/[0.04] border border-white/[0.06]">
                <div className="text-[10px] text-white/50 font-mono">ACCURACY</div>
                <div className="text-base font-bold font-mono tabular-nums text-white">
                  99.4%
                </div>
              </div>
              <div className="p-2.5 rounded bg-white/[0.04] border border-white/[0.06]">
                <div className="text-[10px] text-white/50 font-mono">RETENTION</div>
                <div className="text-base font-bold font-mono tabular-nums text-white">
                  138%
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/50 pt-3 border-t border-white/[0.06]">
            <span>{asset.caption || 'Slide Narrative & Information Architecture'}</span>
            <span className="font-mono text-[11px] text-white/40">{asset.recommendedDimensions}</span>
          </div>
        </div>
      )}

      {asset.type === 'specimen' && (
        <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 md:p-8 relative select-none">
          <div className="flex justify-between items-center text-xs font-mono text-white/50">
            <span>TYPOGRAPHY & GRID SYSTEM</span>
            <span>RATIO 1.618</span>
          </div>
          <div className="my-6">
            <span className="font-display text-4xl md:text-5xl font-black tracking-tighter block text-white/90">
              Aa Bb Gg
            </span>
            <span className="text-xs font-mono tracking-widest text-white/50 mt-2 block">
              0123456789 / $ @ & ! % #
            </span>
          </div>
          <div className="flex justify-between items-center text-xs text-white/60 border-t border-white/10 pt-2">
            <span>{asset.sampleHeadline || 'Specimen Sheet'}</span>
            <span className="font-mono text-[11px] text-white/40">{asset.recommendedDimensions}</span>
          </div>
        </div>
      )}

      {asset.type === 'interface' && (
        <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 md:p-8 relative select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] font-mono text-white/50">MOBILE INTERFACE VIEW</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="my-4 p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <div className="w-16 h-2 bg-white/30 rounded" />
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: asset.accentColor }} />
            </div>
            <div className="space-y-1.5">
              <div className="w-full h-3 bg-white/15 rounded" />
              <div className="w-4/5 h-3 bg-white/10 rounded" />
            </div>
          </div>
          <div className="text-xs text-white/60">
            {asset.sampleHeadline || 'Digital Touchpoint'}
          </div>
        </div>
      )}

      {asset.type === 'collateral' && (
        <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 md:p-8 relative select-none">
          <div className="flex justify-between text-xs font-mono text-white/50">
            <span>PRINT COLLATERAL</span>
            <span>PANTONE CMYK</span>
          </div>
          <div className="my-6 p-4 rounded-lg border border-white/15 bg-white/[0.03] flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-display font-bold text-sm text-white">
                {asset.sampleHeadline || 'Brand Touchpoint'}
              </div>
              <div className="text-xs text-white/50 font-mono">
                {asset.sampleSubtitle || 'Standard Guidelines'}
              </div>
            </div>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono text-xs text-black"
              style={{ backgroundColor: asset.accentColor }}
            >
              OK
            </div>
          </div>
          <div className="text-xs text-white/50 font-mono">
            {asset.recommendedDimensions}
          </div>
        </div>
      )}

      {/* Asset Identifier Tag */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="px-2 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded text-[10px] font-mono text-white/80">
          Slot: {asset.slotLabel}
        </span>
      </div>

      {onInspect && (
        <button
          onClick={onInspect}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-black/80 hover:bg-black backdrop-blur-md border border-white/20 rounded text-white cursor-pointer"
          title="Inspect / Replace Asset"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
