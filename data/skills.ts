export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "cloud-cog" | "code" | "server" | "network" | "brain";
  technologies: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Security engineering, offensive security, infrastructure protection and enterprise defense technologies.",
    icon: "shield",
    technologies: [
      "Network Security",
      "Security Operations Center (SOC)",
      "Security Information and Event Management (SIEM)",
      "Vulnerability Assessment",
      "Threat Detection",
      "Security Hardening",
      "Penetration Testing",
      "Active Directory Security",
    ],
  },
  {
    id: "devsecops-cloud",
    title: "DevSecOps & Cloud",
    description: "Secure delivery pipelines, cloud-native infrastructure, automated validation and production monitoring.",
    icon: "cloud-cog",
    technologies: [
      "Secure CI/CD",
      "Infrastructure as Code",
      "Container Security",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Security Testing",
      "Cloud Observability",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Software development, security automation, scripting and data-driven application engineering.",
    icon: "code",
    technologies: ["Python", "Java", "TypeScript", "SQL", "PowerShell"],
  },
  {
    id: "infrastructure-virtualization",
    title: "Infrastructure & Virtualization",
    description: "Enterprise infrastructure administration, virtualization platforms and resilient systems engineering.",
    icon: "server",
    technologies: [
      "VMware vSphere",
      "Windows Server",
      "Linux",
      "Active Directory",
      "High Availability",
      "Virtualization",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Designing, configuring and troubleshooting enterprise network infrastructures using routing, switching, segmentation and core network services.",
    icon: "network",
    technologies: [
      "Enterprise Networking",
      "TCP/IP",
      "VLAN Segmentation",
      "Routing & Switching",
      "DNS & DHCP",
      "VPN",
      "Network Troubleshooting",
    ],
  },
  {
    id: "artificial-intelligence-data-engineering",
    title: "Artificial Intelligence & Data Engineering",
    description: "Applied language models, intelligent security analysis and scalable data-processing workflows.",
    icon: "brain",
    technologies: [
      "Large Language Models",
      "Hugging Face Transformers",
      "Apache Spark",
      "AI-Assisted Security Analysis",
      "Data Engineering",
      "Machine Learning",
    ],
  },
];
