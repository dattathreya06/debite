// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
//import CloudServicePage from '@/components/services/cloud';
import DataAIServicePage from '@/components/services/data-ai';
//import CybersecurityPage from '@/components/services/cybersecurity';
import ConsultingPage from '@/components/services/consulting';

const SERVICE_COMPONENTS = {
  'data-ai': DataAIServicePage,
  'consulting': ConsultingPage,

  // Add other services here as you create them
  // 'digital-workplace': DigitalWorkplacePage,
  // 'application-services': ApplicationServicesPage,
  // 'network-services': NetworkServicesPage,
} as const;

type ServiceSlug = keyof typeof SERVICE_COMPONENTS;

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(SERVICE_COMPONENTS).map((slug) => ({
    slug,
  }));
}

// Page component
export default function ServicePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  
  // Type check the slug
  if (!isValidService(slug)) {
    notFound();
  }
  
  // Get the component for this service
  const ServiceComponent = SERVICE_COMPONENTS[slug];
  
  return <ServiceComponent />;
}

// Type guard for service slugs
function isValidService(slug: string): slug is ServiceSlug {
  return slug in SERVICE_COMPONENTS;
}