import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Brain, Bot, Layers, Smartphone, Cpu, Palette, Code, Sparkles, Rocket } from 'lucide-react';

interface InterestItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const InterestsSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const interests: InterestItem[] = [
    { title: 'Artificial Intelligence', description: 'Intelligent systems, reasoning models, and algorithmic automation.', icon: <Brain className="w-5 h-5 text-[#64CEFB]" /> },
    { title: 'Machine Learning', description: 'Predictive modeling, data classification, and supervised/unsupervised learning.', icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
    { title: 'Deep Learning', description: 'Neural networks, multi-layered architectures, and representation learning.', icon: <Layers className="w-5 h-5 text-purple-400" /> },
    { title: 'AI-powered Mobile App Development', description: 'Integrating machine learning capabilities into responsive mobile applications.', icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { title: 'Robotics', description: 'Autonomous agents, robotics kinematics, and intelligent hardware interfaces.', icon: <Bot className="w-5 h-5 text-rose-400" /> },
    { title: 'UI/UX Design', description: 'Intuitive user interface architectures, aesthetic prototypes, and user experiences.', icon: <Palette className="w-5 h-5 text-pink-400" /> },
    { title: 'Software Development', description: 'Full lifecycle software design, structured modular programming, and scalable architecture.', icon: <Code className="w-5 h-5 text-cyan-400" /> },
    { title: 'Generative AI', description: 'Large language models, diffusion systems, and creative AI prompt engineering.', icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
    { title: 'Emerging Technologies', description: 'Investigating cutting-edge breakthroughs, next-generation frameworks, and innovations.', icon: <Rocket className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section id="interests" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={headerRef}
          className="mb-12 md:mb-16"
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Areas of Interest
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} interest={interest} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const InterestCard: React.FC<{ interest: InterestItem; index: number }> = ({ interest, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 sm:p-7 hover:border-white/30 hover:bg-black/70 hover:-translate-y-1.5 transition-all duration-300 group shadow-xl cursor-default"
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
    >
      <div className="w-10 h-10 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center mb-5 group-hover:border-white/30 group-hover:scale-105 transition-all">
        {interest.icon}
      </div>
      <h3 className="text-white text-base sm:text-lg font-medium tracking-tight mb-2">{interest.title}</h3>
      <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">{interest.description}</p>
    </motion.div>
  );
};

export default InterestsSection;
