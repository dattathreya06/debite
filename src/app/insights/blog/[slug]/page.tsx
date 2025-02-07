import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { BLOG_POSTS } from '../posts';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-royal_blue_traditional-900 to-gray-900 opacity-50" />
      
      <article className="relative pt-24 pb-16 text-gray-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/insights/blog">
            <Button
              variant="ghost"
              className="text-gold-300 hover:bg-gold-500/10 mb-8"
            >
              ← Back to Blog
            </Button>
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="text-gold-300">{post.category}</span>
              <span className="text-gray-400">•</span>
              <time className="text-gray-400">{post.date}</time>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{post.readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {post.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-700" />
              <div>
                <div className="text-white font-medium">{post.author}</div>
                <div className="text-gray-400 text-sm">Senior Technology Consultant</div>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* Content from MDX will be rendered here */}
            <p className="text-gray-300">
              This is where your blog post content will go. You can use markdown formatting
              for rich text content including:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Headers and subheaders</li>
              <li>Rich text formatting</li>
              <li>Code blocks with syntax highlighting</li>
              <li>Images and diagrams</li>
              <li>Links and references</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}