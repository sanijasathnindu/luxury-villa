# Villa Aurelia

A production-ready luxury villa website built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Swiper, and shadcn/ui-style components.

## Highlights

- App Router architecture with SEO metadata and structured data
- Cinematic fullscreen hero with parallax motion
- Animated villa experience, feature, amenity, testimonial, and booking sections
- Interactive gallery with Radix Dialog lightbox
- Swiper-powered accommodation showcase
- Centralized content and image URL library in `src/lib/site-data.ts`
- Remote image optimization configured for Unsplash
- Mobile-first responsive layout and accessible controls

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Production

```bash
npm run build
npm run start
```

## Image Replacement

All current photography is royalty-free Unsplash-hosted imagery and is centralized in `src/lib/site-data.ts` under `imageLibrary`. Replace those URLs with owned media or CMS-provided assets when moving to a real villa brand.

## Content

Villa copy, navigation, features, amenities, rooms, testimonials, attractions, and schema data live in `src/lib/site-data.ts`.

## Deploy

The project is ready for Vercel, Netlify with Next support, or a Node hosting target that can run `next start`.
