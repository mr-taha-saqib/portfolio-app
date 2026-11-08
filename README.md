# Taha Saqib: portfolio

Personal portfolio of Taha Saqib, Generative AI Engineer. Live at https://portfolio-app-two-lilac.vercel.app/

A static, dependency-free site: one `index.html`, one stylesheet, no client-side framework, so all
content is plain HTML that search engines, applicant-tracking systems and screen readers can read.

- `index.html`: all content, semantic landmarks, Open Graph tags and `Person` JSON-LD
- `src/styles.css`: styling (WCAG AA contrast, responsive, print styles)
- `public/`: favicon, social preview image, `robots.txt`, `sitemap.xml`, résumé PDF
- `vercel.json`: security headers and long-lived caching for hashed assets

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```
