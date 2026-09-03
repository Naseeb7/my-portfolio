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

export interface IExperience {
  role: string;
  company: string;
  startDate: string;
  endDate: string | "Present";
  experience: string[];
  keyAchievements: string[];
  awards?: string[];
  technologiesUsed: string[];
}
