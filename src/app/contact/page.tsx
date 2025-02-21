"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { createSplitText } from "@/app/anim/text-anim";
import ContactForm from "./contactform";
import CTA from "@/components/layout/cta";
import Eyebrow from "@/components/ui/eyebrow";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@debite.com"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9281144143", "+91 9166616143"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Office",
      details: [
        "RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM IST"],
    },
  ];

  useEffect(() => {
    // Hero text splitting and animation
    if (titleRef.current && descRef.current) {
      const titleSplit = createSplitText(titleRef.current);
      const descSplit = createSplitText(descRef.current);

      const { words: titleWords } = titleSplit.split({ types: ["words"] });
      const { words: descWords } = descSplit.split({ types: ["words"] });

      const tl = gsap.timeline();

      // Animate title words
      tl.from(titleWords, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out",
      });

      // Animate description words
      tl.from(
        descWords,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Cleanup function
      return () => {
        titleSplit.revert();
        descSplit.revert();
        tl.kill();
      };
    }

    // Scroll animations
    const sections = [
      { ref: formContainerRef, selector: ".form-field" },
      { ref: infoRef, selector: ".info-card" },
    ];

    const scrollTriggers: ScrollTrigger[] = [];

    sections.forEach(({ ref, selector }) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        if (elements.length) {
          const tl = gsap.from(elements, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });

          if (tl.scrollTrigger) {
            scrollTriggers.push(tl.scrollTrigger);
          }
        }
      }
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-royal_blue_traditional-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark" ref={heroRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 ref={titleRef} className="text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p ref={descRef} className="text-xl text-gray-300">
              Whether you have a question about our services, need a custom
              solution, or want to explore partnership opportunities, our team
              is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-dark-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div ref={formContainerRef}>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div ref={infoRef}>
              <Eyebrow text="CONTACT INFO" />
              <h2 className="text-3xl font-bold mb-8">How to Reach Us</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="info-card p-6 bg-dark border border-dark-light rounded-lg"
                  >
                    <div className="text-gold-300 mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Connect with our experts to discuss how NTT DATA can help accelerate your digital journey."
        buttonText="Schedule a Consultation"
        buttonHref="/schedule"
      />
    </div>
  );
}
