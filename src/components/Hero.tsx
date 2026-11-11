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
        {/* Top spacer */}
        <div className="w-full pt-4" />

        {/* Center Hero Section with the Darker Heart Logo */}
        <div className="w-full flex flex-col items-center justify-center text-center my-auto py-8 sm:py-16">
          {/* Prominent White Heart Logo at Head Part - Large */}
          <div className="flex items-center justify-center mb-8 sm:mb-10 transition-transform duration-500 hover:scale-105">
            <img
              src="./heart-logo.png"
              alt="Heart Logo"
              className="w-56 h-40 sm:w-72 sm:h-52 md:w-96 md:h-64 lg:w-[480px] lg:h-80 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] drop-shadow-[0_4px_60px_rgba(100,206,251,0.3)]"
            />
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-full px-8 py-4 text-sm md:text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl"
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
