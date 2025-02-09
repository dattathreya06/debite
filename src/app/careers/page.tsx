'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, MapPin, Building2, Briefcase, GraduationCap, Users, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { textReveal, fadeIn } from '@/app/anim/text-anim';
import FooterCTA from '@/components/layout/cta';
import Eyebrow from '@/components/ui/eyebrow';

gsap.registerPlugin(ScrollTrigger);

// Types for job listings and filters
interface JobListing {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  level: string;
  postedDate: string;
}

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Sample data
  const benefits: Benefit[] = [
    {
      title: 'Career Growth',
      description: 'Continuous learning and development opportunities with clear career paths',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'Global Impact',
      description: 'Work on transformative projects for leading organizations worldwide',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and comprehensive wellness programs',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Innovation Culture',
      description: 'Access to cutting-edge technologies and innovative projects',
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'Senior Data Scientist',
      quote: 'At Debite, I get to work on AI projects that truly make a difference. The collaborative culture here is incredible.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Cloud Solutions Architect',
      quote: 'The opportunities for growth and learning are endless. Every day brings new challenges and innovations.',
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Priya Patel',
      role: 'Digital Transformation Consultant',
      quote: 'Working with global teams and diverse clients has expanded my perspective and accelerated my career growth.',
      image: '/api/placeholder/400/400'
    }
  ];

  const jobListings: JobListing[] = [
    {
      id: '1',
      title: 'Senior Cloud Architect',
      location: 'London, UK',
      department: 'Technology',
      type: 'Full-time',
      level: 'Senior',
      postedDate: '2025-02-01'
    },
    {
      id: '2',
      title: 'Data Science Lead',
      location: 'New York, USA',
      department: 'Data & AI',
      type: 'Full-time',
      level: 'Lead',
      postedDate: '2025-02-03'
    },
    {
      id: '3',
      title: 'UX Designer',
      location: 'Tokyo, Japan',
      department: 'Design',
      type: 'Full-time',
      level: 'Mid-level',
      postedDate: '2025-02-05'
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
      { ref: benefitsRef, selector: '.benefit-card' },
      { ref: jobsRef, selector: '.job-card' },
      { ref: teamRef, selector: '.team-card' }
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
    <div className="flex flex-col min-h-screen bg-royal_blue_traditional-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] w-full" ref={heroRef}>
        <Image
          src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Careers at Debite"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6">Build Your Future with Us</h1>
              <p className="text-xl text-gray-200 mb-8">
                Join a global team of innovators, creators, and problem-solvers shaping the future of technology and business.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="WHY JOIN US" />
          <h2 className="text-4xl font-bold mb-12">Life at Debite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card p-8 bg-dark-dark border border-dark-light"
              >
                <div className="text-gold-300 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-20 bg-dark-dark" ref={jobsRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="OPPORTUNITIES" />
          <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
          
          {/* Search and Filters */}
          <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-2 bg-dark border border-dark text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="p-2 bg-dark border border-dark  text-primary focus:outline-none focus:border-accent"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="japan">Japan</option>
            </select>
            <select
              className="p-2 bg-dark border border-dark  text-primary"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="tech">Technology</option>
              <option value="data">Data & AI</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="job-card p-6 bg-dark  border border-dark-light hover:border-grey-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stories Section */}
      <section className="py-20 bg-dark" ref={teamRef}>
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR PEOPLE" />
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card bg-dark overflow-hidden border border-dark-light"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gold-300 mb-4">{member.role}</p>
                  <p className="text-gray-300 italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FooterCTA
        title="Ready to Make an Impact?"
        description="Join our team and help shape the future of digital innovation."
        buttonText="View Open Positions"
        buttonHref="/careers/search"
      />
    </div>
  );
};

export default CareersPage;