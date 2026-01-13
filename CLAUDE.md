# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/website built with Astro using the Volks-Typo theme. The site uses Markdown for content and deploys to GitHub Pages.

## Common Commands

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# Deploy to GitHub Pages (auto-runs on commit via post-commit hook)
npm run build && npx ghp-import dist && git push origin gh-pages
```

## Architecture

- **src/content/blog/** - Markdown blog posts with YAML frontmatter
- **src/components/** - Astro components (Layout, Header, Footer, Sidebar)
- **src/pages/** - Page routes (index, blog, about, categories, contact)
- **src/config.ts** - Site configuration (title, author, social links)
- **src/styles/global.css** - Global CSS with dark mode support
- **public/** - Static assets (CNAME, favicon, images)
- **dist/** - Generated static site (gitignored)

## Configuration

Key settings in `src/config.ts`:
- Site title and description
- Author name and bio
- Social links (GitHub, Twitter, LinkedIn)
- Site URL

## Content Format

Blog posts use YAML frontmatter:
```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
categories: ["Category"]
tags: ["tag1", "tag2"]
---
```

Required: `title`, `date`
Optional: `excerpt`, `categories`, `tags`, `image`, `draft`
