import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
  as?: 'div' | 'section' | 'li';
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  className = '',
  delay = 0,
  scale = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: scale ? 0.92 : 1 }
      }
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
