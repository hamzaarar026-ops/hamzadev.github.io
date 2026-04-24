# hamzadev.github.io

Personal portfolio site — hacker/terminal aesthetic, vanilla HTML/CSS/JS.

Live at: https://hamzaarar026-ops.github.io (once pushed to `main`).

## Local preview

Just open `index.html` in a browser — no build step.

Or serve it properly:
```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Structure

- `index.html` — all sections (hero, about, projects, resume, contact)
- `styles.css` — terminal theme
- `script.js` — matrix rain, boot intro, typing effect
- `.nojekyll` — tells GitHub Pages to skip Jekyll processing

## Editing

- **Projects** — duplicate an `<article class="project">` block in `index.html`
- **About text** — edit the `#about` section in `index.html`
- **Resume** — drop a file named `resume.pdf` in this folder
- **Contact** — update the links in the `#contact` section
