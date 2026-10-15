import React, { useState } from 'react';
import { Github, ExternalLink, Code2, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { cvData, ProjectItem } from '../data/cvData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = cvData.projects[0];
  const others = cvData.projects.slice(1);

  return (
    <section id="projects" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Engineered Systems & Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Featured Projects & Implementations
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Selected full-stack web applications, algorithmic tools, and automation pipelines showcasing production engineering in React, Node, Express, MongoDB, and Python.
          </p>
        </div>

        {/* Bento Grid Layout (Following Portfolio Guideline Section 2A) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Wide Showcase Card (8 cols) */}
          <div className="lg:col-span-8 group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between">
            {/* Project Image Banner */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
              <img
                src="/src/assets/images/mern_project_dashboard_1792054155432.jpg"
                alt="MERN Stack E-Commerce & Merchant Hub Dashboard"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Featured Full-Stack System
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60">
                  MERN Stack · MongoDB · Express · React · Node
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  {featured.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {featured.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                {/* Tech list (unboxed metadata) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  {featured.technologies.map((t, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-slate-300">{t}</span>
                      {idx < featured.technologies.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="text-xs font-medium text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    View Details
                  </button>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stack (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {others.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between flex-1 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-blue-400">{proj.category}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {proj.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Explore Architecture →
                  </button>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                {selectedProject.category}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {selectedProject.subtitle}
              </p>

              <div className="prose prose-invert text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Technical Architecture Highlights:
                </h4>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6 pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 mb-2">Technologies Used:</div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                  {selectedProject.technologies.map((t, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-mono text-blue-300">{t}</span>
                      {idx < selectedProject.technologies.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
