# IMBIBE AI — Marketing Website

**Domain:** www.imbibeai.io

## Overview

Marketing website for IMBIBE AI — the B2B beverage marketplace powered by AI. Built with React + Vite. Single-page application with the following sections:

- **Hero** — Main value proposition with CTA
- **Features** — 6 platform capabilities
- **How It Works** — 4-step onboarding flow
- **Two-Sided Marketplace** — Operator + Supplier portal overview
- **Plans** — Three tiers (Cosmo / Martini / Manhattan) without pricing shown
- **About** — Platform story, mission, and vision
- **Request a Demo** — Contact form (needs backend integration)
- **Login Modal** — Gated login form (shows error — connect to auth system)
- **Footer**

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool
- **No CSS framework** — All styles are inline (easy to refactor to Tailwind/CSS modules)
- **Google Fonts** — DM Sans + Playfair Display (loaded via CDN in the component)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Option A: Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project → Select the repo
3. Vercel auto-detects Vite — click Deploy
4. In Vercel dashboard → Settings → Domains → Add `imbibeai.io` and `www.imbibeai.io`
5. Update your domain's DNS:
   - Add an A record pointing to `76.76.21.21`
   - Add a CNAME for `www` pointing to `cname.vercel-dns.com`

### Option B: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add New Site → Import from Git
3. Build command: `npm run build` / Publish directory: `dist`
4. In Domain Settings → Add custom domain `www.imbibeai.io`
5. Follow Netlify's DNS instructions

### Option C: Manual (any static host)

```bash
npm run build
# Upload the contents of /dist to any static hosting (S3, Cloudflare Pages, etc.)
```

## Post-Deployment TODO

### Backend Integration
- [ ] **Demo Request Form** — Currently client-side only. Connect to:
  - Email service (SendGrid, Mailgun, etc.) to send submissions to your team
  - Or a form backend (Formspree, Basin, Typeform, HubSpot)
  - Or your own API endpoint
- [ ] **Login** — Currently shows an error on all attempts. Connect to your auth system (Auth0, Firebase Auth, Supabase, custom) once the platform is ready

### SEO & Analytics
- [ ] Add Google Analytics / Mixpanel / Plausible tracking
- [ ] Add sitemap.xml and robots.txt
- [ ] Add Open Graph image (og:image meta tag)
- [ ] Submit to Google Search Console

### Optional Enhancements
- [ ] Add mobile responsive breakpoints (currently optimized for desktop)
- [ ] Add page load animations (Framer Motion)
- [ ] Add cookie consent banner if required
- [ ] Set up email capture to a CRM (HubSpot, Salesforce)

## File Structure

```
imbibeai-deploy/
├── index.html          # Entry HTML with meta tags & SEO
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite build configuration
├── vercel.json         # Vercel deployment config
├── netlify.toml        # Netlify deployment config
├── README.md           # This file
├── public/
│   └── favicon.svg     # IMBIBE AI favicon
└── src/
    ├── main.jsx        # React entry point
    └── App.jsx         # Complete website (all components)
```

## Brand Colors

| Name       | Hex       | Usage                    |
|------------|-----------|--------------------------|
| Navy       | `#0B1F3A` | Primary background/text  |
| Teal       | `#2DD4BF` | Primary accent/CTAs      |
| Teal Dark  | `#14B8A6` | Gradient endpoints       |
| Gold       | `#F59E0B` | Supplier accent          |
| White      | `#FFFFFF` | Backgrounds              |
| Off White  | `#F8FAFC` | Section backgrounds      |

## Fonts

- **Display:** Playfair Display (headings)
- **Body:** DM Sans (everything else)

---

© 2026 Imbibe AI, Inc. CONFIDENTIAL
