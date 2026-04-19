# JamZia™ v1.0 — The Everything App

**Live Site:** https://www.jamzia.tv

## 🚀 One-Click Deploy

Deploy your own JamZia™ instance instantly:

| Platform | Button |
|----------|--------|
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ad9xholdings/jamzia-community) |
| **Netlify** | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ad9xholdings/jamzia-community) |
| **Cloudflare Pages** | [![Deploy to Cloudflare Pages](https://deploy.pages.dev/button.svg)](https://deploy.pages.dev/?url=https://github.com/ad9xholdings/jamzia-community) |

## Design System

| Order | Hex | Usage |
|-------|-----|-------|
| 1 | #000000 | Black — Background |
| 2 | #081F5C | Navy — Headers, borders |
| 3 | #7096D1 | Blue — Interactive elements |
| 4 | #EDF1F6 | Light — Subtle backgrounds |
| 5 | #D0E3FF | Ice — Hover states |
| 6 | #F7F2EB | Warm — CTAs, buttons |

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
- ✅ **SPA Routing** — `.htaccess` + `_redirects` for clean URLs
- ✅ **Cloudflare Ready** — SSL, caching, DNS config included

## File Structure

```
/
├── index.html          # Main landing (SORME™ + Layer 1/2)
├── vercel.json         # Vercel SPA routing config
├── _redirects          # Netlify/Cloudflare SPA routing
├── .htaccess           # Apache SPA routing + gzip + cache
├── css/
│   └── jamzia.css      # Design tokens
├── js/
│   └── jamzia.js       # StateManager + AppState
├── storage/            # Storj.io + Clark Cotton Music upload
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

## 🌐 Custom Domain Setup

### Cloudflare DNS

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | @ | `your-deployment-url` | 🟠 ON |
| CNAME | www | `your-deployment-url` | 🟠 ON |

### SSL/TLS Settings
- Encryption mode: **Full (strict)**
- Always Use HTTPS: **ON**
- Automatic HTTPS Rewrites: **ON**

## Development

All files are static HTML/CSS/JS — no build step required.

```bash
# Local development
npx serve .

# Or Python
python3 -m http.server 3000
```

## License

© 2026 JamZia™ — All rights reserved.
www.jamzia.tv
