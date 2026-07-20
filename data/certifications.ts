export type CertificationCategory = "Core Cybersecurity" | "AI & Software Engineering" | "Additional Foundations";

export interface Certification {
  id: string;
  title: string;
  provider: "TryHackMe" | "Cisco" | "ISC²" | "MLIA Edu" | "Anthropic";
  issued?: string;
  credentialUrl?: string;
  description: string;
  category: CertificationCategory;
  featured: boolean;
  logo: string;
  skills: string[];
  order: number;
}

export const certifications: Certification[] = [
  {
    id: "security-engineer-certificate",
    title: "Security Engineer",
    provider: "TryHackMe",
    issued: "April 2026",
    credentialUrl: "https://tryhackme.com/certificate/THM-MIDKEX8P1B",
    description:
      "Completed advanced hands-on training covering offensive security, penetration testing, privilege escalation, Active Directory, web exploitation and practical attack simulations.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "tryhackme.com",
    skills: ["Offensive Security", "Penetration Testing", "Active Directory", "Web Exploitation"],
    order: 1,
  },
  {
    id: "cyber-security-101",
    title: "Cyber Security 101",
    provider: "TryHackMe",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-WTZZOWGHKG.pdf",
    description:
      "Developed practical cybersecurity fundamentals through hands-on labs covering Linux, Windows, networking, web security and common attack techniques.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "tryhackme.com",
    skills: ["Linux", "Windows", "Networking", "Web Security"],
    order: 2,
  },
  {
    id: "mobile-application-security",
    title: "Mobile Application Security",
    provider: "MLIA Edu",
    issued: "June 2026",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/35-bd6da245-c459-44f3-a838-22b903376ebf-177808",
    description:
      "Explored Android application security, vulnerability assessment, secure mobile development and protection against common mobile threats.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "mliaedu.toubkalit.com",
    skills: ["Android Security", "Vulnerability Assessment", "Secure Mobile Development"],
    order: 4,
  },
  {
    id: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    issued: "January 2025",
    credentialUrl: "https://www.credly.com/badges/e45f873c-0c8f-4660-bc0a-1ad466072ab7/linked_in_profile",
    description:
      "Built a strong foundation in cybersecurity principles, digital threats, network defense and secure online practices.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "cisco.com",
    skills: ["Cybersecurity Principles", "Digital Threats", "Network Defense"],
    order: 3,
  },
  {
    id: "network-security",
    title: "Network Security Fundamentals",
    provider: "ISC²",
    credentialUrl: "https://www.credly.com/badges/e45f873c-0c8f-4660-bc0a-1ad466072ab7/linked_in_profile",
    description:
      "Developed foundational knowledge of secure network architecture, segmentation, communication protocols, access control and enterprise defense strategies.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "isc2.org",
    skills: ["Network Architecture", "Segmentation", "Access Control", "Enterprise Defense"],
    order: 5,
  },
  {
    id: "security-principles",
    title: "Information Security Principles",
    provider: "ISC²",
    credentialUrl: "https://drive.google.com/file/d/1uIPIcceiAlGOCc8R1eU2aL3daIt55JKt/view",
    description:
      "Studied confidentiality, integrity, availability, risk management and core information-security governance principles.",
    category: "Core Cybersecurity",
    featured: false,
    logo: "isc2.org",
    skills: ["CIA Triad", "Risk Management", "Security Governance"],
    order: 6,
  },
  {
    id: "access-control-concepts",
    title: "Identity & Access Management Fundamentals",
    provider: "ISC²",
    credentialUrl: "https://drive.google.com/file/d/1uOH0ZAqZbIn4v3nsSUOp0qypPUgRRMLw/view",
    description:
      "Covered authentication, authorization, least privilege, identity management and secure access-control models.",
    category: "Core Cybersecurity",
    featured: false,
    logo: "isc2.org",
    skills: ["Authentication", "Authorization", "Least Privilege", "Identity Management"],
    order: 7,
  },
  {
    id: "incident-response-business-continuity-disaster-recovery",
    title: "Incident Response & Disaster Recovery",
    provider: "ISC²",
    credentialUrl: "https://drive.google.com/file/d/1uKdmLbkS7ZDKdDvuHccJwUwL9NHxxAWB/view",
    description:
      "Studied incident handling, business continuity and disaster-recovery strategies for improving organizational cyber resilience.",
    category: "Core Cybersecurity",
    featured: true,
    logo: "isc2.org",
    skills: ["Incident Response", "Business Continuity", "Disaster Recovery"],
    order: 8,
  },
  {
    id: "claude-101",
    title: "Certificate of Completion: Claude 101",
    provider: "Anthropic",
    credentialUrl: "https://verify.skilljar.com/c/kh7y4gky9ou5",
    description:
      "Completed introductory training on responsible AI usage, prompt design and effective interaction with large language models.",
    category: "AI & Software Engineering",
    featured: false,
    logo: "anthropic.com",
    skills: ["Responsible AI", "Prompt Design", "Large Language Models"],
    order: 9,
  },
  {
    id: "android-programming-with-java",
    title: "Android Programming with Java",
    provider: "MLIA Edu",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/13-bd6da245-c459-44f3-a838-22b903376ebf-724750",
    description:
      "Developed Android applications using Java while studying object-oriented programming, application components, interfaces and deployment fundamentals.",
    category: "AI & Software Engineering",
    featured: false,
    logo: "mliaedu.toubkalit.com",
    skills: ["Java", "Android", "Object-Oriented Programming", "Application Deployment"],
    order: 10,
  },
  {
    id: "pre-security-legacy",
    title: "Pre Security (Legacy)",
    provider: "TryHackMe",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-J6B0MUOYGT.pdf",
    description:
      "Completed introductory hands-on training in networking, operating systems, web technologies and cybersecurity fundamentals.",
    category: "Additional Foundations",
    featured: false,
    logo: "tryhackme.com",
    skills: ["Networking", "Operating Systems", "Web Technologies", "Cybersecurity Fundamentals"],
    order: 11,
  },
];
