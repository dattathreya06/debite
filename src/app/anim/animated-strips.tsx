'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedStripsProps {
  count?: number;
  baseFrequency?: number;
  frequencyMultiplier?: number;
  maxHeightMultiplier?: number;
  className?: string;
}

export const AnimatedStrips: React.FC<AnimatedStripsProps> = ({
  count = 10,
  baseFrequency = 0.002,
  frequencyMultiplier = 1.5,
  maxHeightMultiplier = 1.2,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<number>();
  const targetHeights = useRef<number[]>([]);
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(0);

  // Initialize state for window-dependent values
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    lastScrollY.current = window.scrollY;
    lastTime.current = performance.now();

    const handleScroll = () => {
      const currentTime = performance.now();
      const currentScrollY = window.scrollY;
      const timeDelta = currentTime - lastTime.current;
      
      if (timeDelta > 0) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        scrollVelocity.current = (scrollDelta / timeDelta) * 16; // Normalize to roughly 60fps
      }

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    const updateStrips = () => {
      const time = performance.now() * 0.001; // Convert to seconds
      const velocity = Math.abs(scrollVelocity.current);
      const velocityFactor = Math.min(velocity * 0.01, 1);

      stripsRef.current.forEach((strip, index) => {
        if (!strip) return;

        const frequency = baseFrequency * Math.pow(frequencyMultiplier, index);
        const targetHeight = Math.sin(time * frequency) * 0.5 + 0.5;
        
        targetHeights.current[index] = targetHeight;

        const currentHeight = parseFloat(strip.style.height || '0');
        const newHeight = gsap.utils.interpolate(
          currentHeight,
          targetHeight * 100 * maxHeightMultiplier * (1 + velocityFactor),
          0.1
        );

        strip.style.height = `${newHeight}%`;
      });

      animationRef.current = requestAnimationFrame(updateStrips);
    };

    updateStrips();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, baseFrequency, frequencyMultiplier, maxHeightMultiplier]);

  if (!isClient) {
    return null; // Or return a loading state/placeholder
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          ref={el => el && (stripsRef.current[index] = el)}
          className="absolute bottom-0 w-full bg-royal_blue_traditional-600/10"
          style={{
            left: `${(index / count) * 100}%`,
            width: `${100 / count}%`,
            height: '0%',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStrips;