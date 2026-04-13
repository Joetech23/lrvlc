import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const classes = ['reveal', 'reveal-left', 'reveal-right'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements: Element[] = [];
    classes.forEach((cls) => {
      document.querySelectorAll(`.${cls}`).forEach((el) => {
        observer.observe(el);
        elements.push(el);
      });
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  });
}
