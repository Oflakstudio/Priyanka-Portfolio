import { useEffect, useRef, useState } from 'react'

const ASSET_BASE = 'https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets/images'
const DOC_BASE = 'https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets/docs'
const asset = (file: string) => `${ASSET_BASE}/${file}`
const doc = (file: string) => `${DOC_BASE}/${file}`

type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  category: string
  year: string
  cover: string
  alt: string
  description: string
  details: string[]
  images: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'azure', index: '01', title: 'Azure Heirloom', subtitle: 'Collection', category: 'Womenswear Collection', year: '2026',
    cover: asset('the-azure-hairloom-07.jpg'), alt: 'Azure Heirloom womenswear collection board',
    description: 'A womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.',
    details: ['Palette: blue, ivory, gold, and related tones.', 'Research translated through woven references, embroidery, decorative borders, and embellished details.', 'Development includes front, side, back, and close-up finishing references.'],
    images: ['the-azure-hairloom-01.jpg','the-azure-hairloom-02.jpg','the-azure-hairloom-03.jpg','the-azure-hairloom-04.jpg','the-azure-hairloom-05.jpg','the-azure-hairloom-06.jpg','the-azure-hairloom-07.jpg'],
  },
  {
    id: 'womenswear', index: '02', title: 'Womenswear Design Series', subtitle: '7 Concepts', category: 'Fashion Design / Development', year: '2026',
    cover: asset('modern-duality.jpg'), alt: 'Modern Duality womenswear design board',
    description: 'Seven womenswear concepts across contemporary, occasion, evening, and fusion-inspired silhouettes.',
    details: ['Design vocabulary includes draping, layered silhouettes, cut-outs, gathered details, statement sleeves, fitted forms, and flowing garments.', 'Supporting boards cover fabric details, colour palettes, construction references, and inspiration.', 'Presented through front, side, and back-view fashion development.'],
    images: ['aurelia.jpg','rayaa.jpg','modern-duality.jpg','refiend-contrast.jpg','the-amaranthine-form.jpg','rangrezz-01.jpg','the-royal-blue-garden.jpg','rangrezz-02.jpg','rangrezz-03.jpg','rangrezz-04.jpg','rangrezz-05.jpg'],
  },
  {
    id: 'textile', index: '03', title: 'Textile & Surface Development', subtitle: 'Material Study', category: 'Textile / Surface', year: '2026',
    cover: asset('textile-surface.jpg'), alt: 'Textile and surface development board',
    description: 'A focused exploration of tie-and-dye and supporting textile research, connecting surface decisions with outfit direction.',
    details: ['Four directions: diagonal stripe, horizontal shibori, curved line, and diamond shibori pattern.', 'Pattern, texture, and visual effects are documented alongside outfit applications.', 'Supporting research includes fabric swatches, manipulation studies, and colour-story development.'],
    images: ['textile-surface.jpg','fabric.jpg','manipulations.jpg','colour-story.jpg'],
  },
  {
    id: 'creative', index: '04', title: 'Surface, Styling & Visual Research', subtitle: 'Archive', category: 'Additional Creative Work', year: '2026',
    cover: asset('additional-work.jpg'), alt: 'Additional creative work board',
    description: 'Supporting work across material experiments, styling research, accessories, and image-led exploration.',
    details: ['Fabric painting, patchwork, and beadwork embroidery.', 'Traditional and western styling boards with accessory research.', 'Additional concept boards broaden the visual research archive.'],
    images: ['additional-work.jpg','accessories-style-comparison.jpg','colarge.jpg'],
  },
]

const NAV = [['Work','work'],['Research','research'],['About','about'],['Contact','contact']] as const

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold })
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <>
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <button className="wordmark" onClick={() => scrollToId('top')} aria-label="Back to top">
        <span className="wordmark-mark">PV</span><span className="wordmark-name">Priyanka Vishwakarma</span>
      </button>
      <nav className="desktop-nav" aria-label="Primary navigation">{NAV.map(([label,id],i)=><button key={id} onClick={() => scrollToId(id)}><span>0{i+1}</span>{label}</button>)}<a href={doc('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">CV ↗</a></nav>
      <button className="menu-toggle" onClick={() => setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle menu"><span/><span/><span/></button>
    </header>
    <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>{NAV.map(([label,id],i)=><button key={id} onClick={()=>{setOpen(false); scrollToId(id)}}><span>0{i+1}</span>{label}</button>)}<a href={doc('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">CV ↗</a></div>
  </>
}

function Hero() {
  const reveal = useReveal(0.01)
  return <section id="top" ref={reveal.ref} className={`hero ${reveal.visible ? 'is-visible' : ''}`}>
    <div className="hero-copy"><p className="eyebrow">Fashion × Textile × Design</p><h1>Rooted in heritage.<br/><em>Designed for tomorrow.</em></h1><p className="hero-intro">Priyanka Vishwakarma is a fashion design fresher exploring womenswear, textile surfaces, styling, and detail-led visual storytelling.</p><div className="hero-actions"><button className="button button-dark" onClick={()=>scrollToId('work')}>View selected work</button><button className="text-link" onClick={()=>scrollToId('about')}>Read profile ↓</button></div></div>
    <figure className="hero-visual"><div className="hero-frame"><img src={asset('logo-priyanka.jpg')} alt="Priyanka Vishwakarma visual identity board"/></div><figcaption>Personal identity system / 2026</figcaption></figure>
  </section>
}

function ProjectCard({project,featured,onOpen}:{project:Project,featured?:boolean,onOpen:()=>void}) {
  const reveal = useReveal()
  return <article ref={reveal.ref} className={`project-card ${featured ? 'project-card--featured' : ''} ${reveal.visible ? 'is-visible' : ''}`}><button className="project-image-wrap" onClick={onOpen} aria-label={`Open ${project.title} case study`}><img src={project.cover} alt={project.alt} loading="lazy"/></button><div className="project-meta"><div className="meta-line"><span>{project.index}</span><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><button className="inline-link" onClick={onOpen}>Open case study ↗</button></div></article>
}

function CaseStudy({project,onClose}:{project:Project,onClose:()=>void}) {
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="case-title"><div className="modal-topline"><span>{project.index} / {project.category}</span><button onClick={onClose}>Close ×</button></div><div className="modal-heading"><div><p className="eyebrow">Case study</p><h2 id="case-title">{project.title}<em>{project.subtitle}</em></h2></div><p>{project.description}</p></div><div className="modal-details">{project.details.map(d=><p key={d}>{d}</p>)}</div><div className="modal-gallery">{project.images.map((image,i)=><figure key={image} className={i===0?'gallery-image gallery-image--wide':'gallery-image'}><img src={asset(image)} alt={`${project.title} board ${i+1}`} loading="lazy"/></figure>)}</div></div></div>
}

function Work() {
  const [active,setActive]=useState<Project|null>(null)
  const heading=useReveal()
  return <section id="work" className="section work-section"><div ref={heading.ref} className={`section-heading ${heading.visible?'is-visible':''}`}><span>02 / Selected work</span><div><h2>Portfolio / 2026</h2><p>Real boards, research, development, and resolved form from Priyanka’s existing portfolio.</p></div></div><div className="featured-grid"><ProjectCard project={PROJECTS[0]} featured onOpen={()=>setActive(PROJECTS[0])}/><ProjectCard project={PROJECTS[1]} onOpen={()=>setActive(PROJECTS[1])}/></div><div className="two-up-grid"><ProjectCard project={PROJECTS[2]} onOpen={()=>setActive(PROJECTS[2])}/><ProjectCard project={PROJECTS[3]} onOpen={()=>setActive(PROJECTS[3])}/></div>{active&&<CaseStudy project={active} onClose={()=>setActive(null)}/>}</section>
}

function Research() {
  const reveal=useReveal()
  return <section id="research" className="section research-section"><div ref={reveal.ref} className={`section-heading ${reveal.visible?'is-visible':''}`}><span>03 / Research as material</span><div><h2>Material is evidence.</h2><p>Research moves through colour, textile, motif, silhouette, manipulation, and styling rather than living as decoration.</p></div></div><div className="research-spread"><img src={asset('fabric.jpg')} alt="Fabric swatches and textile research" loading="lazy"/><div className="research-copy"><span className="display-number">01 — Observe</span><h3>From reference to surface.</h3><p>Traditional textile references become practical design decisions: pattern, texture, colour story, embellishment, and garment detail.</p></div><img src={asset('colour-story.jpg')} alt="Colour story research board" loading="lazy"/></div><div className="research-strip"><img src={asset('manipulations.jpg')} alt="Textile manipulation study" loading="lazy"/><img src={asset('accessories-style-comparison.jpg')} alt="Accessories styling comparison board" loading="lazy"/><img src={asset('colarge.jpg')} alt="Visual research collage" loading="lazy"/></div></section>
}

function About() {
  const reveal=useReveal()
  return <section id="about" className="section about-section"><div ref={reveal.ref} className={`section-heading ${reveal.visible?'is-visible':''}`}><span>04 / About</span><div><h2>A considered beginning.</h2><p>Fashion, textile, styling, and garment development grounded in an Indian craft context.</p></div></div><div className="about-grid"><div className="about-copy"><p className="lead">Creative and detail-oriented Fashion Design fresher with a Professional Fashion Designing diploma and a Diploma in Handloom and Textile Technology.</p><p>Her portfolio demonstrates womenswear design, fashion illustration, textile and surface development, styling, colour stories, mood boards, fabric selection, and garment detailing.</p><p>She is seeking an entry-level opportunity across Fashion Design, Fashion Styling, Textile, or Garment Design.</p><div className="about-actions"><a className="button button-dark" href={doc('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">Open CV</a><a className="button button-light" href={doc('Certificate.pdf')} target="_blank" rel="noreferrer">View certificate</a></div></div><div className="about-facts"><div><span>Education</span><strong>Professional Fashion Designing</strong><small>Skill in a Box, Delhi · 2025–2026</small></div><div><span>Education</span><strong>Diploma in Handloom &amp; Textile Technology</strong><small>IIHT, Chhattisgarh · 2019–2021</small></div><div><span>Core strengths</span><strong>Womenswear / Styling / Textile Surface</strong><small>Illustration · fabric &amp; colour · mood boards · garment details</small></div><div><span>Tools</span><strong>Adobe Illustrator &amp; Canva</strong><small>Basic proficiency</small></div></div></div></section>
}

function BrandStudy(){return <section className="section brand-section"><div className="section-heading is-visible"><span>05 / Identity study</span><div><h2>The portfolio identity follows the work.</h2><p>A restrained editorial system keeps the garments, boards, colour, and material studies in control.</p></div></div><div className="brand-grid"><img src={asset('brand-primary.jpg')} alt="Priyanka Vishwakarma primary identity board" loading="lazy"/><img src={asset('brand-typography.jpg')} alt="Priyanka Vishwakarma typography board" loading="lazy"/><img src={asset('brand-palette.jpg')} alt="Priyanka Vishwakarma colour palette board" loading="lazy"/></div></section>}

function Contact(){return <section id="contact" className="contact-section"><div className="contact-inner"><span className="eyebrow">06 / Contact</span><h2>Let’s make something <em>considered.</em></h2><div className="contact-grid"><p>For entry-level opportunities, collaborations, internships, or fashion and textile projects.</p><div><a href="mailto:pv6264120@gmail.com">pv6264120@gmail.com ↗</a><a href="tel:+917987014175">+91 79870 14175 ↗</a><span>Chhattisgarh, India</span></div></div><footer><span>Priyanka Vishwakarma</span><span>Fashion × Textile × Design · 2026</span><span>© 2026</span></footer></div></section>}

export default function App(){return <div className="app-shell"><Header/><main><Hero/><section className="statement section"><span>01 / Practice</span><div><h2>Design through <em>material, memory, and form.</em></h2><p>The portfolio connects traditional textile references with contemporary womenswear ideas — moving from colour and research into surface, silhouette, styling, and garment detail.</p></div></section><Work/><Research/><About/><BrandStudy/><Contact/></main></div>}
