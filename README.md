# Roxana Cenușă — Portfolio v4 (iPhone-compatible)

A complete, responsive marketing portfolio. All imagery, CSS, JavaScript and SVG icons are packaged locally; no icon fonts or emoji graphics are required. Google Fonts are an optional external typography enhancement.

## What changed in v4
- Replaced all 62 decorative emoji-prone Unicode glyphs (asterisks, stars, arrows, checks and category icons) with inline SVG illustrations.
- Expanded the platform SVG logos into inline paths, avoiding cross-browser SVG sprite references.
- Put the portrait image entirely within the pink arch, with a 4px border and correct clipping, on desktop and mobile.
- Updated the matching portrait in the About section.
- Added a 180px Apple Touch icon and kept the existing favicon.
- Added a dependency-free Node.js server for easy Render Web Service deployments.
- Preserved the 10 case studies, filters, popup details and mobile navigation.

## View locally
- Double-click `index.html` (works as a static site), or
- Install Node.js and run `npm start`, then open `http://localhost:3000`.

## Deploy to your current Render Web Service
1. Upload/commit all files and the `assets` directory to your connected GitHub repository, keeping `index.html` at the project root.
2. In Render, ensure **Runtime: Node**, **Build Command: `npm install`** and **Start Command: `npm start`**.
3. Deploy the latest commit. Your existing `onrender.com` address remains the same when you update the same service.

## Alternative: static hosting
Upload the *contents* of this folder, with `index.html` at the root, to Netlify Drop or another static host. Ignore `server.js` and `package.json` for static hosting.

## Site structure
```
index.html        Page content and inline SVGs
styles.css        All desktop and mobile styles
script.js         Portfolio filters, project dialogs, navigation
assets/           Local images and browser icons
server.js         Optional Render Node.js server
package.json      Server start command
```
