/**
 * Seasonal Campaign — Black Friday Sale
 *
 * Temporary campaign wording and hero banners layered over the standard site.
 * No prices or offers change: the existing free consultation, free
 * installation and price match guarantee are presented as the Black Friday
 * offers. Brand colours and page SEO copy are untouched.
 *
 * TO SWITCH OFF: set BLACK_FRIDAY_ACTIVE to false and redeploy. Every component
 * reads `seasonalCopy` and falls back to its standard copy and hero photos
 * when it is null.
 *
 * Deliberately no end date or countdown anywhere in this copy — the offers
 * carry on after Black Friday, so the wording must not imply they expire.
 */

export const BLACK_FRIDAY_ACTIVE: boolean = true;

/* ---------- Types ---------- */

export interface SeasonalHeroSlide {
  heading: string;
  headingItalic: string;
  description: string;
  /** Seasonal banner in /public. Used only if the file exists — otherwise
   *  the slide keeps its standard photo (see src/app/page.tsx). */
  image: string;
  alt: string;
}

export interface SeasonalCopy {
  /** Promo strip shown under the main nav on every page */
  announcement: { title: string; detail: string; cta: string };
  /** Top utility bar tagline — keep close to the standard length so the bar doesn't wrap */
  topBarTagline: string;
  heroPreheading: string;
  /** Keyed by slide id in HeroSlider */
  heroSlides: Record<number, SeasonalHeroSlide>;
  trustPriceMatchTitle: string;
  trustFreeInstallationTitle: string;
  midCtaEyebrow: string;
  contactEyebrow: string;
  contactSubmit: string;
}

/* ---------- Black Friday Copy ---------- */

/** Folder (inside /public) containing the active campaign's hero banners */
export const SEASONAL_HERO_DIR = "/images/hero/black-friday";

const blackFridayCopy: SeasonalCopy = {
  announcement: {
    title: "Black Friday Sale",
    detail: "Free Consultation, Free Installation & Price Match Guarantee",
    cta: "Claim Your Free Quote",
  },
  topBarTagline: "Black Friday: Free Installation",
  heroPreheading: "Black Friday Sale — Made in Britain",
  heroSlides: {
    1: {
      heading: "This Black Friday, Choose",
      headingItalic: "Beautiful Shutters",
      description:
        "Explore our Black Friday Sale: free consultation, free installation and a price match guarantee on premium blinds and shutters.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-shutters.webp`,
      alt: "Contemporary living room with white plantation shutters, a cream sofa and charcoal accents",
    },
    2: {
      heading: "Refresh Your Windows",
      headingItalic: "This Black Friday",
      description:
        "Beautifully crafted roller blinds, made to measure and fitted free. Discover your perfect style in our Black Friday Sale.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-roller-blinds.webp`,
      alt: "Modern dining room with charcoal roller blinds, an oak table and cream upholstered chairs",
    },
    3: {
      heading: "Beautiful Light,",
      headingItalic: "Day and Night",
      description:
        "Find your balance of light and privacy this Black Friday with made-to-measure day and night blinds, including free installation.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-day-night-blinds.webp`,
      alt: "Calm bedroom at dusk with layered day and night blinds, cream bedding and a teal throw",
    },
    4: {
      heading: "Black Friday,",
      headingItalic: "Stylish Windows",
      description:
        "Discover vertical blinds tailored to your space in our Black Friday Sale, with free installation and our price match guarantee.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-vertical-blinds.webp`,
      alt: "Modern kitchen-diner with off-white vertical blinds across glazed patio doors and a pale stone island",
    },
    5: {
      heading: "Your Style, Your Space,",
      headingItalic: "Made for You",
      description:
        "Make more of your home this Black Friday with bespoke Venetian blinds, a free consultation and expert fitting at no extra cost.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-venetian-blinds.webp`,
      alt: "Refined home office with natural oak Venetian blinds, a dark wood desk and a charcoal chair",
    },
  },
  trustPriceMatchTitle: "Black Friday: Price Match Guarantee",
  trustFreeInstallationTitle: "Black Friday: Free Installation",
  midCtaEyebrow: "Black Friday: Free, No-Obligation Quote",
  contactEyebrow: "Claim Your Free Black Friday Quote",
  contactSubmit: "Get My Free Black Friday Quote",
};

/** Active seasonal copy, or null when the site is in its standard state */
export const seasonalCopy: SeasonalCopy | null = BLACK_FRIDAY_ACTIVE ? blackFridayCopy : null;
