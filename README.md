# Teclis Scientific Website

This is a **Next.js 16** project built with **TypeScript**, **Tailwind CSS 4**, and **Shadcn/UI**. It features comprehensive internationalization (i18n) support using `next-intl` and integration with **Sanity CMS**.

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

2.  Set up environment variables:

    Create a `.env.local` file in the project root with the following variables:

    ```env
    # Sanity CMS
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

3.  Install dependencies:
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

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Shadcn/UI](https://ui.shadcn.com/) (Radix UI + Lucide Icons)
  - [Framer Motion](https://www.framer.com/motion/) / [GSAP](https://gsap.com/) (Animations)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Validation**: [Zod](https://zod.dev/)
- **Carousel**: Swiper / Embla
- **Analytics**: Vercel Analytics & Speed Insights

## 📂 Project Structure

```bash
├── sanity-studio/           # Standalone Sanity Studio application
│   └── studio-teclis/       # Sanity project configuration and schemas
├── src
│   ├── app
│   │   ├── [locale]/        # Localized routes (all main application pages)
│   │   │   ├── page.tsx     # Landing page
│   │   │   ├── layout.tsx   # Root layout for localized pages
│   │   │   ├── about/       # About page
│   │   │   ├── applications/# Application pages (by industry)
│   │   │   ├── careers/     # Careers page
│   │   │   ├── contact/     # Contact page
│   │   │   ├── legal/       # Legal pages (cookies, privacy, terms)
│   │   │   ├── news/        # News / blog listing and articles
│   │   │   ├── products/    # Product listing and detail pages
│   │   │   └── services/    # Services page
│   │   ├── api/             # API routes
│   │   ├── components/      # App-level components (layout, shared)
│   │   ├── hooks/           # App-level custom hooks
│   │   └── types/           # TypeScript type definitions
│   ├── components/
│   │   └── ui/              # Shadcn UI primitives
│   ├── i18n/                # Internationalization configuration
│   │   ├── request.ts       # Locale list and message loader
│   │   └── routing.ts       # next-intl routing and navigation helpers
│   ├── lib/                 # Utility functions and shared constants
│   ├── hooks/               # Global custom React hooks
│   ├── messages/            # Translation JSON files (en.json, fr.json, etc.)
│   ├── middleware.ts         # next-intl locale-detection middleware
│   └── index.css            # Global styles (Tailwind base + custom CSS)
├── public/                  # Static assets (images, fonts, PDFs)
├── check-i18n.cjs           # Script to check translation key parity across locales
├── next-intl.config.ts      # next-intl plugin configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.js        # PostCSS / Tailwind CSS 4 configuration
└── package.json
```

## 🌍 Internationalization (i18n)

This project supports 11 languages: English (`en`), French (`fr`), German (`de`), Spanish (`es`), Italian (`it`), Portuguese (`pt`), Japanese (`ja`), Korean (`ko`), Chinese (`zh`), Thai (`th`), and Vietnamese (`vi`).

- **Configuration**: `src/i18n/request.ts` defines the available locales and loads the correct message file per request.
- **Routing**: `src/i18n/routing.ts` and `src/middleware.ts` handle locale detection and URL-based routing.
- **Translations**: Translation files are located in `src/messages/{locale}.json`.

To add a new language:

1.  Add the locale code to the `locales` array in `src/i18n/request.ts`, `src/i18n/routing.ts`, and `next-intl.config.ts`.
2.  Add the locale to the `matcher` pattern in `src/middleware.ts`.
3.  Create a corresponding JSON file in `src/messages/` (e.g., `src/messages/nl.json`).

### Checking Translation Key Parity

To verify all locale files contain the same translation keys, run:

```bash
node check-i18n.cjs
```

### Scanning for New Translation Keys

```bash
npm run i18n:scan
```

## 🎨 Customization

### Styling

Global styles are defined in `src/index.css`. Tailwind CSS 4 utility classes are used throughout all components. The PostCSS configuration in `postcss.config.js` enables Tailwind processing.

### Components

UI components are largely based on Shadcn/UI. Primitives live in `src/app/components/ui`. Feature-specific components are located in `src/app/components/`.

### Content

- Static content is managed via translation files in `src/messages/`.
- Dynamic content is fetched from Sanity CMS (client configured in `src/sanity/client.ts`).

## 🏗 Sanity Studio

The Sanity CMS studio is a standalone app located in `sanity-studio/studio-teclis/`. To run it locally:

```bash
cd sanity-studio/studio-teclis
npm install
npm run dev
```

The studio will be available at [http://localhost:3333](http://localhost:3333). To deploy the studio to Sanity's hosting, run `npm run deploy` from the same directory.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server (after `build`) |
| `npm run lint` | Run ESLint across the project |
| `npm run i18n:scan` | Scan source files for new i18next translation keys |

## 🔗 TypeScript Path Aliases

The following path aliases are configured in `tsconfig.json`:

| Alias | Resolves to |
|---|---|
| `@/*` | `src/app/*` |
| `@App/*` | `src/app/*` |
| `@/i18n/*` | `src/i18n/*` |
| `@/components/*` | `src/app/components/*` |
| `@/lib/*` | `src/lib/*` |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary and unlicensed. All rights reserved.
