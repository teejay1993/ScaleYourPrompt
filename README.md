# ScaleYourPrompt

A minimal prompt builder that assembles structured prompts following Scalemill's framework. The app is a single-page React UI built with Vite, TypeScript, and Tailwind CSS—no backend or API calls.

## Features
- Collects Role, Task, Content, Reasoning, Output format, and Stop condition inputs.
- Role and Task are required; the Generate button stays disabled until both are filled and a helper hint explains why.
- Formats the final prompt exactly to spec, omitting empty sections and always including the rules block.
- Dedicated output area with scrolling, easy selection, and a Copy button that shows quick “Copied” feedback.

## Development
Use pnpm (version pinned in `package.json`). Node 22 is pinned via `.nvmrc`.

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # production build
pnpm preview   # preview the production build
pnpm lint      # optional lint check
```

## Deployment
The site is static. For Netlify, build with `pnpm build` and publish the `dist` directory. A SPA redirect is already configured in `netlify.toml`.
