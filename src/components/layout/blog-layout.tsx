'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Rss, Share2, Search } from 'lucide-react';
import Button from '@/components/ui/button';
import { categories, blogPosts, popularTags } from '@/data/blog-data';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const pathname = usePathname();
  
  // Get latest posts for footer
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  // Get popular categories
  const topCategories = categories
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Build breadcrumb items based on pathname
  const getBreadcrumbItems = () => {
    const items = [
      { name: 'Home', href: '/' },
      { name: 'Insights', href: '/insights' },
      { name: 'Blog', href: '/blog' }
    ];

    if (pathname !== '/blog') {
      const currentPage = blogPosts.find(post => 
        pathname === `/blog/${post.slug}`
      );
      if (currentPage) {
        items.push({ name: currentPage.title, href: pathname });
      }
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-dark-dark border-b border-dark-light">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Categories */}
            <div className="flex items-center space-x-8 overflow-x-auto">
              <Link
                href="/blog"
                className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
                  pathname === '/blog'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-300'
                }`}
              >
                All Posts
              </Link>
              {topCategories.map((category) => (
                <Link
                  key={category.name}
                  href={`/blog/category/${category.name.toLowerCase()}`}
                  className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
                    pathname === `/blog/category/${category.name.toLowerCase()}`
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-300'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300">
                <Rss className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-dark-dark border-b border-dark-light">
        <div className="container mx-auto px-6">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              {getBreadcrumbItems().map((item, index, array) => (
                <React.Fragment key={item.href}>
                  <li>
                    {index === array.length - 1 ? (
                      <span className="text-primary">{item.name}</span>
                    ) : (
                      <Link href={item.href} className="hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    )}
                  </li>
                  {index < array.length - 1 && (
                    <li>
                      <ChevronRight className="w-4 h-4" />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Search Bar - Mobile Only */}
      <div className="lg:hidden bg-dark-dark border-b border-dark-light">
        <div className="container mx-auto px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 bg-dark border border-dark-light rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Newsletter Section */}
      <section className="bg-dark-dark border-t border-dark-light py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Stay Ahead of the Curve
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on technology, 
              innovation, and digital transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-dark border border-dark-light rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-dark-light">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Latest Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Latest Posts</h3>
              <ul className="space-y-4">
                {latestPosts.map((post) => (
                  <li key={post.id}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Topics */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.slice(0, 8).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-dark-dark text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/resources/whitepapers"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources/case-studies"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources/reports"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Research Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;