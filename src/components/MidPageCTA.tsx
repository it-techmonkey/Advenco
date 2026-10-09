/**
 * MidPageCTA — Inline Enquiry Strip
 *
 * Light, on-brand strip used once per page to prompt an enquiry right
 * after the section that builds the most interest, instead of relying
 * solely on the bottom ContactSection. Product-specific copy drives
 * curiosity about that exact category. Links straight to the existing
 * #contact form — no new form, no popup.
 *
 * Styled to sit inside the page's existing white/alabaster rhythm
 * (bordered card, teal accent) rather than as a separate dark section,
 * so it reads as part of the page instead of an interruption.
 */

import Link from "next/link";
import { seasonalCopy } from "@/data/seasonal";

export default function MidPageCTA({ productName }: { productName: string }) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="bg-white border border-advenco-border border-l-4 border-l-advenco-teal rounded-sm shadow-sm px-6 py-7 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-advenco-teal text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              {seasonalCopy?.midCtaEyebrow ?? "Free, No-Obligation Quote"}
            </p>
            <h3 className="font-heading text-advenco-graphite-mid text-xl sm:text-2xl font-semibold leading-snug">
              Curious what {productName.toLowerCase()} would cost for your space?
            </h3>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-advenco-teal hover:bg-advenco-teal-dark text-white text-sm font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Get a Free {productName} Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Derives a clean, human-readable product name from a page slug so every
 * CommercialBlindPage-based page gets accurate CTA copy automatically,
 * without needing a manual per-page data entry.
 *
 * e.g. "roto-window-blinds" -> "Roto Window Blinds"
 *      "blinds-for-hospitals" -> "Blinds for Hospitals"
 */
const SLUG_NAME_OVERRIDES: Record<string, string> = {
  "blinds-screens": "Blind Screens",
};

export function productNameFromSlug(slug: string): string {
  if (SLUG_NAME_OVERRIDES[slug]) return SLUG_NAME_OVERRIDES[slug];

  const smallWords = new Set(["for", "and", "in", "the", "of", "&"]);
  return slug
    .split("-")
    .map((word, i) =>
      i > 0 && smallWords.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}
