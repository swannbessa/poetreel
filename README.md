# Poetreel — web app

Put this folder online (free), then add it to your phone's home screen.

## Option A — Netlify Drop (2 minutes, no code)
1. Go to https://app.netlify.com/drop and create a free account.
2. Drag and drop this whole `poetreel-web` folder onto the page.
3. You get a link like `https://something.netlify.app` (you can rename it in Site settings).

## Option B — GitHub Pages
1. Create a public repository on GitHub, upload the contents of this folder.
2. Settings → Pages → Source: "Deploy from a branch" → `main` / root → Save.
3. Your link: `https://yourname.github.io/repo-name/`

## Install on iPhone
Open the link in **Safari** → Share button → **Add to Home Screen** → Add.
Poetreel now opens full screen from its icon and works offline.
(Android/Chrome: menu ⋮ → Install app.)

## Updating
Edit `index.html`, bump `VERSION` in `sw.js` (e.g. `poetreel-v2`), re-upload.
Phones pick up the new version next time the app is opened online.
