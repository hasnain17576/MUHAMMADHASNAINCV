/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EtsySpotlight } from './components/EtsySpotlight';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCV } from './components/PrintableCV';
import { VercelDeployModal } from './components/VercelDeployModal';
import { Check, X } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'interactive' | 'printable'>('interactive');
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentAvatar, setCurrentAvatar] = useState<string>(
    '/src/assets/images/hasnain_real_portrait_1792055072438.jpg'
  );

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const handlePrint = () => {
    // If currently in interactive view, browser print styles will cleanly format it;
    // or switch to printable format and trigger print for pristine layout
    window.print();
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-500 selection:text-white">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 border border-slate-700 text-white text-xs font-medium rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Vercel Deployment Instructions Modal */}
      <VercelDeployModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
        onShowToast={showToast}
      />

      {/* Dual Mode View */}
      {activeView === 'printable' ? (
        <PrintableCV
          onBackToInteractive={() => setActiveView('interactive')}
          onPrint={handlePrint}
          onShowToast={showToast}
          avatarUrl={currentAvatar}
        />
      ) : (
        <>
          {/* Top Bar Navigation (Strict 3-zone contract) */}
          <Navbar
            onPrint={handlePrint}
            onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
            activeView={activeView}
            setActiveView={setActiveView}
          />

          {/* Main Interactive Portfolio & CV View */}
          <main className="flex-1">
            {/* Split Screen Hero with Portrait & Key Stats */}
            <Hero
              onShowToast={showToast}
              onOpenContact={scrollToContact}
              onSwitchToPrint={() => setActiveView('printable')}
              currentAvatar={currentAvatar}
              onAvatarChange={setCurrentAvatar}
            />

            {/* Work Experience (MERN Full Stack, Etsy, Python/Java) */}
            <ExperienceSection />

            {/* Technical Skills & Tooling (Category Filter & Live Search) */}
            <SkillsSection />

            {/* Dedicated Etsy E-Commerce Spotlight (1-Year Specialization + Live SEO Simulator) */}
            <EtsySpotlight />

            {/* Projects Showcase (Bento Box + Dashboard Mockup + GitHub Repos) */}
            <ProjectsSection />

            {/* Education & Academic Credentials */}
            <EducationSection />

            {/* Contact & Direct Outreach (Phone, Email, WhatsApp, LinkedIn, GitHub, Message Form) */}
            <ContactSection onShowToast={showToast} />
          </main>

          {/* Clean Editorial Footer */}
          <Footer
            onPrint={handlePrint}
            onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
          />
        </>
      )}

    </div>
  );
}
