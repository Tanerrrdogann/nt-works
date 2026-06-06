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
}
