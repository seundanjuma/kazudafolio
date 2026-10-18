import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Brand Identity',
    timeline: 'Q2 / Q3 2024',
    brief: ''
  });

  const email = 'seunsteve1@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="space-y-16 max-w-5xl mx-auto py-6">
      {/* Contact Header */}
      <section className="space-y-4 border-b border-[#262421] pb-10">
        <div className="font-mono text-xs text-[#c97a48] uppercase tracking-widest flex items-center gap-2">
          <span>+</span>
          <span>INITIATE DISPATCH</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#ede9e1] leading-[0.9]">
          Direct Communication.
        </h1>

        <p className="font-mono text-xs text-[#8e8a83] max-w-xl leading-relaxed">
          For brand identity commissions, strategic pitch deck inquiries, or advisory engagements. Direct correspondence is preferred.
        </p>
      </section>

      {/* Archival Inquiry Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Direct Channel Ledger (5 cols) */}
        <div className="md:col-span-5 space-y-8 font-mono text-xs">
          {/* Direct Email Box */}
          <div className="p-6 border border-[#262421] bg-[#12110f] space-y-4">
            <span className="text-[10px] text-[#6d6962] uppercase block">DIRECT ELECTRONIC MAIL</span>
            <div className="text-sm md:text-base text-[#ede9e1] break-all font-bold">
              {email}
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 border border-[#262421] hover:border-[#ede9e1] text-[#ede9e1] text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-[#c97a48]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED TO BUFFER' : 'COPY EMAIL'}</span>
              </button>
              <a
                href={`mailto:${email}?subject=Project%20Commission%20Inquiry`}
                className="px-3 py-1.5 bg-[#ede9e1] hover:bg-white text-[#0e0d0c] font-bold text-[11px] transition-colors"
              >
                DISPATCH →
              </a>
            </div>
          </div>

          {/* Ledger coordinates */}
          <div className="p-6 border border-[#262421] bg-[#12110f] space-y-3 divide-y divide-[#262421]">
            <div className="pb-3 space-y-1">
              <span className="text-[10px] text-[#6d6962] uppercase block">TIMEZONE / AVAILABILITY</span>
              <span className="text-[#ede9e1]">WAT (UTC+1) · Available for Select Commissions</span>
            </div>
            <div className="pt-3 space-y-1">
              <span className="text-[10px] text-[#6d6962] uppercase block">TYPICAL RESPONSE WINDOW</span>
              <span className="text-[#8e8a83]">Within 24 to 48 standard business hours</span>
            </div>
          </div>

          {/* Network Coordinates */}
          <div className="space-y-2">
            <span className="text-[10px] text-[#6d6962] uppercase block">ARCHIVAL CHANNELS</span>
            <div className="space-y-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-[#262421] hover:border-[#ede9e1] text-[#8e8a83] hover:text-[#ede9e1] transition-colors"
              >
                <span>LINKEDIN // STEPHEN OLUWASANMI</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://readcv.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-[#262421] hover:border-[#ede9e1] text-[#8e8a83] hover:text-[#ede9e1] transition-colors"
              >
                <span>READCV // PRACTICE PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-[#262421] hover:border-[#ede9e1] text-[#8e8a83] hover:text-[#ede9e1] transition-colors"
              >
                <span>BEHANCE // CURATED SELECTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Archival Inquiry Form (7 cols) */}
        <div className="md:col-span-7 p-8 border border-[#262421] bg-[#12110f] font-mono text-xs">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="text-[#c97a48] text-base font-bold">[ DISPATCH RECORDED ]</div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#ede9e1]">
                Communication Logged
              </h3>
              <p className="text-[#8e8a83] max-w-sm mx-auto font-sans leading-relaxed text-sm">
                Your parameters have been logged. I will review the brief and respond within 24 to 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 border border-[#262421] hover:border-[#ede9e1] text-[#ede9e1] text-xs cursor-pointer"
              >
                SEND ANOTHER DISPATCH
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <span className="text-[10px] text-[#6d6962] uppercase block border-b border-[#262421] pb-2">
                PROJECT COMMISSION LEDGER
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-[#6d6962] uppercase block">NAME / AFFILIATION *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2.5 bg-[#161513] border border-[#262421] text-[#ede9e1] focus:outline-none focus:border-[#ede9e1] text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-[#6d6962] uppercase block">ELECTRONIC MAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className="w-full px-3 py-2.5 bg-[#161513] border border-[#262421] text-[#ede9e1] focus:outline-none focus:border-[#ede9e1] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-[#6d6962] uppercase block">REQUIRED SCOPE</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#161513] border border-[#262421] text-[#ede9e1] focus:outline-none focus:border-[#ede9e1] text-xs uppercase"
                  >
                    <option value="Brand Identity">Brand Identity System</option>
                    <option value="Pitch Deck">Pitch Deck / Investor Narrative</option>
                    <option value="Both">Comprehensive (Brand + Deck)</option>
                    <option value="Advisory">Creative Advisory / Full-Time</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-[#6d6962] uppercase block">ESTIMATED TIMELINE</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#161513] border border-[#262421] text-[#ede9e1] focus:outline-none focus:border-[#ede9e1] text-xs uppercase"
                  >
                    <option value="Immediate">Immediate (&lt; 3 Weeks)</option>
                    <option value="Q2 / Q3 2024">Q2 / Q3 2024</option>
                    <option value="Flexible">Exploratory / Planning</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-[#6d6962] uppercase block">PROJECT PARAMETERS / BRIEF *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Outline context, deliverables, and high-conviction goals..."
                  className="w-full px-3 py-2.5 bg-[#161513] border border-[#262421] text-[#ede9e1] focus:outline-none focus:border-[#ede9e1] text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#ede9e1] hover:bg-white text-[#0e0d0c] font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                TRANSMIT INQUIRY +
              </button>
            </form>
          )}
        </div>
      </div>
    </article>
  );
};
