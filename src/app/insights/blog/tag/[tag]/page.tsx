'use client'

import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts, popularTags } from '@/data/blog-data';
import BlogGrid from '@/components/blog/blog-grid';
import Eyebrow from '@/components/ui/eyebrow';

export async function generateStaticParams() {
  return popularTags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

interface TagPageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const tag = popularTags.find(
    (t) => t.toLowerCase() === params.tag
  );
  
  if (!tag) {
    notFound();
  }

  const posts = blogPosts.filter(
    (post) => post.tags.some((t) => t.toLowerCase() === params.tag)
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <Eyebrow text="TAGGED IN" />
          <h1 className="text-4xl font-bold mb-4 text-white">
            {tag}
          </h1>
          <p className="text-xl text-gray-300">
            Articles and insights related to {tag}
          </p>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}