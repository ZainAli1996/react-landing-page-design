# 🚀 React Landing Page Design

A modern, responsive, and clean landing page UI built using **React.js** and **TypeScript** — originally designed for a furniture website, but easily customizable for any business or portfolio.

🔗 **Live Website**: [https://single-page-website.web.app/](https://single-page-website.web.app/)

![Landing Page Screenshot](https://github.com/ZainAli1996/react-landing-page-design/assets/57337241/2fba2329-7513-4050-91e6-f80dfd43550d)

---

## ✨ Features

- Responsive across all devices
- Built with **React** + **TypeScript**
- Reusable and clean component structure
- Global and component-specific CSS styling
- Firebase deployment ready

---

## 🛠️ Tech Stack

- React.js
- TypeScript
- CSS
- Firebase Hosting

---

## 📁 Folder Structure

```bash
app/
├── layout.tsx                  # Main layout for the application
├── page.tsx                    # Homepage
├── about/page.tsx              # About page
├── authors/[id]/page.tsx       # Dynamic author page (for individual authors)
├── authors/[id]/loading.tsx    # Loading skeleton for dynamic author pages
├── contact/page.tsx            # Contact page
├── posts/[id]/page.tsx         # Individual blog post detail page
├── privacy-policy/page.tsx     # Privacy Policy page
├── not-found.ts                # Custom 404 error page
├── globals.css                 # Global CSS for consistent styling across the app
├── style.css                   # Custom CSS for specific design customizations
├── fonts/                      # Custom font assets
│   ├── WorkSans-Regular.ttf
│   ├── WorkSans-Medium.ttf
│   ├── WorkSans-SemiBold.ttf
│   ├── WorkSans-Bold.ttf
└── favicon.ico                 # Favicon for the website

components/
├── Header.tsx                  # Header component with navigation
├── Footer.tsx                  # Footer component with site information
├── FirstSection.tsx            # First section of the homepage
├── SecondSection.tsx           # Second section of the homepage
├── ThirdSection.tsx            # Third section of the homepage

public/
├── images/                     # Static image assets
│   ├── logo-dark.png           # Dark logo version
│   └── logo-light.png          # Light logo version
