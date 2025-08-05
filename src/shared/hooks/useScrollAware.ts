import { useEffect, useRef, useState } from 'react';

export const useScrollAware = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref: any = useRef();

  const onScroll = (e: any) =>
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop);
    });

  useEffect(() => {
    const scrollContainer = ref.current;

    setScrollTop(scrollContainer.scrollTop);
    scrollContainer.addEventListener('scroll', onScroll);
    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, []);

  return [scrollTop, ref];
};
