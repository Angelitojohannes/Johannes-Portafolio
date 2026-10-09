import { RefObject, useLayoutEffect, useRef, useState } from 'react';

interface UseInViewResult<T extends HTMLElement> {
  ref: RefObject<T>;
  isInView: boolean;
}

export const useInView = <T extends HTMLElement>(): UseInViewResult<T> => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(true);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window.IntersectionObserver !== 'function') {
      setIsInView(true);
      return;
    }

    setIsInView(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};
