
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Tag } from 'lucide-react';
import { blogPosts, getPostBySlug } from '@/data/blog-data';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug.toLowerCase().replace(/\s+/g, '-'),
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert the markdown content to HTML if needed
  const content = post.content.replace(/\n/g, '<br />');

  return (
    <article className="py-12 bg-dark">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-primary px-3 py-1 rounded-full text-white">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {post.title}
          </h1>
          
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-400">{post.author.role}</p>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative aspect-video mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-lg max-w-none text-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-dark-light">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-dark-dark text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}