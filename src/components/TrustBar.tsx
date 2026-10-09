/**
 * TrustBar Component — Advenco Blinds & Shutters
 *
 * A horizontal strip below the hero showing three trust signals:
 *   1. Made in Britain  — Locally crafted quality
 *   2. Price Match Guarantee — Best value assured
 *   3. Free Installation — Professional fitting included
 *
 * Design (matching the provided screenshot):
 *  - Clean white background
 *  - Small, thin outline icons in muted grey — NO coloured circle backgrounds
 *  - Bold dark title text
 *  - Light grey subtitle text below each title
 *  - Three items evenly spaced in a row
 */

import React from "react";
import { seasonalCopy } from "@/data/seasonal";

/* ---------- Trust Items Data ---------- */

interface TrustItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const trustItems: TrustItem[] = [
  {
    id: "made-in-britain",
    icon: (
      /* Badge / ribbon icon — thin outline, muted */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
        />
      </svg>
    ),
    title: "Made in Britain",
    subtitle: "Locally crafted quality",
  },
  {
    id: "price-match",
    icon: (
      /* Shield outline icon — thin, muted */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: seasonalCopy?.trustPriceMatchTitle ?? "Price Match Guarantee",
    subtitle: "Best value assured",
  },
  {
    id: "free-installation",
    icon: (
      /* Wrench / tool icon — thin outline, muted */
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.65-4.62a5.5 5.5 0 00-7.78 7.78"
        />
      </svg>
    ),
    title: seasonalCopy?.trustFreeInstallationTitle ?? "Free Installation",
    subtitle: "Professional fitting included",
  },
];

/* ---------- Component ---------- */

export default function TrustBar() {
  return (
    <div
      className="bg-white border-b border-gray-100 py-5 sm:py-7"
      aria-label="Trust signals"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Three-column flex — evenly spaced, dividers between */}
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 list-none p-0 m-0 sm:divide-x sm:divide-gray-200">
          {trustItems.map((item) => (
            <li
              key={item.id}
              id={`trust-item-${item.id}`}
              className="flex items-center gap-3.5 sm:px-12 lg:px-16"
            >
              {/* Icon — muted grey, NO background circle */}
              <span className="shrink-0 text-[#9ca3af]" aria-hidden="true">
                {item.icon}
              </span>

              {/* Text group */}
              <div>
                {/* Title — bold, dark */}
                <p
                  className="font-semibold text-[#1e293b] text-sm leading-snug"
                  style={{ fontFamily: "var(--font-heading, 'Outfit', sans-serif)" }}
                >
                  {item.title}
                </p>
                {/* Subtitle — light grey */}
                <p
                  className="text-[#94a3b8] text-xs mt-0.5 leading-snug"
                  style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
                >
                  {item.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
