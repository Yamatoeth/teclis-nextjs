# Teclis Nexus Project

This is a **Next.js 15** project built with **TypeScript**, **Tailwind CSS 4**, and **Shadcn/UI**. It features comprehensive internationalization (i18n) support using `next-intl` and integration with **Sanity CMS**.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, or bun

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Shadcn/UI](https://ui.shadcn.com/) (Radix UI + Lucide Icons)
  - Framer Motion (Animations)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Validation**: Zod
- **Carousel**: Swiper / Embla

## 📂 Project Structure

```bash
├── src
│   ├── app
│   │   ├── [locale]       # Localized routes (Main application logic)
│   │   │   ├── page.tsx   # Landing page
│   │   │   ├── layout.tsx # Root layout for localized pages
│   │   │   └── ...        # Other routes (about, contact, etc.)
│   │   ├── api            # API routes
│   │   └── types          # TypeScript type definitions
│   ├── components         # Reusable UI components
│   │   ├── ui             # Shadcn UI primitives
│   │   └── ...            # Feature-specific components
│   ├── i18n               # Internationalization configuration
│   ├── messages           # Translation JSON files (en.json, fr.json, etc.)
│   ├── lib                # Utility functions and libraries
│   └── hooks              # Custom React hooks
├── public                 # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration (if applicable)
└── package.json
```

## 🌍 Internationalization (i18n)

This project supports multiple languages.

- **Configuration**: `src/i18n/request.ts` defines the available locales (`en`, `fr`, `de`, etc.).
- **Routing**: `src/i18n/routing.ts` (implied) and `src/middleware.ts` handle locale detection and routing.
- **Translations**: Translation files are located in `src/messages/{locale}.json`.

To add a new language:

1.  Add the locale code to `src/i18n/request.ts`.
2.  Update `src/middleware.ts` matcher if necessary.
3.  Create a corresponding JSON file in `src/messages/`.

## 🎨 Customization

### Styling

Global styles are defined in `src/index.css` (or `src/app/globals.css`). Tailwind classes are used throughout components.

### Components

UI components are largely based on Shadcn/UI. You can find them in `src/components/ui`.

### Content

- Static content is managed via translation files (`src/messages/`).
- Dynamic content is fetched from Sanity CMS (configured in `src/sanity/`).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[Add License Information Here]
