export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
