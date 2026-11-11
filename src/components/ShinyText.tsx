import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, className = '' }) => {
  return (
    <motion.span
      className={`inline-block select-none ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(100deg, #64CEFB 0%, #64CEFB 35%, #ffffff 50%, #64CEFB 65%, #64CEFB 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['100% 0%', '-100% 0%'],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;

