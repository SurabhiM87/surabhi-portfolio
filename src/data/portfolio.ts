import { Braces, Cloud, Code2, Database, Sparkles, TestTube2 } from "lucide-react";

export const portfolio = {
  name: "Surabhi Mendiratta",
  title: "Senior Full-Stack Software Engineer",
  bio: "I build products from the UI all the way down to the systems that keep them running. I enjoy turning ambiguous problems into reliable, scalable, user-friendly software.",
  email: "surabhi.mendiratta@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/surabhi-m-38875539/",
    github: "https://github.com/SurabhiM87",
  },
  resume: "/resume.pdf",
  technologyGroups: [
    { name: "Frontend", icon: Code2, color: "mint", items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "HTML", "CSS"] },
    { name: "Backend", icon: Braces, color: "peach", items: ["Generative AI", "Node.js", "Express", "C#", ".NET", "REST APIs"] },
    { name: "Cloud & Infrastructure", icon: Cloud, color: "lilac", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"] },
    { name: "Data & Systems", icon: Database, color: "lime", items: ["SQL Server", "Relational databases", "Caching", "Redis", "Distributed systems", "API architecture"] },
    { name: "Testing & Automation", icon: TestTube2, color: "blue", items: ["Playwright", "Jest", "Puppeteer", "Automated testing"] },
    { name: "AI & Developer Tools", icon: Sparkles, color: "yellow", items: ["Generative AI", "OpenAI APIs", "Codex", "LLM-assisted development", "AI developer tooling", "AI-powered automation"] },
  ],
  projects: [
    { number: "01", title: "Showtimes Platform", label: "Distributed systems", summary: "Owned an international showtimes platform end-to-end, designing for freshness, speed, and graceful failure across upstream providers.", tech: ["Node.js", "Express", "Caching", "ETags", "Last-Modified", "AWS", "Kubernetes"], featured: true, url: null },
    { number: "02", title: "Retail API", label: "Backend architecture", summary: "Built product-feed ingestion and decisioning services used for advertising experiences, with scheduled ingestion, caching, and multi-instance cloud deployments.", tech: ["Node.js", "APIs", "Scheduled ingestion", "Caching", "Cloud"], url: null },
    { number: "03", title: "demo.kargo.com", label: "Interactive product", summary: "Built and evolved a Next.js application that recreates publisher environments to preview advertising experiences across desktop, mobile, and connected TV.", tech: ["React", "Next.js", "TypeScript", "Puppeteer"], url: "https://demo.kargo.com/" },
    { number: "04", title: "AI Page Rebuilder", label: "AI engineering", summary: "Built an AI-assisted system that analyzes webpages and reconstructs their structure as React implementations using browser automation and LLM-assisted code generation.", tech: ["Generative AI", "React", "Puppeteer", "OpenAI", "Codex"], url: "https://github.com/SurabhiM87/ai-page-rebuilder" },
    { number: "05", title: "Enterprise Applications", label: "Public sector", summary: "Worked on enterprise applications for the New York City Department of Education, contributing to complex, high-impact workflows without exposing proprietary implementation details.", tech: ["Angular", "C#", ".NET", ".NET APIs", "SQL Server", "REST APIs", "JWT"], url: null },
  ],
  principles: ["Own the problem, not just the ticket.", "Simple systems beat clever systems.", "Design for failure.", "Understand the user before designing the architecture.", "Automate repetitive work.", "Keep learning."],
  beyondCode: [
    { title: "Proud to contribute to Harmony Power", description: "I serve as Community Outreach Manager for Harmony Power, a nationally and internationally recognized anti-bullying leadership organization focused on empowering children, schools, and communities.", url: "https://www.instagram.com/harmonypowernow/", image: "/images/harmony-power.jpeg" },
    { title: "Cooking", description: "I love cooking, experimenting with new recipes, and bringing people together over good food. I rarely follow a recipe exactly. I like understanding how ingredients work together, improvising along the way, and making something a little different each time.", url: "https://www.instagram.com/make_this_at_home/", image: "/images/cooking.png" },
    { title: "Building with AI", description: "I love experimenting with AI tools and exploring new ways to turn ideas into working software faster. From prototyping interfaces to debugging, research, and code generation, I use AI as a creative engineering partner while staying thoughtful about the architecture and decisions behind what I build.", url: null, image: null },
    { title: "I build things at home, too.", description: "From replacing a dishwasher to configuring a Raspberry Pi, I enjoy figuring out how things work, solving practical problems, and learning by doing.", tags: ["DIY", "Raspberry Pi", "Smart Home", "Always Learning"], url: null, image: null },
    { title: "John J. Theobald Award", description: "Recipient of the John J. Theobald Award for Academic Excellence during my Master's in Computer Science at NYIT.", tags: ["Academic Excellence", "M.S. Computer Science", "NYIT"], url: null, image: null },
    { title: "Sketching", description: "I’ve always enjoyed sketching and drawing as a way to slow down, observe the little details, and create something by hand. I love seeing an idea gradually take shape on paper, one line at a time. It gives me a completely different kind of creative space away from a screen.", url: null, image: "/images/goose-sketch.jpeg" },
  ],
  experience: [
    { period: "2026", role: "Full-Stack Software Engineer", company: "NYC Public Schools", description: "Built enterprise workflows for NYC Public Schools using Angular, C#/.NET APIs, SQL Server, JWT authentication, and REST integrations." },
    { period: "2016 – 2025", role: "Senior Software Engineer", company: "Kargo", description: "Architected resilient platforms and APIs, built full-stack advertising products, led technical design, and created AI-assisted developer tooling across Node.js, React, Next.js, AWS, and Kubernetes." },
    { period: "JAN – APR 2016", role: "Web Developer", company: "SportsYou", description: "Developed full-stack features for a sports media startup using JavaScript, jQuery, Node.js, HTML5/CSS, and SQL, building responsive experiences and supporting media workflows with AWS S3." },
    { period: "2009 – 2012", role: "Software Developer", company: "Larsen & Toubro", description: "Developed Java-based engineering and reverse-engineering tools for automotive and off-highway projects, automating testing and setup workflows." },
  ],
} as const;
