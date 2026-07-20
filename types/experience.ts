export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
  logoAlt: string;
  type: "Internship" | "Education" | "Research";
}
