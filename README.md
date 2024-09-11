This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Agenda

- Walkthrough of Next.js app and TODO's
- Why use an ORM?
- SQLite disclaimer
- Install Prisma `npm install prisma --save-dev`
- Initialize Prisma with --datasource-provider sqlite, go over Prisma folder and .env file
- Collaborate on a schema
- Run `npx prisma db push`
- Run `npx prisma studio`, disclaimer: we will use this to create data to avoid building a form
- Next.js Prisma instantiation bug
- Prisma client
- Fetching data
- Migrations
- Cons