import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blog-data';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="group">
          <Link href={`/insights/blog/${post.slug}`}>
            <div className="relative h-64 mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="bg-primary px-3 py-1 rounded-full text-white">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-400">{post.author.name}</span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}