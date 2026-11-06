# GFX Portfolio

A static portfolio site (HTML/CSS/JS, no build step) ready for GitHub Pages.

## Edit your content

| What | Where |
|---|---|
| Designs (title, client, category, highlight) | `projects.js` |
| Bio, stats, services, clients, email, socials | `index.html` |
| Rotating hero words | `script.js` → `words` |
| Colours & fonts | top of `style.css` (`:root`) |

**Adding a new design:** save it as `images/work-76.jpg` (about 1200px wide), plus a
600px-wide copy as `images/thumbs/work-76.jpg`, then add a line to `projects.js`:

```js
{ n: "76", title: "My New Post", client: "Brand", cat: "Events" },
```

**Catalogues** are stored as page images in `images/catalogues/` (`cat-a-01.jpg`, `cat-a-01-thumb.jpg`, …)
and listed in `projects.js` with `catalog: "cat-a", pages: 14`. Clicking one opens a page-by-page viewer.

Add `highlight: true` to also show it in the top highlights. Add `link: "https://..."` to
make it open a Behance/Instagram post instead of the image viewer.

## Publish on GitHub Pages

1. Create a new repo on GitHub, e.g. `portfolio` (or `yourusername.github.io` for a root URL).
2. Upload all files in this folder (drag & drop on the repo page → **Commit changes**).
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
4. After ~1 minute it's live at `https://yourusername.github.io/portfolio/`.

## Preview locally

```
python -m http.server 5173
```
then open http://localhost:5173
