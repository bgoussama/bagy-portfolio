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
      "Active Directory",
      "Vulnerability Assessment",
      "Threat Detection",
      "Security Hardening",
      "Penetration Testing",
      "Nmap",
      "Wireshark",
    ],
  },
  {
    id: "devsecops-cloud",
    title: "DevSecOps & Cloud",
    description: "Secure delivery pipelines, cloud-native infrastructure, automated validation and production monitoring.",
    icon: "cloud-cog",
    technologies: [
      "GitLab CI/CD",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "SonarQube",
      "Trivy",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Software development, security automation, scripting and data-driven application engineering.",
    icon: "code",
    technologies: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "PowerShell"],
  },
  {
    id: "infrastructure-virtualization",
    title: "Infrastructure & Virtualization",
    description: "Enterprise infrastructure administration, virtualization platforms and resilient systems engineering.",
    icon: "server",
    technologies: [
      "VMware vSphere",
      "VMware ESXi",
      "Windows Server",
      "Linux",
      "Active Directory",
      "VMware Workstation",
      "VirtualBox",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Designing, configuring and troubleshooting enterprise network infrastructures using routing, switching, segmentation and core network services.",
    icon: "network",
    technologies: [
      "TCP/IP",
      "OSI Model",
      "Subnetting",
      "VLAN",
      "Routing",
      "Switching",
      "DNS",
      "DHCP",
      "NAT",
      "VPN",
      "Cisco Networking",
      "Network Troubleshooting",
      "Wireshark",
      "Nmap",
    ],
  },
  {
    id: "artificial-intelligence-data-engineering",
    title: "Artificial Intelligence & Data Engineering",
    description: "Applied language models, intelligent security analysis and scalable data-processing workflows.",
    icon: "brain",
    technologies: [
      "Groq LLM",
      "CodeBERT",
      "CodeT5",
      "Hugging Face Transformers",
      "Apache Spark",
      "Pandas",
      "Scikit-learn",
    ],
  },
];
