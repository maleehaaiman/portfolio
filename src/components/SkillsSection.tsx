import React from 'react';
import {
  Code2,
  Brain,
  Database,
  Figma,
  Terminal,
  FileSpreadsheet,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariants,
  staggerContainerVariants,
  cardVariants,
} from '../hooks/useScrollAnimation';

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
      skills: [
        'Python',
        'NumPy',
        'Pandas',
        'scikit-learn',
        'TensorFlow',
        'PyTorch',
        'OpenCV',
        'Matplotlib',
      ],
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
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 sm:p-7 hover:bg-black/70 transition-colors duration-300 flex flex-col justify-between group shadow-xl cursor-default"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className="p-2.5 rounded-2xl border border-white/10 bg-black/60 group-hover:border-white/30 transition-colors"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <h3 className="text-white text-lg font-medium tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.07, borderColor: 'rgba(100,206,251,0.5)' }}
                      className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-normal text-white/90 bg-white/[0.06] border border-white/15 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
