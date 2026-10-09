/**
 * BeyondStyle Component â€” Advenco Blinds & Shutters
 *
 * Two-column layout showing the advantages of choosing Advenco:
 *  - Left: Large image of a kitchen with plantation shutters
 *  - Right: Section label, heading, body text, and a 2Ã—2 grid of benefit cards
 *
 * Benefits (from WordPress "Advantages of Choosing Advenco" section):
 *  1. Unparalleled Light Control
 *  2. Enhanced Privacy
 *  3. Energy Efficient
 *  4. Built to Last
 *
 * Design: Light grey background, navy (#234896) icon accent circles,
 * bold Outfit headings, muted grey body text.
 */

import Image from "next/image";

/* ---------- Benefit Item Data ---------- */

interface Benefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: "light-control",
    icon: (
      /* Sun icon â€” navy colour to match brand */
      <svg className="w-6 h-6 text-[#234896]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Unparalleled Light Control",
    description:
      "Manage natural light to create a bright, airy ambience or a cosy, intimate atmosphere — exactly as you desire.",
  },
  {
    id: "enhanced-privacy",
    icon: (
      /* Lock closed icon â€” navy colour */
      <svg className="w-6 h-6 text-[#234896]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Enhanced Privacy",
    description:
      "Enjoy complete control over your privacy with our blackout and vertical blind options, ideal for any setting.",
  },
  {
    id: "energy-efficient",
    icon: (
      /* Thermometer icon â€” navy colour */
      <svg className="w-6 h-6 text-[#234896]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Energy Efficient",
    description:
      "Our wooden and honeycomb blinds offer excellent thermal properties, helping retain warmth in winter and cool air in summer.",
  },
  {
    id: "built-to-last",
    icon: (
      /* Diamond / sparkle icon â€” navy colour */
      <svg className="w-6 h-6 text-[#234896]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Built to Last",
    description:
      "We use only the finest materials and precision craftsmanship to ensure your window treatments stand the test of time.",
  },
];

/* ---------- Component ---------- */

export default function BeyondStyle() {
  return (
    <section
      id="beyond-style"
      aria-labelledby="beyond-style-heading"
      className="bg-[#eef2f7] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ============================================================
              Left Column â€” Kitchen image with shutters
          ============================================================ */}
          <div className="relative order-last lg:order-first">
            {/* Left border accent using brand navy */}
            <div className="relative overflow-hidden rounded-sm border-l-4 border-[#234896]">
              <Image
                src="/images/stock/photo-1757452608866-0b9c2f3e2d6b.jpg"
                alt="Kitchen with beautiful plantation shutters from Advenco"
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ============================================================
              Right Column â€” Text + Benefits Grid
          ============================================================ */}
          <div className="space-y-6">
            {/* Section label */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1e293b]">
              Why Advenco
            </p>

            {/* Main heading */}
            <h2
              id="beyond-style-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight"
            >
              Beyond{" "}
              <em
                className="font-bold italic"
                style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
              >
                Style
              </em>
            </h2>

            {/* Intro text */}
            <p className="text-[#64748b] leading-relaxed">
              At Advenco, we understand that your home is your sanctuary. Our window treatments
              are meticulously crafted to deliver exceptional benefits beyond aesthetics.
            </p>

            {/* 2Ã—2 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {benefits.map((benefit) => (
                <div key={benefit.id} id={`benefit-${benefit.id}`} className="space-y-2">
                  {/* Icon â€” navy background circle */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#eef2fc]">
                    {benefit.icon}
                  </div>
                  {/* Title */}
                  <h3 className="font-semibold text-[#1e293b] text-sm">
                    {benefit.title}
                  </h3>
                  {/* Description â€” muted grey, NOT blue */}
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
