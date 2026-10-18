import React, { useState } from 'react';
import { Project, VisualAsset } from '../types';
import { X, Copy, Check, Upload, Image as ImageIcon, Sliders, Layers } from 'lucide-react';

interface AssetInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onUpdateAssetUrl: (projectId: string, assetId: string, url: string) => void;
}

export const AssetInspectorModal: React.FC<AssetInspectorModalProps> = ({
  isOpen,
  onClose,
  projects,
  onUpdateAssetUrl
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'packagehook');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleFileUpload = (assetId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    onUpdateAssetUrl(currentProject.id, assetId, objectUrl);
  };

  const copySnippet = (asset: VisualAsset) => {
    const snippet = `// Add your asset to /public/projects/${currentProject.id}/${asset.id}.webp\ncustomUrl: '/projects/${currentProject.id}/${asset.id}.webp'`;
    navigator.clipboard.writeText(snippet);
    setCopiedKey(asset.id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0908]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl bg-[#12110f] border border-[#262421] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#262421] flex items-center justify-between bg-[#161513]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c97a48]">
              <Sliders className="w-4 h-4" />
              <span>DESIGNER ASSET SPECIFICATION & TESTING GUIDE</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-[#ede9e1] mt-1">
              Asset Replacement System
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8e8a83] hover:text-[#ede9e1] border border-[#262421] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-mono text-xs">
          <p className="text-[#8e8a83] leading-relaxed">
            Every project uses clearly identified image slots with predefined aspect ratios and suggested dimensions. You can temporarily drop image files here to preview them live, or copy the asset path configuration.
          </p>

          {/* Project Selector dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#161513] border border-[#262421]">
            <label className="text-[10px] text-[#6d6962] uppercase font-bold">SELECT PROJECT ARCHIVE:</label>
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="px-3 py-1.5 bg-[#12110f] border border-[#262421] text-[#ede9e1] text-xs font-mono focus:outline-none focus:border-[#ede9e1] uppercase cursor-pointer"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} ({p.discipline})
                </option>
              ))}
            </select>
          </div>

          {/* Slot Cards List */}
          <div className="space-y-4">
            <span className="text-[10px] text-[#6d6962] uppercase tracking-wider block">
              ASSET SLOTS FOR {currentProject.title.toUpperCase()} ({currentProject.assets.length} SLOTS)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProject.assets.map((asset) => (
                <div
                  key={asset.id}
                  className="p-5 border border-[#262421] bg-[#161513] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start text-[10px] text-[#6d6962] mb-1">
                      <span className="text-[#c97a48] font-bold uppercase">{asset.type}</span>
                      <span>{asset.aspectRatio} RATIO</span>
                    </div>

                    <h4 className="font-display font-extrabold text-sm uppercase text-[#ede9e1]">
                      {asset.slotLabel}
                    </h4>

                    <div className="mt-2 text-[11px] text-[#8e8a83] space-y-1">
                      <div>RECOMMENDED: <span className="text-[#ede9e1]">{asset.recommendedDimensions}</span></div>
                      <div>FORMAT: <span className="text-[#ede9e1]">WEBP / JPG / PNG</span></div>
                      <div>ASSET ID: <span className="text-[#c97a48]">{asset.id}</span></div>
                    </div>

                    {asset.customUrl && (
                      <div className="mt-2 text-[10px] text-[#c97a48] flex items-center gap-1 font-bold">
                        <Check className="w-3 h-3" />
                        <span>LIVE ARTIFACT LOADED INTO BUFFER</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#262421] flex items-center gap-2">
                    <label className="flex-1 py-1.5 px-3 bg-[#ede9e1] hover:bg-white text-[#0e0d0c] font-bold text-[11px] text-center cursor-pointer transition-colors flex items-center justify-center gap-1.5 uppercase">
                      <Upload className="w-3 h-3" />
                      <span>TEST LOCAL ARTIFACT</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(asset.id, e)}
                      />
                    </label>

                    <button
                      onClick={() => copySnippet(asset)}
                      className="py-1.5 px-3 border border-[#262421] hover:border-[#ede9e1] text-[#8e8a83] hover:text-[#ede9e1] text-[11px] transition-colors flex items-center gap-1 cursor-pointer uppercase"
                      title="Copy code snippet"
                    >
                      {copiedKey === asset.id ? <Check className="w-3 h-3 text-[#c97a48]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === asset.id ? 'COPIED' : 'CONFIG'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#262421] bg-[#161513] flex items-center justify-between text-[11px] font-mono text-[#6d6962]">
          <span>DIRT ARCHIVE SPECIFICATION ARCHITECTURE</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#ede9e1] text-[#0e0d0c] font-bold uppercase hover:bg-white transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
