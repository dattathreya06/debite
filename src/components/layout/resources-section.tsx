'use client'

import React, { useEffect, useRef } from 'react';
import Card from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Eyebrow from '../ui/eyebrow';
import { Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const resources = [
    {
      title: "Smart Manufacturing with IoT & AI for an Automotive Parts Manufacturer",
      description: "Debite helped an automotive parts manufacturer transform its production lines by integrating IoT-enabled sensors, AI-driven analytics, and automated quality control. This resulted in reduced downtime, improved efficiency, and predictive maintenance capabilities.",
      imageUrl: "https://images.pexels.com/photos/5532845/pexels-photo-5532845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Guide",
      href: "/insights/case-studies/smart-manufacturing-iot/"
    },
    {
      title: "Maximizing Cloud ROI Through Optimization",
      description: "Organizations invest in cloud computing to enhance agility, scalability, and efficiency, but without proper cost management, expenses can quickly escalate. ",
      imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Playbook",
      href: "/resources/cloud-migration"
    },
    {
      title: "AI Implementation Toolkit",
      description: "Essential tools and frameworks for implementing AI in your organization. From planning to deployment.",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg/?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Toolkit",
      href: "/resources/ai-toolkit"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Latest cybersecurity best practices and guidelines for enterprise security.",
      imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Security",
      href: "/resources/cybersecurity"
    },
    {
      title: "Data Analytics Framework",
      description: "Comprehensive framework for building and scaling data analytics capabilities.",
      imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Framework",
      href: "/resources/data-analytics"
    },
    {
      title: "Digital Innovation Report",
      description: "Annual report on digital innovation trends and their impact on business.",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-16 z-50 bg-dark"
    >
      <div className="container px-6 mx-auto">
        <div className="w-full mb-12 section-title">
          <Eyebrow text='INSIGHTS' />
          <h2 className="text-4xl font-bold text-white mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-white">
            Explore our latest guides, playbooks, and reports to help drive your business forward
          </p>
        </div>
        
        {/* Updated grid layout with centered cards */}
        <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
          {resources.map((resource, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="w-full flex justify-center"
            >
              <div className="w-full max-w-md">
                <Card
                  {...resource}
                  variant="default"
                  size="md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;