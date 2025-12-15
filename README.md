# Scorpion Junk Removal - Landing Page

A modern, mobile-first landing page for Scorpion Junk Removal, a junk hauling service in Bakersfield, CA.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Vercel** - Deployment platform

## Features

- Mobile-first responsive design
- Light theme optimized for local demographic
- Click-to-call and click-to-text CTAs
- Google Business Profile optimized
- Fast loading with Next.js Image optimization
- SEO-friendly metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS/Tailwind config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies
```

## Deployment

The site auto-deploys to Vercel on push to `main` branch.

```bash
git add -A
git commit -m "your changes"
git push origin main
```

## Business Information

- **Client:** Scorpion Junk Removal
- **Location:** Bakersfield, CA
- **Phone:** 661.444.7965
- **Hours:** 7 AM - 7 PM Daily
- **Services:** Residential, Commercial, Property Cleanouts, Demolition, Dumpster Rentals, Power Washing

## Links

- **Live Site:** Deployed on Vercel
- **Repository:** https://github.com/rahullalia/scorpion-junk-removal
- **Original Website:** https://scorpionjunkremoval.com/

---

Built by [RSL Media Hub](https://rslmediahub.com)
