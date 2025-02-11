'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useGSAPAnimations } from '@/app/hooks/use-gsap-animations';

interface LinkItem {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
  sectionRef: React.RefObject<HTMLDivElement>;
}

interface Sections {
  [key: string]: LinkItem[];
}

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

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, sectionRef }) => (
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

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null!);
  const section1Ref = useRef<HTMLDivElement>(null!);
  const section2Ref = useRef<HTMLDivElement>(null!);
  const section3Ref = useRef<HTMLDivElement>(null!);
  const section4Ref = useRef<HTMLDivElement>(null!);
  const bottomRef = useRef<HTMLDivElement>(null!);
  
  const sections: Sections = {
    industries: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'banking', href: '/industries/banking' },
      { label: 'Insurance', href: '/industries/insurance' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Public Sector', href: '/industries/government' }
    ],
    services: [
      { label: 'Cloud', href: '/services/cloud' },
      { label: 'Consulting', href: '/services/consulting' },
      { label: 'Data & AI', href: '/services/data-ai' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'UPI Payment', href: '/services/upi-solutions' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blogs', href: '/insights/blog' },
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'Sustainability', href: '/about/sustainability' }
    ]
  };

  useGSAPAnimations({
    trigger: footerRef,
    scrollAnimations: [
      {
        selector: '.footer-logo',
        animation: {
          from: {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out'
          }
        }
      },
      {
        selector: '.contact-info',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
          }
        }
      },
      {
        selector: '.social-links',
        animation: {
          from: {
            opacity: 0,
            y: 20,
            duration: 0.6,
            delay: 0.4,
            ease: 'power3.out'
          }
        }
      }
    ]
  });

  // Separate animation config for sections
  useGSAPAnimations({
    trigger: footerRef,
    scrollAnimations: [
      {
        selector: '.footer-section',
        animation: {
          from: {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          }
        }
      },
      {
        selector: '.footer-bottom',
        animation: {
          from: {
            opacity: 0,
             y: 20,
            duration: 0.6,
            delay: 0.8,
            ease: 'power2.out'
          }
        }
      }
    ]
  });

  return (
    <footer ref={footerRef} className="bg-dark-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="footer-logo">
              <Image src="/debite_logo.svg" alt="Debite Logo" width={128} height={32} className="text-white" />
            </div>
            
            <div className="contact-info space-y-4">
              <ContactItem icon={<MapPin size={18} />}>
                RAM SVR, Plot No 4/2, Sector 1
                <br />
                Madhapur, HUDA Techno Enclave
                <br />
                HITEC City, Hyderabad, Telangana 500081
              </ContactItem>
              <ContactItem icon={<Phone size={18} />}>
                +91 9281144143 | +91 9166616143
              </ContactItem>
              <ContactItem icon={<Mail size={18} />}>
                Info@debite.in 
              </ContactItem>
            </div>
            
            <div className="social-links flex gap-4">
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sections).map(([key, links], index) => (
              <div key={key} className="footer-section">
                <FooterSection 
                  title={key.charAt(0).toUpperCase() + key.slice(1)} 
                  links={links}
                  sectionRef={[section1Ref, section2Ref, section3Ref, section4Ref][index]}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Debite Solutions Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;