# Scorpion Junk Removal - Landing Page

## 🔗 Workspace Resources

**Parent Workspace:** `/Users/rahullalia/Developer/`

**See parent CLAUDE.md for:**
- MCP Integrations (Notion, Google Calendar, Google Drive)
- Google OAuth credentials: `3-Resources/client_secret_*.json`
- Workspace naming conventions (camelCase requirement)
- PARA organization method
- Other projects and shared resources

**Quick Access:**
- Notion MCP: SSE transport at `https://mcp.notion.com/sse`
- Task database: "Lalia's Ultimate Tasks" in Notion
- Google Calendar tokens: `~/.config/google-calendar-mcp/tokens.json`
- Google Drive tokens: `~/.config/google-drive-mcp/tokens.json`
- Timezone: PST (Pacific Standard Time)
- Setup docs: `3-Resources/claude-notion-calendar-setup.md`

**When you need to:**
- Access Notion databases → Use MCP Notion tools (already configured)
- Create calendar events → Use MCP Google Calendar tools
- Work with Google Docs/Sheets → Use MCP Google Drive tools
- Reference other projects → Check `/Users/rahullalia/Developer/1-Projects/`
- Find credentials → Check `/Users/rahullalia/Developer/3-Resources/`

---

## Project Overview

**Client:** Scorpion Junk Removal
**Type:** Client Landing Page (RSL Media Hub client work)
**Status:** Live and deployed

A mobile-first, light-themed landing page for a junk removal service in Bakersfield, CA. Optimized for the local demographic (older population, families, suburban).

## Business Details

- **Business Name:** Scorpion Junk Removal
- **Phone:** 661.444.7965
- **Email:** Dominique@scorpionjunkremoval.com
- **Address:** 800 Grant Dr, Bakersfield, CA 93308
- **Hours:** 7 AM - 7 PM, Monday through Sunday
- **Rating:** 4.7 stars (27 Google reviews)
- **Original Website:** https://scorpionjunkremoval.com/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Repository:** https://github.com/rahullalia/scorpion-junk-removal

## Project Structure

```
scorpionJunkRemoval/
├── app/
│   ├── globals.css      # Tailwind imports + custom animations
│   ├── layout.tsx       # Root layout with metadata & fonts
│   └── page.tsx         # Main landing page component
├── public/              # Static assets
├── next.config.ts       # Next.js config (remote images)
├── postcss.config.mjs   # Tailwind v4 PostCSS setup
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Key Design Decisions

### Light Theme (vs Dark)
Chosen for Bakersfield demographic:
- Older population prefers cleaner, brighter designs
- Families and suburban residents
- Higher readability and trust signals

### Mobile-First Approach
- Many visitors come from Google Business Profile (mobile)
- Stacked CTAs on mobile, side-by-side on desktop
- Touch-friendly button sizes
- Responsive text scaling (text-sm sm:text-base pattern)

### CTA Strategy
- **Primary:** Phone call (tel: links)
- **Secondary:** Text message (sms: links) for photo quotes
- No contact form - phone/text is faster for this service type

## Services Featured

1. Residential Junk Removal
2. Commercial Cleanouts
3. Property Cleanouts (estates, foreclosures)
4. Demolition Services
5. Dumpster Rentals
6. Power Washing

## Service Areas

Bakersfield, Oildale, Shafter, Wasco, Taft, Arvin, Delano (Kern County)

## Images

All images sourced from client's existing website:
- Logo: `logo-transparent-png.png`
- Work photos: `IMG_6107-1024x768.jpg`, `IMG_6111-768x1024.jpg`
- Testimonial headshots from WordPress uploads

Configured in `next.config.ts`:
```typescript
images: {
  remotePatterns: [{
    protocol: "https",
    hostname: "scorpionjunkremoval.com",
    pathname: "/wp-content/uploads/**",
  }],
}
```

## Deployment

- **Platform:** Vercel (auto-deploy on push to main)
- **Git:** GitHub - `rahullalia/scorpion-junk-removal`
- **Branch:** main

To deploy changes:
```bash
npm run build
git add -A && git commit -m "description"
git push origin main
# Vercel auto-deploys
```

## Common Tasks

### Update Phone Number
Search for `6614447965` in `app/page.tsx` and update all instances.

### Add New Service
Add to the services array in `app/page.tsx` (around line 178).

### Change Business Hours
Update in multiple places:
- Trust indicators section
- Final CTA section
- Footer

### Add Testimonial
Add to testimonials array in `app/page.tsx` with:
- name, text, role, image URL

## Tailwind CSS v4 Notes

This project uses Tailwind CSS v4 which requires:
- `@tailwindcss/postcss` plugin (not `tailwindcss`)
- `@import "tailwindcss"` in CSS (not `@tailwind` directives)

PostCSS config:
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## MCP Use Cases for This Project

- **Notion:** Track client feedback and revision requests
- **Google Calendar:** Schedule client review calls
- **Google Drive:** Store client assets, create reports

---

**Project Location:** `/Users/rahullalia/Developer/1-Projects/rslClients/scorpionJunkRemoval/`
**Project Type:** Client deliverable (time-bound, 1-Project)
