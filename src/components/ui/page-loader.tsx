'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageLoaderProps {
  onLoadComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onLoadComplete }) => {
  const loaderRef = useRef(null);
  
  // Create array of rectangles with random widths
  const topRects = Array.from({ length: 8 }, () => ({
    width: Math.floor(Math.random() * 40 + 60), // Random width between 60-100px
    height: Math.floor(Math.random() * 150 + 100) // Random height between 100-250px
  }));
  
  const bottomRects = Array.from({ length: 8 }, () => ({
    width: Math.floor(Math.random() * 40 + 60),
    height: Math.floor(Math.random() * 150 + 100)
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Wait a bit before calling onLoadComplete
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 500);
        }
      });

      // Initial state
      gsap.set('.top-rect', { y: -300 });
      gsap.set('.bottom-rect', { y: 300 });
      
      // Animate rectangles to center
      tl.to('.top-rect', {
        y: 0,
        duration: 1.2,
        stagger: {
          each: 0.1,
          from: "random"
        },
        ease: "power3.inOut"
      })
      .to('.bottom-rect', {
        y: 0,
        duration: 1.2,
        stagger: {
          each: 0.1,
          from: "random"
        },
        ease: "power3.inOut"
      }, "<")
      // Scale rectangles to cover screen
      .to(['.top-rect', '.bottom-rect'], {
        scaleY: 2,
        duration: 0.8,
        ease: "power2.inOut"
      })
      // Fade out loader
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onLoadComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-50 bg-royal_blue_traditional-900 flex flex-col justify-between overflow-hidden"
    >
      {/* Top rectangles */}
      <div className="flex justify-between px-4">
        {topRects.map((rect, i) => (
          <div
            key={`top-${i}`}
            className="top-rect bg-gold-400"
            style={{
              width: rect.width,
              height: rect.height
            }}
          />
        ))}
      </div>
      
      {/* Bottom rectangles */}
      <div className="flex justify-between px-4">
        {bottomRects.map((rect, i) => (
          <div
            key={`bottom-${i}`}
            className="bottom-rect bg-gold-400"
            style={{
              width: rect.width,
              height: rect.height
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageLoader;