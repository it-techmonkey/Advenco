/**
 * Home Page — Advenco Blinds & Shutters
 *
 * This is the main homepage assembled from reusable components.
 * Design follows the new Base44 reference (light/white theme with teal accents).
 * Content sourced from the WordPress site (advencoblindsandshutters.co.uk).
 *
 * Page Sections (in order):
 *  1. Navbar             — top utility bar + main navigation with dropdowns
 *  2. HeroSlider         — full-viewport slideshow with CTA buttons
 *  3. TrustBar           — Made in Britain, Price Match, Free Installation
 *  4. WhyChooseUs        — image + heading + body + bullets
 *  5. BeyondStyle        — advantages grid (light control, privacy, etc.)
 *  6. QualitySections    — Quality Assurance / Expert Installation / Customer Satisfaction
 *  7. OurProcess         — 3-step numbered cards (Consult → Measure → Fit)
 *  8. Testimonials       — 3 customer review cards
 *  9. MadeToMeasure      — SEO content section with product list
 * 10. ContactSection     — dark Bespoke Consultation + quote form
 * 11. Footer             — 4-column dark footer + copyright bar
 */

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeyondStyle from "@/components/BeyondStyle";
import QualitySections from "@/components/QualitySections";
import OurProcess from "@/components/OurProcess";
// import Testimonials from "@/components/Testimonials"; // temporarily disabled — re-enable if needed
import MadeToMeasure from "@/components/MadeToMeasure";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { existsSync } from "node:fs";
import path from "node:path";
import { seasonalCopy, HALLOWEEN_HERO_DIR } from "@/data/seasonal";

/**
 * Seasonal hero banners that have actually been added to /public. Checked at
 * build time so a slide whose banner hasn't been supplied yet keeps its
 * standard photo instead of rendering blank.
 */
function getSeasonalHeroImages(): string[] {
  if (!seasonalCopy) return [];
  const dir = path.join(process.cwd(), "public", HALLOWEEN_HERO_DIR);
  return Object.values(seasonalCopy.heroSlides)
    .map((slide) => slide.image)
    .filter((image) => existsSync(path.join(dir, path.basename(image))));
}

export default function HomePage() {
  return (
    <>
      {/* ── 1. Navigation ──────────────────────────────────── */}
      <Navbar />

      {/* ── 2. Hero Slider ─────────────────────────────────── */}
      <HeroSlider seasonalImages={getSeasonalHeroImages()} />

      {/* ── 3. Trust Bar ───────────────────────────────────── */}
      <TrustBar />

      {/* ── 4. Why Choose Us ───────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 5. Beyond Style (Advantages) ───────────────────── */}
      <BeyondStyle />

      {/* ── 6. Quality / Installation / Satisfaction Sections  */}
      <QualitySections />

      {/* ── 7. Our Process ─────────────────────────────────── */}
      <OurProcess />

      {/* ── 8. Testimonials (temporarily disabled) ─────────── */}
      {/* <Testimonials /> */}

      {/* ── 9. Made to Measure (SEO Content) ───────────────── */}
      <MadeToMeasure />

      {/* ── 10. Contact / Quote Form ───────────────────────── */}
      <ContactSection />

      {/* ── 11. Footer ─────────────────────────────────────── */}
      <Footer />
    </>
  );
}
