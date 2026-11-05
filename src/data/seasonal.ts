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
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroSecondaryHref: string;
  heroBenefits: string[];
  /** Keyed by slide id in HeroSlider */
  heroSlides: Record<number, SeasonalHeroSlide>;
  trustPriceMatchTitle: string;
  trustFreeInstallationTitle: string;
  midCtaEyebrow: string;
  /** {product} is replaced with the current page's product name. */
  midCtaHeading: string;
  contactEyebrow: string;
  contactHeading: string;
  contactHeadingEmphasis: string;
  contactDescription: string;
  contactSubmit: string;
  contactReassurance: string;
}

/* ---------- Black Friday Copy ---------- */

/** Folder (inside /public) containing the active campaign's hero banners */
export const SEASONAL_HERO_DIR = "/images/hero/black-friday";

const blackFridayCopy: SeasonalCopy = {
  announcement: {
    title: "Black Friday Sale",
    detail: "Blinds & Shutters. Fitted Free.",
    cta: "Get My Free Quote",
  },
  topBarTagline: "Black Friday: Free Expert Fitting",
  heroPreheading: "Made to Measure. Made in Britain.",
  heroPrimaryCta: "Get My Free Quote",
  heroSecondaryCta: "Browse Styles",
  heroSecondaryHref: "#made-to-measure",
  heroBenefits: ["Free Consultation", "Free Installation", "Price Match Guarantee"],
  heroSlides: {
    1: {
      heading: "Black Friday Sale",
      headingItalic: "Shutters. Fitted Free.",
      description:
        "Choose made-to-measure shutters for your home. Get your free quote and start your window upgrade.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-shutters.webp`,
      alt: "Contemporary living room with white plantation shutters, a cream sofa and charcoal accents",
    },
    2: {
      heading: "Black Friday Sale",
      headingItalic: "Blinds. Fitted Free.",
      description:
        "Find roller blinds that suit your space and let us take care of the fitting. Get your free quote.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-roller-blinds.webp`,
      alt: "Modern dining room with charcoal roller blinds, an oak table and cream upholstered chairs",
    },
    3: {
      heading: "Black Friday Sale",
      headingItalic: "Light. Privacy. Control.",
      description:
        "Take control of light and privacy with day and night blinds made for your space. Start with a free quote.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-day-night-blinds.webp`,
      alt: "Calm bedroom at dusk with layered day and night blinds, cream bedding and a teal throw",
    },
    4: {
      heading: "Black Friday Sale",
      headingItalic: "Made to Fit. Fitted Free.",
      description:
        "Give your windows a fresh look with made-to-measure vertical blinds. Get your free quote and leave the fitting to us.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-vertical-blinds.webp`,
      alt: "Modern kitchen-diner with off-white vertical blinds across glazed patio doors and a pale stone island",
    },
    5: {
      heading: "Black Friday Sale",
      headingItalic: "New Look. Fitted Free.",
      description:
        "Bring a new look to your home with bespoke Venetian blinds. Choose your style and request your free quote.",
      image: `${SEASONAL_HERO_DIR}/advenco-black-friday-venetian-blinds.webp`,
      alt: "Refined home office with natural oak Venetian blinds, a dark wood desk and a charcoal chair",
    },
  },
  trustPriceMatchTitle: "Price Match Guarantee",
  trustFreeInstallationTitle: "Expertly Fitted Free",
  midCtaEyebrow: "Black Friday Sale",
  midCtaHeading: "Choose your {product}. Fitting is free.",
  contactEyebrow: "Get Your Black Friday Quote",
  contactHeading: "Start Your",
  contactHeadingEmphasis: "Window Upgrade",
  contactDescription:
    "Choose your new blinds or shutters with a free consultation, free expert installation and our price match guarantee. Tell us what you have in mind.",
  contactSubmit: "Get My Free Quote",
  contactReassurance: "Free consultation. No obligation.",
};

/** Active seasonal copy, or null when the site is in its standard state */
export const seasonalCopy: SeasonalCopy | null = BLACK_FRIDAY_ACTIVE ? blackFridayCopy : null;
