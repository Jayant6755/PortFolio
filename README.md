# Cards Project

A small portfolio web app built with Vite, React, TypeScript and Tailwind — demo cards/components showcase.

## Features

- Clean, responsive card components
- Reusable UI primitives in `src/components/ui`
- TailwindCSS + TypeScript + Vite setup

## Tech Stack

- Framework: React + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS
- Tooling: ESLint, Sonner (toast), and other lightweight utilities

## Project Structure

- `src/` — application source
  - `components/` — UI components and atoms
  - `lib/` — utility helpers
  - `Main Page/` — page components (home, about, projects, contact)
  - `Pages/` — top-level routes
- `public/` — static assets (images)

## Getting Started

Prerequisites: Node.js (16+ recommended) and npm/yarn/pnpm.

Install dependencies:

```bash
cd cards-project
npm install
# or `pnpm install` / `yarn`
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Scripts

- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — locally preview production build
- `lint` — run ESLint (if configured)

## Customization

- Update site content in the `Main Page/` components (home.tsx, aboutme.tsx, projects.tsx, etc.).
- Replace images in `public/Pictures/` with your own assets.

## Contributing

Contributions are welcome. Open an issue or submit a pull request describing changes.

## License

This project is provided as-is. Add a license file if you want to specify reuse terms.

---

Made with ♥ — enjoy building your portfolio.
