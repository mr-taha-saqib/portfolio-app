# Taha Saqib: Portfolio

Personal portfolio of Taha Saqib, Generative AI Engineer and full-stack developer.
Live site: https://portfolio-app-two-lilac.vercel.app/

An interactive landing page with a 3D hero scene, animated sections, a work timeline,
project cards linking to their source repositories, testimonials and a contact form.

## Stack

React 18, Vite 4, Three.js (`@react-three/fiber`, `@react-three/drei`), GSAP ScrollTrigger,
Framer Motion, Tailwind CSS and EmailJS for the contact form.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/constants/index.js` | All site content: services, skills, experience, projects, testimonials |
| `src/components/` | Page sections (Hero, About, Experience, Tech, Works, Feedbacks, Contact, Footer) |
| `src/components/canvas/` | Three.js scenes (computer, skill balls, Earth, stars) |
| `src/assets/projects/` | Project preview images shown in the project cards |
| `public/` | 3D models, favicon set, social preview image, résumé PDF, `robots.txt`, `sitemap.xml` |

## Run locally

```bash
npm install
cp .env.example .env   # add your EmailJS credentials
npm run dev
```

Build for production with `npm run build` and preview with `npm run preview`.

## Deployment

The `main` branch deploys to Vercel. Set the `VITE_APP_EMAILJS_*` variables in the Vercel project
settings, and `VITE_BASE_PATH=/` so assets resolve from the site root.

## Updating content

Edit `src/constants/index.js`. To add images to a project card, import them there and list them in
the project's `images` array; the card cycles through them.
