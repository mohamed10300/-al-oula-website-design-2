import { useState, useEffect } from 'react';

export function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(!startOnView);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const endValue = end;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return { count, setInView };
}
