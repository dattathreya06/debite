'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/card';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  width?: string;
  className?: string;
}

const insights = [
  {
    title: "The Future of AI in Business",
    description: "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
    category: "Technology",
    href: "/insights/ai-future",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    title: "Digital Transformation Trends",
    description: "Key trends shaping the digital transformation landscape in 2024 and beyond.",
    category: "Business",
    href: "/insights/digital-transformation",
    imageUrl: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
  },
  {
    title: "Sustainable Technology",
    description: "How green technologies are revolutionizing industries and promoting sustainability.",
    category: "Sustainability",
    href: "/insights/sustainable-tech",
    imageUrl: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg"
  },
  {
    title: "Cybersecurity Best Practices",
    description: "Essential security measures for protecting your business in the digital age.",
    category: "Security",
    href: "/insights/cybersecurity",
    imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
  },
  {
    title: "Cloud Computing Solutions",
    description: "Modern cloud strategies for scalable and efficient business operations.",
    category: "Technology",
    href: "/insights/cloud-computing",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Data Analytics Insights",
    description: "Leveraging data analytics for better business intelligence and growth.",
    category: "Analytics",
    href: "/insights/data-analytics",
    imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  }
];

const HorizontalScroll = ({ width = "100%", className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;
    const section = sectionRef.current;
    const cards = cardRefs.current;
    
    if (!container || !trigger || !section) return;

    // Set initial state of cards
    gsap.set(cards, { 
      opacity: 0,
      y: 20,
      scale: 0.95
    });

    // Main horizontal scroll animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "+=300%",
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        invalidateOnRefresh: true,
      }
    });

    const width = container.scrollWidth - window.innerWidth;
    
    scrollTl.to(container, {
      x: -width,
      ease: "none",
    });

    // Card reveal animations
    cards.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTl,
          start: "left +=1400",
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => {
      scrollTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`bg-royal_blue_traditional-900 text-white overflow-hidden ${className}`}
      style={{ width }}
    >
      <div ref={triggerRef} className="relative overflow-hidden">
        <div className="py-8 md:pt-24 pb-12 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Latest Insights</h2>
        </div>
        
        <div 
          ref={containerRef}
          className="flex gap-6 px-4 md:px-6 pb-12 will-change-transform"
        >
          {insights.map((insight, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className="w-[420px] md:w-[420px] h-[36rem] sm:w-[500px] h-[36rem] flex-shrink-0 will-change-transform"
            >
              <Card 
                {...insight} 
                variant="full-bg"
                size="lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;