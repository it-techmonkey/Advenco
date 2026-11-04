/**
 * SeasonalBanner — Promo Strip
 *
 * Slim announcement strip rendered directly under the main nav on every page
 * while a seasonal campaign is active (see src/data/seasonal.ts). Renders
 * nothing when no campaign is running.
 *
 * Sits below the nav rather than above it so the sticky nav and the mobile
 * drawer offset are unaffected. Uses the existing brand blue — no seasonal
 * colour change.
 */

import Link from "next/link";
import { seasonalCopy } from "@/data/seasonal";

export default function SeasonalBanner() {
  if (!seasonalCopy) return null;
  const { title, detail, cta } = seasonalCopy.announcement;

  return (
    <aside
      aria-label={title}
      className="bg-advenco-blue text-white text-xs sm:text-[13px] py-2.5 px-4"
    >
      <p className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-center">
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8l7.2 7.2a2 2 0 0 1 0 2.8Z" />
          <circle cx="7.5" cy="7.5" r="1" />
        </svg>
        <span className="font-heading font-bold tracking-widest uppercase">{title}</span>
        <span className="hidden sm:inline text-white/85">{detail}</span>
        <Link
          href="#contact"
          className="font-semibold underline underline-offset-4 hover:text-advenco-teal transition-colors"
        >
          {cta}
        </Link>
      </p>
    </aside>
  );
}
