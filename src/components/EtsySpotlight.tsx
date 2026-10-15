import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, Search, Award, CheckCircle, BarChart3, Star, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EtsySpotlight: React.FC = () => {
  // Interactive Etsy Listing SEO Checker demonstration
  const [sampleTitle, setSampleTitle] = useState(
    'Minimalist Leather Card Holder Wallet, Personalized Slim Bifold Gift For Him, Monogram Handmade Card Case'
  );
  const [sampleTags, setSampleTags] = useState(
    'leather card holder, slim wallet men, personalized gift, gift for him, handmade bifold, minimalist wallet, monogram card case, credit card holder, groomsmen gift, everyday carry, anniversary gift, travel wallet, custom leather'
  );

  const parsedTags = sampleTags.split(',').map(t => t.trim()).filter(Boolean);
  const titleLength = sampleTitle.length;
  const isTitleOptimal = titleLength >= 80 && titleLength <= 140;
  const tagCount = parsedTags.length;
  const isFull13Tags = tagCount === 13;
  
  // Calculate simulated SEO health score
  let score = 50;
  if (isTitleOptimal) score += 25;
  else if (titleLength >= 40) score += 15;
  if (isFull13Tags) score += 25;
  else if (tagCount >= 10) score += 15;

  return (
    <section id="etsy" className="py-16 border-b border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Specialized Commercial Domain</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>1-Year Marketplace Authority</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Etsy E-Commerce Specialist & Store Growth Engine
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-3xl leading-relaxed">
            In addition to full-stack engineering, Muhammad Hasnain brings 1 year of proven experience scaling Etsy stores. 
            By merging data analysis, algorithmic tag modeling, and conversion rate optimization (CRO), he turns storefronts into high-ranking revenue drivers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cvData.etsyExpertise.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-xl font-bold font-mono text-amber-400 tabular-nums mb-2">
                  {pillar.metric}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Listing SEO Audit Demo */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Interactive Demonstration</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Live Etsy Algorithmic SEO Simulator
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Test how Muhammad evaluates listing title length, long-tail tag saturation, and search keyword matching.
              </p>
            </div>

            {/* Score Display (Tabular numbers) */}
            <div className="flex items-center gap-4 bg-slate-950 px-5 py-3 rounded-xl border border-slate-800 self-start lg:self-auto">
              <div className="text-right">
                <div className="text-xs text-slate-400">Calculated SEO Score</div>
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  {score}/100
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Controls */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label htmlFor="etsy-title-input" className="font-semibold text-slate-300">Listing Title (Etsy max 140 chars)</label>
                  <span className={`font-mono text-xs ${isTitleOptimal ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {titleLength}/140 chars {isTitleOptimal ? '(Optimal)' : '(Adjust length)'}
                  </span>
                </div>
                <textarea
                  id="etsy-title-input"
                  rows={3}
                  value={sampleTitle}
                  onChange={(e) => setSampleTitle(e.target.value)}
                  className="w-full p-3 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label htmlFor="etsy-tags-input" className="font-semibold text-slate-300">13 Tag Slots (Comma separated)</label>
                  <span className={`font-mono text-xs ${isFull13Tags ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {tagCount}/13 tags {isFull13Tags ? '(100% Saturated)' : '(Use all 13 slots)'}
                  </span>
                </div>
                <textarea
                  id="etsy-tags-input"
                  rows={3}
                  value={sampleTags}
                  onChange={(e) => setSampleTags(e.target.value)}
                  className="w-full p-3 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Preset buttons */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Load sample:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSampleTitle('Minimalist Leather Card Holder Wallet, Personalized Slim Bifold Gift For Him, Monogram Handmade Card Case');
                    setSampleTags('leather card holder, slim wallet men, personalized gift, gift for him, handmade bifold, minimalist wallet, monogram card case, credit card holder, groomsmen gift, everyday carry, anniversary gift, travel wallet, custom leather');
                  }}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                >
                  Leather Craft
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSampleTitle('MERN Developer Resume Template, Software Engineer CV For Notion and Word, Tech Portfolio Website Bundle');
                    setSampleTags('resume template, cv template tech, software developer, web developer cv, notion resume, professional cv, modern resume, portfolio website, job application, tech resume, coding portfolio, engineering cv, career template');
                  }}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
                >
                  Digital Product
                </button>
              </div>
            </div>

            {/* Live Audit Breakdown */}
            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">
                  Algorithmic Evaluation Findings:
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isTitleOptimal ? 'text-emerald-400' : 'text-amber-400'}`} />
                    <div>
                      <span className="font-semibold text-slate-200">Title Keyword Density: </span>
                      <span className="text-slate-400">
                        {isTitleOptimal 
                          ? 'Excellent length allowing 3 distinct high-intent search phrases before truncation.'
                          : 'Title should ideally be between 80-140 characters to maximize search match breadth.'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isFull13Tags ? 'text-emerald-400' : 'text-amber-400'}`} />
                    <div>
                      <span className="font-semibold text-slate-200">13 Tag Saturation: </span>
                      <span className="text-slate-400">
                        {isFull13Tags 
                          ? '100% of available tag real estate utilized. No search query potential wasted.'
                          : `Currently using ${tagCount} tags. Etsy allows 13 distinct multi-word tags.`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                    <div>
                      <span className="font-semibold text-slate-200">Multi-Word Keyword Matching: </span>
                      <span className="text-slate-400">
                        Tags utilize 2 to 3 words each, targeting specific buyer intent rather than broad single keywords.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Parsed Tags Display (Clean unboxed tags) */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Extracted Tag Slots ({parsedTags.length}/13):
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                    {parsedTags.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span className="font-mono text-amber-300/90 hover:text-white transition-colors">{t}</span>
                        {idx < parsedTags.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                Methodology: Modeled according to Etsy Search & Quality Score algorithms (eRank & Marmalead guidelines).
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
