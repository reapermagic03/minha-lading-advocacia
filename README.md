This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tailwind CSS

This project already uses Tailwind CSS v4 through:

- `app/globals.css` with `@import "tailwindcss";`
- `postcss.config.mjs` with `@tailwindcss/postcss`

Tailwind v4 does not use `tailwindcss init -p`. If you need to install it again, run the dependency install only and keep using the existing CSS/PostCSS setup.

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Crie conta:
👉 https://vercel.com
Suba seu projeto pro GitHub:
git init
git add .
git commit -m "landing pronta"
git branch -M main
git remote add origin https://github.com/seuusuario/seurepo.git
git push -u origin main
No Vercel:
Clique em "Add New Project"
Conecte seu GitHub
Selecione o repositório
Deploy automático:
Ele já detecta Next.js sozinho
Só clicar em Deploy
🌐 Resultado:

Você vai ter um link tipo:

https://seu-projeto.vercel.app

Se você subir na Vercel:

✅ Toda vez que você fizer isso:
git add .
git commit -m "ajuste"
git push

👉 A Vercel automaticamente:

faz um novo build
publica a atualização
atualiza o site em segundos
🔄 RESULTADO

Seu site:

https://seusite.vercel.app

Vai sendo atualizado em tempo real a cada mudança

🔥 VANTAGENS DISSO
Você não perde tempo buscando perfeição
Já pode começar a divulgar
Pode testar o que funciona (principalmente CTA)
Pode melhorar baseado em comportamento real