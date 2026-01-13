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

Site deploys to GitHub Pages via the `gh-pages` branch.

```bash
npm run build && npx ghp-import dist && git push origin gh-pages
```
