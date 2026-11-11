import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';

export const HackathonsSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const counters = [
    {
      id: 'hackathons',
      count: '10+',
      label: 'Hackathons Attended',
      description: 'Fast-paced competitive sprints engineering end-to-end AI/ML prototypes, predictive pipelines, and practical solutions under demanding timelines.',
      icon: <Trophy className="w-6 h-6 text-[#64CEFB]" />,
      badge: 'Competitive Sprints',
      highlightColor: 'from-[#64CEFB]/20 to-transparent',
    },
    {
      id: 'workshops',
      count: '5+',
      label: 'Workshops Completed',
      description: 'Intensive hands-on technical training covering Deep Learning, Computer Vision, Machine Learning architectures, and development workflows (Codegnan, SRM University, etc.).',
      icon: <Award className="w-6 h-6 text-purple-400" />,
      badge: 'Technical Mastery',
      highlightColor: 'from-purple-500/20 to-transparent',
    },
  ];

  return (
    <section id="hackathons" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={headerRef}
          className="mb-12 md:mb-16"
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Hackathons &amp; Workshops
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl font-light">
            Demonstrated practical experience, rapid engineering capabilities, and continuous skill advancement through competitive hackathons and immersive technical workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {counters.map((item, index) => (
            <HackathonCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const HackathonCard: React.FC<{ item: { id: string; count: string; label: string; description: string; icon: React.ReactNode; badge: string; highlightColor: string }; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-10 hover:border-white/30 hover:bg-black/70 hover:-translate-y-1.5 transition-all duration-300 shadow-2xl overflow-hidden group cursor-default"
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.92 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.highlightColor}`} />

      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-white/30 group-hover:scale-105 transition-all">
          {item.icon}
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {item.badge}
        </span>
      </div>

      <motion.div
        className="flex items-baseline gap-2 mb-3"
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 + 0.3 }}
      >
        <span className="text-6xl sm:text-7xl font-bold tracking-tight text-white group-hover:text-[#64CEFB] transition-colors">
          {item.count}
        </span>
      </motion.div>

      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3">{item.label}</h3>
      <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">{item.description}</p>
    </motion.div>
  );
};

export default HackathonsSection;
