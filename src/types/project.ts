export type ProjectStatus = "live" | "offline" | "preparing" | "maintenance";

export type DemoAccount = {
  role: string;
  email: string;
  password: string;
};

export type Project = {
  slug: string;
  title: string;
  titleTr?: string;
  category: string;
  categoryTr?: string;
  status: ProjectStatus;
  isDemoEnabled: boolean;

  shortDescription: string;
  shortDescriptionTr?: string;

  description: string;
  descriptionTr?: string;

  problem: string;
  problemTr?: string;

  solution: string;
  solutionTr?: string;

  techStack: string[];

  features: string[];
  featuresTr?: string[];

  originalScope?: string[];
  originalScopeTr?: string[];
  demoIncludes?: string[];
  demoIncludesTr?: string[];
  demoLimitations?: string[];
  demoLimitationsTr?: string[];
  screenshots?: {
    src: string;
    alt: string;
    altTr?: string;
  }[];

  demoUrl: string;
  githubUrl: string;
  demoAccounts: DemoAccount[];

  database?: string;
  deployment?: string;
  image: string;
  featured: boolean;
};
