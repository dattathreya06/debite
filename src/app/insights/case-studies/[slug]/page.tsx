
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import CaseStudyPage from '@/components/case-studies/page';

interface CaseStudyPageParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export  default function CaseStudyDetailPage({ params }: CaseStudyPageParams) {
  const { slug } = params;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage {...caseStudy} />;
}