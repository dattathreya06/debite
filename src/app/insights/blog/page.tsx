'use client'

import { blogPosts, getFeaturedPosts } from '@/data/blog-data';
import BlogPage from '@/components/pages/blog-page';

export default function Page() {
  const featuredPost = getFeaturedPosts()[0];
  
  return <BlogPage posts={blogPosts} featuredPost={featuredPost} />;
}