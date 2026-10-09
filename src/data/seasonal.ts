/**
 * Seasonal Campaign — Halloween Sale
 *
 * Temporary festive wording and hero banners layered over the standard site.
 * No prices or offers change: the existing free consultation, free
 * installation and price match guarantee are presented as the Halloween
 * offers. Brand colours and page SEO copy are untouched.
 *
 * TO SWITCH OFF: set HALLOWEEN_ACTIVE to false and redeploy. Every component
 * reads `seasonalCopy` and falls back to its standard copy and hero photos
 * when it is null.
 *
 * Deliberately no end date or countdown anywhere in this copy — the offers
 * carry on after Halloween, so the wording must not imply they expire.
 */

export const HALLOWEEN_ACTIVE: boolean = true;

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

/* ---------- Halloween Copy ---------- */

/** Folder (inside /public) the Halloween hero banners are dropped into */
export const HALLOWEEN_HERO_DIR = "/images/hero/halloween";

const halloweenCopy: SeasonalCopy = {
  announcement: {
    title: "Halloween Sale",
    detail: "Free Consultation, Free Installation & Price Match Guarantee",
    cta: "Claim Your Free Quote",
  },
  topBarTagline: "Halloween Sale: Free Installation",
  heroPreheading: "Halloween Sale — Made in Britain",
  heroSlides: {
    1: {
      heading: "No Tricks, Just",
      headingItalic: "Beautiful Shutters",
      description:
        "Our Halloween Sale is here: free consultation, free installation and a price match guarantee on premium blinds and shutters.",
      image: `${HALLOWEEN_HERO_DIR}/advenco-halloween-shutters.webp`,
      alt: "Living room with fitted plantation shutters, styled for Halloween with pumpkins and candlelight",
    },
    2: {
      heading: "Treat Your Windows to",
      headingItalic: "Something New",
      description:
        "Beautifully crafted roller blinds, made to measure and fitted free as part of our Halloween Sale.",
      image: `${HALLOWEEN_HERO_DIR}/advenco-halloween-roller-blinds.webp`,
      alt: "Dining room with tailored roller blinds and an autumn table setting of pumpkins and candles",
    },
    3: {
      heading: "Darker Nights,",
      headingItalic: "Cosier Rooms",
      description:
        "Day and night blinds that put you in control of light and privacy as the evenings draw in, with free installation included.",
      image: `${HALLOWEEN_HERO_DIR}/advenco-halloween-day-night-blinds.webp`,
      alt: "Bedroom at dusk with day and night blinds in a bay window and pumpkins on the sill",
    },
    4: {
      heading: "Spooky Season,",
      headingItalic: "Stylish Windows",
      description:
        "No tricks on price: every blind and shutter in our Halloween Sale comes with our price match guarantee.",
      image: `${HALLOWEEN_HERO_DIR}/advenco-halloween-vertical-blinds.webp`,
      alt: "Kitchen with vertical blinds at bifold doors, with carved pumpkins on the island",
    },
    5: {
      heading: "Frightfully Good",
      headingItalic: "Blinds, Made for You",
      description:
        "Bespoke window solutions with a free consultation, expert fitting and nothing scary about the service.",
      image: `${HALLOWEEN_HERO_DIR}/advenco-halloween-venetian-blinds.webp`,
      alt: "Home office with natural wood Venetian blinds and small pumpkins on the desk",
    },
  },
  trustPriceMatchTitle: "No Tricks: Price Match Guarantee",
  trustFreeInstallationTitle: "Halloween Treat: Free Installation",
  midCtaEyebrow: "Halloween Offer: Free, No-Obligation Quote",
  contactEyebrow: "Claim Your Free Halloween Quote",
  contactSubmit: "Get My Free Halloween Quote",
};

/** Active seasonal copy, or null when the site is in its standard state */
export const seasonalCopy: SeasonalCopy | null = HALLOWEEN_ACTIVE ? halloweenCopy : null;
