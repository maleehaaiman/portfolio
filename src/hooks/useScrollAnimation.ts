import { useEffect } from 'react';

export function usePopUpAnimation() {
  useEffect(() => {
    // Small delay so React StrictMode double-invoke doesn't kill the observer
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.pop-up:not(.in-view)');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      els.forEach((el) => observer.observe(el));

      // Store cleanup on window so double-invoke doesn't disconnect the live observer
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
