import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface CertificationItem {
  title: string;
  issuer: string;
  type: string;
}

export const CertificationsSection: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      title: 'Hackathon Participation Certificates',
      issuer: 'Competitive Technical Hackathons',
      type: 'Participation Certificate',
    },
    {
      title: 'Codegnan Workshop Certificate',
      issuer: 'Codegnan',
      type: 'Technical Workshop Certificate',
    },
    {
      title: 'SRM University Workshop Certificate',
      issuer: 'SRM University',
      type: 'Technical Workshop Certificate',
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-24 sm:py-32 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[#64CEFB] uppercase text-xs sm:text-sm font-semibold tracking-widest block mb-2">
            04 // Activities
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Certifications & Activities
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl">
            Hands-on technical workshops, competitive hackathon participation, and practical skill validations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-7 hover:border-white/30 hover:bg-black/70 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center text-[#64CEFB] group-hover:border-[#64CEFB]/40 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/15 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-white text-lg font-medium tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-normal">
                  {item.issuer}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <span className="text-xs text-white/50 uppercase tracking-wider font-mono">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
