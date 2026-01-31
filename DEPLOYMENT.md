# Skwad Website Deployment Guide

## Quick Start

The website is ready to deploy! It's built with Astro, React, and Tailwind CSS v4.

**Current Configuration:** The site is configured for deployment at `https://bonamy.fr/skwad/` with base path `/skwad`.

## Configuring Base Path

The site is currently configured for subdirectory deployment. To change this:

### For Root Domain Deployment (e.g., `https://skwad.com/`)

Edit `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://skwad.com',
  base: '/',  // or remove this line entirely
  // ...
});
```

### For Subdirectory Deployment (e.g., `https://example.com/skwad/`)

Edit `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://example.com',
  base: '/skwad',
  // ...
});
```

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:4321 (dev server ignores base path)

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

Visit http://localhost:4321/skwad (with base path applied)

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Connect to Vercel at https://vercel.com
3. Import the repository
4. Vercel will auto-detect Astro and deploy

### Option 3: Manual Deploy

```bash
npm run build
# Upload dist/ folder to any static hosting
```

## Deploy to Netlify

```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

Or use the Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Deploy to GitHub Pages

Add to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Environment Variables

None required! The site is fully static.

## Custom Domain

After deploying to Vercel/Netlify:

1. Add your custom domain in the dashboard
2. Update DNS records as instructed
3. SSL certificates are auto-provisioned

## Performance

The site is optimized for performance:
- Static generation (no server required)
- Lazy-loaded React components with `client:visible`
- Optimized images
- Minimal JavaScript
- Fast CDN delivery

Build size: ~200KB (gzipped: ~60KB)

## Support

For issues with the website, check:
- Build logs for errors
- Browser console for runtime issues
- Astro docs: https://astro.build
