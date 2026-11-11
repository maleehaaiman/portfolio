import React from 'react';
import {
  Brain,
  Bot,
  Layers,
  Smartphone,
  Cpu,
  Palette,
  Code,
  Sparkles,
  Rocket,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariants,
  staggerContainerVariants,
  cardVariants,
} from '../hooks/useScrollAnimation';

interface InterestItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const InterestsSection: React.FC = () => {
  const interests: InterestItem[] = [
    {
      title: 'Artificial Intelligence',
      description: 'Intelligent systems, reasoning models, and algorithmic automation.',
      icon: <Brain className="w-5 h-5 text-[#64CEFB]" />,
    },
    {
      title: 'Machine Learning',
      description: 'Predictive modeling, data classification, and supervised/unsupervised learning.',
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks, multi-layered architectures, and representation learning.',
      icon: <Layers className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'AI-powered Mobile App Development',
      description: 'Integrating machine learning capabilities into responsive mobile applications.',
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Robotics',
      description: 'Autonomous agents, robotics kinematics, and intelligent hardware interfaces.',
      icon: <Bot className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interface architectures, aesthetic prototypes, and user experiences.',
      icon: <Palette className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Software Development',
      description: 'Full lifecycle software design, structured modular programming, and scalable architecture.',
      icon: <Code className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Generative AI',
      description: 'Large language models, diffusion systems, and creative AI prompt engineering.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Emerging Technologies',
      description: 'Investigating cutting-edge breakthroughs, next-generation frameworks, and innovations.',
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
    },
  ];

  return (
    <section id="interests" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
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
            Areas of Interest
          </h2>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.title}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 sm:p-7 hover:bg-black/70 transition-colors duration-300 group shadow-xl cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center mb-5 group-hover:border-white/30 transition-colors"
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                {interest.icon}
              </motion.div>
              <h3 className="text-white text-base sm:text-lg font-medium tracking-tight mb-2">
                {interest.title}
              </h3>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
