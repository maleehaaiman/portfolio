import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#skills' },
    { label: 'Instructors', href: '#interests' },
    { label: 'Testimonials', href: '#certifications' },
    { label: 'Blog', href: '#certifications' },
    { label: 'Contact us', href: '#connect', hasArrow: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
        <div className="flex items-center justify-between">
          {/* Logo: Circular design with white border (2px), containing smaller filled white circle inside, followed by "DesignPro" text */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-white font-medium text-lg tracking-tight">
              DesignPro
            </span>
          </a>

          {/* Desktop Nav - Rounded pill container with gray-700 border */}
          <nav className="hidden lg:flex items-center rounded-full border border-gray-700 bg-black/40 backdrop-blur-md px-6 py-2.5 shadow-lg">
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-normal flex items-center gap-1 group/link"
                  >
                    <span>{link.label}</span>
                    {link.hasArrow && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white p-2 rounded-lg border border-gray-700/60 bg-black/50 backdrop-blur-sm transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl border border-gray-700 bg-black/95 backdrop-blur-xl p-5 shadow-2xl transition-all">
            <ul className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
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
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
