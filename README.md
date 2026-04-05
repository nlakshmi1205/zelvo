# ListHome — Zero-Broker Apartment Rental Discovery

A WhatsApp-first rental discovery website for urban renters in Indian metros. Browse verified apartments directly from owners — no broker fees.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Data**: Static JSON (dummy listings for v0)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + Tailwind + shadcn/ui CSS variables
├── components/
│   └── ui/                 # shadcn/ui base components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── input.tsx
├── data/                   # Static JSON data (dummy listings)
├── lib/
│   └── utils.ts            # cn() helper for class merging
├── public/                 # Static assets
└── components.json         # shadcn/ui configuration
```

## Pages (v0 Scope)

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero search + featured listings |
| `/listings` | Browse all listings with filters |
| `/listings/[id]` | Listing detail with WhatsApp CTA |
| `/about` | How It Works / About page |

## Adding shadcn/ui Components

```bash
PNPM_CONFIG_REGISTRY=https://registry.npmjs.org pnpm dlx shadcn-ui@latest add dialog
```

## Environment Variables

No environment variables required for v0 (static data, no backend).
