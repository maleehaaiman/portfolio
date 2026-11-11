import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options?: { amount?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: options?.amount ?? 0.15,
    once: options?.once ?? true,
  });
  return { ref, isInView };
}
