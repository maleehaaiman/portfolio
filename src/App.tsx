import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-sans antialiased selection:bg-[#64CEFB] selection:text-black">
      {/* Full-screen looping video background - fixed across entire page, bright and crystal clear! */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
        />
        {/* Very light minimal overlay to keep background bright while ensuring text readability */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Area - Z-index above the moving video background */}
      <main className="relative z-10 w-full">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
