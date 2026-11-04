# Bundled website fonts

These are the unmodified Latin variable WOFF2 files previously downloaded by
`next/font/google` for this website:

| File | Family | Available weights |
|---|---|---|
| `outfit-latin-variable.woff2` | Outfit | 100–900; the site uses 300–900 |
| `space-grotesk-latin-variable.woff2` | Space Grotesk | 300–700 |

Sources: [Outfit](https://github.com/google/fonts/tree/main/ofl/outfit) and
[Space Grotesk](https://github.com/google/fonts/tree/main/ofl/spacegrotesk).
Each font's upstream SIL Open Font License and copyright notice are included
alongside the font file.

The root layout uses `next/font/local`, retaining `--font-heading`, `--font-body`,
preloading and `display: swap`. Keep these files in Git: production builds must
work without fetching fonts from Google. This avoids the Google font URL parsing
failure tracked in [Next.js issue #99114](https://github.com/vercel/next.js/issues/99114).
