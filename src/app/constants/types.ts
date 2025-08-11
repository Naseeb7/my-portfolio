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
