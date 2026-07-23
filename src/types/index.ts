export interface ServiceType {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  detail: string[];
  features: string[];
  examples: string[];
  infrastructure: string[];
  combinations: string[];
  modules: string[];
  priceFactors: string[];
  suitableFor: string[];
  problemSolved: string;
  scopeLevels: Array<{
    name: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedProjects: string[];
  relatedBlogPosts: string[];
  riskNote?: string;
  bionlukLinkKey?: string;
}

export interface ProjectType {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  database: string;
  deployment: string;
  deliveryScope: string[];
  projectKind?: "demo" | "client";
  status?: "client" | "live" | "maintenance" | "planned";
  isDemoEnabled?: boolean;
  demoUrl?: string;
  demoAccounts?: Array<{
    role: string;
    email: string;
    password: string;
  }>;
  clientDisplayName?: string;
  result?: string;
  testimonialSlug?: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  screenshots?: Array<{
    src: string;
    alt: string;
    altTr?: string;
    caption?: string;
  }>;
  caseStudies?: Array<{
    title: string;
    summary: string;
    sections: Array<{
      title: string;
      body: string[];
      bullets?: string[];
    }>;
    outcomes?: string[];
  }>;
}

export interface TestimonialType {
  slug: string;
  source: "Bionluk" | "Müşteri";
  author: string;
  displayName: string;
  rating: number;
  projectType: string;
  text: string;
  dateLabel: string;
  verified: boolean;
  relatedProject?: string;
}

export interface BlogPostType {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedServices: string[];
  relatedProjects: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
}
