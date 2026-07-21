import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    id: "optipark-internship",
    company: "Optipark",
    role: "Cybersecurity Intern (PFA)",
    location: "Marrakech, Morocco",
    startDate: "2026-07",
    endDate: "",
    current: true,
    description:
      "Supporting the preparation of an internal Security Operations Center through authorized network discovery, asset mapping and vulnerability assessment across Windows, Active Directory, VMware ESXi and Linux environments.",
    technologies: [
      "Nmap",
      "Vulnerability Assessment",
      "SOC",
      "Active Directory",
      "VMware ESXi",
      "Linux",
    ],
    achievements: [
      "Mapped active hosts, ports, protocols and exposed services across the authorized internal network.",
      "Assessed Windows Server, Active Directory, VMware ESXi and Linux assets for vulnerabilities and relevant CVEs.",
      "Prepared technical findings for centralized SOC monitoring, incident detection and reporting.",
    ],
    logoAlt: "Logo Optipark",
    type: "Internship",
  },
  {
    id: "absec-cybersecurity",
    company: "ABSEC Cybersecurity",
    role: "DevSecOps Intern",
    location: "Marrakech, Morocco",
    startDate: "2025-07",
    endDate: "2025-07",
    current: false,
    description:
      "Designed and deployed an AI-powered GitLab CI/CD security pipeline combining intelligent commit analysis, automated code inspection, SAST, vulnerability scanning and consolidated reporting to detect risky changes early and reduce security regressions.",
    technologies: [
      "GitLab CI/CD",
      "CodeBERT",
      "CodeT5",
      "SonarQube",
      "Trivy",
      "SAST",
    ],
    achievements: [
      "Integrated CodeBERT and CodeT5 to classify risky commits and detect secrets, injection patterns, weak hashes and XSS indicators.",
      "Combined SonarQube and Trivy findings into an automated security workflow prioritizing CRITICAL and HIGH vulnerabilities.",
      "Generated consolidated reports to accelerate developer remediation and reduce security regressions.",
    ],
    logoAlt: "Logo ABSEC Cybersecurity",
    type: "Internship",
  },
  {
    id: "hack-secure-red-team-internship",
    company: "Hack Secure",
    role: "Red Team Intern",
    location: "",
    startDate: "2025-04",
    endDate: "2025-05",
    current: false,
    description:
      "Performed hands-on Red Team assessments across web applications and Linux environments, covering vulnerability discovery, exploitation, traffic analysis, privilege escalation, persistence and post-exploitation in controlled laboratories.",
    technologies: [
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "SQLMap",
      "Gobuster",
    ],
    achievements: [
      "Identified and exploited SQL injection, XSS and exposed HTTP credentials in vulnerable web applications.",
      "Compromised Metasploitable 2, established persistence and performed Meterpreter post-exploitation.",
      "Built a Python file encryption and decryption utility using Fernet cryptography.",
    ],
    logoAlt: "Logo Hack Secure",
    type: "Internship",
  },
  {
    id: "ensa-marrakech-education",
    company: "ENSA Marrakech – Cadi Ayyad University",
    role: "Cybersecurity & Telecommunication Systems Engineering Student",
    location: "Marrakech, Morocco",
    startDate: "2022",
    endDate: "2027",
    current: false,
    description:
      "Pursuing a five-year engineering degree combining cybersecurity, telecommunications, cloud infrastructure, virtualization, cryptography and secure software engineering through intensive laboratories, technical projects and professional internships.",
    technologies: [
      "Cybersecurity",
      "Telecommunications",
      "Network Security",
      "Cloud Computing",
      "Virtualization",
    ],
    achievements: [
      "Completed multidisciplinary projects in cybersecurity, cloud infrastructure and secure software engineering.",
      "Participated in CTFs, penetration-testing laboratories and security-focused research activities.",
      "Completed internships in Offensive Security, DevSecOps and Cybersecurity Engineering.",
    ],
    logoAlt: "Logo ENSA Marrakech – Cadi Ayyad University",
    type: "Education",
  },
];

