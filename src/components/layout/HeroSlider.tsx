'use client'

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const slides: Slide[] = [
  {
    title: "Transform Your Business",
    subtitle: "Drive innovation with cutting-edge solutions",
    description: "Partner with us to accelerate your digital transformation journey",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Learn More"
  },
  {
    title: "Data-Driven Insights",
    subtitle: "Unlock the power of your data",
    description: "Turn complex data into actionable business intelligence",
    image: "https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Explore Solutions"
  },
  {
    title: "Cloud Excellence",
    subtitle: "Scale with confidence",
    description: "Modernize your infrastructure with cloud-native solutions",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Get Started"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<number>();
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.Context | null>(null);

  // Initial animation setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = {
          subtitle: contentRef.current.querySelector('.slide-subtitle'),
          title: contentRef.current.querySelector('.slide-title'),
          description: contentRef.current.querySelector('.slide-description'),
          cta: contentRef.current.querySelector('.slide-cta')
        };

        const tl = gsap.timeline();
        tl.from([elements.subtitle, elements.title, elements.description, elements.cta], {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        });
      }
    }, sliderRef);

    animationRef.current = ctx;

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const startTimer = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        if (!isAnimating) {
          handleNext();
        }
      }, 5000);
    };

    startTimer();

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  const animateContent = (direction: 'next' | 'prev') => {
    if (!contentRef.current) return;

    const elements = {
      subtitle: contentRef.current.querySelector('.slide-subtitle'),
      title: contentRef.current.querySelector('.slide-title'),
      description: contentRef.current.querySelector('.slide-description'),
      cta: contentRef.current.querySelector('.slide-cta')
    };

    const xOffset = direction === 'next' ? 50 : -50;

    return new Promise<void>((resolve) => {
      // Kill any existing animations
      if (animationRef.current) {
        animationRef.current.revert();
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: resolve
        });

        // Fade out
        tl.to([elements.subtitle, elements.title, elements.description, elements.cta], {
          x: -xOffset,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.in'
        });

        // Update content
        tl.add(() => {
          if (elements.subtitle) elements.subtitle.textContent = slides[currentSlide].subtitle;
          if (elements.title) elements.title.textContent = slides[currentSlide].title;
          if (elements.description) elements.description.textContent = slides[currentSlide].description;
        });

        // Fade in
        tl.fromTo(
          [elements.subtitle, elements.title, elements.description, elements.cta],
          { x: xOffset, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out'
          }
        );
      }, sliderRef);

      animationRef.current = ctx;
    });
  };

  const animateSlideChange = async (nextSlide: number, direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const currentSlideEl = slideRefs.current[currentSlide];
    const nextSlideEl = slideRefs.current[nextSlide];

    if (!currentSlideEl || !nextSlideEl) return;

    const currentBg = currentSlideEl.querySelector('.slide-bg');
    const nextBg = nextSlideEl.querySelector('.slide-bg');

    if (!currentBg || !nextBg) return;

    // Animate background and content simultaneously
    await Promise.all([
      new Promise<void>((resolve) => {
        const tl = gsap.timeline({
          onComplete: resolve
        });

        tl.to(currentBg, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in'
        })
          .set(nextSlideEl, { display: 'block' })
          .fromTo(nextBg,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
      }),
      animateContent(direction)
    ]);

    setCurrentSlide(nextSlide);
    setIsAnimating(false);
  };

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    animateSlideChange(nextSlide, 'next');
  };

  const handlePrev = () => {
    const nextSlide = (currentSlide - 1 + slides.length) % slides.length;
    animateSlideChange(nextSlide, 'prev');
  };

  const handleDotClick = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    const direction = index > currentSlide ? 'next' : 'prev';
    animateSlideChange(index, direction);
  };

  return (
    <div ref={sliderRef} className="relative h-screen w-full overflow-hidden bg-dark">
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => { slideRefs.current[index] = el; }}
          className={`absolute inset-0 ${index === currentSlide ? 'block' : 'hidden'}`}
        >
          {/* Background Image */}
          <div className="slide-bg absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
          </div>
        </div>
      ))}

      {/* Content - Single instance */}
      <div ref={contentRef} className="relative h-full flex items-center pointer-events-none">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="slide-subtitle text-mono text-dark text-xl mb-4">
              {slides[currentSlide].subtitle}
            </h3>
            <h2 className="slide-title text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h2>
            <p className="slide-description text-xl text-gray-300 mb-8">
              {slides[currentSlide].description}
            </p>
            <button className="slide-cta px-8 py-3 bg-dark text-white font-semibold font-mono hover:bg-gold-600 transition-colors pointer-events-auto">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="absolute inset-x-0 bottom-12 z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`relative w-12 h-1 overflow-hidden transition-all duration-300
                    ${index === currentSlide ? 'bg-accent' : 'bg-black/20 hover:bg-gray-300'}`}
                >
                  {index === currentSlide && (
                    <span className="absolute inset-0 bg-gold-600 animate-progress-bar" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Arrow Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Animation Styles */}
      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress-bar {
          animation: progress 5s linear;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;