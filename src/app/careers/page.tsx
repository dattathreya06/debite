"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  MapPin,
  Building2,
  Briefcase,
  GraduationCap,
  Users,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { textReveal, fadeIn } from "@/app/anim/text-anim";
import CTA from "@/components/layout/cta";
import Eyebrow from "@/components/ui/eyebrow";
import { useGSAPAnimations } from "../hooks/use-gsap-animations";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Fix: Explicitly type the ref as HTMLDivElement
  const pageRef = useRef<HTMLDivElement>(null);

  // Sample data
  const benefits: Benefit[] = [
    {
      title: "Career Growth",
      description:
        "Continuous learning and development opportunities with clear career paths",
      icon: <GraduationCap className="w-14 h-14" strokeWidth={1} />,
    },
    {
      title: "Global Impact",
      description:
        "Work on transformative projects for leading organizations worldwide",
      icon: <Building2 className="w-14 h-14" strokeWidth={1} />,
    },
    {
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements and comprehensive wellness programs",
      icon: <Users className="w-14 h-14" strokeWidth={1} />,
    },
    {
      title: "Innovation Culture",
      description:
        "Access to cutting-edge technologies and innovative projects",
      icon: <Briefcase className="w-14 h-14" strokeWidth={1} />,
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Ramesh Yadav",
      role: "Senior Fullstack developer",
      quote:
        "At Debite, I get to work on projects that truly make a difference. The collaborative culture here is incredible.",
      image:
        "https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Vikram Kumar P",
      role: "Cloud Solutions Architect",
      quote:
        "The opportunities for growth and learning are endless. Every day brings new challenges and innovations.",
      image:
        "https://images.pexels.com/photos/30589229/pexels-photo-30589229/free-photo-of-portrait-in-nadukani-tea-plantation-kerala.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Priya Patel",
      role: "Digital Transformation Consultant",
      quote:
        "Working with global teams and diverse clients has expanded my perspective and accelerated my career growth.",
      image:
        "https://images.pexels.com/photos/7544770/pexels-photo-7544770.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const jobListings: JobListing[] = [
    {
      id: "1",
      title: "Senior Cloud Architect",
      location: "Hyderabad, IN",
      department: "Technology",
      type: "Full-time",
      level: "Senior",
      postedDate: "2025-02-01",
    },
    {
      id: "2",
      title: "Data Science Lead",
      location: "Hyderabad, IN",
      department: "Data & AI",
      type: "Full-time",
      level: "Lead",
      postedDate: "2025-02-03",
    },
    {
      id: "3",
      title: "UX Designer",
      location: "Hyderabad, IN",
      department: "Design",
      type: "Full-time",
      level: "Mid-level",
      postedDate: "2025-02-05",
    },
  ];

  // Fix: Use non-null assertion for trigger ref
  useGSAPAnimations({
    trigger: pageRef,
    selectors: [
      {
        target: ".hero h1",
        animation: {
          timeline: true,
          from: { opacity: 0, y: 100 },
          to: { opacity: 1, y: 0, duration: 1.5 },
        },
      },
      {
        target: ".hero p",
        animation: {
          timeline: true,
          from: { opacity: 0, y: 30 },
          to: { opacity: 1, y: 0, duration: 0.8, delay: 0.3 },
        },
      },
    ],
    scrollAnimations: [
      {
        selector: ".benefit-card",
        animation: {
          from: {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
      {
        selector: ".job-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
      {
        selector: ".team-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },
      },
    ],
  });

  return (
    <div
      ref={pageRef}
      className="flex flex-col min-h-screen bg-dark text-white"
    >
      {/* Hero Section */}
      <section className="hero relative h-screen max-h-[800px] w-full">
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Careers at Debite"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6">
                Build Your Future with Us
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Join a global team of innovators, creators, and problem-solvers
                shaping the future of technology and business.
              </p>
              <div className="flex gap-4">
                <a href="#job">
                  <Button size="lg">View Open Positions</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="WHY JOIN US" />
          <h2 className="text-4xl font-bold mb-12">Life at Debite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card p-8 bg-dark-dark border border-dark-light"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section id="job" className="py-20 bg-dark-dark">
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
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="job-card p-6 bg-dark border border-dark-light hover:border-grey-500 transition-colors"
              >
                <div
                  id="open-positions"
                  className="flex flex-col md:flex-row md:items-center justify-between"
                >
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
                  <a href="/contact">
                    <Button className="mt-4 md:mt-0">Apply Now</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Make an Impact?"
        buttonText="Contact us"
        buttonHref="/contact"
      />
    </div>
  );
};

export default CareersPage;
