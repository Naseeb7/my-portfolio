# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 15 app using TypeScript and the App Router. Source code lives in `src/`:
- `src/app/` for routes, layouts, metadata, and API handlers such as `src/app/api/contact/route.ts`
- `src/components/` for reusable UI sections and shared components
- `src/data/` for JSON content used by pages
- `src/lib/` for utilities and integrations, including `mongodb.ts` and SEO helpers
- `src/models/` for database models
- `public/` for static assets

Keep route-specific logic close to the route, and move reusable UI or helpers into `src/components/` or `src/lib/`.

## Build, Test, and Development Commands
Use the npm scripts defined in `package.json`:
- `npm run dev` starts the local development server
- `npm run build` creates a production build and checks for compile-time issues
- `npm start` runs the production server after a build
- `npm run lint` runs Next.js ESLint checks

There is no dedicated automated test suite in this repository yet.

## Coding Style & Naming Conventions
Follow the existing TypeScript and Next.js conventions:
- Use 2-space indentation and semicolon-free formatting where the codebase already follows it
- Prefer `PascalCase` for React components and `camelCase` for variables, functions, and hooks
- Name route files by Next.js convention, for example `page.tsx`, `layout.tsx`, and `route.ts`
- Keep component files focused and colocate related UI pieces under the relevant folder

ESLint is configured through `next/core-web-vitals` and `next/typescript`; run `npm run lint` before submitting changes.

## Testing Guidelines
No test framework is currently configured. When adding tests, place them near the code they cover or in a clear `__tests__/` folder and use descriptive names like `ContactForm.test.tsx`. Until then, validate changes with `npm run lint` and `npm run build`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative messages with a brief scope, such as `fix-seo-metadata-and-sitemap` or `Updated resume`. Keep commits focused and descriptive.

Pull requests should include:
- A short summary of the change
- Linked issue or task, if available
- Screenshots or recordings for UI updates
- Notes about environment or content changes, especially if `.env.local` or MongoDB-related behavior is affected

## Security & Configuration Tips
Do not commit secrets from `.env.local`. Review changes to `src/lib/mongodb.ts` and the contact API carefully, since they may depend on runtime environment variables.
