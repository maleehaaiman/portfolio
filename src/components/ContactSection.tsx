import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';

interface ContactCardItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  copyValue?: string;
}

export const ContactSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const cards: ContactCardItem[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Connect professionally and view career updates, credentials & network.',
      icon: <Linkedin className="w-6 h-6 text-[#0A66C2]" />,
      href: 'https://www.linkedin.com/in/maleeha-aiman-shaik-b77268386',
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Explore open-source code repositories, scripts, and technical implementations.',
      icon: <Github className="w-6 h-6 text-white" />,
      href: 'https://github.com/maleehaaiman',
    },
    {
      id: 'email',
      name: 'Email',
      description: 'Send a direct inquiry to aimanmaleeha17@gmail.com via mail client.',
      icon: <Mail className="w-6 h-6 text-[#64CEFB]" />,
      href: 'mailto:aimanmaleeha17@gmail.com',
      copyValue: 'aimanmaleeha17@gmail.com',
    },
  ];

  const handleCopy = (e: React.MouseEvent, id: string, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="connect" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Contact Me
          </h2>
        </motion.div>

        {/* Contact Cards Grid: 3 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.href}
              target={card.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={card.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="w-full text-left rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-7 hover:border-white/30 hover:bg-black/70 hover:-translate-y-1.5 transition-all duration-300 group shadow-xl flex flex-col justify-between cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.12,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {card.copyValue && (
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, card.id, card.copyValue!)}
                        className="w-8 h-8 rounded-full border border-white/15 bg-black/50 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                        title="Copy email address"
                        aria-label="Copy email address"
                      >
                        {copiedId === card.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                    <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white text-lg font-medium tracking-tight">
                    {card.name}
                  </h3>
                  {card.copyValue && copiedId === card.id && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
                      Copied!
                    </span>
                  )}
                </div>

                <p className="text-white/75 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center text-xs font-medium text-[#64CEFB] group-hover:text-white transition-colors">
                <span>{card.href.startsWith('mailto:') ? 'Send Email' : 'Open Link'}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
