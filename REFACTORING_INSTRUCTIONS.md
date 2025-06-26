# Show Me Tours - TypeScript & Payload CMS Refactoring Instructions

## Project Overview

This document contains detailed instructions for refactoring the Show Me Tours website from a Next.js JavaScript application to a TypeScript-based Next.js application integrated with Payload CMS, using Tailwind CSS v4 for styling and MongoDB for the database.

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript (strict mode)
- **CMS**: Payload CMS 3.0+
- **Database**: MongoDB (local)
- **Storage**: Cloudflare R2 (via @payloadcms/storage-s3)
- **Styling**: Tailwind CSS v4
- **SEO**: @payloadcms/plugin-seo
- **Forms**: @payloadcms/plugin-form-builder

## Project Structure

```
show-me-tours-payload/
├── src/
│   ├── app/
│   │   ├── (frontend)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── reviews/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── rva2nyc/
│   │   │   │   └── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── (payload)/
│   │       ├── admin/
│   │       │   └── [[...segments]]/
│   │       │       └── page.tsx
│   │       └── api/
│   │           └── [...slug]/
│   │               └── route.ts
│   ├── blocks/
│   │   ├── Hero/
│   │   │   ├── Component.tsx
│   │   │   └── config.ts
│   │   ├── Content/
│   │   ├── Gallery/
│   │   ├── ReviewsBlock/
│   │   ├── Plan/
│   │   ├── Carousel/
│   │   └── FormBlock/
│   ├── collections/
│   │   ├── Pages.ts
│   │   ├── Reviews.ts
│   │   ├── Media.ts
│   │   ├── Forms.ts
│   │   └── FormSubmissions.ts
│   ├── globals/
│   │   ├── Header.ts
│   │   ├── Footer.ts
│   │   └── Settings.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Stars.tsx
│   │   └── RenderBlocks.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── getPayload.ts
│   ├── payload.config.ts
│   └── payload-types.ts
├── public/
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── .env.local
```

## Detailed Implementation Instructions

### Phase 1: Project Setup

#### 1.1 Create New Branch
```bash
cd "/Users/nick/Desktop/Business/Websites/Show Me Tours/show-me-tours"
git checkout -b feature/typescript-payload-refactor
```

#### 1.2 Initialize Next.js TypeScript Project
Create a new directory for the refactored project:
```bash
cd ..
npx create-next-app@latest show-me-tours-payload --typescript --tailwind --app --no-src-dir=false --import-alias="@/*"
```

#### 1.3 Install Payload CMS and Dependencies
```bash
cd show-me-tours-payload
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-lexical
npm install @payloadcms/plugin-seo @payloadcms/storage-s3 @payloadcms/plugin-form-builder
npm install -D @types/node
```

#### 1.4 Configure Tailwind CSS v4
Update `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

#### 1.5 Environment Configuration
Create `.env.local`:
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/show-me-tours
DATABASE_URI=mongodb://localhost:27017/show-me-tours

# Payload
PAYLOAD_SECRET=your-secure-secret-here

# Cloudflare R2
R2_BUCKET_NAME=show-me-tours
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Email (for forms)
RESEND_API_KEY=your-resend-api-key
```

### Phase 2: Payload CMS Configuration

#### 2.1 Main Payload Config
Create `src/payload.config.ts`:
```typescript
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { s3Storage } from '@payloadcms/storage-s3'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

import { Pages } from './collections/Pages'
import { Reviews } from './collections/Reviews'
import { Media } from './collections/Media'
import { Forms } from './collections/Forms'
import { FormSubmissions } from './collections/FormSubmissions'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { Settings } from './globals/Settings'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Pages, Reviews, Media, Forms, FormSubmissions],
  globals: [Header, Footer, Settings],
  editor: lexicalEditor(),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    seoPlugin({
      collections: ['pages', 'reviews'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Show Me Tours - ${doc?.title || 'NYC Tour Experts'}`,
      generateDescription: ({ doc }) => doc?.excerpt || doc?.description,
      generateURL: ({ doc, collectionSlug }) => {
        if (collectionSlug === 'reviews') {
          return `${process.env.NEXT_PUBLIC_SERVER_URL}/reviews/${doc?.slug}`
        }
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/${doc?.slug || ''}`
      },
      tabbedUI: true,
    }),
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          generateFileURL: ({ filename }) => 
            `https://images.showmetours.biz/media/${filename}`,
        },
      },
      bucket: process.env.R2_BUCKET_NAME!,
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID!,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
        endpoint: process.env.R2_ENDPOINT!,
        region: 'auto',
        forcePathStyle: true,
      },
    }),
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
      },
      formOverrides: {
        fields: [
          {
            name: 'requiresBooking',
            type: 'checkbox',
            label: 'This is a booking inquiry',
          },
        ],
      },
    }),
  ],
})
```

#### 2.2 Collections Setup

**Pages Collection** (`src/collections/Pages.ts`):
```typescript
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [], // Will be populated with block configs
            },
          ],
        },
      ],
    },
  ],
}
```

**Reviews Collection** (`src/collections/Reviews.ts`):
```typescript
import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'featured', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      required: true,
    },
    {
      name: 'reviewContent',
      type: 'richText',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Carousel Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
```

### Phase 3: Content Migration

#### 3.1 Review Data
The existing reviews to migrate:
1. Ashlyn - 5 stars
2. Danyelle - 5 stars
3. Diana - 5 stars
4. Diane - 5 stars
5. Gail - 5 stars
6. Jamie - 5 stars
7. Jessica - 5 stars
8. Katie - 5 stars
9. Mechelle - 5 stars

Each review has:
- Name
- Rating (all 5 stars)
- Review content
- Multiple carousel images

#### 3.2 Page Structure
Pages to create:
- Home (/)
- About (/about)
- Contact (/contact)
- Reviews (/reviews)
- RVA2NYC (/rva2nyc)

### Phase 4: Frontend Components

#### 4.1 Layout Component
Create `src/app/(frontend)/layout.tsx`:
```typescript
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

#### 4.2 Dynamic Page Renderer
Create `src/app/(frontend)/[slug]/page.tsx`:
```typescript
import { getPayload } from '@/lib/getPayload'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function Page({ params }: { params: { slug: string } }) {
  const payload = await getPayload()
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  if (!page.docs[0]) {
    notFound()
  }

  return <RenderBlocks blocks={page.docs[0].layout} />
}
```

### Phase 5: Styling Migration

#### 5.1 Convert SCSS to Tailwind
Map existing styles:
- `.hero-section` → `className="relative h-screen bg-cover bg-center"`
- `.card` → `className="bg-white rounded-lg shadow-md p-6"`
- `.button` → `className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"`

#### 5.2 Component Styling
Use Tailwind utilities with semantic class names:
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
    {title}
  </h1>
</div>
```

### Phase 6: Deployment

#### 6.1 Build Configuration
Update `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['images.showmetours.biz'],
  },
}
```

#### 6.2 Production Environment
Set production environment variables on hosting platform.

## Migration Checklist

This checklist is organized by phases with specific tasks for each step of the migration process.

## Todo List for Show Me Tours Refactoring

### 🚀 Setup Phase (High Priority)
1. **Create new branch** 'feature/typescript-payload-refactor' from main
2. **Initialize new Next.js TypeScript project** with Tailwind in parent directory
3. **Install Payload CMS** and all required plugins (MongoDB, SEO, S3, Form Builder)
4. **Configure Tailwind CSS v4** with custom theme
5. **Set up environment variables** (.env.local) with MongoDB and R2 credentials

### 🏗️ CMS Configuration (High Priority)
6. **Create main payload.config.ts** with all plugins configured
7. **Create Pages collection** with SEO fields
8. **Create Reviews collection** with image carousel support
9. **Create Media collection** with R2 storage configuration
10. **Set up Forms and FormSubmissions** collections (Medium)
11. **Create Header, Footer, and Settings** globals (Medium)

### 🧩 Block Components (Medium Priority)
12. **Build Hero block** component and config
13. **Build Content, Gallery, and Carousel** blocks
14. **Build ReviewsBlock and Plan** blocks
15. **Build FormBlock** with form builder integration

### 📦 Content Migration (High Priority)
16. **Export and prepare** existing page content for migration
17. **Migrate 9 reviews** with content and ratings
18. **Upload all carousel images** to R2 storage
19. **Create page entries** in CMS (Home, About, Contact, Reviews, RVA2NYC)

### 💻 Frontend Development (High/Medium Priority)
20. **Create app router layout** with Navbar and Footer components
21. **Build dynamic page renderer** for CMS pages
22. **Create review listing** and detail pages
23. **Convert all components** to TypeScript with Tailwind styling (Medium)
24. **Implement contact form** with email notifications (Medium)

### ✅ Testing & Deployment (Low Priority)
25. **Test all pages** and navigation
26. **Validate SEO metadata** on all pages
27. **Test form submissions** and email delivery
28. **Configure production** build settings
29. **Deploy to staging** environment
30. **Final review** and production deployment