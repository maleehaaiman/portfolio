import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans antialiased selection:bg-[#64CEFB] selection:text-black">
      {/* Full-screen looping video background - fixed across entire page and bright! */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
        />
        {/* Subtle minimal overlay to keep background bright while ensuring text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Full-Screen Hero & Downstream Information with moving background */}
      <main className="relative z-10 w-full">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <InterestsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
