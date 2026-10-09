/**
 * ContactSection Component â€” Advenco Blinds & Shutters
 *
 * Dark graphite (#0f172a) background section with two columns:
 *  - Left: "Bespoke Consultation" heading, contact details (phone, email), image
 *  - Right: "Request a Free Quote" form with fields (Name, Phone, Email, Message)
 *
 * Matches the Base44 design's dark contact section at the bottom of the page.
 * The form uses controlled state and shows a simple success message on submit.
 */

"use client";

import { useState, FormEvent } from "react";
import { seasonalCopy } from "@/data/seasonal";

/* ---------- Component ---------- */

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ---- Handle field changes ---- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ---- Handle form submission ---- */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#0f172a] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ============================================================
              Left Column â€” Contact Info
          ============================================================ */}
          <div className="space-y-8">
            {/* Section label */}
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00aeef]">
              Get In Touch
            </p>

            {/* Main heading */}
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight"
            >
              Bespoke{" "}
              <em
                className="font-bold italic"
                style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)" }}
              >
                Consultation
              </em>
            </h2>

            {/* Description */}
            <p className="text-white/65 text-base leading-relaxed max-w-md">
              Tell us about your space and we&apos;ll design the perfect window treatment
              solution &mdash; tailored entirely to your home.
            </p>

            {/* Contact details */}
            <div className="space-y-4 pt-2">
              {/* Phone */}
              <a
                href="tel:08000541880"
                id="contact-phone-link"
                className="flex items-center gap-4 group"
                aria-label="Call us free on 0800 054 1880"
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center border border-white/15 rounded-full group-hover:border-[#00aeef] group-hover:bg-[#00aeef]/10 transition-all">
                  <svg className="w-4 h-4 text-white/60 group-hover:text-[#00aeef] transition-colors" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest">Call Us Free</p>
                  <p className="text-white font-semibold text-sm mt-0.5 group-hover:text-[#00aeef] transition-colors">
                    0800 054 1880
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@advencoblindsandshutters.co.uk"
                id="contact-email-link"
                className="flex items-center gap-4 group"
                aria-label="Email us at info@advencoblindsandshutters.co.uk"
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center border border-white/15 rounded-full group-hover:border-[#00aeef] group-hover:bg-[#00aeef]/10 transition-all">
                  <svg className="w-4 h-4 text-white/60 group-hover:text-[#00aeef] transition-colors" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-[11px] uppercase tracking-widest">Email</p>
                  <p className="text-white font-semibold text-sm mt-0.5 group-hover:text-[#00aeef] transition-colors break-all">
                    info@advencoblindsandshutters.co.uk
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ============================================================
              Right Column â€” Quote Form
          ============================================================ */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-8">
              {seasonalCopy?.contactEyebrow ?? "Request A Free Quote"}
            </p>

            {submitted ? (
              /* ---- Success state ---- */
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#00aeef]/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#00aeef]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold">Thank You!</h3>
                <p className="text-white/60 text-sm">
                  We&apos;ve received your request and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              /* ---- Form ---- */
              <form
                onSubmit={handleSubmit}
                aria-label="Request a free quote form"
                className="space-y-6"
                noValidate
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span className="text-[#00aeef]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="form-input"
                    autoComplete="name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="form-label">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="form-input"
                    autoComplete="tel"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="text-[#00aeef]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="form-input"
                    autoComplete="email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#00aeef] hover:bg-[#0099d4] disabled:bg-[#00aeef]/50 text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-colors"
                  aria-label="Submit your free quote request"
                >
                  {submitting ? "Sending..." : seasonalCopy?.contactSubmit ?? "Get My Free Quote"}
                </button>

                <p className="text-white/35 text-xs text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
