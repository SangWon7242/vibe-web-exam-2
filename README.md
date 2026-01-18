# Project Summary: Growth Curriculum Page

## 1. Project Overview

**Project Name**: `my-growth-curriculum`
**Description**: A landing page for a 12-week intensive developer training course.
**Goal**: To convey professional trust and encourage enrollment through a clean, high-end "Monotone" design.

### Key Features

- **Vibe**: Trustworthy, Professional, Minimalist (Black & White).
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS v4, Framer Motion.
- **UX/UI**:
  - **Scroll Animations**: Roadmap items fade in sequentially using Framer Motion.
  - **Localization**: Mixed English (Headlines for impact) and Korean (Descriptions for clarity).
  - **Navigation**: Client-side routing with Next.js `<Link>`.

## 2. Prompt Strategy (Vibe Coding)

This project was built using the **"Vibe Coding"** methodology, which translates abstract user feelings into concrete technical implementations.

### Core Principles

1.  **Abstraction Layering**:
    - **User Input**: "I want a page that feels like a professional startup." (Vibe)
    - **AI Translation**: "Monotone color scheme, Sans-serif fonts, structured grid/timeline." (Tech)
2.  **Interactive Vibe Check**:
    - Instead of asking "Do you want React?", we ask "Do you want a 'calm' or 'energetic' feel?"
    - This allows non-technical users to make architectural decisions based on their vision.
3.  **One-Touch Scaffolding**:
    - Providing fully configured commands (e.g., `npx create-next-app ...`) to minimize setup friction.
4.  **Iterative Refinement**:
    - Starting with a strong MVP (Header, Hero, Roadmap) and refining based on specific feedback (Localization, Link refactoring).

## 3. Directory Structure

```
my-growth-curriculum/
├── app/
│   ├── layout.tsx       # Root layout with sticky Header
│   ├── page.tsx         # Main landing page assembly
│   └── globals.css      # Tailwind v4 configuration
├── components/
│   ├── header.tsx       # Navigation bar
│   ├── hero.tsx         # Main banner section
│   ├── roadmap.tsx      # Curriculum timeline with animation
│   └── cta.tsx          # Call to Action section
└── lib/
    └── utils.ts         # Utility functions (cn for class merging)
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
