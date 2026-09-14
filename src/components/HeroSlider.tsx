/**
 * HeroSlider Component — Advenco Blinds & Shutters
 *
 * Full-viewport hero section with:
 *  - Auto-playing image slideshow (5 slides, 4s interval, crossfade transition)
 *  - Ken Burns zoom effect on each slide image
 *  - Dark overlay for text readability
 *  - Animated headline + body + two CTA buttons
 *  - Arrow navigation controls
 *  - Accessible ARIA labels for slides and controls
 *
 * Background imagery is custom-created for Advenco and intentionally composed
 * with quiet space on the left so the campaign copy remains legible.
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ---------- Slide Data (from WordPress hero slider) ---------- */

interface Slide {
  id: number;
  heading: string;
  headingItalic?: string; // portion of heading to italicise (Playfair Display)
  description: string;
  /** Background image URL */
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    heading: "Transform Your Space with",
    headingItalic: "Elegance",
    description:
      "Discover premium window blinds and shutters that blend style, innovation, and comfort to elevate your home.",
    image: "/images/hero/advenco-hero-shutters.webp",
    alt: "Sunlit living room with fitted plantation shutters",
  },
  {
    id: 2,
    heading: "Where Style Meets",
    headingItalic: "Innovation",
    description:
      "Enhance your living spaces with our beautifully crafted blinds and shutters, designed to add elegance and functionality to every room.",
    image: "/images/hero/advenco-hero-roller-blinds.webp",
    alt: "Contemporary dining room with tailored roller blinds",
  },
  {
    id: 3,
    heading: "Redefining Window",
    headingItalic: "Elegance",
    description:
      "Premium blinds and shutters that bring sophistication and practical comfort to your home, one window at a time.",
    image: "/images/hero/advenco-hero-day-night-blinds.webp",
    alt: "Calm bedroom with day and night blinds in a bay window",
  },
  {
    id: 4,
    heading: "Crafting Comfort,",
    headingItalic: "One Window at a Time",
    description:
      "Upgrade your home's aesthetics and functionality with our high-quality window blinds and shutters, tailored for modern living.",
    image: "/images/hero/advenco-hero-vertical-blinds.webp",
    alt: "Modern kitchen with vertical blinds at bifold doors",
  },
  {
    id: 5,
    heading: "Blinds and Shutters",
    headingItalic: "Designed for You",
    description:
      "Experience the perfect balance of beauty and innovation with our bespoke window solutions, crafted for style and comfort.",
    image: "/images/hero/advenco-hero-venetian-blinds.webp",
    alt: "Home office with natural wood Venetian blinds",
  },
];

const AUTOPLAY_INTERVAL = 4000; // ms between slide transitions

/* ---------- Component ---------- */

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* ---- Navigate to a specific slide ---- */
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 50);
    },
    [currentIndex, isTransitioning]
  );

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  /* ---- Autoplay timer ---- */
  useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  const current = slides[currentIndex];

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[560px] max-h-[900px] overflow-hidden"
      aria-label="Hero section — featured window treatment gallery"
    >
      {/* ============================================================
          Background Image Slides (crossfade)
      ============================================================ */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          role="img"
          aria-label={slide.alt}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            /* Ken Burns subtle zoom */
            transform: idx === currentIndex ? "scale(1.04)" : "scale(1)",
            transition:
              "opacity 1s ease-in-out, transform 6s ease-in-out",
          }}
        />
      ))}

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10"
        aria-hidden="true"
      />

      {/* ============================================================
          Hero Content — text + CTAs
      ============================================================ */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Pre-heading badge */}
        <p
          key={`pre-${currentIndex}`}
          className="text-white/70 text-[11px] sm:text-xs font-normal tracking-[0.25em] uppercase mb-5 animate-fade-in-up"
          style={{ animationFillMode: "both", fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
        >
          Premium Blinds &amp; Shutters &mdash; Made in Britain
        </p>

        {/* Main heading */}
        <h1
          key={`h1-${currentIndex}`}
          className="text-white animate-fade-in-up delay-100 mb-6 leading-[1.15]"
          style={{
            fontFamily: "var(--font-heading, 'Outfit', sans-serif)",
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            animationFillMode: "both",
          }}
        >
          {/* Main part — thin/light weight */}
          <span style={{ fontWeight: 300, display: "block" }}>
            {current.heading}
          </span>
          {/* Italic bold part — on its own line */}
          {current.headingItalic && (
            <span
              style={{
                fontWeight: 700,
                fontStyle: "italic",
                display: "block",
              }}
            >
              {current.headingItalic}
            </span>
          )}
        </h1>

        {/* Description */}
        <p
          key={`desc-${currentIndex}`}
          className="text-white/80 text-sm sm:text-base max-w-lg mb-9 leading-relaxed animate-fade-in-up delay-200"
          style={{ animationFillMode: "both", fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)", fontWeight: 400 }}
        >
          {current.description}
        </p>

        {/* CTA Buttons */}
        <div
          key={`cta-${currentIndex}`}
          className="flex flex-wrap gap-4 animate-fade-in-up delay-300"
          style={{ animationFillMode: "both" }}
        >
          {/* Primary CTA — filled teal — scrolls to the on-page "Get In Touch" quote form */}
          <Link
            id="hero-design-your-view-btn"
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#00aeef] hover:bg-[#0099d4] text-white text-sm font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Design Your View
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Secondary CTA — solid white — external shop link */}
          <a
            id="hero-explore-collection-btn"
            href="https://www.onlineblindsexpress.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-[#1e293b] text-sm font-bold tracking-widest uppercase transition-colors rounded-sm"
          >
            Explore Collection
          </a>
        </div>
      </div>

      {/* ============================================================
          Arrow Navigation Controls
      ============================================================ */}
      {/* Previous arrow */}
      <button
        id="hero-prev-btn"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all"
      >
        <svg className="w-5 h-5" viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true">
          <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        id="hero-next-btn"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all"
      >
        <svg className="w-5 h-5" viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true">
          <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
        </svg>
      </button>

      {/* ============================================================
          Slide Dot Indicators
      ============================================================ */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-[#00aeef]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
