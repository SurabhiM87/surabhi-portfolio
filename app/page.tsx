"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Award, Building2, Code2, CodeXml, Cpu, ExternalLink, GraduationCap, House, Layers3, Lightbulb, Mail, Menu, MessageSquareText, Network, Sparkles, Wrench, X } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { portfolio } from "../src/data/portfolio";

const techGroups = portfolio.technologyGroups;
const projects = portfolio.projects;

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .55 } };

function LotusLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 92" fill="none" aria-hidden="true">
      <path d="M80 82C66 69 58 53 80 18C102 53 94 69 80 82Z" />
      <path d="M72 82C51 78 35 64 40 34C63 44 73 60 72 82Z" />
      <path d="M88 82C109 78 125 64 120 34C97 44 87 60 88 82Z" />
      <path d="M60 82C39 82 22 73 15 51C40 51 57 61 60 82Z" />
      <path d="M100 82C121 82 138 73 145 51C120 51 103 61 100 82Z" />
      <path d="M34 82H126" />
    </svg>
  );
}

type LotusWatermarkProps = {
  className?: string;
  size?: number | string;
  opacity?: number;
  rotation?: number;
  position?: Pick<CSSProperties, "top" | "right" | "bottom" | "left">;
  hideOnMobile?: boolean;
};

function LotusWatermark({ className = "", size = 560, opacity = .07, rotation = 0, position, hideOnMobile = false }: LotusWatermarkProps) {
  const style = {
    ...position,
    "--lotus-size": typeof size === "number" ? `${size}px` : size,
    "--lotus-opacity": opacity,
    "--lotus-rotation": `${rotation}deg`,
  } as CSSProperties;

  return (
    <svg className={`lotusWatermark ${hideOnMobile ? "lotusHideMobile" : ""} ${className}`} style={style} viewBox="0 0 160 92" fill="none" aria-hidden="true">
      <path d="M80 82C66 69 58 53 80 18C102 53 94 69 80 82Z" />
      <path d="M72 82C51 78 35 64 40 34C63 44 73 60 72 82Z" />
      <path d="M88 82C109 78 125 64 120 34C97 44 87 60 88 82Z" />
      <path d="M60 82C39 82 22 73 15 51C40 51 57 61 60 82Z" />
      <path d="M100 82C121 82 138 73 145 51C120 51 103 61 100 82Z" />
      <path d="M34 82H126" />
    </svg>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brandMark" href="#top" aria-label="Surabhi Mendiratta, home" title="Surabhi Mendiratta"><Image src="/images/sm-brand-mark.png" alt="" width={52} height={52} priority/></a>
        <div className={`navLinks ${menu ? "open" : ""}`}><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#universe" onClick={() => setMenu(false)}>Universe</a><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#beyond" onClick={() => setMenu(false)}>Beyond</a><a className="navCta" href="#contact" onClick={() => setMenu(false)}>Let&apos;s talk <ArrowUpRight size={15}/></a></div>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero shell">
        <motion.div className="heroCopy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
          <LotusWatermark className="heroWatermark" size={480} opacity={.055} rotation={-8} position={{right:"-110px",top:"150px"}} hideOnMobile />
          <p className="eyebrow"><span /> Hi, I&apos;m Surabhi 👋</p><h1>I build things with <em>curiosity, care</em>, and a little bit of obsession.</h1><p className="role">Senior Full-Stack Software Engineer</p>
          <p className="lede">{portfolio.bio}</p>
          <div className="actions"><a className="button primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button quiet" href={portfolio.resume}>View resume</a></div>
          <div className="socialRow"><a href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><Network size={16}/> LinkedIn</a><a href={portfolio.social.github} target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub</a></div>
        </motion.div>
        <motion.div className="ecosystem" aria-label="A selection of technologies in Surabhi's toolkit" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.15}}><div className="orbit orbitOne"/><div className="orbit orbitTwo"/><div className="core"><span>SM</span><small>FULL STACK</small></div>{["React","Next.js","TypeScript","Node.js","AWS","AI"].map((item,index)=><motion.div whileHover={{scale:1.1,y:-4}} className={`techNode node${index+1}`} key={item}>{item}</motion.div>)}<div className="note">From pixels<br/>to platforms <span>✦</span></div></motion.div>
      </section>

      <section className="about section shell" id="about">
        <LotusWatermark className="aboutWatermark" size={590} opacity={.075} rotation={-5} position={{left:"7%",bottom:"5px"}} />
        <div className="aboutHeader"><motion.div {...fade} className="aboutCopy"><p className="kicker">01 / About me</p><div className="aboutTitle"><h2>I like the whole picture.</h2><LotusLine className="aboutLotus" /></div><div className="aboutBody"><p>I&apos;m a full-stack engineer who genuinely enjoys understanding how all the pieces fit together: what the user sees, what happens behind an API, how data moves through a system, and what keeps everything reliable when things don&apos;t go as planned.</p><p>Over the years, I&apos;ve worked across frontend, backend, APIs, cloud infrastructure, distributed systems, automation, and more recently AI-assisted development. I enjoy taking an ambiguous problem, understanding what actually needs to be solved, and turning it into something people can use.</p><p>I&apos;m naturally curious. If I don&apos;t understand how something works, I want to dig into it until I do. Outside engineering, I volunteer with Harmony Power, love cooking and experimenting with food, and care deeply about continuing to learn, contribute, and grow.</p></div><p className="personalLine">Build with care. Stay curious. Keep learning.</p></motion.div><motion.figure {...fade} className="portraitFrame"><Image src="/images/surabhi-portrait.jpg" alt="Surabhi Mendiratta smiling at an outdoor table" width={756} height={1008} priority/><figcaption>Developer, systems thinker, lifelong learner, and enthusiastic home cook.</figcaption></motion.figure></div>
      </section>

      <section className="universe section" id="universe"><div className="shell"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">02 / Capabilities</p><h2>My technical universe</h2></div><p>Tools are only useful in context. Explore the systems I use to take an idea from first interaction to dependable infrastructure.</p></motion.div>
        <div className="universeLayout"><div className="groupTabs" role="tablist" aria-label="Technology categories">{techGroups.map((group,index)=>{const Icon=group.icon;return <button key={group.name} role="tab" aria-selected={activeGroup===index} onClick={()=>setActiveGroup(index)} className={activeGroup===index?"active":""}><span className={`miniIcon ${group.color}`}><Icon size={18}/></span>{group.name}<span>{String(index+1).padStart(2,"0")}</span></button>})}</div>
          <motion.div key={activeGroup} className={`techPanel ${techGroups[activeGroup].color}`} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}}><div className="panelTop"><span>{techGroups[activeGroup].name}</span><span>{techGroups[activeGroup].items.length} technologies</span></div><div className="chipCloud">{techGroups[activeGroup].items.map((item,index)=><motion.button whileHover={{y:-4,rotate:index%2?.5:-.5}} key={item}>{item}<span>+</span></motion.button>)}</div><p className="panelNote"><Sparkles size={17}/> A flexible toolkit, applied with pragmatism, not dogma.</p></motion.div>
        </div></div></section>

      <section className="work section shell" id="work"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">03 / Selected work</p><h2>Engineering in practice</h2></div><p>A few systems and products I&apos;ve helped shape. Each started with a different kind of complexity.</p></motion.div>
        <div className="projects">{projects.map((project)=><motion.article {...fade} className={`projectCard ${project.featured?"featured":""}`} key={project.title}><div className="projectMeta"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title}</h3><p>{project.summary}</p>{project.featured&&<div className="architecture" aria-label="Request caching and fallback architecture"><div><span>Request</span><small>client</small></div><b>→</b><div className="cache"><span>Smart cache</span><small>ETag · Last-Modified</small></div><b>→</b><div><span>Provider</span><small>fresh data</small></div><div className="fallback"><Network size={16}/><span>If unavailable → resilient fallback</span></div></div>}<div className="tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div>{project.url?<a className="projectArrow" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight/></a>:<div className="projectArrow" aria-hidden="true"><ArrowUpRight/></div>}</motion.article>)}</div>
      </section>

      <section className="principles section"><div className="shell"><motion.div {...fade} className="philosophyIntro"><p className="kicker">04 / Engineering philosophy</p><h2>How I like to work.</h2></motion.div><div className="principleGrid philosophyGrid">{portfolio.principles.map((principle,index)=><div key={principle}><span>{String(index+1).padStart(2,"0")}</span><h3>{principle}</h3></div>)}</div></div></section>

      <section className="beyond section" id="beyond"><LotusWatermark className="beyondWatermark" size={540} opacity={.065} rotation={11} position={{right:"-150px",top:"70px"}} /><div className="shell"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">05 / Beyond the code</p><h2>There&apos;s more to me than code.</h2></div><p>The best work is grounded in curiosity, community, and a life with room for things that matter beyond a screen.</p></motion.div><div className="beyondGrid">{portfolio.beyondCode.map((item,index)=>{const card=<motion.article {...fade} whileHover={{y:-7,rotate:index===1?.7:-.4}} className={`beyondCard beyond${index+1}`}><div className="beyondIllustration">{item.image?<Image className={index===0?"logoImage":index===5?"sketchImage":"cookingImage"} style={index===0?{objectFit:"contain",objectPosition:"center",padding:"14px",background:"#fffdf8"}:index===5?{objectFit:"cover",objectPosition:"center 72%"}:{objectFit:"cover",objectPosition:"center"}} src={item.image} alt={index===0?"Harmony Power community organization logo":index===5?"Black-and-white goose sketch by Surabhi Mendiratta":"A colorful homemade meal with vegetables, beans, and greens"} fill sizes="(max-width: 900px) 100vw, 33vw"/> :index===2?<div className="aiJourney" aria-hidden="true"><span><Lightbulb/>idea</span><ArrowDown/><span><MessageSquareText/>prompt</span><ArrowDown/><span><CodeXml/>code</span><ArrowDown/><Sparkles className="aiSparkle"/></div>:index===3?<div className="aiJourney diyJourney" aria-hidden="true"><span><House/>home</span><ArrowDown/><span><Wrench/>tools</span><ArrowDown/><span><Cpu/>Raspberry Pi</span></div>:<div className="aiJourney academicJourney" aria-hidden="true"><span><Award/>award</span><ArrowDown/><span><GraduationCap/>M.S. CS</span><ArrowDown/><span><Building2/>NYIT</span></div>}</div><p>{index===0?"COMMUNITY IMPACT":index===4?"ACADEMIC EXCELLENCE":String(index+1).padStart(2,"0")}</p><h3>{item.title}</h3><p>{item.description}</p>{"tags" in item&&<div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>}{item.url&&<span className="cardLink">{index===0?<ExternalLink size={18}/>:<>Visit <ExternalLink size={14}/></>}</span>}</motion.article>;return item.url?<a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={index===0?"Visit Harmony Power":`Visit ${item.title}`} key={item.title}>{card}</a>:<div key={item.title}>{card}</div>})}</div></div></section>

      <section className="journey section shell" id="journey"><motion.div {...fade} className="sectionIntro split"><div><p className="kicker">06 / Career journey</p><h2>A career built layer by layer.</h2></div><p>My career has evolved from engineering tools to full-stack products and distributed systems. Across each chapter, I’ve gravitated toward complex problems, end-to-end ownership, and building things people actually use.</p></motion.div><div className="timeline">{portfolio.experience.map((item,index)=><motion.article {...fade} key={index}><div className="timelineDot">{index+1}</div><p>{item.period}</p><div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p></div></motion.article>)}</div></section>

      <section className="contact section shell" id="contact"><motion.div {...fade} className="contactCard"><LotusWatermark className="contactWatermark" size={430} opacity={.085} rotation={-10} position={{right:"-80px",bottom:"-70px"}} /><p className="kicker">Let&apos;s build something interesting.</p><h2>Have an interesting problem?</h2><p>I&apos;m always happy to connect with thoughtful people working on meaningful products.</p><div className="contactActions"><a className="button light" href={`mailto:${portfolio.email}`}><Mail size={17}/> Say hello</a><a href={portfolio.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href={portfolio.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a></div><div className="contactDoodle"><Layers3/><span>ideas → systems → impact</span></div></motion.div></section>
      <footer className="footer shell"><a className="mark" href="#top">SM<span>.</span></a><p>Designed &amp; built with care © {new Date().getFullYear()}</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
