"use client"

import React, { useEffect, useRef } from 'react';
import Card from '@/components/ui/card';
import { textReveal, fadeIn } from '@/app/anim/text-anim';
import { BLOG_POSTS } from './posts';

export default function BlogPage() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      textReveal(headerRef.current, {
        duration: 0.8,
        stagger: 0.03
      });
    }

    if (contentRef.current) {
      fadeIn(contentRef.current, {
        duration: 1,
        delay: 0.3
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal_blue_traditional-900 to-gray-900 opacity-50" />
      
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500"
            >
              NTT DATA Focus
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Insights and perspectives on digital transformation, innovation, and technology trends
            </p>
          </header>

          <div 
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BLOG_POSTS.map(post => (
              <div key={post.slug} className="transform hover:scale-105 transition-transform duration-300">
                <Card
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  imageUrl={`/images/blog/${post.slug}.jpg`}
                  href={`/insights/blog/${post.slug}`}
                  variant="default"
                  size="md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}