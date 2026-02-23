# 🎓 Seatifyai – Admissions Landing Page

> An AI-powered college admissions platform landing page built with React, Vite, and TailwindCSS.

---

## 📌 Overview

**Seatifyai** is a modern, responsive landing page for an AI-driven college admissions platform. It guides students through the admissions journey — from understanding what Seatify offers, identifying their entry path, building trust, and taking action — with a clean, professional UI.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [TailwindCSS v3](https://tailwindcss.com/) | Utility-first Styling |
| [Shadcn/UI](https://ui.shadcn.com/) | UI Component Library |
| [Radix UI](https://www.radix-ui.com/) | Headless UI Primitives |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Router DOM](https://reactrouter.com/) | Client-side Routing |
| [TanStack Query](https://tanstack.com/query) | Data Fetching |
| [React Hook Form](https://react-hook-form.com/) | Form Management |
| [Zod](https://zod.dev/) | Schema Validation |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 📁 Project Structure

```
seatifyai-admissions-hub/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── components/
│   │   ├── landing/         # Landing page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── NewHero.tsx
│   │   │   ├── WhatIsSection.tsx
│   │   │   ├── ProblemsSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── EntryPathsSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── WhoIsForSection.tsx
│   │   │   ├── WhyChooseSection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Shadcn/UI reusable components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Root app with routing
│   └── main.tsx             # Entry point
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🏠 Landing Page Sections

| Section | Description |
|---|---|
| **Navbar** | Responsive navigation bar with CTA |
| **Hero** | Full-screen hero with headline, subtext & CTA |
| **What Is Seatify** | Introduction to the platform |
| **Problems Section** | Pain points students face in admissions |
| **How It Works** | Step-by-step process walkthrough |
| **Features Section** | Key platform features & capabilities |
| **Entry Paths** | Different admission routes available |
| **Trust Section** | Social proof, stats & testimonials |
| **Who Is It For** | Target audience breakdown |
| **Why Choose Seatify** | Differentiators vs. alternatives |
| **Final CTA** | Call-to-action to sign up |
| **Footer** | Links, contact info & branding |

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Shanmu-iHub/Seatifyai-Landingpage.git

# Navigate into the project directory
cd Seatifyai-Landingpage

# Install dependencies
npm install
# or
bun install
```

### Running Locally

```bash
npm run dev
# or
bun dev
```

Visit [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view the app.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

---

## 🎨 Design Highlights

- ✅ Fully responsive across mobile, tablet & desktop
- ✅ Smooth animations with Framer Motion
- ✅ Dark/Light mode support via `next-themes`
- ✅ Accessible UI components via Radix UI
- ✅ Consistent design system using Shadcn/UI + TailwindCSS

---

## 🤝 Contributing

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is private and maintained by **[Shanmu-iHub](https://github.com/Shanmu-iHub)**.

---

<p align="center">Built with ❤️ for Seatifyai</p>

---

## 📸 Screenshots

> *Add screenshots of the landing page here.*

You can place images in the `public/` folder and reference them like:

```markdown
![Landing Page](/public/landing.png)
```

---

## 📦 Deployment

### Deploy to Vercel

1. Sign up at https://vercel.com and import the repository.
2. Vercel will automatically detect the Vite project and set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Click **Deploy** – Vercel will build and host your site.

### Deploy to Netlify

1. Create a new site from Git on https://app.netlify.com.
2. Choose the repository and set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy.

### Self‑Hosted (Docker)

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t seatifyai .
docker run -p 8080:80 seatifyai
```

---

## 📧 Contact

For questions or contributions, please open an issue or contact the maintainer at **[Shanmu-iHub](https://github.com/Shanmu-iHub)**.
