'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Clock, AlertCircle, Check } from 'lucide-react';
import Button from '@/components/ui/button';
import Eyebrow from '@/components/ui/eyebrow';
import { createSplitText } from '@/app/anim/text-anim';

gsap.registerPlugin(ScrollTrigger);

interface FormField {
  name: string;
  value: string;
  error: string;
}

// Static form for Netlify to detect
export function StaticForm() {
  return (
    <form
      name="contact"
      netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="company" />
      <textarea name="message"></textarea>
    </form>
  );
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: 'name', value: '', error: '' },
    { name: 'email', value: '', error: '' },
    { name: 'company', value: '', error: '' },
    { name: 'message', value: '', error: '' }
  ]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@debite.com']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9281144143', '+91 9166616143']
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['RAM SVR, Plot No 4/2, Sector 1 Madhapur, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Monday - Friday', '9:00 AM - 6:00 PM IST']
    }
  ];

  useEffect(() => {
    // Hero text splitting and animation
    if (titleRef.current && descRef.current) {
      const titleSplit = createSplitText(titleRef.current);
      const descSplit = createSplitText(descRef.current);

      const { words: titlewords } = titleSplit.split({ types: ['words'] });
      const { words: descWords } = descSplit.split({ types: ['words'] });

      const tl = gsap.timeline();

      // Animate title characters
      tl.from(titlewords, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out'
      });

      // Animate description words
      tl.from(descWords, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out'
      }, '-=0.4');

      // Cleanup function
      return () => {
        titleSplit.revert();
        descSplit.revert();
        tl.kill();
      };
    }

    // Scroll animations
    const sections = [
      { ref: formRef, selector: '.form-field' },
      { ref: infoRef, selector: '.info-card' }
    ];

    const scrollTriggers: ScrollTrigger[] = [];

    sections.forEach(({ ref, selector }) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        if (elements.length) {
          const tl = gsap.from(elements, {
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

          if (tl.scrollTrigger) {
            scrollTriggers.push(tl.scrollTrigger);
          }
        }
      }
    });

    // Cleanup scroll triggers
    return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  }, []);

  // ... Rest of the component code remains the same ...
  const validateForm = () => {
    let isValid = true;
    const updatedFields = formFields.map(field => {
      let error = '';
      
      if (!field.value.trim()) {
        error = `${field.name.charAt(0).toUpperCase() + field.name.slice(1)} is required`;
        isValid = false;
      } else if (field.name === 'email' && !/\S+@\S+\.\S+/.test(field.value)) {
        error = 'Please enter a valid email address';
        isValid = false;
      }
      
      return { ...field, error };
    });
    
    setFormFields(updatedFields);
    return isValid;
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');

    const formData = {
      'form-name': 'contact',
      ...formFields.reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {})
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      });

      if (!response.ok) throw new Error('Form submission failed');

      setFormStatus('success');
      setFormFields(formFields.map(field => ({ ...field, value: '', error: '' })));
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormFields(fields =>
      fields.map(field =>
        field.name === name ? { ...field, value, error: '' } : field
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      {/* Include the static form */}
      <StaticForm />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-dark" ref={heroRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 ref={titleRef} className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p ref={descRef} className="text-xl text-gray-300">
              Have a question or want to learn more? We're here to help. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                name="contact"
              >
                {/* Required Netlify form fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                
                {formFields.map(field => (
                  <div key={field.name} className="form-field">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </label>
                    {field.name === 'message' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className={`w-full p-3 bg-dark-dark border ${
                          field.error ? 'border-red-500' : 'border-dark-light'
                        } rounded-md text-white focus:outline-none focus:border-accent`}
                        rows={5}
                      />
                    ) : (
                      <input
                        type={field.name === 'email' ? 'email' : 'text'}
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className={`w-full p-3 bg-dark-dark border ${
                          field.error ? 'border-red-500' : 'border-dark-light'
                        } rounded-md text-white focus:outline-none focus:border-accent`}
                      />
                    )}
                    {field.error && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {field.error}
                      </p>
                    )}
                  </div>
                ))}

                {/* Status messages */}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-900/50 border border-red-500 rounded-md">
                    <p className="text-red-500 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      There was an error submitting your form. Please try again.
                    </p>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-900/50 border border-green-500 rounded-md">
                    <p className="text-green-500 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Your message has been sent successfully!
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef}>
              <Eyebrow text="CONTACT INFO" />
              <h2 className="text-3xl font-bold mb-8">How to Reach Us</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="info-card p-6 bg-dark-dark border border-dark-light rounded-lg"
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
    </div>
  );
}