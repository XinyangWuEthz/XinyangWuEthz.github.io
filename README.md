# Xinyang Wu Portfolio

Clean Astro portfolio for an early-career Software Engineer focused on AI infrastructure, backend systems, Go/Kubernetes, and production ML/LLM platforms.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs locally and serves the Astro site.

## Build

```bash
npm run build
npm run preview
```

The static output is written to `dist/`.

## Deployment

This repository includes `.github/workflows/deploy.yml` for GitHub Pages deployment through GitHub Actions.

1. Create a GitHub repository named `XinyangWuEthz.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main` or run the workflow manually.

## Resume

The homepage links to `public/resume.pdf`. Replace that file when the resume changes.

## Update Projects

Edit `src/data/projects.ts` to update project cards.

## Update Experience

Edit `src/data/experience.ts` to update experience cards.

## Update Technical Focus

Edit `src/data/skills.ts`. Keep this section narrow: backend systems, AI infrastructure, cloud native / DevOps, and observability.

## Add Notes

Add a new `.mdx` file under `src/content/notes/` with frontmatter:

```md
---
title: "Title"
date: 2026-06-06
summary: "Short practical summary."
tags: ["Tag"]
---
```

Notes are listed automatically on `/notes/` and on the homepage.
