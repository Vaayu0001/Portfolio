# Adarsh Singh Portfolio

Premium, deploy-ready portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- ESLint and Prettier
- Vercel deployment target

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Commands

```bash
npm run build
npm run lint
npm run format:check
npm run test
```

## Content Updates

Replace placeholders in:

- `content/profile.ts`
- `content/experience.ts`
- `content/certifications.ts`

Do not add mobile number, Class 10 marks, Class 12 marks, or CGPA.

Replace `public/resume.pdf` with a sanitized resume PDF before publishing.

## Deployment

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Keep the framework preset as Next.js.
4. Set `NEXT_PUBLIC_SITE_URL` if you want to override the default URL.
5. Deploy.
