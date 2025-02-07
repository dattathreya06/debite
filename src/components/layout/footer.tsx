'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface LinkItem {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
  index: number;
}

interface Sections {
  [key: string]: LinkItem[];
}

import Image from 'next/image';
import logo from '/public/vercel.svg';

const ContactItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ 
  icon, 
  children 
}) => (
  <div className="flex items-center gap-2 text-gray-400">
    {icon}
    <span className="text-sm">{children}</span>
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-royal_blue_traditional-700 rounded-full"
  >
    {icon}
  </Link>
);

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={sectionRef} className="flex flex-col gap-4">
      <h6 className="font-semibold text-gray-100">{title}</h6>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const sections: Sections = {
    industries: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Public Sector', href: '/industries/public-sector' }
    ],
    services: [
      { label: 'Cloud', href: '/services/cloud' },
      { label: 'Consulting', href: '/services/consulting' },
      { label: 'Data & AI', href: '/services/data-ai' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Digital Workplace', href: '/services/digital-workplace' }
    ],
    company: [
      { label: 'About Us', href: '/about/corporate-profile' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investors', href: '/investors' },
      { label: 'News', href: '/news' },
      { label: 'Sustainability', href: '/about/sustainability' }
    ],
    legal: [
      { label: 'Terms of Use', href: '/information/terms' },
      { label: 'Privacy Statement', href: '/information/privacy' },
      { label: 'Cookie Policy', href: '/information/cookies' },
      { label: 'Social Media Policy', href: '/information/social-media-policy' },
      { label: 'GDPR', href: '/information/gdpr' }
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(bottomRef.current, {
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-royal_blue_traditional-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Image src={logo} alt="NTT DATA Logo" width={128} height={32} className="text-white" />
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={18} />}>
                123 Business Avenue, Tech District
                <br />
                Tokyo, Japan 100-0004
              </ContactItem>
              <ContactItem icon={<Phone size={18} />}>
                +81 3-1234-5678
              </ContactItem>
              <ContactItem icon={<Mail size={18} />}>
                contact@nttdata.com
              </ContactItem>
            </div>
            <div className="flex gap-4">
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin size={20} />} 
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<Twitter size={20} />} 
              />
              <SocialLink 
                href="https://facebook.com" 
                icon={<Facebook size={20} />} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sections).map(([key, links], index) => (
              <FooterSection 
                key={key} 
                title={key.charAt(0).toUpperCase() + key.slice(1)} 
                links={links}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div ref={bottomRef} className="border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} NTT DATA Corporation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;