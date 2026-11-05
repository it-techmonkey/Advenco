/**
 * SeasonalBanner — Promo Strip
 *
 * Slim announcement strip rendered directly under the main nav on every page
 * while a seasonal campaign is active (see src/data/seasonal.ts). Renders
 * nothing when no campaign is running.
 *
 * Sits below the nav rather than above it so the sticky nav and the mobile
 * drawer offset are unaffected. Uses the existing graphite and teal palette
 * to give the Black Friday campaign a distinct, high-contrast treatment.
 */

import Link from "next/link";
import { seasonalCopy } from "@/data/seasonal";

export default function SeasonalBanner() {
  if (!seasonalCopy) return null;
  const { title, detail, cta } = seasonalCopy.announcement;

  return (
    <aside
      aria-label={title}
      className="border-b border-white/10 bg-advenco-graphite text-white text-xs sm:text-sm py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-6 gap-y-2.5 text-center">
        <p className="flex items-center justify-center gap-x-2.5">
          <svg
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-advenco-teal"
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
          <span className="font-heading text-sm sm:text-base font-extrabold tracking-widest uppercase">{title}</span>
        </p>
        <p className="font-semibold text-white">{detail}</p>
        <Link
          href="#contact"
          className="inline-flex min-h-10 items-center justify-center rounded-sm bg-advenco-teal px-5 py-2.5 font-bold text-white hover:bg-advenco-teal-dark transition-colors whitespace-nowrap"
        >
          {cta}
        </Link>
      </div>
    </aside>
  );
}
