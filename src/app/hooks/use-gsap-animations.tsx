'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  trigger: React.RefObject<HTMLElement | null>;
  selectors?: {
    target: string;
    animation: GSAPAnimation;
  }[];
  scrollAnimations?: {
    selector: string;
    animation: GSAPAnimation;
    trigger?: HTMLElement | string;
    start?: string;
    end?: string;
    toggleActions?: string;
  }[];
}

interface GSAPAnimation {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  timeline?: boolean;
}

export const useGSAPAnimations = (config: AnimationConfig) => {
  const { trigger, selectors = [], scrollAnimations = [] } = config;
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);
  const timelineRefs = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!trigger.current) return;

    // Create a GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Reset any existing animations
      scrollTriggerRefs.current.forEach((trigger) => trigger.kill());
      timelineRefs.current.forEach((timeline) => timeline.kill());

      scrollTriggerRefs.current = [];
      timelineRefs.current = [];

      // Handle immediate animations
      selectors.forEach(({ target, animation }) => {
        const elements = trigger.current?.querySelectorAll(target);
        if (!elements?.length) return;

        if (animation.timeline) {
          const tl = gsap.timeline();
          if (animation.from) {
            tl.from(elements, animation.from);
          }
          if (animation.to) {
            tl.to(elements, animation.to);
          }
          timelineRefs.current.push(tl);
        } else {
          if (animation.from) {
            gsap.from(elements, animation.from);
          }
          if (animation.to) {
            gsap.to(elements, animation.to);
          }
        }
      });

      // Handle scroll-triggered animations
      scrollAnimations.forEach(
        ({ selector, animation, trigger: scrollTrigger, start, end, toggleActions }) => {
          const elements = trigger.current?.querySelectorAll(selector);
          if (!elements?.length || !animation.from) return;

          const triggerElement =
            typeof scrollTrigger === 'string'
              ? document.querySelector(scrollTrigger)
              : scrollTrigger || trigger.current;

          if (!triggerElement) return;

          const st = ScrollTrigger.create({
            trigger: triggerElement,
            start: start || 'top 80%',
            end: end || 'bottom 20%',
            toggleActions: toggleActions || 'play none none reverse',
            animation: gsap.from(elements, {
              ...(animation.from ?? {}),
              paused: true,
            }),
          });

          scrollTriggerRefs.current.push(st);
        }
      );
    });

    // Cleanup function
    return () => {
      ctx.revert();
      scrollTriggerRefs.current.forEach((trigger) => trigger.kill());
      timelineRefs.current.forEach((timeline) => timeline.kill());
      scrollTriggerRefs.current = [];
      timelineRefs.current = [];
    };
  }, [trigger, selectors, scrollAnimations]);
};
