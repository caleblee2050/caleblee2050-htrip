# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript web application for an experiential learning project in Hongcheon, South Korea. It's designed to present strategic documents and proposals for alternative schools (서대협 - Seoul Alternative School Association), featuring a Gemini AI-powered itinerary generator.

**AI Studio Link:** https://ai.studio/apps/drive/1Tj_x99LiwvDdQtllpFvnGIM3nWrw-CEv

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (starts on http://0.0.0.0:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

The application requires a Gemini API key:
- Set `GEMINI_API_KEY` in `.env.local`
- The key is exposed to the client as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY` via Vite config

## Application Architecture

### View System (App.tsx)
The application has three distinct views controlled by a state machine:

1. **Public View** (`view === 'public'`)
   - Shows `ProposalContent` component only
   - Displays gear icon button to access login
   - Default landing page for schools/general users

2. **Login View** (`view === 'login'`)
   - Shows `LoginPage` component
   - Currently has hardcoded credentials (admin/test123)
   - Can cancel back to public view

3. **Admin View** (`view === 'admin'`)
   - Tab-based navigation between two content areas:
     - `internal` tab: Shows `InternalContent` (internal strategy documents)
     - `proposal` tab: Shows `ProposalContent` (school proposal content)
   - Logout button returns to public view

### Key Components

**InternalContent** (`components/InternalContent.tsx`)
- Internal strategy document for the business model
- Describes two revenue models:
  - Model A: "Contract Base" (Turnkey) - full package service
  - Model B: "Coordinator Base" (Commission) - coordination with commission from partners
- Analyzes target market (서대협), resources, and risks
- Only visible to authenticated admin users

**ProposalContent** (`components/ProposalContent.tsx`)
- Public-facing proposal for alternative schools
- Showcases 8+ experiential learning activities in Hongcheon
- Contains AI itinerary generator form that calls Gemini API
- Features sample schedule table (1박 2일 example)
- Describes two service options: All-in-One package vs. Custom coordination

**LoginPage** (`components/LoginPage.tsx`)
- Simple authentication UI
- Hardcoded credentials: username="admin", password="test123"
- No backend authentication - purely client-side check

### Services Layer

**geminiService.ts** (`services/geminiService.ts`)
- Single exported function: `generateItinerary(people, duration, theme)`
- Uses Google GenAI SDK (`@google/genai`) with model `gemini-2.5-flash`
- System prompt contains detailed information about 8 Hongcheon experiential learning resources:
  1. Coffee roasting & drip bag making ('홍홍이')
  2. Gold panning experience
  3. Hanok stay with traditional/multicultural education
  4. Museum tours (향토사료관, 생명건강과학관)
  5. Hongcheon 9 scenic spots seasonal tours
  6. Gari Mountain Sports Park
  7. Donkey Village (animal therapy, soap making)
  8. Traditional beverage/beer making ('농담')
- Returns Korean-language itinerary or error message

### TypeScript Configuration

- Path alias `@/*` maps to project root (configured in both tsconfig.json and vite.config.ts)
- Target: ES2022 with JSX support (react-jsx)
- Experimental decorators enabled
- Module resolution: bundler (Vite-optimized)

### Styling

- Uses Tailwind CSS via CDN (loaded in index.html)
- Custom utility classes: `animate-fadeIn`, `animate-spin`
- Color scheme: Blue/teal gradient for headers, various contextual colors for activity cards

## Important Context

- This is designed for Korean alternative schools with specific budget allocation deadlines (연말까지 소진)
- Target market: 70% small schools (~10 students), some with budgets like "7명이 1200만원"
- The business model revolves around either full-package services or coordination with local partners
- Gemini AI integration is a key differentiator for generating customized itineraries on-demand
