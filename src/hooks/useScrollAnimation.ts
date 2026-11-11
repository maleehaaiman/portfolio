import { useEffect } from 'react';

export function usePopUpAnimation() {
  useEffect(() => {
    const check = () => {
      document.querySelectorAll<HTMLElement>('.pop-up:not(.in-view)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('in-view');
        }
      });
    };

    // Run immediately on mount
    check();
    // Run on every scroll
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
}
