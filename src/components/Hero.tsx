import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Check, 
  Copy, 
  MapPin, 
  ArrowUpRight,
  MessageSquare,
  FileText,
  ShoppingBag,
  Code2,
  Camera,
  RefreshCw,
  Upload
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface HeroProps {
  onShowToast: (message: string) => void;
  onOpenContact: () => void;
  onSwitchToPrint: () => void;
  currentAvatar: string;
  onAvatarChange: (url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onShowToast, 
  onOpenContact, 
  onSwitchToPrint,
  currentAvatar,
  onAvatarChange
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const defaultPortraits = [
    {
      id: 'cap_sweater',
      label: 'Casual Knitwear & Cap (Uploaded Look)',
      src: '/src/assets/images/hasnain_real_portrait_1792055072438.jpg'
    },
    {
      id: 'suit_blazer',
      label: 'Executive Blazer Headshot',
      src: '/src/assets/images/hasnain_profile_portrait_1792054155201.jpg'
    }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        onShowToast('Please select a valid image file (JPEG, PNG, etc.)');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onAvatarChange(result);
          onShowToast('Your custom photo was uploaded successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 border-b border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero: Left (Typographic hierarchy) vs Right (Visual anchor) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-blue-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full Stack MERN Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400">Etsy E-Commerce Specialist (1 Year)</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
                Muhammad Hasnain
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-300">
                MERN Stack Engineer · Frontend & Backend Architecture · Python & Java Programmer
              </p>
            </div>

            {/* Bio Prose */}
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
              Specializing in building scalable, production-ready full-stack applications with 
              <strong className="text-slate-200 font-semibold"> React.js, Node.js, Express, and MongoDB</strong>. 
              Additionally bringing over <strong className="text-amber-300 font-semibold">1 year of specialized Etsy marketplace mastery</strong>, 
              optimizing store SEO, product algorithms, and conversion funnels, backed by solid programming foundations in 
              <strong className="text-slate-200 font-semibold"> JavaScript, Python, and Java</strong>.
            </p>

            {/* Contact Quick-Action Badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300 pt-1">
              {/* Phone with copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(cvData.contact.phone, 'Phone number')}
                className="group flex items-center gap-1.5 py-1 px-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-slate-200">{cvData.contact.displayPhone}</span>
                {copiedField === 'Phone number' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300 ml-1" />
                )}
              </button>

              {/* Email with copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(cvData.contact.email, 'Email address')}
                className="group flex items-center gap-1.5 py-1 px-2.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-slate-200">{cvData.contact.email}</span>
                {copiedField === 'Email address' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300 ml-1" />
                )}
              </button>

              {/* Location */}
              <div className="flex items-center gap-1.5 py-1 px-2.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Pakistan (Available for Worldwide Remote)</span>
              </div>
            </div>

            {/* Social & Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/20 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Muhammad</span>
              </button>

              <a
                href={cvData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={cvData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-300 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/60 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <button
                type="button"
                onClick={onSwitchToPrint}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View A4 Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor (Portrait Card + Tech highlights) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-xl shadow-black/40">
              
              {/* Profile Image with zero-broken-image fallback container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 group">
                <img
                  src={currentAvatar}
                  alt="Muhammad Hasnain - Full Stack MERN Developer & Etsy Specialist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/60 to-slate-900 text-white p-6 text-center">
                          <span class="text-6xl font-bold tracking-tighter text-blue-400 mb-2">MH</span>
                          <span class="text-sm font-semibold">Muhammad Hasnain</span>
                          <span class="text-xs text-slate-400 mt-1">Full Stack Developer</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Overlaid status badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-lg p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-white">Open for New Roles</span>
                  </div>
                  <span className="text-slate-400">Full-Stack · Remote</span>
                </div>

                {/* Quick Photo Upload Trigger */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-3 right-3 p-2 bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md border border-slate-700 text-white rounded-lg opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs"
                  title="Upload / Change Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[11px] font-medium hidden sm:inline">Change Photo</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Photo Selector Switcher */}
              <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3 text-slate-400" />
                  <span>Portraits:</span>
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => onAvatarChange('/src/assets/images/hasnain_real_portrait_1792055072438.jpg')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      currentAvatar.includes('hasnain_real_portrait')
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    Knitwear & Cap
                  </button>
                  <button
                    type="button"
                    onClick={() => onAvatarChange('/src/assets/images/hasnain_profile_portrait_1792054155201.jpg')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      currentAvatar.includes('hasnain_profile_portrait')
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    Blazer Suit
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                    title="Upload custom image file"
                  >
                    <Upload className="w-2.5 h-2.5" />
                    <span>Upload</span>
                  </button>
                </div>
              </div>

              {/* Quick Tech Snapshot under image */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold mb-0.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>MERN Stack</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">React · Node · Express · Mongo</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-0.5">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Etsy Specialist</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">1 Year · SEO & Listing CRO</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width KPI / Metrics row strictly below the split */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cvData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                {metric.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
