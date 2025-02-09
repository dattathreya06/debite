import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-6 py-12 bg-dark">
      <h1 className="text-4xl font-bold mb-12">Case Studies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(caseStudies).map((study) => (
          <Link
            key={study.slug}
            href={`/insights/case-studies/${study.slug}`}
            className="group"
          >
            <div className="bg-dark-dark border border-dark-light overflow-hidden transition-all duration-300 hover:border-gold-500">
              <div className="relative h-48">
                <Image
                  src={study.heroImage}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{study.industry}</p>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {study.title}
                </h2>
                <p className="text-gray-300 line-clamp-2">{study.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}