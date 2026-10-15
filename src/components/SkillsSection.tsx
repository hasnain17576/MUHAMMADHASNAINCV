import React, { useState, useMemo } from 'react';
import { Search, Code2, Server, Terminal, ShoppingBag, Wrench } from 'lucide-react';
import { cvData } from '../data/cvData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return ['All', ...cvData.skillCategories.map(c => c.category)];
  }, []);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return cvData.skillCategories.map(cat => {
      // Category match
      if (activeCategory !== 'All' && cat.category !== activeCategory) {
        return null;
      }

      // Filter skills inside category
      const matchedSkills = cat.skills.filter(s => {
        if (!query) return true;
        return (
          s.name.toLowerCase().includes(query) ||
          s.focus.toLowerCase().includes(query) ||
          s.level.toLowerCase().includes(query)
        );
      });

      if (matchedSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchedSkills
      };
    }).filter(Boolean) as typeof cvData.skillCategories;
  }, [activeCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Backend & Database':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Core Programming & Scripts':
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'Etsy E-Commerce Specialization':
        return <ShoppingBag className="w-4 h-4 text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Technical Proficiencies & Tooling
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Core Skills & Engineering Competencies
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              Specialized in modern JavaScript/TypeScript full-stack architecture, systems programming in Python & Java, and market-proven Etsy algorithmic e-commerce optimization.
            </p>
          </div>

          {/* Interactive Search Bar for Quick Skill Lookup */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. React, Python, Mongo)..."
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm">
              No skills match &quot;{searchQuery}&quot;. Try searching for &quot;React&quot;, &quot;Node&quot;, &quot;Etsy&quot;, &quot;Java&quot;, or &quot;Python&quot;.
            </div>
          ) : (
            filteredCategories.map((group) => (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/90"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  {getCategoryIcon(group.category)}
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {group.description}
                </p>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-sm text-slate-100">
                          {skill.name}
                        </span>
                        {/* Unboxed level text with clean separator */}
                        <span className="text-[11px] font-mono font-medium text-blue-400">
                          {skill.level}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-400 leading-snug">
                        {skill.focus}
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                        <span>Experience</span>
                        <span className="font-mono text-slate-400 tabular-nums">{skill.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
