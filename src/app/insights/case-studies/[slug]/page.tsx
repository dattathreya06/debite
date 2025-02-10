import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import CaseStudyPage from '@/components/case-studies/page';

interface CaseStudyPageParams {
  params: {
    slug: string;
  };
}

// Generate static params for all case studies
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

// ✅ Make this function async
export default async function CaseStudyDetailPage({ params }: CaseStudyPageParams) {
  // ✅ Await params inside function argument
  const { slug } = await params; // Fix: Await params

  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage {...caseStudy} />;
}
