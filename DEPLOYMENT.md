# Deployment Guide

## Quick Deploy to Vercel (Recommended - 100% Free)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub (already done!)

2. Go to [vercel.com](https://vercel.com)

3. Sign up or log in with GitHub

4. Click "Add New Project"

5. Import your repository: `meru3m/seek-God-first`

6. Configure your project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

7. Click "Deploy"

8. Your app will be live in ~2 minutes! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

## Environment Variables (Optional)

If you add any API keys in the future (e.g., for AI-generated reflections), add them in Vercel:

1. Go to your project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add your variables

## Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## Post-Deployment

### Add Background Music

After deployment, you'll need to add a music file:

1. Clone your deployed repo locally
2. Add `calm-piano.mp3` to `/public/music/`
3. Push changes
4. Vercel will auto-deploy!

Free music sources:
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary/music)
- [Incompetech](https://incompetech.com/)

## Alternative Deployment Options

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create a new project
3. Connect to GitHub
4. Select repository
5. Framework preset: Next.js
6. Deploy!

## Monitoring & Analytics (Optional)

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Then add to `pages/_app.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard. Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to check

### Images Not Loading

Unsplash images might be blocked by adblockers. Consider:
- Adding fallback static images to `/public/images/`
- Using a different image service

### Music Not Playing

- Ensure `calm-piano.mp3` exists in `/public/music/`
- Check browser console for errors
- Some browsers block autoplay - user must interact first

## Updates

To update your deployed app:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel automatically redeploys!

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
