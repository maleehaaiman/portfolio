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
        {/* Section Header: removed 03 // Passions */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Areas of Interest
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl">
            Key fields of technological innovation, exploration, and creative focus.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-6 sm:p-7 hover:border-white/30 hover:bg-black/70 transition-all duration-300 group shadow-xl"
            >
              <div className="w-10 h-10 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center mb-5 group-hover:border-white/30 transition-colors">
                {interest.icon}
              </div>
              <h3 className="text-white text-base sm:text-lg font-medium tracking-tight mb-2">
                {interest.title}
              </h3>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
