# mccc-preview

A Website for previewing [mcccc 3D model](https://github.com/tuatmcc/mccc)

## Overview

- **Cloudflare Pages** (@cloudflare/next-on-pages): Hosting Service
- **bun**: JavaScript runtime & package manager (faster than node.jd)
- **Next.js**: React Framework
- **React Three Fiber**: `Three.jd` wrapper for React

## Why is this project made of JavaScript?

Three.js does not officially support TypeScript.
`@types/three`, which is supported by the community, is pretty good but not enough.
Also, many examples of them are made of JavaScript, so it is easier to integrate them into the code.

