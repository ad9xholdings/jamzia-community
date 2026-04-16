# JamZia™ v1.0 — The Everything App

**Live Site:** https://ad9xholdings.github.io/jamzia-community/

## Design System: Black Diamond

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#000000` | Page background |
| Text | `#FFFFFF` | Primary text |
| Navy | `#081F5C` | Headers, borders, accents |
| Blue | `#7096D1` | Interactive elements, links |
| Ice | `#D0E3FF` | Hover states, highlights |
| Light | `#EDF1F6` | Subtle backgrounds |
| Warm | `#F7F2EB` | CTAs, primary buttons |

## Architecture: Layer 1 + Layer 2

### Layer 1 — Primary MFCs (Featured)
- 🎬 **JamVideo™** — Video streaming universe
- 🎵 **JamAudio™** — Audio streaming universe

### Layer 2 — Ecosystem MFCs (Compact)
- 🎮 **JamPlay™** — Gaming & AR
- 🎓 **JamLearn™** — Academy & courses
- 💬 **JamSocial™** — Community & messaging
- 📢 **JamAds™** — Advertising platform
- 💎 **JamPay™** — Wallet & treasury
- 🛒 **JamShop™** — Marketplace & store
- ☁️ **JamCloud™** — Storage & compute

## Features

- ✅ **SORME™ AI Search Engine** — Capital markets intelligence
- ✅ **Java State Management** — AppState enum + StateManager class
- ✅ **Login + Get Access Now** — Dual CTAs on all pages
- ✅ **Grayscale Logos** — Hover to reveal color
- ✅ **Mobile Responsive** — Hamburger menu, stacked layouts
- ✅ **All Links Functional** — 9 MFC subpages with back navigation

## File Structure

```
/
├── index.html          # Main landing (SORME™ + Layer 1/2)
├── css/
│   └── jamzia.css      # Black Diamond design tokens
├── js/
│   └── jamzia.js       # StateManager + AppState
├── jamvideo/
│   └── index.html      # Layer 1 Primary
├── jamaudio/
│   └── index.html      # Layer 1 Primary
├── jamplay/            # Layer 2
├── jamlearn/           # Layer 2
├── jamsocial/          # Layer 2
├── jamads/             # Layer 2
├── jampay/             # Layer 2
├── jamshop/            # Layer 2
└── jamcloud/           # Layer 2
```

## Development

All files are static HTML/CSS/JS — no build step required.

## License

© 2026 JamZia™ — All rights reserved.
