# Website for Pangbourne and District Volunteer Centre (Pangbourne Volunteers)

## About

The website is designed to provide information for people who require
assistance (eg. getting to medical appointments) and for volunteers
who are willing and able to help.

## Website

This website is built using a modern full-stack [template](https://github.com/cloudflare/templates/tree/main/react-router-hono-fullstack-template) powered by [Cloudflare Workers](https://workers.cloudflare.com/), using [Hono](https://hono.dev/) web application framework, [React Router](https://reactrouter.com/) for frontend routing, and [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components styled with [Tailwind CSS](https://tailwindcss.com/).

Built with the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/) for optimized static asset delivery and seamless local development. React is configured in single-page app (SPA) mode via Workers.

## Getting started

Clone the repository to your local hard drive.

Open the cloned repository using a development IDE editor (eg. [vscode](https://code.visualstudio.com)) and
using a command line interface run the following commands:

```bash
# Install library dependencies.
npm install
# Run the react router
npm run dev
```

In the browser, visit the following url: http://localhost:5173/

You can now edit files and the react router will automatically
display changes in the browser.

## How to deploy changes

The Cloudflare GitHub App is installed on this repository and it
automatically deploys your code to Cloudflare when you merge a pull
request to your GitHub repository.

Deployment steps:

- Commit your changes to a local development branch.
- Push branch changes to the github (remote repository server).
- In your browser, login to github, open the repository, click on the
  "Pull requests" tab and create a new pull request to merge your
  development branch to the main branch.
- The merge to the main branch will prompt the Cloudflare GitHub App
  to deploy your changes to Cloudflare

## Resources

- 🧩 [Hono on Cloudflare Workers](https://hono.dev/docs/getting-started/cloudflare-workers)
- 📦 [Vite Plugin for Cloudflare](https://developers.cloudflare.com/workers/vite-plugin/)
- 🛠 [Wrangler CLI reference](https://developers.cloudflare.com/workers/wrangler/)
- 🎨 [shadcn/ui](https://ui.shadcn.com)
- 💨 [Tailwind CSS Documentation](https://tailwindcss.com/)
- 🔀 [React Router Docs](https://reactrouter.com/)

### Cloudflare

- [Build apps with Workers](https://developers.cloudflare.com/workers/)
- [Static assets with Workers](https://developers.cloudflare.com/workers/static-assets/)
- [Cache/CDN plans](https://developers.cloudflare.com/cache/plans/)
- [Pricing](https://developers.cloudflare.com/workers/platform/pricing/)
  - Free tier:
    - 100,000 requests per day
    - 10 milliseconds of CPU time per invocation
- [Wrangler CLI to manage Worker](https://developers.cloudflare.com/workers/wrangler/)

### Styles and effects

- [Padding](https://tailwindcss.com/docs/padding)
- [Color chart](https://tailwindcss.com/docs/colors)
- [Background effects](https://prismic.io/blog/css-background-effects)

- [Basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)
- [Gradients in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients)

### SEO

[Manage search engine crawlers](https://www.cloudflare.com/learning/bots/what-is-robots-txt/)


### Hosting

[Create website from GitHub repo](https://docs.github.com/en/pages)
