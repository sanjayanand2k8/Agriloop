# AgriLoop Direct

A premium, responsive landing hero for **AgriLoop Direct** — a farm-to-buyer network helping Indian farmers aggregate verified produce lots, invite competing buyers, and see transparent net returns before selling.

## Experience

- Full-screen cinematic agricultural background video with a resilient image fallback
- Glassmorphism navigation with desktop pill navigation and animated mobile drawer
- Exact hero promise: “Your harvest deserves more than a middleman.”
- Separate **Verified Lot Passport** and **Live Buyer Bids** product cards
- QR-code-style lot verification visual with scanner line and trace metadata
- Live bid rows with top-bid emphasis and best net farmer return panel
- Responsive connector flow: Verified Lot → Live Bids → Best Net Return
- Bottom marketplace metrics and farmer-friendly trust chips
- Lightweight CTA feedback states ready for future Mobile Number / OTP onboarding

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- lucide-react icons
- Google Fonts: Geist + DM Mono

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm check
pnpm build
```

The page is frontend-only by design. Replace the demo video, fallback imagery, and static bid data when connecting production marketplace services.
