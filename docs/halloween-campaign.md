# Halloween Campaign — How It Works and How to Remove It

Temporary festive theme (October 2026). No prices or offers changed: the existing
free consultation, free installation and price match guarantee are re-labelled as
Halloween offers. Brand colours, the existing hero photos, page titles, meta
descriptions and SEO copy are untouched.

## 1. Quick switch-off (recommended, 1 minute)

1. Open `src/data/seasonal.ts`.
2. Change `export const HALLOWEEN_ACTIVE: boolean = true;` to `false`.
3. Build and deploy.

With the flag off, `seasonalCopy` is `null`. Every component falls back to its
standard wording, the promo strip renders nothing, and the hero shows the
standard slides and photos. Use this on 1 November, and flip it back to `true`
next year to reuse the campaign.

## 2. Full removal (when you want the code gone)

Do the quick switch-off first and confirm the site looks normal, then delete the
campaign code. Order matters: delete the importers' references before the files
they import, or the build breaks.

### 2a. Delete these

| Path | What it is |
|---|---|
| `src/data/seasonal.ts` | The flag and all Halloween copy |
| `src/components/SeasonalBanner.tsx` | The promo strip under the nav |
| `public/images/hero/halloween/` | The Halloween hero banners (and `.gitkeep`) |

### 2b. Revert these six files

Each edit is small. Restore the original shown below.

**`src/components/Navbar.tsx`**
- Remove the two imports: `import SeasonalBanner from "@/components/SeasonalBanner";` and `import { seasonalCopy } from "@/data/seasonal";`
- Top bar tagline: replace `{seasonalCopy?.topBarTagline ?? "Free Consultation & Installation"}` with `Free Consultation &amp; Installation`
- Remove the comment and `<SeasonalBanner />` just before the closing `</>` at the bottom of the component.

**`src/components/TrustBar.tsx`**
- Remove `import { seasonalCopy } from "@/data/seasonal";`
- `title: seasonalCopy?.trustPriceMatchTitle ?? "Price Match Guarantee",` becomes `title: "Price Match Guarantee",`
- `title: seasonalCopy?.trustFreeInstallationTitle ?? "Free Installation",` becomes `title: "Free Installation",`

**`src/components/MidPageCTA.tsx`**
- Remove `import { seasonalCopy } from "@/data/seasonal";`
- `{seasonalCopy?.midCtaEyebrow ?? "Free, No-Obligation Quote"}` becomes `Free, No-Obligation Quote`

**`src/components/ContactSection.tsx`**
- Remove `import { seasonalCopy } from "@/data/seasonal";`
- `{seasonalCopy?.contactEyebrow ?? "Request A Free Quote"}` becomes `Request A Free Quote`
- `{submitting ? "Sending..." : seasonalCopy?.contactSubmit ?? "Get My Free Quote"}` becomes `{submitting ? "Sending..." : "Get My Free Quote"}`

**`src/components/HeroSlider.tsx`**
- Remove `import { seasonalCopy } from "@/data/seasonal";`
- Delete the whole `/* ---------- Seasonal Campaign ---------- */` block (the `withSeasonalCopy` function).
- Delete the `HeroSliderProps` interface and change the signature to `export default function HeroSlider() {`
- Delete the line `const activeSlides = withSeasonalCopy(seasonalImages);`
- Change `activeSlides.map(` to `slides.map(` and `const current = activeSlides[currentIndex];` to `const current = slides[currentIndex];`
- Pre-heading: replace `{seasonalCopy?.heroPreheading ?? "Premium Blinds & Shutters — Made in Britain"}` with `Premium Blinds &amp; Shutters &mdash; Made in Britain`

**`src/app/page.tsx`**
- Remove the three imports: `existsSync` from `node:fs`, `path` from `node:path`, and `{ seasonalCopy, HALLOWEEN_HERO_DIR }` from `@/data/seasonal`.
- Delete the `getSeasonalHeroImages()` function and its comment.
- `<HeroSlider seasonalImages={getSeasonalHeroImages()} />` becomes `<HeroSlider />`

### 2c. Verify

```bash
grep -rn "seasonal\|Seasonal\|HALLOWEEN" src --include=*.tsx --include=*.ts
npx tsc --noEmit
npx next build
```

The grep should return only unrelated hits (the word "seasonal" in blog and area
copy). Anything in a component or `src/app/page.tsx` means a step above was missed.

### 2d. Or revert with git

If the campaign was committed on its own, `git revert <commit>` undoes it in one
step. Commit the Halloween work separately from the dash fixes (section 4) so the
revert does not undo them.

## 3. Where the Halloween content lives

| What | Where |
|---|---|
| On/off flag | `HALLOWEEN_ACTIVE` in `src/data/seasonal.ts` |
| All Halloween wording | `halloweenCopy` in `src/data/seasonal.ts` |
| Promo strip | `src/components/SeasonalBanner.tsx`, rendered by `Navbar.tsx` |
| Hero banners | `public/images/hero/halloween/`, one per slide |

Banner file names (WebP, 1600x900), matched to hero slide 1 to 5:

1. `advenco-halloween-shutters.webp`
2. `advenco-halloween-roller-blinds.webp`
3. `advenco-halloween-day-night-blinds.webp`
4. `advenco-halloween-vertical-blinds.webp`
5. `advenco-halloween-venetian-blinds.webp`

A slide switches to its Halloween banner only if its file exists at build time;
otherwise it keeps the standard photo. The existing hero photos in
`public/images/hero/` are never modified.

## 4. Do NOT revert these (permanent fixes made alongside)

Two garbled dash characters were fixed in `src/components/WhyChooseUs.tsx` and
`src/components/BeyondStyle.tsx`. They are unrelated bug fixes. Keep them.

## 5. Notes

- The campaign copy deliberately has no end date or countdown. The offers carry on
  after Halloween, and UK advertising rules treat an implied deadline on an offer
  that does not end as misleading. Keep it that way if you edit the wording.
- Pages deliberately left alone: page titles and meta descriptions, blog posts,
  the area pages, and the legal pages.
- The site is statically built, so changing the flag only takes effect after a
  rebuild and redeploy.
