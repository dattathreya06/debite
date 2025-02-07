'use client'

import Link from 'next/link';
import Image from 'next/image';

interface Industry {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    slug: 'automotive',
    title: 'Automotive',
    description: 'Accelerating a connected and data-driven digital future.',
    image: '/images/automotive-hero.jpg',
  },
  // Add other industries here
];

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Industries</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <Link 
            key={industry.slug}
            href={`/industries/${industry.slug}`} 
            className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-royal_blue_traditional">
                {industry.title}
              </h2>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}