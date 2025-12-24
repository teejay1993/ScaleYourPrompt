# AGENTS.md — ScaleYourPrompt (Prompt Builder Website)

## Goal
Build a simple, static website (no login) where a user fills small inputs and gets a ready, structured AI prompt.
No AI API calls are required: this app only *formats text*.

## Tech stack (do not change unless asked)
- Vite + React + TypeScript
- Tailwind CSS for styling
- No backend
- No database
- No auth

## Setup commands (run these)
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`
- Lint (if configured): `pnpm lint`

## Product requirements (must-have)
### Inputs (UI)
Create a single page with these fields:
1) Role (text)
2) Task (text)
3) Content (multi-line)
4) Reasoning (multi-line; “how to think”)
5) Output format (multi-line)
6) Stop condition (text or multi-line)

### Behavior
- Clicking **Generate** shows a final prompt on screen.
- Provide a **Copy** button that copies the final prompt to clipboard.
- Validation: Role + Task are required. If missing, disable Generate and show a small hint.
- If optional fields are empty, omit those sections from the final prompt.

### Final prompt format (deterministic)
Assemble the prompt exactly like:

You are: <ROLE>

Task:
<TASK>

Context:
<CONTENT>

Reasoning:
<REASONING>

Output format:
<OUTPUT_FORMAT>

Stop condition:
<STOP_CONDITION>

Rules:
- Follow the output format exactly.
- If information is missing, ask only the minimum necessary questions.

(Only include sections that have content.)

## UX requirements
- Keep it minimal and fast.
- Labels above inputs, placeholders inside inputs.
- Final prompt area should be clearly separated (card/box), scrollable, and selectable.
- Copy button should show “Copied” feedback for ~1 second.

## Project structure (preferred)
- `src/App.tsx` renders the page layout
- `src/lib/buildPrompt.ts` contains the prompt assembly logic + unit-testable pure function
- `src/components/` for UI components (InputField, TextAreaField, OutputPanel)

## Code style
- TypeScript strict, small functions, descriptive names.
- No over-engineering (no Redux, no heavy form libs unless asked).
- Prefer simple React state (`useState`) and a single source of truth.

## Boundaries (important)
- Do NOT add authentication, login, payments, databases, analytics, or server APIs.
- Do NOT call OpenAI or any LLM API.
- Do NOT add large dependencies without asking first.

## Definition of done (acceptance checklist)
- User can enter all fields and click Generate.
- Final prompt matches the specified format and omits empty sections.
- Copy button works in modern browsers.
- `pnpm dev` runs and the page loads without errors.
- `pnpm build` succeeds.


## Deployment (Netlify)

### Preferred deploy method
Use Netlify “New site from Git” (GitHub) so Netlify runs the build on every push.
Note: manual “drag & drop” deploys do NOT run a build command — only upload already-built files.

### Build settings (Vite)
- Build command: `pnpm build`
- Publish directory: `dist`

### pnpm requirements (important)
- Ensure `pnpm-lock.yaml` is committed.
- Pin pnpm version in package.json using:
  "packageManager": "pnpm@<version>"

### Node version (stability)
Add a `.nvmrc` file in repo root to pin Node (example: `22`).

### SPA routing (only if you use React Router later)
If client-side routes should work on refresh (e.g., /about), add an SPA fallback redirect:
- Either `public/_redirects` with: `/* /index.html 200`
- Or in `netlify.toml` via a [[redirects]] rule
