import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useEffect, useRef } from 'react';

interface AnimateWordParams {
  target: HTMLElement;
  staggerDuration?: number;
  ease?: string;
  y?: number;
}

export const createHoverAnimation = ({
  target,
  staggerDuration = 0.05,
  ease = 'power4.out',
  y = -4
}: AnimateWordParams) => {
  const split = new SplitType(target, { types: 'chars' });
  const chars = split.chars;
  
  gsap.set(chars, { opacity: 1, y: 0 });
  
  const tl = gsap.timeline({ paused: true });
  tl.to(chars, {
    opacity: 0.5,
    y,
    duration: 0.2,
    stagger: staggerDuration,
    ease
  });
  
  return tl;
};

export const useHoverWordAnimation = (ref: React.RefObject<HTMLButtonElement>) => {
  const animation = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    animation.current = createHoverAnimation({ target: ref.current });
    
    const element = ref.current;
    const mouseEnter = () => animation.current?.play();
    const mouseLeave = () => animation.current?.reverse();
    
    element.addEventListener('mouseenter', mouseEnter);
    element.addEventListener('mouseleave', mouseLeave);
    
    return () => {
      element.removeEventListener('mouseenter', mouseEnter);
      element.removeEventListener('mouseleave', mouseLeave);
      animation.current?.kill();
    };
  }, [ref]);
};