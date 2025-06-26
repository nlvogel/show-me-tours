# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.4 application for Show Me Tours, a tour company website featuring static site generation, customer reviews, and a contact system. The project uses the App Router pattern and exports as a static site.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build the project
npm run build

# Start production server
npm start

# Export as static site (builds then exports)
npm run export

# Database commands
npx prisma generate     # Generate Prisma client
npx prisma db push      # Push schema changes to database
npx prisma studio       # Open Prisma Studio GUI
```

## Architecture and Structure

### Tech Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: SCSS modules, CSS modules, global styles
- **Static Export**: Configured for static site generation

### Key Directories
- `/app` - Next.js App Router pages and routes
- `/components` - Reusable React components
- `/public/assets` - Static assets (images, fonts)
- `/prisma` - Database schema and migrations
- `/utils` - Utility functions

### Routing Structure
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact form page
- `/reviews` - Reviews listing
- `/reviews/[name]` - Individual review pages (ashlyn, danyelle, diana, etc.)
- `/rva2nyc` - Special landing page for RVA to NYC route

### Database Schema (Prisma)
The database includes models for content management:
- **Post**: Blog posts with rich content, metadata, and featured flags
- **Category**: Post categorization
- **Tag**: Post tagging system
- **User**: Authors for posts
- **Image**: Image metadata storage

### Environment Variables
Required in `.env`:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- S3 configuration variables for file storage

### Component Patterns
- Components use prop-based customization
- Heavy use of reusable components (HeroSections, ContactForm, Reviews)
- Client-side components marked with 'use client' directive
- Components imported from `/components` directory

### SEO and Metadata
- Each page exports comprehensive metadata
- JSON-LD structured data for LocalBusiness schema
- Sitemap and robots.txt included
- Open Graph tags configured

### Image Handling
- Images served from multiple sources:
  - Local: `/public/assets/images/`
  - CDN: `https://images.showmetours.biz/`
  - Cloudinary and other remote patterns configured in next.config.js
- Image optimization disabled for static export

### Admin Interface
- Netlify CMS configured at `/admin`
- Git Gateway backend
- Collections for blog posts and songs