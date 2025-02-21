"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Globe2,
  Users,
  Target,
  Lightbulb,
  Network,
  Building2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";
import { useGSAPAnimations } from "../hooks/use-gsap-animations";
import CTA from "@/components/layout/cta";
import Eyebrow from "@/components/ui/eyebrow";

gsap.registerPlugin(ScrollTrigger);

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatProps {
  value: string;
  label: string;
}

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
}

interface Timeline {
  year: string;
  title: string;
  description: string;
}

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAPAnimations({
    trigger: containerRef,
    selectors: [
      {
        target: ".hero-title",
        animation: {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          timeline: true,
        },
      },
      {
        target: ".hero-description",
        animation: {
          from: { opacity: 0, y: 30 },
          to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          timeline: true,
        },
      },
    ],
    scrollAnimations: [
      {
        selector: ".value-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".stat-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".timeline-item",
        animation: {
          from: {
            opacity: 0,
            x: -30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
      {
        selector: ".leadership-card",
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        },
      },
    ],
  });

  const values: ValueProps[] = [
    {
      icon: <Globe2 className="w-14 h-14" strokeWidth={1} />,
      title: "Global Perspective",
      description:
        "We bring worldwide expertise and diverse insights to deliver innovative solutions across borders.",
    },
    {
      icon: <Users className="w-14 h-14" strokeWidth={1} />,
      title: "Client First",
      description:
        "Our success is measured by our clients' success, building lasting partnerships through trust and collaboration.",
    },
    {
      icon: <Target className="w-14 h-14" strokeWidth={1} />,
      title: "Foresight",
      description:
        "We anticipate industry trends and prepare our clients for tomorrow's digital challenges.",
    },
    {
      icon: <Lightbulb className="w-14 h-14" strokeWidth={1} />,
      title: "Innovation",
      description:
        "We embrace emerging technologies and methodologies to drive meaningful digital transformation.",
    },
  ];

  const stats: StatProps[] = [
    { value: "20,000+", label: "Technology Professionals" },
    { value: "25+", label: "Countries & Regions" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "10+", label: "Years of Innovation" },
  ];

  const leadership: LeadershipMember[] = [
    {
      name: "Srikanth",
      role: "Director",
      image: "/team/srikanth.jpeg",
    },
    {
      name: "Vamsi Krishna",
      role: "Director",
      image: "/team/vamsi.jpeg",
    },
    {
      name: "K Sarala",
      role: "Director",
      image: "/team/ksarala.jpeg",
    },
    {
      name: "Vicky",
      role: "Senior Analyst",
      image: "/team/vicky.jpeg",
    },
  ];

  const timeline: Timeline[] = [
    {
      year: "2015",
      title: "Debite Founded",
      description:
        "Established to provide innovative technology solutions for enterprise digital transformation.",
    },
    {
      year: "2018",
      title: "Global Expansion",
      description:
        "Expanded operations to key markets in Europe and Asia, establishing our global presence.",
    },
    {
      year: "2020",
      title: "Cloud Practice Launch",
      description:
        "Launched comprehensive cloud services and solutions for enterprise modernization.",
    },
    {
      year: "2023",
      title: "AI & Data Practice",
      description:
        "Established dedicated AI and Data Analytics practice to drive intelligent transformation.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-dark text-white"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About Debite"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="hero-title text-6xl font-bold mb-6">
                Trusted Global Technology Partner
              </h1>
              <p className="hero-description text-xl text-gray-200">
                For over a decade, Debite has helped enterprises navigate their
                digital journeys. We combine deep industry expertise with
                applied innovation to create lasting value through digital
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR VALUES" />
          <h2 className="text-4xl font-bold mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card p-8 bg-dark-dark border border-dark-light hover:border-gold-500 transition-colors"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card p-8 bg-dark border border-dark-light text-center"
              >
                <p className="text-4xl font-bold text-gold-300 mb-4">
                  {stat.value}
                </p>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR JOURNEY" />
          <h2 className="text-4xl font-bold mb-12">Our Story</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/4">
                  <span className="text-3xl font-bold text-gold-300">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
          <Eyebrow text="OUR LEADERS" />
          <h2 className="text-4xl font-bold mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="leadership-card bg-dark overflow-hidden border border-dark-light group"
              >
                <div className="relative h-64">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold-300 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-gray-300">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Let's work together to drive innovation and create lasting value."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
};

export default AboutPage;
