import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../ui/button';
import ScrollEqualizer from '@/app/anim/animated-strips';

interface FooterCTAProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  equalizerConfig?: {
    strips?: number;
    gradientStart?: string;
    gradientEnd?: string;
    gradientDirection?: 'vertical' | 'horizontal';
    stripWidth?: number;
    stripGap?: number;
  };
}

const FooterCTA: React.FC<FooterCTAProps> = ({
  title,
  buttonText,
  buttonHref,
  equalizerConfig
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    gsap.fromTo(content,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-r from-primary to-accent pt-16 pb-20 overflow-hidden"
    >
      <ScrollEqualizer {...equalizerConfig} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden lg:block lg:col-span-1" />
          <div
            ref={contentRef}
            className="col-span-12 lg:col-span-5 md:col-span-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              {title}
            </h2>
            <div className="relative">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = buttonHref}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;