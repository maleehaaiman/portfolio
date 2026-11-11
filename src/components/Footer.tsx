import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInVariants } from '../hooks/useScrollAnimation';
import { HeartLogo } from './HeartLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="w-full py-12 bg-black/75 backdrop-blur-md text-white border-t border-white/10 relative z-10"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info with Heart Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeartLogo className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            <div>
              <p className="text-white font-medium text-sm">
                Shaik Maleeha Aiman
              </p>
              <p className="text-white/60 text-xs font-mono">
                AI/ML Engineer
              </p>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="text-center md:text-left text-white/60 text-xs">
            <p>&copy; {new Date().getFullYear()} Shaik Maleeha Aiman. All rights reserved.</p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/30 bg-black/60 transition-colors"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
