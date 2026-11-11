import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeartLogo } from './HeartLogo';
import { ShinyText } from './ShinyText';

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

        {/* Center Hero Section with Logo and Name */}
        <div className="w-full flex flex-col items-center justify-center text-center my-auto py-6 sm:py-12">
          {/* Prominent Floating Heart Logo */}
          <motion.div
            className="flex items-center justify-center mb-6 sm:mb-8"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] drop-shadow-[0_4px_60px_rgba(100,206,251,0.35)]">
              <HeartLogo className="w-44 h-32 sm:w-60 sm:h-44 md:w-72 md:h-52 lg:w-80 lg:h-56" />
            </div>
          </motion.div>

          {/* Main Heading: Name with animated shiny gradient effect */}
          <h1 className="tracking-tighter leading-[0.9] flex flex-col items-center select-none mb-4">
            <span className="text-white font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              Shaik Maleeha
            </span>
            <ShinyText
              text="Aiman."
              className="font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 sm:mt-2"
            />
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-white/75 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mb-8">
            AI/ML Engineer &bull; Machine Learning &bull; Deep Learning
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-full px-8 py-4 text-sm md:text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom scroll indicator */}
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
