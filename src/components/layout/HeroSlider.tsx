'use client'

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { textReveal, fadeIn } from '@/app/anim/text-anim';
import gsap from 'gsap';

const HEADER_HEIGHT = '4rem';
const AUTOPLAY_DELAY = 5000;

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Digital Innovation",
    subtitle: "Transforming businesses through technology",
    image: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg"
  },
  {
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure for modern enterprises",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
  },
  {
    title: "AI & Analytics",
    subtitle: "Unlock the power of your data",
    image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
  }
];

const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationCleanupRefs = useRef<(() => void)[]>([]);

  // Animation setup and cleanup
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    slides.forEach((_, index) => {
      if (titleRefs.current[index] && subtitleRefs.current[index]) {
        // Initialize but don't play animations yet
        const titleAnimation = textReveal(titleRefs.current[index] as HTMLElement, {
          duration: 0.8,
          stagger: 0.02
        });

        const subtitleAnimation = fadeIn(subtitleRefs.current[index] as HTMLElement, {
          duration: 1,
          from: 0,
          delay: 0.6 // Delay subtitle animation
        });

        // Store cleanup functions
        cleanupFunctions.push(() => {
          titleAnimation?.animation?.kill();
          titleAnimation?.revert?.();
          subtitleAnimation?.kill();
        });
      }
    });

    animationCleanupRefs.current = cleanupFunctions;

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  const animateSlide = (index: number) => {
    if (!titleRefs.current[index] || !subtitleRefs.current[index]) return;
    
    setIsAnimating(true);

    // Clean up previous animations
    animationCleanupRefs.current.forEach(cleanup => cleanup());

    // Create fresh animations for current slide
    const titleAnimation = textReveal(titleRefs.current[index] as HTMLElement, {
      duration: 0.8,
      stagger: 0.02
    });

    const subtitleAnimation = fadeIn(subtitleRefs.current[index] as HTMLElement, {
      duration: 1,
      from: 0,
      delay: 0.6
    });

    // Create a master timeline
    const masterTimeline = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    masterTimeline
      .add(titleAnimation?.animation)
      .add(subtitleAnimation, ">-0.4");
  };

  useEffect(() => {
    animateSlide(activeSlide);
  }, [activeSlide]);

  useEffect(() => {
    if (!isAnimating) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, AUTOPLAY_DELAY);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (isAnimating || index === activeSlide) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActiveSlide(index);
  };

  return (
    <div 
      ref={sliderRef} 
      className="relative w-full overflow-hidden bg-royal_blue_traditional-900"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }}
    >
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-royal_blue_traditional-900/90 to-transparent">
              <div className="container mx-auto h-full px-6 flex items-center">
                <div className="max-w-3xl">
                  <h1 
                    ref={el => titleRefs.current[index] = el}
                    className="text-6xl font-bold text-white mb-6 overflow-hidden"
                  >
                    {slide.title}
                  </h1>
                  <p 
                    ref={el => subtitleRefs.current[index] = el}
                    className="text-2xl text-white/90 max-w-xl overflow-hidden"
                  >
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              disabled={isAnimating}
              onClick={() => handleSlideClick(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                index === activeSlide 
                  ? 'bg-mikado_yellow-500 w-24' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;