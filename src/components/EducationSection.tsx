import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Academic Credentials & Specialized Diplomas
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Education & Continuous Learning
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Formal foundations in computer science principles, complemented by specialized certifications in MERN web engineering and marketplace algorithms.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                  {idx === 0 ? (
                    <span className="text-blue-400 font-semibold">Degree</span>
                  ) : (
                    <span className="text-amber-400 font-semibold">Certification</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>

                <div className="text-xs text-slate-400 font-medium mb-4">
                  {edu.institution}
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/70 text-[11px] text-slate-500 font-mono">
                Verified Credential · {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
