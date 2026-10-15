import React from 'react';
import { Printer, ExternalLink, Rocket } from 'lucide-react';

interface NavbarProps {
  onPrint: () => void;
  onOpenDeployGuide: () => void;
  activeView: 'interactive' | 'printable';
  setActiveView: (view: 'interactive' | 'printable') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPrint,
  onOpenDeployGuide,
  activeView,
  setActiveView,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
            <span>Muhammad Hasnain</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#experience" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#etsy" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-amber-300 hover:text-amber-200">
              <span>Etsy Expert</span>
            </a>
            <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#education" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action + helper toggles */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* View Mode Segmented Control */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setActiveView('interactive')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  activeView === 'interactive'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Interactive
              </button>
              <button
                type="button"
                onClick={() => setActiveView('printable')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  activeView === 'printable'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ATS Resume
              </button>
            </div>

            {/* Vercel Deploy Guide Button */}
            <button
              type="button"
              onClick={onOpenDeployGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/70 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Vercel Deployment Instructions"
            >
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">Deploy to</span> Vercel
            </button>

            {/* Print / Export Action */}
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
