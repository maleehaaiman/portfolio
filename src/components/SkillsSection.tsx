import React from 'react';
import {
  Code2,
  Brain,
  Database,
  Figma,
  Terminal,
  FileSpreadsheet,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code2 className="w-5 h-5 text-[#64CEFB]" />,
      skills: ['Python'],
    },
    {
      title: 'AI & Technology',
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      skills: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Generative AI Tools',
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ['MySQL', 'SQLite'],
    },
    {
      title: 'Developer Tools',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      skills: ['Git', 'GitHub', 'Docker'],
    },
    {
      title: 'Design & Editing Tools',
      icon: <Figma className="w-5 h-5 text-pink-400" />,
      skills: ['Figma', 'Gamma', 'Editing'],
    },
    {
      title: 'Productivity Tools',
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-400" />,
      skills: ['Microsoft Excel', 'Google Sheets'],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: removed 02 // Capabilities */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl">
            A comprehensive overview of programming languages, AI frameworks, databases, editing, and developer tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 sm:p-7 hover:border-white/30 hover:bg-black/70 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-2xl border border-white/10 bg-black/60 group-hover:border-white/30 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-white text-lg font-medium tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-normal text-white/90 bg-white/[0.06] border border-white/15 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
