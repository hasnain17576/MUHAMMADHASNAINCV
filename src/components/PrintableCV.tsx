import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Printer, ArrowLeft, Download, Check, Copy, User } from 'lucide-react';
import { cvData } from '../data/cvData';

interface PrintableCVProps {
  onBackToInteractive?: () => void;
  onPrint: () => void;
  onShowToast: (msg: string) => void;
  avatarUrl?: string;
}

export const PrintableCV: React.FC<PrintableCVProps> = ({ 
  onBackToInteractive, 
  onPrint, 
  onShowToast,
  avatarUrl = '/src/assets/images/hasnain_real_portrait_1792055072438.jpg'
}) => {
  const [showPhoto, setShowPhoto] = useState(true);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-slate-900/60 py-8 px-4 sm:px-6">
      
      {/* Control bar (Hidden when printing via .no-print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 no-print">
        <div className="flex items-center gap-3">
          {onBackToInteractive && (
            <button
              type="button"
              onClick={onBackToInteractive}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Interactive View</span>
            </button>
          )}
          <span className="text-xs text-slate-400">
            ATS-Friendly Clean Printable A4 Resume Format
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Toggle photo on printable CV */}
          <button
            type="button"
            onClick={() => setShowPhoto(!showPhoto)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showPhoto
                ? 'bg-blue-950/60 text-blue-300 border-blue-800/80'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{showPhoto ? 'Photo Included' : 'Photo Hidden'}</span>
          </button>

          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save to PDF (Ctrl+P)</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet (Standard A4 dimensions & print styles) */}
      <main className="max-w-4xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl print:shadow-none print:p-0 print:m-0 print:max-w-none print:w-full font-sans">
        
        {/* CV Header with Photo */}
        <header className="border-b-2 border-slate-900 pb-5 mb-5 flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {cvData.name}
              </h1>
            </div>

            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
              Full Stack MERN Developer · Etsy Specialist
            </div>

            <div className="mt-1.5 text-xs text-slate-700 font-medium">
              Frontend & Backend Web Architecture · JavaScript · Python · Java · Etsy Marketplace SEO
            </div>

            {/* Contact Bar with click-to-copy in digital and plain text for print */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 font-mono">
              <span className="flex items-center gap-1">
                <strong>Phone:</strong> {cvData.contact.displayPhone} / {cvData.contact.phone}
              </span>
              <span aria-hidden="true" className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                <strong>Email:</strong> {cvData.contact.email}
              </span>
              <span aria-hidden="true" className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                <strong>GitHub:</strong> github.com/{cvData.contact.githubUsername}
              </span>
              <span aria-hidden="true" className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                <strong>LinkedIn:</strong> linkedin.com/in/{cvData.contact.linkedinUsername}
              </span>
              <span aria-hidden="true" className="text-slate-400">|</span>
              <span>{cvData.contact.location}</span>
            </div>
          </div>

          {/* Photo Thumbnail in CV Header */}
          {showPhoto && (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-slate-300 shadow-sm shrink-0 bg-slate-100">
              <img
                src={avatarUrl}
                alt="Muhammad Hasnain"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </header>

        {/* Executive Summary */}
        <section className="mb-5 page-break-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs text-slate-800 leading-relaxed text-justify">
            {cvData.bio}
          </p>
        </section>

        {/* Technical Skills & Competencies */}
        <section className="mb-5 page-break-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Core Competencies & Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs">
            <div>
              <strong className="text-slate-950">Frontend Engineering:</strong>{' '}
              <span className="text-slate-800">
                React.js, Next.js, Redux Toolkit, Tailwind CSS, JavaScript (ES6+), TypeScript, HTML5 Semantic Markup, CSS3 Flexbox/Grid, Responsive Design, Web Performance Optimization.
              </span>
            </div>
            <div>
              <strong className="text-slate-950">Backend & Server Architecture:</strong>{' '}
              <span className="text-slate-800">
                Node.js, Express.js, RESTful API Design, JWT Authentication, bcrypt, Route Middleware, Input Validation, Role-Based Access Control (RBAC).
              </span>
            </div>
            <div>
              <strong className="text-slate-950">Database Systems:</strong>{' '}
              <span className="text-slate-800">
                MongoDB (Mongoose ODM, Document Modeling, Aggregation Pipelines, Compound Indexing), PostgreSQL, MySQL.
              </span>
            </div>
            <div>
              <strong className="text-slate-950">Programming Languages:</strong>{' '}
              <span className="text-slate-800">
                JavaScript (Advanced), TypeScript (Proficient), Python (Data Automation, Web Scraping, Scripting), Java (Object-Oriented Programming, Data Structures).
              </span>
            </div>
            <div>
              <strong className="text-slate-950">E-Commerce & Etsy Mastery (1 Year):</strong>{' '}
              <span className="text-slate-800">
                Etsy Algorithmic SEO, 13-Tag Saturation, Keyword Research (eRank, Marmalead), Title Optimization, Conversion Rate Optimization (CRO), Shop Operations, Order Fulfillment.
              </span>
            </div>
            <div>
              <strong className="text-slate-950">Developer Tools & Deployment:</strong>{' '}
              <span className="text-slate-800">
                Git, GitHub, Vercel CI/CD, Postman API Testing, Linux Terminal, Vite, VS Code, Agile Development.
              </span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="page-break-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-950">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-slate-700 font-mono">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex justify-between items-baseline text-[11px] text-slate-600 mb-1.5">
                  <span className="italic">{exp.organization}</span>
                  <span>{exp.location} · {exp.type}</span>
                </div>

                <p className="text-xs text-slate-800 mb-1.5 leading-snug">
                  {exp.summary}
                </p>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-800 leading-snug">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx}>{ach}</li>
                  ))}
                </ul>

                <div className="mt-1.5 text-[11px] text-slate-600">
                  <strong className="text-slate-700">Technologies:</strong> {exp.technologies.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-5 page-break-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
            Featured Software & Engineering Projects
          </h2>
          <div className="space-y-3">
            {cvData.projects.map((proj) => (
              <div key={proj.id} className="page-break-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-950">
                    {proj.title}
                  </h3>
                  <span className="text-[11px] font-mono text-blue-800">
                    {proj.githubUrl}
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-snug mt-0.5">
                  {proj.description}
                </p>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  <strong className="text-slate-700">Tech Stack:</strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="page-break-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Education & Certifications
          </h2>
          <div className="space-y-2">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-slate-950">{edu.degree}</strong>
                  <span className="text-slate-700"> — {edu.institution}</span>
                </div>
                <span className="font-mono text-slate-600 shrink-0 ml-2">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};
