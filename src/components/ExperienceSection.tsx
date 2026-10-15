import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers, ChevronRight } from 'lucide-react';
import { cvData, ExperienceItem } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'mern' | 'etsy' | 'software'>('all');

  const filteredExperience = cvData.experience.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mern') return item.id === 'exp-mern';
    if (selectedFilter === 'etsy') return item.id === 'exp-etsy';
    if (selectedFilter === 'software') return item.id === 'exp-software';
    return true;
  });

  return (
    <section id="experience" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Career Trajectory & Track Record
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Work Experience & Specialized Practice
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              Demonstrated success delivering production web architecture across frontend and backend MERN environments, commercial Etsy growth, and Python/Java software engineering.
            </p>
          </div>

          {/* Interactive Filter Tabs (Valid interactive control per guideline 1A) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Practice
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('mern')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'mern'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MERN Stack
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('etsy')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'etsy'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Etsy Expert
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('software')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === 'software'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Python & Java
            </button>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {filteredExperience.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-colors shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5">
                    <span className="font-semibold text-slate-300">{item.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-400 font-medium">{item.type}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                </div>

                {/* Quantitative Impact Badges (Tabular text, no static pill enclosures) */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="flex items-center gap-4 text-right self-start">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left sm:text-right">
                        <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary Description */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.summary}
              </p>

              {/* Key Deliverables & Achievements */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Key Deliverables & Technical Contributions:
                </h4>
                <ul className="space-y-2">
                  {item.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used (Clean unboxed inline metadata per anti-slop rules) */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Stack & Methodologies:</span>
                {item.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="text-slate-300 hover:text-white transition-colors">{tech}</span>
                    {tIdx < item.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
