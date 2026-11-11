import React from 'react';
import { Cpu, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 text-white overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Content Card with Frosted Glass over moving video */}
        <div className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-colors">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#64CEFB]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Her Updated Text */}
            <div className="lg:col-span-8 space-y-6 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am an <span className="text-white font-medium">AI/ML Engineer</span> specializing in <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Machine Learning</span>, and <span className="text-white font-medium">Deep Learning</span>, with a strong foundation in software development and modern technology. My technical interests span AI-powered mobile applications, Generative AI, robotics, and UI/UX design.
              </p>
              <p>
                I focus on developing intelligent, efficient, and practical solutions by combining technical expertise with analytical thinking and creativity. I value innovation, problem-solving, and building technology-driven solutions that create meaningful impact.
              </p>

              {/* Highlights pills */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Deep Learning',
                  'Software Development',
                  'AI-powered Mobile Apps',
                  'Generative AI',
                  'Robotics',
                  'UI/UX Design',
                  'Analytical Problem Solving',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-white/15 bg-black/60 text-white/95"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Focus Areas */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-[#64CEFB]/10 border border-[#64CEFB]/30 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4 text-[#64CEFB]" />
                </div>
                <h4 className="text-white text-sm font-medium mb-1">Intelligent Solutions</h4>
                <p className="text-white/70 text-xs">
                  Combining technical expertise with analytical thinking and creativity for efficient systems.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-3">
                  <Lightbulb className="w-4 h-4 text-purple-300" />
                </div>
                <h4 className="text-white text-sm font-medium mb-1">Meaningful Impact</h4>
                <p className="text-white/70 text-xs">
                  Valuing innovation, problem-solving, and building technology-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
