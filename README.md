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

All you need is `node` and `pnpm`. You can install them as you like, but I recommend using `mise` and `corepack` for a consistent development environment.

1. (Optional) Install and Setup [mise](https://mise.jdx.dev/), a JavaScript runtime manager. (Another option is `volta`, `nodenv`, `nvm`, etc.)
2. (Optional) Setup corepack [corepack](https://github.com/nodejs/corepack), a package manager manager.
3. `corepack up` to install pnpm according to `package.json` settings.
4. `pnpm install` to install dependencies.
5. `pnpm fetch-model` (to clone the model's repository and move `*.gltf` to `public/models`)

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
