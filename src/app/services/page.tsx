'use client'

import Link from 'next/link';
import Image from 'next/image';

interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    slug: 'data-ai',
    title: 'Data & AI',
    description: 'Accelerating a connected and data-driven digital future.',
    image: '/images/automotive-hero.jpg',
  },
  // Add other industries here
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            key={service.slug}
            href={`/services/${service.slug}`} 
            className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-royal_blue_traditional">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}