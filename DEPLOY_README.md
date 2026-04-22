# JamZia.TV — Clean Deploy Package

## What's in this package

Only the files needed to run JamZia.TV as a static site on any Apache host:

```
htdocs/
├── index.html              ← Main landing page
├── .htaccess              ← Apache routing
├── README.md              ← Project readme
├── DEPLOY_README.md       ← This file
├── css/
│   └── jamzia.css         ← Stylesheet
├── js/
│   └── jamzia.js          ← JavaScript state manager
├── jamvideo/              ← JamVideo™ Universe
│   └── index.html
├── jamaudio/              ← JamAudio™ Universe
│   └── index.html
├── jamplay/               ← JamPlay™ Universe
│   └── index.html
├── jamlearn/              ← JamLearn™ Universe
│   └── index.html
├── jamsocial/             ← JamSocial™ Universe
│   └── index.html
├── jamads/                ← JamAds™ Universe
│   └── index.html
├── jampay/                ← JamPay™ Universe
│   └── index.html
├── jamshop/               ← JamShop™ Universe
│   └── index.html
└── jamcloud/              ← JamCloud™ Universe
    └── index.html
```

**Total: 17 files, ~168KB uncompressed, ~34KB zipped**

## Upload to Network Solutions /htdocs

### Step 1: Clear old files (IMPORTANT)

**Yes — delete everything in /htdocs first.** Otherwise stale files from old builds will conflict.

Via File Manager or FTP:
1. Navigate to `/htdocs/`
2. Select all files and delete
3. Leave the `/htdocs/` directory itself empty

### Step 2: Upload clean package

Upload the contents of this folder directly into `/htdocs/`:
- `index.html` goes to `/htdocs/index.html`
- `.htaccess` goes to `/htdocs/.htaccess`
- `css/` goes to `/htdocs/css/`
- etc.

**Do NOT upload this as a subfolder.** The files must be at the root of `/htdocs/`.

### Step 3: Verify

| URL | What to see |
|-----|-------------|
| `https://jamzia.tv/` | Main page with platform grid |
| `https://jamzia.tv/jamvideo/` | JamVideo™ Universe |
| `https://jamzia.tv/jamaudio/` | JamAudio™ Universe |
| `https://jamzia.tv/jamplay/` | JamPlay™ Universe |

### Step 4: File Permissions

| Item | Permission |
|------|-----------|
| HTML files | 644 |
| CSS/JS files | 644 |
| Directories | 755 |
| .htaccess | 644 |

## GitHub Repos

| Repo | Purpose | URL |
|------|---------|-----|
| `jamzia-community` | Clean static site | https://github.com/ad9xholdings/jamzia-community |
| `jamzia-tv` | Mirror (synced) | https://github.com/ad9xholdings/jamzia-tv |

## What was removed (not needed)

| Item | Reason |
|------|--------|
| `node_modules/` | 656MB of dependencies — not needed for static hosting |
| `apps/`, `apps-content/` | Empty/unused directories |
| `automation/`, `reports/`, `subscription/` | Old project artifacts |
| `.turbo/` | 87MB build cache — regenerable |
| `vercel.json`, `_redirects` | Vercel account cancelled |

These files are NOT in GitHub and should NOT be uploaded to `/htdocs/`.