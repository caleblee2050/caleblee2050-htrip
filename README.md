<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Tj_x99LiwvDdQtllpFvnGIM3nWrw-CEv

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. Push your code to GitHub repository
2. Import the project in Vercel dashboard
3. Add environment variable in Vercel project settings:
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
4. Deploy

The project is configured with `vercel.json` for automatic deployment.
