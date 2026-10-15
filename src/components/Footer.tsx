import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { cvData } from '../data/cvData';

interface FooterProps {
  onPrint: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrint, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          <div>
            <div className="text-base font-bold text-white mb-1">
              {cvData.name}
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Full Stack MERN Developer & Etsy E-Commerce Specialist. Open for full-time positions and contract engineering globally.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={onPrint}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Print / Save PDF
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={onOpenDeployGuide}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Vercel Deployment
            </button>
            <span className="text-slate-700">·</span>
            <a
              href={cvData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Muhammad Hasnain. Crafted with HTML5, CSS3, React & Tailwind CSS. Ready for Vercel deployment.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
