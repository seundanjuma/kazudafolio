import React, { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Brand Identity',
    budget: '',
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
    <article className="w-full px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10 space-y-0 font-['Inter']">
      {/* Contact Header */}
      <section className="space-y-4 pb-8 sm:pb-10 border-b border-[rgba(10,10,10,0.08)]">
        <div className="text-xs uppercase tracking-widest font-semibold text-[rgba(10,10,10,0.5)]">
          Inquiries & Commissions
        </div>

        <h1 className="font-['Formula_Condensed','Barlow_Condensed',sans-serif] text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-[#0a0a0a] leading-[0.88]">
          Direct Communication.
        </h1>

        <p className="text-base text-[rgba(10,10,10,0.7)] max-w-xl leading-relaxed">
          For brand identity commissions, strategic pitch deck inquiries, or advisory engagements. Direct correspondence is preferred.
        </p>
      </section>

      {/* Structural Editorial Grid with Horizontal and Vertical Dividers */}
      <section className="border-b border-[rgba(10,10,10,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Direct Channels (5 cols on desktop, full width on mobile) */}
          <div className="md:col-span-5 md:border-r border-b md:border-b-0 border-[rgba(10,10,10,0.08)] md:pr-8 lg:pr-10 py-8 sm:py-10 space-y-8 sm:space-y-10 text-xs">
            {/* Direct Email Subsection */}
            <div className="space-y-3 pb-8 sm:pb-10 border-b border-[rgba(10,10,10,0.08)]">
              <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">
                DIRECT EMAIL
              </span>
              <div className="text-base sm:text-lg font-semibold text-[#0a0a0a] break-all">
                {email}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-[4px] border border-[rgba(10,10,10,0.15)] hover:border-[#0a0a0a] text-[#0a0a0a] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${email}?subject=Project%20Commission%20Inquiry`}
                  className="px-3.5 py-1.5 rounded-[4px] bg-[#000000] hover:bg-[#222222] text-white font-medium text-xs transition-colors"
                >
                  Send Email →
                </a>
              </div>
            </div>

            {/* Timezone & Availability (Sub-columns with vertical divider) */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(10,10,10,0.08)] -mx-1 sm:mx-0">
                <div className="sm:pr-4 pb-4 sm:pb-0 space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">
                    TIMEZONE / AVAILABILITY
                  </span>
                  <span className="text-[#0a0a0a] font-medium leading-relaxed block">
                    WAT (UTC+1) · Available for Select Commissions
                  </span>
                </div>
                <div className="sm:pl-4 pt-4 sm:pt-0 space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block">
                    TYPICAL RESPONSE TIME
                  </span>
                  <span className="text-[rgba(10,10,10,0.65)] leading-relaxed block">
                    Within 24 to 48 standard business hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 cols on desktop, full width on mobile) */}
          <div className="md:col-span-7 md:pl-8 lg:pl-10 py-8 sm:py-10 text-xs">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-black/5 text-[#0a0a0a] mx-auto flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-['Formula_Condensed','Barlow_Condensed','Bebas_Neue',sans-serif] text-3xl font-bold uppercase text-[#0a0a0a]">
                  Communication Logged
                </h3>
                <p className="text-[rgba(10,10,10,0.65)] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your note and will review the brief within 24 to 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-[4px] border border-[rgba(10,10,10,0.15)] hover:border-[#0a0a0a] text-[#0a0a0a] text-xs font-semibold cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <span className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.45)] tracking-wider block border-b border-[rgba(10,10,10,0.08)] pb-3">
                  PROJECT COMMISSION INQUIRY
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-0 py-2 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:border-black text-xs transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full px-0 py-2 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:border-black text-xs transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                      PRIMARY SCOPE
                    </label>
                    <div className="relative">
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-0 py-2 pr-6 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] focus:outline-none focus:border-black text-xs transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Brand Identity">Brand Identity System</option>
                        <option value="Pitch Deck">Pitch Deck / Investor Narrative</option>
                        <option value="Both">Comprehensive (Brand + Deck)</option>
                        <option value="Advisory">Creative Advisory / Full-Time</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[rgba(10,10,10,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                      PROJECT BUDGET
                    </label>
                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-0 py-2 pr-6 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] focus:outline-none focus:border-black text-xs transition-colors cursor-pointer appearance-none"
                      >
                        <option value="" disabled className="text-[rgba(10,10,10,0.4)]">
                          Select your budget
                        </option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 — $10,000">$5,000 — $10,000</option>
                        <option value="$10,000 — $25,000">$10,000 — $25,000</option>
                        <option value="$25,000 — $50,000">$25,000 — $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[rgba(10,10,10,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                      ESTIMATED TIMELINE
                    </label>
                    <div className="relative">
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-0 py-2 pr-6 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] focus:outline-none focus:border-black text-xs transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Immediate">Immediate (&lt; 3 Weeks)</option>
                        <option value="Q2 / Q3 2024">Q2 / Q3 2024</option>
                        <option value="Flexible">Exploratory / Planning</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[rgba(10,10,10,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[rgba(10,10,10,0.5)] tracking-wider block">
                    PROJECT OVERVIEW *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Outline context, deliverables, and milestones..."
                    className="w-full px-0 py-2 bg-transparent border-b border-[#0a0a0a] rounded-none text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.35)] focus:outline-none focus:border-black text-xs resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-[4px] bg-[#000000] hover:bg-[#222222] text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Project Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};
