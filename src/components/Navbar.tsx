import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartLogo } from './HeartLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact Me', href: '#connect', hasArrow: true },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
        <div className="flex items-center justify-between">
          {/* Logo with Heart part only before name */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
              <HeartLogo className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
            </div>
            <span className="text-white font-medium text-base sm:text-lg tracking-tight">
              Shaik Maleeha Aiman
            </span>
          </motion.a>

          {/* Desktop Nav - Rounded pill container with gray-700 border */}
          <motion.nav
            className="hidden lg:flex items-center rounded-full border border-gray-700 bg-black/40 backdrop-blur-md px-6 py-2.5 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-normal flex items-center gap-1 group/link"
                  >
                    <span>{link.label}</span>
                    {link.hasArrow && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Hamburger Button */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white p-2 rounded-lg border border-gray-700/60 bg-black/50 backdrop-blur-sm transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-3 rounded-2xl border border-gray-700 bg-black/95 backdrop-blur-xl p-5 shadow-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="flex flex-col space-y-3.5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.055 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/80 hover:text-white text-sm font-medium flex items-center justify-between py-1 transition-colors"
                    >
                      <span>{link.label}</span>
                      {link.hasArrow ? (
                        <ArrowUpRight className="w-4 h-4 opacity-80" />
                      ) : null}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
