# Thivahar Balasubramaniam — Portfolio Website

> **Organization**: Orbytes Global Solutions  
> **Owner**: Logaraj S  
> **Created at**: 2026-10-07  
> **Description**: Production-ready personal portfolio website for Thivahar Balasubramaniam (Data Analyst & Software Engineer).

---

## 🌟 Overview

A modern personal portfolio designed to turn recruiters and hiring managers into conversations. Built for a **Data Analyst & Software Engineer** with an M.Sc. in Data Science & Analytics and active production experience at **Orbitz Global**.

### Key Features
- **Design Aesthetic**: Dark navy palette (`#070b14` / `#0a0f1d`) with Electric Teal (`#14b8a6` / `#2dd4bf`) glow accents, glassmorphism cards, and dark/light mode toggle.
- **Visual Analytics**: Interactive **Recharts** visualizations directly embedded in case studies (model accuracy benchmark bar chart, workload variance reduction chart, econometric regression trend line).
- **Single-Source Data**: All textual content, links, project metrics, and contact configuration live in [`src/data/content.js`](./src/data/content.js).
- **Static & Fast**: Built with Vite and React for 90+ Lighthouse performance, zero backend dependencies.
- **Lead Capture**: Functional contact form ready for **Web3Forms** or **Formspree** with fallback to direct email (`thivaharbalasubramaniam@gmail.com`).

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── profile.jpg           # Real headshot image
│   ├── resume.pdf            # Downloadable ATS resume
│   └── hawaii-dashboard.png  # Tableau dashboard preview
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with section highlighter & theme toggle
│   │   ├── Hero.jsx          # Hero section with animated stat counters & CTA
│   │   ├── About.jsx         # Career narrative & education journey
│   │   ├── Experience.jsx    # Experience timeline (Orbitz Global & Inlighnx)
│   │   ├── Skills.jsx        # Categorized skills with animated progress bars
│   │   ├── Projects.jsx      # Case studies with interactive Recharts
│   │   ├── Education.jsx     # Degrees & coursework
│   │   ├── Certifications.jsx# Coursera & Forage badge cards
│   │   ├── Contact.jsx       # Working contact form & direct reach-out
│   │   ├── Footer.jsx        # Footer & scroll-to-top
│   │   └── Icons.jsx         # Clean SVG brand icons
│   ├── data/
│   │   └── content.js        # Single configuration file for all site copy & links
│   ├── App.jsx
│   ├── index.css             # Tailwind directives & glass utilities
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Building for Production

```bash
npm run build
```

This generates an optimized static distribution in the `dist/` directory. You can test the build locally with:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## ✏️ Customizing Content

To update your resume link, contact form endpoint, or project descriptions, edit only:
👉 [`src/data/content.js`](./src/data/content.js)
