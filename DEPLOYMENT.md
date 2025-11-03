# Deployment Guide for Vercel

## Quick Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

### Option 2: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to your Vercel account
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Option 3: From Current Directory

If you're already in the portfolio directory:

```bash
cd /Users/satyaachanta/Documents/all-projects/portfolio
vercel --prod
```

## Environment Variables

No environment variables are required for this project!

## Post-Deployment

After deployment, your portfolio will be available at:
- `https://your-project-name.vercel.app`

You can add a custom domain in Vercel settings.

## Automatic Deployments

Once connected to GitHub, every push to the main branch will automatically deploy to production.

## Build Settings (Auto-Configured)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

All these are automatically detected by Vercel!
