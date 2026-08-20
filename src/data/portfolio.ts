import { Braces, Cloud, Code2, Database, Sparkles, TestTube2 } from "lucide-react";

export const portfolio = {
  name: "Surabhi Mendiratta",
  title: "Senior Full-Stack Software Engineer",
  bio: "I build products from the UI all the way down to the systems that keep them running—turning ambiguous problems into reliable, scalable, user-friendly software.",
  email: "surabhi@example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  resume: "/resume.pdf",
  technologyGroups: [
    { name: "Frontend", icon: Code2, color: "mint", items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "HTML", "CSS"] },
    { name: "Backend", icon: Braces, color: "peach", items: ["Java", "Spring Boot", "JPA / Hibernate", "Node.js", "Express", "C#", ".NET", "REST APIs"] },
    { name: "Cloud & Infrastructure", icon: Cloud, color: "lilac", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"] },
    { name: "Data & Systems", icon: Database, color: "lime", items: ["SQL Server", "Relational databases", "Caching", "Redis", "Distributed systems", "API architecture"] },
    { name: "Testing & Automation", icon: TestTube2, color: "blue", items: ["Playwright", "Jest", "Puppeteer", "Automated testing"] },
    { name: "AI & Developer Tools", icon: Sparkles, color: "yellow", items: ["OpenAI APIs", "Codex", "LLM-assisted development", "AI developer tooling", "AI-powered automation"] },
  ],
  projects: [
    { number: "01", title: "Showtimes Platform", label: "Distributed systems", summary: "Owned an international showtimes platform end-to-end, designing for freshness, speed, and graceful failure across upstream providers.", tech: ["Node.js", "Express", "Caching", "ETags", "Last-Modified", "AWS", "Kubernetes"], featured: true },
    { number: "02", title: "Retail API", label: "Backend architecture", summary: "Built product-feed ingestion and decisioning services used for advertising experiences, with scheduled ingestion, caching, and multi-instance cloud deployments.", tech: ["Node.js", "APIs", "Scheduled ingestion", "Caching", "Cloud"] },
    { number: "03", title: "demo.kargo.com", label: "Interactive product", summary: "Built and evolved a Next.js application that recreates publisher environments to preview advertising experiences across desktop, mobile, and connected TV.", tech: ["React", "Next.js", "TypeScript", "Puppeteer"] },
    { number: "04", title: "AI Page Rebuilder", label: "AI engineering", summary: "Built an AI-assisted system that analyzes webpages and reconstructs their structure as React implementations using browser automation and LLM-assisted code generation.", tech: ["React", "Puppeteer", "OpenAI", "Codex"] },
    { number: "05", title: "Enterprise Applications", label: "Public sector", summary: "Worked on enterprise applications for the New York City Department of Education, contributing to complex, high-impact workflows without exposing proprietary implementation details.", tech: ["Java", "Spring Boot", "JPA / Hibernate", "Angular", ".NET APIs", "SQL Server", "REST APIs", "JWT"] },
  ],
  principles: ["Own the problem, not just the ticket.", "Simple systems beat clever systems.", "Design for failure.", "Understand the user before designing the architecture.", "Automate repetitive work.", "Keep learning."],
  beyondCode: [
    { title: "Harmony Power", description: "I volunteer with Harmony Power, supporting programs focused on empowering children and communities.", icon: "heart" },
    { title: "Cooking", description: "I love cooking and experimenting with recipes—ingredients, iteration, and eventually something people enjoy.", icon: "cooking" },
    { title: "Learning", description: "I genuinely enjoy learning new technologies and understanding how systems work.", icon: "learning" },
  ],
  experience: [
    { period: "Add dates", role: "Add role", company: "Add company", description: "Add a short description of your impact and responsibilities." },
    { period: "Add dates", role: "Add role", company: "Add company", description: "Add a short description of your impact and responsibilities." },
    { period: "Add dates", role: "Add role", company: "Add company", description: "Add a short description of your impact and responsibilities." },
  ],
} as const;
