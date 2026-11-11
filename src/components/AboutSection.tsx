import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeUpVariants,
  staggerContainerVariants,
  scaleInVariants,
} from '../hooks/useScrollAnimation';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 text-white overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            About Me
          </h2>
        </motion.div>

        {/* Content Card with Frosted Glass */}
        <motion.div
          className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-colors"
          variants={scaleInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#64CEFB]/50 to-transparent" />

          {/* Professional Narrative Paragraphs */}
          <motion.div
            className="max-w-4xl space-y-6 text-white/90 text-base sm:text-lg leading-relaxed font-normal"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p variants={fadeUpVariants}>
              I am an <span className="text-white font-medium">AI/ML Engineer</span> specializing in <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Machine Learning</span>, and <span className="text-white font-medium">Deep Learning</span>, with a strong foundation in software engineering and modern technology. My technical focus centers on architecting predictive models, neural networks, and computer vision systems using <span className="text-white font-medium">Python, PyTorch, TensorFlow, and OpenCV</span>.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              I bridge theoretical data science with practical software engineering by integrating intelligent machine learning models into functional applications and <span className="text-white font-medium">AI-powered mobile solutions</span>. Combining algorithmic depth with robust database management, modern development toolchains, and intuitive user-centric design, I focus on building efficient, scalable, and production-ready systems that create meaningful impact.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Driven by innovation and structured problem-solving, I thrive in dynamic environments that require analytical precision, fast-paced technical iteration, and creative thinking to transform complex data and emerging AI advancements into reliable, high-performance solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
