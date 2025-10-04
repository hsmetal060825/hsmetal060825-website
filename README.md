
# HS Metal 060825 — Website

Next.js 14 + Tailwind single page with bilingual projects and public images.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. On https://vercel.com → New Project → Import Repo → Framework: Next.js → Deploy.
3. Add your custom domain in the project → **Domains**.
4. Configure DNS at your registrar:
   - Apex (@) → A → 76.76.21.21
   - www → CNAME → cname.vercel-dns.com.
Vercel will provision HTTPS automatically.
