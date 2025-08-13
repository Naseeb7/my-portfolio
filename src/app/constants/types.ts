export interface IProject {
  id: string;
  name: string;
  overview: string;
  heroImage: string;
  challenge: string;
  projectDetails: string[];
  previewLink: string;
  credentials?: {
    email: string;
    password: string;
  };
  images: string[];
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
