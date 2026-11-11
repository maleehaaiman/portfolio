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
        <div className="w-full pt-2" />

        {/* Center Hero Section with Logo and Name */}
        <div className="w-full flex flex-col items-center justify-center text-center my-auto py-4 sm:py-8">
          {/* Prominent Heart Logo — pop-in with spring + float */}
          <motion.div
            className="flex items-center justify-center mb-6 sm:mb-8"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
                scale: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
              }}
              className="drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] drop-shadow-[0_6px_45px_rgba(100,206,251,0.4)]"
            >
              <HeartLogo className="w-32 h-22 sm:w-44 sm:h-30 md:w-56 md:h-38 lg:w-64 lg:h-44" />
            </motion.div>
          </motion.div>

          {/* Name Heading at Head Part */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-3 select-none flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          >
            <span className="text-white">Shaik Maleeha</span>
            <ShinyText text="Aiman" className="font-medium" />
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            className="text-white/75 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            AI/ML Engineer &bull; Artificial Intelligence &bull; Machine Learning
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          >
            <motion.a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-full px-8 py-4 text-sm md:text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="w-full flex justify-center opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#about" aria-label="Scroll down">
            <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1 hover:border-white transition-colors">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
