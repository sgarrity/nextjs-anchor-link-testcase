This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

See https://github.com/vercel/next.js/issues/75072

To Reproduce

1. Run the simple create-next-app example at https://github.com/sgarrity/nextjs-anchor-link-testcase
1. Click on the "Anchor Example" link (or manually add a #example fragment at the end of the home page URL
1. Click the "Go to Foobar" link (to /foobar)
1. Click the browser Back button

Note how the URL shows the home URL with the fragment (http://localhost:3000/#anchor) but the Foobar (/foobar) page is still rendered in the browser, not the home page as intended.
