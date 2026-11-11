import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ShinyText } from './ShinyText';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[660px] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12"
    >
      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section (below nav): Two-column layout on large screens, stacked on mobile */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-start pt-2 sm:pt-4">
          {/* Left Column */}
          <div className="max-w-xl">
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal">
              We deliver transformative programs that empower emerging product designers with cutting-edge expertise and vision to thrive globally.
            </p>
          </div>

          {/* Right Column (right-aligned on lg+) */}
          <div className="lg:text-right">
            <p className="text-white/80 text-sm md:text-base font-normal tracking-wide">
              8000+ Talented Designers Launched !
            </p>
          </div>
        </div>

        {/* Center Hero Section */}
        <div className="w-full flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12">
          {/* Small uppercase text above heading */}
          <span className="uppercase text-white/80 text-xs md:text-sm tracking-tight font-medium mb-3 sm:mb-4 md:mb-6 block">
            Seats for Next Program Opening Soon
          </span>

          {/* Main Heading with exact specifications */}
          <h1 className="tracking-tighter leading-[0.85] flex flex-col items-center select-none">
            {/* Line 1: "Become" in white, font-medium */}
            <span className="text-white font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              Become
            </span>

            {/* Line 2: "Product Leader." with animated shiny gradient effect */}
            <ShinyText
              text="Product Leader."
              className="font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 sm:mt-2"
            />
          </h1>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl"
            >
              <span>Apply for Next Enrollment</span>
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
