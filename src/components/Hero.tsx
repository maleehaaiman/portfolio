import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[660px] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12"
    >
      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top spacer (head paragraph & top right badge removed) */}
        <div className="w-full pt-4" />

        {/* Center Hero Section - cleaned and ready for the upcoming headline */}
        <div className="w-full flex flex-col items-center justify-center text-center my-auto py-12 sm:py-20">
          {/* CTA Button */}
          <div className="mt-8 sm:mt-12">
            <a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-full px-8 py-4 text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="w-full flex justify-center opacity-60">
          <a href="#about" aria-label="Scroll down">
            <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1 hover:border-white transition-colors">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
