"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Boxes, Braces, Cloud, Code2, Database, Layers3, Mail, Menu, Network, Sparkles, TestTube2, Users, X, Zap } from "lucide-react";
import { useState } from "react";

const techGroups = [
  { name: "Frontend", icon: Code2, color: "mint", items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "HTML", "CSS"] },
  { name: "Backend", icon: Braces, color: "peach", items: ["Java", "Spring Boot", "JPA / Hibernate", "Node.js", "Express", "C#", ".NET", "REST APIs"] },
  { name: "Cloud & Infrastructure", icon: Cloud, color: "lilac", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"] },
  { name: "Data & Systems", icon: Database, color: "lime", items: ["SQL Server", "Relational databases", "Caching", "Redis", "Distributed systems", "API architecture"] },
  { name: "Testing & Automation", icon: TestTube2, color: "blue", items: ["Playwright", "Jest", "Puppeteer", "Automated testing"] },
  { name: "AI & Developer Tools", icon: Sparkles, color: "yellow", items: ["OpenAI APIs", "Codex", "LLM-assisted development", "AI-powered automation"] },
];

const projects = [
  { number: "01", title: "Showtimes Platform", label: "Distributed systems", summary: "Owned an international showtimes platform end-to-end, designing for freshness, speed, and graceful failure across upstream providers.", tech: ["Node.js", "Express", "AWS", "Kubernetes"], featured: true },
  { number: "02", title: "Retail API", label: "Backend architecture", summary: "Built product-feed ingestion and decisioning services powering dynamic advertising experiences across multi-instance cloud deployments.", tech: ["Node.js", "APIs", "Caching", "Cloud"] },
  { number: "03", title: "demo.kargo.com", label: "Interactive product", summary: "Built and evolved a Next.js application that recreates publisher environments to preview ads across desktop, mobile, and connected TV.", tech: ["React", "Next.js", "TypeScript", "Puppeteer"] },
  { number: "04", title: "AI Page Rebuilder", label: "AI engineering", summary: "Created an AI-assisted system that analyzes webpages and reconstructs their structure as React implementations using browser automation and LLMs.", tech: ["React", "Puppeteer", "OpenAI", "Codex"] },
  { number: "05", title: "Enterprise Applications", label: "Public sector", summary: "Contributed to robust enterprise applications for the New York City Department of Education, built for complex, high-impact workflows.", tech: ["Java", "Enterprise systems"] },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .55 } };

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="mark" href="#top" aria-label="Surabhi Mendiratta, home">SM<span>.</span></a>
        <div className={`navLinks ${menu ? "open" : ""}`}><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#universe" onClick={() => setMenu(false)}>Universe</a><a href="#work" onClick={() => setMenu(false)}>Work</a><a className="navCta" href="#contact" onClick={() => setMenu(false)}>Let&apos;s talk <ArrowUpRight size={15}/></a></div>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero shell">
        <motion.div className="heroCopy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
          <p className="eyebrow"><span /> Hi, I&apos;m Surabhi 👋</p><h1>Engineering thoughtful products, <em>end to end.</em></h1><p className="role">Senior Full-Stack Software Engineer</p>
          <p className="lede">I build products from the UI all the way down to the systems that keep them running—turning ambiguous problems into reliable, scalable, user-friendly software.</p>
          <div className="actions"><a className="button primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button quiet" href="#contact">View resume</a></div>
          <div className="socialRow"><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Network size={16}/> LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub</a></div>
        </motion.div>
        <motion.div className="ecosystem" aria-label="A selection of technologies in Surabhi's toolkit" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}}><div className="orbit orbitOne"/><div className="orbit orbitTwo"/><div className="core"><span>SM</span><small>FULL STACK</small></div>{["React","Next.js","TypeScript","Java","AWS","AI"].map((item,index)=><motion.div whileHover={{scale:1.1,y:-4}} className={`techNode node${index+1}`} key={item}>{item}</motion.div>)}<div className="note">From pixels<br/>to platforms <span>✦</span></div></motion.div>
      </section>

      <section className="about section shell" id="about">
        <motion.div {...fade} className="sectionIntro"><p className="kicker">01 / About me</p><h2>I like the whole picture.</h2><p>I&apos;m happiest connecting the details across a product: what a person sees, what an API promises, how data moves, and what keeps the system healthy at scale.</p></motion.div>
        <div className="themeGrid"><motion.article {...fade} className="themeCard mintCard"><div className="themeIcon"><Boxes/></div><span>01</span><h3>Build</h3><p>Turning product ideas into polished, production-ready software.</p></motion.article><motion.article {...fade} transition={{duration:.55,delay:.08}} className="themeCard peachCard"><div className="themeIcon"><Zap/></div><span>02</span><h3>Scale</h3><p>Designing APIs, distributed systems, caching, cloud infrastructure, and resilient applications.</p></motion.article><motion.article {...fade} transition={{duration:.55,delay:.16}} className="themeCard lilacCard"><div className="themeIcon"><Users/></div><span>03</span><h3>Collaborate</h3><p>Partnering closely with product, design, QA, engineers, stakeholders, and external teams.</p></motion.article></div>
      </section>

      <section className="universe section" id="universe"><div className="shell"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">02 / Capabilities</p><h2>My technical universe</h2></div><p>Tools are only useful in context. Explore the systems I use to take an idea from first interaction to dependable infrastructure.</p></motion.div>
        <div className="universeLayout"><div className="groupTabs" role="tablist" aria-label="Technology categories">{techGroups.map((group,index)=>{const Icon=group.icon;return <button key={group.name} role="tab" aria-selected={activeGroup===index} onClick={()=>setActiveGroup(index)} className={activeGroup===index?"active":""}><span className={`miniIcon ${group.color}`}><Icon size={18}/></span>{group.name}<span>{String(index+1).padStart(2,"0")}</span></button>})}</div>
          <motion.div key={activeGroup} className={`techPanel ${techGroups[activeGroup].color}`} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}}><div className="panelTop"><span>{techGroups[activeGroup].name}</span><span>{techGroups[activeGroup].items.length} technologies</span></div><div className="chipCloud">{techGroups[activeGroup].items.map((item,index)=><motion.button whileHover={{y:-4,rotate:index%2?.5:-.5}} key={item}>{item}<span>+</span></motion.button>)}</div><p className="panelNote"><Sparkles size={17}/> A flexible toolkit, applied with pragmatism—not dogma.</p></motion.div>
        </div></div></section>

      <section className="work section shell" id="work"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">03 / Selected work</p><h2>Engineering in practice</h2></div><p>A few systems and products I&apos;ve helped shape—each starting with a different kind of complexity.</p></motion.div>
        <div className="projects">{projects.map((project)=><motion.article {...fade} className={`projectCard ${project.featured?"featured":""}`} key={project.title}><div className="projectMeta"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title}</h3><p>{project.summary}</p>{project.featured&&<div className="architecture" aria-label="Request caching and fallback architecture"><div><span>Request</span><small>client</small></div><b>→</b><div className="cache"><span>Smart cache</span><small>ETag · Last-Modified</small></div><b>→</b><div><span>Provider</span><small>fresh data</small></div><div className="fallback"><Network size={16}/><span>If unavailable → resilient fallback</span></div></div>}<div className="tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div><div className="projectArrow"><ArrowUpRight/></div></motion.article>)}</div>
      </section>

      <section className="principles section"><div className="shell"><motion.div {...fade} className="principleQuote"><Sparkles/><blockquote>Good engineering is less about showing complexity—and more about making complexity feel simple.</blockquote></motion.div><div className="principleGrid"><div><span>01</span><h3>Product-minded</h3><p>I care about the outcome, not just the implementation.</p></div><div><span>02</span><h3>Systems-aware</h3><p>I design for real traffic, change, failure, and maintenance.</p></div><div><span>03</span><h3>Always learning</h3><p>I&apos;m curious about better tools, patterns, and possibilities.</p></div></div></div></section>
      <section className="contact section shell" id="contact"><motion.div {...fade} className="contactCard"><p className="kicker">Let&apos;s build something good</p><h2>Have an interesting problem?</h2><p>I&apos;m always happy to connect with thoughtful people working on meaningful products.</p><div className="contactActions"><a className="button light" href="mailto:surabhi@example.com"><Mail size={17}/> Say hello</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a></div><div className="contactDoodle"><Layers3/><span>ideas → systems → impact</span></div></motion.div></section>
      <footer className="footer shell"><a className="mark" href="#top">SM<span>.</span></a><p>Designed &amp; built with care © {new Date().getFullYear()}</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
