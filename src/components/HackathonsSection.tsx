import React from 'react';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariants,
  staggerContainerVariants,
  cardVariants,
} from '../hooks/useScrollAnimation';

export const HackathonsSection: React.FC = () => {
  const counters = [
    {
      id: 'hackathons',
      count: '10+',
      label: 'Hackathons Attended',
      description:
        'Fast-paced competitive sprints engineering end-to-end AI/ML prototypes, predictive pipelines, and practical solutions under demanding timelines.',
      icon: <Trophy className="w-6 h-6 text-[#64CEFB]" />,
      badge: 'Competitive Sprints',
      highlightColor: 'from-[#64CEFB]/20 to-transparent',
    },
    {
      id: 'workshops',
      count: '5+',
      label: 'Workshops Completed',
      description:
        'Intensive hands-on technical training covering Deep Learning, Computer Vision, Machine Learning architectures, and development workflows (Codegnan, SRM University, etc.).',
      icon: <Award className="w-6 h-6 text-purple-400" />,
      badge: 'Technical Mastery',
      highlightColor: 'from-purple-500/20 to-transparent',
    },
  ];

  return (
    <section
      id="hackathons"
      className="relative w-full py-24 sm:py-32 text-white border-t border-white/10"
    >
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
            Hackathons & Workshops
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl font-light">
            Demonstrated practical experience, rapid engineering capabilities, and continuous skill advancement through competitive hackathons and immersive technical workshops.
          </p>
        </motion.div>

        {/* Counter Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {counters.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-10 hover:bg-black/70 transition-colors duration-300 shadow-2xl overflow-hidden group cursor-default"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.highlightColor}`}
              />

              <div className="flex items-center justify-between mb-6">
                <motion.div
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-white/30 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {item.icon}
                </motion.div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.badge}
                </span>
              </div>

              {/* Big Counter Number */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl sm:text-7xl font-bold tracking-tight text-white group-hover:text-[#64CEFB] transition-colors">
                  {item.count}
                </span>
              </div>

              {/* Title / Label */}
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonsSection;
