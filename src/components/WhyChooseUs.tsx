/**
 * WhyChooseUs Component â€” Advenco Blinds & Shutters
 *
 * Two-column layout:
 *  - Left: Image of window blinds/shutters in a room setting
 *  - Right: Section label, large heading, body text
 *
 * Content from WordPress "Why Choose Advenco" section.
 * Design from the new Base44 reference â€” light grey background, large image,
 * serif italic heading, muted body text, and a "15+ Years of Excellence" badge
 * overlapping the image.
 */

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-[#f8f7f4] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ============================================================
              Left Column â€” Image with badge overlay
          ============================================================ */}
          <div className="relative">
            {/* Main image â€” left border accent matching the design */}
            <div className="relative overflow-hidden rounded-sm border-l-4 border-[#00aeef]">
              <Image
                src="/images/stock/photo-1745761264415-6acbdb47a0c7.jpg"
                alt="Beautiful room with Advenco window blinds and shutters"
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* "15+ Years of Excellence" dark badge overlapping image */}
            <div className="absolute bottom-6 right-0 lg:right-[-20px] bg-[#0f172a] text-white px-8 py-5 rounded-sm shadow-xl">
              <p className="text-4xl font-bold leading-none">15+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 mt-1">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* ============================================================
              Right Column â€” Text Content
          ============================================================ */}
          <div className="space-y-6">
            {/* Section label */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1e293b]" aria-hidden="true">
              Why Choose Us
            </p>

            {/* Main heading */}
            <h2
              id="why-choose-us-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight"
            >
              Why Choose Advenco Window Blinds and Shutters in{" "}
              <span className="font-bold italic" style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}>
                UK?
              </span>
            </h2>

            {/* Body text from WordPress */}
            <div className="space-y-4 text-[#64748b] leading-relaxed text-base">
              <p>
                At Advenco Window Blinds and Shutters in UK, we understand that your home is your
                sanctuary &mdash; a reflection of your personality and style. That&apos;s why we offer a wide
                range of window blinds in UK and window shutters in UK that are meticulously crafted
                to meet the diverse needs and preferences of our customers.
              </p>
              <p>
                Whether you&apos;re seeking privacy, light control, energy efficiency, or simply a touch
                of elegance, we have the perfect solution for you.
              </p>
            </div>

            {/* Feature bullet list */}
            <ul className="space-y-3 pt-2" aria-label="Key features">
              {[
                "Custom-made to your exact window dimensions",
                "Expert installation by our trained team",
                "Wide range of materials, styles and colours",
                "Price match guarantee — best value assured",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  {/* Teal bullet dot */}
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#00aeef]" aria-hidden="true" />
                  <span className="text-[#475569] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <a
              id="why-us-learn-more-btn"
              href="#contact"
              className="inline-flex items-center gap-2 text-[#00aeef] font-semibold text-sm hover:gap-4 transition-all duration-200"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
