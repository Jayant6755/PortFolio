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
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
