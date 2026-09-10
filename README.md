# Priyanka Vishwakarma — Fashion Design Portfolio

A research-led editorial portfolio for Priyanka Vishwakarma, focused on womenswear, textile, surface development, styling and craft.

## Experience

The site is intentionally designed as a fashion studio archive rather than a generic portfolio grid. The visual hierarchy moves visitors through:

`LAND → UNDERSTAND → SEE WORK → STUDY PROCESS → VERIFY CREDENTIALS → CONTACT`

### Featured work

- **The Azure Heirloom** — heritage-led womenswear collection
- **Womenswear Design Series** — silhouette, drape, occasion and fusion studies
- **Textile & Surface Development** — tie-dye, shibori and material experiments
- **Creative Archive** — craft, styling, accessories and visual research

## Design system

- **Foundation:** warm paper + deep ink
- **Signature accent:** azure blue
- **Typography:** local Manrope for UI/body, serif italic accents for editorial moments
- **Grid:** 12-column desktop, 8-column tablet, 4-column mobile
- **Shape language:** restrained corners, hairline rules, minimal chrome
- **Motion:** subtle image crop, restrained reveal, reduced-motion support

## Structure

```text
/
├── index.html
├── projects/
│   ├── azure-heirloom.html
│   ├── womenswear.html
│   └── textile-surface.html
├── styles.css
├── script.js
└── assets/
    ├── images/
    ├── fonts/
    └── docs/
```

## Technical direction

The project is a lightweight static site suitable for GitHub Pages. Images use relative repository paths so the portfolio does not depend on another repository at runtime. Below-the-fold content is structured for lazy-loading and future responsive image derivatives.

## Accessibility

Semantic sections, keyboard-visible links, readable contrast, alternative text for portfolio imagery and `prefers-reduced-motion` handling are part of the baseline UI system.

## Content source

Portfolio assets include brand identity studies, project boards, material research, creative archive imagery, local fonts, Priyanka's resume and certificate.

## Deployment

Deploy the repository root as the GitHub Pages site using the repository's Pages configuration/workflow.
