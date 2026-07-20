export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  status: string;
  year: string;
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
  repositoryUrl?: string;
  reportUrl?: string;
  paperUrl?: string;
  presentationUrl?: string;
  imageAlt: string;
  tags: string[];
  technologies: string[];
  highlights: string[];
}
