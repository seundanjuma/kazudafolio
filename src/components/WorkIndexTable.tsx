import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { AssetRenderer } from './AssetRenderer';
import { ArrowUpRight, Search } from 'lucide-react';

interface WorkIndexTableProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const WorkIndexTable: React.FC<WorkIndexTableProps> = ({
  projects,
  onSelectProject
}) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchesCategory =
      filter === 'all' ||
      (filter === 'brand-identity' && p.category === 'brand-identity') ||
      (filter === 'pitch-deck' && p.category === 'pitch-deck');

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientSector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262421]">
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#c97a48] uppercase tracking-widest flex items-center gap-2">
            <span>+</span>
            <span>INDEX REPOSITORY</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-[#ede9e1]">
            Archival Project Ledger
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#6d6962] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH ARCHIVE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-[#141311] border border-[#262421] text-[#ede9e1] placeholder-[#6d6962] focus:outline-none focus:border-[#ede9e1] uppercase text-xs w-full sm:w-64"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 border border-[#262421] p-1 bg-[#12110f]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'text-[#8e8a83] hover:text-[#ede9e1]'
              }`}
            >
              ALL [{projects.length}]
            </button>
            <button
              onClick={() => setFilter('brand-identity')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                filter === 'brand-identity'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'text-[#8e8a83] hover:text-[#ede9e1]'
              }`}
            >
              BRAND [{projects.filter((p) => p.category === 'brand-identity').length}]
            </button>
            <button
              onClick={() => setFilter('pitch-deck')}
              className={`px-3 py-1.5 transition-all cursor-pointer ${
                filter === 'pitch-deck'
                  ? 'bg-[#ede9e1] text-[#0e0d0c] font-bold'
                  : 'text-[#8e8a83] hover:text-[#ede9e1]'
              }`}
            >
              DECKS [{projects.filter((p) => p.category === 'pitch-deck').length}]
            </button>
          </div>
        </div>
      </div>

      {/* Main Table & Floating Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table List (8 cols on desktop) */}
        <div className="lg:col-span-8 overflow-x-auto border-t border-[#262421]">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-[#262421] text-[#6d6962] uppercase tracking-wider text-[10px]">
                <th className="py-3 px-3 w-16">ID</th>
                <th className="py-3 px-3">PROJECT</th>
                <th className="py-3 px-3">DISCIPLINE</th>
                <th className="py-3 px-3 hidden sm:table-cell">CLIENT SECTOR</th>
                <th className="py-3 px-3 w-20 text-right">YEAR</th>
                <th className="py-3 px-3 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262421]">
              {filtered.map((project, idx) => (
                <tr
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  onMouseEnter={() => setHoveredProject(project)}
                  className="group hover:bg-[#161512] transition-colors cursor-pointer"
                >
                  <td className="py-4 px-3 text-[#6d6962] font-bold">
                    [ {String(idx + 1).padStart(2, '0')} ]
                  </td>
                  <td className="py-4 px-3">
                    <span className="font-display font-bold text-base text-[#ede9e1] group-hover:text-[#c97a48] transition-colors block">
                      {project.title}
                    </span>
                    <span className="block sm:hidden text-[11px] text-[#8e8a83]">
                      {project.clientSector}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-[#8e8a83]">
                    {project.discipline}
                  </td>
                  <td className="py-4 px-3 hidden sm:table-cell text-[#8e8a83]">
                    {project.clientSector}
                  </td>
                  <td className="py-4 px-3 text-right text-[#8e8a83]">
                    {project.year}
                  </td>
                  <td className="py-4 px-3 text-right">
                    <ArrowUpRight className="w-4 h-4 text-[#6d6962] group-hover:text-[#ede9e1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline-block" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="p-12 text-center font-mono text-xs text-[#6d6962]">
              NO ENTRIES FOUND IN ARCHIVE.
            </div>
          )}
        </div>

        {/* Dynamic Project Live Preview Card (4 cols on desktop) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 p-6 border border-[#262421] bg-[#12110f] space-y-5 font-mono text-xs">
          <div className="flex items-center justify-between text-[10px] text-[#6d6962] border-b border-[#262421] pb-2">
            <span>ARTIFACT INSPECTION</span>
            <span>{hoveredProject ? hoveredProject.year : '2024'}</span>
          </div>

          {hoveredProject ? (
            <div className="space-y-4">
              <div className="border border-[#262421] bg-[#161513] overflow-hidden">
                <AssetRenderer
                  asset={hoveredProject.assets[0]}
                  className="w-full aspect-[4/3] object-cover"
                  showDetailsOnHover={false}
                />
              </div>

              <div>
                <div className="text-[10px] text-[#c97a48] uppercase">
                  {hoveredProject.discipline}
                </div>
                <h4 className="font-display font-extrabold text-2xl uppercase text-[#ede9e1] tracking-tight mt-1">
                  {hoveredProject.title}
                </h4>
                <p className="text-xs text-[#8e8a83] leading-relaxed mt-2 font-sans">
                  {hoveredProject.briefSummary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#262421] text-[10px] text-[#6d6962]">
                SECTOR: {hoveredProject.clientSector.toUpperCase()}
              </div>

              <button
                onClick={() => onSelectProject(hoveredProject)}
                className="w-full py-2.5 bg-[#ede9e1] text-[#0e0d0c] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                OPEN CASE STUDY →
              </button>
            </div>
          ) : (
            <div className="py-24 text-center text-[#6d6962]">
              HOVER ENTRY TO ENGAGE ARTIFACT SCAN.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
