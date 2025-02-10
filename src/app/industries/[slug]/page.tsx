// src/app/industries/[slug]/page.tsx
import { notFound } from 'next/navigation';
import AutomotivePage from '@/components/industries/automotive';
import BankingPage from '@/components/industries/banking';
import InsurancePage from '@/components/industries/insurance';
import ManufacturingPage from '@/components/industries/manufacturing';

const INDUSTRY_COMPONENTS = {
  automotive: AutomotivePage,
  banking: BankingPage,
  manufacturing: ManufacturingPage,
  insurance: InsurancePage,
} as const;

type IndustrySlug = keyof typeof INDUSTRY_COMPONENTS;

// Generate static params for all industries
export function generateStaticParams() {
  return Object.keys(INDUSTRY_COMPONENTS).map((slug) => ({
    slug,
  }));
}

// Page component
export default function IndustryPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  // ❌ Removed `await` since params is not async
  const { slug } = params;  

  // Type check the slug
  if (!isValidIndustry(slug)) {
    notFound();
  }
  
  // Get the component for this industry
  const IndustryComponent = INDUSTRY_COMPONENTS[slug];

  return <IndustryComponent />;
}

// Type guard for industry slugs
function isValidIndustry(slug: string): slug is IndustrySlug {
  return slug in INDUSTRY_COMPONENTS;
}
