# Yamba AI

A fun AI driven human portrait scoring app.

## Project Structure

```
├── app/                    # Next.js app directory (routing, pages, layouts, API)
│   ├── api/                # API endpoints (Next.js Route Handlers)
│   │   ├── evaluate/       # /api/evaluate endpoint
│   │   │   └── route.ts
│   ├── image-upload/       # Image upload and evaluation page
│   │   └── page.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── components/             # (Empty) Place for shared React components
├── public/                 # Static files (SVGs, images, etc.)
├── .env.local              # Environment variables (not committed)
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
└── ...                     # Other config and lock files
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

To use the OpenAI integration, create a `.env.local` file in the project root with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4-vision-preview
# Optionally, customize the prompt:
OPENAI_PROMPT=Describe this image in 10 words.
```

Restart the development server after editing environment variables.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
