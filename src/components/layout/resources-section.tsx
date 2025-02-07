'use client'

import React, { useEffect, useRef } from 'react';
import Card from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const resources = [
    {
      title: "Digital Transformation Guide",
      description: "Comprehensive guide to transforming your business for the digital age. Learn key strategies and best practices.",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "Guide",
      href: "/resources/digital-transformation"
    },
    {
      title: "Cloud Migration Playbook",
      description: "Step-by-step playbook for successful cloud migration. Includes checklists and case studies.",
      imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      category: "Playbook",
      href: "/resources/cloud-migration"
    },
    {
      title: "AI Implementation Toolkit",
      description: "Essential tools and frameworks for implementing AI in your organization. From planning to deployment.",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      category: "Toolkit",
      href: "/resources/ai-toolkit"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Latest cybersecurity best practices and guidelines for enterprise security.",
      imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      category: "Security",
      href: "/resources/cybersecurity"
    },
    {
      title: "Data Analytics Framework",
      description: "Comprehensive framework for building and scaling data analytics capabilities.",
      imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      category: "Framework",
      href: "/resources/data-analytics"
    },
    {
      title: "Digital Innovation Report",
      description: "Annual report on digital innovation trends and their impact on business.",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      category: "Report",
      href: "/resources/innovation-report"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

    if (!section) return;

    const titleElement = section.querySelector('.section-title');
    const cardsContainer = section.querySelector('.cards-grid');

    if (!titleElement || !cardsContainer) return;

    // Fade in the section title
    gsap.fromTo(titleElement,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );

    // Stagger the cards appearance
    gsap.fromTo(cards,
      {
        y: 100,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsContainer,
          start: 'top 75%',
        }
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 section-title">
          <h2 className="text-4xl font-bold text-royal_blue_traditional-900 dark:text-white mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our latest guides, playbooks, and reports to help drive your business forward
          </p>
        </div>
        
        <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="h-full"
            >
              <Card
                {...resource}
                variant="default"
                size="md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;