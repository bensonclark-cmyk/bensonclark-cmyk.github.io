# Your portfolio: build, edit, maintain

## What is in this folder
- `index.html`  the page structure. You normally never touch it.
- `style.css`   colors, fonts, spacing.
- `app.js`      the code that builds the page from your data.
- `maps.js`     **your content. This is the only file you edit.**
- `images/`     your map images. `images/challenge/` for the 30 Day Map Challenge.

## 1. Preview it on your computer
Unzip the folder, then double-click `index.html`. It opens in your browser. The map cards show "Image not added yet" until you add images. No install or internet connection is needed (fonts fall back to your system font offline).

## 2. Add a map
1. In QGIS: Project > Import/Export > Export Map to Image. Use 150 to 200 DPI. Save as JPG, or WebP if you can.
2. Resize to about 1600 px on the long side, under 500 KB. Squoosh.app does this free in the browser.
3. Name it in lowercase with hyphens, no spaces: `ormoc-ahp.jpg`. Put it in `images/`.
4. Open `maps.js` in Notepad or VS Code. Copy a block inside `window.MAPS`, paste it after the last one (put a comma between blocks), and edit:
   `title`, `year`, `category`, `image`, `description`, and optionally `data`, `crs`, `tools`, `link`.
5. Save, refresh the browser. Done.

Categories you type are turned into filter buttons automatically. Use the same spelling each time ("Hazard", not "hazard" once and "Hazards" another).

## 3. Add a 30 Day Map Challenge map
1. Save the image as `images/challenge/day02.jpg` (day03, day04...).
2. In `maps.js`, add a block inside `days: [ ... ]` with `day: 2`, `title`, `image`, `description`, `data`, `crs`. Separate blocks with commas.
3. The grid fills in that day automatically. Next year, change `year` and replace the `days` list. Move the old days into a new variable if you want to keep them.

## 4. Interactive maps (optional)
Make the web map elsewhere (uMap, or a MapLibre/Leaflet page), then paste its address in the map's `link` field. A button "Open interactive map" appears. Keep the image as the preview.

## 5. Edit text, email, links
Everything is at the top of `maps.js` under `window.SITE`: your intro, experience, credentials, tools, services, email, social links. To show a link, delete the `//` at the start of its line.
Common mistakes: a missing comma between blocks, a missing closing quote, or a double quote inside text (use single quotes ' inside). If the page goes blank, press F12, open Console, and it will name the line.

## 6. Publish it (free)
**Easiest: Cloudflare Pages or Netlify**
1. Make a free account.
2. Choose "Upload your site" / "Direct upload" (Netlify: Sites > Add new site > Deploy manually).
3. Drag the whole folder in. You get a public link in under a minute.
4. To update later, drag the updated folder in again.

**Best for long term: GitHub Pages**
1. Create a free GitHub account and a new public repository named `yourusername.github.io`.
2. Click Add file > Upload files, drag in everything from the folder (not the folder itself, its contents), then Commit.
3. Settings > Pages > Deploy from branch > main > Save. Your site is at `https://yourusername.github.io`.
4. To update: open the repository, Add file > Upload files, drop in new images and the edited `maps.js`, Commit. Live within a minute or two. GitHub keeps a history, so you can undo any mistake.

**Custom domain** (like `yourname.com`): buy one from a registrar (about 600 to 900 pesos a year for .com), then add it in the Pages or Netlify domain settings and follow their DNS steps. Optional.

## 7. Maintain it
- After every new map: preview locally first, then publish.
- Keep a backup copy of the whole folder in Google Drive or on a USB drive. Keep your full-resolution maps separately.
- Keep images under 500 KB. If the site feels slow on mobile data, shrink the biggest images.
- Check the site on your phone after each update.
- Every few months, remove weak maps. Eight to twelve strong maps beat thirty average ones. Put your best work first in each year.
- Always credit data sources in the `data` field. Check licenses before showing client or agency maps, and get permission for commissioned work.
- Update your email, experience and credentials after anything new (license exam, job, certificate).
- Replace the example entries in `maps.js` with your own. Delete any example you do not have a real map for.
- Optional upgrades later: a custom domain, a contact form (Formspree), visit stats (Cloudflare Web Analytics), and a page per map once you have many.
