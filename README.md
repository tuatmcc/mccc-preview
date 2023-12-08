# mccc-preview

A Website for previewing [mcccc 3D model](https://github.com/tuatmcc/mccc)

- **Cloudflare Pages** (@cloudflare/next-on-pages): Hosting Service
- **bun**: JavaScript runtime & package manager (faster than Node.js)
- **Next.js**: React Framework
- **React Three Fiber**: `Three.js` wrapper for React

## Why is this project made of JavaScript?

While Three.js lacks official TypeScript support, the community-maintained `@types/three` library does provide excellent type definitions. However, its coverage isn't exhaustive, and many existing examples use JavaScript.

## Usage

```sh
bun i -y # install dependencies with yarn-style lockfile
```

```sh
bun dev # create development server on localhost:3000
```

```sh
bun lint # run code style check using @biomejs/biome
```

```sh
bun fmt # run format and code fix with @biomejs/biome
```

## Deployment

All deployment configuration is set in the Cloudflare dashboard.
Cloudflare will automatically detect bun.

- Build Settings
  - Build command: `bunx @cloudflare/next-on-pages@1`
  - Build directory: `.vercel/output/static`
- Function Settings
  - flags: `nodejs_compat`

