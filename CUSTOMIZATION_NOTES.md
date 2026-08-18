# Rongheng Qi Academic Homepage

This draft was prepared from `Rongheng_Qi_CV_Aug2026.pdf`.

## CV-based content

- English and Chinese names, portrait and contact details
- About Me and research interests
- Education
- Patents
- Research experience
- Work experience
- Technical and language skills

## Template placeholders still present

The current CV does not provide material for the following sections, so they
retain examples from the original template:

- News
- Publications
- Working Papers
- Projects
- Awards & Grants
- Teaching

The draft banner identifies these sections for visitors. Replace the example
arrays in `src/data.js` when real content is available, then set
`demoNotice: false` in `src/site.config.js`.

The Google Scholar link currently points to the Scholar homepage because no
profile URL was provided. Replace it with the personal profile URL when known.

## Typography

The website uses the template's original Source Serif 4 typeface, bundled and
self-hosted through Fontsource. The Chinese name uses a tiny Noto Serif SC
subset so its visual character matches the Latin text.

## Local development

```bash
npm install
npm run dev
```

Before publishing:

```bash
npm run lint
npm run build
```

## GitHub Pages

The site is configured for:

`https://ronghengqi.github.io/academic-homepage/`

In GitHub, choose **Settings > Pages > Source > GitHub Actions**, then push the
project to the `main` branch. If the repository name or domain changes, update
`url` and `base` in `src/site.config.js`.
