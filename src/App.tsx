import { useEffect, useState } from 'react'

const ASSET = 'https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets/assets'
const img = (file: string) => `${ASSET}/images/${file}`
const doc = (file: string) => `${ASSET}/docs/${file}`

type Project = {
  index: string
  kicker: string
  title: string
  description: string
  details: string[]
  images: string[]
  alts: string[]
}

const PROJECTS: Record<string, Project> = {
  azure: {
    index: '01', kicker: 'Collection / Azure Heirloom', title: 'Azure Heirloom',
    description: 'A womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.',
    details: [
      'Palette: blue, ivory, gold, and related tones.',
      'Research translated through woven references, embroidery, decorative borders, and embellished details.',
      'Full-look documentation includes front, side, and back views with close-up finishing references.',
    ],
    images: ['the-azure-hairloom-01.jpg','the-azure-hairloom-02.jpg','the-azure-hairloom-03.jpg','the-azure-hairloom-04.jpg','the-azure-hairloom-05.jpg','the-azure-hairloom-06.jpg','the-azure-hairloom-07.jpg'],
    alts: ['Azure Heirloom board 01','Azure Heirloom board 02','Azure Heirloom board 03','Azure Heirloom board 04','Azure Heirloom board 05','Azure Heirloom board 06','Azure Heirloom board 07'],
  },
  womenswear: {
    index: '02', kicker: 'Design series / Womenswear', title: 'Womenswear Design Series',
    description: 'Seven womenswear design concepts spanning contemporary, occasion, evening, and fusion-inspired silhouettes.',
    details: [
      'Design vocabulary includes draping, layered silhouettes, cut-outs, gathered details, statement sleeves, fitted forms, and flowing garments.',
      'Supporting boards cover fabric details, colour palettes, construction references, and inspiration.',
      'Presented through front, side, and back-view fashion development.',
    ],
    images: ['aurelia.jpg','rayaa.jpg','modern-duality.jpg','refiend-contrast.jpg','the-amaranthine-form.jpg','rangrezz-01.jpg','the-royal-blue-garden.jpg','rangrezz-02.jpg','rangrezz-03.jpg','rangrezz-04.jpg','rangrezz-05.jpg'],
    alts: ['Aurelia womenswear concept','Rayaa womenswear concept','Modern Duality womenswear concept','Refined Contrast womenswear concept','The Amaranthine Form womenswear concept','Rangrezz concept 01','The Royal Blue Garden concept','Rangrezz concept 02','Rangrezz concept 03','Rangrezz concept 04','Rangrezz concept 05'],
  },
  textile: {
    index: '03', kicker: 'Textile / Surface development', title: 'Textile & Surface Development',
    description: 'A focused exploration of tie-and-dye and supporting textile research, connecting surface decisions with outfit direction.',
    details: [
      'Four tie-and-dye directions: diagonal stripe, shibori horizontal pattern, curved line, and diamond shibori pattern.',
      'Documented pattern, texture, and visual effects alongside proposed outfit applications.',
      'Supporting research includes fabric swatches, manipulation studies, and colour-story development.',
    ],
    images: ['textile-surface.jpg','fabric.jpg','manipulations.jpg','colour-story.jpg'],
    alts: ['Textile Surface Development board','Fabric Swatches board','Pintucks and Manipulations board','Colour Story board'],
  },
  creative: {
    index: '04', kicker: 'Archive / Additional creative work', title: 'Surface, Styling & Visual Research',
    description: 'Supporting creative work that broadens the design practice across material experiments, styling research, and image-led exploration.',
    details: [
      'Fabric painting, patchwork, and beadwork embroidery.',
      'Fashion accessory research and styling boards covering traditional and western styles.',
      'Additional concept boards expand the visual research archive.',
    ],
    images: ['additional-work.jpg','accessories-style-comparison.jpg','colarge.jpg'],
    alts: ['Additional Creative Work board','Accessories Style Comparison board','Rooted in Radiance concept board'],
  },
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('no-scroll') }
  }, [onClose])

  return (
    <div className="modal is-open" aria-hidden="false">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-topline"><span>{project.kicker}</span><button className="modal-close" onClick={onClose}>Close ×</button></div>
        <div className="modal-content">
          <div className="modal-copy">
            <p className="section-kicker">{project.index}</p>
            <h2 id="modal-title">{project.title}</h2>
            <p>{project.description}</p>
            <div className="modal-list">{project.details.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
          <div className="modal-gallery">
            {project.images.map((file, i) => <img key={file} className={`gallery-image ${i === 0 ? 'full' : ''}`} src={img(file)} alt={project.alts[i] || project.title} loading={i > 1 ? 'lazy' : 'eager'} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const project = active ? PROJECTS[active] : null

  const go = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Priyanka Vishwakarma home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark">PV</span>
          <span className="wordmark-name">Priyanka Vishwakarma</span>
        </a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
        <nav className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cv" href={doc('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">CV ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Fashion × Textile × Design</p>
            <h1>Rooted in heritage.<br /><em>Designed for tomorrow.</em></h1>
            <p className="hero-intro">Priyanka Vishwakarma is a fashion design fresher exploring womenswear, textile surfaces, styling, and detail-led visual storytelling.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">View selected work</a><a className="text-link" href="#about">Read profile <span>↓</span></a></div>
          </div>
          <figure className="hero-logo-frame">
            <img src={img('logo-priyanka.jpg')} alt="Priyanka Vishwakarma monogram and wordmark" />
            <figcaption>Personal identity system / 2026</figcaption>
          </figure>
        </section>

        <section className="statement section-pad rule-top">
          <p className="section-kicker">01 / Practice</p>
          <div className="statement-grid"><h2>Design through <em>material, memory, and form.</em></h2><p>Her portfolio connects traditional textile references with contemporary womenswear ideas — moving from colour and research into surface, silhouette, styling, and garment detail.</p></div>
        </section>

        <section id="work" className="work section-pad rule-top">
          <div className="section-head"><div><p className="section-kicker">02 / Selected work</p><h2>Portfolio / 2026</h2></div><p className="section-note">Explore the boards as a visual case-study archive.</p></div>

          <article className="project project-featured"><button className="project-visual" aria-label="Open Azure Heirloom Collection" onClick={() => setActive('azure')}><img src={img('the-azure-hairloom-07.jpg')} alt="Azure Heirloom womenswear collection board" loading="lazy" /></button><div className="project-meta"><div><span className="project-index">01</span><span className="project-tag">Collection</span></div><h3>Azure Heirloom</h3><p>Womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.</p><button className="inline-button" data-open="azure" onClick={() => setActive('azure')}>Open case study ↗</button></div></article>

          <div className="project-grid">
            <article className="project project-card"><button className="project-visual" aria-label="Open Womenswear Design Series" onClick={() => setActive('womenswear')}><img src={img('modern-duality.jpg')} alt="Modern Duality womenswear board" loading="lazy" /></button><div className="project-meta"><div><span className="project-index">02</span><span className="project-tag">Design series</span></div><h3>Womenswear Design Series</h3><p>Seven concepts across contemporary, occasion, evening, and fusion-inspired silhouettes.</p><button className="inline-button" onClick={() => setActive('womenswear')}>Open case study ↗</button></div></article>
            <article className="project project-card"><button className="project-visual" aria-label="Open Textile and Surface Development" onClick={() => setActive('textile')}><img src={img('textile-surface.jpg')} alt="Textile and surface development board" loading="lazy" /></button><div className="project-meta"><div><span className="project-index">03</span><span className="project-tag">Textile</span></div><h3>Textile &amp; Surface Development</h3><p>Four tie-and-dye directions translated into pattern, texture, and outfit proposals.</p><button className="inline-button" onClick={() => setActive('textile')}>Open case study ↗</button></div></article>
          </div>

          <article className="project project-wide"><button className="project-visual" aria-label="Open Additional Creative Work" onClick={() => setActive('creative')}><img src={img('additional-work.jpg')} alt="Additional creative work board" loading="lazy" /></button><div className="project-meta"><div><span className="project-index">04</span><span className="project-tag">Additional creative work</span></div><h3>Surface, styling &amp; visual research</h3><p>Fabric painting, patchwork, beadwork embroidery, accessory research, and supporting image-making.</p><button className="inline-button" onClick={() => setActive('creative')}>Open archive ↗</button></div></article>
        </section>

        <section id="about" className="about section-pad rule-top">
          <div className="section-head"><div><p className="section-kicker">03 / About</p><h2>A considered beginning.</h2></div></div>
          <div className="about-grid"><div className="about-copy"><p className="lead">Creative and detail-oriented Fashion Design fresher with a Professional Fashion Designing diploma and a Diploma in Handloom and Textile Technology.</p><p>Her portfolio demonstrates womenswear design, fashion illustration, textile and surface development, styling, colour stories, mood boards, fabric selection, and garment detailing.</p><p>She is seeking an entry-level opportunity across Fashion Design, Fashion Styling, Textile, or Garment Design.</p><div className="about-actions"><a className="button button-dark" href={doc('Priyanka_Vishwakarma_Resume.pdf')} target="_blank" rel="noreferrer">Open CV</a><a className="button button-light" href={doc('Certificate.pdf')} target="_blank" rel="noreferrer">View certificate</a></div></div><div className="about-facts"><div className="fact"><span>Education</span><strong>Professional Fashion Designing</strong><small>Skill in a Box, Delhi · 2025–2026</small></div><div className="fact"><span>Education</span><strong>Diploma in Handloom &amp; Textile Technology</strong><small>IIHT, Chhattisgarh · 2019–2021</small></div><div className="fact"><span>Core strengths</span><strong>Womenswear / Styling / Textile Surface</strong><small>Illustration · fabric &amp; colour · mood boards · garment details</small></div><div className="fact"><span>Tools</span><strong>Adobe Illustrator &amp; Canva</strong><small>Basic proficiency</small></div></div></div>
        </section>

        <section className="brand-study section-pad rule-top"><div className="brand-copy"><div><p className="section-kicker">04 / Identity study</p><h2>The portfolio identity follows the same design language.</h2></div><p>Rooted in heritage, the identity system balances a display serif with Manrope and carries a restrained editorial palette.</p></div><div className="brand-grid"><img src={img('brand-primary.jpg')} alt="Primary Priyanka Vishwakarma identity board" loading="lazy"/><img src={img('brand-typography.jpg')} alt="Priyanka Vishwakarma typography board" loading="lazy"/><img src={img('brand-palette.jpg')} alt="Priyanka Vishwakarma colour palette board" loading="lazy"/></div></section>

        <section id="contact" className="contact section-pad rule-top"><p className="section-kicker">05 / Contact</p><div className="contact-grid"><div><h2>Let’s make something <em>considered.</em></h2><p>For entry-level opportunities, collaborations, internships, or fashion and textile projects.</p></div><div className="contact-links"><a href="mailto:pv6264120@gmail.com">pv6264120@gmail.com ↗</a><a href="tel:+917987014175">+91 79870 14175 ↗</a><span>Chhattisgarh, India</span></div></div></section>
      </main>
      <footer className="site-footer section-pad rule-top"><span>Priyanka Vishwakarma</span><span>Fashion × Textile × Design · 2026</span></footer>
      {project && <Modal project={project} onClose={() => setActive(null)} />}
    </div>
  )
}
