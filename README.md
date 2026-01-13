[![pages-build-deployment](https://github.com/RyanGladstone/ryangladstone.com/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/RyanGladstone/ryangladstone.com/actions/workflows/pages/pages-build-deployment)

# ryangladstone.com

Personal website and blog built with [Astro](https://astro.build).

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Manual site deploys to GitHub Pages via the `gh-pages` branch.

```bash
npm run build && npx gh-pages -d dist
```
