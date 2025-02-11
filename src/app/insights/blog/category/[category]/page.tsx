// src/app/blog/category/[category]/page.tsx
'use client'

import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts, categories } from '@/data/blog-data';
import BlogGrid from '@/components/blog/blog-grid';
import Eyebrow from '@/components/ui/eyebrow';

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Convert URL-friendly format back to category name
  const categorySlug = params.category;
  
  // Find the category, accounting for both exact matches and URL-friendly versions
  const category = categories.find(
    (c) => c.name.toLowerCase() === categorySlug.replace(/-/g, ' ') ||
           c.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  
  if (!category) {
    notFound();
  }

  // Filter posts by the category
  const posts = blogPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <Eyebrow text={category.name.toUpperCase()} />
          <h1 className="text-4xl font-bold mb-4 text-white">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-xl text-gray-300">
              {category.description}
            </p>
          )}
          <p className="text-gray-400 mt-4">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}