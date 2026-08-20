import { Braces, Cloud, Code2, Database, Sparkles, TestTube2 } from "lucide-react";

export const portfolio = {
  name: "Surabhi Mendiratta",
  title: "Senior Full-Stack Software Engineer",
  bio: "I build products from the UI all the way down to the systems that keep them running—turning ambiguous problems into reliable, scalable, user-friendly software.",
  email: "surabhi.mendiratta@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/surabhi-m-38875539/",
    github: "https://github.com/SurabhiM87",
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
    { title: "Harmony Power", description: "I volunteer as Community Outreach Manager, supporting programs focused on empowering children and communities.", url: "https://harmonypowernow.org/", image: "/images/harmony-power.jpeg" },
    { title: "Cooking", description: "I love cooking, experimenting with new recipes, and bringing people together over good food.", url: "https://www.instagram.com/make_this_at_home/", image: "/images/cooking.png" },
    { title: "Building with AI", description: "I love experimenting with AI tools and finding new ways to turn ideas into working software faster.", url: null, image: null },
  ],
  experience: [
    { period: "2026 - Present", role: "Senior Software Engineer", company: "NYC Public Schools", description: "Own the Polaris OFNS integration end-to-end, translating complex business workflows into production solutions across Angular, C#/.NET, SQL Server, AWS, and REST APIs." },
    { period: "2017 - 2025", role: "Senior Software Engineer", company: "Kargo", description: "Architected resilient platforms and APIs, built full-stack advertising products, led technical design, and created AI-assisted developer tooling across Node.js, React, Next.js, AWS, and Kubernetes." },
    { period: "2012 - 2016", role: "Web Developer", company: "SportsYou", description: "Developed full-stack features for a social sports platform using Angular, C#, and REST APIs, while supporting CI/CD and production debugging." },
    { period: "2009 - 2012", role: "Software Developer", company: "Larsen & Toubro", description: "Developed Java-based engineering and reverse-engineering tools for automotive and off-highway projects, automating testing and setup workflows." },
  ],
} as const;
