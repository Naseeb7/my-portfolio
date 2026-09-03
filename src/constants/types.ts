export interface IProject {
  id: string;
  name: string;
  featured: boolean;
  category: string;
  type: string;
  role: string;
  overview: string;
  heroImage: string;
  challenge: string;
  projectDetails: string[];
  highlights: string[];
  stack: string[];
  outcome?: string;
  previewLink?: string;
  githubLinks?: string[];
  credentials?: {
    email: string;
    password: string;
  };
  images?: string[];
}

export interface IExperienceProject {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface IExperience {
  type: "employment" | "independent";
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  projects?: IExperienceProject[];
  leadership?: string[];
  achievements?: string[];
}
