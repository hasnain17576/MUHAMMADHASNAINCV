import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Rocket, CheckCircle2 } from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(id);
    onShowToast('Command copied to clipboard!');
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const gitSnippet = `# 1. Initialize & commit your CV project
git init
git add .
git commit -m "feat: complete professional MERN & Etsy CV portfolio"

# 2. Add your GitHub repository remote
git branch -M main
git remote add origin https://github.com/hasnain17576/muhammad-hasnain-cv.git
git push -u origin main`;

  const vercelCliSnippet = `# Deploy directly from your terminal in 30 seconds
npm install -g vercel
vercel login
vercel --prod`;

  const vercelJsonSnippet = `{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close deploy guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
            <svg viewBox="0 0 76 65" fill="currentColor" className="w-5 h-5">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Deploy Your CV to Vercel (100% Free)
            </h3>
            <p className="text-xs text-slate-400">
              Step-by-step guide to launch Muhammad Hasnain&apos;s CV at a custom .vercel.app domain
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-6 space-y-6 text-xs text-slate-300">
          
          {/* Method A: The Recommended GitHub UI Import (Easiest & Automatic CI/CD) */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-white text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                <span>Push Code to your GitHub</span>
              </span>
              <button
                type="button"
                onClick={() => copyCode(gitSnippet, 'git')}
                className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-mono"
              >
                {copiedSnippet === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet === 'git' ? 'Copied' : 'Copy Git Commands'}</span>
              </button>
            </div>
            
            <pre className="p-3 bg-slate-900 rounded-lg font-mono text-[11px] text-slate-300 overflow-x-auto border border-slate-800">
              {gitSnippet}
            </pre>
          </div>

          {/* Step 2: Vercel Dashboard */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span>Import to Vercel in 1-Click</span>
            </div>
            
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-blue-400 underline font-semibold">vercel.com/new</a> and sign in with GitHub.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Select your repository: <strong className="text-white">muhammad-hasnain-cv</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Vercel automatically detects <strong className="text-white">Vite</strong> framework. Click <strong className="text-emerald-400">Deploy</strong>!</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Your site will be live at: <code className="text-blue-300">https://muhammad-hasnain-cv.vercel.app</code> with free global SSL!</span>
              </li>
            </ul>

            {/* Note on peer dependency error */}
            <div className="mt-3 p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 text-[11px] text-amber-200/90">
              <strong className="text-amber-300">Tip for &quot;npm error peer vite&quot; on Vercel:</strong> We have added <code className="text-white">.npmrc</code> and <code className="text-white">vercel.json</code> with <code className="text-amber-300">--legacy-peer-deps</code>. If you are configuring manually in Vercel settings, enable <em>Override Install Command</em> and enter: <code className="text-white bg-slate-900 px-1 py-0.5 rounded">npm install --legacy-peer-deps</code>.
            </div>
          </div>

          {/* Method B: Terminal CLI (Alternative) */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-white text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Alternative: Instant CLI Deploy</span>
              </span>
              <button
                type="button"
                onClick={() => copyCode(vercelCliSnippet, 'cli')}
                className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-mono"
              >
                {copiedSnippet === 'cli' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet === 'cli' ? 'Copied' : 'Copy CLI'}</span>
              </button>
            </div>
            
            <pre className="p-3 bg-slate-900 rounded-lg font-mono text-[11px] text-slate-300 overflow-x-auto border border-slate-800">
              {vercelCliSnippet}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Need custom domain? Vercel supports free custom domains.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Close
            </button>
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <span>Open Vercel Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
