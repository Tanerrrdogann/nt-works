export interface ServiceType {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  detail: string[];
  features: string[];
  examples: string[];
  infrastructure: string[];
  combinations: string[];
  suitableFor: string[];
  problemSolved: string;
  scopeLevels: Array<{
    name: string;
    description: string;
  }>;
  relatedProjects: string[];
  relatedBlogPosts: string[];
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
  clientDisplayName?: string;
  result?: string;
  testimonialSlug?: string;
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
