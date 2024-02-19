# mccc-preview

A Website for previewing [mccc 3D model](https://github.com/tuatmcc/mccc)

- **Cloudflare Pages** (@cloudflare/next-on-pages): Hosting Service
- **pnpm**: Node.js package manager
- **Next.js**: React Framework
- **React Three Fiber**: `Three.js` wrapper for React

## Why is this project written in JavaScript?

While Three.js lacks official TypeScript support, the community-maintained `@types/three` library does provide excellent type definitions.
However, its coverage isn't exhaustive, and many existing examples and documents use JavaScript.

## Setup

1. Install and Setup [mise](https://mise.jdx.dev/) or [volta](https://volta.sh), a JavaScript runtime manager.
2. `corepack up` to install pnpm according to `package.json`.
3. `pnpm install` to install dependencies.
4. `pnpm fetch-model` to clone the model's repository and move `*.gltf` to `public/models` (necessary for deployment)

## Development

- `pnpm dev` to start the development server at `localhost:3000`.
- `pnpm lint` to lint the code.
- `pnpm fmt` to format the code.

## Deployment

All deployment configuration is set in the Cloudflare dashboard.
Cloudflare will automatically detect bun.

- Build Settings
  - Build command: `pnpm build:cloudflare:pnpm`
  - Build directory: `.vercel/output/static`
- Environment Variables
    - `NODE_VERSION`: `20`
- Function Settings
  - flags: `nodejs_compat`

Copy Cloudflare's deploy webhook URL and set it to the model's github repository's webhook so that the model is automatically updated when the model's repository is updated.
