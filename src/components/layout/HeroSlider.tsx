'use client'

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useGSAPAnimations } from '@/app/hooks/use-gsap-animations';
import gsap from 'gsap';
import Button from '@/components/ui/button';

const HEADER_HEIGHT = '4rem';
const AUTOPLAY_DELAY = 5000;

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonHref?: string;
}

const slides: Slide[] = [
  {
    title: "Digital Innovation",
    subtitle: "Transforming businesses through technology",
    image: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg",
    buttonText: "Read more",
    buttonHref: "/industries/manufacturing"
  },
  {
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure for modern enterprises",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    buttonText: "Read more",
    buttonHref: "/industries/manufacturing"
  },
  {
    title: "AI & Analytics",
    subtitle: "Unlock the power of your data",
    image: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg",
    buttonText: "Read more",
    buttonHref: "/industries/manufacturing"
  }
];

const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animation configuration using useGSAPAnimations
  useGSAPAnimations({
    trigger: sliderRef,
    selectors: [
      {
        target: `.slide-${activeSlide} .slide-title`,
        animation: {
          timeline: true,
          from: {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.02,
            ease: 'power3.out',
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      {
        target: `.slide-${activeSlide} .slide-subtitle`,
        animation: {
          timeline: true,
          from: {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out',
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      },
      {
        target: `.slide-${activeSlide} .slide-button`,
        animation: {
          timeline: true,
          from: {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.8,
            ease: 'power3.out',
          },
          to: {
            opacity: 1,
            y: 0
          }
        }
      }
    ]
  });

  // Handle slide transitions
  const animateSlide = (index: number) => {
    setIsAnimating(true);
    
    // Use GSAP timeline for slide transition
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    tl.to(`.slide`, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    })
    .set(`.slide-${index}`, { opacity: 1 })
    .from(`.slide-${index} .slide-content`, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  };

  useEffect(() => {
    animateSlide(activeSlide);
  }, [activeSlide]);

  // Autoplay functionality
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
            className={`slide slide-${index} absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent">
              <div className="container mx-auto h-full px-6 flex items-center">
                <div className="slide-content max-w-3xl">
                  <h1 className="slide-title text-6xl font-bold text-white mb-6 overflow-hidden">
                    {slide.title}
                  </h1>
                  <p className="slide-subtitle text-2xl text-white/90 max-w-xl overflow-hidden">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.buttonHref}
                    className="slide-button inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-none hover:translate-y-[-2px] transition-all duration-300 mt-8"
                  >
                    {slide.buttonText}
                  </a>
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
                  ? 'bg-gradient-to-r from-primary to-accent w-24' 
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