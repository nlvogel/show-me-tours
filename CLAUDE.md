# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Show Me Tours is a NYC tour company website built with Next.js 15.3.4 using the App Router pattern. The site is configured for static export and features customer reviews, tour information, and a contact system.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Build and export as static site (main deployment method)

# Database Management
npx prisma generate  # Generate Prisma client after schema changes
npx prisma db push   # Push schema changes to PostgreSQL database
npx prisma studio    # Open Prisma Studio GUI for database management
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: JavaScript (with one TypeScript component in /components/Buttons)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Mixed approach - SCSS modules, CSS modules, and global styles
- **Deployment**: Static export via `next export`
- **Image CDN**: Multiple sources (local, images.showmetours.biz, Cloudinary, R2)

### Directory Structure
```
/app                      # Next.js App Router pages
  ├── about/             # About page
  ├── contact/           # Contact form page  
  ├── reviews/           # Reviews listing
  │   └── [name]/        # Individual review pages (dynamic routes)
  ├── rva2nyc/           # Special landing page for RVA to NYC route
  ├── css/               # Global SCSS variables and mixins
  └── styles/            # Page-specific styles

/components              # Reusable React components
  ├── HeroSections/      # Various hero section variations
  ├── ContactForm/       # Contact form implementation
  ├── Reviews/           # Review display components
  ├── Stars/             # Star rating component
  ├── Carousel/          # Image carousel
  └── Schema/            # JSON-LD structured data

/prisma                  # Database schema
/public/assets          # Static assets (images, fonts)
/utils                  # Utility functions
```

### Key Routes
- `/` - Homepage with tour information
- `/about` - Company information
- `/contact` - Contact form
- `/reviews` - Customer reviews listing
- `/reviews/[name]` - Individual review pages (ashlyn, danyelle, diana, diane, gail, jamie, jessica, katie, mechelle)
- `/rva2nyc` - Special landing page for Richmond to NYC tours

### Environment Variables
Required in `.env`:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key  
- S3 configuration variables (for Prisma schema, though not actively used)

### Image Handling
Images are served from multiple configured sources:
1. Local assets: `/public/assets/images/`
2. Primary CDN: `https://images.showmetours.biz/`
3. External sources: Cloudinary, R2, and other domains configured in next.config.js

Note: Image optimization is disabled for static export compatibility.

### Database Schema
The Prisma schema includes models for a blog system (Posts, Categories, Tags, Users, Images) though this functionality is not currently implemented in the frontend. The schema appears to be from a boilerplate and isn't actively used by the site.

### Component Patterns
- Components use client-side rendering where needed (marked with 'use client')
- Heavy use of component composition (e.g., HeroSections with multiple variations)
- Props-based customization for reusability
- Reviews system with individual pages for each customer review
- Star rating displays using the Stars component

### SEO Implementation
- Comprehensive metadata exported from each page
- Sitemap.xml and robots.txt configured
- JSON-LD structured data for LocalBusiness schema
- Open Graph tags for social sharing
- Review-specific metadata for individual review pages

### Styling Approach
The project uses a mixed styling approach:
- SCSS modules for component-specific styles
- Global SCSS for variables and mixins (in /app/css)
- CSS modules in some components
- Style organization varies by component age/origin

### Static Export Configuration
- Configured in next.config.js with `output: 'export'`
- Images remain unoptimized for static compatibility
- All pages are statically generated at build time
- No server-side features or API routes

### Netlify CMS Configuration
A Netlify CMS admin interface is configured at `/public/admin/` but appears to be unused. It includes collections for blog posts and songs that don't align with the current site functionality.