# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/website built with Pelican, a static site generator written in Python. The site uses Markdown for content and the "middle" theme.

## Common Commands

```bash
# Install dependencies (uses uv)
uv sync

# Generate site
make html

# Serve locally at http://localhost:8000
make serve

# Development server with auto-regeneration
make devserver

# Stop development server
make stopserver

# Generate for production (uses publishconf.py)
make publish

# Deploy to GitHub Pages
make github

# Deploy via rsync/SSH
make rsync_upload
```

## Architecture

- **content/** - Markdown blog posts
- **output/** - Generated static site (gitignored)
- **themes/middle/** - Pelican theme with Jinja2 templates
- **pelicanconf.py** - Development configuration
- **publishconf.py** - Production configuration (imports from pelicanconf.py, overrides SITEURL and enables feeds)

## Configuration

Key settings in `pelicanconf.py`:
- Theme: `themes/middle`
- Content path: `content/`
- Theme-specific variables: GITHUB_USERNAME, TWITTER_USERNAME, SHOW_ARCHIVES, GOOGLE_ANALYTICS
