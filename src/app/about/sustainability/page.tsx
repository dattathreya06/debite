'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Globe2, Heart, Recycle, Wind, TreePine, Shield, Users } from 'lucide-react';
import Button from '@/components/ui/button';
import { textReveal, fadeIn } from '@/app/anim/text-anim';
import FooterCTA from '@/components/layout/cta';
import Eyebrow from '@/components/ui/eyebrow';

gsap.registerPlugin(ScrollTrigger);

interface Initiative {
  title: string;
  description: string;
  metrics: string;
  image: string;
}

interface Commitment {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SustainabilityPage = () => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const commitmentsRef = useRef<HTMLDivElement>(null);
  const initiativesRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  const commitments: Commitment[] = [
    {
      title: 'Carbon Neutrality',
      description: 'Committed to achieving net-zero emissions across our global operations by 2030',
      icon: <Leaf size={50} strokeWidth={1} />
    },
    {
      title: 'Sustainable Innovation',
      description: 'Developing green technologies and solutions for a sustainable future',
      icon: <Globe2 size={50} strokeWidth={1} />
    },
    {
      title: 'Social Impact',
      description: 'Creating positive change in communities through technology and education',
      icon: <Heart size={50} strokeWidth={1} />
    },
    {
      title: 'Circular Economy',
      description: 'Implementing recycling and waste reduction programs across our operations',
      icon: <Recycle size={50} strokeWidth={1}/>
    }
  ];

  const initiatives: Initiative[] = [
    {
      title: 'Renewable Energy Transition',
      description: 'Converting our data centers and offices to 100% renewable energy sources.',
      metrics: '75% of facilities powered by renewable energy',
      image: 'https://images.pexels.com/photos/3976320/pexels-photo-3976320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Green Technology Solutions',
      description: 'Developing eco-friendly IT solutions and sustainable digital infrastructure.',
      metrics: '30% reduction in client carbon footprint',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Community Empowerment',
      description: 'Supporting local communities through technology education and digital inclusion.',
      metrics: '100,000+ people reached through initiatives',
      image: 'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const impactStats = [
    {
      value: '45%',
      label: 'Reduction in carbon emissions since 2020',
      icon: <Wind className="w-8 h-8" />
    },
    {
      value: '100+',
      label: 'Sustainability projects worldwide',
      icon: <TreePine className="w-8 h-8" />
    },
    {
      value: '1M+',
      label: 'Lives positively impacted',
      icon: <Users className="w-8 h-8" />
    },
    {
      value: '200+',
      label: 'Green technology solutions deployed',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector('h1');
      const heroDesc = heroRef.current.querySelector('p');
      
      if (heroTitle && heroDesc) {
        const tl = gsap.timeline();
        tl.add(textReveal(heroTitle))
          .from(heroDesc, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
          }, '-=0.4');
      }
    }

    // Scroll animations for sections
    const sections = [
      { ref: commitmentsRef, selector: '.commitment-card' },
      { ref: initiativesRef, selector: '.initiative-card' },
      { ref: impactRef, selector: '.impact-card' }
    ];

    sections.forEach(({ ref, selector }) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        if (elements.length) {
          gsap.from(elements, {
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          });
        }
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] w-full" ref={heroRef}>
        <Image
          src="https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sustainability at Debite"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6">Building a Sustainable Future</h1>
              <p className="text-xl text-gray-200 mb-8">
                We're committed to creating positive environmental and social impact through technology 
                and innovation, working towards a more sustainable future for all.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  View Our Initiatives
                </Button>
                <Button variant="outline" size="lg">
                  Download ESG Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-dark" ref={commitmentsRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR COMMITMENTS" />
          <h2 className="text-4xl font-bold mb-12">Sustainable by Design</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="commitment-card p-8 bg-dark-dark border border-dark-light"
              >
                <div className="text-gold-300 mb-4">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                <p className="text-gray-300">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-dark-dark" ref={initiativesRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="IN ACTION" />
          <h2 className="text-4xl font-bold mb-12">Our Initiatives</h2>
          <div className="space-y-12">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="initiative-card flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="lg:w-1/2">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    width={800}
                    height={600}
                    className="rounded-lg grayscale"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-gray-300 mb-6">{initiative.description}</p>
                  <div className="p-4 bg-dark border border-dark-light rounded-lg">
                    <p className="text-2xl font-bold text-gold-300">{initiative.metrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-dark" ref={impactRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR IMPACT" />
          <h2 className="text-4xl font-bold mb-12">Making a Difference</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="impact-card p-8 bg-dark-dark border border-dark-light text-center"
              >
                <div className="text-gold-300 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gold-300 mb-4">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FooterCTA
        title="Let's Build a Sustainable Future Together"
        description="Partner with us to create positive environmental and social impact through technology."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
};

export default SustainabilityPage;