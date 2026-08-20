# Surabhi Mendiratta — Portfolio

A responsive personal portfolio built with Next.js-compatible Vinext, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It is configured for deployment through OpenAI Sites and can also be adapted for Vercel.

## Install and run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Production build

```bash
npm run build
npm run start
```

Run code-quality checks with:

```bash
npm run lint
```

## Edit portfolio content

All frequently updated personal content is centralized in `src/data/portfolio.ts`, including:

- name, title, and bio
- email, LinkedIn, and GitHub links
- technologies
- projects and case-study copy
- engineering principles
- volunteering and interests
- career timeline entries

Update that file instead of changing the page component whenever practical.

## Add your resume

Place your real PDF at:

```text
public/resume.pdf
```

The existing resume button already points there. No fake resume is included.

## Update contact links

Replace the placeholder `email`, `social.linkedin`, and `social.github` values in `src/data/portfolio.ts`.

## Project structure

```text
app/
  globals.css        Site-wide design system and responsive styles
  layout.tsx         Metadata, social preview, fonts, and root layout
  page.tsx           Portfolio sections and interactions
public/
  og.png             Social-sharing card
  resume.pdf         Add your real resume here
src/data/
  portfolio.ts       Central personal content and configuration
.openai/
  hosting.json       Sites deployment configuration
```

## Deploy to Vercel

This project uses the Sites Vinext starter for Cloudflare-compatible output. For Vercel, migrate the page, layout, global stylesheet, public assets, and `src/data/portfolio.ts` into a standard Next.js App Router project, install the same UI dependencies, then import the Git repository into Vercel. No environment variables are required.

## Connect a custom domain

In your hosting provider, add the custom domain to the project, then follow the provider's DNS instructions. This normally involves adding a CNAME or A record with your domain registrar. Allow time for DNS and HTTPS provisioning to complete.

## Environment variables

None are required. The portfolio is static and has no backend dependency.
