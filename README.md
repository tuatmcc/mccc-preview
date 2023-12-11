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

1. Install [Volta](https://volta.sh/), a JavaScript runtime manager.
2. `volta install node` to install Node.js.
3. `volta install corepack` to install package-manager manager.
4. `corepack up` to install pnpm according to `package.json`.
5. `pnpm install` to install dependencies.
6. `pnpm prebuild` to clone the model's repository (necessary for deployment)

## Development

- `pnpm dev` to start the development server at `localhost:3000`.
- `pnpm lint` to lint the code.
- `pnpm fmt` to format the code.

## Deployment

All deployment configuration is set in the Cloudflare dashboard.
Cloudflare will automatically detect bun.

As a `prebuild` hook, it clones the model's repository and copy `mccc.gltf` into `public/modles/`.

- Build Settings
  - Build command: `bunx @cloudflare/next-on-pages@1`
  - Build directory: `.vercel/output/static`
- Environment Variables
    - `NODE_VERSION`: `20`
- Function Settings
  - flags: `nodejs_compat`

