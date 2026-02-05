# Labs Site (Next.js)

Minimal team site + project index + logbook.

## Dev

```bash
npm install
npm run dev
```

## Structure

- `app/` — Next.js App Router pages
- `content/log/` — Markdown log posts with frontmatter
- `content/projects.json` — Project cards

## Writing a post

Create `content/log/YYYY-MM-DD-slug.md`:

```md
---
title: "Arc Provenance: Phase 0 quality run"
date: "2026-02-05"
tags: ["arc", "provenance"]
---

What shipped...
```
