import { useEffect, useRef, useState } from 'react'

const IMAGE_BASE = 'https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets/images'
const DOC_BASE = 'https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets/docs'
const image = (file: string) => `${IMAGE_BASE}/${file}`
const documentUrl = (file: string) => `${DOC_BASE}/${file}`

type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  year: string
  category: string
  cover: string
  alt: string
  concept: string
  details: string[]
  images: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'azure',
    index: '01',
    title: 'Azure Heirloom',
    subtitle: 'Collection',
    year: '2026',
    category: 'Flagship Womenswear Collection',
    cover: image('the-azure-hairloom-07.jpg'),
    alt: 'Azure Heirloom womenswear collection board',
    concept: 'A womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.',
    details: [
      'Palette: blue, ivory, gold, and related tones.',
      'Research translated through woven references, embroidery, decorative borders, and embellished details.',
      'Full-look development includes front, side, back, and close-up garment references.',
    ],
    images: [
      'the-azure-hairloom-01.jpg',
      'the-azure-hairloom-02.jpg',
      'the-azure-hairloom-03.jpg',
      'the-azure-hairloom-04.jpg',
      'the-azure-hairloom-05.jpg',
      'the-azure-hairloom-06.jpg',
      'the-azure-hairloom-07.jpg',
    ],
  },
  {
    id: 'womenswear',
    index: '02',
    title: 'Womenswear Design',
    subtitle: 'Series — 7 Concepts',
    year: '2026',
    category: 'Fashion Design / Development',
    cover: image('modern-duality.jpg'),
    alt: 'Modern Duality womenswear design board',
    concept: 'Seven womenswear design concepts spanning contemporary, occasion, evening, and fusion-inspired silhouettes.',
    details: [
      'Design vocabulary includes draping, layered forms, cut-outs, gathered details, statement sleeves, fitted bodies, and flowing garments.',
      'Supporting boards cover fabric details, colour palettes, construction references, and inspiration.',
      'Each concept is developed through front, side, and back presentation.',
    ],
    images: [
      'aurelia.jpg',
      'rayaa.jpg',
      'modern-duality.jpg',
      'refiend-contrast.jpg',
      'the-amaranthine-form.jpg',
      'rangrezz-01.jpg',
      'the-royal-blue-garden.jpg',
      'rangrezz-02.jpg',
      'rangrezz-03.jpg',
      'rangrezz-04.jpg',
      'rangrezz-05.jpg',
    ],
  },
  {
    id: 'textile',
    index: '03',
    title: 'Textile & Surface',
    subtitle: 'Development',
    year: '2026',
    category: 'Tie & Dye · Surface Design',
    cover: image('textile-surface.jpg'),
    alt: 'Textile and surface development board',
    concept: 'Four handcrafted tie-and-dye surface development experiments, connecting surface technique with proposed outfit direction.',
    details: [
      'Diagonal stripe, shibori horizontal pattern, curved-line pattern, and diamond shibori pattern.',
      'Pattern, texture, and visual effects are documented alongside outfit applications.',
      'Supporting research includes fabric swatches, manipulation studies, and colour-story development.',
    ],
    images: ['textile-surface.jpg', 'fabric.jpg', 'manipulations.jpg', 'colour-story.jpg'],
  },
]

const CREATIVE_ARCHIVE = [
  {
    label: 'Fabric Painting',
    image: 'fabric.jpg',
    desc: 'Material exploration documented through surface and fabric-focused studies.',
  },
  {
    label: 'Beadwork Embroidery',
    image: 'additional-work.jpg',
    desc: 'Hand-led surface decoration and supporting creative work within the wider archive.',
  },
  {
    label: 'Patchwork & Surface',
    image: 'colarge.jpg',
    desc: 'Layering, textile fragments, and image-led experimentation supporting design thinking.',
  },
  {
    label: 'Accessories Research',
    image: 'accessories-style-comparison.jpg',
    desc: 'Traditional and western accessory research presented through styling comparison.',
  },
]

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold })
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = [
    ['Work', 'work'],
    ['About', 'about'],
    ['Process', 'process'],
    ['Contact', 'contact'],
  ] as const

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <button className="wordmark" onClick={() => scrollToId('top')} aria-label="Back to top">
          <span className="wordmark-name">Priyanka Vishwakarma</span>
          <span className="wordmark-sub">Fashion · Textile · Design</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, id], index) => (
            <button key={id} onClick={() => scrollToId(id)}>
              <span>0{index + 1}</span>{label}
            </button>
          ))}
          <a href={documentUrl('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">CV ↗</a>
        </nav>

        <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        {links.map(([label, id], index) => (
          <button key={id} onClick={() => { setOpen(false); scrollToId(id) }}>
            <span>0{index + 1}</span>{label}
          </button>
        ))}
        <a href={documentUrl('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">CV ↗</a>
      </div>
    </>
  )
}

function Hero() {
  const reveal = useReveal(0.01)
  return (
    <section id="top" ref={reveal.ref} className={`hero ${reveal.visible ? 'is-visible' : ''}`}>
      <div className="hero-copy">
        <p className="eyebrow">Fashion × Textile × Design</p>
        <h1>Rooted in heritage.<br /><em>Designed for tomorrow.</em></h1>
        <p className="hero-intro">Priyanka Vishwakarma is a fashion design fresher exploring womenswear, textile surfaces, styling, and detail-led visual storytelling.</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={() => scrollToId('work')}>View selected work</button>
          <button className="text-link" onClick={() => scrollToId('about')}>Read profile ↓</button>
        </div>
      </div>
      <figure className="hero-visual">
        <div className="hero-frame"><img src={image('logo-priyanka.jpg')} alt="Priyanka Vishwakarma identity board" /></div>
        <figcaption>Personal identity system / 2026</figcaption>
      </figure>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="modal" onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="case-title">
        <div className="modal-topline">
          <span>{project.index} / {project.category}</span>
          <button onClick={onClose}>Close ×</button>
        </div>
        <div className="modal-heading">
          <div>
            <p className="eyebrow">Case study</p>
            <h2 id="case-title">{project.title}<em>{project.subtitle}</em></h2>
          </div>
          <p>{project.concept}</p>
        </div>
        <div className="modal-details">
          {project.details.map(detail => <p key={detail}>{detail}</p>)}
        </div>
        <div className="modal-gallery">
          {project.images.map((file, index) => (
            <figure key={file} className={index === 0 ? 'gallery-image gallery-image--wide' : 'gallery-image'}>
              <img src={image(file)} alt={`${project.title} board ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

function Work() {
  const [active, setActive] = useState<Project | null>(null)
  const heading = useReveal()
  return (
    <section id="work" className="section work-section">
      <div ref={heading.ref} className={`section-heading ${heading.visible ? 'is-visible' : ''}`}>
        <span>02 — Selected Work</span>
        <div>
          <h2>Projects / 2026</h2>
          <p>Portfolio studies across womenswear, textile development, surface, styling, and visual research.</p>
        </div>
      </div>

      <div className="featured-grid">
        <ProjectCard project={PROJECTS[0]} featured onOpen={() => setActive(PROJECTS[0])} />
        <ProjectCard project={PROJECTS[1]} onOpen={() => setActive(PROJECTS[1])} />
      </div>

      <div className="two-up-grid">
        <ProjectCard project={PROJECTS[2]} onOpen={() => setActive(PROJECTS[2])} />
        <div className="work-note">
          <span className="display-number">Archive / 04</span>
          <h3>Supporting work</h3>
          <p>Material studies, styling references, accessory research, and additional creative boards extend the portfolio beyond the three primary project groups.</p>
          <button className="inline-link" onClick={() => scrollToId('process')}>View research & process ↗</button>
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ProjectCard({ project, featured = false, onOpen }: { project: Project; featured?: boolean; onOpen: () => void }) {
  const reveal = useReveal()
  return (
    <article ref={reveal.ref} className={`project-card ${featured ? 'project-card--featured' : ''} ${reveal.visible ? 'is-visible' : ''}`}>
      <button className="project-image-wrap" onClick={onOpen} aria-label={`Open ${project.title} case study`}>
        <img src={project.cover} alt={project.alt} loading="lazy" />
      </button>
      <div className="project-meta">
        <div className="meta-line"><span>{project.index}</span><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}<em>{project.subtitle}</em></h3>
        <p>{project.concept}</p>
        <button className="inline-link" onClick={onOpen}>Open case study ↗</button>
      </div>
    </article>
  )
}

function About() {
  const reveal = useReveal()
  return (
    <section id="about" className="section about-section">
      <div ref={reveal.ref} className={`section-heading ${reveal.visible ? 'is-visible' : ''}`}>
        <span>03 — About</span>
        <div>
          <h2>A considered beginning.</h2>
          <p>Fashion, textile, styling, and garment development grounded in hand-led making and an Indian craft context.</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">Creative and detail-oriented Fashion Design fresher with a Professional Fashion Designing diploma and a Diploma in Handloom and Textile Technology.</p>
          <p>Her portfolio demonstrates womenswear design, fashion illustration, textile and surface development, styling, colour stories, mood boards, fabric selection, and garment detailing.</p>
          <p>She is seeking an entry-level opportunity across Fashion Design, Fashion Styling, Textile, or Garment Design.</p>
          <div className="about-actions">
            <a className="button button-light" href={documentUrl('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">Open CV</a>
            <a className="button button-light" href={documentUrl('Certificate.pdf')} target="_blank" rel="noreferrer">View certificate</a>
          </div>
        </div>

        <div className="about-facts">
          <div><span>Education</span><strong>Professional Fashion Designing</strong><small>Skill in a Box, Delhi · 2025–2026</small></div>
          <div><span>Education</span><strong>Diploma in Handloom &amp; Textile Technology</strong><small>IIHT, Chhattisgarh · 2019–2021</small></div>
          <div><span>Skills</span><strong>Womenswear · Styling · Textile Surface</strong><small>Illustration · colour &amp; fabric · mood boards · garment detail</small></div>
          <div><span>Tools</span><strong>Adobe Illustrator &amp; Canva</strong><small>Basic proficiency</small></div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const heading = useReveal()
  const board = useReveal()
  const archive = useReveal()

  return (
    <section id="process" className="section process-section">
      <div ref={heading.ref} className={`section-heading ${heading.visible ? 'is-visible' : ''}`}>
        <span>04 — Research &amp; Process</span>
        <div><h2>From cultural research to material experiment.</h2><p>Research is treated as a practical design method — moving through colour, motif, textile, silhouette, manipulation, and documentation.</p></div>
      </div>

      <div ref={board.ref} className={`research-board ${board.visible ? 'is-visible' : ''}`}>
        <figure className="research-large">
          <img src={image('the-azure-hairloom-01.jpg')} alt="Azure Heirloom design and research board" loading="lazy" />
          <figcaption>Azure Heirloom — visual heritage, architecture, weaving &amp; garment development</figcaption>
        </figure>

        <div className="research-method">
          <span className="display-number">Design Methodology</span>
          <p>Research begins with heritage, craft, architecture, spirituality, colour and material reference before moving into moodboard construction, surface exploration, silhouette development, and garment documentation.</p>
          <div className="research-pair">
            <figure><img src={image('modern-duality.jpg')} alt="Modern Duality womenswear development board" loading="lazy"/><figcaption>Silhouette / form study</figcaption></figure>
            <figure><img src={image('fabric.jpg')} alt="Fabric and textile study" loading="lazy"/><figcaption>Material / textile study</figcaption></figure>
          </div>
        </div>

        <figure className="research-wide">
          <img src={image('textile-surface.jpg')} alt="Textile surface development board" loading="lazy" />
          <figcaption><span>Textile &amp; Surface Development / 2026</span><span>Shibori · Tie &amp; Dye · Surface Pattern</span></figcaption>
        </figure>

        <div className="process-stages">
          {[
            ['— I', 'Research', 'Cultural inquiry, heritage study, archival and material sourcing'],
            ['— II', 'Development', 'Sketching, colour story, moodboard and silhouette exploration'],
            ['— III', 'Material', 'Fabric selection, surface technique, embroidery and textile work'],
            ['— IV', 'Documentation', 'Front / side / back views, detail imagery and garment presentation'],
          ].map(([stage, label, description]) => (
            <div key={stage}><span>{stage}</span><strong>{label}</strong><p>{description}</p></div>
          ))}
        </div>
      </div>

      <div ref={archive.ref} className={`creative-archive ${archive.visible ? 'is-visible' : ''}`}>
        <div className="archive-heading"><span>Creative Archive</span><span>Additional Creative Work</span></div>
        <div className="archive-grid">
          {CREATIVE_ARCHIVE.map(item => (
            <article key={item.label}>
              <img src={image(item.image)} alt={item.label} loading="lazy" />
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const reveal = useReveal()
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-label"><span>05 — Contact</span></div>
        <div ref={reveal.ref} className={`contact-grid-wrap ${reveal.visible ? 'is-visible' : ''}`}>
          <div className="contact-copy">
            <h2>Let's make something <em>considered.</em></h2>
            <p>Available for entry-level fashion design, styling, textile, and garment design opportunities, internships, and collaborative enquiries.</p>
          </div>
          <div className="contact-links">
            <div><span>Email</span><a href="mailto:pv6264120@gmail.com">pv6264120@gmail.com ↗</a></div>
            <div><span>Phone</span><a href="tel:+917987014175">+91 79870 14175 ↗</a></div>
            <div><span>Location</span><p>Chhattisgarh, India</p></div>
          </div>
        </div>
        <footer className="site-footer">
          <span>Priyanka Vishwakarma</span>
          <span>Fashion · Textile · Design · 2026</span>
          <span>© 2026</span>
        </footer>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="app-shell">
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Process />
      <Contact />
    </main>
  )
}
