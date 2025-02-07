import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Button from '../ui/button';

interface FooterCTAProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  logomarkSrc?: string;
}

const FooterCTA: React.FC<FooterCTAProps> = ({
  title,
  buttonText,
  buttonHref,
  logomarkSrc = '/api/placeholder/48/48'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLImageElement>(null);
  const rightArrowRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Initial fade up animation
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
      className="relative bg-royal_blue_traditional-900 dark:bg-gray-900 pt-16 pb-20"
    >
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
                className="group"
                onClick={() => window.location.href = buttonHref}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={`/api/placeholder/24/24`}
                    width={24}
                    height={24}
                    alt=""
                    className="w-6 h-6 transform -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                  <span>{buttonText}</span>
                  <Image
                    src={`/api/placeholder/24/24`}
                    width={24}
                    height={24}
                    alt=""
                    className="w-6 h-6 transform transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-0"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
        <Image
          src={logomarkSrc}
          alt="Logomark"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default FooterCTA;