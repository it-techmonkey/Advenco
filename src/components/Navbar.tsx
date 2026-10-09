/**
 * Navbar Component — Advenco Blinds & Shutters
 *
 * A two-tier navigation:
 *  - Top utility bar: email, phone, and "FREE CONSULTATION & INSTALLATION" tagline
 *  - Main nav bar: logo, nav links (with dropdowns), and "Get A Quote" CTA button
 *  - BLINDS gets a two-column mega-menu: category list on the left, that
 *    category's sub-products on the right (grid of icon + label cards)
 *
 * Features:
 *  - Sticky on scroll with shadow
 *  - Mobile hamburger menu with slide-in drawer
 *  - Accessible keyboard navigation
 *  - Matches the new design's white nav with teal CTA button
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SeasonalBanner from "@/components/SeasonalBanner";
import { seasonalCopy } from "@/data/seasonal";

/* ---------- Type Definitions ---------- */

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

interface BlindSubProduct {
  label: string;
  href: string;
}

interface BlindCategory {
  label: string;
  href: string;
  products: BlindSubProduct[];
}

/* ---------- Blinds Mega-Menu Data ---------- */
/* Left column = category, right column = that category's sub-products.
   Slugs are best-effort until real page links are supplied. */

const blindCategories: BlindCategory[] = [
  {
    label: "Products",
    href: "/roller-blinds/",
    products: [
      { label: "Roller Blinds",                  href: "/roller-blinds/" },
      { label: "Roman Blinds",                   href: "/roman-blinds/" },
      { label: "Vertical Blinds",                 href: "/vertical-blinds/" },
      { label: "Blackout Vertical Blinds",        href: "/blackout-vertical-blinds/" },
      { label: "Bifold Door Vertical Blinds",     href: "/bifold-door-vertical-blinds/" },
      { label: "Wooden Window Blinds",            href: "/wooden-window-blinds/" },
      { label: "Wooden Venetian Perfect Fit Blinds", href: "/wooden-venetian-perfect-fit-blinds/" },
      { label: "Pleated Blinds",                  href: "/pleated-blinds/" },
      { label: "Perfect Fit Blinds",               href: "/perfect-fit-blinds/" },
      { label: "Skylight Window Blinds",          href: "/skylight-window-blinds/" },
      { label: "Day and Night Motorised Blinds",  href: "/day-and-night-motorised-blinds/" },
    ],
  },
  {
    label: "Commercial Blinds",
    href: "/commercial-blinds/",
    products: [
      { label: "Blinds for Hospitals",           href: "/blinds-for-hospitals/" },
      { label: "Blinds for Commercial Buildings",href: "/blinds-for-commercial-buildings/" },
      { label: "Blinds for School",              href: "/blinds-for-school/" },
      { label: "Window Blinds for Hotel",        href: "/window-blinds-for-hotels/" },
      { label: "Window Blinds for Colleges",     href: "/window-blinds-for-colleges/" },
    ],
  },
  {
    label: "Blinds by Room",
    href: "/blinds-by-room/",
    products: [
      { label: "Bathroom Window Blinds",    href: "/bathroom-window-blinds/" },
      { label: "Bedroom Window Blinds",     href: "/bedroom-window-blinds/" },
      { label: "Kitchen Window Blinds",     href: "/kitchen-window-blinds/" },
      { label: "Dining Room Window Blinds", href: "/dining-room-window-blinds/" },
      { label: "Living Room Blinds",        href: "/living-room-blinds/" },
      { label: "Office Window Blinds",      href: "/office-window-blinds/" },
    ],
  },
  {
    label: "Vertical Blinds",
    href: "/vertical-blinds/",
    products: [
      { label: "Waterproof Vertical Blinds",   href: "/waterproof-vertical-blinds/" },
      { label: "Dimout Vertical Blinds",       href: "/dimout-vertical-blinds/" },
      { label: "Conservatory Vertical Blinds", href: "/conservatory-vertical-blinds/" },
      { label: "Bifold Door Vertical Blinds",  href: "/bifold-door-vertical-blinds/" },
      { label: "Blackout Vertical Blinds",     href: "/blackout-vertical-blinds/" },
    ],
  },
  {
    label: "Velux Blinds",
    href: "/velux-blinds/",
    products: [
      { label: "Roto Window Blinds",     href: "/roto-window-blinds/" },
      { label: "Skylight Window Blinds", href: "/skylight-window-blinds/" },
      { label: "Fakro Window Blinds",    href: "/fakro-window-blinds/" },
      { label: "Dakstra Window Blinds",  href: "/dakstra-window-blinds/" },
      { label: "Roofline Window Blinds", href: "/roofline-window-blinds/" },
      { label: "Velux Window Blinds",    href: "/velux-blinds/" },
    ],
  },
  {
    label: "Perfect Fit",
    href: "/perfect-fit-honeycomb/",
    products: [
      { label: "Perfect Fit Honeycomb",              href: "/perfect-fit-honeycomb/" },
      { label: "Perfect Fit Day and Night Blinds",   href: "/perfect-fit-day-and-night-blinds/" },
      { label: "Perfect Fit Venetian Blinds",        href: "/perfect-fit-venetian-blinds/" },
      { label: "Pleated Perfect Fit Blinds",         href: "/pleated-perfect-fit-blinds/" },
      { label: "Perfect Fit Roller Blinds",          href: "/perfect-fit-roller-blinds/" },
      { label: "Wooden Venetian Perfect Fit Blinds", href: "/wooden-venetian-perfect-fit-blinds/" },
    ],
  },
  {
    label: "Motorized Blinds",
    href: "/day-and-night-motorised-blinds/",
    products: [
      { label: "Day and Night Motorised Blinds", href: "/day-and-night-motorised-blinds/" },
      { label: "Roman Motorised Blinds",         href: "/roman-motorised-blinds/" },
      { label: "Roller Motorised Blinds",        href: "/roller-motorised-blinds/" },
    ],
  },
];

/* ---------- Navigation Data ---------- */

/** HOME renders first; the BLINDS mega-menu trigger renders right after it
 *  (see desktop/mobile render below), then the remaining items follow. */
const homeItem: NavItem = { label: "HOME", href: "/" };

const navItems: NavItem[] = [
  { label: "SHUTTERS", href: "/shutters/" },
  {
    /* AREAS — dropdown with showroom locations */
    label: "AREAS",
    href: "#",
    dropdown: [
      { label: "Morley Showroom",     href: "/advenco-blinds-and-shutters-showroom-in-morley/" },
      { label: "Maidenhead Showroom", href: "/maidenhead-showroom/" },
      { label: "All Areas",           href: "/areas/" },
    ],
  },
  { label: "BLINDS SCREEN", href: "/blinds-screens/" },
  { label: "BLOGS",         href: "/blog/" },
  { label: "CONTACT US",    href: "/contact-us/" },
];

/* ---------- Sub-product icons ---------- */
/* Generic blind glyph — default for most sub-products */

function BlindIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      <line x1="8" y1="14" x2="40" y2="14" />
      <line x1="8" y1="21" x2="40" y2="21" />
      <line x1="8" y1="28" x2="40" y2="28" />
      <line x1="8" y1="35" x2="40" y2="35" />
    </svg>
  );
}

/* Blind with a small building glyph on the slat — used for commercial/institutional products */
function BuildingBlindIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      <line x1="8" y1="14" x2="40" y2="14" />
      <rect x="20" y="17" width="8" height="10" fill="currentColor" stroke="none" />
      <line x1="8" y1="28" x2="40" y2="28" />
      <line x1="8" y1="35" x2="40" y2="35" />
    </svg>
  );
}

/* Room glyphs — thin line icons used for the "Blinds by Room" mega-menu column */
function BathroomIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 24h32a2 2 0 0 1 2 2v2a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8v-2a2 2 0 0 1 2-2Z" />
      <path d="M9 24v-9a4 4 0 0 1 4-4c1.8 0 3.3 1.1 3.8 2.7" />
      <line x1="10" y1="36" x2="10" y2="39" />
      <line x1="34" y1="36" x2="34" y2="39" />
    </svg>
  );
}

function BedroomIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 34V17a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7" />
      <path d="M42 34V22a4 4 0 0 0-4-4H16a4 4 0 0 0-4 4v3" />
      <path d="M6 27h36" />
      <line x1="6" y1="34" x2="6" y2="38" />
      <line x1="42" y1="34" x2="42" y2="38" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="12" width="34" height="26" rx="1.5" />
      <line x1="7" y1="22" x2="41" y2="22" />
      <line x1="24" y1="22" x2="24" y2="38" />
      <circle cx="18" cy="17" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="30" cy="17" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiningRoomIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="24" cy="22" rx="15" ry="4" />
      <line x1="24" y1="10" x2="24" y2="14" />
      <path d="M18 10h12" />
      <line x1="12" y1="26" x2="9" y2="38" />
      <line x1="36" y1="26" x2="39" y2="38" />
    </svg>
  );
}

function LivingRoomIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 28v-6a4 4 0 0 1 4-4h1a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6" />
      <path d="M6 28h36v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5Z" />
      <line x1="9" y1="35" x2="9" y2="39" />
      <line x1="39" y1="35" x2="39" y2="39" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="14" width="36" height="18" rx="1.5" />
      <line x1="6" y1="20" x2="42" y2="20" />
      <line x1="16" y1="32" x2="14" y2="38" />
      <line x1="32" y1="32" x2="34" y2="38" />
      <line x1="10" y1="38" x2="38" y2="38" />
    </svg>
  );
}

/* Vertical-blind glyphs — thin line icons used for the "Vertical Blinds" mega-menu column */
function WaterproofVerticalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="10" y1="6" x2="10" y2="42" />
      <line x1="17" y1="6" x2="17" y2="42" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="31" y1="6" x2="31" y2="42" />
      <line x1="38" y1="6" x2="38" y2="42" />
      <path d="M24 12c1.6 2 2.4 3.4 2.4 4.8a2.4 2.4 0 1 1-4.8 0c0-1.4.8-2.8 2.4-4.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DimoutVerticalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
      <path d="M9 6 13 42" />
      <path d="M16.5 6 20.5 42" />
      <path d="M24 6 28 42" />
      <path d="M31.5 6 35.5 42" />
      <path d="M39 6 43 42" />
    </svg>
  );
}

function ConservatoryVerticalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18 24 7l18 11" />
      <line x1="9" y1="18" x2="9" y2="42" />
      <line x1="15" y1="18" x2="15" y2="42" />
      <line x1="21" y1="18" x2="21" y2="42" />
      <line x1="27" y1="18" x2="27" y2="42" />
      <line x1="33" y1="18" x2="33" y2="42" />
      <line x1="39" y1="18" x2="39" y2="42" />
    </svg>
  );
}

function BifoldDoorVerticalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 8v32l10-4V12Z" />
      <path d="M18 12l12-4v32l-12-4" />
      <path d="M30 8l10 4v24l-10 4" />
    </svg>
  );
}

function BlackoutVerticalIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="6" width="5" height="36" fill="currentColor" stroke="none" />
      <rect x="15" y="6" width="5" height="36" fill="currentColor" stroke="none" />
      <rect x="23" y="6" width="5" height="36" fill="currentColor" stroke="none" />
      <rect x="31" y="6" width="5" height="36" fill="currentColor" stroke="none" />
      <rect x="39" y="6" width="4" height="36" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Product labels that map to a vertical-blind-specific icon (used in "Vertical Blinds") */
const verticalBlindIcons: Record<string, () => React.JSX.Element> = {
  "Waterproof Vertical Blinds": WaterproofVerticalIcon,
  "Dimout Vertical Blinds": DimoutVerticalIcon,
  "Conservatory Vertical Blinds": ConservatoryVerticalIcon,
  "Bifold Door Vertical Blinds": BifoldDoorVerticalIcon,
  "Blackout Vertical Blinds": BlackoutVerticalIcon,
};

/* Velux/roof-window glyphs — thin line icons used for the "Velux Blinds" mega-menu column */
function RotoWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 10h22l6 6v22H10Z" />
      <line x1="10" y1="24" x2="38" y2="24" />
      <line x1="10" y1="32" x2="38" y2="32" />
    </svg>
  );
}

function SkylightWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 16 24 8l14 8v22H10Z" />
      <line x1="24" y1="8" x2="24" y2="38" />
      <line x1="10" y1="24" x2="38" y2="24" />
    </svg>
  );
}

function FakroWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 8h22l4 32H9Z" />
      <line x1="11.5" y1="24" x2="36.5" y2="24" />
      <path d="M18 8l-3 32M30 8l3 32" />
    </svg>
  );
}

function DakstraWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 6h18l6 36H9Z" />
      <line x1="11.5" y1="24" x2="36.5" y2="24" />
    </svg>
  );
}

function RooflineWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12h30v26H9Z" />
      <rect x="13" y="16" width="22" height="8" fill="currentColor" stroke="none" />
      <line x1="9" y1="30" x2="39" y2="30" />
    </svg>
  );
}

function VeluxWindowIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 14 24 6l16 8v24H8Z" />
      <path d="M24 6v32M8 14h32" />
      <line x1="14" y1="24" x2="18" y2="24" />
      <line x1="30" y1="24" x2="34" y2="24" />
    </svg>
  );
}

/* Product labels that map to a Velux/roof-window-specific icon (used in "Velux Blinds") */
const veluxBlindIcons: Record<string, () => React.JSX.Element> = {
  "Roto Window Blinds": RotoWindowIcon,
  "Skylight Window Blinds": SkylightWindowIcon,
  "Fakro Window Blinds": FakroWindowIcon,
  "Dakstra Window Blinds": DakstraWindowIcon,
  "Roofline Window Blinds": RooflineWindowIcon,
  "Velux Window Blinds": VeluxWindowIcon,
};

/* Perfect Fit glyphs — thin line icons used for the "Perfect Fit" mega-menu column */
function HoneycombIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      {[13, 20, 27, 34].map((y) => (
        <path key={y} d={`M8 ${y}h4l3 3.5-3 3.5H8`} />
      ))}
      {[13, 20, 27, 34].map((y) => (
        <path key={`r-${y}`} d={`M40 ${y}h-4l-3 3.5 3 3.5h4`} />
      ))}
    </svg>
  );
}

function DayNightIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      <rect x="8" y="12" width="32" height="5" fill="currentColor" stroke="none" />
      <rect x="8" y="22" width="32" height="5" fill="currentColor" stroke="none" />
      <rect x="8" y="32" width="32" height="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PerfectFitVenetianIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      <line x1="8" y1="6" x2="40" y2="6" strokeWidth={3} />
      {[13, 18, 23, 28, 33, 38].map((y) => (
        <line key={y} x1="8" y1={y} x2="40" y2={y} />
      ))}
    </svg>
  );
}

function PleatedPerfectFitIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6h32v14l-32 0Z" />
      <path d="M8 12l4-3 4 3 4-3 4 3 4-3 4 3 4-3" />
      <path d="M8 16l4-3 4 3 4-3 4 3 4-3 4 3 4-3" />
      <rect x="8" y="20" width="32" height="16" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

function PerfectFitRollerIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="7" width="30" height="4" rx="1" fill="currentColor" stroke="none" />
      <path d="M12 11v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V11" />
      <line x1="12" y1="20" x2="36" y2="20" />
    </svg>
  );
}

function WoodenVenetianPerfectFitIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      {[11, 16.5, 22, 27.5, 33, 38.5].map((y) => (
        <rect key={y} x="9.5" y={y - 1.6} width="29" height="3.2" fill="currentColor" fillOpacity="0.5" stroke="none" />
      ))}
    </svg>
  );
}

/* Product labels that map to a Perfect-Fit-specific icon (used in "Perfect Fit") */
const perfectFitIcons: Record<string, () => React.JSX.Element> = {
  "Perfect Fit Honeycomb": HoneycombIcon,
  "Perfect Fit Day and Night Blinds": DayNightIcon,
  "Perfect Fit Venetian Blinds": PerfectFitVenetianIcon,
  "Pleated Perfect Fit Blinds": PleatedPerfectFitIcon,
  "Perfect Fit Roller Blinds": PerfectFitRollerIcon,
  "Wooden Venetian Perfect Fit Blinds": WoodenVenetianPerfectFitIcon,
};

/* Motorized-blind glyphs — blind + remote/wifi motif, used for the "Motorized Blinds" mega-menu column */
function DayNightMotorisedIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="6" width="22" height="4" rx="1" fill="currentColor" stroke="none" />
      <rect x="7" y="12" width="18" height="4" fill="currentColor" fillOpacity="0.45" stroke="none" />
      <rect x="7" y="18" width="18" height="4" stroke="currentColor" fill="none" />
      <rect x="7" y="24" width="18" height="4" fill="currentColor" fillOpacity="0.45" stroke="none" />
      <line x1="10" y1="30" x2="10" y2="35" />
      <line x1="22" y1="30" x2="22" y2="35" />
      <rect x="33" y="18" width="9" height="16" rx="2" />
      <line x1="37.5" y1="22" x2="37.5" y2="22" strokeWidth={2.5} />
      <path d="M34 14a5 5 0 0 1 7 0" />
      <path d="M35.5 11.5a8 8 0 0 1 4 0" />
    </svg>
  );
}

function RomanMotorisedIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6h24v10l-24 0Z" />
      <path d="M8 12l4-3 4 3 4-3 4 3 4-3" />
      <path d="M8 16l4-3 4 3 4-3 4 3 4-3" />
      <rect x="8" y="20" width="24" height="14" fill="currentColor" fillOpacity="0.1" />
      <rect x="33" y="18" width="9" height="16" rx="2" />
      <path d="M34 14a5 5 0 0 1 7 0" />
      <path d="M35.5 11.5a8 8 0 0 1 4 0" />
    </svg>
  );
}

function RollerMotorisedIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="24" height="4" rx="1" fill="currentColor" stroke="none" />
      <path d="M8 10v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10" />
      <line x1="8" y1="20" x2="28" y2="20" />
      <rect x="33" y="18" width="9" height="16" rx="2" />
      <path d="M34 14a5 5 0 0 1 7 0" />
      <line x1="37.5" y1="24" x2="37.5" y2="26" />
      <path d="M35.5 25v3M39.5 25v3" />
    </svg>
  );
}

/* Product labels that map to a Motorized-blind-specific icon (used in "Motorized Blinds") */
const motorizedBlindIcons: Record<string, () => React.JSX.Element> = {
  "Day and Night Motorised Blinds": DayNightMotorisedIcon,
  "Roman Motorised Blinds": RomanMotorisedIcon,
  "Roller Motorised Blinds": RollerMotorisedIcon,
};

/* Product glyphs — used for the top-level "Products" mega-menu column */
function RollerBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="34" height="4" rx="1" fill="currentColor" stroke="none" />
      <path d="M10 11v22a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11" />
      <line x1="10" y1="21" x2="38" y2="21" />
    </svg>
  );
}

function RomanBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 6h32v10l-32 0Z" />
      <path d="M8 12l4-3 4 3 4-3 4 3 4-3 4 3 4-3" />
      <path d="M8 16l4-3 4 3 4-3 4 3 4-3 4 3 4-3" />
      <rect x="8" y="20" width="32" height="16" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

function VerticalBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="10" y1="6" x2="10" y2="42" />
      <line x1="17" y1="6" x2="17" y2="42" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <line x1="31" y1="6" x2="31" y2="42" />
      <line x1="38" y1="6" x2="38" y2="42" />
    </svg>
  );
}

function WoodenWindowBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="1" />
      {[13, 19, 25, 31, 37].map((y) => (
        <rect key={y} x="9.5" y={y - 2} width="29" height="4" fill="currentColor" fillOpacity="0.55" stroke="none" />
      ))}
    </svg>
  );
}

function PleatedBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 8l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3" />
      <path d="M8 14l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3" />
      <path d="M8 20l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3" />
      <rect x="8" y="24" width="32" height="14" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

function PerfectFitBlindsProductIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="10" y="10" width="28" height="28" rx="1" />
      <line x1="10" y1="17" x2="38" y2="17" />
      <line x1="10" y1="24" x2="38" y2="24" />
      <line x1="10" y1="31" x2="38" y2="31" />
      <path d="M6 10v-2a2 2 0 0 1 2-2h2M40 6h2a2 2 0 0 1 2 2v2M42 38v2a2 2 0 0 1-2 2h-2M8 40H6a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

/* Product labels that map to a top-level-product-specific icon (used in "Products") */
const topLevelProductIcons: Record<string, () => React.JSX.Element> = {
  "Roller Blinds": RollerBlindsProductIcon,
  "Roman Blinds": RomanBlindsProductIcon,
  "Vertical Blinds": VerticalBlindsProductIcon,
  "Blackout Vertical Blinds": BlackoutVerticalIcon,
  "Bifold Door Vertical Blinds": BifoldDoorVerticalIcon,
  "Wooden Window Blinds": WoodenWindowBlindsProductIcon,
  "Wooden Venetian Perfect Fit Blinds": WoodenVenetianPerfectFitIcon,
  "Pleated Blinds": PleatedBlindsProductIcon,
  "Perfect Fit Blinds": PerfectFitBlindsProductIcon,
  "Skylight Window Blinds": SkylightWindowIcon,
  "Day and Night Motorised Blinds": DayNightMotorisedIcon,
};

/* Product labels that should render the building icon instead of the generic blind icon */
const buildingIconProducts = new Set([
  "Blinds for Commercial Buildings",
  "Blinds for School",
  "Window Blinds for Hotel",
  "Window Blinds for Colleges",
]);

/* Product labels that map to a room-specific icon (used in "Blinds by Room") */
const roomIcons: Record<string, () => React.JSX.Element> = {
  "Bathroom Window Blinds": BathroomIcon,
  "Bedroom Window Blinds": BedroomIcon,
  "Kitchen Window Blinds": KitchenIcon,
  "Dining Room Window Blinds": DiningRoomIcon,
  "Living Room Blinds": LivingRoomIcon,
  "Office Window Blinds": OfficeIcon,
};

function SubProductIcon({ label }: { label: string }) {
  const TopLevelIcon = topLevelProductIcons[label];
  if (TopLevelIcon) return <TopLevelIcon />;
  const RoomIcon = roomIcons[label];
  if (RoomIcon) return <RoomIcon />;
  const VerticalIcon = verticalBlindIcons[label];
  if (VerticalIcon) return <VerticalIcon />;
  const VeluxIcon = veluxBlindIcons[label];
  if (VeluxIcon) return <VeluxIcon />;
  const PerfectFitIcon = perfectFitIcons[label];
  if (PerfectFitIcon) return <PerfectFitIcon />;
  const MotorizedIcon = motorizedBlindIcons[label];
  if (MotorizedIcon) return <MotorizedIcon />;
  return buildingIconProducts.has(label) ? <BuildingBlindIcon /> : <BlindIcon />;
}

/* ---------- Component ---------- */

export default function Navbar() {
  // Scroll state — adds shadow to navbar when user scrolls down
  const [isScrolled, setIsScrolled] = useState(false);
  // Mobile menu open/close
  const [mobileOpen, setMobileOpen] = useState(false);
  // Track which dropdown is open (by label)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // BLINDS mega-menu open state + which category is active in the left column
  const [blindsMenuOpen, setBlindsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(blindCategories[0].label);
  // Mobile "BLINDS" accordion — which category is expanded
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Close mobile menu on route change ---- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  /* ---- Close dropdowns/mega-menu when clicking outside ---- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setBlindsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* ============================================================
          Top Utility Bar — contact info + tagline
      ============================================================ */}
      <div className="bg-advenco-graphite text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: email + phone */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="mailto:info@advencoblindsandshutters.co.uk"
              className="flex items-center gap-2 hover:text-advenco-teal transition-colors"
              aria-label="Email Advenco"
            >
              {/* Envelope icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              <span>info@advencoblindsandshutters.co.uk</span>
            </a>
            <a
              href="tel:08000541880"
              className="flex items-center gap-2 hover:text-advenco-teal transition-colors"
              aria-label="Call Advenco"
            >
              {/* Phone icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
              </svg>
              <span>0800 054 1880</span>
            </a>
          </div>

          {/* Right: tagline */}
          <span className="hidden sm:block font-medium tracking-wider text-xs text-white/70 uppercase">
            {seasonalCopy?.topBarTagline ?? "Free Consultation & Installation"}
          </span>
        </div>
      </div>

      {/* ============================================================
          Main Navigation Bar
      ============================================================ */}
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ---- Logo ---- */}
            <Link href="/" className="flex items-center shrink-0" aria-label="Advenco Home">
              <Image
                src="/images/2024/10/Advenco-Logo.webp"
                alt="Advenco Blinds and Shutters Logo"
                width={60}
                height={60}
                priority
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </Link>

            {/* ---- Desktop Navigation Links ---- */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2" role="menubar">
              {/* HOME — always first */}
              <li role="none">
                <Link
                  href={homeItem.href}
                  role="menuitem"
                  className="block px-3 py-2 font-heading text-[12px] xl:text-[13px] font-semibold text-advenco-graphite-mid hover:text-advenco-teal transition-colors uppercase"
                >
                  {homeItem.label}
                </Link>
              </li>

              {/* BLINDS — mega-menu trigger, right after Home */}
              <li className="relative" role="none">
                <button
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={blindsMenuOpen}
                  onClick={() => setBlindsMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 font-heading text-[12px] xl:text-[13px] font-semibold text-advenco-graphite-mid hover:text-advenco-teal transition-colors uppercase"
                >
                  Blinds
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${blindsMenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ---- BLINDS Mega-Menu Panel ---- */}
                {blindsMenuOpen && (
                  <div
                    role="menu"
                    aria-label="Blinds submenu"
                    className="absolute top-full left-0 mt-1 w-[min(90vw,860px)] bg-white shadow-xl rounded-lg border border-advenco-border z-50 animate-fade-in overflow-hidden"
                  >
                    <div className="flex max-h-[70vh]">
                      {/* Left column — categories */}
                      <ul className="w-56 shrink-0 bg-advenco-alabaster border-r border-advenco-border py-2 overflow-y-auto">
                        {blindCategories.map((cat) => (
                          <li key={cat.label}>
                            <button
                              role="menuitem"
                              onMouseEnter={() => setActiveCategory(cat.label)}
                              onFocus={() => setActiveCategory(cat.label)}
                              onClick={() => setActiveCategory(cat.label)}
                              className={`w-full text-left px-5 py-3 text-[12px] font-heading font-semibold tracking-wide uppercase transition-colors ${
                                activeCategory === cat.label
                                  ? "bg-white text-advenco-teal"
                                  : "text-advenco-graphite-mid hover:bg-white hover:text-advenco-teal"
                              }`}
                            >
                              {cat.label}
                            </button>
                          </li>
                        ))}
                      </ul>

                      {/* Right column — sub-products for active category */}
                      <div className="flex-1 p-6 overflow-y-auto">
                        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                          {blindCategories
                            .find((cat) => cat.label === activeCategory)
                            ?.products.map((product) => (
                              <Link
                                key={product.label}
                                href={product.href}
                                role="menuitem"
                                onClick={() => setBlindsMenuOpen(false)}
                                className="flex flex-col items-center text-center gap-2 group"
                              >
                                <span className="flex items-center justify-center w-16 h-16 rounded-lg border border-advenco-border text-advenco-graphite-mid group-hover:text-advenco-teal group-hover:border-advenco-teal transition-colors">
                                  <SubProductIcon label={product.label} />
                                </span>
                                <span className="text-[12px] font-medium text-advenco-graphite-mid group-hover:text-advenco-teal transition-colors leading-snug">
                                  {product.label}
                                </span>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {navItems.map((item) => (
                <li key={item.label} className="relative group" role="none">
                  {item.dropdown ? (
                    /* Items with dropdown */
                    <>
                      <button
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center gap-1 px-3 py-2 font-heading text-[12px] xl:text-[13px] font-semibold text-advenco-graphite-mid hover:text-advenco-teal transition-colors uppercase"
                      >
                        {item.label}
                        {/* Chevron icon */}
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Panel */}
                      {openDropdown === item.label && (
                        <ul
                          role="menu"
                          aria-label={`${item.label} submenu`}
                          className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 animate-fade-in"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.label} role="none">
                              <Link
                                href={sub.href}
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2.5 text-[13px] text-advenco-graphite-mid hover:bg-[#f0f9ff] hover:text-advenco-teal transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    /* Regular nav links */
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2 font-heading text-[12px] xl:text-[13px] font-semibold text-advenco-graphite-mid hover:text-advenco-teal transition-colors uppercase"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ---- CTA Button + Mobile Toggle ---- */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                id="get-a-quote-nav"
                href="#contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-advenco-teal hover:bg-advenco-teal-dark text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm"
              >
                Get A Quote
              </Link>

              {/* Mobile hamburger button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span
                  className={`block h-0.5 w-6 bg-advenco-graphite-mid transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-advenco-graphite-mid transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-advenco-graphite-mid transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            Mobile Navigation Drawer
        ============================================================ */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`lg:hidden fixed inset-0 top-26 z-40 bg-white overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-6 space-y-2">
            {/* HOME — always first */}
            <div className="border-b border-gray-100">
              <Link
                href={homeItem.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-semibold text-advenco-graphite-mid uppercase hover:text-advenco-teal transition-colors"
              >
                {homeItem.label}
              </Link>
            </div>

            {/* BLINDS — mobile accordion: category list, each expandable to its products */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleDropdown("BLINDS")}
                className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-widest text-advenco-graphite-mid uppercase"
              >
                Blinds
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === "BLINDS" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "BLINDS" && (
                <div className="pl-4 pb-3 space-y-1">
                  {blindCategories.map((cat) => (
                    <div key={cat.label}>
                      <button
                        onClick={() =>
                          setMobileActiveCategory((prev) => (prev === cat.label ? null : cat.label))
                        }
                        className="flex items-center justify-between w-full py-2 text-[13px] font-semibold text-advenco-graphite-mid uppercase"
                      >
                        {cat.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${
                            mobileActiveCategory === cat.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileActiveCategory === cat.label && (
                        <ul className="pl-3 pb-2 space-y-1.5">
                          {cat.products.map((product) => (
                            <li key={product.label}>
                              <Link
                                href={product.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1 text-sm text-advenco-muted hover:text-advenco-teal transition-colors"
                              >
                                {product.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-widest text-advenco-graphite-mid uppercase"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="pl-4 pb-3 space-y-2">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-sm text-advenco-muted hover:text-advenco-teal transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-semibold text-advenco-graphite-mid uppercase hover:text-advenco-teal transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-advenco-teal hover:bg-advenco-teal-dark text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-colors"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Seasonal promo strip — renders nothing outside a campaign */}
      <SeasonalBanner />
    </>
  );
}
