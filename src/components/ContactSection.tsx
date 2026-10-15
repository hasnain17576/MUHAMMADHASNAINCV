import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink,
  ArrowUpRight 
} from 'lucide-react';
import { cvData } from '../data/cvData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  
  // Interactive message composer
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyValue = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`Copied ${key} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      onShowToast('Please fill in your name, email, and message.');
      return;
    }

    // Launch email client with pre-filled fields
    const mailtoUrl = `mailto:${cvData.contact.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    onShowToast('Opening your email client to send message to Muhammad!');
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Get In Touch & Hire
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Available for Full Stack MERN development roles, Frontend & Backend engineering projects, and Etsy E-Commerce store growth consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Phone / Call</div>
                    <div className="text-sm font-semibold font-mono text-white">
                      {cvData.contact.displayPhone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyValue(cvData.contact.phone, 'Phone number')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy phone"
                  >
                    {copiedKey === 'Phone number' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`tel:${cvData.contact.phone}`}
                    className="px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-semibold text-white">
                      {cvData.contact.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyValue(cvData.contact.email, 'Email address')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copy email"
                  >
                    {copiedKey === 'Email address' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${cvData.contact.email}`}
                    className="px-3 py-1.5 text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Messenger</div>
                    <div className="text-sm font-semibold text-white">
                      +92 312 6430166
                    </div>
                  </div>
                </div>

                <a
                  href={cvData.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub & LinkedIn Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={cvData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <div>
                    <div className="text-[11px] text-slate-400">GitHub</div>
                    <div className="text-xs font-semibold text-white">hasnain17576</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>

              <a
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-[11px] text-slate-400">LinkedIn</div>
                    <div className="text-xs font-semibold text-white">M. Hasnain</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Send Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Recruiters, founders, and e-commerce clients can reach out directly.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-sender-name" className="block text-slate-300 font-medium mb-1">Your Name</label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-sender-email" className="block text-slate-300 font-medium mb-1">Your Email</label>
                  <input
                    id="contact-sender-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-slate-300 font-medium mb-1">Subject / Project Role</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Full Stack MERN Opportunity / Etsy SEO Consultation"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message-body" className="block text-slate-300 font-medium mb-1">Message Details</label>
                <textarea
                  id="contact-message-body"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, team role, or timeline..."
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Response within 24 hours guaranteed.
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
