import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 bg-black/75 backdrop-blur-md text-white border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info with Heart Logo */}
          <div className="flex items-center gap-3">
            <img
              src="./heart-logo.png"
              alt="Heart Logo"
              className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
            <div>
              <p className="text-white font-medium text-sm">
                Shaik Maleeha Aiman
              </p>
              <p className="text-white/60 text-xs font-mono">
                AI/ML Engineer
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left text-white/60 text-xs">
            <p>&copy; {new Date().getFullYear()} Shaik Maleeha Aiman. All rights reserved.</p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/30 bg-black/60 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
