'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createSplitText } from '@/app/anim/text-anim';
import Button from '@/components/ui/button';
import BlogGrid from '@/components/blog/blog-grid';
import Eyebrow from '@/components/ui/eyebrow';
import type { BlogPost } from '@/data/blog-data';

gsap.registerPlugin(ScrollTrigger);

interface BlogPageProps {
  posts: BlogPost[];
  featuredPost: BlogPost;
}

export default function BlogPage({ posts, featuredPost }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  // Animations
  useEffect(() => {
    if (heroRef.current) {
      const title = heroRef.current.querySelector('h1');
      const desc = heroRef.current.querySelector('p');
      
      if (title && desc) {
        // Create split text instances
        const titleSplit = createSplitText(title);
        const descSplit = createSplitText(desc);
        
        // Split the text
        const titleElements = titleSplit.split({
          types: ['chars', 'words'],
          charClass: 'hero-char',
          wordClass: 'hero-word'
        });
        
        const descElements = descSplit.split({
          types: ['lines'],
          lineClass: 'hero-line'
        });

        // Create animation timeline
        const tl = gsap.timeline();
        
        tl.from(titleElements.chars, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out'
        })
        .from(descElements.lines, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        }, '-=0.4');

        return () => {
          titleSplit.revert();
          descSplit.revert();
        };
      }
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-dark" ref={heroRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Latest Insights & Perspectives
            </h1>
            <p className="text-xl text-gray-300">
              Explore our latest thinking on technology, innovation, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-dark border-y border-dark-light">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-dark border border-dark-light text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 bg-dark">
        {/* Featured Post */}
        {!searchTerm && featuredPost && (
          <section ref={featuredRef} className="mb-16">
            <Eyebrow text="FEATURED" />
            <Link href={`/insights/blog/${featuredPost.slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="bg-primary px-3 py-1 text-white">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-white">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-400">{featuredPost.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Blog Grid */}
        <section ref={gridRef}>
          {searchTerm && (
            <div className="mb-8">
              <p className="text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
                for "{searchTerm}"
              </p>
            </div>
          )}
          <BlogGrid 
            posts={searchTerm ? filteredPosts : posts.filter(post => post.id !== featuredPost?.id)} 
          />
        </section>
      </div>
    </div>
  );
}