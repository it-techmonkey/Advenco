# Black Friday Campaign — How It Works and How to Remove It

November 2026 campaign, replacing the Halloween sale through the same seasonal
layer. The existing free consultation, free installation and price match
guarantee are presented as Black Friday offers. No discount percentages,
deadlines or countdowns have been added.

## Benefit-led copy and calls to action

Every hero slide leads with a large, bold **Black Friday Sale** headline and a
teal product benefit, starting with **Shutters. Fitted Free.** The existing free
consultation, free installation and price match guarantee appear as a separate
checklist beside the quote action on every slide. No additional offers, savings
claims, deadlines or availability promises are introduced.

The graphite sale strip shows **Blinds & Shutters. Fitted Free.** on mobile as
well as desktop, with a contrasting teal **Get My Free Quote** button. The same
action appears in the hero, dark product-page quote strips and form. The hero's
**Browse Styles** action links to
the homepage's existing `#made-to-measure` collection section.

Product-page headings use **Choose your {product}. Fitting is free.** with the
current product name. The form leads with **Get Your Black Friday Quote** and
reinforces the existing **Free consultation. No
obligation.** wording. All new campaign copy is in `src/data/seasonal.ts` and
falls back to the standard site wording when the flag is disabled.

The campaign hero grows with its content on small screens so the sale headline,
benefit checklist and quote buttons remain readable without clipping. The bold
headlines, darker overlay, checklist and dark quote cards are campaign-only;
turning the flag off restores the standard hero and quote-card presentation.

Enquiry delivery is separate from the campaign copy: the existing form handler
simulates submission. A delivery service must be confirmed and configured before
the form can send enquiries. This copy update does not configure a new recipient
or make a new delivery promise.

## Quick switch-off

1. Open `src/data/seasonal.ts`.
2. Change `export const BLACK_FRIDAY_ACTIVE: boolean = true;` to `false`.
3. Run `npm run build` and deploy the new build.

With the flag off, `seasonalCopy` is `null`: the announcement strip disappears,
the top bar, trust badges and quote forms use their standard wording, and the
homepage uses its original five hero photos and headlines. There is no automatic
date-based switch; a rebuild and deployment are required.

To reactivate this campaign, set the flag back to `true`, rebuild and redeploy.

## Content and implementation

| What | Where |
|---|---|
| Campaign flag and all promotional wording | `src/data/seasonal.ts` |
| Hero image directory | `SEASONAL_HERO_DIR` in `src/data/seasonal.ts` |
| Announcement strip and neutral sale-tag icon | `src/components/SeasonalBanner.tsx` |
| Top bar and strip placement | `src/components/Navbar.tsx` |
| Hero copy and standard-image fallback | `src/components/HeroSlider.tsx` |
| Build-time image existence check | `src/app/page.tsx` |
| Trust badges | `src/components/TrustBar.tsx` |
| Product-page quote strip | `src/components/MidPageCTA.tsx` |
| Shared quote form | `src/components/ContactSection.tsx` |

The navbar and quote form are shared, so the campaign wording also appears on
product, area, blog and other pages that render those components. Product text,
blog articles, page titles, meta descriptions, legal copy and brand colours
retain their existing content.

The Halloween flag, active copy, image references and pumpkin icon have been
replaced. The old Halloween images remain inactive in their own directory;
the active campaign never selects them. The previous rollback document is
retained as a historical reference and links here.

## Hero assets

All five new files are 1600 × 900 WebP images in
`public/images/hero/black-friday/`, matching homepage slide IDs 1–5:

1. `advenco-black-friday-shutters.webp`
2. `advenco-black-friday-roller-blinds.webp`
3. `advenco-black-friday-day-night-blinds.webp`
4. `advenco-black-friday-vertical-blinds.webp`
5. `advenco-black-friday-venetian-blinds.webp`

The photographs use charcoal, cream and muted teal interiors without embedded
sale text. All sale wording remains accessible HTML. Each image has descriptive
alt text. A campaign image is used only when its file exists at build time;
otherwise that slide keeps its original photo and original alt text.

Assets were created with the built-in image generation tool and optimized to
WebP with Sharp. The exact generation prompts are archived in
[black-friday-image-prompts.md](black-friday-image-prompts.md).

## Verification

Run from the project root:

```powershell
npx.cmd tsc --noEmit
npm.cmd run lint
npm.cmd run build
rg -n -i 'halloween|pumpkin|spooky|fright|no tricks|🎃' src
```

The final search should return no matches. Preview the homepage on desktop and
mobile, all five slides, a product page and the quote form. Confirm the sale-strip
link reaches the contact section. Also verify the off state before deploying a
future rollback.

## Full removal, if the seasonal layer is no longer needed

Use the quick switch-off first. Then remove seasonal imports and fallback
expressions from Navbar, TrustBar, MidPageCTA and ContactSection, keeping each
expression's standard wording. Remove the SeasonalBanner import and render from
Navbar. In HeroSlider, remove `withSeasonalCopy`, `HeroSliderProps` and the
seasonal preheading expression; render the standard `slides` array and standard
preheading. Restore the standard hero button labels, external shop URL and its
new-tab attributes; restore the standard product-page heading, button and form
reassurance by keeping the fallback branches of their seasonal expressions.
In `src/app/page.tsx`, remove the seasonal and filesystem imports and
`getSeasonalHeroImages`, then render `<HeroSlider />`.

Once those references are removed, delete `src/data/seasonal.ts`,
`src/components/SeasonalBanner.tsx` and the unused campaign asset directory.
Re-run the checks above. Preserve unrelated fixes, including the dash fixes in
WhyChooseUs and BeyondStyle.
