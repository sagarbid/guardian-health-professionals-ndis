# Guardian Health Professionals (NDIS) — Website

Production-ready multi-page Next.js 15 (App Router) website with TypeScript, Tailwind, MDX content, OpenAI-powered copy rewriting, and a Resend-backed contact form.

## Pages

- `/` Home
- `/about` About
- `/services` Services index
- `/services/[slug]` Service detail (MDX + AI rewrite panel)
- `/blog` Blog index (MDX)
- `/blog/[slug]` Blog post (MDX)
- `/contact` Contact + map + form
- `/privacy`, `/terms` Templates

## Content (MDX)

Edit or add files in:

- `content/services/*.mdx`
- `content/blog/*.mdx`

## Local development

1. Install dependencies
   - `npm ci`
2. Copy env file
   - `copy .env.example .env.local`
3. Start the dev server
   - `npm run dev`

## Environment variables

See `.env.example`:

- `RESEND_API_KEY` enables the contact form (`/api/contact`)
- `OPENAI_API_KEY` enables AI rewriting (`/api/ai/rewrite`)
- Contentful variables are optional (stub in `src/lib/contentful.ts`)

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Notes for production compliance

- Replace sample stats/testimonials with verified, consented content.
- Confirm service descriptions align with your registration scope and policies.
- Keep disclaimers and emergency messaging accurate for your organisation.

