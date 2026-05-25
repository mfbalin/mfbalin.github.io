# mfbal.in

Personal website for Muhammed Fatih Balin. Plain HTML + CSS, no build step.

Served by GitHub Pages directly from the repo root on `main`, with the custom
domain `mfbal.in` (configured via `CNAME`).

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Deploy

```bash
git add -A && git commit && git push
```

GitHub Pages picks up the change within a minute.

## Layout

```
index.html               — single page, semantic HTML
style.css                — Inter, ~760px column, light + dark via prefers-color-scheme
images/                  — profile photo, institution logos, tech icons
papers/                  — PDFs hosted on this domain
mfbalin_cv.pdf           — CV
mfbalin_phd_diploma.pdf  — Ph.D. diploma
keybase.txt              — Keybase identity proof for mfbal.in
CNAME                    — custom domain for GitHub Pages
```
