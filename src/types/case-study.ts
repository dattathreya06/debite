export interface CaseStudy {
    slug: string;
    client: string;
    industry: string;
    duration: string;
    teamSize: string;
    title: string;
    description: string;
    heroImage: string;
    challenge: string;
    approach: string;
    metrics: Array<{
      label: string;
      value: string;
      description?: string;
    }>;
    solutions: Array<{
      title: string;
      description: string;
      image?: string;
    }>;
    technologies: Array<{
      name: string;
      description: string;
      logo?: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      image?: string;
    };
  }